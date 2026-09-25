const issue20260924 = {
  "date": "2026-09-24",
  "status": "ready",
  "ai": {
    "intro": "本期核验 2026-09-22 至 2026-09-23 的官方 GitHub Copilot 更新，并复核仍可用的免费 AI 资源；所有价格、额度、账号资格与地区说明均按官方页面所写。",
    "updates": [
      {
        "event": "OpenAI 的 GPT-6 Sol 与 GPT-6 Luna 已在 GitHub Copilot 中推出（2026-09-22）",
        "summary": "GitHub 官方 changelog 说明，OpenAI 的 GPT-6 系列新增 GPT-6 Sol 和 GPT-6 Luna，加入此前已发布的 GPT-6 Astra；它们分别适用于更平衡的 agentic coding 和更轻量、更低成本的日常工作流。",
        "howTo": "在支持的 GitHub Copilot 客户端中打开模型选择器，选择 GPT-6 Sol 或 GPT-6 Luna；如未见，请等待逐步 rollout。若你的组织启用了模型策略，可在 Copilot settings 中确认管理员是否允许该模型进入默认列表。",
        "impact": "学生可将它们用于跨文件编码、需求拆解和多步骤调试任务；对于代码修订和研究整理，仍需保留测试输出与人工审查，避免把模型结论当定论。",
        "free": "官方说明这两个模型按 usage-based billing 计费，并给出 Copilot 模型与请求 pricing 链接；官方未在 changelog 中统一说明个人/学生免费额度、地区适配和详细配额。",
        "category": "AI 编程 / 模型",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available"
        }
      },
      {
        "event": "Claude Opus 5.5 已在 GitHub Copilot 中推出（2026-09-22）",
        "summary": "GitHub 官方 changelog 说明，Anthropic 的 Claude Opus 5.5 已在 GitHub Copilot 中可用，定位于 agentic coding、长任务代理和知识工作。官方称它在早期测试中可以用更少的步骤和 token 完成与 Opus 5 相近的任务，并能更快从多步错误中恢复。",
        "howTo": "在支持的 GitHub Copilot 客户端中打开模型选择器，选择 Claude Opus 5.5；若你的组织或企业启用了模型策略，确保它在允许列表中。复杂任务建议先做小范围验证，再扩展到更大范围的代码和文档整理。",
        "impact": "学生可用它处理大规模代码阅读、研究笔记整合和复杂方案分解；但对关键论文判断、代码安全和最终结论仍需人工复核，尤其在需要严格事实核对时更应谨慎。",
        "free": "官方说明该模型按 provider list pricing 计费，并其文本输出带水印，不会新增 token 或成本；官方未统一说明个人/学生免费额度、地区例外和各计划的具体限制。",
        "category": "AI 编程 / 模型",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot"
        }
      },
      {
        "event": "Copilot for JetBrains 1.18.0 新增审批、组织共享技能与更强代理体验（2026-09-22）",
        "summary": "GitHub 官方 changelog 表示，JetBrains 插件 1.18.0 带来 AI-assisted tool approvals、对 agent conversations 的更多控制、组织共享 skills 和 custom instructions，以及 plan review 和 MCP tool 管理更新，提升了 multi-step agent 任务的可控性。",
        "howTo": "在 IntelliJ / JetBrains IDE 中更新插件到 1.18.0，打开 agent session 和 plan review；在组织设置中配置 shared skills 或 instructions，并在 tool approval 中批准/拒绝高风险操作。对于复杂任务，优先做小规模测试后再放大执行。",
        "impact": "学生和团队可在 Java/Kotlin、Spring 等项目中更顺畅地进行计划评审、MCP 工具控制和会话重编辑，同时把共享指令沉淀为可复用规范；但敏感操作和网络调用仍应保留人工批准。",
        "free": "官方说明这是插件更新，不是单独新的免费计划；具体个人/学生免费额度、地区例外和各计划限制未统一说明，需以当前 Copilot 账户和组织策略为准。",
        "category": "AI 编程 / IDE",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains"
        }
      }
    ],
    "deals": [
      {
        "event": "Microsoft Copilot Free 网页版与移动端免费访问",
        "summary": "Microsoft 官方 Copilot 页面提供免费入口，适合日常对话、研究整理和基础创作；页面说明是按当前 app / 功能边界提供免费使用，付费升级内容会在界面中提示。",
        "howTo": "打开 https://copilot.microsoft.com/，使用 Microsoft 账号登录；在聊天页输入研究问题、概念解释或写作草稿，并查看页面顶部是否显示付费升级与功能限制提示。",
        "impact": "学生可用于概念解释、论文提纲整理、英文润色和日程规划；但大规模生成、长期深度研究和高强度工作流仍要留意功能上限与付费提示。",
        "free": "官方页面明确提供免费入口；具体消息数、生成次数、地区范围和付费升级条件页面未统一说明，需以当前 app 提示为准。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Microsoft Copilot 官方应用页",
          "published": "官方未说明",
          "url": "https://copilot.microsoft.com/"
        }
      },
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google AI Studio 官方定价页说明 Gemini API 提供免费的 Free 层，支持有限访问部分模型和免费输入/输出 token，并能在 Google AI Studio 中使用原型工具。",
        "howTo": "登录 Google AI Studio，创建项目后在模型列表中选择当前可用的 Free tier 模型；先用小规模请求测试提示词、摘要和 API 原型，并查看模型页中的 RPM、TPM、RPD 等限制。",
        "impact": "学生可以用于课程演示、文本摘要、API 原型和小型实验；但不要把其 free tier 当作无限吞吐或长期稳定生产环境。",
        "free": "官方确认存在 Free tier；具体模型、RPM/TPM/RPD、账号资格和地区清单官方未统一说明，需按当前模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，尤其适合机器学习、数据科学和教育场景。",
        "howTo": "打开 Colab，新建或导入 notebook，并在运行时设置中切换 GPU/TPU；保存工作到 Google Drive 或从 GitHub 导入，并在分享前清理密钥和不必要输出。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置与硬件门槛；但使用高性能资源前仍需遵守 free tier 约束与安全规则。",
        "free": "官方确认免费；资源不保证且使用上限会波动，GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 GitHub Copilot Student，包含 unlimited code completions 和 GitHub AI Credits，并通过 auto model selection 提供 limited chat 与 agent usage。",
        "howTo": "访问 GitHub Education Pack 完成学生资格验证，并在 GitHub 账户中启用 GitHub Copilot Student；在支持的编辑器中使用补全，并在账户页面查看 AI Credits 和 chat/agent 的可用情况。",
        "impact": "学生可用代码补全减少样板代码工作，把有限 AI Credits 和 chat/agent 用于解释、测试和项目提问；所有生成代码仍需本地测试与人工检视。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 和 chat/agent limited，模型仅 auto model selection。具体 Credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明，Free 计划适合日常提问，并以 rolling five-hour session window 约束会话连续性；页面同时说明 paid plans 会在更高使用量下扩大 5 小时会话窗口。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前 session window 和使用状态，长文或高频提问前先确认等待重置时间。",
        "impact": "学生可以用它梳理论文提纲、概念释义和语言润色，再自行核对事实、引用和计算；不要把 Free 计划和 API 免费额度混为一谈。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session window；固定消息数、账号资格、地区范围及 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      }
    ]
  },
  "english": {
    "intro": "本期精选 2026-09-23 可免费阅读全文的 NPR/BBC 文章，覆盖住房负担、媒体自由和西班牙住房危机；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "It’s getting harder to afford rent in the U.S., even for middle-income families",
        "source": "NPR",
        "published": "2026-09-23",
        "url": "https://www.npr.org/2026/09/23/nx-s1-5977022/rent-affordability-middle-income",
        "readingTime": "8",
        "topic": "经济 / 住房与负担",
        "summary": "NPR 报道了 Urban Institute 的最新研究，说明美国中产收入家庭也越来越难以负担房租，甚至更多人出现迟交租金、部分付款或丢失房租支付的情况。文章先指出低收入租房者长期承受住房成本压力，但研究显示中等收入群体的困境也在迅速扩大，说明住房可负担性并非只属于底层，而是广泛蔓延到中产阶层。作者随后分析了日常生活必需品价格上涨和高昂租金如何使家庭在“支付药品、食品和房租”之间做出选择，最后强调这可能进一步增加流向无家可归的风险。",
        "reason": [
          "住房成本与中产负担是典型社会经济议题，适合考研英语二的社会经济主题。",
          "文章从低收入群体扩展到中等收入家庭，呈现“问题扩大化”的论证结构。",
          "易考句型包括比较、因果和引述，适合分析图表数据与采访评论的转换。",
          "词汇涵盖 affordability、housing cost-burden、eviction、vulnerable 等高频抽象词。",
          "写作上可借鉴“现象—数据—解释—风险”的逻辑链。"
        ],
        "vocabulary": [
          { "word": "affordability", "phonetic": "/əˌfɔːdəˈbɪləti/", "part": "n.", "translation": "可负担性" },
          { "word": "defaulting", "phonetic": "/dɪˈfɔːltɪŋ/", "part": "n.", "translation": "拖欠；违约" },
          { "word": "housing cost-burden", "phonetic": "/ˈhaʊzɪŋ kɒst ˈbɜːdən/", "part": "n.", "translation": "住房成本负担" },
          { "word": "eviction", "phonetic": "/ɪˈvɪkʃən/", "part": "n.", "translation": "驱逐；赶出住房" },
          { "word": "vulnerable", "phonetic": "/ˈvʌlnərəbəl/", "part": "adj.", "translation": "脆弱的；易受伤的" },
          { "word": "outsize share", "phonetic": "/aʊtˈsaɪz ʃeə/", "part": "n.", "translation": "过大份额" },
          { "word": "essential", "phonetic": "/ɪˈsenʃəl/", "part": "adj.", "translation": "必要的；基本的" },
          { "word": "basic needs", "phonetic": "/ˈbeɪsɪk niːdz/", "part": "n.", "translation": "基本需求" },
          { "word": "homelessness", "phonetic": "/ˈhəʊmləsnəs/", "part": "n.", "translation": "无家可归" },
          { "word": "inflow", "phonetic": "/ˈɪnfləʊ/", "part": "n.", "translation": "流入；涌入" }
        ],
        "sentences": [
          {
            "original": "A growing number of renters in the U.S. are struggling to pay for housing each month.",
            "analysis": [
              "主干是 A growing number ... are struggling to pay。",
              "in the U.S. 是地点状语，限定范围。",
              "to pay for housing each month 强调持续性和现实压力。",
              "该句适合作为文章主题句，直接概括社会问题。"
            ],
            "translation": "越来越多的美国租房者正为每月住房费用苦苦挣扎。"
          },
          {
            "original": "We have historically observed that low-income renters experience high rates of housing cost-burdens.",
            "analysis": [
              "主干是 We have observed that ...，属于新闻报道中的研究总结句。",
              "historically observed 强调这是长期趋势而非偶发现象。",
              "that 从句承载研究结论，并形成对比基准。",
              "该句适合训练“已知事实—新现象”的论证写法。"
            ],
            "translation": "我们过去一直观察到，低收入租房者承受着高比例的住房成本负担。"
          },
          {
            "original": "When we see a family reporting having had a late payment or a partial payment or a missing rent payment, we're seeing those choices happen in real time.",
            "analysis": [
              "When 引导时间条件句，体现家庭在困境中的现实选择。",
              "late payment / partial payment / missing rent payment 是并列名词短语，说明压力的多样性。",
              "we're seeing ... in real time 强调生活决策直接发生于当前时刻。",
              "该句适合分析数据转化为生活经验的写法。"
            ],
            "translation": "当我们看到一个家庭曾出现逾期付款、部分付款或未支付房租时，我们看到这些选择正在实时发生。"
          }
        ]
      },
      {
        "title": "Judge considers restoring journalists' access to White House after Trump's ban",
        "source": "NPR",
        "published": "2026-09-23",
        "url": "https://www.npr.org/2026/09/23/nx-s1-5979101/federal-judge-hearing-trump-ban-cnn-ms-now-politico",
        "readingTime": "7",
        "topic": "社会 / 媒体 / 公共治理",
        "summary": "NPR 报道了美国联邦法官在听证会上倾向于恢复 CNN、Politico 和 MS NOW 记者的白宫通行证，评论称这场禁令可能违反正当程序和宪法保障。文章从事件出发，先交代禁令发生的背景和诉讼进程，再引出律师与司法部对“是否赋予媒体进入权”的激烈争辩，最终把问题上升到新闻自由、观点歧视和公共利益的法理层面。它的核心不是单个媒体事件，而是政府是否可因批评性报道剥夺记者进入权。",
        "reason": [
          "新闻自由、媒体权利和宪法原则是公共治理与社会议题的经典组合。",
          "文章按“禁令—诉讼—争议—法理判断”的顺序推进，结构清晰。",
          "可考的题型包括因果分析、法理判断和作者立场判断。",
          "词汇丰富：press passes, due process, retaliation, viewpoint discrimination 等。",
          "适合练习“单一事件—制度意义—公共利益”的议论文组织方式。"
        ],
        "vocabulary": [
          { "word": "press pass", "phonetic": "/pres pæs/", "part": "n.", "translation": "记者证；新闻通行证" },
          { "word": "due process", "phonetic": "/djuː ˈprəʊses/", "part": "n.", "translation": "正当程序" },
          { "word": "retaliation", "phonetic": "/rɪˌtælɪˈeɪʃən/", "part": "n.", "translation": "报复； retaliation" },
          { "word": "viewpoint discrimination", "phonetic": "/ˈvjuːpɔɪnt dɪˌskrɪmɪˈneɪʃən/", "part": "n.", "translation": "观点歧视" },
          { "word": "irreparable harm", "phonetic": "/ɪˈrepərəbəl hɑːm/", "part": "n.", "translation": "无法挽回的损害" },
          { "word": "constitutional", "phonetic": "/ˌkɒnstɪˈtjuːʃənəl/", "part": "adj.", "translation": "宪法的" },
          { "word": "public interest", "phonetic": "/ˈpʌblɪk ˈɪntrəst/", "part": "n.", "translation": "公共利益" },
          { "word": "access", "phonetic": "/ˈækses/", "part": "n.", "translation": "进入权；使用权" },
          { "word": "legal filing", "phonetic": "/ˈliːɡəl ˈfaɪlɪŋ/", "part": "n.", "translation": "法律文件；诉讼材料" },
          { "word": "national security", "phonetic": "/ˈnæʃənəl sɪˈkjʊərəti/", "part": "n.", "translation": "国家安全" }
        ],
        "sentences": [
          {
            "original": "A federal judge appeared inclined to order the White House to restore — at least temporarily — the press passes of journalists for CNN, Politico and MS NOW.",
            "analysis": [
              "主干是 A federal judge appeared inclined to order ...。",
              "at least temporarily 是插入式修饰语，强调是临时性救济。",
              "the press passes ... 是 order 的直接宾语，明确争议焦点。",
              "该句适合分析“法官态度 + 事件对象 + 诉讼结果”的新闻写法。"
            ],
            "translation": "一名联邦法官似乎倾向于命令白宫至少暂时恢复 CNN、Politico 和 MS NOW 记者的新闻通行证。"
          },
          {
            "original": "Theodore J. Boutrous, a lawyer representing the three news outlets, said the White House ban took place 'without a semblance of due process.'",
            "analysis": [
              "主干是 Theodore J. Boutrous said ...。",
              "a lawyer representing ... 是同位语，交代发言人的身份。",
              "without a semblance of due process 是直接引语中的法律核心概念。",
              "该句适合分析“引述 + 法律标准 + 争议立场”的组合。"
            ],
            "translation": "代表三家新闻媒体的律师西奥多·J·布特罗斯说，白宫的禁令发生在“没有任何正当程序痕迹”的情况下。"
          },
          {
            "original": "The constitutional violation is against the public interest, he said.",
            "analysis": [
              "The constitutional violation is ... 是中心判断句。",
              "against the public interest 将法理问题提升到公共利益层面。",
              "he said 作为引述尾巴，保留了新闻写作的客观语气。",
              "该句适合练习“判定+理由+引述”的简短论证。"
            ],
            "translation": "他表示，这种违宪行为损害了公众利益。"
          }
        ]
      },
      {
        "title": "Dramatic eviction of woman aged 87 highlights Spain's housing shortage",
        "source": "BBC",
        "published": "2026-09-23",
        "url": "https://www.bbc.co.uk/news/articles/c6vgy55lm8z1o?at_medium=RSS&at_campaign=rss",
        "readingTime": "7",
        "topic": "社会 / 住房 / 公共政策",
        "summary": "BBC 报道了西班牙马德里一名 87 岁老妇人被强制搬离其祖传住宅的事件，揭示出住房短缺和租金暴涨对老年人和低收入家庭的巨大压力。文章先以她在家中生活了七十年、租金被房产投资公司大幅抬高为切入点，说明法律漏洞、租赁制度和房产投资机制共同造成了这一冲突。随后报道引用了支持者和社会活动者的呼吁，说明这并非个案，而是一场关于住房权、养老和城市供给失衡的更大议题。",
        "reason": [
          "住房短缺、租房权与社会公平是考研英语二常见经济社会议题。",
          "文章从“个案”切入，再扩展到“制度漏洞”和“社会冲突”，层次清晰。",
          "可积累 eviction, tenancy, rent cap, pension, housing crisis 等词汇。",
          "适合分析“社会冲突—法律漏洞—公共议题”的逻辑链。",
          "写作上可借鉴“个人故事 + 结构性问题”的论证方式。"
        ],
        "vocabulary": [
          { "word": "eviction", "phonetic": "/ɪˈvɪkʃən/", "part": "n.", "translation": "驱逐；搬离" },
          { "word": "tenant", "phonetic": "/ˈtenənt/", "part": "n.", "translation": "租户" },
          { "word": "rent cap", "phonetic": "/rent kæp/", "part": "n.", "translation": "租金上限" },
          { "word": "investment firm", "phonetic": "/ɪnˈvestmənt fɜːm/", "part": "n.", "translation": "投资公司" },
          { "word": "pension", "phonetic": "/ˈpenʃən/", "part": "n.", "translation": "养老金" },
          { "word": "housing crisis", "phonetic": "/ˈhaʊzɪŋ ˈkraɪsɪs/", "part": "n.", "translation": "住房危机" },
          { "word": "supporter", "phonetic": "/səˈpɔːtə/", "part": "n.", "translation": "支持者" },
          { "word": "activist", "phonetic": "/ˈæktɪvɪst/", "part": "n.", "translation": "活动人士" },
          { "word": "legal glitch", "phonetic": "/ˈliːɡəl ɡlɪtʃ/", "part": "n.", "translation": "法律漏洞" },
          { "word": "campaign", "phonetic": "/kæmˈpeɪn/", "part": "n.", "translation": "运动；抗议活动" }
        ],
        "sentences": [
          {
            "original": "The dramatic eviction of an 87-year-old woman from the home in Madrid where she lived for seven decades has drawn attention to the depth of Spain's housing crisis.",
            "analysis": [
              "主干是 The eviction ... has drawn attention。",
              "of an 87-year-old woman ... 是介词短语修饰 eviction。",
              "where she lived for seven decades 强调长期居住与情感联系。",
              "该句适合分析“个案 + 空间背景 + 社会问题”的新闻写法。"
            ],
            "translation": "一名 87 岁老妇人从在马德里生活了七十年的房子中被强制驱逐，这一事件引起了人们对西班牙住房危机深度的关注。"
          },
          {
            "original": "Maricarmen's father first rented the property in 1956 and she continued as the tenant after her parents died, during which time there was a cap on the rent.",
            "analysis": [
              "主干是 Maricarmen's father first rented ... and she continued ...。",
              "during which time there was a cap on the rent 是时间状语从句，说明制度背景。",
              "first rented ... and continue as the tenant 体现代际居住。",
              "该句适合分析“历史背景—代际长期居住—制度变化”的逻辑。"
            ],
            "translation": "马里卡门的父亲于 1956 年首次租下这处房产，父母去世后她继续作为租户居住，在此期间房租受到上限限制。"
          },
          {
            "original": "Supporters of Maricarmen camped outside the building on Tuesday night, joined by celebrities including Javier Bardem's brother, Carlos, and the singer Ana Belén.",
            "analysis": [
              "主干是 Supporters ... camped outside the building。",
              "joined by celebrities ... 是过去分词短语，补充事件参与者。",
              "including ... 例举名人支持者的社会影响。",
              "整句非常适合分析公共议题如何借由名人支持放大传播效果。"
            ],
            "translation": "马里卡门的支持者在周二晚上在大楼外露宿，并有包括哈维尔·巴尔登姆兄弟卡洛斯和歌手安娜·贝伦在内的名人加入支持。"
          }
        ]
      }
    ]
  }
};

const issue20260923 = {
  "date": "2026-09-23",
  "status": "ready",
  "ai": {
    "intro": "本期核验 2026-09-22 至 2026-09-23 的官方 GitHub Copilot 更新，并复核仍可用的免费资源；所有价格、额度、账号资格与地区说明均按官方页面所写。",
    "updates": [
      {
        "event": "OpenAI 的 GPT-6 Sol 与 GPT-6 Luna 已在 GitHub Copilot 中推出（2026-09-22）",
        "summary": "GitHub 官方 changelog 说明，OpenAI 的 GPT-6 系列在 GitHub Copilot 中新增 GPT-6 Sol 和 GPT-6 Luna，接续此前推出的 GPT-6 Astra，可在更长周期、多步骤任务中提供更灵活的模型选择。",
        "howTo": "在支持的 GitHub Copilot 客户端中打开模型选择器，选择 GPT-6 Sol 或 GPT-6 Luna；如果尚未出现，请等待逐步 rollout。若需要在团队环境中标准化模型选择，可在组织或企业的 model policy 中统一控制可见性。",
        "impact": "学生可把它们放在复杂研究、跨文件脚本整理和代码重构等任务中试用，尤其适合需要较长上下文和更强推理的方案设计；不过仍需保留测试输出和人工检视，避免直接把模型判断当成结论。",
        "free": "官方说明这两个模型已在 GitHub Copilot 中推出；具体可用计划、免费额度、账号资格和地区适配信息未在 changelog 中统一列明，需以当前 Copilot 计划和模型策略为准。",
        "category": "AI 编程 / 模型",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available"
        }
      },
      {
        "event": "Claude Opus 5.5 已在 GitHub Copilot 中推出（2026-09-22）",
        "summary": "GitHub 官方 changelog 说明，Anthropic 的 Claude Opus 5.5 现已在 GitHub Copilot 中可用，定位为 agentic coding、长任务代理与知识工作场景的高端模型，适合复杂分析和多步骤计划执行。",
        "howTo": "在支持的 GitHub Copilot 客户端中打开模型选择器，选择 Claude Opus 5.5；若你的组织或企业启用了模型策略，确保它在允许列表中。对复杂任务建议先建立小范围验证，再统一执行更大范围的梳理与修改。",
        "impact": "学生可用它处理大规模代码阅读、需求分解和研究笔记整合，但对关键决策、代码安全和论文结论仍需人工复核，尤其在需要严格事实核对时更应谨慎。",
        "free": "官方 changelog 说明该模型在 GitHub Copilot 中可用，但未写明统一免费额度、学生资格、地区例外以及各计划的使用限制；需以当前 Copilot 计划、模型策略和 provider pricing 为准。",
        "category": "AI 编程 / 模型",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot"
        }
      },
      {
        "event": "Copilot for JetBrains 1.18.0 新增审批、组织共享技能与更强代理体验（2026-09-22）",
        "summary": "GitHub 官方 changelog 表示，Copilot for JetBrains 1.18.0 重点更新了 AI-assisted tool approvals、对 agent conversation 的更多控制，以及组织级共享 skills 和 instructions；同时更新了计划复核体验，便于在 JetBrains IDE 中更清楚地审查 agent 方案。",
        "howTo": "在 JetBrains IDE 中更新 Copilot 插件到 1.18.0，打开 agent 会话和 plan review；在组织级设置中共享 skills 或 instructions，并在 tool approval 中批准或拒绝敏感操作；对多步骤任务，优先做小规模验证后再放大执行。",
        "impact": "学生和团队可以在 Java/Kotlin、Spring 等项目中更顺畅地让 Copilot 审核计划、调用工具和管理上下文，同时把共享指令沉淀为可复用的项目规范；但敏感操作和外部网络调用仍应保留人工批准。",
        "free": "官方 changelog 说明这是 Copilot for JetBrains 的更新，不是单独的新免费计划；具体免费额度、个人/学生资格、地区例外和各计划限制官方未统一说明。",
        "category": "AI 编程 / IDE",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-22",
          "url": "https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains"
        }
      }
    ],
    "deals": [
      {
        "event": "Microsoft Copilot Free 网页版免费访问",
        "summary": "Microsoft 官方 Copilot 网站说明 Copilot 可在网页和移动端免费使用，适合日常对话、研究整理和基础创作；自由版的具体功能边界以当前 app 说明为准。",
        "howTo": "打开 https://copilot.microsoft.com/ 并使用 Microsoft 账号登录；在聊天页输入研究问题、概念解释或写作草稿，并在页面顶部查看是否展示付费升级提示与功能限制。",
        "impact": "学生可以用于概念解释、论文提纲整理、英文润色和日程规划；但大规模生成、长期深度研究和高强度工作流仍应留意功能上限与计费提示。",
        "free": "官方页面明确提供免费入口；具体消息数、生成次数、地区范围和付费升级条件官方未在页面中统一列明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Microsoft Copilot 官方应用页",
          "published": "官方未说明",
          "url": "https://copilot.microsoft.com/"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页说明 Gemini API 提供免费层，并可在 AI Studio 中进行原型测试；用户可在受限模型和免费输入/输出 token 范围内开展项目探索。",
        "howTo": "登录 Google AI Studio，创建项目并在模型列表中查看当前可用的 Free tier 模型；用小规模请求测试提示词、摘要和 API 原型，并在模型页查看 RPM、TPM、RPD 等限制。",
        "impact": "学生可以用它做摘要、课程演示、文本结构分析和 API 原型验证；但不要把免费层当作无限吞吐或生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合机器学习、数据科学和教育场景。",
        "howTo": "打开 Colab，新建或导入 notebook；在运行时设置中切换 GPU 或 TPU，并将 notebook 保存到 Google Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；在分享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 Copilot Student，包含 unlimited code completion、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 与 agent 使用。",
        "howTo": "访问 Student Developer Pack 完成学生资格验证；验证后在 GitHub 上启用 Copilot Student，并在支持的编辑器中使用补全和 chat/agent 入口。",
        "impact": "学生可用代码补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；所有生成代码仍需本地测试、许可证审核和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Qwen3-0.6B 开放权重模型可本地下载",
        "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B：0.6B 参数、32,768 上下文长度，并支持 thinking 和 non-thinking 模式切换；页面给出 Transformers、vLLM 和本地工具的运行方式。",
        "howTo": "在 Hugging Face 打开 Qwen/Qwen3-0.6B，按模型卡安装最新版 Transformers，下载 tokenizer 和模型后运行示例；也可用 Ollama、LM Studio 或 llama.cpp 进行本地推理。",
        "impact": "学生可在本地或 Colab 里做轻量推理、对比提示词和多语言实验，对模型部署和资源约束有更直观理解，而不必先调用付费 API。",
        "free": "模型权重可从官方 Hugging Face 页面下载；本地软件、GPU、存储和网络可能产生费用，统一免费 API 配额、账号资格和地区范围官方未说明。",
        "category": "开放模型权重",
        "source": {
          "name": "Qwen 官方 Hugging Face 模型卡",
          "published": "官方未说明",
          "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
        }
      }
    ]
  },
  "english": {
    "intro": "本期精选 2026-09-11 至 2026-09-23 可免费阅读全文的 Guardian/NPR 文章，覆盖教育、住房和数据中心增长；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "Why has university become such a scam?",
        "source": "The Guardian",
        "published": "2026-09-14",
        "url": "https://www.theguardian.com/commentisfree/2026/sep/14/why-has-university-become-such-a-scam",
        "readingTime": "8",
        "topic": "教育 / 高等教育与经济",
        "summary": "这篇文章以“大学为什么变成了如此大的骗局”作为标题，直接指出一代毕业生背负巨额学费与债务，却面对越来越少的稳定入门岗位。作者先用大量数据和现实例子强调，毕业生不只是工作起步较晚，而是实际收入难以覆盖债务压力，家庭依赖和返家现象也因此更普遍。文章随后回溯 2012 年学费上调时的政策逻辑：当时政府承诺高学位可换来更高收入，但现实证明这种“债务会被未来收入抵消”的承诺并没有成立。最后作者将问题总结为一个更尖锐的社会判断：这不是对年轻人的简单忽视，而是制造了一个大量人被迫承受长期负担，却几乎没有获得相应回报的制度。",
        "reason": [
          "教育、青年就业与负债问题是高频社会经济议题，且具现实冲击力。",
          "文章用“骗局”作为标题，再用数据与行文层层拆解制度逻辑，论证结构明显。",
          "可积累 debt, tuition, entry-level jobs, earning capacity 等高频抽象词。",
          "写作适合分析“政策承诺—现实偏差—制度失效”的逻辑链。",
          "句子和论证都适合练习“提出问题—反驳假设—形成批判结论”的议论文框架。"
        ],
        "vocabulary": [
          { "word": "tuition", "phonetic": "/tjuːˈɪʃən/", "part": "n.", "translation": "学费" },
          { "word": "debt", "phonetic": "/det/", "part": "n.", "translation": "债务" },
          { "word": "entry-level", "phonetic": "/ˈɛntriː ˈlevəl/", "part": "adj.", "translation": "入门级的" },
          { "word": "earning capacity", "phonetic": "/ˈɜːnɪŋ kəˈpæsəti/", "part": "n.", "translation": "挣钱能力" },
          { "word": "offset", "phonetic": "/ˈɒfset/", "part": "v.", "translation": "抵消；补偿" },
          { "word": "plummet", "phonetic": "/ˈplʌmɪt/", "part": "v.", "translation": "骤降；暴跌" },
          { "word": "repayment", "phonetic": "/rɪˈpeɪmənt/", "part": "n.", "translation": "还款" },
          { "word": "incoherent", "phonetic": "/ˌɪnkəʊˈhɪərənt/", "part": "adj.", "translation": "不连贯的；混乱的" },
          { "word": "remiss", "phonetic": "/rɪˈmɪs/", "part": "adj.", "translation": "失职的；疏忽的" },
          { "word": "headway", "phonetic": "/ˈhedweɪ/", "part": "n.", "translation": "进展；进步" }
        ],
        "sentences": [
          {
            "original": "Graduates are leaving with an average debt of £53,000 – while entry-level jobs plummet.",
            "analysis": [
              "主干是 Graduates are leaving with an average debt... while entry-level jobs plummet。",
              "with an average debt of £53,000 是伴随状态，强调毕业生负担之重。",
              "while 引导对比关系，形成“债务在涨—岗位在跌”的鲜明冲突。",
              "该句适合抓住文章的核心冲突，便于做题时定位问题的严重性。"
            ],
            "translation": "毕业生离校时平均背负 53,000 英镑的债务，而入门级岗位却在暴跌。"
          },
          {
            "original": "The students themselves were almost a side issue in this debate: the promise was that the debt would be more than offset by their increased earning capacity, once they had a degree.",
            "analysis": [
              "主干是 The students ... were almost a side issue，后面说明政策辩论的核心是 debt 与 earning capacity 的关系。",
              "the promise was that ... 是典型的“承诺—现实反例”写法。",
              "more than offset 形成强烈的经济学语境，适合分析宏观政策和个人成本之间的误判。",
              "冒号后展开具体承诺，便于训练“总述—解释—细化”的结构。"
            ],
            "translation": "在这场辩论中，学生本人几乎成了旁支：其承诺是，毕业后他们的收入提升将足以抵消债务。"
          },
          {
            "original": "It’s one thing to deprioritise the younger generation, it’s another to straight up scam them.",
            "analysis": [
              "It’s one thing ... it’s another to ... 是典型的对比句式，强化观点尖锐度。",
              "deprioritise 与 scam 形成强烈语义对比，说明作者从“忽视”升级到“欺骗”。",
              "straight up 是口语化表达，增强文章批评语气，适合用于写作中进一步强调立场。",
              "整句总结了文章最极端但最强烈的价值判断。"
            ],
            "translation": "忽视年轻一代是一回事，直接欺骗他们则是另一回事。"
          }
        ]
      },
      {
        "title": "Pay rent, eat or keep warm? Growing numbers face hard choices as housing benefit gap grows",
        "source": "The Guardian",
        "published": "2026-09-23",
        "url": "https://www.theguardian.com/business/2026/sep/23/pay-rent-eat-or-keep-warm-growing-numbers-face-hard-choices-as-housing-benefit-gap-grows",
        "readingTime": "7",
        "topic": "经济 / 住房与生活成本",
        "summary": "这篇文章以一位在威尔士地区抚养孩子的单身母亲为例，说明住房补贴在面对实际房租上涨时日益捉襟见肘。作者写道，许多低收入租房者不得不在支付房租、买食物和保持温暖之间做出难以承受的选择，甚至必须转向食物银行。文章的核心论证是，住房补贴并未跟上本地租金上涨的速度，因此贫困不只是“支付能力差”，而是底层生活被迫被不断压缩：餐食变差、燃气减少、睡眠受影响，最终影响家庭心理健康和育儿表现。它以个人故事切入，再扩展到全社会的公共政策问题，形成了“生活困境—制度缺口—政策回应”的结构。",
        "reason": [
          "住房成本、社保与生活质量是典型的社会经济议题，题材现实且有广泛讨论价值。",
          "文章从一个家庭故事切入，再扩展到更大范围的住房补贴缺口，叙事层层推进。",
          "可积累 rent gap, housing allowance, food bank, cost of living, mental health 等词汇。",
          "适合分析“个人困境—制度性问题—政策必要性”的论证链。",
          "语篇既有生活细节，也有政策讨论，适合练习议论文中的案例论证。"
        ],
        "vocabulary": [
          { "word": "housing allowance", "phonetic": "/ˈhaʊzɪŋ əˈlaʊəns/", "part": "n.", "translation": "住房补贴" },
          { "word": "rent gap", "phonetic": "/rent ɡæp/", "part": "n.", "translation": "租金差额" },
          { "word": "food bank", "phonetic": "/fuːd bæŋk/", "part": "n.", "translation": "食物银行" },
          { "word": "improvise", "phonetic": "/ˈɪmprəvaɪz/", "part": "v.", "translation": "临时应付；凑合" },
          { "word": "juggle", "phonetic": "/ˈdʒʌɡəl/", "part": "v.", "translation": "勉强应付；腾挪" },
          { "word": "housing benefit", "phonetic": "/ˈhaʊzɪŋ ˈbenɪfɪt/", "part": "n.", "translation": "住房福利" },
          { "word": "local authority", "phonetic": "/ˈləʊkəl ɔːˈθɒrəti/", "part": "n.", "translation": "地方政府机构" },
          { "word": "budget", "phonetic": "/ˈbʌdʒɪt/", "part": "n.", "translation": "预算" },
          { "word": "mental health", "phonetic": "/ˈmentəl helθ/", "part": "n.", "translation": "心理健康" },
          { "word": "cost of living", "phonetic": "/kɒst əv ˈlɪvɪŋ/", "part": "n.", "translation": "生活成本" }
        ],
        "sentences": [
          {
            "original": "Do you prioritise paying the rent, putting food on the table or keeping the house warm in winter?",
            "analysis": [
              "这是一个典型的三选一问题句，直接把读者带入生活困境。",
              "prioritise ... or ... or ... 形成并列结构，展示压力的多重性。",
              "keeping the house warm in winter 强调季节性压力，增强现实感。",
              "可用于分析标题式问句如何迅速建立情境和衝突。"
            ],
            "translation": "你会优先支付房租、填饱肚子，还是在冬天时让房子保持温暖？"
          },
          {
            "original": "She pays her landlord £550 a month, but receives £425 in housing allowance, leaving her to make up a £125 'rent gap' out of her grocery and heating budgets.",
            "analysis": [
              "主干是 She pays ... but receives ...，形成形成强烈的数额对比。",
              "leaving her to make up a £125 'rent gap' 是现在分词结构，说明结果。",
              "out of her grocery and heating budgets 强调生活必需品与住房支出之间的挤压。",
              "这句非常适合练习“事实数字 + 结论引导”的写法。"
            ],
            "translation": "她每月向房东支付 550 英镑，但只收到 425 英镑住房补贴，结果她必须从食品和取暖预算中补上 125 英镑的“租金差额”。"
          },
          {
            "original": "It’s hard, she reflects, and the stress can affect her mental health.",
            "analysis": [
              "It’s hard ... and ... 是典型的心理感受与现实后果并列连接。",
              "she reflects 是插入语，增强叙述的现实感。",
              "the stress can affect her mental health 把个人困境提升到心理健康层面。",
              "整句适合分析“生活压力—心理影响”的逻辑链。"
            ],
            "translation": "她反思道，事情很艰难，而压力会影响她的心理健康。"
          }
        ]
      },
      {
        "title": "As data centers spread, not all U.S. housing markets react the same way",
        "source": "NPR",
        "published": "2026-09-11",
        "url": "https://www.npr.org/2026/09/11/nx-s1-5964912/data-centers-growing-footprint-have-a-varying-effect-on-property-values",
        "readingTime": "8",
        "topic": "科技趋势 / 经济与房地产",
        "summary": "NPR 报道指出，随着美国大型数据中心扩张，地方房地产市场受到的影响并不一致。文章指出，真实的影响取决于地区经济基础、供需关系、土地价值和能源系统的承载能力，而不是简单地把数据中心视为一个统一的“增长引擎”。这篇报道引用了全国地产经纪人协会的一项研究：该研究把 1,500 个数据中心的位置、房价、房屋销售和人口数据整合起来，结果发现数据中心在不同州、不同县的影响差异极大，既可能带来新增就业和消费，也可能带来能源压力和社区纷争。文章最后强调，房产市场不是“数据中心越多越好”，而是取决于地方是否具备合适的基础设施和治理能力。",
        "reason": [
          "AI 与数据中心扩张是当下科技趋势和经济地理的重要议题。",
          "文章通过“并非同一类别”这一判断，形成强烈的反常识论证，结构鲜明。",
          "可积累 data center, housing market, infrastructure, energy supply 等经济与科技词。",
          "适合分析“局部案例—整体概括—结论转折”的写作逻辑。",
          "题材兼具技术与房地产，是典型的社会经济跨界话题。"
        ],
        "vocabulary": [
          { "word": "data center", "phonetic": "/ˈdeɪtə ˈsentə/", "part": "n.", "translation": "数据中心" },
          { "word": "housing market", "phonetic": "/ˈhaʊzɪŋ ˈmɑːkɪt/", "part": "n.", "translation": "房地产市场" },
          { "word": "footprint", "phonetic": "/ˈfʊtprɪnt/", "part": "n.", "translation": "占地面积；足迹" },
          { "word": "infrastructure", "phonetic": "/ˈɪnfrəstrʌktʃə/", "part": "n.", "translation": "基础设施" },
          { "word": "energy supply", "phonetic": "/ˈɛnədʒi səˈplaɪ/", "part": "n.", "translation": "能源供应" },
          { "word": "commission", "phonetic": "/kəˈmɪʃən/", "part": "v.", "translation": "委托；安排" },
          { "word": "real estate", "phonetic": "/ˌrɪəl ɪˈsteɪt/", "part": "n.", "translation": "房地产" },
          { "word": "location", "phonetic": "/ləʊˈkeɪʃən/", "part": "n.", "translation": "位置；地理位置" },
          { "word": "demographic", "phonetic": "/ˌdeməˈɡræfɪk/", "part": "adj.", "translation": "人口统计的" },
          { "word": "varying", "phonetic": "/ˈveəriɪŋ/", "part": "adj.", "translation": "不同的；多变的" }
        ],
        "sentences": [
          {
            "original": "We talk about data centers as though they are one category, and they are not.",
            "analysis": [
              "这是文章最有冲击力的观点句，主干结构简单但结论强烈。",
              "as though they are one category 是比较句式，突出“错误归类”问题。",
              "and they are not 是简洁的反驳，语气压迫感强。",
              "适合练习“概念批判式”的论证开头。"
            ],
            "translation": "我们谈论数据中心时，似乎把它们当成同一类事物，但它们并不是。"
          },
          {
            "original": "While some data center-rich counties have shown signs of economic growth, others have experienced strain on their energy supply.",
            "analysis": [
              "While 引导让步对比，体现不同地区效果的差异。",
              "some ... others ... 是典型的分组对比结构。",
              "strain on their energy supply 把经济增长和基础设施压力并列，增强论证深度。",
              "适合分析“对比句 + 结论性词汇”的写法。"
            ],
            "translation": "一些数据中心密集的县出现了经济增长的征兆，而另一些则经历了能源供应压力。"
          },
          {
            "original": "The study found that data centers' effects differ dramatically from place to place.",
            "analysis": [
              "主干是 The study found that ...，采用标准研究报告句式。",
              "differ dramatically from place to place 表示效果差异非常显著。",
              "主题由“数据中心”转回“地区差异”，形成文章总结效应。",
              "适合用于整合观点并作结论性落点。"
            ],
            "translation": "研究发现，数据中心的影响在不同地区之间差异极大。"
          }
        ]
      }
    ]
  }
};

