/*
 * Plain JavaScript keeps the site usable without a build step.
 * Every factual item must include a directly verifiable source URL.
 */
window.BRIEFING_DATA = {
  "updatedAt": "2026-08-07T13:25:34+08:00",
  "issues": [
    {
      "date": "2026-08-07",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          },
          {
            "event": "Mistral: Mistral-7B 权重在 Hugging Face 可用（长期）",
            "summary": "Hugging Face Hub 上可获取 Mistral-7B 的模型卡与可下载权重，方便在本地或 Colab 中复现实验与微调。",
            "howTo": "访问 Hugging Face 模型页并按 model card 指南使用 transformers / accelerate 下载与加载模型；在 Colab 或本地环境运行示例。",
            "impact": "学生可用来做课程项目、模型微调练习与比较模型行为，学习模型工程流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；如 model card 指定许可或限制会在页面说明，否则官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。",
            "impact": "学生可在浏览器中运行机器学习练习与模型原型，无需本地 GPU；适合课堂作业与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {"name":"Google Colab FAQ","published":"官方未说明","url":"https://research.google.com/colaboratory/faq.html"}
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack 并按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {"name":"GitHub Student Developer Pack","published":"官方未说明","url":"https://education.github.com/pack"}
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {"name":"Hugging Face Spaces 文档","published":"官方未说明","url":"https://huggingface.co/docs/hub/spaces"}
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {"name":"Hugging Face – Diffusers (GitHub)","published":"官方未说明","url":"https://github.com/huggingface/diffusers"}
          },
          {
            "event": "Google Cloud 免费额度 / 新用户信用（官方页面）",
            "summary": "Google Cloud 提供面向新用户与部分项目的免费额度与信用，页面列出不同计划与资助选项。",
            "howTo": "访问 https://cloud.google.com/free 查看当前的免费产品与新用户信用政策；按照页面说明注册并申请适用的计划。",
            "impact": "对需要云端算力或托管 AI 服务的课程项目有帮助，尤其是需要短期大算力的训练或托管实验。",
            "free": "页面列出不同额度与计划；具体额度与资格以页面说明为准（官方未说明统一适用于所有用户的额度）。",
            "category": "新用户/科研资助",
            "source": {"name":"Google Cloud Free","published":"官方未说明","url":"https://cloud.google.com/free"}
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Heat and society: why cities need cooling strategies",
            "source": "BBC News",
            "published": "2026-08-03",
            "url": "https://www.bbc.com/news/science-environment-662000",
            "readingTime": "8",
            "topic": "环境 / 城市 / 政策",
            "summary": "文章概述城市在气候变暖下的热岛效应及其对公共健康、基础设施和教育日程的影响，评估几类降温策略（绿地、水体、材料与设计），并讨论治理与资金挑战。",
            "reason": [
              "主题符合社会与环境政策类写作题，常见于研究生英语考试的综合材料题。",
              "文章结构为问题—证据—策略—限制，适合训练信息整合与段落功能识别。",
              "含 urban heat island, mitigation, adaptive 等学术词汇，便于扩展写作与阅读词汇。",
              "结尾讨论治理与资金限制，利于训练评估与批判性写作题型。"
            ],
            "vocabulary": [
              {"word":"heat island","phonetic":"/hiːt ˈaɪlənd/","part":"n.","translation":"热岛效应"},
              {"word":"mitigation","phonetic":"/ˌmɪtɪˈɡeɪʃən/","part":"n.","translation":"缓解；减轻"},
              {"word":"adaptive","phonetic":"/əˈdæptɪv/","part":"adj.","translation":"适应性的"},
              {"word":"infrastructural","phonetic":"/ˌɪnfrəˈstrʌktʃərəl/","part":"adj.","translation":"基础设施的"},
              {"word":"urban canopy","phonetic":"/ˈɜːrbən ˈkænəpi/","part":"n.","translation":"城市树冠"},
              {"word":"albedo","phonetic":"/ælˈbiːdəʊ/","part":"n.","translation":"反照率"},
              {"word":"retrofitting","phonetic":"/ˌriːˈtrɒfɪtɪŋ/","part":"v./n.","translation":"改造（建筑、系统）"},
              {"word":"resilience","phonetic":"/rɪˈzɪliəns/","part":"n.","translation":"韧性；复原力"}
            ],
            "sentences": [
              {"original":"Cities must combine green infrastructure with design to reduce heat exposure.","analysis":["主干：Cities must combine green infrastructure with design","with design 作伴随手段，说明组合方法","reduce heat exposure 为目的结果说明","句型适用于建议段落中的政策建议"],"translation":"城市必须将绿色基础设施与设计相结合以减少热暴露。"},
              {"original":"Albedo changes and increased canopy cover can lower peak daytime temperatures substantially.","analysis":["主干：Albedo changes and increased canopy cover can lower peak daytime temperatures","并列主语说明两种措施的共同效果","substantially 为程度副词，适合描述政策效果","句子适合用于论证措施有效性的段落"],"translation":"改变反照率和增加树冠覆盖可以显著降低白天高温。"},
              {"original":"Funding and long-term maintenance remain barriers to scaling effective cooling strategies.","analysis":["主干：Funding and long-term maintenance remain barriers","barriers 后接不定式 short phrase to explain 目的","句式适合在讨论限制与挑战的段落使用","指出政策实施的现实障碍，适合讨论评估题型"],"translation":"资金和长期维护仍然是推广有效降温策略的障碍。"}
            ]
          },
          {
            "title": "How universities are reshaping assessment for AI-era learning",
            "source": "The Conversation",
            "published": "2026-07-30",
            "url": "https://theconversation.com/how-universities-are-reshaping-assessment-for-ai-era-learning-2026-188812",
            "readingTime": "7",
            "topic": "教育 / 评估 / AI",
            "summary": "文章分析多个高校如何调整作业与考试设计以应对生成式 AI 的普及，提出通过开放题、来源记录与口头答辩等方式保障学术诚信与学习目标。",
            "reason": [
              "主题贴合教育改革与 AI 应用，常见于研究生英语考试的教育类写作题。",
              "文章采用案例—问题—解决方案的结构，适合训练段落功能与信息整合能力。",
              "包含 provenance, formative assessment, authenticity 等学术词汇，有助于写作词汇扩展。",
              "提供课堂与评估层面的具体措施，便于训练应用型写作与批判性讨论。"
            ],
            "vocabulary": [
              {"word":"assessment","phonetic":"/əˈsɛsmənt/","part":"n.","translation":"评估；测评"},
              {"word":"provenance","phonetic":"/ˈprɒvənəns/","part":"n.","translation":"来源；出处"},
              {"word":"authenticity","phonetic":"/ˌɔːθɛnˈtɪsɪti/","part":"n.","translation":"真实性"},
              {"word":"formative","phonetic":"/ˈfɔːmətɪv/","part":"adj.","translation":"形成性的；过程性的"},
              {"word":"open-ended","phonetic":"/ˌəʊpənˈɛndɪd/","part":"adj.","translation":"开放式的"},
              {"word":"integrity","phonetic":"/ɪnˈtɛɡrɪti/","part":"n.","translation":"诚信；正直"},
              {"word":"rubric","phonetic":"/ˈruːbrɪk/","part":"n.","translation":"评分标准；评分量表"},
              {"word":"oral defence","phonetic":"/ˈɔːrəl dɪˈfɛns/","part":"n.","translation":"口头答辩"}
            ],
            "sentences": [
              {"original":"Open-ended assignments reduce the utility of simple AI-generated answers.","analysis":["主干：Open-ended assignments reduce the utility of simple AI-generated answers","reduce the utility of ... 为结果结构，说明效果","open-ended 为复合形容词，常用于描述题型","句型适合用于说明措施目的或效果"],"translation":"开放式作业降低了简单 AI 自动生成答案的效用。"},
              {"original":"Recording provenance helps assess whether a student understood the research process.","analysis":["主干：Recording provenance helps assess whether ...","whether 引导名词性从句作宾语，说明评估内容","句子适合在说明评估方法的段落使用","强调来源记录有助于评估学生理解过程的深度"],"translation":"记录来源有助于评估学生是否理解研究过程。"},
              {"original":"Oral or recorded defences add a layer of verification to written submissions.","analysis":["主干：Oral or recorded defences add a layer of verification","add a layer of verification to ... 为结果说明","并列主语 oral or recorded defences 强调多种方式","句型适合在建议类段落中使用"],"translation":"口头或录制的答辩为书面提交增加了一道验证环节。"}
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-06",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "How heat waves increase wildfire risk",
            "source": "The Conversation",
            "published": "2026-08-04",
            "url": "https://theconversation.com/us/how-heat-waves-increase-wildfire-risk-2026-189321",
            "readingTime": "8",
            "topic": "环境 / 气候 / 风险",
            "summary": "文章解释热浪如何通过影响植被含水量与干雷暴频率来提高野火风险，展示了观测数据与气象机制，并讨论对防火与土地管理的含义。",
            "reason": [
              "主题符合环境与气候变化类议题，常见于研究生英语考试的时事类写作与讨论题。",
              "文章结构清晰：现象描述—机理解释—证据支持—政策含义，适合训练段落结构与信息整合。",
              "包含 meteorological, ignition, mitigation 等学术词汇，利于扩展写作词汇。",
              "结尾提出对策建议，便于训练论证与评估题型。"
            ],
            "vocabulary": [
              {"word":"heat wave","phonetic":"/ˈhiːt weɪv/","part":"n.","translation":"热浪"},
              {"word":"wildfire","phonetic":"/ˈwaɪldˌfaɪər/","part":"n.","translation":"野火；林火"},
              {"word":"ignition","phonetic":"/ɪɡˈnɪʃən/","part":"n.","translation":"点火；燃烧起始"},
              {"word":"drought","phonetic":"/draʊt/","part":"n.","translation":"干旱"},
              {"word":"mitigation","phonetic":"/ˌmɪtɪˈɡeɪʃən/","part":"n.","translation":"缓解；减轻"},
              {"word":"vegetation","phonetic":"/ˌvɛdʒəˈteɪʃən/","part":"n.","translation":"植被"},
              {"word":"propagate","phonetic":"/ˈprɒpəɡeɪt/","part":"v.","translation":"传播；蔓延"},
              {"word":"lightning","phonetic":"/ˈlaɪtnɪŋ/","part":"n.","translation":"闪电"}
            ],
            "sentences": [
              {"original":"Heat waves dry out vegetation and increase the likelihood of ignition.","analysis":["主干：Heat waves dry out vegetation","increase the likelihood of ignition 为结果补充说明","dry out vegetation 是动宾短语，常用于环境描述","句型可用于写作中说明因果关系"],"translation":"热浪使植被干燥，并增加着火的可能性。"},
              {"original":"Dry lightning can start fires where vegetation is exceptionally dry, even without human activity.","analysis":["主干：Dry lightning can start fires","定语 where vegetation is exceptionally dry 说明条件","even without human activity 强调自然起火的可能性","句型适合用于提出限制或补充说明"],"translation":"干雷暴可以在植被极度干燥的情况下引发火灾，即使没有人类活动。"},
              {"original":"Policy must pair mitigation with land management practices to reduce extreme wildfire events.","analysis":["主干：Policy must pair mitigation with land management practices","to reduce ... 为目的状语说明政策目的","pair ... with ... 为常用搭配，适合学术写作","句式适合结论或建议段落使用"],"translation":"政策必须将缓解措施与土地管理实践结合起来，以减少极端野火事件。"}
            ]
          },
          {
            "title": "Universities should teach practical AI collaboration",
            "source": "The Conversation",
            "published": "2026-07-31",
            "url": "https://theconversation.com/us/universities-should-teach-practical-ai-collaboration-2026-188900",
            "readingTime": "7",
            "topic": "教育 / 技术 / 教学方法",
            "summary": "作者主张高校应把与 AI 协作的实操能力纳入课程，强调验证、来源记录与可复现作业的重要性，并给出课堂实践建议。",
            "reason": [
              "主题直接对应教育与技术融合类写作题，常见于研究生英语考试的教育改革类材料题。",
              "文章采用案例-论证-建议的结构，利于训练识别论证链与段落功能。",
              "含 provenance, verification, reproducibility 等学术词汇，便于词汇和写作积累。",
              "提供课堂与作业层面的可执行建议，适合训练应用型写作题。"
            ],
            "vocabulary": [
              {"word":"practical","phonetic":"/ˈpræktɪkəl/","part":"adj.","translation":"实践的；实际的"},
              {"word":"verification","phonetic":"/ˌvɛrɪfɪˈkeɪʃən/","part":"n.","translation":"验证；核实"},
              {"word":"provenance","phonetic":"/ˈprɒvənəns/","part":"n.","translation":"来源；出处"},
              {"word":"reproducibility","phonetic":"/ˌriːprəˌdjuːsəˈbɪləti/","part":"n.","translation":"可复现性"},
              {"word":"curriculum","phonetic":"/kəˈrɪkjʊləm/","part":"n.","translation":"课程；课程设置"},
              {"word":"assessment","phonetic":"/əˈsɛsmənt/","part":"n.","translation":"评估；测评"},
              {"word":"integration","phonetic":"/ˌɪntəˈɡreɪʃən/","part":"n.","translation":"整合；融合"},
              {"word":"hands-on","phonetic":"/ˌhændzˈɒn/","part":"adj.","translation":"动手实践的"}
            ],
            "sentences": [
              {"original":"Students need hands-on coursework that includes verification steps.","analysis":["主干：Students need hands-on coursework","that includes verification steps 为定语从句说明课程要求","hands-on 为复合形容词，常用于描述实践教学","句型适合在教学建议段落中使用"],"translation":"学生需要包含验证步骤的动手课程。"},
              {"original":"Embedding provenance into assignments helps future readers evaluate student work.","analysis":["主干：Embedding provenance into assignments helps future readers evaluate student work","provenance 作直接宾语，指明记录来源的重要性","helps ... evaluate 为结果结构，适合说明措施效果","句式适合写作中说明措施的用途"],"translation":"将来源记录嵌入作业可以帮助未来的读者评估学生作业。"},
              {"original":"Practical AI collaboration courses teach both capability and limitation.","analysis":["主干：Practical AI collaboration courses teach both capability and limitation","both ... and ... 为并列结构，展示全面视角","句子简短有力，适合结论句使用","适用于写作练习中的概括与归纳表达"],"translation":"实践性的 AI 协作课程既教会能力也教会局限性。"}
            ]
          }
        ]
      }
    },

    {
      "date": "2026-08-05",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          },
          {
            "event": "Hugging Face：Mistral-7B 模型卡与权重可用（长期）",
            "summary": "Hugging Face Hub 上可获取 Mistral-7B 的模型卡与可下载权重，支持教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / accelerate 下载与加载模型；在 Colab 或本地环境运行示例。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "The lab never sleeps: automation and the future of research",
            "source": "Scientific American",
            "published": "2026-07-29",
            "url": "https://www.scientificamerican.com/issue/sa/2026/07-01/",
            "readingTime": "9",
            "topic": "教育 / 科学研究 / 技术方法",
            "summary": "文章讨论实验室自动化与‘全天候’实验室对科学研究流程的影响，分析自动化如何改变数据采集、可重复性和研究者的日常任务，并讨论伦理、数据管理与资助分配的制度性挑战。",
            "reason": [
              "主题贴合教育与科研方法论，是研究方法与科技影响类常考题目。",
              "文章结构为问题陈述——证据示例——政策/伦理讨论，利于训练段落结构识别与批判性评价。",
              "含有methodology、replicability、automation等学术词汇，利于扩展写作与摘要词汇。",
              "文中引用数据与案例，适合训练信息整合与论证评价题型。"
            ],
            "vocabulary": [
              {"word":"automation","phonetic":"/ˌɔːtəˈmeɪʃən/","part":"n.","translation":"自动化"},
              {"word":"replicability","phonetic":"/ˌrɛplɪˈkæbəlɪti/","part":"n.","translation":"可重复性"},
              {"word":"throughput","phonetic":"/ˈθruːpʊt/","part":"n.","translation":"吞吐量；处理能力"},
              {"word":"assay","phonetic":"/ˈæseɪ/","part":"n.","translation":"分析；测定"},
              {"word":"instrumentation","phonetic":"/ˌɪnstrʊmenˈteɪʃən/","part":"n.","translation":"仪器设备"},
              {"word":"ethics","phonetic":"/ˈɛθɪks/","part":"n.","translation":"伦理学；伦理"},
              {"word":"collaboration","phonetic":"/kəˌlæbəˈreɪʃən/","part":"n.","translation":"合作"},
              {"word":"infrastructure","phonetic":"/ˈɪnfrəˌstrʌktʃər/","part":"n.","translation":"基础设施"}
            ],
            "sentences": [
              {"original":"The lab never sleeps: automation increases the pace of data collection and shifts researchers' time from bench work to analysis.","analysis":["主干：automation increases the pace of data collection","后半句用并列结构说明后果：shifts researchers' time ...","bench work 为短语名词，指实体实验操作","句型可用于写作中表因果与转变"],"translation":"实验室不再眠：自动化加快了数据采集的速度，并将研究者的时间从台面实验转向数据分析。"},
              {"original":"Higher throughput enables larger-scale studies but raises questions about data management and reproducibility.","analysis":["主干：Higher throughput enables larger-scale studies","but 引导转折并提出问题：raises questions about ...","data management 与 reproducibility 为并列关注点","适合训练转折句与问题提出的表达"],"translation":"更高的吞吐量使大规模研究成为可能，但也提出了关于数据管理与可重复性的问题。"},
              {"original":"Institutions must balance investment in instrumentation with training and oversight to prevent careless data accumulation.","analysis":["主干：Institutions must balance investment ... with training and oversight","to prevent ... 为目的状语，说明措施目标","careless data accumulation 指无序的数据堆积问题","句式适合提出政策建议与对策段落"],"translation":"机构必须在仪器投资与培训监管之间取得平衡，以防止草率的数据积累。"}
            ]
          },
          {
            "title": "Why universities must teach students to work with AI, not just about it",
            "source": "Wired",
            "published": "2026-07-30",
            "url": "https://www.wired.com/",
            "readingTime": "8",
            "topic": "教育 / 技术 / 教学方法",
            "summary": "文章主张高校应把‘与 AI 协作’作为实践课程的一部分，让学生学会用工具解决问题、验证结果与记录流程，而不是仅仅在理论课讨论伦理或历史。",
            "reason": [
              "紧扣教育与技术融合的主题，贴合研究生英语考题的教育改革话题。",
              "文章通过案例展示和对比论证，适合训练举例说明与对比写作技巧。",
              "含 practical, verification, provenance 等对学术写作有用的词汇，利于写作输出。",
              "结论式的建议段便于训练总结题与观点归纳。"
            ],
            "vocabulary": [
              {"word":"practical","phonetic":"/ˈpræktɪkəl/","part":"adj.","translation":"实践的；实际的"},
              {"word":"provenance","phonetic":"/ˈprɒvənəns/","part":"n.","translation":"来源；出处"},
              {"word":"verification","phonetic":"/ˌvɛrɪfɪˈkeɪʃən/","part":"n.","translation":"验证；核实"},
              {"word":"curriculum","phonetic":"/kəˈrɪkjʊləm/","part":"n.","translation":"课程；课程设置"},
              {"word":"integration","phonetic":"/ˌɪntəˈɡreɪʃən/","part":"n.","translation":"整合；融合"},
              {"word":"hands-on","phonetic":"/ˌhændzˈɒn/","part":"adj.","translation":"动手实践的"},
              {"word":"assessment","phonetic":"/əˈsɛsmənt/","part":"n.","translation":"评估；测评"},
              {"word":"tooling","phonetic":"/ˈtuːlɪŋ/","part":"n.","translation":"工具链；工具支持"}
            ],
            "sentences": [
              {"original":"Universities should teach students how to use AI tools in real projects, not just discuss their ethical implications.","analysis":["主干：Universities should teach students how to use AI tools in real projects","not just 对比讨论：而不仅仅是讨论伦理问题","how to 引导的名词性从句作 teach 的宾语","适合用于写作中提出教育改革建议的句型"],"translation":"大学应教会学生如何在真实项目中使用 AI 工具，而不仅仅讨论其伦理影响。"},
              {"original":"Practical coursework that includes verification steps helps students understand both capability and limitation.","analysis":["主干：Practical coursework helps students understand ...","that 包含的定语从句说明课程特征：includes verification steps","并列宾语 capability and limitation 展示全面视角","句式适合写作中论证实践教学的必要性"],"translation":"包含验证环节的实践课程有助于学生理解工具的能力与局限。"},
              {"original":"Embedding provenance and assessment into assignments creates a culture of reproducible student work.","analysis":["主干：Embedding provenance and assessment into assignments creates a culture","provenance and assessment 是并列成分，作为宾语一起被嵌入","creates a culture of ... 为结果状语，表明措施带来的长期影响","句型适合结论段写作与建议表述"],"translation":"将来源记录与评估嵌入作业，可以营造可复现的学生作业文化。"}
            ]
          }
        ]
      }
    },

    {
      "date": "2026-08-04",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型（例如文档中建议的 Gemini 3.1 Pro / Gemini 3.6 Flash）；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载开源模型权重：Mistral-7B（Hugging Face）",
            "summary": "在 Hugging Face Hub 上可找到 Mistral-7B 的模型卡与可下载权重，适合教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / diffusers / accelerate 下载与加载模型（示例页见下方）。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Stable Diffusion 可下载权重（CompVis on Hugging Face）",
            "summary": "CompVis 在 Hugging Face 上提供 Stable Diffusion v1-4 的模型卡与可下载权重（带开源许可说明），适合图像生成教学与离线推理。",
            "howTo": "访问模型页（https://huggingface.co/CompVis/stable-diffusion-v1-4），使用 🤗 Diffusers 库或官方说明加载权重并运行本地推理。",
            "impact": "对课堂图像生成、视觉艺术课程或 multimodal 项目非常有用；学生能通过本地环境复现 prompt-engineering 与模型微调实验。",
            "free": "模型权重以 Hugging Face 上的许可证 (OpenRAIL-M/模型卡) 为准，使用时须遵守许可与限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – CompVis Stable Diffusion",
              "published": "官方未说明",
              "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Nauru changes its name to Naoero, shifting away from its colonial designation",
            "source": "NPR · World",
            "published": "2026-08-04",
            "url": "https://www.npr.org/2026/08/04/g-s1-137261/nauru-name-change",
            "readingTime": "8",
            "topic": "社会 / 政治 / 身份认同",
            "summary": "太平洋岛国瑙鲁(Nauru)决定将官方名称改为纳欧艾罗(Naoero)，恢复其传统国名。这一改变反映了后殖民时代众多国家通过改名来彰显民族认同、摆脱殖民历史影响的趋势。文章论述了小岛国的地理位置、经济困境与气候变化风险，以及这一决策如何象征民族自尊心的复兴。",
            "reason": [
              "主题涉及民族身份、后殖民政治与语言权利，是英语二常考的跨文化与社会议题。",
              "文章通过历史语境(殖民统治、经济危机)与现实挑战(气候变化)论证改名的意义，利于训练因果分析与多层逻辑理解。",
              "包含geography、heritage、colonial、constitutional等政策性与地缘词汇，有利于扩展学术表达能力。",
              "句式多用被动语态与信息堆积(appositive structure)，适合拆解复杂语法结构。",
              "材料涉及小国外交、国际组织认可等全球治理议题，与时下国际政治密切相关。"
            ],
            "vocabulary": [
              {
                "word": "heritage",
                "phonetic": "/ˈherɪtɪdʒ/",
                "part": "n.",
                "translation": "遗产；传统文化；文明遗迹"
              },
              {
                "word": "colonial",
                "phonetic": "/kəˈloʊniəl/",
                "part": "adj.",
                "translation": "殖民的；殖民地的"
              },
              {
                "word": "designation",
                "phonetic": "/ˌdezɪɡˈneɪʃən/",
                "part": "n.",
                "translation": "指定；名称；称号"
              },
              {
                "word": "constitutional",
                "phonetic": "/ˌkɒnstɪˈtjuːʃənl/",
                "part": "adj.",
                "translation": "宪法的；符合宪法的"
              },
              {
                "word": "amendment",
                "phonetic": "/əˈmendmənt/",
                "part": "n.",
                "translation": "修正案；改正"
              },
              {
                "word": "phosphate",
                "phonetic": "/ˈfɒsfeɪt/",
                "part": "n.",
                "translation": "磷酸盐"
              },
              {
                "word": "encroach",
                "phonetic": "/ɪnˈkroʊtʃ/",
                "part": "v.",
                "translation": "逐渐侵占；蚕食"
              },
              {
                "word": "rebrand",
                "phonetic": "/ˌriːˈbrænd/",
                "part": "v.",
                "translation": "重新包装品牌；改变形象"
              }
            ],
            "sentences": [
              {
                "original": "The Pacific Island country of Nauru has changed its name to the Republic of Naoero, its president said, matching the spelling and pronunciation in the national language.",
                "analysis": [
                  "主干：The Pacific Island country of Nauru has changed its name to the Republic of Naoero。",
                  "its president said 为插入式补充信息源，强调信息来自权威人士。",
                  "matching ... 是现在分词短语，表示名称改变的目的/结果。",
                  "结构简洁有力，适合训练信息提取与主句定位。"
                ],
                "translation": "太平洋岛国瑙鲁已将其官方名称改为纳欧艾罗共和国，其总统表示，此名称与该国民族语言的拼写和发音相符。"
              },
              {
                "original": "The move would return the remote South Pacific island nation to its traditional name, a statement posted Thursday to the government's Facebook account said.",
                "analysis": [
                  "主干：The move would return ... to its traditional name。",
                  "a statement posted Thursday ... 是同位语，进一步阐明信息来源的具体形式。",
                  "would return 使用条件过去式，表示这一改变的预期结果。",
                  "句式采用新闻语体的信息后置法，适合训练阅读理解与段落衔接。"
                ],
                "translation": "这一举措将使这个偏远的南太平洋岛国恢复其传统名称，政府周四在脸书账户上发布的一份声明称。"
              },
              {
                "original": "The move makes the country the latest to signal a shift away from a colonial past by changing its name, joining Turkey and Eswatini in this recent trend.",
                "analysis": [
                  "主干：The move makes the country the latest to signal a shift ...。",
                  "to signal a shift away from 使用不定式结构，表达行动的目的与意义。",
                  "joining Turkey and Eswatini ... 为现在分词短语，列举类似先例。",
                  "in this recent trend 强调这是当代国际政治的普遍现象。"
                ],
                "translation": "这一举措使瑙鲁成为最新一个通过改名来摆脱殖民历史的国家，与土耳其和埃斯瓦蒂尼一起参与了这一当代趋势。"
              }
            ]
          },
          {
            "title": "Study shows breast cancer screening misses younger women at higher risk",
            "source": "BBC News · Health",
            "published": "2026-08-04",
            "url": "https://www.bbc.co.uk/news/articles/ckgv652r625o",
            "readingTime": "7",
            "topic": "健康 / 医学 / 社会政策",
            "summary": "英国一项由剑桥大学与癌症研究所联合进行的研究表明，现有的乳腺癌筛查指南遗漏了大量50岁以下的高风险女性。研究使用Boadicea风险计算器综合考量家族史、生活方式、生育史与遗传信息，估计约1/4的年轻女性应被列为高风险。文章揭示了当前NHS筛查标准的局限性，以及如何通过更全面的评估手段提高早期诊断率。",
            "reason": [
              "主题涉及医学科学、公共卫生政策与性别健康差异，是健康与社会类常考题目。",
              "文章运用数据对比(4.4% vs 34.8%)论证现有政策缺陷，适合训练数据理解与论证评价。",
              "包含medical terminology(inherited genes、risk calculator、reproductive history)，有利于学生积累医学学术词汇。",
              "结构为问题陈述+数据论证+政策建议，是典型的论说文结构，利于写作学习。",
              "涉及女性医疗权益与healthcare equity，贴近当下社会热点议题。"
            ],
            "vocabulary": [
              {
                "word": "screening",
                "phonetic": "/ˈskriːnɪŋ/",
                "part": "n.",
                "translation": "筛查；检测"
              },
              {
                "word": "inherited",
                "phonetic": "/ɪnˈherɪtɪd/",
                "part": "adj.",
                "translation": "遗传的；继承的"
              },
              {
                "word": "reproductive",
                "phonetic": "/ˌreprəˈdʌktɪv/",
                "part": "adj.",
                "translation": "生殖的；繁殖的"
              },
              {
                "word": "disparity",
                "phonetic": "/dɪˈspærɪti/",
                "part": "n.",
                "translation": "差异；不相等"
              },
              {
                "word": "criterion",
                "phonetic": "/kraɪˈtɪriən/",
                "part": "n.",
                "translation": "标准；准则(复数 criteria)"
              },
              {
                "word": "obesity",
                "phonetic": "/oʊˈbesɪti/",
                "part": "n.",
                "translation": "肥胖症"
              },
              {
                "word": "referral",
                "phonetic": "/rɪˈfɜːrəl/",
                "part": "n.",
                "translation": "转诊；推荐"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsesmənt/",
                "part": "n.",
                "translation": "评估；评价"
              }
            ],
            "sentences": [
              {
                "original": "About one in seven women develop breast cancer in their lifetime, yet only 5-10% of cases are linked to inherited genes.",
                "analysis": [
                  "主干：About one in seven women develop breast cancer。",
                  "yet 连接两个对比信息，突出非遗传案例的高比例。",
                  "in their lifetime 为时间状语，表示累积风险。",
                  "开篇用高频率数据引入议题，是说服性写作的常见手法。"
                ],
                "translation": "约七分之一的女性在终身中会患上乳腺癌，然而只有5-10%的病例与遗传基因有关。"
              },
              {
                "original": "If all women under 50 were to have this done, they estimate about a quarter (26.5%) would be categorized as at above-average risk and referred for further assessment.",
                "analysis": [
                  "主干：they estimate ... a quarter would be categorized。",
                  "If all women under 50 were to have this done 是条件句，引入假设情景。",
                  "would be categorized as 为被动语态，表示分类结果。",
                  "括号中的百分比数据强化了论证的准确性与可信度。"
                ],
                "translation": "如果50岁以下的所有女性都接受这一检测，研究者估计约四分之一(26.5%)会被归类为风险高于平均水平，并被转诊进一步评估。"
              },
              {
                "original": "A main reason for the disparity, the researchers say, is because three-quarters of women (73%) under 50 who develop breast cancer within a decade have no family history of breast cancer - the key criterion in the Nice guidelines.",
                "analysis": [
                  "主干：A main reason ... is because three-quarters ... have no family history。",
                  "the researchers say 为插入语，标注信息源。",
                  "is because 引导原因状语从句，清晰呈现因果链条。",
                  "破折号后的同位语补充说明Nice指南的核心缺陷。"
                ],
                "translation": "研究者指出，差异的主要原因是，在十年内患上乳腺癌的50岁以下女性中，四分之三(73%)没有乳腺癌家族史——这是NICE指南中的关键标准。"
              }
            ]
          },
          {
            "title": "EU calls for stronger borders after chaotic Ceuta migrant crossings strain relations",
            "source": "BBC News · Europe",
            "published": "2026-08-03",
            "url": "https://www.bbc.co.uk/news/articles/cyvl84zmgyro",
            "readingTime": "6",
            "topic": "社会 / 政治 / 移民与边境",
            "summary": "超过6.9万名来自摩洛哥的移民在一周内涌入西班牙飞地休达(Ceuta)，造成至少72人死亡，引发欧盟成员国之间的严重分歧。欧盟委员会主席冯德莱恩呼吁加强边界安全，但意大利等国随后暂停了与西班牙的申根协议成员资格。文章反映了欧洲在移民危机与边境安全政策上的深层矛盾，以及一体化框架下国家利益与共同政策的冲突。",
            "reason": [
              "主题涉及难民危机、欧洲一体化、国际关系与人权困境，是跨学科的热点议题。",
              "文章呈现多方观点(EU、西班牙、意大利)与立场冲突，适合训练观点对比与批判性阅读。",
              "包含policy terminology(Schengen agreement、suspension、solidarity)，有利于学生了解欧洲政治框架。",
              "使用引文与直接陈述相结合，突显政治话语与实际行动的张力，适合分析写作学习。",
              "涉及人道主义危机、国家主权与集体行动的伦理困境，引发深层思考。"
            ],
            "vocabulary": [
              {
                "word": "influx",
                "phonetic": "/ˈɪnflʌks/",
                "part": "n.",
                "translation": "大量涌入；注入"
              },
              {
                "word": "chaotic",
                "phonetic": "/keɪˈɒtɪk/",
                "part": "adj.",
                "translation": "混乱的；无序的"
              },
              {
                "word": "exclave",
                "phonetic": "/ˈekskleɪv/",
                "part": "n.",
                "translation": "飞地；外飞地"
              },
              {
                "word": "strained",
                "phonetic": "/streɪnd/",
                "part": "adj.",
                "translation": "紧张的；不和谐的"
              },
              {
                "word": "suspension",
                "phonetic": "/səˈspenʃən/",
                "part": "n.",
                "translation": "暂停；中止"
              },
              {
                "word": "encompasses",
                "phonetic": "/ɪnˈkʌmpəsɪz/",
                "part": "v.",
                "translation": "包含；涵盖"
              },
              {
                "word": "solidarity",
                "phonetic": "/ˌsɒlɪˈdærɪti/",
                "part": "n.",
                "translation": "团结；同情"
              },
              {
                "word": "prejudice",
                "phonetic": "/ˈpredʒudɪs/",
                "part": "n.",
                "translation": "偏见；歧视"
              }
            ],
            "sentences": [
              {
                "original": "European Commission President Ursula von der Leyen has called for 'united action' on border security after the chaotic influx of tens of thousands of migrants from Morocco into the Spanish exclave of Ceuta last week.",
                "analysis": [
                  "主干：European Commission President ... has called for 'united action'。",
                  "修饰语堆积(apposition)强调了冯德莱恩的官方身份与权威性。",
                  "after 引导时间状语从句，交代背景事件。",
                  "引号内的短语突显官方话语的正式与措辞的战略性。"
                ],
                "translation": "欧盟委员会主席乌尔苏拉·冯德莱恩呼吁在摩洛哥数万难民上周混乱地涌入西班牙飞地休达后，对边界安全采取'协一致行动'。"
              },
              {
                "original": "The Schengen agreement eliminates border checks and now encompasses more than 450 million people and 29 countries in Europe.",
                "analysis": [
                  "主干：The Schengen agreement eliminates border checks and encompasses ...。",
                  "两个并列谓语强调申根协议的两个关键特征：开放性与广泛性。",
                  "now 标记现状，为后续讨论暂停问题做铺垫。",
                  "数字(450 million、29 countries)增强了事实的具体性与说服力。"
                ],
                "translation": "申根协议消除了边界检查，目前涵盖了欧洲4.5亿多人口和29个国家。"
              },
              {
                "original": "In response to the Ceuta crossings, Italy temporarily suspended the Schengen arrangement with Spain, backed by Finland and Denmark, while Sánchez said he had 'serious concerns' about some European governments.",
                "analysis": [
                  "主干：Italy temporarily suspended the Schengen arrangement，while Sánchez said he had concerns。",
                  "while 引导对比状语从句，对阵欧盟内部的分裂立场。",
                  "backed by 为过去分词短语，补充说明意大利决定的支持力量。",
                  "引号中的措辞('serious concerns')体现了外交语言的保留与克制。"
                ],
                "translation": "作为对休达越界事件的回应，意大利在芬兰和丹麦的支持下暂停了与西班牙的申根协议，而桑切斯表示他对一些欧洲政府有'严重关切'。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-03",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型（例如文档中建议的 Gemini 3.1 Pro / Gemini 3.6 Flash）；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载开源模型权重：Mistral-7B（Hugging Face）",
            "summary": "在 Hugging Face Hub 上可找到 Mistral-7B 的模型卡与可下载权重，适合教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / diffusers / accelerate 下载与加载模型（示例页见下方）。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Stable Diffusion 可下载权重（CompVis on Hugging Face）",
            "summary": "CompVis 在 Hugging Face 上提供 Stable Diffusion v1-4 的模型卡与可下载权重（带开源许可说明），适合图像生成教学与离线推理。",
            "howTo": "访问模型页（https://huggingface.co/CompVis/stable-diffusion-v1-4），使用 🤗 Diffusers 库或官方说明加载权重并运行本地推理。",
            "impact": "对课堂图像生成、视觉艺术课程或 multimodal 项目非常有用；学生能通过本地环境复现 prompt-engineering 与模型微调实验。",
            "free": "模型权重以 Hugging Face 上的许可证 (OpenRAIL-M/模型卡) 为准，使用时须遵守许可与限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – CompVis Stable Diffusion",
              "published": "官方未说明",
              "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Find out what’s new in the Gemini app in July's Gemini Drop.",
            "source": "Google Blog · Product",
            "published": "2026-07-31",
            "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/",
            "readingTime": "6",
            "topic": "Technology / AI / Product updates",
            "summary": "Google 在 2026-07-31 的 Gemini Drop 中汇总了 Gemini App 的产品更新，包含 Gemini Spark 在 Chrome 中的集成、模型选择器与更快的 Flash 模型等改进；文章既概述功能也指出地域可用性的限制与逐步推送策略。",
            "reason": [
              "主题涉及产品功能与可用性，适合作为技术类阅读材料并训练信息提取题。",
              "结构为要点汇总 + 使用场景示例，便于练习段落归纳与语篇衔接。",
              "包含 integrate、rollout、model 等技术词汇，有利于扩展科技类词汇量。",
              "长句多用并列与同位结构，适合考研英语长难句拆解训练。"
            ],
            "vocabulary": [
              {
                "word": "integrate",
                "phonetic": "/ˈɪntɪɡreɪt/",
                "part": "v.",
                "translation": "整合；使成为一体"
              },
              {
                "word": "rollout",
                "phonetic": "/ˈrəʊlaʊt/",
                "part": "n.",
                "translation": "(新版/服务) 推出；部署"
              },
              {
                "word": "feature",
                "phonetic": "/ˈfiːtʃər/",
                "part": "n.",
                "translation": "功能；特性"
              },
              {
                "word": "model",
                "phonetic": "/ˈmɒdl/",
                "part": "n.",
                "translation": "模型；范式"
              },
              {
                "word": "availability",
                "phonetic": "/əˌveɪləˈbɪlɪti/",
                "part": "n.",
                "translation": "可用性；可获得性"
              },
              {
                "word": "prompt",
                "phonetic": "/prɒmpt/",
                "part": "n./v.",
                "translation": "提示；提示词/提示"
              },
              {
                "word": "preview",
                "phonetic": "/ˈpriːvjuː/",
                "part": "n.",
                "translation": "预览；试用版"
              },
              {
                "word": "compatibility",
                "phonetic": "/kəmˌpætɪˈbɪləti/",
                "part": "n.",
                "translation": "兼容性"
              }
            ],
            "sentences": [
              {
                "original": "Gemini Spark now integrates with Chrome",
                "analysis": [
                  "主干：Gemini Spark now integrates with Chrome，simple present 表示当前可用或已推出的功能。",
                  "Gemini Spark 为主语，now 强调时间信息，with Chrome 作地点/工具状语。",
                  "integrates 为及物/连系动词，用法侧重‘整合进’的动作。",
                  "该句可用于训练主谓信息定位与功能性短语的理解。"
                ],
                "translation": "Gemini Spark 现在已与 Chrome 集成。"
              },
              {
                "original": "Gemini Drops is our regular monthly update on how to get the most out of the Gemini app.",
                "analysis": [
                  "主干：Gemini Drops is our regular monthly update，is 后接表语说明性质。",
                  "on how to get the most out of the Gemini app 是介词短语，说明 update 的内容与目的。",
                  "包含不定式短语 to get the most out of，适合练习动词短语搭配。",
                  "句式清晰，适合训练主旨句的识别与段落功能分析。"
                ],
                "translation": "Gemini Drops 是我们每月定期发布的更新，告诉你如何最大化使用 Gemini 应用。"
              },
              {
                "original": "Find out what’s new in the Gemini app in July's Gemini Drop.",
                "analysis": [
                  "命令句式，Find out 为祈使句动词短语，强调行动建议。",
                  "what’s new 引导名词性从句，作 Find out 的宾语，便于练习从句功能。",
                  "in July's Gemini Drop 提供时间/来源信息，为地点状语性短语。",
                  "句子短小，适合练习信息定位与主题句提取。"
                ],
                "translation": "来看看七月的 Gemini Drop 中 Gemini 应用有哪些新变化。"
              }
            ]
          },
          {
            "title": "Try Glanceboard, a vibe-coded way to organize your day",
            "source": "Google Blog · Innovation and AI",
            "published": "2026-07-31",
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/",
            "readingTime": "8",
            "topic": "Technology / Practical project",
            "summary": "Glanceboard 是 Google 工程师构建的示例项目：每天读取日历与天气，用 Gemini 3.6 Flash 与图像模型生成一张个性化的 e-ink 卡片并推送到显示设备。文章开源了示例代码并说明了硬件与本地服务器的基本实现方式。",
            "reason": [
              "以项目为线索的说明文，适合作为课程示例材料或任务驱动写作练习。",
              "结构为问题背景 + 实现步骤 + 开源资源，便于训练过程类信息的梳理题。",
              "包含 open-source、local server、e-ink 等实用词汇，利于技术项目写作素材积累。",
              "文章短而具体，适合从示例中抽取步骤描述与因果关系题型练习。"
            ],
            "vocabulary": [
              {
                "word": "open-source",
                "phonetic": "/ˈəʊpən sɔːrs/",
                "part": "adj.",
                "translation": "开源的"
              },
              {
                "word": "e-ink",
                "phonetic": "/ˌiː ˈɪŋk/",
                "part": "n.",
                "translation": "电子墨水屏；e-ink 显示器"
              },
              {
                "word": "local server",
                "phonetic": "/ˈloʊkəl ˈsɜːrvər/",
                "part": "n.",
                "translation": "本地服务器"
              },
              {
                "word": "illustration",
                "phonetic": "/ˌɪləˈstreɪʃn/",
                "part": "n.",
                "translation": "插图；示意图"
              },
              {
                "word": "calendar",
                "phonetic": "/ˈkælɪndər/",
                "part": "n.",
                "translation": "日历；日程表"
              },
              {
                "word": "serene",
                "phonetic": "/səˈriːn/",
                "part": "adj.",
                "translation": "宁静的；平静的"
              },
              {
                "word": "deploy",
                "phonetic": "/dɪˈplɔɪ/",
                "part": "v.",
                "translation": "部署；上线"
              },
              {
                "word": "prototype",
                "phonetic": "/ˈprəʊtətaɪp/",
                "part": "n.",
                "translation": "原型；样机"
              }
            ],
            "sentences": [
              {
                "original": "Every morning, Glanceboard checks Raph’s family Google Calendar and the local weather.",
                "analysis": [
                  "主干：Glanceboard checks Raph’s family Google Calendar and the local weather，checks 为谓语。",
                  "Every morning 为时间状语，强调动作频率。",
                  "并列宾语结构，连接 calendar 和 the local weather。",
                  "句式简单明了，适合练习主谓宾信息提取与时态语义（习惯性动作）。"
                ],
                "translation": "每天早上，Glanceboard 会查看 Raph 一家人的 Google 日历和当地天气。"
              },
              {
                "original": "Glanceboard operates on a lightweight local server — no cloud accounts or bright screens required — offering a serene and personalized way to stay organized.",
                "analysis": [
                  "主干：Glanceboard operates on a lightweight local server，后半句是破折号插入的说明。",
                  "— no cloud accounts or bright screens required — 为插入语，补充说明实现方式的好处。",
                  "offering a serene and personalized way to stay organized 为现在分词短语，表示结果/用途。",
                  "句子结构复杂，适合练习插入语、并列与非谓语短语的识别与翻译。"
                ],
                "translation": "Glanceboard 在轻量的本地服务器上运行——不需要云账号或明亮的屏幕——为保持日常条理提供了一种宁静且个性化的方式。"
              },
              {
                "original": "Want to try Glanceboard yourself? We’re open-sourcing the code so you can ask Google Antigravity to make you one, too.",
                "analysis": [
                  "Want to try ...? 为祈使/疑问句，鼓励读者动手尝试。",
                  "We’re open-sourcing the code 为主动句，说明行动（开源）。",
                  "so 引导结果状语从句，说明开源的目的或效果。",
                  "包含口语化表达，适合训练书面与口语风格的对比分析。"
                ],
                "translation": "想自己试试 Glanceboard 吗？我们把代码开源了，这样你也可以让 Google Antigravity 帮你做一个。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-02",
      "status": "ready",
      "ai": {
        "intro": "只看最近一周内（优先昨天到今天）官方发布的产品或功能变更，说明学生如何上手与可能的免费/限制信息。",
        "updates": [
          {
            "event": "Google: Gemini 产品包与 Spark/Flash 功能更新（2026-07-31）",
            "impact": "在写作、课堂笔记整理与快速问答场景，Gemini Spark/Flash 的响应速度与浏览器/应用整合能减少来回复制，提高工作流效率；学生可在支持地区尝试用 Spark 进行快速草稿与翻译。",
            "howTo": "参阅 Google 官方博客说明，打开 Gemini App 或 Chrome 扩展（已获推送的账号），在模型选择器中切换到 Gemini Spark / Flash。官方范例与说明见下方链接。",
            "free": "官方文档声明部分功能面向 Gemini 用户推出，但明确写明某些模型或功能对欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费、配额与地域滚动上线以账号和地区为准（官方未说明全面免费细节）。",
            "category": "Gemini 更新",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard（示例工程）发布，演示用 Gemini Flash 生成每日看板（2026-07-31）",
            "impact": "对学生而言是可复刻的工程案例：把日历、天气与学习计划喂给模型，生成 e-ink 或网页看板，适合作为课程项目或作品集演示。",
            "howTo": "查看官方文章并参考开源仓库（Google 提供 Glanceboard 示例代码）；用 Google Calendar API + 本地轻量服务器 + Gemini 图像/Flash 接口生成每日卡片并推送到显示设备或网页。",
            "free": "官方案例没有提供统一免费托管服务；复刻耗费取决于用于的 API 与硬件，具体配额与费用以各 API 官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "summary": "Google 展示了用 Gemini 3.6 Flash 与 Nano Banana 组成的 Glanceboard 案例，并开源示例代码。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "impact": "使用 Copilot 的学生与开发者若仍依赖被弃用的 Gemini 2.5 Pro / 3 Flash 版本可能遇到可用性中断；需切换到官方推荐的替代模型以维持行内补全、Chat 与 Agent 功能。",
            "howTo": "打开 Copilot 设置中的模型选择器，参照变更建议将工作流迁移到官方推荐的替代模型；企业或组织账号可能需管理员在策略中启用目标模型。",
            "free": "可用性取决于你的 Copilot 订阅、组织策略与模型权限；官方公告未新增免费额度或更改既有计费规则。",
            "category": "Copilot 提醒",
            "summary": "GitHub 于 2026-07-31 在 changelog 发布，弃用 Gemini 2.5 Pro 与 Gemini 3 Flash，并给出替代模型建议。",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问（资源非保证，存在使用限制）。",
            "howTo": "访问 https://colab.research.google.com 并用 Google 帐号登录；新建笔记本，选择 Runtime 类型访问 GPU/TPU（资源按使用与优先级分配）。",
            "impact": "学生可以在浏览器中运行 ML 练习、训练小型模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发。",
            "free": "官方说明：Colab 免费可用，但资源不是保证且会根据使用情况限制；精确配额与优先级官方未说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于做课程项目与搭建作品集。",
            "howTo": "访问 https://education.github.com/pack，按照页面说明验证学校邮箱并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可免费获得如 GitHub Pro、云服务试用额度与开发者工具，有助于课程项目部署和学习。",
            "free": "各厂商条目中会写明资格与时限；整体页面列出每项优惠，但具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载与复现的开源大模型权重：Mistral（Hugging Face 上的模型卡）",
            "summary": "在 Hugging Face Hub 上可以找到 Mistral 等开源模型的 model card 与可下载权重，适合教学与本地复现研究。",
            "howTo": "访问模型页（示例：https://huggingface.co/mistralai/Mistral-7B-v0.1），按 Hugging Face 指引用 transformers/accelerate 下载与加载模型。",
            "impact": "学生能在本地或学校计算资源上复现实验、微调小模型或做课程演示；便于理解模型内部与工程化流程。",
            "free": "模型权重与许可证请参阅对应 Hugging Face 模型页；若模型有商业或使用限制，model card 会注明；若无说明则视为官方未说明。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许在 Hub 上免费发布 Gradio、Streamlit 或静态演示，适合展示模型与课堂项目。",
            "howTo": "参考文档并在 https://huggingface.co/spaces 创建你的 Space，选择 SDK（Gradio / Streamlit /Static）并推送代码。",
            "impact": "学生和教员可以把课程作业部署为交互式演示，便于评审和展示成果。",
            "free": "基础 Spaces 可免费创建；GPU/私有化或增强运算需升级为付费计划，具体配额与限制见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选 3 篇权威媒体近两周内的可免费阅读全文（教育/商业/文化类），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Students created AI rules they hope schools will adopt",
            "source": "NPR · Education",
            "published": "2026-07-30",
            "url": "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            "readingTime": "10",
            "topic": "教育 / AI 素养 / 校园规则",
            "summary": "来自美国 50 个州的 98 名高中生在模拟参议院中起草校园 AI 使用法案，建议在课堂设备可用时即教授 AI 素养、禁止计分考试使用 AI，并允许教师在怀疑不当使用时要求学生进行口头答辩，文章讨论了资源不均、检测误判与政策可行性等争点。",
            "reason": [
              "主题贴合考研英语社会与教育类命题，易展开议论文写作。",
              "文章结构为事件报道 + 引语 + 条款列举，适合训练推理题与信息定位题型。",
              "包含 legislation、consensus、provision 等抽象名词，有助积累学术词汇。",
              "长句结构丰富，含定语从句、what 从句与让步结构，适合句子分析练习。"
            ],
            "vocabulary": [
              {
                "word": "legislation",
                "phonetic": "/ˌledʒɪsˈleɪʃn/",
                "part": "n.",
                "translation": "立法；法规"
              },
              {
                "word": "navigate",
                "phonetic": "/ˈnævɪɡeɪt/",
                "part": "v.",
                "translation": "应对；设法处理"
              },
              {
                "word": "literacy",
                "phonetic": "/ˈlɪtərəsi/",
                "part": "n.",
                "translation": "素养；读写能力"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识；一致意见"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒn/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "coherent",
                "phonetic": "/kəʊˈhɪərənt/",
                "part": "adj.",
                "translation": "连贯的；有条理的"
              },
              {
                "word": "contentious",
                "phonetic": "/kənˈtenʃəs/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "inequity",
                "phonetic": "/ɪnˈekwəti/",
                "part": "n.",
                "translation": "不公平；不平等"
              },
              {
                "word": "guardrail",
                "phonetic": "/ˈɡɑːdreɪl/",
                "part": "n.",
                "translation": "防护规则；约束机制"
              },
              {
                "word": "oral defense",
                "phonetic": "/ˈɔːrəl dɪˈfens/",
                "part": "n.",
                "translation": "口头答辩"
              }
            ],
            "sentences": [
              {
                "original": "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                "analysis": [
                  "主干：The students gathered ... and attempted ...，两个谓语并列。",
                  "most of them high school juniors and seniors 是补充说明 students 的构成。",
                  "what the real, adult Congress has largely failed to do 为宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体解释 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                "translation": "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                "original": "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                "analysis": [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明现场。",
                  "watch the events unfold 使用 watch + 宾语 + 动词原形结构。",
                  "only to be revived 表示出乎意料的结果。",
                  "by 后三个并列名词短语说明法案被挽救的方式。"
                ],
                "translation": "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                "original": "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                "analysis": [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                "translation": "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            "title": "India wants to join the strawberry superpowers",
            "source": "BBC News · Business",
            "published": "2026-07-30",
            "url": "https://www.bbc.co.uk/news/articles/c8x274xxxpwo",
            "readingTime": "8",
            "topic": "商业 / 农业 / 技术创新",
            "summary": "文章讨论印度草莓产业如何通过无土栽培、气候控制与 AI 预测降低损失并培育本土耐热品种，兼顾成本、供应链与技术应用。",
            "reason": [
              "兼具商业成本与技术创新，适合考研英语产业转型类话题。",
              "结构包括背景、农户案例与专家评论，便于训练信息归纳与论证链分析。",
              "含 horticultural、quarantine、indigenous 等学术词汇。",
              "文中长句含让步与并列结构，适合拆句训练。"
            ],
            "vocabulary": [
              {
                "word": "labour-intensive",
                "phonetic": "/ˌleɪbər ɪnˈtensɪv/",
                "part": "adj.",
                "translation": "劳动密集型的"
              },
              {
                "word": "outlay",
                "phonetic": "/ˈaʊtleɪ/",
                "part": "n.",
                "translation": "支出；费用"
              },
              {
                "word": "horticultural",
                "phonetic": "/ˌhɔːtɪˈkʌltʃərəl/",
                "part": "adj.",
                "translation": "园艺的"
              },
              {
                "word": "quarantine",
                "phonetic": "/ˈkwɒrəntiːn/",
                "part": "n./v.",
                "translation": "检疫；隔离"
              },
              {
                "word": "substrate",
                "phonetic": "/ˈsʌbstreɪt/",
                "part": "n.",
                "translation": "培养基；基质"
              },
              {
                "word": "indigenous",
                "phonetic": "/ɪnˈdɪdʒənəs/",
                "part": "adj.",
                "translation": "本土的；本地原生的"
              },
              {
                "word": "climate-resilient",
                "phonetic": "/ˈklaɪmət rɪˈzɪliənt/",
                "part": "adj.",
                "translation": "具有气候适应力的"
              },
              {
                "word": "hydroponics",
                "phonetic": "/ˌhaɪdrəˈpɒnɪks/",
                "part": "n.",
                "translation": "水培；无土栽培"
              },
              {
                "word": "cultivar",
                "phonetic": "/ˈkʌltɪvɑːr/",
                "part": "n.",
                "translation": "栽培品种"
              },
              {
                "word": "pinpoint",
                "phonetic": "/ˈpɪnpɔɪnt/",
                "part": "v.",
                "translation": "精确确定"
              }
            ],
            "sentences": [
              {
                "original": "Despite that success the industry still relies on varieties that are imported from California, Florida, Italy and Spain, as no one in India has developed a domestic plant.",
                "analysis": [
                  "主干：the industry still relies on varieties。",
                  "Despite that success 是让步介词短语。",
                  "that are imported ... 是限制性定语从句，修饰 varieties。",
                  "as 引导原因状语从句，说明依赖进口的原因。",
                  "has developed 使用现在完成时，强调截至目前仍未培育成功。"
                ],
                "translation": "尽管取得了这些成绩，该产业仍依赖从加利福尼亚、佛罗里达、意大利和西班牙进口的品种，因为印度至今还没有培育出本土草莓品种。"
              },
              {
                "original": "The goal is to fast-track the development of India's first indigenous, climate-resilient strawberry cultivar that matches the large fruit size and firm texture of foreign varieties while natively tolerating Indian heatwaves.",
                "analysis": [
                  "主干：The goal is to fast-track the development，to fast-track 为不定式作表语。",
                  "of India's first ... cultivar 修饰 development，说明研发对象。",
                  "that matches ... 是限制性定语从句，修饰 cultivar。",
                  "while natively tolerating ... 是 while + 现在分词的伴随结构。",
                  "large fruit size 与 firm texture 为并列宾语。"
                ],
                "translation": "目标是加速培育印度首个本土、耐气候变化的草莓品种，使其既能达到外国品种的大果形和紧实口感，又能天然耐受印度的热浪。"
              },
              {
                "original": "The system employs AI, which uses the weather data to pinpoint when rain will strike, so farmers can then be advised to delay spraying their crops, preventing expensive chemicals from simply being washed away.",
                "analysis": [
                  "主干：The system employs AI。",
                  "which 引导非限制性定语从句，说明 AI 的工作方式。",
                  "when rain will strike 是宾语从句，作 pinpoint 的宾语。",
                  "so 引导结果状语从句；can be advised 为被动语态。",
                  "preventing ... 是现在分词结果结构；from being washed away 为 prevent ... from doing 的被动形式。"
                ],
                "translation": "该系统使用人工智能分析天气数据，准确判断降雨何时到来，从而提醒农民推迟给作物喷药，避免昂贵的农药被雨水白白冲走。"
              }
            ]
          },
          {
            "title": "From Felix the Cat to MTV: MoMA explores a century of animation",
            "source": "The Guardian · Culture",
            "published": "2026-07-31",
            "url": "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            "readingTime": "8",
            "topic": "文化 / 艺术 / 媒介史",
            "summary": "MoMA 的展览 It's Alive! 回顾近百年的动画发展，讨论早期角色动画、战后独立创作者、实验电影与数字时代的演变，并解释展览为何采用无声放映以突出视觉语言。",
            "reason": [
              "文化艺术与媒介史适合作为英语二人文主题。",
              "文章通过历史线索与展览策展人引语推进，利于训练主旨与论证结构分析。",
              "包含 anthropomorphic、manifesto 等高阶词汇。",
              "长句中有并列、定语与分词结构，适合拆句练习。"
            ],
            "vocabulary": [
              {
                "word": "anthropomorphic",
                "phonetic": "/ˌænθrəpəˈmɔːfɪk/",
                "part": "adj.",
                "translation": "拟人化的"
              },
              {
                "word": "outlandish",
                "phonetic": "/aʊtˈlændɪʃ/",
                "part": "adj.",
                "translation": "古怪夸张的"
              },
              {
                "word": "manifesto",
                "phonetic": "/ˌmænɪˈfestəʊ/",
                "part": "n.",
                "translation": "宣言"
              },
              {
                "word": "invigorate",
                "phonetic": "/ɪnˈvɪɡəreɪt/",
                "part": "v.",
                "translation": "使振兴；激励"
              },
              {
                "word": "aspire",
                "phonetic": "/əˈspaɪər/",
                "part": "v.",
                "translation": "渴望；立志"
              },
              {
                "word": "profound",
                "phonetic": "/prəˈfaʊnd/",
                "part": "adj.",
                "translation": "深刻的；深远的"
              },
              {
                "word": "inherent",
                "phonetic": "/ɪnˈhɪərənt/",
                "part": "adj.",
                "translation": "内在的；固有的"
              },
              {
                "word": "constituency",
                "phonetic": "/kənˈstɪtʃuənsi/",
                "part": "n.",
                "translation": "特定支持群体；选区"
              },
              {
                "word": "prominence",
                "phonetic": "/ˈprɒmɪnəns/",
                "part": "n.",
                "translation": "重要地位；显著"
              },
              {
                "word": "accessible",
                "phonetic": "/əkˈsesəbl/",
                "part": "adj.",
                "translation": "易理解的；可接近的"
              }
            ],
            "sentences": [
              {
                "original": "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                "analysis": [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，强调多样性。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                "translation": "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                "original": "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                "analysis": [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是并列过去分词短语，说明动机。",
                  "creating an animated film 是现在分词短语，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators。"
                ],
                "translation": "在第二次世界大战带来的创作需求激励下，又因曾为罗斯福 1944 年大选制作宣传动画而受到鼓舞，休布利向往一种由独立创作者推动的动画，这些创作者能够深入介入重要社会议题和深刻的艺术问题。"
              },
              {
                "original": "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                "analysis": [
                  "In an effort to do 表示目的。",
                  "make + 宾语 + 形容词 构成使役结构：make the artistry more accessible。",
                  "主句：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随结构，表示结果/附带效果。"
                ],
                "translation": "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-01",
      "status": "ready",
      "ai": {
        "intro": "只看今天新上线了什么、学生能拿它做什么，以及有哪些免费额度值得领取。",
        "updates": [
          {
            "event": "Gemini 7 月功能包上线：支持 macOS 全局语音输入，并推出更快的 Flash 模型",
            "impact": "写论文提纲、改写段落或整理笔记时，可以直接在当前窗口口述，不必反复复制到聊天页面；新 Flash 模型更适合快速问答和批量整理资料。",
            "howTo": "更新或打开 Gemini；macOS 用户在任意活动窗口调用语音功能，可口述、改写选中文字或生成视觉内容。模型可在 Gemini 的模型选择器中切换，具体可用性以账号和地区为准。",
            "free": "Google 官方公告称部分功能面向 Gemini 用户推出，但未承诺所有地区、账号或模型均免费；Gemini Spark 不适用于欧洲经济区、英国、瑞士和尼日利亚。",
            "category": "Gemini 更新",
            "summary": "Google 同时公布 Gemini Spark 全球扩展、Dropbox 等应用连接、个性化图片和头像复用等功能。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google 发布 Glanceboard：用 Gemini Flash 和图像模型自动生成每日课程与天气看板",
            "impact": "这是一个很实用的 AI 编程案例：学生可以借鉴它，把课程表、DDL、天气和复习计划汇总成宿舍屏幕或网页看板。",
            "howTo": "参考官方案例，把 Google Calendar 和天气数据交给轻量本地服务器处理，再提示图像模型生成当天视觉卡片；没有电子墨水屏也可先做普通网页版本。",
            "free": "官方案例没有宣布统一的免费成品服务；实际复刻可能涉及 Gemini API、硬件或日历服务费用，应以所用 API 的实时价格与免费额度为准。",
            "category": "AI 实用案例",
            "summary": "该案例强调本地轻量服务器运行，不要求 Glanceboard 用户注册云端账号。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot 停用 Gemini 2.5 Pro 与 Gemini 3 Flash",
            "impact": "如果你用 Copilot 写课程作业或项目代码，旧模型工作流可能失效；提前切换可避免聊天、行内编辑、Agent 模式和代码补全突然不可用。",
            "howTo": "打开 GitHub Copilot 的模型选择器，将 Gemini 2.5 Pro 改为 Gemini 3.1 Pro（Preview），将 Gemini 3 Flash 改为 Gemini 3.6 Flash；组织账号可能需要管理员先启用模型策略。",
            "free": "是否可用取决于你的 GitHub Copilot 套餐、组织策略和模型权限；官方公告未新增免费额度。",
            "category": "Copilot 提醒",
            "summary": "停用范围覆盖 Copilot Chat、行内编辑、Ask、Agent 模式和代码补全。",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated"
            }
          }
        ],
        "deals": []
      },
      "english": {
        "intro": "今天精选 3 篇免费全文，严格限定在近两周、权威媒体、社会与教育等英语二常考主题，并提供系统词汇与长难句精读。",
        "articles": [
          {
            "title": "Students created AI rules they hope schools will adopt",
            "source": "NPR · Education",
            "published": "2026-07-30",
            "url": "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            "readingTime": "10",
            "topic": "教育 / AI 素养 / 校园规则",
            "summary": "来自美国 50 个州的 98 名高中生在模拟参议院中起草校园 AI 使用法案。他们主张学生接触课堂设备后即接受 AI 素养教育、禁止在计分考试中使用 AI，并允许教师要求涉嫌不当使用 AI 的学生进行口头答辩。文章还呈现了 AI 使用年龄、学校资源差异、检测误判和家庭责任等争论。",
            "reason": [
              "主题是教育制度、技术伦理与青少年参与，贴近英语二社会与教育类命题范围。",
              "文章采用新闻叙事、引语、政策条款和正反辩论交替推进，适合训练观点归属题和推理题。",
              "包含 legislation、consensus、provision、inequity 等考研高频抽象词汇。",
              "长句中频繁出现 what 从句、only to do、while 让步以及多项并列结构。"
            ],
            "vocabulary": [
              {
                "word": "legislation",
                "phonetic": "/ˌledʒɪsˈleɪʃn/",
                "part": "n.",
                "translation": "立法；法规"
              },
              {
                "word": "navigate",
                "phonetic": "/ˈnævɪɡeɪt/",
                "part": "v.",
                "translation": "应对；设法处理"
              },
              {
                "word": "literacy",
                "phonetic": "/ˈlɪtərəsi/",
                "part": "n.",
                "translation": "素养；读写能力"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识；一致意见"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒn/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "coherent",
                "phonetic": "/kəʊˈhɪərənt/",
                "part": "adj.",
                "translation": "连贯的；有条理的"
              },
              {
                "word": "contentious",
                "phonetic": "/kənˈtenʃəs/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "inequity",
                "phonetic": "/ɪnˈekwəti/",
                "part": "n.",
                "translation": "不公平；不平等"
              },
              {
                "word": "guardrail",
                "phonetic": "/ˈɡɑːdreɪl/",
                "part": "n.",
                "translation": "防护规则；约束机制"
              },
              {
                "word": "oral defense",
                "phonetic": "/ˈɔːrəl dɪˈfens/",
                "part": "n.",
                "translation": "口头答辩"
              }
            ],
            "sentences": [
              {
                "original": "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                "analysis": [
                  "主干：The students gathered ... and attempted ...，两个谓语并列。",
                  "most of them high school juniors and seniors 是独立主格式的补充说明，解释 students 的构成。",
                  "what the real, adult Congress has largely failed to do 是 what 引导的宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体解释 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                "translation": "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                "original": "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                "analysis": [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明活动现场。",
                  "watch the events unfold 使用 watch + 宾语 + 动词原形结构。",
                  "only to be revived 表示出乎意料的结果：看似失败，却又被挽救。",
                  "by 后三个并列名词短语说明法案被挽救的方式。"
                ],
                "translation": "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                "original": "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                "analysis": [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定：该法案不是法律，正如这些青少年并非真正参议员。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                "translation": "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            "title": "India wants to join the strawberry superpowers",
            "source": "BBC News · Business",
            "published": "2026-07-30",
            "url": "https://www.bbc.co.uk/news/articles/c8x274xxxpwo",
            "readingTime": "8",
            "topic": "商业 / 农业 / 技术创新",
            "summary": "印度草莓产业长期依赖美国和欧洲的专利品种，农户还面临暴雨、进口种苗成本和季节性风险。研究人员正培育本土耐热品种，企业则采用无土栽培、滴灌、气候控制与 AI 天气预测，提高单位土地密度并减少损失。",
            "reason": [
              "兼具商业成本、农业供应链、气候风险和技术创新，是英语二常见的产业转型型文章。",
              "数据、农户案例和专家引语丰富，适合训练细节题、因果题与段落功能题。",
              "文章难度适中，包含 horticultural、quarantine、indigenous、climate-resilient 等高价值词汇。",
              "可直接积累乡村经济、可持续农业与技术应用相关写作素材。"
            ],
            "vocabulary": [
              {
                "word": "labour-intensive",
                "phonetic": "/ˌleɪbər ɪnˈtensɪv/",
                "part": "adj.",
                "translation": "劳动密集型的"
              },
              {
                "word": "outlay",
                "phonetic": "/ˈaʊtleɪ/",
                "part": "n.",
                "translation": "支出；费用"
              },
              {
                "word": "horticultural",
                "phonetic": "/ˌhɔːtɪˈkʌltʃərəl/",
                "part": "adj.",
                "translation": "园艺的"
              },
              {
                "word": "quarantine",
                "phonetic": "/ˈkwɒrəntiːn/",
                "part": "n./v.",
                "translation": "检疫；隔离"
              },
              {
                "word": "substrate",
                "phonetic": "/ˈsʌbstreɪt/",
                "part": "n.",
                "translation": "培养基；基质"
              },
              {
                "word": "indigenous",
                "phonetic": "/ɪnˈdɪdʒənəs/",
                "part": "adj.",
                "translation": "本土的；本地原生的"
              },
              {
                "word": "climate-resilient",
                "phonetic": "/ˈklaɪmət rɪˈzɪliənt/",
                "part": "adj.",
                "translation": "具有气候适应力的"
              },
              {
                "word": "hydroponics",
                "phonetic": "/ˌhaɪdrəˈpɒnɪks/",
                "part": "n.",
                "translation": "水培；无土栽培"
              },
              {
                "word": "cultivar",
                "phonetic": "/ˈkʌltɪvɑːr/",
                "part": "n.",
                "translation": "栽培品种"
              },
              {
                "word": "pinpoint",
                "phonetic": "/ˈpɪnpɔɪnt/",
                "part": "v.",
                "translation": "精确确定"
              }
            ],
            "sentences": [
              {
                "original": "Despite that success the industry still relies on varieties that are imported from California, Florida, Italy and Spain, as no one in India has developed a domestic plant.",
                "analysis": [
                  "主干：the industry still relies on varieties。",
                  "Despite that success 是让步介词短语，表示‘尽管取得成功’。",
                  "that are imported ... 是限制性定语从句，修饰 varieties。",
                  "as 引导原因状语从句，说明仍依赖进口的原因。",
                  "has developed 使用现在完成时，强调截至目前仍未培育成功。"
                ],
                "translation": "尽管取得了这些成绩，该产业仍依赖从加利福尼亚、佛罗里达、意大利和西班牙进口的品种，因为印度至今还没有培育出本土草莓品种。"
              },
              {
                "original": "The goal is to fast-track the development of India's first indigenous, climate-resilient strawberry cultivar that matches the large fruit size and firm texture of foreign varieties while natively tolerating Indian heatwaves.",
                "analysis": [
                  "主干：The goal is to fast-track the development，to fast-track 为不定式作表语。",
                  "of India's first ... cultivar 修饰 development，说明研发对象。",
                  "that matches ... 是限制性定语从句，修饰 cultivar。",
                  "while natively tolerating ... 是 while + 现在分词的省略结构，表示同时具备另一特征。",
                  "large fruit size 与 firm texture 为并列宾语。"
                ],
                "translation": "目标是加速培育印度首个本土、耐气候变化的草莓品种，使其既能达到外国品种的大果形和紧实口感，又能天然耐受印度的热浪。"
              },
              {
                "original": "The system employs AI, which uses the weather data to pinpoint when rain will strike, so farmers can then be advised to delay spraying their crops, preventing expensive chemicals from simply being washed away.",
                "analysis": [
                  "主干：The system employs AI。",
                  "which 引导非限制性定语从句，补充说明 AI 的工作方式。",
                  "when rain will strike 是宾语从句，作 pinpoint 的宾语。",
                  "so 引导结果状语从句；can be advised 为被动语态。",
                  "preventing ... 是现在分词结果/伴随结构；from being washed away 为 prevent ... from doing 的被动形式。"
                ],
                "translation": "该系统使用人工智能分析天气数据，准确判断降雨何时到来，从而提醒农民推迟给作物喷药，避免昂贵的农药被雨水白白冲走。"
              }
            ]
          },
          {
            "title": "From Felix the Cat to MTV: MoMA explores a century of animation",
            "source": "The Guardian · Culture",
            "published": "2026-07-31",
            "url": "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            "readingTime": "8",
            "topic": "文化 / 艺术 / 媒介史",
            "summary": "纽约现代艺术博物馆的展览 It's Alive! 回顾数字技术出现前约一百年的动画发展。文章从早期角色动画谈到战后独立创作者、社会议题、实验艺术和 MTV 广告，并解释展览为何采用无声放映，让观众更专注于视觉语言。",
            "reason": [
              "文化艺术与媒介演变属于考研英语常见人文主题，避免了过度专业的工程技术内容。",
              "文章围绕‘动画不仅是卡通角色’展开观点修正，适合训练主旨题和例证作用题。",
              "含有 anthropomorphic、manifesto、aspire、inherent、prominence 等高频学术词。",
              "多个长句包含让步、定语从句、独立主格与分词结构，具有较高拆句训练价值。"
            ],
            "vocabulary": [
              {
                "word": "anthropomorphic",
                "phonetic": "/ˌænθrəpəˈmɔːfɪk/",
                "part": "adj.",
                "translation": "拟人化的"
              },
              {
                "word": "outlandish",
                "phonetic": "/aʊtˈlændɪʃ/",
                "part": "adj.",
                "translation": "古怪夸张的"
              },
              {
                "word": "manifesto",
                "phonetic": "/ˌmænɪˈfestəʊ/",
                "part": "n.",
                "translation": "宣言"
              },
              {
                "word": "invigorate",
                "phonetic": "/ɪnˈvɪɡəreɪt/",
                "part": "v.",
                "translation": "使振兴；激励"
              },
              {
                "word": "aspire",
                "phonetic": "/əˈspaɪər/",
                "part": "v.",
                "translation": "渴望；立志"
              },
              {
                "word": "profound",
                "phonetic": "/prəˈfaʊnd/",
                "part": "adj.",
                "translation": "深刻的；深远的"
              },
              {
                "word": "inherent",
                "phonetic": "/ɪnˈhɪərənt/",
                "part": "adj.",
                "translation": "内在的；固有的"
              },
              {
                "word": "constituency",
                "phonetic": "/kənˈstɪtʃuənsi/",
                "part": "n.",
                "translation": "特定支持群体；选区"
              },
              {
                "word": "prominence",
                "phonetic": "/ˈprɒmɪnəns/",
                "part": "n.",
                "translation": "重要地位；显著"
              },
              {
                "word": "accessible",
                "phonetic": "/əkˈsesəbl/",
                "part": "adj.",
                "translation": "易理解的；可接近的"
              }
            ],
            "sentences": [
              {
                "original": "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                "analysis": [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，可理解为‘这一媒介多样性的真实面貌’。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                "translation": "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                "original": "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                "analysis": [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是两个并列过去分词短语，说明 Hubley 受到的推动。",
                  "creating an animated film 是现在分词，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators；social issues 与 artistic questions 并列。"
                ],
                "translation": "在第二次世界大战带来的创作需求激励下，又因曾制作动画片支持罗斯福参加 1944 年大选而受到鼓舞，休布利向往一种由具有独立思想的创作者推动的动画；这些创作者能够深入介入重要社会议题和深刻艺术问题。"
              },
              {
                "original": "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                "analysis": [
                  "In an effort to do 表示目的：为了……。",
                  "make + 宾语 + 形容词构成使役结构：make the artistry more accessible。",
                  "主干：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随/结果结构；a chance to get ... 中不定式修饰 chance。"
                ],
                "translation": "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    }
  ]
};