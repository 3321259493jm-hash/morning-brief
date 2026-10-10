window.BRIEFING_DATA = {
  "updatedAt": "2026-10-10T10:19:18+08:00",
  "issues": [
    {
      "date": "2026-10-10",
      "status": "ready",
      "ai": {
        "intro": "昨日到今日确认 1 项值得学生留意的产品变化，因此将检索范围扩至近 7 天，补入 10 月 7 日的 Google Playground 与 GitHub 秘密检测模型更新；各条按公告真实日期标注。",
        "updates": [
          {
            "event": "Google 推出 Playground 实验游戏平台，可用提示词创建、试玩和分享自定义游戏（2026-10-07）",
            "summary": "Google 将 Playground 描述为实验性游戏平台：用户用对话提示描述想法即可制作自定义游戏，无需编程经验；可从空白画布开始、改编提示模板或使用引导式支持，生成后立即试玩，并继续调整物理规则、角色和环境。",
            "howTo": "打开 Google Labs 的 Playground 实验平台，从空白画布开始或改编一个 starter prompt；输入想制作的游戏描述并试玩，再用自然语言要求调整规则、物理效果、角色或场景。",
            "impact": "学生可把课程概念转成可互动的小型原型，例如设计一个词汇闯关或生态系统模拟，再通过修改规则观察结果；平台降低了初次制作门槛，但生成的游戏仍需自行检查内容和运行效果。",
            "free": "Google 将其称为实验性平台，但公告没有说明价格、账号资格、开放地区或生成/试玩配额；这些条件官方未说明，实际能否使用以当前 Playground 页面为准。",
            "category": "生成式 AI / 互动内容创作",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-07",
              "url": "https://blog.google/innovation-and-ai/technology/ai/playground-experimental-gaming-platform/"
            }
          },
          {
            "event": "GitHub 将上下文式 AI 秘密检测扩展至更多开发流程（2026-10-07）",
            "summary": "GitHub 公布一款针对秘密信息检测微调的模型，可结合周边代码识别包括非标准格式密码在内的潜在凭据。已有 GitHub Secret Protection 或 GitHub Advanced Security 的 AI 密码告警用户会自动切换到新模型且不另收费；推送保护的 AI 检查仍处于私有预览，Copilot `/security-review` 的模型检查则公告为即将开放。",
            "howTo": "若项目已有 GitHub Secret Protection 或 GitHub Advanced Security，可在仓库的 secret-scanning alerts 中查看 AI 检测到的密码告警；推送保护检查需符合资格的管理员开启私有预览。公告中的 `/security-review` 秘密分类检查当时尚未开放，不要把普通安全审查误认为该新检查已启用。",
            "impact": "维护课程仓库或团队项目时，检测器可能发现不符合常见 token 格式的密码，帮助在凭据泄露前处理；学生应避免把真实密钥提交到仓库，并按 GitHub 指引轮换已暴露凭据。",
            "free": "AI 密码告警仅对已有 GHSP/GHAS 覆盖的客户包含在原服务中、不另收费；推送保护的 AI 检查需相应付费覆盖并在预览中启用，新的 AI 检查会消耗 GitHub AI Credits。个人 Copilot 的 `/security-review` 新分类检查当时为即将开放，地区和具体配额官方未说明。",
            "category": "AI 编程安全 / 凭据检测",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-07",
              "url": "https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection/"
            }
          },
          {
            "event": "Copilot 代码审查新增组织付费归属与外部许可证限制（2026-10-08）",
            "summary": "GitHub 为组织管理员增加两项 Copilot code review 控制：可选择由组织而非成员个人承担已许可成员的审查费用，也可限制只有组织或企业提供 Copilot 许可证的成员才能发起审查。组织付费模式要求启用 AI Credits 付费使用，并可设置预算。",
            "howTo": "组织所有者可在组织设置的 Copilot → Policies 中将 “Choose how members with a Copilot license are billed” 设为 Organization；需先启用组织 AI Credits 付费使用。若要限制个人外部许可证发起审查，可打开 “Only allow Copilot code review to be triggered by authorized users”。",
            "impact": "课程团队或实验室若使用组织仓库，可由管理员统一管理代码审查的费用归属，避免成员个人额度意外耗尽；学生使用个人许可证时，可能受组织的授权用户政策限制。",
            "free": "该设置本身不代表免费审查：选择组织付费需启用 AI Credits 付费使用；默认 Member 模式仍从成员自己的 Copilot entitlement 扣减额度。资格面向 Copilot 代码审查的组织管理场景，地区和具体价格/配额官方未在公告中说明。",
            "category": "AI 编程 / 组织计费与访问控制",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-08",
              "url": "https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Student：经验证学生可免费使用 Copilot 功能",
            "summary": "GitHub Education 当前列出 Copilot Student 学生计划：验证通过的学生可免费使用 Copilot，包含无限代码补全及一定的 GitHub AI Credits；聊天和 Agent 使用受限，只能自动选择模型，且不包括第三方 Agent。",
            "howTo": "打开 GitHub Student Developer Pack 的 Copilot Student offer，申请并完成 GitHub Education 学生身份验证，再按页面指引激活该计划；仅验证通过后适用。",
            "impact": "适合用代码补全练习课程项目、让 Copilot 帮忙解释错误或辅助检查代码；由于聊天和 Agent 有限制，先把额度留给需要多步分析的学习任务。",
            "free": "学生验证通过后免费；GitHub Student Developer Pack 表示无限代码补全、包含 AI Credits 额度、聊天和 Agent 使用受限且只提供自动模型选择。具体 Credits 数量及聊天/Agent 配额、地区限制和权益截止日期官方未说明。",
            "category": "学生教育福利 / 免费 AI 编程",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Azure for Students：学生可领取云服务与 100 美元 Azure 额度",
            "summary": "GitHub Student Developer Pack 列出 Microsoft Azure 学生权益：年满 18 岁的学生可免信用卡使用 25+ 项 Azure 云服务，并获得 100 美元 Azure credit。它可用于教育目的的软件设计、开发、测试或演示等云端实践。",
            "howTo": "在 GitHub Student Developer Pack 打开 Microsoft Azure offer，按页面指引申请 Azure for Students；启用前确认具体 Azure 服务是否适用学生订阅及信用额度，避免把额度之外的计费误作免费。",
            "impact": "学生可用来部署课程项目原型、练习云端开发，或在允许的服务范围内试做 AI 应用；建议先设定资源预算并删除不再使用的云资源。",
            "free": "官方列明年满 18 岁的学生可免信用卡使用 25+ Azure 服务并获 100 美元额度；该权益是有额度上限的学生福利，不等于所有 Azure AI 服务均免费。额度有效期、地区范围及各 AI 服务的具体配额官方未说明。",
            "category": "学生教育福利 / 云端 AI 项目额度",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Gemini API Free Tier：部分模型输入与输出 token 免费",
            "summary": "Google AI for Developers 定价页列出 Gemini API 免费层，部分指定模型的输入和输出 token 免费，可从 Google AI Studio 开始使用；免费层内容会用于改进 Google 产品，因此不宜提交未公开论文或个人资料。",
            "howTo": "进入 Google AI Studio，选择官方定价页明确标为 Free Tier 的模型并创建 API key，再按 Gemini API quickstart 发起调用；每次使用前核对该模型的速率限制和数据条款。",
            "impact": "可用来练习 API 调用、比较提示词或搭建课程原型；对研究草稿和个人数据，先评估免费层的数据使用规则，不要上传敏感材料。",
            "free": "只限定价页列出的部分模型，免费层输入/输出 token 免费，且内容可用于改进 Google 产品。模型范围有限；各模型具体调用限额、统一账号资格和地区条件官方未说明，应以所选模型当前页面为准。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Microsoft Phi-4-mini-instruct：MIT 许可的可下载模型权重",
            "summary": "Microsoft 官方 Hugging Face 模型卡提供 Phi-4-mini-instruct 权重，列明模型规模为 3.8B 参数、上下文长度 128K，并标注 MIT 许可证。可下载到本地运行；效果、内存和速度需按设备与任务自行测试。",
            "howTo": "打开 Microsoft 官方模型卡，按 Transformers 示例安装 `transformers` 与 `accelerate`，用 `AutoTokenizer` 和 `AutoModelForCausalLM` 下载并加载 `microsoft/Phi-4-mini-instruct`；先用非敏感文本做本机测试。",
            "impact": "适合有足够设备资源的学生练习本地模型部署、多语言提示词和结果校验；MIT 权重许可便于学习和原型开发，但不代表输出准确，也不免除硬件成本。",
            "free": "模型卡公开权重并标注 MIT 许可，下载和本地推理不收模型调用费；硬件、电力和软件环境由使用者承担。模型托管推理价格、地区和配额官方未说明。",
            "category": "免费开放权重 / 本地学习",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          },
          {
            "event": "OpenAI Whisper：MIT 许可的本地语音识别与翻译模型",
            "summary": "OpenAI 官方仓库提供 Whisper 代码和模型权重，支持多语言语音识别、语音翻译和语言识别，并提供多种模型大小供用户按速度与资源取舍。",
            "howTo": "依官方仓库安装 `openai-whisper` 和 ffmpeg，运行 `whisper lecture.wav --model small` 转写本人有权处理的录音；如需翻译，选择多语言模型并按仓库说明设置任务。",
            "impact": "可以把课程录音制成复习文本、辅助听力或对照原音练习翻译；语音识别可能有误，需逐句校对，并先确认录音隐私和使用许可。",
            "free": "代码和模型权重按 MIT 许可证发布，可下载后本地运行，不收模型 API 调用费；需自备兼容硬件与软件环境，托管服务价格、账号、地区和调用配额官方未说明。",
            "category": "免费开放模型 / 语音学习工具",
            "source": {
              "name": "OpenAI GitHub",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          }
        ]
      },
      "english": {
        "intro": "本期分别从工作场所的分类回收和医疗债务的预防机制切入：练习辨析个人经验、制度执行与成本约束，也学习报道如何将问题证据、政策方案和实施障碍串成完整论证。",
        "articles": [
          {
            "title": "'People don't think recycling at work is part of their job description'",
            "source": "BBC",
            "published": "2026-10-09",
            "url": "https://www.bbc.co.uk/news/articles/cqe8rn65yj2ko",
            "readingTime": "约 3 分钟",
            "topic": "环境 / 工作场所回收与公共政策",
            "summary": "BBC 以威尔士几位工作者的经历呈现工作场所回收与家庭回收之间的差异：有人因单位可回收类别有限而把垃圾带回家，也有人因医院分类标识清楚而在工作中照常分类。报道随后转向制度层面，指出威尔士企业须把废弃物分为六类，但各地收集安排并不一致；Vale of Glamorgan 当地政府称新要求提高了回收物质量。文章最后呈现执行中的成本和额外劳动顾虑，同时引用当地项目负责人关于企业反应积极、分类实践逐渐成为习惯的观察，说明政策效果取决于设施、便利性和组织执行。",
            "reason": [
              "环境治理与日常行为相连，适合讨论个人习惯如何受到工作场所设施和公共政策影响。",
              "结构先列举员工经验，再介绍威尔士分类规定和地方执行，最后对照成本顾虑与实际反馈。",
              "可练习主旨题、例证作用题、观点态度题，并辨别访谈个案与整体政策效果之间的证据差异。",
              "industrialised、segregated、collection arrangements、take it in one’s stride 等表达可用于环境与职场主题。",
              "写作可借鉴“行为障碍—制度要求—执行成本—逐步适应”的论证链，避免只用个人态度解释回收率。"
            ],
            "vocabulary": [
              {
                "word": "routine",
                "phonetic": "/ruːˈtiːn/",
                "part": "n.",
                "translation": "惯例；日常程序"
              },
              {
                "word": "out and about",
                "phonetic": "/ˌaʊt ən əˈbaʊt/",
                "part": "phr.",
                "translation": "外出时；在外活动时"
              },
              {
                "word": "limited",
                "phonetic": "/ˈlɪmɪtɪd/",
                "part": "adj.",
                "translation": "有限的；受限制的"
              },
              {
                "word": "industrialised",
                "phonetic": "/ɪnˈdʌstriəlaɪzd/",
                "part": "adj.",
                "translation": "工业化的"
              },
              {
                "word": "impact",
                "phonetic": "/ˈɪmpækt/",
                "part": "n.",
                "translation": "影响；作用"
              },
              {
                "word": "category",
                "phonetic": "/ˈkætəɡəri/",
                "part": "n.",
                "translation": "类别；范畴"
              },
              {
                "word": "collection arrangements",
                "phonetic": "/kəˈlekʃən əˈreɪndʒmənts/",
                "part": "n. phr.",
                "translation": "收集/清运安排"
              },
              {
                "word": "segregated",
                "phonetic": "/ˈseɡrɪɡeɪtɪd/",
                "part": "adj.",
                "translation": "分类分开的；隔离的"
              },
              {
                "word": "critical",
                "phonetic": "/ˈkrɪtɪkəl/",
                "part": "adj.",
                "translation": "持批评态度的；关键的"
              },
              {
                "word": "take it in one’s stride",
                "phonetic": "/teɪk ɪt ɪn wʌnz straɪd/",
                "part": "idiom",
                "translation": "从容应对；泰然接受"
              }
            ],
            "sentences": [
              {
                "original": "James Jenkins, 30, said he often took rubbish home with him given the limited options where he works.",
                "analysis": [
                  "主句主干为 James Jenkins said，后接省略 that 的宾语从句 he often took rubbish home with him。",
                  "often 是频率副词，修饰 took，提示这不是一次性的行为。",
                  "given the limited options 作原因状语，说明他把垃圾带回家的背景。",
                  "where he works 是地点状语从句，限定可选回收设施所在的工作场所。",
                  "可借鉴 given + 名词短语说明行为背后的条件，而非简单归因于个人态度。"
                ],
                "translation": "詹姆斯·詹金斯说，由于工作地点可选的回收方式有限，他常把垃圾带回家。"
              },
              {
                "original": "Although businesses in Wales are now required to sort their waste into six categories, collection arrangements can vary from area to area.",
                "analysis": [
                  "Although 引导让步状语从句，先交代威尔士企业共同面对的分类要求。",
                  "从句主干是 businesses are required，are required 为被动结构，突出制度要求而非执行主体。",
                  "to sort their waste into six categories 是不定式补足语，说明具体需要完成的动作。",
                  "主句主干 collection arrangements can vary，from area to area 表示地区间差异。",
                  "句子以“规则统一—执行条件不同”构成对照，可用于分析政策落实差异。"
                ],
                "translation": "尽管威尔士企业现在必须把废弃物分成六类，但各地的收集安排可能不同。"
              },
              {
                "original": "But we've been doing segregated recycling for a couple of years now, and most people just take it in their stride.",
                "analysis": [
                  "But 承接前文对成本和额外劳动的担忧，转入当地负责人的经验回应。",
                  "前半句主干为 we have been doing recycling，现在完成进行时强调分类回收持续了数年。",
                  "for a couple of years 是持续时间状语，now 与现在完成进行时呼应。",
                  "and 连接两个并列分句；后半句主干 most people take it，it 指代分类回收的要求或做法。",
                  "take something in one’s stride 表示从容接受，可借鉴该句呈现一种措施逐步常态化。"
                ],
                "translation": "不过，我们实行分类回收已有几年了，大多数人现在都能从容应对。"
              }
            ]
          },
          {
            "title": "Medical debt is crushing hospital patients in LA. Health officials may have a fix",
            "source": "NPR",
            "published": "2026-10-08",
            "url": "https://www.npr.org/2026/10/08/nx-s1-5991633/hospital-california-healthcare-medical-debt",
            "readingTime": "约 5 分钟",
            "topic": "经济与健康 / 医疗债务和救助资格筛查",
            "summary": "NPR 报道洛杉矶县试图用“预先判定资格”减少医疗债务：医院可依据公开信息自动筛查低收入患者是否符合财务援助，而不必等患者自行发现并填写复杂申请。文章先以公共卫生部门“上游预防”的理念引出医疗欠债问题，再列出美国与洛杉矶县受债务影响的人数、患者因账单放弃处方或就诊的后果，以及医院追债效率低等证据。随后解释自动筛查如何运作、其他医院报告的援助增长和加州新规，并说明小型医院的成本障碍。结尾介绍医院协会批量采购系统和 L.A. Care 的资金支持，同时指出启动资金、数据准确度和 88 家医院是否加入仍未解决；作者强调筛查虽有助于预防，但不能单独消除医疗债务。",
            "reason": [
              "将健康公平、家庭财务负担和医疗机构治理结合起来，是常见的公共政策与社会问题主题。",
              "报道从预防理念切入，接着说明债务规模和后果，再解释资格筛查机制，最后讨论合作方案及实施不确定性。",
              "可练习因果链、数字证据作用、方案优缺点和作者结论题，并区分“可能减少”与“彻底解决”。",
              "upstream、cumbersome、eligible、presumptive eligibility、fiscal 等词汇适用于公共卫生与社会保障论述。",
              "写作可借鉴“问题成本—机制解释—集体行动—执行障碍”的结构，并用限制语保持结论审慎。"
            ],
            "vocabulary": [
              {
                "word": "upstream",
                "phonetic": "/ˌʌpˈstriːm/",
                "part": "adv./adj.",
                "translation": "在问题发生前；上游的"
              },
              {
                "word": "initiative",
                "phonetic": "/ɪˈnɪʃətɪv/",
                "part": "n.",
                "translation": "倡议；行动计划"
              },
              {
                "word": "staggering",
                "phonetic": "/ˈstæɡərɪŋ/",
                "part": "adj.",
                "translation": "令人震惊的；惊人的"
              },
              {
                "word": "cumbersome",
                "phonetic": "/ˈkʌmbərsəm/",
                "part": "adj.",
                "translation": "繁琐的；难处理的"
              },
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合资格的"
              },
              {
                "word": "presumptive eligibility",
                "phonetic": "/prɪˈzʌmptɪv ˌelɪdʒəˈbɪləti/",
                "part": "n. phr.",
                "translation": "推定资格；预先判定资格"
              },
              {
                "word": "fiscal",
                "phonetic": "/ˈfɪskəl/",
                "part": "adj.",
                "translation": "财政的"
              },
              {
                "word": "procure",
                "phonetic": "/prəˈkjʊr/",
                "part": "v.",
                "translation": "采购；取得"
              },
              {
                "word": "safety net",
                "phonetic": "/ˈseɪfti net/",
                "part": "n. phr.",
                "translation": "安全网；社会保障体系"
              },
              {
                "word": "forgo",
                "phonetic": "/fɔːrˈɡoʊ/",
                "part": "v.",
                "translation": "放弃；不再享用"
              }
            ],
            "sentences": [
              {
                "original": "We like doing things upstream, meaning before they happen, not after the damage is done.",
                "analysis": [
                  "主句主干为 We like doing things，动名词短语作 like 的宾语。",
                  "upstream 用比喻义表示在问题造成损害前采取行动。",
                  "meaning before they happen 是补充说明，解释 upstream 的具体含义。",
                  "not after the damage is done 与 before 对照，强调预防和事后补救的时间差。",
                  "可借鉴 before..., not after... 简洁表达预防优先的政策理念。"
                ],
                "translation": "我们倾向于把事情做在前面，也就是在问题发生之前，而不是等损害已经造成之后。"
              },
              {
                "original": "One potential solution is a system that automatically screens and qualifies low-income patients for financial aid without requiring an application.",
                "analysis": [
                  "主句主干为 One potential solution is a system，系表结构提出一种可能方案。",
                  "that 引导限制性定语从句，修饰 system，说明系统具体如何工作。",
                  "screens and qualifies 为并列谓语，宾语是 low-income patients，for financial aid 表明资格目标。",
                  "without requiring an application 是介词短语，requiring 为动名词，说明免去的程序。",
                  "可借鉴 a system that... without... 描述自动化方案及其减少的手续。"
                ],
                "translation": "一种可能的解决办法是建立一套系统，自动筛查并认定低收入患者的援助资格，无需他们提交申请。"
              },
              {
                "original": "But he said the public health department couldn't ignore a problem that affects more county residents than asthma or tobacco use.",
                "analysis": [
                  "But 标示转折；主句主干为 he said，后接省略 that 的宾语从句。",
                  "宾语从句主干为 the department couldn’t ignore a problem，情态动词 couldn’t 表示不能置之不理。",
                  "that affects more county residents... 是修饰 problem 的定语从句，补充其影响范围。",
                  "more... than... 构成比较级，借常见健康问题凸显医疗债务覆盖面之广。",
                  "可借鉴“cannot ignore a problem that...”提出公共机构行动责任。"
                ],
                "translation": "但他说，公共卫生部门不能忽视一个影响县内居民人数超过哮喘或烟草使用的问题。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-09",
      "status": "ready",
      "ai": {
        "intro": "昨日到今日核实到两项值得学生留意或试用的新变化，因此将检索范围扩展至近 7 天，补入 10 月 7 日 Copilot CLI 本地模型更新；免费资源重新核对官方页面，并标出未说明的价格、资格与配额。",
        "updates": [
          {
            "event": "GitHub Copilot 本地沙箱正式可用，可限制 Agent 本机命令权限（2026-10-08）",
            "summary": "GitHub 宣布本地沙箱已在 Copilot CLI、Copilot app，以及使用 Agent Host 的 VS Code 会话中正式可用。Agent 发起的命令可按用户或组织政策限制文件系统、网络、凭据等系统权限；该功能随 Copilot 提供，不另收沙箱费用。它是本机操作系统级隔离，不应理解为虚拟机或容器。",
            "howTo": "在 Copilot CLI 会话中运行 `/sandbox enable`；Copilot app 的本地仓库会话可在项目设置中启用。先按官方指南确认操作系统要求：例如 macOS 使用 15 或更高版本，Linux 需安装受支持版本的 bubblewrap；之后再按项目需要配置文件、网络与凭据权限。",
            "impact": "课程代码库中让 Agent 执行测试或脚本时，可先缩小其可读写目录和网络权限，降低误改其他文件或意外访问凭据的风险。沙箱不等于完全安全边界，仍需检查命令授权、策略范围和生成结果。",
            "free": "GitHub 明确本地沙箱不另收费，但须能使用 GitHub Copilot；各计划的账户资格、地区适用范围和调用配额官方未说明。操作系统及依赖要求因平台而异，需查看官方指南。",
            "category": "AI 编程安全 / 本地沙箱",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-08",
              "url": "https://github.blog/changelog/2026-10-08-local-sandboxing-for-github-copilot-now-generally-available/"
            }
          },
          {
            "event": "Anthropic 推出 OSS Scanner，为符合条件的开源项目提供定期 Claude 漏洞扫描（2026-10-08）",
            "summary": "Anthropic 宣布 OSS Scanner 是自愿加入的服务，会定期用其模型扫描已登记的开源项目，并向维护者发送漏洞说明、概念验证以及可用时的修复建议。扫描报告未经人工审查，可能出现错误或误报；项目必须有能力处理收到的发现。",
            "howTo": "由项目核心维护者按 OSS Scanner 官方说明，在 `anthropics/oss-scanner` 仓库提交 PR，为项目添加 `projects/<project>/project.yaml`，填写仓库、主要联系人和 Dockerfile 等配置。Anthropic 会核验维护者身份并逐案决定是否接纳。",
            "impact": "维护课程实验室或重要开源依赖的学生团队，可了解并申请额外的周期性安全检查；收到的模型发现需自行验证，不能未经复核就当成已确认漏洞或直接公开。",
            "free": "官方称获接纳项目可免费获得周期性扫描；资格面向核心维护者，并优先考虑对基础设施或用户安全影响重要、具有远程攻击面或较多依赖项目，按个案审核。具体扫描频率、名额、地区与配额官方未说明；报告未经人工审核。",
            "category": "免费 AI 安全工具 / 开源维护",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-08",
              "url": "https://www.anthropic.com/news/anthropic-cyber-mission"
            }
          },
          {
            "event": "GitHub Copilot CLI 的 `/model` 可发现本地 Ollama 模型（2026-10-07）",
            "summary": "Copilot CLI 1.0.94-0 起可从正在运行的 Ollama 实例发现受支持的本地模型，并与已配置模型及 Copilot 云模型一同显示。发现不会自动安装模型；模型须已安装并支持工具调用和流式输出。选用本地模型也不会自动关闭遥测或进入离线模式。",
            "howTo": "先安装并运行 Ollama，下载一个支持工具调用与流式输出的模型，再使用 Copilot CLI 1.0.94-0 或更新版本输入 `/model`。检查显示的提供商和端点后，选择“Add and use for this session”或“Add without switching”；如需离线运行，按官方说明另行设置离线模式。",
            "impact": "学生可在现有 CLI 工作流中尝试本机模型，并比较不同模型处理非敏感课程代码的效果；选择本地模型不代表完全离线，若配置了远程提供商，提示词和代码上下文仍可能发送到网络端点。",
            "free": "公告未说明该功能的计划/账号资格、价格、地区或配额。它依赖已安装的 Ollama 和模型以及本机硬件；本地模型的许可证和运行成本取决于所选模型及设备，官方未说明。",
            "category": "AI 编程 / 本地模型接入",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-07",
              "url": "https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot 本地沙箱：限制 Agent 本机命令的免费附加功能",
            "summary": "Copilot 本地沙箱可按策略限制 Agent 执行命令的文件访问、网络和凭据权限。官方表示本地沙箱不另收费，并支持 Copilot CLI 与 Copilot app 等本地工作流；启用前须检查各操作系统的依赖和版本要求。",
            "howTo": "在 Copilot CLI 会话运行 `/sandbox enable`，或在 Copilot app 本地会话设置中开启沙箱；先阅读官方本地沙箱指南并选择最小必要的文件和网络权限。",
            "impact": "可为课程仓库的脚本运行和代码 Agent 增加权限边界，练习安全地使用开发自动化；沙箱并非完整虚拟机隔离，仍要审查策略与执行结果。",
            "free": "GitHub 说明本地沙箱不另收费；仍需 GitHub Copilot 可用计划。各计划资格、地区和调用配额官方未说明。平台要求不同，指南列出 macOS 15+、Linux bubblewrap 等条件。",
            "category": "免费开发工具 / Agent 安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-08",
              "url": "https://github.blog/changelog/2026-10-08-local-sandboxing-for-github-copilot-now-generally-available/"
            }
          },
          {
            "event": "Anthropic OSS Scanner：开源项目可申请免费的周期性 AI 漏洞扫描",
            "summary": "Anthropic 为获接纳的开源项目提供定期模型扫描，报告包含漏洞说明、概念验证和可用时的修复建议。报告未经人工审核，官方提示可能有不准确之处，因此它是维护者的补充线索而非已确认结论。",
            "howTo": "由核心维护者阅读 OSS Scanner 的资格和配置要求，在 `anthropics/oss-scanner` 提交项目配置 PR；准备项目构建用 Dockerfile，并等待维护者身份核验和项目审核。",
            "impact": "适合有能力处理安全报告的学生开源维护团队练习漏洞复核与修补流程；收到报告后先复现、评估影响并与项目安全流程协调。",
            "free": "Anthropic 称已接纳项目的周期性扫描免费。项目须由核心维护者申请，并按重要性、远程攻击面及依赖情况逐案审核；扫描频率、地区和数量配额官方未说明。报告未经人工审核，可能错误。",
            "category": "免费工具 / 开源安全扫描",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-08",
              "url": "https://www.anthropic.com/news/anthropic-cyber-mission"
            }
          },
          {
            "event": "Microsoft Phi-4-mini-instruct：MIT 许可的公开多语言模型权重",
            "summary": "Microsoft 的 Phi-4-mini-instruct 模型卡列出 3.8B 参数和 128K token 上下文，提供可下载权重及 Transformers 推理示例，并标注 MIT 许可证。模型卡提醒其多语言表现存在差异，生成内容仍需核验。",
            "howTo": "从 Hugging Face 官方模型卡下载 `microsoft/Phi-4-mini-instruct`，按模型卡安装 Transformers、PyTorch 等依赖并使用 `AutoModelForCausalLM` 加载；先用不含隐私的文本在本机测试。",
            "impact": "适合有相应硬件的学生练习本地推理、提示词设计和中英文结果校对；对照模型卡检查设备内存需求，并把输出当作草稿而非可靠事实。",
            "free": "模型仓库公开、未设置访问门槛，权重采用 MIT 许可证；下载和本地推理不收模型调用费，但硬件、电力及软件环境由使用者承担。托管推理价格、地区和配额官方未说明。",
            "category": "免费开放权重 / 本地学习",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          },
          {
            "event": "OpenAI Whisper：MIT 许可的本地语音转写与语音翻译模型",
            "summary": "OpenAI 官方仓库公开 Whisper 代码和模型权重，支持多语言语音识别、语音翻译及语言识别，并提供不同大小的模型以权衡速度和资源需求。",
            "howTo": "按官方仓库安装 `openai-whisper` 与 ffmpeg，运行 `whisper lecture.wav --model small` 转写；非英语语音转英文须选择 multilingual 模型并使用 `--task translate`，不要用 turbo 做翻译。",
            "impact": "可把本人有权处理的课程录音转成文字，制作听力复习稿或练习英译；转写可能出错，须对照音频校订，并注意录音隐私和许可。",
            "free": "官方仓库称代码和权重按 MIT 许可证发布，可下载后本地运行；本地计算资源与软件环境由使用者承担。模型账号、地区、次数配额及托管服务价格官方未说明。",
            "category": "免费开放模型 / 语音学习工具",
            "source": {
              "name": "OpenAI GitHub",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          },
          {
            "event": "Gemini API Free Tier：Google AI Studio 可免费试用部分模型",
            "summary": "Google 官方定价页列有 Gemini API 免费层：部分模型的输入和输出 token 免费，并可从 Google AI Studio 开始。免费层提交的内容会用于改进 Google 产品，因此不适合上传未公开论文或个人资料。",
            "howTo": "打开 Google AI Studio，在官方定价页选择明确标注 Free Tier 的模型，按 API 快速开始说明发起调用；使用前逐项查看模型的速率限制和数据条款。",
            "impact": "可用于练习 API 调用、构建课程原型或比较提示词；对研究草稿和个人数据，先评估免费层的数据使用条款并避免提交敏感内容。",
            "free": "官方定价页说明部分模型的输入、输出 token 免费，但只限指定模型，且免费层内容用于改进 Google 产品。各模型具体额度、账号资格和地区条件官方未统一说明，应以所选模型页面为准。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          }
        ]
      },
      "english": {
        "intro": "本期用一篇大学生拖延研究报道练习区分描述性证据与因果解释，再以厄尔尼诺风险报道梳理气候预测、地方准备和社区韧性之间的逻辑；两篇原文均可免费阅读全文。",
        "articles": [
          {
            "title": "University students say procrastination is biggest threat to their academic performance",
            "source": "The Guardian",
            "published": "2026-10-08",
            "url": "https://www.theguardian.com/education/2026/oct/08/university-students-procrastination-biggest-threat-academic-performance",
            "readingTime": "约 5 分钟",
            "topic": "教育 / 拖延与大学生心理健康",
            "summary": "文章以一项覆盖超过 65,000 名美国年轻人的研究为中心，指出受访大学生最常把拖延列为损害学业表现的问题之一，近半数称其妨碍学术任务。报道先呈现研究结果和研究者的意外发现，再引用心理学者提醒：这是一项描述性“快照”，不能据此作过度因果推断。随后解释拖延常与逃避任务引发的困难情绪有关，短期情绪修复可能转成压力、睡眠受损和继续拖延的反馈循环。结尾否定“懒惰”或单纯时间管理缺陷的简化解释，呼吁大学采取积极干预。",
            "reason": [
              "主题关联教育公平、大学生心理健康与学习策略，适合讨论个人行为和高校支持责任。",
              "结构由大型调查结论切入，补充受访研究者与外部专家的不同判断，再解释反馈机制并落到干预建议。",
              "可练习主旨题、研究局限判断、因果链梳理，以及区分调查发现与专家解释。",
              "procrastination、impediment、salience、intervention 等词汇适用于教育、心理健康和问题解决类写作。",
              "写作可借鉴“数据描述—谨慎解释—机制分析—提出干预”的论证结构，并避免把相关性写成因果性。"
            ],
            "vocabulary": [
              {
                "word": "procrastination",
                "phonetic": "/prəˌkræstɪˈneɪʃn/",
                "part": "n.",
                "translation": "拖延；耽搁"
              },
              {
                "word": "impediment",
                "phonetic": "/ɪmˈpedɪmənt/",
                "part": "n.",
                "translation": "障碍；妨碍因素"
              },
              {
                "word": "distress",
                "phonetic": "/dɪˈstres/",
                "part": "n.",
                "translation": "痛苦；忧虑"
              },
              {
                "word": "feedback loop",
                "phonetic": "/ˈfiːdbæk luːp/",
                "part": "n.",
                "translation": "反馈循环"
              },
              {
                "word": "salience",
                "phonetic": "/ˈseɪliəns/",
                "part": "n.",
                "translation": "显著性；突出程度"
              },
              {
                "word": "snapshot",
                "phonetic": "/ˈsnæpʃɒt/",
                "part": "n.",
                "translation": "概况；某一时点的快照"
              },
              {
                "word": "hamper",
                "phonetic": "/ˈhæmpə(r)/",
                "part": "v.",
                "translation": "妨碍；阻碍"
              },
              {
                "word": "derail",
                "phonetic": "/diːˈreɪl/",
                "part": "v.",
                "translation": "使偏离计划；打乱"
              },
              {
                "word": "intervention",
                "phonetic": "/ˌɪntəˈvenʃn/",
                "part": "n.",
                "translation": "干预；介入措施"
              },
              {
                "word": "mood repair",
                "phonetic": "/muːd rɪˈpeə(r)/",
                "part": "n.",
                "translation": "情绪修复；短暂改善心情"
              }
            ],
            "sentences": [
              {
                "original": "Procrastination is the biggest problem that can harm students’ academic performance at university.",
                "analysis": [
                  "主干是 Procrastination is the biggest problem，系表结构直接提出文章核心判断。",
                  "that can harm students’ academic performance 是定语从句，修饰 problem。",
                  "at university 限定 academic performance 的语境，指出讨论对象是大学学习。",
                  "最高级 the biggest 加 can harm 将调查中的相对排序转述为鲜明结论。",
                  "写作可仿用 “X is a major problem that can affect Y” 引出教育问题。"
                ],
                "translation": "拖延是可能损害大学生学业表现的最大问题。"
              },
              {
                "original": "This descriptive study with a large sample provides some additional insights into the relative impact of procrastination with respect to its range of harms.",
                "analysis": [
                  "主干是 This study provides insights，主语后的 descriptive 标明研究性质。",
                  "with a large sample 是介词短语，补充研究样本特征。",
                  "into the relative impact of procrastination 是 insights 的内容，说明研究比较拖延造成的影响。",
                  "with respect to its range of harms 限定比较范围，避免把结论扩大到所有方面。",
                  "长句通过连续介词短语层层限定；描述性研究提供线索，但不自动证明因果关系。"
                ],
                "translation": "这项样本量较大的描述性研究，进一步揭示了拖延在不同危害方面的相对影响。"
              },
              {
                "original": "Universities should be aware that many of their students are likely to be hampered by procrastination.",
                "analysis": [
                  "主句核心是 Universities should be aware，should be aware 表示建议高校重视。",
                  "that 引导宾语从句，具体说明高校应意识到的内容。",
                  "many of their students 是从句主语；are likely to 表示可能性而非确定比例。",
                  "to be hampered by procrastination 是被动结构，突出学生受到拖延妨碍。",
                  "写作可用 “Institutions should be aware that…” 从证据过渡到政策建议。"
                ],
                "translation": "高校应意识到，许多学生可能正受到拖延的妨碍。"
              }
            ]
          },
          {
            "title": "‘Like an earthquake’: El Niño is coming for California – is the state ready?",
            "source": "The Guardian",
            "published": "2026-10-07",
            "url": "https://www.theguardian.com/us-news/2026/oct/07/california-el-nino-preparedness",
            "readingTime": "约 8 分钟",
            "topic": "环境 / 厄尔尼诺与加州复合灾害准备",
            "summary": "文章从加州湾区一次高水位淹路的现场写起，说明潜在强厄尔尼诺可能加剧加州的洪水、海岸侵蚀、山火后泥石流和高温风险。随后解释暖海温如何影响风险，并引用州气候学家和地方应急官员，展示南北加州影响不同、预测只能提高风险概率而非给出确定结果。中段按沿海社区和灾害恢复区梳理沙袋、堤岸、排水渠及应急系统等准备工作，同时指出政府资源无法在灾害初期覆盖每个人。结尾把重点落在居民预警、社区互助和韧性建设上，认为邻里联系有助于降低灾害冲击。",
            "reason": [
              "气候风险、灾害治理与社区韧性是环境和公共政策类常见考研主题。",
              "文章由现场洪水引入，解释厄尔尼诺机制和地区差异，再以官员引语列举准备行动，最后强调社区层面的应对。",
              "可练习区分风险概率与确定预测、辨认案例证据，以及推断作者对政府准备和居民互助的态度。",
              "compounding、elevated、resilience、crosshairs 等表达适用于环境风险和公共安全话题。",
              "写作可借鉴“指出复合风险—承认预测局限—列出分层准备—强调社区协作”的结构。"
            ],
            "vocabulary": [
              {
                "word": "vulnerabilities",
                "phonetic": "/ˌvʌlnərəˈbɪlətiz/",
                "part": "n.",
                "translation": "脆弱性；易受影响之处"
              },
              {
                "word": "tumultuous",
                "phonetic": "/tjuːˈmʌltʃuəs/",
                "part": "adj.",
                "translation": "动荡的；剧烈多变的"
              },
              {
                "word": "brewing",
                "phonetic": "/ˈbruːɪŋ/",
                "part": "v.",
                "translation": "正在酝酿；即将发生"
              },
              {
                "word": "crosshairs",
                "phonetic": "/ˈkrɒsˌheəz/",
                "part": "n.",
                "translation": "准星；in the crosshairs 指成为威胁或攻击目标"
              },
              {
                "word": "compounding",
                "phonetic": "/kəmˈpaʊndɪŋ/",
                "part": "adj.",
                "translation": "叠加的；复合加剧的"
              },
              {
                "word": "elevated",
                "phonetic": "/ˈelɪveɪtɪd/",
                "part": "adj.",
                "translation": "升高的；增加的"
              },
              {
                "word": "resilience",
                "phonetic": "/rɪˈzɪliəns/",
                "part": "n.",
                "translation": "韧性；恢复力"
              },
              {
                "word": "mobilize",
                "phonetic": "/ˈməʊbəlaɪz/",
                "part": "v.",
                "translation": "动员；调集"
              },
              {
                "word": "berm",
                "phonetic": "/bɜːm/",
                "part": "n.",
                "translation": "沙堤；土埂"
              },
              {
                "word": "culvert",
                "phonetic": "/ˈkʌlvət/",
                "part": "n.",
                "translation": "涵洞；排水管涵"
              }
            ],
            "sentences": [
              {
                "original": "A strong El Niño shifts the probabilities – it does not determine exact outcomes.",
                "analysis": [
                  "主句核心是 A strong El Niño shifts the probabilities，说明现象改变风险分布。",
                  "破折号后 it does not determine exact outcomes 省略重复主语所指，补充限定前句。",
                  "does not 与 shifts 构成对照：概率改变不等于具体事件必然发生。",
                  "exact 修饰 outcomes，突出预测无法精确确定个别结果。",
                  "“shift probabilities, not determine outcomes” 是表达风险而非宿命的实用结构。"
                ],
                "translation": "强厄尔尼诺会改变各种结果出现的概率，却不能决定确切结果。"
              },
              {
                "original": "The risks are but a taste of what’s to come as the world warms.",
                "analysis": [
                  "主干是 The risks are but a taste，but 在此表示“仅仅”。",
                  "of what’s to come 是介词短语，说明眼前风险只是未来可能情况的一部分。",
                  "as the world warms 是时间/背景状语从句，交代风险加深的气候背景。",
                  "taste 使用“尝到一小部分”的比喻，强调当前事件只是预示。",
                  "写作可用 “be but a taste of…” 表达当下案例预示更大趋势。"
                ],
                "translation": "随着全球变暖，这些风险不过是未来可能出现情形的一小部分。"
              },
              {
                "original": "Our communities are the fabric that gets us through these disasters – neighbors helping neighbors saves lives.",
                "analysis": [
                  "主句核心是 Our communities are the fabric，以 fabric 比喻社区关系构成支撑网络。",
                  "that gets us through these disasters 是定语从句，修饰 fabric 并说明其作用。",
                  "破折号后 neighbors helping neighbors saves lives 对前面的比喻作具体解释。",
                  "邻里互助与 saves lives 的因果表达把抽象韧性落到行动结果。",
                  "写作可借鉴“抽象判断 + 破折号 + 具体解释”的衔接方式。"
                ],
                "translation": "社区关系是帮助人们渡过灾害的纽带——邻里互助能够挽救生命。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-08",
      "status": "ready",
      "ai": {
        "intro": "核对 10 月 7 日官方产品公告，收录 Copilot 上线 Claude Haiku 5.5、GitHub 更新 AI 密钥检测，以及 Google 开放 SynthID Detector；免费资源重新核对官方定价、产品公告和模型卡，注明未公开的价格、账号与配额限制。",
        "updates": [
          {
            "event": "Claude Haiku 5.5 上线 GitHub Copilot，面向快速、高频任务（2026-10-07）",
            "summary": "GitHub 宣布 Claude Haiku 5.5 已在 Copilot 中正式提供，定位为快速、高频工作的小模型，适用于子代理、快速编辑和终端任务。模型可在 VS Code、Visual Studio、Copilot CLI、Copilot cloud agent、GitHub Copilot app、github.com、移动端、JetBrains、Xcode 和 Eclipse 的模型选择器中使用；开放正逐步推送。",
            "howTo": "在上述任一受支持 Copilot 客户端打开模型选择器，选 Claude Haiku 5.5 后用于小范围代码修改、终端任务或子代理；如果尚未显示，等待逐步开放并检查组织管理员的模型策略。",
            "impact": "课程项目中可将快速代码编辑、重复性终端工作或子代理任务交给轻量模型处理，再自行检查补丁和执行结果；调用消耗取决于使用量和所选计划的额度。",
            "free": "公告列出的可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise，不包括 Copilot Free 或 Student。该模型按提供商列表价采用基于用量的计费；具体价格见官方模型计费表。上线逐步推送；地区限制和单独配额官方未说明。",
            "category": "AI 编程工具 / 模型更新",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-07",
              "url": "https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot"
            }
          },
          {
            "event": "GitHub 将 AI 密钥检测模型用于密码告警，并规划更多检测入口（2026-10-07）",
            "summary": "GitHub 推出一款读取周边代码上下文的专用密钥检测模型，可识别包括不具备常见 token 格式的密码。已使用 AI 检测密码告警的 GHSP 或 GHAS 客户已自动切换到新模型且不额外收费；AI push protection 处于私有预览，Copilot CLI 与 App 的 `/security-review` 密钥分类检查则仍待后续预览。",
            "howTo": "若课程仓库所在组织已经启用 GHSP 或 GHAS 的 AI 密码告警，继续通过现有 secret-scanning 告警流程查看结果，模型升级无需手动切换。需要 AI push protection 的团队应由管理员先核对资格与预算，再申请预览并选择启用；不要把尚未开放的 `/security-review` 新分类器当成已上线功能。",
            "impact": "团队可了解 GitHub 正把上下文识别用于发现格式不明显的密码，但告警仍需人工确认并及时撤销暴露凭据；普通个人仓库不能据此假定已有该企业级保护。",
            "free": "现有 AI 检测密码告警对 GHSP/GHAS 客户不额外收费，但这些是有许可的安全产品。AI push protection 私有预览要求 GitHub Enterprise Cloud 或 GitHub Team 且购买 GHSP/GHAS，并将消耗 AI Credits；Copilot 密钥检查尚未开放，计划纳入 AI Credits。具体每次额度、适用地区和免费信用额官方未说明。",
            "category": "AI 开发安全 / 密钥检测",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-07",
              "url": "https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection"
            }
          },
          {
            "event": "Google 向全球英语用户开放 SynthID Detector，核验图像、视频和音频（2026-10-07）",
            "summary": "Google DeepMind 宣布 SynthID Detector 面向全球英语用户开放。用户可提交图像、视频或音频，检查其中是否带有 Google 或合作方 AI 工具生成内容的 SynthID 水印；公告点名 OpenAI、NVIDIA、Kakao，Apple 支持则称即将推出。它检查的是相应水印，不是对所有 AI 生成内容的通用识别保证。",
            "howTo": "打开 https://synthid.com/，选择图像、视频或音频文件并提交检测，查看系统是否在媒体中识别到 SynthID；若无水印结果，不应据此断定内容一定由人类创作。",
            "impact": "写报告或准备课堂展示时，可对社交平台流传的多媒体做一次来源线索核验，并在引用时保留不确定性；未检测到水印不能作为真实性证明。",
            "free": "Google 公告称该工具现面向全球任何人以英语使用；官方未说明是否收费、账号资格、上传大小或次数、保存期限及逐地区限制。",
            "category": "AI 媒体核验 / 数字素养",
            "source": {
              "name": "Google The Keyword",
              "published": "2026-10-07",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/"
            }
          }
        ],
        "deals": [
          {
            "event": "SynthID Detector：公开使用的 AI 媒体水印核验工具",
            "summary": "SynthID Detector 可供全球英语用户检查图像、视频和音频是否含有 Google 或合作方 AI 工具的 SynthID 水印，合作方包括 OpenAI、NVIDIA 和 Kakao。它只能提供水印线索，不能证明未检出水印的文件必然真实。",
            "howTo": "访问 https://synthid.com/ 并提交待核验的图像、视频或音频；把结果作为来源线索，与原发布者和其他证据一并核对。",
            "impact": "适用于课程演示、媒体素养练习和核对网络多媒体出处，不应代替事实核查或用于判断所有 AI 生成内容。",
            "free": "官方称现面向全球任何人开放英语版本，但未说明价格、账号要求、文件大小、次数配额和文件处理期限；这些限制官方未说明。",
            "category": "免费工具 / AI 媒体溯源",
            "source": {
              "name": "Google The Keyword",
              "published": "2026-10-07",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/"
            }
          },
          {
            "event": "EmbeddingGemma 2：Apache 2.0 许可的多模态嵌入模型",
            "summary": "Google DeepMind 的 EmbeddingGemma 2 开放 740M 参数权重，可把文本、代码、图像、视频和音频映射到统一向量空间，模型卡标注 Apache 2.0 许可。模型适用于本地语义搜索、分类和检索增强生成，不是直接生成文章的聊天模型。",
            "howTo": "从 https://huggingface.co/google/embeddinggemma-2 查看许可证和快速开始；按模型卡安装 `sentence-transformers` 与 `transformers`，加载 `google/embeddinggemma-2`，用 `model.encode` 为自己的学习笔记或资料生成文本向量并比较相似度。",
            "impact": "学生可用它制作离线笔记检索小实验，或学习如何把文本及多媒体转成可搜索向量；模型卡指出可按任务仅加载所需模态，实际速度取决于本地硬件。",
            "free": "权重公开并采用 Apache 2.0 许可，模型卡仓库未设访问门槛；下载权重及本地运行不收模型使用费。托管推理的价格、地区和配额、特定硬件要求官方未统一说明。",
            "category": "免费开放权重 / 多模态学习与检索",
            "source": {
              "name": "Google DeepMind 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/google/embeddinggemma-2"
            }
          },
          {
            "event": "Gemini API Free Tier：AI Studio 可免费调用部分模型",
            "summary": "Google 当前定价文档列出 Gemini API Free Tier：可从 Google AI Studio 开始，部分模型的输入和输出 token 免费；可访问的模型有限制，而且免费层数据会用于改进 Google 产品。",
            "howTo": "打开 Google AI Studio，选择官方定价页标为 Free Tier 的模型并按 API 快速开始文档发起调用；编码前核对该模型的速率限制及数据条款，不上传未公开论文或个人资料。",
            "impact": "适合学生练习 API 调用、制作课程原型或比较提示词；免费层数据处理条款意味着不应把它当作提交敏感材料的私密空间。",
            "free": "官方明确部分模型免费提供输入和输出 token，且模型访问受限、免费层内容用于改进 Google 产品；定价页未为所有模型列出统一额度，账号资格、地区资格及具体模型速率须逐项核对，通用额度官方未说明。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Qwen3-8B：Apache-2.0 许可的开放权重语言模型",
            "summary": "Qwen 官方模型卡公开 Qwen3-8B 权重，标注 Apache-2.0 许可，列出 8.2B 参数及原生 32,768 token 上下文，并提供 Transformers 加载代码。模型支持思考与非思考模式，可用于中英问答、翻译和本地推理练习。",
            "howTo": "打开模型卡查看文件与许可证；安装 Transformers 4.51.0 或更新版本，按卡片示例用 `AutoTokenizer` 和 `AutoModelForCausalLM` 加载 `Qwen/Qwen3-8B`，用非敏感课程文本测试问答或翻译。",
            "impact": "可用于练习本地部署、提示词比较和多语言任务；把模型输出当成待核实草稿，并先确认个人设备是否能承担推理。",
            "free": "官方仓库公开且未设访问门槛，模型卡标注 Apache-2.0；权重许可不等同于免费托管推理。本地硬件成本由使用者承担，托管 API 的价格、地区与用量官方未说明。",
            "category": "免费开放权重 / 多语言学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-8B"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选 The Conversation 对 2026 亚运会政治张力的评论与 The Guardian 对埃博拉疫情的报道，分别练习历史背景如何解释当下事件，以及公共卫生报道如何从个案扩展到系统性约束。",
        "articles": [
          {
            "title": "How geopolitical tensions tainted the 2026 Asian Games",
            "source": "The Conversation",
            "published": "2026-10-06",
            "url": "https://theconversation.com/how-geopolitical-tensions-tainted-the-2026-asian-games-293279",
            "readingTime": "约 6 分钟",
            "topic": "文化 / 体育赛事中的历史记忆与区域政治",
            "summary": "文章的核心判断是，亚运会虽以“想象一个亚洲”为口号，却无法与区域政治分离。作者先写日本名古屋开幕仪式呈现丰臣秀吉，引发韩国抗议，并用日本侵朝历史解释敏感性；继而讨论朝鲜运动员四十余年来首次赴日参赛及其与在日朝鲜族群体的互动，再列举朝韩比赛中的国歌误播、赛后拒绝握手等摩擦。后半转向台湾代表团遭遇的旗帜、服饰和入村争议，显示赛事组织者如何管理主权象征。结尾将这些案例概括为更具分裂性的国际体育环境中，赛事日益成为政治争议舞台；文章通过具体事件支撑评论，而非把“团结”口号直接当作现实。",
            "reason": [
              "体育与历史记忆、身份认同及文化交流交织，适合文化、社会关系和国际交流主题的考研阅读。",
              "结构从赛事口号和日方仪式切入，按日韩、朝鲜与在日社群、台湾代表团逐步扩展，最后回到总论点。",
              "可练习辨认作者观点与报道事实的区别，理解历史背景如何解释当下抗议，以及案例如何支撑结论。",
              "fragmented、delegation、diaspora、friction 等词可用于社会分歧、群体身份与国际交流话题。",
              "写作可借鉴“提出理想叙事—列出反例—解释历史成因—归纳制度影响”的结构，并用具体事件支撑抽象判断。"
            ],
            "vocabulary": [
              {
                "word": "drew to a close",
                "phonetic": "/drɔː tə ə kləʊs/",
                "part": "phr.",
                "translation": "接近尾声；结束"
              },
              {
                "word": "fragmented",
                "phonetic": "/fræɡˈmentɪd/",
                "part": "adj.",
                "translation": "分裂的；碎片化的"
              },
              {
                "word": "come to the fore",
                "phonetic": "/kʌm tə ðə fɔː/",
                "part": "phr.",
                "translation": "显现出来；成为焦点"
              },
              {
                "word": "flared",
                "phonetic": "/fleə/",
                "part": "v.",
                "translation": "（冲突、紧张局势）骤然加剧"
              },
              {
                "word": "delegation",
                "phonetic": "/ˌdelɪˈɡeɪʃn/",
                "part": "n.",
                "translation": "代表团"
              },
              {
                "word": "diaspora",
                "phonetic": "/daɪˈspɒrə/",
                "part": "n.",
                "translation": "散居群体；离散族群"
              },
              {
                "word": "friction",
                "phonetic": "/ˈfrɪkʃn/",
                "part": "n.",
                "translation": "摩擦；冲突"
              },
              {
                "word": "defiance",
                "phonetic": "/dɪˈfaɪəns/",
                "part": "n.",
                "translation": "反抗；违抗"
              },
              {
                "word": "fractured",
                "phonetic": "/ˈfræktʃəd/",
                "part": "adj.",
                "translation": "分裂的；破裂的"
              },
              {
                "word": "contention",
                "phonetic": "/kənˈtenʃn/",
                "part": "n.",
                "translation": "争议；论点"
              }
            ],
            "sentences": [
              {
                "original": "Despite the official slogan “imagine one Asia”, fragmented regional politics came to the fore as the event unfolded.",
                "analysis": [
                  "主干是 fragmented regional politics came to the fore，说明区域政治分歧浮现。",
                  "句首 Despite the official slogan 是让步状语，把赛事口号与现实结果构成对照。",
                  "as the event unfolded 是时间/过程状语从句，交代矛盾逐步显现的背景。",
                  "fragmented 修饰 politics，后半用 came to the fore 表达议题由潜在变成显著。",
                  "可借鉴 Despite + 名词，... came to the fore 的结构，写理想目标与现实落差。"
                ],
                "translation": "尽管官方口号是“想象一个亚洲”，区域政治分歧仍随着赛事展开而浮上台面。"
              },
              {
                "original": "Historical issues are an area of particular sensitivity between South Korea and Japan.",
                "analysis": [
                  "句子主干为 Historical issues are an area，主语是历史问题，表语说明其性质。",
                  "of particular sensitivity 是介词短语作后置修饰，具体界定 area。",
                  "between South Korea and Japan 限定敏感性涉及的双方。",
                  "该句把前述具体事件上升为解释背景，连接事例与作者分析。",
                  "可借鉴 an area of particular sensitivity between... 概括双边关系中的敏感议题。"
                ],
                "translation": "历史问题是韩国与日本之间一个格外敏感的领域。"
              },
              {
                "original": "The fractured regional relations on show at the 2026 Asian Games should not be viewed in isolation.",
                "analysis": [
                  "主干是 The fractured regional relations should not be viewed，使用情态动词加被动语态表达作者的判断。",
                  "on show at the 2026 Asian Games 是后置修饰语，限定所指的区域关系。",
                  "in isolation 表示孤立地看，构成作者要求读者采用整体背景理解的方式。",
                  "句子由前文多个赛事争议归纳而来，提醒读者将个案放在更广泛的世界政治中考察。",
                  "可借鉴 should not be viewed in isolation 提出分析框架，避免把事件脱离背景。"
                ],
                "translation": "亚运会上显现的区域关系裂痕，不应被孤立看待。"
              }
            ]
          },
          {
            "title": "Kenya confirms first Ebola case as virus ‘surges’ in DR Congo province",
            "source": "The Guardian",
            "published": "2026-10-06",
            "url": "https://www.theguardian.com/world/2026/oct/06/kenya-first-ebola-case-death-drc",
            "readingTime": "约 4 分钟",
            "topic": "健康 / 疫情追踪与公共卫生系统",
            "summary": "报道以肯尼亚卫生部长宣布一名从刚果（金）返国男子感染埃博拉后死亡为开端，随后补充他跨境旅行、被隔离、确诊和追踪接触者的时间线。文章指出当局列出 28 名接触者，并正寻找同机乘客；同时把个案放回刚果（金）疫情背景，援引当地病例与死亡统计及无国界医生组织对北基伍病例增长的警告。后半转向疫情控制的系统障碍：冲突、对当局的不信任、资源短缺和治疗床位不足会增加转诊风险。结尾通过援引援助组织人员的描述强化医疗能力不足的后果，使报道从单一病例扩展到公共卫生应对条件。",
            "reason": [
              "传染病、跨境监测和医疗资源配置是健康与公共政策阅读常见主题，可训练事实信息筛选。",
              "文章按确诊死亡、接触者追踪、区域传播背景、当地治疗能力障碍逐层推进。",
              "阅读题可考查个案时间线、数字对应对象、消息来源归属，以及结尾如何解释疫情应对困难。",
              "subsequently、isolate、contact tracing、hinder 等表达适用于公共卫生和风险管理语境。",
              "写作可借鉴“个案—数据—结构性制约”的论证链，并用 reported、according to 等表达清楚标注信息来源。"
            ],
            "vocabulary": [
              {
                "word": "outbreak",
                "phonetic": "/ˈaʊtbreɪk/",
                "part": "n.",
                "translation": "（疾病）暴发；疫情"
              },
              {
                "word": "strain",
                "phonetic": "/streɪn/",
                "part": "n.",
                "translation": "（病毒）毒株"
              },
              {
                "word": "subsequently",
                "phonetic": "/ˈsʌbsɪkwəntli/",
                "part": "adv.",
                "translation": "随后；之后"
              },
              {
                "word": "isolated",
                "phonetic": "/ˈaɪsəleɪt/",
                "part": "v.",
                "translation": "隔离；使孤立"
              },
              {
                "word": "contact",
                "phonetic": "/ˈkɒntækt/",
                "part": "n.",
                "translation": "（疾病患者的）接触者"
              },
              {
                "word": "hindered",
                "phonetic": "/ˈhɪndə/",
                "part": "v.",
                "translation": "阻碍；妨碍"
              },
              {
                "word": "mistrust",
                "phonetic": "/ˌmɪsˈtrʌst/",
                "part": "n.",
                "translation": "不信任"
              },
              {
                "word": "surge",
                "phonetic": "/sɜːdʒ/",
                "part": "n.",
                "translation": "激增；急剧上升"
              },
              {
                "word": "peripheral",
                "phonetic": "/pəˈrɪfərəl/",
                "part": "adj.",
                "translation": "外围的；边远地区的"
              },
              {
                "word": "instability",
                "phonetic": "/ˌɪnstəˈbɪləti/",
                "part": "n.",
                "translation": "不稳定；动荡"
              }
            ],
            "sentences": [
              {
                "original": "The man, who has not been named, had been treated in the DRC after falling ill about a month ago.",
                "analysis": [
                  "主干是 The man had been treated in the DRC，过去完成时被动语态交代报道时点之前的治疗经历。",
                  "who has not been named 是非限制性定语从句，补充说明当事人身份未公开。",
                  "after falling ill about a month ago 是时间状语，交代就医前的病程起点。",
                  "句子以匿名患者为中心，依次交代身份处理、地点和时间背景。",
                  "可借鉴 had been treated... after doing... 按先后顺序压缩叙述事件。"
                ],
                "translation": "这名男子尚未公开姓名；他约一个月前发病后，曾在刚果（金）接受治疗。"
              },
              {
                "original": "After starting in the DRC’s north-eastern Ituri province, the current outbreak has spread to seven provinces in the country’s north and east.",
                "analysis": [
                  "句首 After starting in... 是时间状语，说明疫情最初出现的地点。",
                  "主干是 the current outbreak has spread，使用现在完成时概括截至报道时的传播范围。",
                  "to seven provinces 指出扩散的数量，in the country’s north and east 进一步限定地理范围。",
                  "该句由个案转向区域发展，为后续讨论跨省传播和医疗资源压力提供背景。",
                  "可借鉴 After starting in..., ... has spread to... 描述事件从起点向更广范围扩展。"
                ],
                "translation": "当前疫情从刚果（金）东北部的伊图里省开始，已蔓延至该国北部和东部的七个省份。"
              },
              {
                "original": "Multiple outbreaks are developing at the same time, with varying intensity and in different locations.",
                "analysis": [
                  "主干为 Multiple outbreaks are developing，使用现在进行时呈现同时发生且仍在发展的状况。",
                  "at the same time 是时间状语，强调多个疫情并行。",
                  "with varying intensity and in different locations 是补充性介词短语，分别说明强度与地点差异。",
                  "这是无国界医生组织协调员的引语，呈现一线人员对疫情复杂性的描述，而非记者直接下结论。",
                  "可借鉴 with + 名词 + 并列补充项，简洁交代多个现象的差异维度。"
                ],
                "translation": "多处疫情正在同时发展，其烈度各不相同，地点也各异。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-07",
      "status": "ready",
      "ai": {
        "intro": "核对 10 月 6—7 日官方产品更新，选取 Copilot 指标修复、AI Scan 管理视图、GitHub 密钥检测与分支堆叠 PR；免费资源逐一复查官方模型卡、定价与帮助页，区分免费额度、开放权重和未说明的限制。",
        "updates": [
          {
            "event": "GitHub 修复 Copilot Agent 使用统计的 IDE 归因问题（2026-10-06）",
            "summary": "部分采用 Copilot SDK Agent 模式的 IDE 会话此前没有标明来源 IDE，导致活动漏记或被计入 Copilot CLI。GitHub 已在 VS Code 1.139.0 及之后版本推出修复，其他受影响 IDE 的修复将随更新陆续推出；旧版本产生的缺失数据无法补回。",
            "howTo": "若团队依赖 Copilot 使用指标，先将 VS Code 更新到 1.139.0 或更高版本；使用其他 IDE 时，等 GitHub 公布修复版本后升级。可在指标报告中核对 IDE 版本，确保 IDE 遥测未关闭且网络未拦截遥测端点。",
            "impact": "维护课程项目或实验室组织的同学可避免把 Agent 活动误判为 Copilot 使用下降；但历史缺失值不能补回，CLI 指标此前也可能偏高。",
            "free": "这是使用指标的归因修复，官方明确称不影响计费。适用对象为使用 Copilot SDK Agent 模式的受影响 IDE；VS Code 修复版为 1.139.0 及以后，其他 IDE 仍分批推出。价格、地区和使用额度官方未说明。",
            "category": "AI 编程工具 / Copilot 使用指标",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-06",
              "url": "https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics"
            }
          },
          {
            "event": "GitHub Security Overview 显示组织的 AI Scan 启用状态（2026-10-06）",
            "summary": "组织和企业管理员现在可在 Security Overview 的 coverage view 查看各仓库是否启用了 pull request AI Scan；汇总视图显示启用与未启用仓库数，仓库行及 CSV 导出也包含有效状态。",
            "howTo": "以组织或企业管理员身份打开 Security Overview 的 coverage view，查看 Code Scanning AI Scan 状态；可用 `code-scanning-ai-scan-pr-scan:enabled` 或 `code-scanning-ai-scan-pr-scan:not-enabled` 筛选，并导出 CSV 核对仓库覆盖情况。",
            "impact": "负责课程组织或实验室代码库的同学可盘点 AI Scan 覆盖情况，发现未启用的仓库并向管理员确认策略；这项更新提供的是可见性，不代表扫描已自动启用。",
            "free": "官方说明该状态视图面向组织与企业管理员；计划价格、地区、使用额度及是否需额外启用资格均未说明。",
            "category": "AI 开发安全 / 仓库管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-06",
              "url": "https://github.blog/changelog/2026-10-06-code-scanning-ai-scan-enablement-status-in-security-overview"
            }
          },
          {
            "event": "GitHub Secret Scanning 新增 Lovable、Pydantic 与 Supabase 密钥检测（2026-10-05）",
            "summary": "Secret Scanning 新增 Lovable API key、Pydantic Logfire token 与 AI Gateway API key，以及 Supabase OAuth access token 和 scoped personal access token 检测。Lovable 加入合作伙伴计划；公开仓库发现合作伙伴密钥时会转交服务方，用户密钥则可在公开或私有仓库触发告警。",
            "howTo": "在课程仓库检查 Secret Scanning 告警和受支持的密钥类型；不要把真实密钥提交到仓库来测试。若发现已暴露凭据，立即在对应服务中撤销或轮换，并从代码及后续提交中移除。",
            "impact": "使用 Lovable、Pydantic AI 或 Supabase 搭建原型的团队，可更早发现误提交的 API 凭据；检测覆盖增加仍不能替代提交前的密钥管理。",
            "free": "公告说明了受支持的密钥类型及合作伙伴/用户密钥的告警范围，但没有说明适用计划、价格、地区或使用额度；这些信息官方未说明。",
            "category": "AI 开发安全 / 密钥防泄漏",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-05",
              "url": "https://github.blog/changelog/2026-10-05-secret-scanning-adds-detectors-for-lovable-supabase-and-more"
            }
          },
          {
            "event": "GitHub Stacked Pull Requests 正式开放，CLI 与 Agent 工作流支持更多操作（2026-10-06）",
            "summary": "GitHub 宣布 stacked pull requests 正式可用，可把较大改动拆成较小 PR 独立审阅并合并。更新还增加堆叠 PR 的导航、重定向与合并改进；`gh stack` 扩展支持 Git worktrees，自动合并则会在未来几周逐步推出。",
            "howTo": "在 GitHub.com 的项目中按依赖关系创建堆叠 PR，利用 PR 页面查看 stack 上下文；也可查阅官方文档并使用 `gh stack` CLI 扩展。设置自动合并前，先确认每个 PR 都满足仓库的合并要求。",
            "impact": "小组作业中相互依赖的功能分支可以拆成更小的审阅单元，减少一个超大 PR 堵住队友检查的情况；签名提交和分支规则仍需按仓库设置检查。",
            "free": "官方说明该功能现已适用于所有 GitHub.com 计划；GitHub Enterprise Server 将在未来版本提供。具体 CLI 扩展、地区及使用额度官方未说明；自动合并仍在数周内逐步推出。",
            "category": "AI 开发协作 / Agent 工作流",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-06",
              "url": "https://github.blog/changelog/2026-10-06-stacked-pull-requests-generally-available"
            }
          }
        ],
        "deals": [
          {
            "event": "Qwen3-8B：Apache-2.0 许可的开放权重语言模型",
            "summary": "Qwen 官方 Hugging Face 模型卡开放 Qwen3-8B 权重，标注 Apache-2.0 许可；模型卡列出 8.2B 参数、原生 32,768 token 上下文，并提供 Transformers 加载示例。",
            "howTo": "打开模型卡查看文件与许可；安装 Transformers 4.51.0 或更新版本，按卡片示例用 `AutoTokenizer` 和 `AutoModelForCausalLM` 加载 `Qwen/Qwen3-8B`，再用课程文本测试中英问答或翻译。",
            "impact": "可用于练习本地模型部署、提示词比较和多语言任务；把模型输出当作待核实的草稿，不直接用于高风险结论。",
            "free": "模型仓库公开且未设访问门槛，模型卡标注 Apache-2.0。官方未说明下载地区或额度；本地推理所需硬件与算力成本取决于设备，模型卡未承诺免费托管推理。",
            "category": "免费开放权重 / 多语言学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-8B"
            }
          },
          {
            "event": "FLUX.1 [schnell]：可下载的 Apache-2.0 文生图权重",
            "summary": "Black Forest Labs 官方 Hugging Face 模型卡公开 12B 参数的 FLUX.1 [schnell] 权重，称其可在 1 至 4 步生成图像，并采用 Apache-2.0 许可，允许个人、科学及商业用途。",
            "howTo": "从模型卡查看使用说明与许可证；按示例安装或升级 Diffusers，加载 `black-forest-labs/FLUX.1-schnell`，用自己的提示词生成课程插图或视觉概念稿。先检查硬件是否足以本地运行。",
            "impact": "可为展示文稿、海报草图或创意作业制作配图，也适合学习扩散模型推理流程；生成图像可能不准确或带有偏见，需人工检查。",
            "free": "模型权重公开，Apache-2.0 许可允许个人、科学和商业用途；托管 API 价格、地区、账户要求及用量未在模型卡说明。本地使用需自备算力，硬件门槛官方未说明。",
            "category": "免费开放权重 / 图像生成",
            "source": {
              "name": "Black Forest Labs 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/black-forest-labs/FLUX.1-schnell"
            }
          },
          {
            "event": "Gemini API Free Tier：AI Studio 可免费试做部分模型调用",
            "summary": "Google AI for Developers 当前定价页列出 Gemini API Free Tier：可在 AI Studio 开始使用，部分模型输入与输出 token 免费，但模型访问受限；免费层内容会用于改进 Google 产品。",
            "howTo": "打开 Google AI Studio，选择定价页明确列为 Free Tier 的模型并按示例发起 API 调用；编写程序前再次核对该模型的免费层、速率限制和数据条款，不上传未公开论文或个人信息。",
            "impact": "适合做课程原型、练习 API 调用或比较提示词；免费层输入可能用于产品改进，不应把它当成适合敏感资料的私密环境。",
            "free": "官方明确部分模型输入/输出 token 免费、模型访问受限，免费层内容用于改进产品；定价页未为所有模型统一列出免费调用额度，也未说明本条所涉账户资格或地区，具体速率限制需查看所选模型页面。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Gemini Notebook 免费用户可添加最多 50 个来源进行资料问答",
            "summary": "Google 帮助中心说明，Gemini Notebook 免费用户每本笔记本最多可加入 50 个来源，支持 PDF、Office 文档、网页文字和带字幕的公开视频等；单个来源最多 500,000 词，上传文件上限为 200 MB。",
            "howTo": "打开 Gemini Notebook，新建笔记本并选择 Add sources，导入有权使用的课程文件或网页；选中来源后提问或生成摘要。网页导入仅抓取文字，付费墙页面不受支持。",
            "impact": "可把多篇课程阅读放在同一笔记本中比较论点、生成复习问题；回答时回看原文及引用，避免把模型归纳误当成作者结论。",
            "free": "官方写明免费用户最多 50 个来源、单源最多 500,000 词、上传文件最多 200 MB；地区、账户资格、额外提示额度或截止日期官方未说明。移动应用对部分功能可能有限制。",
            "category": "免费网页工具 / 来源型学习研究",
            "source": {
              "name": "Google Gemini Notebook 帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16215270?hl=en"
            }
          }
        ]
      },
      "english": {
        "intro": "本期从 BBC 商业报道与 NPR 媒体行业报道切入：一篇讨论 Jaguar 电动化转型与品牌押注，另一篇分析派拉蒙与华纳合并的市场影响，练习比较事实、公司主张与批评者预测。",
        "articles": [
          {
            "title": "From 'woke' ridicule to real car - new electric Jaguar unveiled",
            "source": "BBC",
            "published": "2026-10-07",
            "url": "https://www.bbc.co.uk/news/articles/c6je50ydld31o",
            "readingTime": "约 3 分钟",
            "topic": "商业 / 汽车品牌转型与电动化",
            "summary": "BBC 从 Jaguar 重塑品牌时引发的争议写起，报道其首款新车型 Type 01 在纽约公开亮相。文章先介绍这款纯电 Grand Tourer 的造型如何回应 Jaguar 的经典历史，再列出动力、续航和价格等数据，说明 JLR 为品牌转型投入巨大。报道没有把新车发布写成单向成功：一方面呈现公司对性能与技术的宣传，另一方面指出高昂售价、设计争议及消费者对全电动战略的不同反应。结尾将新车视为一次商业押注，核心问题是品牌能否借新方向赢得市场。",
            "reason": [
              "品牌转型、产品定价与电动化竞争是商业和科技趋势类阅读常见主题，可训练区分产品事实与企业战略判断。",
              "文章先回顾争议背景，再介绍新车设计和性能，随后讨论价格与市场反应，最后落到品牌押注。",
              "阅读题可考查车型发布为何受到关注、性能与售价数据如何构成对照，以及作者如何呈现正反反应。",
              "gamble、emblematic、hefty、reinvent 等词适合迁移到企业转型、创新成本和品牌价值主题。",
              "写作可借鉴“历史背景—产品证据—成本或风险—市场判断”的结构，避免把发布会数据直接当作商业成功。"
            ],
            "vocabulary": [
              {
                "word": "unveil",
                "phonetic": "/ˌʌnˈveɪl/",
                "part": "v.",
                "translation": "首次公开；揭晓"
              },
              {
                "word": "imposing",
                "phonetic": "/ɪmˈpəʊzɪŋ/",
                "part": "adj.",
                "translation": "气势宏大的；令人印象深刻的"
              },
              {
                "word": "deliberately",
                "phonetic": "/dɪˈlɪbərətli/",
                "part": "adv.",
                "translation": "刻意地；审慎地"
              },
              {
                "word": "emblematic",
                "phonetic": "/ˌembləˈmætɪk/",
                "part": "adj.",
                "translation": "象征性的；典型的"
              },
              {
                "word": "gamble",
                "phonetic": "/ˈɡæmbl/",
                "part": "n.",
                "translation": "冒险；押注"
              },
              {
                "word": "potent",
                "phonetic": "/ˈpəʊtənt/",
                "part": "adj.",
                "translation": "强劲的；有力的"
              },
              {
                "word": "hefty",
                "phonetic": "/ˈhefti/",
                "part": "adj.",
                "translation": "高额的；巨大的"
              },
              {
                "word": "reinvent",
                "phonetic": "/ˌriːɪnˈvent/",
                "part": "v.",
                "translation": "彻底改造；重新塑造"
              },
              {
                "word": "mixed reactions",
                "phonetic": "/mɪkst riˈækʃənz/",
                "part": "n. phr.",
                "translation": "褒贬不一的反应"
              },
              {
                "word": "strategy",
                "phonetic": "/ˈstrætədʒi/",
                "part": "n.",
                "translation": "战略；策略"
              }
            ],
            "sentences": [
              {
                "original": "But it marks a gamble for JLR, which has invested billions reinventing Jaguar and is facing mixed reactions over the new car’s design and the brand’s all-electric strategy.",
                "analysis": [
                  "主句主干是 it marks a gamble，it 指代前文的新车型，mark 在此表示“构成、意味着”。",
                  "句首 But 转折前文关于新车的介绍，提示焦点由产品参数转向商业风险。",
                  "for JLR 限定这场押注的主体；which 引导非限制性定语从句，补充 JLR 已投入巨资并正面对不同反应。",
                  "invested billions 与 is facing 并列呈现已付出的成本和当前市场反应，reinventing 作投入的用途说明。",
                  "可借鉴 mark a gamble for... 概括战略风险，再用 which 从句补充证据。"
                ],
                "translation": "但这对 JLR 而言是一场押注：它已投入数十亿重塑 Jaguar，同时新车设计与品牌全电动战略正面临褒贬不一的反应。"
              },
              {
                "original": "The new model’s electric motors are potent, producing about 1000 horsepower and allowing it to accelerate from 0-62mph in 3.2 seconds.",
                "analysis": [
                  "主干为 The new model’s electric motors are potent，说明新车型电机动力强劲。",
                  "句末 producing 与 allowing 是现在分词短语，补充说明 potent 的具体依据。",
                  "about 1000 horsepower 是 producing 的宾语，about 表示数据约数而非精确承诺。",
                  "allowing 后接宾语 it 和不定式 to accelerate，from...in...交代加速区间与用时。",
                  "可借鉴形容词判断后接分词短语，用可量化数据解释产品特征。"
                ],
                "translation": "这款新车的电动机动力强劲，可输出约 1,000 马力，并能在 3.2 秒内从静止加速至每小时 62 英里。"
              },
              {
                "original": "However, it comes at a hefty price tag, with a minimum cost of £130,000 ($172,426).",
                "analysis": [
                  "However 是句首转折副词，把论述从性能优势转向购买成本。",
                  "主干 it comes at a hefty price tag 中，come at 表示“以……为代价/价格”。",
                  "with 引导的介词短语补充说明高价的具体数额，minimum 表示这是起步价。",
                  "括号内美元金额是对英镑数字的换算说明，不是另一项独立费用。",
                  "可借鉴 However, ... with a minimum cost of... 在列举优势后引入成本限制。"
                ],
                "translation": "不过，这款车售价不菲，起价为 13 万英镑（172,426 美元）。"
              }
            ]
          },
          {
            "title": "New Hollywood era begins with an epic mega merger between Paramount and Warner Bros.",
            "source": "NPR",
            "published": "2026-10-06",
            "url": "https://www.npr.org/2026/10/06/nx-s1-5988283/paramount-warner-bros-skydance-merger-david-ellison",
            "readingTime": "约 5 分钟",
            "topic": "经济 / 媒体并购与市场竞争",
            "summary": "NPR 报道派拉蒙与华纳兄弟探索合并后的新公司 Skydance 开始运营，并梳理这笔 1,110 亿美元交易经历的抗议、诉讼和监管审查。文章先呈现新管理层关于资源整合和扩大竞争力的说法，再列出合并后归于同一集团的电影公司、流媒体平台和新闻机构。随后，报道转向反对者的担忧：媒体集中可能减少观众选择、推高订阅成本、压缩影视创作空间，并引发新闻独立性问题。结尾指出，新公司还面临巨额债务和人员去留的不确定性，说明交易完成并不等于整合风险消失。",
            "reason": [
              "媒体集中、企业并购、消费者选择和新闻独立性结合了商业与社会议题，适合训练从多方立场提炼主旨。",
              "文章从新公司成立及交易规模入手，依次交代资产整合、管理层说法、反对者质疑和后续债务压力。",
              "阅读题可考查并购方与批评者观点的差异、合并包含哪些业务，以及文章末尾提到债务的作用。",
              "conglomerate、consolidate、regulatory scrutiny、oversight 等词可迁移到商业、监管和公共传播主题。",
              "写作可借鉴“交易事实—企业理由—利益相关者担忧—未决风险”的论证结构，区分事实与预测。"
            ],
            "vocabulary": [
              {
                "word": "conglomerate",
                "phonetic": "/kənˈɡlɒmərət/",
                "part": "n.",
                "translation": "大型综合企业；企业集团"
              },
              {
                "word": "consolidate",
                "phonetic": "/kənˈsɒlɪdeɪt/",
                "part": "v.",
                "translation": "合并；巩固"
              },
              {
                "word": "regulatory",
                "phonetic": "/ˈreɡjələtəri/",
                "part": "adj.",
                "translation": "监管的；规制的"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "审查；仔细审视"
              },
              {
                "word": "competitor",
                "phonetic": "/kəmˈpetɪtə/",
                "part": "n.",
                "translation": "竞争者"
              },
              {
                "word": "acquisition",
                "phonetic": "/ˌækwɪˈzɪʃn/",
                "part": "n.",
                "translation": "收购；获得"
              },
              {
                "word": "oversight",
                "phonetic": "/ˈəʊvəsaɪt/",
                "part": "n.",
                "translation": "监督；监管"
              },
              {
                "word": "censor",
                "phonetic": "/ˈsensə/",
                "part": "v.",
                "translation": "审查；删改"
              },
              {
                "word": "inevitable",
                "phonetic": "/ɪnˈevɪtəbl/",
                "part": "adj.",
                "translation": "不可避免的"
              },
              {
                "word": "skeptical",
                "phonetic": "/ˈskeptɪkl/",
                "part": "adj.",
                "translation": "持怀疑态度的"
              }
            ],
            "sentences": [
              {
                "original": "A new era in Hollywood is set to begin with a new media conglomerate called Skydance.",
                "analysis": [
                  "主干是 A new era is set to begin，is set to 表示即将发生或预期将发生。",
                  "in Hollywood 限定新时代发生的行业范围。",
                  "with a new media conglomerate 补充伴随的新背景，called Skydance 是过去分词短语作后置定语。",
                  "句子以概括性判断开篇，为后文解释并购资产和争议搭建背景。",
                  "可借鉴 be set to + 动词原形引出即将出现的变化，再用 with 短语提供背景。"
                ],
                "translation": "好莱坞一个新时代即将随着名为 Skydance 的新媒体集团而开启。"
              },
              {
                "original": "The $111 billion merger faced months of public protests, but ultimately passed legal and regulatory challenges in the U.S. and in Europe.",
                "analysis": [
                  "but 连接两个并列分句，前半句说交易面临抗议，后半句说明最终通过法律与监管审查。",
                  "The $111 billion merger 是共同的主语，金额作前置定语强调交易规模。",
                  "months of 修饰 public protests，说明抗议持续了一段时间。",
                  "ultimately 是时间/结果副词，突出经历阻力后的结果；in the U.S. and in Europe 列出审查地区。",
                  "可借鉴 faced..., but ultimately... 并列呈现阻力与结果，避免把过程写成单一结论。"
                ],
                "translation": "这笔 1,110 亿美元的合并案遭遇数月公众抗议，但最终通过了美国和欧洲的法律与监管审查。"
              },
              {
                "original": "People against the deal predict viewers could soon have to pay more for streaming services, they could have fewer choices and there may be less risky films and TV shows.",
                "analysis": [
                  "People against the deal 是主句主语，against the deal 是介词短语后置修饰 people。",
                  "主句谓语 predict 后接观点内容；could 引出对未来的预测，而不是已经发生的事实。",
                  "后续并列列出三种担忧：订阅价格上升、选择减少，以及影视作品更趋保守。",
                  "soon 表示预期时间，less risky 修饰 films and TV shows，体现对创作风险偏好的担忧。",
                  "可借鉴 predict + 从句表达利益相关者对政策或市场变化的预期，并用并列项展开影响。"
                ],
                "translation": "反对这笔交易的人预测，观众很快可能要为流媒体服务支付更多费用、选择变少，影视作品也可能更少冒险。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-06",
      "status": "ready",
      "ai": {
        "intro": "先检索 10 月 5—6 日官方发布，符合学生可尝试或需要了解的新变化不足 3 项，因此扩展到此前 7 天；来源均保留实际发布日期。免费资源重新核对了官方定价、帮助文档或模型卡，并优先补入不同类型的研究工具和开放模型。",
        "updates": [
          {
            "event": "Google 发布 Gemini 4 Argon，面向编码与企业知识工作（2026-09-30）",
            "summary": "Google 宣布 Gemini 4 Argon，定位于长程编码、企业知识工作及网络防御等任务；公告描述了编码、推理、多模态和持续执行多步骤任务等方向。发布页当时称模型即将推出，没有给出面向所有用户的立即开放时间。",
            "howTo": "先阅读 Google 官方发布页并留意后续可用性公告；该发布页没有提供公开申请或立即体验的操作步骤，不能据此假定当前账户已获开放。",
            "impact": "学生可把它视为复杂代码维护和多步骤资料处理方向的新模型，但目前应把发布信息与实际可用性区分；等官方明确开放入口后，再用非敏感课程代码或资料试用。",
            "free": "官方公告称模型将推出，但未说明免费或付费计划、账户资格、可用地区、推出时间及使用额度；以上均为“官方未说明”。",
            "category": "AI 模型 / 编码与知识工作",
            "source": {
              "name": "Google 博客",
              "published": "2026-09-30",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
            }
          },
          {
            "event": "GitHub Secret Scanning 新增 Lovable、Pydantic 与 Supabase 密钥检测（2026-10-05）",
            "summary": "GitHub 为 Secret Scanning 增加 Lovable API key、Pydantic Logfire token 与 AI Gateway API key，以及 Supabase OAuth access token 和 scoped personal access token 等检测类型。公告说明，公开仓库中发现的合作伙伴密钥会转交给相应服务方；用户密钥则会在公开或私有仓库触发告警。",
            "howTo": "检查课程仓库的 Secret Scanning 告警及已支持的密钥类型；若真实密钥误入代码库，立即在对应服务商处撤销或轮换，并从后续提交中移除，切勿用真实凭据测试检测功能。",
            "impact": "使用 Lovable、Pydantic 或 Supabase 做课程原型的团队，可更早发现误提交的凭据；告警有助于缩短密钥暴露时间，但不能替代提交前的保密检查。",
            "free": "公告说明检测类型及公开仓库合作伙伴密钥转交通知、公开或私有仓库用户密钥告警；未说明适用计划、价格、地区或使用额度，均为“官方未说明”。",
            "category": "开发安全 / 密钥防泄漏",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-05",
              "url": "https://github.blog/changelog/2026-10-05-secret-scanning-adds-detectors-for-lovable-supabase-and-more"
            }
          },
          {
            "event": "GitHub App 安装令牌完成无状态格式迁移（2026-10-02）",
            "summary": "GitHub 已完成无状态 GitHub App 安装令牌的分阶段推出；新签发令牌默认采用 ghs_APPID_JWT 格式，长度约 520 字符，而非旧格式的 40 字符。令牌权限、仓库范围和一小时有效期保持不变；用于验证新格式的临时请求头计划于 2026-11-30 弃用。",
            "howTo": "如果课程项目维护 GitHub App，检查验证规则、数据库字段、代理和日志脱敏规则是否假定令牌恰为 40 个字符；用两种格式测试集成，并在 2026-11-30 前从生产代码移除临时请求头。",
            "impact": "学生团队可以避免因固定长度校验或字段截断导致 GitHub App 工作流失效，也能把凭据视为不透明字符串，减少日志误记或授权头被截断的风险。",
            "free": "公告称新格式默认用于新签发的 GitHub App 安装令牌，未说明价格、计划资格、地区或额度；这些信息均为“官方未说明”。",
            "category": "开发工具 / GitHub App 集成",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-02",
              "url": "https://github.blog/changelog/2026-10-02-stateless-github-app-installation-tokens-rolled-out"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Notebook：免费标准额度可整理课程资料并基于来源提问",
            "summary": "Google 帮助中心说明，免费用户可在 Gemini Notebook 中添加最多 50 个来源；支持 PDF、Office 文档、网页链接和带字幕的公开视频等材料，并可针对导入来源提问或生成摘要。",
            "howTo": "打开 Gemini Notebook，新建笔记本并添加课程 PDF、文档或网页链接；选中相关来源后提问或生成摘要。网页导入只抓取页面文字，付费墙网页不受支持。",
            "impact": "可把多篇课程阅读或公开资料放进同一笔记本，按来源比较观点、生成复习问题；提问时核对引用材料，避免把模型归纳误当成原文结论。",
            "free": "官方说明免费用户最多可添加 50 个来源，每个来源最多 500,000 词或上传文件 200 MB；账户资格、地区、具体提示额度及截止日期“官方未说明”。",
            "category": "免费网页工具 / 来源型学习研究",
            "source": {
              "name": "Google Notebook 帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16215270?hl=en"
            }
          },
          {
            "event": "SmolLM3-3B：可下载的 Apache-2.0 开放模型权重",
            "summary": "Hugging Face 上 HuggingFaceTB 官方模型卡提供 SmolLM3-3B 的开放权重和 Transformers 本地运行示例；模型卡标明 Apache-2.0 许可，并描述了混合推理和最长 128k token 的上下文支持。",
            "howTo": "打开模型卡查看文件与许可证；按示例安装 Transformers 4.53.0 或更新版本，通过 AutoTokenizer 和 AutoModelForCausalLM 从 Hugging Face 加载 HuggingFaceTB/SmolLM3-3B，再在本地运行提示词实验。",
            "impact": "适合课程作业中练习本地模型加载、提示模板和离线文本生成；学生可在 Apache-2.0 条款下研究开放权重，但部署仍需要足够的本地或云端算力。",
            "free": "官方模型卡标注 Apache-2.0，公开提供模型权重；模型文件下载、账户和地区限制未说明，本地硬件或云端算力成本也未说明。",
            "category": "免费开放权重 / 本地模型学习",
            "source": {
              "name": "HuggingFaceTB 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/HuggingFaceTB/SmolLM3-3B"
            }
          },
          {
            "event": "Gemini API 与 Google AI Studio：部分模型提供免费层",
            "summary": "Google AI for Developers 定价页列出 Gemini API Free Tier：可在 AI Studio 开始使用，部分模型的输入和输出 token 免费，但可用模型受限。官方说明免费层内容会用于改进产品，因此不宜直接提交未公开论文、个人资料或课程答案。",
            "howTo": "打开 Google AI Studio，选择明确标为 Free Tier 的 Gemini 模型并从示例开始调用；写入个人 API key 前先检查所选模型、计费层及数据使用条款。",
            "impact": "可用于课程原型中的文本生成 API、提示词练习和输出比较；处理作业草稿时先移除个人信息，并注意免费层输入可能用于产品改进。",
            "free": "官方列出部分模型免费输入和输出 token，并称模型访问受限；适用模型的完整调用额度、免费层地区及账户资格均为“官方未说明”。免费层内容用于改进产品，不等于无限调用或所有模型免费。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划文档列出免费的 Copilot Free，包含有限的编程辅助功能；个人开发者每月可获得 2,000 次 inline code completions。Free 与 Student 计划的模型通过自动选择提供。",
            "howTo": "用个人 GitHub 账户开通 Copilot Free，在支持的 IDE 中安装 Copilot 并启用行内补全；在 IDE 里检查当前计划与用量，避免将代码补全次数误认为聊天请求额度。",
            "impact": "适合学生在课程编程中试用行内补全、改写重复代码或理解 API 调用；每月额度有限，仍应检查生成代码并理解其行为。",
            "free": "个人 Copilot Free 每月 2,000 次行内补全，功能受限；仅适用于未通过组织或企业获得 Copilot 的个人开发者。聊天功能、账户地区和免费计划截止日期等信息以官方未说明为准。",
            "category": "免费编程助手 / 学生开发",
            "source": {
              "name": "GitHub Copilot 官方计划文档",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选取 10 月 5 日的 BBC 教育报道与 NPR 文化回顾，分别讨论学生抗议背后的教育诉求，以及儿童读物改编为电视作品的过程。",
        "articles": [
          {
            "title": "France braces for national day of school protests after injuries and mass arrests",
            "source": "BBC",
            "published": "2026-10-05",
            "url": "https://www.bbc.co.uk/news/articles/cr4g1q1elxnjo",
            "readingTime": "约 2 分钟",
            "topic": "教育 / 学生抗议与公共服务",
            "summary": "BBC 报道法国学生组织呼吁举行全国性行动，要求增加教育投入；此前一周的示威已扩散到数百所学校，报道列出受伤和逮捕人数，并交代冲突升级的背景。政府称已推出回应措施，但学生组织认为没有具体承诺，教师工会也支持参加行动。文章随后说明示威从巴黎扩散至全国，诉求包括教室拥挤、校舍破旧和教师不足；结尾补充抗议由高中生发起、大学生后来加入，交代参与群体的变化。",
            "reason": [
              "教育资源、学生参与和公共服务供给是常见社会议题，可练习区分诉求、政府回应与组织立场。",
              "文章先交代全国行动及冲突背景，再呈现政府与学生组织分歧，随后列出具体教育问题并说明运动扩散过程。",
              "阅读题可考查政府措施为何未说服组织、示威诉求有哪些，以及末段说明参与群体变化的作用。",
              "brace、mobilisation、deadlock、overcrowded 等词可迁移到校园治理、公共资源和社会运动主题。",
              "写作可借鉴“事件背景—双方立场—具体原因—参与范围”的结构，避免把抗议简化为单一原因。"
            ],
            "vocabulary": [
              {
                "word": "brace",
                "phonetic": "/breɪs/",
                "part": "v.",
                "translation": "为……作准备；准备应对"
              },
              {
                "word": "nationwide",
                "phonetic": "/ˌneɪʃnˈwaɪd/",
                "part": "adj.",
                "translation": "全国范围的"
              },
              {
                "word": "demonstration",
                "phonetic": "/ˌdemənˈstreɪʃn/",
                "part": "n.",
                "translation": "示威；集会"
              },
              {
                "word": "blockade",
                "phonetic": "/blɒˈkeɪd/",
                "part": "v./n.",
                "translation": "封锁；阻塞"
              },
              {
                "word": "mobilisation",
                "phonetic": "/ˌməʊbɪlaɪˈzeɪʃn/",
                "part": "n.",
                "translation": "动员；动员行动"
              },
              {
                "word": "deadlock",
                "phonetic": "/ˈdedlɒk/",
                "part": "n.",
                "translation": "僵局"
              },
              {
                "word": "repression",
                "phonetic": "/rɪˈpreʃn/",
                "part": "n.",
                "translation": "镇压；压制"
              },
              {
                "word": "overcrowded",
                "phonetic": "/ˌəʊvəˈkraʊdɪd/",
                "part": "adj.",
                "translation": "过度拥挤的"
              },
              {
                "word": "run-down",
                "phonetic": "/ˌrʌn ˈdaʊn/",
                "part": "adj.",
                "translation": "破旧的；失修的"
              },
              {
                "word": "urge",
                "phonetic": "/ɜːdʒ/",
                "part": "v.",
                "translation": "敦促；力劝"
              }
            ],
            "sentences": [
              {
                "original": "The protests were started by high school students, who were later joined by university students.",
                "analysis": [
                  "主句核心是 The protests were started，使用一般过去时被动语态，突出抗议行动而非发起者。",
                  "by high school students 补出施事者，回答谁最先发起抗议。",
                  "who 引导非限制性定语从句，补充说明高中生后来有大学生加入。",
                  "later 标示时间推进；主句与从句合起来呈现参与群体逐步扩大的过程。",
                  "可借鉴 be started by...，再用 who 从句补充事件中的后续变化。"
                ],
                "translation": "抗议最初由高中生发起，后来有大学生加入。"
              },
              {
                "original": "Some other organisations have also shown their support for the students, with the teachers' union SNES-FSU urging its members to join Tuesday's protest.",
                "analysis": [
                  "主句核心是 Some other organisations have shown their support，使用现在完成时说明支持行动已出现。",
                  "for the students 指明 support 的对象；also 表示这并非唯一一个支持方。",
                  "with 后接 the teachers' union... urging... 构成 with 复合结构，补充说明教师工会如何支持。",
                  "to join Tuesday's protest 是不定式短语，说明工会敦促成员采取的行动。",
                  "可借鉴 with + 名词 + -ing 在主句后补充同步发生的背景或行动。"
                ],
                "translation": "其他一些组织也表示支持学生，教师工会 SNES-FSU 还敦促成员参加周二的抗议。"
              },
              {
                "original": "The wave of demonstrations began in September in Paris and has spread across the country, with students protesting over a range of issues, including overcrowded classrooms, run-down buildings, and a lack of teachers.",
                "analysis": [
                  "主干由 began 与 has spread 两个并列谓语构成，分别交代运动的起点和后来扩散的结果。",
                  "in September in Paris 和 across the country 分别给出时间地点与扩散范围。",
                  "with students protesting... 是 with 复合结构，补充说明抗议者正在回应的问题。",
                  "including 引出例示，列出拥挤教室、失修建筑和教师短缺等诉求。",
                  "一般过去时与现在完成时搭配，呈现从过去起始并延续至当前的变化。"
                ],
                "translation": "示威浪潮于 9 月从巴黎开始，现已扩展至全国；学生抗议的问题包括教室拥挤、校舍破旧和教师短缺。"
              }
            ]
          },
          {
            "title": "The iconic Arthur Read made his TV debut 30 years ago",
            "source": "NPR",
            "published": "2026-10-05",
            "url": "https://www.npr.org/2026/10/05/g-s1-146052/arthur-read-tv-debut-30-anniversary",
            "readingTime": "约 5 分钟",
            "topic": "文化 / 儿童阅读与电视改编",
            "summary": "NPR 借《Arthur》电视首播三十周年，回顾角色从绘本走向电视的过程。文章先讲作者 Marc Brown 如何根据儿子的睡前故事请求创作土豚 Arthur，又说明为了让角色戴眼镜并面向读者，作者重新调整形象；随后写到制片人 Carol Greenwald 认为绘本能让孩子愿意继续阅读，因而推动电视改编。Brown 起初担心失去角色控制权，但 GBH 的合作和图书销量变化促成了改编；节目后来以学校、家庭和社区关系为主题发展出长期系列。文章也纳入节目播出争议，呈现儿童电视的文化影响并非全无分歧，最后回到阅读、家庭和归属感等持续主题。",
            "reason": [
              "儿童阅读、电视改编与文化传播适合讨论媒介如何影响阅读兴趣，也避免只从商业成功评价作品。",
              "文章按绘本起源、人物设计、电视改编、长期影响和争议展开，时间线清晰，并穿插创作者及制片人的回忆。",
              "阅读题可考查角色设计改变的原因、电视改编如何带动阅读，以及结尾争议如何修正单纯的怀旧叙述。",
              "pivotal、resonate、preserve、underlying 等词汇适用于文化作品、教育效果和媒介影响类文章。",
              "写作可借鉴“起源—转折—影响—限制”的人物或作品介绍框架，并用引语补充当事人视角。"
            ],
            "vocabulary": [
              {
                "word": "protagonist",
                "phonetic": "/prəˈtæɡənɪst/",
                "part": "n.",
                "translation": "主角；主人公"
              },
              {
                "word": "aardvark",
                "phonetic": "/ˈɑːdvɑːk/",
                "part": "n.",
                "translation": "土豚"
              },
              {
                "word": "debut",
                "phonetic": "/ˈdeɪbjuː/",
                "part": "n./v.",
                "translation": "首次亮相；初次登场"
              },
              {
                "word": "pivotal",
                "phonetic": "/ˈpɪvətl/",
                "part": "adj.",
                "translation": "关键的；核心的"
              },
              {
                "word": "resonate",
                "phonetic": "/ˈrezəneɪt/",
                "part": "v.",
                "translation": "引起共鸣；产生影响"
              },
              {
                "word": "preserve",
                "phonetic": "/prɪˈzɜːv/",
                "part": "v.",
                "translation": "保留；维护"
              },
              {
                "word": "milestone",
                "phonetic": "/ˈmaɪlstəʊn/",
                "part": "n.",
                "translation": "里程碑；重要阶段"
              },
              {
                "word": "underlying",
                "phonetic": "/ˌʌndəˈlaɪɪŋ/",
                "part": "adj.",
                "translation": "潜在的；根本的"
              },
              {
                "word": "evolve",
                "phonetic": "/ɪˈvɒlv/",
                "part": "v.",
                "translation": "发展；演变"
              },
              {
                "word": "relatable",
                "phonetic": "/rɪˈleɪtəbl/",
                "part": "adj.",
                "translation": "能引起共鸣的；易于理解的"
              }
            ],
            "sentences": [
              {
                "original": "Although Greenwald believed Arthur was ready to make his public television debut, Brown was less sure.",
                "analysis": [
                  "主句核心是 Brown was less sure，说明 Brown 对改编持保留态度。",
                  "Although 引导让步状语从句，交代 Greenwald 相信 Arthur 已准备好登上公共电视。",
                  "从句中的 believed 后接省略 that 的宾语从句，宾语从句核心为 Arthur was ready。",
                  "Although 从句与主句形成意见对照，解释电视改编为何存在协商过程。",
                  "可借鉴 Although A..., B... 表达双方看法不同而不割裂前后论证。"
                ],
                "translation": "尽管 Greenwald 认为 Arthur 已准备好登上公共电视，Brown 却没有那么确定。"
              },
              {
                "original": "Though they were not an immediate commercial success, Brown's picture books resonated with families, including Carol Greenwald's.",
                "analysis": [
                  "主句核心是 Brown's picture books resonated with families，说明绘本逐渐获得家庭读者共鸣。",
                  "Though 引导让步状语从句，先承认绘本并未立即取得商业成功。",
                  "immediate 修饰 commercial success，限定成功出现的时间，而非否认后来受到欢迎。",
                  "including Carol Greenwald's 是补充例证，说明 families 中包括制片人 Greenwald 的家庭。",
                  "该句以“起初不成功但后来共鸣”形成转折，可借鉴 Though... 主句结构。"
                ],
                "translation": "尽管 Brown 的绘本并未立刻取得商业成功，却引起了许多家庭的共鸣，其中包括 Carol Greenwald 一家。"
              },
              {
                "original": "The principles of believing in yourself, valuing family and friendship, and loving reading carried from season to season.",
                "analysis": [
                  "主干是 The principles... carried，主语为 principles，谓语 carried 表示这些理念贯穿系列。",
                  "of 后接三个并列的动名词短语，分别说明理念内容：自信、重视家庭友谊和热爱阅读。",
                  "from season to season 是重复结构，表示这些主题跨越多个播出季持续存在。",
                  "该句从剧情层面概括节目长期价值，承接前文对角色和系列发展的描述。",
                  "可借鉴 the principles of... 概括作品或项目所传达的并列价值观。"
                ],
                "translation": "相信自己、珍视家庭与友谊、热爱阅读这些理念贯穿了每一季。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-05",
      "status": "ready",
      "ai": {
        "intro": "已检索 10 月 4—5 日官方公告，符合“学生可试用或需了解”的新变化不足 3 项，按要求扩展到此前 7 天；每项按来源真实发布日期标注。免费资源重新核验官方定价、帮助或模型卡页面。",
        "updates": [
          {
            "event": "Copilot 代码审查 API 支持 REST、GraphQL 请求，并将 Balanced 设为默认（2026-10-02）",
            "summary": "GitHub 为 Copilot code review 开放 REST 与 GraphQL API 请求，可在每次请求时设置审查力度；默认审查力度也改为 Balanced。此 API 能力已面向 Copilot Pro、Pro+、Max、Business 和 Enterprise 一般可用；先前主动选择 Lite 的个人或团队设置会保留。",
            "howTo": "在 GitHub PR 工作流或自有脚本中调用受支持的 REST/GraphQL API 请求 Copilot review，并按请求选择 effort；若要在网页调整默认级别，个人进入头像 > Copilot settings > Copilot > Code review，仓库和组织管理员可在各自 Copilot > Code review 设置中改为 Lite。",
            "impact": "课程小组可把 PR 初审接入已有 CI 或作业提交流程，并按代码规模选择审查力度；默认 Balanced 比只依赖人工手动发起更便于形成一致的复核习惯，但生成意见仍需人工判断。",
            "free": "API 功能适用于公告列出的 Copilot Pro、Pro+、Max、Business、Enterprise 计划，Free 未列入。该公告未说明各计划价格、可用地区或 API 请求额度；Balanced 默认变更于 2026-09-28 生效。",
            "category": "AI 编程 / 代码审查",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-02",
              "url": "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level"
            }
          },
          {
            "event": "GitHub Copilot CLI 与应用预览桌面 computer use（2026-10-01）",
            "summary": "GitHub 在 Copilot CLI 和 macOS、Windows 版 GitHub Copilot app 中公开预览 computer use。经用户授权后，Copilot 可读取桌面应用可访问内容和视觉上下文，并点击、输入、滚动及跨应用操作；组织设置可禁用此功能。",
            "howTo": "CLI 交互会话中输入 /computer on 开启，用 /computer show 检查状态、/computer off 关闭；Copilot app 用户进入 Settings > Computer Use 并启用 Enable Computer Use。macOS 需要按引导授予辅助功能与屏幕录制权限；描述任务前先检查会涉及的应用和约束。",
            "impact": "学生可尝试让代理处理没有 API 或命令行入口的桌面软件，例如在演示文稿中整理课程信息；审批提示与权限设置有助于保留人工控制，但不应在未核对操作时让它处理敏感资料。",
            "free": "目前是 public preview，支持 Copilot CLI 以及 macOS、Windows 桌面应用；Copilot 控制应用前需获批准，用户可将应用设为始终允许，组织管理员也可关闭此功能。公告未说明适用计划、价格、地区或使用额度；macOS 还需授予系统权限。",
            "category": "AI 编程 / 桌面代理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-01",
              "url": "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps"
            }
          },
          {
            "event": "VS Code 9 月版本扩展代理任务自动化与 Dev Container 支持（2026-10-01）",
            "summary": "GitHub 汇总 VS Code 1.136—1.140（2026 年 9 月陆续发布）的 Copilot 更新：Agents window 可排定按小时、每日或每周运行的任务，也能让代理处理 PR review feedback、失败检查与合并冲突；本地或远端文件夹可从菜单启动 Dev Container agent session。排程和 agent merge 等功能仍标为预览。",
            "howTo": "更新 VS Code 后打开 Agents window，选择本地或远程文件夹菜单中的 Use Dev Container，在项目容器中启动代理会话；也可从代理会话打开 pull request 表单，检查标题和描述后创建 PR。要使用排程或 agent merge，先确认对应功能仍处于 preview 并在界面启用。",
            "impact": "学生可在项目配置的容器中复现相同开发工具和依赖，再用代理整理 PR 或检查失败项，减少“本机能运行、同伴机器不能运行”的课程协作问题；自动合并和排程适合先在非关键分支试验。",
            "free": "公告覆盖 VS Code 1.136—1.140；其中自动化、agent merge、自动清理等功能明确处于 preview。该发布摘要未说明各功能所需账户计划、价格、地区和调用额度；需使用 VS Code，具体账户资格以界面实际开放为准。",
            "category": "AI 编程 / VS Code 代理工作流",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-01",
              "url": "https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini API 与 Google AI Studio：部分模型提供免费层",
            "summary": "Google AI for Developers 定价页列出 Gemini API Free Tier：可在 AI Studio 开始使用，部分模型的输入和输出 token 价格为免费，但可用模型受限。官方同时说明免费层的内容会用于改进产品，因此不宜直接提交未公开论文、个人资料或课程答案。",
            "howTo": "打开 Google AI Studio，选择明确标为 Free Tier 的 Gemini 模型并从示例开始调用；在写入个人 API key 前先检查本次选择的模型、计费层及数据使用条款。",
            "impact": "可用来给课程原型接入文本生成 API、练习提示词和比较输出；用作业草稿时先移除个人信息，并注意免费层输入可能用于产品改进。",
            "free": "官方列出部分模型免费输入和输出 token，并称模型访问受限；页面未给出此处适用模型的完整调用额度、免费层地区及账户资格，均为“官方未说明”。免费层内容用于改进产品；不要把免费价格误解为无限调用或适用于所有模型。",
            "category": "免费 API / AI 开发学习",
            "source": {
              "name": "Google AI for Developers 定价文档",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Gemini Apps：个人 Google 账户可使用无付费计划的基础额度",
            "summary": "Google 帮助中心说明，没有 Google AI 计划的 Gemini Apps 用户仍受计算资源用量限制；额度会综合提示复杂度、模型、功能和对话长度计算，而不是固定消息数。",
            "howTo": "用个人 Google 账户打开 Gemini Apps，先用基础功能做概念解释、阅读提问或复习提纲；在达到当前用量上限后等待刷新，不要把高负载功能视作随时可用。",
            "impact": "无需先订阅即可尝试网页学习助手，适合将课程阅读拆成短问题；高需求时部分功能可能对无计划用户暂不可用，关键作业应保留其他工作方式。",
            "free": "无 Google AI 计划用户按计算资源使用限制运行；额度每 5 小时刷新，另受周上限约束，具体 prompt 数量官方未说明。限额会变化，部分高计算功能在需求高时可能不可用；该帮助页针对个人账户，完整地区可用范围官方未说明。",
            "category": "免费网页 / 学习助手",
            "source": {
              "name": "Google Gemini Apps 帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/gemini/answer/16275805?hl=en"
            }
          },
          {
            "event": "Claude Free：日常问答的免费计划",
            "summary": "Claude 官方定价页列有 Free 计划，可用于日常问题。免费用量按滚动五小时会话窗口重置；实际容量取决于对话长度、模型和使用功能，不保证固定消息条数。",
            "howTo": "从 Claude 网页或移动端登录后选择 Free 计划，用短段落请它解释概念、比较阅读观点或生成自测题；在 Settings > Usage 查看当前额度，并对照原文核查事实。",
            "impact": "可作为英语阅读和课程复习的日常辅助；把长资料拆分成问题可更好控制额度，且模型生成内容不应直接代替论文证据。",
            "free": "Free 计划覆盖日常问题；用量按滚动 5 小时窗口重置，没有固定消息数，并可能受到其他周/月周期限制。免费账户资格和完整地区可用范围官方未说明；用量还随模型、对话长度和功能变化。",
            "category": "免费网页 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Qwen3-4B：可下载的 Apache-2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡公开 Qwen3-4B 权重、Transformers 加载示例及本地运行方式；仓库许可证为 Apache-2.0。模型卡给出的原生上下文长度为 32,768 token，并列出本地应用和推理框架选项。",
            "howTo": "打开 Qwen/Qwen3-4B 模型卡，从 Files and versions 获取模型文件；按卡片示例安装较新版本 Transformers 与 Accelerate，再用 AutoTokenizer 和 AutoModelForCausalLM 加载模型。运行前先查看设备内存与模型文件需求。",
            "impact": "适合在本地实验文本生成、双语提示或课程代码中的模型接入，也可阅读许可证理解开放权重与商业软件服务的区别；本地推理仍需要合适硬件。",
            "free": "模型仓库的 LICENSE 为 Apache-2.0，权重可从公开 Hugging Face 仓库获取；许可证使用须遵循其条款。模型文件本身的地区限制、账户要求及本地运行所需硬件额度官方未说明；部署硬件或云算力可能另有成本。",
            "category": "免费开放权重 / 本地模型学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡与许可证",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选取 10 月 5 日与 10 月 3 日的免费全文，分别讨论儿童读物代表性与社会平等；按原文梳理观点、证据和论证结构。",
        "articles": [
          {
            "title": "Children’s books with Black main characters down 8% in a year, study shows",
            "source": "The Guardian",
            "published": "2026-10-05",
            "url": "https://www.theguardian.com/books/2026/oct/05/childrens-books-with-black-main-characters-down-study-uk",
            "readingTime": "5 分钟",
            "topic": "文化 / 儿童出版与代表性",
            "summary": "《卫报》依据公益组织 Inclusive Books for Children 对英国 2025 年 2,189 本儿童读物的调查指出，只有 47 本（2.1%）以黑人角色为主角，较上一年减少 7.8%；仅 150 本（6.9%）呈现少数族裔、残障或神经多样性主角。报道将这些比例与相关儿童人口占比对照，并补充残障主角图画书数量骤减、神经多样性角色有所增加等不同方向的变化。文章随后引用作者和早教专家，批评把身份本身当作唯一故事内容的“偶然代表”不足，主张孩子也应在普通的友情、冒险和日常故事中看到多样角色；结尾保留进展迹象，同时强调出版界仍需改善。",
            "reason": [
              "儿童阅读、文化代表性和出版公平属于教育与社会文化议题，可练习把个体经验放进群体数据中分析。",
              "文章先用调查数字提出问题，再横向比较群体、引入专家评价，最后补充进展并回到改进呼吁，论证层次清楚。",
              "阅读题可考查比例数据的比较对象、专家引语的作用，以及 incidental representation 指什么。",
              "representation、marginalised、neurodivergent 等词汇可迁移至教育公平、文化多样性和公共传播话题。",
              "写作可借鉴“统计数据—结构性解释—反方或进展信息—有限结论”的展开方式，避免只凭个案下结论。"
            ],
            "vocabulary": [
              {
                "word": "representation",
                "phonetic": "/ˌreprɪzenˈteɪʃn/",
                "part": "n.",
                "translation": "代表；呈现；代表性"
              },
              {
                "word": "marginalised",
                "phonetic": "/ˈmɑːdʒɪnəlaɪzd/",
                "part": "adj.",
                "translation": "被边缘化的"
              },
              {
                "word": "neurodivergent",
                "phonetic": "/ˌnjʊərəʊdaɪˈvɜːdʒənt/",
                "part": "adj.",
                "translation": "神经多样性的"
              },
              {
                "word": "survey",
                "phonetic": "/ˈsɜːveɪ/",
                "part": "n.",
                "translation": "调查；抽样研究"
              },
              {
                "word": "incidental",
                "phonetic": "/ˌɪnsɪˈdentl/",
                "part": "adj.",
                "translation": "附带的；非刻意呈现的"
              },
              {
                "word": "reliance",
                "phonetic": "/rɪˈlaɪəns/",
                "part": "n.",
                "translation": "依赖；依靠"
              },
              {
                "word": "reflect",
                "phonetic": "/rɪˈflekt/",
                "part": "v.",
                "translation": "反映；体现"
              },
              {
                "word": "decline",
                "phonetic": "/dɪˈklaɪn/",
                "part": "n./v.",
                "translation": "下降；减少"
              },
              {
                "word": "feature",
                "phonetic": "/ˈfiːtʃə(r)/",
                "part": "v.",
                "translation": "以……为特色；使……担任主角"
              },
              {
                "word": "diversity",
                "phonetic": "/daɪˈvɜːsəti/",
                "part": "n.",
                "translation": "多样性"
              }
            ],
            "sentences": [
              {
                "original": "There were some signs of progress.",
                "analysis": [
                  "这是 there be 存在句，真正的主语是复数名词短语 some signs of progress。",
                  "some 限定 signs，of progress 后置说明这些迹象涉及“进展”。",
                  "There were 与前文对不足的批评形成让步式转折，提示作者不会把结论写成单向度的悲观判断。",
                  "some signs 弱化断言强度，表示出现了一些但并非全面解决问题的积极变化。",
                  "可借鉴 There are signs of... 在提出问题后补充有限进展。"
                ],
                "translation": "也出现了一些进展迹象。"
              },
              {
                "original": "Neurodivergent representation increased in picture books, from three titles in 2024 to 13 last year.",
                "analysis": [
                  "主干是 Neurodivergent representation increased，representation 是主语，increased 表示数量或程度上升。",
                  "Neurodivergent 修饰 representation，in picture books 限定讨论范围。",
                  "from three titles in 2024 to 13 last year 构成 from...to... 变化区间，分别给出起点和终点。",
                  "last year 与 2024 对照说明变化跨越相邻年度；数字指书目数量，不是儿童人数。",
                  "可借鉴 increase from A to B 报告有明确起止值的趋势。"
                ],
                "translation": "图画书中的神经多样性代表角色有所增加：从 2024 年的 3 本增至去年的 13 本。"
              },
              {
                "original": "These figures need to be more than mere statistics and a call to action for continued change and improvements.",
                "analysis": [
                  "主干是 These figures need to be...，need to 表示必要性，而非已经发生的事实。",
                  "more than 后接并列名词短语 mere statistics 和 a call to action，提出数字不应只停留在呈现层面。",
                  "for continued change and improvements 说明行动呼吁的目标，continued 修饰 change。",
                  "These figures 回指前文多组调查数据，形成“证据—行动”之间的逻辑衔接。",
                  "可借鉴 need to be more than... and... 强调证据需要转化为持续行动。"
                ],
                "translation": "这些数字不能只是统计结果，还应成为推动持续改变和改进的行动呼吁。"
              }
            ]
          },
          {
            "title": "Hunter-gatherer societies are often put on a pedestal as paragons of equality – but the reality is more complicated",
            "source": "The Conversation",
            "published": "2026-10-03",
            "url": "https://theconversation.com/hunter-gatherer-societies-are-often-put-on-a-pedestal-as-paragons-of-equality-but-the-reality-is-more-complicated-289009",
            "readingTime": "8 分钟",
            "topic": "社会 / 平等观念与人类群体",
            "summary": "两位人类学者从坦桑尼亚 Hadza 人分享猎物的场景切入，指出“平等社会”常被理想化。作者综合一个多世纪的民族志材料，并比较 Hadza、Ju/’Hoansi、Bayaka 等群体，发现没有社会完全没有不平等：财产、性别、年龄、领导权和仪式知识都可能形成差异。文章进一步论证，分享、嘲笑炫耀者、提出要求和跨群体合作等机制，常由人们争取资源、地位或自主权的自利动机推动，而非单纯利他。结论不是否定平等，而是把平等理解为各社会用于限制不平等、保护自主与资源获取的一组实践工具，反对将狩猎采集者简单描绘为完美平等典范。",
            "reason": [
              "社会平等、资源分配和群体规范是常见社会科学主题，文章把抽象概念与具体生活实践相连。",
              "结构从猎物分享的个案引出传统印象，接着综述跨文化证据，再解释自利机制，最后修正“完美平等”的结论。",
              "阅读题可考查作者如何限定 egalitarian、例证如何支持“没有社会全然平等”，以及 self-interest 与 sharing 的关系。",
              "subsistence、consensus、autonomy、hierarchical 等词汇适合社会学、人类学和公共政策类阅读。",
              "写作可借鉴先呈现常见观点、再用多类证据修正绝对化判断，并以更精确概念收束。"
            ],
            "vocabulary": [
              {
                "word": "egalitarian",
                "phonetic": "/ɪˌɡælɪˈteəriən/",
                "part": "adj.",
                "translation": "平等主义的；主张人人平等的"
              },
              {
                "word": "subsistence",
                "phonetic": "/səbˈsɪstəns/",
                "part": "n.",
                "translation": "生计；维持生活"
              },
              {
                "word": "inequality",
                "phonetic": "/ˌɪnɪˈkwɒləti/",
                "part": "n.",
                "translation": "不平等；差异"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识"
              },
              {
                "word": "constrained",
                "phonetic": "/kənˈstreɪnd/",
                "part": "adj.",
                "translation": "受到限制的"
              },
              {
                "word": "hierarchical",
                "phonetic": "/ˌhaɪəˈrɑːkɪkəl/",
                "part": "adj.",
                "translation": "等级分明的"
              },
              {
                "word": "self-interested",
                "phonetic": "/ˌselfˈɪntrəstɪd/",
                "part": "adj.",
                "translation": "以自身利益为出发点的"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɒnəmi/",
                "part": "n.",
                "translation": "自主；自主权"
              },
              {
                "word": "widespread",
                "phonetic": "/ˈwaɪdspred/",
                "part": "adj.",
                "translation": "广泛存在的"
              },
              {
                "word": "deliberate",
                "phonetic": "/dɪˈlɪbərət/",
                "part": "adj.",
                "translation": "有意的；审慎的"
              }
            ],
            "sentences": [
              {
                "original": "In our recent wide-ranging review of the evidence from the early 20th century onward, we found that no society lacked inequality.",
                "analysis": [
                  "主句主干是 we found that...；that 引导宾语从句，说明研究发现。",
                  "句首 In...onward 介词短语交代证据综述的范围和时间起点，wide-ranging 修饰 review。",
                  "宾语从句的主干是 no society lacked inequality，双重否定形式 lacked... 表达“没有社会完全不存在不平等”。",
                  "作者先交代材料范围，再给出概括性结论，避免把个别案例当作普遍事实。",
                  "可借鉴 In our review..., we found that... 汇报综述结论，并用 no...lacked... 表达普遍性判断。"
                ],
                "translation": "在对二十世纪初以来的广泛证据进行综述后，我们发现没有任何社会不存在不平等。"
              },
              {
                "original": "Instead, equality often results from people’s self-interested motives to acquire resources, status and autonomy.",
                "analysis": [
                  "Instead 是句首连接副词，承接前文并转向对平等成因的不同解释。",
                  "主干为 equality results from motives，often 修饰结果发生的频率。",
                  "people’s self-interested 修饰 motives；to acquire... 是不定式，说明这些动机指向什么。",
                  "resources、status 和 autonomy 是并列宾语，概括人们追求的不同利益。",
                  "可借鉴 result from + 动机/条件解释社会结果的成因，并用 Instead 引入修正观点。"
                ],
                "translation": "相反，平等往往源自人们获取资源、地位和自主权的自利动机。"
              },
              {
                "original": "Most families have similar, modest possessions and store little material wealth.",
                "analysis": [
                  "句子由 and 连接两个并列谓语 have 与 store，共用主语 Most families。",
                  "similar 和 modest 并列修饰 possessions，描述财物相似且有限。",
                  "little 修饰不可数名词 material wealth，强调储存的物质财富很少。",
                  "该句以生活资料差异较小的观察支持群体间物质不平等有限，但不等于所有维度完全平等。",
                  "可借鉴 similar, modest... and little... 并列描述资源分布特征。"
                ],
                "translation": "大多数家庭拥有相似且不多的财物，积累的物质财富也很少。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-04",
      "status": "ready",
      "ai": {
        "intro": "先检索上海时间 10 月 3—4 日的官方发布，符合要求的新变化不足三项；因此仅扩展至此前七天，按各来源真实发布日期记录。免费资源逐项用官方页面复核。",
        "updates": [
          {
            "event": "Gemini 4 Argon 开始定向预览，面向复杂开发与知识工作（2026-09-30）",
            "summary": "Google 公布 Gemini 4 Argon，定位为面向复杂软件工程、企业知识工作与网络防御的长流程推理模型。当前仅通过 Fairwind Program 向受信任的网络防御人员定向开放；Google 表示之后会逐步向开发者、企业及消费者开放。",
            "howTo": "目前普通学生没有已开放的自助试用入口。若属于 Fairwind 受邀测试者，可按该计划参与；其他开发者应等待开放，并留意 Google 后续的 Gemini API 文档或 AI Ultra 入口，公告称将先面向付费 API 客户和 Google AI Ultra 订阅者推出。",
            "impact": "模型开放后，软件工程学生可评估它处理多步骤调试、代码迁移和长文档任务的表现；现在不应把产品公告误当成可立即免费调用的模型。",
            "free": "目前是 Fairwind 计划中的定向测试，普通学生尚无免费入口。Google 公布的 API 引导价为每百万输入 token 2 美元、每百万输出 token 10 美元；引导期后分别为 4 美元和 20 美元，缓存输入 token 在引导期按输入价的 95% 折扣。将先向付费 API 客户和 Google AI Ultra 订阅者开放；地区、配额及引导期具体截止日官方未说明。",
            "category": "AI 模型 / 编程与知识工作",
            "source": {
              "name": "Google 官方博客 The Keyword",
              "published": "2026-09-30",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
            }
          },
          {
            "event": "GitHub Copilot 在 CLI、应用和 SDK 推出 dynamic workflows（2026-10-01）",
            "summary": "GitHub 为 Copilot CLI、Copilot 应用和 Copilot SDK 推出 dynamic workflows 公测：用代码定义可重复的流程，把自动化步骤与一个或多个代理组合起来，支持串行或并行执行、传递结构化结果和设置人工检查点。",
            "howTo": "在 Copilot 应用中直接要求它创建一个可复用流程；CLI 用户先更新到最新版，再以 --experimental 启动，或在交互会话输入 /experimental on，然后描述任务、阶段和检查点。可从先运行测试、再整理失败原因并暂停人工审核的流程开始。",
            "impact": "课程小组可把重复的代码审查、测试和报告步骤做成固定流程，让每次运行都按相同步骤执行；结构化结果和人工检查点也便于复核代理输出。",
            "free": "官方称所有 Copilot 计划均可使用；目前为 public preview，功能可能变化。Copilot 应用无需额外设置，CLI 需最新版并显式启用实验功能；地区及各计划的具体调用额度官方未说明。",
            "category": "AI 编程 / 工作流自动化",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-01",
              "url": "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app"
            }
          },
          {
            "event": "Copilot 停止支持四个模型并列出替代项（2026-10-02）",
            "summary": "GitHub 宣布 Gemini 3.5 Flash、Gemini 3.6 Flash、Kimi K2.7 Code 和 Claude Opus 4.7 已在 Copilot Chat、行内编辑、ask、agent 和代码补全等体验中弃用；官方建议依次改用 Gemini 3.8 Flash、Kimi K3 和 Claude Opus 5.5。",
            "howTo": "在 Copilot 的模型选择器中检查当前可用模型，并更新个人工作流或集成中的选择；组织用户若看不到替代模型，可请管理员检查 Copilot model policies。公告称无需手动移除已弃用模型。",
            "impact": "如果课程项目的聊天、代理或编辑流程固定选择了上述旧模型，应改用官方建议的替代项，或重新检查自动模型选择，避免在作业期间才发现该模型无法选择。",
            "free": "弃用适用于 Copilot 的所有体验；替代模型能否选择取决于账户计划及组织模型政策。公告未说明此次变化的单独价格、地区范围或配额。",
            "category": "AI 编程 / 模型可用性",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-02",
              "url": "https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated"
            }
          }
        ],
        "deals": [
          {
            "event": "Hugging Face Spaces：免费访问公开机器学习演示",
            "summary": "Hugging Face Spaces 可托管机器学习演示。公开 Space 的源代码与运行中的应用对所有人开放；静态 Space 免费，默认 CPU Basic 硬件没有按小时费用。",
            "howTo": "打开 Spaces 搜索并运行公开演示；若要自己制作，选择免费的静态 HTML Space，或符合条件的免费个人账户可建立最多两个运行在 ZeroGPU 上的 Gradio Spaces。不要把普通 Gradio/Docker 计算环境误认为免费。",
            "impact": "学生可直接试用公开模型演示并观察输入、输出与界面流程，也可用静态页面制作课程展示；无需为访问公开演示先租用 GPU。",
            "free": "公开 Space 可由任何人访问；静态 Space 免费。免费且状态良好的个人账户最多可托管 2 个 Gradio ZeroGPU Spaces；常规 Gradio/Docker Space 需要付费计划，升级硬件另收费。公开演示访问配额、地区及 ZeroGPU 推理额度官方未说明。",
            "category": "免费 AI 演示 / 开发学习",
            "source": {
              "name": "Hugging Face Spaces 官方文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces-overview"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出 Copilot Free，可免费使用受限的 AI 编程功能；行内代码补全每月最多 2,000 次，模型只能自动选择。",
            "howTo": "用个人 GitHub 账户启用 Copilot Free，并在 IDE 安装 Copilot；先用补全处理样板代码，再用免费计划允许的聊天功能解释报错或起草测试，提交前运行测试并人工核对。",
            "impact": "适合没有学校 Copilot 权益的学生辅助课程编程、理解代码和补写测试；每月补全上限适合轻量使用，不宜按无限服务规划项目。",
            "free": "免费计划仅面向无法通过组织或企业访问 Copilot 的个人开发者；行内补全限每月 2,000 次，模型为自动选择。AI Credits 数量、地区限制及具体账号资格例外官方未说明。",
            "category": "长期免费代码助手",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Azure for Students：$100 云额度与学生开发工具",
            "summary": "Microsoft 为符合条件的全日制大学生提供 Azure for Students：$100 Azure credit 可在 12 个月内使用；页面还列出 20 多项服务的免费月额度，以及 65 多项始终免费的服务。",
            "howTo": "从 Azure for Students 页面申请并按提示验证全日制大学生身份，再通过 Azure Education Hub 获取开发工具；用额度搭建课程演示或小型云端原型前，先核对具体服务是否超出免费额度。",
            "impact": "适合在课程中试做云端应用、数据科学或 AI 原型，降低初期云资源门槛；部署时应持续查看用量，避免超过额度后产生费用。",
            "free": "全日制大学生可申请，无需信用卡；$100 额度有效 12 个月。20 多项服务的免费月额度限新 Azure 客户、最长 12 个月，另有 65 多项始终免费的服务。地区可用性及申请期限官方未说明。",
            "category": "学生教育福利 / 云端 AI",
            "source": {
              "name": "Microsoft Azure for Students",
              "published": "官方未说明",
              "url": "https://azure.microsoft.com/en-us/free/students/"
            }
          },
          {
            "event": "Claude Free：免费日常问答与滚动五小时额度",
            "summary": "Anthropic 定价页列出 Claude Free，定位为日常问题；免费使用量按滚动五小时窗口重置，实际可用量随对话长度、模型和功能而变化。",
            "howTo": "注册或登录 Claude 免费计划，把课程阅读拆成短段落，请它解释概念、比较论点或生成复习题；在 Settings > Usage 查看当前使用情况，并用原始材料核对事实。",
            "impact": "可用于课前预习、英语阅读和复习提纲；长上下文与复杂功能会消耗更多额度，不应把模型回答直接当作论文引文。",
            "free": "Free 计划可免费使用，限制按滚动五小时窗口重置；没有固定消息数，且用量取决于对话、模型和功能，官方也可能设置其他周期上限。具体地区及账号资格官方未说明。",
            "category": "长期免费网页 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 与浮动计算资源",
            "summary": "Google Colab 是无需本地安装的托管 Jupyter Notebook 服务；官方确认可免费使用，并可能提供 GPU、TPU 等计算资源，但免费资源并不保证且不无限。",
            "howTo": "打开 Colab，新建笔记本或从 Drive、GitHub 导入 .ipynb，运行 Python 单元格；需要加速时查看当前运行时是否提供 GPU/TPU，并及时保存代码和结果。",
            "impact": "可用于课程 Python 作业、数据分析和小型机器学习练习，省去本地配置；长任务要保存进度，并准备资源不可用时的替代方案。",
            "free": "Colab 免费使用；资源供应不保证且使用限制会变化，GPU/TPU 时数、地区与账号资格的统一配额官方未说明。",
            "category": "免费云计算 / 学习开发",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          }
        ]
      },
      "english": {
        "intro": "选取两篇可免费阅读全文的近期报道，分别讨论育儿信息过载与社区河流污染监测；已核对所有旧 issue 的文章标题和 URL，均未重复。",
        "articles": [
          {
            "title": "When parenting advice becomes too much",
            "source": "BBC",
            "published": "2026-10-04",
            "url": "https://www.bbc.co.uk/news/articles/cv4g5267jk8yo",
            "readingTime": "8 分钟",
            "topic": "社会 / 育儿信息与家庭心理",
            "summary": "BBC 从一位母亲在网上搜寻育儿建议、却因睡眠安排和幼儿发脾气而不断怀疑自己的经历切入，讨论当代父母面对的建议过量与相互冲突。报道引述政府研究称，约三分之二有年幼子女的父母感到信息过载；随后梳理社交媒体传播的多种育儿风格，并介绍权威型、专制型、宽容型和忽视型等研究框架。受访专家对温和育儿是否等同于放任存在分歧，文章也指出网上存在未经专业训练者提供的错误建议，以及家庭支持和公共服务变化带来的压力。结尾回到个体经验与课程支持，呈现的不是一套万能育儿法，而是信息、边界和父母信心之间的张力。",
            "reason": [
              "育儿压力、社交媒体信息与家庭心理健康构成社会生活类议题，适合讨论数字环境对日常决策的影响。",
              "文章以个人经历开篇，转向调查和历史背景，再比较专家观点，最后回到个人应对，结构层次清楚。",
              "阅读题可考查数据归属、不同专家对温和育儿的分歧，以及作者如何区分研究结论和受访者看法。",
              "overwhelmed、conflicting、intuition、misinformation 等词可迁移到信息过载、教育和心理健康话题。",
              "写作可借鉴“个案—数据—观点对照—有限结论”的展开方式，避免把复杂社会问题归结为单一方案。"
            ],
            "vocabulary": [
              {
                "word": "overwhelmed",
                "phonetic": "/ˌəʊvəˈwelmd/",
                "part": "adj.",
                "translation": "不堪重负的；应接不暇的"
              },
              {
                "word": "conflicting",
                "phonetic": "/kənˈflɪktɪŋ/",
                "part": "adj.",
                "translation": "相互矛盾的；冲突的"
              },
              {
                "word": "intuition",
                "phonetic": "/ˌɪntjuˈɪʃən/",
                "part": "n.",
                "translation": "直觉"
              },
              {
                "word": "empathy",
                "phonetic": "/ˈempəθi/",
                "part": "n.",
                "translation": "共情；同理心"
              },
              {
                "word": "boundaries",
                "phonetic": "/ˈbaʊndəriz/",
                "part": "n.",
                "translation": "界限；边界"
              },
              {
                "word": "authoritative",
                "phonetic": "/ɔːˈθɒrətətɪv/",
                "part": "adj.",
                "translation": "权威型的；有权威的"
              },
              {
                "word": "permissive",
                "phonetic": "/pəˈmɪsɪv/",
                "part": "adj.",
                "translation": "宽容的；放任的"
              },
              {
                "word": "counter-cultural",
                "phonetic": "/ˌkaʊntəˈkʌltʃərəl/",
                "part": "adj.",
                "translation": "反主流文化的；逆文化潮流的"
              },
              {
                "word": "misinformation",
                "phonetic": "/ˌmɪsɪnfəˈmeɪʃən/",
                "part": "n.",
                "translation": "错误信息；不实信息"
              },
              {
                "word": "burnout",
                "phonetic": "/ˈbɜːnaʊt/",
                "part": "n.",
                "translation": "身心俱疲；倦怠"
              }
            ],
            "sentences": [
              {
                "original": "Her confidence and intuition were stripped away as she questioned every parenting decision.",
                "analysis": [
                  "主句主干是 Her confidence and intuition were stripped away，两个名词并列作主语，谓语使用被动语态。",
                  "as 引导状语从句，说明她不断质疑育儿决定时，信心与直觉逐渐丧失的伴随过程。",
                  "every 修饰 decision，强调这种怀疑涉及每一个育儿选择，而非单次事件。",
                  "strip away 表示逐渐剥夺或去除；were stripped away 突出人物受到的影响。",
                  "可借鉴 be stripped away as... 描述某种能力或信心在持续过程中被削弱。"
                ],
                "translation": "她不断质疑每一个育儿决定，信心和直觉也随之被一点点削弱。"
              },
              {
                "original": "The confusion around the \"right\" way to parent has led some parents to turn to courses for help.",
                "analysis": [
                  "主干是 The confusion has led some parents to turn to courses，主语为 confusion，谓语为现在完成时。",
                  "around the “right” way to parent 修饰 confusion；to parent 是说明方式的动词不定式。",
                  "has led A to do B 表示某种情况促使某人采取行动，强调已有影响。",
                  "for help 说明参加课程的目的；引号中的 right 提示“正确方式”是被讨论的观念。",
                  "可借鉴 confusion around... has led... to... 说明信息不确定如何推动行为改变。"
                ],
                "translation": "对“正确”育儿方式的困惑，使一些父母转而参加课程寻求帮助。"
              },
              {
                "original": "Many factors shaping family life remain outside parents' control.",
                "analysis": [
                  "句子主干为 Many factors remain outside parents’ control，remain 后接介词短语作表语。",
                  "shaping family life 是现在分词短语，后置修饰 factors，表示这些因素会影响家庭生活。",
                  "parents’ 是复数名词所有格，修饰 control；outside 表示不在某人的控制范围内。",
                  "句意限定了父母能控制的范围，与将家庭结果完全归咎于个人形成逻辑上的制约。",
                  "可借鉴 factors shaping... remain outside... 表达影响因素复杂且不可完全控制。"
                ],
                "translation": "许多影响家庭生活的因素仍不在父母的掌控范围内。"
              }
            ]
          },
          {
            "title": "‘It’s shocking really’: Devon community tracks River Dart sewage spills",
            "source": "The Guardian",
            "published": "2026-10-03",
            "url": "https://www.theguardian.com/environment/2026/oct/03/devon-community-platform-river-hub-dart-sewage-spills-overflows",
            "readingTime": "7 分钟",
            "topic": "环境 / 污水监测与公民行动",
            "summary": "报道介绍英国德文郡 Friends of the Dart 团体建立的 River Hub：平台逐次汇集 River Dart 的污水溢流时间、反复污染地点及已计划或尚无计划的改进工程，也解释“干天排放”的分类依据。报道说明部分资料来自公开记录，部分需要通过信息公开申请取得；项目团队承认平台信息仍不完整，也可能有误。文章穿插居民、河流活动从业者、South West Water 与环境监管机构的不同说法，既呈现社区以数据推动问责的做法，也保留了官方回应和证据局限。团队称愿把模式免费提供给其他河流团体，结尾将重点落在把不满转化为可核查资料和社区行动。",
            "reason": [
              "河流污染、公共信息透明度和社区参与连接环境保护与公民责任，是常见的社会治理类阅读主题。",
              "文章从平台功能切入，解释数据来源和方法，再呈现居民经历、机构回应及团队对局限的承认。",
              "阅读题可考查平台提供的信息类型、公开资料与信息申请的区别，以及不同利益相关方的立场。",
              "overflow、discharge、tributary、remedial 等词适合环境报道和公共设施话题。",
              "写作可借鉴以具体平台案例说明数据透明如何支持公共监督，同时主动交代数据不完整和归因边界。"
            ],
            "vocabulary": [
              {
                "word": "sewage",
                "phonetic": "/ˈsuːɪdʒ/",
                "part": "n.",
                "translation": "污水；生活污水"
              },
              {
                "word": "overflow",
                "phonetic": "/ˈəʊvəfləʊ/",
                "part": "n.",
                "translation": "溢流；溢流口"
              },
              {
                "word": "spill",
                "phonetic": "/spɪl/",
                "part": "n.",
                "translation": "泄漏；溢出"
              },
              {
                "word": "tributary",
                "phonetic": "/ˈtrɪbjətri/",
                "part": "n.",
                "translation": "支流"
              },
              {
                "word": "granular",
                "phonetic": "/ˈɡrænjələ/",
                "part": "adj.",
                "translation": "细致具体的；粒状的"
              },
              {
                "word": "discharge",
                "phonetic": "/dɪsˈtʃɑːdʒ/",
                "part": "n.",
                "translation": "排放；排出物"
              },
              {
                "word": "remedial",
                "phonetic": "/rɪˈmiːdiəl/",
                "part": "adj.",
                "translation": "补救的；矫正的"
              },
              {
                "word": "incomplete",
                "phonetic": "/ˌɪnkəmˈpliːt/",
                "part": "adj.",
                "translation": "不完整的"
              },
              {
                "word": "methodology",
                "phonetic": "/ˌmeθəˈdɒlədʒi/",
                "part": "n.",
                "translation": "方法；方法论"
              },
              {
                "word": "acknowledge",
                "phonetic": "/əkˈnɒlɪdʒ/",
                "part": "v.",
                "translation": "承认；确认"
              }
            ],
            "sentences": [
              {
                "original": "The hub has a page that people can check to find out where spills are happening right now.",
                "analysis": [
                  "主干是 The hub has a page，that 引导定语从句修饰 page。",
                  "people can check 的宾语是关系代词 that，指代前面的 page。",
                  "to find out 是目的状语；where spills are happening 是 find out 的宾语从句。",
                  "right now 限定 spills are happening 的时间，突出平台提供实时信息。",
                  "可借鉴 a page that... to find out where... 描述数字工具的功能和信息用途。"
                ],
                "translation": "这个平台设有页面，供人们查询此刻哪些地方正在发生污水溢流。"
              },
              {
                "original": "The hub concludes that not all do.",
                "analysis": [
                  "主干为 The hub concludes，that 引导结论内容的宾语从句。",
                  "not all 中 all 指代前文提到的污水处理厂，not 表示并非全部。",
                  "do 是替代动词，省略前文的 have enough capacity to deal with the sewage produced。",
                  "句子以简短代词结构收束前文问题，读者需回看上下文确定 do 的所指。",
                  "可借鉴 not all do 避免重复前文动词短语，并准确表达部分否定。"
                ],
                "translation": "平台的结论是，并非所有处理厂都有足够能力应对其服务人口产生的污水。"
              },
              {
                "original": "He and the rest of the team are happy to be corrected when they have got something wrong.",
                "analysis": [
                  "主干是 He and the rest of the team are happy，两个并列成分共同作主语。",
                  "to be corrected 是被动不定式，作 happy 的补足成分，说明团队愿意接受纠正。",
                  "when 引导时间状语从句；have got something wrong 使用现在完成时，表示发现错误的情形。",
                  "被动形式把重点放在“接受纠正”而不是纠正者身上，传达对资料错误的开放态度。",
                  "可借鉴 be happy to be corrected when... 表达研究或数据项目的可修正性。"
                ],
                "translation": "如果他们有地方弄错了，他和团队其他成员都乐于接受纠正。"
              }
            ]
          }
        ]
      }
    }
  ]
};
