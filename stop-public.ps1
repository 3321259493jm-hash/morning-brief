$runtimePath = Join-Path $PSScriptRoot ".runtime.json"
if (-not (Test-Path $runtimePath)) {
  Write-Output "No public site process was recorded."
  exit 0
}

$runtime = Get-Content $runtimePath | ConvertFrom-Json
Stop-Process -Id $runtime.ServerPid,$runtime.TunnelPid -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $runtimePath -Force
Write-Output "Public access stopped."