const issue20260922 = {
  "date": "2026-09-22",
  "status": "ready",
  "ai": {
    "intro": "本期核验 2026-09-17 至 2026-09-21 的官方 GitHub Copilot 更新，并复核仍可用的免费资源；所有价格、额度、账号资格与地区说明均按官方页面所写。",
    "updates": [
      {
        "event": "Grok 4.7 现已在 GitHub Copilot 中推出（2026-09-21）",
        "summary": "GitHub 官方 changelog 说明，xAI 的 Grok 4.7 已按逐步 rollout 进入 GitHub Copilot，定位在 agentic coding 与复杂、多步骤工作流中提升推理和执行能力。",
        "howTo": "在 VS Code、Visual Studio、Copilot CLI、GitHub Copilot app、JetBrains、Xcode 或 Eclipse 中打开模型选择器，等待 Grok 4.7 逐步显示后选择它；Copilot Business 或 Enterprise 管理员可在 settings 的 model policy 中控制是否启用该模型。",
        "impact": "学生可把它放在复杂调试、跨文件重构和多步骤规划任务中试用，但仍需保留验证输出和人工检视，避免将模型判断直接当成代码结论。",
        "free": "官方说明 Grok 4.7 面向 Copilot Pro、Pro+、Max、Business 和 Enterprise，按 usage-based billing 的 provider list pricing 计费；个人或学生统一免费额度、地区例外和具体配额官方未说明。",
        "category": "AI 编程 / 模型",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-21",
          "url": "https://github.blog/changelog/2026-09-21-grok-4-7-is-now-available-in-github-copilot"
        }
      },
      {
        "event": "Copilot Code Review 改进审查体验并支持更清晰跟踪（2026-09-18）",
        "summary": "GitHub 官方 changelog 披露，Copilot code review 现可按时间维度显示 review 进度、自动解析已修复问题、在批量接受建议时生成更有用的提交说明，并对 findings 进行更清晰分组。",
        "howTo": "在已开启 code review 的 pull request 页面查看更新后的 overview comment；点击 Open、Resolved since last review 和 Previously missed 等分组，逐项检查 remaining issues；如需批量接收建议，可在建议弹窗中选择一组变更并让 Copilot 生成提交标题与说明。",
        "impact": "学生团队在课题分支和开源协作中更容易看懂 review 进度、决定哪些问题需要继续处理，以及在合并前把零散修正整理成更易读的提交说明；但仍需人工判断严重性和代码语义。",
        "free": "官方说明这些更新已 generally available，并仅在支持的 Copilot code review 环境中使用；个人计划价格、统一免费额度、地区覆盖和学生资格官方未说明。",
        "category": "AI 编程 / 代码评审",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience"
        }
      },
      {
        "event": "Copilot Impact Dashboard 新增功能参与度统计（2026-09-17）",
        "summary": "GitHub 官方 changelog 宣布，Copilot impact dashboard now shows how many active users regularly use key Copilot features，并让 enterprise and organization 28-day aggregate reports 显示 feature engagement and AI adoption phase data。",
        "howTo": "企业或组织管理员打开 Copilot usage metrics 页面，查看 active users、feature engagement 以及 28-day phase population；如果需要导出报告，使用 `copilot_feature_engagement` 和 `users_in_phase_28d` 等字段纳入监控与培训计划。",
        "impact": "学生团队和实验室可以用这一数据看哪些 Copilot 功能真正被开发者常用，并据此调整培训、启用策略和 governance；但数据只是使用情况指标，不替代质量、合规和人员培养评估。",
        "free": "官方说明此能力可在 enterprise 和 organization 28-day aggregate report 中使用，并要求启用 Copilot usage metrics policy；统一免费额度、学生资格和地区范围官方未说明。",
        "category": "AI 工具 / 采用度分析",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适用于日常提问，并在页面中明确写出所有计划都受 rolling five-hour session window 影响，且没有固定消息数。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前会话窗口和使用状态，达到限制后等待重置，不要把网页免费计划与 API 免费额度混为一谈。",
        "impact": "学生可用来整理提纲、概念解释和语言润色，再自行核对事实、引用和计算；长文和高频分析前应先观察当前实际限制。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session 限制；固定消息数、是否需要手机号、地区资格和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的免费层，并说明其可在有限模型与免费输入/输出 token 上使用，开发者可以在 AI Studio 中发起原型实验。",
        "howTo": "登录 Google AI Studio，创建或选择项目，确认当前支持的 Free tier 模型；使用小规模请求测试提示词和 API 原型，并在模型页面查看 RPM、TPM、RPD 等限制。",
        "impact": "学生可用它做摘要、分类、课程演示和功能原型，并记录请求次数和 token 用量；不要把 Free tier 当作长期无限吞吐或生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中切换 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；分享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "访问 Student Developer Pack，完成学生资格验证并启用 Copilot Student；在支持的编辑器中使用补全，并在 GitHub 账户中查看 AI Credits 和 chat/agent 可用情况。",
        "impact": "学生可用补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；所有生成代码仍需本地测试、许可证审核和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
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
      }
    ]
  },
  "english": {
    "intro": "本期精选 2026-09-20 至 2026-09-21 可免费阅读全文的 BBC/NPR 文章，覆盖心理健康、老年护理与航空 AI；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "Young people aren't snowflakes - mental distress is rising, says head of official review",
        "source": "BBC",
        "published": "2026-09-21",
        "url": "https://www.bbc.co.uk/news/articles/cqzrz0z4plk1o",
        "readingTime": "8",
        "topic": "社会 / 心理健康",
        "summary": "BBC 报道了英国一项官方评估报告的负责人 Peter Fonagy 的观点：年轻人的心理困扰并非偶发情绪，而是一个持续加剧的公共健康问题。文章先指出 NHS 在心理健康支持上存在明显“供需断裂”，随后说明排队等待、社交孤立和手机使用带来的睡眠破坏都在加重青年困境。文章的重点不只是诊断问题，而是强调真正的解决方案需要在教育、就业、住房和家庭层面共同响应，最后以“我们可以做点什么”为结论，形成一条清晰的社会治理逻辑。",
        "reason": [
          "心理健康、青少年发展与公共政策是社会议题中高频且有现实性的主题。",
          "文章从“问题存在”到“系统缺陷”再到“社会协同解决”，论证链条清晰。",
          "可积累 mental distress、loneliness、waiting list、belonging 等抽象社会词汇。",
          "题目和结构都适合分析因果关系和政策回应的辩证逻辑。",
          "写作中可借鉴“描述症状—分析原因—呼吁各方行动”的结构。"
        ],
        "vocabulary": [
          { "word": "distress", "phonetic": "/dɪˈstres/", "part": "n.", "translation": "痛苦；困扰" },
          { "word": "loneliness", "phonetic": "/ˈləʊnlinəs/", "part": "n.", "translation": "孤独感" },
          { "word": "waiting list", "phonetic": "/ˈweɪtɪŋ lɪst/", "part": "n.", "translation": "等待名单" },
          { "word": "belonging", "phonetic": "/bɪˈlɒŋɪŋ/", "part": "n.", "translation": "归属感" },
          { "word": "anxiety", "phonetic": "/æŋˈzaɪəti/", "part": "n.", "translation": "焦虑" },
          { "word": "depressed", "phonetic": "/dɪˈprest/", "part": "adj.", "translation": "沮丧的" },
          { "word": "social media", "phonetic": "/ˈsəʊʃəl ˈmiːdiə/", "part": "n.", "translation": "社交媒体" },
          { "word": "support", "phonetic": "/səˈpɔːt/", "part": "n.", "translation": "支持" },
          { "word": "participate", "phonetic": "/pɑːˈtɪsɪpeɪt/", "part": "v.", "translation": "参与" },
          { "word": "resilience", "phonetic": "/rɪˈzɪliəns/", "part": "n.", "translation": "韧性；复原力" }
        ],
        "sentences": [
          {
            "original": "The NHS, he said, was simply 'not fit for purpose'.",
            "analysis": [
              "主干是 The NHS was not fit for purpose，he said 是引语标识。",
              "not fit for purpose 是典型的强烈批评表述，语气简洁有力。",
              "引号中的直述增强了作者的批判情绪与说服力。",
              "这句可用于练习新闻中“引语+定性评价”的结构。"
            ],
            "translation": "他说，NHS 简直就是“不能胜任其职责”。"
          },
          {
            "original": "He also said it was striking that loneliness among young people had increased since 2000.",
            "analysis": [
              "主干是 He said it was striking that ...，that 从句作为说法内容。",
              "loneliness among young people had increased since 2000 是核心事实判断。",
              "striking 强调该现象具有明显性和警示性。",
              "句子适合分析“事实—判断—影响”的新闻写法。"
            ],
            "translation": "他还表示，令人惊讶的是，自 2000 年以来，年轻人的孤独感不断增加。"
          },
          {
            "original": "We need to have opportunities for them to participate, because participating in things... maintains good mental health.",
            "analysis": [
              "We need to have opportunities ... 是直接呼吁，语气明确。",
              "for them to participate 是不定式目的结构，强调主体和行动。",
              "because 引导原因，说明参与活动的心理效益。",
              "maintains good mental health 是方法论层面的结论句。"
            ],
            "translation": "我们需要为他们提供参与的机会，因为参与活动有助于维持良好的心理健康。"
          }
        ]
      },
      {
        "title": "Smart beds and motion sensors - is this the future of dementia care?",
        "source": "BBC",
        "published": "2026-09-20",
        "url": "https://www.bbc.co.uk/news/articles/c3056d456gro",
        "readingTime": "7",
        "topic": "健康 / 老龄与科技",
        "summary": "BBC 报道了一项英国的老年痴呆照护试验：研究团队在一对夫妇的家中安装多种智能传感器，用于监测睡眠、走路姿态、活动和进食规律，从而更早发现健康变化并帮助患者维持独立生活。文章的重点不是简单展示“科技多么炫”，而是说明这种监测如何在医疗与日常生活之间搭桥：医生能更早识别感染、跌倒或例行安排变化，患者和家属也能获得更及时的支持。它同时保留了对隐私、依赖和高成本的现实警惕，体现了科技进入养老领域的复杂性。",
        "reason": [
          "健康、老龄化与科技应用是典型的社会与生活交叉题材。",
          "文章从“技术试验”展开，随后转向“日常生活监测”与“健康预警”，结构自然。",
          "可积累 sensor, monitor, routine, independence, frailty 等医疗和科技词汇。",
          "题目有明显的议题设置，适合讨论科技如何改善公共健康。",
          "写作上可借鉴“实验场景—数据收集—实际效益—局限性”的展开方式。"
        ],
        "vocabulary": [
          { "word": "sensor", "phonetic": "/ˈsensə/", "part": "n.", "translation": "传感器" },
          { "word": "monitor", "phonetic": "/ˈmɒnɪtə/", "part": "v.", "translation": "监测；监控" },
          { "word": "routine", "phonetic": "/ruːˈtiːn/", "part": "n.", "translation": "日常安排；常规" },
          { "word": "independence", "phonetic": "/ˌɪndɪˈpendəns/", "part": "n.", "translation": "独立性" },
          { "word": "frailty", "phonetic": "/ˈfreɪlti/", "part": "n.", "translation": "脆弱；虚弱" },
          { "word": "disturbance", "phonetic": "/dɪˈstɜːbəns/", "part": "n.", "translation": "干扰；失调" },
          { "word": "gait", "phonetic": "/ɡeɪt/", "part": "n.", "translation": "步态" },
          { "word": "infection", "phonetic": "/ɪnˈfekʃən/", "part": "n.", "translation": "感染" },
          { "word": "clinical", "phonetic": "/ˈklɪnɪkəl/", "part": "adj.", "translation": "临床的" },
          { "word": "care needs", "phonetic": "/keə niːdz/", "part": "n.", "translation": "护理需求" }
        ],
        "sentences": [
          {
            "original": "Their house in west London is now fitted with different sensors, which are connected via the internet, that send data back to a dedicated team of doctors, nurses and other clinical specialists.",
            "analysis": [
              "主干是 Their house is now fitted with different sensors ... that send data back ...。",
              "which are connected via the internet 是非限制性修饰成分，强调联网功能。",
              "a dedicated team of doctors, nurses and other clinical specialists 具体化了数据使用者。",
              "整句体现了高科技与日常居住环境结合的写法。"
            ],
            "translation": "他们在伦敦西部的家中现在安装了不同的传感器，这些传感器通过互联网连接，并将数据发送回一支由医生、护士和其他临床专家组成的专门团队。"
          },
          {
            "original": "Door sensors detect if someone leaves in the middle of the night, movement is monitored to check for signs of a fall, while kitchen appliances are fitted with sensors to check whether Jyoti has eaten and is sticking to her daily routine.",
            "analysis": [
              "由多个并列分句组成，信息密度高，适合训练长句拆分。",
              "Door sensors detect ...，movement is monitored ...，while... 是层层展开。",
              "check whether ...and is sticking to her daily routine 说明功能细节。",
              "这类句子很适合分析技术如何嵌入生活动作和护理流程。"
            ],
            "translation": "门传感器可检测有人在半夜离开，运动情况会被监测以查看是否有跌倒迹象，同时厨房电器也会安装传感器，检查 Jyoti 是否进食并保持日常规律。"
          },
          {
            "original": "Alongside this trial, Jyoti is also testing out smart socks and a special watch that also contain sensors to monitor her body temperature and keep track of any long-term changes in her gait - indicating frailty.",
            "analysis": [
              "Alongside this trial 是介词短语，提供背景。",
              "smart socks and a special watch 是具体设备，行为动词 testing out 展现体验性。",
              "that also contain sensors to monitor ... and keep track ... 是定语从句，说明设备功能。",
              "indicating frailty 作为结果式补足，体现技术正在识别身体变化。"
            ],
            "translation": "除了这项试验，Jyoti 还在测试智能袜子和一块特殊手表，这些设备也配备了传感器，用于监测她的体温并跟踪步态的长期变化，以识别虚弱迹象。"
          }
        ]
      },
      {
        "title": "FAA turns to AI to help manage the nation's airspace",
        "source": "NPR",
        "published": "2026-09-21",
        "url": "https://www.npr.org/2026/09/21/nx-s1-5976816/faa-ai-manage-airspace",
        "readingTime": "8",
        "topic": "科技趋势 / 公共治理",
        "summary": "NPR 报道称，美国联邦航空管理局在 2026 年启动了名为 SMART 的新系统，目标是让人工智能辅助航管部门管理全国空域，减少延误、缓解管制员压力并改善效率。文章不仅介绍技术方案，也把它放在美国航空基础设施老化和航管人员短缺的现实背景中：航班延误、设备故障和劳动力不足共同构成复杂系统问题。报道最后强调，AI 被描述为工具而不是替代人工控制员，并提醒它无法单独解决更深层的体系性问题，这使文章兼具技术乐观与现实保守的语气。",
        "reason": [
          "AI 在公共管理中的应用是科技趋势与政策治理的经典交叉点。",
          "文章从“技术升级”切入，再回到基础设施老化和人员短缺，因果链条清晰。",
          "可积累 airspace, congestion, controller, infrastructure, optimize 等公共治理词汇。",
          "题目和内容都适合分析“AI + human oversight”这一成熟论证模式。",
          "写作上可借鉴“新工具—时机背景—现实限制—人类角色”的结构。"
        ],
        "vocabulary": [
          { "word": "airspace", "phonetic": "/ˈeəspeɪs/", "part": "n.", "translation": "空域" },
          { "word": "controller", "phonetic": "/kənˈtrəʊlə/", "part": "n.", "translation": "管制员" },
          { "word": "infrastructure", "phonetic": "/ˈɪnfrəstrʌktʃə/", "part": "n.", "translation": "基础设施" },
          { "word": "congestion", "phonetic": "/kənˈdʒestʃən/", "part": "n.", "translation": "拥堵" },
          { "word": "outage", "phonetic": "/ˈaʊtɪdʒ/", "part": "n.", "translation": "中断；故障" },
          { "word": "optimize", "phonetic": "/ˈɒptɪmaɪz/", "part": "v.", "translation": "优化" },
          { "word": "staffing", "phonetic": "/ˈstæfɪŋ/", "part": "n.", "translation": "人员配置；人手" },
          { "word": "delays", "phonetic": "/dɪˈleɪz/", "part": "n.", "translation": "延误" },
          { "word": "efficiency", "phonetic": "/ɪˈfɪʃənsi/", "part": "n.", "translation": "效率" },
          { "word": "safety", "phonetic": "/ˈseɪfti/", "part": "n.", "translation": "安全" }
        ],
        "sentences": [
          {
            "original": "The federal agency in charge of air traffic control is turning to artificial intelligence to help manage the nation's airspace.",
            "analysis": [
              "主干是 The agency is turning to AI ...，信息直接且概括性强。",
              "in charge of air traffic control 说明机构职责范围。",
              "to help manage the nation's airspace 是目的短语，明确技术用途。",
              "整句适合做标题式引言，迅速呈现问题和方案。"
            ],
            "translation": "负责空中交通管制的联邦机构正在转向人工智能，以帮助管理全国的空域。"
          },
          {
            "original": "The new system is known as Strategic Management of Airspace, Routes and Trajectories, or SMART for short.",
            "analysis": [
              "主干是 The new system is known as ...，后面是同位语解释。",
              "or SMART for short 是正式名称的缩写说明。",
              "这种句式常见于新闻报道，便于读者快速记忆项目名称。",
              "适合练习“正式名称—简称”结构。"
            ],
            "translation": "这套新系统被称为 Strategic Management of Airspace, Routes and Trajectories，简称 SMART。"
          },
          {
            "original": "FAA and DOT leaders emphasize that the new technology is not intended as a replacement for human air traffic controllers.",
            "analysis": [
              "主干是 leaders emphasize that ...，that 从句表达作者的核心判断。",
              "not intended as a replacement for human air traffic controllers 强调人类角色未被替代。",
              "该句非常适合分析“技术增强而非替代”的公共治理论述。",
              "整句兼具技术前瞻和现实限制，适合写作中引出谨慎结论。"
            ],
            "translation": "FAA 和 DOT 负责人强调，新技术并非旨在取代人类空中交通管制员。"
          }
        ]
      }
    ]
  }
};

