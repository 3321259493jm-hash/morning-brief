const app = document.querySelector("#app");
const homeLink = document.querySelector(".home-link");
const data = window.BRIEFING_DATA || { issues: [] };

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
})[char]);

function beijingParts(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit",
    weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
  }).formatToParts(date).reduce((out, part) => ({ ...out, [part.type]: part.value }), {});
}

function updateClock() {
  const p = beijingParts();
  document.querySelector("#beijing-time").textContent = `北京时间 · ${p.hour}:${p.minute}`;
}

function dateLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00+08:00`);
  const monthDay = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit" }).format(date);
  const weekday = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", weekday: "short" }).format(date);
  return { monthDay, weekday };
}

function latestIssue() {
  return [...data.issues].sort((a, b) => b.date.localeCompare(a.date))[0];
}

function routeHref(type, date) {
  return `#/${type}/${date}`;
}

function renderHome() {
  const latest = latestIssue();
  const latestDate = latest?.date || "";
  const statusText = latest?.status === "ready" ? "今日简报已更新" : "首次可靠来源简报将在自动任务运行后写入";
  app.innerHTML = `
    <section class="home-page">
      <div class="hero">
        <div class="hero-content">
          <p class="eyebrow">Morning Intelligence</p>
          <h1>每天早上，<br>只看真正有用的。</h1>
          <p class="hero-copy">为个人用户筛选刚上线的 AI 工具、免费额度与实用方法，再配上接近考研英语二难度的高质量阅读。少一点噪音，多一点今天就能用的东西。</p>
          <div class="update-pill"><span class="pulse"></span> 每天北京时间 08:00 更新 · ${escapeHtml(statusText)}</div>
        </div>
        <div class="hero-cards">
          <a class="portal-card ai" href="${routeHref("ai", latestDate)}">
            <div class="portal-top"><span class="portal-icon">✦</span><span class="portal-arrow">→</span></div>
            <div><h2>AI 资讯</h2><p>新品 · 免费资源 · 模型工具 · 实用技巧</p></div>
          </a>
          <a class="portal-card english" href="${routeHref("english", latestDate)}">
            <div class="portal-top"><span class="portal-icon">Aa</span><span class="portal-arrow">→</span></div>
            <div><h2>英语阅读</h2><p>2–3 篇精选 · 重点词汇 · 长难句精析</p></div>
          </a>
        </div>
      </div>
      <div class="home-notes">
        <div class="note-panel"><strong>今日筛选原则</strong><p>优先官方公告和官方产品页；媒体信息只作补充。没有可核验来源的信息不会进入简报，所有事实条目都附原文链接。</p></div>
        <div class="note-panel"><strong>7 天轻量归档</strong><p>日期滚栏自动跳转历史内容。第 8 天更新时，最旧一期会从主页数据中移除。</p></div>
      </div>
    </section>`;
}

function dateStrip(type, activeDate) {
  return `<div class="date-strip-wrap"><div class="date-strip" aria-label="选择历史日期">${[...data.issues]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(issue => {
      const d = dateLabel(issue.date);
      return `<a class="date-chip ${issue.date === activeDate ? "active" : ""}" href="${routeHref(type, issue.date)}"><span>${escapeHtml(d.weekday)}</span><strong>${escapeHtml(d.monthDay)}</strong></a>`;
    }).join("")}</div></div>`;
}

function pendingBanner() {
  return `<div class="status-banner"><span class="status-icon">!</span><div><strong>本期等待可靠来源内容</strong>页面结构已经就绪，但不会用未经核验或编造的消息填充。每日任务会检索官方公告和原文，在确认发布日期、免费规则与使用方法后更新这里。</div></div>`;
}

function newsCard(item, index) {
  const source = item.source || {};
  return `<article class="news-card ${index === 0 && item.featured ? "featured" : ""}">
    <div>
      <span class="card-tag">${escapeHtml(item.category || "更新")}</span>
      <h3>${escapeHtml(item.event)}</h3>
      <div class="meta"><span>${escapeHtml(source.name || "官方来源")}</span><span>${escapeHtml(source.published || "")}</span></div>
      ${item.summary ? `<p class="card-summary">${escapeHtml(item.summary)}</p>` : ""}
    </div>
    <div>
      <dl class="facts">
        <div class="fact-row"><dt>学生有什么用</dt><dd>${escapeHtml(item.impact)}</dd></div>
        <div class="fact-row"><dt>怎么使用</dt><dd>${escapeHtml(item.howTo)}</dd></div>
        <div class="fact-row"><dt>费用 / 限制</dt><dd>${escapeHtml(item.free)}</dd></div>
      </dl>
      <div class="source-line"><span>原始出处</span><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">查看官方来源 ↗</a></div>
    </div>
  </article>`;
}

