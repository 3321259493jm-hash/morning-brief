window.BRIEFING_DATA = {
  "updatedAt": "2026-10-14T09:50:47+08:00",
  "issues": [
    {
      "date": "2026-10-14",
      "status": "ready",
      "ai": {
        "intro": "10月13日至14日核实到3项官方产品变化；以下均保留来源实际发布日期。免费资源重新核查了免费层、模型许可和来源数量，并注明官方未列明的地区或配额。",
        "updates": [
          {
            "event": "Google 发布 Gemini 4 Argon，面向开发者与消费者开放（2026-10-13）",
            "summary": "Google 发布 Gemini 4 Argon，定位于需要多步推理的复杂任务，并称其可处理编码、科学及文档理解工作。模型通过 Gemini API 和 Google AI Studio 面向开发者开放；Gemini API 提供 100 万 token 的统一输入输出上限。",
            "howTo": "开发者可打开 Google AI Studio，在付费 API 层选择 Gemini 4 Argon 并按官方文档配置调用；个人用户可在 Gemini 应用或 Search AI Mode 中使用，但须符合对应订阅资格。",
            "impact": "研究生可用它整理长篇论文资料、分析多份课程文档或辅助调试多步骤代码任务；提交论文或运行代码前，仍需核对引文、数据与生成结果。",
            "free": "API 为付费调用：官方公告列出至 2026-11-30 的介绍价为每百万输入 token 2 美元、每百万输出 token 10 美元，缓存输入 token 减价 95%；之后为每百万输入 4 美元、输出 20 美元。面向个人 Gemini 应用的 Argon 要求 Google AI Pro 或 Ultra 订阅。API 全球推出；额外免费额度、账号资格和应用地区开放情况官方未说明。",
            "category": "AI 模型 / 多步推理与学习研究",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-13",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
            }
          },
          {
            "event": "Gemini 4 Argon 成为 GitHub Copilot 一般可用模型（2026-10-13）",
            "summary": "GitHub 将 Gemini 4 Argon 加入 Copilot 模型选择器，适用于复杂编码、代理式工作流和推理任务；模型会检查结果并测试边缘情形。GitHub 表示该模型按供应商标价计费，且正在逐步推出。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI、Copilot coding agent、Copilot app、JetBrains IDE、Xcode 或 Eclipse 中打开 Copilot 模型选择器并选择 Gemini 4 Argon；若未出现，稍后再检查。Business 和 Enterprise 管理员可在 Copilot 设置中管理模型策略。",
            "impact": "可用于拆解课程项目、排查复杂报错或让编程代理检查边界条件；学生应先确认所用 Copilot 计划和计费方式，再将其用于高频任务。",
            "free": "仅 Copilot Pro+、Max、Business 和 Enterprise 用户可用；按供应商标价使用量计费。逐步推出，是否已开放取决于 rollout；免费计划、单独配额和适用地区官方未说明。",
            "category": "AI 编程工具 / Copilot 模型",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-13",
              "url": "https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot"
            }
          },
          {
            "event": "Gemini 应用加入 Argon、任务模式和 macOS 代理式编程界面（2026-10-13）",
            "summary": "Google 将 Gemini 4 Argon 带入 Gemini 应用，并在 macOS 应用中加入 Google Antigravity 的代理式编程界面。用户还可从主聊天窗口切换到 Tasks，让 Gemini 跨 Google 应用和已连接服务执行任务；Google 称可连接 40 多款应用。",
            "howTo": "符合订阅条件的用户打开 Gemini 应用，在模型选择处使用 Argon；要启动任务，从主聊天窗口切换到 Tasks 并描述要完成的工作。macOS 用户可在 Gemini 应用内切换到 Antigravity 编程界面。",
            "impact": "学生可用任务模式整理跨应用资料、草拟活动安排，或在 macOS 上尝试代理式编程；对外发送邮件、修改资料或提交代码前应检查代理所做的操作。",
            "free": "Argon 与 Tasks 面向 Google AI Pro 和 Ultra 订阅用户；公告未说明免费开放、使用配额、适用地区或逐步推出的完整节奏。连接服务还需相应应用账号及权限。",
            "category": "AI 助手 / 任务自动化与编程",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-13",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free：可免费使用的日常问答与写作助手",
            "summary": "Anthropic 的 Claude 定价页列出 Free 计划，适用于日常提问；网页、桌面端、移动端及 Claude Code 的活动共用使用额度。额度按滚动五小时窗口重置，实际可用量会随对话长度、模型和功能变化。",
            "howTo": "前往 Claude 官网注册或登录免费账号，在网页、桌面或移动应用中输入问题；可用于概括课堂材料、列出论文提纲或解释英语段落，并在设置的 Usage 页面查看当前用量。",
            "impact": "适合日常复习、概念解释和初稿构思；把输出当作学习辅助，核查事实和引用，不要把敏感个人资料输入聊天。",
            "free": "官方提供 Free 计划，无固定消息次数；额度在滚动五小时窗口重置，并可能另有周/月或功能限制。地区、账号资格和确切用量官方未说明。",
            "category": "长期免费 / 问答与写作",
            "source": {
              "name": "Claude Pricing",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "SmolLM3-3B：Apache-2.0 许可的可下载小型开放模型",
            "summary": "Hugging Face 官方模型卡提供 SmolLM3-3B 权重、Transformers 使用示例并标注 Apache-2.0 许可。模型有 30 亿参数，支持双模式推理，模型卡说明其训练上下文为 64k token，并可通过 YaRN 扩展。",
            "howTo": "打开 Hugging Face 官方模型卡下载权重，安装 Transformers 后按卡片中的 AutoTokenizer 和 AutoModelForCausalLM 示例加载；运行前检查设备内存、显存和依赖版本。",
            "impact": "适合在课程实验中测试本地推理、提示词或开源模型；本地运行可避免把输入发往托管服务，但仍需评估硬件能力并验证模型输出。",
            "free": "权重可公开下载，模型卡标注 Apache-2.0；自行部署无需支付模型调用费，但需自备硬件和计算资源。托管推理价格、账号、地区及配额官方未说明。",
            "category": "开放模型 / 本地部署实验",
            "source": {
              "name": "Hugging Face 官方模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/HuggingFaceTB/SmolLM3-3B"
            }
          },
          {
            "event": "Gemini Notebook：免费用户每个笔记本最多添加 50 个来源",
            "summary": "Google 帮助中心说明，Gemini Notebook 的 Free 用户每个笔记本可添加最多 50 个来源，包括文档、PDF、网页和公开视频链接；每个来源最多 50 万词或 200MB，可据所选来源进行问答和摘要。",
            "howTo": "登录 Gemini Notebook，新建笔记本并点 Add sources，加入课程讲义、论文或网页；在聊天中针对所选来源提问，或让它生成摘要，再回到原文核对结论。",
            "impact": "可把分散的阅读材料集中成复习资料，并围绕指定来源查找论据；对手机端功能限制和上传材料的版权要求需特别留意。",
            "free": "官方列明 Free 用户每个笔记本最多 50 个来源；单个来源最多 50 万词或 200MB。需登录 Google 账号；地区适用范围官方未说明，帮助页提示移动应用部分功能可能受限。",
            "category": "长期免费 / 论文阅读与资料整理",
            "source": {
              "name": "Google Gemini Notebook Help",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16215270?hl=en"
            }
          },
          {
            "event": "Gemini Apps 无付费 AI 计划也可使用部分功能",
            "summary": "Google 帮助中心列出没有 Google AI 计划的 Gemini Apps 用户，并说明可用量采用计算资源限额；限额会受提示复杂度、模型、功能和对话长度影响，不等于固定消息数。",
            "howTo": "用个人 Google 账号打开 Gemini Apps，先尝试基础聊天或学习问答；查看官方限额说明，遇到功能暂不可用时等待限额刷新，或改用可用的基础功能。",
            "impact": "适合临时解释概念、头脑风暴或整理短材料，不必先购买订阅；高强度学习任务应准备其他工具，因为免费访问可能受繁忙时段容量影响。",
            "free": "无 Google AI 计划的用户可使用部分功能；限额按计算资源计，通常每 5 小时刷新并受周限额影响，官方没有给出固定消息数。页面针对个人 Google 账号；地区和具体账号资格官方未说明，繁忙时部分高计算功能可能不可用。",
            "category": "长期免费 / 学习问答",
            "source": {
              "name": "Google Gemini Apps Help",
              "published": "官方未说明",
              "url": "https://support.google.com/gemini/answer/16275805?hl=en"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "This economist believes the system is broken. Maybe she has a point",
            "source": "The Conversation",
            "published": "2026-10-12",
            "url": "https://theconversation.com/this-economist-believes-the-system-is-broken-maybe-she-has-a-point-292129",
            "readingTime": "约 7 分钟（估算）",
            "topic": "经济与社会 / 公共利益、市场治理与政府角色",
            "summary": "The Conversation 评述经济学家 Mariana Mazzucato 的新书，先概括她的主张：政府不应只在市场失灵后补救，而应与企业合作，主动塑造市场服务公共利益。文章回顾其对“公共部门承担风险、私人部门取得收益”的批评，并介绍税收、政府持股和以明确使命组织公私合作等政策选项。随后以伦敦 Camden 的社区财富基金、合作社和水资源治理为例，展示这些理念如何延伸到地方就业、不平等和跨国环境问题。作者也指出，Mazzucato 擅长批判现状，却较少说明如何实现可行转型；文末把她的思路与福祉衡量联系起来，并提醒全球合作正面临政治阻力。",
            "reason": [
              "市场与政府边界、公共服务和不平等是经济政策类阅读与写作的常见主题。",
              "文章从一本新书的中心论点切入，依次解释理论、举出地方政策实例，再指出方案局限并回到福祉衡量。",
              "可练习主旨题、例证作用题和作者态度题，尤其要区分书中主张与作者对其可行性的评价。",
              "socialise risk、equity stake、ambiguous、plausible 等词可用于讨论市场治理和公共投资。",
              "写作可借鉴“提出理念—说明政策工具—给出案例—承认执行局限”的论证路径。"
            ],
            "vocabulary": [
              {"word":"hand in hand","phonetic":"/ˌhænd ɪn ˈhænd/","part":"adv. phr.","translation":"密切合作；携手"},
              {"word":"socialise","phonetic":"/ˈsəʊʃəlaɪz/","part":"v.","translation":"由社会或公共部门共同承担"},
              {"word":"privatise","phonetic":"/ˈpraɪvətaɪz/","part":"v.","translation":"私有化；转由私人取得"},
              {"word":"equity stake","phonetic":"/ˈekwəti steɪk/","part":"n. phr.","translation":"股权；持股"},
              {"word":"sovereign wealth fund","phonetic":"/ˌsɒvrɪn ˈwelθ fʌnd/","part":"n. phr.","translation":"主权财富基金"},
              {"word":"ambiguous","phonetic":"/æmˈbɪɡjuəs/","part":"adj.","translation":"含义不明确的；模糊的"},
              {"word":"individualistic","phonetic":"/ˌɪndɪvɪdʒuəˈlɪstɪk/","part":"adj.","translation":"个人主义的"},
              {"word":"inclusive","phonetic":"/ɪnˈkluːsɪv/","part":"adj.","translation":"包容的；不排斥群体的"},
              {"word":"plausible","phonetic":"/ˈplɔːzəbl/","part":"adj.","translation":"看似合理的；可行的"},
              {"word":"wellbeing","phonetic":"/ˌwelˈbiːɪŋ/","part":"n.","translation":"福祉；幸福安康"}
            ],
            "sentences": [
              {
                "original": "Governments need to work hand in hand with the private sector, rather than leaving business to its own devices.",
                "analysis": [
                  "主句核心是 Governments need to work，need to 表示必要性。",
                  "hand in hand with the private sector 是方式短语，说明政府应如何行动。",
                  "rather than 引出对照项，leaving business to its own devices 是动名词结构，指放任企业自行其是。",
                  "句子用合作治理与放任市场构成政策选择上的对比。",
                  "可借鉴 rather than + 动名词表达“采取某种做法，而非另一种做法”。"
                ],
                "translation": "政府需要与私营部门携手合作，而不是放任企业自行其是。"
              },
              {
                "original": "The “common good” or “public good” can be taken to mean the interests of the broader community.",
                "analysis": [
                  "句子主干是 The “common good” or “public good” can be taken to mean...，两个术语由 or 并列。",
                  "can be taken to mean 是情态动词加被动结构，表示一种可接受的解释，而非唯一界定。",
                  "the interests of the broader community 是 mean 的补足内容，of 短语说明利益归属。",
                  "broader 修饰 community，强调超越狭义个体利益的更大群体。",
                  "可借鉴 can be taken to mean 为存在歧义的概念给出审慎定义。"
                ],
                "translation": "“共同利益”或“公共利益”可以理解为更广泛社区的利益。"
              },
              {
                "original": "Mazzucato is better at critiquing current economies than describing a plausible path to better ones.",
                "analysis": [
                  "主干是 Mazzucato is better at X than Y，比较的是两方面的能力。",
                  "at 后的 critiquing 与 than 后的 describing 都是动名词，形成平行结构。",
                  "current 修饰 economies；a plausible path 中 plausible 修饰 path，说明评价聚焦于批判与可行方案的差别。",
                  "句子用转折性评价限制前文论述，表明作者既呈现理论贡献，也指出实践不足。",
                  "可借鉴 be better at... than... 对观点或政策的长处与局限作平衡评价。"
                ],
                "translation": "Mazzucato 更擅长批判当下的经济体系，而不是描绘一条切实可行的改良路径。"
              }
            ]
          },
          {
            "title": "Is it OK for jobseekers or employers to use AI?",
            "source": "BBC",
            "published": "2026-10-13",
            "url": "https://www.bbc.com/news/articles/c623dnkn8pkyo",
            "readingTime": "约 5 分钟（估算）",
            "topic": "商业与社会 / 求职、招聘公平与生成式 AI",
            "summary": "BBC 从求职者是否应使用 AI 写简历、求职信或参加面试提出伦理问题，并以毕业生 Tom 的经历说明求职竞争和批量申请带来的压力。报道随后引用英国毕业生雇主协会对 155 家大型雇主的调查：雇主对求职材料辅助逐渐接受，但 92% 曾遇到或怀疑招聘中的 AI 不当使用。能源企业 EDF 因收到 12,000 份毕业生申请而提前关闭招聘，并尝试用技能和行为评估减少对 AI 文本的依赖。文章也指出，候选人与企业都可能使用 AI，求职者担心竞争不公平，招聘方则强调真实性和个性；作者没有给出简单禁用答案，而将其呈现为仍在变化的职业伦理难题。",
            "reason": [
              "技术如何改变就业、公平竞争与职业伦理，是商业和社会议题的交叉主题。",
              "报道先以求职者的个人经验引入，再呈现雇主调查和企业案例，最后转向招聘双方的伦理张力。",
              "可练习调查数据题、人物例证作用题和作者结论题，并判断哪些陈述来自受访者、哪些来自调查。",
              "screening、misconduct、hypocritical、authenticity 等词适合讨论招聘流程和诚信。",
              "写作可借鉴“个人处境—调查证据—机构应对—未决伦理问题”的递进结构。"
            ],
            "vocabulary": [
              {"word":"jobseeker","phonetic":"/ˈdʒɒbˌsiːkə/","part":"n.","translation":"求职者"},
              {"word":"demoralising","phonetic":"/dɪˈmɒrəlaɪzɪŋ/","part":"adj.","translation":"令人泄气的"},
              {"word":"hypocritical","phonetic":"/ˌhɪpəˈkrɪtɪkl/","part":"adj.","translation":"虚伪的；言行不一的"},
              {"word":"screening","phonetic":"/ˈskriːnɪŋ/","part":"n.","translation":"筛选；初步审核"},
              {"word":"misconduct","phonetic":"/ˌmɪsˈkɒndʌkt/","part":"n.","translation":"不当行为；违规"},
              {"word":"spray and pray","phonetic":"/ˌspreɪ ən ˈpreɪ/","part":"n. phr.","translation":"广撒网式申请"},
              {"word":"level playing field","phonetic":"/ˌlevəl ˈpleɪɪŋ fiːld/","part":"n. phr.","translation":"公平竞争环境"},
              {"word":"authenticity","phonetic":"/ˌɔːθenˈtɪsəti/","part":"n.","translation":"真实性；真诚"},
              {"word":"grapple with","phonetic":"/ˈɡræpəl wɪð/","part":"v. phr.","translation":"努力应对；设法解决"},
              {"word":"assessment","phonetic":"/əˈsesmənt/","part":"n.","translation":"评估；考核"}
            ],
            "sentences": [
              {
                "original": "Would you use AI to help you write a CV or cover letter?",
                "analysis": [
                  "主干是 Would you use AI?，一般疑问句直接向读者提出选择。",
                  "to help you write 是目的结构，说明使用 AI 的具体用途。",
                  "help 后接宾语 you 和不带 to 的动词 write；a CV or cover letter 列出两种求职材料。",
                  "开篇设问把抽象的招聘伦理转化为读者熟悉的个人决策。",
                  "可借鉴 Would you... 引入议题，再在正文比较不同做法的利弊。"
                ],
                "translation": "你会用 AI 帮自己写简历或求职信吗？"
              },
              {
                "original": "According to the ISE, the graduate market has stabilised after a sharp fall last year but remains tough.",
                "analysis": [
                  "核心主语是 the graduate market，谓语由 has stabilised 和 remains 并列构成。",
                  "According to the ISE 是来源状语，明确判断归属于英国毕业生雇主协会。",
                  "after a sharp fall last year 限定市场企稳的背景和时间。",
                  "but 连接恢复迹象与仍然艰难的现实，形成让步式对照。",
                  "可借鉴 According to... + but...，在引用来源时同时呈现趋势改善和持续问题。"
                ],
                "translation": "据英国毕业生雇主协会称，毕业生就业市场在去年大幅下滑后已趋于稳定，但仍然严峻。"
              },
              {
                "original": "She says the use of AI in job applications is a “moral dilemma” that employers and employees will continue to grapple with.",
                "analysis": [
                  "主句核心是 She says，后接 that 省略的宾语从句。",
                  "从句主干为 the use of AI is a “moral dilemma”，of AI 和 in job applications 逐层限定使用方式。",
                  "that 引导定语从句修饰 dilemma；employers and employees 是并列主语。",
                  "will continue to 表示问题仍会持续，grapple with 强调需要艰难应对。",
                  "可借鉴 describe... as a dilemma，并用 continue to + 动词表达尚未解决的长期议题。"
                ],
                "translation": "她说，在求职申请中使用 AI 是一道雇主和雇员仍将持续面对的“道德难题”。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-13",
      "status": "ready",
      "ai": {
        "intro": "10月12日至13日未核实到3项足够适合学生的新变化，因此将检索范围扩至近7天；下列项目保留公告实际发布日期，并注明资格与免费限制。",
        "updates": [
          {
            "event": "GitHub Copilot 新增管理员可配置的遥测身份归因与采集类别（2026-10-12）",
            "summary": "GitHub 为企业管理员增加 Copilot 遥测管理设置：可将活动归因到经验证的 GitHub 用户，同时把身份采集与提示词、回复、工具参数、工具输出和策略详情等内容类别分别控制。各类采集默认关闭。",
            "howTo": "如负责组织设置，在 managed settings 中配置 telemetry.capture.identity 及所需的 capture 类别；身份归因和内容采集须分别启用。功能可用于 Copilot CLI、GitHub Copilot app 及 VS Code Agent Host 会话。",
            "impact": "在学校或团队的受管开发环境中使用 Copilot 的学生，可据此了解管理员可能记录的是身份、内容还是两者，并在提交课程代码或个人资料前确认组织的采集设置。",
            "free": "面向使用 managed settings 的企业管理员；公告没有说明额外价格、地区或使用配额，具体计划资格官方未说明。提示词、工具和策略采集可能包含源码、文件、命令及路径；官方建议只启用审计所需类别。",
            "category": "开发工具 / AI 隐私与管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-12",
              "url": "https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture"
            }
          },
          {
            "event": "Google 公布 AMIE 在真实门诊预诊中的临床研究（2026-10-08）",
            "summary": "Google 与 Beth Israel Deaconess Medical Center 研究人员在《The Lancet》发表 AMIE 研究：98 名患者在紧急照护门诊就诊前与研究型诊断聊天机器人交流，医生实时监督。Google 报告称，75% 的病例中摘要帮助医生准备就诊，超过一半影响了医生的处理方式，模型的鉴别诊断与医生最终诊断有 90% 一致；研究者同时指出仍需更大规模临床试验。",
            "howTo": "打开 Google Research 公告并进入其链接的《The Lancet》论文，先查看研究对象、监督方式和预设安全标准，再区分单一门诊研究结果与广泛临床部署的证据。",
            "impact": "医学生或健康科学学生可用这项研究练习评读临床 AI 证据：分别看安全性、摘要的临床用途及诊断一致性指标，不把早期结果直接外推为通用诊疗能力。",
            "free": "公告和论文链接可在线阅读；AMIE 在该文中是研究型诊断聊天机器人，并非面向公众开放的产品。产品价格、个人账号条件、地区开放和使用配额官方未说明；Google 明确表示仍需更大规模临床试验。",
            "category": "AI 研究 / 医疗与健康",
            "source": {
              "name": "Google Research Blog",
              "published": "2026-10-08",
              "url": "https://blog.google/innovation-and-ai/technology/health/amie-clinical-study-lancet/"
            }
          },
          {
            "event": "Anthropic 扩展 Cyber Verification Program，分层向经核验的防御团队开放能力（2026-10-06）",
            "summary": "Anthropic 将 Project Glasswing 与既有 CVP 整合为扩展计划，按 Defense、Red Team 和 Specialized 三档提供不同的网络安全能力与较少的拦截。申请组织须接受核验并证明相应安全控制；高风险专项档仅面向有限且经深入审查的组织。",
            "howTo": "有正当防御工作需求的学校安全团队、开源维护者或研究组织可先阅读各档资格要求，再由组织通过官方 CVP 入口申请；Red Team 档只可测试获授权系统，专项档还需深入审核。",
            "impact": "网络安全方向学生可把公告用于理解模型能力开放如何与身份核验、授权范围及滥用监测配套；普通个人账户不会因此自动获得低拦截能力，课程演练仍应限定在获准系统内。",
            "free": "计划要求组织申请及核验，Defense 档目标为数日内回复，Red Team 档审核可能需数周；Specialized 档仅限少数组织。Claude Platform、Vertex AI 和 Microsoft Foundry 可用；Amazon Bedrock 仅适用于符合 Enterprise Frontier Safeguards 条件的客户。价格、地区配额官方未说明。",
            "category": "AI 安全 / 网络防御",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-06",
              "url": "https://www.anthropic.com/news/cyber-verification-program"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Student：经验证学生可用的免费 AI 编程计划",
            "summary": "GitHub Education 说明，验证通过的学生可用 Copilot Student；计划包含不限量代码补全、一定额度的 GitHub AI Credits，以及有限的聊天和代理用量，模型只能通过自动选择使用。",
            "howTo": "前往 GitHub Education Pack 的 GitHub Copilot 栏目，按页面流程验证学生身份并启用 Student 计划；使用时留意聊天、代理和 AI Credits 的计划限制。",
            "impact": "可用于课程项目中的代码补全、理解报错和小规模编程练习；学生应检查并测试建议，不应把自动生成结果直接当作正确答案。",
            "free": "对通过验证的学生提供免费 Student 计划；代码补全不限量，但聊天和代理用量有限，AI Credits 的确切额度、适用地区和截止日期官方未说明。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Education Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Notion AI：Free 与 Plus 用户可试用有限次数的 AI 回复",
            "summary": "Notion 帮助中心确认 Free 和 Plus 计划用户可获得有限数量的免费 AI 回复；AI 可用于改写、翻译、摘要、问答等页面操作。用完后继续使用需升级至 Business 或 Enterprise。",
            "howTo": "在 Notion 免费或 Plus 工作区新建学习页面，选中文本使用 AI 编辑，或在页面输入 /AI Block 生成提纲、摘要等；留意免费回复用量提示。",
            "impact": "适合将课堂笔记改成复习提纲、润色英语草稿或翻译阅读材料；把 AI 输出与原文核对，避免将未经检查的内容写入正式作业。",
            "free": "Free 和 Plus 用户可领取有限次免费 AI 回复；官方没有公布具体次数、刷新周期或地区限制。免费回复用尽后，需升级到 Business 或 Enterprise 才能继续使用 AI 功能。",
            "category": "长期免费 / 学习写作与整理",
            "source": {
              "name": "Notion AI Help Center",
              "published": "官方未说明",
              "url": "https://www.notion.com/help/complimentary-ai-responses"
            }
          },
          {
            "event": "Qwen3-Next-80B-A3B-Instruct：Apache-2.0 许可的公开模型权重",
            "summary": "Qwen 在 Hugging Face 发布可下载的 Qwen3-Next-80B-A3B-Instruct 权重，模型卡提供 Transformers 快速上手示例，并列出 Apache-2.0 许可。模型总参数为 80B、每 token 激活 3B，适合本地部署实验而非轻量设备即用。",
            "howTo": "从官方模型卡下载权重，按卡片安装 Transformers 主分支与依赖，再用 AutoTokenizer 和 AutoModelForCausalLM 加载模型；部署前先核对本机显存、存储和推理框架要求。",
            "impact": "可用于课程中的开源模型部署、提示词评测或本地推理实验；本地运行有助于控制输入数据的传输边界，但仍需遵守模型许可并验证生成内容。",
            "free": "模型权重可公开下载，模型卡标注 Apache-2.0；本地使用不收模型调用费，但需要自行准备足够硬件和依赖。托管推理是否免费、账号要求、地区及托管配额官方未说明。",
            "category": "开源模型 / 本地推理",
            "source": {
              "name": "Qwen Hugging Face Model Card",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
            }
          },
          {
            "event": "Gemini API Free Tier：部分模型的输入与输出 token 免费",
            "summary": "Google 定价页列出 Gemini API 免费层：部分模型可免费使用输入和输出 token，并可从 Google AI Studio 开始；免费层数据可能用于改进 Google 产品。",
            "howTo": "在官方定价页确认具体模型标为 Free Tier，再点 Get started for Free 进入 AI Studio 测试；先核对该模型的限制，并避免输入个人或机密材料。",
            "impact": "可为摘要、分类或问答课程原型做小规模验证，无需在试验阶段先支付 token 费用；不要把免费额度误认为无限调用，也不要输入敏感资料。",
            "free": "仅部分模型免费，具体速率限制随模型而异，统一额度官方未说明；免费层数据可能用于改进 Google 产品。地区和账号资格的统一要求官方未说明。",
            "category": "长期免费 / API 试用",
            "source": {
              "name": "Google AI for Developers Pricing",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Publicly owned rail is popular. But is it making the trains run on time?",
            "source": "BBC",
            "published": "2026-10-12",
            "url": "https://www.bbc.co.uk/news/articles/ck5yn0n14r8do",
            "readingTime": "约 6 分钟（估算）",
            "topic": "经济与社会 / 铁路国有化和服务质量",
            "summary": "BBC 从公众对铁路私有化失败、票价和服务可靠性的常见判断切入，引用铁路专家对 1990 年代私营铁路运营表现的不同评价。报道进一步厘清英国铁路并非简单的私有或公有二分：基础设施已由公共部门管理，部分客运公司早已国有化，另有受政府合同约束的运营商、私人持有的车辆公司及货运和开放接入运营商。文章最后指出，当前所谓铁路国有化主要是客运合同到期后逐步将运营商转回公有并成为默认模式，并不等同于恢复旧式 British Rail；所有权变化能否满足乘客对准点和服务的期待仍是实际考验。",
            "reason": [
              "公共服务效率、国有化与消费者体验相连，是经济政策和社会治理类常见议题。",
              "文章从流行看法起笔，以专家反例修正单一叙事，再拆解复杂的所有权结构，最后落到政策实际含义。",
              "可练习作者如何限定“私有化”“国有化”的含义、例证作用题，以及标题提出的服务效果是否已获证明。",
              "privatisation、subsidy、infrastructure、devolved 等词适合经济制度、公共投资和地方治理语境。",
              "写作可借鉴先呈现争论双方、再区分概念和制度事实、最后评估政策结果的论证结构。"
            ],
            "vocabulary": [
              {"word":"privatisation","phonetic":"/ˌpraɪvətaɪˈzeɪʃən/","part":"n.","translation":"私有化"},
              {"word":"unreliable","phonetic":"/ˌʌnrɪˈlaɪəbl/","part":"adj.","translation":"不可靠的"},
              {"word":"operating costs","phonetic":"/ˈɒpəreɪtɪŋ kɒsts/","part":"n. phr.","translation":"运营成本"},
              {"word":"subsidy","phonetic":"/ˈsʌbsədi/","part":"n.","translation":"补贴"},
              {"word":"nationalisation","phonetic":"/ˌnæʃənəlaɪˈzeɪʃən/","part":"n.","translation":"国有化"},
              {"word":"infrastructure","phonetic":"/ˈɪnfrəstrʌktʃə/","part":"n.","translation":"基础设施"},
              {"word":"devolved","phonetic":"/dɪˈvɒlvd/","part":"adj.","translation":"权力下放的"},
              {"word":"fixed fee","phonetic":"/ˌfɪkst ˈfiː/","part":"n. phr.","translation":"固定费用"},
              {"word":"financial risk","phonetic":"/faɪˌnænʃəl ˈrɪsk/","part":"n. phr.","translation":"财务风险"},
              {"word":"expire","phonetic":"/ɪkˈspaɪə/","part":"v.","translation":"到期"}
            ],
            "sentences": [
              {
                "original": "The view that privatisation ultimately failed, leaving unreliable services and high fares, may be widespread.",
                "analysis": [
                  "主句核心是 The view ... may be widespread，情态动词 may 保留判断余地。",
                  "that 引导同位语从句，说明 view 的具体内容：私有化最终失败。",
                  "leaving unreliable services and high fares 是现在分词短语，补充该观点认为的后果。",
                  "ultimately 修饰 failed，widespread 描述这种看法的普及程度，而非证实其正确。",
                  "可借鉴 the view that... 表述一种社会看法，并用 may 避免把普遍观点写成定论。"
                ],
                "translation": "认为私有化最终失败、导致服务不可靠且票价高昂的看法，或许相当普遍。"
              },
              {
                "original": "However, Prof Glaister argues that for a few years in the 1990s, the old privatised system actually worked well.",
                "analysis": [
                  "主句核心是 Prof Glaister argues，However 标示其观点与前句的普遍看法形成转折。",
                  "that 引导宾语从句，完整呈现专家提出的反例性判断。",
                  "for a few years in the 1990s 是时间状语，限定“运行良好”的时期。",
                  "actually 强调结论与预期相反；old privatised system 是 worked well 的主语。",
                  "可借鉴 However + 专家观点 + that 从句，引入证据或观点对既有论述作修正。"
                ],
                "translation": "不过，Glaister 教授认为，20 世纪 90 年代有几年旧的私营铁路体系实际上运行良好。"
              },
              {
                "original": "Operating costs and subsidies were falling while the number of train services and passengers went up, he says.",
                "analysis": [
                  "主句以 he says 作引述框架，核心信息是两个同时发生的变化。",
                  "while 连接并对照两组趋势：运营成本和补贴下降，列车服务及乘客数量上升。",
                  "the number of... 是不可数的单数结构，因此搭配 went up 表示数量增长。",
                  "两个并列名词组提供相反方向的指标，支撑前句“运行良好”的理由。",
                  "可借鉴 while 对照政策成本与服务产出，形成简洁的证据型表达。"
                ],
                "translation": "他说，运营成本和补贴在下降，而列车班次和乘客人数却在增加。"
              }
            ]
          },
          {
            "title": "Why the right turned on Indian Americans",
            "source": "Vox",
            "published": "2026-10-12",
            "url": "https://www.vox.com/podcasts/505495/anti-indian-racism-online-right-vivek-ramaswamy",
            "readingTime": "约 10 分钟（估算）",
            "topic": "社会 / 移民、种族与身份政治",
            "summary": "Vox 以一段涉及印度裔政治人物的社交媒体风波引出右翼网络反印裔言论，随后通过主持人与记者的访谈讨论其社会背景。受访者把部分敌意与印度裔在教育、科技及职业领域的可见度、围绕机会竞争的中产阶层焦虑，以及反全球化情绪联系起来；报道也谈及网络创作者借争议获得关注的动力。访谈进一步呈现印度裔美国人对局势的务实回应和对自身融入经历的不同感受，并以第一代移民的适应和后续代际选择作比较。文章提供的是受访者对现象的解释，而不是对单一因果关系的证明。",
            "reason": [
              "移民融入、种族偏见与教育和职业竞争结合，适合社会公平、身份政治类主题。",
              "文章由社交媒体事件提出问题，以访谈解释社会背景，再补入当事群体回应，最后联系移民代际经验。",
              "可练习主旨题、观点归属题和因果推断题，尤其要区分受访者解释与已证实结论。",
              "conspicuous、stereotype、resentment、backlash 等词可用于分析偏见、群体情绪和舆论变化。",
              "写作可借鉴“具体事件—结构性解释—群体回应”的组织方式，并用归因限定语避免过度概括。"
            ],
            "vocabulary": [
              {"word":"conspicuous","phonetic":"/kənˈspɪkjuəs/","part":"adj.","translation":"显眼的；显著的"},
              {"word":"stereotype","phonetic":"/ˈsteriətaɪp/","part":"n.","translation":"刻板印象"},
              {"word":"advocate","phonetic":"/ˈædvəkət/","part":"n.","translation":"倡导者；支持者"},
              {"word":"visible","phonetic":"/ˈvɪzəbl/","part":"adj.","translation":"可见的；显而易见的"},
              {"word":"resentment","phonetic":"/rɪˈzentmənt/","part":"n.","translation":"怨恨；不满"},
              {"word":"backlash","phonetic":"/ˈbæklæʃ/","part":"n.","translation":"强烈反对；反弹"},
              {"word":"status threat","phonetic":"/ˈsteɪtəs θret/","part":"n. phr.","translation":"地位威胁"},
              {"word":"pragmatism","phonetic":"/ˈpræɡmətɪzəm/","part":"n.","translation":"务实；实用主义"},
              {"word":"denigrate","phonetic":"/ˈdenɪɡreɪt/","part":"v.","translation":"诋毁；贬低"},
              {"word":"influx","phonetic":"/ˈɪnflʌks/","part":"n.","translation":"大量涌入"}
            ],
            "sentences": [
              {
                "original": "It was the latest example of a broader shift on the right, where Indian Americans and Indian immigrants have become a conspicuous target of online conservative anger.",
                "analysis": [
                  "主句核心是 It was the latest example，说明前文事件是更大变化的一个例子。",
                  "of a broader shift 补足 example 的内容，on the right 限定这一变化发生的政治范围。",
                  "where 引导关系副词从句，补充说明这一政治变化中出现的群体处境。",
                  "have become 使用现在完成时，呈现目标状态逐渐形成并延续至今。",
                  "可借鉴 It is an example of...，再用 where 从句展开社会现象的具体表现。"
                ],
                "translation": "这只是右翼更广泛变化的最新例子：印度裔美国人和印度移民已成为网络保守派愤怒针对的显眼目标。"
              },
              {
                "original": "I think that is a component of it.",
                "analysis": [
                  "句子主干是 I think，后接 that 引导的宾语从句。",
                  "从句核心为 that is a component，that 指代前文提出的解释或因素。",
                  "of it 补充 component 所属的整体，避免把单一因素说成全部原因。",
                  "I think 是观点限定语，标明这是说话者判断而非报道已证实的事实。",
                  "可借鉴 a component of... 和 I think 的搭配，谨慎表达多因素解释。"
                ],
                "translation": "我认为那是其中一个因素。"
              },
              {
                "original": "It’s a much larger anti-globalization backlash on the right, not only when it comes to things like immigration, but also trade and tariffs and restrictions like that.",
                "analysis": [
                  "主句核心为 It’s a backlash，表语 backlash 点明受访者对现象的定性。",
                  "much larger 和 anti-globalization 修饰 backlash，说明其规模和性质。",
                  "on the right 限定政治语境；when it comes to 引出讨论范围。",
                  "not only... but also... 并列移民、贸易、关税及类似限制，展示论点覆盖面。",
                  "可借鉴 not only... but also... 扩展论据类别，并用 like that 回指同类政策。"
                ],
                "translation": "这是一种范围更广的右翼反全球化反弹，不只涉及移民，也涉及贸易、关税及类似限制。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-12",
      "status": "ready",
      "ai": {
        "intro": "10月11日至12日未核实到足够的新产品变化，故将检索范围扩至近7天；以下保留公告的实际发布日期，并标出免费与可用性信息未公开之处。",
        "updates": [
          {
            "event": "Google Flow Music 支持将自定义音乐工具导出为 VST3/AU 插件（2026-10-06）",
            "summary": "Flow Music 的 Spaces 可用自然语言创建自定义乐器或效果器；新变化是可将 Spaces 导出为 VST3/AU 插件，放入数字音频工作站使用。",
            "howTo": "打开 Google Flow Music 的 Spaces，用自然语言描述要制作的乐器或效果器；完成后导出为 VST3 或 AU，再在自己的 DAW 中加载。",
            "impact": "做音乐、声音设计或多媒体作业时，可按自己的工作流制作小型效果器，并在熟悉的音频软件中继续编辑；导出前应先试听并检查参数是否符合项目要求。",
            "free": "官方公告未说明该功能的价格、账号条件、开放地区或使用配额；这些信息官方未说明。",
            "category": "生成式 AI / 音乐创作",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-06",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/create-music-production-plugins-google-flow/"
            }
          },
          {
            "event": "Anthropic 更新 Claude 使用政策，明确合成活动与高风险场景要求（2026-10-08）",
            "summary": "Anthropic 发布新版 Usage Policy，集中说明禁止虚假身份、虚假账号等欺骗性活动，并细化选举操纵、监控、武器及高风险健康/财务建议等规则；新版政策定于 2026-11-12 生效。公告称其中多数内容是澄清既有规定。",
            "howTo": "使用 Claude 前查看新版 Usage Policy，重点核对课程项目是否涉及虚假账号/活动、选举信息、个人监控或高风险建议；新规自 2026-11-12 起适用。",
            "impact": "做社科传播、选举研究或健康与财务主题项目时，避免让模型生成欺骗性活动材料；涉及影响个人权益的建议，应保留合格人员审核，并明确告知当事人使用了 AI。",
            "free": "这是使用政策更新而非付费计划公告；官方未说明价格、账号套餐或地区配额变化。新版政策生效日为 2026-11-12，地区可用性仍按官方 Supported Regions Policy 执行。",
            "category": "AI 使用政策 / 负责任使用",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-08",
              "url": "https://www.anthropic.com/news/2026-usage-policy-update"
            }
          },
          {
            "event": "Qwen 发布 Qwen-Image-2.1-Turbo 加速图像生成模型（2026-10-09）",
            "summary": "Qwen-Image-2.1-Turbo 是 Qwen-Image-2.1 的加速检查点，面向文生图和图像编辑，采用 8 步去噪；模型卡称其可直接使用 QwenImage21Pipeline，并带有推荐采样设置。",
            "howTo": "按模型卡先准备兼容 CUDA 的 PyTorch，再安装 Diffusers 最新源码、Transformers 5.17.0 以上版本、Accelerate 与 Pillow；在 Python 中用 QwenImage21Pipeline.from_pretrained(\"Qwen/Qwen-Image-2.1-Turbo\") 加载权重并在 CUDA 设备运行。",
            "impact": "可为课程海报、视觉概念稿或图像编辑项目快速制作初稿；检查生成图中的文字、公式、事实和版权合规性后再用于提交或公开展示。",
            "free": "模型卡提供公开权重和本地运行示例，但许可标记为 other，应先阅读卡片所列条款。官方未说明托管推理是否免费、具体价格、账号要求、地区或配额；本地运行需要兼容 CUDA 的设备。",
            "category": "生成式 AI / 开放模型与图像",
            "source": {
              "name": "Qwen Hugging Face Model Card",
              "published": "2026-10-09",
              "url": "https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo"
            }
          }
        ],
        "deals": [
          {
            "event": "Ollama：MIT 许可的本地开源模型运行工具",
            "summary": "Ollama 提供本地运行和管理开源模型的软件，可从命令行或本地 REST API 调用；应用本身按 MIT 许可证发布。",
            "howTo": "从 Ollama 官方下载页安装对应系统版本，按 Quickstart 选择并下载一个模型，然后在终端运行模型或调用本机 REST API；使用前分别查看所选模型自己的许可证。",
            "impact": "可在课程项目中搭建本地问答或代码辅助原型，减少把笔记上传至外部聊天网站的需要；本地模型效果和速度取决于设备，输出仍需核验。",
            "free": "Ollama 软件以 MIT 许可证发布，可免费下载和本地运行；模型权重可能有各自的授权条件，云端模型不等同于本地免费功能。地区、配额及设备性能要求因模型而异，官方未说明统一限制。",
            "category": "长期免费 / 开源本地 AI",
            "source": {
              "name": "Ollama GitHub Repository",
              "published": "官方未说明",
              "url": "https://github.com/ollama/ollama"
            }
          },
          {
            "event": "OpenAI Whisper：MIT 许可的本地语音识别与翻译模型",
            "summary": "Whisper 是通用语音识别模型，可做多语言转写、语音翻译和语言识别；官方仓库提供代码、模型安装方式及不同大小模型的硬件需求。",
            "howTo": "按官方说明安装 Python 包 `pip install -U openai-whisper` 和 ffmpeg，再用命令行对本地音频转写；需要将非英语音频翻成英文时使用 `--task translate`。先在短音频上检查识别和专名。",
            "impact": "可把公开讲座、访谈或语言练习音频转成文字，制作复习材料或对照听力；录音若涉及他人，应先确认授权并保护隐私。",
            "free": "官方代码仓库采用 MIT 许可，可免费下载代码和模型；本地运行需要安装依赖与兼容硬件，模型大小对应不同显存需求。地区、账号及云端托管额度官方未说明。",
            "category": "免费开源工具 / 语音转写",
            "source": {
              "name": "OpenAI Whisper GitHub Repository",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          },
          {
            "event": "Gemini API Free Tier：部分模型输入与输出 token 免费",
            "summary": "Google AI Studio 的 Gemini API 免费层对部分模型提供免费输入与输出 token，并允许从 AI Studio 开始测试；可用模型有限，免费层数据可能用于改进 Google 产品。",
            "howTo": "打开 Gemini API 定价页选择标注为 Free Tier 的模型，再进入 AI Studio 创建项目并生成 API key；先用非敏感课程文本做小规模原型，并在控制台检查模型对应的速率限制。",
            "impact": "适合为课程应用验证摘要、分类或问答流程是否可行，而不必在原型阶段先承担按 token 计费；不要向免费层提交个人或机密资料，因为官方标注免费层数据可能用于改进产品。",
            "free": "免费层仅覆盖部分模型，表中输入与输出 token 标为免费；速率限制随模型和项目而异，官方没有在该定价页给出统一额度。免费层数据可能用于改进产品；地区及账户资格的统一要求官方未说明。",
            "category": "长期免费 / API 试用",
            "source": {
              "name": "Google AI for Developers Pricing",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Gemini Apps：无 Google AI 订阅也可使用基础功能",
            "summary": "Google 帮助中心说明，没有 Google AI 订阅的个人账户仍可使用 Gemini Apps，但免费使用受计算量和使用周期限制；高需求时部分高算力功能可能暂不可用。",
            "howTo": "用个人 Google 账户打开 Gemini Apps 进行学习问答或文本整理；到达使用上限后等待额度刷新，或查看页面提示，不要假设 Deep Research 等功能始终可用。",
            "impact": "可用于解释课程概念、整理阅读提纲或提出自测问题；复杂作业应分批提供材料，并用课程资料核实回答。",
            "free": "无需 Google AI 订阅即可使用基础额度；官方称限额按计算量决定，每 5 小时刷新但还有 weekly limit，未公布统一提示次数。无订阅用户的 Deep Research 等功能在高需求时可能不可用；额度会变动。",
            "category": "长期免费 / 学习问答",
            "source": {
              "name": "Google Gemini Apps Help",
              "published": "官方未说明",
              "url": "https://support.google.com/gemini/answer/16275805?hl=en"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "France’s other schools problem – the teens violently smashing up their old primaries: ‘They think it’s not worthy of respect – so they trash it’",
            "source": "The Guardian",
            "published": "2026-10-11",
            "url": "https://www.theguardian.com/world/2026/oct/11/france-violent-attacks-trashings-schools-teenagers",
            "readingTime": "约 14 分钟",
            "topic": "社会 / 青少年与公共教育",
            "summary": "文章从法国里昂一所小学被两名少年纵火的事件切入，指出近年学校被闯入、破坏的案例并非单纯的个别恶作剧。报道随后比较不同城市与社区的案例，说明受损的不只是建筑和教学设备，还包括学生、家庭和教师对校园安全与归属感的体验。作者采访教育研究者、地方人员、家长和教师，呈现学业挫折、贫困与污名化社区、家庭困难、假期无聊、群体归属需求以及社交媒体传播等多种解释，同时指出研究者对社交媒体究竟是诱因还是放大器存在不同看法。结尾批评官方统计和政策把问题缩减为财产损失与安保措施，主张理解破坏行为背后的社会排斥和情感原因；文章并未把单一因素当作确定成因。",
            "reason": [
              "学校作为社会整合机构能否兑现公平承诺，连接教育、青年发展与社会排斥，是可展开论证的社会议题。",
              "文章由个案引出全国性现象，再以地区案例、受访者解释和官方回应层层推进，最后质疑只靠安保的政策结论。",
              "可练习主旨题、例证作用题、作者态度题，以及区分相关性、可能解释和已证实因果的判断题。",
              "phenomenon、resentment、incitement、desensitising 等词可用于讨论群体行为、情绪与媒介影响。",
              "写作可借鉴“具体事件—多因素解释—数据局限—制度回应”的结构，避免将复杂社会问题归结为单一原因。"
            ],
            "vocabulary": [
              {
                "word": "phenomenon",
                "phonetic": "/fəˈnɒmɪnən/",
                "part": "n.",
                "translation": "现象"
              },
              {
                "word": "vandalism",
                "phonetic": "/ˈvændəlɪzəm/",
                "part": "n.",
                "translation": "故意破坏公物的行为"
              },
              {
                "word": "resentment",
                "phonetic": "/rɪˈzentmənt/",
                "part": "n.",
                "translation": "怨恨；愤懑"
              },
              {
                "word": "perpetrator",
                "phonetic": "/ˈpɜːpətreɪtə(r)/",
                "part": "n.",
                "translation": "作案者；实施者"
              },
              {
                "word": "delinquency",
                "phonetic": "/dɪˈlɪŋkwənsi/",
                "part": "n.",
                "translation": "违法行为；青少年犯罪"
              },
              {
                "word": "incitement",
                "phonetic": "/ɪnˈsaɪtmənt/",
                "part": "n.",
                "translation": "煽动；刺激"
              },
              {
                "word": "ephemeral",
                "phonetic": "/ɪˈfemərəl/",
                "part": "adj.",
                "translation": "短暂的；转瞬即逝的"
              },
              {
                "word": "desensitising",
                "phonetic": "/diːˈsensɪtaɪzɪŋ/",
                "part": "adj.",
                "translation": "使感觉迟钝的；脱敏的"
              },
              {
                "word": "piecemeal",
                "phonetic": "/ˈpiːsmiːl/",
                "part": "adj./adv.",
                "translation": "零散的；逐步零碎地"
              },
              {
                "word": "counterproductive",
                "phonetic": "/ˌkaʊntəprəˈdʌktɪv/",
                "part": "adj.",
                "translation": "适得其反的"
              }
            ],
            "sentences": [
              {
                "original": "There were at least 15 cases in 2025; a similar number in 2024.",
                "analysis": [
                  "句子由 There were... 引出存在句，核心信息是法国在 2025 年至少发生 15 起此类案件。",
                  "at least 限定数量，明确表示这是下限而非精确总数。",
                  "分号连接两个完整分句；a similar number 省略重复的 cases，避免赘述。",
                  "2025 与 2024 的并列比较用有限数据呈现连续性，但本句本身不解释变化原因。",
                  "可借鉴 There were at least...; a similar number... 简洁比较相邻年份的数量。"
                ],
                "translation": "2025 年至少发生了 15 起案件；2024 年的数量也大致相当。"
              },
              {
                "original": "It’s hard to square this beguiling clash of motives.",
                "analysis": [
                  "句子主干为 It is hard to square...；形式主语 it 指向后面的不定式含义，即“难以解释或协调”。",
                  "to square 是真正的逻辑内容，this beguiling clash of motives 是其宾语。",
                  "beguiling 修饰 clash，指出多种动机并存且令人困惑；of motives 限定冲突的内容。",
                  "该句承接前面对破坏行为兼具兴奋、愤怒和自伤意味的描述，表达作者对单一解释的保留。",
                  "可借鉴 It is hard to square A with B 表达两种证据或解释难以调和。"
                ],
                "translation": "这种令人困惑的动机冲突很难解释得通。"
              },
              {
                "original": "But statistics don’t tally the impact on the ground.",
                "analysis": [
                  "主干为 statistics don’t tally the impact；But 引出与前文统计口径形成的转折。",
                  "tally 在此表示准确记录或反映；the impact 是其宾语。",
                  "on the ground 是习语化的地点/现实层面状语，强调社区中的实际影响，而非抽象数字。",
                  "逻辑上作者区分“统计上占比不高”与“对具体社区影响重大”，避免以数字抹去经验。",
                  "可借鉴 Statistics do not capture/tally the impact on the ground 来指出量化指标的局限。"
                ],
                "translation": "但统计数字并未记录基层社区所承受的实际影响。"
              }
            ]
          },
          {
            "title": "Sweating the details: Sauna's potential health benefits draw scientists' interest",
            "source": "NPR",
            "published": "2026-10-11",
            "url": "https://www.npr.org/2026/10/11/nx-s1-5996655/heat-therapy-sauna-thermoregulation-health-benefits",
            "readingTime": "约 9 分钟",
            "topic": "健康 / 科学证据与热疗",
            "summary": "文章从桑拿热潮与人体耐热的生理机制切入，指出尽管公众兴趣上升，现代医学对桑拿和其他热疗的证据仍不足以形成稳固的临床建议。报道介绍研究者在奥斯陆成立跨国研究小组，计划统一湿度、体温与热疗定义等测量标准，为更大规模、多地点的试验做准备。随后文章综述早期证据：部分观察研究把规律桑拿与较低心血管疾病风险联系起来，小型研究也提示热暴露可能影响血压、血管健康或炎症指标；但样本规模、方法不一、自我报告和混杂因素都限制了因果结论。结尾强调科学家尚不能回答应多频繁进行、实际收益和风险如何等问题，需要严格随机对照试验，而非把相关性或健康潮流包装成确定疗效。",
            "reason": [
              "如何区分健康潮流与可靠医学证据，适合练习健康、公共科学传播和循证决策主题。",
              "文章从生理背景与大众兴趣起笔，交代研究组织，再对照初步发现和研究缺陷，最后指出下一步证据需求。",
              "可考查主旨、研究设计、例证作用，以及观察性研究为何不能直接证明因果关系。",
              "thermoregulation、intervention、observational、extrapolate 等词常见于科普和学术论证。",
              "写作可借鉴“初步希望—证据不足—方法限制—进一步验证”的谨慎论证框架。"
            ],
            "vocabulary": [
              {
                "word": "thermoregulation",
                "phonetic": "/ˌθɜːməʊˌreɡjʊˈleɪʃən/",
                "part": "n.",
                "translation": "体温调节"
              },
              {
                "word": "physiological",
                "phonetic": "/ˌfɪziəˈlɒdʒɪkəl/",
                "part": "adj.",
                "translation": "生理的"
              },
              {
                "word": "disparate",
                "phonetic": "/ˈdɪspərət/",
                "part": "adj.",
                "translation": "迥异的；彼此不同的"
              },
              {
                "word": "rigorously",
                "phonetic": "/ˈrɪɡərəsli/",
                "part": "adv.",
                "translation": "严谨地；严格地"
              },
              {
                "word": "intervention",
                "phonetic": "/ˌɪntəˈvenʃən/",
                "part": "n.",
                "translation": "干预措施"
              },
              {
                "word": "extrapolate",
                "phonetic": "/ɪkˈstræpəleɪt/",
                "part": "v.",
                "translation": "推断；外推"
              },
              {
                "word": "observational",
                "phonetic": "/ˌɒbzəˈveɪʃənəl/",
                "part": "adj.",
                "translation": "观察性的"
              },
              {
                "word": "conclusive",
                "phonetic": "/kənˈkluːsɪv/",
                "part": "adj.",
                "translation": "确凿的；决定性的"
              },
              {
                "word": "vascular",
                "phonetic": "/ˈvæskjələ(r)/",
                "part": "adj.",
                "translation": "血管的"
              },
              {
                "word": "confound",
                "phonetic": "/kənˈfaʊnd/",
                "part": "v.",
                "translation": "混淆；使难以辨明"
              }
            ],
            "sentences": [
              {
                "original": "The acute physiological response to heat is now well understood.",
                "analysis": [
                  "主干是 The response is understood，主语中心词 response，谓语为被动结构 is understood。",
                  "acute 与 physiological 共同修饰 response，限定为急性生理反应；to heat 补充说明反应对象。",
                  "now 作时间状语，强调与过去研究认知相比当前理解程度。",
                  "该句用清楚的已知结论作铺垫，随后转向文章关注的另一面：热暴露可能带来的治疗益处。",
                  "可借鉴 X is now well understood, whereas... 对照成熟知识与尚待研究的问题。"
                ],
                "translation": "科学家长期以来一直惊叹于人体如何耐受极端高温，以及这对健康意味着什么。"
              },
              {
                "original": "“We’re all over the place,” Mason says.",
                "analysis": [
                  "直接引语的核心是 We are all over the place，we 指代研究这个领域的学者。",
                  "all over the place 是习语，结合上下文指研究方法和术语缺乏统一，而非研究者的物理位置。",
                  "Mason says 使用一般现在时作引述语，说明观点来源并保持客观报道语气。",
                  "前文提到标准不一，这句话将抽象的方法分散具体化，说明建立共通标准的必要性。",
                  "可借鉴 be all over the place 概括信息、计划或方法缺乏组织的状态。"
                ],
                "translation": "但赫格伦德和一小群国际科学家正努力推动这件事，并组织这一原本小众且分散的研究领域。"
              },
              {
                "original": "What are the actual benefits?",
                "analysis": [
                  "这是由疑问词 what 引导的特殊疑问句，询问桑拿和热疗的实际益处。",
                  "句子主干可还原为 the benefits are what；what 作表语，主语为 the actual benefits。",
                  "actual 强调要确认真实效果，与前文初步研究或公众热潮形成对照。",
                  "该问句列在研究者提出的一组未解问题中，作用是强调现有证据尚不能回答关键问题。",
                  "可借鉴 What are the actual benefits? 引出效果评估，并在后文用证据而非期待作答。"
                ],
                "translation": "尽管前景可期，专家强调，从这类观察性数据中能够外推的结论有限，因为它依赖自我报告，结果也可能受到其他因素干扰。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-11",
      "status": "ready",
      "ai": {
        "intro": "10月10日至11日仅核实到1项符合条件的新变化，因此扩至近7天，补入10月8日与10月7日发布的公告；下列来源均按真实发布日期标注。",
        "updates": [
          {
            "event": "GitHub Copilot for JetBrains 增加模型、MCP 启动和对话控制（2026-10-10）",
            "summary": "GitHub 为 JetBrains 插件增加企业托管的默认模型设置、诊断问题的内联 Fix 操作、控制 Copilot 与 Claude MCP 服务器是否自动启动的选项，并改进聊天导航、账户切换和 Agent 会话稳定性。更新要求 JetBrains IDE 2025.2 或更高版本。",
            "howTo": "更新到最新 GitHub Copilot JetBrains 插件；在代码诊断的 intention 菜单中点 Fix，让 Copilot 在可用时通过 Agent mode、否则通过 Ask mode提出修复；需要手动控制工具时，在 Copilot 的 MCP 设置中关闭服务器自动启动。",
            "impact": "写课程项目时可从 IDE 诊断直接请求解释和修复建议，并按需启动 MCP 工具，减少在不同窗口间切换；处理建议前仍应检查差异，避免未审阅的更改进入作业或团队仓库。",
            "free": "需要登录有权使用 Copilot 的 GitHub 账户，并使用 JetBrains IDE 2025.2 或更高版本。公告未说明该批功能适用的具体套餐、地区或独立配额，相关限制官方未说明；公告也未说明这次更新是否另收费。",
            "category": "AI 编程助手 / IDE 工作流",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-10",
              "url": "https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains"
            }
          },
          {
            "event": "Anthropic 为开源项目推出免费周期性 AI 漏洞扫描（2026-10-08）",
            "summary": "Anthropic 的 OSS Scanner 面向获准加入的开源项目提供最强模型进行的周期性安全扫描，扫描报告直接由模型生成并发给维护者，不经过人工复核。项目需要自愿加入；官方特别提醒，服务适合已有能力跟进高危漏洞报告的项目。",
            "howTo": "由项目核心维护者检查 OSS Scanner 的资格条件，在 anthropics/oss-scanner 仓库按模板新增 projects/<project>/project.yaml，填写仓库地址、主要联系人和构建用 Dockerfile 路径，再提交 Pull Request 申请；获准后按报告人工核查漏洞和修复建议。",
            "impact": "维护课程工具或学生开源项目的人可了解真实的漏洞披露与维护流程；报告可能有误且没有人工审核，不能未经验证就把模型发现当作已确认漏洞或直接发布修补。",
            "free": "被接受加入的开源项目可免费获得周期性扫描；官方以项目对基础设施或用户安全的重要性等条件个案评估，并会人工验证提交者是否为核心维护者。扫描频率、名额、地区和申请截止日期官方未说明。",
            "category": "免费开源工具 / 代码安全",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-08",
              "url": "https://www.anthropic.com/news/anthropic-cyber-mission"
            }
          },
          {
            "event": "Anthropic 发布 Claude Haiku 5.5，面向快速、重复性任务（2026-10-07）",
            "summary": "Claude Haiku 5.5 是 Anthropic 新一代小模型，面向摘要、分类、压缩上下文和子 Agent 等高频任务，并新增可调 effort 设置，便于在成本与回答能力间取舍。官方称其已在 Claude Platform、AWS、Google Cloud 和 Microsoft Azure 等平台提供。",
            "howTo": "开发者可在 Claude Platform API 中选择模型 ID `claude-haiku-5-5`，用非敏感课程笔记测试摘要或分类，并尝试调整 effort；先对照原文检查遗漏，再决定是否将它接入项目流程。",
            "impact": "适合快速整理阅读材料、给小批量访谈文本做初步主题分类，或为编码 Agent 分担范围明确的子任务；它不是复杂研究结论的替代品，输出应回查来源。",
            "free": "官方模型页列有 API 输入和输出 token 价格，因此 API 调用按用量计费；公告未说明 Claude 免费聊天用户能否选择该型号，也未给出免费调用额度、地区限制或统一配额，均以所在平台实际页面为准，未明确部分官方未说明。",
            "category": "生成式 AI / 轻量模型",
            "source": {
              "name": "Anthropic News",
              "published": "2026-10-07",
              "url": "https://www.anthropic.com/claude-haiku-5-5"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月可用的编程补全与聊天额度",
            "summary": "GitHub 的 Copilot Free 计划为个人提供无需订阅费的基础编程辅助；官方列出的月额度为 2,000 次代码补全和 50 次聊天请求，Copilot Edits 也计入聊天请求。",
            "howTo": "打开 GitHub Copilot Plans 页面选择 Free 计划，登录 GitHub 账户后在支持的编辑器安装 Copilot 插件；先用少量代码补全和聊天请求测试课程仓库，留意当月额度。",
            "impact": "可用于解释报错、生成小段样板代码或练习单元测试，避免为短期课程练习先购买付费计划；不要把生成代码未经检查地提交。",
            "free": "计划价格为免费；每月 2,000 次代码补全、50 次聊天请求（含 Copilot Edits），额度按月重置。官方页面未说明地区限制或额外账户资格要求，未说明部分官方未说明。",
            "category": "长期免费 / 编程学习",
            "source": {
              "name": "GitHub Copilot Plans & Pricing",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Claude Free：可直接用于日常问答、阅读和写作辅助",
            "summary": "Claude 定价页列出每人可用的 Free 计划，覆盖日常问题；适合先用来解释概念、梳理阅读提纲或检查一段文字，而不必先订阅。",
            "howTo": "打开 Claude 定价页进入 Free 计划，登录后在网页或官方应用中粘贴一段非敏感课程材料，要求模型先概括论点，再对照原文校验。",
            "impact": "能为英语阅读、论文提纲和概念复习提供低门槛的初稿帮助；应核查引文与事实，不上传未公开论文、个人信息或研究参与者资料。",
            "free": "Free 计划价格为 0；官方说明使用额度按滚动 5 小时窗口重置，但没有固定消息数，实际用量受对话长度、模型和功能影响，也可能有其他限额。具体地区资格官方未说明。",
            "category": "长期免费 / 学习助手",
            "source": {
              "name": "Claude Pricing",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Qwen3-4B-Instruct-2507：可下载的 Apache 2.0 开放权重模型",
            "summary": "Qwen 官方 Hugging Face 模型卡公开 Qwen3-4B-Instruct-2507 权重并标注 Apache-2.0 许可；模型卡列出 4B 参数和原生 262,144-token 上下文，并提供 Transformers 使用示例。",
            "howTo": "打开模型卡查看许可与运行示例，按示例准备 Transformers 环境并下载权重；先在本机用不含个人信息的短文本测试，再依据设备内存决定是否继续部署。",
            "impact": "有合适硬件的学生可以练习本地推理、提示词对照和模型部署，避免把实验文本发往托管聊天服务；本地模型回答仍需核验，模型许可也不代表输出可直接当作事实。",
            "free": "模型权重以 Apache-2.0 许可公开，可下载后本地运行，不需要为该模型的本地推理支付 API 调用费；硬件、电力和运行环境由使用者承担。托管推理的价格、账户、地区和配额官方未说明。",
            "category": "免费开放权重 / 本地学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507"
            }
          },
          {
            "event": "Anthropic OSS Scanner：为获准的开源项目提供免费定期扫描",
            "summary": "Anthropic 向加入 OSS Scanner 的开源项目免费提供模型安全扫描；核心维护者提交项目配置 PR，经审核加入后可定期收到漏洞报告。",
            "howTo": "项目核心维护者查看 OSS Scanner 资格说明，按模板在 anthropics/oss-scanner 新建项目配置，填写仓库、联系人和构建环境并提交 PR；获准后人工复核扫描结果。",
            "impact": "学生维护的公共软件若有足够用户或被其他项目依赖，可把安全扫描纳入维护实践；该服务明确适合能跟进已确认高危报告的项目，不适合把自动报告直接当作已确认漏洞。",
            "free": "被接受加入的开源项目免费获得周期性扫描；申请需由核心维护者提交并经过人工确认，项目资格按安全影响等因素审核。扫描次数、地区、名额及期限官方未说明。",
            "category": "免费单次申请 / 开源代码安全",
            "source": {
              "name": "Anthropic Cyber Mission",
              "published": "2026-10-08",
              "url": "https://www.anthropic.com/news/anthropic-cyber-mission"
            }
          }
        ]
      },
      "english": {
        "intro": "本期从文学如何重释古典传统，以及一座威尔士小城如何重建牛仔裤制造业切入；练习对比、让步、因果与转折结构，并区分文化价值主张和企业经营事实。",
        "articles": [
          {
            "title": "Anne Carson’s Nobel-winning, genre-defying work bridges the gap between ancient Greek literature and modern life",
            "source": "The Conversation",
            "published": "2026-10-09",
            "url": "https://theconversation.com/anne-carsons-nobel-winning-genre-defying-work-bridges-the-gap-between-ancient-greek-literature-and-modern-life-294020",
            "readingTime": "约 6 分钟",
            "topic": "文化 / 古典文学的当代改写",
            "summary": "文章以诺贝尔文学奖得主 Anne Carson 为中心，提出她的作品通过翻译、改编与跨媒介创作，让古希腊文学进入当代经验。作者先比较 Christopher Nolan 与 Carson 如何重新讲述古典故事，再以 Carson 将海伦与 Marilyn Monroe 并置、改写《安提戈涅》为例，说明旧文本可以借新的文化视角重获现实意义。随后文章转向《萨福诗选》的残篇处理：Carson 用方括号和留白标示原文缺失，不把不确定之处补成完整叙事；这种选择引发评论者对译者是否应介入古典文本的分歧。结尾把 Carson 的作品概括为过去与现在之间的持续对话，强调其诗人语言感和古典学训练共同使旧文学焕发新意。",
            "reason": [
              "古典文化如何进入现代生活，连接文学、翻译与文化记忆，是适合讨论“传统是否需要改写”的文化主题。",
              "论述先提出跨时代改写的总观点，再举舞台作品与译本为例，继而引入反对意见，最后回到作品的总体价值。",
              "可练习主旨题、例证功能题、指代题，以及辨析作者如何呈现 Carson 与批评者的不同立场。",
              "genre-defying、overlay、fragmentary、elide 等词可用于分析文学形式、翻译取舍与文本证据。",
              "写作可借鉴“传统材料—当代重构—争议边界—文化意义”的展开方式，论证改编时兼顾创新与原作。"
            ],
            "vocabulary": [
              {
                "word": "defy",
                "phonetic": "/dɪˈfaɪ/",
                "part": "v.",
                "translation": "违背；不受……限制"
              },
              {
                "word": "evoke",
                "phonetic": "/ɪˈvoʊk/",
                "part": "v.",
                "translation": "唤起；使人想起"
              },
              {
                "word": "contemporary",
                "phonetic": "/kənˈtempəreri/",
                "part": "adj.",
                "translation": "当代的；现代的"
              },
              {
                "word": "overlay",
                "phonetic": "/ˌoʊvərˈleɪ/",
                "part": "v.",
                "translation": "叠加；将一种事物置于另一事物之上"
              },
              {
                "word": "fragmentary",
                "phonetic": "/ˈfræɡmənteri/",
                "part": "adj.",
                "translation": "残缺的；片段式的"
              },
              {
                "word": "elide",
                "phonetic": "/iˈlaɪd/",
                "part": "v.",
                "translation": "省略；删去"
              },
              {
                "word": "austerity",
                "phonetic": "/ɔːˈsterəti/",
                "part": "n.",
                "translation": "简朴；（表达方式的）克制"
              },
              {
                "word": "interposition",
                "phonetic": "/ˌɪntərpəˈzɪʃən/",
                "part": "n.",
                "translation": "介入；插入"
              },
              {
                "word": "distinctive",
                "phonetic": "/dɪˈstɪŋktɪv/",
                "part": "adj.",
                "translation": "独特的；有辨识度的"
              },
              {
                "word": "legacy",
                "phonetic": "/ˈleɡəsi/",
                "part": "n.",
                "translation": "遗产；流传下来的影响"
              }
            ],
            "sentences": [
              {
                "original": "Although Nolan and Carson differ in approach, medium and critical reception, both have sought to make works of ancient Greece new for a contemporary audience.",
                "analysis": [
                  "主干是 both have sought to make works ... new，both 指 Nolan 与 Carson；although 引导让步状语从句。",
                  "in approach, medium and critical reception 并列修饰 differ，概括两人的创作路径、媒介和评论反响差异。",
                  "make + 宾语 + 形容词补足语（make works ... new）表达“使作品焕然一新”，后接 for 短语说明受众。",
                  "让步关系先承认两者差异，再强调共同目标，构成“虽不同但有共性”的论证转折。",
                  "可借鉴 Although A and B differ in ..., both ... 来组织比较类议论文。"
                ],
                "translation": "尽管诺兰与卡森在创作方式、媒介和评论反响上各不相同，两人都试图让古希腊作品对当代读者焕发新意。"
              },
              {
                "original": "In it, Carson overlays Helen of Troy with Marilyn Monroe in order to explore the destructive power of beauty.",
                "analysis": [
                  "主句核心是 Carson overlays Helen of Troy with Marilyn Monroe；In it 回指上文提到的舞台作品。",
                  "overlay A with B 表示把 B 的形象叠加到 A 之上，具体说明改编采用的手法。",
                  "in order to 引出目的状语，说明这种人物并置服务于探讨 beauty 的破坏性力量。",
                  "destructive 修饰 power，of beauty 作后置介词短语限定力量来源，形成抽象议题表达。",
                  "可仿写 use/juxtapose A with B in order to explore ...，陈述作品手法与主题之间的关系。"
                ],
                "translation": "在这部作品中，卡森将特洛伊的海伦与玛丽莲·梦露叠置，以探讨美的破坏性力量。"
              },
              {
                "original": "Rather than eliding them, Carson ends up bringing attention to these absences – an utterly distinctive choice.",
                "analysis": [
                  "主句为 Carson ends up bringing attention to these absences；Rather than 引出与主句形成对照的动名词短语。",
                  "them 指代前文提到的残缺或模糊文本；these absences 把缺失本身作为关注对象。",
                  "end up doing 表示最终采取某种做法，带有结果意味；bringing attention to 是“使……受到关注”。",
                  "破折号后的 an utterly distinctive choice 是同位补充，对前面的处理方式作评价。",
                  "rather than doing 可用于写作中突出“没有采取常规做法，而选择……”的对比。"
                ],
                "translation": "卡森没有把这些残缺删去，反而最终让读者注意到它们——这是一个极具特色的选择。"
              }
            ]
          },
          {
            "title": "“Our town is making jeans again”: meet the firm reviving jobs and skills in Wales",
            "source": "The Guardian",
            "published": "2026-10-10",
            "url": "https://www.theguardian.com/business/2026/oct/10/hiut-denim-jeans-cardigan-wales-manufacturing",
            "readingTime": "约 6 分钟",
            "topic": "商业 / 地方制造业与技能传承",
            "summary": "报道考察威尔士 Cardigan 的 Hiut Denim 如何试图重建当地牛仔裤制造业。小镇曾有大型工厂，生产外迁后许多工作岗位消失；2011 年成立的 Hiut 则以小规模手工生产和重新培训工人为核心。文章用昔日每周数万条牛仔裤与如今每周约 120 条、约 20 名员工的反差，说明其并非复制大规模制造，而是以高价、工艺和长期维修服务支撑品牌。随后报道介绍疫情后的资金压力、家族接手、供应链挑战和扩张计划，并指出资深工人即将退休，企业只有有限时间培养新人。结尾呈现这项经营尝试的张力：地方就业与传统技能具有社会价值，但维持本地生产仍须面对成本、人才和市场规模问题。",
            "reason": [
              "地方产业、就业与手工技能的存续构成商业与社会交叉主题，可讨论全球化后制造业如何重建。",
              "文章以城镇制造史开篇，转入企业创立和生产方式，再讨论资金、供应链、接班与扩张，呈现机遇和约束。",
              "适合主旨题、数字对比题、人物引语作用题，以及判断企业叙事是否足以证明长期盈利能力。",
              "outsource、heyday、backlog、selvedge、ethos 等表达可用于产业迁移、产能和品牌价值讨论。",
              "写作可借鉴“产业衰退—小规模重建—商业模式—持续性挑战”的结构，并避免把个案成功直接推及整个行业。"
            ],
            "vocabulary": [
              {
                "word": "unlikely",
                "phonetic": "/ʌnˈlaɪkli/",
                "part": "adj.",
                "translation": "不大可能的；出人意料的"
              },
              {
                "word": "outsourcing",
                "phonetic": "/ˈaʊtsɔːrsɪŋ/",
                "part": "n.",
                "translation": "外包；将生产转移至外部"
              },
              {
                "word": "heyday",
                "phonetic": "/ˈheɪdeɪ/",
                "part": "n.",
                "translation": "全盛时期；鼎盛期"
              },
              {
                "word": "crank out",
                "phonetic": "/kræŋk aʊt/",
                "part": "phr.v.",
                "translation": "大量快速生产"
              },
              {
                "word": "backlog",
                "phonetic": "/ˈbæklɔːɡ/",
                "part": "n.",
                "translation": "积压的订单；待办事项"
              },
              {
                "word": "premium",
                "phonetic": "/ˈpriːmiəm/",
                "part": "adj.",
                "translation": "高端的；价格较高的"
              },
              {
                "word": "selvedge",
                "phonetic": "/ˈselvɪdʒ/",
                "part": "n.",
                "translation": "（织物的）布边；此处指赤耳丹宁布"
              },
              {
                "word": "logistical",
                "phonetic": "/ləˈdʒɪstɪkəl/",
                "part": "adj.",
                "translation": "物流方面的；后勤的"
              },
              {
                "word": "ethos",
                "phonetic": "/ˈiːθɑːs/",
                "part": "n.",
                "translation": "价值观；精神气质"
              },
              {
                "word": "stockist",
                "phonetic": "/ˈstɑːkɪst/",
                "part": "n.",
                "translation": "经销商；备货零售商"
              }
            ],
            "sentences": [
              {
                "original": "When jeans manufacturing in Wales was moved abroad at the start of the century, hundreds of local people lost their jobs and were forced to find work elsewhere.",
                "analysis": [
                  "主句核心是 hundreds of local people lost their jobs and were forced to find work；When 从句交代时间和背景。",
                  "manufacturing 是从句主语，was moved abroad 为被动结构，突出生产转移而非具体决策者。",
                  "and 连接 lost 与 were forced 两个并列谓语，呈现岗位流失及后续谋生压力。",
                  "elsewhere 与 abroad 构成空间对照：生产迁往海外，本地工人则不得不外出另找工作。",
                  "可借鉴 When ... was moved ..., ... were forced to ...，表达政策或产业变化造成的社会后果。"
                ],
                "translation": "本世纪初，威尔士的牛仔裤制造业迁往海外时，数百名当地人失去了工作，被迫到别处谋生。"
              },
              {
                "original": "Hiut employs 20 people, who make 120 pairs a week.",
                "analysis": [
                  "主句为 Hiut employs 20 people；who 引导非限定性定语从句，补充说明这些员工的生产工作。",
                  "20 people 与 120 pairs a week 把企业规模和产量具体化，数字用于呈现小规模经营。",
                  "一般现在时描述企业当前常态；a week 是频率时间状语，修饰 make。",
                  "非限定从句中的 who 指代 people，不能理解成限制“哪些员工”这一范围。",
                  "可借鉴“主体 + 规模数据，which/who + 补充产出”写法，将抽象商业模式落到可核实指标。"
                ],
                "translation": "Hiut 雇用 20 人，他们每周生产 120 条牛仔裤。"
              },
              {
                "original": "He also wants to broaden Hiut’s appeal, and as part of that has secured new stockists, including Liberty department store in London.",
                "analysis": [
                  "句子以 He 为主语，wants to broaden 与 has secured 是由 and 连接的两个谓语，分别表达目标与已采取行动。",
                  "as part of that 是插入的方式/关联状语，that 指拓宽品牌吸引力这一目标。",
                  "including 引出例子，说明 new stockists 的具体对象，而不是另起一个完整分句。",
                  "从“希望拓宽市场”到“取得新经销渠道”形成目的与行动之间的逻辑联系。",
                  "可仿写 aim to broaden ..., and as part of that have secured ...，说明商业策略如何落实。"
                ],
                "translation": "他还希望扩大 Hiut 的吸引力，并为此争取到新的经销商，其中包括伦敦的 Liberty 百货。"
              }
            ]
          }
        ]
      }
    },
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
    }
  ]
};