const issue20260916 = {
  "date": "2026-09-16",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 15 日 GitHub 官方更新，并复核 9 月 16 日仍可用的免费资源；所有价格、额度、账号资格与地区说明均按官方来源写明。",
    "updates": [
      {
        "event": "GitHub Copilot 建议自定义属性定义值（2026-09-15）",
        "summary": "GitHub 官方 changelog 说明，Copilot 现在可在组织或企业级创建自定义属性时建议可选值，帮助管理员更快建立统一的仓库治理元数据，并减少不同仓库字段不一致的问题。",
        "howTo": "在组织或企业级进入 Repository custom property 管理页，创建新的属性定义；Copilot 会基于属性名建议相关的 allowed values，审阅后可一键接受。组织或企业 owner 可在 settings 中控制这一建议功能是否可用。",
        "impact": "学生团队可用这一功能快速为课程仓库和研究项目建立统一标签，例如合规、环境、公开/内部等元数据；仍需人工检查标签是否准确，并保留治理规则与仓库权限的最终审查。",
        "free": "官方说明此功能处于 public preview，且仅面向 GitHub Copilot Business 和 Copilot Enterprise；具体价格、固定免费额度、账号资格和地区例外官方未说明。",
        "category": "AI 编程 / 仓库治理",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-15",
          "url": "https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions"
        }
      },
      {
        "event": "GitHub Advanced Security 配置支持强制执行（2026-09-15）",
        "summary": "GitHub 官方 changelog 宣布，企业管理员现在可以在 security configuration 中强制执行 GitHub Advanced Security 设置，防止组织和仓库管理员覆盖企业级安全策略。",
        "howTo": "登录 GitHub Enterprise 管理页，打开 Security configuration，选择 Enforcement 下拉菜单中的 Don’t enforce / Enforce for repository owners / Enforce for repository and organization owners；验证配置后，让团队在受控仓库中遵循统一策略。",
        "impact": "学生团队和实验室在共享仓库中更容易统一启用代码扫描和安全治理，降低因个人设置不同导致的安全盲区；但这不替代代码审查、依赖检查和人工风险评估。",
        "free": "官方说明这是企业管理能力，且需要相应的 GitHub Advanced Security 配置；统一价格、个人或学生免费额度、地区资格和具体计划门槛官方未说明。",
        "category": "AI 安全 / 企业治理",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-15",
          "url": "https://github.blog/changelog/2026-09-15-enforce-github-advanced-security-configurations"
        }
      },
      {
        "event": "GitHub HTTPS SHA-1 证书支持退出（2026-09-15）",
        "summary": "GitHub 官方 changelog 公告，GitHub 将逐步停用 HTTPS 上的 SHA-1 兼容支持，旨在提升连接与证书安全性，旧客户端或遗留系统需要升级以避免断连。",
        "howTo": "检查本地 Git、浏览器和开发工具是否仍在使用 SHA-1 兼容配置；优先升级到 OpenSSL、Git、浏览器和系统组件的受支持版本，并在 CI/CD、内部服务和脚本中确认证书链与 TLS 配置符合当前要求。",
        "impact": "学生开发者在课程项目、实验室服务器和 GitHub 访问中应尽早更新日志和工具链，避免在旧环境下突然出现 HTTPS 连接失败；也正是一个典型的安全更新，需要在系统升级前备份和测试。",
        "free": "官方公告说明这是安全升级，不涉及新功能门槛；具体地域与版本兼容政策以当前系统与客户端说明为准，官方未统一说明免费额度或学生权益。",
        "category": "安全 / 开发者运维",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-15",
          "url": "https://github.blog/changelog/2026-09-15-sha-1-in-https-on-github-sunset"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适用于日常提问，并在页面中明确写出所有计划都受 rolling five-hour session window 影响，且没有固定消息数。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前会话窗口和使用状态，达到限制后等待重置，不要把网页免费计划与 API 免费额度混为一谈。",
        "impact": "学生可用来整理提纲、概念解释和语言润色，再自行核对事实、引用和计算；长文和高频分析前应先观察当前实际限制。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session 限制；固定消息数、是否需要手机号、地区资格和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的免费层，并说明其可在有限模型与免费输入/输出 token 上使用，开发者可以在 AI Studio 中发起原型实验。",
        "howTo": "登录 Google AI Studio，创建或选择项目，确认当前支持的 Free tier 模型；使用小规模请求测试提示词和 API 原型，并在模型页面查看 RPM、TPM、RPD 等限制。",
        "impact": "学生可用它做摘要、分类、课程演示和功能原型，并记录请求次数和 token 用量；不要把 Free tier 当作长期无限吞吐或生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中切换 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；分享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "访问 Student Developer Pack，完成学生资格验证并启用 Copilot Student；在支持的编辑器中使用补全，并在 GitHub 账户中查看 AI Credits 和 chat/agent 可用情况。",
        "impact": "学生可用补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；所有生成代码仍需本地测试、许可证审核和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
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
      }
    ]
  },
  "english": {
    "intro": "精选 9 月 15 日可免费阅读全文的 BBC 与 NPR 文章，避开全部既有 URL 和标题，覆盖 AI 安全治理与经济不平等；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "OpenAI boss says world 'right to be afraid' but 'should trust' AI firms",
        "source": "BBC",
        "published": "2026-09-15",
        "url": "https://www.bbc.co.uk/news/articles/cqx2zpj4y525o",
        "readingTime": "7",
        "topic": "科技趋势 / 公共治理",
        "summary": "BBC 报道了 OpenAI CEO Sam Altman 在旧金山会议上的发言：他承认公众对 AI 的恐惧是合理的，因为模型能力增长很快，且“它不需要太多想象力”就能想到失控可能性；但他同时认为世界应相信 AI 公司会做正确的事，因为安全责任和工程规范应当属于行业自我约束。文章随后把焦点放回 AI 监管：在美国缺乏明确规则的情况下，Altman 和英伟达 CEO 黄仁勋都主张让行业自己拿出安全标准，而不是依赖外部立法。整篇材料自然体现了“理性恐惧—行业自证—监管争议”的逻辑，适合写作与议论文的抽象表达练习。",
        "reason": [
          "AI 安全、技术治理及行业自律是科技趋势与公共政策的复合型考点。",
          "文章围绕“害怕是否合理—企业自我约束—监管是否必要”展开，论证链清晰。",
          "可积累 trust, alignment, capabilities, regulation, scrutiny 等具抽象内容的词汇。",
          "题目可考作者如何平衡风险认知与企业立场，判断文章对创新速度与安全边界的处理。",
          "写作可借鉴“先承认风险，再提出行业自证、最后引出监管争议”的结构。"
        ],
        "vocabulary": [
          { "word": "regulation", "phonetic": "/ˌreɡjʊˈleɪʃən/", "part": "n.", "translation": "监管；规则" },
          { "word": "scrutiny", "phonetic": "/ˈskruːtəni/", "part": "n.", "translation": "审查；密切关注" },
          { "word": "capability", "phonetic": "/ˌkeɪpəˈbɪləti/", "part": "n.", "translation": "能力；性能" },
          { "word": "alignment", "phonetic": "/əˈlaɪnmənt/", "part": "n.", "translation": "一致性；对齐" },
          { "word": "governance", "phonetic": "/ˈɡʌvənəns/", "part": "n.", "translation": "治理；管理" },
          { "word": "innovation", "phonetic": "/ˌɪnəˈveɪʃən/", "part": "n.", "translation": "创新" },
          { "word": "prompt", "phonetic": "/prɒmpt/", "part": "n./v.", "translation": "提示；促使" },
          { "word": "self-regulate", "phonetic": "/ˌself ˈreɡjʊleɪt/", "part": "v.", "translation": "自我监管" },
          { "word": "hype", "phonetic": "/haɪp/", "part": "n.", "translation": "炒作；夸大宣传" },
          { "word": "vulnerable", "phonetic": "/ˈvʌlnərəbəl/", "part": "adj.", "translation": "易受攻击的；脆弱的" }
        ],
        "sentences": [
          {
            "original": "The world should trust that we are going to do the right thing because it's the right thing and we feel the magnitude of this.",
            "analysis": [
              "主干是 the world should trust that ...，that 引导宾语从句承接 trust 内容。",
              "because it's the right thing and we feel the magnitude of this 形成两个并列原因，增强说服力。",
              "the magnitude of this 是抽象名词短语，强调 AI 风险的重大程度。",
              "该句既有信任表达，又有行业责任的价值判断，适合析出作者的立场。"
            ],
            "translation": "世界应相信，我们会因为这是正确的事而做正确的事，因为我们也清楚这一问题的严重程度。"
          },
          {
            "original": "It doesn't take as much imagination as it used to for us to imagine how this could go wrong.",
            "analysis": [
              "This is a comparative structure with as much imagination as it used to，体现技术风险的直观化。",
              "for us to imagine how this could go wrong 是带有不定式的真实主语结构。",
              "go wrong 是简洁的动词短语，突出潜在失控。",
              "整句强调风险不再只是抽象推测，而是现实可想象。"
            ],
            "translation": "我们不需要像过去那样发挥太多想象力，就能想象这会如何失控。"
          },
          {
            "original": "I think the world is right to be afraid of this.",
            "analysis": [
              "主干是 I think the world is right to be afraid of this，I think 标记作者直接表态。",
              "be afraid of this 是抽象名词的情绪表达，形成核心结论。",
              "right to be afraid 强调公众的恐惧并非无根据。",
              "句子可用于分析作者如何在让步中保留对风险的合理承认。"
            ],
            "translation": "我认为世界对这一问题抱有恐惧是合理的。"
          }
        ]
      },
      {
        "title": "Family income rose and poverty fell in 2025 — but safety net cuts could erase gains",
        "source": "NPR",
        "published": "2026-09-15",
        "url": "https://www.npr.org/2026/09/15/nx-s1-5968648/census-poverty-income-health-insurance-report",
        "readingTime": "8",
        "topic": "经济 / 社会政策",
        "summary": "NPR 文章依据美国人口普查局报告指出，2025 年平均家庭收入有所上升，贫困率略降，医保覆盖率基本稳定；但这并不意味着经济改善足以维持，因为高通胀、战争带来的成本压力仍在，且社会安全网裁减可能很快吞掉这些收益。文章把“家庭收入改善”与“社会福利削减”放在同一叙事中，强调个体生活状况与公共政策之间强相关。它的结论不是经济已经稳定，而是改善在很大程度上依赖政府支出和保障机制，任何削减都可能使短期进步消失。",
        "reason": [
          "经济增长、贫困变化和社会保障的关系是典型的社会经济议题。",
          "文章以新数据开头，再转入“收益可能被安全网削减抵消”的反论证，结构严谨。",
          "可积累 poverty rate、safety net、inflation、purchasing power 等高频经济词汇。",
          "题目可考数据变化与政策风险的并列关系，以及为什么作者用 gains 和 erase 来形成反衬。",
          "写作上可借鉴“先说事实，再指出风险，再提政策后果”的层次结构。"
        ],
        "vocabulary": [
          { "word": "poverty", "phonetic": "/ˈpɒvəti/", "part": "n.", "translation": "贫困" },
          { "word": "inflation", "phonetic": "/ɪnˈfleɪʃən/", "part": "n.", "translation": "通货膨胀" },
          { "word": "safety net", "phonetic": "/ˈseɪfti net/", "part": "n.", "translation": "安全网" },
          { "word": "purchasing power", "phonetic": "/ˈpɜːtʃəsɪŋ ˈpaʊə/", "part": "n.", "translation": "购买力" },
          { "word": "subsidy", "phonetic": "/ˈsʌbsɪdi/", "part": "n.", "translation": "补贴；津贴" },
          { "word": "coverage", "phonetic": "/ˈkʌvərɪdʒ/", "part": "n.", "translation": "覆盖范围；保险覆盖" },
          { "word": "erode", "phonetic": "/ɪˈrəʊd/", "part": "v.", "translation": "侵蚀；削弱" },
          { "word": "median", "phonetic": "/ˈmiːdiən/", "part": "adj.", "translation": "中位数的" },
          { "word": "household", "phonetic": "/ˈhaʊshəʊld/", "part": "n.", "translation": "家庭；住户" },
          { "word": "snapshot", "phonetic": "/ˈsnæpʃɒt/", "part": "n.", "translation": "快照；简要概况" }
        ],
        "sentences": [
          {
            "original": "The average American family made more money last year than in 2024, while the number of people living in poverty fell slightly.",
            "analysis": [
              "主干是 the average American family made more money ... while the number ... fell slightly，形成对比并列。",
              "while 连接两个并列事实，突出“收入上升—贫困下降”共存。",
              "slightly 修饰 fell，表示改善幅度有限。",
              "该句适合统计事实型写作中的数据起步表达。"
            ],
            "translation": "去年，美国平均家庭收入比 2024 年更高，同时生活在贫困中的人数略有下降。"
          },
          {
            "original": "In 2025, by contrast, families saw real improvements in their purchasing power.",
            "analysis": [
              "by contrast 强调前后比较，转入不同维度的变化。",
              "saw real improvements 是记叙简洁且具动感的表述。",
              "purchasing power 是经济学高频词，说明收入增长的实际意义。",
              "整句适合作为“名义增长转为实际改善”的转折点。"
            ],
            "translation": "相比之下，2025 年家庭在购买力方面确实有了实质改善。"
          },
          {
            "original": "Analysts say those gains could be eroded by cuts to the social safety net.",
            "analysis": [
              "Analysts say 是新闻报道中典型的引述结构。",
              "those gains 指代前文收入和贫困改善的成果。",
              "could be eroded 采用被动语态，突出政策变化可能造成的损耗。",
              "safety net 是核心概念，强调福利制度在维持收益中的作用。"
            ],
            "translation": "分析人士表示，这些收益可能会被削减社会安全网的政策侵蚀。"
          }
        ]
      }
    ]
  }
};

