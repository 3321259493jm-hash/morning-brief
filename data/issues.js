const issue20260908 = {
  "date": "2026-09-08",
  "status": "ready",
  "ai": {
    "intro": "本期优先收录 9 月 3—4 日已核验的官方发布，并把免费条件与官方未说明的限制分开写明。",
    "updates": [
      {
        "event": "Gemini app 与 Gemini API 上线 Lyria 3.5 音乐生成（2026-09-04）",
        "summary": "Google 官方博客确认 Lyria 3.5 已在 Gemini app 和 Gemini API 中上线，主打更具表现力的人声和更丰富的编曲，能够生成更高保真的音乐轨道。",
        "howTo": "在 Gemini 网页或移动端打开音乐生成入口，输入主题并选择风格/人声/器乐；开发者可在 Google AI Studio 和 Gemini API 文档中使用 Lyria 3.5。官方说明全局网页和移动端均可用。",
        "impact": "学生可用它快速做课程展示背景音乐、短视频音乐、铃声或创作灵感实验；但仍需核对平台的输出权利和使用条款，避免用于未授权内容。",
        "free": "官方说明该功能在 Gemini app 与网页全球可用，且 API 亦在 Google AI Studio 里可用；但官方未说明具体免费额度、账号资格、地区例外和生成次数。",
        "category": "AI 音乐生成",
        "source": {
          "name": "Google 官方博客",
          "published": "2026-09-04",
          "url": "https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/"
        }
      },
      {
        "event": "GitHub Copilot 正式推出 GPT-6 Astra（2026-09-04）",
        "summary": "GitHub Changelog 公告，GPT-6 Astra 已在 GitHub Copilot 正式可用，官方强调其在长周期编码任务中会规划、验证和在宣布完成前自我确认结果。",
        "howTo": "在支持的 GitHub Copilot 客户端中打开模型选择器，选择 GPT-6 Astra；如果暂未出现，可等待逐步 rollout。企业和团队管理员可在 Copilot settings 里控制访问。",
        "impact": "学生可把课程项目拆成规划、实现和验证步骤，尤其适合跨文件重构和长期任务；但仍需手动审查 diff、运行测试，并不应把模型的“已完成”当作结论。",
        "free": "官方说明 GPT-6 Astra 可用于 Copilot Pro+、Max、Business 和 Enterprise，并按 provider list pricing 计费；官方未说明统一免费额度、个人计划可用性或地区范围。",
        "category": "Copilot 模型",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-04",
          "url": "https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot/"
        }
      },
      {
        "event": "GitHub Copilot 周更新：内容排除与 JetBrains 兼容性增强（2026-09-04）",
        "summary": "GitHub 的周更新说明 Copilot app 和 CLI 现在遵守 content exclusions，同时为 JetBrains 用户提供了更快的功能交付和更优代码质量。",
        "howTo": "在 Copilot app、CLI 或 JetBrains 客户端中检查更新并确认型号/架构支持；在仓库或组织设置中启用 content exclusions，再验证敏感代码不会被带入 agent 上下文。",
        "impact": "学生在管理实验数据、课程仓库或私人资源时，可先配置排除规则，再使用 agent 做分析和重构；同时应保留测试和人工审查，避免把 agent 输出直接当作最终答案。",
        "free": "公告只列出可用计划和逐步 rollout，未说明这些功能的统一免费额度、地区覆盖范围或各计划具体配额；访问仍可能受管理员策略影响。",
        "category": "Copilot 安全与可用性",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-04",
          "url": "https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31/"
        }
      }
    ],
    "deals": [
      {
        "event": "Google Gemini API 免费层与 Google AI Studio",
        "summary": "Google Gemini API 定价页说明，开发者可在免费层中访问有限模型、免费输入与输出 token，并借助 Google AI Studio 进行原型测试与实验。",
        "howTo": "访问 Google AI Studio 并登录 Google 账号；选择免费层中的模型进行提示词测试和 API 原型开发，并在模型文档中确认各模型的当前使用限制。",
        "impact": "学生可在不先付费的前提下做文本处理、实验设计和 API 原型，对课程项目做早期验证，再决定是否升级到生产配置。",
        "free": "官方明确免费层包含有限模型访问、免费输入/输出 token 与 AI Studio；具体固定额度、用户地区和重置周期官方未说明。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Google Colab FAQ 明确说明，Colab 是无需本地设置的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，并在单元格中运行 Python；需要更高计算资源时，可在运行时设置中尝试 GPU/TPU，并保存到 Google Drive。",
        "impact": "学生可直接运行课程代码、分析数据、训练小型模型，减少本地环境配置与硬件门槛。",
        "free": "官方确认 Colab 免费，但资源不保证且不无限，且使用上限会波动；本页说明其优先支持正在编写 notebook 的用户，官方未说明统一固定额度。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方提供 GitHub Student Developer Pack，面向已验证学生的开发者工具与学习资源，其中包含 GitHub Copilot 等核心工具与教育体验。",
        "howTo": "访问 GitHub Education 的 Student Developer Pack，完成学生资格验证，然后打开 Copilot 相关权益入口，按页面提示开启与使用。",
        "impact": "学生可以把这些工具用于作业、课程项目和学习路径，而不必先承担高额软件成本；同时仍应保留测试和人工检查，不把 AI 输出直接当成最终答案。",
        "free": "官方页面说明面向 verified students，且包括 Copilot 等工具；具体权益内容与模型限制以页面说明为准，官方未说明统一额度与地区例外。",
        "category": "学生/教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Qwen3-Next-80B-A3B-Instruct 开放权重模型",
        "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-Next-80B-A3B-Instruct 的公开模型下载入口，并说明其 80B 总参数、3B 激活参数和 262,144 token 原生上下文长度。",
        "howTo": "打开 Qwen 官方模型卡，按说明使用 Transformers 或 vLLM、Ollama、LM Studio、MLX-LM 与 llama.cpp 等环境进行本地测试；先用短输入验证显存和速度。",
        "impact": "有 GPU 或云端 notebook 的学生可在本地或轻量环境中研究长上下文、MoE 和推理流程，而不必先为 API 付费。",
        "free": "模型权重可公开下载；本地算力、存储和网络成本仍由使用者承担，官方未说明统一免费 API 配额、账号资格或地区范围。",
        "category": "开放模型权重",
        "source": {
          "name": "Qwen 官方 Hugging Face 模型卡",
          "published": "官方未说明",
          "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
        }
      }
    ]
  },
  "english": {
    "intro": "精选近两周免费可读材料，覆盖极端天气、灾难报道和交通安全；每篇提供考研英语二风格的结构、词汇和短句精读。",
    "articles": [
      {
        "title": "Weather tracker: Typhoon Saudel causes mass evacuations in south-east China",
        "source": "The Guardian",
        "published": "2026-09-07",
        "url": "https://www.theguardian.com/world/2026/sep/07/typhoon-saudel-mass-evacuations-south-east-china-weather-tracker",
        "readingTime": "6",
        "topic": "环境 / 极端天气",
        "summary": "文章聚焦台风“苏德尔”给中国东南沿海带来的强降雨与洪涝，报道了福建、浙江、江西和广东多省出现的暴雨、山体滑坡、基础设施受损以及大规模转移安置。报道先给出降雨量和撤离人数，再用具体城市与村庄的伤亡与抢险情况说明灾害的真实规模，最后把事件放回今年多轮台风和极端天气背景中，说明这类灾害不是孤立现象，而是区域气候风险和城市脆弱性叠加的结果。",
        "reason": [
          "环境灾害与公共安全并置，适合考研英语二的社会与环境题材。",
          "文章从天气现象切入，再扩展到灾害损失与抢险行动，结构清晰。",
          "可训练识别数据、地点、因果和背景信息之间的层级关系。",
          "词汇覆盖 typhoon、evacuate、flood-prone、infrastructure 等高频新闻表达。",
          "适合积累“事件—影响—背景”的写作组织方式。"
        ],
        "vocabulary": [
          { "word": "typhoon", "phonetic": "/taɪˈfuːn/", "part": "n.", "translation": "台风" },
          { "word": "evacuate", "phonetic": "/ɪˈvækjueɪt/", "part": "v.", "translation": "撤离；疏散" },
          { "word": "torrential", "phonetic": "/təˈrenʃəl/", "part": "adj.", "translation": "暴雨的；倾盆的" },
          { "word": "infrastructure", "phonetic": "/ˈɪnfrəstrʌktʃə/", "part": "n.", "translation": "基础设施" },
          { "word": "landslip", "phonetic": "/ˈlændslɪp/", "part": "n.", "translation": "山体滑坡" },
          { "word": "flash flood", "phonetic": "/flæʃ flʌd/", "part": "n.", "translation": "山洪暴发；突发性洪灾" },
          { "word": "embankment", "phonetic": "/ɪmˈbæŋkmənt/", "part": "n.", "translation": "堤岸；路堤" },
          { "word": "flood-prone", "phonetic": "/ˈflʌd prəʊn/", "part": "adj.", "translation": "易遭洪灾的" },
          { "word": "rescue", "phonetic": "/ˈreskjuː/", "part": "n./v.", "translation": "救援；营救" },
          { "word": "extreme rainfall", "phonetic": "/ɪkˈstriːm ˈreɪnˌfɔːl/", "part": "n.", "translation": "极端降雨" }
        ],
        "sentences": [
          {
            "original": "Typhoon Saudel brought days of torrential rain to Zhejiang, Jiangxi, Fujian and Guangdong provinces in south-east China last week.",
            "analysis": [
              "主句是 Typhoon Saudel brought...",
              "days of torrential rain 作直接宾语，体现灾害的持续性。",
              "to ... provinces in ... China 是地点状语，明确灾区范围。",
              "last week 将事件置于明确时间坐标，便于新闻背景的呈现。"
            ],
            "translation": "上周，苏德尔台风给中国东南部的浙江、江西、福建和广东省带来了数天的暴雨。"
          },
          {
            "original": "In Fujian, authorities estimate that almost 600,000 people were evacuated from high-risk, flood-prone areas.",
            "analysis": [
              "estimate that... 是典型新闻写作的归纳结构，说明数字来自官方估计。",
              "almost 600,000 people 是核心数字，体现灾区规模。",
              "from high-risk, flood-prone areas 是空间限制，突出风险区域的性质。",
              "整句可用于练习作者如何把统计信息嵌入叙述中。"
            ],
            "translation": "在福建，当地当局估计，近 60 万人已从高风险、易遭洪灾地区撤离。"
          },
          {
            "original": "This is the seventh typhoon to affect China this year, and Saudel arrived shortly after Typhoon Narra dumped heavy rain on Guangdong, Hainan and Guangxi late last month.",
            "analysis": [
              "This is the seventh typhoon... 提供背景信息，增强事件的季节性和频率。",
              "and 连接两个并列分句，形成“当前事件—前置事件”的因果时间链。",
              "shortly after ... late last month 使句子形成清晰的时间顺序。",
              "dumped heavy rain 是具体事件动词，增强叙事的图像性。"
            ],
            "translation": "这是今年影响中国的第七个台风，而苏德尔在上月末刚在广东、海南和广西造成大雨后不久到来。"
          }
        ]
      },
      {
        "title": "Questions grow over China's reporting of Nepal floods death toll",
        "source": "NPR",
        "published": "2026-09-07",
        "url": "https://www.npr.org/2026/09/07/nx-s1-5960357/nepal-floods-questions-over-chinas-reporting",
        "readingTime": "7",
        "topic": "社会 / 传播与灾难",
        "summary": "文章报道了中国和尼泊尔在洪灾死亡人数统计上的巨大差距，并指出尼泊尔公布了大量失踪人员名单，而中国官方在灾后五天才公开其境内失踪人员的国家来源。这一对比让外界质疑中国对灾情和失踪人员信息的公开程度及其对国际舆论的指导作用。文章随后引出中国媒体与审查体系的总体背景，说明在信息管控更强的环境下，事实很难得到及时、完整地披露。",
        "reason": [
          "灾难叙事与信息透明度结合，适合社会与媒体议题写作。",
          "结构以对比为起点，再转入制度背景与媒体控制的分析。",
          "可训练分析“事实差异—原因判断—制度背景”的逻辑链。",
          "词汇涵盖 toll、missing、censorship、state-run 等新闻语境高频词。",
          "适合练习“比较法”与“机制分析”写作。"
        ],
        "vocabulary": [
          { "word": "death toll", "phonetic": "/ˈdeθ təʊl/", "part": "n.", "translation": "死亡人数" },
          { "word": "authorities", "phonetic": "/ɔːˈθɒrɪtiz/", "part": "n.", "translation": "当局；有关部门" },
          { "word": "missing", "phonetic": "/ˈmɪsɪŋ/", "part": "adj.", "translation": "失踪的" },
          { "word": "censorship", "phonetic": "/ˈsensəʃɪp/", "part": "n.", "translation": "审查制度；检查制度" },
          { "word": "state-run", "phonetic": "/ˈsteɪt rʌn/", "part": "adj.", "translation": "国营的；由国家运营的" },
          { "word": "disclose", "phonetic": "/dɪsˈkloʊz/", "part": "v.", "translation": "披露；公开" },
          { "word": "contrast", "phonetic": "/ˈkɒntrɑːst/", "part": "n.", "translation": "对比；反差" },
          { "word": "restrict", "phonetic": "/rɪˈstrɪkt/", "part": "v.", "translation": "限制；约束" },
          { "word": "reporting", "phonetic": "/rɪˈpɔːtɪŋ/", "part": "n.", "translation": "报道；新闻报道" },
          { "word": "transparency", "phonetic": "/trænˈspærənsi/", "part": "n.", "translation": "透明度" }
        ],
        "sentences": [
          {
            "original": "Shortly after the deadly flash floods hit the border of Nepal and China on Aug. 26, Nepalese authorities released a list of names, ages and nationalities of hundreds of missing foreigners.",
            "analysis": [
              "主句是 Nepalese authorities released a list...",
              "Shortly after ... on Aug. 26 是时间状语，形成事件起点。",
              "of hundreds of missing foreigners 限定名单的对象。",
              "这一句以清晰的时间顺序突出信息披露的不对称。"
            ],
            "translation": "8 月 26 日致命山洪袭击尼泊尔和中国边境后不久，尼泊尔当局发布了数百名失踪外国人的姓名、年龄和国籍清单。"
          },
          {
            "original": "In contrast, Chinese authorities took five days to disclose that the 261 foreigners missing in Tibet come from 23 countries.",
            "analysis": [
              "In contrast 直接形成对比，凸显两国信息披露差异。",
              "took five days to disclose ... 是典型时间延迟表达。",
              "come from 23 countries 是信息的补充说明。",
              "整句可用于练习比较句式与时间表达。"
            ],
            "translation": "相比之下，中国当局花了五天时间才披露，西藏境内失踪的 261 名外国人来自 23 个国家。"
          },
          {
            "original": "Xinhua and CCTV have total information dominance, and outlets are expected to guide public opinion, said David Bandurski.",
            "analysis": [
              "句子采用 reported speech 结构，将信息控制的背景嵌入叙述中。",
              "have total information dominance 是比喻性表达，强调媒体垄断。",
              "are expected to guide public opinion 说明官方媒体的公共角色。",
              "该句适合练习新闻报道中的引语与评价结合。"
            ],
            "translation": "大卫·班德尔斯基说，新华社和中央电视台拥有全部信息支配权，而这些媒体也被期望引导公众舆论。"
          }
        ]
      },
      {
        "title": "Flight recorders recovered from 'devastating' Amazon cargo plane crash",
        "source": "BBC",
        "published": "2026-09-08",
        "url": "https://www.bbc.co.uk/news/articles/ce8e32n8epeo",
        "readingTime": "6",
        "topic": "社会 / 交通安全",
        "summary": "BBC 报道了一起在迈阿密国际机场发生的货运飞机失事事件：一架波音 767-300 在起落跑道外偏离后冲出跑道，撞击机场内两辆车辆，造成五人死亡、五人重伤。报道先说明航录器已被找到，再强调事故调查仍处于事实调查阶段，不能下结论；随后交代飞机来自波多黎各、当时有两名机组成员，以及其撞击了导航设备和一辆清洁公司车辆。文章把事件放回机场安全和运行流程背景中，强调事故原因仍待调查。",
        "reason": [
          "交通事故与公共安全紧密相关，符合社会现实议题。",
          "新闻结构清晰：肇事事实—调查进展—技术与背景补充。",
          "可训练识别被动语态、时间线和情态判断的使用。",
          "词汇涵盖 overshot、runway、perimeter、investigators 等航空安全常用词。",
          "适合积累事故报道中的因果、证据与调查逻辑。"
        ],
        "vocabulary": [
          { "word": "runway", "phonetic": "/ˈrʌnweɪ/", "part": "n.", "translation": "跑道" },
          { "word": "overshoot", "phonetic": "/ˌəʊvəˈʃuːt/", "part": "v.", "translation": "越过；冲出" },
          { "word": "investigator", "phonetic": "/ɪnˈvestɪɡeɪtə/", "part": "n.", "translation": "调查员；调查人员" },
          { "word": "perimeter", "phonetic": "/pəˈrɪmɪtə/", "part": "n.", "translation": "周界；机场围界" },
          { "word": "cargo", "phonetic": "/ˈkɑːɡəʊ/", "part": "n.", "translation": "货物；货运" },
          { "word": "navigational aids", "phonetic": "/ˌnævɪɡeɪʃənl eɪdz/", "part": "n.", "translation": "导航辅助设备" },
          { "word": "crew", "phonetic": "/kruː/", "part": "n.", "translation": "机组人员" },
          { "word": "fact-finding", "phonetic": "/ˈfækt ˈfaɪndɪŋ/", "part": "adj.", "translation": "事实调查阶段的" },
          { "word": "severity", "phonetic": "/sɪˈverəti/", "part": "n.", "translation": "严重程度" },
          { "word": "casualty", "phonetic": "/ˈkæʒuəlti/", "part": "n.", "translation": "伤亡人员；事故受害者" }
        ],
        "sentences": [
          {
            "original": "Investigators have recovered the flight recorders from the Amazon cargo plane that crashed at Miami International Airport, but the priority remains the recovery of victims, the National Transportation Safety Board has said.",
            "analysis": [
              "主句由 Investigators have recovered... but ... remains ... 组成对照结构。",
              "that crashed at Miami International Airport 是定语从句，限定飞机。",
              "the priority remains the recovery of victims 突出事故应对的当务之急。",
              "the National Transportation Safety Board has said 引出官方说法，增强报道可信度。"
            ],
            "translation": "美国国家运输安全委员会表示，调查人员已从坠毁在迈阿密国际机场的亚马逊货运飞机上找回航行记录器，但目前的首要任务仍然是救援受难者。"
          },
          {
            "original": "Five people were killed and five others seriously injured when the Boeing 767-300, operated by 21 Air, overshot the runway shortly before 14:00 local time.",
            "analysis": [
              "when 引导时间状语从句，明确事故发生时刻。",
              "operated by 21 Air 是过去分词短语，说明飞机运营方。",
              "overshot the runway 是核心动作，交代飞机冲出跑道。",
              "五人死亡、五人重伤的量化信息增强事实性。"
            ],
            "translation": "当地时间 14:00 前后，21 Air 运营的波音 767-300 飞机冲出跑道，造成五人死亡、另有五人重伤。"
          },
          {
            "original": "NTSB chairwoman Jennifer Homendy said it was too early to draw conclusions about what caused the crash, with investigators still in the \"fact finding stage\".",
            "analysis": [
              "it was too early to draw conclusions ... 是典型官方谨慎表达。",
              "about what caused the crash 引出尚未确定的因果原因。",
              "with investigators still in the \"fact finding stage\" 是伴随状语，说明调查仍处于早期。",
              "这类句式非常适合学习新闻中的“未确认结论”表达。"
            ],
            "translation": "国家运输安全委员会主席珍妮弗·霍门迪表示，现在下结论关于事故成因还为时过早，因为调查人员仍处于“事实调查阶段”。"
          }
        ]
      }
    ]
  }
};

