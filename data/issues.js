/*
 * Plain JavaScript keeps the site usable without a build step.
 * Every factual item must include a directly verifiable source URL.
 */
window.BRIEFING_DATA = {
  updatedAt: "2026-08-03T13:12:56+08:00",
  issues: [
    {
      date: "2026-08-03",
      status: "ready",
      ai: {
        intro: "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        updates: [
          {
            event: "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            summary: "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            howTo: "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            impact: "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            free: "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            category: "Gemini 更新",
            source: { name: "Google 官方博客", published: "2026-07-31", url: "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/" }
          },
          {
            event: "Google: Glanceboard 示例工程（2026-07-31）",
            summary: "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            howTo: "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            impact: "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            free: "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            category: "AI 实用案例",
            source: { name: "Google 官方博客", published: "2026-07-31", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/" }
          },
          {
            event: "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            summary: "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            howTo: "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型（例如文档中建议的 Gemini 3.1 Pro / Gemini 3.6 Flash）；企业账号可能需管理员在组织策略中启用新模型。",
            impact: "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            free: "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            category: "Copilot 提醒",
            source: { name: "GitHub 官方更新日志", published: "2026-07-31", url: "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/" }
          }
        ],
        deals: [
          {
            event: "Google Colab（免费托管 Jupyter 环境）",
            summary: "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            howTo: "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            impact: "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            free: "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            category: "长期免费云环境",
            source: { name: "Google Colab FAQ", published: "官方未说明", url: "https://research.google.com/colaboratory/faq.html" }
          },
          {
            event: "GitHub Student Developer Pack（学生礼包）",
            summary: "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            howTo: "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            impact: "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            free: "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            category: "学生/教育权益",
            source: { name: "GitHub Student Developer Pack", published: "官方未说明", url: "https://education.github.com/pack" }
          },
          {
            event: "可下载开源模型权重：Mistral-7B（Hugging Face）",
            summary: "在 Hugging Face Hub 上可找到 Mistral-7B 的模型卡与可下载权重，适合教学与本地复现实验。",
            howTo: "访问模型页并按 model card 指南使用 transformers / diffusers / accelerate 下载与加载模型（示例页见下方）。",
            impact: "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            free: "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            category: "可下载开源模型",
            source: { name: "Hugging Face – Mistral 模型卡", published: "官方未说明", url: "https://huggingface.co/mistralai/Mistral-7B-v0.1" }
          },
          {
            event: "Hugging Face Spaces（免费托管小型演示应用）",
            summary: "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            howTo: "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            impact: "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            free: "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            category: "长期免费托管",
            source: { name: "Hugging Face Spaces 文档", published: "官方未说明", url: "https://huggingface.co/docs/hub/spaces" }
          },
          {
            event: "Stable Diffusion 可下载权重（CompVis on Hugging Face）",
            summary: "CompVis 在 Hugging Face 上提供 Stable Diffusion v1-4 的模型卡与可下载权重（带开源许可说明），适合图像生成教学与离线推理。",
            howTo: "访问模型页（https://huggingface.co/CompVis/stable-diffusion-v1-4），使用 🤗 Diffusers 库或官方说明加载权重并运行本地推理。",
            impact: "对课堂图像生成、视觉艺术课程或 multimodal 项目非常有用；学生能通过本地环境复现 prompt-engineering 与模型微调实验。",
            free: "模型权重以 Hugging Face 上的许可证 (OpenRAIL-M/模型卡) 为准，使用时须遵守许可与限制。",
            category: "可下载开源模型",
            source: { name: "Hugging Face – CompVis Stable Diffusion", published: "官方未说明", url: "https://huggingface.co/CompVis/stable-diffusion-v1-4" }
          },
          {
            event: "Diffusers（Hugging Face 开源库）",
            summary: "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            howTo: "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            impact: "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            free: "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            category: "开源工具",
            source: { name: "Hugging Face – Diffusers (GitHub)", published: "官方未说明", url: "https://github.com/huggingface/diffusers" }
          }
        ]
      },
      english: {
        intro: "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        articles: [
          {
            title: "Students created AI rules they hope schools will adopt",
            source: "NPR · Education",
            published: "2026-07-30",
            url: "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            readingTime: "10",
            topic: "教育 / AI 素养 / 校园规则",
            summary: "98 名高中生在仿制的参议院会议厅中起草并通过‘Students First Act’，建议尽早教授 AI 素养、禁止计分考试使用 AI、并在怀疑不当使用时允许口头答辩；文章讨论了资源不均、检测误判与政策可行性。",
            reason: [
              "主题贴近英语二教育与社会类考题，非常适合作为议论文素材。",
              "叙述结构为事件报道 + 引语 + 条款列举，便于训练信息定位与推理题。",
              "包含 legislation、consensus、provision 等抽象名词，有助积累学术词汇。",
              "长句结构丰富，含定语从句、what 从句与让步结构，利于拆句练习。"
            ],
            vocabulary: [
              { word: "legislation", phonetic: "/ˌledʒɪsˈleɪʃn/", part: "n.", translation: "立法；法规" },
              { word: "navigate", phonetic: "/ˈnævɪɡeɪt/", part: "v.", translation: "应对；设法处理" },
              { word: "literacy", phonetic: "/ˈlɪtərəsi/", part: "n.", translation: "素养；读写能力" },
              { word: "consensus", phonetic: "/kənˈsensəs/", part: "n.", translation: "共识；一致意见" },
              { word: "provision", phonetic: "/prəˈvɪʒn/", part: "n.", translation: "条款；规定" },
              { word: "coherent", phonetic: "/kəʊˈhɪərənt/", part: "adj.", translation: "连贯的；有条理的" },
              { word: "contentious", phonetic: "/kənˈtenʃəs/", part: "adj.", translation: "有争议的" },
              { word: "inequity", phonetic: "/ɪnˈekwəti/", part: "n.", translation: "不公平；不平等" }
            ],
            sentences: [
              {
                original: "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                analysis: [
                  "主干：The students gathered ... and attempted ...，两个并列谓语。",
                  "most of them high school juniors and seniors 是对 students 的补充说明。",
                  "what the real, adult Congress has largely failed to do 为宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体列举 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                translation: "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                original: "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                analysis: [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明现场。",
                  "only to be revived 表示出乎意料的结果。",
                  "by 后并列短语说明法案被挽救的方式。",
                  "含有短语结构 flurry of ... 适合仿写训练。"
                ],
                translation: "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                original: "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                analysis: [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                translation: "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            title: "From Felix the Cat to MTV: MoMA explores a century of animation",
            source: "The Guardian · Culture",
            published: "2026-07-31",
            url: "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            readingTime: "8",
            topic: "文化 / 艺术 / 媒介史",
            summary: "MoMA 的展览 It's Alive! 回顾近百年的动画发展，讨论早期角色动画、战后独立创作者、实验电影与数字时代的演变，并解释展览为何采用无声放映以突出视觉语言。",
            reason: [
              "文化艺术与媒介史适合作为英语二人文主题。",
              "文章通过历史线索与展览策展人引语推进，利于训练主旨与论证结构分析。",
              "包含 anthropomorphic、manifesto 等高阶词汇。",
              "长句含并列、定语与分词结构，适合拆句训练。"
            ],
            vocabulary: [
              { word: "anthropomorphic", phonetic: "/ˌænθrəpəˈmɔːfɪk/", part: "adj.", translation: "拟人化的" },
              { word: "outlandish", phonetic: "/aʊtˈlændɪʃ/", part: "adj.", translation: "古怪夸张的" },
              { word: "manifesto", phonetic: "/ˌmænɪˈfestəʊ/", part: "n.", translation: "宣言" },
              { word: "invigorate", phonetic: "/ɪnˈvɪɡəreɪt/", part: "v.", translation: "使振兴；激励" },
              { word: "aspire", phonetic: "/əˈspaɪər/", part: "v.", translation: "渴望；立志" },
              { word: "profound", phonetic: "/prəˈfaʊnd/", part: "adj.", translation: "深刻的；深远的" },
              { word: "inherent", phonetic: "/ɪnˈhɪərənt/", part: "adj.", translation: "内在的；固有的" },
              { word: "prominence", phonetic: "/ˈprɒmɪnəns/", part: "n.", translation: "重要地位；显著" }
            ],
            sentences: [
              {
                original: "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                analysis: [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，强调多样性。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                translation: "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                original: "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                analysis: [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是并列过去分词短语，说明动机。",
                  "creating an animated film 是现在分词短语，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators。"
                ],
                translation: "在第二次世界大战带来的创作需求激励下，又因曾为罗斯福 1944 年大选制作宣传动画而受到鼓舞，休布利向往一种由独立创作者推动的动画，这些创作者能够深入介入重要社会议题和深刻的艺术问题。"
              },
              {
                original: "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                analysis: [
                  "In an effort to do 表示目的。",
                  "make + 宾语 + 形容词 构成使役结构：make the artistry more accessible。",
                  "主句：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随结构，表示结果/附带效果。"
                ],
                translation: "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    },
    {
      date: "2026-08-02",
      status: "ready",
      ai: {
        intro: "只看最近一周内（优先昨天到今天）官方发布的产品或功能变更，说明学生如何上手与可能的免费/限制信息。",
        updates: [
          {
            event: "Google: Gemini 产品包与 Spark/Flash 功能更新（2026-07-31）",
            impact: "在写作、课堂笔记整理与快速问答场景，Gemini Spark/Flash 的响应速度与浏览器/应用整合能减少来回复制，提高工作流效率；学生可在支持地区尝试用 Spark 进行快速草稿与翻译。",
            howTo: "参阅 Google 官方博客说明，打开 Gemini App 或 Chrome 扩展（已获推送的账号），在模型选择器中切换到 Gemini Spark / Flash。官方范例与说明见下方链接。",
            free: "官方文档声明部分功能面向 Gemini 用户推出，但明确写明某些模型或功能对欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费、配额与地域滚动上线以账号和地区为准（官方未说明全面免费细节）。",
            category: "Gemini 更新",
            summary: "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            event: "Google: Glanceboard（示例工程）发布，演示用 Gemini Flash 生成每日看板（2026-07-31）",
            impact: "对学生而言是可复刻的工程案例：把日历、天气与学习计划喂给模型，生成 e-ink 或网页看板，适合作为课程项目或作品集演示。",
            howTo: "查看官方文章并参考开源仓库（Google 提供 Glanceboard 示例代码）；用 Google Calendar API + 本地轻量服务器 + Gemini 图像/Flash 接口生成每日卡片并推送到显示设备或网页。",
            free: "官方案例没有提供统一免费托管服务；复刻耗费取决于用于的 API 与硬件，具体配额与费用以各 API 官方页面为准（官方未说明统一免费额度）。",
            category: "AI 实用案例",
            summary: "Google 展示了用 Gemini 3.6 Flash 与 Nano Banana 组成的 Glanceboard 案例，并开源示例代码。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            event: "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            impact: "使用 Copilot 的学生与开发者若仍依赖被弃用的 Gemini 2.5 Pro / 3 Flash 版本可能遇到可用性中断；需切换到官方推荐的替代模型以维持行内补全、Chat 与 Agent 功能。",
            howTo: "打开 Copilot 设置中的模型选择器，参照变更建议将工作流迁移到官方推荐的替代模型；企业或组织账号可能需管理员在策略中启用目标模型。",
            free: "可用性取决于你的 Copilot 订阅、组织策略与模型权限；官方公告未新增免费额度或更改既有计费规则。",
            category: "Copilot 提醒",
            summary: "GitHub 于 2026-07-31 在 changelog 发布，弃用 Gemini 2.5 Pro 与 Gemini 3 Flash，并给出替代模型建议。",
            source: {
              name: "GitHub 官方更新日志",
              published: "2026-07-31",
              url: "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        deals: [
          {
            event: "Google Colab（免费托管 Jupyter 环境）",
            summary: "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问（资源非保证，存在使用限制）。",
            howTo: "访问 https://colab.research.google.com 并用 Google 帐号登录；新建笔记本，选择 Runtime 类型访问 GPU/TPU（资源按使用与优先级分配）。",
            impact: "学生可以在浏览器中运行 ML 练习、训练小型模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发。",
            free: "官方说明：Colab 免费可用，但资源不是保证且会根据使用情况限制；精确配额与优先级官方未说明。",
            category: "长期免费云环境",
            source: {
              name: "Google Colab FAQ",
              published: "官方未说明",
              url: "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            event: "GitHub Student Developer Pack（学生礼包）",
            summary: "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于做课程项目与搭建作品集。",
            howTo: "访问 https://education.github.com/pack，按照页面说明验证学校邮箱并申请 Student Pack。",
            impact: "通过 Student Pack，学生可免费获得如 GitHub Pro、云服务试用额度与开发者工具，有助于课程项目部署和学习。",
            free: "各厂商条目中会写明资格与时限；整体页面列出每项优惠，但具体配额与资格以相应服务条款为准。",
            category: "学生/教育权益",
            source: {
              name: "GitHub Student Developer Pack",
              published: "官方未说明",
              url: "https://education.github.com/pack"
            }
          },
          {
            event: "可下载与复现的开源大模型权重：Mistral（Hugging Face 上的模型卡）",
            summary: "在 Hugging Face Hub 上可以找到 Mistral 等开源模型的 model card 与可下载权重，适合教学与本地复现研究。",
            howTo: "访问模型页（示例：https://huggingface.co/mistralai/Mistral-7B-v0.1），按 Hugging Face 指引用 transformers/accelerate 下载与加载模型。",
            impact: "学生能在本地或学校计算资源上复现实验、微调小模型或做课程演示；便于理解模型内部与工程化流程。",
            free: "模型权重与许可证请参阅对应 Hugging Face 模型页；若模型有商业或使用限制，model card 会注明；若无说明则视为官方未说明。",
            category: "可下载开源模型",
            source: {
              name: "Hugging Face – Mistral 模型卡",
              published: "官方未说明",
              url: "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            event: "Hugging Face Spaces（免费托管小型演示应用）",
            summary: "Hugging Face Spaces 允许在 Hub 上免费发布 Gradio、Streamlit 或静态演示，适合展示模型与课堂项目。",
            howTo: "参考文档并在 https://huggingface.co/spaces 创建你的 Space，选择 SDK（Gradio / Streamlit /Static）并推送代码。",
            impact: "学生和教员可以把课程作业部署为交互式演示，便于评审和展示成果。",
            free: "基础 Spaces 可免费创建；GPU/私有化或增强运算需升级为付费计划，具体配额与限制见 Hugging Face 文档（官方未说明具体免费配额）。",
            category: "长期免费托管",
            source: {
              name: "Hugging Face Spaces 文档",
              published: "官方未说明",
              url: "https://huggingface.co/docs/hub/spaces"
            }
          }
        ]
      },
      english: {
        intro: "英文学术阅读：精选 3 篇权威媒体近两周内的可免费阅读全文（教育/商业/文化类），并给出词汇与短句精读。",
        articles: [
          {
            title: "Students created AI rules they hope schools will adopt",
            source: "NPR · Education",
            published: "2026-07-30",
            url: "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            readingTime: "10",
            topic: "教育 / AI 素养 / 校园规则",
            summary: "来自美国 50 个州的 98 名高中生在模拟参议院中起草校园 AI 使用法案，建议在课堂设备可用时即教授 AI 素养、禁止计分考试使用 AI，并允许教师在怀疑不当使用时要求学生进行口头答辩，文章讨论了资源不均、检测误判与政策可行性等争点。",
            reason: [
              "主题贴合考研英语社会与教育类命题，易展开议论文写作。",
              "文章结构为事件报道 + 引语 + 条款列举，适合训练推理题与信息定位题型。",
              "包含 legislation、consensus、provision 等抽象名词，有助积累学术词汇。",
              "长句结构丰富，含定语从句、what 从句与让步结构，适合句子分析练习。"
            ],
            vocabulary: [
              { word: "legislation", phonetic: "/ˌledʒɪsˈleɪʃn/", part: "n.", translation: "立法；法规" },
              { word: "navigate", phonetic: "/ˈnævɪɡeɪt/", part: "v.", translation: "应对；设法处理" },
              { word: "literacy", phonetic: "/ˈlɪtərəsi/", part: "n.", translation: "素养；读写能力" },
              { word: "consensus", phonetic: "/kənˈsensəs/", part: "n.", translation: "共识；一致意见" },
              { word: "provision", phonetic: "/prəˈvɪʒn/", part: "n.", translation: "条款；规定" },
              { word: "coherent", phonetic: "/kəʊˈhɪərənt/", part: "adj.", translation: "连贯的；有条理的" },
              { word: "contentious", phonetic: "/kənˈtenʃəs/", part: "adj.", translation: "有争议的" },
              { word: "inequity", phonetic: "/ɪnˈekwəti/", part: "n.", translation: "不公平；不平等" },
              { word: "guardrail", phonetic: "/ˈɡɑːdreɪl/", part: "n.", translation: "防护规则；约束机制" },
              { word: "oral defense", phonetic: "/ˈɔːrəl dɪˈfens/", part: "n.", translation: "口头答辩" }
            ],
            sentences: [
              {
                original: "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                analysis: [
                  "主干：The students gathered ... and attempted ...，两个谓语并列。",
                  "most of them high school juniors and seniors 是补充说明 students 的构成。",
                  "what the real, adult Congress has largely failed to do 为宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体解释 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                translation: "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                original: "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                analysis: [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明现场。",
                  "watch the events unfold 使用 watch + 宾语 + 动词原形结构。",
                  "only to be revived 表示出乎意料的结果。",
                  "by 后三个并列名词短语说明法案被挽救的方式。"
                ],
                translation: "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                original: "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                analysis: [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                translation: "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            title: "India wants to join the strawberry superpowers",
            source: "BBC News · Business",
            published: "2026-07-30",
            url: "https://www.bbc.co.uk/news/articles/c8x274xxxpwo",
            readingTime: "8",
            topic: "商业 / 农业 / 技术创新",
            summary: "文章讨论印度草莓产业如何通过无土栽培、气候控制与 AI 预测降低损失并培育本土耐热品种，兼顾成本、供应链与技术应用。",
            reason: [
              "兼具商业成本与技术创新，适合考研英语产业转型类话题。",
              "结构包括背景、农户案例与专家评论，便于训练信息归纳与论证链分析。",
              "含 horticultural、quarantine、indigenous 等学术词汇。",
              "文中长句含让步与并列结构，适合拆句训练。"
            ],
            vocabulary: [
              { word: "labour-intensive", phonetic: "/ˌleɪbər ɪnˈtensɪv/", part: "adj.", translation: "劳动密集型的" },
              { word: "outlay", phonetic: "/ˈaʊtleɪ/", part: "n.", translation: "支出；费用" },
              { word: "horticultural", phonetic: "/ˌhɔːtɪˈkʌltʃərəl/", part: "adj.", translation: "园艺的" },
              { word: "quarantine", phonetic: "/ˈkwɒrəntiːn/", part: "n./v.", translation: "检疫；隔离" },
              { word: "substrate", phonetic: "/ˈsʌbstreɪt/", part: "n.", translation: "培养基；基质" },
              { word: "indigenous", phonetic: "/ɪnˈdɪdʒənəs/", part: "adj.", translation: "本土的；本地原生的" },
              { word: "climate-resilient", phonetic: "/ˈklaɪmət rɪˈzɪliənt/", part: "adj.", translation: "具有气候适应力的" },
              { word: "hydroponics", phonetic: "/ˌhaɪdrəˈpɒnɪks/", part: "n.", translation: "水培；无土栽培" },
              { word: "cultivar", phonetic: "/ˈkʌltɪvɑːr/", part: "n.", translation: "栽培品种" },
              { word: "pinpoint", phonetic: "/ˈpɪnpɔɪnt/", part: "v.", translation: "精确确定" }
            ],
            sentences: [
              {
                original: "Despite that success the industry still relies on varieties that are imported from California, Florida, Italy and Spain, as no one in India has developed a domestic plant.",
                analysis: [
                  "主干：the industry still relies on varieties。",
                  "Despite that success 是让步介词短语。",
                  "that are imported ... 是限制性定语从句，修饰 varieties。",
                  "as 引导原因状语从句，说明依赖进口的原因。",
                  "has developed 使用现在完成时，强调截至目前仍未培育成功。"
                ],
                translation: "尽管取得了这些成绩，该产业仍依赖从加利福尼亚、佛罗里达、意大利和西班牙进口的品种，因为印度至今还没有培育出本土草莓品种。"
              },
              {
                original: "The goal is to fast-track the development of India's first indigenous, climate-resilient strawberry cultivar that matches the large fruit size and firm texture of foreign varieties while natively tolerating Indian heatwaves.",
                analysis: [
                  "主干：The goal is to fast-track the development，to fast-track 为不定式作表语。",
                  "of India's first ... cultivar 修饰 development，说明研发对象。",
                  "that matches ... 是限制性定语从句，修饰 cultivar。",
                  "while natively tolerating ... 是 while + 现在分词的伴随结构。",
                  "large fruit size 与 firm texture 为并列宾语。"
                ],
                translation: "目标是加速培育印度首个本土、耐气候变化的草莓品种，使其既能达到外国品种的大果形和紧实口感，又能天然耐受印度的热浪。"
              },
              {
                original: "The system employs AI, which uses the weather data to pinpoint when rain will strike, so farmers can then be advised to delay spraying their crops, preventing expensive chemicals from simply being washed away.",
                analysis: [
                  "主干：The system employs AI。",
                  "which 引导非限制性定语从句，说明 AI 的工作方式。",
                  "when rain will strike 是宾语从句，作 pinpoint 的宾语。",
                  "so 引导结果状语从句；can be advised 为被动语态。",
                  "preventing ... 是现在分词结果结构；from being washed away 为 prevent ... from doing 的被动形式。"
                ],
                translation: "该系统使用人工智能分析天气数据，准确判断降雨何时到来，从而提醒农民推迟给作物喷药，避免昂贵的农药被雨水白白冲走。"
              }
            ]
          },
          {
            title: "From Felix the Cat to MTV: MoMA explores a century of animation",
            source: "The Guardian · Culture",
            published: "2026-07-31",
            url: "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            readingTime: "8",
            topic: "文化 / 艺术 / 媒介史",
            summary: "MoMA 的展览 It's Alive! 回顾近百年的动画发展，讨论早期角色动画、战后独立创作者、实验电影与数字时代的演变，并解释展览为何采用无声放映以突出视觉语言。",
            reason: [
              "文化艺术与媒介史适合作为英语二人文主题。",
              "文章通过历史线索与展览策展人引语推进，利于训练主旨与论证结构分析。",
              "包含 anthropomorphic、manifesto 等高阶词汇。",
              "长句中有并列、定语与分词结构，适合拆句练习。"
            ],
            vocabulary: [
              { word: "anthropomorphic", phonetic: "/ˌænθrəpəˈmɔːfɪk/", part: "adj.", translation: "拟人化的" },
              { word: "outlandish", phonetic: "/aʊtˈlændɪʃ/", part: "adj.", translation: "古怪夸张的" },
              { word: "manifesto", phonetic: "/ˌmænɪˈfestəʊ/", part: "n.", translation: "宣言" },
              { word: "invigorate", phonetic: "/ɪnˈvɪɡəreɪt/", part: "v.", translation: "使振兴；激励" },
              { word: "aspire", phonetic: "/əˈspaɪər/", part: "v.", translation: "渴望；立志" },
              { word: "profound", phonetic: "/prəˈfaʊnd/", part: "adj.", translation: "深刻的；深远的" },
              { word: "inherent", phonetic: "/ɪnˈhɪərənt/", part: "adj.", translation: "内在的；固有的" },
              { word: "constituency", phonetic: "/kənˈstɪtʃuənsi/", part: "n.", translation: "特定支持群体；选区" },
              { word: "prominence", phonetic: "/ˈprɒmɪnəns/", part: "n.", translation: "重要地位；显著" },
              { word: "accessible", phonetic: "/əkˈsesəbl/", part: "adj.", translation: "易理解的；可接近的" }
            ],
            sentences: [
              {
                original: "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                analysis: [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，强调多样性。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                translation: "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                original: "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                analysis: [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是并列过去分词短语，说明动机。",
                  "creating an animated film 是现在分词短语，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators。"
                ],
                translation: "在第二次世界大战带来的创作需求激励下，又因曾为罗斯福 1944 年大选制作宣传动画而受到鼓舞，休布利向往一种由独立创作者推动的动画，这些创作者能够深入介入重要社会议题和深刻的艺术问题。"
              },
              {
                original: "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                analysis: [
                  "In an effort to do 表示目的。",
                  "make + 宾语 + 形容词 构成使役结构：make the artistry more accessible。",
                  "主句：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随结构，表示结果/附带效果。"
                ],
                translation: "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    },
    {
      date: "2026-08-01",
      status: "ready",
      ai: {
        intro: "只看今天新上线了什么、学生能拿它做什么，以及有哪些免费额度值得领取。",
        updates: [
          {
            event: "Gemini 7 月功能包上线：支持 macOS 全局语音输入，并推出更快的 Flash 模型",
            impact: "写论文提纲、改写段落或整理笔记时，可以直接在当前窗口口述，不必反复复制到聊天页面；新 Flash 模型更适合快速问答和批量整理资料。",
            howTo: "更新或打开 Gemini；macOS 用户在任意活动窗口调用语音功能，可口述、改写选中文字或生成视觉内容。模型可在 Gemini 的模型选择器中切换，具体可用性以账号和地区为准。",
            free: "Google 官方公告称部分功能面向 Gemini 用户推出，但未承诺所有地区、账号或模型均免费；Gemini Spark 不适用于欧洲经济区、英国、瑞士和尼日利亚。",
            category: "Gemini 更新",
            summary: "Google 同时公布 Gemini Spark 全球扩展、Dropbox 等应用连接、个性化图片和头像复用等功能。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            event: "Google 发布 Glanceboard：用 Gemini Flash 和图像模型自动生成每日课程与天气看板",
            impact: "这是一个很实用的 AI 编程案例：学生可以借鉴它，把课程表、DDL、天气和复习计划汇总成宿舍屏幕或网页看板。",
            howTo: "参考官方案例，把 Google Calendar 和天气数据交给轻量本地服务器处理，再提示图像模型生成当天视觉卡片；没有电子墨水屏也可先做普通网页版本。",
            free: "官方案例没有宣布统一的免费成品服务；实际复刻可能涉及 Gemini API、硬件或日历服务费用，应以所用 API 的实时价格与免费额度为准。",
            category: "AI 实用案例",
            summary: "该案例强调本地轻量服务器运行，不要求 Glanceboard 用户注册云端账号。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            event: "GitHub Copilot 停用 Gemini 2.5 Pro 与 Gemini 3 Flash",
            impact: "如果你用 Copilot 写课程作业或项目代码，旧模型工作流可能失效；提前切换可避免聊天、行内编辑、Agent 模式和代码补全突然不可用。",
            howTo: "打开 GitHub Copilot 的模型选择器，将 Gemini 2.5 Pro 改为 Gemini 3.1 Pro（Preview），将 Gemini 3 Flash 改为 Gemini 3.6 Flash；组织账号可能需要管理员先启用模型策略。",
            free: "是否可用取决于你的 GitHub Copilot 套餐、组织策略和模型权限；官方公告未新增免费额度。",
            category: "Copilot 提醒",
            summary: "停用范围覆盖 Copilot Chat、行内编辑、Ask、Agent 模式和代码补全。",
            source: {
              name: "GitHub 官方更新日志",
              published: "2026-07-31",
              url: "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated"
            }
          }
        ],
        deals: []
      },
      english: {
        intro: "今天精选 3 篇免费全文，严格限定在近两周、权威媒体、社会与教育等英语二常考主题，并提供系统词汇与长难句精读。",
        articles: [
          {
            title: "Students created AI rules they hope schools will adopt",
            source: "NPR · Education",
            published: "2026-07-30",
            url: "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            readingTime: "10",
            topic: "教育 / AI 素养 / 校园规则",
            summary: "来自美国 50 个州的 98 名高中生在模拟参议院中起草校园 AI 使用法案。他们主张学生接触课堂设备后即接受 AI 素养教育、禁止在计分考试中使用 AI，并允许教师要求涉嫌不当使用 AI 的学生进行口头答辩。文章还呈现了 AI 使用年龄、学校资源差异、检测误判和家庭责任等争论。",
            reason: [
              "主题是教育制度、技术伦理与青少年参与，贴近英语二社会与教育类命题范围。",
              "文章采用新闻叙事、引语、政策条款和正反辩论交替推进，适合训练观点归属题和推理题。",
              "包含 legislation、consensus、provision、inequity 等考研高频抽象词汇。",
              "长句中频繁出现 what 从句、only to do、while 让步以及多项并列结构。"
            ],
            vocabulary: [
              { word: "legislation", phonetic: "/ˌledʒɪsˈleɪʃn/", part: "n.", translation: "立法；法规" },
              { word: "navigate", phonetic: "/ˈnævɪɡeɪt/", part: "v.", translation: "应对；设法处理" },
              { word: "literacy", phonetic: "/ˈlɪtərəsi/", part: "n.", translation: "素养；读写能力" },
              { word: "consensus", phonetic: "/kənˈsensəs/", part: "n.", translation: "共识；一致意见" },
              { word: "provision", phonetic: "/prəˈvɪʒn/", part: "n.", translation: "条款；规定" },
              { word: "coherent", phonetic: "/kəʊˈhɪərənt/", part: "adj.", translation: "连贯的；有条理的" },
              { word: "contentious", phonetic: "/kənˈtenʃəs/", part: "adj.", translation: "有争议的" },
              { word: "inequity", phonetic: "/ɪnˈekwəti/", part: "n.", translation: "不公平；不平等" },
              { word: "guardrail", phonetic: "/ˈɡɑːdreɪl/", part: "n.", translation: "防护规则；约束机制" },
              { word: "oral defense", phonetic: "/ˈɔːrəl dɪˈfens/", part: "n.", translation: "口头答辩" }
            ],
            sentences: [
              {
                original: "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                analysis: [
                  "主干：The students gathered ... and attempted ...，两个谓语并列。",
                  "most of them high school juniors and seniors 是独立主格式的补充说明，解释 students 的构成。",
                  "what the real, adult Congress has largely failed to do 是 what 引导的宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体解释 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                translation: "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                original: "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                analysis: [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明活动现场。",
                  "watch the events unfold 使用 watch + 宾语 + 动词原形结构。",
                  "only to be revived 表示出乎意料的结果：看似失败，却又被挽救。",
                  "by 后三个并列名词短语说明法案被挽救的方式。"
                ],
                translation: "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                original: "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                analysis: [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定：该法案不是法律，正如这些青少年并非真正参议员。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                translation: "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            title: "India wants to join the strawberry superpowers",
            source: "BBC News · Business",
            published: "2026-07-30",
            url: "https://www.bbc.co.uk/news/articles/c8x274xxxpwo",
            readingTime: "8",
            topic: "商业 / 农业 / 技术创新",
            summary: "印度草莓产业长期依赖美国和欧洲的专利品种，农户还面临暴雨、进口种苗成本和季节性风险。研究人员正培育本土耐热品种，企业则采用无土栽培、滴灌、气候控制与 AI 天气预测，提高单位土地密度并减少损失。",
            reason: [
              "兼具商业成本、农业供应链、气候风险和技术创新，是英语二常见的产业转型型文章。",
              "数据、农户案例和专家引语丰富，适合训练细节题、因果题与段落功能题。",
              "文章难度适中，包含 horticultural、quarantine、indigenous、climate-resilient 等高价值词汇。",
              "可直接积累乡村经济、可持续农业与技术应用相关写作素材。"
            ],
            vocabulary: [
              { word: "labour-intensive", phonetic: "/ˌleɪbər ɪnˈtensɪv/", part: "adj.", translation: "劳动密集型的" },
              { word: "outlay", phonetic: "/ˈaʊtleɪ/", part: "n.", translation: "支出；费用" },
              { word: "horticultural", phonetic: "/ˌhɔːtɪˈkʌltʃərəl/", part: "adj.", translation: "园艺的" },
              { word: "quarantine", phonetic: "/ˈkwɒrəntiːn/", part: "n./v.", translation: "检疫；隔离" },
              { word: "substrate", phonetic: "/ˈsʌbstreɪt/", part: "n.", translation: "培养基；基质" },
              { word: "indigenous", phonetic: "/ɪnˈdɪdʒənəs/", part: "adj.", translation: "本土的；本地原生的" },
              { word: "climate-resilient", phonetic: "/ˈklaɪmət rɪˈzɪliənt/", part: "adj.", translation: "具有气候适应力的" },
              { word: "hydroponics", phonetic: "/ˌhaɪdrəˈpɒnɪks/", part: "n.", translation: "水培；无土栽培" },
              { word: "cultivar", phonetic: "/ˈkʌltɪvɑːr/", part: "n.", translation: "栽培品种" },
              { word: "pinpoint", phonetic: "/ˈpɪnpɔɪnt/", part: "v.", translation: "精确确定" }
            ],
            sentences: [
              {
                original: "Despite that success the industry still relies on varieties that are imported from California, Florida, Italy and Spain, as no one in India has developed a domestic plant.",
                analysis: [
                  "主干：the industry still relies on varieties。",
                  "Despite that success 是让步介词短语，表示‘尽管取得成功’。",
                  "that are imported ... 是限制性定语从句，修饰 varieties。",
                  "as 引导原因状语从句，说明仍依赖进口的原因。",
                  "has developed 使用现在完成时，强调截至目前仍未培育成功。"
                ],
                translation: "尽管取得了这些成绩，该产业仍依赖从加利福尼亚、佛罗里达、意大利和西班牙进口的品种，因为印度至今还没有培育出本土草莓品种。"
              },
              {
                original: "The goal is to fast-track the development of India's first indigenous, climate-resilient strawberry cultivar that matches the large fruit size and firm texture of foreign varieties while natively tolerating Indian heatwaves.",
                analysis: [
                  "主干：The goal is to fast-track the development，to fast-track 为不定式作表语。",
                  "of India's first ... cultivar 修饰 development，说明研发对象。",
                  "that matches ... 是限制性定语从句，修饰 cultivar。",
                  "while natively tolerating ... 是 while + 现在分词的省略结构，表示同时具备另一特征。",
                  "large fruit size 与 firm texture 为并列宾语。"
                ],
                translation: "目标是加速培育印度首个本土、耐气候变化的草莓品种，使其既能达到外国品种的大果形和紧实口感，又能天然耐受印度的热浪。"
              },
              {
                original: "The system employs AI, which uses the weather data to pinpoint when rain will strike, so farmers can then be advised to delay spraying their crops, preventing expensive chemicals from simply being washed away.",
                analysis: [
                  "主干：The system employs AI。",
                  "which 引导非限制性定语从句，补充说明 AI 的工作方式。",
                  "when rain will strike 是宾语从句，作 pinpoint 的宾语。",
                  "so 引导结果状语从句；can be advised 为被动语态。",
                  "preventing ... 是现在分词结果/伴随结构；from being washed away 为 prevent ... from doing 的被动形式。"
                ],
                translation: "该系统使用人工智能分析天气数据，准确判断降雨何时到来，从而提醒农民推迟给作物喷药，避免昂贵的农药被雨水白白冲走。"
              }
            ]
          },
          {
            title: "From Felix the Cat to MTV: MoMA explores a century of animation",
            source: "The Guardian · Culture",
            published: "2026-07-31",
            url: "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            readingTime: "8",
            topic: "文化 / 艺术 / 媒介史",
            summary: "纽约现代艺术博物馆的展览 It's Alive! 回顾数字技术出现前约一百年的动画发展。文章从早期角色动画谈到战后独立创作者、社会议题、实验艺术和 MTV 广告，并解释展览为何采用无声放映，让观众更专注于视觉语言。",
            reason: [
              "文化艺术与媒介演变属于考研英语常见人文主题，避免了过度专业的工程技术内容。",
              "文章围绕‘动画不仅是卡通角色’展开观点修正，适合训练主旨题和例证作用题。",
              "含有 anthropomorphic、manifesto、aspire、inherent、prominence 等高频学术词。",
              "多个长句包含让步、定语从句、独立主格与分词结构，具有较高拆句训练价值。"
            ],
            vocabulary: [
              { word: "anthropomorphic", phonetic: "/ˌænθrəpəˈmɔːfɪk/", part: "adj.", translation: "拟人化的" },
              { word: "outlandish", phonetic: "/aʊtˈlændɪʃ/", part: "adj.", translation: "古怪夸张的" },
              { word: "manifesto", phonetic: "/ˌmænɪˈfestəʊ/", part: "n.", translation: "宣言" },
              { word: "invigorate", phonetic: "/ɪnˈvɪɡəreɪt/", part: "v.", translation: "使振兴；激励" },
              { word: "aspire", phonetic: "/əˈspaɪər/", part: "v.", translation: "渴望；立志" },
              { word: "profound", phonetic: "/prəˈfaʊnd/", part: "adj.", translation: "深刻的；深远的" },
              { word: "inherent", phonetic: "/ɪnˈhɪərənt/", part: "adj.", translation: "内在的；固有的" },
              { word: "constituency", phonetic: "/kənˈstɪtʃuənsi/", part: "n.", translation: "特定支持群体；选区" },
              { word: "prominence", phonetic: "/ˈprɒmɪnəns/", part: "n.", translation: "重要地位；显著" },
              { word: "accessible", phonetic: "/əkˈsesəbl/", part: "adj.", translation: "易理解的；可接近的" }
            ],
            sentences: [
              {
                original: "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                analysis: [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，可理解为‘这一媒介多样性的真实面貌’。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                translation: "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                original: "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                analysis: [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是两个并列过去分词短语，说明 Hubley 受到的推动。",
                  "creating an animated film 是现在分词，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators；social issues 与 artistic questions 并列。"
                ],
                translation: "在第二次世界大战带来的创作需求激励下，又因曾制作动画片支持罗斯福参加 1944 年大选而受到鼓舞，休布利向往一种由具有独立思想的创作者推动的动画；这些创作者能够深入介入重要社会议题和深刻艺术问题。"
              },
              {
                original: "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                analysis: [
                  "In an effort to do 表示目的：为了……。",
                  "make + 宾语 + 形容词构成使役结构：make the artistry more accessible。",
                  "主干：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随/结果结构；a chance to get ... 中不定式修饰 chance。"
                ],
                translation: "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    }
  ]
};