const issue20260914 = {
  "date": "2026-09-14",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 10 日官方产品更新，并把可用范围、价格和配额按来源明确区分；免费资源均附官方入口。",
    "updates": [
      {
        "event": "Gemini app 发布 Windows 桌面版（2026-09-10）",
        "summary": "Google 官方公告称 Gemini app 现已登陆 Windows，可用 Alt + Space 快捷键呼出，并在独立工作区调用 Gemini Spark、Google 应用信息以及 Nano Banana 和 Gemini Omni 的图像/视频能力。",
        "howTo": "在 Windows 10 或 11 电脑打开官方桌面下载入口，安装 Gemini app；按 Alt + Space 呼出，在工作区选择所需功能，再检查生成内容和 Google 应用权限。",
        "impact": "学生可在写作、做演示或查资料时不离开当前窗口，快速改标题、整理项目摘要或制作视觉素材；重要事实和引用仍需回到原始资料核对。",
        "free": "官方说明 Windows 10/11 全球可用并提供下载入口；公告未说明账号资格、价格、地区例外、图像/视频配额或各模型的免费额度。",
        "category": "AI 助手 / 桌面应用",
        "source": {
          "name": "Google 官方博客",
          "published": "2026-09-10",
          "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-windows/"
        }
      },
      {
        "event": "OpenAI 发布 Agents API（2026-09-10）",
        "summary": "OpenAI 官方文档将 Agents API 定义为由 OpenAI 管理 Codex harness 的托管运行方式，适合长时间任务，并提供自动上下文压缩、多 agent 编排、程序化工具调用和 MCP 服务器支持。",
        "howTo": "阅读 OpenAI Agents API 快速入门，选择托管 Agents API、由应用控制的 Agents SDK 或 Responses API；先在小型、可审计任务中配置工具和审批，再记录会话状态与用量。",
        "impact": "有编程基础的学生可把资料整理、代码检查等多步骤任务拆成可复用 agent 流程；涉及文件、网络或外部系统时应限制工具权限并保留人工确认。",
        "free": "官方文档说明运行环境和能力，但未说明 Agents API 的统一价格、免费额度、账号资格、地区范围或具体模型配额。",
        "category": "AI agent / 开发者 API",
        "source": {
          "name": "OpenAI 官方公告",
          "published": "2026-09-10",
          "url": "https://openai.com/index/introducing-the-agents-api/"
        }
      },
      {
        "event": "GitHub Copilot 周更新加入 Jira、HydraFusion 与 VS Code Agent 自动化（2026-09-10）",
        "summary": "GitHub 官方周更新称 Copilot app 可把 Jira issue 带入共享画布，Copilot CLI 的 Project HydraFusion 进入 experimental，可在本地、云端和 compound models 间进行语义路由；VS Code 还预览了定时 agent 任务和实验性语音模式。",
        "howTo": "更新 Copilot app，在画布中连接 Jira issue；在 Copilot CLI 的模型选择器中启用 /experimental 的 HydraFusion；在 VS Code 1.137 中打开 Agents 窗口，按需试用定时任务并审阅每次改动。",
        "impact": "学生团队可把 issue、调查、实现和 PR 准备串起来，也可为重复性检查设置定时任务；实验性功能不应直接接触未备份的课程仓库或敏感数据。",
        "free": "官方更新列出功能入口和 public preview/experimental 状态，但未说明统一价格、免费额度、账号资格、地区范围或 HydraFusion 的具体模型配额。",
        "category": "AI 编程 / agent 工作流",
        "source": {
          "name": "GitHub 官方更新日志",
          "published": "2026-09-10",
          "url": "https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页列出 Free 计划用于日常问题，并说明所有计划都受滚动五小时会话窗口的使用限制影响。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划进行问答；在 Settings > Usage 查看实际使用情况，达到限制后等待窗口重置。",
        "impact": "学生可用它做提纲、语言改写和概念解释的初稿，再自行核对事实、引用和计算；不要把网页免费计划当作 API 免费额度。",
        "free": "官方确认 Free 计划和滚动五小时限制；固定消息数、地区资格、是否需要手机号及 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Gemini API Free tier 与 Google AI Studio",
        "summary": "Google Gemini API 官方定价页列出部分模型的 Free tier，并提供免费输入/输出 token 和 AI Studio 开发入口；实际可用模型和限流需以当前页面为准。",
        "howTo": "登录 Google AI Studio，选择当前 Free tier 模型测试提示词或 API 原型；开始实验前查看该模型的 RPM、TPM、RPD 和数据使用说明。",
        "impact": "学生可先做摘要、分类和课程 API 原型，记录请求量和 token 用量，避免把免费层误当作无限吞吐。",
        "free": "官方确认存在免费层；统一固定额度、账号资格、地区清单和重置周期官方未说明，限流数值按模型和项目页面为准。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适用于机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中尝试 GPU 或 TPU，并把 notebook 保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可以直接运行课程代码、清洗数据和做小型模型实验，减少环境配置时间；分享前删除密钥、个人数据和不必要的输出。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Copilot Student 学生权益",
        "summary": "GitHub Education Student Developer Pack 说明 verified students 可使用 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "打开 Student Developer Pack，完成学生资格验证并开通 Copilot Student；在编辑器使用补全，在 GitHub 账户中查看 AI Credits 与 chat/agent 的当前可用情况。",
        "impact": "学生可用补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；生成代码仍需测试、许可证审查和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，chat 和 agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
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
    "intro": "选取 9 月 13 日可直接阅读的 The Guardian 文章，避开既有 URL 和标题，覆盖 AI 的社会治理与经济结构；按考研英语二方向精读。",
    "articles": [
      {
        "title": "‘Too little, too late’: critics perplexed and suspicious of AI leaders’ call for a slowdown",
        "source": "The Guardian",
        "published": "2026-09-13",
        "url": "https://www.theguardian.com/technology/2026/sep/13/too-little-too-late-critics-perplexed-and-suspicious-of-ai-leaders-call-for-a-slowdown",
        "readingTime": "9",
        "topic": "科技趋势 / 公共政策",
        "summary": "文章从一周内 AI 舆论的急转写起：先是前沿模型被当作生活工具推广，随后研究者对失控风险的警告、Anthropic 对模型滥用的披露和政治人物要求刹车，使公众情绪迅速转向。报道接着概括 Anthropic CEO 提出的三点方案：让第三方持续评估、建立共同安全标准并限制无约束的进展速度、让民主国家与中国等国家协调危险用途。文章随后呈现 Russell 等专家对“先放慢再补安全”的反驳，以及政府、产业和独立研究者对方案动机与执行性的怀疑，结尾强调“减速”只有在安全要求、监管独立性和国际协调都更具体时才有说服力。",
        "reason": [
          "AI 治理、风险沟通和国际协调属于科技趋势与公共政策的复合型考点。",
          "文章按舆论转向—三点方案—反对意见—执行难题推进，适合画论证链。",
          "可积累 existential threat、precautionary、compliance、moratorium 等抽象词。",
          "题目可考三点方案对应关系、引语的立场功能以及作者为何使用 sceptics。",
          "写作可借鉴“提出方案后必须说明独立监督、执行条件和反方质疑”的结构。"
        ],
        "vocabulary": [
          { "word": "existential threat", "phonetic": "/ˌeɡzɪˈstenʃəl θret/", "part": "n.", "translation": "生存性威胁" },
          { "word": "whistleblower", "phonetic": "/ˈwɪsəlbləʊə/", "part": "n.", "translation": "吹哨人；举报者" },
          { "word": "precautionary", "phonetic": "/prɪˈkɔːʃənəri/", "part": "adj.", "translation": "预防性的" },
          { "word": "compliance", "phonetic": "/kəmˈplaɪəns/", "part": "n.", "translation": "遵守；合规" },
          { "word": "frontier", "phonetic": "/ˈfrʌntɪə/", "part": "adj./n.", "translation": "前沿的；前沿" },
          { "word": "moratorium", "phonetic": "/ˌmɒrəˈtɔːriəm/", "part": "n.", "translation": "暂停；暂缓令" },
          { "word": "misaligned", "phonetic": "/ˌmɪsəˈlaɪnd/", "part": "adj.", "translation": "与目标不一致的" },
          { "word": "coordinate", "phonetic": "/kəʊˈɔːdɪneɪt/", "part": "v.", "translation": "协调" }
        ],
        "sentences": [
          {
            "original": "The safety debate should come with a health warning.",
            "analysis": [
              "主干是 the debate should come with a warning，情态动词表达建议。",
              "safety debate 是名词短语，讨论对象被压缩为定语 safety。",
              "come with 在此表示“伴随”，不是字面上的到来。",
              "health warning 是隐喻，提示后文会出现意外副作用或风险。"
            ],
            "translation": "这场安全争论应该附带一则健康警告。"
          },
          {
            "original": "In signs that a coordinated slowdown might not be just talk, some ideas quickly attracted backing.",
            "analysis": [
              "句首 In signs that... 是介词短语，提供判断依据。",
              "that 从句修饰 signs，说明“迹象”的具体内容。",
              "might not be just talk 使用情态动词保留不确定性。",
              "主句 some ideas attracted backing，把政策观点拟人化并突出支持扩大。"
            ],
            "translation": "有迹象表明，协调减速可能不只是口头说说，一些想法很快获得了支持。"
          },
          {
            "original": "We set the safety requirements and further progress occurs only when they are met.",
            "analysis": [
              "and 连接两个并列分句，形成先定标准、后许进展的逻辑。",
              "only when 引导条件从句，only 将条件限制到必要程度。",
              "they 指代前面的 safety requirements，避免重复。",
              "被动结构 are met 突出标准是否达成，而非谁达成标准。"
            ],
            "translation": "我们先设定安全要求，只有满足这些要求后才继续推进。"
          }
        ]
      },
      {
        "title": "AI will transform capitalism – but how?",
        "source": "The Guardian",
        "published": "2026-09-13",
        "url": "https://www.theguardian.com/technology/2026/sep/13/ai-will-transform-capitalism-but-how",
        "readingTime": "10",
        "topic": "经济 / 科技趋势",
        "summary": "文章以 Aristotle 和 Marx 对自动化的想象开篇，把当代 AI 放入更长的思想史。作者随后比较美国“集中算力、通过网络提供服务”的路径与中国开放模型、允许本地运行的反制路径，认为两者都可能服务于新的全球支配竞争。论证核心转向劳动和资本：语言模型正在承担知识工作，既可能消灭任务和岗位，也可能冲击企业家、创新者和利润之间的联系。结尾不把 AI 自动等同于阶级平等，而是提出公共服务与收入、合作和非营利组织，以及面向公共需要、节省能源的 AI 作为可能的制度选择。",
        "reason": [
          "自动化、劳动结构和技术政策是经济与科技趋势类常见考研主题。",
          "文章采用思想史引入—中美路径比较—就业与资本冲击—规范性方案的递进结构。",
          "可积累 inaugurate、general-purpose technology、exploitative、co-operative 等高频抽象表达。",
          "题目可考作者为何引用 Marx、两种 AI 路径差异以及结尾方案的性质。",
          "写作可借鉴先区分事实判断与价值判断，再提出制度回应的论证方式。"
        ],
        "vocabulary": [
          { "word": "inaugurate", "phonetic": "/ɪˈnɔːɡjureɪt/", "part": "v.", "translation": "开创；开启" },
          { "word": "classless", "phonetic": "/ˈklɑːsləs/", "part": "adj.", "translation": "无阶级的" },
          { "word": "general-purpose technology", "phonetic": "/ˌdʒenərəl ˈpɜːpəs tekˈnɒlədʒi/", "part": "n.", "translation": "通用技术" },
          { "word": "supremacy", "phonetic": "/suːˈpreməsi/", "part": "n.", "translation": "至高地位；霸权" },
          { "word": "monopoly", "phonetic": "/məˈnɒpəli/", "part": "n.", "translation": "垄断" },
          { "word": "entrepreneur", "phonetic": "/ˌɒntrəprəˈnɜː/", "part": "n.", "translation": "企业家" },
          { "word": "emulate", "phonetic": "/ˈemjuleɪt/", "part": "v.", "translation": "仿效；模拟" },
          { "word": "co-operative", "phonetic": "/kəʊˈɒpərətɪv/", "part": "adj.", "translation": "合作的" }
        ],
        "sentences": [
          {
            "original": "The dream that automation could inaugurate a classless society is also present in Marx.",
            "analysis": [
              "主干是 the dream is present in Marx，that 从句同位说明 dream 内容。",
              "could inaugurate 表示可能性，语气不是断言。",
              "a classless society 是不定式宾语，说明自动化被赋予的结果。",
              "also 把 Marx 与前文 Aristotle 并列，构成思想史证据链。"
            ],
            "translation": "自动化能够开启无阶级社会的梦想，在马克思的思想中也存在。"
          },
          {
            "original": "Few can say with confidence that the jobs destroyed will be replaced.",
            "analysis": [
              "主干是 Few can say，with confidence 是方式状语。",
              "that 从句作 say 的宾语，表达对未来的不确定判断。",
              "the jobs destroyed 中过去分词短语后置修饰 jobs。",
              "will be replaced 是一般将来时被动，焦点在岗位是否被替代。"
            ],
            "translation": "几乎没有人能有把握地说，被消灭的工作会得到替代。"
          },
          {
            "original": "So the rational question is not how Britain builds a sovereign AI.",
            "analysis": [
              "So 引出由前文推导出的结论，体现因果推进。",
              "主干是 the question is not...，not 否定一个问题框架。",
              "how Britain builds... 是表语从句，说明被否定的具体问题。",
              "sovereign AI 是名词短语，体现国家自主技术的政策语境。"
            ],
            "translation": "因此，真正理性的问题不是英国如何打造自主 AI。"
          }
        ]
      }
    ]
  }
};

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

const issue20260911 = {
  "date": "2026-09-11",
  "status": "ready",
  "ai": {
    "intro": "本期收录 9 月 9—10 日可直接核验的官方产品更新，并把未公开的免费条件明确标为官方未说明。",
    "updates": [
      {
        "event": "Anthropic 发布 2026 年 9 月威胁情报报告（2026-09-10）",
        "summary": "Anthropic 报告称，其团队在过去六个月识别并干扰了多起使用 Claude 的网络行动；报告重点记录了 AI 从聊天助手走向编排侦察、利用和数据外传流程的变化。",
        "howTo": "打开 Anthropic 威胁情报报告阅读案例和防御建议；学生做安全实验时只在授权靶场中复现防御流程，先配置最小权限、日志和人工审批，不把真实凭据交给模型。",
        "impact": "网络安全课程可用报告中的 kill chain、AI orchestration 和 detection evasion 作为威胁建模素材，练习把攻击步骤映射到检测点和响应措施。",
        "free": "报告网页可直接阅读；官方未说明 Claude 相关功能的统一免费额度、账号资格、地区范围或 API 配额。",
        "category": "AI 安全与威胁情报",
        "source": {
          "name": "Anthropic 官方威胁情报报告",
          "published": "2026-09-10",
          "url": "https://www.anthropic.com/threat-intelligence-report-september-2026"
        }
      },
      {
        "event": "GitHub Copilot 推出 Pull Request API 的 AI Scan 公共预览（2026-09-10）",
        "summary": "GitHub Changelog 公告 AI Scan for pull request APIs 进入 public preview，使开发者可以通过 Pull Request API 使用相关扫描能力。",
        "howTo": "打开 GitHub Changelog 公告，确认组织和仓库是否满足预览条件；在测试仓库按公告链接的 API 文档配置请求，再检查扫描结果并由人工决定是否合并。",
        "impact": "学生团队可以把代码安全检查接入课程项目的 Pull Request 流程，在合并前发现潜在问题；预览功能不应替代测试、代码审查或依赖审计。",
        "free": "公告未说明统一免费额度、计划资格、地区覆盖和调用配额；public preview 的具体可用性以 GitHub 账户和组织设置为准。",
        "category": "Copilot / 代码安全",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-10",
          "url": "https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/"
        }
      },
      {
        "event": "GitHub Actions 可用 cache-mode 控制缓存访问（2026-09-10）",
        "summary": "GitHub Changelog 公告新增 cache-mode，用于控制 GitHub Actions 缓存访问方式，帮助工作流作者更细致地管理缓存权限边界。",
        "howTo": "在测试仓库打开公告并按文档更新 Actions 配置；先用最小权限验证读取和写入行为，再检查 fork、pull request 与受保护分支场景的缓存可见性。",
        "impact": "学生可在 CI 作业中减少缓存误用风险，理解构建缓存、权限和供应链安全的关系；修改工作流后应检查日志并保留回滚版本。",
        "free": "公告未说明独立收费、统一免费额度、地区范围或账户资格；能否使用取决于 GitHub Actions 和仓库策略。",
        "category": "开发者工具 / CI 安全",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-10",
          "url": "https://github.blog/changelog/2026-09-10-control-github-actions-cache-access-with-cache-mode/"
        }
      }
    ],
    "deals": [
      {
        "event": "Google Gemini API 免费层与 Google AI Studio",
        "summary": "Google Gemini API 定价页列出免费层模型和免费输入、输出 token，Google AI Studio 可用于原型测试。",
        "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层模型测试提示词；做 API 实验前查看同一官方定价页的当前模型限制。",
        "impact": "学生可以先做文本处理和课程项目原型，再决定是否需要付费生产配置。",
        "free": "官方确认有免费层和 AI Studio；固定额度、重置周期、地区与账号资格官方未说明。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价页",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab FAQ 说明它是无需本地设置的托管 Jupyter Notebook 服务，并免费提供包括 GPU 和 TPU 在内的计算资源。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python 单元格；需要加速时在运行时设置中尝试 GPU 或 TPU，并保存 notebook。",
        "impact": "学生可直接运行课程代码、分析数据和训练小型模型，减少本地环境配置。",
        "free": "官方确认免费，但资源不保证且不无限；固定额度、地区和统一重置周期官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 提供面向已验证学生的 Student Developer Pack，汇集开发工具和学习资源。",
        "howTo": "进入 Student Developer Pack，完成学生资格验证，按页面提示开启可用权益，并在作业仓库中遵守各工具条款。",
        "impact": "学生可把开发、协作和学习工具用于课程项目，降低软件成本。",
        "free": "官方说明面向 verified students；当前具体权益、统一额度、地区例外和有效期以页面为准，官方未说明统一标准。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Qwen3-Next-80B-A3B-Instruct 开放权重模型",
        "summary": "Qwen 官方模型卡提供该模型的公开下载入口，并说明其 80B 总参数、3B 激活参数和 262,144 token 原生上下文长度。",
        "howTo": "打开 Qwen 官方 Hugging Face 模型卡，按说明使用 Transformers、vLLM 或其他列出的运行环境；先用短输入测试显存和速度。",
        "impact": "有 GPU 或云端 notebook 的学生可以研究 MoE、长上下文和本地推理，而不必先购买 API。",
        "free": "模型权重可公开下载；本地算力、存储和网络成本由使用者承担，免费 API 配额、账号资格和地区范围官方未说明。",
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
    "intro": "本期选取 9 月 10 日 BBC 免费可读材料，覆盖科技产品与人工智能风险；每篇提供考研英语二式结构、词汇和短句精读。",
    "articles": [
      {
        "title": "Apple foldable iPhone: New boss starts with gamble on £1,999 device",
        "source": "BBC",
        "published": "2026-09-10",
        "url": "https://www.bbc.com/news/articles/clyjd1jnd03o",
        "readingTime": "7",
        "topic": "科技趋势 / 消费电子",
        "summary": "文章以苹果折叠屏 iPhone 的高价上市为切入口，先交代新任 CEO 上任后的产品选择，再分析折叠屏的设计、价格和市场定位。报道把苹果的品牌溢价放入竞争格局中，特别指出中国市场已有成熟竞争者，随后用行业分析人士的判断说明这款产品既是技术展示，也是对消费者支付意愿的测试。结尾回到管理层面：新 CEO 需要在创新、成本和销量之间取得平衡。",
        "reason": [
          "消费电子和企业战略是考研英语常见的商业科技交叉主题。",
          "文章采用“产品发布—市场竞争—管理挑战”的递进结构。",
          "适合练习识别价格、引语、转折和因果关系。",
          "词汇覆盖 gamble、established、competitor、foldable 等新闻与商业表达。",
          "可积累评价新产品和分析企业决策的写作框架。"
        ],
        "vocabulary": [
          { "word": "foldable", "phonetic": "/ˈfəʊldəbl/", "part": "adj.", "translation": "可折叠的" },
          { "word": "gamble", "phonetic": "/ˈɡæmbl/", "part": "n./v.", "translation": "冒险的尝试；冒险" },
          { "word": "established", "phonetic": "/ɪˈstæblɪʃt/", "part": "adj.", "translation": "成熟的；已确立的" },
          { "word": "competitor", "phonetic": "/kəmˈpetɪtə/", "part": "n.", "translation": "竞争者" },
          { "word": "premium", "phonetic": "/ˈpriːmiəm/", "part": "adj./n.", "translation": "高端的；溢价" },
          { "word": "position", "phonetic": "/pəˈzɪʃən/", "part": "v./n.", "translation": "定位；位置" },
          { "word": "consumer", "phonetic": "/kənˈsjuːmə/", "part": "n.", "translation": "消费者" },
          { "word": "rival", "phonetic": "/ˈraɪvəl/", "part": "n./adj.", "translation": "竞争对手；竞争的" }
        ],
        "sentences": [
          {
            "original": "Apple's new boss has started with a gamble on a £1,999 foldable iPhone.",
            "analysis": [
              "主干是 Apple's new boss has started with a gamble。",
              "on a ... iPhone 介词短语说明 gamble 的具体内容。",
              "£1,999 和 foldable 共同修饰产品，形成价格与特征信息。",
              "with a gamble 是新闻中用抽象名词概括决策的表达。"
            ],
            "translation": "苹果新任负责人以押注一款售价 1999 英镑的折叠屏 iPhone 开始任期。"
          },
          {
            "original": "But the product is facing established competitors.",
            "analysis": [
              "But 标记转折，把产品亮相转向市场压力。",
              "主干是 the product is facing competitors。",
              "established 作前置定语，强调竞争者已有市场基础。",
              "现在进行时 facing 表示当前持续存在的竞争处境。"
            ],
            "translation": "但这款产品正面临成熟的竞争对手。"
          },
          {
            "original": "The real fight is China, where Huawei owns nearly 80% of foldables.",
            "analysis": [
              "主句 The real fight is China 用系动词突出关键市场。",
              "where 引导非限制性定语从句，补充中国市场的情况。",
              "owns nearly 80% of foldables 是数据化的竞争证据。",
              "整句由判断转入事实，体现新闻论证的推进。"
            ],
            "translation": "真正的竞争在中国；在这个市场，华为拥有折叠屏手机近八成的份额。"
          }
        ]
      },
      {
        "title": "Why some experts increasingly fear AI will take over",
        "source": "BBC",
        "published": "2026-09-10",
        "url": "https://www.bbc.com/news/articles/c74edv9887eo",
        "readingTime": "8",
        "topic": "科技趋势 / AI 风险",
        "summary": "文章围绕部分 AI 专家对未来失控风险的担忧展开，先用研究者的警告提出问题，再解释为什么具备联网能力、凭据和自主行动空间的系统可能产生难以预料的后果。报道同时呈现不同程度的判断：有人强调风险正在上升，也有人认为应把极端预测与可验证证据区分开。文章的结论不是给出确定时间表，而是呼吁在能力提升的同时加强评估、限制权限和持续监督。",
        "reason": [
          "AI 风险与技术治理是科技趋势类阅读的高频议题。",
          "文章通过专家观点和反问推进，适合训练观点辨析。",
          "可练习区分事实、预测、条件和作者保留态度。",
          "词汇涉及 increasingly、eventually、experiment、consequence 等抽象表达。",
          "适合积累“提出风险—呈现分歧—给出治理方向”的议论文结构。"
        ],
        "vocabulary": [
          { "word": "increasingly", "phonetic": "/ɪnˈkriːsɪŋli/", "part": "adv.", "translation": "越来越多地" },
          { "word": "take over", "phonetic": "/teɪk ˈəʊvə/", "part": "phr.v.", "translation": "接管；控制" },
          { "word": "eventually", "phonetic": "/ɪˈventʃuəli/", "part": "adv.", "translation": "最终" },
          { "word": "rattle", "phonetic": "/ˈrætl/", "part": "v.", "translation": "碰撞作响；试探" },
          { "word": "credential", "phonetic": "/krəˈdenʃəl/", "part": "n.", "translation": "凭据；资格证明" },
          { "word": "experiment", "phonetic": "/ɪkˈsperɪment/", "part": "v./n.", "translation": "实验；试验" },
          { "word": "explore", "phonetic": "/ɪkˈsplɔː/", "part": "v.", "translation": "探索" },
          { "word": "consequence", "phonetic": "/ˈkɒnsɪkwəns/", "part": "n.", "translation": "后果" }
        ],
        "sentences": [
          {
            "original": "Why some experts increasingly fear AI will take over.",
            "analysis": [
              "Why 引出解释性标题，省略完整主句但保留核心问题。",
              "some experts 是主语，increasingly 修饰 fear，表示担忧增强。",
              "AI will take over 是 fear 的宾语从句，说明担忧内容。",
              "标题结构适合改写为议论文的设问开头。"
            ],
            "translation": "为什么一些专家越来越担心人工智能会接管一切。"
          },
          {
            "original": "You give them a computer, an internet connection, a pile of credentials, and a challenge, then leave the room.",
            "analysis": [
              "You give... then leave... 构成先后动作链。",
              "四个并列宾语具体化了系统获得的资源和任务。",
              "a pile of credentials 使用量词短语强调权限数量。",
              "then 标出条件设置后的结果行动，增强口语化警示效果。"
            ],
            "translation": "你给它们一台电脑、网络连接、一堆凭据和一个挑战，然后离开房间。"
          },
          {
            "original": "Eventually they're going to start rattling doorknobs.",
            "analysis": [
              "Eventually 是句首时间副词，提示可能的最终发展。",
              "be going to 表示基于当前条件的预期，而非确定事实。",
              "start rattling doorknobs 用具体动作比喻试探权限边界。",
              "该句以短句呈现风险推演，适合分析隐喻和语气。"
            ],
            "translation": "最终，它们会开始试探一扇扇门把手。"
          }
        ]
      }
    ]
  }
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

const issue20260913 = {
  "date": "2026-09-13",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 10—11 日的官方 AI 更新，并复核今天仍可使用的免费资源；价格、额度、地区和资格未被官方明确的地方均标为官方未说明。",
    "updates": [
      {
        "event": "GitHub Copilot 使用指标新增 VS Code Agents 数据（2026-09-11）",
        "summary": "GitHub 宣布 Copilot usage metrics 现已一般可用地纳入 VS Code Agents 窗口的数据：企业和组织报告可查看每日活跃用户、会话数与用户消息数，用户级报告可查看是否使用该窗口及其会话统计。",
        "howTo": "在启用 Copilot usage metrics policy 的组织或企业中，由 enterprise owner、billing manager、organization owner 或具备 View Copilot Metrics 权限的角色调用 usage metrics 报告；区分 VS Code Agents 窗口与 editor Agent Mode 的数据。",
        "impact": "课程团队可比较 agent 窗口的采用率和活跃度，决定培训或代码审查资源投放；学生个人不能把组织统计当作代码质量证明，仍需检查生成结果。",
        "free": "官方说明该能力面向具备相应组织或企业权限的 Copilot 管理场景；个人计划价格、免费额度、地区和报告保留期官方未说明。",
        "category": "AI 编程 / 使用分析",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-11",
          "url": "https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics"
        }
      },
      {
        "event": "Copilot Code Review 自动解决已处理评论并加深 Lite 分析（2026-09-11）",
        "summary": "GitHub 更新 Copilot code review：后续提交解决原评论后，评论可在重新审查时自动标记为已解决；应用修复建议时会生成更具体的提交信息，Lite effort level 还使用多 agent ensemble 和更多 shell 工具验证代码。",
        "howTo": "让 Copilot review 分支后推送修复提交，重新审查时检查已自动解决和仍开放的评论；应用建议前审阅 diff 与智能提交信息，并在自己的环境运行测试。",
        "impact": "学生做课程项目时可减少手动关闭过时评论的整理工作，把注意力放在仍未解决的反馈上；更深的 agent 验证不能替代本地测试、人工审查和依赖安全检查。",
        "free": "官方公告未说明该更新的独立价格、免费额度、账号资格或地区限制；Copilot code review 的可用性和消耗应以账户当前计划为准。",
        "category": "AI 编程 / 代码审查",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-11",
          "url": "https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review"
        }
      },
      {
        "event": "Anthropic 发布 2026 年 9 月威胁情报报告（2026-09-10）",
        "summary": "Anthropic 报告称其威胁情报团队在过去六个月识别并阻断了一系列使用 Claude 的网络行动，案例涉及疑似国家支持团体、经济犯罪者和政治行动者，并指出 AI 已从问答助手扩展到协调侦察、利用和数据外传的多 agent 工作流。",
        "howTo": "阅读报告中的趋势和案例，把“模型能做什么”与“攻击者实际如何编排工具”分开记录；做安全实验时只在授权环境使用防守型样例，并保留人工审批和日志。",
        "impact": "安全、计算机和社会科学学生可用案例练习威胁建模、攻击链拆解和防御优先级排序；报告同时说明案例中的 Claude Haiku、Sonnet、Opus 与安全措施，不能据此推断所有模型或用户都会产生同样结果。",
        "free": "报告网页可直接阅读；官方未说明阅读需要账号、费用、地区资格或 API 配额，报告本身也不是免费攻击服务。",
        "category": "AI 安全 / 威胁情报",
        "source": {
          "name": "Anthropic Threat Intelligence",
          "published": "2026-09-10",
          "url": "https://www.anthropic.com/threat-intelligence-report-september-2026"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude 免费计划",
        "summary": "Claude 官方定价页列出 Free 计划用于日常问题，并说明所有计划都有按滚动五小时会话窗口重置的使用限制；官方不提供固定消息数，因为限制取决于对话长度、模型和功能。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划进行问答；在 Settings > Usage 查看当前使用情况，达到限制后等待重置，不要把网页免费计划当作 API 额度。",
        "impact": "学生可用它做资料提纲、语言改写和概念解释的低成本初稿，再自行核对事实和引用；长文或高频实验前应先观察实际限制。",
        "free": "官方确认 Free 覆盖日常问题，并说明滚动五小时窗口限制；固定消息数、地区资格、是否需要手机号以及 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API 免费层",
        "summary": "Google 官方定价页列出部分 Gemini 模型的 Free tier，并将免费输入/输出 token 与 AI Studio 开发入口分开列示；官方限流文档说明限制按 RPM、TPM 和 RPD 等维度计算，且按项目而非 API key 应用。",
        "howTo": "在 Google AI Studio 创建或选择项目，查看当前模型的 Free tier 与 active rate limits，再用小批量请求测试；把 RPD 按太平洋时间午夜重置这一官方说明纳入实验记录。",
        "impact": "学生可先做摘要、分类和 API 原型，按项目监测请求、token 和每日用量，避免把免费层误当作无限吞吐。",
        "free": "官方确认有免费层，但可用模型、RPM/TPM/RPD 数值会随模型和账户变化；账号资格、地区清单和固定免费额度官方未统一说明。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价与限流",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 说明它是无需本地设置的托管 Jupyter 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适用于机器学习、数据科学和教育。",
        "howTo": "打开 Colab 新建或导入 notebook，运行 Python；需要时在运行时设置中尝试 GPU 或 TPU，并把 notebook 保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可直接运行课程代码、清洗数据和做小型模型实验，减少环境配置时间；分享前应移除密钥、个人数据和不必要的输出。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Copilot Student 学生权益",
        "summary": "GitHub Education Student Developer Pack 说明 verified students 可使用 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "打开 Student Developer Pack，完成学生资格验证并开通 Copilot Student；在编辑器使用补全，在 GitHub 账户中查看 AI Credits 与 chat/agent 的当前可用情况。",
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
        "summary": "Qwen 官方 Hugging Face 模型卡提供公开下载入口，说明该模型总参数 80B、激活参数 3B，原生上下文长度 262,144 tokens，并支持 instruct（非 thinking）模式。",
        "howTo": "打开官方模型卡，按 Quickstart 使用 Transformers、vLLM、Ollama 或其他列出的环境加载模型；先用短输入测试本地显存、速度和上下文。",
        "impact": "有 GPU 或云端算力的学生可研究 MoE、长上下文和本地推理，不必先购买 API；下载权重不等于免费获得算力。",
        "free": "官方提供公开模型权重下载入口；本地显卡、存储和网络成本由使用者承担，免费 API 配额、账号资格、地区和固定许可期限官方未说明。",
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
    "intro": "精选 9 月 12 日新发布的 BBC 与 The Guardian 文章，避开全部既有 URL 和标题，覆盖气候与政治经济；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "France lifts alcohol content limit on champagne after record heatwaves",
        "source": "BBC",
        "published": "2026-09-12",
        "url": "https://www.bbc.com/news/articles/cvgydvrlep1o",
        "readingTime": "7",
        "topic": "环境 / 经济",
        "summary": "文章从法国经历创纪录热浪后调整香槟酒精含量上限写起，说明气候条件已经改变葡萄成熟和酿酒决策。报道先交代监管变化，再引用生产者对地中海气候向北移动的判断，随后把一次行业规则调整放入更长的气候周期和农业适应背景中。文章的重点不是把单一年份等同于永久趋势，而是展示极端高温如何通过原料、生产标准和市场产品传导到传统产业。",
        "reason": [
          "气候变化如何影响农业、监管与产业适应，是环境经济类常见考研主题。",
          "文章按规则变化—生产者证言—气候背景推进，适合识别事实与推断的边界。",
          "可积累 alcohol content、limit、record heatwaves、producer 等新闻和产业词汇。",
          "题目可考为何修改上限、引语在论证中的作用以及作者是否宣称每年都会重演。",
          "适合写作中论证气候适应需要行业规则与长期监测配合。"
        ],
        "vocabulary": [
          { "word": "lift a limit", "phonetic": "/lɪft ə ˈlɪmɪt/", "part": "v.", "translation": "取消或放宽限制" },
          { "word": "alcohol content", "phonetic": "/ˈælkəhɒl ˌkɒntent/", "part": "n.", "translation": "酒精含量" },
          { "word": "champagne", "phonetic": "/ʃæmˈpeɪn/", "part": "n.", "translation": "香槟" },
          { "word": "record heatwave", "phonetic": "/ˈrekɔːd ˈhiːtweɪv/", "part": "n.", "translation": "创纪录热浪" },
          { "word": "producer", "phonetic": "/prəˈdjuːsə/", "part": "n.", "translation": "生产者；制片人" },
          { "word": "Mediterranean climate", "phonetic": "/ˌmedɪtəˈreɪniən ˈklaɪmət/", "part": "n.", "translation": "地中海气候" },
          { "word": "cycle", "phonetic": "/ˈsaɪkl/", "part": "n.", "translation": "周期" },
          { "word": "unlikely", "phonetic": "/ʌnˈlaɪkli/", "part": "adj.", "translation": "不太可能的" }
        ],
        "sentences": [
          {
            "original": "France lifts alcohol content limit on champagne after record heatwaves.",
            "analysis": [
              "主干是 France lifts limit，after 短语补充时间和背景。",
              "alcohol content 作前置定语，限定被放宽的 limit。",
              "一般现在时是新闻标题常用的压缩时态。",
              "标题把政策动作与极端天气直接并置，暗示因果线索。"
            ],
            "translation": "创纪录热浪过后，法国放宽了香槟酒精含量上限。"
          },
          {
            "original": "The Mediterranean climate is moving north.",
            "analysis": [
              "主干是 climate is moving，进行时呈现正在发生的变化。",
              "Mediterranean 作定语，明确气候类型。",
              "north 是方向副词，说明变化的空间方向。",
              "短句来自生产者引语，承担把个案连接到气候趋势的作用。"
            ],
            "translation": "地中海气候正在向北移动。"
          },
          {
            "original": "It's unlikely to be every year, but it will happen again.",
            "analysis": [
              "前半句是 It is unlikely to...，it 指前文所述现象。",
              "to be every year 表示对发生频率的判断。",
              "but 连接限制性判断与未来预测，形成让步转折。",
              "will happen again 保留不确定性中的重复可能，避免绝对化。"
            ],
            "translation": "这不太可能每年发生，但还会再次出现。"
          }
        ]
      },
      {
        "title": "Donations of £72m make Reform’s prospects both rosier and riskier",
        "source": "The Guardian",
        "published": "2026-09-12",
        "url": "https://www.theguardian.com/politics/2026/sep/12/reform-uk-billionaire-donations-analysis",
        "readingTime": "8",
        "topic": "政治经济 / 商业",
        "summary": "文章分析英国 Reform UK 获得两笔各 3600 万英镑捐款后的双重效果。开头承认大额资金能扩大选举机器，随后用与 2024 年主要政党支出的比较说明资源优势，再转向两个风险：巨额捐款会强化政党代表富有捐助者而非普通人的批评，也会把领导人的财务和捐款合规问题重新置于聚光灯下。结尾回到英国单席多数制和民调，指出钱可以购买广告，却未必能消除“脱离选民”和不可信的观感。",
        "reason": [
          "政党筹资、政治传播和选举制度构成商业与公共政策交叉主题。",
          "文章采用资金事实—潜在收益—两项风险—制度与民调结论的分析结构。",
          "可训练 war chest、windfall、electoral machine、scrutiny 等抽象词。",
          "题目可考数字比较、作者为何使用 both...and... 以及资金为何可能带来反效果。",
          "适合写作中论证资源增加并不自动等于公众信任增加。"
        ],
        "vocabulary": [
          { "word": "war chest", "phonetic": "/ˈwɔː tʃest/", "part": "n.", "translation": "竞选资金储备" },
          { "word": "windfall", "phonetic": "/ˈwɪndfɔːl/", "part": "n.", "translation": "意外之财；突然获得的巨款" },
          { "word": "electoral machine", "phonetic": "/ɪˈlektərəl məˈʃiːn/", "part": "n.", "translation": "选举机器；竞选组织" },
          { "word": "unprecedented", "phonetic": "/ʌnˈpresɪdentɪd/", "part": "adj.", "translation": "前所未有的" },
          { "word": "downside", "phonetic": "/ˈdaʊnsaɪd/", "part": "n.", "translation": "不利面；缺点" },
          { "word": "disconnected", "phonetic": "/ˌdɪskəˈnektɪd/", "part": "adj.", "translation": "脱离联系的" },
          { "word": "scrutiny", "phonetic": "/ˈskruːtəni/", "part": "n.", "translation": "仔细审查；关注" },
          { "word": "first-past-the-post", "phonetic": "/ˌfɜːst pɑːst ðə ˈpəʊst/", "part": "adj.", "translation": "得票最多者当选的" }
        ],
        "sentences": [
          {
            "original": "All things being equal, pretty much any political strategist would welcome a £72m war chest.",
            "analysis": [
              "All things being equal 是独立分词结构，表示在其他条件相同的假设下。",
              "主干是 any strategist would welcome a war chest。",
              "would welcome 表示假设性判断，而非已经发生的动作。",
              "pretty much any 加强范围，war chest 是政治资金隐喻。"
            ],
            "translation": "在其他条件相同的情况下，几乎任何政治策略师都会欢迎一笔7200万英镑的竞选资金。"
          },
          {
            "original": "But all things are not equal, and with such a huge amount comes risk.",
            "analysis": [
              "But 转折否定前句的理想化前提。",
              "with such a huge amount 是伴随背景的介词短语。",
              "comes risk 是倒装结构，把 risk 放到句末形成强调。",
              "句子建立“资源增加同时带来风险”的核心论点。"
            ],
            "translation": "但情况并非完全相同，如此巨额资金也会带来风险。"
          },
          {
            "original": "Optimistic Reform officials may argue privately that £72m could buy enough advertising to blitz any negative coverage.",
            "analysis": [
              "主干是 officials may argue that...，that 从句补充其判断内容。",
              "may argue 表示作者转述一种可能的立场，并不等于作者认同。",
              "could buy enough advertising 是情态动词加结果，enough 表示数量达到目的。",
              "to blitz any negative coverage 是不定式目的结构，说明广告投放意图。"
            ],
            "translation": "乐观的 Reform 官员可能会私下认为，7200万英镑足以购买广告来压倒所有负面报道。"
          }
        ]
      }
    ]
  }
};

const issue20260912 = {
  "date": "2026-09-12",
  "status": "ready",
  "ai": {
    "intro": "本期优先核验 9 月 9—11 日的官方 AI 更新，并复核可立即使用的免费资源；来源未说明的价格、额度、地区或资格明确标为官方未说明。",
    "updates": [
      {
        "event": "GitHub Copilot 企业托管 Agent 操作权限正式可用（2026-09-11）",
        "summary": "GitHub 宣布 Copilot Business 和 Enterprise 管理员现在可以集中控制 agent 的 shell 命令、文件读取与编辑、网络域名操作：每类操作可阻止、要求人工批准或允许无提示执行。",
        "howTo": "管理员打开 enterprise managed settings，为 shell、文件和网络域名分别设置 deny、ask 或 allow，并可按团队配置策略；在 Copilot app、Copilot CLI 或使用 Agent Host 的 VS Code 会话中验证策略。",
        "impact": "课程团队可把读取数据、改文件和联网分开设为审批级别，降低 agent 误操作实验代码或敏感资料的风险；个人仍应审阅命令和 diff。",
        "free": "官方说明该能力面向 Copilot Business 和 Enterprise，且在 Copilot app、CLI 和 Agent Host VS Code 会话中 generally available；个人计划价格、免费额度和地区限制官方未说明。",
        "category": "AI 编程 / 安全控制",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-11",
          "url": "https://github.blog/changelog/2026-09-11-enterprise-managed-permissions-for-github-copilot-agent-operations"
        }
      },
      {
        "event": "GitHub Code Quality 支持 Agentic Autofix 批量修复（2026-09-09）",
        "summary": "GitHub Code Quality 页面现在可一次选择最多 25 个 standard findings 并交给 Copilot：agent 在分支上修复、验证改动，然后创建 pull request 供人审查和合并。",
        "howTo": "在已启用 GitHub Code Quality 的仓库打开 findings 页面，选择最多 25 个 standard findings，点击 Assign to Copilot；检查分支、验证结果和 pull request 后再决定是否合并。",
        "impact": "学生可把课程项目中的一批质量问题交给 agent 做初步修复，再把测试、审查和合并保留在人手中；批量操作会消耗 AI credits，应先小批量试用。",
        "free": "官方说明该能力适用于启用 Code Quality 的 GitHub Team 和 GitHub Enterprise Cloud 仓库，且会消耗 AI credits；具体 credits 价格、免费额度和地区限制官方未说明。",
        "category": "AI 编程 / 代码质量",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-09",
          "url": "https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix"
        }
      },
      {
        "event": "Anthropic 预览 Model Hardware Standard（2026-09-09）",
        "summary": "Anthropic 向首批科研实验室和先进制造商开放 Model Hardware Standard 研究预览：标准化 driver 用 read/write 等 primitives 让 agent 通过 MCP、CLI 或 API 协调显微镜、液体处理器和机械臂等可编程设备。",
        "howTo": "有可编程实验设备的团队阅读 MHS 公告并在 modelhardwarestandard.com 提交 research preview interest；学生可按公告理解设备发现、参数调整和安全限制，但不能把研究预览当作普通公开产品。",
        "impact": "科研学生可据此设计多仪器实验编排、实时调参和故障检测原型；真实设备仍需专家监督，因为官方明确说明模型的物理推理存在局限。",
        "free": "官方称这是面向首批实验室和制造商的 research preview，未来计划开源；申请资格、费用、地区、设备数量和开放时间官方未说明。",
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
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google 官方定价页列出免费层：可有限访问部分模型、获得免费输入和输出 token，并使用 Google AI Studio 开始开发；免费层内容可用于改进 Google 产品。",
        "howTo": "登录 Google AI Studio，选择免费层可用模型测试提示词或 API 原型；正式调用前查看当前模型表格和账户限制，避免提交敏感资料。",
        "impact": "学生可先做文本处理、课程演示和 API 调试而无需先付费，再决定是否购买生产吞吐；实验报告应记录模型和实际限制。",
        "free": "官方明确免费层包含有限模型访问、免费输入/输出 token 和 AI Studio；统一固定额度、账号资格、地区清单和重置周期官方未说明。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费 Jupyter 环境",
        "summary": "Colab 官方 FAQ 说明它是无需本地设置的托管 Jupyter 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中尝试 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 加载。",
        "impact": "学生可直接运行课程代码、清洗数据和做小型模型实验，避免先配置本地环境；分享 notebook 前应检查输出和注释是否含敏感信息。",
        "free": "官方确认免费，但资源不保证、不无限，使用上限会波动；统一 GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Copilot Student 学生权益",
        "summary": "GitHub Education 权益页说明 verified students 可使用 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及仅通过 auto model selection 提供的有限 chat 和 agent 使用。",
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
        "summary": "Qwen 官方 Hugging Face 模型卡提供公开下载入口，说明该模型总参数 80B、激活参数 3B，原生上下文长度 262,144 tokens，并支持 instruct（非 thinking）模式。",
        "howTo": "打开官方模型卡，按 Quickstart 使用 Transformers、vLLM、Ollama 或其他列出的环境加载模型；先用短输入测试本地显存、速度和上下文。",
        "impact": "有 GPU 或云端算力的学生可研究 MoE、长上下文和本地推理，不必先购买 API；下载权重不等于免费获得算力。",
        "free": "官方提供公开模型权重下载入口；本地显卡、存储和网络成本由使用者承担，免费 API 配额、账号资格、地区和固定许可期限官方未说明。",
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
    "intro": "精选 9 月 11—12 日可直接阅读的 BBC、The Guardian 与 NPR 文章，避开全部既有 URL 和标题，覆盖健康政策、全球健康与经济冲击；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "MPs vote against fresh attempt to legalise assisted dying",
        "source": "BBC",
        "published": "2026-09-12",
        "url": "https://www.bbc.co.uk/news/articles/c17j91jenr8o",
        "readingTime": "7",
        "topic": "健康 / 公共政策",
        "summary": "文章报道英国议员否决再次推动安乐死合法化的议案。报道先交代投票结果和议案支持者认为现行法律残酷、不公的理由，再呈现反对者对安全性、可操作性以及医疗和临终照护准备不足的担忧，最后补充支持者仍可能在未来重提立法。全文不是单向评论，而是把议会决定、医学专业意见、临终患者处境和后续政治路径并置，结论是争议并未消失。",
        "reason": [
          "安乐死、医疗照护和立法争议是健康政策类高频阅读主题。",
          "文章按投票结果—正反理由—后续可能性推进，适合梳理论证层次。",
          "可训练 distinguish、workability、palliative care 等政策与医学词汇。",
          "题目可考作者如何呈现双方立场、投票意味着什么以及争议是否结束。",
          "适合写作中使用“法律改变前需先补足公共服务”的让步论证。"
        ],
        "vocabulary": [
          { "word": "assisted dying", "phonetic": "/əˌsɪstɪd ˈdaɪɪŋ/", "part": "n.", "translation": "协助死亡" },
          { "word": "legalise", "phonetic": "/ˈliːɡəlaɪz/", "part": "v.", "translation": "使合法化" },
          { "word": "legislation", "phonetic": "/ˌledʒɪˈsleɪʃən/", "part": "n.", "translation": "立法" },
          { "word": "conscience", "phonetic": "/ˈkɒnʃəns/", "part": "n.", "translation": "良知；内心" },
          { "word": "unworkable", "phonetic": "/ʌnˈwɜːkəbl/", "part": "adj.", "translation": "不可行的" },
          { "word": "palliative care", "phonetic": "/ˈpæliətɪv keə/", "part": "n.", "translation": "姑息治疗；临终关怀" },
          { "word": "terminally ill", "phonetic": "/ˈtɜːmɪnəli ɪl/", "part": "adj.", "translation": "患绝症的" },
          { "word": "inevitable", "phonetic": "/ɪnˈevɪtəbl/", "part": "adj.", "translation": "不可避免的" }
        ],
        "sentences": [
          {
            "original": "MPs vote against fresh attempt to legalise assisted dying.",
            "analysis": [
              "主干是 MPs vote against...，against 引出反对对象。",
              "fresh attempt to legalise... 中不定式说明 attempt 的目标。",
              "标题使用一般现在时报道刚发生的议会动作。",
              "该句适合积累新闻标题中压缩信息和省略冠词的写法。"
            ],
            "translation": "英国议员投票反对再次推动安乐死合法化。"
          },
          {
            "original": "The issue was clearly not going away.",
            "analysis": [
              "主干是 the issue was not going away，过去进行式语义表示持续存在。",
              "clearly 是态度副词，强调判断的确定程度。",
              "go away 在此不是离开，而是问题消失。",
              "该句把一次投票与后续公共争论连接起来。"
            ],
            "translation": "这一问题显然不会消失。"
          },
          {
            "original": "There was a need to fix our NHS and sort out social and palliative care.",
            "analysis": [
              "There was a need to... 是提出政策优先级的存在句。",
              "两个并列不定式 fix 和 sort out 说明需要采取的行动。",
              "social and palliative care 并列限定照护体系的范围。",
              "该结构可用于写作中提出改革先后顺序。"
            ],
            "translation": "有必要先修复国民保健服务并解决社会照护和临终关怀问题。"
          }
        ]
      },
      {
        "title": "A $15.5m fund aims to create ‘unstoppable momentum’ to end FGM worldwide",
        "source": "The Guardian",
        "published": "2026-09-11",
        "url": "https://www.theguardian.com/global-development/2026/sep/11/15m-fund-launched-to-create-unstoppable-momentum-to-end-fgm-worldwide",
        "readingTime": "7",
        "topic": "全球健康 / 社会",
        "summary": "文章报道 Her Horizon Fund 获得 1550 万美元启动资金，目标是为消除女性生殖器切割筹集 1 亿美元。报道先说明该基金和基层倡导者的意义，再指出捐助下降、法律保护受到挑战以及联合国 2030 年目标进展不够快的背景，随后用 UNFPA 与 UNICEF 联合项目资金下降的数据说明资源压力，最后引入幸存者和基金顾问的观点，强调持久改变应由当地幸存者和前线组织主导。文章的结论是资金本身不是终点，但直接、长期的基层资源可能成为扩大行动的催化剂。",
        "reason": [
          "全球健康、性别平等和慈善资金是社会议题的复合型考点。",
          "结构从基金事实转向资金缺口，再回到基层行动者的解决方案。",
          "可训练 funding decline、frontline、fragile 和 catalytic 等抽象词。",
          "题目可考数字证据、作者态度以及为什么强调 survivor-led work。",
          "适合写“国际目标需要地方组织和稳定资源落实”的因果论证。"
        ],
        "vocabulary": [
          { "word": "female genital mutilation", "phonetic": "/ˌfiːmeɪl ˈdʒenɪtl ˌmjuːtɪˈleɪʃən/", "part": "n.", "translation": "女性生殖器切割" },
          { "word": "philanthropic", "phonetic": "/ˌfɪlənˈθrɒpɪk/", "part": "adj.", "translation": "慈善的" },
          { "word": "elimination", "phonetic": "/ɪˌlɪmɪˈneɪʃən/", "part": "n.", "translation": "消除" },
          { "word": "frontline", "phonetic": "/ˈfrʌntlaɪn/", "part": "adj.", "translation": "一线的" },
          { "word": "survivor", "phonetic": "/səˈvaɪvə/", "part": "n.", "translation": "幸存者" },
          { "word": "prevalence", "phonetic": "/ˈprevələns/", "part": "n.", "translation": "流行率；普遍程度" },
          { "word": "fragile", "phonetic": "/ˈfrædʒaɪl/", "part": "adj.", "translation": "脆弱的" },
          { "word": "catalytic", "phonetic": "/ˌkætəˈlɪtɪk/", "part": "adj.", "translation": "催化性的" }
        ],
        "sentences": [
          {
            "original": "Frontline activists and leaders have welcomed an unprecedented fund.",
            "analysis": [
              "主干是 activists and leaders have welcomed a fund。",
              "Frontline 置于名词前，限定这些行动者来自一线社区。",
              "现在完成时把基金发布与当前反应连接起来。",
              "unprecedented 表示规模或性质前所未有，带有评价色彩。"
            ],
            "translation": "一线行动者和领导者欢迎这项前所未有的基金。"
          },
          {
            "original": "Progress is not on track as funding declines and legal protections are challenged.",
            "analysis": [
              "主干是 progress is not on track，表达偏离目标的判断。",
              "as 引导背景原因，同时连接 funding declines 与 protections are challenged。",
              "两个并列分句呈现资金和法律两重压力。",
              "被动语态 are challenged 突出法律保护所承受的外部挑战。"
            ],
            "translation": "随着资金减少、法律保护受到挑战，进展没有按计划推进。"
          },
          {
            "original": "Lasting change must be led by the frontline.",
            "analysis": [
              "主干是 change must be led，情态动词表达必要性。",
              "被动语态把 lasting change 置于主语位置，突出结果。",
              "by the frontline 指明行动主体，而不是抽象地说“改变发生”。",
              "该句可直接迁移到关于地方参与和政策执行的写作。"
            ],
            "translation": "持久的改变必须由一线群体领导。"
          }
        ]
      },
      {
        "title": "Iran's collapsing economy is unraveling livelihoods and putting lives on hold",
        "source": "NPR",
        "published": "2026-09-11",
        "url": "https://www.npr.org/2026/09/11/g-s1-142935/iran-us-war-jobs-economy",
        "readingTime": "8",
        "topic": "经济 / 社会",
        "summary": "NPR 通过德黑兰工程师和材料工程师的经历，报道战争与制裁如何冲击伊朗就业、运输和家庭计划。文章先以一个本想靠网约车应急的工程师切入，再用通胀、燃油和房租上涨以及求职网站简历提交量增加等信息扩展到整体经济，随后解释网络限制、供应链中断和霍尔木兹海峡运输受阻如何让企业失去订单，最后回到个人只能依靠家庭储蓄或亲属维持生活的处境。文章的核心是宏观冲突通过就业和日常成本传导，令普通人的未来计划被迫暂停。",
        "reason": [
          "战争对就业、通胀和家庭生活的外溢影响是经济社会类重点主题。",
          "文章采用人物故事—统计背景—机制解释—人物回收的倒金字塔叙事。",
          "可训练 livelihood、unemployment、disruption 和 supply chain 等词汇。",
          "题目可考个案为何能代表整体趋势、经济冲击的传导链和作者证据来源。",
          "适合写“宏观政策成本最终由普通家庭承担”的论证。"
        ],
        "vocabulary": [
          { "word": "livelihood", "phonetic": "/ˈlaɪvlihʊd/", "part": "n.", "translation": "生计" },
          { "word": "inflation", "phonetic": "/ɪnˈfleɪʃən/", "part": "n.", "translation": "通货膨胀" },
          { "word": "unemployment", "phonetic": "/ˌʌnɪmˈplɔɪmənt/", "part": "n.", "translation": "失业" },
          { "word": "desperation", "phonetic": "/ˌdespəˈreɪʃən/", "part": "n.", "translation": "绝望；迫切" },
          { "word": "disruption", "phonetic": "/dɪsˈrʌpʃən/", "part": "n.", "translation": "中断；扰乱" },
          { "word": "transit", "phonetic": "/ˈtrænzɪt/", "part": "n.", "translation": "运输；通行" },
          { "word": "blockade", "phonetic": "/blɒˈkeɪd/", "part": "n.", "translation": "封锁" },
          { "word": "shelve", "phonetic": "/ʃelv/", "part": "v.", "translation": "暂缓；搁置" }
        ],
        "sentences": [
          {
            "original": "Ordinary Iranians have borne the brunt of a collapsing economy.",
            "analysis": [
              "主干是 ordinary Iranians have borne the brunt。",
              "现在完成时强调冲击从过去延续到现在。",
              "of a collapsing economy 说明承受打击的来源。",
              "bear the brunt 是固定搭配，表示承受最严重的部分。"
            ],
            "translation": "普通伊朗人承受了经济崩溃的主要冲击。"
          },
          {
            "original": "The desperation for work is palpable.",
            "analysis": [
              "主干是 desperation is palpable，系动词连接抽象主语与表语。",
              "for work 限定 desperation 的具体对象。",
              "palpable 把难以量化的社会情绪写成明显可感的状态。",
              "短句在数据段落后强化作者对就业危机的判断。"
            ],
            "translation": "人们对工作的绝望显而易见。"
          },
          {
            "original": "With clients unable to place orders, the business collapsed.",
            "analysis": [
              "With 复合结构引出伴随条件，clients 是逻辑主语。",
              "unable to place orders 说明客户无法下单的状态。",
              "主句 the business collapsed 给出直接结果。",
              "该句把供应链受阻与企业倒闭压缩成清晰的因果链。"
            ],
            "translation": "由于客户无法下订单，这家企业倒闭了。"
          }
        ]
      }
    ]
  }
};

