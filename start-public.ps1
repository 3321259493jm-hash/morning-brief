$ErrorActionPreference = "Stop"

$siteRoot = $PSScriptRoot
$cloudflared = Join-Path $siteRoot "tools\cloudflared.exe"

if (-not (Test-Path $cloudflared)) {
  New-Item -ItemType Directory -Force -Path (Split-Path $cloudflared) | Out-Null
  Invoke-WebRequest -UseBasicParsing `
    -Uri "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe" `
    -OutFile $cloudflared
}

if (Test-Path (Join-Path $siteRoot ".runtime.json")) {
  $oldRuntime = Get-Content (Join-Path $siteRoot ".runtime.json") | ConvertFrom-Json
  Stop-Process -Id $oldRuntime.ServerPid,$oldRuntime.TunnelPid -Force -ErrorAction SilentlyContinue
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 0)
$listener.Start()
$port = $listener.LocalEndpoint.Port
$listener.Stop()

$server = Start-Process -FilePath "python" `
  -ArgumentList @("-m", "http.server", $port, "--bind", "127.0.0.1", "--directory", $siteRoot) `
  -WindowStyle Hidden -PassThru `
  -RedirectStandardOutput (Join-Path $siteRoot "server.log") `
  -RedirectStandardError (Join-Path $siteRoot "server-error.log")

Start-Sleep -Seconds 2
$local = Invoke-WebRequest -UseBasicParsing "http://127.0.0.1:$port"
if ($local.Content -notmatch 'id="app"') {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
  throw "Local site validation failed."
}

$tunnelLog = Join-Path $siteRoot "tunnel-error.log"
$tunnel = Start-Process -FilePath $cloudflared `
  -ArgumentList @("tunnel", "--url", "http://127.0.0.1:$port", "--no-autoupdate", "--protocol", "http2") `
  -WorkingDirectory $siteRoot -WindowStyle Hidden -PassThru `
  -RedirectStandardOutput (Join-Path $siteRoot "tunnel.log") `
  -RedirectStandardError $tunnelLog

[pscustomobject]@{ ServerPid = $server.Id; TunnelPid = $tunnel.Id; Port = $port } |
  ConvertTo-Json | Set-Content -Encoding ascii (Join-Path $siteRoot ".runtime.json")

$publicUrl = $null
for ($attempt = 0; $attempt -lt 20; $attempt++) {
  Start-Sleep -Seconds 1
  $match = [regex]::Match((Get-Content $tunnelLog -Raw -ErrorAction SilentlyContinue), 'https://[a-z0-9-]+\.trycloudflare\.com')
  if ($match.Success) {
    $publicUrl = $match.Value
    break
  }
}

if (-not $publicUrl) { throw "Cloudflare public URL was not created." }
$publicUrl | Set-Content -Encoding ascii (Join-Path $siteRoot "PUBLIC_URL.txt")
Write-Output "Public URL: $publicUrl"
Write-Output "Keep this computer online. Run stop-public.ps1 to close access."