function renderAi(issue) {
  const legacySections = issue.ai?.sections || [];
  const legacyDeals = legacySections.find(section => section.id === "free")?.items || [];
  const legacyUpdates = legacySections.filter(section => section.id !== "free").flatMap(section => section.items || []);
  const updates = issue.ai?.updates || legacyUpdates;
  const deals = issue.ai?.deals || legacyDeals;
  const empty = (icon, title, copy) => `<div class="empty-card"><div class="empty-icon">${icon}</div><h3>${title}</h3><p>${copy}</p></div>`;
  return `
    <section class="section-block" id="updates">
      <div class="section-heading"><h2>今天 AI 更新了什么</h2><span>只收录今天能实际尝试的新内容</span></div>
      <div class="news-grid">${updates.length ? updates.map(newsCard).join("") : empty("⌁", "今天暂无已核验的新内容", "没有值得学生立刻尝试的可靠新增时，本栏目不会为了凑数加入旧闻或推测。")}</div>
    </section>
    <section class="section-block deals-section" id="deals">
      <div class="section-heading"><h2>今日 AI 薅羊毛</h2><span>免费额度 · 学生优惠 · 限时活动</span></div>
      <div class="news-grid deals-grid">${deals.length ? deals.map(newsCard).join("") : empty("¥", "今天暂无可靠优惠", "仅展示能核实领取入口、适用地区、截止时间和免费限制的活动。")}</div>
    </section>`;
}

function readingCard(article, index) {
  const vocab = (article.vocabulary || []).map(v => `<span class="vocab"><strong>${escapeHtml(v.word)}</strong> · ${escapeHtml(v.translation)}</span>`).join("");
  const sentence = article.sentence || {};
  return `<article class="reading-card">
    <div class="reading-index">0${index + 1}</div>
    <div>
      <h3>${escapeHtml(article.title)}</h3>
      <span class="source-badge">${escapeHtml(article.source)}</span><span class="source-badge">${escapeHtml(article.published)}</span><span class="source-badge">约 ${escapeHtml(article.readingTime)} 分钟</span>
      <p><strong>核心内容：</strong>${escapeHtml(article.summary)}</p>
      <p><strong>推荐理由：</strong>${escapeHtml(article.reason)}</p>
      <div class="analysis-grid">
        <div class="analysis-box"><h4>重点词汇</h4><div class="vocab-list">${vocab}</div></div>
        <div class="analysis-box"><h4>长难句精析</h4><p class="sentence">${escapeHtml(sentence.original)}</p><p class="translation">${escapeHtml(sentence.analysis)}<br><strong>译文：</strong>${escapeHtml(sentence.translation)}</p></div>
      </div>
      <a class="read-original" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">免费阅读原文 ↗</a>
    </div>
  </article>`;
}

function renderEnglish(issue) {
  const articles = issue.english?.articles || [];
  return `<section class="section-block"><div class="section-heading"><h2>今日精选阅读</h2><span>免费可读 · 主题不重复</span></div><div class="reading-list">${articles.length ? articles.map(readingCard).join("") : `<div class="empty-card"><div class="empty-icon">Aa</div><h3>今日文章正在筛选</h3><p>必须同时满足近两周、免费可读、来源可靠、难度接近英语二，并且与近期推荐不重复；没有合适文章时不会用占位文章冒充。</p></div>`}</div></section>`;
}

function renderIssue(type, requestedDate) {
  const issue = data.issues.find(i => i.date === requestedDate) || latestIssue();
  if (!issue) return renderHome();
  const isAi = type === "ai";
  const title = isAi ? "AI 与科技生活简报" : "考研英语每日阅读";
  const intro = isAi ? issue.ai?.intro : issue.english?.intro;
  app.innerHTML = `<article class="issue-page">
    <header class="issue-hero">
      <div><p class="issue-kicker">${isAi ? "AI DAILY BRIEF" : "ENGLISH READING"}</p><h1>${title}</h1><p class="issue-deck">${escapeHtml(intro)}</p></div>
      <div class="issue-date-big"><span>北京时间 08:00</span><strong>${escapeHtml(issue.date)}</strong></div>
    </header>
    ${dateStrip(type, issue.date)}
    ${issue.status !== "ready" ? pendingBanner() : ""}
    ${isAi ? renderAi(issue) : renderEnglish(issue)}
  </article>`;
}

function router() {
  const path = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const type = path[0];
  homeLink.classList.toggle("visible", Boolean(type));
  if (type === "ai" || type === "english") renderIssue(type, path[1]);
  else renderHome();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", router);
updateClock();
setInterval(updateClock, 30000);
router();
