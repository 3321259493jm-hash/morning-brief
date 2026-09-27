window.BRIEFING_DATA = {
  "updatedAt": "2026-09-27T09:27:32+08:00",
  "issues": [
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
    },
    {
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
              {
                "word": "tumour",
                "phonetic": "/ˈtjuːmər/",
                "part": "n.",
                "translation": "肿瘤"
              },
              {
                "word": "genomic",
                "phonetic": "/dʒɪˈnɒmɪk/",
                "part": "adj.",
                "translation": "基因组的"
              },
              {
                "word": "diagnosis",
                "phonetic": "/ˌdaɪəɡˈnəʊsɪs/",
                "part": "n.",
                "translation": "诊断"
              },
              {
                "word": "radiotherapy",
                "phonetic": "/ˌreɪdiəʊˈθerəpi/",
                "part": "n.",
                "translation": "放射治疗"
              },
              {
                "word": "chemotherapy",
                "phonetic": "/ˌkiːməʊˈθerəpi/",
                "part": "n.",
                "translation": "化学治疗"
              },
              {
                "word": "aggressive",
                "phonetic": "/əˈɡresɪv/",
                "part": "adj.",
                "translation": "侵袭性的； aggressive 的"
              },
              {
                "word": "molecular",
                "phonetic": "/məˈlekjʊlə/",
                "part": "adj.",
                "translation": "分子的"
              },
              {
                "word": "uncertainty",
                "phonetic": "/ʌnˈsɜːtnti/",
                "part": "n.",
                "translation": "不确定性"
              },
              {
                "word": "surgeon",
                "phonetic": "/ˈsɜːdʒən/",
                "part": "n.",
                "translation": "外科医生"
              },
              {
                "word": "genetic",
                "phonetic": "/dʒəˈnetɪk/",
                "part": "adj.",
                "translation": "遗传的"
              }
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
              {
                "word": "cooperation",
                "phonetic": "/kəʊˌɒpəˈreɪʃən/",
                "part": "n.",
                "translation": "合作"
              },
              {
                "word": "collision course",
                "phonetic": "/kəˈlɪʒən kɔːs/",
                "part": "n.",
                "translation": "冲突路线；碰撞轨道"
              },
              {
                "word": "mutual trust",
                "phonetic": "/ˈmjuːtʃuəl trʌst/",
                "part": "n.",
                "translation": "相互信任"
              },
              {
                "word": "crisis communication",
                "phonetic": "/ˈkraɪsɪs kəˌmjuːnɪˈkeɪʃən/",
                "part": "n.",
                "translation": "危机沟通"
              },
              {
                "word": "dominance",
                "phonetic": "/ˈdɒmɪnəns/",
                "part": "n.",
                "translation": "主导地位"
              },
              {
                "word": "emerging power",
                "phonetic": "/ɪˈmɜːdʒɪŋ ˈpaʊə/",
                "part": "n.",
                "translation": "新兴大国"
              },
              {
                "word": "tariffs",
                "phonetic": "/ˈtærɪfs/",
                "part": "n.",
                "translation": "关税"
              },
              {
                "word": "trade deficit",
                "phonetic": "/treɪd ˈdefɪsɪt/",
                "part": "n.",
                "translation": "贸易逆差"
              },
              {
                "word": "strategic stability",
                "phonetic": "/strəˈtiːdʒɪk stəˈbɪləti/",
                "part": "n.",
                "translation": "战略稳定"
              },
              {
                "word": "scepticism",
                "phonetic": "/ˈskeptɪsɪzəm/",
                "part": "n.",
                "translation": "怀疑主义；怀疑态度"
              }
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
    },
    {
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
              {
                "word": "affordability",
                "phonetic": "/əˌfɔːdəˈbɪləti/",
                "part": "n.",
                "translation": "可负担性"
              },
              {
                "word": "defaulting",
                "phonetic": "/dɪˈfɔːltɪŋ/",
                "part": "n.",
                "translation": "拖欠；违约"
              },
              {
                "word": "housing cost-burden",
                "phonetic": "/ˈhaʊzɪŋ kɒst ˈbɜːdən/",
                "part": "n.",
                "translation": "住房成本负担"
              },
              {
                "word": "eviction",
                "phonetic": "/ɪˈvɪkʃən/",
                "part": "n.",
                "translation": "驱逐；赶出住房"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbəl/",
                "part": "adj.",
                "translation": "脆弱的；易受伤的"
              },
              {
                "word": "outsize share",
                "phonetic": "/aʊtˈsaɪz ʃeə/",
                "part": "n.",
                "translation": "过大份额"
              },
              {
                "word": "essential",
                "phonetic": "/ɪˈsenʃəl/",
                "part": "adj.",
                "translation": "必要的；基本的"
              },
              {
                "word": "basic needs",
                "phonetic": "/ˈbeɪsɪk niːdz/",
                "part": "n.",
                "translation": "基本需求"
              },
              {
                "word": "homelessness",
                "phonetic": "/ˈhəʊmləsnəs/",
                "part": "n.",
                "translation": "无家可归"
              },
              {
                "word": "inflow",
                "phonetic": "/ˈɪnfləʊ/",
                "part": "n.",
                "translation": "流入；涌入"
              }
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
              {
                "word": "press pass",
                "phonetic": "/pres pæs/",
                "part": "n.",
                "translation": "记者证；新闻通行证"
              },
              {
                "word": "due process",
                "phonetic": "/djuː ˈprəʊses/",
                "part": "n.",
                "translation": "正当程序"
              },
              {
                "word": "retaliation",
                "phonetic": "/rɪˌtælɪˈeɪʃən/",
                "part": "n.",
                "translation": "报复； retaliation"
              },
              {
                "word": "viewpoint discrimination",
                "phonetic": "/ˈvjuːpɔɪnt dɪˌskrɪmɪˈneɪʃən/",
                "part": "n.",
                "translation": "观点歧视"
              },
              {
                "word": "irreparable harm",
                "phonetic": "/ɪˈrepərəbəl hɑːm/",
                "part": "n.",
                "translation": "无法挽回的损害"
              },
              {
                "word": "constitutional",
                "phonetic": "/ˌkɒnstɪˈtjuːʃənəl/",
                "part": "adj.",
                "translation": "宪法的"
              },
              {
                "word": "public interest",
                "phonetic": "/ˈpʌblɪk ˈɪntrəst/",
                "part": "n.",
                "translation": "公共利益"
              },
              {
                "word": "access",
                "phonetic": "/ˈækses/",
                "part": "n.",
                "translation": "进入权；使用权"
              },
              {
                "word": "legal filing",
                "phonetic": "/ˈliːɡəl ˈfaɪlɪŋ/",
                "part": "n.",
                "translation": "法律文件；诉讼材料"
              },
              {
                "word": "national security",
                "phonetic": "/ˈnæʃənəl sɪˈkjʊərəti/",
                "part": "n.",
                "translation": "国家安全"
              }
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
              {
                "word": "eviction",
                "phonetic": "/ɪˈvɪkʃən/",
                "part": "n.",
                "translation": "驱逐；搬离"
              },
              {
                "word": "tenant",
                "phonetic": "/ˈtenənt/",
                "part": "n.",
                "translation": "租户"
              },
              {
                "word": "rent cap",
                "phonetic": "/rent kæp/",
                "part": "n.",
                "translation": "租金上限"
              },
              {
                "word": "investment firm",
                "phonetic": "/ɪnˈvestmənt fɜːm/",
                "part": "n.",
                "translation": "投资公司"
              },
              {
                "word": "pension",
                "phonetic": "/ˈpenʃən/",
                "part": "n.",
                "translation": "养老金"
              },
              {
                "word": "housing crisis",
                "phonetic": "/ˈhaʊzɪŋ ˈkraɪsɪs/",
                "part": "n.",
                "translation": "住房危机"
              },
              {
                "word": "supporter",
                "phonetic": "/səˈpɔːtə/",
                "part": "n.",
                "translation": "支持者"
              },
              {
                "word": "activist",
                "phonetic": "/ˈæktɪvɪst/",
                "part": "n.",
                "translation": "活动人士"
              },
              {
                "word": "legal glitch",
                "phonetic": "/ˈliːɡəl ɡlɪtʃ/",
                "part": "n.",
                "translation": "法律漏洞"
              },
              {
                "word": "campaign",
                "phonetic": "/kæmˈpeɪn/",
                "part": "n.",
                "translation": "运动；抗议活动"
              }
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
    },
    {
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
              {
                "word": "tuition",
                "phonetic": "/tjuːˈɪʃən/",
                "part": "n.",
                "translation": "学费"
              },
              {
                "word": "debt",
                "phonetic": "/det/",
                "part": "n.",
                "translation": "债务"
              },
              {
                "word": "entry-level",
                "phonetic": "/ˈɛntriː ˈlevəl/",
                "part": "adj.",
                "translation": "入门级的"
              },
              {
                "word": "earning capacity",
                "phonetic": "/ˈɜːnɪŋ kəˈpæsəti/",
                "part": "n.",
                "translation": "挣钱能力"
              },
              {
                "word": "offset",
                "phonetic": "/ˈɒfset/",
                "part": "v.",
                "translation": "抵消；补偿"
              },
              {
                "word": "plummet",
                "phonetic": "/ˈplʌmɪt/",
                "part": "v.",
                "translation": "骤降；暴跌"
              },
              {
                "word": "repayment",
                "phonetic": "/rɪˈpeɪmənt/",
                "part": "n.",
                "translation": "还款"
              },
              {
                "word": "incoherent",
                "phonetic": "/ˌɪnkəʊˈhɪərənt/",
                "part": "adj.",
                "translation": "不连贯的；混乱的"
              },
              {
                "word": "remiss",
                "phonetic": "/rɪˈmɪs/",
                "part": "adj.",
                "translation": "失职的；疏忽的"
              },
              {
                "word": "headway",
                "phonetic": "/ˈhedweɪ/",
                "part": "n.",
                "translation": "进展；进步"
              }
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
              {
                "word": "housing allowance",
                "phonetic": "/ˈhaʊzɪŋ əˈlaʊəns/",
                "part": "n.",
                "translation": "住房补贴"
              },
              {
                "word": "rent gap",
                "phonetic": "/rent ɡæp/",
                "part": "n.",
                "translation": "租金差额"
              },
              {
                "word": "food bank",
                "phonetic": "/fuːd bæŋk/",
                "part": "n.",
                "translation": "食物银行"
              },
              {
                "word": "improvise",
                "phonetic": "/ˈɪmprəvaɪz/",
                "part": "v.",
                "translation": "临时应付；凑合"
              },
              {
                "word": "juggle",
                "phonetic": "/ˈdʒʌɡəl/",
                "part": "v.",
                "translation": "勉强应付；腾挪"
              },
              {
                "word": "housing benefit",
                "phonetic": "/ˈhaʊzɪŋ ˈbenɪfɪt/",
                "part": "n.",
                "translation": "住房福利"
              },
              {
                "word": "local authority",
                "phonetic": "/ˈləʊkəl ɔːˈθɒrəti/",
                "part": "n.",
                "translation": "地方政府机构"
              },
              {
                "word": "budget",
                "phonetic": "/ˈbʌdʒɪt/",
                "part": "n.",
                "translation": "预算"
              },
              {
                "word": "mental health",
                "phonetic": "/ˈmentəl helθ/",
                "part": "n.",
                "translation": "心理健康"
              },
              {
                "word": "cost of living",
                "phonetic": "/kɒst əv ˈlɪvɪŋ/",
                "part": "n.",
                "translation": "生活成本"
              }
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
              {
                "word": "data center",
                "phonetic": "/ˈdeɪtə ˈsentə/",
                "part": "n.",
                "translation": "数据中心"
              },
              {
                "word": "housing market",
                "phonetic": "/ˈhaʊzɪŋ ˈmɑːkɪt/",
                "part": "n.",
                "translation": "房地产市场"
              },
              {
                "word": "footprint",
                "phonetic": "/ˈfʊtprɪnt/",
                "part": "n.",
                "translation": "占地面积；足迹"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəstrʌktʃə/",
                "part": "n.",
                "translation": "基础设施"
              },
              {
                "word": "energy supply",
                "phonetic": "/ˈɛnədʒi səˈplaɪ/",
                "part": "n.",
                "translation": "能源供应"
              },
              {
                "word": "commission",
                "phonetic": "/kəˈmɪʃən/",
                "part": "v.",
                "translation": "委托；安排"
              },
              {
                "word": "real estate",
                "phonetic": "/ˌrɪəl ɪˈsteɪt/",
                "part": "n.",
                "translation": "房地产"
              },
              {
                "word": "location",
                "phonetic": "/ləʊˈkeɪʃən/",
                "part": "n.",
                "translation": "位置；地理位置"
              },
              {
                "word": "demographic",
                "phonetic": "/ˌdeməˈɡræfɪk/",
                "part": "adj.",
                "translation": "人口统计的"
              },
              {
                "word": "varying",
                "phonetic": "/ˈveəriɪŋ/",
                "part": "adj.",
                "translation": "不同的；多变的"
              }
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
    },
    {
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
              {
                "word": "distress",
                "phonetic": "/dɪˈstres/",
                "part": "n.",
                "translation": "痛苦；困扰"
              },
              {
                "word": "loneliness",
                "phonetic": "/ˈləʊnlinəs/",
                "part": "n.",
                "translation": "孤独感"
              },
              {
                "word": "waiting list",
                "phonetic": "/ˈweɪtɪŋ lɪst/",
                "part": "n.",
                "translation": "等待名单"
              },
              {
                "word": "belonging",
                "phonetic": "/bɪˈlɒŋɪŋ/",
                "part": "n.",
                "translation": "归属感"
              },
              {
                "word": "anxiety",
                "phonetic": "/æŋˈzaɪəti/",
                "part": "n.",
                "translation": "焦虑"
              },
              {
                "word": "depressed",
                "phonetic": "/dɪˈprest/",
                "part": "adj.",
                "translation": "沮丧的"
              },
              {
                "word": "social media",
                "phonetic": "/ˈsəʊʃəl ˈmiːdiə/",
                "part": "n.",
                "translation": "社交媒体"
              },
              {
                "word": "support",
                "phonetic": "/səˈpɔːt/",
                "part": "n.",
                "translation": "支持"
              },
              {
                "word": "participate",
                "phonetic": "/pɑːˈtɪsɪpeɪt/",
                "part": "v.",
                "translation": "参与"
              },
              {
                "word": "resilience",
                "phonetic": "/rɪˈzɪliəns/",
                "part": "n.",
                "translation": "韧性；复原力"
              }
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
              {
                "word": "sensor",
                "phonetic": "/ˈsensə/",
                "part": "n.",
                "translation": "传感器"
              },
              {
                "word": "monitor",
                "phonetic": "/ˈmɒnɪtə/",
                "part": "v.",
                "translation": "监测；监控"
              },
              {
                "word": "routine",
                "phonetic": "/ruːˈtiːn/",
                "part": "n.",
                "translation": "日常安排；常规"
              },
              {
                "word": "independence",
                "phonetic": "/ˌɪndɪˈpendəns/",
                "part": "n.",
                "translation": "独立性"
              },
              {
                "word": "frailty",
                "phonetic": "/ˈfreɪlti/",
                "part": "n.",
                "translation": "脆弱；虚弱"
              },
              {
                "word": "disturbance",
                "phonetic": "/dɪˈstɜːbəns/",
                "part": "n.",
                "translation": "干扰；失调"
              },
              {
                "word": "gait",
                "phonetic": "/ɡeɪt/",
                "part": "n.",
                "translation": "步态"
              },
              {
                "word": "infection",
                "phonetic": "/ɪnˈfekʃən/",
                "part": "n.",
                "translation": "感染"
              },
              {
                "word": "clinical",
                "phonetic": "/ˈklɪnɪkəl/",
                "part": "adj.",
                "translation": "临床的"
              },
              {
                "word": "care needs",
                "phonetic": "/keə niːdz/",
                "part": "n.",
                "translation": "护理需求"
              }
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
              {
                "word": "airspace",
                "phonetic": "/ˈeəspeɪs/",
                "part": "n.",
                "translation": "空域"
              },
              {
                "word": "controller",
                "phonetic": "/kənˈtrəʊlə/",
                "part": "n.",
                "translation": "管制员"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəstrʌktʃə/",
                "part": "n.",
                "translation": "基础设施"
              },
              {
                "word": "congestion",
                "phonetic": "/kənˈdʒestʃən/",
                "part": "n.",
                "translation": "拥堵"
              },
              {
                "word": "outage",
                "phonetic": "/ˈaʊtɪdʒ/",
                "part": "n.",
                "translation": "中断；故障"
              },
              {
                "word": "optimize",
                "phonetic": "/ˈɒptɪmaɪz/",
                "part": "v.",
                "translation": "优化"
              },
              {
                "word": "staffing",
                "phonetic": "/ˈstæfɪŋ/",
                "part": "n.",
                "translation": "人员配置；人手"
              },
              {
                "word": "delays",
                "phonetic": "/dɪˈleɪz/",
                "part": "n.",
                "translation": "延误"
              },
              {
                "word": "efficiency",
                "phonetic": "/ɪˈfɪʃənsi/",
                "part": "n.",
                "translation": "效率"
              },
              {
                "word": "safety",
                "phonetic": "/ˈseɪfti/",
                "part": "n.",
                "translation": "安全"
              }
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
    },
    {
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
              {
                "word": "credential",
                "phonetic": "/krɪˈdenʃəl/",
                "part": "n.",
                "translation": "凭据；证书"
              },
              {
                "word": "unauthorised",
                "phonetic": "/ʌnˈɔːθəraɪzd/",
                "part": "adj.",
                "translation": "未经授权的"
              },
              {
                "word": "access control",
                "phonetic": "/ˈækses kənˈtrəʊl/",
                "part": "n.",
                "translation": "访问控制"
              },
              {
                "word": "probe",
                "phonetic": "/prəʊb/",
                "part": "n./v.",
                "translation": "探测；试探"
              },
              {
                "word": "vulnerability",
                "phonetic": "/ˌvʌlnərəˈbɪləti/",
                "part": "n.",
                "translation": "漏洞；脆弱性"
              },
              {
                "word": "safeguard",
                "phonetic": "/ˈseɪfɡɑːd/",
                "part": "n./v.",
                "translation": "保护措施；保障"
              },
              {
                "word": "security test",
                "phonetic": "/sɪˈkjʊərəti test/",
                "part": "n.",
                "translation": "安全测试"
              },
              {
                "word": "prompt injection",
                "phonetic": "/prɒmpt ɪnˈdʒekʃən/",
                "part": "n.",
                "translation": "提示词注入"
              },
              {
                "word": "restrict",
                "phonetic": "/rɪˈstrɪkt/",
                "part": "v.",
                "translation": "限制；约束"
              }
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
              {
                "word": "regulation",
                "phonetic": "/ˌreɡjʊˈleɪʃən/",
                "part": "n.",
                "translation": "监管；规则"
              },
              {
                "word": "whisperer",
                "phonetic": "/ˈwɪspərə/",
                "part": "n.",
                "translation": "顾问；密谈者"
              },
              {
                "word": "innovation",
                "phonetic": "/ˌɪnəˈveɪʃən/",
                "part": "n.",
                "translation": "创新"
              },
              {
                "word": "frontier",
                "phonetic": "/ˈfrʌntɪə/",
                "part": "adj./n.",
                "translation": "前沿的；前沿"
              },
              {
                "word": "agenda",
                "phonetic": "/əˈdʒendə/",
                "part": "n.",
                "translation": "议程；计划"
              },
              {
                "word": "policy",
                "phonetic": "/ˈpɒləsi/",
                "part": "n.",
                "translation": "政策"
              },
              {
                "word": "ideology",
                "phonetic": "/ˌaɪdiˈɒlədʒi/",
                "part": "n.",
                "translation": "意识形态"
              },
              {
                "word": "align",
                "phonetic": "/əˈlaɪn/",
                "part": "v.",
                "translation": "使一致；对齐"
              },
              {
                "word": "out of step",
                "phonetic": "/aʊt əv step/",
                "part": "phr.",
                "translation": "不合拍；脱节"
              }
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
              {
                "word": "astronomical",
                "phonetic": "/ˌæstrəˈnɒmɪkəl/",
                "part": "adj.",
                "translation": "天文数字般的；极高的"
              },
              {
                "word": "childcare",
                "phonetic": "/ˈtʃaɪldkeə/",
                "part": "n.",
                "translation": "托儿保育"
              },
              {
                "word": "grandparent",
                "phonetic": "/ˈɡrændˌpeərənt/",
                "part": "n.",
                "translation": "祖父母"
              },
              {
                "word": "affordability",
                "phonetic": "/əˌfɔːdəˈbɪləti/",
                "part": "n.",
                "translation": "负担能力；可负担性"
              },
              {
                "word": "strain",
                "phonetic": "/streɪn/",
                "part": "n./v.",
                "translation": "压力；扭伤"
              },
              {
                "word": "household",
                "phonetic": "/ˈhaʊshəʊld/",
                "part": "n.",
                "translation": "家庭；住户"
              },
              {
                "word": "backdrop",
                "phonetic": "/ˈbækdrɒp/",
                "part": "n.",
                "translation": "背景；底景"
              },
              {
                "word": "caregiver",
                "phonetic": "/ˈkeəɡɪvə/",
                "part": "n.",
                "translation": "照护者"
              },
              {
                "word": "familial",
                "phonetic": "/fəˈmɪliəl/",
                "part": "adj.",
                "translation": "家庭的；家族的"
              }
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
    }
  ]
};
