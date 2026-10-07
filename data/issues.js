window.BRIEFING_DATA = {
  "updatedAt": "2026-10-07T10:17:11.593+08:00",
  "issues": [
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
    },
    {
      "date": "2026-10-03",
      "status": "ready",
      "ai": {
        "intro": "截至上海 10 月 3 日，先检索 10 月 2—3 日，符合条件的官方新变化不足三项，因此扩展到此前七天；免费资源按官方页面复核。",
        "updates": [
          {
            "event": "GitHub Copilot CLI 与应用公开预览 computer use（2026-10-01）",
            "summary": "GitHub 在 Copilot CLI 及 macOS、Windows 版 Copilot app 中开放 computer use 公测。Copilot 可读取应用内容与画面、点击控件、输入和编辑文本、滚动，并跨桌面应用执行流程；控制应用前会请求批准。",
            "howTo": "在 Copilot CLI 输入 `/computer on` 开启，用 `/computer show` 检查状态、`/computer off` 关闭；Copilot app 则进入 Settings > Computer Use，开启 Enable Computer Use。描述目标、涉及应用和约束，并逐项检查代理准备执行的操作。",
            "impact": "课程小组可尝试把网页资料整理进演示文稿，或在没有 API、命令行接口的图形软件中重复录入项目数据；先核对操作结果，不要交由代理处理未经核实的信息。macOS 需要授予 Accessibility 和 Screen Recording 权限。",
            "free": "官方只称 public preview，未说明价格、免费资格、所需订阅、开放地区或使用配额；组织管理员可关闭该功能。",
            "category": "AI 桌面自动化",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-01",
              "url": "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps"
            }
          },
          {
            "event": "Gemini Live 推出 Guided Vision 实时视觉辅助（2026-10-01）",
            "summary": "Google 在兼容 Android 设备的 Gemini Live 中推出 Guided Vision。用户分享摄像头后，可语音询问周围环境、物品或文字，Gemini 还能用语音提示调整取景；该功能面向盲人、低视力用户及需要视觉辅助的人群。",
            "howTo": "在 Gemini 手机应用的个人资料设置中开启 Use Guided Vision in Live，启动 Gemini Live 并分享摄像头；也可在 Android Settings > Accessibility > Vision assistance > Guided Vision 设置快捷方式，或从 TalkBack 菜单启动。",
            "impact": "可尝试听读包装标签或印刷材料、寻找桌面物品，并获取陌生室内空间的文字描述；生成式 AI 可能出错，官方明确说明它不是导航、避障或白手杖替代品。",
            "free": "官方称已面向兼容 Android 设备推出，但未说明价格、账号计划、开放地区、完整机型范围或使用配额。",
            "category": "AI 无障碍 / 实时视觉",
            "source": {
              "name": "Google Blog",
              "published": "2026-10-01",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/"
            }
          },
          {
            "event": "GitHub Copilot code review 支持 API 请求并调整审查力度（2026-10-02）",
            "summary": "Copilot code review 现在可通过 REST 和 GraphQL API 请求，并可为单次审查设置 effort；Default 的默认审查力度改为 Balanced。该功能已向 Copilot Pro、Pro+、Max、Business 和 Enterprise 计划开放。",
            "howTo": "在目标仓库的拉取请求流程中，通过受支持的 REST 或 GraphQL API 发起 Copilot review，并按需要为该次审查指定力度。个人用户可在头像 > Copilot settings > Copilot > Code review 查看或调整默认值；组织和仓库也可在各自 Copilot 设置中管理。",
            "impact": "学生团队可把自动审查接入课程仓库的 PR 工作流，减少等待人工初筛的时间；仍需自行阅读建议、运行测试并判断代码是否正确。",
            "free": "公告列出的可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise；未列出 Free 计划。地区、API 调用额度及其他限制官方未说明。",
            "category": "AI 编程 / 代码审查",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-02",
              "url": "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level"
            }
          }
        ],
        "deals": [
          {
            "event": "Azure for Students：$100 云额度及 Azure AI 学习资源",
            "summary": "Microsoft 为符合条件的在读大学生提供 Azure for Students：官方页面列出 $100 Azure credit、无需信用卡，并可在教育用途下访问 Azure 产品；页面还明确提到可接触 Azure OpenAI。",
            "howTo": "从 Microsoft Azure for Students 页面申请学生计划，先阅读 Azure OpenAI 或其他云服务的教育用途条件，再用额度做小型课程原型；部署前查看服务计费与免费额度，避免额度用尽后产生费用。",
            "impact": "适合在课程中试做文本问答、数据处理或云端 AI 原型；可先用额度验证工作流，而不是直接承担常规 API 账单。",
            "free": "官方列出全日制大学生资格、无需信用卡及 $100 额度；该额度可在 12 个月内用于大多数 Azure 产品。另有 20 多项常用服务的免费月额度，限新 Azure 客户、最长 12 个月，以及 65 多项始终免费的服务。国家/地区和申请截止日官方未说明。",
            "category": "学生教育福利 / 云端 AI",
            "source": {
              "name": "Microsoft Azure for Students",
              "published": "官方未说明",
              "url": "https://azure.microsoft.com/en-us/free/students/"
            }
          },
          {
            "event": "IBM Granite 3.3 2B Instruct Apache 2.0 开放权重",
            "summary": "IBM 官方模型卡开放 Granite 3.3 2B Instruct 权重，采用 Apache 2.0 许可；模型有 20 亿参数，支持中文等多种语言，可用于摘要、问答、信息抽取、RAG 和代码相关任务。",
            "howTo": "打开 IBM 官方 Hugging Face 模型卡，按其示例安装 PyTorch、Accelerate 和 Transformers，再用 `ibm-granite/granite-3.3-2b-instruct` 加载模型；先用短文本测试本机是否有足够的计算资源。",
            "impact": "可用于练习本地推理、RAG、文本分类或中英双语课程原型；下载开放权重不等于获得托管推理服务，运行仍需自备设备和算力。",
            "free": "模型权重可按 Apache 2.0 许可下载和使用；官方模型卡未说明托管推理额度、地区或账号要求，也未给出统一硬件成本。",
            "category": "可下载开放模型权重 / Apache 2.0",
            "source": {
              "name": "IBM Granite 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/ibm-granite/granite-3.3-2b-instruct"
            }
          },
          {
            "event": "Google Colab 免费 Jupyter 笔记本与计算资源",
            "summary": "Google Colab 是无需本地安装的托管 Jupyter Notebook 服务，官方 FAQ 确认可免费使用，并提供包括 GPU、TPU 在内的计算资源；免费资源不是保证无限供应。",
            "howTo": "打开 Colab，新建笔记本或从 Google Drive、GitHub 打开现有 `.ipynb`，运行 Python 单元格；开始前检查当前运行时可用资源，并及时保存笔记本。",
            "impact": "可用于课程 Python 作业、数据分析和小规模机器学习实验，不必先配置本地开发环境；长时间任务应保存结果，因为虚拟机闲置后会被删除。",
            "free": "官方确认服务免费，但资源不保证且不无限，使用限制会变化；地区、固定 GPU/TPU 时数和账号资格官方未说明。",
            "category": "免费云端计算 / 学习开发",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Claude Free 免费网页与应用访问",
            "summary": "Anthropic 的 Claude Free 计划可用于日常问题；免费计划的使用量按滚动五小时窗口重置，实际可用量随对话长度、模型和功能而变，并非固定消息条数。",
            "howTo": "打开 Claude 官网，选择免费计划并登录；可让它解释课程阅读材料、对论文提纲提出问题或生成练习题，再回到原文和课程资料核对答案。",
            "impact": "适合临时复习、梳理论点和练习提问；高复杂度对话会更快消耗使用量，重要作业仍要由学生核实事实与引文。",
            "free": "官方列出 Free 计划，按滚动五小时窗口重置；用量因对话、模型和功能而异，没有固定消息数，且可能另有每周或每月限制。具体地区、资格和额度官方未说明。",
            "category": "长期免费网页 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Row erupts over Cairo mural depicting Tutankhamun and Nefertiti with dark skin",
            "source": "The Guardian",
            "published": "2026-10-02",
            "url": "https://www.theguardian.com/global-development/2026/oct/02/row-erupts-over-cairo-mural-depicting-tutankhamun-and-nefertiti-with-dark-skin",
            "readingTime": "5 分钟",
            "topic": "文化 / 历史表征与人工智能",
            "summary": "文章从开罗一幅被涂掉的壁画切入：当地志愿者为重要来访制作城市壁画，用 ChatGPT 生成设计，却因图像中图坦卡蒙与娜芙蒂蒂的肤色引发争议，最终在社交媒体舆论升温后被要求重涂。报道交代创作方未咨询考古与艺术专家，也呈现埃及学者对古埃及族群多样性和相关历史主张的不同看法。后半部分把事件放进长期的古埃及身份争论，并引用 AI 研究者及艺术评论者提醒：模型生成内容反映网络上流传的信息，不应替代专业判断或创作者本身。",
            "reason": [
              "主题涉及文化遗产、历史叙事与身份认同，可用于文化传播、媒介影响和科技伦理类考题。",
              "结构由具体事件展开，依次说明争议成因、相关者回应，再回到长期争论及 AI 使用风险。",
              "可练习主旨归纳、观点辨析和证据判断：区分报道事实、受访者看法与作者组织的论述。",
              "词汇覆盖 depiction、controversy、oversight、complexion 等文化报道常见表达。",
              "写作可借鉴“案例—争议—专家意见—审慎结论”的展开方式，论证技术工具应受专业知识约束。"
            ],
            "vocabulary": [
              {
                "word": "depicting",
                "phonetic": "/dɪˈpɪktɪŋ/",
                "part": "v.",
                "translation": "描绘；刻画"
              },
              {
                "word": "commissioned",
                "phonetic": "/kəˈmɪʃənd/",
                "part": "v.",
                "translation": "委托创作；委任"
              },
              {
                "word": "controversy",
                "phonetic": "/ˈkɒntrəvɜːsi/",
                "part": "n.",
                "translation": "争议"
              },
              {
                "word": "oversight",
                "phonetic": "/ˈəʊvəsaɪt/",
                "part": "n.",
                "translation": "监督；审查"
              },
              {
                "word": "complexion",
                "phonetic": "/kəmˈplekʃən/",
                "part": "n.",
                "translation": "肤色；面色"
              },
              {
                "word": "reignited",
                "phonetic": "/ˌriːɪɡˈnaɪtɪd/",
                "part": "v.",
                "translation": "再次引发；重新点燃"
              },
              {
                "word": "diverse",
                "phonetic": "/daɪˈvɜːs/",
                "part": "adj.",
                "translation": "多样的"
              },
              {
                "word": "reflected",
                "phonetic": "/rɪˈflektɪd/",
                "part": "v.",
                "translation": "反映"
              },
              {
                "word": "factually accurate",
                "phonetic": "/ˈfæktʃuəli ˈækjərət/",
                "part": "adj. phr.",
                "translation": "符合事实的；准确的"
              },
              {
                "word": "substitute",
                "phonetic": "/ˈsʌbstɪtjuːt/",
                "part": "v.",
                "translation": "替代"
              }
            ],
            "sentences": [
              {
                "original": "The team used the AI programme ChatGPT to generate the designs, which volunteers then painted on to the wall.",
                "analysis": [
                  "主干为 The team used the AI programme ChatGPT，to generate the designs 是说明用途的不定式结构。",
                  "which 引导非限制性定语从句，指代前面的 designs；从句中 volunteers 是主语，painted 是谓语。",
                  "then 标示先后顺序：先由 AI 生成设计，再由志愿者把设计画到墙上。",
                  "句子把技术工具与人工执行并列呈现，并未说 AI 直接完成壁画。",
                  "可借鉴 use A to do B, which... 描述工具、用途及后续结果。"
                ],
                "translation": "团队使用 ChatGPT 生成设计，志愿者随后把这些设计画到墙上。"
              },
              {
                "original": "They were built by companies in the US and Europe, he said, and the content they generated could shape how those audiences saw themselves.",
                "analysis": [
                  "句子由 and 连接两个并列分句：They were built... 与 the content... could shape...。",
                  "第一分句用 were built 被动语态，by companies... 引出执行者；he said 是插入的消息来源。",
                  "第二分句中 they generated 是修饰 content 的定语从句，省略了关系代词 that。",
                  "how those audiences saw themselves 是宾语从句，作 shape 的宾语；could 表示可能影响。",
                  "可借鉴被动事实加并列影响的写法，讨论技术来源与社会后果。"
                ],
                "translation": "他说，这些工具由美国和欧洲的公司开发，而它们生成的内容可能影响这些受众如何看待自己。"
              },
              {
                "original": "Mostafa Eissa, an art critic, said AI should remain a tool, never a decision-maker in its own right.",
                "analysis": [
                  "主干为 Mostafa Eissa said，an art critic 是解释人物身份的同位语。",
                  "AI should remain a tool 是 said 后的宾语从句，should 表达主张而非既定事实。",
                  "never a decision-maker 与 a tool 构成省略式对照，补足语义为“而不应成为决策者”。",
                  "in its own right 强调“本身、独立地”，限定 decision-maker 的角色。",
                  "可借鉴 remain A, never B 简洁表达某工具应有的边界。"
                ],
                "translation": "艺术评论家 Mostafa Eissa 认为，AI 应当只是工具，而不应成为独立的决策者。"
              }
            ]
          },
          {
            "title": "The U.S. added only 29,000 jobs in September as job market lacks spark",
            "source": "NPR",
            "published": "2026-10-02",
            "url": "https://www.npr.org/2026/10/02/nx-s1-5989140/jobs-labor-wages-federal-reserve",
            "readingTime": "4 分钟",
            "topic": "经济 / 就业数据与实际工资",
            "summary": "NPR 根据美国劳工部 9 月就业报告指出，雇主仅新增 2.9 万个岗位，低于预期，且 7、8 月数据合计下修 6 万；失业率从 4.1% 升至 4.2%，但主要与劳动力人数增加有关，报告并未显示普遍裁员。文章随后转向工资：平均工资同比增长 3%，近期未能跟上物价上涨，削弱实际购买力。最后联系美联储抑制通胀的利率决策，解释疲弱就业数据为何降低再次加息的可能性，同时指出投资者仍预期年内至少再加息一次。",
            "reason": [
              "就业、通胀与利率是常见经济主题，适合练习从数据解释宏观趋势及其个人影响。",
              "行文先报就业数据，再解释失业率构成与工资变化，最后连接美联储政策和市场反应。",
              "可考查数字信息定位、因果推断、段落主旨，以及“就业疲软是否意味着普遍裁员”等细节判断。",
              "文章包含 labor force、revise down、keep pace with、erode 等经济新闻高频表达。",
              "写作可借鉴先呈现数据、再解释指标含义、最后说明政策后果的论证结构。"
            ],
            "vocabulary": [
              {
                "word": "forecasters",
                "phonetic": "/ˈfɔːkɑːstəz/",
                "part": "n.",
                "translation": "预测者；预测机构"
              },
              {
                "word": "revised down",
                "phonetic": "/rɪˈvaɪzd daʊn/",
                "part": "v. phr.",
                "translation": "向下修正；下调"
              },
              {
                "word": "turnover",
                "phonetic": "/ˈtɜːnˌəʊvə/",
                "part": "n.",
                "translation": "人员流动；周转"
              },
              {
                "word": "shed workers",
                "phonetic": "/ʃed ˈwɜːkəz/",
                "part": "v. phr.",
                "translation": "裁员；减少雇员"
              },
              {
                "word": "keep pace with",
                "phonetic": "/kiːp peɪs wɪð/",
                "part": "v. phr.",
                "translation": "跟上；与……同步"
              },
              {
                "word": "eroded",
                "phonetic": "/ɪˈrəʊdɪd/",
                "part": "v.",
                "translation": "逐渐削弱；侵蚀"
              },
              {
                "word": "benchmark",
                "phonetic": "/ˈbentʃmɑːk/",
                "part": "n.",
                "translation": "基准；基准指标"
              },
              {
                "word": "curb",
                "phonetic": "/kɜːb/",
                "part": "v.",
                "translation": "抑制；控制"
              },
              {
                "word": "lackluster",
                "phonetic": "/ˈlæklʌstə/",
                "part": "adj.",
                "translation": "乏力的；不景气的"
              },
              {
                "word": "inched higher",
                "phonetic": "/ɪntʃt ˈhaɪə/",
                "part": "v. phr.",
                "translation": "小幅上升"
              }
            ],
            "sentences": [
              {
                "original": "The U.S. job market showed signs of weakness in September as hiring slowed and the unemployment rate inched higher.",
                "analysis": [
                  "主干为 The U.S. job market showed signs，of weakness 说明迹象的具体内容。",
                  "in September 是时间状语，限定报告所描述的时期。",
                  "as 引导从句，hiring slowed 与 the unemployment rate inched higher 并列呈现两项变化。",
                  "as 可兼有时间和原因意味，此处把就业放缓与失业率微升作为市场走弱的证据。",
                  "可借鉴 show signs of... as... 用数据和并列现象概括趋势。"
                ],
                "translation": "9 月招聘放缓、失业率小幅上升，美国就业市场显现疲软迹象。"
              },
              {
                "original": "The September report doesn't show widespread job cuts, although financial services and government shed workers.",
                "analysis": [
                  "主句主干为 The report does not show job cuts，widespread 修饰 job cuts，限定“普遍裁员”。",
                  "although 引导让步状语从句，说明金融服务业和政府部门确有裁员。",
                  "主句否认的是普遍现象，从句补充局部行业情况，二者并不矛盾。",
                  "shed workers 是 shed 的及物用法，意为裁减员工。",
                  "可借鉴 not..., although... 避免把局部变化误写成整体趋势。"
                ],
                "translation": "9 月报告并未显示普遍裁员，尽管金融服务业和政府部门减少了员工。"
              },
              {
                "original": "Prices have been rising faster than paychecks in recent months, so workers' real buying power is being eroded.",
                "analysis": [
                  "前半句主干为 Prices have been rising，使用现在完成进行时强调近期持续上涨。",
                  "faster than paychecks 是比较结构，省略了重复的 rising，比较价格与工资增长速度。",
                  "so 连接原因与结果：价格涨得更快，购买力因此受损。",
                  "后半句用现在进行时被动 is being eroded，突出购买力正在受到侵蚀。",
                  "可借鉴 faster than... so... 解释生活成本变化带来的结果。"
                ],
                "translation": "近几个月物价涨幅快于工资，因此劳动者的实际购买力正在被削弱。"
              }
            ]
          }
        ]
      }
    },
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
    }
  ]
};
