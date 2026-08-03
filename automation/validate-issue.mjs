import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync("data/issues.js", "utf8");
const context = { window: {} };
vm.runInNewContext(source, context);

const data = context.window.BRIEFING_DATA;
if (!data || !Array.isArray(data.issues) || data.issues.length === 0) {
  throw new Error("BRIEFING_DATA.issues is missing or empty.");
}

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());
const issue = data.issues.find(item => item.date === today);

if (!issue || issue.status !== "ready") {
  throw new Error(`A ready issue for ${today} was not generated.`);
}
if (data.issues.length > 7) throw new Error("More than 7 issues were retained.");
if ((issue.ai?.updates?.length || 0) < 3) throw new Error("Fewer than 3 AI updates were generated.");
if ((issue.ai?.deals?.length || 0) < 4) throw new Error("Fewer than 4 AI deals were generated.");
if ((issue.english?.articles?.length || 0) < 2) throw new Error("Fewer than 2 English articles were generated.");

const urls = [];
for (const item of [...issue.ai.updates, ...issue.ai.deals]) {
  if (!item.event || !item.summary || !item.howTo || !item.impact || !item.free || !item.source?.url) {
    throw new Error(`Incomplete AI item: ${item.event || "unknown"}`);
  }
  urls.push(item.source.url);
}
const normalizeTitle = value => value.trim().toLowerCase().replace(/\s+/g, " ");
const normalizeUrl = value => {
  const url = new URL(value);
  url.hash = "";
  return url.href.replace(/\/$/, "");
};
const previousArticleUrls = new Set();
const previousArticleTitles = new Set();
for (const previousIssue of data.issues.filter(item => item.date !== today)) {
  for (const article of previousIssue.english?.articles || []) {
    if (article.url) previousArticleUrls.add(normalizeUrl(article.url));
    if (article.title) previousArticleTitles.add(normalizeTitle(article.title));
  }
}
const todayArticleUrls = new Set();
const todayArticleTitles = new Set();

for (const article of issue.english.articles) {
  if (!article.url || !Array.isArray(article.reason) || article.reason.length < 4) {
    throw new Error(`Incomplete article: ${article.title || "unknown"}`);
  }
  const normalizedUrl = normalizeUrl(article.url);
  const normalizedTitle = normalizeTitle(article.title || "");
  if (previousArticleUrls.has(normalizedUrl) || previousArticleTitles.has(normalizedTitle)) {
    throw new Error(`English article was used on an earlier date: ${article.title}`);
  }
  if (todayArticleUrls.has(normalizedUrl) || todayArticleTitles.has(normalizedTitle)) {
    throw new Error(`Duplicate English article in today's issue: ${article.title}`);
  }
  todayArticleUrls.add(normalizedUrl);
  todayArticleTitles.add(normalizedTitle);
  if (!Array.isArray(article.vocabulary) || article.vocabulary.length < 8) {
    throw new Error(`Not enough vocabulary: ${article.title}`);
  }
  if (!Array.isArray(article.sentences) || article.sentences.length !== 3) {
    throw new Error(`Exactly 3 sentences are required: ${article.title}`);
  }
  for (const sentence of article.sentences) {
    if (!Array.isArray(sentence.analysis) || sentence.analysis.length < 4) {
      throw new Error(`Sentence analysis is too short: ${article.title}`);
    }
  }
  urls.push(article.url);
}

for (const value of urls) {
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error(`Non-HTTPS source: ${value}`);
}

console.log(`Validated ${today}: ${issue.ai.updates.length} updates, ${issue.ai.deals.length} deals, ${issue.english.articles.length} articles.`);