const todaysIssue = {
  "date": "2026-09-09",
  "status": "ready",
  "ai": {
    "intro": "本期核验了 9 月 8 日官方 AI 发布，并补充可立即使用的免费资源；价格、额度、地区和 rollout 以各来源当前说明为准，未说明处明确标注。",
    "updates": [
      {
        "event": "Claude Opus 5 正式发布（2026-09-08）",
        "summary": "Anthropic 宣布 Claude Opus 5 上线，定位为日常使用的高能力模型，强调编码、知识工作、科学研究和反复验证任务；官方还同步推出对话中途更换工具和 API 自动 fallback 两项 beta 更新。",
        "howTo": "在 Claude 网页、桌面端、移动端、Claude Code 或 Claude Cowork 中选择 Opus 5；开发者可在 Claude API 使用模型标识 claude-opus-5，并按官方文档配置 mid-conversation tool changes 或 automatic fallbacks。",
        "impact": "学生可让它先规划再实现课程项目、检查代码并迭代修复，也可在 API 原型中测试工具切换；涉及研究结论时仍要核对原始资料、运行测试并保留人工复核。",
        "free": "官方说明 Opus 5 在所有平台可用，API 价格为每百万输入 token 5 美元、输出 token 25 美元；网页免费计划的具体消息数没有固定值，受滚动五小时窗口、对话长度、模型和功能影响，官方未说明 Opus 5 的免费专属额度。",
        "category": "AI 模型发布",
        "source": {
          "name": "Anthropic 官方公告",
          "published": "2026-09-08",
          "url": "https://www.anthropic.com/news/claude-opus-5"
        }
      },
      {
        "event": "Claude 文本水印与检测 API 预览（2026-09-08）",
        "summary": "Anthropic 公布未来 Claude 模型将生成带水印的文本：水印不添加隐藏字符、不增加 token，也不会改变读者可见的内容；同时向符合条件的组织开放检测 API private preview。",
        "howTo": "继续在 Claude 中正常生成或编辑文本；若属于监管机构、媒体、事实核查、独立研究或教育组织等符合条件的机构，可阅读公告并登记检测 API 访问兴趣。短文本、纯校对和代码中的水印识别能力有限。",
        "impact": "学生写作时可以把它当作 AI 使用透明度和学术诚信案例，学习区分“可能由 Claude 参与”与“证明由某人生成”；提交作业仍应遵守学校的 AI 使用规定。",
        "free": "公告称水印不会使模型更慢或更贵，检测 API 当前为符合条件组织的 private preview；个人是否可用、免费额度、地区范围和正式开放时间官方未说明。",
        "category": "AI 透明度与合规",
        "source": {
          "name": "Anthropic 官方公告",
          "published": "2026-09-08",
          "url": "https://www.anthropic.com/news/claude-text-watermark"
        }
      },
      {
        "event": "Anthropic 预览 Model Hardware Standard（2026-09-08）",
        "summary": "Anthropic 向首批科研实验室和先进制造商开放 Model Hardware Standard 研究预览，这是一套让 AI agent 通过标准化驱动、安全操作显微镜、液体处理器和机械臂等可编程设备的规范。",
        "howTo": "有相关实验室或制造设备的研究者可阅读 MHS 公告并在 modelhardwarestandard.com 提交研究预览申请；学生可先用公告中的 MCP、CLI 和 API 思路理解设备编排，但不能把研究预览当作公开可用产品。",
        "impact": "机器人、自动化和实验课题组可据此思考如何让多个仪器共享状态、监测错误并按步骤执行实验；涉及真实设备时必须保留专家监督和物理安全检查。",
        "free": "官方称当前是面向首批实验室和制造商的 research preview，计划后续开源；申请资格、费用、地区、设备数量和开放时间官方未说明。",
        "category": "AI agents / 机器人",
        "source": {
          "name": "Anthropic 官方公告",
          "published": "2026-09-08",
          "url": "https://www.anthropic.com/news/model-hardware-standard-research-preview"
        }
      },
      {
        "event": "GitHub Enterprise Server 3.22 正式可用并加入 Copilot CLI 技术预览（2026-09-08）",
        "summary": "GitHub 宣布 GHES 3.22 generally available；企业管理员可在断网或 air-gapped 环境配置 Copilot CLI，企业团队功能正式可用，规则集还新增按用户绕过和 required reviewers 等控制。",
        "howTo": "企业管理员升级或部署 GHES 3.22，配置一次模型 provider 后让用户用 GHES 凭据运行 Copilot CLI；需要代码治理时，在仓库规则集中配置个人 bypass 或 required reviewers，并按官方文档验证权限。",
        "impact": "实验室或课程团队可在受控网络中试验 agent，同时用 required reviewers 让数据、SQL 或安全改动经过指定同学/老师审阅；个人用户不能把 GHES 技术预览当作 GitHub.com 的默认功能。",
        "free": "公告只说明 GHES 中 Copilot CLI 能力为 technical preview，且功能可能变化；GHES 授权、Copilot 计划、模型 provider 费用、地区和免费配额官方未说明。",
        "category": "Copilot / 企业开发",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-08",
          "url": "https://github.blog/changelog/2026-09-08-github-enterprise-server-3-22-is-now-generally-available"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划覆盖日常问题；网页、桌面端、移动端和 Claude Code 共用同一使用池，限制按滚动五小时窗口计算，并会受对话长度、模型和功能影响。",
        "howTo": "注册或登录 Claude，使用 Free 计划进行问答、摘要、改写和学习规划；在 Settings > Usage 查看当前状态，达到限制后等待窗口重置，不要把免费计划当作固定消息数服务。",
        "impact": "学生可以先用免费网页功能整理笔记、生成提纲和解释难点，再根据使用量判断是否需要付费；长文和复杂任务应分段并保留原始材料。",
        "free": "官方确认 Free 计划可用，但不承诺固定消息数；限制在滚动五小时窗口重置，并可能有其他周/月、模型或功能限制。账号资格、地区例外和统一固定配额官方未说明。",
        "category": "长期免费应用",
        "source": {
          "name": "Claude 官方定价页",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Hugging Face Spaces 免费 Static Spaces 与 ZeroGPU",
        "summary": "Hugging Face 官方文档说明 Static Spaces 对所有人免费；状态良好的免费个人账号还可托管最多 2 个使用 ZeroGPU 的 Gradio Spaces，CPU Basic 默认资源无小时费用。",
        "howTo": "登录 Hugging Face，创建 Space 并选择 Static HTML；若要运行 Gradio，使用状态良好的免费个人账号创建不超过 2 个 ZeroGPU Spaces，并在设置中检查当前硬件和资源状态。",
        "impact": "学生可把交互式网页、课程可视化或轻量模型 demo 部署成可分享链接；需要 GPU、Docker 或更高硬件时应先确认是否会进入付费计划。",
        "free": "官方明确 Static Spaces 免费，免费个人账号最多 2 个 ZeroGPU Gradio Spaces；普通 Gradio/Docker Spaces 的 compute 创建通常需要 Pro、Team 或 Enterprise，地区和 ZeroGPU 排队额度官方未说明。",
        "category": "免费部署 / 开放模型生态",
        "source": {
          "name": "Hugging Face 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces-overview"
        }
      },
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google 官方定价页保留免费层，包含对部分模型的有限访问、免费输入与输出 token 以及 Google AI Studio；免费层的内容可用于改进 Google 产品。",
        "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型测试提示词或 API 原型；正式调用前查看当前模型表格和账户限制，并避免把敏感资料直接提交。",
        "impact": "学生可用免费层做文本分类、课程演示和 API 调试，先验证想法再决定是否购买生产吞吐；实验报告应记录模型、时间和实际限制。",
        "free": "官方确认免费层含有限模型访问、免费输入/输出 token 和 AI Studio；统一固定额度、地区清单和重置周期官方未说明，免费层内容可用于改进 Google 产品。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费 Jupyter 环境",
        "summary": "Google Colab FAQ 说明，Colab 无需本地设置即可使用，免费提供包括 GPU 和 TPU 在内的计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或上传 notebook，在单元格运行 Python；需要硬件时尝试运行时设置中的 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可直接运行课程代码、清洗数据和做小型模型实验，减少环境安装成本；分享 notebook 时要检查代码、输出和注释是否包含个人或敏感信息。",
        "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；免费托管运行时限制挖矿、代理、绕过 UI 等行为，统一 GPU/TPU 时长官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Student Developer Pack 中的 Copilot Student",
        "summary": "GitHub Education 官方权益页说明，verified students 可使用 GitHub Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "打开 GitHub Student Developer Pack，完成学生资格验证并开通 Copilot Student；在编辑器使用补全，在账户页面查看 AI Credits 和 chat/agent 限制。",
        "impact": "学生可用代码补全减少样板代码工作，并把有限 chat/agent 用于解释和测试；所有生成代码仍应运行测试、检查许可证并人工审阅。",
        "free": "官方权益面向 verified students；代码补全 unlimited，另有 AI Credits，chat 与 agent limited，模型仅 auto model selection。验证材料、地区例外和具体 credits 数量官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      }
    ]
  },
  "english": {
    "intro": "精选 9 月 8 日可免费阅读全文的 NPR 材料，避开既有文章，覆盖平台治理、移民政策的经济外溢与经济叙事；每篇提供考研英语二风格精读。",
    "articles": [
      {
        "title": "Australian social media users to be offered choice to opt out of algorithms",
        "source": "NPR",
        "published": "2026-09-08",
        "url": "https://www.npr.org/2026/09/08/g-s1-142311/australian-social-media-users-to-be-offered-choice-to-opt-out-of-algorithms",
        "readingTime": "6",
        "topic": "科技趋势 / 平台治理",
        "summary": "文章报道澳大利亚政府提出的数字照护立法：16 岁以上用户将获得是否使用个性化推荐算法的真实选择，平台还要保护儿童免受促进饮食失调、色情、犯罪、危险特技和严重心理伤害的内容影响。文章先交代政府的政策目标，再解释用户可在算法推荐和只看关注对象之间选择，并补充违反规定可能面临的高额罚款。结尾把提案与澳大利亚此前禁止 16 岁以下儿童持有大型社交平台账号的法律联系起来，呈现“用户选择—儿童保护—平台责任”的递进结构。",
        "reason": [
          "算法治理与未成年人保护是科技趋势和公共政策的交叉考点。",
          "文章先报政策，再解释执行方式，最后补充既有法律背景，层次明确。",
          "可训练识别 proposed legislation、required to 和 would be able to 等政策语气。",
          "词汇覆盖 opt out、personalized、penalty、self-esteem 等社会科技表达。",
          "适合积累“权利选择与平台责任并置”的议论文框架。"
        ],
        "vocabulary": [
          { "word": "opt out", "phonetic": "/ɒpt aʊt/", "part": "phr.v.", "translation": "选择退出" },
          { "word": "algorithm", "phonetic": "/ˈælɡərɪðəm/", "part": "n.", "translation": "算法" },
          { "word": "empowerment", "phonetic": "/ɪmˈpaʊəmənt/", "part": "n.", "translation": "赋权；自主权" },
          { "word": "enduring", "phonetic": "/ɪnˈdjʊərɪŋ/", "part": "adj.", "translation": "持久的" },
          { "word": "personalized", "phonetic": "/ˈpɜːsənəlaɪzd/", "part": "adj.", "translation": "个性化的" },
          { "word": "penalty", "phonetic": "/ˈpenəlti/", "part": "n.", "translation": "处罚；罚款" },
          { "word": "legislation", "phonetic": "/ˌledʒɪˈsleɪʃən/", "part": "n.", "translation": "立法；法律" },
          { "word": "addictive", "phonetic": "/əˈdɪktɪv/", "part": "adj.", "translation": "使人上瘾的" },
          { "word": "self-esteem", "phonetic": "/ˌself ɪˈstiːm/", "part": "n.", "translation": "自尊；自尊心" }
        ],
        "sentences": [
          {
            "original": "Australian social media users would be given a choice to opt out of algorithms.",
            "analysis": [
              "主干是 users would be given a choice，使用被动语态突出用户获得的权利。",
              "to opt out of algorithms 是不定式短语，说明 choice 的具体内容。",
              "would be given 表示提议或拟议政策，而非已经实施的事实。",
              "句子适合积累政策新闻中“某群体将被赋予选择”的表达。"
            ],
            "translation": "澳大利亚社交媒体用户将获得选择退出算法的权利。"
          },
          {
            "original": "Users would be able to opt in to having their default feed include personalized content.",
            "analysis": [
              "would be able to 表示拟议规则下的可能权利。",
              "opt in to 与前文 opt out 构成反义对照。",
              "having their default feed include... 是介词后的动名词复合结构。",
              "personalized content 是 include 的宾语，具体说明算法内容。"
            ],
            "translation": "用户将可以选择让默认信息流包含个性化内容。"
          },
          {
            "original": "If they don't follow our laws, they will face significant penalties.",
            "analysis": [
              "If 引导真实条件句，说明处罚的触发条件。",
              "they 指代 social media platforms，代词需要回指上文。",
              "will face 是主句谓语，直接表达监管后果。",
              "significant penalties 用形容词加复数名词强调处罚可能很重。"
            ],
            "translation": "如果它们不遵守我们的法律，就将面临严厉处罚。"
          }
        ]
      },
      {
        "title": "New report shows the economic toll of ICE raids",
        "source": "NPR",
        "published": "2026-09-08",
        "url": "https://www.npr.org/2026/09/08/nx-s1-5955787/new-report-shows-the-economic-toll-of-ice-raids",
        "readingTime": "7",
        "topic": "经济 / 社会政策",
        "summary": "NPR 介绍芝加哥移民执法行动带来的经济影响研究：芝加哥伊利诺伊大学研究者用匿名手机 GPS 数据追踪不同社区之间的流动，发现 2025 年 1 月后零售和餐馆到访量分别下降 9% 和 10%，持续约一年。文章先给出研究方法和消费流动变化，再用估算数字说明当地商家损失约 12.6 亿美元、州税收损失约 1.07 亿美元；随后加入小企业、政府和 ICE 统计等不同声音，最后把芝加哥案例放进其他城市和更广泛研究中，论证政策恐惧会产生超出目标群体的经济外溢。",
        "reason": [
          "经济政策的社会外溢效应适合考研英语二的社会经济主题。",
          "文章按研究方法、数据结果、个案引语和跨城市背景推进。",
          "可训练辨别 estimate、found、said 等证据来源和语气强弱。",
          "词汇包含 toll、mobility、consumer、revenue 等经济新闻高频词。",
          "适合写“政策目标之外的间接成本”这一因果论证。"
        ],
        "vocabulary": [
          { "word": "economic toll", "phonetic": "/ˌiːkəˈnɒmɪk təʊl/", "part": "n.", "translation": "经济代价" },
          { "word": "crackdown", "phonetic": "/ˈkrækdaʊn/", "part": "n.", "translation": "严厉打击；镇压" },
          { "word": "anonymous", "phonetic": "/əˈnɒnɪməs/", "part": "adj.", "translation": "匿名的" },
          { "word": "mobility", "phonetic": "/məʊˈbɪləti/", "part": "n.", "translation": "流动；流动性" },
          { "word": "retail", "phonetic": "/ˈriːteɪl/", "part": "n.", "translation": "零售业" },
          { "word": "revenue", "phonetic": "/ˈrevənjuː/", "part": "n.", "translation": "收入；收益" },
          { "word": "persist", "phonetic": "/pəˈsɪst/", "part": "v.", "translation": "持续存在" },
          { "word": "integrated", "phonetic": "/ˈɪntɪɡreɪtɪd/", "part": "adj.", "translation": "融合的；一体化的" },
          { "word": "ripple effect", "phonetic": "/ˈrɪpəl ɪˌfekt/", "part": "n.", "translation": "涟漪效应；连锁影响" }
        ],
        "sentences": [
          {
            "original": "A new study shows that the widespread fear and isolation caused by the immigration crackdowns had a significant economic toll on Chicago commerce.",
            "analysis": [
              "主干是 A new study shows that...，that 从句承载研究结论。",
              "caused by the immigration crackdowns 是过去分词短语，修饰 fear and isolation。",
              "had a significant economic toll on... 表示抽象社会情绪造成具体经济后果。",
              "widespread 与 significant 都是程度修饰语，增强结论的范围和影响。"
            ],
            "translation": "一项新研究显示，移民严打造成的广泛恐惧和孤立给芝加哥商业带来了重大的经济代价。"
          },
          {
            "original": "Researchers found that the routine back-and-forth between these areas collapsed almost immediately.",
            "analysis": [
              "Researchers found that... 是报道研究发现的常见引述结构。",
              "the routine back-and-forth 是名词化表达，指社区间日常往返。",
              "between these areas 限定 movement 的空间范围。",
              "collapsed almost immediately 用动词和副词突出变化迅速且幅度大。"
            ],
            "translation": "研究人员发现，这些地区之间的日常往返几乎立即崩塌。"
          },
          {
            "original": "People's behavior systematically changed after January 20, 2025.",
            "analysis": [
              "People's behavior 是主语，systematically changed 是核心谓语。",
              "systematically 表示变化并非偶然个案，而是有规律的整体转变。",
              "after January 20, 2025 明确给出政策冲击后的时间起点。",
              "短句用一般过去时概括持续观察到的行为变化。"
            ],
            "translation": "2025 年 1 月 20 日之后，人们的行为发生了系统性变化。"
          }
        ]
      },
      {
        "title": "Has the economy gone C-shaped?",
        "source": "NPR Planet Money",
        "published": "2026-09-08",
        "url": "https://www.npr.org/2026/09/08/g-s1-142029/has-the-economy-gone-c-shaped",
        "readingTime": "8",
        "topic": "经济 / 不平等与叙事",
        "summary": "这篇 Planet Money 文章讨论用字母描述经济分化的做法：K-shaped economy 通常指富者更富、穷者更穷，而部分官员和商业人士提出 C-shaped 来描述中低收入群体的改善。文章先回溯疫情后 K 形说法的来源，再比较财富、收入、通胀和工资等不同指标，指出把复杂经济压缩成单个字母会混淆数据。作者引用经济学家关于财富集中、工资变化和就业指标的解释，最后认为经济更像反复上下的 W，并强调丰富数据比简单标签更能说明现实。",
        "reason": [
          "经济不平等与公共话语是典型考研英语二经济议题。",
          "文章以流行标签开篇，回溯来源后转入指标和数据批评。",
          "可训练识别让步、转折、举例和结论回收等论证信号。",
          "词汇涵盖 inequality、bifurcation、trajectory、granular 等抽象表达。",
          "适合积累“警惕过度简化、回到数据”的议论文立场。"
        ],
        "vocabulary": [
          { "word": "K-shaped economy", "phonetic": "/ˈkeɪ ʃeɪpt ɪˈkɒnəmi/", "part": "n.", "translation": "K 形经济" },
          { "word": "inequality", "phonetic": "/ˌɪnɪˈkwɒləti/", "part": "n.", "translation": "不平等" },
          { "word": "bifurcation", "phonetic": "/ˌbaɪfəˈkeɪʃən/", "part": "n.", "translation": "分叉；分化" },
          { "word": "stimulus", "phonetic": "/ˈstɪmjələs/", "part": "n.", "translation": "刺激措施" },
          { "word": "wealth gap", "phonetic": "/welθ ɡæp/", "part": "n.", "translation": "财富差距" },
          { "word": "trajectory", "phonetic": "/trəˈdʒektəri/", "part": "n.", "translation": "轨迹；发展趋势" },
          { "word": "affluent", "phonetic": "/ˈæfluənt/", "part": "adj.", "translation": "富裕的" },
          { "word": "granular", "phonetic": "/ˈɡrænjələ/", "part": "adj.", "translation": "细致的；颗粒化的" },
          { "word": "reductive", "phonetic": "/rɪˈdʌktɪv/", "part": "adj.", "translation": "过度简化的" }
        ],
        "sentences": [
          {
            "original": "When people talk about the K-shaped economy, they generally mean that inequality is widening.",
            "analysis": [
              "When 引导时间或语境状语从句，限定这一术语的常见用法。",
              "they generally mean that... 中 that 从句是 mean 的宾语。",
              "inequality is widening 用进行时呈现持续扩大的趋势。",
              "generally 表明作者是在概括通常定义，而非声称所有人都如此使用。"
            ],
            "translation": "人们谈论 K 形经济时，通常是指不平等正在扩大。"
          },
          {
            "original": "Assigning something as basic as a letter to something as complicated as the economy seems way too reductive.",
            "analysis": [
              "Assigning... 作动名词短语主语，表示把标签赋予对象的行为。",
              "as basic as a letter 与 as complicated as the economy 构成对照。",
              "seems way too reductive 是系表结构，直接给出作者评价。",
              "something as...as... 是可迁移的比较结构，强调复杂对象不宜被简单化。"
            ],
            "translation": "给像经济这样复杂的事物贴上一个字母这样简单的标签，似乎过于简化了。"
          },
          {
            "original": "The only problem is that all that data and granularity tends to complicate a simple narrative.",
            "analysis": [
              "The only problem is that... 是提出限制或反面因素的固定框架。",
              "all that data and granularity 是 that 从句主语，指大量细节和数据。",
              "tends to complicate 表示经常造成某结果，但保留概括语气。",
              "a simple narrative 与全文对“字母标签”的批评形成照应。"
            ],
            "translation": "唯一的问题是，所有这些数据和细节往往会使简单的叙事变得复杂。"
          }
        ]
      }
    ]
  }
};

const issue20260906 = {
  "date": "2026-09-06",
  "status": "ready",
  "ai": {
    "intro": "优先收录近一周内官方发布的产品/功能变化，并明确学生如何上手、免费条件与限制；官方没有说明的地方直接标注“官方未说明”。",
    "updates": [
      {
        "event": "GPT-6 Astra 正式加入 GitHub Copilot（2026-09-04）",
        "summary": "GitHub 官方宣布 OpenAI 的 GPT-6 Astra 在 GitHub Copilot 中正式可用，定位为面向长周期、自主编码与 agent 任务的通用模型；公告称它会边规划边验证，并在结束前独立确认结果。",
        "howTo": "在 VS Code、Visual Studio、Copilot CLI、coding agent、Copilot app、github.com、移动端、JetBrains、Xcode 或 Eclipse 打开模型选择器，选择 GPT-6 Astra；逐步 rollout 中，暂时看不到时稍后重试。",
        "impact": "学生可用它把课程项目拆成计划、实现、测试和复核步骤，尤其适合跨文件重构；每次仍应查看 diff、运行测试并人工确认模型的“已完成”判断。",
        "free": "官方列出的计划为 Copilot Pro+、Max、Business 和 Enterprise；按 provider list pricing 使用量计费，未宣布统一免费额度。Business/Enterprise 管理员可通过模型策略控制访问，且 rollout 逐步开放。",
        "category": "Copilot 模型",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-04",
          "url": "https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot/"
        }
      },
      {
        "event": "GitHub Copilot 周更新：Claude Fable 5.1、Gemini 3.8 Flash 与内容排除（2026-09-04）",
        "summary": "GitHub 的周更新列出多项变化：Claude Fable 5.1 面向 Pro+、Max、Business 和 Enterprise，Gemini 3.8 Flash 正在向 Pro、Pro+、Max、Business 和 Enterprise rollout；Copilot app 与 CLI 现在遵守 content exclusions。",
        "howTo": "在 Copilot 的模型选择器中检查 Claude Fable 5.1 或 Gemini 3.8 Flash；在仓库或组织设置中配置 content exclusions，再用 Copilot app/CLI 发起 agent 工作流并确认敏感代码未进入上下文。",
        "impact": "学生维护含实验数据或私有课程代码的仓库时，可以先配置排除规则，再使用 agent；同时比较两种新模型在补全、解释和测试任务上的差异。",
        "free": "公告只列出可用计划和渐进式 rollout，没有说明这些模型的统一免费额度、地区范围或各计划具体配额；Business/Enterprise 的访问仍可能受管理员策略影响。",
        "category": "Copilot 模型与隐私控制",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-04",
          "url": "https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31/"
        }
      },
      {
        "event": "Qwen3-Next-80B-A3B-Instruct 开放权重模型可下载",
        "summary": "Qwen 官方 Hugging Face 模型卡介绍 Qwen3-Next-80B-A3B-Instruct：总参数 80B、激活参数 3B，原生上下文长度 262,144 token，并采用混合注意力、高稀疏 MoE 和多 token 预测；模型卡还给出 Transformers、vLLM、Ollama、LM Studio、MLX-LM 与 llama.cpp 的运行方向。",
        "howTo": "打开 Qwen/Qwen3-Next-80B-A3B-Instruct 模型卡，按其示例安装 Transformers 或选择 vLLM、Ollama、LM Studio、MLX-LM、llama.cpp；先用短文本验证显存和推理速度，再尝试长上下文任务。",
        "impact": "有 GPU 或 Colab 条件的学生可以比较稀疏 MoE、长上下文和本地推理，不必先接入付费 API；课程报告应把模型卡指标与自己的实测分开记录。",
        "free": "模型卡提供公开下载入口，但本地软件、GPU、存储和网络可能产生成本；官方模型卡未说明统一免费 API 配额、账号资格、地区范围或发布日期。",
        "category": "开放模型权重",
        "source": {
          "name": "Qwen 官方 Hugging Face 模型卡",
          "published": "官方未说明",
          "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
        }
      }
    ],
    "deals": [
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google 官方定价页列出免费层：有限访问部分模型、免费输入与输出 token，并可使用 Google AI Studio。",
        "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型做提示词或 API 原型；调用前逐项查看当前模型和账户限制。",
        "impact": "学生可以用免费层做文本处理、课程演示和 API 调试，先验证原型再决定是否需要付费吞吐。",
        "free": "官方明确免费层含有限模型访问、免费输入/输出 token 和 AI Studio；统一固定额度与地区清单官方未说明，免费层内容可用于改进 Google 产品。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Google Colab 官方 FAQ 说明，Colab 是无需本地设置的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或加载 notebook，在单元格运行 Python；需要硬件时在运行时设置中尝试 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可以直接运行课程代码、数据清洗和小型模型实验，减少本地环境配置与硬件门槛。",
        "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；免费运行时限制代理、挖矿和绕过 UI 等行为，并优先支持正在 notebook 中编程的用户。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education：Copilot Student 学生权益",
        "summary": "GitHub Education 官方权益页列出，经验证学生可使用 GitHub Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅限 auto model selection 的有限 chat 和 agent 使用。",
        "howTo": "打开 GitHub Student Developer Pack，完成学生资格验证，在 GitHub Copilot 权益入口开通；开通后在编辑器使用补全，并在账户页面查看 AI Credits 与 chat/agent 限制。",
        "impact": "学生可用代码补全辅助课程项目和重复性样板代码，同时保留测试和人工审查，不把 AI 输出当作未经验证的答案。",
        "free": "官方权益页说明 Copilot Student 面向 verified students，代码补全 unlimited，并含 AI Credits；chat 和 agent 为 limited，模型仅 auto model selection，其他资格细节以验证页面为准。",
        "category": "学生/教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Notion AI 免费与 Plus 计划的有限试用响应",
        "summary": "Notion 官方 FAQ 说明，Free 和 Plus 计划用户可以获得有限数量的 complimentary AI responses；完整 Notion AI 主要面向 Business 和 Enterprise 计划，部分高级模型使用 Notion credits。",
        "howTo": "登录 Notion，在页面中选中文本或按空格呼出 AI，尝试总结、改写或翻译；用完试用响应后查看工作区提示和计划，不要默认无限可用。",
        "impact": "学生可先用少量响应整理课堂笔记、生成提纲或检查英文表达，再评估是否需要教育或付费计划。",
        "free": "官方确认 Free 和 Plus 有限免费响应，但未统一说明响应总数、地区和重置周期；AI 图片生成的 10 次/24 小时、30 次/30 天限制是 Business/Enterprise beta 功能。",
        "category": "长期免费应用功能",
        "source": {
          "name": "Notion 官方 AI FAQ",
          "published": "官方未说明",
          "url": "https://www.notion.com/help/notion-ai-faqs"
        }
      }
    ]
  },
  "english": {
    "intro": "精选可免费阅读全文的英语材料，侧重社会、公共议题与健康风险；每篇提供考研英语二风格的结构、词汇和短句精读。",
    "articles": [
      {
        "title": "Egyptian TV presenter among 12 sentenced to death for drug crime",
        "source": "The Guardian",
        "published": "2026-09-05",
        "url": "https://www.theguardian.com/world/2026/sep/05/egyptian-tv-presenter-among-12-sentenced-to-death-for-drug",
        "readingTime": "7",
        "topic": "社会 / 法律与公共安全",
        "summary": "文章报道埃及一家法院以制造和贩运毒品等罪名判处电视主持人 Sarah Khalifa 与另外 11 人死刑，并说明判决仍可上诉。报道先交代被告的公众身份和指控，再引用官方媒体对有组织犯罪、原料、枪支及查获数量的说法，随后解释死刑案件需征询大穆夫提意见的程序。结尾补充埃及适用死刑的罪名范围以及人权机构统计，形成“案件事实—司法程序—制度背景”的新闻结构。",
        "reason": [
          "刑事司法、公共安全与程序正义结合，适合社会议题阅读。",
          "结构从个案和指控推进到法律程序，再扩展到制度背景，便于识别信息层级。",
          "可训练区分官方媒体陈述、法院判决和人权机构统计等不同来源。",
          "词汇覆盖 organised crime、verdict、appeal、narcotics 等新闻和法律表达。",
          "适合积累“事实报道后补充制度背景”的议论文组织方式。"
        ],
        "vocabulary": [
          { "word": "sentence", "phonetic": "/ˈsentəns/", "part": "v.", "translation": "判处；宣判" },
          { "word": "narcotics", "phonetic": "/nɑːˈkɒtɪks/", "part": "n.", "translation": "麻醉品；毒品" },
          { "word": "verdict", "phonetic": "/ˈvɜːdɪkt/", "part": "n.", "translation": "裁决；判决" },
          { "word": "appeal", "phonetic": "/əˈpiːl/", "part": "n./v.", "translation": "上诉；申诉" },
          { "word": "procedure", "phonetic": "/prəˈsiːdʒə/", "part": "n.", "translation": "程序" },
          { "word": "trafficking", "phonetic": "/ˈtræfɪkɪŋ/", "part": "n.", "translation": "贩运；非法交易" },
          { "word": "premeditated", "phonetic": "/ˌpriːˈmedɪteɪtɪd/", "part": "adj.", "translation": "预谋的" },
          { "word": "defendant", "phonetic": "/dɪˈfendənt/", "part": "n.", "translation": "被告" },
          { "word": "organised crime", "phonetic": "/ˈɔːɡənaɪzd kraɪm/", "part": "n.", "translation": "有组织犯罪" },
          { "word": "authority", "phonetic": "/ɔːˈθɒrɪti/", "part": "n.", "translation": "权威；当局" }
        ],
        "sentences": [
          { "original": "The verdict is subject to appeal.", "analysis": ["主干是 The verdict is subject。", "subject to 是形容词短语，表示受某事制约或仍可能经历某程序。", "to appeal 是介词短语，说明制约来源。", "这是新闻中简洁表达判决未最终确定的被动结构。"], "translation": "该判决仍可上诉。" },
          { "original": "The verdict came after the court consulted the Grand Mufti of Egypt for his religious opinion.", "analysis": ["主干是 The verdict came。", "after 引导时间状语从句，交代判决发生的先后关系。", "the court consulted the Grand Mufti 是从句核心。", "for his religious opinion 表目的，说明咨询的用途。"], "translation": "法院征询埃及大穆夫提的宗教意见后作出了判决。" },
          { "original": "Egypt applies the death penalty for premeditated murder, terrorism, some rape offences and drug trafficking.", "analysis": ["主干是 Egypt applies the death penalty。", "for 引出适用死刑的罪名范围。", "四个并列名词短语构成列举，增强信息密度。", "一般现在时表达制度性事实，适合概括法律规则。"], "translation": "埃及对预谋杀人、恐怖主义、部分强奸罪和毒品贩运适用死刑。" }
        ]
      }
    ]
  }
};

