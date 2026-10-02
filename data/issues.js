window.BRIEFING_DATA = {
  "updatedAt": "2026-10-02T10:06:00+08:00",
  "issues": [
    {
      "date": "2026-10-02",
      "status": "ready",
      "ai": {
        "intro": "截至上海 10 月 2 日，近两日官方页面核实到三项新变化；免费资源均重新按官方产品页、定价页或学生福利页核对。",
        "updates": [
          {
            "event": "GitHub Copilot CLI 与应用新增桌面应用操作（2026-10-01）",
            "summary": "GitHub 将 computer use 以公开预览形式带入 Copilot CLI 和 GitHub Copilot app（macOS、Windows）：Copilot 可读取应用内容、点击控件、输入文字并跨应用执行流程；操作前会请求批准。",
            "howTo": "Copilot CLI 输入 `/computer on` 启用，可用 `/computer show` 查看状态、`/computer off` 关闭；Copilot app 在 Settings > Computer Use 打开 Enable Computer Use。先描述目标、应用与约束，并逐次检查将执行的动作。",
            "impact": "课程小组可尝试把网页资料整理进演示文稿，或在没有 API/命令行接口的桌面软件里重复录入项目数据；不要让代理处理未核实的信息，macOS 还需授予 Accessibility 与 Screen Recording 权限。",
            "free": "官方公告称为 public preview，适用于 Copilot CLI 和 macOS/Windows Copilot app；公告未说明所需订阅计划、价格、地区、免费额度或使用配额。组织管理设置可以关闭该功能。",
            "category": "AI 编程 / 桌面自动化",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-01",
              "url": "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps"
            }
          },
          {
            "event": "Gemini Live 推出面向无障碍场景的 Guided Vision（2026-10-01）",
            "summary": "Google 在兼容 Android 设备的 Gemini Live 中推出 Guided Vision：用户分享摄像头后，可用语音询问周围环境、文字或物品，Gemini 也会用语音提示调整取景。",
            "howTo": "在 Gemini 手机应用的个人资料设置中开启 Use Guided Vision in Live，再启动 Gemini Live 并分享摄像头；也可按 Android Settings > Accessibility > Vision assistance > Guided Vision 设置快捷方式，或通过 TalkBack 菜单启动。",
            "impact": "可帮助学生听读包装或印刷材料的小字、定位桌面物品，或获取陌生室内空间的描述；输出可能出错，官方明确说明它不是导航、避障或白手杖替代品。",
            "free": "官方说明该功能面向兼容 Android 设备并已推出；价格、所需账号计划、开放地区、具体机型清单与使用配额官方未说明。",
            "category": "AI 无障碍 / 实时视觉",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-01",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/"
            }
          },
          {
            "event": "Google 与 Planet 的 Project Suncatcher 原型卫星进入轨道（2026-10-01）",
            "summary": "Google 表示，与 Planet 合作的 Project Suncatcher 原型卫星已搭乘 Transporter-18 发射并建立联系；团队将测试 TPU 在太空飞行、辐射和温度极端条件下的表现。这是探索太空机器学习基础设施的长期研究项目，不是面向用户的新 AI 服务。",
            "howTo": "阅读 Google Research 的项目说明，了解这次轨道实验要测量的硬件条件与后续研究问题；目前公告提供的是研究进展，不含可供学生直接调用的产品步骤。",
            "impact": "可作为课程讨论 AI 算力能源、数据中心基础设施和实验性技术成熟度的案例；区分已发射并开始测试的原型与尚待研究的规模化构想。",
            "free": "公告只描述研究原型和在轨实验，没有面向公众的产品访问说明；价格、账号资格、地区及使用配额官方未说明。",
            "category": "AI 基础设施 / 研究进展",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-01",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Gemini API 免费层与 AI Studio",
            "summary": "Google 定价页列出 Gemini API Free tier：可免费使用部分模型的输入和输出 token，并可访问 Google AI Studio；免费层的模型和速率限制因具体模型而异。",
            "howTo": "打开 Google AI Studio，查看可用模型及对应 API 免费层限制，创建小型课程原型并在模型页面核对当前速率限制；避免提交敏感或未获许可的数据。",
            "impact": "可用于文本摘要、课程演示和小规模 API 原型，适合在购买服务前验证提示词与流程；官方标明免费层提交的数据可用于改进产品。",
            "free": "官方定价页确认部分模型有免费输入与输出 token；确切模型、调用上限、地区和账号资格依页面当前信息而定，页面没有给出统一的固定免费配额。免费层数据可用于改进产品。",
            "category": "免费 API / 学习开发",
            "source": {
              "name": "Google Gemini API 定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "GitHub Copilot Student 学生免费计划",
            "summary": "GitHub Education 为通过学生验证的用户列出免费的 Copilot Student：含不限量代码补全、一定量的 GitHub AI Credits，以及有限的聊天和 agent 使用。",
            "howTo": "在 GitHub Education 验证学生身份并领取 Student Developer Pack，再启用 Copilot Student；在 IDE 或 Copilot app 中使用代码补全或自动模型选择下的聊天/agent 功能。",
            "impact": "可辅助理解报错、补写测试和熟悉课程项目代码；提交前仍应自行检查代码并运行测试，尤其不要盲目采纳未经验证的建议。",
            "free": "GitHub Education 列出经验证学生可免费使用；代码补全不限量，AI Credits 与聊天/agent 使用有限，但该页面未列统一数值。地区、验证资格细则及计划期限官方未说明。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Camber Student 免费云端数据科学与 AI agent 资源",
            "summary": "GitHub Education 页面列出在读学生可领取 Camber Student：每月 40 CPU 小时、5 GPU 小时、50 GB 存储和 50 条 agent 消息，并可连接公开数据源。",
            "howTo": "在 GitHub Education Student Developer Pack 申请学生资格并领取 Camber Student；按 Camber 文档连接课程数据源、创建 agent，并在运行前查看本月 CPU、GPU 和消息额度。",
            "impact": "适合练习数据清理、机器学习原型或数据问答 agent；用小数据集验证工作流并监控用量，避免课程项目消耗超出免费额度。",
            "free": "官方福利页注明 enrolled students 可免费使用，每月含 40 CPU 小时、5 GPU 小时、50 GB 存储及 50 条 agent 消息；地区、验证细则、福利期限和超额费用官方未说明。",
            "category": "学生教育福利 / 云端 AI",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "OpenAI gpt-oss-20b Apache 2.0 开放权重",
            "summary": "OpenAI 官方模型卡提供 gpt-oss-20b 权重下载，采用 Apache 2.0 许可；模型卡称量化版本可在 16 GB 内存中运行，并提供 Transformers、vLLM 和 Ollama 等启动方式。",
            "howTo": "从 Hugging Face 官方模型卡按指南下载权重；可安装 Transformers 依赖并运行卡片中的 pipeline 示例，或安装 Ollama 后执行 `ollama pull gpt-oss:20b` 与 `ollama run gpt-oss:20b`。",
            "impact": "可在具备相应硬件的本地设备上练习模型部署、提示词和函数调用，避免按托管 API token 付费；需自行检查生成内容、依赖和设备成本。",
            "free": "模型权重可按 Apache 2.0 许可下载和使用，官方模型卡给出约 16 GB 内存要求；下载账号、地区、托管推理费用与配额官方未说明，本地设备和运行电力需自备。",
            "category": "可下载开放模型权重 / Apache 2.0",
            "source": {
              "name": "OpenAI 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/openai/gpt-oss-20b"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Japan raises permanent residency fee by 20 times",
            "source": "BBC",
            "published": "2026-10-01",
            "url": "https://www.bbc.co.uk/news/articles/c6y8z8xeg8j1o",
            "readingTime": "6 分钟",
            "topic": "社会 / 移民政策与劳动力",
            "summary": "BBC 报道日本自 10 月 1 日起将外国人申请永久居留的费用提高至原来的 20 倍，并同步收紧收入、养老金和日语要求。文章先用申请者赶在涨价前排队的场景引入，再列出新旧签证费用与收入门槛，随后把政策放入日本老龄化、劳动力短缺、外国居民人数增加及社会焦虑的背景中。报道引用在日外国居民对费用与待遇的质疑，也提到经济困难者和难民可获减免；结尾说明日语能力要求将于次年 4 月进一步收紧，并交代养老金资格标准。文章呈现了移民管理与补充劳动力之间的张力，而非简单断言政策效果。",
            "reason": [
              "移民政策、人口老龄化与劳动力短缺构成社会治理议题，适合练习分析公共政策的多重目标。",
              "文章由费用变化切入，转向人口与就业背景，再纳入申请者意见和后续条件，体现新闻报道的层次推进。",
              "可练习主旨归纳、数字比较、政策背景推断，以及区分政策事实和受访者评价。",
              "permanent residency、labour shortage、restrictive、proficiency 等词汇可迁移到人口与就业主题阅读。",
              "写作可借鉴“政策变化—社会背景—受影响群体—潜在权衡”的论证结构，避免把相关性写成因果结论。"
            ],
            "vocabulary": [
              {
                "word": "permanent residency",
                "phonetic": "/ˈpɜːrmənənt ˈrezɪdənsi/",
                "part": "n.",
                "translation": "永久居留"
              },
              {
                "word": "fee hike",
                "phonetic": "/fiː haɪk/",
                "part": "n.",
                "translation": "费用上涨"
              },
              {
                "word": "restrictive",
                "phonetic": "/rɪˈstrɪktɪv/",
                "part": "adj.",
                "translation": "限制严格的"
              },
              {
                "word": "labour shortage",
                "phonetic": "/ˈleɪbər ˈʃɔːrtɪdʒ/",
                "part": "n.",
                "translation": "劳动力短缺"
              },
              {
                "word": "resident population",
                "phonetic": "/ˈrezɪdənt ˌpɑːpjəˈleɪʃən/",
                "part": "n.",
                "translation": "居民人口"
              },
              {
                "word": "anxiety",
                "phonetic": "/æŋˈzaɪəti/",
                "part": "n.",
                "translation": "焦虑；担忧"
              },
              {
                "word": "orderly",
                "phonetic": "/ˈɔːrdərli/",
                "part": "adj./adv.",
                "translation": "有秩序的；有条理地"
              },
              {
                "word": "financial hardship",
                "phonetic": "/faɪˈnænʃəl ˈhɑːrdʃɪp/",
                "part": "n.",
                "translation": "经济困难"
              },
              {
                "word": "proficiency",
                "phonetic": "/prəˈfɪʃənsi/",
                "part": "n.",
                "translation": "熟练；精通"
              },
              {
                "word": "fall short",
                "phonetic": "/fɔːl ʃɔːrt/",
                "part": "phr.v.",
                "translation": "不足；未达到"
              }
            ],
            "sentences": [
              {
                "original": "Those seeking permanent residency must now also meet new income, pension and Japanese-language requirements.",
                "analysis": [
                  "主干为 Those must meet requirements，Those 指寻求永久居留的申请者。",
                  "seeking permanent residency 是现在分词短语，后置修饰 Those。",
                  "income、pension 和 Japanese-language 三项并列修饰 requirements，概括新门槛。",
                  "now 与 also 表示这些要求是当前新增条件，与上文费用变化形成补充。",
                  "可借鉴 meet requirements 表达达到政策、资格或学业要求。"
                ],
                "translation": "如今，申请永久居留者还必须满足新的收入、养老金和日语要求。"
              },
              {
                "original": "Applicants who face financial hardship or are designated as refugees would be granted discounts.",
                "analysis": [
                  "主干为 Applicants would be granted discounts，使用被动语态突出申请者获得减免。",
                  "who 引导定语从句，修饰 Applicants，并以 or 连接两种资格情形。",
                  "face financial hardship 与 are designated as refugees 是并列谓语结构。",
                  "would be granted 是情态动词加被动语态，说明符合条件者可获减免。",
                  "可借鉴“限定条件 + would be granted”说明政策中的资格与待遇。"
                ],
                "translation": "面临经济困难或被认定为难民的申请者可获减免。"
              },
              {
                "original": "Although immigration remains politically sensitive and restrictive in Japan, the nation's ageing population is increasingly relying on foreign workers to plug a labour shortage.",
                "analysis": [
                  "主句主干为 the nation's ageing population is relying on foreign workers。",
                  "Although 引导让步状语从句，指出移民在日本仍具政治敏感性且受限制。",
                  "increasingly 修饰 is relying，表示依赖程度不断上升；ageing 修饰 population。",
                  "to plug a labour shortage 是目的/结果相关的不定式短语，说明依赖外劳的劳动力背景。",
                  "句子把政策限制与人口结构带来的用工需求并置，构成转折张力。"
                ],
                "translation": "尽管移民在日本仍是政治敏感且受限制的议题，这个人口老龄化的国家却越来越依赖外国劳工来弥补劳动力短缺。"
              }
            ]
          },
          {
            "title": "'It's a nightmare.' Former refugee, professor on Trump's new Medicaid policy",
            "source": "NPR",
            "published": "2026-10-01",
            "url": "https://www.npr.org/2026/10/01/nx-s1-5987948/trump-medicaid-health-insurance-disability-refugee",
            "readingTime": "7 分钟",
            "topic": "健康 / 医疗保障与移民",
            "summary": "NPR 以一名曾依靠 Medicaid 完成学业、如今帮助残障难民的教授经历开篇，说明政策变更对个人医疗与生活的影响。报道接着解释 H.R. 1 对合法移民 Medicaid 资格的调整，并援引 KFF Health News 估算 10 月约有 28 万人失去保障；文中还介绍难民与寻求庇护者的脆弱处境、慢性病用药风险，以及全价保险和雇主保险并非人人负担得起。文章随后比较州级替代方案及儿童、孕妇等群体的延续覆盖，最后回到预防性护理被推迟、未来治疗成本可能上升的担忧，并以受访者倡导公民参与作结。政策影响与数字均归因于报道所引机构和受访者。",
            "reason": [
              "医疗保障、移民身份与残障照护交叉，适合健康公平和社会政策类阅读主题。",
              "文章以个人经历引入，继而解释法律与估算数据，再讨论替代保障和长期后果，最后回到公共参与。",
              "可练习区分法律变化、机构估算、专家判断与个人证言，并判断各段证据承担的功能。",
              "coverage、eligible、vulnerable、comprehensive、forgo 等词汇适用于医疗和福利政策话题。",
              "写作可借鉴“个人案例—制度规则—影响数据—长期后果”的结构，同时谨慎注明统计来源。"
            ],
            "vocabulary": [
              {
                "word": "frantic",
                "phonetic": "/ˈfræntɪk/",
                "part": "adj.",
                "translation": "焦急的；慌乱的"
              },
              {
                "word": "coverage",
                "phonetic": "/ˈkʌvərɪdʒ/",
                "part": "n.",
                "translation": "（保险）保障范围"
              },
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合资格的"
              },
              {
                "word": "humanitarian",
                "phonetic": "/hjuːˌmænɪˈteriən/",
                "part": "adj.",
                "translation": "人道主义的"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbəl/",
                "part": "adj.",
                "translation": "脆弱的；易受伤害的"
              },
              {
                "word": "chronic",
                "phonetic": "/ˈkrɑːnɪk/",
                "part": "adj.",
                "translation": "慢性的"
              },
              {
                "word": "comprehensive",
                "phonetic": "/ˌkɑːmprɪˈhensɪv/",
                "part": "adj.",
                "translation": "全面的"
              },
              {
                "word": "preventative care",
                "phonetic": "/prɪˈventətɪv ker/",
                "part": "n.",
                "translation": "预防性医疗"
              },
              {
                "word": "forgo",
                "phonetic": "/fɔːrˈɡoʊ/",
                "part": "v.",
                "translation": "放弃；不再享用"
              },
              {
                "word": "civic engagement",
                "phonetic": "/ˈsɪvɪk ɪnˈɡeɪdʒmənt/",
                "part": "n.",
                "translation": "公民参与"
              }
            ],
            "sentences": [
              {
                "original": "Mustafa Rfat has been getting frantic phone calls recently from refugees with disabilities.",
                "analysis": [
                  "主干为 Mustafa Rfat has been getting phone calls，使用现在完成进行时呈现近期持续发生的情况。",
                  "frantic 修饰 phone calls，强调来电者的焦急状态。",
                  "recently 是时间状语，from refugees with disabilities 说明来电来源及群体。",
                  "该句以具体人物和来电场景引出政策影响，先呈现个人层面的紧迫感。",
                  "可借鉴 has been getting ... recently 描述近期反复出现的现象。"
                ],
                "translation": "Mustafa Rfat 最近不断接到残障难民焦急的电话。"
              },
              {
                "original": "Only a small portion of legal immigrants have been eligible to enroll in Medicaid, including refugees and asylum seekers.",
                "analysis": [
                  "主干为 a small portion ... have been eligible，主语中心词 portion 决定谓语用单数概念。",
                  "Only 限定 a small portion，强调符合资格的合法移民比例有限。",
                  "to enroll in Medicaid 是 eligible 的补足结构，说明符合何种资格。",
                  "including refugees and asylum seekers 是补充说明，举出相关群体。",
                  "可借鉴 only a small portion of ... 表达范围受限，并用 including 引入例子。"
                ],
                "translation": "只有一小部分合法移民有资格加入 Medicaid，其中包括难民和寻求庇护者。"
              },
              {
                "original": "Once these changes take place, these groups of immigrants will be left with very few options for affordable, comprehensive coverage.",
                "analysis": [
                  "主句主干为 these groups ... will be left with very few options。",
                  "Once 引导时间/条件状语从句，说明后果发生的前提。",
                  "these groups of immigrants 指代前文讨论的移民群体，建立语篇衔接。",
                  "for affordable, comprehensive coverage 修饰 options，两个并列形容词限定保障类型。",
                  "will be left with 强调政策变化后可用选择减少，可用于描述制度性后果。"
                ],
                "translation": "这些变化一旦生效，这些移民群体可负担且全面的保障选择将所剩无几。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-10-01",
      "status": "ready",
      "ai": {
        "intro": "昨日到今日核实到两项官方产品变化，因此将检索范围扩大至前7日补足第3项；各条保留真实发布日期，免费资源按官方模型卡与帮助页复核。",
        "updates": [
          {
            "event": "Cursor 推出 Rollouts 与 Security Review 两款代码发布机器人（2026-10-01）",
            "summary": "Cursor 发布两款面向代码交付的 bot：Rollouts 在部署期间按环境监测变更健康度并报告回归；Security Review 在 pull request 中报告可利用漏洞。",
            "howTo": "在 Cursor dashboard 的 Automations 中启用 Rollouts，连接源代码平台、部署系统和遥测服务；下一个 pull request 即开始监测。Security Review 可在 dashboard 为目标仓库启用，草稿 PR 会跳过。",
            "impact": "有相应团队权限的学生可在课程项目发布时区分 staging 与 production 的回归，并在合并前查看注入、权限绕过或不安全反序列化等安全提示；报告仍需人工复核，Rollouts 不会自行合并或回滚。",
            "free": "官方称功能面向 Cursor Teams 与 Enterprise 计划。公告称接下来10天含试用用量额度，约对应 Teams 50 次、Enterprise 500 次变更；个人免费层、地区与之后的价格或配额官方未说明。",
            "category": "AI 编程 / 代码审查与部署",
            "source": {
              "name": "Cursor Changelog",
              "published": "2026-10-01",
              "url": "https://cursor.com/changelog"
            }
          },
          {
            "event": "GitHub Copilot 研究预览 HydraFusion 扩展到 VS Code 与 Copilot app（2026-09-30）",
            "summary": "HydraFusion 不只是单个模型，而是在一次任务中编排多个模型；它可采用单模型、逐级升级或异模型批评后修订三种工作流，并增加过程透明度与进度提示。",
            "howTo": "在 VS Code 1.140 或更新版本的 Copilot Chat 模型选择器中选 HydraFusion；若未出现，启用 `chat.copilot.hydraFusion.enabled`。Copilot app 用户更新应用后，在 Settings 搜索并启用 HydraFusion，再从模型选择器选择。",
            "impact": "适合有权限的学生将多文件编程任务交给模型协作流程，并查看草稿是否经过质量门槛或独立审阅；仍需自行检查代码和运行测试。",
            "free": "仅 Copilot Pro、Pro+、Business 与 Enterprise 用户可用，仍属可能变化的 research preview；Business/Enterprise 管理员需允许预览功能。官方未说明个人免费计划、地区或配额。",
            "category": "AI 编程 / 多模型协作",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-30",
              "url": "https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app"
            }
          },
          {
            "event": "Microsoft Copilot 新增 Home、Code 与 Autopilot 工作模式（2026-09-25）",
            "summary": "Microsoft 公布新版 Copilot：Home 汇集 Chat、Cowork 与 Office 文档，Code 可用自然语言构建小型应用或自动化，Autopilot 则是持续工作的个人 agent。公告中的功能仍按 Frontier 与预览计划分阶段推出。",
            "howTo": "符合组织条件的用户可通过 Microsoft Frontier 计划留意 Home 与 Code rollout；Code 的预览稍后面向 Microsoft 365 Premium 与 Pro 订阅者开放。Autopilot 需等待公告所述的 private preview。",
            "impact": "学生团队可将课程项目资料整理、预算表或演示文稿起草放在同一 Copilot 工作区；若获得 Code 预览，也可用自然语言搭建小型项目看板，再检查生成逻辑和数据。",
            "free": "官方说明新版通过 Frontier 计划逐步推出，Code 预览稍后面向 Microsoft 365 Premium 与 Pro 订阅者；价格、免费额度、地区和各功能的最终开放时间官方未说明。",
            "category": "AI 助手 / 工作流",
            "source": {
              "name": "Microsoft Blog",
              "published": "2026-09-25",
              "url": "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab 免费提供托管 Jupyter 笔记本与计算资源",
            "summary": "Google Colab 无需本地安装即可运行和分享 Jupyter 笔记本；官方 FAQ 说明免费层可访问计算资源，包括 GPU 与 TPU，适合机器学习、数据科学和课程实验。",
            "howTo": "打开 Colab，新建 notebook 或从 GitHub 导入 `.ipynb` 文件，在代码单元中运行课程代码；需要加速时从 Runtime 菜单尝试 GPU 或 TPU。",
            "impact": "可用于课程数据清理、机器学习作业和复现公开 notebook，减少本地环境安装负担；重要结果及时下载或存入 Drive，避免依赖临时运行时。",
            "free": "官方确认免费；资源不保证且不无限，使用限制会变化。账号资格、地区和固定免费配额官方未说明。",
            "category": "免费学习工具 / 云端 Notebook",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Microsoft Phi-4-mini-instruct 提供 MIT 许可开放权重",
            "summary": "Microsoft 模型卡提供 3.8B 参数的 Phi-4-mini-instruct，面向计算资源受限环境并支持 128K token 上下文；权重按 MIT 许可发布，适合练习本地推理与多语言文本任务。",
            "howTo": "打开官方 Hugging Face 模型卡，在 Files and versions 下载权重；按卡片中的 Transformers 示例加载 `microsoft/Phi-4-mini-instruct`，或先试用卡片链接的 Hugging Face demo。",
            "impact": "学生可用较小型模型练习摘要、数学问答与本地部署，并比较提示词和输出；模型卡提醒应针对具体用途评估准确性、安全性与公平性。",
            "free": "模型权重按 MIT 许可提供；托管推理、硬件成本、地区与下载配额官方未说明。",
            "category": "可下载开放模型权重 / MIT",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          },
          {
            "event": "Mistral Small 3.2 24B 提供 Apache 2.0 开放权重",
            "summary": "Mistral 模型卡提供 Small 3.2 24B Instruct 权重，说明它改进了精确指令跟随、减少重复生成，并提供更稳健的函数调用模板；权重许可为 Apache 2.0。",
            "howTo": "按模型卡安装 `vllm>=0.9.1`，再运行 `vllm serve mistralai/Mistral-Small-3.2-24B-Instruct-2506 --tokenizer_mode mistral --config_format mistral --load_format mistral --tool-call-parser mistral --enable-auto-tool-choice --tensor-parallel-size 2`。",
            "impact": "有合适 GPU 的学生可在本机或实验室服务器上练习函数调用、工具使用和本地推理；不要把模型卡所述的能力描述当作独立评测结论。",
            "free": "权重按 Apache 2.0 许可提供；模型卡注明 BF16/FP16 推理约需 55GB GPU RAM。下载账号、地区、托管推理额度官方未说明，运行硬件并非免费提供。",
            "category": "可下载开放模型权重 / Apache 2.0",
            "source": {
              "name": "Mistral 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-Small-3.2-24B-Instruct-2506"
            }
          },
          {
            "event": "Google Gemma 3 1B 提供可下载开放权重",
            "summary": "Google DeepMind 的 Gemma 3 1B 指令模型可处理文本和图像输入并生成文本，模型卡说明 1B 版本支持 32K token 输入上下文，并以小型模型为目标适配资源受限环境。",
            "howTo": "打开官方模型卡并按其 Gemma Terms 使用；安装 `transformers>=4.50.0`，加载 `google/gemma-3-1b-it`，依照卡片示例使用 instruction-tuned chat template。",
            "impact": "适合学生在个人设备或课程实验环境中尝试本地文本摘要、图像问答和小模型部署；先检查许可条款与设备能力。",
            "free": "模型卡提供开放权重并链接 Google Gemma Terms；费用、账号资格、地区和下载配额官方未说明，使用受该条款约束。",
            "category": "可下载开放模型权重 / Gemma Terms",
            "source": {
              "name": "Google DeepMind 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/google/gemma-3-1b-it"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "California bans child marriage, a practice still legal in 32 US states",
            "source": "BBC",
            "published": "2026-10-01",
            "url": "https://www.bbc.co.uk/news/articles/c6rm9mnn0w3eo",
            "readingTime": "6 分钟",
            "topic": "社会 / 未成年人保护与婚姻法",
            "summary": "BBC 从加州新法、旧有法律漏洞和当事人经历展开报道：新禁令将于2027年1月1日生效；此前加州没有最低婚龄，父母同意且法官批准即可结婚，未成年人也缺乏离婚机制。倡议组织称加州每年约有9,000名女孩结婚，几乎所有童婚都涉及女孩与成年男性；报道指出加州是2018年以来第18个禁止童婚的州。文章以幸存者证词呈现法律漏洞造成的个人伤害，并补充多年倡议及其他州仍允许童婚的背景，最后以新法生效日期和继续推动全国禁令收束。",
            "reason": [
              "未成年人保护与婚姻法兼具社会公平和公共政策属性，适合练习社会议题类阅读。",
              "文章由新法切入，回溯旧制度，再用当事人证词和倡议组织数据说明影响，最后交代实施日期。",
              "可练习主旨概括、数字归因、法律变化前后对比及证据来源辨析。",
              "consent、nuptials、advocacy、lobbying 等词汇可用于法律与社会政策话题。",
              "写作上可借鉴“制度缺口—受影响群体—改革回应”的论证顺序，并谨慎归因倡议组织数据。"
            ],
            "vocabulary": [
              {
                "word": "ban",
                "phonetic": "/bæn/",
                "part": "v./n.",
                "translation": "禁止；禁令"
              },
              {
                "word": "consent",
                "phonetic": "/kənˈsent/",
                "part": "n./v.",
                "translation": "同意；许可"
              },
              {
                "word": "nuptials",
                "phonetic": "/ˈnʌpʃəlz/",
                "part": "n.pl.",
                "translation": "婚礼；婚姻"
              },
              {
                "word": "trapped",
                "phonetic": "/træpt/",
                "part": "adj.",
                "translation": "受困的；陷入困境的"
              },
              {
                "word": "abusive",
                "phonetic": "/əˈbjuːsɪv/",
                "part": "adj.",
                "translation": "虐待性的；辱骂的"
              },
              {
                "word": "advocacy",
                "phonetic": "/ˈædvəkəsi/",
                "part": "n.",
                "translation": "倡议；拥护"
              },
              {
                "word": "wed",
                "phonetic": "/wed/",
                "part": "v.",
                "translation": "结婚；使结婚"
              },
              {
                "word": "lobbying",
                "phonetic": "/ˈlɑːbiɪŋ/",
                "part": "n.",
                "translation": "游说活动"
              },
              {
                "word": "survivor",
                "phonetic": "/sərˈvaɪvər/",
                "part": "n.",
                "translation": "幸存者；挺过困境的人"
              },
              {
                "word": "predatory",
                "phonetic": "/ˈpredətɔːri/",
                "part": "adj.",
                "translation": "掠夺性的；利用弱者的"
              }
            ],
            "sentences": [
              {
                "original": "In the state, there had been no legal age to wed, allowing children to get married as long as their parents consent and a judge signs off on the nuptials.",
                "analysis": [
                  "主干为 there had been no legal age，there be 结构说明此前缺少法定最低年龄。",
                  "In the state 是句首地点状语，限定讨论范围为加州。",
                  "allowing children... 是现在分词短语，补充说明没有年龄限制带来的后果。",
                  "as long as 引导条件状语从句，parents consent 与 a judge signs off 是并列条件。",
                  "可借鉴 no ... , allowing ... 描述制度缺口及其结果。"
                ],
                "translation": "在该州，此前没有法定结婚年龄，只要父母同意且法官批准，儿童就可以结婚。"
              },
              {
                "original": "There was also no mechanism for people under 18 to get divorced.",
                "analysis": [
                  "主干为 There was no mechanism，there be 结构引出制度缺失。",
                  "also 将离婚程序缺失与前文没有最低婚龄并列，补足法律漏洞。",
                  "for people under 18 是介词短语，说明该机制原本应服务的人群。",
                  "to get divorced 是不定式，说明 mechanism 的用途。",
                  "no mechanism for sb to do 可用于分析制度性障碍。"
                ],
                "translation": "此外，18岁以下的人没有办理离婚的机制。"
              },
              {
                "original": "California is the 18th to ban it since 2018.",
                "analysis": [
                  "主干为 California is the 18th，系动词后用序数词表示排名。",
                  "to ban it 是不定式后置修饰 the 18th，说明加州采取的行动。",
                  "since 2018 标示统计起点，强调这是一个逐步扩大的立法趋势。",
                  "it 指代 child marriage，避免重复前文核心名词。",
                  "可用序数词与 since 短语概括政策扩散过程。"
                ],
                "translation": "自2018年以来，加州是第18个禁止童婚的州。"
              }
            ]
          },
          {
            "title": "Question of whether taxpayers or fossil fuel companies pay for climate change damage heads to Supreme Court",
            "source": "The Conversation",
            "published": "2026-09-30",
            "url": "https://theconversation.com/question-of-whether-taxpayers-or-fossil-fuel-companies-pay-for-climate-change-damage-heads-to-supreme-court-292847",
            "readingTime": "8 分钟",
            "topic": "环境 / 气候诉讼与公共成本",
            "summary": "文章先解释地方政府为何向石油公司追偿气候灾害的恢复与防护费用，再介绍Suncor与Exxon以联邦法为由反驳，并指出美国最高法院将于10月5日听取科罗拉多案争论。作者随后拆解《清洁空气法》是否排除州法、明示与默示排除及州权边界，列出其认为企业抗辩存在的法律障碍；最后讨论Alito不参与可能带来的平票风险。文章强调相关诉讼的公共成本和气候问责影响很大，但判决结果仍难预测。",
            "reason": [
              "气候灾害成本由谁承担，是环境治理、企业责任与公共财政交叉的典型议题。",
              "文章先列诉讼背景和双方主张，再解释法律概念、逐项分析，最后评估判决影响。",
              "适合练习识别作者立场、对比双方论证，以及区分即将听证与已作判决。",
              "preemption、reimburse、allegation、liability 等词汇可迁移到法律、商业责任和环境政策阅读。",
              "写作上可借鉴先提出成本分配问题，再引入法律框架和反方论据，最后保留结论不确定性的结构。"
            ],
            "vocabulary": [
              {
                "word": "preemption",
                "phonetic": "/ˌpriːˈempʃən/",
                "part": "n.",
                "translation": "（法律）优先适用；排除州法"
              },
              {
                "word": "reimburse",
                "phonetic": "/ˌriːɪmˈbɜːrs/",
                "part": "v.",
                "translation": "偿还；补偿"
              },
              {
                "word": "allegation",
                "phonetic": "/ˌæləˈɡeɪʃən/",
                "part": "n.",
                "translation": "指称；指控"
              },
              {
                "word": "curtail",
                "phonetic": "/kərˈteɪl/",
                "part": "v.",
                "translation": "削减；限制"
              },
              {
                "word": "preclude",
                "phonetic": "/prɪˈkluːd/",
                "part": "v.",
                "translation": "排除；阻止"
              },
              {
                "word": "liability",
                "phonetic": "/ˌlaɪəˈbɪləti/",
                "part": "n.",
                "translation": "责任；法律责任"
              },
              {
                "word": "supersede",
                "phonetic": "/ˌsuːpərˈsiːd/",
                "part": "v.",
                "translation": "取代；使……失效"
              },
              {
                "word": "stringent",
                "phonetic": "/ˈstrɪndʒənt/",
                "part": "adj.",
                "translation": "严格的；严厉的"
              },
              {
                "word": "recovery",
                "phonetic": "/rɪˈkʌvəri/",
                "part": "n.",
                "translation": "追回；补偿；恢复"
              },
              {
                "word": "undercut",
                "phonetic": "/ˌʌndərˈkʌt/",
                "part": "v.",
                "translation": "削弱；损害"
              }
            ],
            "sentences": [
              {
                "original": "Dozens of states, cities, counties and tribes have sued major oil companies.",
                "analysis": [
                  "主干为 Dozens ... have sued companies，使用现在完成时说明诉讼已发生且与当前争议相关。",
                  "主语由 states、cities、counties、tribes 并列构成，突出起诉方范围广。",
                  "major 修饰 oil companies，指出被诉对象类别。",
                  "该句从多个地方政府共同采取行动切入，建立文章背景。",
                  "可借鉴 have sued ... to recover ... 表达公共机构追偿。"
                ],
                "translation": "数十个州、市、县和部落已经起诉大型石油公司。"
              },
              {
                "original": "There are basically two kinds of preemption: express and implied.",
                "analysis": [
                  "主干为 There are two kinds，there be 结构用于提出分类。",
                  "basically 是句子副词，表示作者接下来采用的基本分类方式。",
                  "冒号后的 express and implied 是对 two kinds 的同位解释。",
                  "此句从具体案件转入法律概念说明，承担段落转折作用。",
                  "可借鉴 two kinds of ... : A and B 清楚界定术语类别。"
                ],
                "translation": "排除州法大致有两种：明示排除和默示排除。"
              },
              {
                "original": "Based on the existing law, the companies have a steep hill to climb.",
                "analysis": [
                  "主干为 the companies have a steep hill to climb，表达企业面临的困难。",
                  "Based on the existing law 是句首介词短语，限定判断所依据的法律背景。",
                  "steep hill 是“艰难任务”的隐喻，不是字面地形。",
                  "该句是作者评估前文法条后提出的阶段性结论。",
                  "写作中可用 based on ... 引入依据，并用 cautious wording 标记分析而非判决。"
                ],
                "translation": "依据现行法律，这些公司面临的挑战并不轻松。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-09-30",
      "status": "ready",
      "ai": {
        "intro": "近两日可核实的AI新变化不足3项，因此扩大到前7日并保留官方来源的真实发布日期；免费资源均按官方模型卡、产品页或教育福利页复核。",
        "updates": [
          {
            "event": "GPT-6.1 Sol 开始在 GitHub Copilot 推出（2026-09-29）",
            "summary": "GitHub 宣布 GPT-6.1 Sol 正式加入 Copilot，面向 agentic coding 与终端工作流；官方称其在早期测试中以更少 token 和步骤完成任务，但这是厂商测试描述，不代表独立基准结论。",
            "howTo": "在符合资格的 Copilot 客户端（如 VS Code、Copilot CLI、github.com 或 GitHub Copilot app）打开模型选择器，选 GPT-6.1 Sol，先给它一个范围清楚的小编码任务，再审查 diff 并运行测试；若尚未显示，等待渐进式开放。",
            "impact": "可让有资格的学生把它用于课程项目中的多步骤改动、终端任务或 bug 定位，并比较 token 使用和代码质量；仍需自行核对依赖、测试与安全影响。",
            "free": "仅 Copilot Pro+、Max、Business 和 Enterprise 用户可用，按模型提供方列表价进行用量计费；逐步开放。Copilot Free/Student 不在官方列出的可用计划中；地区及具体用量官方未说明。",
            "category": "AI 编程 / 新模型",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-29",
              "url": "https://github.blog/changelog/2026-09-29-gpt-6-1-sol-in-github-copilot"
            }
          },
          {
            "event": "Google Vids 为 Omni 1.1 加入更精细的AI视频控制（2026-09-23）",
            "summary": "Google Vids 的 Omni 1.1 可延长场景并保持画面元素连贯、指定生成片段时长、生成 1080p 视频场景或放大现有片段；生成内容带有 SynthID 水印。",
            "howTo": "打开 vids.new 并登录 Google 或 Workspace 账号，在 Google Vids 中提示生成视频场景；按需要延长场景、指定时长，再生成 1080p 片段或放大已有片段并导出。",
            "impact": "学生可为课程展示、社团活动或项目提案制作短视频，较精确地匹配旁白长度并保持连续镜头；应标注AI生成内容并检查画面事实。",
            "free": "官方称任何 Google 或 Google Workspace 账号均可免费开始生成；付费 Google AI 计划以及 Workspace Business、Enterprise 计划提供更大的生成池。免费额度、地区范围及账号 rollout 细节官方未说明。",
            "category": "AI 视频 / 免费创作工具",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "Gemini 开始接入更多第三方 Connected Apps（2026-09-23）",
            "summary": "Gemini 新增生产力、创意和生活方式类 Connected Apps，包括 Airtable、Linear、Adobe、Picsart、Peloton 等；可在 Gemini 设置连接应用，或在聊天中用 @ 提及应用。",
            "howTo": "打开 Gemini 设置中的 Connected Apps，连接自己已有权限的应用；也可在 Gemini 对话中输入 @ 应用名，或直接提出任务。先确认授权范围，再检查 Gemini 汇总或生成的结果。",
            "impact": "小组项目可在一个对话入口整理数据库或项目事项、构思视觉素材和安排活动；重要内容仍应回到原应用确认。",
            "free": "官方称功能自公告日起逐步推出，并未说明适用计划、地区、第三方应用订阅条件或具体使用额度；需先连接自己有权使用的应用。",
            "category": "AI 助手 / 应用连接",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
            }
          }
        ],
        "deals": [
          {
            "event": "OpenAI gpt-oss-20b 开放权重（Apache 2.0）",
            "summary": "OpenAI 官方 Hugging Face 模型卡提供 gpt-oss-20b 权重下载并标注 Apache 2.0；该量化模型面向本地或专用场景，卡片称其可在 16GB 内存中运行，并支持可调推理强度。",
            "howTo": "按模型卡安装 Ollama 后运行 `ollama pull gpt-oss:20b` 与 `ollama run gpt-oss:20b`；也可用 Hugging Face CLI 下载权重并按官方 Transformers 示例部署。",
            "impact": "适合在课程项目中练习本地模型部署、推理参数和函数调用；无需按 token 购买托管 API，但需要自行承担硬件、耗电与环境配置成本。",
            "free": "模型权重可下载，Apache 2.0 许可允许使用与修改；模型卡注明约 16GB 内存需求。账号资格、地区和下载配额官方未说明；本地运行所需设备并非免费提供。",
            "category": "可下载开放模型权重 / Apache 2.0",
            "source": {
              "name": "OpenAI 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/openai/gpt-oss-20b"
            }
          },
          {
            "event": "Google Vids 可免费生成 AI 视频场景",
            "summary": "Google 官方说明，Omni 1.1 可在 Vids 中生成 1080p AI 视频场景、延长场景及放大已有片段；普通 Google 账号也可免费开始使用。",
            "howTo": "访问 vids.new 并登录 Google 或 Workspace 账号，在 Vids 中输入场景描述并生成片段；需要更高生成额度时，先查看 Google AI 或 Workspace 计划说明。",
            "impact": "可把课程汇报提纲、社团活动信息或项目展示做成短片，省去从空白时间线起步的步骤；提交前检查版权、事实和水印呈现。",
            "free": "Google 或 Workspace 账号可免费开始生成，付费计划有更大的生成池；具体免费额度、地区与生成次数官方未说明。",
            "category": "长期免费网页工具 / AI 视频",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "GitHub Student Developer Pack：Camber Student AI 数据科学资源",
            "summary": "GitHub Education 列出的 Camber Student 计划面向在读学生免费提供 40 CPU 小时、5 GPU 小时、50GB 存储，以及每月 50 条 agent 消息，可从自有数据与代码构建并运行 AI agent。",
            "howTo": "在 GitHub Education 申请 Student Developer Pack 并按页面指引领取 Camber Student；在 Camber 中连接项目数据源，创建 AI agent，再留意 CPU、GPU 与月度消息额度。",
            "impact": "适合课程中的数据分析、机器学习原型和 agent 工作流练习，尤其是需要 GPU 或云端长任务的项目；先用小数据集验证，避免超出配额。",
            "free": "页面列出在读学生可免费使用；额度为 40 CPU 小时、5 GPU 小时、50GB 存储和每月 50 条 agent 消息。地区、资格审核细则及计划期限官方未说明。",
            "category": "学生教育福利 / AI 云端开发",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "GitHub Student Developer Pack：Azure for Students 云额度",
            "summary": "GitHub Education 的学生福利页列出 Microsoft Azure for Students：18 岁及以上学生可获得 25 多项 Azure 云服务的免费访问和 100 美元 Azure credit，并注明无需信用卡。",
            "howTo": "从 GitHub Education Student Developer Pack 打开 Microsoft Azure 福利入口，按其资格验证步骤申请；用量计费服务会消耗 Azure credit，先检查服务价格与余额。",
            "impact": "可用于部署课程项目、练习云端基础设施，或在了解计费后试验云端 AI 服务；这笔 credit 是一般 Azure 额度，不等于某个 AI 模型的免费调用配额。",
            "free": "官方列出 18 岁以上学生、25+ 项免费服务、100 美元 credit 且无需信用卡；具体地区、申领期限、额度有效期及 AI 服务覆盖范围官方未说明。",
            "category": "学生教育福利 / 云服务额度",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Household energy bills forecast to see biggest rise in four years",
            "source": "BBC",
            "published": "2026-09-29",
            "url": "https://www.bbc.co.uk/news/articles/cwz0zvj4m1myo",
            "readingTime": "6 分钟",
            "topic": "经济 / 能源价格与家庭负担",
            "summary": "BBC 报道称，Cornwall Insight 预测英国典型家庭年能源账单明年1月可能升至1,999英镑，比当前价格上升276英镑、约16%；这只是预测，Ofgem 要到11月下旬才公布实际价格上限。文章先比较10月起的4%涨幅与政府减免的影响，再说明中东天然气供应受扰和欧洲储气偏低如何推高冬季价格；随后以家庭能源负担、超过50亿英镑欠费及供应商和公益组织的呼吁，呈现政策压力。结尾强调预测仍有不确定性，但价格设定窗口已过半，固定费率以外家庭面临的涨价风险较高。",
            "reason": [
              "能源价格与家庭负担属于经济、社会政策类常见议题，可练习从个人成本推及公共政策。",
              "文章按预测数字、成因、家庭影响、政策回应推进，适合概括段落功能与论证链条。",
              "可练习区分 forecast、actual cap 与 conditional prediction，避免把预测写成已发生事实。",
              "price cap、variable tariff、storage、targeted support 等词适用于能源与生活成本话题。",
              "可借鉴用具体账单数字引出弱势群体影响，再提出政策讨论的写作结构。"
            ],
            "vocabulary": [
              { "word": "forecast", "phonetic": "/ˈfɔːrkæst/", "part": "n./v.", "translation": "预测；预报" },
              { "word": "soar", "phonetic": "/sɔːr/", "part": "v.", "translation": "猛增；飙升" },
              { "word": "typical", "phonetic": "/ˈtɪpɪkəl/", "part": "adj.", "translation": "典型的；有代表性的" },
              { "word": "price cap", "phonetic": "/ˈpraɪs kæp/", "part": "n.", "translation": "价格上限" },
              { "word": "variable tariff", "phonetic": "/ˈveriəbəl ˈtærɪf/", "part": "n.", "translation": "浮动费率" },
              { "word": "sustain", "phonetic": "/səˈsteɪn/", "part": "v.", "translation": "维持；持续" },
              { "word": "disruption", "phonetic": "/dɪsˈrʌpʃən/", "part": "n.", "translation": "中断；扰乱" },
              { "word": "storage", "phonetic": "/ˈstɔːrɪdʒ/", "part": "n.", "translation": "储存；储备" },
              { "word": "targeted", "phonetic": "/ˈtɑːrɡɪtɪd/", "part": "adj.", "translation": "有针对性的" },
              { "word": "unsustainable", "phonetic": "/ˌʌnsəˈsteɪnəbəl/", "part": "adj.", "translation": "不可持续的" }
            ],
            "sentences": [
              {
                "original": "The 16% predicted increase would hit millions of households at the coldest time of year, and would mark the biggest rise in bills for four years.",
                "analysis": [
                  "主干为 The increase would hit ... and would mark ...，两个 would 谓语并列。",
                  "The 16% predicted 是名词 increase 的限定信息，说明幅度和预测性质。",
                  "at the coldest time of year 与 for four years 分别补充发生时点和比较跨度。",
                  "and 将家庭影响与历史幅度并列，形成由生活后果到统计判断的递进。",
                  "可借鉴 would + 动词描述尚未确定的预测结果。"
                ],
                "translation": "预计上涨的16%将影响数百万家庭，恰逢一年中最寒冷的时候，并将成为四年来最大的账单涨幅。"
              },
              {
                "original": "The forecast from consultancy Cornwall Insight comes a day before prices go up under regulator Ofgem's October price cap and puts increased pressure on the government to support those who will struggle to pay.",
                "analysis": [
                  "主干为 The forecast comes ... and puts ...，两个谓语共享主语。",
                  "from consultancy Cornwall Insight 交代预测来源；a day before 引出时间参照。",
                  "under ... price cap 说明价格上涨所处的监管机制。",
                  "those 后接 who will struggle to pay 的定语从句，限定需要支持的人群。",
                  "puts pressure on ... to do 是表达政策压力的实用结构。"
                ],
                "translation": "咨询机构 Cornwall Insight 的这项预测发布于监管机构 Ofgem 的10月价格上限上调前一天，并加大了要求政府帮助无力支付者的压力。"
              },
              {
                "original": "This remains only a prediction at this stage.",
                "analysis": [
                  "主干为 This remains a prediction，This 指前文的账单上涨判断。",
                  "only 限定判断的证据状态，提醒读者并非最终价格。",
                  "at this stage 补充当前时间边界，保留未来信息变化的空间。",
                  "该句与此前具体数字形成必要的审慎限定，体现新闻写作的归因意识。",
                  "可用于写作中区分当前证据与最终结果：remain only a ... at this stage。"
                ],
                "translation": "现阶段这仍然只是一项预测。"
              }
            ]
          },
          {
            "title": "How to hide your spending habits from retailers (so you don't get ripped off)",
            "source": "NPR",
            "published": "2026-09-29",
            "url": "https://www.npr.org/2026/09/29/nx-s1-5983457/4-ways-to-avoid-getting-ripped-off-according-to-a-pricing-expert",
            "readingTime": "6 分钟",
            "topic": "科技趋势 / 消费者隐私与个性化定价",
            "summary": "NPR 报道消费者倡议组织负责人 Lindsay Owens 对个性化定价的提醒：酒店、航空公司和零售商可能利用位置、浏览、人口统计与购买记录推测顾客愿付价格，并通过算法测试不同报价。文章先解释数据如何被收集和用于定价，再按场景给出建议：避免登录零售商应用、在不同设备和登录状态下比价、清理 cookies 与限制应用权限，也可考虑线下购物。作者承认这些做法耗时、便利性较低，未必值得用于小额消费；同时指出电子价签等技术也让实体店价格更易变化，并提到部分州开始立法限制个性化定价。",
            "reason": [
              "数据隐私、算法定价和消费者权益是科技发展与日常生活交叉的高频议题。",
              "文章先说明数据如何支持个性化报价，再分场景列出保护隐私和比价方法，最后谈线下零售与政策回应。",
              "可练习区分作者转述的专家判断、风险机制与可执行建议。",
              "personalized pricing、incentive、comparison shopping 等词适合科技伦理与消费经济话题。",
              "建议部分可用于写作中提出分层应对措施，同时注意文章承认时间成本和便利性取舍。"
            ],
            "vocabulary": [
              { "word": "deliberately", "phonetic": "/dɪˈlɪbərətli/", "part": "adv.", "translation": "故意地；蓄意地" },
              { "word": "overcharged", "phonetic": "/ˌoʊvərˈtʃɑːrdʒd/", "part": "v. pp.", "translation": "被多收费；被索价过高" },
              { "word": "geo-location", "phonetic": "/ˌdʒiːoʊloʊˈkeɪʃən/", "part": "n.", "translation": "地理位置数据" },
              { "word": "personalized", "phonetic": "/ˈpɜːrsənəlaɪzd/", "part": "adj.", "translation": "个性化的；针对个人的" },
              { "word": "incentive", "phonetic": "/ɪnˈsentɪv/", "part": "n.", "translation": "激励；诱因" },
              { "word": "retailer", "phonetic": "/ˈriːteɪlər/", "part": "n.", "translation": "零售商" },
              { "word": "comparison shopping", "phonetic": "/kəmˈpærɪsən ˌʃɑːpɪŋ/", "part": "n.", "translation": "比价购物" },
              { "word": "incognito", "phonetic": "/ˌɪnkɑːɡˈniːtoʊ/", "part": "adj.", "translation": "隐身浏览的" },
              { "word": "permission", "phonetic": "/pərˈmɪʃən/", "part": "n.", "translation": "许可；权限" },
              { "word": "unpredictable", "phonetic": "/ˌʌnprɪˈdɪktəbəl/", "part": "adj.", "translation": "难以预测的" }
            ],
            "sentences": [
              {
                "original": "\"What we're seeing is Big Tech reinventing the rip-off,\" says Lindsay Owens, head of the consumer advocacy group Groundwork Collaborative.",
                "analysis": [
                  "引语内部的主干是 What we're seeing is ...，What 引导的名词性从句作主语。",
                  "引语的表语为 Big Tech reinventing the rip-off，其中 Big Tech 是动名词短语的逻辑主语。",
                  "引语后置的 says Lindsay Owens 是报道语，说明观点来源。",
                  "head of the consumer advocacy group Groundwork Collaborative 是 Owens 的同位语，补充身份信息。",
                  "可借鉴“专家原话 + says + 姓名 + 同位语”写法呈现观点及来源。"
                ],
                "translation": "消费者倡议组织 Groundwork Collaborative 负责人 Lindsay Owens 说：“我们看到的是大型科技公司在重新包装宰客手法。”"
              },
              {
                "original": "Still, there are ways to get a fair deal.",
                "analysis": [
                  "这是 there be 存在句，核心为 there are ways。",
                  "Still 作句首连接副词，承接风险描述并引出转折性的解决方案。",
                  "to get a fair deal 是不定式短语，说明 ways 的目的或内容。",
                  "a fair deal 与前文的 rip-off 形成语义对照。",
                  "Still, there are ways to ... 可用于从问题过渡到应对方案。"
                ],
                "translation": "不过，消费者仍有办法争取公平的交易。"
              },
              {
                "original": "Clear your browsing data and cookies regularly.",
                "analysis": [
                  "这是省略主语 you 的祈使句，动词 Clear 直接提出行动建议。",
                  "browsing data 和 cookies 是并列宾语，表示要清理的两类浏览信息。",
                  "regularly 是频率副词，修饰 Clear，说明建议需要重复执行。",
                  "句子由前文的风险分析转为具体、可执行的隐私保护步骤。",
                  "祈使句可用于建议文，但应结合条件或理由，避免显得武断。"
                ],
                "translation": "定期清除浏览数据和 cookies。"
              }
            ]
          },
          {
            "title": "On the rocks? Scotch distilleries pause production as unsold 'whisky loch' grows",
            "source": "The Guardian",
            "published": "2026-09-29",
            "url": "https://www.theguardian.com/food/2026/sep/29/scotch-distilleries-pause-production-whisky-loch-scotland",
            "readingTime": "8 分钟",
            "topic": "经济 / 产业周期与消费变化",
            "summary": "文章以苏格兰酒厂暂停生产和大型仓储扩建开篇，解释疫情期间繁荣后全球苏格兰威士忌需求回落，造成库存积压、裁员和部分企业财务压力。报道再分析原因：消费者在疫情期间囤酒后减少购买、健康意识增强、价格上升，以及美国关税和法国等市场需求下滑；威士忌必须在橡木桶中陈酿至少三年，令供需预测更困难。作者也呈现印度市场增长、旅游收入和业内对周期复苏的乐观判断，结尾以历史上低迷后需求回升作对照，但没有断言本轮复苏何时到来。",
            "reason": [
              "产业过剩、消费变化、出口市场和长期投资决策构成典型经济类阅读主题。",
              "文章从仓储与停产的具体画面切入，转向需求成因、市场数据，再呈现复苏观点与历史类比。",
              "可练习辨析供给过剩与需求下滑的因果链，以及报道如何并置乐观和谨慎声音。",
              "maturation、glut、offset、downturn 等词适用于商业周期和产业分析。",
              "可借鉴以案例引出宏观趋势，再用反方迹象和历史参照限定结论的写法。"
            ],
            "vocabulary": [
              { "word": "distillery", "phonetic": "/dɪˈstɪləri/", "part": "n.", "translation": "酿酒厂；蒸馏厂" },
              { "word": "slump", "phonetic": "/slʌmp/", "part": "v./n.", "translation": "骤降；低迷" },
              { "word": "glut", "phonetic": "/ɡlʌt/", "part": "n.", "translation": "供过于求；过剩" },
              { "word": "maturation", "phonetic": "/ˌmætʃəˈreɪʃən/", "part": "n.", "translation": "成熟；陈酿" },
              { "word": "navigate", "phonetic": "/ˈnævɪɡeɪt/", "part": "v.", "translation": "应对；设法处理" },
              { "word": "sustained", "phonetic": "/səˈsteɪnd/", "part": "adj.", "translation": "持续的" },
              { "word": "tentative", "phonetic": "/ˈtentətɪv/", "part": "adj.", "translation": "试探性的；暂定的" },
              { "word": "offset", "phonetic": "/ˌɔːfˈset/", "part": "v.", "translation": "抵消；弥补" },
              { "word": "downturn", "phonetic": "/ˈdaʊntɜːrn/", "part": "n.", "translation": "衰退；下行期" },
              { "word": "overconfidence", "phonetic": "/ˌoʊvərˈkɑːnfɪdəns/", "part": "n.", "translation": "过度自信" }
            ],
            "sentences": [
              {
                "original": "After a 15-year boom turbocharged by the Covid-19 pandemic, demand for Scotch whisky has slumped around the world.",
                "analysis": [
                  "主干为 demand for Scotch whisky has slumped，说明需求已在全球回落。",
                  "句首 After 引导时间背景，先交代繁荣周期再转入当前变化。",
                  "turbocharged by the Covid-19 pandemic 是过去分词短语，修饰 boom 并说明繁荣的推动因素。",
                  "前置背景与主句构成 boom/slump 的时间对照。",
                  "可借鉴 After + 名词短语引出背景，再用主句写趋势变化。"
                ],
                "translation": "在疫情助推的15年繁荣期之后，苏格兰威士忌需求已在全球范围内下滑。"
              },
              {
                "original": "Distilleries have paused production across Scotland to avoid adding to the glut of supply, known as a “whisky loch” – the equivalent of a “wine lake”.",
                "analysis": [
                  "主干为 Distilleries have paused production，使用现在完成时描述已采取的应对。",
                  "to avoid adding ... 是目的不定式；adding 后接 to the glut 表示加剧积压。",
                  "known as a “whisky loch” 是过去分词短语，补充解释 glut of supply。",
                  "破折号后的 the equivalent of ... 用类比帮助读者理解新表达。",
                  "可借鉴 pause ... to avoid doing ... 说明措施与预防目标。"
                ],
                "translation": "苏格兰各地的酒厂已暂停生产，以免加剧被称为“威士忌湖”的供给积压——相当于“葡萄酒湖”。"
              },
              {
                "original": "Such lengthy maturation periods, used to create a wide range of flavour profiles from sweet to sulphurous, can make it hard to plan production.",
                "analysis": [
                  "主干为 maturation periods can make it hard to plan production。",
                  "Such lengthy 对 periods 作指示与程度限定，回指前文的长期陈酿过程。",
                  "used to create ... 是过去分词短语，补充说明陈酿的用途。",
                  "from sweet to sulphurous 描述风味范围；因果关系落在长期周期使规划更难。",
                  "make it + adj. + to do 是表达某因素增加行动难度的常用结构。"
                ],
                "translation": "如此漫长的陈酿期用于形成从甜味到硫磺味的多种风味，也使生产规划变得困难。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-09-29",
      "status": "ready",
      "ai": {
        "intro": "9月28日至29日核实到1项官方AI新品，按规则扩展到前7日并保留各来源实际发布日期；免费资源按官方计划页、定价页和模型卡复核。",
        "updates": [
          {
            "event": "Claude Sonnet 5.5 正式加入 GitHub Copilot（2026-09-28）",
            "summary": "GitHub 宣布 Claude Sonnet 5.5 在 Copilot 正式可用，定位于构建功能、修复 bug 等范围明确的日常开发任务；可在模型选择器中调用。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI、GitHub Copilot app 或其他官方列出的客户端打开模型选择器，选择 Claude Sonnet 5.5；先给它一个边界清楚的小任务，再检查生成改动并运行测试。",
            "impact": "课程项目可用它起草小功能或定位单个 bug；学生可对比生成的补丁和自己的实现，但应自己核对测试、依赖及改动范围。",
            "free": "官方列出的可用计划仅为 Copilot Pro、Pro+、Max、Business 和 Enterprise；模型按提供方列表价计费并渐进推出。地区和具体用量官方未说明。",
            "category": "AI 编程 / 新模型",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-28",
              "url": "https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot"
            }
          },
          {
            "event": "Copilot 在 Slack 与 Microsoft Teams 增加上下文和模型控制（2026-09-25）",
            "summary": "GitHub 更新 Copilot 在 Slack 与 Teams 的协作：Slack 可引用支持的文件、附件和消息链接，Teams 可利用行内图片、转发消息及频道/线程历史；两端均可切换模型，Copilot 还会在建 issue 前检查相似问题。",
            "howTo": "先让组织管理员启用 Copilot cloud agent policy，再安装或升级 GitHub 的 Slack/Teams 应用、关联 GitHub 账号并在对话中提及 @GitHub；分享项目文件或线程上下文后提出具体任务。",
            "impact": "小组作业可把讨论中的截图、文件和上下文带入 issue 或编码任务，减少重复建单，并能回看任务关联的原始讨论；提交前仍要人工核对结果。",
            "free": "目前是 Copilot Business 与 Enterprise 组织的 public preview，使用量计入既有 Copilot 权益并受 cloud agent 预算管理；部分功能逐步开放。个人免费资格、地区和独立配额官方未说明。",
            "category": "AI 协作 / 团队工作流",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams"
            }
          },
          {
            "event": "GitHub Copilot app 预览本地 agent 沙箱（2026-09-25）",
            "summary": "Copilot app 的 public preview 加入 local sandboxing，可限制 agent 对本地文件、网络和凭据的访问范围。",
            "howTo": "在 GitHub Copilot app 中试用 public preview 的 local sandboxing，按应用提供的选项限制 agent 可访问的文件、网络和凭据；先用非敏感的课程仓库执行小任务，再检查 agent 活动及改动。",
            "impact": "学生尝试让 agent 修改项目或运行工具时，可先缩小其本机资源访问范围，降低误操作扩大到无关文件或凭据的风险；沙箱不能代替审阅代码。",
            "free": "官方将该能力标为 public preview，但未说明价格、适用账号/计划、地区、配额或开放节奏；需使用 GitHub Copilot app。",
            "category": "AI 编程 / 本地安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free 免费网页与应用访问",
            "summary": "Anthropic 定价页列出面向日常问题的 Free 计划；所有计划的用量限制按滚动五小时窗口重置，网页、桌面端、移动端和 Claude Code 共用额度，且没有固定消息数。",
            "howTo": "打开 Claude 网页或应用，选择 Free 计划做短文本解释、摘要或改写；在 Settings > Usage 查看用量，达到上限后等待窗口重置。",
            "impact": "适合用来拆解英文长句、生成复习提纲或比较不同改写；免费额度不是固定消息数，重要事实仍应回到原文核验。",
            "free": "Free 计划可用；用量依对话长度、模型和功能而异，没有固定消息数，滚动五小时重置。账号资格、地区和具体上限官方未说明。",
            "category": "长期免费网页/应用访问 / AI 助手",
            "source": {
              "name": "Claude 官方定价",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free 每月免费代码补全",
            "summary": "GitHub 计划页列出 Copilot Free：每月最多 2,000 次代码补全，并提供有限的功能访问和 AI Credits；免费计划的 agent 使用有限。",
            "howTo": "用个人 GitHub 账号从官方 Copilot Free 页面开始，在支持的 IDE 安装 Copilot 后启用行内补全；到 GitHub 计划/用量页面查看可用功能和剩余额度。",
            "impact": "适合课程练习中的样板代码补全和小型函数草稿；每月额度有限，生成代码应自行阅读并运行测试。",
            "free": "官方标价 Free，每月 2,000 次补全，并有未统一列明数值的 AI Credits 和有限 agent 功能；仅适用于没有组织或企业 Copilot 权限的个人开发者。地区可用性和 AI Credits 的具体数值官方未说明。",
            "category": "长期免费 IDE 访问 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Gemini API / Google AI Studio Free tier",
            "summary": "Google Gemini API 定价页确认部分模型有 Free tier，提供免费输入与输出 token，并可使用 Google AI Studio；免费层数据按页面说明可能用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio，选用定价页标明有 Free tier 的模型创建 API key，先做低频摘要或分类原型；上线前按所选模型的速率限制设置重试与用量监控。",
            "impact": "可用于课程项目的 API 原型和 token 成本估算；免费层适合测试，不应当作不限速的生产服务，也不要提交敏感数据。",
            "free": "官方确认仅部分模型有免费输入/输出；额度和速率按模型分别列示，没有统一配额。账号资格、地区及重置周期官方未说明；免费层内容可能用于改进产品。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter Notebook",
            "summary": "Colab FAQ 说明它是无需本地设置的托管 Jupyter Notebook 服务，可免费使用计算资源，包括 GPU 和 TPU；资源并非保证或无限，使用限制会波动。",
            "howTo": "打开 Colab 新建或上传 notebook，运行课程代码；需要时尝试 GPU/TPU 运行时，并把 notebook 保存到 Drive 或 GitHub，避免将密钥放入共享文件。",
            "impact": "可用于数据清理、课程实验和小型机器学习练习，不必先配置本地环境；应保存中间结果并准备资源受限时的 CPU 方案。",
            "free": "官方确认免费且可使用 GPU/TPU，但资源不保证、配额会波动；固定额度、地区资格和重置周期官方未说明。免费托管运行时禁止挖矿、远程代理、创建 deepfake 等滥用行为。",
            "category": "长期免费云端 notebook / 学习计算资源",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "DeepSeek-R1-Distill-Qwen-1.5B MIT 开放权重",
            "summary": "DeepSeek 官方 Hugging Face 模型卡列出可下载的 DeepSeek-R1 蒸馏模型权重，并说明模型权重采用 MIT License，允许商业使用及修改。",
            "howTo": "打开官方模型卡，在 Distill 模型列表选择 DeepSeek-R1-Distill-Qwen-1.5B，按卡片建议配置本地推理环境并阅读 usage recommendations；用非敏感的题目测试输出。",
            "impact": "学生可在本地推理环境中观察小型开权重模型的推理输出、尝试提示词并学习模型部署，而不必购买 API token；使用许可仍应按 MIT License 遵守。",
            "free": "模型卡提供权重下载并标明 MIT License，允许商业使用和修改；账号、地区、下载额度及硬件要求官方未说明，运行需要自行准备推理环境。",
            "category": "可下载开放模型权重 / MIT License",
            "source": {
              "name": "DeepSeek 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Originalism: What it is, what it isn’t and why it’s the most democratic option for the Supreme Court",
            "source": "The Conversation",
            "published": "2026-09-28",
            "url": "https://theconversation.com/originalism-what-it-is-what-it-isnt-and-why-its-the-most-democratic-option-for-the-supreme-court-291115",
            "readingTime": "7 分钟",
            "topic": "社会 / 宪法解释与民主",
            "summary": "作者先把原旨主义界定为按宪法制定时的理解来解释文本，并与允许法官随时代重释的“活宪法”对照；随后回顾这一解释路径的兴衰，并逐一回应“宪法因此不能改变”及“只是保守派法官的借口”等批评。文章也讨论历史材料含糊、法官并非历史学家、原始制宪排斥部分群体等反对理由，再呈现原旨主义者对民主正当性与修宪程序的回应。作者承认原旨主义内部也有分歧、修宪程序负担很重，结尾仍认为它可能是较小的恶。",
            "reason": [
              "主题：围绕宪法、民主代表性与司法权展开，适合社会制度、法治与公共议题类阅读。",
              "结构：先定义概念并对照另一立场，再辨析常见误解，继而列出反对理由和回应，最后回到作者判断。",
              "题型：可训练概念辨析、段落功能、作者态度及支持/反对论据配对。",
              "词汇：可积累 interpretation、ambiguous、electorate、supermajority 等抽象议论文词汇。",
              "写作：可借鉴“提出概念—说明争议—呈现反方—有限度下结论”的平衡论证结构。"
            ],
            "vocabulary": [
              {
                "word": "originalism",
                "phonetic": "/əˈrɪdʒənəlɪzəm/",
                "part": "n.",
                "translation": "原旨主义；按原初含义解释法律的理论"
              },
              {
                "word": "reinterpret",
                "phonetic": "/ˌriːɪnˈtɜːprɪt/",
                "part": "v.",
                "translation": "重新解释"
              },
              {
                "word": "amendment",
                "phonetic": "/əˈmendmənt/",
                "part": "n.",
                "translation": "修正；修正案"
              },
              {
                "word": "detractor",
                "phonetic": "/dɪˈtræktə/",
                "part": "n.",
                "translation": "批评者；贬低者"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒən/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "ambiguous",
                "phonetic": "/æmˈbɪɡjuəs/",
                "part": "adj.",
                "translation": "含糊的；有歧义的"
              },
              {
                "word": "electorate",
                "phonetic": "/ɪˈlektərət/",
                "part": "n.",
                "translation": "全体选民"
              },
              {
                "word": "supermajority",
                "phonetic": "/ˌsuːpəˈmɑːdʒərəti/",
                "part": "n.",
                "translation": "特别多数；超多数"
              },
              {
                "word": "burdensome",
                "phonetic": "/ˈbɜːdnsəm/",
                "part": "adj.",
                "translation": "负担沉重的"
              }
            ],
            "sentences": [
              {
                "original": "Originalism is a philosophy of interpreting the U.S. Constitution.",
                "analysis": [
                  "主干是 Originalism is a philosophy，系动词 is 把主语与定义性表语连接。",
                  "of interpreting the U.S. Constitution 是介词短语，说明这种 philosophy 的内容。",
                  "interpreting 是动名词，后接宾语 the U.S. Constitution。",
                  "该句先给出术语的简明定义，适合识别说明文中的 topic sentence。"
                ],
                "translation": "原旨主义是一种解释美国宪法的思想。"
              },
              {
                "original": "But originalists think the Constitution can change; they just disagree with who can do the changing.",
                "analysis": [
                  "But 表示转折，回应“原旨主义认为宪法不能变”的常见误解。",
                  "前半句主干是 originalists think，后接省略 that 的宾语从句。",
                  "分号连接两个紧密相关的独立分句，后半句把争议焦点从“能否改变”转到“谁有权改变”。",
                  "who can do the changing 是介词 with 后的间接疑问从句；do the changing 指实施改变。"
                ],
                "translation": "但原旨主义者认为宪法可以改变；他们只是不同意应由谁来改变。"
              },
              {
                "original": "But as more and more people practice originalism, more and more people disagree about how to do it right.",
                "analysis": [
                  "But 引出让步和转折，指出该理论流行并未消除其内部争议。",
                  "as 引导伴随变化的从句，说明原旨主义实践者增加时，分歧也随之增多。",
                  "主句以 more and more people 作主语，disagree 为谓语，形成与从句呼应的比较结构。",
                  "about 后的 how to do it right 是间接疑问结构，讨论的是正确实践方法。"
                ],
                "translation": "但随着越来越多人实践原旨主义，越来越多人对如何正确实践它产生分歧。"
              }
            ]
          },
          {
            "title": "Unis are offering degrees in content creation for £30,000. But are they worth it?",
            "source": "BBC",
            "published": "2026-09-28",
            "url": "https://www.bbc.co.uk/news/articles/c61mvy1emr2zo",
            "readingTime": "4 分钟",
            "topic": "教育 / 内容创作与职业教育",
            "summary": "报道以一名内容创作专业毕业生为切口，介绍课程如何教授视频制作、社交平台受众经营、品牌合作与内容变现；毕业生称课程带来设备、行业联系和就业机会。文章继而列举英国及美国大学的同类项目和学费，提示三年课程可能接近£30,000，并将课程提供的实践技能与高昂学费并置。报道呈现毕业生和校方对课程价值的正面说法，也把是否值得付费留作读者判断。",
            "reason": [
              "主题：连接高等教育、就业技能与社交媒体经济，适合教育和青年就业主题。",
              "结构：先以毕业生经历引入，再说明课程内容与个人收益，最后转向学费和投资回报问题。",
              "题型：可练习人物案例的论证作用、标题设问、细节信息定位及作者是否给出结论。",
              "词汇：包含 transferable skills、monetise、audience、annual fee 等职业与商业语汇。",
              "写作：可借鉴用具体案例引出一般问题，并以成本与收益对照组织议论文。"
            ],
            "vocabulary": [
              {
                "word": "raise a few eyebrows",
                "phonetic": "/reɪz ə fjuː ˈaɪbraʊz/",
                "part": "phr.",
                "translation": "引起惊讶；引发质疑"
              },
              {
                "word": "transferable",
                "phonetic": "/trænsˈfɜːrəbl/",
                "part": "adj.",
                "translation": "可迁移的；可转用的"
              },
              {
                "word": "entrepreneur",
                "phonetic": "/ˌɒntrəprəˈnɜː/",
                "part": "n.",
                "translation": "创业者"
              },
              {
                "word": "monetise",
                "phonetic": "/ˈmɒnɪtaɪz/",
                "part": "v.",
                "translation": "使……变现"
              },
              {
                "word": "audience",
                "phonetic": "/ˈɔːdiəns/",
                "part": "n.",
                "translation": "受众；观众"
              },
              {
                "word": "hired",
                "phonetic": "/ˈhaɪəd/",
                "part": "v.",
                "translation": "受聘；被雇用"
              },
              {
                "word": "equipment",
                "phonetic": "/ɪˈkwɪpmənt/",
                "part": "n.",
                "translation": "设备；器材"
              },
              {
                "word": "hands-on",
                "phonetic": "/ˌhændz ˈɒn/",
                "part": "adj.",
                "translation": "动手实践的"
              },
              {
                "word": "annual",
                "phonetic": "/ˈænjuəl/",
                "part": "adj.",
                "translation": "每年的"
              }
            ],
            "sentences": [
              {
                "original": "She says the course gave her access to equipment, technology and industry contacts.",
                "analysis": [
                  "主干为 She says，后接省略 that 的宾语从句。",
                  "从句主干是 the course gave her access，说明课程带来的资源。",
                  "gave her access 中 her 是间接宾语，access 是直接宾语；to 短语列出资源内容。",
                  "equipment、technology、industry contacts 并列，体现受访者评价课程价值时的具体依据。"
                ],
                "translation": "她说，这门课程让她接触到设备、技术和行业人脉。"
              },
              {
                "original": "Several universities in the UK now offer such courses.",
                "analysis": [
                  "主干为 Several universities offer such courses，主语与谓语均为复数形式。",
                  "in the UK 作后置修饰语，限定这些大学的范围。",
                  "now 标示当前趋势，such 指代前文介绍的内容创作学位课程。",
                  "该句从个案过渡到更广泛的教育供给，承担扩展论据的功能。"
                ],
                "translation": "英国目前有多所大学开设此类课程。"
              },
              {
                "original": "Yet you’d be paying a lot of money for this.",
                "analysis": [
                  "Yet 表示转折，把前文课程的实用性与费用问题对照起来。",
                  "you’d 在此是 you would，构成假设性语气，提醒读者面对的潜在支出。",
                  "be paying 是进行体，突出持续承担费用的过程。",
                  "for this 中 this 指代前文所说的课程；短句将讨论焦点转向成本。"
                ],
                "translation": "不过，为此你要花上一大笔钱。"
              }
            ]
          },
          {
            "title": "Why fuel prices may go higher still",
            "source": "The Conversation",
            "published": "2026-09-28",
            "url": "https://theconversation.com/why-fuel-prices-may-go-higher-still-292853",
            "readingTime": "7 分钟",
            "topic": "经济 / 能源供应与生活成本",
            "summary": "文章从霍尔木兹海峡运输受阻引出油价上行风险，再追踪沙特替代输油管线受袭、俄罗斯柴油出口受限等供给冲击如何传导到运输、食品和家庭燃料成本。随后比较美国、亚洲和欧洲所受影响，并指出释放战略储备、替代线路等缓冲手段已被大量使用；中国库存及交通电动化曾压低需求，但需求回升可能增加压力。结尾强调冲突持续时政策缓冲空间有限，同时区分油价继续上涨与真正燃料短缺这两种风险。",
            "reason": [
              "主题：以能源供应冲击解释燃料和商品成本，适合经济、环境与国际关系交叉主题。",
              "结构：从运输瓶颈展开因果链，再比较区域影响、政策缓冲措施及中国因素，最后作风险展望。",
              "题型：适合考查因果推断、例证作用、段落主旨及作者对未来风险的审慎判断。",
              "词汇：可积累 constrain、ration、stockpile、electrification、blunt 等能源经济词汇。",
              "写作：可借鉴“供给冲击—成本传导—政策应对—不确定性”的分析框架。"
            ],
            "vocabulary": [
              {
                "word": "hover",
                "phonetic": "/ˈhɒvə/",
                "part": "v.",
                "translation": "徘徊；维持在某一水平附近"
              },
              {
                "word": "exhaust",
                "phonetic": "/ɪɡˈzɔːst/",
                "part": "v.",
                "translation": "耗尽；用尽"
              },
              {
                "word": "pipeline",
                "phonetic": "/ˈpaɪplaɪn/",
                "part": "n.",
                "translation": "输送管道；管线"
              },
              {
                "word": "constrained",
                "phonetic": "/kənˈstreɪnd/",
                "part": "adj.",
                "translation": "受限制的；紧张的"
              },
              {
                "word": "ration",
                "phonetic": "/ˈræʃn/",
                "part": "v.",
                "translation": "定量供应；配给"
              },
              {
                "word": "stockpile",
                "phonetic": "/ˈstɒkpaɪl/",
                "part": "n.",
                "translation": "储备；库存"
              },
              {
                "word": "electrification",
                "phonetic": "/ɪˌlektrɪfɪˈkeɪʃn/",
                "part": "n.",
                "translation": "电气化"
              },
              {
                "word": "blunt",
                "phonetic": "/blʌnt/",
                "part": "v.",
                "translation": "减轻；缓和"
              },
              {
                "word": "shortage",
                "phonetic": "/ˈʃɔːtɪdʒ/",
                "part": "n.",
                "translation": "短缺；不足"
              }
            ],
            "sentences": [
              {
                "original": "The international community has already taken most of the measures available to curb oil demand and boost its supply.",
                "analysis": [
                  "主干是 The international community has taken most of the measures，使用现在完成时总结已采取的行动。",
                  "available 是后置形容词，修饰 measures，表示可采取的措施。",
                  "to curb 与 boost 是并列不定式，分别说明措施针对需求和供给的目标。",
                  "需求端与供给端并列，概括前文政策工具的双向思路。"
                ],
                "translation": "国际社会已经采取了大多数可用措施来抑制石油需求并增加供应。"
              },
              {
                "original": "These shocks are even more acute outside the United States, which is the world’s largest energy producer.",
                "analysis": [
                  "主句主干为 These shocks are more acute，说明冲击程度更强。",
                  "even 修饰比较级 more acute，强调程度差异；outside the United States 表示地点范围。",
                  "which 引导非限制性定语从句，补充说明 the United States。",
                  "该句把前文讨论从美国扩展到其他地区，并用让步意味提醒读者全球影响不均。"
                ],
                "translation": "在美国以外，这些冲击更为严重；美国是世界上最大的能源生产国。"
              },
              {
                "original": "Those moves have reduced the scale of oil price increases, but they did not prevent them entirely.",
                "analysis": [
                  "but 连接两个独立分句，构成“有所缓解但未能阻止”的转折关系。",
                  "前半句使用现在完成时，概括措施至今产生的影响。",
                  "Those moves 指代前文释放战略储备等行动；them 指代 oil price increases。",
                  "entirely 限定 prevent，说明措施降低了涨幅，却没有彻底消除涨价。"
                ],
                "translation": "这些措施降低了油价上涨的幅度，但并未完全阻止涨价。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-09-28",
      "status": "ready",
      "ai": {
        "intro": "先核验 9 月 24—25 日的 GitHub 官方更新，再补充仍可用的免费 AI 资源；因 9 月 27—28 日不足 3 条可直接核验的新发布，按规则扩展到前 7 日，并保留来源实际发布日期。",
        "updates": [
          {
            "event": "GitHub Agentic Autofix 开始使用 Copilot Memory（2026-09-25）",
            "summary": "GitHub Changelog 说明，Agentic Autofix 现在会使用 Copilot Memory；它可把仓库中与安全开发模式有关的记忆提供给代码修复流程。官方同时将 Agentic Autofix 和 Copilot Memory 标为 public preview。",
            "howTo": "在支持的 GitHub 仓库中触发 Agentic Autofix，先在仓库中配置并检查 Copilot Memory 的内容，再审阅它提出的修复和测试；将自动生成的改动放入分支，运行测试后再提交。",
            "impact": "课程项目可让自动修复参考仓库约定和安全模式，减少重复说明；学生仍应检查记忆是否过时、修复是否引入回归，并把安全判断留给人工。",
            "free": "官方只说明两项能力处于 public preview；没有统一说明个人/学生计划、地区、账号资格或配额。",
            "category": "AI 编程 / 代码安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory"
            }
          },
          {
            "event": "GitHub 对高影响操作加入 proof of presence（2026-09-24）",
            "summary": "GitHub 为企业账户公开预览 proof of presence，在高影响操作发生时要求确认确有获授权的人正在操作；官方称这是企业版 sudo mode 的扩展，用于降低被盗会话 Cookie 或长期令牌带来的供应链风险。",
            "howTo": "若组织属于 GitHub Enterprise Cloud 的 managed-user enterprise，且使用 Microsoft Entra ID 作为 SAML 或 OIDC SSO IdP，由管理员按 Changelog 说明启用并测试高影响操作的现场确认；普通个人账号不能据此推断已获得该能力。",
            "impact": "做开源或课程仓库管理时，学生可把“身份在场”作为高风险发布、权限和设置操作的额外控制点，并在自动化脚本中避免绕过人工确认。",
            "free": "官方标为 public preview；范围仅为 github.com 和 GHEC-DR 上使用 Microsoft Entra ID SSO 的 managed-user enterprise，价格、个人/学生资格、地区和配额官方未说明。",
            "category": "AI 时代安全 / 身份验证",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-24",
              "url": "https://github.blog/changelog/2026-09-24-require-proof-of-presence-for-high-impact-actions"
            }
          },
          {
            "event": "GitHub Enterprise managed settings 增加产品内验证器（2026-09-25）",
            "summary": "GitHub Changelog 发布 Enterprise managed settings in-product validator，用于在产品内检查企业托管设置；它把设置校验直接放入管理流程，帮助管理员发现配置问题。",
            "howTo": "企业管理员打开 GitHub Enterprise 的 managed settings 页面，使用产品内 validator 检查当前配置；按页面提示修正问题，再让组织管理员复核设置和生效范围。",
            "impact": "学生参与学校或实验室 GitHub Enterprise 管理时，可把 validator 当作发布前配置检查，减少因策略遗漏导致的协作或权限问题；它不能替代对组织政策的人工审阅。",
            "free": "该 Changelog 没有说明价格、免费计划、地区、账号资格或使用配额；可用范围以企业账户当前页面为准。",
            "category": "AI 协作基础设施 / 企业管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude 免费计划的滚动五小时窗口",
            "summary": "Anthropic 定价页列出 Free 计划，面向日常问题；页面说明所有计划都有使用限制，免费额度按滚动的五小时 session window 重置。",
            "howTo": "打开 Claude 网页、桌面或移动端并注册/登录，先用短文本做摘要或改写；在 Settings > Usage 查看用量，达到限制后等待窗口重置。",
            "impact": "适合英文改写、概念解释和学习提纲；长文应拆分，关键事实回到原文核验。",
            "free": "官方确认 Free 计划和滚动五小时重置，但没有给出固定消息数；账号、地区和具体上限官方未说明。",
            "category": "长期免费网页访问 / AI 助手",
            "source": {
              "name": "Claude 官方定价",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Student 免费学生计划",
            "summary": "GitHub 计划说明列出 Copilot Student 为免费学生计划，权益包括 unlimited code completions、GitHub AI Credits，以及 auto model selection 下有限的 chat 和 agent 使用。",
            "howTo": "在 GitHub Education 完成学生身份验证并启用 Copilot Student，在 IDE 安装扩展；用补全处理样板代码，并在账户页面查看 chat/agent 使用情况。",
            "impact": "可用于课程编程、测试草稿和报错解释，降低练习门槛；提交前运行测试并人工审查生成代码。",
            "free": "官方标为免费并要求 verified student；补全 unlimited，chat/agent limited。统一 credits 数值、地区例外和验证材料要求官方未说明。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Gemini API 与 AI Studio 的 Free tier",
            "summary": "Google Gemini API 定价页把部分模型列为 Free tier，并将免费层与付费层分开；具体模型的限流与价格需按当前表格逐项查看。",
            "howTo": "登录 Google AI Studio，选择标有 Free tier 的模型，先做低频摘要或分类原型；上线前记录页面列出的 RPM、TPM、RPD 等限制并处理超限。",
            "impact": "学生可用较低门槛完成 API 原型，学习按 token 和请求速率估算成本，不把免费层当成无限吞吐。",
            "free": "官方确认存在 Free tier；模型清单、请求限制、账号资格、地区和重置周期按模型/项目决定，统一额度官方未说明。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter 环境",
            "summary": "Colab FAQ 将其定义为无需本地设置的托管 Jupyter Notebook 服务，并说明可免费使用包括 GPU 和 TPU 在内的计算资源；资源不保证，使用上限会波动。",
            "howTo": "打开 Colab，新建或导入 notebook，在运行时设置中按需尝试 GPU/TPU；把 notebook 保存到 Drive 或从 GitHub 加载，不要把密钥写入共享文件。",
            "impact": "适合数据清洗、课程实验和小型机器学习练习；应保存中间结果，并为资源回收或限流准备替代方案。",
            "free": "官方说明服务可免费使用且资源不保证；具体配额、可用地区、重置周期和 GPU/TPU 获得条件官方未说明。",
            "category": "长期免费开发环境 / 学习",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Qwen3-4B Apache-2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-4B 可下载权重，介绍 thinking/non-thinking 模式切换和多语言能力，并在许可部分标注 Apache-2.0。",
            "howTo": "打开 Qwen/Qwen3-4B 模型卡，按 Transformers 示例安装依赖并下载权重；先检查本机存储、内存和推理工具要求，再用非敏感文本测试。",
            "impact": "可用于本地多语言翻译、摘要和代码实验，帮助学生学习模型部署而不必先购买 API；运行成本取决于本地设备，输出仍需审查。",
            "free": "模型卡提供下载并标注 Apache-2.0；账号、地区、下载配额及运行硬件成本官方未统一说明。",
            "category": "开放模型权重 / Apache-2.0",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B"
            }
          },
          {
            "event": "GitHub Education 认证学生可使用 Student Developer Pack",
            "summary": "GitHub Education 的官方页面提供 Student Developer Pack 入口，面向经验证的学生，包含开发者工具和服务的学生权益；具体合作项目以页面当前列表为准。",
            "howTo": "打开 GitHub Education Student Developer Pack 页面，登录 GitHub，按页面流程提交学生身份验证；获批后逐项打开可用合作项目并阅读其独立条款。",
            "impact": "可为课程开发、部署和协作提供工具试用或学生权益，避免直接购买；学生应记录每项服务的到期、地区和数据处理条件。",
            "free": "官方页面以 verified student 为资格基础，但未对所有合作项目统一说明价格、地区、期限或额度；以每项合作方页面为准。",
            "category": "学生教育福利 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Protesters disperse after blocking controversial Orange Order parade",
            "source": "BBC",
            "published": "2026-09-27",
            "url": "https://www.bbc.co.uk/news/articles/c6qjkk55wd47o",
            "readingTime": "6 分钟",
            "topic": "社会 / 社区冲突与妥协",
            "summary": "文章报道北爱尔兰一场有争议的 Orange Order 游行被抗议者阻拦后，参与者最终散去；同时交代北爱尔兰事务大臣 Chris Bryant 从工党会议返回参与会谈，并敦促争议双方继续寻求妥协。报道以现场事件切入，再补充政治人物回应，呈现社区传统、公共秩序与谈判之间的张力，结论落在避免冲突升级的政治沟通。",
            "reason": [
              "主题涉及身份、传统、公共空间与妥协，适合社会议题阅读。",
              "结构为现场结果—政治回应—冲突背景，便于定位事实与观点。",
              "可训练区分报道事实和官员倡议，并判断作者如何用结果收束。",
              "controversial、dispute、compromise 等词适合公共事务语境。",
              "写作可借鉴先描述争议事件，再呈现相关方立场并提出缓和方向。"
            ],
            "vocabulary": [
              {
                "word": "controversial",
                "phonetic": "/ˌkɒn.trəˈvɜː.ʃəl/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "parade",
                "phonetic": "/pəˈreɪd/",
                "part": "n.",
                "translation": "游行"
              },
              {
                "word": "disperse",
                "phonetic": "/dɪˈspɜːs/",
                "part": "v.",
                "translation": "散去；驱散"
              },
              {
                "word": "protester",
                "phonetic": "/prəˈtes.tər/",
                "part": "n.",
                "translation": "抗议者"
              },
              {
                "word": "dispute",
                "phonetic": "/dɪˈspjuːt/",
                "part": "n.",
                "translation": "争议"
              },
              {
                "word": "compromise",
                "phonetic": "/ˈkɒm.prə.maɪz/",
                "part": "n.",
                "translation": "妥协"
              },
              {
                "word": "community",
                "phonetic": "/kəˈmjuː.nə.ti/",
                "part": "n.",
                "translation": "社区；群体"
              },
              {
                "word": "tension",
                "phonetic": "/ˈten.ʃən/",
                "part": "n.",
                "translation": "紧张关系"
              }
            ],
            "sentences": [
              {
                "original": "Protesters disperse after blocking controversial Orange Order parade.",
                "analysis": [
                  "主干是 Protesters disperse，主语和谓语清晰。",
                  "after 引导时间状语，说明散去发生在阻拦之后。",
                  "blocking 是动名词，controversial 修饰 parade。",
                  "标题用一般现在时概括已发生新闻，简洁突出结果。"
                ],
                "translation": "抗议者阻拦有争议的 Orange Order 游行后散去。"
              },
              {
                "original": "The dispute has caused tension in the community.",
                "analysis": [
                  "主干为 The dispute has caused tension。",
                  "现在完成时连接过去争议与当前影响。",
                  "in the community 是地点/范围状语。",
                  "cause + 名词可用于表达社会事件的结果。"
                ],
                "translation": "这场争议在社区中造成了紧张。"
              },
              {
                "original": "Both sides must double down on compromise.",
                "analysis": [
                  "主干是 Both sides must double down。",
                  "on compromise 补充行动方向。",
                  "must 表示政治倡议中的必要性。",
                  "double down on 可表达“进一步坚持或加大努力”，但语气较强。"
                ],
                "translation": "双方都必须进一步努力寻求妥协。"
              }
            ]
          },
          {
            "title": "Scientists discover two new species of sea spiders along Canadian coastline",
            "source": "NPR",
            "published": "2026-09-27",
            "url": "https://www.npr.org/2026/09/27/nx-s1-5982026/new-sea-spider-species",
            "readingTime": "5 分钟",
            "topic": "环境 / 生物多样性",
            "summary": "NPR 报道科学家在加拿大海岸线发现两种新的海蜘蛛，并提醒读者目前已确认的海蜘蛛种类超过 1,300 种。文章以新发现为入口，解释海蜘蛛并非真正的蜘蛛、研究者如何在沿海样本中识别物种，再把个案放回海洋生物多样性调查的更大背景。结尾强调仍有物种等待记录，说明分类研究对认识海洋生态的重要性。",
            "reason": [
              "主题是物种发现与海洋生物多样性，适合环境科学普及类文章。",
              "结构为发现—概念澄清—研究过程—更广泛意义。",
              "可训练主旨概括、数字细节定位和对类比说明的理解。",
              "species、coastline、identify 等词可迁移到环境报道。",
              "写作可借鉴从具体发现过渡到生态保护或科学认知意义。"
            ],
            "vocabulary": [
              {
                "word": "species",
                "phonetic": "/ˈspiː.ʃiːz/",
                "part": "n.",
                "translation": "物种"
              },
              {
                "word": "coastline",
                "phonetic": "/ˈkəʊst.laɪn/",
                "part": "n.",
                "translation": "海岸线"
              },
              {
                "word": "scientist",
                "phonetic": "/ˈsaɪən.tɪst/",
                "part": "n.",
                "translation": "科学家"
              },
              {
                "word": "identify",
                "phonetic": "/aɪˈden.tɪ.faɪ/",
                "part": "v.",
                "translation": "识别；确定"
              },
              {
                "word": "biodiversity",
                "phonetic": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
                "part": "n.",
                "translation": "生物多样性"
              },
              {
                "word": "specimen",
                "phonetic": "/ˈspes.ɪ.mən/",
                "part": "n.",
                "translation": "标本"
              },
              {
                "word": "marine",
                "phonetic": "/məˈriːn/",
                "part": "adj.",
                "translation": "海洋的"
              },
              {
                "word": "discovery",
                "phonetic": "/dɪˈskʌv.ər.i/",
                "part": "n.",
                "translation": "发现"
              }
            ],
            "sentences": [
              {
                "original": "Scientists discover two new species of sea spiders along the Canadian coastline.",
                "analysis": [
                  "主干是 Scientists discover two new species。",
                  "of sea spiders 说明 species 的类别。",
                  "along the Canadian coastline 是地点状语。",
                  "标题用一般现在时突出新闻事件和发现结果。"
                ],
                "translation": "科学家在加拿大海岸线沿岸发现了两种新的海蜘蛛。"
              },
              {
                "original": "So far, scientists have identified more than 1,300 species of sea spiders.",
                "analysis": [
                  "主干为 scientists have identified species。",
                  "So far 与现在完成时搭配，表示截至目前的累计结果。",
                  "more than 1,300 是数量限定。",
                  "of sea spiders 后置说明 species 的范围。"
                ],
                "translation": "截至目前，科学家已经确认了 1,300 多种海蜘蛛。"
              },
              {
                "original": "The discovery adds to what scientists know about life in the ocean.",
                "analysis": [
                  "主干是 The discovery adds to ...。",
                  "what 引导名词性从句作介词 to 的宾语。",
                  "about life in the ocean 说明知识的主题。",
                  "add to 可用于表达新证据对既有认知的补充。"
                ],
                "translation": "这一发现丰富了科学家对海洋生命的认识。"
              }
            ]
          },
          {
            "title": "Two giant pandas arrive in Atlanta from China after Xi-Trump summit",
            "source": "The Guardian",
            "published": "2026-09-27",
            "url": "https://www.theguardian.com/us-news/2026/sep/27/giant-pandas-atlanta-zoo-china-xi-trump-summit",
            "readingTime": "5 分钟",
            "topic": "文化 / 国际交流与动物保护",
            "summary": "文章报道两只大熊猫 Ping Ping 和 Fu Shuang 从中国抵达亚特兰大动物园，背景是中美政府之间的租借安排以及习近平与特朗普峰会后的外交氛围。报道先写熊猫抵达这一可见事件，再解释租借协议和动物园接待安排，最后把“熊猫外交”放在两国关系和公众文化交流中理解。文章的重点不是单纯的动物新闻，而是文化象征如何与国家间关系、保护合作和公共期待相连。",
            "reason": [
              "主题结合动物保护、文化交流与国际关系，适合跨学科阅读。",
              "结构为抵达消息—租借细节—外交背景—象征意义。",
              "可训练识别事实、背景和隐含意义之间的层次。",
              "loan deal、summit、diplomatic 等词适合国际新闻。",
              "写作可借鉴用具体公共事件引出更广泛的关系与合作讨论。"
            ],
            "vocabulary": [
              {
                "word": "giant panda",
                "phonetic": "/ˌdʒaɪ.ənt ˈpæn.də/",
                "part": "n.",
                "translation": "大熊猫"
              },
              {
                "word": "arrive",
                "phonetic": "/əˈraɪv/",
                "part": "v.",
                "translation": "抵达"
              },
              {
                "word": "summit",
                "phonetic": "/ˈsʌm.ɪt/",
                "part": "n.",
                "translation": "峰会"
              },
              {
                "word": "loan deal",
                "phonetic": "/ləʊn diːl/",
                "part": "n.",
                "translation": "租借协议"
              },
              {
                "word": "diplomatic",
                "phonetic": "/ˌdɪp.ləˈmæt.ɪk/",
                "part": "adj.",
                "translation": "外交的"
              },
              {
                "word": "symbol",
                "phonetic": "/ˈsɪm.bəl/",
                "part": "n.",
                "translation": "象征"
              },
              {
                "word": "conservation",
                "phonetic": "/ˌkɒn.səˈveɪ.ʃən/",
                "part": "n.",
                "translation": "保护；保育"
              },
              {
                "word": "relationship",
                "phonetic": "/rɪˈleɪ.ʃən.ʃɪp/",
                "part": "n.",
                "translation": "关系"
              }
            ],
            "sentences": [
              {
                "original": "Two giant pandas arrive in Atlanta from China after the Xi-Trump summit.",
                "analysis": [
                  "主干是 Two giant pandas arrive in Atlanta。",
                  "from China 说明来源，after ... summit 提供时间背景。",
                  "标题使用一般现在时压缩叙事。",
                  "after 短语把动物新闻与外交事件并置。"
                ],
                "translation": "习近平与特朗普峰会后，两只大熊猫从中国抵达亚特兰大。"
              },
              {
                "original": "The pandas are part of a loan deal between the Chinese and US governments.",
                "analysis": [
                  "主干是 The pandas are part of a loan deal。",
                  "between ... governments 限定协议双方。",
                  "are part of 表示个体属于更大的安排。",
                  "被动意义通过名词 loan deal 间接呈现，适合说明制度背景。"
                ],
                "translation": "这些熊猫是中美两国政府租借协议的一部分。"
              },
              {
                "original": "The animals have become a symbol of the relationship between the two countries.",
                "analysis": [
                  "主干是 The animals have become a symbol。",
                  "现在完成时表示象征意义逐渐形成并延续到现在。",
                  "of the relationship 说明 symbol 的内容。",
                  "between the two countries 限定关系的双方。"
                ],
                "translation": "这些动物已经成为两国关系的一种象征。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-09-27",
      "status": "ready",
      "ai": {
        "intro": "先核验 9 月 25—27 日的 GitHub、Anthropic 官方更新，再补充近 7 日 Google 功能；免费条件、资格和额度只按来源明确内容表述。",
        "updates": [
          {
            "event": "Anthropic 发布 2026 年 9 月威胁情报报告：Claude 被用于更自主的网络攻击",
            "summary": "Anthropic 报告称，其团队识别并中断了使用 Claude 的多起网络行动，参与者包括疑似国家支持团体、经济犯罪者和政治动机个人；案例覆盖 2025 年 12 月至 2026 年 8 月，报告特别强调 AI 已从问答助手走向编排侦察、利用和数据外泄流程。",
            "howTo": "阅读报告的 Trends 和案例部分，给课程项目建立‘侦察—工具开发—利用—数据处理’风险清单；在自己的实验中只使用授权目标，记录人工审批点，并把 API 密钥和个人数据隔离。",
            "impact": "学生做安全、软件工程或 AI 治理课题时，可用报告区分‘模型能力提升’与‘攻击者实际行为’，并据此设计人工复核、最小权限和日志留存，而不是把聊天机器人风险理解成单一漏洞。",
            "free": "报告网页可直接阅读；它没有说明 Claude 相关产品的免费计划、账号资格、地区范围或配额。",
            "category": "AI 安全 / 威胁情报",
            "source": {
              "name": "Anthropic Threat Intelligence Report",
              "published": "2026-09（具体日期官方未说明）",
              "url": "https://www.anthropic.com/threat-intelligence-report-september-2026"
            }
          },
          {
            "event": "GitHub Copilot 在 Slack 和 Microsoft Teams 中获得更多会话上下文（2026-09-25）",
            "summary": "GitHub 公告称，Slack 中的文件、附件和消息链接，及 Teams 中的行内图片、转发消息和频道/线程历史，都可作为 Copilot 上下文；它还会检查相似 issue、链接新工作项并保留原讨论链接。",
            "howTo": "组织管理员先启用 cloud agent 政策；安装或升级 Slack/Teams 的 GitHub 应用，连接 GitHub 账号，在对话中提及 @GitHub。Teams 还要启用 cloud sandboxes；Slack 可为下一条消息切换模型。",
            "impact": "小组课程项目可从已有讨论和附件直接生成可追踪任务，减少复制上下文；创建 issue 前仍要核对仓库、权限、任务描述和重复项。",
            "free": "官方标为 public preview，仅面向 GitHub Copilot Business 和 Enterprise 组织；用量计入现有 Copilot entitlement，可由 cloud agent budget 管理，个人/学生计划、地区和统一配额官方未说明，且部分能力逐步推出。",
            "category": "AI 协作 / 编程代理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams"
            }
          },
          {
            "event": "Google Gemini 开始接入 Airtable、Linear、Adobe 等第三方应用（2026-09-23）",
            "summary": "Google 公告称 Gemini 开始逐步推出新的连接应用，覆盖生产力工具 Airtable、Linear、monday.com 等，创意工具 Adobe、Picsart、Squarespace、Webflow，以及 Peloton、SeatGeek 等生活服务。",
            "howTo": "在 Gemini Settings 连接所需应用，按提示授权；也可以在聊天中用 @ 提及应用或直接提出任务。只授权必要应用，并在写入项目、数据库或设计资产后回到原应用核对结果。",
            "impact": "学生可在一个对话中整理项目数据库、生成网站或设计素材草案，减少来回切换；涉及共享工作区时，应先检查连接应用能读取和修改哪些内容。",
            "free": "公告只说明从 2026-09-23 起开始 rollout，没有统一说明免费/付费计划、账号资格、地区开放时间或使用配额；实际可用应用以 Gemini 设置为准。",
            "category": "AI 助手 / 应用连接",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
            }
          },
          {
            "event": "Google Vids 的 Gemini Omni 1.1 增加延长场景、精确时长和 1080p（2026-09-23）",
            "summary": "Google 介绍 Omni 1.1 的三项视频控制：延长场景时保持视觉上下文、灯光和角色一致，指定生成片段的精确时长，以及生成全新 1080p 场景或放大已有 AI 片段；每个生成片段含不可见 SynthID 水印。",
            "howTo": "登录 Google Vids，在项目中用 Omni 1.1 生成片段；根据旁白设置精确时长，必要时延长场景或生成/放大到 1080p，导出前检查镜头连续性并保留 AI 标识。",
            "impact": "课程展示、研究汇报和社团宣传可以先用脚本生成短片，再按旁白节奏调整镜头；学生应核查画面中的事实、人物和版权素材，不能把连贯画面当成事实证明。",
            "free": "Google 说任何 Google 或 Google Workspace 账号都可免费开始使用；个人账号的更多访问量和 Workspace 的扩展生成池属于各自计划，具体免费配额和地区范围官方未说明。",
            "category": "AI 视频 / 创作",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude 免费版可用于日常问题（滚动五小时窗口）",
            "summary": "Anthropic 定价页列出 Free 计划，定位为日常问题；所有计划都有使用限制，免费额度按滚动的五小时 session window 重置，实际可用量还取决于对话长度、模型和功能。",
            "howTo": "在 Claude 网页、桌面或移动端注册/登录，先用短问题、摘要或英文改写测试；在 Settings > Usage 查看当前用量，达到限制后等待窗口重置。",
            "impact": "适合做英文段落改写、概念解释和学习提纲，但应把关键事实回溯到原始资料，并为长文拆分任务以便控制上下文。",
            "free": "官方明确 Free 覆盖日常问题，并说明限制按滚动五小时窗口重置；没有给出固定消息数，账号、地区和具体上限官方未说明。",
            "category": "长期免费网页访问 / AI 助手",
            "source": {
              "name": "Claude 官方定价",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Student 免费学生计划",
            "summary": "GitHub 计划页列出 Copilot Student 为免费学生计划；官方同时说明学生权益包含 unlimited code completions、GitHub AI Credits，以及 auto model selection 下有限的 chat 和 agent 使用。",
            "howTo": "在 GitHub Education 完成学生身份验证并启用 Copilot Student，在 IDE 安装 Copilot 扩展；用补全处理样板代码，用有限 chat/agent 做解释和测试草稿，并检查账户显示的额度。",
            "impact": "可降低课程编程和调试的工具门槛，适合学习代码结构、补写测试和理解报错；提交前必须运行测试并人工审查生成代码。",
            "free": "官方标为免费并要求 verified student；补全 unlimited，chat/agent limited。统一 credits 数值、地区例外和验证材料要求官方计划页未说明。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Qwen3-4B Apache-2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-4B 的可下载权重，介绍其支持 thinking/non-thinking 模式切换、100 多种语言与方言，并在许可部分标注 Apache-2.0。",
            "howTo": "打开 Qwen/Qwen3-4B 模型卡，按其 Transformers 示例安装依赖并下载权重；先检查本机内存、存储和推理工具要求，再用非敏感文本测试。",
            "impact": "可用于本地多语言翻译、摘要和代码实验，帮助学生学习模型部署而不必先购买 API；运行成本取决于本地设备，输出仍需审查。",
            "free": "模型卡提供下载并标注 Apache-2.0；账号、地区、下载配额及运行硬件成本官方未统一说明。",
            "category": "开放模型权重 / Apache-2.0",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B"
            }
          },
          {
            "event": "Google Gemini API 与 AI Studio 的 Free tier",
            "summary": "Google Gemini API 官方定价页列出部分模型的 Free tier，并将免费层与付费层分开说明；不同模型的输入/输出价格和限流表格需在当前页面逐项查看。",
            "howTo": "登录 Google AI Studio，选择定价页标有 Free tier 的模型，先做低频摘要或分类原型；上线前记录 RPM、TPM、RPD 等页面列出的限制并处理超限情况。",
            "impact": "学生可用较低门槛完成课程 API 原型和小规模实验，同时学习按 token 与请求速率估算成本，不把免费层误当作无限吞吐。",
            "free": "官方确认存在 Free tier，但免费层的模型清单、请求限流、账号资格、地区和重置周期按模型/项目页面决定，统一额度官方未说明。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter 环境",
            "summary": "Colab 官方 FAQ 将其定义为无需本地设置的托管 Jupyter Notebook 服务，并说明可免费使用包括 GPU 和 TPU 在内的计算资源；资源不保证且使用上限会波动。",
            "howTo": "打开 Colab，新建或导入 notebook，运行课程 Python；需要时在运行时设置中尝试 GPU/TPU，把 notebook 保存到 Drive 或从 GitHub 加载，勿把密钥写入共享文件。",
            "impact": "适合数据清洗、课程实验和小型机器学习练习，减少环境配置；任务应保存中间结果并预留资源被回收或限流的方案。",
            "free": "官方确认免费并提醒资源不保证、使用上限会波动；GPU/TPU 时长、账号资格和地区例外官方未说明。",
            "category": "长期免费云环境 / 学习",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          }
        ]
      },
      "english": {
        "intro": "选取 9 月 26 日可直接阅读的 BBC 与 The Guardian 文章，避开历史 issue 的 URL 和标题；覆盖住房政策与急救技术，按考研英语二方向精读。",
        "articles": [
          {
            "title": "Burnham announces scheme to help first-time buyers on to housing ladder",
            "source": "BBC",
            "published": "2026-09-26",
            "url": "https://www.bbc.co.uk/news/articles/cv8e33gdw17no",
            "readingTime": "6 分钟",
            "topic": "经济 / 住房政策",
            "summary": "报道介绍英国首相 Andy Burnham 提出的 Your First Home 计划：英格兰首次购房者可用 2.5% 首付，政府以新建住房价值 20% 的贷款帮助购房，并设置初始免息期。文章先说明计划针对缺少家庭资助的年轻人，再交代资金可能来自现有预算重排、开发商承担运营成本以及更多细节预计在下月预算中公布。随后报道保守党对增加债务、推高房价的批评，并把方案与 2013 年 Help to Buy 及其评估联系起来；结尾指出年龄限制和房价上限尚未确认，呈现住房可负担性与政策副作用之间的权衡。",
            "reason": [
              "住房可负担性、代际支持与政府干预是经济和社会政策类常见考点。",
              "文章按政策宣布—具体机制—资金安排—反方质疑—历史比较—未决限制展开，信息层次适合画结构图。",
              "阅读题可考计划资格、贷款机制、反对者担忧以及作者为何回顾 Help to Buy。",
              "property ladder、equity loan、reprioritising、affordability 等词可迁移到住房和公共政策写作。",
              "写作可借鉴先给政策数字，再同时呈现预期收益、财政安排和潜在副作用。"
            ],
            "vocabulary": [
              {
                "word": "first-time buyer",
                "phonetic": "/ˌfɜːst taɪm ˈbaɪə/",
                "part": "n.",
                "translation": "首次购房者"
              },
              {
                "word": "property ladder",
                "phonetic": "/ˈprɒpəti ˌlædə/",
                "part": "n.",
                "translation": "住房阶梯；逐步置业"
              },
              {
                "word": "deposit",
                "phonetic": "/dɪˈpɒzɪt/",
                "part": "n.",
                "translation": "首付；定金"
              },
              {
                "word": "equity loan",
                "phonetic": "/ˈekwəti ləʊn/",
                "part": "n.",
                "translation": "房屋净值贷款"
              },
              {
                "word": "interest-free",
                "phonetic": "/ˌɪntrəst ˈfriː/",
                "part": "adj.",
                "translation": "免息的"
              },
              {
                "word": "reprioritise",
                "phonetic": "/ˌriːpraɪˈɒrətaɪz/",
                "part": "v.",
                "translation": "重新确定优先顺序"
              },
              {
                "word": "developer",
                "phonetic": "/dɪˈveləpə/",
                "part": "n.",
                "translation": "房地产开发商"
              },
              {
                "word": "affordability",
                "phonetic": "/əˌfɔːdəˈbɪləti/",
                "part": "n.",
                "translation": "可负担性"
              },
              {
                "word": "iteration",
                "phonetic": "/ˌɪtəˈreɪʃən/",
                "part": "n.",
                "translation": "一轮；版本"
              },
              {
                "word": "regional-level",
                "phonetic": "/ˈriːdʒənəl ˌlevəl/",
                "part": "adj.",
                "translation": "地区层面的"
              }
            ],
            "sentences": [
              {
                "original": "The \"Your First Home\" scheme would be open to first-time buyers in England with a deposit of 2.5%.",
                "analysis": [
                  "主干是 The scheme would be open to buyers，would 表示拟议政策而非已实施事实。",
                  "with a deposit of 2.5% 是介词短语，补充申请条件。",
                  "first-time buyers in England 是 open to 的对象并包含地点限定。",
                  "百分比数字直接呈现政策门槛，是细节题的定位信息。",
                  "would be open to 可用于说明计划面向哪些人群。"
                ],
                "translation": "‘Your First Home’计划将面向在英格兰购房且首付为 2.5% 的首次购房者。"
              },
              {
                "original": "There would be an initial interest-free period for the equity loan, with more details expected in next month's Budget.",
                "analysis": [
                  "主干是 There would be a period，there be 结构引出政策安排。",
                  "interest-free 修饰 period，说明贷款初期的利息条件。",
                  "for the equity loan 说明该免息期对应的对象。",
                  "with more details expected 是 with 复合结构，补充信息公布时间。",
                  "expected in next month's Budget 把当前未决信息与未来预算关联。"
                ],
                "translation": "该股权贷款将有一段初始免息期，更多细节预计在下月预算中公布。"
              },
              {
                "original": "The policy is similar to initiatives from previous governments, including the coalition's Help To Buy scheme, introduced in 2013 by then-Chancellor George Osborne.",
                "analysis": [
                  "主干是 The policy is similar to initiatives，系表结构进行政策比较。",
                  "including 引出 previous governments 的具体例子。",
                  "introduced in 2013 是过去分词短语，后置修饰 Help To Buy scheme。",
                  "by then-Chancellor George Osborne 标出政策推出者。",
                  "用比较和历史例证评价新政策，是背景段常见写法。"
                ],
                "translation": "这项政策类似于历届政府的举措，包括时任财政大臣乔治·奥斯本于 2013 年推出的 Help To Buy 计划。"
              }
            ]
          },
          {
            "title": "Drones could speed up getting defibrillators to people having cardiac arrests, study suggests",
            "source": "The Guardian",
            "published": "2026-09-26",
            "url": "https://www.theguardian.com/society/2026/sep/26/drones-could-speed-up-getting-defibrillators-to-people-having-cardiac-arrests-study-suggests",
            "readingTime": "8 分钟",
            "topic": "健康 / 科技应用",
            "summary": "文章报道一项尚未同行评审、将在欧洲急诊医学大会展示的研究，探讨无人机能否更快把自动体外除颤器送到院外心脏骤停现场。研究团队分析了 2011—2024 年大巴黎地区 28,349 起病例和 1,893 个 AED 的位置，发现只有 30% 病例位于最近固定 AED 的 500 米网络距离内。模型显示，部署 100 个无人机基地并增加 26 个固定 AED，可覆盖超过 97% 的病例；200 个基地和 4 个额外 AED 则可覆盖超过 99%。文章随后解释现有地面取用的时间限制、无人机由调度员和受训飞手监督的实际流程，并提醒成本、封闭场所和模型未涉及真实部署等限制。",
            "reason": [
              "急救可及性与无人机应用连接健康、公共服务和技术治理多个考点。",
              "文章以问题和数据开篇，随后比较固定 AED 与无人机模型，最后补充现实部署和成本限制。",
              "阅读题可考研究样本、百分比对照、模型结论以及为何不能把模拟结果视为现实效果。",
              "defibrillator、accessibility、resuscitate、deployment 等词适合科技健康类说明文。",
              "写作可借鉴用数据说明公共服务缺口，再提出技术方案并主动交代证据边界。"
            ],
            "vocabulary": [
              {
                "word": "defibrillator",
                "phonetic": "/dɪˈfɪbrɪleɪtə/",
                "part": "n.",
                "translation": "除颤器"
              },
              {
                "word": "cardiac arrest",
                "phonetic": "/ˈkɑːdiæk əˌrest/",
                "part": "n.",
                "translation": "心脏骤停"
              },
              {
                "word": "resuscitate",
                "phonetic": "/rɪˈsʌsɪteɪt/",
                "part": "v.",
                "translation": "使复苏；抢救"
              },
              {
                "word": "accessibility",
                "phonetic": "/əkˌsesəˈbɪləti/",
                "part": "n.",
                "translation": "可获得性；可及性"
              },
              {
                "word": "coverage",
                "phonetic": "/ˈkʌvərɪdʒ/",
                "part": "n.",
                "translation": "覆盖范围"
              },
              {
                "word": "fixed",
                "phonetic": "/fɪkst/",
                "part": "adj.",
                "translation": "固定的"
              },
              {
                "word": "retrieve",
                "phonetic": "/rɪˈtriːv/",
                "part": "v.",
                "translation": "取回；调取"
              },
              {
                "word": "deployment",
                "phonetic": "/dɪˈplɔɪmənt/",
                "part": "n.",
                "translation": "部署；应用"
              },
              {
                "word": "dispatch",
                "phonetic": "/dɪˈspætʃ/",
                "part": "v./n.",
                "translation": "调度；派遣"
              },
              {
                "word": "feasible",
                "phonetic": "/ˈfiːzəbəl/",
                "part": "adj.",
                "translation": "可行的"
              }
            ],
            "sentences": [
              {
                "original": "Drones could help cut the time it takes to get a defibrillator to people experiencing cardiac arrests.",
                "analysis": [
                  "主干是 Drones could help cut the time，could 表示研究设想的可能性。",
                  "it takes to get... 是 time 的定语从句，说明所需时间具体用于什么。",
                  "to get a defibrillator... 是 cut 的补足结构，说明被缩短的过程。",
                  "experiencing cardiac arrests 是现在分词短语，修饰 people。",
                  "help cut the time it takes to... 可用于表达技术改善服务效率。"
                ],
                "translation": "研究人员认为，无人机可能帮助缩短把除颤器送到心脏骤停患者身边所需的时间。"
              },
              {
                "original": "The researchers found accessibility of the 1,893 AEDs varied considerably across the area.",
                "analysis": [
                  "主干是 The researchers found...，that 被省略的宾语从句作 found 的内容。",
                  "accessibility of the AEDs 是从句主语，of 短语说明可及性针对什么。",
                  "varied considerably 是谓语，副词加强差异程度。",
                  "across the area 是地点范围状语，限制比较范围。",
                  "find + 宾语从句适合报告研究发现，避免把结论写成无来源断言。"
                ],
                "translation": "研究人员发现，这 1,893 个自动体外除颤器的可及性在该地区差异很大。"
              },
              {
                "original": "The team's models were based on drones being housed at sites ranging from current AED locations to fire stations and mobile intensive care units.",
                "analysis": [
                  "主干是 The team's models were based on...，被动结构突出模型依据。",
                  "drones being housed 是动名词复合结构，作介词 on 的宾语。",
                  "ranging from... to... 修饰 sites，列出基地位置范围。",
                  "current AED locations、fire stations 和 mobile intensive care units 构成并列例证。",
                  "be based on + 动名词复合结构可用于谨慎说明研究模型的假设。"
                ],
                "translation": "该团队的模型建立在这样的设定上：无人机部署在从现有 AED 地点到消防站和移动重症监护单元等地点。"
              }
            ]
          }
        ]
      }
    },
{
      "date": "2026-09-26",
      "status": "ready",
      "ai": {
        "intro": "先核验 9 月 25 日 GitHub Copilot 官方更新，再扩展至近 7 日，补充 Google 于 9 月 23 日发布的 Gemini、Vids 与 Flow 功能；免费资源均按官方页面复核。",
        "updates": [
          {
            "event": "GitHub Copilot 在 Slack 和 Microsoft Teams 中增强对话上下文（2026-09-25）",
            "summary": "GitHub 扩展了 Copilot 在协作工具中可使用的上下文：Slack 支持文件、附件和消息链接；Teams 支持行内图片、转发消息、频道和线程历史。它还会检查相似 issue，并把新建的 GitHub 工作项链接回原讨论。",
            "howTo": "在 Slack 或 Teams 中先确认组织管理员已启用 Copilot cloud agent（Teams 还需启用 cloud sandboxes），安装或升级 GitHub 应用并关联 GitHub 账号，再在讨论中提及 @GitHub；在 Slack 可为后续消息切换模型。",
            "impact": "小组项目讨论可以把附件、图片和已有线程作为背景，直接整理成可追踪的 GitHub issue，减少复制上下文和重复建单；创建前仍应核对任务描述和关联仓库。",
            "free": "官方说明该功能为 public preview，仅向 GitHub Copilot Business 和 Enterprise 组织开放，使用量计入现有 Copilot entitlement，可由 cloud agent budget 管理；部分能力逐步推出。个人/学生计划、具体配额和地区范围官方未说明。",
            "category": "AI 协作 / 编程代理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams"
            }
          },
          {
            "event": "Google Vids 开放 Gemini Omni 视频生成功能并新增精细控制（2026-09-23）",
            "summary": "Google 在 Vids 中推出 Omni 1.1，可延长场景并保持画面元素连贯、指定生成片段时长、生成 1080p 视频或放大已有 AI 片段；生成片段带有 SynthID 水印。",
            "howTo": "用 Google 或 Google Workspace 账号登录 Google Vids，在项目中选择 Omni 1.1 生成视频片段；按旁白节奏设置片段时长，必要时延长场景或将片段升至 1080p，再导出用于演示或社团活动。",
            "impact": "学生可把课程展示、研究汇报或校园活动脚本制作成带连贯镜头的短片，并按旁白调整长度；提交前应检查生成画面与事实是否一致，并保留其 AI 生成标识。",
            "free": "Google 官方称任何 Google 或 Google Workspace 账号均可免费开始使用；个人账号可通过 Google AI 计划获得更多生成权限，Workspace Business/Enterprise 有扩展生成池。具体免费配额及地区适用范围官方未说明。",
            "category": "AI 视频 / 免费创作",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "Gemini 开始接入更多第三方 Connected Apps（2026-09-23）",
            "summary": "Gemini 开始逐步接入 Airtable、Linear、monday.com、Adobe、Picsart、Squarespace、Webflow、Peloton 等新应用，覆盖项目管理、创意制作和生活规划等场景。",
            "howTo": "打开 Gemini 设置连接所需应用，按页面提示完成授权；也可在 Gemini 对话中用 @ 提及已连接的应用，或直接提出任务。只授权完成任务必需的应用，并检查生成或修改的内容。",
            "impact": "学生可在同一对话中整理项目数据库、规划分工，或把设计需求交给已连接的创意工具，减少在多个标签页间搬运信息；涉及账号资料或共享文件时应先核实授权范围。",
            "free": "官方公告称功能从 2026-09-23 起逐步推出，但未说明免费/付费计划资格、各地区开放时间或使用配额；具体可用应用以 Gemini 设置中的实际列表为准。",
            "category": "AI 助手 / 应用连接",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
            }
          },
          {
            "event": "Google Flow 发布六款可用自然语言搭建工作流的新工具（2026-09-23）",
            "summary": "Google 在 Flow 中发布六款新工具，面向电影制作、建筑、声音设计和数字内容等创作流程；公告介绍，用户可通过描述需求来构建自定义工作流。",
            "howTo": "打开 Google Flow，描述希望重复完成的创作步骤并按界面提示搭建工作流，再用自己的素材试跑并检查输出；适合先从课程短片、声音或视觉素材整理等小任务开始。",
            "impact": "学生可将重复的素材整理和创意制作步骤转成可复用工作流，用于课程视频或展示原型；不同项目的输入和输出应逐项核查，不要默认自动生成内容准确。",
            "free": "官方公告确认六款工具已发布到 Flow，但未说明免费计划、账号资格、地区范围或生成额度；是否可用以 Flow 当前产品界面为准。",
            "category": "AI 创作 / 工作流",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/six-new-tools-built-by-creatives/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Vids 免费生成 Omni 1.1 视频片段",
            "summary": "Google 官方公告称，Google 或 Google Workspace 账号均可免费开始在 Vids 中使用 Omni 1.1 生成视频；较多 AI 视频生成权限需查看 Google AI 计划或 Workspace 扩展生成池。",
            "howTo": "登录 Google Vids，创建视频项目并使用 Omni 1.1 生成片段；可设置片段长度、生成或放大至 1080p，并在导出前检查内容及 SynthID 标记。",
            "impact": "适合制作课程展示、研究汇报和活动宣传的短片，免去先购买视频软件或订阅的门槛。",
            "free": "官方明确称可免费开始使用，账号需为 Google 或 Google Workspace；更多生成权限属于付费计划或 Workspace 扩展池。具体免费配额和地区范围官方未说明。",
            "category": "长期免费创作 / AI 视频",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "GitHub Copilot Student 免费学生计划",
            "summary": "GitHub 官方列出免费的 Copilot Student 计划，面向通过验证的学生；计划含不限量代码补全、GitHub AI Credits 额度，以及有限的聊天和 agent 使用。",
            "howTo": "先在 GitHub Education 验证学生身份，再启用 Copilot Student；在 IDE 中安装 GitHub Copilot 扩展，使用代码补全或自动模型选择下的聊天/agent 功能。",
            "impact": "可用于课程编程、理解报错、补写测试和探索代码库；提交作业前应运行测试并检查生成代码，避免未经核实地采纳输出。",
            "free": "官方标示 Copilot Student 免费，要求学生身份通过验证；代码补全不限量，AI Credits 数量及聊天/agent 使用量有限，但具体额度、地区和验证资格细则以账户提示为准，官方计划页未列出统一数值。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Qwen3-4B Apache-2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-4B 权重，并标注 Apache-2.0 许可证；模型卡说明支持 100 多种语言与方言，可用 Transformers 等工具加载。",
            "howTo": "从 Qwen 官方 Hugging Face 页面下载模型文件，按模型卡安装 Transformers 并运行示例；也可使用模型卡列出的本地推理工具。先核对本机硬件和依赖是否满足模型卡要求。",
            "impact": "适合在课程项目中测试本地文本生成、多语言翻译或代码辅助，也便于学习模型部署流程；本地运行仍需自行管理算力、存储和输出审查。",
            "free": "模型卡标注 Apache-2.0 并提供可下载权重；账号、地区、下载配额及具体硬件要求官方未在该卡中统一说明，运行成本取决于本地设备或所选服务。",
            "category": "开放模型权重 / Apache-2.0",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B"
            }
          },
          {
            "event": "Microsoft Copilot 免费网页与移动端入口",
            "summary": "Microsoft 官方 Copilot 应用提供免费使用入口，可用于日常提问、研究整理和基础创作；具体功能以登录后的当前页面为准。",
            "howTo": "打开 Copilot 网页或官方移动应用，按提示登录并提交问题；用于论文或课程任务时，要求它列出可核验来源，再回到原始来源检查关键事实。",
            "impact": "可作为不需要先订阅的通用问答和头脑风暴工具，辅助解释概念、整理提纲或润色英文草稿；重要结论仍需核对原始资料。",
            "free": "官方网页提供免费入口；具体消息数、生成次数、账号资格、地区范围及付费升级限制官方未统一说明，以当前应用提示为准。",
            "category": "长期免费网页访问",
            "source": {
              "name": "Microsoft Copilot 官方应用页",
              "published": "官方未说明",
              "url": "https://copilot.microsoft.com/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Why making Americans bet with cash could protect people from gambling problems",
            "source": "The Conversation",
            "published": "2026-09-24",
            "url": "https://theconversation.com/why-making-americans-bet-with-cash-could-protect-people-from-gambling-problems-290131",
            "readingTime": "8 分钟",
            "topic": "经济 / 社会政策",
            "summary": "作者以美国体育投注和预测市场的扩张为背景，提出数字化下注过于便捷，会让人更容易反复下注，并从成瘾、内幕交易和大额下注者影响市场三个角度说明风险。文章先讨论线上市场的监管边界，再以现金下注为核心提出政策建议：要求下注者先取得纸币并亲自到场，以增加操作摩擦、提高大额交易可见度，并为本人及周围人留出思考和提醒的时间。作者也讨论该政策对线下商户的可能影响，最后承认现金要求不能解决所有问题，转而提出现金预存账户等折中设计。",
            "reason": [
              "对应经济与公共政策主题，可用于讨论数字服务便利性与消费者保护之间的取舍。",
              "文章采用“趋势背景—三类风险—政策方案—承认局限并补充折中”的论证结构，适合练习段落功能与论证推进。",
              "阅读题可考查作者态度、现金方案的作用机制，以及作者为何承认方案无法消除全部风险。",
              "frictionless、pivotal、bypass 等词汇有助于理解关于技术便利、监管和社会成本的评论文。",
              "写作可借鉴先提出问题、解释机制、再承认政策边界并提出改良方案的展开方式。"
            ],
            "vocabulary": [
              {
                "word": "widespread",
                "phonetic": "/ˈwaɪd.spred/",
                "part": "adj.",
                "translation": "广泛的；普遍的"
              },
              {
                "word": "embezzled",
                "phonetic": "/ɪmˈbez.əld/",
                "part": "v.",
                "translation": "挪用；侵吞"
              },
              {
                "word": "pivotal",
                "phonetic": "/ˈpɪv.ə.təl/",
                "part": "adj.",
                "translation": "关键的；起决定作用的"
              },
              {
                "word": "bypassing",
                "phonetic": "/ˌbaɪˈpɑː.sɪŋ/",
                "part": "v.",
                "translation": "绕过；规避"
              },
              {
                "word": "addictive",
                "phonetic": "/əˈdɪk.tɪv/",
                "part": "adj.",
                "translation": "使人上瘾的"
              },
              {
                "word": "anonymous",
                "phonetic": "/əˈnɒn.ɪ.məs/",
                "part": "adj.",
                "translation": "匿名的"
              },
              {
                "word": "frictionless",
                "phonetic": "/ˈfrɪk.ʃən.ləs/",
                "part": "adj.",
                "translation": "无阻碍的；操作顺畅的"
              },
              {
                "word": "wager",
                "phonetic": "/ˈweɪ.dʒər/",
                "part": "n.",
                "translation": "赌注；下注"
              },
              {
                "word": "squander",
                "phonetic": "/ˈskwɒn.dər/",
                "part": "v.",
                "translation": "挥霍；浪费"
              },
              {
                "word": "pre-funding",
                "phonetic": "/ˌpriːˈfʌn.dɪŋ/",
                "part": "n.",
                "translation": "预先注资；预存资金"
              }
            ],
            "sentences": [
              {
                "original": "Regrettably, but not unexpectedly, the widespread ability to gamble is also causing major scandals.",
                "analysis": [
                  "主干是 the ability ... is causing scandals；主语中心词为 ability，谓语为 is causing。",
                  "to gamble 作 ability 的补足成分，说明这种能力具体指什么。",
                  "widespread 修饰 ability；major 修饰 scandals。",
                  "句首 Regrettably 表示遗憾，but not unexpectedly 补充“并不意外”，形成让步式评价。",
                  "可借鉴“评价副词 + but + 对照判断”的句首结构来表达复杂态度。"
                ],
                "translation": "令人遗憾但并不意外的是，广泛的赌博机会也正在引发重大丑闻。"
              },
              {
                "original": "When actions are frictionless, people do them more often.",
                "analysis": [
                  "主句主干为 people do them more often，them 指前文所说的 actions。",
                  "When 引导时间/条件状语从句，说明行为发生的环境特征。",
                  "frictionless 作表语，概括操作过程缺少阻碍这一特点。",
                  "从句给出条件，主句说明频率变化，构成清晰的机制解释。",
                  "When ..., ... 是说明习惯、环境与行为结果关系的常用表达。"
                ],
                "translation": "当行为变得毫无阻碍时，人们就会更频繁地去做。"
              },
              {
                "original": "Do I think that using cash would solve all gambling problems? Absolutely not.",
                "analysis": [
                  "前半句是一般疑问句，主干为 Do I think ...?，that 从句作 think 的宾语。",
                  "using cash 是 that 从句的主语，would solve 是谓语。",
                  "all 修饰 gambling problems，突出“解决所有问题”的强命题。",
                  "后面的 Absolutely not 是省略式回答，直接否定过度推论。",
                  "先提出反问再立即限定结论，体现作者承认政策局限的论证策略。"
                ],
                "translation": "我认为使用现金能解决所有赌博问题吗？绝对不能。"
              }
            ]
          },
          {
            "title": "Students strike across Germany in protest against military service",
            "source": "BBC",
            "published": "2026-09-25",
            "url": "https://www.bbc.co.uk/news/articles/cxnvlnve52qdo",
            "readingTime": "5 分钟",
            "topic": "社会 / 青年与公共政策",
            "summary": "报道从德国学生抗议可能恢复义务兵役的示威切入，交代新法目前以志愿服役为目标，但在安全形势恶化或志愿者不足时，议会仍可能考虑强制服役。文章说明所有 18 岁青年收到意愿问卷、男性须接受体检的制度，并引述学生对相关安排的反对以及国防部对体检义务适用范围的解释。结尾回顾德国冷战后缩减军队、2011 年结束义务兵役的背景，并列出政府扩充现役和预备役力量的目标，呈现青年选择、法定义务与国防需求之间的张力。",
            "reason": [
              "主题连接青年参与、个人选择与国家安全政策，适合社会议题类阅读。",
              "文章按抗议导入、制度说明、相关方回应、历史背景和兵力目标展开，时间线与因果线索并行。",
              "可训练细节定位、人物观点辨析，以及对“志愿制与强制服役”对照关系的推断。",
              "compulsory、questionnaire、obligation、reservist 等词汇常见于制度与公共事务报道。",
              "写作可借鉴先说明政策变化，再呈现支持或反对理由并补充历史背景的结构。"
            ],
            "vocabulary": [
              {
                "word": "strike",
                "phonetic": "/straɪk/",
                "part": "n.",
                "translation": "罢课；罢工"
              },
              {
                "word": "protest",
                "phonetic": "/ˈprəʊ.test/",
                "part": "v.",
                "translation": "抗议"
              },
              {
                "word": "reintroduction",
                "phonetic": "/ˌriː.ɪn.trəˈdʌk.ʃən/",
                "part": "n.",
                "translation": "重新引入；恢复"
              },
              {
                "word": "compulsory",
                "phonetic": "/kəmˈpʌl.sər.i/",
                "part": "adj.",
                "translation": "强制的；义务的"
              },
              {
                "word": "voluntary",
                "phonetic": "/ˈvɒl.ən.tər.i/",
                "part": "adj.",
                "translation": "自愿的"
              },
              {
                "word": "questionnaire",
                "phonetic": "/ˌkwes.tʃəˈneər/",
                "part": "n.",
                "translation": "问卷"
              },
              {
                "word": "obligation",
                "phonetic": "/ˌɒb.lɪˈɡeɪ.ʃən/",
                "part": "n.",
                "translation": "义务；责任"
              },
              {
                "word": "recruit",
                "phonetic": "/rɪˈkruːt/",
                "part": "v.",
                "translation": "招募"
              },
              {
                "word": "reservist",
                "phonetic": "/rɪˈzɜː.vɪst/",
                "part": "n.",
                "translation": "预备役军人"
              },
              {
                "word": "armed forces",
                "phonetic": "/ˌɑːmd ˈfɔː.sɪz/",
                "part": "n.",
                "translation": "武装部队"
              }
            ],
            "sentences": [
              {
                "original": "School strikes are taking place across Germany to protest against the possible reintroduction of compulsory military service.",
                "analysis": [
                  "主干为 School strikes are taking place；主语是 School strikes，谓语是现在进行时。",
                  "to protest against ... 是目的状语，说明罢课的原因。",
                  "possible 修饰 reintroduction；compulsory military service 是 protest against 的宾语。",
                  "句子先交代事件，再用不定式补充目的，信息层次清楚。",
                  "to protest against + 名词可用于概括群体行动的诉求。"
                ],
                "translation": "德国各地正在发生学生罢课，以抗议可能恢复义务兵役。"
              },
              {
                "original": "A new law introducing voluntary military service came into force in January, with the aim of recruiting volunteers to increase the number of soldiers.",
                "analysis": [
                  "主干为 A new law came into force；谓语短语 came into force 表示法律生效。",
                  "introducing voluntary military service 是现在分词短语，后置修饰 law。",
                  "with the aim of 引出目的，recruiting 是介词 of 的动名词宾语。",
                  "to increase the number of soldiers 继续说明招募志愿者的目标。",
                  "句子用“法律生效—实施方式—最终目标”逐层补充政策信息。"
                ],
                "translation": "一项引入志愿兵役的新法律于 1 月生效，旨在招募志愿者以增加士兵人数。"
              },
              {
                "original": "The questionnaire is mandatory for men and voluntary for women.",
                "analysis": [
                  "主干由主语 The questionnaire、系动词 is 和两个并列表语构成。",
                  "mandatory for men 与 voluntary for women 通过 and 并列。",
                  "两个形容词形成强制与自愿的对照，分别限定适用对象。",
                  "句子省去重复的系动词，表达简洁，适合政策说明。",
                  "A is mandatory for X and voluntary for Y 可用于清晰比较规则差异。"
                ],
                "translation": "男性必须填写这份问卷，女性则自愿填写。"
              }
            ]
          }
        ]
      }
    }
  ]
};