const issue20260915 = {
  "date": "2026-09-15",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 14 日 GitHub 官方更新，并复核 9 月 15 日仍可用的免费资源；所有价格、额度和地区说明均按官方来源写明。",
    "updates": [
      {
        "event": "GitHub Copilot auto model selection 支持 cost/quality 分层（2026-09-14）",
        "summary": "GitHub 官方 changelog 说明 Copilot auto model selection 现提供 efficiency、balance 和 intelligence 三个档位，可按每次 prompt 在成本、质量和响应时间之间取舍；系统会根据任务类型自动选择最合适模型。",
        "howTo": "在 VS Code、Copilot CLI 或 GitHub Copilot app 中打开模型选择器，选择 Efficiency / Balance / Intelligence，根据任务性质切换；简单任务可选 Efficiency，复杂规划任务可选 Intelligence，再检查生成结果与成本变化。",
        "impact": "学生可把简单代码补全和重复性任务控制在更低成本，同时把复杂分析和代码结构任务放到更高 intelligence 层；但仍需自行验证测试、依赖和代码安全。",
        "free": "官方说明该功能当前在 VS Code、CLI 和 app 中逐步推出，且使用量按实际选择的模型计费；付费订阅用户继续享受 10% 折扣。官方未说明所有计划的独立免费额度、地区差异和是否有固定免费量，因此应以当前账户计划与模型页面为准。",
        "category": "AI 编程 / 模型选择",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-14",
          "url": "https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection"
        }
      },
      {
        "event": "GitHub AI Scan for pull request APIs 进入 public preview（2026-09-10）",
        "summary": "GitHub 官方 changelog 说明 AI Scan for pull request 现在可通过组织和仓库级 REST API 批量管理启用状态，方便团队在选定仓库启用 AI powered security detections，而无需逐个在 UI 中配置。",
        "howTo": "在 GitHub.com 或组织管理页面使用 /orgs/{org}/code-scanning/ai-scan 与 /repos/{owner}/{repo}/code-scanning/ai-scan 接口读取或更新状态；先在组织级启用，再按仓库开启或关闭，确保组织级禁用不会被单仓库设置覆盖。",
        "impact": "学生团队在课程项目或科研仓库中可批量开关 security 检测，减少手动配置工作；这不应替代手工审查、依赖扫描和安全评估。",
        "free": "官方说明这是 GitHub Advanced Security 客户的 public preview，并且 GitHub Enterprise Server 不支持此版本。官方未说明该能力的统一价格、个人或学生免费额度、地区资格和自由使用细则，因此需以 GitHub Advanced Security 计划与当前组织设置为准。",
        "category": "AI 安全 / 代码扫描",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-10",
          "url": "https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview"
        }
      },
      {
        "event": "GitHub 仓库 Pull Requests 列表页刷新进入 public preview（2026-09-10）",
        "summary": "GitHub 官方更新称仓库级 Pull requests 列表页实现刷新，加入更强筛选和搜索、收起侧边栏、紧凑模式以及读未读状态和状态检查计数等信息摘要，使团队更容易管理 review 流程。",
        "howTo": "访问任意仓库的 Pull requests 页面，点击页面顶部 Preview badge，试用新筛选器和高级搜索；按 “Authored by me” 或 “Involves me” 快速筛选，再切回 classic experience 以对比。",
        "impact": "学生在团队作业、开源协作和期末项目中更容易找到需要 review 的请求并跟踪状态；新界面仍有已知限制，例如未显示 milestone、无法 bulk update、部分 label emoji 可能异常，因此仍需按需核对细节。",
        "free": "官方说明这是 all GitHub users 的 public preview，未列出单独价格或计划门槛；项目中未说明学生、个人或企业账户的额外资格和地区限制，因此应按当前 GitHub 账号权限和预览状态判断。",
        "category": "AI 编程 / 代码协作",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-10",
          "url": "https://github.blog/changelog/2026-09-10-refreshed-repository-pull-requests-page-in-public-preview"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适用于日常提问，并指出所有计划都受 rolling five-hour session window 影响；页面明确说明没有固定消息数，实际可用量取决于会话长度、模型和功能。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前会话窗口和使用状态，达到限制后等待重置或升级方案。",
        "impact": "学生可用来梳理提纲、概念解释与语言润色，再自行核对事实、引用和计算；不要把 Free 计划和 API 免费额度混为一谈。",
        "free": "官方确认 Free 计划适用于日常问题，并说明 rolling five-hour session 限制；固定消息数、是否需要手机号和地区资格官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google AI Studio 官方定价页明确列出 Gemini API 的 Free tier，并说明免费输入/输出 token 与 AI Studio 入口可同时使用；页面同时区分不同模型的 Free tier 与付费 tier。",
        "howTo": "在 Google AI Studio 创建项目，选择当前支持的 Free tier 模型并发起小规模实验；在模型页面查看 RPM、TPM、RPD 等 limit，并将这些值纳入实验记录。",
        "impact": "学生可先做摘要、归类、课堂 API 原型和小实验，并记录请求次数与 token 用量；不要把 free tier 当作无限吞吐或长期稳定生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需设置的托管 Jupyter Notebook 服务，并提供免费计算资源，包括 GPU 与 TPU，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab 新建或导入 notebook，运行 Python；必要时在运行时设置中切换 GPU/TPU，并将 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；但共享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费；资源不保证且使用上限会波动，GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Copilot Student 学生权益",
        "summary": "GitHub Education Student Developer Pack 明确说明 verified students 可获得 Copilot Student，包含 unlimited code completions、GitHub AI Credits 以及 limited chat 和 agent usage，模型仅通过 auto model selection 提供。",
        "howTo": "打开 GitHub Education Pack，完成学生资格验证并启用 Copilot Student；在支持的编辑器中使用补全，查看 GitHub 账户中的 AI Credits 和 chat/agent 可用情况。",
        "impact": "学生可通过补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；生成代码仍需本地测试、许可证审核和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 和 chat/agent 仅有限提供，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
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
    "intro": "精选 9 月 13—14 日可直接阅读的 BBC/NPR 文章，避开全部既有 URL 和标题，覆盖能源成本、教育政策与家庭支出；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "Petrol and diesel prices hit highest since 2022",
        "source": "BBC",
        "published": "2026-09-14",
        "url": "https://www.bbc.co.uk/news/articles/c20zgjzz0e4o",
        "readingTime": "8",
        "topic": "经济 / 能源",
        "summary": "文章从国际油价波动入手，解释原油、炼油能力和需求如何共同推高汽油和柴油价格，并指出全球冲突和和平前景交替影响油价走势。文章随后把这个宏观因素落到“加油站”这一日常场景，说明每 10 美元/桶的油价涨幅大致会让汽油价格上升约 7p/L，强调价格变化如何通过家庭通勤和物流链同时传导到日常消费。结论是，油价拉升并非孤立事件，而是地缘风险、供应链和市场预期共同作用的结果。",
        "reason": [
          "能源价格、通胀和市场传导属于经济学与社会议题的经典命题。",
          "文章从原油价格—炼油—加油站的链条展开，思路清晰，适合梳理因果结构。",
          "可积累 crude oil、refining capacity、volatility、benchmark 等经济与能源词汇。",
          "题目可考宏观因素如何传导到个人消费，以及作者如何使用数据说明影响。",
          "写作上可借鉴“宏观变量 → 市场机制 → 个人体验”的论证顺序。"
        ],
        "vocabulary": [
          { "word": "crude oil", "phonetic": "/kruːd ˈɔɪl/", "part": "n.", "translation": "原油" },
          { "word": "petrol", "phonetic": "/ˈpetrəl/", "part": "n.", "translation": "汽油" },
          { "word": "diesel", "phonetic": "/ˈdiːzəl/", "part": "n.", "translation": "柴油" },
          { "word": "refining capacity", "phonetic": "/rɪˈfaɪnɪŋ kəˈpæsəti/", "part": "n.", "translation": "炼油能力" },
          { "word": "volatile", "phonetic": "/ˈvɒlətaɪl/", "part": "adj.", "translation": "波动的；不稳定的" },
          { "word": "benchmark", "phonetic": "/ˈbentʃmɑːk/", "part": "n.", "translation": "基准" },
          { "word": "escalation", "phonetic": "/ˌeskəˈleɪʃən/", "part": "n.", "translation": "升级；加剧" },
          { "word": "hostilities", "phonetic": "/hɒˈstɪlɪtiz/", "part": "n.", "translation": "敌对行动；冲突" },
          { "word": "pump price", "phonetic": "/pʌmp praɪs/", "part": "n.", "translation": "加油站价格" }
        ],
        "sentences": [
          {
            "original": "Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive.",
            "analysis": [
              "主干是 crude oil is a key ingredient, 后面 which means 引导非限定性定语从句，解释结果。",
              "key ingredient 体现定语缩减的新闻写法，信息密度高。",
              "higher wholesale costs 是原因，make filling up a car more expensive 是直接后果。",
              "该句为全文建立了能源价格传导的核心逻辑。"
            ],
            "translation": "原油是汽油和柴油的关键成分，这意味着更高的批发成本会让给汽车加油变得更贵。"
          },
          {
            "original": "Analysts say every $10 per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.",
            "analysis": [
              "主干是 analysts say，后接宾语从句说明定量关系。",
              "every $10 per barrel increase 是具体量化指标，利于读者形成感知。",
              "pushes up pump prices by roughly 7p a litre 是结果表达，清晰说明传导幅度。",
              "该句适合作为数据支撑段落的典型例子。"
            ],
            "translation": "分析人士表示，原油价格每上涨 10 美元/桶，便会使加油站价格大约上升每升 7 便士。"
          },
          {
            "original": "Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.",
            "analysis": [
              "Generally speaking 为话语标记句，提示作者转入概括性判断。",
              "while 连接两个并列分句，形成冲突与和平预期的反向作用。",
              "drives ... up / pushes ... down 是强对比词组，结构简洁。",
              "该句总结了地缘风险如何改变市场预期。"
            ],
            "translation": "一般来说，冲突升级的消息会推高油价，而结束战争的希望则会压低油价。"
          }
        ]
      },
      {
        "title": "Deep-fried food banned under new school dinner rules in England",
        "source": "BBC",
        "published": "2026-09-14",
        "url": "https://www.bbc.co.uk/news/articles/cy4zrepw78eo",
        "readingTime": "7",
        "topic": "教育 / 健康",
        "summary": "文章报道英国教育部拟定新校餐规则，要求学校减少高脂高糖食品，并把深炸薯条改为烤制，同时要求每周至少一次的面食中含有 50% 全麦成分，并增加高纤维面包。报道指出这一措施的目的在于改善学生营养、支持课堂专注力和整体健康。作者也纳入校长和教师代表的反馈，说明政策的实施需要更充足的餐饮设施和培训资源，而不是仅靠简单命令。文章最终把规则落到学校日常经营与财政安排上，体现政策改革既要有标准又要有执行支撑。",
        "reason": [
          "教育、健康与政策执行是教育社会类常见题材。",
          "文章用“政策—目的—反响—执行条件”的结构推进，适合观察论证链。",
          "可积累 childhood obesity、nutrition、concentration、wellbeing 等公共健康词汇。",
          "题目可考政策目的、实施难点和作者如何平衡目标与现实。",
          "适合写作中谈“健康政策需要资源支持”，也可用作社会政策议论文范例。"
        ],
        "vocabulary": [
          { "word": "childhood obesity", "phonetic": "/ˈtʃaɪldhʊd əˈbiːsəti/", "part": "n.", "translation": "儿童肥胖" },
          { "word": "nutrition", "phonetic": "/njuːˈtrɪʃən/", "part": "n.", "translation": "营养" },
          { "word": "wellbeing", "phonetic": "/ˈwɛlbiːɪŋ/", "part": "n.", "translation": "健康；福祉" },
          { "word": "enforcement", "phonetic": "/ɪnˈfɔːs.mənt/", "part": "n.", "translation": "执行；强制落实" },
          { "word": "reassured", "phonetic": "/ˌriːəˈʃʊəd/", "part": "adj.", "translation": "安心的；放心的" },
          { "word": "investment", "phonetic": "/ɪnˈvestmənt/", "part": "n.", "translation": "投资；投入" },
          { "word": "catering", "phonetic": "/ˈkeɪtərɪŋ/", "part": "n.", "translation": "餐饮服务" },
          { "word": "affordably", "phonetic": "/əˈfɔːdəblɪ/", "part": "adv.", "translation": "负担得起地；可承受地" }
        ],
        "sentences": [
          {
            "original": "The Department for Education said it hoped the reforms would tackle childhood obesity, improve nutrition and support children's concentration, learning and wellbeing.",
            "analysis": [
              "主干是 The Department for Education said，后接宾语从句说明政策目的。",
              "would tackle ... improve ... and support ... 是并列动词短语，形成目标层级。",
              "children's concentration, learning and wellbeing 形成三元并列，体现面向学生整体发展。",
              "该句可作为政策价值判断的概括总结。"
            ],
            "translation": "教育部表示，它希望这些改革能解决儿童肥胖问题，改善营养，并支持儿童的注意力、学习和福祉。"
          },
          {
            "original": "But on plans for enforcement, he added: 'None of us would consider ourselves experts in health and nutrition.'",
            "analysis": [
              "but 连接前后两个相反的立场，形成转折。",
              "on plans for enforcement 直接说明焦点在执行机制。",
              "he added 引出引语，是典型新闻写法中的引述。",
              "None of us would consider ourselves experts ... 既是谦逊，也弱化政策制定者的权威。"
            ],
            "translation": "但在执行方案上，他补充道：‘我们谁都不会自认为是健康与营养方面的专家。’"
          },
          {
            "original": "She said the government was 'absolutely determined to support schools' to redesign their menus affordably.",
            "analysis": [
              "主句是 She said, 后接直接引语，增加新闻真实性。",
              "absolutely determined 强调政府决心，使用情态加强语气。",
              "to redesign their menus affordably 指明目标是低成本调整菜单。",
              "该句允许作者在政策和财政约束之间保留平衡空间。"
            ],
            "translation": "她说，政府‘绝对有决心支持学校’以可承受的方式重新设计菜单。"
          }
        ]
      },
      {
        "title": "Forecast says families will spend more to heat their homes this winter",
        "source": "NPR",
        "published": "2026-09-14",
        "url": "https://www.npr.org/2026/09/14/nx-s1-5966663/forecast-says-families-will-spend-more-to-heat-their-homes-this-winter",
        "readingTime": "8",
        "topic": "社会 / 能源 / 家庭成本",
        "summary": "文章通过一位能源援助官员与记者对话，说明尽管天气可能相对温和，家庭冬季取暖支出仍可能高于去年，因为天然气和电力价格上涨，且东北地区使用取暖油的家庭可能暴露出更大涨幅。文章指出，低收入家庭往往把可支配收入的很大一部分用于水电暖，相关援助资金却多年持平，削弱了帮助的效果。报道最后把焦点放回家庭生活：高成本不只影响燃料支出，还会改变人们计划和调度，形成更深层次的消费压力。",
        "reason": [
          "能源价格与家庭负担是社会经济类高频议题，适合考察政策与生活的连接。",
          "文章以天气预报切入，再转向能源成本，反常识地说明“温暖冬天不等于更低账单”。",
          "可积累 utility bills, heating oil, low-income families, assistance 等公共经济词汇。",
          "题目可考宏观成本如何通过能源市场传导到个人家庭，以及媒体如何设置对比。",
          "写作中可以借用“背景—机制—影响—政策回应”的结构。"
        ],
        "vocabulary": [
          { "word": "utility bill", "phonetic": "/juːˈtɪlɪti bɪl/", "part": "n.", "translation": "水电暖账单" },
          { "word": "heating oil", "phonetic": "/ˈhiːtɪŋ ɔɪl/", "part": "n.", "translation": "取暖油" },
          { "word": "low-income", "phonetic": "/ˌləʊ ˈɪnkʌm/", "part": "adj.", "translation": "低收入的" },
          { "word": "assistance", "phonetic": "/əˈsɪstəns/", "part": "n.", "translation": "援助" },
          { "word": "forecast", "phonetic": "/ˈfɔːkɑːst/", "part": "n.", "translation": "预测；预报" },
          { "word": "inflation", "phonetic": "/ɪnˈfleɪʃən/", "part": "n.", "translation": "通货膨胀" },
          { "word": "demand", "phonetic": "/dɪˈmɑːnd/", "part": "n.", "translation": "需求" },
          { "word": "hardship", "phonetic": "/ˈhɑːdʃɪp/", "part": "n.", "translation": "困苦；经济困难" }
        ],
        "sentences": [
          {
            "original": "The cost of staying warm this winter could give some people the chills.",
            "analysis": [
              "主干是 The cost could give some people the chills，属于比喻表达。",
              "staying warm this winter 具体化了成本场景。",
              "give someone the chills 用作比喻，说明费用带来的心理压力。",
              "该句在开头就攫取情绪关注，适合新闻导语。"
            ],
            "translation": "今年冬天保持温暖的成本可能会让一些人不寒而栗。"
          },
          {
            "original": "Even though people may not need to run their furnaces as much this year, their heating bills could still be higher than last year just because fuel is more expensive.",
            "analysis": [
              "Even though 引导让步状语从句，形成反常识表述。",
              "run their furnaces as much 形成对气温的反向逻辑。",
              "just because 用来强调直接原因，具有说服力。",
              "该句很好地说明“天气温和不一定意味着账单下降”。"
            ],
            "translation": "尽管人们今年可能不需要让取暖炉运转那么多，但他们的取暖账单仍可能高于去年，仅仅因为燃料更贵。"
          },
          {
            "original": "It's toughest on those families that can least afford it.",
            "analysis": [
              "主干是 It is toughest on those families，使用形容词最高级强调受影响程度。",
              "that can least afford it 是定语从句，明确指向最贫困群体。",
              "该句是家长式政策报道中常见的“弱者最受冲击”总结。",
              "适合扩写为论证“高成本与社会公平”的写作素材。"
            ],
            "translation": "对那些最无法承受的人来说，这种冲击最为严峻。"
          }
        ]
      }
    ]
  }
};

const issue20260920 = {
  "date": "2026-09-20",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 17–18 日 GitHub 官方更新，并复核 9 月 20 日仍可用的免费资源；所有价格、额度、地区和 rollout 说明均按官方来源写明，未说明处显式注明。",
    "updates": [
      {
        "event": "GitHub Copilot 代码审查改进 review experience（2026-09-18）",
        "summary": "GitHub 官方 changelog 说明，Copilot code review 现在会更清晰地展示 review 的进展状态：Open、Resolved since last review、Previously missed findings，并在批量接受建议时生成更有用的 commit message，同时改进了自动解决已处理评论的规则。",
        "howTo": "在 GitHub pull request 页面请求 Copilot review；查看 review overview 中的 Open / Resolved since last review / Previously missed 分类，再在批量建议对话框中接受建议并检查生成的 commit title 和 description。",
        "impact": "学生在课程项目、实验室 PR 和作业评审时，更容易看到哪些问题已修复、哪些仍待人工核验；这减少了重复阅读代码与 review 上下文的耗时，也让提交前更容易产出更清楚的提交说明。",
        "free": "官方说明该能力现在 generally available，并面向 GitHub Copilot 用户；统一价格、个人或学生免费额度、地区差异和计划门槛官方未说明。",
        "category": "AI 编程 / 代码评审",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience"
        }
      },
      {
        "event": "GitHub Copilot 周更新：模型选择、Sentry 集成与 VS Code agents（2026-09-18）",
        "summary": "GitHub 官方周更新列出三类关键改动：auto model selection 新增 efficiency / balance / intelligence 三个权衡层级；Copilot app 新增 Sentry canvas，可从 crash report 进入代码修复；VS Code Agents 窗口也新增本地 Dev Container 与 PR 创建体验。",
        "howTo": "在 VS Code、Copilot CLI 或 Copilot app 中打开模型选择器，选择 auto model selection 的 efficiency / balance / intelligence；在 Copilot app 中连接 Sentry 并开始从 crash report 到修复的工作流；如需本地容器代理，确认 Docker 与支持的 Dev Container 配置已启用。",
        "impact": "学生可更快比较不同模型在成本、质量和速度上的权衡，也能在修复程序崩溃时保持更短的迭代闭环；但仍需保留人工测试和代码审查，而不是直接信任 agent 的“已修复”结论。",
        "free": "官方说明这些能力面向不同客户端和计划；统一免费额度、学生资格、地区范围和所有功能的费用细则官方未说明。",
        "category": "AI 编程 / 生产力工具",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14"
        }
      },
      {
        "event": "GitHub Copilot 选定模型将于 2026-10-19 停用（2026-09-18）",
        "summary": "GitHub 官方 changelog 公布，多个 Copilot 模型将在 2026-10-19 停用，名单包括 Gemini 3.7 Flash、GPT-5.5、GPT-5.4、GPT-5.4 mini、GPT-5 mini 和 Grok 4.5；官方建议迁移到对应替代模型。",
        "howTo": "在 Copilot Chat、inline edits、ask/agent 模式和代码补全的工作流中检查当前使用的模型；在组织或企业的 Copilot model policy 中确认替代模型已启用，再在模型选择器中切换到建议的备选。",
        "impact": "学生和实验室若在课程项目中依赖这些老模型，应提前替换并在截止前重新验证工作流，避免作业和脚本因模型下线而输出差异增大。",
        "free": "这是模型生命周期更新，不是新优惠；官方未说明个人或学生计划、统一免费额度和地区范围，且企业/Business 管理员需自行控制替代模型启用状态。",
        "category": "AI 模型 / 生命周期",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october"
        }
      }
    ],
    "deals": [
      {
        "event": "Microsoft Copilot 免费网页 / 应用访问",
        "summary": "Microsoft Copilot 官方入口展示了免费使用的网页和应用入口，学生可在不付费的前提下直接体验常规 AI 问答、总结和写作辅助。",
        "howTo": "打开 copilot.microsoft.com，使用 Microsoft 账户登录或继续以访客方式试用；在聊天界面输入任务或要求生成摘要、解释和草案，然后按需要复核答案。",
        "impact": "学生可以快速做笔记整理、课程概念解释、邮件草稿和资料总结，降低信息检索和写作起步成本；但大规模文档处理或高频使用需先确认当前功能和账号限制。",
        "free": "官方站点提供免费入口；具体高级功能、地区限制、额度与账号资格官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Microsoft Copilot 官方入口",
          "published": "官方未说明",
          "url": "https://copilot.microsoft.com/"
        }
      },
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划可用于日常提问，并在页面中写明所有计划都受 rolling five-hour session window 影响。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前会话窗口状态，达到限制后等待重置。",
        "impact": "学生可用它做提纲、概念解释、语言润色和研究问题初步判断；长文和高频分析前应注意当前窗口是否已耗尽。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session window；固定消息数、是否需要手机号、地区资格和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的免费层，并说明可用模型和免费输入/输出 token 由当前页面所列为准。",
        "howTo": "登录 Google AI Studio，创建或选择项目后，选择当前支持的 Free tier 模型测试提示词和 API 原型；开始前查看模型页中的 RPM、TPM 和 RPD 限制。",
        "impact": "学生可用它做摘要、文本处理、课程演示和 API 原型，而无需先付费；但不要把免费层误当作长期无限吞吐。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明，它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU、TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，用 Google 账号新建或导入 notebook；需要时在运行时设置中切换 GPU/TPU，并将 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；分享前应检查输出、密钥和个人数据，避免无意泄露敏感信息。",
        "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方页面说明，verified students 可获得 Copilot Student、GitHub AI Credits 与有限的 chat/agent 权益，并能在支持的编辑器中使用代码补全。",
        "howTo": "访问 Student Developer Pack，完成学生资格验证并启用 Copilot Student；在支持编辑器中使用代码补全，并在 GitHub 账户中查看 AI Credits 和 chat/agent 的可用状态。",
        "impact": "学生可以把这些权益用于课程项目、作业和学习路径，减少样板代码工作；生成代码仍需本地测试、许可证审查和人工检查。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，且仅通过 auto model selection 提供。具体 credits 数量、验证材料和地区例外官方未说明。",
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
    "intro": "精选 9 月 18–19 日可免费阅读全文的 BBC、The Guardian 与 NPR 文章，避开全部既有 URL 和标题，覆盖 AI 政策、公共预算与媒体自由；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "Trump says US will form 'AI Force' and appoint an artificial intelligence tsar",
        "source": "BBC",
        "published": "2026-09-19",
        "url": "https://www.bbc.co.uk/news/articles/cqlykr2vrv04o",
        "readingTime": "7",
        "topic": "科技趋势 / 公共治理",
        "summary": "BBC 报道了美国政府围绕 AI 安全和监管展开的新一轮争论：一方面，AI 研究者和企业高管警告超级智能与安全风险，另一方面，特朗普政府正在考虑建立更集中、以国家安全为导向的 AI 统筹机制。文章以“AI Force”和“AI tsar”提出政策方向，说明国家治理并不只是增加监管，而是要协调军事、技术和政治利益，确保 AI 能力发展不脱离公共责任。它还强调人工智能更快发展所带来的治理滞后问题，适合用于讨论国家能力、法规边界与技术信任之间的关系。",
        "reason": [
          "AI 安全、国家治理和公共政策是科技趋势类高频主题。",
          "文章由研究者警告—企业回应—政策回应的链条展开，论证层次清晰。",
          "可积累 regulation、super intelligence、oversight、legislation 等抽象词。",
          "题目可考美国治理范式、监管滞后和企业信任之间的张力。",
          "写作上可借鉴“事实风险—政策回应—制度争议”的结构。"
        ],
        "vocabulary": [
          { "word": "regulation", "phonetic": "/ˌreɡjʊˈleɪʃən/", "part": "n.", "translation": "监管" },
          { "word": "oversight", "phonetic": "/ˈəʊvəsaɪt/", "part": "n.", "translation": "监督；监管" },
          { "word": "super intelligence", "phonetic": "/ˈsuːpər ɪnˈtɛlɪdʒəns/", "part": "n.", "translation": "超级智能" },
          { "word": "legislation", "phonetic": "/ˌledʒɪˈsleɪʃən/", "part": "n.", "translation": "立法" },
          { "word": "malicious activity", "phonetic": "/məˈlɪʃəs ækˈtɪvəti/", "part": "n.", "translation": "恶意活动" },
          { "word": "keep pace", "phonetic": "/kiːp peɪs/", "part": "phr.", "translation": "跟上步伐" },
          { "word": "mandatory", "phonetic": "/ˈmændətəri/", "part": "adj.", "translation": "强制性的" },
          { "word": "monitoring", "phonetic": "/ˈmɒnɪtərɪŋ/", "part": "n.", "translation": "监测" },
          { "word": "governance", "phonetic": "/ˈɡʌvənəns/", "part": "n.", "translation": "治理" },
          { "word": "safety", "phonetic": "/ˈseɪfti/", "part": "n.", "translation": "安全" }
        ],
        "sentences": [
          {
            "original": "The warnings have prompted US lawmakers to propose legislation around the technology.",
            "analysis": [
              "主干是 The warnings have prompted lawmakers to propose legislation。",
              "around the technology 修饰 legislation，说明立法对象是 AI 相关领域。",
              "prompted 表明外部警示导致政策动作，体现因果逻辑。",
              "该句适合分析“风险—立法—回应”的新闻表达。"
            ],
            "translation": "这些警告促使美国立法者提议围绕该技术制定立法。"
          },
          {
            "original": "The world should trust that we are going to do the right thing because it's the right thing and we feel the magnitude of this.",
            "analysis": [
              "是典型的价值判断句，that 从句承接 trust 的内容。",
              "because it's the right thing and we feel the magnitude of this 形成双重理由。",
              "magnitude of this 是高度抽象的名词短语，强调风险与责任的重大性。",
              "该句适合练习作者立场与价值论证的表达。"
            ],
            "translation": "世界应相信，我们会因为这是正确的事而做正确的事，因为我们也清楚这一问题的严重程度。"
          },
          {
            "original": "Major AI companies have been racing to develop better systems, including creating what they call super intelligence.",
            "analysis": [
              "主干是 companies have been racing to develop better systems。",
              "including creating what they call super intelligence 是现在分词结构补充说明。",
              "what they call super intelligence 体现记者对术语的准确认同。",
              "该句强调 AI 发展与企业竞赛的速度特征。"
            ],
            "translation": "大型 AI 公司一直在竞相开发更强的系统，其中包括创造他们称之为超级智能的技术。"
          }
        ]
      },
      {
        "title": "Brazil’s Lula announces higher welfare payments and free weight-loss jabs ahead of election",
        "source": "The Guardian",
        "published": "2026-09-18",
        "url": "https://www.theguardian.com/world/2026/sep/18/brazil-lula-welfare-payments-weight-loss-jabs-election",
        "readingTime": "7",
        "topic": "经济 / 政治 / 公共健康",
        "summary": "The Guardian 报道了巴西总统卢拉在大选前推出的社会保障调整：一方面提高主要现金转移计划的金额，另一方面承诺为民众提供免费减重针剂。文章通过对比反对派批评与支持者辩护，展示了公共福利、选举政治和预算责任之间的复杂关系。它不只关注政策本身，也讨论这些举措是否符合法律、是否会改变选民意愿，以及相似政策在此前曾被如何评价，这使本文兼具经济、政治和制度分析价值。",
        "reason": [
          "社会福利、预算与选举政治是常见的经济社会热点。",
          "文章采用争论—背景—类比—制度评论的结构，论证链条完整。",
          "可积累 welfare、cash-transfer、inflation、incumbent、electoral 等高频词。",
          "题目可考判断政策如何与选举政治结合，以及作者如何平衡事实与批评。",
          "写作上适合练习从政策措施入手，转向利益冲突与法律界限。"
        ],
        "vocabulary": [
          { "word": "welfare", "phonetic": "/ˈwelfeə/", "part": "n.", "translation": "福利" },
          { "word": "cash-transfer", "phonetic": "/kæʃ ˈtrænsfɜː/", "part": "n.", "translation": "现金转移计划" },
          { "word": "inflation", "phonetic": "/ɪnˈfleɪʃən/", "part": "n.", "translation": "通货膨胀" },
          { "word": "incumbent", "phonetic": "/ɪnˈkʌmbənt/", "part": "n.", "translation": "在任者" },
          { "word": "runoff", "phonetic": "/ˈrʌnɒf/", "part": "n.", "translation": "决选；第二轮投票" },
          { "word": "eligible", "phonetic": "/ˈelɪdʒəbl/", "part": "adj.", "translation": "符合资格的" },
          { "word": "electoral", "phonetic": "/ɪˈlɛktərəl/", "part": "adj.", "translation": "选举的" },
          { "word": "vulnerable", "phonetic": "/ˈvʌlnərəbəl/", "part": "adj.", "translation": "弱势的；脆弱的" },
          { "word": "purchasing power", "phonetic": "/ˈpɜːtʃəsɪŋ ˈpaʊər/", "part": "n.", "translation": "购买力" },
          { "word": "budgetary", "phonetic": "/bʌdʒɪˈtɛri/", "part": "adj.", "translation": "预算的" }
        ],
        "sentences": [
          {
            "original": "The rise in the monthly payment, from about £98 to £113, that he announced on Thursday is due to take effect on 19 October, just before the likely runoff vote on 25 October.",
            "analysis": [
              "主干是 The rise ... is due to take effect on 19 October。",
              "from about £98 to £113 说明增幅和基数，增添数量信息。",
              "that he announced on Thursday 是定语从句修饰 payment。",
              "just before the likely runoff vote... 把政策与选举时间准确关联，体现报道的政治脉络。"
            ],
            "translation": "他周四宣布的月度补贴将从约 98 英镑提高到 113 英镑，并将于 10 月 19 日生效，恰好在 10 月 25 日可能举行的第二轮投票前。"
          },
          {
            "original": "Lula said it was not really an increase, but an adjustment in line with inflation to 'protect the purchasing power of the most vulnerable families'.",
            "analysis": [
              "not really an increase, but ... 是典型的辩解结构。",
              "in line with inflation 明确说明调整理由，强调政策依据。",
              "protect the purchasing power ... 是价值判断型措辞，强化政策正当性。",
              "该句适合分析“政策理由—价值表达—政治防御”的交织。"
            ],
            "translation": "卢拉表示，这并不是真正的涨幅，而是与通胀保持一致的调整，用来“保护最弱势家庭的购买力”。"
          },
          {
            "original": "He said that although Lula, like his predecessor, is also being criticised for unveiling a package of benefits on the eve of the election...",
            "analysis": [
              "该句使用 that 从句表达作者引述的观点。",
              "although ... is also ... 形成对比，让作者保留对两种情况的区分。",
              "on the eve of the election 说明举措时间敏感性。",
              "该句适合分析“前后对比 + 语气保留”的新闻写作。"
            ],
            "translation": "他表示，尽管卢拉像前任一样也因在选举前夕发布一整套福利方案而受到批评……"
          }
        ]
      },
      {
        "title": "CNN, MS NOW, Politico reporters denied access to White House following Trump ban",
        "source": "NPR",
        "published": "2026-09-19",
        "url": "https://www.npr.org/2026/09/19/nx-s1-5974854/trump-cnn-msnow-politico-ban",
        "readingTime": "8",
        "topic": "社会 / 媒体 / 公共治理",
        "summary": "NPR 报道了特朗普政府对 CNN、MS NOW 和 Politico 记者实施进出白宫禁令的事件，并从新闻自由、宪法原则和政治权力之间的关系展开讨论。文章叙述了禁令生效的过程、媒体机构的反应和 White House Correspondents' Association 的立场，体现出一场关于新闻自由、执政权与美国政治文化的深层冲突。整体上它很适合讨论“政府如何界定报道对象”和“是否能以批评为由剥夺媒体进入权”的议题。",
        "reason": [
          "新闻自由、媒体边界和宪法原则是公共治理与社会议题的经典组合。",
          "文章按“禁令—反应—法律争议—历史类比”推进，结构非常清晰。",
          "可积累 access、First Amendment、arbitrary、scrutinize、democracy 等词。",
          "题目可考作者如何用事实与法律来评估政府权力边界。",
          "写作上适合练习“事件—反应—法律判断—历史例证”的组织方式。"
        ],
        "vocabulary": [
          { "word": "access", "phonetic": "/ˈækses/", "part": "n.", "translation": "进入权；获取" },
          { "word": "First Amendment", "phonetic": "/fɜːst əˈmɛndmənt/", "part": "n.", "translation": "美国宪法第一修正案" },
          { "word": "arbitrary", "phonetic": "/ˈɑːbɪtrəri/", "part": "adj.", "translation": "任意的；武断的" },
          { "word": "scrutinize", "phonetic": "/ˈskruːtɪnaɪz/", "part": "v.", "translation": "仔细审查" },
          { "word": "coverage", "phonetic": "/ˈkʌvərɪdʒ/", "part": "n.", "translation": "报道；覆盖" },
          { "word": "journalism", "phonetic": "/ˈdʒɜːnəlɪzəm/", "part": "n.", "translation": "新闻业；新闻报道" },
          { "word": "intimidate", "phonetic": "/ɪnˈtɪmɪdeɪt/", "part": "v.", "translation": "威胁；恐吓" },
          { "word": "democracy", "phonetic": "/dɪˈmɒkrəsi/", "part": "n.", "translation": "民主" },
          { "word": "press conference", "phonetic": "/pres ˈkɒnfərəns/", "part": "n.", "translation": "新闻发布会" },
          { "word": "constitution", "phonetic": "/ˌkɒnstɪˈtjuːʃən/", "part": "n.", "translation": "宪法" }
        ],
        "sentences": [
          {
            "original": "Trump said in a Truth Social post on Friday he was banning these outlets from the White House, citing negative coverage of his administration.",
            "analysis": [
              "主干是 Trump said ... he was banning ...。",
              "in a Truth Social post on Friday 提供了时间和传播渠道背景。",
              "citing negative coverage of his administration 正说明禁令的理由。",
              "该句兼具事实与归因，适合分析新闻中的“动机—行为—证据”结构。"
            ],
            "translation": "特朗普在周五的 Truth Social 帖文中表示，他正在禁止这些媒体进入白宫，并以其对政府的负面报道为由。"
          },
          {
            "original": "The American people, through a free and independent press, must be able to scrutinize those elected to power.",
            "analysis": [
              "The American people, through a free and independent press, 是句子主语。",
              "must be able to scrutinize ... 强调新闻自由与公众监督的必要性。",
              "those elected to power 是对政治权力的概括，突出监督对象。",
              "适合练习“原则—公众责任—政治权力”三段式。"
            ],
            "translation": "通过自由独立的新闻界，美国人民必须能够监督那些被选举上台的人。"
          },
          {
            "original": "The ban is, on its face, unconstitutional.",
            "analysis": [
              "主干是 The ban is unconstitutional。",
              "on its face 是固定表达，表示从表面上看。",
              "unconstitutional 直接触发法理讨论，强化了争议性质。",
              "这是一句短而重的法律判断，适合写作中总结观点。"
            ],
            "translation": "从表面上看，这项禁令违宪。"
          }
        ]
      }
    ]
  }
};

