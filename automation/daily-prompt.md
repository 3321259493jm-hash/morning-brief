You are maintaining the static Chinese briefing website in this repository.

Goal: update only `data/issues.js` with a new issue for today's date in Asia/Shanghai. Perform live web research. Every factual statement must be supported by a directly accessible official source or article URL. Never invent a release, price, quota, date, benefit, limitation, vocabulary item, sentence, or source.

Technical rules:
- Read the existing `data/issues.js` and preserve its JavaScript schema exactly.
- Use current Asia/Shanghai date for `date` and `updatedAt`.
- Add or replace today's issue, set `status: "ready"`, sort newest first, and keep only the newest 7 issues.
- Change no file other than `data/issues.js`.
- Use plain valid JavaScript, UTF-8, and run `node --check data/issues.js` before finishing.
- Fetch every selected URL and confirm it is accessible. Prefer HTTP 200. Do not use search-result URLs.

AI updates (`ai.updates`):
- Select 3-6 genuinely new releases or changes from yesterday through today that a student can try or needs to know.
- Prioritize official product announcements for ChatGPT/OpenAI, Gemini, Claude, Grok, Meta AI, Copilot, Perplexity, Midjourney, Cursor, GitHub Copilot, Notion AI, Canva AI, Adobe AI, Qwen, DeepSeek, Zhipu, Kimi, Doubao, Tencent Yuanbao, and Baidu ERNIE.
- Exclude funding gossip, vague industry analysis, unsupported benchmark claims, and recycled old news.
- Each item needs: event, summary, howTo, impact, free, category, source{name,published,url}.
- `summary`: what was released and the meaningful change.
- `howTo`: executable steps and where the feature is available.
- `impact`: concrete student scenarios.
- `free`: price, account, region, rollout, and quota limitations; explicitly say when the official source does not specify them.

Free AI resources (`ai.deals`):
- Select 4-8 high-value benefits that remain claimable or usable today. These do not have to be newly launched today.
- Re-check their validity every day and prefer at least 2 newly discovered or more useful resources over repeating the identical list.
- Valid categories include: long-term free web/app access; new-user API credits; daily/monthly replenishing free generations or calls; verified student/education benefits; limited-time trials or discounts; downloadable open model weights with a clear license; useful free single-use tools for papers, translation, images, music, video, or study.
- Each item needs: event, summary, howTo, impact, free, category, source{name,published,url}.
- The official pricing/help/activity page, official model card, official GitHub repository, official Hugging Face organization, or official app page must support the benefit. A third-party roundup is not sufficient.
- State the exact quota, eligibility, region and deadline only when the official source states them. Otherwise say "官方未说明".
- Exclude expired offers, items that require payment before use, unclear credit-card trials, or inaccessible sources.

English reading (`english.articles`):
- Select 2-3 articles published within the last 14 days, or with compelling current relevance, that are fully readable for free without subscription login.
- Prioritize sources commonly used by or stylistically close to Chinese postgraduate English exams: The Economist, The Atlantic, The New York Times, The Guardian, BBC, Scientific American, Nature, National Geographic, Harvard Business Review, and NPR.
- Select varied sources and topics. Topics are limited to society, economics, business, technology trends, education, culture, environment, and health. Avoid highly specialized AI, semiconductor, or engineering papers.
- Difficulty should approximate postgraduate English II: useful abstract vocabulary, layered sentences, and clear argumentative structure.
- Each article needs: title, source, published, url, readingTime, topic, summary, reason, vocabulary, sentences.
- `summary`: a substantial Chinese overview of the article's main claim, evidence, structure and conclusion.
- `reason`: an array of 4-5 Chinese points covering exam theme, discourse structure, likely question types, vocabulary, and writing value.
- `vocabulary`: 8-10 authentic words or phrases from the article, each with word, phonetic, part, translation.
- `sentences`: exactly 3 short excerpts from the article. Each has original, analysis, translation. `analysis` is an array of at least 4 Chinese points identifying the sentence core, clauses, modifiers, logical relation, and useful construction.
- Quote only the minimum short excerpts required for teaching. Do not reproduce paragraphs or large portions of copyrighted text.
- If a strong article needs free registration but its full text cannot be verified, do not include it.

Quality bar:
- Concise AI copy, detailed English instruction.
- Avoid consecutive days with the same media and closely similar reading topics when alternatives exist.
- All conclusions and information must identify their real source. If a claim cannot be verified, omit it.
