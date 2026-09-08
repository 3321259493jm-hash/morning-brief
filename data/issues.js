const todaysIssue = {
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

window.BRIEFING_DATA = {
  "updatedAt": "2026-09-08T09:04:13+08:00",
  "issues": [
    todaysIssue,
    issue20260906,
    issue20260904,
    issue20260903,
    issue20260902,
    issue20260901,
    issue20260831
  ]
};