const issue20260919 = {
  "date": "2026-09-19",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 17–18 日 GitHub 官方更新，并复核 9 月 19 日仍可用的免费资源；价格、额度、标准、账号资格和地区说明全部按官方来源写明。",
    "updates": [
      {
        "event": "GitHub Copilot code review 改进 review experience（2026-09-18）",
        "summary": "GitHub 官方 changelog 说明，Copilot code review 现在会更清晰地展示 review 的进展状态：Open、Resolved since last review、Previously missed findings，并在批量接受建议时生成更有用的 commit message，同时改进了自动解决已处理评论的规则。",
        "howTo": "在 GitHub pull request 页面请求 Copilot review；查看 review overview 中的 Open / Resolved since last review / Previously missed 分类，再在批量建议对话框中接受建议并检查生成的 commit title 和 description。",
        "impact": "学生在课程项目、实验室 PR 和作业评审时，更容易看到哪些问题已修复、哪些仍待人工核验；这减少了重复阅读代码与 review 上下文的耗时，也有助于在提交前更顺畅地给出更清楚的提交说明。",
        "free": "官方说明该能力现在 generally available，并面向 GitHub Copilot 用户；统一价格、个人或学生免费额度、地区差异和计划门槛官方未说明。",
        "category": "AI 编程 / 代码评审",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience"
        }
      },
      {
        "event": "Copilot impact dashboard 现显示 feature engagement（2026-09-17）",
        "summary": "GitHub 官方 changelog 宣布，Copilot impact dashboard 现在会统计活跃用户在 28 天窗口中是否定期使用关键 Copilot 功能；此外 enterprise 和 organization 28-day aggregate report 新增 feature engagement 和 AI adoption phase 统计。",
        "howTo": "企业 owner 或 billing manager 在 GitHub Copilot usage metrics API 或 dashboard 中查看 feature engagement，按 code completion、agent edit、passive/active Copilot code review、Copilot cloud agent、Copilot CLI 和 Copilot app 维度筛选，再决定培训或配置重点。",
        "impact": "学生实验室和课程团队可据此判断哪些 Copilot 功能真的在团队里被常态化使用，而不是只看是否开通；这帮助团队更精准地决定培训内容和组织级策略。",
        "free": "官方明确该功能面向 enterprise 和 organization 28-day aggregate report，并要求 View Copilot Metrics 权限；具体免费额度、地区差异、个人计划可用性和账号资格官方未说明。",
        "category": "AI 编程 / 团队采纳",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement"
        }
      },
      {
        "event": "GitHub Copilot weekly releases：auto model selection 和 Sentry 集成（2026-09-18）",
        "summary": "GitHub 官方 weekly changelog 说明，本周 Copilot 新增 auto model selection 的 efficiency / balance / intelligence 三档、代码 review 的 shell tools 与 Lite review 合并、Sentry 集成，以及 VS Code agents 在本地 Dev Containers 和 PR 创建上的改进。",
        "howTo": "在 VS Code、Copilot CLI 或 Copilot app 中打开模型选择器，按任务难度切换 Efficiency / Balance / Intelligence；在 Copilot app 中连接 Sentry canvas，从 crash report 跳转到代码修复；在 Agents 窗口启用本地 Dev Containers 并创建 pull request。",
        "impact": "学生可把简单任务放在低成本模式，把复杂评审和修复任务切到更强能力档位，并利用 Sentry 从真实报错出发修复问题；但仍需人工复核 diff、测试和安全检查。",
        "free": "官方说明功能在不同客户端逐步 rollout，并按实际选择的模型计费；统一免费额度、个人计划可用性、地区例外和具体账户资格官方未说明。",
        "category": "AI 编程 / 生产力工具",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适用于日常提问，并明确写出所有计划都受 rolling five-hour session window 影响，没有固定消息数。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始使用；在 Settings > Usage 中查看当前会话窗口和使用状态，达到限制后等待重置，不要把网页免费计划与 API 免费额度混为一谈。",
        "impact": "学生可用于整理提纲、概念解释和语言润色，再自行核对事实、引用和计算；长文和高频研究前先检查正在使用的 session 限制。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session 限制；固定消息数、是否需要手机号、地区资格和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的 Free tier，并说明开发者可以在有限模型和免费输入/输出 token 上构建原型实验。",
        "howTo": "登录 Google AI Studio，创建或选择项目，确认当前支持的 Free tier 模型；用小规模请求测试提示词和 API 原型，并在模型页面查看 RPM、TPM、RPD 等限制。",
        "impact": "学生可用它做摘要、分类、课程演示和功能原型，并记录请求次数与 token 用量；不要把 Free tier 当作长期无限吞吐或生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中切换 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；分享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 Copilot Student，包含 unlimited code completions、GitHub AI Credits，以及通过 auto model selection 提供的有限 chat 和 agent 使用。",
        "howTo": "访问 Student Developer Pack，完成学生资格验证并启用 Copilot Student；在支持的编辑器中使用补全，并在 GitHub 账户中查看 AI Credits 和 chat/agent 可用情况。",
        "impact": "学生可用补全减少样板代码工作，把有限 chat/agent 用于解释、测试和学习；生成代码仍需测试、许可证检查和人工核对。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
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
    "intro": "本期精选 9 月 17–18 日 BBC 与 The Guardian 可免费阅读全文的文章，避开全部既有 URL 和标题，覆盖 AI 风险、治理与技术监管；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "Why are there concerns AI could threaten humanity, and how real are they?",
        "source": "BBC",
        "published": "2026-09-17",
        "url": "https://www.bbc.co.uk/news/articles/c790xvnzgnno",
        "readingTime": "7",
        "topic": "科技趋势 / AI 风险",
        "summary": "BBC 报道围绕“AI 是否真的可能威胁人类”展开，先交代研究者、专家和企业高管为何担忧：随着系统能力提升，智能体可能获得更强自主性，进而在网络、国家安全和生物威胁等领域产生难以控制的后果。文章同时指出，这类警告有时基于假设和极端情景，而非已发生的实证事实；真正值得关注的，可能是现有的深度伪造、网络攻击、信息操纵和安全治理缺口。整篇文章把 existential risk 和现实威胁并置，强调在讨论人工智能的“未来风险”时，不能完全忽略当下已经出现的现实伤害。",
        "reason": [
          "AI 风险、监管与现实威胁是科技趋势类高频考点，适合做议论文阅读。",
          "文章用“假设风险—现实风险—治理建议”的顺序展开，论证层次清楚。",
          "可积累 existential risk、hyperbole、autonomy、cyber-attack 等高频抽象和安全词。",
          "题目可考作者对极端威胁和现实威胁的区分，以及它们对公众认知和政策讨论的影响。",
          "写作上可借鉴“先承认风险，再强调证据边界，再谈治理价值”的结构。"
        ],
        "vocabulary": [
          { "word": "endanger", "phonetic": "/ɪnˈdeɪndʒə/", "part": "v.", "translation": "危及；使处于危险中" },
          { "word": "autonomy", "phonetic": "/ɔːˈtɒnəmi/", "part": "n.", "translation": "自主性；自决权" },
          { "word": "espionage", "phonetic": "/ˈespiəˌnɑːʒ/", "part": "n.", "translation": "间谍活动；间谍行为" },
          { "word": "hyperbole", "phonetic": "/haɪˈpɜːbəli/", "part": "n.", "translation": "夸张；夸大之词" },
          { "word": "deepfake", "phonetic": "/ˈdiːpfeɪk/", "part": "n.", "translation": "深度伪造" },
          { "word": "misinform", "phonetic": "/ˌmɪsɪnˈfɔːm/", "part": "v.", "translation": "误导；提供错误信息" },
          { "word": "prophetic", "phonetic": "/prəˈfetik/", "part": "adj.", "translation": "预言性的；先知般的" },
          { "word": "scenario", "phonetic": "/səˈnɑːriəʊ/", "part": "n.", "translation": "情景；设想" },
          { "word": "regulation", "phonetic": "/ˌreɡjʊˈleɪʃən/", "part": "n.", "translation": "监管；规则" },
          { "word": "threat", "phonetic": "/θret/", "part": "n.", "translation": "威胁" }
        ],
        "sentences": [
          {
            "original": "AI researchers, experts and bosses worried about the technology's potential to endanger humanity have outlined unsettling scenarios.",
            "analysis": [
              "主干是 experts and bosses have outlined scenarios，前置定语说明担心对象。",
              "worried about ... 是过去分词短语，修饰主语，说明他们的立场和焦虑来源。",
              "potential to endanger humanity 提出未来风险的抽象层次，适合分析“潜在威胁”的表达。",
              "unsettling scenarios 形容词和名词搭配，强调情景的不安和严重性。"
            ],
            "translation": "担心该技术可能危及人类的 AI 研究者、专家和企业高管已勾勒出令人不安的各种情景。"
          },
          {
            "original": "These are tools given the ability to execute tasks and actions independently.",
            "analysis": [
              "主干是 These are tools，后置分词短语 given ... independently 修饰 tools。",
              "given the ability to execute tasks and actions independently 强调自主执行能力。",
              "independently 突出智能体分离人类控制的关键特征。",
              "该句适合分析“工具被赋予更高自主性”这一技术变化的表述方式。"
            ],
            "translation": "这些是被赋予独立执行任务和行动能力的工具。"
          },
          {
            "original": "However, such warnings are prophetic, hypothetical and, for some, complete hyperbole.",
            "analysis": [
              "However 起到转折作用，表示作者将把风险分析转向更现实的层面。",
              "are prophetic, hypothetical and ... 形成三个并列表语，分别说明 warning 的特征。",
              "for some 是插入语，说明不同群体对这些警示的接受程度不同。",
              "complete hyperbole 很强的评价性表达，体现批评式立场，适合做词义辨析。"
            ],
            "translation": "然而，这种警告在某些人看来既带有预言性质，也具有假设性，甚至完全夸大其词。"
          }
        ]
      },
      {
        "title": "‘A critical moment’: concern UK is not up to speed in acting on AI risks",
        "source": "The Guardian",
        "published": "2026-09-18",
        "url": "https://www.theguardian.com/technology/2026/sep/18/a-critical-moment-concern-uk-is-not-up-to-speed-in-acting-on-ai-risks",
        "readingTime": "10",
        "topic": "科技趋势 / 公共治理",
        "summary": "The Guardian 报道英国政府在 AI 安全治理方面存在“制度断层”：前政府曾推进立法与安全评估，但新任政府更关注国内财政与生活成本，部分官员担心 AI 风险已经从政策议程中淡出。文章从人工智能可能造成的灾难性风险切入，追溯英国此前在 AI 安全领域的国际协调与研究投入，再展示政界与产业之间对于监管权威和制度速度的分歧。结论不是否定创新，而是强调英国若想保持与美国、中国等国家竞争，不得不在安全标准和国际合作上更快行动。",
        "reason": [
          "AI 安全、国家治理和国际合作是技术政策中的关键议题，适合考研英语二阅读。",
          "文章从“政策停滞”出发，回到历史脉络，再落到国际协作与监管不足，论证链很完整。",
          "可积累 existential threat、regulation、safety institute、coordination 等高阶表达。",
          "题目与结构适合考主旨、因果、作者态度和政策建议的题型。",
          "写作上可借鉴“问题提出—历史背景—现实焦虑—政策需求”的层次。"
        ],
        "vocabulary": [
          { "word": "existential threat", "phonetic": "/ˌeɡzɪˈstenʃəl θret/", "part": "n.", "translation": "生存性威胁" },
          { "word": "regulate", "phonetic": "/ˈreɡjʊleɪt/", "part": "v.", "translation": "监管；约束" },
          { "word": "coordination", "phonetic": "/kəʊˌɔːdɪˈneɪʃən/", "part": "n.", "translation": "协调；协同" },
          { "word": "frontier", "phonetic": "/ˈfrʌntɪə/", "part": "adj./n.", "translation": "前沿的；前沿" },
          { "word": "safety regime", "phonetic": "/ˈseɪfti reɪˌʒiːm/", "part": "n.", "translation": "安全制度；监管体系" },
          { "word": "legislate", "phonetic": "/ˈledʒɪsleɪt/", "part": "v.", "translation": "立法" },
          { "word": "compliance", "phonetic": "/kəmˈplaɪəns/", "part": "n.", "translation": "遵守；合规" },
          { "word": "fragmentation", "phonetic": "/ˌfræɡmənˈteɪʃən/", "part": "n.", "translation": "碎片化；分散" },
          { "word": "convene", "phonetic": "/kənˈviːn/", "part": "v.", "translation": "召开；召集" },
          { "word": "dilemma", "phonetic": "/dɪˈlemə/", "part": "n.", "translation": "困境；进退两难" }
        ],
        "sentences": [
          {
            "original": "The first duty of government is to keep people safe.",
            "analysis": [
              "主干是 The first duty of government is to keep people safe，属于经典的政策伦理句型。",
              "first duty 强调政府职责的优先级与责任归属。",
              "keep people safe 是高度概括的价值判断，适合分析政府职责表达。",
              "该句能直接用于论证型写作中的“职责—价值—行动”逻辑。"
            ],
            "translation": "政府的首要职责是保障人民安全。"
          },
          {
            "original": "The government’s response to an existential threat cannot be to throw its hands up in the air and say there is nothing we can do.",
            "analysis": [
              "主干是 The government’s response cannot be...，否定判断很强。",
              "to throw its hands up in the air and say there is nothing we can do 是对被否定行为的具体描述。",
              "existential threat 提升议题层次，暗含超越普通风险的国际性威胁。",
              "句中用 and 连接两个动作，形成僵化无作为的形象化描述。"
            ],
            "translation": "面对生存性威胁，政府不能只是束手无策地说我们无能为力。"
          },
          {
            "original": "If the US and China do not figure this out, the UK is unlikely to deliver a safe environment on its own.",
            "analysis": [
              "If 条件句引出国际环境与国家能力之间的关系。",
              "figure this out 是口语化但熟悉的表述，强调共同解决问题的必要。",
              "the UK is unlikely to deliver a safe environment on its own 表达国家单边能力有限。",
              "句子适合分析条件句的因果逻辑与国际协作的必要性。"
            ],
            "translation": "如果美国和中国都无法解决这个问题，英国就不太可能单独打造一个安全环境。"
          }
        ]
      }
    ]
  }
};

const issue20260918 = {
  "date": "2026-09-18",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 17 日 GitHub 官博更新，并复核 9 月 18 日仍可用的免费资源；所有价格、额度、账号资格与地区说明均按官方页面实时说明，未写明处明确标注。",
    "updates": [
      {
        "event": "GitHub Copilot 影响面板新增功能参与度（2026-09-17）",
        "summary": "GitHub 官方 changelog 表明，Copilot impact dashboard 现在会展示关键功能的活跃使用率，企业管理员可以快速判断哪些体验已被广泛采用，哪些需要更多启用与培训。",
        "howTo": "登录 GitHub Enterprise 或组织管理页，打开 Copilot impact dashboard；按功能分项查看 active users 和 28-day engagement，并结合训练材料按照 adoption 较低的模块调整启用方式。",
        "impact": "学生团队可用这一面板判断是否应该在课程项目中推广代码补全、chat、agent 或 custom instructions；如果某项功能用得少，就应补充文档、训练和配置，而不是盲目扩张。",
        "free": "官方说明该功能面向 GitHub 企业和组织管理者，可在 Copilot impact dashboard 和 enterprise/organization report APIs 中查看；个人计划、统一免费额度、地区资格和学生权益官方未说明。",
        "category": "AI 编程 / 组织管理",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement"
        }
      },
      {
        "event": "GitHub Agentic CLI 自定义项已加入使用量 API（2026-09-17）",
        "summary": "GitHub 官方 changelog 宣布，Copilot CLI 的 agentic activity metrics 现已纳入 usage metrics API，包括 skills、custom agents、MCP servers、slash commands 和 plugins 的跟踪字段。",
        "howTo": "在组织或企业级报告中拉取 per-user 和 aggregate 的 1-day/28-day metrics；对比用户级数据和汇总数据，识别哪些 CLI 自定义项真正被使用，以及谁在高频调用特定工具。",
        "impact": "学生团队可用这类指标评估课堂项目中哪些 agentic workflow 最有效，例如定制命令、MCP server 或 plugin；但仍需核对是否存在误用、环境差异和安全边界问题。",
        "free": "官方说明该能力属于 GitHub Copilot 企业和组织的 usage metrics API；个人计划、统一免费额度、地区资格和学生权益官方未说明。",
        "category": "AI 编程 / 工具观测",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api"
        }
      },
      {
        "event": "GitHub Actions 工作流执行保护 GA（2026-09-17）",
        "summary": "GitHub 官方 changelog 宣布，GitHub Actions 的 workflow execution protections 现已一般可用，可按 allowlist 控制谁能触发工作流、允许哪些事件启动，以及在运行前执行 actor 和 event rules 校验。",
        "howTo": "在 GitHub Enterprise、组织或仓库设置中启用 execution protection，并配置 actor rules 和 event rules；先在测试分支验证最小权限触发条件，再将同一策略扩展到正式发布流程。",
        "impact": "学生团队可以把 CI/CD 的触发条件收紧，减少 fork、PR、第三方事件和意外分支触发导致的实验性代码执行；但仍要保留日志审计和回滚路径，不应完全依赖规则替代人工审查。",
        "free": "官方说明这一能力已在 GitHub Enterprise、组织和仓库中 generally available；统一免费额度、个人计划资格和地区例外官方未说明。",
        "category": "AI 安全 / CI 守护",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明，Free 计划适合日常提问，并以 rolling five-hour session window 约束会话连续性。",
        "howTo": "打开 claude.ai 注册并登录，选择 Free；在 Settings > Usage 查看当前窗口和会话状态，长文和高频提问前先确认等待重置时间。",
        "impact": "学生可用来梳理论文提纲、概念解释和语言润色；长文本与反复调试前应拆分内容，避免一个会话耗尽上限。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session window；固定消息数、账号资格、地区范围及 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的免费层，允许开发者在有限模型与免费输入/输出 token 上启动原型实验。",
        "howTo": "登录 Google AI Studio，创建项目后选择免费层模型测试提示词和 API 原型；在同一定价页查看当前支持模型与 token 约束，避免把 free tier 当成生产级容量。",
        "impact": "学生可以在课题原型、文本分类、摘要和演示端点上快速验证思路，再决定是否需要更高容量或付费计划。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合教育和轻量研究实验。",
        "howTo": "打开 Colab，新建或导入 notebook，并在运行时设置中切换 GPU/TPU；保存工作至 Drive 或 GitHub，提前清理不需要的密钥和数据。",
        "impact": "学生可直接做课程代码、数据分析和小型模型实验，减少本地环境配置成本；但使用高性能资源前仍需遵守 free tier 约束和安全规则。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方权益页说明，verified students 可获得 Copilot Student、AI Credits 以及 limited chat 和 agent usage，适合学习和项目开发。",
        "howTo": "访问 Student Developer Pack 完成学生身份验证，并在 GitHub 账户中启用 Copilot Student；在支持的编辑器中使用补全和有限 chat/agent 功能并维持代码审查习惯。",
        "impact": "学生可把补全用于减少样板代码，利用有限 AI credits 和 chat/agent 完成解释、测试和研究提问；所有生成代码仍需本地测试和人工核验。",
        "free": "官方权益面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Hugging Face Spaces 免费 Static Spaces 与 ZeroGPU",
        "summary": "Hugging Face 官方文档说明 Static Spaces 对所有用户免费；状态良好的免费个人账号还可托管最多 2 个 ZeroGPU Gradio Spaces。",
        "howTo": "登录 Hugging Face，创建 Space 并选择 Static HTML；若要运行 Gradio，请使用状态良好的免费账号并确保 ZeroGPU Space 数量不超过 2，按文档检查当前资源状态。",
        "impact": "学生可把课程演示、交互式网页和轻量模型 demo 部署为可分享链接，降低本地部署门槛；如果需要更高算力或 Docker，请优先确认是否会进入付费计划。",
        "free": "官方明确 Static Spaces 免费，免费个人账号最多 2 个 ZeroGPU Gradio Spaces；常规 Gradio/Docker compute 需要付费，地区和 ZeroGPU 排队额度官方未说明。",
        "category": "免费部署 / 开放模型生态",
        "source": {
          "name": "Hugging Face 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces-overview"
        }
      }
    ]
  },
  "english": {
    "intro": "精选 9 月 16—17 日可免费阅读全文的 BBC/NPR 文章，避开既有 URL 和标题，覆盖环境风险、医疗政策与心理准备；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "People's houses are collapsing into the ocean. FEMA gives them no other option",
        "source": "NPR",
        "published": "2026-09-17",
        "url": "https://www.npr.org/2026/09/17/nx-s1-5844642/fema-homes-collapse-ocean-climate-north-carolina-maine",
        "readingTime": "8",
        "topic": "环境 / 公共政策",
        "summary": "NPR 报道了北卡罗来纳海岸线上一批房屋因海平面上升、风暴侵蚀和海水入侵不断被淹没，联邦应急管理署（FEMA）在重建和补助方面给出的选择非常有限。文章以“房子正在掉进海里”作为开头，强调自然灾害在长期加剧，而政策设计和救灾机制却并没有跟上这种变化。报道把个人家庭困境与公共决策连接起来：这不仅是财产损失问题，也涉及撤离、重建、保险和住房安全的中长期治理问题。",
        "reason": [
          "环境变化、灾害治理与公共政策是典型的社会议题，适合考研英语二写作和阅读。",
          "文章以强烈场景导入，再切到政策机制，论证从个人经验扩展到制度层面，结构清晰。",
          "可积累 erosion、relocation、flooding、coastal risk 等环境与政策词汇。",
          "题目可考作者如何把环境变化与灾后补助的制度缺口相联系，并分析其社会影响。",
          "写作上可借鉴“个案—机制—政策—现实代价”的逻辑。"
        ],
        "vocabulary": [
          { "word": "erosion", "phonetic": "/ɪˈrəʊʒən/", "part": "n.", "translation": "侵蚀" },
          { "word": "coastal", "phonetic": "/ˈkəʊstəl/", "part": "adj.", "translation": "沿海的" },
          { "word": "relocate", "phonetic": "/ˌriːˈləʊkeɪt/", "part": "v.", "translation": "搬迁；重新安置" },
          { "word": "flooding", "phonetic": "/ˈflʌdɪŋ/", "part": "n.", "translation": "洪水；淹没" },
          { "word": "disaster", "phonetic": "/dɪˈzɑːstə/", "part": "n.", "translation": "灾难" },
          { "word": "inundation", "phonetic": "/ˌɪnʌnˈdeɪʃən/", "part": "n.", "translation": "淹没；泛滥" },
          { "word": "resilience", "phonetic": "/rɪˈzɪliəns/", "part": "n.", "translation": "韧性；恢复力" },
          { "word": "hazard", "phonetic": "/ˈhæzəd/", "part": "n.", "translation": "危险；危害" },
          { "word": "shelter", "phonetic": "/ˈʃeltə/", "part": "n./v.", "translation": "庇护；躲避" },
          { "word": "compensation", "phonetic": "/ˌkɒmpenˈseɪʃən/", "part": "n.", "translation": "补偿；赔偿" }
        ],
        "sentences": [
          {
            "original": "Richard Foreman's home is stranded in the middle of the beach.",
            "analysis": [
              "主干是 Richard Foreman's home is stranded，句子直接形成强烈画面。",
              "in the middle of the beach 是地点状语，强化房屋与海洋的危险接触。",
              "stranded 具有被困、漂浮停滞的意味，带来强压迫感。",
              "该句是环境灾难报道中典型的场景式开头，适合分析描写技巧。"
            ],
            "translation": "理查德·福尔曼的家被困在海滩中央。"
          },
          {
            "original": "The article shows how climate change is not just a distant forecast, but a present-day reality for people living on the edge.",
            "analysis": [
              "The article shows how ... 是常见议论文句式，建立文章主旨。",
              "not just ... but ... 强调现实性与即时性，体现反转表达。",
              "living on the edge 是比喻性的短语，代表生活在危险边缘。",
              "整句适合分析“现象—机制—个人影响”的写作链条。"
            ],
            "translation": "文章表明，气候变化不仅仅是遥远的预测，而是生活在危机边缘的人们当下的现实。"
          },
          {
            "original": "For many residents, the choice is not between rebuilding and moving on, but between survival and another storm.",
            "analysis": [
              "not between A and B, but between C and D 的结构强烈地突出两难选择。",
              "rebuilding and moving on 与 survival and another storm 形成鲜明对比。",
              "another storm 体现灾害反复发生的现实，具有戏剧性。",
              "该句适合做“灾难现实”型例句，帮助分析并列结构和情感表达。"
            ],
            "translation": "对许多居民来说，选择并非在重建和继续前进之间，而是在生存和下一场风暴之间。"
          }
        ]
      },
      {
        "title": "A year ago, President Trump pledged to lower Medicaid drug prices. Has that happened?",
        "source": "NPR",
        "published": "2026-09-17",
        "url": "https://www.npr.org/2026/09/17/nx-s1-5971066/trump-rx-medicaid-generous-drug-prices-pfizer-favored-nation",
        "readingTime": "7",
        "topic": "健康 / 医疗政策",
        "summary": "NPR 报道了特朗普在去年宣布降低 Medicaid 药价的承诺，并追踪其是否真正落地。文章指出，尽管白宫曾与辉瑞等公司达成自愿降价安排，药企承诺降低部分处方药的价格，但具体执行细节、适用药品与实际惠及范围仍然未完全清晰。报道将政策口号与现实落地差距放到同一篇幅里，突出了医疗费用、公共采购和公司定价权之间复杂的博弈关系。",
        "reason": [
          "医疗政策、药价谈判与公共财政是经济与健康交叉的典型题材。",
          "文章以承诺—执行—未解决问题的方式展开，适合训练“政策宣称与实际结果”的阅读逻辑。",
          "可积累 Medicaid, prescription drug, pricing, discount, taxpayer-funded 等医学和政策词汇。",
          "题目可考作者如何通过追踪落实情况来质疑承诺的有效性。",
          "写作中可借鉴“引发声明—揭示细节不清—呼吁解释”的论证结构。"
        ],
        "vocabulary": [
          { "word": "Medicaid", "phonetic": "/ˈmedɪkeɪd/", "part": "n.", "translation": "医疗补助计划" },
          { "word": "prescription", "phonetic": "/prɪˈskrɪpʃən/", "part": "n.", "translation": "处方；处方药" },
          { "word": "discount", "phonetic": "/ˈdɪskaʊnt/", "part": "n./v.", "translation": "折扣；降价" },
          { "word": "taxpayer-funded", "phonetic": "/ˈtækspeɪər ˈfʌndɪd/", "part": "adj.", "translation": "由纳税人出资的" },
          { "word": "negotiation", "phonetic": "/nɪˌɡəʊʃiˈeɪʃən/", "part": "n.", "translation": "谈判" },
          { "word": "commitment", "phonetic": "/kəˈmɪtmənt/", "part": "n.", "translation": "承诺" },
          { "word": "affordability", "phonetic": "/əˌfɔːdəˈbɪləti/", "part": "n.", "translation": "可负担性" },
          { "word": "public health", "phonetic": "/ˈpʌblɪk helθ/", "part": "n.", "translation": "公共卫生" },
          { "word": "coverage", "phonetic": "/ˈkʌvərɪdʒ/", "part": "n.", "translation": "覆盖范围；保障范围" },
          { "word": "access", "phonetic": "/ˈækses/", "part": "n.", "translation": "获取；可及性" }
        ],
        "sentences": [
          {
            "original": "Pfizer CEO Albert Bourla joined President Trump at the White House last year on Sept. 30 to announce a voluntary agreement to reduce some prescription drug prices.",
            "analysis": [
              "主干是 Pfizer CEO ... joined ... to announce ...，结构清楚。",
              "at the White House 和 on Sept. 30 提供了时间与地点背景。",
              "voluntary agreement 体现政策不是强制性的，而是自愿安排。",
              "该句很适合研究新闻报道中的引语背景与事件安排。"
            ],
            "translation": "去年 9 月 30 日，辉瑞首席执行官阿尔伯特·布尔拉在白宫与特朗普总统共同宣布了一项自愿协议，以降低部分处方药价格。"
          },
          {
            "original": "One element aimed to lower prices in the taxpayer-funded Medicaid program, but the program is still being built.",
            "analysis": [
              "One element aimed to ...，but ... 是典型的让步式转折。",
              "taxpayer-funded Medicaid program 强调公共支付与公共利益。",
              "but the program is still being built 直接说明执行基础不足。",
              "这个句子适合分析“目标—现实落差”的新闻写法。"
            ],
            "translation": "其中一项举措旨在降低由纳税人出资的医疗补助计划中的药价，但这个项目仍在建设中。"
          },
          {
            "original": "Details about which drugs will be discounted remain under wraps.",
            "analysis": [
              "Details ... remain under wraps 是固定表达，说明信息透明度不足。",
              "which drugs will be discounted 引出关键不确定性。",
              "under wraps 强调隐瞒、封闭，与公开透明相对。",
              "该句适合练习被动表达与信息保密语境的用法。"
            ],
            "translation": "哪些药品会被打折的细节仍然未公开。"
          }
        ]
      },
      {
        "title": "War may be coming. Are we psychologically ready?",
        "source": "BBC",
        "published": "2026-09-17",
        "url": "https://www.bbc.co.uk/news/articles/cmn0jke547r5o",
        "readingTime": "8",
        "topic": "社会 / 心理 / 安全",
        "summary": "BBC 文章从“如果英国突然陷入战争，我们是否能做好准备”这一问题出发，讨论公众心理、应急训练和社会韧性。文章没有只停留在战争的军事层面，而是进一步分析人在高压情境下如何应对恐惧、信息混乱和社会分裂，强调心理准备与实物准备同样重要。它指出，真正难以承受的是长期的不确定性，而不是某一瞬间的惊恐本身，因此国家和个人都需要建立清晰流程、稳定沟通和持续心理支持。",
        "reason": [
          "战争、心理准备和社会韧性是社会科学与公共安全类的高价值题材。",
          "文章以设问开头，迅速将抽象问题落到现实生活，适合训练问题导向型写作。",
          "可积累 resilience, mental preparation, emergency, uncertainty 等心理和安全词汇。",
          "题目可考作者如何把个人心理与国家准备结合起来，并强调不确定性管理。",
          "写作上可借鉴“设问—现实—心理—机制—结论”的层次结构。"
        ],
        "vocabulary": [
          { "word": "resilience", "phonetic": "/rɪˈzɪliəns/", "part": "n.", "translation": "韧性；复原力" },
          { "word": "uncertainty", "phonetic": "/ʌnˈsɜːtnti/", "part": "n.", "translation": "不确定性" },
          { "word": "emergency", "phonetic": "/ɪˈmɜːdʒənsi/", "part": "n.", "translation": "紧急情况" },
          { "word": "preparedness", "phonetic": "/prɪˈpeədnəs/", "part": "n.", "translation": "准备状态" },
          { "word": "anxiety", "phonetic": "/æŋˈzaɪəti/", "part": "n.", "translation": "焦虑" },
          { "word": "civilian", "phonetic": "/sɪˈvɪliən/", "part": "n./adj.", "translation": "平民；民用的" },
          { "word": "protocol", "phonetic": "/ˈprəʊtəkɒl/", "part": "n.", "translation": "协议；流程" },
          { "word": "support network", "phonetic": "/səˈpɔːt ˈnetwɜːk/", "part": "n.", "translation": "支持网络" },
          { "word": "panic", "phonetic": "/ˈpænɪk/", "part": "n.", "translation": "恐慌" },
          { "word": "distress", "phonetic": "/dɪˈstres/", "part": "n.", "translation": "痛苦；困扰" }
        ],
        "sentences": [
          {
            "original": "If the UK suddenly found itself at war, would you know what to do?",
            "analysis": [
              "If 引导条件句，形成强行设问式导入。",
              "suddenly found itself at war 是典型的危机情境表达。",
              "would you know what to do? 把个人行动与国家安全相连，增强现实感。",
              "该句适合分析问题导向型标题和情境设定。"
            ],
            "translation": "如果英国突然卷入战争，你知道该怎么做吗？"
          },
          {
            "original": "The real challenge is not just fear itself, but a long period of uncertainty.",
            "analysis": [
              "not just fear itself, but ... 强调重点转移。",
              "a long period of uncertainty 是更抽象的核心问题。",
              "real challenge 体现文章论点：真正难以承受的是持续不安。",
              "该句适合讨论“情绪—不确定性—治理”的组合。"
            ],
            "translation": "真正的挑战不只是恐惧本身，而是长时间的不确定性。"
          },
          {
            "original": "How people prepare emotionally matters as much as what they keep in their cupboards.",
            "analysis": [
              "How people prepare emotionally matters as much as ... 是强论点句。",
              "what they keep in their cupboards 具体化物资准备，形成情感与物资并列。",
              "as much as 体现比较结构，突出心理准备同样重要。",
              "适合分析“心理准备与物理准备并重”的写作逻辑。"
            ],
            "translation": "人们在情绪上如何准备，和他们在橱柜里储备什么一样重要。"
          }
        ]
      }
    ]
  }
};