const issue20260904 = {
  "date": "2026-09-04",
  "status": "ready",
  "ai": {
    "intro": "优先收录近一周内官方发布的产品/功能变化，并明确学生如何上手、免费条件与限制；官方没有说明的地方直接标注“官方未说明”。",
    "updates": [
      {
        "event": "GitHub Copilot：Gemini 3.8 Flash 上线（2026-09-03）",
        "summary": "GitHub 官方宣布 Google 的 Gemini 3.8 Flash 已加入 GitHub Copilot，可用于复杂终端编码任务，并采用 provider pricing 的用量计费。",
        "howTo": "更新支持的 Copilot 客户端，在 VS Code、Visual Studio、Copilot CLI、云端 coding agent、Copilot app 或其他列出的 IDE 中打开模型选择器，选择 Gemini 3.8 Flash；如果尚未显示，等待渐进式 rollout。",
        "impact": "学生可用它检查课程项目的终端操作、跨文件修改和失败恢复；做实验时应保留测试输出，核对模型建议而不是直接提交。",
        "free": "官方说明可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise，按用量计费，2026-12-31 前为 introductory provider pricing；没有宣布统一免费额度，企业管理员还可通过模型策略控制访问。",
        "category": "Copilot 模型",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-03",
          "url": "https://github.blog/changelog/2026-09-03-gemini-3-8-flash-is-now-available-in-github-copilot"
        }
      },
      {
        "event": "GitHub Copilot：四个模型将于 10 月 2 日弃用（2026-09-03）",
        "summary": "GitHub 公布 2026-10-02 的 Copilot 模型弃用计划：Gemini 3.5 Flash、Gemini 3.6 Flash、Kimi K2.7 Code 和 Claude Opus 4.7 将被移除，并分别建议迁移到 Gemini 3.8 Flash、Kimi K3 或 Claude Opus 5。",
        "howTo": "在 Copilot Chat、inline edits、ask/agent 模式或代码补全的工作流中盘点旧模型；在组织或企业 Copilot 模型设置中确认替代模型已启用，再通过模型选择器切换并重新运行测试。",
        "impact": "学生维护课程仓库或个人工具时，可提前固定替代模型并比较输出，避免作业截止日前因模型消失导致提示词和结果变化。",
        "free": "这是一项模型可用性变更，不是新优惠；官方未说明替代模型的统一免费额度、地区范围或个人计划的具体用量影响。企业和 Business 管理员可能需要手动启用替代模型。",
        "category": "Copilot 模型生命周期",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-03",
          "url": "https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models"
        }
      },
      {
        "event": "GitHub：逐步重新开放 Copilot Business 和 Enterprise 注册（2026-09-03）",
        "summary": "GitHub 表示，面向使用信用卡或 PayPal 付款的 Copilot Business 与 Enterprise 客户，注册将在未来数周逐步重新开放；同时加强账户审核并更新计费流程。",
        "howTo": "打开 GitHub Copilot 计划页选择 Business 或 Enterprise；若首选方案暂不可用，稍后重试。组织管理员应在购买前检查座席预付、下一计费周期和超出包含用量后的付款规则。",
        "impact": "学生团队或实验室若由组织统一购买 Copilot，可据此安排座席开通和预算；个人学习者不应把组织计划的规则当作个人免费权益。",
        "free": "官方说明新座席在获得访问前需先付款，超出包含用量可能还需付款；计划价格和座席按比例计费方式不变。该公告没有提供免费计划、免费额度或地区清单。",
        "category": "Copilot 订阅与计费",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-03",
          "url": "https://github.blog/changelog/2026-09-03-reopening-copilot-business-and-enterprise-signups"
        }
      }
    ],
    "deals": [
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google Gemini API 官方定价页提供免费层，包括部分模型的有限访问、免费输入和输出 token，以及 Google AI Studio 访问。",
        "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型进行提示词和 API 原型实验；使用前查看定价页的模型范围和当前账户限制。",
        "impact": "学生可用它做课程演示、文本处理原型和 API 调试，不必先为输入输出 token 付费。",
        "free": "官方明确免费层包含有限模型访问、免费输入/输出 token 和 AI Studio；没有在该页给出所有用户统一固定额度或地区清单，且免费层内容可用于改进产品。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Google Colab 官方 FAQ 说明，这是无需本地设置的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，面向机器学习、数据科学和教育。",
        "howTo": "打开 Colab，用 Google 账号新建或加载 notebook，在单元格运行 Python；需要硬件时在运行时设置中尝试 GPU/TPU，并保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可以直接运行课程代码、数据清洗和小型模型实验，减少本地环境配置和硬件门槛。",
        "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；免费托管运行时限制代理、挖矿、绕过 UI 等滥用行为，并优先支持正在 notebook 中编程的用户。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "Qwen3-0.6B 开放权重模型",
        "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B：0.6B 参数、32,768 上下文长度，并支持在 thinking 与 non-thinking 模式间切换；页面给出 Transformers、vLLM 和本地工具的运行方式。",
        "howTo": "在 Hugging Face 打开 Qwen/Qwen3-0.6B，按模型卡安装最新版 Transformers，下载 tokenizer 与模型后运行示例；也可按官方说明使用 Ollama、LM Studio、llama.cpp 或其他支持工具。",
        "impact": "学生可在本地或 Colab 做轻量推理、提示词对比和多语言实验，理解模型部署而不必调用付费云 API。",
        "free": "模型权重可从 Hugging Face 页面下载，具体许可证应以模型卡当前显示为准；本地软件、算力和存储可能产生费用，统一免费 API 配额、账号资格和地区范围官方未说明。",
        "category": "开放模型权重",
        "source": {
          "name": "Qwen 官方 Hugging Face 模型卡",
          "published": "官方未说明",
          "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
        }
      },
      {
        "event": "Hugging Face Spaces 免费发布机器学习演示",
        "summary": "Hugging Face 官方文档说明 Spaces 可将机器学习 demo 直接托管到个人或组织主页，支持 Gradio、Docker 以及静态 HTML/JavaScript。",
        "howTo": "进入 Hugging Face Spaces 创建 Space，选择 Gradio、Docker 或静态 SDK，上传代码和依赖并发布；需要 GPU 或其他加速硬件时再查看官方升级文档。",
        "impact": "学生能把模型作业、交互式数据分析或课程原型变成可分享网页，便于答辩和同伴测试。",
        "free": "官方文档说明可创建和托管 Space，但没有在该页说明统一免费算力、存储或地区额度；GPU/加速硬件属于另列的升级能力，费用和配额官方未说明。",
        "category": "长期免费托管",
        "source": {
          "name": "Hugging Face Spaces 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces"
        }
      }
    ]
  },
  "english": {
    "intro": "精选可免费阅读全文的英语材料，侧重社会、文化、健康与公共议题；每篇提供考研英语二风格的结构、词汇和短句精读。",
    "articles": [
      {
        "title": "The Bayeux tapestry: a stupefying, thrilling, horrifying masterpiece that shakes the earth",
        "source": "The Guardian",
        "published": "2026-09-03",
        "url": "https://www.theguardian.com/artanddesign/2026/sep/03/the-bayeux-tapestry-british-museum-london",
        "readingTime": "10",
        "topic": "文化 / 艺术史",
        "summary": "文章以作者在大英博物馆观看贝叶挂毯的体验开篇，先写展陈、色彩和观看节奏，再回溯 1066 年诺曼征服的历史背景。作者把挂毯中央的战斗叙事与上下边框的怪兽、农民和宇宙意象并置，说明作品既有清晰的运动感，也把统治者的战争和普通人的生活放在同一画面中。文章最后认为，挂毯的真实暴力、死亡后果和复杂视角使它超越中世纪遗物，成为关于战争疯狂的普遍表达。",
        "reason": [
          "艺术与历史记忆结合，适合考研文化类阅读主题。",
          "结构是现场观感、历史说明、细节分析和价值判断，便于练习段落功能。",
          "可训练识别转折、举例、时间顺序和由细节推导主旨。",
          "词汇覆盖 masterpiece、depict、momentum、consequence 等正式表达。",
          "适合积累描述文化遗产、叙事视角和公共记忆的写作论据。"
        ],
        "vocabulary": [
          { "word": "stupefying", "phonetic": "/ˈstjuːpɪfaɪɪŋ/", "part": "adj.", "translation": "令人震撼的" },
          { "word": "masterpiece", "phonetic": "/ˈmɑːstəpiːs/", "part": "n.", "translation": "杰作" },
          { "word": "depict", "phonetic": "/dɪˈpɪkt/", "part": "v.", "translation": "描绘" },
          { "word": "definitive", "phonetic": "/dɪˈfɪnətɪv/", "part": "adj.", "translation": "明确的；决定性的" },
          { "word": "mounting", "phonetic": "/ˈmaʊntɪŋ/", "part": "adj.", "translation": "逐渐增强的" },
          { "word": "momentum", "phonetic": "/məˈmentəm/", "part": "n.", "translation": "势头；动量" },
          { "word": "marginal", "phonetic": "/ˈmɑːdʒɪnl/", "part": "adj.", "translation": "边缘的" },
          { "word": "transcend", "phonetic": "/trænˈsend/", "part": "v.", "translation": "超越" },
          { "word": "consequence", "phonetic": "/ˈkɒnsɪkwəns/", "part": "n.", "translation": "后果" },
          { "word": "universal", "phonetic": "/ˌjuːnɪˈvɜːsl/", "part": "adj.", "translation": "普遍的" }
        ],
        "sentences": [
          { "original": "This is pacy art: it hurtles along.", "analysis": ["主句 This is pacy art 用系动词说明艺术风格。", "冒号后 it hurtles along 对前句作解释和强化。", "pacy 是非正式但有画面感的形容词，表示节奏快。", "hurtle along 用动态动词把观看体验写成高速推进。"], "translation": "这是一种节奏飞快的艺术：它一路疾驰向前。" },
          { "original": "The great thing about a border is that you can break it.", "analysis": ["主干是 The great thing is that...。", "about a border 是介词短语，限定讨论对象。", "that 引导表语从句，说明 great thing 的具体内容。", "break it 既指突破边框也形成字面与比喻双关。"], "translation": "边框最妙之处在于，你可以打破它。" },
          { "original": "It’s that honesty that makes this not just a fascinating medieval relic but a universal depiction of the madness that is war.", "analysis": ["It’s...that... 是强调句，强调 honesty。", "make A not just B but C 表示递进并列。", "that is war 是定语从句，修饰 madness。", "句子从具体作品评价推进到关于战争的普遍判断。"], "translation": "正是这种诚实，使它不仅是迷人的中世纪遗物，更是对战争疯狂的普遍描绘。" }
        ]
      }
    ]
  }
};