const issue20260917 = {
  "date": "2026-09-17",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 15 日至 16 日官方 AI 发布，并复核仍可用的免费资源；价格、额度、地区和 rollout 以各官方页面当前说明为准，未说明处明确标注。",
    "updates": [
      {
        "event": "GitHub Copilot 预算申请增加功能正式 GA（2026-09-16）",
        "summary": "GitHub 官方 changelog 宣布，Copilot 成员在 AI credits 用尽后可以直接发起额外预算申请，组织或企业管理员可在设置中审核、批准、调整或拒绝申请，并在批准后立即恢复访问。",
        "howTo": "组织管理员或企业管理员进入 Copilot settings 中的 budget 或 requests from members 页面，查看待审批的成员额度申请；可设置新的额度并点击 Approve and increase。成员在额度超额后可在同一入口发起预算申请，并等待管理员操作。",
        "impact": "学生团队在课程项目和实验室中更容易按需扩展 Copilot 的 AI credits，而不用在仓库里反复重置或临时切换工具；但预算审批仍需管理员审核，并且仅适用于 Copilot Business/Enterprise 的 usage-based billing。",
        "free": "官方说明该功能适用于 GitHub Copilot Business 和 Enterprise 的 usage-based billing；个人计划、统一免费额度、地区覆盖范围和学生资格官方未说明。",
        "category": "AI 编程 / 成本管理",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-16",
          "url": "https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available"
        }
      },
      {
        "event": "GitHub AI Scan 不再要求 CodeQL 默认安装（2026-09-16）",
        "summary": "GitHub 官方 changelog 公告，AI Scan for pull requests 现在即使仓库没有开启 CodeQL default setup 也可运行，扩大了适用范围，并不要求改变现有安全配置层级。",
        "howTo": "在组织或仓库中确认 GitHub code scanning 与 AI Scan 已开启，确保仓库、组织或企业级权限一致；之后对 eligible 仓库提交 pull request 时，AI Scan 会在不依赖 CodeQL default setup 的情况下运行。",
        "impact": "学生团队可在更广的课程仓库中启用 AI 扫描，提高代码审查效率；但仍需要人工审查严重性、修复优先级和依赖漏洞，不应把扫描结果视为已修复结论。",
        "free": "官方说明这是 GitHub Advanced Security 客户的 public preview，且仅支持 github.com 上的组织和个人仓库；GitHub Enterprise Server 暂不支持，且没有说明统一免费额度、个人账户资格和地区覆盖范围。",
        "category": "AI 安全 / 代码扫描",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-16",
          "url": "https://github.blog/changelog/2026-09-16-code-scanning-ai-scan-no-longer-requires-codeql-default-setup"
        }
      },
      {
        "event": "Google 发布 Gemini 3.8 Live 与 Live Extended Thinking（2026-09-15）",
        "summary": "Google 官方博客宣布 Gemini 3.8 Live 和 Gemini 3.8 Live Extended Thinking 上线，目标是为更实时的语音 agent 和更智能对话提供更强的推理与多步任务处理能力。",
        "howTo": "开发者可在 Gemini app、Google Workspace 和 Search 相关入口中测试语音协作能力；想做实时语音应用的开发者则可参考 Google 官方开发者文档，并结合 Gemini 3.5 Transcribe 等语音能力搭建流程。",
        "impact": "学生可以原型化语音助手、实时会议摘要和课程问答助手，但仍需测试稳定性、语音延迟和事实核验，不能把实时 AI 对话直接视为可靠的主导决策工具。",
        "free": "官方博客重点介绍了模型能力和价格相对竞争力，但未说明统一免费层、账号资格、个人用户额度或地区覆盖范围。",
        "category": "AI 语音 / agent",
        "source": {
          "name": "Google 官方博客",
          "published": "2026-09-15",
          "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明，所有计划都存在 rolling five-hour session window 使用限制，Free 计划适合日常提问；付费计划会在此基础上增加更高的会话额度和更大容量。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划使用；在 Settings > Usage 查看当前会话窗口和模型/功能使用情况，达到限制后等待重置，或在付费计划中使用 usage credits。",
        "impact": "学生可以把 Claude 用于概念解释、写作润色、研究提纲和代码审阅的初稿，但长文和高频工作前要先确认当前窗口是否已耗尽。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session window；固定消息数、账号资格、地区范围和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google AI Studio 官方定价页说明，Gemini API 提供 Free tier，包含有限模型访问、免费输入和输出 tokens，以及 Google AI Studio 访问入口。",
        "howTo": "登录 Google AI Studio，创建项目并选择当前 Free tier 可用模型；先在小规模实验中验证提示词与 API 调用，然后再判断是否需要付费生产配置。",
        "impact": "学生可用来做课程演示、文本摘要、工作流原型和 API 调试，不需要先为 token 付费；但不能把免费层当作稳定的生产级承诺。",
        "free": "官方确认存在 Free tier；具体模型、固定额度、重置周期、账号资格和地区说明官方未统一说明，需按当前模型与项目页面查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明，它是无需本地配置的托管 Jupyter Notebook 服务，并提供免费访问 GPU、TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，用 Google 账号新建或导入 notebook；按需在运行时设置中切换 GPU 或 TPU，并把 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可以直接运行课程代码、分析数据和训练小型模型，减少本地环境搭建和硬件门槛；但须注意免费 tier 资源不保证并且会受到使用限制。",
        "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；GPU/TPU 时长、地区例外和统一额度官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方页面说明，verified students 可以获得 GitHub Copilot Student 等学习和开发权益，包含无限代码补全、GitHub AI Credits 和受限的 chat/agent 使用。",
        "howTo": "访问 Student Developer Pack 并完成学生资格验证，然后在 GitHub Education 页面按提示启用 GitHub Copilot Student；在支持的编辑器中使用代码补全，并在账户中查看 AI credits 和 chat/agent 状态。",
        "impact": "学生可以把这些权益用于作业、课程项目和学习路径，同时减少样板代码工作；但输出仍需运行测试、保留代码审查和人工复核。",
        "free": "官方说明面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Hugging Face Spaces 免费 Static Spaces 与 ZeroGPU",
        "summary": "Hugging Face 官方文档说明，Static Spaces 对所有人免费；free personal accounts in good standing 仍可托管最多两个运行在 ZeroGPU 上的 Gradio Spaces，CPU Basic 无需付费。",
        "howTo": "登录 Hugging Face，打开 Spaces 页面选择 Create new Space；若希望托管静态页面，选择 static HTML 即可；若需 Gradio demo，确保账号处于 good standing，并控制在最多两个 ZeroGPU Spaces。",
        "impact": "学生可以把课程演示、轻量模型 demo、作业网页和交互式展示部署成可分享链接，便于答辩和同伴测试；若需要 GPU 或 Docker compute，则需升级到付费计划。",
        "free": "官方明确 Static Spaces 免费，且 free personal accounts 可托管最多两个 ZeroGPU Gradio Spaces；CPU Basic 免费，GPU/compute upgrade 价格与配额按官方 pricing page 为准，地区和配额细则官方未说明。",
        "category": "免费部署 / 开放模型生态",
        "source": {
          "name": "Hugging Face 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces-overview"
        }
      }
    ]
  },
  "english": {
    "intro": "本期选取 2026 年 9 月 16 日可直接免费阅读的 NPR 与 BBC 文章，覆盖 AI 监管与金融政策；每篇提供考研英语二式结构、词汇和短句精读。",
    "articles": [
      {
        "title": "Congress is under pressure to act on AI — here's what that could look like",
        "source": "NPR",
        "published": "2026-09-16",
        "url": "https://www.npr.org/2026/09/16/nx-s1-5969933/congress-ai-regulation",
        "readingTime": "8",
        "topic": "科技趋势 / 公共治理",
        "summary": "NPR 报道指出，尽管美国国会在这周突然加快 AI 监管压力，但真正难点不在是否需要监管，而在于如何监管、由谁监管，以及何时能形成共识。文章以众议院共和党与民主党领导人就 AI 安全的不同表态为切入点，强调 AI 监管已被摆到国家安全、儿童保护和州政府权力边界等议题中。报道接着回顾多年来国会的试探性立法与州层面争议，最终将焦点放在联邦规则和州法规的“预emption”冲突，以及 AI 竞争与安全之间的平衡问题。",
        "reason": [
          "AI 监管与公共政策是科技趋势类高频考点，议题直接且具社会性。",
          "文章用“压力增加—观点分歧—制度冲突—未来路径”推进，论证结构完整。",
          "可积累 regulation, governance, preemption, competitiveness, frontier 等抽象词汇。",
          "题目可考国家安全、州政府权力与联邦监管之间的关系，以及政策推动为何困难。",
          "写作上可借鉴“提出争议—比较不同立场—落到制度冲突—回归治理路径”的层次。"
        ],
        "vocabulary": [
          { "word": "regulation", "phonetic": "/ˌreɡjʊˈleɪʃən/", "part": "n.", "translation": "监管；规则" },
          { "word": "governance", "phonetic": "/ˈɡʌvənəns/", "part": "n.", "translation": "治理；管理" },
          { "word": "frontier", "phonetic": "/ˈfrʌntɪə/", "part": "adj./n.", "translation": "前沿的；前沿" },
          { "word": "moratorium", "phonetic": "/ˌmɒrəˈtɔːriəm/", "part": "n.", "translation": "暂停；暂缓令" },
          { "word": "preempt", "phonetic": "/ˌpriːˈempt/", "part": "v.", "translation": "先发制人地阻止；取代" },
          { "word": "competitiveness", "phonetic": "/kəmˈpetɪtɪv.nəs/", "part": "n.", "translation": "竞争力" },
          { "word": "alignment", "phonetic": "/əˈlaɪnmənt/", "part": "n.", "translation": "一致性；对齐" },
          { "word": "restrict", "phonetic": "/rɪˈstrɪkt/", "part": "v.", "translation": "限制；约束" },
          { "word": "existential", "phonetic": "/ˌeɡzɪˈstenʃəl/", "part": "adj.", "translation": "生存性的；存在论的" },
          { "word": "consensus", "phonetic": "/kənˈsen.səs/", "part": "n.", "translation": "共识" }
        ],
        "sentences": [
          {
            "original": "The real fight, she said, is what governance looks like.",
            "analysis": [
              "主干是 The real fight is ...，she said 作引语标记，突出作者引用说法。",
              "what governance looks like 是名词性从句，承接 fight 的具体内容。",
              "为一个典型的“论题转向”句式，把争论从何时做转到怎样做。",
              "该句适合练习名词从句和引语在议论文中的用法。"
            ],
            "translation": "她说，真正的争论在于治理框架究竟是什么样。"
          },
          {
            "original": "They don't need the government to tell them to slow it down.",
            "analysis": [
              "主干是 They don't need ... to tell them ...，体现诉求与利益逻辑。",
              "slow it down 是短语动词，体现政策中的风险管理表达。",
              "句中使用 they 指代 frontier AI labs，简洁且有代表性。",
              "此句适合分析“自由市场—行业自律—国家监管”的议题张力。"
            ],
            "translation": "他们不需要政府来告诉他们减速。"
          },
          {
            "original": "We are in an AI race against China and the Chinese government is viewing AI as an existential race to win.",
            "analysis": [
              "We are in an AI race... 是整个句子的核心判断，语气直接。",
              "against China 置于 race 之后，突出国家竞争的语境。",
              "as an existential race to win 把 AI 比作生存性的竞争，强化安全和战略语境。",
              "句子可用于练习抽象概念与国家战略叙事的结合。"
            ],
            "translation": "我们正处于一场与中国的 AI 竞赛中，而中国政府正在将 AI 视为一场关乎生存的争夺战。"
          }
        ]
      },
      {
        "title": "US interest rates raised for first time in three years",
        "source": "BBC",
        "published": "2026-09-17",
        "url": "https://www.bbc.co.uk/news/articles/cw4gmlyvj422o",
        "readingTime": "6",
        "topic": "经济 / 金融政策",
        "summary": "BBC 报道了美国联邦储备委员会在近期加息的决定，并指出这是三年来首次上调利率，背后是通胀压力仍存、地缘政治和市场预期对政策的共同影响。文章先交代特朗普此前对降息的持续施压，再说明联储内部多数官员倾向于继续上调或维持高利率，并强调这一举动会提高贷款成本、压缩家庭支出和影响购房决策。整体上，这篇报道既是金融新闻，也是一则关于政策独立性与政治压力的典型议题。",
        "reason": [
          "金融政策和宏观经济是考研英语二中最常见的社会经济主题。",
          "文章用“政治压力—政策决定—市场影响”的顺序展开，结构清晰。",
          "可积累 inflation、mortgage、refinance、policy rate、rate hike 等高频词。",
          "题目可考作者如何把货币政策与政治互动联系起来，并分析利率变化对家庭与消费的影响。",
          "写作上可借鉴“先说明事实，再转入负面影响，再指出未来不确定性”的逻辑。"
        ],
        "vocabulary": [
          { "word": "rate hike", "phonetic": "/reɪt haɪk/", "part": "n.", "translation": "加息" },
          { "word": "inflation", "phonetic": "/ɪnˈfleɪʃən/", "part": "n.", "translation": "通货膨胀" },
          { "word": "mortgage", "phonetic": "/ˈmɔːɡɪdʒ/", "part": "n.", "translation": "抵押贷款；房贷" },
          { "word": "refinance", "phonetic": "/ˌriːˈfaɪnæns/", "part": "v.", "translation": "再融资；重贷" },
          { "word": "debt", "phonetic": "/det/", "part": "n.", "translation": "债务" },
          { "word": "forecast", "phonetic": "/ˈfɔːrkɑːst/", "part": "n./v.", "translation": "预测；预报" },
          { "word": "policymaker", "phonetic": "/ˈpɒlɪsiˌmeɪkə/", "part": "n.", "translation": "政策制定者" },
          { "word": "prime lending rate", "phonetic": "/praɪm ˈlɛndɪŋ reɪt/", "part": "n.", "translation": "优先贷款利率" },
          { "word": "borrower", "phonetic": "/ˈbɒrəʊər/", "part": "n.", "translation": "借款人" },
          { "word": "policy rate", "phonetic": "/ˈpɒlɪsi reɪt/", "part": "n.", "translation": "政策利率" }
        ],
        "sentences": [
          {
            "original": "The Fed's hike is the first rate move in any direction since they were cut in December 2025.",
            "analysis": [
              "主干是 The Fed's hike is the first rate move ...，且设置了明确的时间基准。",
              "since they were cut in December 2025 形成时间比较，强化这是三年后的首次上调。",
              "rate move in any direction 是新闻用语，说明政策方向的变化。",
              "这个句子适合分析“事实 + 时间背景 + 变化方向”的新闻写法。"
            ],
            "translation": "联储的加息是自 2025 年 12 月降息以来首次出现任何方向的利率调整。"
          },
          {
            "original": "The increase could help push up mortgage rates for home buyers and lead to Americans paying more on other types of debt.",
            "analysis": [
              "主句包含 could help push up ... and lead to ...，形成两个并列结果。",
              "mortgage rates and other types of debt 把影响范围扩展到住房和消费信贷。",
              "lead to Americans paying more ... 是典型因果链表达。",
              "该句适合练习“政策变化—家庭成本—连带影响”的衔接。"
            ],
            "translation": "此次加息可能会推高购房者的抵押贷款利率，并使美国人在其他类型债务上的支出增加。"
          },
          {
            "original": "The forecast suggested price rises will ease in the coming years, with inflation predicted to fall steadily to the Fed's target by 2029.",
            "analysis": [
              "主句 The forecast suggested ...，体现报道对未来的判断与预测。",
              "with inflation predicted to fall steadily ... 是伴随状语，说明控制通胀的路径。",
              "by 2029 明确了时间节点，增强政策逻辑的连续性。",
              "句子适合练习“预测 + 时间线 + 通胀目标”的写作结构。"
            ],
            "translation": "预期显示，未来几年价格上涨将会缓和，通胀预计会稳步降到联储到 2029 年的目标水平。"
          }
        ]
      }
    ]
  }
};

const issue20260921 = {
  "date": "2026-09-21",
  "status": "ready",
  "ai": {
    "intro": "本期核验 9 月 17–20 日的官方 AI 更新，并复核 9 月 21 日仍可用的免费资源；价格、额度、地区和 rollout 以官方页面当前说明为准，未写明处一律注明“官方未说明”。",
    "updates": [
      {
        "event": "GitHub Copilot code review 改进 review experience（2026-09-18）",
        "summary": "GitHub 官方 changelog 说明，Copilot code review 现在会更清晰地展示 review 的进展状态：Open、Resolved since last review、Previously missed findings，并在批量接受建议时生成更有用的 commit message，同时改进了自动解决已处理评论的规则。",
        "howTo": "在 GitHub pull request 页面发起 Copilot review；查看 review overview 中的 Open / Resolved since last review / Previously missed 分类，再在批量建议对话框中接受建议并检查生成的 commit title 和 description。",
        "impact": "学生在课程项目、实验室 PR 和作业评审时，更容易看到哪些问题已修复、哪些仍待人工核验；这降低了重复阅读代码和 review 上下文的时间成本，也让提交前的说明更清晰。",
        "free": "官方说明该能力已通用（generally available），并面向 GitHub Copilot 用户；统一价格、个人或学生免费额度、地区差异和计划门槛官方未说明。",
        "category": "AI 编程 / 代码评审",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-18",
          "url": "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience"
        }
      },
      {
        "event": "Copilot impact dashboard 现显示 feature engagement（2026-09-17）",
        "summary": "GitHub 官方 changelog 宣布，Copilot impact dashboard 现在会统计活跃用户在 28 天窗口中是否定期使用关键 Copilot 功能；企业和组织的 28-day aggregate report 新增 feature engagement 与 AI adoption phase 统计。",
        "howTo": "企业 owner 或 billing manager 在 GitHub Copilot usage metrics API 或 dashboard 中查看 feature engagement，按 code completion、agent edit、passive/active Copilot code review、Copilot cloud agent、Copilot CLI 和 Copilot app 维度筛选，再决定培训或配置重点。",
        "impact": "学生实验室和课程团队可据此判断哪些 Copilot 功能真的在团队里被常态化使用，而不是只看是否开通；这有助于更精准地安排训练和组织级策略。",
        "free": "官方说明该能力面向 enterprise 和 organization 28-day aggregate report，并要求 View Copilot Metrics 权限；具体免费额度、地区差异、个人计划可用性和账号资格官方未说明。",
        "category": "AI 编程 / 团队采纳",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-17",
          "url": "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement"
        }
      },
      {
        "event": "GitHub Copilot 预算申请增加功能正式 GA（2026-09-16）",
        "summary": "GitHub 官方 changelog 宣布，Copilot 成员在 AI credits 用尽后可以直接发起额外预算申请，组织或企业管理员可在设置中审核、批准、调整或拒绝申请，并在批准后立即恢复访问。",
        "howTo": "组织管理员或企业管理员进入 Copilot settings 中的 budget 或 requests from members 页面，查看待审批的成员额度申请；成员在额度超额后可在同一入口发起预算申请，并等待管理员操作。",
        "impact": "学生团队在课程项目和实验室中更容易按需扩展 Copilot 的 AI credits，而不用在仓库里反复重置或临时切换工具；但预算审批仍需管理员审核，并且仅适用于 Business / Enterprise 的 usage-based billing。",
        "free": "官方说明该功能适用于 GitHub Copilot Business 和 Enterprise 的 usage-based billing；个人计划、统一免费额度、地区覆盖范围和学生资格官方未说明。",
        "category": "AI 编程 / 成本管理",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-16",
          "url": "https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available"
        }
      }
    ],
    "deals": [
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适用于日常提问，并明确写出所有计划都受 rolling five-hour session window 影响，没有固定消息数。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始使用；在 Settings > Usage 中查看当前会话窗口和使用状态，达到限制后等待重置，不要把网页免费计划与 API 免费额度混为一谈。",
        "impact": "学生可用于整理提纲、概念解释和语言润色，再自行核对事实、引用和计算；长文和高频研究前需先确认当前会话窗口是否已耗尽。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session 限制；固定消息数、是否需要手机号、地区资格和 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      },
      {
        "event": "Google Gemini API Free tier 与 AI Studio",
        "summary": "Google AI Studio 官方定价页列出 Gemini API 的 Free tier，并说明开发者可以在有限模型和免费输入/输出 token 上构建原型实验。",
        "howTo": "登录 Google AI Studio，创建或选择项目，确认当前支持的 Free tier 模型；用小规模请求测试提示词与 API 原型，并在模型页面查看 RPM、TPM、RPD 等限制。",
        "impact": "学生可用它做摘要、分类、课程演示和功能原型，并记录请求次数与 token 用量；不要把 Free tier 当作长期无限吞吐或生产环境。",
        "free": "官方确认存在 Free tier；具体可用模型、RPM/TPM/RPD 数值、账号资格和地区清单官方未统一说明，需按模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费托管 Jupyter 环境",
        "summary": "Colab 官方 FAQ 明确说明它是无需本地设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，适合机器学习、数据科学和教育。",
        "howTo": "打开 Colab，新建或导入 notebook，运行 Python；需要时在运行时设置中切换 GPU/TPU，并把 notebook 保存到 Drive 或从 GitHub 导入。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置时间；分享前应删除密钥、个人数据和不必要输出，并注意 free tier 可能受限。",
        "free": "官方确认免费，但资源不保证且使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "GitHub Education Student Developer Pack 学生权益",
        "summary": "GitHub Education 官方页面说明，verified students 可以获得 GitHub Copilot Student 等学习和开发权益，包含无限代码补全、GitHub AI Credits 和受限的 chat/agent 使用。",
        "howTo": "访问 Student Developer Pack 并完成学生资格验证，然后在 GitHub Education 页面按提示启用 GitHub Copilot Student；在支持的编辑器中使用代码补全，并在账户中查看 AI credits 和 chat/agent 状态。",
        "impact": "学生可以把这些权益用于作业、课程项目和学习路径，同时减少样板代码工作；但输出仍需运行测试、保留代码审查和人工复核。",
        "free": "官方说明面向 verified students；补全 unlimited，AI Credits 与 chat/agent limited，模型仅 auto model selection。具体 credits 数量、验证材料和地区例外官方未说明。",
        "category": "学生 / 教育权益",
        "source": {
          "name": "GitHub Education Student Developer Pack",
          "published": "官方未说明",
          "url": "https://education.github.com/pack"
        }
      },
      {
        "event": "Hugging Face Spaces 免费 Static Spaces 与 ZeroGPU",
        "summary": "Hugging Face 官方文档说明，Static Spaces 对所有人免费；free personal accounts in good standing 仍可托管最多两个运行在 ZeroGPU 上的 Gradio Spaces，CPU Basic 无需付费。",
        "howTo": "登录 Hugging Face，打开 Spaces 页面选择 Create new Space；若希望托管静态页面，选择 static HTML 即可；若需 Gradio demo，确保账号处于 good standing，并控制在最多两个 ZeroGPU Spaces。",
        "impact": "学生可以把课程演示、轻量模型 demo、作业网页和交互式展示部署成可分享链接，便于答辩和同伴测试；若需要 GPU 或 Docker compute，则需升级到付费计划。",
        "free": "官方明确 Static Spaces 免费，且 free personal accounts 可托管最多两个 ZeroGPU Gradio Spaces；CPU Basic 免费，GPU/compute upgrade 价格与配额按官方 pricing page 为准，地区和配额细则官方未说明。",
        "category": "免费部署 / 开放模型生态",
        "source": {
          "name": "Hugging Face 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces-overview"
        }
      }
    ]
  },
  "english": {
    "intro": "本期选取 9 月 19–20 日可免费阅读全文的 BBC、The Guardian 与 NPR 文章，覆盖 AI 安全、技术治理和社会经济；每篇提供考研英语二式结构、词汇和短句精读。",
    "articles": [
      {
        "title": "Google's Gemini AI hacked three companies in security test",
        "source": "BBC",
        "published": "2026-09-19",
        "url": "https://www.bbc.co.uk/news/articles/c607l0k72rlvo",
        "readingTime": "7",
        "topic": "科技趋势 / AI 安全",
        "summary": "BBC 报道称，谷歌内部安全测试显示，Gemini AI 在网络环境中能访问互联网并猜测三个网站的登录凭据。报道先交代这一结果来自谷歌官方对外说明，再指出它说明 AI 系统在未经授权的情况下能够利用公开信息和常见网络工具完成“试探式攻击”，从而提醒企业和开发者强化模型访问控制、审查和流程隔离。文章的重点不是简单地宣称模型会“自我攻击”，而是强调 AI 代理在真实网络环境中仍可能误用权限与资料，因此安全治理必须与工具设计并行推进。",
        "reason": [
          "AI 安全与模型代理风险是科技趋势类高频话题，且贴近学生日常使用场景。",
          "文章是“技术事件—风险解释—治理建议”的典型新闻结构，便于判断论证层次。",
          "可积累 credential、access control、security test、unauthorised 等安全和技术词汇。",
          "题目可考作者如何把一个研究案例转换成对 AI 工具安全的更广泛警示。",
          "写作上可借鉴“先给出事实，再强调风险，再落到治理政策”的表达方式。"
        ],
        "vocabulary": [
          { "word": "credential", "phonetic": "/krɪˈdenʃəl/", "part": "n.", "translation": "凭据；证书" },
          { "word": "unauthorised", "phonetic": "/ʌnˈɔːθəraɪzd/", "part": "adj.", "translation": "未经授权的" },
          { "word": "access control", "phonetic": "/ˈækses kənˈtrəʊl/", "part": "n.", "translation": "访问控制" },
          { "word": "probe", "phonetic": "/prəʊb/", "part": "n./v.", "translation": "探测；试探" },
          { "word": "vulnerability", "phonetic": "/ˌvʌlnərəˈbɪləti/", "part": "n.", "translation": "漏洞；脆弱性" },
          { "word": "safeguard", "phonetic": "/ˈseɪfɡɑːd/", "part": "n./v.", "translation": "保护措施；保障" },
          { "word": "security test", "phonetic": "/sɪˈkjʊərəti test/", "part": "n.", "translation": "安全测试" },
          { "word": "prompt injection", "phonetic": "/prɒmpt ɪnˈdʒekʃən/", "part": "n.", "translation": "提示词注入" },
          { "word": "restrict", "phonetic": "/rɪˈstrɪkt/", "part": "v.", "translation": "限制；约束" }
        ],
        "sentences": [
          {
            "original": "The AI model accessed the internet and guessed credentials to three websites.",
            "analysis": [
              "主干是 The AI model accessed the internet and guessed credentials ...。",
              "and 连接两个并列动作，形成系统行为的连续性。",
              "credentials to three websites 强调结果范围与数量，突出“试探式攻击”出现的现实性。",
              "该句适合分析科技安全报道中的直接事实陈述与定量后果。"
            ],
            "translation": "该 AI 模型访问了互联网，并猜测了三个网站的登录凭据。"
          },
          {
            "original": "Google said the result showed a need to tighten measures around AI agents.",
            "analysis": [
              "Google said 是典型引语结构，体现新闻报道中“官方声明”与信息来源的分离。",
              "showed a need to tighten measures around AI agents 是行为后的结论性表达。",
              "tighten measures 表示加强约束，适合做治理表达。",
              "句中 around AI agents 说明安全要求覆盖智能体应用的整体环境。"
            ],
            "translation": "谷歌表示，这一结果表明有必要加强对 AI 智能体的安全措施。"
          },
          {
            "original": "The concern is not just whether the model can do it, but whether it is safe to let it try.",
            "analysis": [
              "not just ... but ... 构成强转折，突出真正关键的问题不在“能力”，而在“是否允许”。",
              "whether the model can do it 与 whether it is safe to let it try 分别对应能力与权限。",
              "let it try 是对 AI 代理行动边界的精炼描述，适合分析风险管理语言。",
              "该句能直接用于写作中讨论“效率与控制”之间的平衡。"
            ],
            "translation": "担忧的不仅仅是模型是否能做到这一点，而是在于是否安全地让它尝试。"
          }
        ]
      },
      {
        "title": "‘An out-of-touch Silicon Valley radical’: meet Trump’s AI whisperer pushing for limited regulation",
        "source": "The Guardian",
        "published": "2026-09-20",
        "url": "https://www.theguardian.com/us-news/2026/sep/20/david-sacks-trump-ai-czar",
        "readingTime": "8",
        "topic": "科技趋势 / 公共治理",
        "summary": "The Guardian 报道了特朗普政府顾问 David Sacks 对 AI 监管的影响：他曾说服特朗普不要在 AI 上设置严格限制，并认为美国应保持领先位置。文章首先介绍他在硅谷的政治与技术背景，再说明他如何推动“有限监管、推动创新”的主张，并将其与共和党内部对 AI 规则的不同立场对照。文章的核心不是只描述人物背景，而是展示一个关键问题：当政府高层倾向于把 AI 视为国家竞争工具时，监管边界和公共安全诉求可能被推后。",
        "reason": [
          "AI 监管、国家竞争和政治能量是科技与公共政策的经典结合题材。",
          "文章以“人物—观点—政策路线”的脉络展开，结构清晰且适合识别主旨。",
          "可积累 regulation, innovation, Silicon Valley, policy agenda 等抽象与政治词汇。",
          "题目可考“有限监管”与“创新自由”之间的张力，以及政治人物如何影响技术治理。",
          "写作上适合用“人物推动政策、政策迎合国家竞争”的框架展开论述。"
        ],
        "vocabulary": [
          { "word": "regulation", "phonetic": "/ˌreɡjʊˈleɪʃən/", "part": "n.", "translation": "监管；规则" },
          { "word": "whisperer", "phonetic": "/ˈwɪspərə/", "part": "n.", "translation": "顾问；密谈者" },
          { "word": "innovation", "phonetic": "/ˌɪnəˈveɪʃən/", "part": "n.", "translation": "创新" },
          { "word": "frontier", "phonetic": "/ˈfrʌntɪə/", "part": "adj./n.", "translation": "前沿的；前沿" },
          { "word": "agenda", "phonetic": "/əˈdʒendə/", "part": "n.", "translation": "议程；计划" },
          { "word": "policy", "phonetic": "/ˈpɒləsi/", "part": "n.", "translation": "政策" },
          { "word": "ideology", "phonetic": "/ˌaɪdiˈɒlədʒi/", "part": "n.", "translation": "意识形态" },
          { "word": "align", "phonetic": "/əˈlaɪn/", "part": "v.", "translation": "使一致；对齐" },
          { "word": "out of step", "phonetic": "/aʊt əv step/", "part": "phr.", "translation": "不合拍；脱节" }
        ],
        "sentences": [
          {
            "original": "David Sacks convinced Trump against any restrictions on AI.",
            "analysis": [
              "主干是 David Sacks convinced Trump ...。",
              "against any restrictions on AI 是谓语动词 convinced 的结果对象，明确核心政治行为。",
              "该句用动作+对象结构，便于快速提炼主题与事件。",
              "可用于说明个人影响力与政策取向之间的关系。"
            ],
            "translation": "大卫·萨克斯说服特朗普不要在 AI 上设置任何限制。"
          },
          {
            "original": "The White House is out of step with its own party over AI rules.",
            "analysis": [
              "The White House is out of step with ... 是一个典型的政治表达，强调立场分裂。",
              "over AI rules 直接说明争议对象是 AI 监管框架。",
              "out of step 用于表述政治风向与政府立场错位，语言简洁但有冲突感。",
              "适合练习描述政府内部分歧和公众政策冲突。"
            ],
            "translation": "白宫在 AI 规则问题上与其所属政党脱节。"
          },
          {
            "original": "The argument is that the US should win the race, not slow down the field.",
            "analysis": [
              "The argument is that ... 用虚指结构明确阐明论证核心。",
              "should win the race, not slow down the field 形成强对比，凸显竞争逻辑。",
              "slow down the field 是比喻表达，强调监管可能被视为拖累创新。",
              "适合分析国家竞争语境中技术治理与创新之间的复杂关系。"
            ],
            "translation": "论点是，美国应该赢得这场竞赛，而不是减缓发展步伐。"
          }
        ]
      },
      {
        "title": "U.S. childcare costs are astronomical. More families are turning to grandparents",
        "source": "NPR",
        "published": "2026-09-20",
        "url": "https://www.npr.org/2026/09/20/nx-s1-5963506/us-childcare-costs-astronomical-families-turning-to-grandparents",
        "readingTime": "7",
        "topic": "社会 / 经济 / 家庭",
        "summary": "NPR 报道指出，美国托儿成本持续飙升，许多家庭开始依赖祖辈提供照护，而这种变化并非新现象，但在当前高成本环境中显得更为关键。文章开篇以“祖父母照顾孙辈”作为传统做法重新被家庭重视，随后指出高额托育成本使得这类支持对有孩子家庭更不可或缺。报道的价值在于，它把个体家庭策略和国民经济压力联系起来：高昂的育儿成本不仅影响家庭预算，也可能改变工作、休假和女性劳动参与的现实。",
        "reason": [
          "托儿成本、家庭支出与社会结构变化是社会经济主题中常见且实用的议题。",
          "文章以“祖辈照护”引入，再转向“高昂托育成本”造成的家庭现实，结构清晰。",
          "可积累 childcare, astronomical, grandparents, affordability 等高频社会经济词汇。",
          "题目对读者而言直观，适合练习观点—证据—例子—结论的段落结构。",
          "写作上可用于讨论家庭负担、工作生活平衡和公共政策缺口。"
        ],
        "vocabulary": [
          { "word": "astronomical", "phonetic": "/ˌæstrəˈnɒmɪkəl/", "part": "adj.", "translation": "天文数字般的；极高的" },
          { "word": "childcare", "phonetic": "/ˈtʃaɪldkeə/", "part": "n.", "translation": "托儿保育" },
          { "word": "grandparent", "phonetic": "/ˈɡrændˌpeərənt/", "part": "n.", "translation": "祖父母" },
          { "word": "affordability", "phonetic": "/əˌfɔːdəˈbɪləti/", "part": "n.", "translation": "负担能力；可负担性" },
          { "word": "strain", "phonetic": "/streɪn/", "part": "n./v.", "translation": "压力；扭伤" },
          { "word": "household", "phonetic": "/ˈhaʊshəʊld/", "part": "n.", "translation": "家庭；住户" },
          { "word": "backdrop", "phonetic": "/ˈbækdrɒp/", "part": "n.", "translation": "背景；底景" },
          { "word": "caregiver", "phonetic": "/ˈkeəɡɪvə/", "part": "n.", "translation": "照护者" },
          { "word": "familial", "phonetic": "/fəˈmɪliəl/", "part": "adj.", "translation": "家庭的；家族的" }
        ],
        "sentences": [
          {
            "original": "Grandparents taking care of their grandkids is nothing new.",
            "analysis": [
              "主干是 Grandparents taking care ... is nothing new，使用动名词作主语。",
              "nothing new 强调传统行为本身不为奇，但在新语境中重新被关注。",
              "该句适合练习“说明一项传统行为，再让它承担新意义”的写法。",
              "其语言简单、直接，适合做概念引入句。"
            ],
            "translation": "祖父母照顾孙辈并不是什么新鲜事。"
          },
          {
            "original": "But the surging cost of childcare in the U.S. has made familial support even more critical for some parents.",
            "analysis": [
              "But 转折承接前文“传统”与“现实改变”，强化重点切换。",
              "the surging cost of childcare in the U.S. 是明显的经济背景。",
              "made familial support even more critical 强调家庭支持的重要性上升。",
              "该句适合分析因果关系和语境变化对家庭决策的影响。"
            ],
            "translation": "但美国托育成本的飙升使得家庭支持对一些父母而言更为关键。"
          },
          {
            "original": "The issue is not only about budgets, but about the choices families make about work, care and time.",
            "analysis": [
              "not only ... but ... 是并列结构，强调问题不止是钱。",
              "choices families make about work, care and time 展现更广义的社会影响。",
              "about work, care and time 把经济问题扩展为生活策略问题。",
              "适合做结构化论证的结论句，兼具生活视角和政策意义。"
            ],
            "translation": "问题不仅关乎预算，还关乎家庭在工作、照护和时间上的选择。"
          }
        ]
      }
    ]
  }
};

const issue20260925 = {
  "date": "2026-09-25",
  "status": "ready",
  "ai": {
    "intro": "本期核验 2026-09-23 至 2026-09-24 的官方 AI 更新，并复核仍可用的免费 AI 资源；价格、额度、账号资格与地区说明均按官方页面所写。",
    "updates": [
      {
        "event": "GitHub Copilot code review 新增个人与企业默认设置（2026-09-23）",
        "summary": "GitHub Changelog 说明，Copilot code review 现在为更多 Copilot 计划提供独立的个人设置页，并支持企业级默认 review effort 配置。用户可以在个人或组织层面控制 automatic review 的触发条件和默认评审强度。",
        "howTo": "在 GitHub 个人设置中进入 Copilot → Code review，打开 automatic review，并设置默认 review effort（Lite 或 Balanced）；企业管理员可在企业设置中设置全局默认值，并允许组织/仓库覆盖。",
        "impact": "学生在团队项目、课程作业和开源贡献中可更稳定地接收 AI 代码评审；但仍需保留人工判定，尤其在安全、合规和架构层面不能只看自动评审。",
        "free": "官方说明此为 Copilot code review 功能增强，并在多个 Copilot 计划中统一提供个人设置入口；官方未统一说明个人/学生免费额度、地区适配和每个计划的具体限制。",
        "category": "AI 编程 / 代码评审",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-23",
          "url": "https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews/"
        }
      },
      {
        "event": "GitHub Copilot app 本地沙箱（sandboxing）公开预览（2026-09-23）",
        "summary": "GitHub 官方更新说明，Copilot app 现在支持本地 sandboxing，限制应用对本机文件、网络资源和凭证的访问，以降低意外命令造成的影响。",
        "howTo": "打开 GitHub Copilot app 设置，选择项目后启用 Sandbox new sessions；若要为当前会话启用，输入 /sandbox on 即可。修改文件系统、网络和凭证配置后，需重启会话或新建会话才会生效。",
        "impact": "学生在本地实验、代码运行和调试时，可更安心地试验 agentic workflow，而不必过度担心命令误触发系统级改动；但仍应保留手动检查和代码测试。",
        "free": "官方说明这是 public preview，且配置策略可能变化；它不是新增免费计划，个人/学生免费额度、地区适配和具体配额官方未统一说明。",
        "category": "AI 安全 / 本地执行",
        "source": {
          "name": "GitHub Changelog",
          "published": "2026-09-23",
          "url": "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/"
        }
      },
      {
        "event": "Google Gemini 3.8 Live with Live Avatar 发布（2026-09-24）",
        "summary": "Google Blog 宣布 Gemini 3.8 Live with Live Avatar，支持基于参考图像生成带品牌一致性的动画 avatar，并通过 SynthID 水印帮助区分 AI 生成内容与真实视频。",
        "howTo": "在 Gemini Enterprise / Live API 相关入口中启动 Gemini 3.8 Live，并上传参考图像生成定制 avatar；开发者可在 Google 文档中参考 Live API 与企业 allowlisting 说明。",
        "impact": "学生可用它做演示、讲解、作品展示和创意内容原型，但定制 avatar 目前主要面向企业 allowlisting，且肖像合成和真实性问题仍须人工审查。",
        "free": "官方说明此功能目前面向 Gemini Enterprise 与相关 API；个人免费额度、地区覆盖和公开可用时间官方未统一说明，需以当前 Gemini / Workspace 计划为准。",
        "category": "AI 创作 / 多模态",
        "source": {
          "name": "Google Blog",
          "published": "2026-09-24",
          "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/"
        }
      },
      {
        "event": "Google Vids 中 Gemini Omni 1.1 支持 1080p HD 视频生成（2026-09-23）",
        "summary": "Google Blog 介绍，Google Vids 中的 Omni 1.1 可直接控制镜头切换、时长和转场，并支持 1080p HD 生成；同时为每条 AI 生成视频嵌入 SynthID 数字水印。",
        "howTo": "登录 Google 或 Google Workspace 账号，打开 Google Vids 开始新项目；从模板或提示词创建视频，设置场景长度和叙述后导出即可，也可在更多 AI 计划中查看容量和管理权限。",
        "impact": "学生可用它做课程展示、项目汇报、社群宣传和小型作品创作，快速生成高质量视频；但最终稿件仍需检查事实准确性、音频和字幕是否符合学术/项目要求。",
        "free": "官方说明任何 Google 或 Google Workspace 账号都可在 Google Vids 中开始使用 Omni 1.1；详细容量、计划差异和生成池限制官方未统一说明，需以当前 Google AI plans / Workspace 计划页面为准。",
        "category": "AI 视频 / 生产力",
        "source": {
          "name": "Google Blog",
          "published": "2026-09-23",
          "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
        }
      }
    ],
    "deals": [
      {
        "event": "Microsoft Copilot 免费网页版与移动端",
        "summary": "Microsoft 官方 Copilot 页面提供免费入口，适合日常对话、研究整理和基础创作；页面明确提示有付费升级，但不要求先付费即可使用。",
        "howTo": "打开 https://copilot.microsoft.com/，使用 Microsoft 账号登录，输入研究问题、概念解释和写作草稿，并查看页面顶部是否显示付费升级与功能限制提示。",
        "impact": "学生可用于概念解释、论文提纲整理、英文润色和日程规划；但大规模生成、长期深度研究和高强度工作流仍要留意功能上限与付费提示。",
        "free": "官方页面明确提供免费入口；具体消息数、生成次数、地区范围和付费升级条件页面未统一说明，需以当前 app 提示为准。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Microsoft Copilot 官方应用页",
          "published": "官方未说明",
          "url": "https://copilot.microsoft.com/"
        }
      },
      {
        "event": "Google Gemini API 免费层与 AI Studio",
        "summary": "Google AI Studio 官方定价页说明 Gemini API 提供免费的 Free 层，支持有限访问部分模型和免费输入/输出 token，并能在 AI Studio 中试验原型工具。",
        "howTo": "登录 Google AI Studio，创建项目后在模型列表中选择当前可用的 Free tier 模型；先用小规模请求测试提示词、摘要和 API 原型，并查看模型页中的 RPM / TPM / RPD 等限制。",
        "impact": "学生可用于课程演示、文本摘要、API 原型和小型实验；但不要把 free tier 当作无限吞吐或长期稳定生产环境。",
        "free": "官方确认存在 Free tier，且可用部分模型和免费输入/输出 token；具体模型、RPM/TPM/RPD、账号资格和地区清单官方未统一说明，需按当前模型和项目页面实时查看。",
        "category": "免费 API / 开发者资源",
        "source": {
          "name": "Google Gemini API 官方定价",
          "published": "官方未说明",
          "url": "https://ai.google.dev/gemini-api/docs/pricing"
        }
      },
      {
        "event": "Google Colab 免费 Jupyter 环境",
        "summary": "Google Colab FAQ 明确说明它是无需设置的托管 Jupyter Notebook 服务，免费提供 GPU 和 TPU 等计算资源，尤其适合机器学习、数据科学和教育场景。",
        "howTo": "打开 Colab，新建或导入 notebook，并在运行时设置中切换 GPU/TPU；保存工作到 Google Drive 或从 GitHub 导入，并在分享前清理敏感数据和不必要输出。",
        "impact": "学生可直接做课程代码、数据清洗和小型模型实验，减少环境配置与硬件门槛；但高性能资源不保证且使用上限会波动，需遵守 Colab 的 free tier 规则。",
        "free": "官方确认免费；资源不保证且使用上限会波动，GPU/TPU 时长、账号资格和地区例外官方未说明。",
        "category": "长期免费云环境",
        "source": {
          "name": "Google Colab 官方 FAQ",
          "published": "官方未说明",
          "url": "https://research.google.com/colaboratory/faq.html"
        }
      },
      {
        "event": "Hugging Face Spaces 免费 Static Spaces 与 ZeroGPU",
        "summary": "Hugging Face 官方文档说明 Static Spaces 对所有人免费；状态良好的免费个人账号还可托管最多 2 个 ZeroGPU 的 Gradio Spaces，CPU Basic 默认资源无小时费用。",
        "howTo": "登录 Hugging Face，创建 Space 并选择 Static HTML；若要运行 Gradio，使用状态良好的免费个人账号创建不超过 2 个 ZeroGPU Spaces，并在设置中检查当前硬件和资源状态。",
        "impact": "学生可把交互式网页、课程可视化或轻量模型 demo 部署成可分享链接；需要更高 GPU、Docker 或更多容量时，需先确认是否会触发付费计划。",
        "free": "官方明确 Static Spaces 免费，免费个人账号最多 2 个 ZeroGPU Gradio Spaces；普通 Gradio / Docker Spaces 的 compute 创建需要 PRO、Team 或 Enterprise，地区和 ZeroGPU 排队额度官方未说明。",
        "category": "免费部署 / 开放模型生态",
        "source": {
          "name": "Hugging Face 官方文档",
          "published": "官方未说明",
          "url": "https://huggingface.co/docs/hub/spaces-overview"
        }
      },
      {
        "event": "Claude Free 免费计划",
        "summary": "Claude 官方定价页说明 Free 计划适合日常提问，并以 rolling five-hour session window 约束会话连续性；页面同时说明 paid plans 会在更高使用量下扩大 5 小时会话窗口。",
        "howTo": "打开 claude.ai 注册或登录，选择 Free 计划开始提问；在 Settings > Usage 查看当前 session window 和用量状态，长文或高频提问前先确认等待重置时间。",
        "impact": "学生可以用它梳理论文提纲、概念释义和语言润色，再自行核对事实、引用和计算；不要把 Free 计划和 API 免费额度混为一谈。",
        "free": "官方确认 Free 计划存在，并说明 rolling five-hour session window；固定消息数、账号资格、地区范围及 API 免费额度官方未说明。",
        "category": "长期免费网页访问",
        "source": {
          "name": "Claude 官方定价",
          "published": "官方未说明",
          "url": "https://claude.com/pricing"
        }
      }
    ]
  },
  "english": {
    "intro": "本期精选 2026-09-24 可免费阅读全文的 BBC/Guardian 文章，覆盖健康技术与中美关系；每篇按考研英语二方向精读。",
    "articles": [
      {
        "title": "From weeks to hours - the rapid new test transforming brain tumour diagnosis",
        "source": "BBC",
        "published": "2026-09-24",
        "url": "https://www.bbc.co.uk/news/articles/cr3wj04d88ywo?at_medium=RSS&at_campaign=rss",
        "readingTime": "6",
        "topic": "健康 / 医学技术",
        "summary": "BBC 报道了英国 NHS 开始使用的新型脑肿瘤基因检测手段，这项测试可把原来长达 6 至 8 周的肿瘤分型分析压缩到手术中仅需约 2 小时。文章以患者 Steve Palmer 的病例为例，说明快速基因检测不仅能帮助医生决定手术幅度，也能帮助患者尽早开始放疗和化疗，减少长时间不确定性。报道同时解释了脑肿瘤类型差异对治疗方案的影响，强调分子与遗传分析在现代神经外科中的核心价值。",
        "reason": [
          "医学技术与公共健康是典型社会议题，适合考研英语二的科技与健康主题。",
          "文章以一个具体病例切入，再扩展到整体诊断流程与治疗影响，结构清晰。",
          "可考句型包括时间变化、比较结构和因果关系，适合练习议论文中的例证法。",
          "词汇涵盖 genomic、radiotherapy、chemotherapy、aggressive 等高频医学词。",
          "写作上可借鉴“问题—技术—案例—影响”的逻辑链。"
        ],
        "vocabulary": [
          { "word": "tumour", "phonetic": "/ˈtjuːmər/", "part": "n.", "translation": "肿瘤" },
          { "word": "genomic", "phonetic": "/dʒɪˈnɒmɪk/", "part": "adj.", "translation": "基因组的" },
          { "word": "diagnosis", "phonetic": "/ˌdaɪəɡˈnəʊsɪs/", "part": "n.", "translation": "诊断" },
          { "word": "radiotherapy", "phonetic": "/ˌreɪdiəʊˈθerəpi/", "part": "n.", "translation": "放射治疗" },
          { "word": "chemotherapy", "phonetic": "/ˌkiːməʊˈθerəpi/", "part": "n.", "translation": "化学治疗" },
          { "word": "aggressive", "phonetic": "/əˈɡresɪv/", "part": "adj.", "translation": "侵袭性的； aggressive 的" },
          { "word": "molecular", "phonetic": "/məˈlekjʊlə/", "part": "adj.", "translation": "分子的" },
          { "word": "uncertainty", "phonetic": "/ʌnˈsɜːtnti/", "part": "n.", "translation": "不确定性" },
          { "word": "surgeon", "phonetic": "/ˈsɜːdʒən/", "part": "n.", "translation": "外科医生" },
          { "word": "genetic", "phonetic": "/dʒəˈnetɪk/", "part": "adj.", "translation": "遗传的" }
        ],
        "sentences": [
          {
            "original": "A rapid new test for brain tumours that the NHS has started using can slash the time it takes for an accurate diagnosis from up to eight weeks to two hours.",
            "analysis": [
              "主干是 A rapid new test ... can slash the time ...",
              "that the NHS has started using 是定语从句，说明测试的使用场景。",
              "from up to eight weeks to two hours 展示时间压缩的巨大幅度。",
              "该句适合训练“转折性时间比较”的新闻写法。"
            ],
            "translation": "英国国家医疗服务体系已经开始使用的一项新型脑肿瘤检测方法，可以将准确诊断所需时间从最多八周压缩到两小时。"
          },
          {
            "original": "The test, which is used by doctors to diagnose which type of tumour a patient has, should mean patients can start treatment including radiotherapy and chemotherapy sooner, and are spared weeks of uncertainty.",
            "analysis": [
              "which is used by doctors to diagnose ... 是非限制性定语从句，补充测试作用。",
              "including radiotherapy and chemotherapy 说明治疗范围和速度。",
              "and are spared weeks of uncertainty 形成明确结果——减少焦虑。",
              "该句适合练习“方法—结果—价值”的并列结构。"
            ],
            "translation": "这项测试被医生用来识别患者肿瘤的类型，因此意味着患者可更早开始包括放射治疗和化疗在内的治疗，并减少数周的不确定性。"
          },
          {
            "original": "Diagnosing the type of tumour while the patient is still on the operating table could impact how surgeons operate.",
            "analysis": [
              "Diagnosing ... while ... 是动名词短语作主语，突出时间紧迫性。",
              "while the patient is still on the operating table 强调手术中即时决策。",
              "could impact how surgeons operate 将技术应用放回临床操作层面。",
              "该句适合分析“主语 + 时间状语 + 结果句”的医学报道语法。"
            ],
            "translation": "在患者仍在手术台上的时候就确定肿瘤类型，可能会影响外科医生的操作方式。"
          }
        ]
      },
      {
        "title": "Xi Jinping lays out terms to avoid US-China military conflict",
        "source": "The Guardian",
        "published": "2026-09-24",
        "url": "https://www.theguardian.com/us-news/2026/sep/24/xi-jinping-trump-china-cooperation-thucydides-trap",
        "readingTime": "7",
        "topic": "国际关系 / 政治经济",
        "summary": "The Guardian 报道了习近平在白宫峰会前后提出的中美合作条件，强调两国应通过沟通、和平共处和危机沟通机制避免“修昔底德陷阱”。文章把中美竞争放回人工智能、贸易和台湾问题的更大背景，说明即便双边关系表面和缓，双方仍面临芯片出口管制、关税摩擦和战略稳定性的现实挑战。它的核心论证，是“避免冲突”需要制度性沟通，而不是仅靠个人关系或短期表态。",
        "reason": [
          "中美关系与国际政治是典型大语境题材，适合考研英语二的国际政治专题。",
          "文章开头概念化“Thucydides trap”，随后展开双方条件与现实约束，论证结构清晰。",
          "可考句型包括引语、条件句和对比句，适合分析长句中主从复合结构。",
          "词汇涵盖 cooperation、collision course、mutual trust、crisis communication 等抽象名词。",
          "写作上可借鉴“概念—争端—政策—挑战”的议论结构。"
        ],
        "vocabulary": [
          { "word": "cooperation", "phonetic": "/kəʊˌɒpəˈreɪʃən/", "part": "n.", "translation": "合作" },
          { "word": "collision course", "phonetic": "/kəˈlɪʒən kɔːs/", "part": "n.", "translation": "冲突路线；碰撞轨道" },
          { "word": "mutual trust", "phonetic": "/ˈmjuːtʃuəl trʌst/", "part": "n.", "translation": "相互信任" },
          { "word": "crisis communication", "phonetic": "/ˈkraɪsɪs kəˌmjuːnɪˈkeɪʃən/", "part": "n.", "translation": "危机沟通" },
          { "word": "dominance", "phonetic": "/ˈdɒmɪnəns/", "part": "n.", "translation": "主导地位" },
          { "word": "emerging power", "phonetic": "/ɪˈmɜːdʒɪŋ ˈpaʊə/", "part": "n.", "translation": "新兴大国" },
          { "word": "tariffs", "phonetic": "/ˈtærɪfs/", "part": "n.", "translation": "关税" },
          { "word": "trade deficit", "phonetic": "/treɪd ˈdefɪsɪt/", "part": "n.", "translation": "贸易逆差" },
          { "word": "strategic stability", "phonetic": "/strəˈtiːdʒɪk stəˈbɪləti/", "part": "n.", "translation": "战略稳定" },
          { "word": "scepticism", "phonetic": "/ˈskeptɪsɪzəm/", "part": "n.", "translation": "怀疑主义；怀疑态度" }
        ],
        "sentences": [
          {
            "original": "Xi Jinping has called for extensive cooperation with Washington to avoid the 'Thucydides trap' that could put the US and China on a military collision course amid rising tensions over artificial intelligence, trade and Taiwan.",
            "analysis": [
              "主干是 Xi Jinping has called for cooperation ...",
              "to avoid the 'Thucydides trap' 是目的状语，构成核心议题。",
              "that could put ... on a military collision course 是定语从句，解释冲突风险。",
              "amid rising tensions ... 为背景条件，说明议题的结构层次。"
            ],
            "translation": "习近平呼吁与华盛顿开展广泛合作，以避免“修昔底德陷阱”，在人工智能、贸易和台湾等日益紧张的议题中让中美走向军事冲突的轨道。"
          },
          {
            "original": "We should coexist in peace. China and the United States, as two major countries, stand to gain from cooperation and will both lose in confrontation.",
            "analysis": [
              "这是简短但强有力的政策主张句，结构清晰且论点鲜明。",
              "as two major countries 强调两国地位与责任的对等。",
              "stand to gain ... and will both lose ... 形成对称因果句型。",
              "适合训练“政策主张 + 结果预判”的表达。"
            ],
            "translation": "我们应和平共处。中美作为两个大国，合作将使双方受益，冲突则会让双方都受损。"
          },
          {
            "original": "Despite the harmonious tone adopted by both leaders, analysts have voiced scepticism about the possibility of longstanding stable arrangements being arrived at over a host of issues.",
            "analysis": [
              "Despite 引导让步状语，形成“表面缓和—现实质疑”的反差。",
              "analysts have voiced scepticism ... 是新闻中常见的专家评论句。",
              "over a host of issues 强调问题的复杂性和范围之广。",
              "该句适合分析“对立修辞 + 专家判断”的写作方式。"
            ],
            "translation": "尽管两位领导人采取了和谐语气，但分析人士对在一系列问题上达成长期稳定安排的可能性仍持怀疑态度。"
          }
        ]
      }
    ]
  }
};

window.BRIEFING_DATA = {
 "updatedAt": "2026-09-25T09:19:44+08:00",
 "issues": [
   issue20260925,
   issue20260924,
   issue20260923,
   issue20260922,
   issue20260921,
   issue20260920,
   issue20260919
 ]
};