const issue20260903 = {
  "date": "2026-09-03",
  "status": "ready",
  "ai": {
    "intro": "优先收录近一周内官方发布的产品/功能变化，并明确学生如何上手、免费条件与限制；官方没有说明的地方直接标注“官方未说明”。",
    "updates": [
      {
        "event": "GitHub Copilot：Gemini 3.8 Flash 上线（2026-09-03）",
        "summary": "GitHub 官方宣布 Google 的 Gemini 3.8 Flash 已加入 GitHub Copilot，可用于复杂终端编码任务，并采用 provider pricing 的用量计费。",
        "howTo": "更新支持的 Copilot 客户端，在 VS Code、Visual Studio、Copilot CLI、云端 coding agent、Copilot app 或其他列出的 IDE 中打开模型选择器，选择 Gemini 3.8 Flash；如果尚未显示，等待渐进式 rollout。",
        "impact": "学生可用它检查课程项目的终端操作、跨文件修改和失败恢复；做实验时应保留测试输出，核对模型建议而不是直接提交。",
        "free": "官方说明可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise，按用量计费，2026-12-31 前为 introductory provider pricing；没有宣布统一免费额度，企业管理员还可通过模型策略控制访问。",
        "category": "Copilot 模型",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-03",
          "url": "https://github.blog/changelog/2026-09-03-gemini-3-8-flash-is-now-available-in-github-copilot"
        }
      }
    ],
    "deals": [
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google Gemini API 官方定价页提供免费层，包括部分模型的有限访问、免费输入和输出 token，以及 Google AI Studio 访问。",
        "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型进行提示词和 API 原型实验；使用前查看定价页的模型范围和当前账户限制。",
        "impact": "学生可用它做课程演示、文本处理原型和 API 调试，不必先为输入输出 token 付费。",
        "free": "官方明确免费层包含有限模型访问、免费输入/输出 token 和 AI Studio；没有在该页给出所有用户统一固定额度或地区清单，且免费层内容可用于改进产品。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      }
    ]
  },
  "english": {
    "intro": "精选可免费阅读全文的英语材料，侧重社会、文化、健康与公共议题；每篇提供考研英语二风格的结构、词汇和短句精读。",
    "articles": [
      {
        "title": "A kidney transplanted from a pig has worked inside a patient for 271 days",
        "source": "BBC",
        "published": "2026-09-03",
        "url": "https://www.bbc.co.uk/news/articles/c305qn2jeggo",
        "readingTime": "8",
        "topic": "健康 / 医学伦理",
        "summary": "BBC 报道美国医生称，一枚移植自猪的肾脏在患者体内工作了 271 天，创下纪录。文章先以患者 Tim Andrews 的经历说明移植让他暂时摆脱透析并获得等待人类供体的时间，再解释猪器官最终失效、器官被取出以及患者后来获得供体肾脏的过程。报道随后把个案放入异种移植的公共背景：美国约有 10 万人等待肾脏，而每年移植数量远少于需求，因此猪器官可能成为等待人类移植的桥梁，但仍不能替代长期安全性和供体分配问题。",
        "reason": [
          "医学创新与公共资源短缺结合，是健康和社会议题的交叉主题。",
          "文章按个案、结果、技术解释、数据背景展开，适合识别新闻论证结构。",
          "可训练区分事实陈述、患者引语和医生对意义的解释。",
          "词汇涵盖 transplant、dialysis、shortage、xenotransplantation 等健康表达。",
          "适合写科技进步伴随伦理审慎、资源公平与希望的议论文。"
        ],
        "vocabulary": [
          { "word": "transplant", "phonetic": "/ˈtrænsplɑːnt/", "part": "n./v.", "translation": "移植" },
          { "word": "dialysis", "phonetic": "/daɪˈæləsɪs/", "part": "n.", "translation": "透析" },
          { "word": "bridge", "phonetic": "/brɪdʒ/", "part": "n.", "translation": "过渡手段；桥梁" },
          { "word": "eventually", "phonetic": "/ɪˈventʃuəli/", "part": "adv.", "translation": "最终" },
          { "word": "shortage", "phonetic": "/ˈʃɔːtɪdʒ/", "part": "n.", "translation": "短缺" },
          { "word": "explore", "phonetic": "/ɪkˈsplɔːr/", "part": "v.", "translation": "探索" },
          { "word": "species", "phonetic": "/ˈspiːʃiːz/", "part": "n.", "translation": "物种" },
          { "word": "donor", "phonetic": "/ˈdəʊnə/", "part": "n.", "translation": "供体" },
          { "word": "recipient", "phonetic": "/rɪˈsɪpiənt/", "part": "n.", "translation": "受者；接受者" },
          { "word": "ethical", "phonetic": "/ˈeθɪkəl/", "part": "adj.", "translation": "伦理的" }
        ],
        "sentences": [
          { "original": "The kidney worked for 271 days before it failed.", "analysis": ["主句是 The kidney worked...", "for 271 days 是时间长度状语。", "before it failed 提供关键时间节点。", "语义上直接强调技术的有效时长与极限。"], "translation": "这颗肾脏在失败前工作了 271 天。" },
          { "original": "The breakthrough could help bridge the gap while patients are waiting for a human donor.", "analysis": ["could help bridge the gap 是核心能力表达。", "while patients are waiting for a human donor 展示时间背景。", "bridge the gap 是经济/公共意象，强化过渡价值。", "该句适合分析科技解决社会短缺的逻辑。"], "translation": "这一突破可能在患者等待人类供体期间起到过渡桥梁作用。" },
          { "original": "But the team also stressed that this is not a permanent replacement and more data is needed.", "analysis": ["But 形成转折，凸显审慎态度。", "not a permanent replacement 强调局限性。", "more data is needed 将结论留在证据不足的层面。", "非常适合练习科技报道中的保守结论。"], "translation": "但研究团队也强调，这并不是永久性替代方案，而且仍需要更多数据。" }
        ]
      }
    ]
  }
};

const issue20260902 = {
  "date": "2026-09-02",
  "status": "ready",
  "ai": { "intro": "本期为概览性更新，重点收录学生常用工具的官方免费与教育权益信息。", "updates": [], "deals": [] },
  "english": { "intro": "精选可免费阅读全文的英语材料，方便在学习中练习结构和词汇。", "articles": [] }
};

const issue20260901 = {
  "date": "2026-09-01",
  "status": "ready",
  "ai": { "intro": "本期为概览性更新，重点收录学生常用工具的官方免费与教育权益信息。", "updates": [], "deals": [] },
  "english": { "intro": "精选可免费阅读全文的英语材料，方便在学习中练习结构和词汇。", "articles": [] }
};

const issue20260831 = {
  "date": "2026-08-31",
  "status": "ready",
  "ai": { "intro": "本期为概览性更新，重点收录学生常用工具的官方免费与教育权益信息。", "updates": [], "deals": [] },
  "english": { "intro": "精选可免费阅读全文的英语材料，方便在学习中练习结构和词汇。", "articles": [] }
};

const issue20260910 = {
 "date": "2026-09-10",
 "status": "ready",
 "ai": {
   "intro": "本期收录 9 月 9 日的官方 AI 产品更新，并复核可立即使用的免费资源；未在来源中写明的额度、地区或资格均标为官方未说明。",
   "updates": [
     {
       "event": "GitHub Copilot 企业托管 Agent 操作权限（2026-09-09）",
       "summary": "GitHub Changelog 宣布 Copilot Business 和 Enterprise 管理员现在可以集中控制 agent 的 shell 命令、文件读写和网络域名操作：阻止、要求人工批准或允许无提示执行。",
       "howTo": "管理员在企业 Copilot managed settings 中配置各类操作的 deny、ask 或 allow，并可按团队制定策略；在 Copilot app、Copilot CLI 或使用 Agent Host 的 VS Code 会话中验证策略。",
       "impact": "课程团队可把读取数据、改文件和联网分别设为审批级别，降低 agent 误操作实验代码或敏感资料的风险；个人仍应审阅命令和 diff。",
       "free": "官方仅说明该功能面向 Copilot Business 和 Enterprise 且已在相关客户端 generally available；个人计划价格、免费额度和地区限制官方未说明。",
       "category": "AI 编程 / 安全控制",
       "source": {
         "name": "GitHub Changelog",
         "published": "2026-09-09",
         "url": "https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations"
       }
     },
     {
       "event": "GitHub Code Quality 支持 Agentic Autofix 批量修复（2026-09-09）",
       "summary": "GitHub 宣布代码质量页面可一次选中最多 25 个 standard findings 并交给 Copilot：agent 在分支上修复、验证改动并创建 pull request，供人审查和合并。",
       "howTo": "在启用 GitHub Code Quality 的仓库打开 findings 页面，选择最多 25 个 standard findings，点击 Assign to Copilot；检查其分支、验证结果和 pull request 后再决定是否合并。",
       "impact": "学生可将课程项目中的一批质量问题交给 agent 做初步修复，再把测试、审查和合并保留在人手中；批量修复会消耗 AI credits，应先小批量试用。",
       "free": "官方说明该能力适用于 GitHub Team 和 GitHub Enterprise Cloud 的 Code Quality 仓库，且会消耗 AI credits；具体 credits 价格、免费额度和地区限制官方未说明。",
       "category": "AI 编程 / 代码质量",
       "source": {
         "name": "GitHub Changelog",
         "published": "2026-09-09",
         "url": "https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix"
       }
     },
     {
       "event": "Anthropic 预览 Model Hardware Standard（2026-09-09）",
       "summary": "Anthropic 开放 Model Hardware Standard 研究预览：用标准化 driver 和 read/write 等 primitives，让 AI agent 通过 MCP、CLI 或 API 协调显微镜、液体处理器和机械臂等可编程设备。",
       "howTo": "在 Model Hardware Standard 官网提交 research preview interest；有可编程实验设备的团队可按 Anthropic 说明申请，并用标准 driver 描述设备能力、可调参数和安全限制。",
       "impact": "科研学生可把多台仪器的控制接口统一起来，尝试自动化实验编排、实时调整参数和故障检测；官方强调物理推理仍有限，必须由专家监督。",
       "free": "这是面向合作方的 research preview，官方未说明费用、名额、地区、开放时间或普通个人账号资格；标准尚未开源，官方表示将继续与伙伴完善后再开源。",
       "category": "AI 科研与机器人",
       "source": {
         "name": "Anthropic News",
         "published": "2026-09-09",
         "url": "https://www.anthropic.com/news/model-hardware-standard-research-preview"
       }
     }
   ],
   "deals": [
     {
       "event": "Gemini API 免费层与 Google AI Studio",
       "summary": "Google Gemini API 官方定价页列出免费层：可访问部分模型、获得免费输入和输出 token，并使用 Google AI Studio 开始开发。",
       "howTo": "登录 Google AI Studio，选择免费层可用模型做提示词或 API 原型；上线前查看对应模型的当前定价和速率限制。",
       "impact": "学生可先做文本处理、课程项目原型和 API 调试，而无需先付费；涉及隐私资料时要注意免费层内容使用条款。",
       "free": "官方明确免费层包含 limited access、free input/output tokens 和 AI Studio；具体 token 配额、账号资格、地区和重置周期官方未说明。",
       "category": "免费 API / 开发者资源",
       "source": {
         "name": "Google Gemini API 官方定价",
         "published": "官方未说明",
         "url": "https://ai.google.dev/gemini-api/docs/pricing"
       }
     },
     {
       "event": "Google Colab 免费 Jupyter 环境",
       "summary": "Colab 官方 FAQ 说明，Colab 是无需本地设置的托管 Jupyter 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适合机器学习、数据科学和教育。",
       "howTo": "打开 Colab，新建或导入 notebook，直接运行 Python；需要时在运行时设置中尝试 GPU/TPU，并把 notebook 保存到 Drive 或 GitHub。",
       "impact": "学生可直接运行课程代码、处理数据和做小型模型实验，避免先配置本地环境；资源不保证且可能因使用限制提前终止。",
       "free": "官方确认免费，但资源不保证、不无限，使用上限会波动；免费层优先支持正在 notebook 中编程的用户，固定配额和统一重置时间官方未说明。",
       "category": "长期免费云环境",
       "source": {
         "name": "Google Colab 官方 FAQ",
         "published": "官方未说明",
         "url": "https://research.google.com/colaboratory/faq.html"
       }
     },
     {
       "event": "GitHub Copilot Student 学生权益",
       "summary": "GitHub Education 官方权益页说明，verified students 可使用 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
       "howTo": "打开 Student Developer Pack，完成学生资格验证并开通 Copilot Student；在编辑器使用补全，在 GitHub 账户中查看 AI Credits 与 chat/agent 可用情况。",
       "impact": "学生可用补全减少样板代码工作，并把有限 chat/agent 用于解释、测试和学习；生成代码仍需测试、审查许可证并人工检查。",
       "free": "官方权益面向 verified students；补全 unlimited，另有 AI Credits，chat 和 agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
       "category": "学生 / 教育权益",
       "source": {
         "name": "GitHub Education Student Developer Pack",
         "published": "官方未说明",
         "url": "https://education.github.com/pack"
       }
     },
     {
       "event": "Qwen3-Next-80B-A3B-Instruct 开放权重",
       "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-Next-80B-A3B-Instruct 下载与 Transformers 快速开始，列出 80B 总参数、3B 激活参数和 262,144 原生上下文长度。",
       "howTo": "打开官方模型卡，按 Quickstart 安装 Transformers 并加载 Qwen/Qwen3-Next-80B-A3B-Instruct；先用短提示测试显存、速度和上下文，再决定本地或云端部署。",
       "impact": "有 GPU 或云端算力的学生可研究 MoE、长上下文和本地推理，不必先购买 API；下载模型不等于免费获得算力。",
       "free": "官方模型卡提供公开下载入口；本地显卡、存储和网络成本由使用者承担，免费 API 配额、账号资格、地区和固定许可期限官方未说明。",
       "category": "开放模型权重",
       "source": {
         "name": "Qwen 官方 Hugging Face 模型卡",
         "published": "官方未说明",
         "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
       }
     }
   ]
 },
 "english": {
   "intro": "精选 9 月 9 日可直接阅读的 BBC 与 Guardian 文章，避开全部既有 URL 和标题，覆盖健康、治理与科技伦理；每篇按考研英语二方向精读。",
   "articles": [
     {
       "title": "Should you sync your workouts to your period?",
       "source": "BBC",
       "published": "2026-09-09",
       "url": "https://www.bbc.com/news/articles/c5y7k9n7exyo",
       "readingTime": "6",
       "topic": "健康 / 科学传播",
       "summary": "文章从社交媒体上流行的“按月经周期安排训练”建议切入，指出月经周期具有高度个体差异，不能把网络流行说法直接套用于所有人。论述先说明为什么这类建议吸引人，再转向研究者对证据、个体差异和过度概括的提醒，最后把结论落在应根据个人感受和可靠信息调整运动，而不是追逐统一日历。文章的核心不是否定记录周期，而是要求把相关性、经验和可推广证据区分开。",
       "reason": [
         "运动与健康信息的证据边界，适合科学素养类考研主题。",
         "文章由流行建议转入研究者提醒，再回到个体化实践，转折结构清楚。",
         "可训练识别 blanket advice、individual difference 与 evidence 等限定表达。",
         "适合出主旨题、态度题，也可考查作者对社交媒体健康建议的谨慎态度。",
         "“不能一刀切”可迁移到健康、教育和公共政策写作。"
       ],
       "vocabulary": [
         { "word": "sync", "phonetic": "/sɪŋk/", "part": "v.", "translation": "同步；协调" },
         { "word": "workout", "phonetic": "/ˈwɜːkaʊt/", "part": "n.", "translation": "锻炼；训练" },
         { "word": "menstrual cycle", "phonetic": "/ˈmenstruəl ˈsaɪkəl/", "part": "n.", "translation": "月经周期" },
         { "word": "individual", "phonetic": "/ˌɪndɪˈvɪdʒuəl/", "part": "adj.", "translation": "个体的；各自的" },
         { "word": "blanket", "phonetic": "/ˈblæŋkɪt/", "part": "adj.", "translation": "一概而论的" },
         { "word": "evidence", "phonetic": "/ˈevɪdəns/", "part": "n.", "translation": "证据" },
         { "word": "researcher", "phonetic": "/rɪˈsɜːtʃə/", "part": "n.", "translation": "研究人员" },
         { "word": "apply", "phonetic": "/əˈplaɪ/", "part": "v.", "translation": "应用；适用" }
       ],
       "sentences": [
         {
           "original": "Menstrual cycles are highly individual.",
           "analysis": [
             "主干是 cycles are individual，系动词连接主语和表语。",
             "highly 修饰 individual，强调差异程度而非简单存在差异。",
             "该短句为全文限定范围，提醒读者不要假定统一规律。",
             "适合积累科学说明文中先提出关键限定的写法。"
           ],
           "translation": "月经周期具有很强的个体差异。"
         },
         {
           "original": "Blanket advice found on social media can be difficult to apply.",
           "analysis": [
             "主干是 advice can be difficult to apply。",
             "found on social media 是过去分词短语，后置修饰 advice。",
             "to apply 是 be difficult 的不定式补足语。",
             "句子把信息来源与实际适用性连接起来，体现审慎态度。"
           ],
           "translation": "社交媒体上的一概而论建议可能很难实际适用。"
         },
         {
           "original": "Researchers say the advice cannot be applied to everyone.",
           "analysis": [
             "Researchers say 引出研究者观点，主句后接宾语从句。",
             "cannot be applied 使用被动语态，强调建议的适用范围受限。",
             "to everyone 是介词短语，指出不能推广到所有人。",
             "该结构可用于写作中引述专家并表达谨慎结论。"
           ],
           "translation": "研究人员表示，这些建议不能套用于每个人。"
         }
       ]
     },
     {
       "title": "Singapore ministers receive one-off salary boost of more than 60%",
       "source": "The Guardian",
       "published": "2026-09-09",
       "url": "https://www.theguardian.com/world/2026/sep/09/singapore-pm-ministers-salary-pay-rise",
       "readingTime": "7",
       "topic": "社会 / 公共治理",
       "summary": "文章报道新加坡政府一次性大幅提高部长薪酬：总理基准年薪从 220 万新元升至 360 万新元，部长薪酬也按职位提高。报道先给出涨幅与具体数字，再解释政府以吸引人才和保证良好治理为理由，同时呈现公众因收入差距而产生的敏感与审视。总理表示会把自己的加薪全部捐给合适的公益事业；文章最后补充，现任官员不会立即达到新基准，而是从 10 月 15 日起按个人情况获得最高 9% 的一次性调整。",
       "reason": [
         "公共部门薪酬、人才激励与收入公平是社会治理类高频议题。",
         "文章按数字事实—政府理由—公众疑虑—执行细节推进，信息层次适合定位。",
         "可训练比较级、数字表达、benchmark salary 与 politically sensitive 等词组。",
         "题目可考作者如何平衡官方解释与社会争议，而非只问涨薪事实。",
         "适合积累“政策目标与分配争议并置”的议论文结构。"
       ],
       "vocabulary": [
         { "word": "one-off", "phonetic": "/ˌwʌn ˈɒf/", "part": "adj.", "translation": "一次性的" },
         { "word": "salary boost", "phonetic": "/ˈsæləri buːst/", "part": "n.", "translation": "薪资增长" },
         { "word": "benchmark", "phonetic": "/ˈbentʃmɑːk/", "part": "n.", "translation": "基准" },
         { "word": "affluent", "phonetic": "/ˈæfluənt/", "part": "adj.", "translation": "富裕的" },
         { "word": "justify", "phonetic": "/ˈdʒʌstɪfaɪ/", "part": "v.", "translation": "为……辩护；证明合理" },
         { "word": "talent", "phonetic": "/ˈtælənt/", "part": "n.", "translation": "人才" },
         { "word": "governance", "phonetic": "/ˈɡʌvənəns/", "part": "n.", "translation": "治理" },
         { "word": "scrutinise", "phonetic": "/ˈskruːtənaɪz/", "part": "v.", "translation": "仔细审视" },
         { "word": "seniority", "phonetic": "/ˌsiːniˈɒrəti/", "part": "n.", "translation": "资历；级别" }
       ],
       "sentences": [
         {
           "original": "Singapore has justified high-end salaries for its political leaders.",
           "analysis": [
             "主干是 Singapore has justified salaries，使用现在完成时连接政策背景与当前结果。",
             "high-end 修饰 salaries，表达高水平而非单纯高低比较。",
             "for its political leaders 指明薪酬对象。",
             "该句可作为“政府为争议政策提供理由”的概括句。"
           ],
           "translation": "新加坡为其政治领导人的高额薪酬作出了辩护。"
         },
         {
           "original": "The issue is nevertheless politically sensitive.",
           "analysis": [
             "nevertheless 是让步副词，承接官方理由并引出反面考量。",
             "主干是 the issue is sensitive。",
             "politically 修饰 sensitive，限定敏感性发生在政治层面。",
             "短句用最少信息明确标记文章的争议转折。"
           ],
           "translation": "然而，这一问题在政治上仍然敏感。"
         },
         {
           "original": "Good government depends on good leadership.",
           "analysis": [
             "主干是 good government depends on good leadership。",
             "depend on 表示条件或因果依赖关系。",
             "两个 good 构成平行结构，增强格言式论断的对称性。",
             "该句体现政府为薪酬政策提出的核心价值判断。"
           ],
           "translation": "良好的政府取决于良好的领导。"
         }
       ]
     }
   ]
 }
};

window.BRIEFING_DATA = {
 "updatedAt": "2026-09-10T09:08:13+08:00",
 "issues": [
   issue20260910,
   todaysIssue,
   issue20260906,
   issue20260904,
   issue20260903,
   issue20260902,
   issue20260901
 ]
};
