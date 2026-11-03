window.BRIEFING_DATA = {
  "updatedAt": "2026-11-03T11:58:24+08:00",
  "issues": [
    {
      "date": "2026-11-03",
      "status": "ready",
      "ai": {
        "intro": "本期关注 GitHub Copilot Fusion 多模型编排转为正式可用、Microsoft Copilot 扩充财务技能，以及 Google 在轨 TPU 首次回传 AI 生成内容；免费资源新增 Copilot Free 与 EmbeddingGemma 2 开放权重。",
        "updates": [
          {
            "event": "GitHub Copilot Fusion 正式可用，自动编排多模型完成编码任务",
            "summary": "GitHub Copilot Fusion 从预览转为正式可用。用户不必为每一步手动挑选模型：Fusion 会按任务路由和协调模型，并提供 Standard、High、Max 三档工作强度；流程可能由单模型完成，也可能采用级联或交叉评审。",
            "howTo": "更新 VS Code、GitHub Copilot 应用、Copilot CLI 或 JetBrains 客户端，在模型选择器中选 Copilot Fusion，再选 Standard、High 或 Max；用课程代码的解释、测试草拟或调试任务试用，并逐项检查结果。",
            "impact": "小组项目可比较不同工作强度对解释代码、生成测试和检查方案的帮助；自动路由减少逐步换模型的操作，但代码改动仍需人工运行和审阅。",
            "free": "官方称 Fusion 可用于所有 Copilot 计划；实际使用按它调用的各模型标准费率计费，付费 Copilot 计划在有限时期内可享模型费用 30% 折扣。公告未说明折扣截止日、地区范围或统一免费调用额度。",
            "category": "GitHub Copilot / 多模型编排与编码",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/"
            }
          },
          {
            "event": "Microsoft Copilot 增加 25 项以上财务技能与合作伙伴插件",
            "summary": "Microsoft 扩展 Copilot 的财务工作流，新增 25 项以上财务技能和合作伙伴插件，覆盖会计、资本市场等场景。示例包括对账、起草会计分录、分析财务表现，以及把多份表格和材料整理成供团队复核的工作包。",
            "howTo": "在可用的 Copilot in Excel 中查找 Finance skills；若具备 Cowork 权限，可从插件目录选择 Finance 或 Capital Markets 插件。用课程练习数据试做对账或预算差异说明，并逐项核实输入、公式和来源。",
            "impact": "会计、金融和商科学生可观察 AI 如何把表格分析扩展为多步骤工作流，并练习复核会计分录、差异解释和投资分析；这类输出应作为草稿而非财务结论。",
            "free": "官方称 Copilot in Excel 财务技能和 Cowork 的 Finance、Capital Markets 插件已正式可用；部分会计能力仍在 Frontier。文章未说明免费价格、学生资格、地区或调用配额；第三方插件可能另需授权、订阅、认证或管理员启用。",
            "category": "Microsoft Copilot / 财务技能与插件",
            "source": {
              "name": "Microsoft Copilot Blog",
              "published": "2026-10-29",
              "url": "https://www.microsoft.com/en-us/copilot/blog/2026/10/29/microsoft-copilot-for-finance-purpose-built-for-the-way-finance-teams-work/"
            }
          },
          {
            "event": "Google Project Suncatcher 卫星首次回传由在轨 TPU 生成的 AI 内容",
            "summary": "Google 报告其 Project Suncatcher 原型卫星在轨运行 Google TPU，并首次从搭载的 Gemma 4 开放模型返回 AI 生成的诗句。团队称这是验证芯片能够在轨执行机器学习任务的早期节点，接下来将测试热应力和辐射影响。",
            "howTo": "阅读 Google Research 的试验记录，梳理提示词上行、卫星生成和地面站接收的步骤；课堂报告可把这次原型测试与公告所述后续热应力、辐射测试分开讨论。公告未提供可供公众操作的卫星试用界面。",
            "impact": "计算机、航天或能源课程可据此讨论在轨 AI 计算的验证目标与工程约束，同时区分一次原型演示与可规模化的数据中心服务。",
            "free": "这是研究原型的进展公告，不是面向用户的公开产品说明；公告未说明公众试用入口、价格、账号资格、地区或配额。",
            "category": "Google Research / 空间 AI 计算研究",
            "source": {
              "name": "Google Research 官方博客",
              "published": "2026-10-30",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 当前计划页列出每月 0 美元的 Copilot Free，无需信用卡，并支持常见 IDE、GitHub 和命令行；免费计划还包含有限的聊天与 Agent 使用。",
            "howTo": "打开 GitHub Copilot 官方计划页选择 Free，按页面指引在 VS Code 等支持的 IDE 启用 Copilot；可用代码补全起草课程项目函数，再通过测试确认行为。",
            "impact": "适合学生在小型课程项目中试用行内补全、理解代码上下文或快速写出测试草稿；聊天和 Agent 用量有限，超出后应改为手动完成或查阅文档。",
            "free": "官方标价 0 美元且无需信用卡；每月 2,000 次代码补全，聊天与 Agent 使用受限但具体额度未说明。地区可用范围和账号资格的额外条件官方未说明。",
            "category": "免费编程助手 / IDE 与代码补全",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "EmbeddingGemma 2 开放权重：在本地检索文本、图像、音频和视频",
            "summary": "Google DeepMind 的 EmbeddingGemma 2 模型卡提供 740M 参数的多模态嵌入模型，可将文本、代码、图像、视频和音频映射到共同向量空间，用于语义检索、相似度、分类和聚类。",
            "howTo": "从官方 Hugging Face 模型卡下载 google/embeddinggemma-2，按 Quick Start 安装 sentence-transformers 与 transformers；先给课程笔记和查询文本编码，再用相似度结果测试语义检索。",
            "impact": "可用于建立课程阅读材料或本地多媒体资料的语义搜索原型；它生成向量而不是回答问题，适合练习检索系统、分类和多模态信息组织。",
            "free": "模型权重可从官方 Hugging Face 页面获取，标注 Apache 2.0 许可；本地运行仍需自备硬件。托管推理额度、地区和账号要求官方未说明。",
            "category": "开放模型权重 / 多模态语义检索",
            "source": {
              "name": "Google DeepMind 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/google/embeddinggemma-2"
            }
          },
          {
            "event": "Claude Free：网页、桌面和手机上的免费学习助手",
            "summary": "Claude 官方定价页列出每月 0 美元的 Free 方案，可在网页、桌面和移动端聊天，并提供网页搜索、文件创建、代码运行、记忆、连接工具和 Artifacts；Claude Design、Slides、Docs 也列在 Free 方案中。",
            "howTo": "打开 Claude 网页或官方应用，选择 Free；可让它把一段非敏感课程材料整理成提纲、制作词汇卡或生成可编辑文档，再回到原文核对。",
            "impact": "适合做低频阅读整理、概念解释和可编辑学习材料；使用量会因模型、对话长度和文件大小变化，不适合作为稳定的大批量接口。",
            "free": "官方标价每月 0 美元；使用量每 5 小时及每周受限，实际额度取决于模型、对话长度和文件大小。具体消息数、地区和额外账号条件官方未说明。",
            "category": "免费网页与应用 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "通过 GitHub Education 验证可领取学生开发者权益",
            "summary": "GitHub 为符合条件并通过验证的学生提供免费 GitHub Pro，包括无限仓库、每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储，并可访问 Student Developer Pack。",
            "howTo": "在 GitHub Education 学生页面点击加入并提交学校邮箱和/或带日期的官方在读证明；通过验证后启用 Pro，再查看 Student Developer Pack 当前列出的工具权益。",
            "impact": "适合私有课程项目、云端开发环境和自动化测试；小组可用仓库协作、Codespaces 与 Actions 完成代码实践，而无需先搭建本地环境。",
            "free": "官方资格为年满 13 岁且就读于可授予学位或文凭的课程，需学校邮箱和/或官方在读证明；页面列出每月 3,000 Actions 分钟、180 Codespaces 小时、2 GB Packages 与 20 GB Codespaces 存储。地区和权益期限官方未说明。",
            "category": "学生教育权益 / 编程与云端开发",
            "source": {
              "name": "GitHub Education 官方学生页面",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Gemini API 免费层：部分模型提供免费输入与输出 token",
            "summary": "Google Gemini API 定价页仍列有免费层，可在 Google AI Studio 使用部分模型，输入和输出 token 免费；免费层内容会用于改进 Google 产品。",
            "howTo": "在 Google AI Studio 查看当前可选模型，并先到官方定价页确认模型标注为 Free；用少量非敏感课程文本建立摘要或词汇卡原型，避免提交隐私材料。",
            "impact": "适合练习模型 API 调用、快速验证学习工具想法或做低流量课程原型；免费模型范围有限，生产用途需重新核对速率和收费。",
            "free": "官方列出部分模型的免费输入与输出 token，但没有在此页给出统一固定配额；免费层内容可用于改进 Google 产品。具体模型额度、地区、账号资格和期限官方未说明。",
            "category": "免费 API 层 / 学习原型开发",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Could virtual reality speed up learning?",
            "source": "NPR",
            "published": "2026-11-02",
            "url": "https://www.npr.org/2026/11/02/nx-s1-6023397/body-learning-virtual-reality-vr",
            "readingTime": "约 3 分钟（估算）",
            "topic": "教育与科技 / 身体动作、虚拟现实与学习",
            "summary": "NPR 报道佛罗里达大西洋大学与布朗大学的一项实验，研究身体动作是否影响复杂学习。参与者戴上 VR 设备，在游戏中把不同条纹图案分到不同类别；一组按按钮作答，另一组做更大的动作，例如挥动类似光剑的控制器或击打反应装置。研究者报告，大幅动作组学得快得多，受访研究者称速度约为按钮组的 4 至 6 倍。文章由具体实验设计推进到结果，再回到动作可能如何帮助某些学习任务；它呈现的是实验室中的特定分类任务，不足以单独证明所有课堂学习都会因此加速。",
            "reason": [
              "教育技术与学习机制是常见考试主题，文章把 VR 体验与认知学习问题联系起来。",
              "论述按研究问题、实验分组、结果和解释展开，适合练习辨认研究设计与作者结论。",
              "可考查实验组对照、数字结果的指代，以及标题中 speed up 的范围是否被正文支持。",
              "categorize、participant、outcome 等词可迁移到教育、心理与实验研究语境。",
              "写作可借鉴“提出问题—说明实验—报告发现—限定适用范围”的证据型结构。"
            ],
            "vocabulary": [
              {
                "word": "categorize",
                "phonetic": "/ˈkætəɡəraɪz/",
                "part": "v.",
                "translation": "分类；归类"
              },
              {
                "word": "stripe",
                "phonetic": "/straɪp/",
                "part": "n.",
                "translation": "条纹"
              },
              {
                "word": "participant",
                "phonetic": "/pɑːrˈtɪsɪpənt/",
                "part": "n.",
                "translation": "参与者"
              },
              {
                "word": "motion",
                "phonetic": "/ˈmoʊʃən/",
                "part": "n.",
                "translation": "动作；运动"
              },
              {
                "word": "dramatically",
                "phonetic": "/drəˈmætɪkli/",
                "part": "adv.",
                "translation": "显著地；大幅度地"
              },
              {
                "word": "complex",
                "phonetic": "/kəmˈpleks/",
                "part": "adj.",
                "translation": "复杂的"
              },
              {
                "word": "outcome",
                "phonetic": "/ˈaʊtkʌm/",
                "part": "n.",
                "translation": "结果；后果"
              },
              {
                "word": "response box",
                "phonetic": "/rɪˈspɑːns bɑːks/",
                "part": "n.",
                "translation": "反应装置；应答盒"
              },
              {
                "word": "laboratory",
                "phonetic": "/ˈlæbrətɔːri/",
                "part": "n.",
                "translation": "实验室"
              }
            ],
            "sentences": [
              {
                "original": "movement dramatically helps with certain kinds of complex learning.",
                "analysis": [
                  "该片段位于 found that 引出的宾语从句中；从句主干是 movement helps with learning。",
                  "movement 作主语，helps 为谓语，dramatically 修饰 helps，说明程度而非动作方式。",
                  "certain kinds of 与 complex 分别限定 learning 的范围和性质，避免把发现泛化为所有学习。",
                  "helps with 是“有助于……”的搭配，可用来谨慎表达某因素对特定任务的作用。"
                ],
                "translation": "动作显著有助于某些类型的复杂学习。"
              },
              {
                "original": "participants learned how to categorize the stripes into one bucket or another.",
                "analysis": [
                  "主干为 participants learned；原句前面的 As the game went along 提供游戏进行时的时间背景。",
                  "how to categorize 是 learned 的内容，属于“疑问词 + 不定式”结构。",
                  "the stripes 是 categorize 的对象，into one bucket or another 表示分入两个备选类别。",
                  "“learn how to do”可说明学习者掌握的操作步骤，适合描述实验任务或技能训练。"
                ],
                "translation": "参与者学会了如何把这些条纹分到其中一个类别。"
              },
              {
                "original": "The difference in learning outcomes was dramatic.",
                "analysis": [
                  "句子主干为 The difference was dramatic，主语中心词是 difference，系动词 was 连接表语 dramatic。",
                  "in learning outcomes 是介词短语，限定差异体现在哪个方面。",
                  "这句承接按钮组与大幅动作组的对照，dramatic 是对实验结果的概括性评价。",
                  "“The difference in X was Y”可用于先概括比较结果，再在后文补充具体数据。"
                ],
                "translation": "学习结果之间的差异非常显著。"
              }
            ]
          },
          {
            "title": "Sinkholes, scarred land and scapegoats: the scourge of illegal gold mining in Johannesburg",
            "source": "The Guardian",
            "published": "2026-10-30",
            "url": "https://www.theguardian.com/business/2026/oct/30/sinkholes-scarred-land-scapegoats-illegal-gold-mining-johannesburg",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境与经济 / 南非非法采矿、沉陷与社区生计",
            "summary": "文章以约翰内斯堡西部一处动物救助组织缺水的经历开篇：淘金者使用场地水源处理矿砂，突显废弃矿区问题如何影响日常生活。报道接着对照警方公布的逮捕行动与研究者对非法采矿规模、黄金走私的估计，并回溯金价、失业、贫困、腐败及矿企未封闭旧矿井等驱动因素。随后文章把焦点转向地面塌陷，指出地方政客常把责任归于非法矿工，但受访专家强调，正式工业采矿长期抽排地下水也是重要背景，个别非法采掘可能导致局部结构坍塌，却不能被当成所有沉陷的起因。文章还呈现矿区暴力、被剥削劳工和依赖采矿收入的社区，结尾借一位社区组织者的经历说明地下采矿如何成为缺少合法就业机会者的生计选择。",
            "reason": [
              "环境治理与就业、生计交织，是适合研究生英语阅读的复合型社会议题。",
              "文章从个体缺水场景引出规模数据，再交代历史背景、地质解释和社区经济，层层扩展论点。",
              "可练习主旨题、事实与估算的辨析、专家引语作用题，以及识别“替罪羊”这一反向论证。",
              "scourge、derelict、porous、scapegoat 等词汇可迁移到城市治理、环境风险和责任归因话题。",
              "写作可借鉴用具体案例引入结构性成因，并呈现相互竞争解释、避免单因归责的论证方式。"
            ],
            "vocabulary": [
              {
                "word": "soar",
                "phonetic": "/sɔːr/",
                "part": "v.",
                "translation": "急剧上升；飙升"
              },
              {
                "word": "abandoned",
                "phonetic": "/əˈbændənd/",
                "part": "adj.",
                "translation": "废弃的；被遗弃的"
              },
              {
                "word": "illegal mining",
                "phonetic": "/ɪˈliːɡəl ˈmaɪnɪŋ/",
                "part": "n.",
                "translation": "非法采矿"
              },
              {
                "word": "derelict",
                "phonetic": "/ˈderəlɪkt/",
                "part": "adj.",
                "translation": "荒废的；被弃置的"
              },
              {
                "word": "rehabilitate",
                "phonetic": "/ˌriːhəˈbɪlɪteɪt/",
                "part": "v.",
                "translation": "修复；恢复"
              },
              {
                "word": "porous",
                "phonetic": "/ˈpɔːrəs/",
                "part": "adj.",
                "translation": "多孔的；可渗透的"
              },
              {
                "word": "culprit",
                "phonetic": "/ˈkʌlprɪt/",
                "part": "n.",
                "translation": "肇事者；根源"
              },
              {
                "word": "scapegoat",
                "phonetic": "/ˈskeɪpɡoʊt/",
                "part": "v.",
                "translation": "把……当替罪羊；归咎于"
              },
              {
                "word": "punctuated by",
                "phonetic": "/ˈpʌŋktʃueɪtɪd baɪ/",
                "part": "phr.",
                "translation": "遍布着；点缀着"
              }
            ],
            "sentences": [
              {
                "original": "so too has activity in the abandoned mine shafts that mark the area.",
                "analysis": [
                  "这是原句 “as the price of gold has soared, so too has activity...” 的后半部分，意为活动也随之增加。",
                  "so too 引出附加的相似变化；助动词 has 置于主语 activity 之前，构成倒装。",
                  "in the abandoned mine shafts 是地点状语，that mark the area 是修饰 mine shafts 的定语从句。",
                  "“as X changes, so too does Y”可用来并列描述两个相伴变化，语气比简单重复更凝练。"
                ],
                "translation": "废弃矿井中的采矿活动也随之增加。"
              },
              {
                "original": "researchers put the number of illegal miners in the tens of thousands.",
                "analysis": [
                  "主干是 researchers put the number；主语明确标出估算来源，而不是把数字写成官方普查结果。",
                  "put 在此表示估计，the number of illegal miners 是估算对象，in the tens of thousands 补充数量范围。",
                  "原句用 However 与前文警方行动形成对照，强调执法数字与研究者对总体规模的判断不同。",
                  "“put the number at/in...”可用于转述某一机构或研究者的估算，写作时应保留归属来源。"
                ],
                "translation": "研究者估计非法矿工人数达数万人。"
              },
              {
                "original": "experts say zama zamas are being scapegoated.",
                "analysis": [
                  "原句以 when it comes to sinkholes 限定讨论范围，再由主句 experts say 引出专家判断。",
                  "say 后接省略 that 的宾语从句；从句主语 zama zamas 与谓语 are being scapegoated 构成被动关系。",
                  "现在进行时被动语态突出持续发生的归责过程，而不是断言所有非法采矿都无害。",
                  "“专家认为某群体正被归咎”形成对前文政治指责的反论点，是文章辨析因果归责的关键。"
                ],
                "translation": "专家认为，非法矿工正在被当作替罪羊。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-02",
      "status": "ready",
      "ai": {
        "intro": "本期关注 GitHub Agentic Workflows 正式开放，以及 Gemini 两项新模型的受限测试；免费资源包括 Claude、Gemini API、学生开发者权益和 Qwen 开放权重。",
        "updates": [
          {
            "event": "GitHub Agentic Workflows 面向所有 GitHub 计划正式可用",
            "summary": "GitHub Agentic Workflows 从公开预览转为正式可用。用户可用 Markdown 自然语言文件定义自动化，再由工具编译成 Actions YAML；适用任务包括 issue 分类、CI 失败分析、文档更新和测试编写。",
            "howTo": "按官方 quickstart 安装 gh-aw CLI 扩展，在课程仓库添加一个 Markdown workflow（例如整理 issue 或起草测试），触发 GitHub Actions 后逐项检查输出，再决定是否合并。",
            "impact": "小组课程项目可把重复的 issue 整理、构建失败摘要和文档维护交给工作流处理，把时间留给调试与复核；生成的改动仍应由学生审阅。",
            "free": "GitHub 称该功能已在 GitHub Free、Team 和 Enterprise 上正式开放；若以默认 GitHub Copilot CLI 引擎运行，需要 Copilot 许可。其他引擎的费用、具体额度和地区限制官方未说明。",
            "category": "GitHub / Agentic Workflows",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/"
            }
          },
          {
            "event": "Gemini 4 Carbon 发布，先面向网络防御者受限开放",
            "summary": "Google 发布 Gemini 4 Carbon，称其面向更长程的编程与 agent 任务，并加强网络防御相关能力。目前先向一部分网络防御者开放，再逐步扩展到受信任伙伴；尚未向普通用户开放。",
            "howTo": "普通学生目前无法直接试用；符合条件的网络防御者可查看 Fairwind Program 的参与信息。其他用户可等待 Google 后续通过产品渠道逐步开放。",
            "impact": "学习软件开发或网络防御的学生可关注其受限测试与价格，判断未来是否适合防御性代码审查课程；当前不能把它当作可直接使用的公开工具。",
            "free": "Google 公布的 introductory API 价格为每百万输入 token 2 美元、每百万输出 token 10 美元；当前先向部分网络防御者和受信任伙伴开放，普通用户尚不能使用。学生资格、免费层、公开开放日期、配额和完整地区条件官方未说明。",
            "category": "Google Gemini / 模型发布与受限测试",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-28",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
            }
          },
          {
            "event": "Google DeepMind 发布 Genie 4 实时交互式世界模型研究预览",
            "summary": "Genie 4 可按自然语言生成并实时操控模拟场景，例如移动镜头、改变天气或加入角色，同时生成环境音、音乐和互动对白。Google 称目前仅向一小组受信任测试者开放。",
            "howTo": "现在没有面向普通学生的公开试用入口；受邀测试者可通过测试渠道体验，其他人可先从官方公告链接查看演示，等待其后续进入 Google AI Ultra、Gemini API 或 AI Studio。",
            "impact": "动画、游戏或新闻传播课程可留意它对场景原型和互动叙事的用途；现阶段学生主要能分析官方演示，不能假设自己已有模型访问权。",
            "free": "目前只有少量受信任测试者可用；公告称未来将面向 Google AI Ultra 订阅者及 API、AI Studio 的早期合作伙伴开放。订阅价格、免费额度、普通用户资格、地区和具体开放日官方未说明。",
            "category": "Google DeepMind / 交互式模拟",
            "source": {
              "name": "Google DeepMind 官方博客",
              "published": "2026-10-27",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-genie-4/"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free 免费使用网页、桌面和移动端学习工具",
            "summary": "Claude 定价页列出每月 0 美元的 Free 方案，可在网页、桌面和手机上聊天，并使用网页搜索、文件创建、代码运行和 Artifacts。",
            "howTo": "打开 Claude 网页版或应用，选择 Free 方案；可让它解释课程代码、整理阅读笔记或把提纲生成文件，再核对引用和结果。",
            "impact": "适合把阅读材料转成复习提纲、用自然语言理解代码，或制作可继续修改的学习文档；免费使用量有限，不适合作为稳定的大批量处理接口。",
            "free": "官方标价 0 美元；使用量每 5 小时及每周受限，实际消耗取决于模型、对话长度和文件大小。具体消息数、地区和账号条件官方未说明。",
            "category": "免费网页与应用 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "通过 GitHub Education 认证可领取学生开发者权益",
            "summary": "GitHub 为认证学生提供免费 GitHub Pro，包括无限仓库、每月 3,000 分钟 Actions、180 小时 Codespaces，以及 Student Developer Pack 中的开发工具和合作伙伴权益。",
            "howTo": "在 GitHub Education 学生页面点击加入并提交学校邮箱或带日期的在读证明；通过认证后启用 Pro，再查看 Student Developer Pack 的具体权益。",
            "impact": "可用于私有课程项目、云端编程环境和自动化测试；适合没有本地开发环境或需要多人协作的学生团队。",
            "free": "官方资格为年满 13 岁且就读于可授予学位或文凭的课程，并需学校邮箱和/或官方在读证明。页面标出每月 3,000 Actions 分钟、180 Codespaces 小时、2 GB Packages 与 20 GB Codespaces 存储；地区和权益期限官方未说明。",
            "category": "学生教育权益 / 编程与云端开发",
            "source": {
              "name": "GitHub Education 官方学生页面",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Qwen3-8B 开放权重可下载并按 Apache 2.0 许可使用",
            "summary": "Qwen 官方模型卡提供 Qwen3-8B 权重、Transformers 加载示例和本地部署说明；模型约 8.2B 参数，支持思考与非思考模式。",
            "howTo": "打开 Qwen/Qwen3-8B 模型卡下载权重，按卡片的 Transformers 示例加载 tokenizer 与模型，再用一段中英互译或代码解释任务做小规模测试。",
            "impact": "适合在具备兼容算力的设备上练习模型部署、比较中英输出或搭建课程原型；本地运行所需硬件因环境而异，模型卡没有给出统一配置。",
            "free": "官方 Hugging Face 模型资料标注 Apache 2.0 许可且模型公开可取；这是权重许可，不等于托管推理或硬件免费。账号要求、地区、调用额度和使用期限官方未说明。",
            "category": "开放模型权重 / 本地学习与实验",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-8B"
            }
          },
          {
            "event": "Gemini API 为部分模型提供免费输入与输出 token",
            "summary": "Google Gemini API 定价页列出免费层：部分模型的输入和输出 token 不收费，并可使用 Google AI Studio；免费层仅开放特定模型。",
            "howTo": "在 Google AI Studio 创建 API key，先从官方定价页确认某个模型标有 Free，再用少量非敏感课程文本测试简单的摘要或词汇卡片原型。",
            "impact": "适合学生练习调用模型 API、制作小型复习工具或验证课程项目想法；免费层生成内容可能用于改进 Google 产品，不要提交敏感资料。",
            "free": "免费层仅适用于部分模型，定价页没有列出统一固定调用配额；具体限制随模型而异，应查看官方 rate limits。免费层内容可用于改进 Google 产品；账号与地区条件未在此定价页说明。",
            "category": "免费 API 层 / 原型开发",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Manga Are Black, White and Read All Over. Treasures of the Globally Popular Japanese Comic Book Medium Are on View in New York",
            "source": "Smithsonian Magazine",
            "published": "2026-10-30",
            "url": "https://www.smithsonianmag.com/smart-news/manga-are-black-white-and-read-all-over-treasures-of-the-globally-popular-japanese-comic-book-medium-are-on-view-in-new-york-180989788/",
            "readingTime": "约 5 分钟（估算）",
            "topic": "文化 / 漫画艺术与跨文化传播",
            "summary": "文章以布鲁克林博物馆的 “Art of Manga” 展览为切入点，说明漫画已从美国读者曾经陌生的媒介，发展为具有广泛影响的日本视觉艺术。报道先简要介绍漫画通常由单一创作者绘制、以黑白呈现并从右向左阅读，再借展览中 10 个展厅、600 多幅原作和多位漫画家的作品，展示其风格、历史与创作过程。策展人引语指出，原稿让观众看到漫画如何构造人物与世界；文章最后把漫画置于跨文化传播和博物馆收藏的讨论中，主张这种视觉叙事值得获得与文字艺术相当的文化空间。",
            "reason": [
              "文化传播与艺术表达是常见阅读主题，文章讨论日本漫画如何进入美国主流展览空间。",
              "结构由媒介定义与流行变化推进到展览细节，再用策展人观点解释原作的价值。",
              "可练习主旨题、细节题和例证作用题，尤其要区分展览事实与受访者评价。",
              "medium、influential、cross-cultural 等词可迁移到艺术、出版与文化交流话题。",
              "写作可借鉴“先交代媒介背景—呈现具体展品—讨论文化意义”的论证路径。"
            ],
            "vocabulary": [
              {
                "word": "medium",
                "phonetic": "/ˈmiːdiəm/",
                "part": "n.",
                "translation": "媒介；艺术形式"
              },
              {
                "word": "graphic novel",
                "phonetic": "/ˈɡræfɪk ˌnɑːvəl/",
                "part": "n.",
                "translation": "图像小说"
              },
              {
                "word": "mangaka",
                "phonetic": "/ˌmæŋˈɡɑːkə/",
                "part": "n.",
                "translation": "日本漫画创作者"
              },
              {
                "word": "boom",
                "phonetic": "/buːm/",
                "part": "v.",
                "translation": "迅速增长；繁荣"
              },
              {
                "word": "centerpiece",
                "phonetic": "/ˈsentərpiːs/",
                "part": "n.",
                "translation": "核心部分；中心展品"
              },
              {
                "word": "evolution",
                "phonetic": "/ˌevəˈluːʃən/",
                "part": "n.",
                "translation": "演变；发展"
              },
              {
                "word": "relatable",
                "phonetic": "/rɪˈleɪtəbəl/",
                "part": "adj.",
                "translation": "能引起共鸣的"
              },
              {
                "word": "cross-cultural",
                "phonetic": "/ˌkrɔːs ˈkʌltʃərəl/",
                "part": "adj.",
                "translation": "跨文化的"
              },
              {
                "word": "influential",
                "phonetic": "/ˌɪnfluˈɛnʃəl/",
                "part": "adj.",
                "translation": "有影响力的"
              }
            ],
            "sentences": [
              {
                "original": "Manga are Japanese comic books and graphic novels.",
                "analysis": [
                  "主干为 Manga are comic books and graphic novels，主语 Manga 由系动词 are 连接两个并列表语。",
                  "Japanese 作前置定语，说明漫画的来源属性；comic books 与 graphic novels 是并列类别。",
                  "句子用简短定义为后文的艺术媒介讨论建立共同背景。",
                  "可借鉴 X is/are A and B 的结构并列概括一种文化产品的形态。"
                ],
                "translation": "漫画是日本的漫画书和图像小说。"
              },
              {
                "original": "They are usually printed in black and white and read right-to-left.",
                "analysis": [
                  "主语 They 指代前句的 manga，后接两个并列的被动谓语 are printed 与 (are) read。",
                  "usually 修饰两个动作，表示常见特征而非绝对规则。",
                  "in black and white 描述印刷形式，right-to-left 说明阅读方向。",
                  "可借鉴 be printed in X and read Y 的并列结构，压缩介绍媒介特征。"
                ],
                "translation": "它们通常以黑白印刷，并按从右向左的顺序阅读。"
              },
              {
                "original": "Manga’s popularity is booming in the United States.",
                "analysis": [
                  "句子主干为 Manga’s popularity is booming，主语中心词是 popularity，谓语为现在进行时。",
                  "Manga’s 是名词所有格，限定 popularity 的对象。",
                  "in the United States 是地点状语，限定增长发生的范围。",
                  "现在进行时突出正在发生的趋势；可借鉴 X’s popularity is booming in Y 表达某文化现象走红。"
                ],
                "translation": "漫画在美国的人气正在迅速上升。"
              }
            ]
          },
          {
            "title": "Parents, let your kids eat as much candy as they want – less restriction could help reduce the urge to overeat",
            "source": "The Conversation",
            "published": "2026-11-01",
            "url": "https://theconversation.com/parents-let-your-kids-eat-as-much-candy-as-they-want-less-restriction-could-help-reduce-the-urge-to-overeat-294113",
            "readingTime": "约 5 分钟（估算）",
            "topic": "健康与社会 / 儿童饮食、家庭养育",
            "summary": "作者以家长如何处理孩子的糖果为问题，指出把食物划分成“好”与“坏”可能让进食带上道德评判。她援引相关研究，解释显性的食物限制可能让孩子更关注被禁止的零食，进而更难留意饥饿和饱腹信号；文章同时区分孩子能察觉的限制与家长通过不购买来实现的隐性限制。随后，作者介绍直觉式进食和“喂养责任划分”：家长决定何时提供什么食物，孩子决定是否吃以及吃多少。结尾给出菜单计划、避免评论孩子吃了什么、成人反思自身习惯等建议，主张以中性语言和适度自主权培养更平衡的饮食关系。",
            "reason": [
              "健康、家庭教育与儿童自主是社会类阅读常见主题，材料也适合辨析建议与证据。",
              "文章从家长的日常难题切入，依次解释限制的潜在影响、介绍方法框架并给出实践建议。",
              "可练习主旨题、指代题、因果推断题，以及区分作者经验和研究性表述。",
              "restriction、preoccupied、autonomy 等词可用于健康行为和教育方式的讨论。",
              "写作可借鉴“界定问题—解释机制—提供可执行做法”的结构，并注意用 may 等措辞限定结论。"
            ],
            "vocabulary": [
              {
                "word": "restriction",
                "phonetic": "/rɪˈstrɪkʃən/",
                "part": "n.",
                "translation": "限制；约束"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɑːnəmi/",
                "part": "n.",
                "translation": "自主权"
              },
              {
                "word": "preoccupied",
                "phonetic": "/priˈɑːkjupaɪd/",
                "part": "adj.",
                "translation": "全神贯注的；心思被占据的"
              },
              {
                "word": "overt",
                "phonetic": "/oʊˈvɜːrt/",
                "part": "adj.",
                "translation": "公开的；明显的"
              },
              {
                "word": "covert",
                "phonetic": "/ˈkoʊvɜːrt/",
                "part": "adj.",
                "translation": "隐蔽的；不公开的"
              },
              {
                "word": "cue",
                "phonetic": "/kjuː/",
                "part": "n.",
                "translation": "信号；提示"
              },
              {
                "word": "intuitive",
                "phonetic": "/ɪnˈtuːɪtɪv/",
                "part": "adj.",
                "translation": "直觉的；凭直觉的"
              },
              {
                "word": "savor",
                "phonetic": "/ˈseɪvər/",
                "part": "v.",
                "translation": "细细品味；享受"
              },
              {
                "word": "judgment",
                "phonetic": "/ˈdʒʌdʒmənt/",
                "part": "n.",
                "translation": "评判；判断"
              },
              {
                "word": "nourish",
                "phonetic": "/ˈnɜːrɪʃ/",
                "part": "v.",
                "translation": "滋养；为……提供营养"
              }
            ],
            "sentences": [
              {
                "original": "The idea of food restriction often sounds punishing.",
                "analysis": [
                  "主干是 The idea sounds punishing，主语中心词 idea，系动词 sounds，表语 punishing。",
                  "of food restriction 是介词短语，后置修饰 idea，指出讨论对象。",
                  "often 限定判断频率，避免把感受说成绝对事实。",
                  "可借鉴 the idea of X sounds Y 表达某种做法给人的初步印象。"
                ],
                "translation": "限制食物这一想法听起来往往像是在惩罚孩子。"
              },
              {
                "original": "But for kids, restricting certain foods may lead them to become preoccupied with those foods.",
                "analysis": [
                  "主干为 restricting certain foods may lead them to become preoccupied，动名词短语作主语。",
                  "for kids 是视角状语，说明这一影响发生在孩子身上；But 与前文形成转折。",
                  "lead + 宾语 + to do 表示“导致某人……”，其中 them 指 kids。",
                  "may 表示可能性而非必然结果；with those foods 补足 preoccupied 的搭配。",
                  "可借鉴 restricting X may lead someone to do Y 表达限制可能带来的后果。"
                ],
                "translation": "但是，对孩子而言，限制某些食物可能会让他们总想着这些食物。"
              },
              {
                "original": "Kids are always watching, and your own food behaviors often speak louder than words.",
                "analysis": [
                  "and 连接两个并列分句：孩子一直在观察，成人自身的饮食行为往往比语言更有影响。",
                  "your own food behaviors 是第二分句主语，own 强调成人自身的行为示范。",
                  "speak louder than words 是比较结构，也用比喻表达行为胜于口头劝说。",
                  "often 再次限定语气；可借鉴 actions speak louder than words 讨论榜样作用。"
                ],
                "translation": "孩子一直在观察，而你自己的饮食行为往往比言语更有说服力。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-01",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Apple 创作应用 AI 功能更新、Copilot 多模型编排与 Gemini 文件编辑；免费资源覆盖教材研读、翻译、编程、云端计算和创意生成。",
        "updates": [
          {
            "event": "Gemini 可在对话中生成、预览和编辑学习文件",
            "summary": "Gemini app 新增文件生成与编辑：可在聊天中创建 PDF、文档、演示文稿、表格和代码文件，再预览、直接修改或选中文字让 Gemini 调整。PDF 支持网页和移动端；Google Docs、Sheets、幻灯片、Markdown、TXT 和代码文件目前仅支持网页版。",
            "howTo": "打开 Gemini 网页版并上传课堂笔记，要求生成 PDF 复习指南；在预览中直接编辑，或选中文字让 Gemini 修改。PDF 也可在 Gemini 移动端预览和编辑；其他列出的文件格式请使用网页版。",
            "impact": "可把课堂材料整理成可编辑的提纲、表格或复习指南，并在原对话中迭代；提交前对照课程资料核实内容，避免把格式完整误当成事实准确。",
            "free": "Google 称此功能向 Gemini app 已开放地区的所有用户提供；公告未说明付费订阅要求、账号条件、具体地区清单或使用额度。PDF 支持网页和移动端，其他文件格式仅支持网页。",
            "category": "Google Gemini / 文件生成与编辑",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-29",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/"
            }
          },
          {
            "event": "GitHub Copilot Fusion 正式提供自动多模型编排",
            "summary": "GitHub Copilot Fusion 正式推出：用户在模型选择器中选 Fusion 并设置投入程度后，Copilot 会按任务选择并协调模型；需要时可采用单模型、先快后强的级联检查，或由另一模型评审再修订的流程。",
            "howTo": "更新 VS Code、GitHub Copilot app、Copilot CLI 或 JetBrains IDE 中的 Copilot，在模型选择器选择 Copilot Fusion，再选 Standard、High 或 Max 投入程度；向它描述一个需要解释、规划或调试的课程代码任务。",
            "impact": "学生可减少为不同编程步骤手动切换模型的负担，并用评审式流程检查作业代码；仍要查看生成的改动、运行测试并理解结果。",
            "free": "GitHub 称该功能在所有 Copilot 计划和公告列出的客户端提供；Fusion 使用的每个模型按其标准费率计费，付费 Copilot 计划目前有模型费用限时 30% 折扣。免费计划的具体 Fusion 额度、实际单次费用、折扣截止日和地区官方未说明。",
            "category": "GitHub Copilot / 多模型编排",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion"
            }
          },
          {
            "event": "Apple Creator Studio 宣布创作应用新增生成式 AI 功能",
            "summary": "Apple 宣布为 Pixelmator Pro 增加 Generate Fill，可按文字描述改动选定图像区域；Logic Pro for Mac 将加入制作助手，Keynote、Pages 和 Numbers 也将获得理解文档上下文的助手及 MCP 工作流支持。Apple 表示这批更新将于 11 月通过 App Store 提供。",
            "howTo": "待 App Store 更新上线后，在 Pixelmator Pro 选中图像区域并描述要生成的改动；在 Logic Pro for Mac 用助手规划歌曲或设置人声轨；在 Keynote、Pages 或 Numbers 查看文档上下文助手。",
            "impact": "做课程展示、社团海报或音乐项目的学生可直接试做局部图像改动，也可让办公软件助手结合文档上下文协助操作；上线前不要把公告中的功能当成已可用，生成结果仍需检查。",
            "free": "Apple 称更新对现有 Apple Creator Studio 订阅者免费；公告没有给出新用户价格、学生优惠、地区清单或 11 月的具体上线日。部分助手功能标为 beta，公告未说明其额度。",
            "category": "Apple Creator Studio / 创作应用 AI",
            "source": {
              "name": "Apple Newsroom",
              "published": "2026-10-27",
              "url": "https://www.apple.com/newsroom/2026/10/apple-creator-studio-adds-powerful-new-ai-features-and-even-more-creative-tools/"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Notebook 免费接入数百本教材并生成学习材料",
            "summary": "Google 称 Gemini Notebook 可免费添加来自 OpenStax、Open Textbook Library、S Chand Publishing 等提供方的数百本教材；基于教材回答时附行内引用和原始来源链接，并可生成学习指南、测验和闪卡。",
            "howTo": "打开 Gemini Notebook 中的一个 notebook，选择 Add sources（添加来源）再选 Textbooks（教材），从目录加入课程教材；随后要求制作复习提纲、练习测验或闪卡，并点引用回看教材原文。",
            "impact": "适合按指定教材归纳章节和自测，引用也便于核对答案出处；目录来自美国和印度的提供方，选书时仍需确认版本是否符合课程要求。",
            "free": "Google 明确称教材可免费使用；目录覆盖哪些具体教材、所在地区是否都能访问、账号要求及使用额度官方未说明。",
            "category": "免费 AI 学习资源 / 教材与复习",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-29",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/"
            }
          },
          {
            "event": "DeepAI 免费试用图像、视频、音乐和 AI 对话工具",
            "summary": "DeepAI 官方介绍称，用户可在浏览器免费探索文本生成图像、照片编辑、联网 AI 对话、短视频、原创音乐和语音对话等工具，无需创建账号。",
            "howTo": "打开 DeepAI 官网，选择图像生成、照片编辑、视频、音乐或 AI Chat 等工具并输入任务描述；先用不含个人信息的素材试用，保存结果后自行检查准确性和使用许可。",
            "impact": "可为课程展示试做配图、短视频或音乐草稿，也可用 AI 对话辅助查找资料；涉及事实的回答应回到可靠来源核对，避免上传隐私材料。",
            "free": "官方称可免费探索且无需账号；免费使用的额度、地区、生成限制和免费期限官方未说明。DeepAI Pro 标价为每月 9.99 美元，免费访问不包含其所述高用量权益。",
            "category": "长期免费网页工具 / 图像、视频与音频",
            "source": {
              "name": "DeepAI 官方网站",
              "published": "官方未说明",
              "url": "https://deepai.org/"
            }
          },
          {
            "event": "DeepL 免费版每月可翻译 50,000 字符",
            "summary": "DeepL 官方方案对比页为免费版列出每位用户每月 50,000 个字符的文本翻译、每月 1 次文件翻译（最多 5 MB）和 1 条已保存翻译。",
            "howTo": "打开 DeepL 翻译网页，粘贴英文阅读材料并选择目标语言；翻译文档前确认文件不超过 5 MB，并留意免费版每月一次的文件额度。",
            "impact": "适合对照阅读论文摘要、检查生词和理解句间关系；机器译文仅作辅助，应回看原文并核对术语。",
            "free": "官方方案页标注每用户每月 50,000 字符、1 次文件翻译（最多 5 MB）和 1 条已保存翻译；是否需注册、地区和免费期限官方未说明。",
            "category": "长期免费工具 / 翻译与阅读",
            "source": {
              "name": "DeepL 官方方案页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "GitHub Copilot Free 提供每月 2,000 次代码补全",
            "summary": "GitHub 官方方案页列出 Copilot Free：每月 2,000 次代码补全，并提供有限的聊天和 agent 使用；免费计划也支持 Copilot CLI 与 agent mode。",
            "howTo": "登录 GitHub 并启用 Copilot Free，在 VS Code 等支持的 IDE 安装 Copilot 扩展；用小型课程代码练习补全或解释，并在设置中查看用量。",
            "impact": "适合练习代码解释、补全和小型调试；免费聊天与 agent 用量有限，生成代码应运行测试并理解后再提交。",
            "free": "官方方案页标注每月 2,000 次代码补全及有限聊天和 agent 使用；聊天/agent 的具体额度、地区资格和免费期限官方未说明。",
            "category": "长期免费工具 / 编程学习",
            "source": {
              "name": "GitHub Copilot 官方方案页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Google Colab 免费运行 Jupyter 学习笔记本",
            "summary": "Google 官方 FAQ 确认 Colab 是无需本地安装的托管 Jupyter Notebook 服务，免费提供计算资源，包括 GPU 和 TPU，适用于教育、数据科学和机器学习。",
            "howTo": "打开 Colab，新建笔记本或从 GitHub 上传已有 notebook；在代码单元运行课程示例，并在运行时菜单查看当前可用硬件。",
            "impact": "可用于练习 Python、数据分析和小型机器学习实验而无需先配置本地环境；免费资源不保证可用，重要代码和输出应及时保存。",
            "free": "Google 明确称 Colab 免费提供计算资源，包括 GPU/TPU，但资源不保证且不无限，使用限制会变化；固定配额、地区和账号要求官方未说明。",
            "category": "免费云端计算 / 编程与数据学习",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Mixed economic forecast weighs heavy ahead of midterms",
            "source": "NPR",
            "published": "2026-10-31",
            "url": "https://www.npr.org/2026/10/31/nx-s1-6022285/mixed-economic-forecast-weighs-heavy-ahead-of-midterms",
            "readingTime": "约 4 分钟（估算）",
            "topic": "经济与社会 / 生活成本、就业与选举判断",
            "summary": "文章以美国中期选举前的经济数据为背景，解释为何增长数字未能转化为选民的经济安全感。报道先指出通胀仍高于此前水平、工资追不上生活成本，随后呈现表面矛盾：第三季度 GDP 增长加快，但增长主要受 AI 投资推动，并未伴随新就业明显增加。接着，记者讨论招聘低迷、工资增速放慢和房贷利率偏高如何影响家庭支出与购房能力。文章最后将宏观指标与选民日常感受联系起来，指出生活成本可能影响选举中的执政党评价。",
            "reason": [
              "生活成本、就业和选举是经济与社会类阅读常见主题，材料中的数据也便于练习概括证据。",
              "文章从选举背景切入，依次讨论通胀、GDP、就业、工资与住房，呈现宏观增长和家庭感受之间的落差。",
              "可练习解释题、因果题和态度题，尤其要辨析 GDP 增长与就业改善并非同一概念。",
              "affordability、sluggish、mortgage 等词可迁移到消费、劳动市场和住房政策话题。",
              "写作可借鉴“呈现总量指标—补充分配与就业细节—落到家庭经验”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "affordability",
                "phonetic": "/əˌfɔːrdəˈbɪləti/",
                "part": "n.",
                "translation": "负担得起的程度；可负担性"
              },
              {
                "word": "keep pace",
                "phonetic": "/kiːp peɪs/",
                "part": "phr.",
                "translation": "跟上；与……同步"
              },
              {
                "word": "inflation",
                "phonetic": "/ɪnˈfleɪʃən/",
                "part": "n.",
                "translation": "通货膨胀"
              },
              {
                "word": "stewardship",
                "phonetic": "/ˈstuːərdʃɪp/",
                "part": "n.",
                "translation": "管理；治理责任"
              },
              {
                "word": "perk up",
                "phonetic": "/pɜːrk ʌp/",
                "part": "v.",
                "translation": "回升；改善"
              },
              {
                "word": "sluggish",
                "phonetic": "/ˈslʌɡɪʃ/",
                "part": "adj.",
                "translation": "低迷的；迟缓的"
              },
              {
                "word": "be accompanied by",
                "phonetic": "/bi əˈkʌmpənid baɪ/",
                "part": "phr.",
                "translation": "伴随；同时发生"
              },
              {
                "word": "mortgage rate",
                "phonetic": "/ˈmɔːrɡɪdʒ reɪt/",
                "part": "n.",
                "translation": "抵押贷款利率"
              },
              {
                "word": "on the sidelines",
                "phonetic": "/ɑːn ðə ˈsaɪdlaɪnz/",
                "part": "phr.",
                "translation": "暂不参与；处于观望状态"
              }
            ],
            "sentences": [
              {
                "original": "The cost of living keeps going up, and people's paychecks are not keeping pace.",
                "analysis": [
                  "由 and 连接两个并列分句：第一分句说明生活成本上涨，第二分句说明工资未能同步。",
                  "The cost of living 是第一分句主语，keeps going up 用现在时描述持续趋势。",
                  "people's paychecks 是第二分句主语，are not keeping pace 用现在进行时突出当前落差。",
                  "两个分句构成对照因果：物价持续上涨而收入跟不上，解释家庭为何感到难以负担。",
                  "可借鉴 A keeps rising, while B fails to keep pace 表达两类经济指标的背离。"
                ],
                "translation": "生活成本不断上升，而人们的工资却没有跟上。"
              },
              {
                "original": "GDP, which is the broadest measure of economic activity, grew at an annual rate of 3.4% in July, August and September.",
                "analysis": [
                  "主干为 GDP grew at an annual rate，主语 GDP，谓语 grew，后接增长速度。",
                  "which 引导非限制性定语从句，补充解释 GDP 是衡量经济活动的广义指标。",
                  "in July, August and September 是时间状语，限定数据所覆盖的季度月份。",
                  "定语从句先界定指标，再给数值，体现新闻报道常见的“术语释义—数据陈述”结构。",
                  "可借鉴 which is the broadest measure of X 插入对抽象指标的简短解释。"
                ],
                "translation": "作为衡量经济活动最广泛的指标，GDP 在 7、8、9 月按年率增长了 3.4%。"
              },
              {
                "original": "This burst of economic growth has not been accompanied by a burst of new jobs.",
                "analysis": [
                  "句子主干为 This burst of economic growth has not been accompanied by a burst of new jobs。",
                  "主语中心词 burst 指一阵快速增长；of economic growth 和 of new jobs 分别限定两次 burst。",
                  "has not been accompanied by 是现在完成时被动结构，强调增长至今没有伴随新增就业。",
                  "否定对照揭示宏观产出与就业改善之间的脱节，承接前文 GDP 增长数据。",
                  "可借鉴 X has not been accompanied by Y 表达某种变化未带来预期的配套结果。"
                ],
                "translation": "这波经济增长并未伴随新就业岗位的增加。"
              }
            ]
          },
          {
            "title": "The fight to save Canadian town threatened by Trump's tariffs",
            "source": "BBC",
            "published": "2026-10-31",
            "url": "https://www.bbc.co.uk/news/articles/cmly016ep243o",
            "readingTime": "约 6 分钟（估算）",
            "topic": "经济与社会 / 关税冲击、地方就业与社区自救",
            "summary": "报道以魁北克小镇 Témiscaming 的纸厂停工和工人失业开篇，说明这家百年工厂如何支撑当地就业、房价和公共服务。文章随后对照全国失业率相对稳定与木材、纸浆等受关税行业的局部重创，并追踪停工对周边锯木厂和运输业的连锁影响。中段回顾当地工人曾在 1970 年代买下工厂的先例，介绍居民再次组织收购的计划及其对政府援助的需求。结尾呈现联邦和省级措施、贸易谈判的不确定性，以及冬季设备受损可能令复工更难的风险。",
            "reason": [
              "关税、产业就业和小城镇转型构成经济与社会议题，适合联系贸易保护与区域发展。",
              "报道从工人和小镇生活切入，再对照全国数据、供应链影响、历史先例及政策回应。",
              "可练习主旨题、细节定位和推断题，尤其注意全国总体指标与地方个案之间的对比。",
              "economic anchor、livelihood、ripple effect、viability 等表达适用于产业和就业议题。",
              "写作可借鉴“个案呈现冲击—数据扩大背景—提出自救与政策条件—指出不确定性”的结构。"
            ],
            "vocabulary": [
              {
                "word": "economic anchor",
                "phonetic": "/ˌiːkəˈnɑːmɪk ˈæŋkər/",
                "part": "n. phr.",
                "translation": "经济支柱"
              },
              {
                "word": "idle",
                "phonetic": "/ˈaɪdəl/",
                "part": "adj.",
                "translation": "停工的；闲置的"
              },
              {
                "word": "shuttering",
                "phonetic": "/ˈʃʌtərɪŋ/",
                "part": "n.",
                "translation": "关闭；停业"
              },
              {
                "word": "livelihood",
                "phonetic": "/ˈlaɪvlihʊd/",
                "part": "n.",
                "translation": "生计；谋生手段"
              },
              {
                "word": "weather",
                "phonetic": "/ˈweðər/",
                "part": "v.",
                "translation": "经受住；安然渡过"
              },
              {
                "word": "tepid",
                "phonetic": "/ˈtepɪd/",
                "part": "adj.",
                "translation": "不温不火的；乏力的"
              },
              {
                "word": "ripple effect",
                "phonetic": "/ˈrɪpəl ɪˌfekt/",
                "part": "n. phr.",
                "translation": "连锁反应"
              },
              {
                "word": "viability",
                "phonetic": "/ˌvaɪəˈbɪləti/",
                "part": "n.",
                "translation": "可行性；持续经营能力"
              },
              {
                "word": "indefinite",
                "phonetic": "/ɪnˈdefɪnət/",
                "part": "adj.",
                "translation": "期限不确定的"
              }
            ],
            "sentences": [
              {
                "original": "Most of the mill's 360 employees are out of work, kept afloat for the moment with partial pay from government tariff-relief.",
                "analysis": [
                  "主干是 Most of the mill’s 360 employees are out of work，说明多数员工失业。",
                  "Most of the mill’s 360 employees 是主语；of 短语限定 Most 的范围。",
                  "句尾 kept afloat 是过去分词短语，补充说明员工暂时靠部分政府补助维持生活。",
                  "逗号后的补充成分形成让步意味：虽然失业，短期收入仍有部分支撑。",
                  "可借鉴 keep someone afloat with X 表达某种援助暂时维持个人或机构运转。"
                ],
                "translation": "纸厂 360 名员工中的大多数失去了工作，目前靠政府关税救助提供的部分工资维持生计。"
              },
              {
                "original": "At a high level, Canada's economy has weathered the ongoing trade war with the US, its largest customer.",
                "analysis": [
                  "主干为 Canada’s economy has weathered the trade war，has weathered 是现在完成时。",
                  "At a high level 作句首状语，提示这是宏观层面的概括。",
                  "ongoing 修饰 trade war；with the US 补充冲突对象。",
                  "逗号后的 its largest customer 是同位语，说明美国对加拿大经济的重要性。",
                  "句子与后文局部行业承压形成宏观与微观对照；可借鉴 at a high level 引出总体判断。"
                ],
                "translation": "从宏观层面看，加拿大经济经受住了与其最大客户美国持续进行的贸易战。"
              },
              {
                "original": "The last time the town faced a threat this existential was in 1973, when the mill's then-American owner threatened to shut it down.",
                "analysis": [
                  "主句主干为 The last time ... was in 1973，系动词 was 将时间与年份对应。",
                  "the town faced a threat this existential 是修饰 The last time 的定语从句，省略关系副词 when。",
                  "逗号后 when 引导时间状语从句，交代当时工厂所有者曾威胁关闭纸厂。",
                  "this existential 强调威胁关乎小镇存续，随后用历史事件解释当前困境并非首次发生。",
                  "可借鉴 The last time X happened was in Y, when ... 回溯先例并补充背景。"
                ],
                "translation": "上一次小镇面临如此关乎存亡的威胁是在 1973 年，当时纸厂的美国业主曾威胁要关闭工厂。"
              }
            ]
          },
          {
            "title": "India's opposition set to hold mega rally seeking election chief's resignation",
            "source": "BBC",
            "published": "2026-11-01",
            "url": "https://www.bbc.co.uk/news/articles/c60qk92dvlwgo",
            "readingTime": "约 5 分钟（估算）",
            "topic": "社会与政治 / 选民名册争议、抗议与制度信任",
            "summary": "BBC 报道印度国大党及反对派联盟计划在德里举行大型集会，要求首席选举专员辞职并推动选举改革。争议焦点是选民名册修订：选举委员会称此举旨在删除已故或迁居者，反对派则担心合资格选民被移除、执政党因此获益，相关指控遭到否认。报道补充媒体调查、此前抗议、学生团体参与和警方设定的集会条件，并呈现商户对节庆期间抗议活动的不同看法。文章通过各方说法和现场安排，展示选举程序、公众表达和商业活动之间的张力。",
            "reason": [
              "选举程序、公众参与与制度信任是社会政治类阅读常见议题，也能联系公民权利。",
              "文章先交代集会诉求，再说明名册修订争议，随后呈现官方回应、调查报道、抗议和商业影响。",
              "可练习区分事实与指控、比较不同主体立场，并判断段落如何补充争议背景。",
              "revision、eligible、allege、disenfranchise 等词适用于选举制度和公共治理主题。",
              "写作可借鉴“界定程序—呈现争议双方—补充社会影响—指出制度信任问题”的结构。"
            ],
            "vocabulary": [
              {
                "word": "opposition",
                "phonetic": "/ˌɑːpəˈzɪʃən/",
                "part": "n.",
                "translation": "反对派；反对力量"
              },
              {
                "word": "rally",
                "phonetic": "/ˈræli/",
                "part": "n.",
                "translation": "集会；群众大会"
              },
              {
                "word": "resignation",
                "phonetic": "/ˌrezɪɡˈneɪʃən/",
                "part": "n.",
                "translation": "辞职；辞呈"
              },
              {
                "word": "electoral",
                "phonetic": "/ɪˈlektərəl/",
                "part": "adj.",
                "translation": "选举的"
              },
              {
                "word": "revision",
                "phonetic": "/rɪˈvɪʒən/",
                "part": "n.",
                "translation": "修订；修改"
              },
              {
                "word": "draft roll",
                "phonetic": "/dræft roʊl/",
                "part": "n. phr.",
                "translation": "选民名册草案"
              },
              {
                "word": "purge",
                "phonetic": "/pɜːrdʒ/",
                "part": "v.",
                "translation": "清除；清理"
              },
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合资格的"
              },
              {
                "word": "allege",
                "phonetic": "/əˈledʒ/",
                "part": "v.",
                "translation": "声称；指称"
              },
              {
                "word": "disenfranchise",
                "phonetic": "/ˌdɪsɪnˈfræntʃaɪz/",
                "part": "v.",
                "translation": "剥夺……的选举权"
              }
            ],
            "sentences": [
              {
                "original": "The rally comes amid growing criticism of a voter-list revision exercise that has removed 130 million names from the draft rolls across India.",
                "analysis": [
                  "主句主干为 The rally comes amid criticism，说明集会发生在批评声渐增之际。",
                  "growing 修饰 criticism；of a voter-list revision exercise 说明批评对象。",
                  "that 引导定语从句修饰 exercise，具体交代该名册修订已从草案中移除大量名字。",
                  "amid 表示背景并置，报道先呈现制度争议，再引出集会诉求。",
                  "可借鉴 X comes amid growing criticism of Y 表达某事件发生时的争议背景。"
                ],
                "translation": "这场集会是在针对选民名册修订行动的批评声不断增大的背景下举行的；该行动已从印度各地的名册草案中移除 1.3 亿个名字。"
              },
              {
                "original": "Both the BJP and the ECI have denied the allegations.",
                "analysis": [
                  "主语由 Both A and B 构成，谓语 have denied 与复数主语一致。",
                  "the allegations 是 deny 的宾语，指代前文反对派提出的相关指控。",
                  "现在完成时说明否认这一回应与当前争议相关，而非只限于过去某个时点。",
                  "短句在争议报道中提供对立一方回应，提醒读者区分指控与已确认事实。",
                  "可借鉴 Both A and B have denied the allegations 简洁转述多方共同否认。"
                ],
                "translation": "印度人民党和印度选举委员会都否认了这些指控。"
              },
              {
                "original": "The Election Commission said differences of opinion were normal in any institution and did not affect its functioning.",
                "analysis": [
                  "主句为 The Election Commission said，后接省略 that 的宾语从句。",
                  "宾语从句内 differences of opinion 作主语，were normal 与 did not affect 并列说明官方回应。",
                  "in any institution 限定“意见不同”的适用范围；its 指代前面的 Election Commission。",
                  "该句呈现机构的自我解释，与前文反对派质疑形成对照。",
                  "可借鉴 X said ... were normal and did not affect ... 转述机构对争议的回应。"
                ],
                "translation": "选举委员会称，任何机构中出现意见分歧都很正常，也不会影响其运作。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-31",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Gemini 文件生成与教材接入、Copilot 图像生成预览；免费资源覆盖翻译、代码辅助、图像创作、云端笔记本和开放模型。",
        "updates": [
          {
            "event": "Gemini 支持在对话中生成、预览和编辑学习文件",
            "summary": "Gemini app 新增文件生成与编辑：可在聊天中创建并预览 PDF、文档、演示文稿、表格、代码等，再直接编辑文件或选中文字让 Gemini 修改。PDF 的预览和编辑支持网页与移动端，其他格式目前仅支持网页。",
            "howTo": "打开 Gemini 网页版或应用，在对话中上传课堂笔记并要求生成 PDF 复习指南；打开预览后可手动编辑或选中内容要求修改。若要处理 Google Docs、Sheets、幻灯片、Markdown、TXT 或代码文件，请使用网页版。",
            "impact": "学生可把手写课堂笔记整理成可检查的复习资料，并在原文件中迭代提纲或表格；应逐项核对生成内容与课程材料，避免把文件排版正确误当作事实准确。",
            "free": "Google 称功能向 Gemini app 已开放地区的所有用户提供；公告未说明是否需付费订阅、具体账号条件、地区清单或使用额度。PDF 支持网页和移动端，其他列出的文件格式仅支持网页。",
            "category": "Google Gemini / 文件生成与编辑",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-29",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/"
            }
          },
          {
            "event": "Gemini Notebook 为学生开放数百本教材",
            "summary": "Gemini Notebook 新增教材目录，学生可从 OpenStax、Open Textbook Library、S Chand Publishing 等美国和印度的提供方添加数百本教材。Notebook 的回答会以教材内容为依据，并附行内引用和回到原始来源的链接，也可据此生成学习指南、练习测验和闪卡。",
            "howTo": "打开 Gemini Notebook 并进入一个 notebook，选择“Add sources（添加来源）”再选“Textbooks（教材）”；从目录添加课程教材后，可要求它制作带教材依据的学习指南、练习题或闪卡。",
            "impact": "学生可用指定教材而不是泛化网络答案来复习，并沿引用链接核实依据；可用练习题检查知识点，但仍应以授课教师指定版本为准。",
            "free": "Google 明确称这些教材可免费使用，当前目录来自美国和印度的提供方；具体可用教材、其他地区开放情况、账号要求和使用额度官方未说明。",
            "category": "Google Gemini Notebook / 免费教材学习",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-29",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/"
            }
          },
          {
            "event": "GitHub Copilot 可在编码对话中生成并编辑图像",
            "summary": "Copilot 新增自然语言图像生成和编辑：所选推理模型可调用由 GPT Image 2.5 Flare 驱动的专用图像工具，生成结果在对话内预览并保存到项目，减少从编码任务切换到其他图像工具的步骤。",
            "howTo": "在 VS Code、GitHub Copilot app 或 Copilot CLI 中打开 Copilot Chat，用自然语言描述所需图片；查看对话中的预览并确认项目内保存的结果。组织管理员可通过模型策略关闭该图像模型。",
            "impact": "做课程项目或原型的学生可在同一编码上下文中试做界面素材，再检查并调整视觉结果；发布前应确认素材适用性，并注意默认不会添加“Made with AI”水印。",
            "free": "目前为公开预览，仅公告列出的 Copilot Pro、Pro+、Business 和 Enterprise 计划可用；图像 token 会另行计费并计入计划 AI credits。公告未列出 Free 或 Student 计划资格，也未说明单张价格、具体额度和地区范围；可选择开启可见的 AI 水印，默认关闭。",
            "category": "GitHub Copilot / 图像生成与编辑",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot/"
            }
          }
        ],
        "deals": [
          {
            "event": "DeepL 免费版：每月 50,000 字符翻译",
            "summary": "DeepL 官方方案对比页列出免费版每位用户每月 50,000 个字符的文本翻译额度；另列每月 1 次文件翻译（文件最大 5 MB）和 1 条已保存翻译。",
            "howTo": "打开 DeepL 翻译网页，粘贴一段英文阅读材料并选择目标语言；翻译文档前先确认文件不超过 5 MB，并留意免费版每月一次的文件额度。",
            "impact": "适合对照阅读论文摘要、检查生词和理解句间关系；机器译文可用于辅助理解，不应替代原文精读或未经核对地用于正式写作。",
            "free": "官方方案页标注免费版每用户每月 50,000 字符、1 次文件翻译（最多 5 MB）和 1 条已保存翻译；地区、是否需注册及免费期限官方未说明。",
            "category": "长期免费工具 / 翻译与阅读",
            "source": {
              "name": "DeepL 官方方案页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "GitHub Copilot Free：免费代码补全和有限聊天",
            "summary": "GitHub 官方方案页列出 Copilot Free，可在受支持的 IDE、GitHub、CLI 等环境使用有限的聊天和 agent 功能，并提供每月 2,000 次代码补全。",
            "howTo": "登录 GitHub 后进入 Copilot Free 方案并按指引启用；在 VS Code 等受支持 IDE 安装 Copilot 扩展，先用小型课程代码练习补全和提问，并在设置页查看用量。",
            "impact": "适合练习代码解释、补全和小型调试任务；免费层模型和聊天/agent 用量有限，生成代码应自行运行测试并理解后再提交。",
            "free": "官方方案页标注 Free 计划每月 2,000 次代码补全，并提供有限聊天和 agent 使用；聊天/agent 的具体额度、地区资格及免费期限官方未说明。图像生成等付费预览功能不包含在此权益说明内。",
            "category": "长期免费工具 / 编程学习",
            "source": {
              "name": "GitHub Copilot 官方方案页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Adobe Firefly 免费用户：每日补充生成次数",
            "summary": "Adobe 官方帮助页称，没有付费方案的 Firefly、Express、Stock、Photoshop 网页版、Acrobat 和 Adobe 移动应用用户，可在精选模型上使用有限的免费每日生成次数；次数每天刷新。",
            "howTo": "打开 Adobe Firefly 或 Adobe Express，登录后选择一个免费生成式功能，先用小规模提示词试做学习海报或插图；可在账户中检查生成额度，达到限制后等待刷新。",
            "impact": "适合制作课程展示的概念草图或视觉素材初稿；免费层只提供精选模型和有限生成，正式使用前应复核内容并遵守素材与版权要求。",
            "free": "官方确认无付费方案的用户可获得有限的每日生成次数，额度每天刷新；具体次数、模型名单、账号条件、地区和持续期限官方未说明，且功能和模型可能调整。",
            "category": "每日免费生成 / 图像与创作",
            "source": {
              "name": "Adobe 官方帮助中心",
              "published": "官方未说明",
              "url": "https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html"
            }
          },
          {
            "event": "Google Colab：免费运行 Jupyter 学习笔记本",
            "summary": "Google 官方 FAQ 确认 Colab 是无需本地安装的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，适用于教育、数据科学和机器学习。",
            "howTo": "打开 Colab，新建笔记本或从 GitHub 上传已有 notebook；在代码单元中运行课程示例，并在运行时菜单查看当前可用硬件。",
            "impact": "可用于练习 Python、数据分析和小型机器学习实验，不必先配置本地环境；免费资源不保证可用，长任务应保存代码和输出并准备本地替代方案。",
            "free": "Google 明确称 Colab 免费提供计算资源，包括 GPU/TPU，但资源不保证且不无限，使用限制会变化；固定配额、地区和账号要求官方未说明。",
            "category": "免费云端计算 / 编程与数据学习",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Phi-4-mini-instruct：MIT 许可的可下载开放模型",
            "summary": "Microsoft 官方 Hugging Face 模型卡提供 Phi-4-mini-instruct 权重，许可标注为 MIT；模型卡说明其适用于多语言指令任务，并提供 Transformers 本地推理示例。",
            "howTo": "打开官方模型卡核对使用说明和设备要求，使用 Transformers 按模型 ID `microsoft/Phi-4-mini-instruct` 下载权重并本地加载；先用无敏感内容的短问题测试输出。",
            "impact": "适合在课程项目中学习模型下载、本地推理和指令格式，也能在不依赖托管 API 的情况下搭建小型原型；模型卡提醒其可能产生事实错误，重要内容需查证。",
            "free": "模型卡标注 MIT 许可并公开提供权重；托管推理额度、地区和账号条件官方未说明，本地运行仍需自行承担兼容硬件、存储和电力成本。",
            "category": "开放模型权重 / 本地推理实验",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Twice as many plants and animals sold in wildlife trade as previously thought, says report",
            "source": "The Guardian",
            "published": "2026-10-30",
            "url": "https://www.theguardian.com/environment/2026/oct/30/twice-as-many-plants-and-animals-sold-in-wildlife-trade-as-previously-thought-says-report",
            "readingTime": "约 7 分钟（估算）",
            "topic": "环境与社会 / 野生动物贸易规模、数据盲区与保护监管",
            "summary": "文章从一项研究的新估算切入：全球被使用或交易的野生动植物物种达到 107,356 种，是此前约 50,000 种估值的两倍多。报道解释研究为何得到更大数字——数据集更完整，也纳入了线上装饰品和异宠交易等新研究；随后指出估算仍可能偏低，现有贸易监测和国际保护名录覆盖不足，合法与非法交易之间也存在监管漏洞。文章并未将所有野生动物贸易都等同于走私，而是区分渔业、木材、时尚和装饰品等不同领域及其可持续性。结尾回到政策问题：缺少代表性、系统的数据会妨碍识别风险和衡量国际保护目标进展，因此需要更有效的监测与信息共享。",
            "reason": [
              "野生动物贸易、生态保护和跨境监管兼具环境与社会治理属性，是常见的公共议题型阅读主题。",
              "文章按新估值、数据来源、现有盲区、贸易类型和政策需求推进，适合梳理研究证据如何导向治理结论。",
              "可练习比较新旧估值、识别作者对数字仍可能低估的限定，以及区分合法贸易和非法走私。",
              "representative、underestimate、loophole、sustainable 等词汇可迁移到环境政策与社会科学论述。",
              "写作可借鉴“量化问题—说明证据改进—指出监测缺口—提出政策条件”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "species",
                "phonetic": "/ˈspiːʃiːz/",
                "part": "n.",
                "translation": "物种"
              },
              {
                "word": "estimate",
                "phonetic": "/ˈestɪmeɪt/",
                "part": "n.",
                "translation": "估算；估值"
              },
              {
                "word": "representative",
                "phonetic": "/ˌreprɪˈzentətɪv/",
                "part": "adj.",
                "translation": "有代表性的"
              },
              {
                "word": "ornamental",
                "phonetic": "/ˌɔːrnəˈmentl/",
                "part": "adj.",
                "translation": "装饰性的"
              },
              {
                "word": "underestimate",
                "phonetic": "/ˌʌndərˈestɪmeɪt/",
                "part": "v.",
                "translation": "低估"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbəl/",
                "part": "adj.",
                "translation": "易受伤害的；脆弱的"
              },
              {
                "word": "sustainable",
                "phonetic": "/səˈsteɪnəbəl/",
                "part": "adj.",
                "translation": "可持续的"
              },
              {
                "word": "loophole",
                "phonetic": "/ˈluːphoʊl/",
                "part": "n.",
                "translation": "漏洞；规则空子"
              },
              {
                "word": "extinction",
                "phonetic": "/ɪkˈstɪŋkʃən/",
                "part": "n.",
                "translation": "灭绝"
              },
              {
                "word": "systematic",
                "phonetic": "/ˌsɪstəˈmætɪk/",
                "part": "adj.",
                "translation": "系统性的"
              }
            ],
            "sentences": [
              {
                "original": "The dimensions of trade have changed.",
                "analysis": [
                  "主干是 The dimensions have changed，主语中心词 dimensions，谓语为现在完成时 have changed。",
                  "of trade 是介词短语，后置限定 dimensions，说明发生变化的是贸易的规模和形态。",
                  "现在完成时把过去变化与当前状态相连，为下文解释旧估值为何不够提供逻辑起点。",
                  "这句话是研究者的直接引语，先提出判断，再由线上交易和新数据集补充证据。",
                  "可借鉴 the dimensions of X have changed 表达某议题的规模或条件已经发生变化。"
                ],
                "translation": "贸易的规模和形态已经发生变化。"
              },
              {
                "original": "Even assessing the value of the legal trade compared with the illegal trade is challenging.",
                "analysis": [
                  "主干是 assessing ... is challenging；动名词短语 assessing the value 作句子主语。",
                  "Even 是强调副词，突出连合法与非法贸易价值的比较都难以完成。",
                  "of the legal trade 限定 value 的对象，compared with the illegal trade 补充比较基准。",
                  "句子以证据和衡量难题解释监管边界不清，推动论证从物种数量转向治理困难。",
                  "可借鉴 Even doing X is challenging 表达某项看似基础的衡量工作仍有难度。"
                ],
                "translation": "即使是评估合法贸易相较于非法贸易的价值，也很困难。"
              },
              {
                "original": "Most countries lack any systematic data outside Cites, the study says.",
                "analysis": [
                  "主句主干为 Most countries lack data，主语 Most countries，谓语 lack，宾语中心词 data。",
                  "any systematic 作限定和修饰，强调缺少的是系统性数据，而非泛指所有资料。",
                  "outside Cites 是介词短语，限定数据缺口的范围；Cites 是《濒危野生动植物种国际贸易公约》的简称。",
                  "句末 the study says 是报道来源标记，提示这是研究的说法，而非记者无归属的断言。",
                  "可借鉴 lack systematic data outside X 描述某领域在既有监测机制之外的证据空缺。"
                ],
                "translation": "研究称，大多数国家在 CITES 体系之外缺乏任何系统性数据。"
              }
            ]
          },
          {
            "title": "Nearly 2 out of 3 teens and tweens use AI chatbots, new research shows",
            "source": "NPR",
            "published": "2026-10-30",
            "url": "https://www.npr.org/2026/10/30/nx-s1-6022278/ai-artificial-intelligence-teens-jed-common-sense-media",
            "readingTime": "约 8 分钟（估算）",
            "topic": "教育与健康 / 青少年使用聊天机器人、情绪支持与心理健康",
            "summary": "NPR 报道两项关于美国青少年的调查：Common Sense Media 发现近半数 9 至 12 岁儿童曾使用 AI 聊天机器人或陪伴型工具，13 岁时这一比例接近四分之三；JED Foundation 对 5,500 名 9 至 17 岁学生的调查则发现九成曾使用聊天机器人，近三分之二既用于作业，也用于陪伴或应对压力。文章先呈现学习、任务安排和情绪支持等真实用法，再讨论 JED 调查中聊天机器人使用与较差心理健康指标的相关性。受访研究者明确提醒，数据不能证明因果方向：本已承受困扰的学生可能更常求助 AI，也存在过度依赖削弱日常压力应对能力的可能。报道因此以谨慎而非定论收束，强调还需研究厘清影响机制。",
            "reason": [
              "青少年教育、数字工具使用和心理健康相互交叉，适合科技与社会议题的综合阅读。",
              "文章从两项调查数据出发，转入学生个案和研究者解释，再以因果限制修正初步印象。",
              "可考查比例与样本来源、调查相关性是否等于因果，以及不同受访者观点的作用。",
              "correlate、causal、overreliant、distress 等词可用于描述证据强度和心理状态。",
              "写作可借鉴先呈现数据、再说明局限、最后提出谨慎结论的证据型论证。"
            ],
            "vocabulary": [
              {
                "word": "survey",
                "phonetic": "/ˈsɜːrveɪ/",
                "part": "n.",
                "translation": "调查；问卷调查"
              },
              {
                "word": "companionship",
                "phonetic": "/kəmˈpæniənʃɪp/",
                "part": "n.",
                "translation": "陪伴"
              },
              {
                "word": "overwhelmed",
                "phonetic": "/ˌoʊvərˈwelmd/",
                "part": "adj.",
                "translation": "不堪重负的"
              },
              {
                "word": "emotional support",
                "phonetic": "/ɪˈmoʊʃənəl səˈpɔːrt/",
                "part": "n. phr.",
                "translation": "情感支持"
              },
              {
                "word": "distress",
                "phonetic": "/dɪˈstres/",
                "part": "n.",
                "translation": "痛苦；忧虑"
              },
              {
                "word": "correlate",
                "phonetic": "/ˈkɔːrəleɪt/",
                "part": "v.",
                "translation": "相关；相互关联"
              },
              {
                "word": "causal",
                "phonetic": "/ˈkɔːzəl/",
                "part": "adj.",
                "translation": "因果关系的"
              },
              {
                "word": "preliminary",
                "phonetic": "/prɪˈlɪməneri/",
                "part": "adj.",
                "translation": "初步的"
              },
              {
                "word": "overreliant",
                "phonetic": "/ˌoʊvərɪˈlaɪənt/",
                "part": "adj.",
                "translation": "过度依赖的"
              },
              {
                "word": "tolerate",
                "phonetic": "/ˈtɑːləreɪt/",
                "part": "v.",
                "translation": "承受；忍受"
              }
            ],
            "sentences": [
              {
                "original": "Two new surveys show that nearly two-thirds of tweens and teens use AI chatbots.",
                "analysis": [
                  "主干是 Two new surveys show，主语 surveys，谓语 show 引出调查结果。",
                  "that 引导宾语从句，nearly two-thirds of tweens and teens 是从句主语，use 是谓语。",
                  "nearly 限定比例，避免把接近三分之二误读为精确的三分之二。",
                  "句子先用复数调查结果建立报道的证据基础，后文再分别说明调查来源和样本。",
                  "可借鉴 surveys show that... 引入调查发现，并用 nearly 保留数据精度。"
                ],
                "translation": "两项新调查显示，接近三分之二的青少年和较年幼的青少年使用 AI 聊天机器人。"
              },
              {
                "original": "But the data don't suggest a causal link, cautions Anderson.",
                "analysis": [
                  "核心判断是 the data don't suggest a causal link，主语 data，谓语 don't suggest，宾语 causal link。",
                  "But 句首转折，限制上一段相关性发现可以推出的结论。",
                  "a causal 修饰 link，指出数据没有证明 AI 使用与心理健康结果之间存在因果联系。",
                  "句末 cautions Anderson 是倒装式引语标记，交代这项方法论提醒来自研究者。",
                  "可借鉴 data do not suggest a causal link 谨慎区分统计相关与因果关系。"
                ],
                "translation": "但安德森提醒，这些数据并不能说明存在因果联系。"
              },
              {
                "original": "That, she explains, can lead to worse mental health.",
                "analysis": [
                  "主干是 That can lead to worse mental health，That 指代前文所述的依赖 AI、未能练习应对压力的情况。",
                  "she explains 是插入语，说明判断来自受访研究者的解释。",
                  "情态动词 can 表示可能结果，不是必然因果；worse 修饰 mental health。",
                  "该句承接可能机制，把即时情绪缓解与长期应对能力不足连接起来，但仍保留推测语气。",
                  "可借鉴 X can lead to Y 表达风险路径，并用 can 避免把可能性夸大为确定结论。"
                ],
                "translation": "她解释说，这可能导致更差的心理健康状况。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-30",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Copilot Fusion 多模型编排、Genie 4 研究预览，以及 Gemini 4 Carbon 的有限测试范围。",
        "updates": [
          {
            "event": "GitHub Copilot Fusion 正式推出多模型编排",
            "summary": "Copilot Fusion 正式可用：它会按任务自动选择并协同不同模型，支持单模型处理、逐级升级和交叉审阅三种工作流，用户只需选择 Standard、High 或 Max 努力级别。",
            "howTo": "更新 VS Code、GitHub Copilot app、Copilot CLI 或 JetBrains IDE，在 Copilot 模型选择器中选 Copilot Fusion，再选 Standard、High 或 Max，并用一个课程代码任务比较不同努力级别。",
            "impact": "学生可让日常代码问题先由合适模型处理，把更难的调试交给更高努力级别；对照任务记录模型如何升级或复核，有助理解多模型编排而非只比较单一模型。",
            "free": "官方公告称所有 Copilot 计划均可使用，且列出 VS Code、Copilot app、Copilot CLI 和 JetBrains IDE；每次使用按实际调用模型的标准费率计费，付费 Copilot 计划暂享模型费用 30% 折扣。折扣截止日、地区资格及具体额度官方未说明。",
            "category": "GitHub Copilot / 多模型编排",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion"
            }
          },
          {
            "event": "Google DeepMind 发布 Genie 4 互动世界模型研究预览",
            "summary": "Genie 4 可根据文字指令实时生成并调整可交互场景，同时生成环境声音和角色对话；研究预览先开放给受邀测试者，Google 表示之后将面向 Project Genie 的 Google AI Ultra 用户及 Gemini API、Google AI Studio 的早期合作伙伴逐步开放。",
            "howTo": "普通用户目前可通过 Google DeepMind 公告中的 Project Genie waitlist 登记关注；若已属于受邀测试者，可在预览环境用文字改变场景、天气或角色，并观察模拟如何随输入变化。",
            "impact": "学生可将它用于历史场景、环境事件或游戏原型的交互式构想；目前仍是早期研究预览，物体持续性、复杂物理互动和长时一致性等方面仍在改进，不宜将生成结果当作可靠事实模拟。",
            "free": "目前仅受信任测试者可用；公告称之后将向 Google AI Ultra 用户及 Gemini API、Google AI Studio 早期合作伙伴开放，并提供 Project Genie 等候名单。具体价格、免费额度、地区和正式开放日期官方未说明。",
            "category": "Google DeepMind / 交互式生成",
            "source": {
              "name": "Google DeepMind 官方 Blog",
              "published": "2026-10-27",
              "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
            }
          },
          {
            "event": "Gemini 4 Carbon 开始面向网络防御人员有限测试",
            "summary": "Google 发布 Gemini 4 Carbon，称其面向长流程软件工程和网络防御任务；首阶段只向部分网络防御人员开放，后续才计划逐步扩展到可信合作伙伴以及开发者、企业和消费者产品。",
            "howTo": "普通学生目前无法直接调用 Carbon；可阅读官方公告了解其测试范围。公告称首批使用者由 Google 逐步开放，后续开发者、企业和消费者入口尚待推出。",
            "impact": "做软件工程或安全治理课程的学生可关注模型从受控测试到公开产品的分阶段发布方式；目前不应将 Carbon 当作可公开注册或可立即试用的编程工具。",
            "free": "官方公告称本周起仅向部分网络防御人员提供，并计划逐步扩大至可信伙伴；开发者、企业和消费者产品入口尚未开放。官方所列 API 价格为每百万输入 token 2 美元、每百万输出 token 10 美元；现阶段个人试用资格、地区和免费额度官方未说明。",
            "category": "Google Gemini / 模型发布与分阶段开放",
            "source": {
              "name": "Google 官方 Blog",
              "published": "2026-10-28",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free：免费使用网页与移动端 AI 助手",
            "summary": "Claude 官方定价页列出每月 0 美元的 Free 计划，可在网页、桌面端和移动端聊天，并提供网页搜索、文件创建与代码运行、Artifacts 等功能。",
            "howTo": "打开 Claude 官方定价页选择 Free，登录或注册 Claude 账号后在网页或应用中开始对话；可用一段课程材料试做提纲，再核对引用和输出。",
            "impact": "适合用来整理阅读问题、试运行小段代码或制作可视化草稿；免费计划存在使用限制，重要作业仍需自行验证准确性。",
            "free": "官方标价每月 0 美元并称 Free 对所有人开放；使用受官方 usage limits 约束，具体额度、支持地区和优惠期限官方未说明。",
            "category": "长期免费服务 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Gemini 免费版：Google 账号可使用学习与创作功能",
            "summary": "Gemini 官方订阅页列出每月 0 美元的 Free 计划，使用 Google 账号即可开始；页面列出的功能包括 Gemini app、Flash-Lite、图像生成与编辑、Deep Research、Gemini Live、Canvas、Gems 和 Gemini Notebook。",
            "howTo": "打开 Gemini 官方订阅页并点击 Free 计划的 Get started，使用 Google 账号进入 Gemini；可用 Notebook 整理一份课程阅读资料，或用 Canvas 起草项目大纲。",
            "impact": "学生可先用免费层练习资料归纳、提纲构思和图像草稿；提交前应回看原始资料，并留意免费版的使用限制。",
            "free": "官方标价每月 0 美元，要求 Google 账号；免费层的具体使用额度、地区限制及期限官方未说明。",
            "category": "长期免费服务 / 研究与写作",
            "source": {
              "name": "Google Gemini 官方订阅页",
              "published": "官方未说明",
              "url": "https://gemini.google/subscriptions/"
            }
          },
          {
            "event": "Gemini Developer API 免费层：部分模型免输入与输出 token 费",
            "summary": "Google 官方 API 定价页列出 Free 层，部分模型可免费使用输入和输出 token，并可通过 Google AI Studio 创建项目和 API key；免费层请求内容可能用于改进 Google 产品。",
            "howTo": "进入 Google AI Studio 创建 API key，在官方定价表确认所选模型是否支持 Free 层，再按 Gemini API Quickstart 发起少量课程摘要或分类请求；不要把敏感资料放入免费层。",
            "impact": "适合学生练习调用模型 API、验证小型学习工具原型，而不必先支付 token 费用；开始前应核对数据使用条款和当前项目的速率限制。",
            "free": "仅部分模型提供免费输入与输出 token；具体请求额度按模型和项目而异，应在 AI Studio 查看当前限制。官方说明免费层内容可用于改进产品；地区和免费资格期限官方未说明。",
            "category": "免费 API / 开发实验",
            "source": {
              "name": "Google AI for Developers 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Qwen3Guard-Gen-0.6B：Apache 2.0 许可的安全分类模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供可下载的 Qwen3Guard-Gen-0.6B 权重，用于对提示词或模型回答进行安全分类；模型卡介绍 Safe、Controversial、Unsafe 等类别，并提供 Transformers 加载示例。",
            "howTo": "打开官方模型卡核对许可与硬件要求，安装 Transformers 4.51.0 或更新版本，再用 `Qwen/Qwen3Guard-Gen-0.6B` 下载并运行模型卡中的 moderation 示例；不要把分类结果当作人工审核的替代品。",
            "impact": "学生可在本地实验文本分类、内容审核和多语言模型评估，也可比较不同风险标签的适用边界；下载权重不代表免除本地算力与存储成本。",
            "free": "Hugging Face 官方模型 API 将许可标为 Apache-2.0，模型卡提供公开权重和运行示例；托管 API 配额、地区和期限官方未说明，本地运行需自行承担设备资源成本。",
            "category": "开放模型权重 / 内容审核实验",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3Guard-Gen-0.6B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "What killed 500-plus penguins? How scientists solved the mystery",
            "source": "NPR",
            "published": "2026-10-29",
            "url": "https://www.npr.org/2026/10/29/nx-s1-6020451/avian-flu-penguins-pathogen-antarctica-cholera",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境与健康 / 南极企鹅疫病、病原体迁移与跨国监测",
            "summary": "文章从南极危险群岛发现的大量企鹅尸体切入：研究团队最初怀疑禽流感，却发现病毒载量低，后续组织检查指向禽霍乱。作者把这次调查与禽流感进入澳大利亚、病原体跨区域传播联系起来，说明候鸟迁徙和南极生态并非孤立问题。报道进一步指出，科学家对禽霍乱的发生频率仍缺乏监测，单一病原体假设可能漏掉其他疾病；结尾强调持续检测和跨国合作对理解全球病原体网络的重要性。",
            "reason": [
              "以野生动物疾病为入口，延伸到生态联系、公共卫生和国际合作，适合环境与健康类考题。",
              "文章按现场调查、排除最初假设、发现病因、扩大到全球传播意义的顺序推进，叙事与解释结合。",
              "可练习概括研究如何修正初始判断、区分禽流感与禽霍乱证据，并分析结尾的政策含义。",
              "词汇涵盖 culprit、carcass、panzootic、pathogen 等报道和科学讨论常见表达。",
              "写作可借鉴“先提出疑问—检验假设—指出监测缺口—提出协作需求”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "culprit",
                "phonetic": "/ˈkʌlprɪt/",
                "part": "n.",
                "translation": "罪魁祸首；元凶"
              },
              {
                "word": "carcass",
                "phonetic": "/ˈkɑːrkəs/",
                "part": "n.",
                "translation": "动物尸体"
              },
              {
                "word": "sweep through",
                "phonetic": "/swiːp θruː/",
                "part": "phr.v.",
                "translation": "席卷；迅速蔓延"
              },
              {
                "word": "expedition",
                "phonetic": "/ˌekspəˈdɪʃən/",
                "part": "n.",
                "translation": "考察队；远征"
              },
              {
                "word": "panzootic",
                "phonetic": "/ˌpænzuːˈɒtɪk/",
                "part": "n.",
                "translation": "动物大流行"
              },
              {
                "word": "puzzling",
                "phonetic": "/ˈpʌzəlɪŋ/",
                "part": "adj.",
                "translation": "令人困惑的"
              },
              {
                "word": "pathogen",
                "phonetic": "/ˈpæθədʒən/",
                "part": "n.",
                "translation": "病原体"
              },
              {
                "word": "strain",
                "phonetic": "/streɪn/",
                "part": "n.",
                "translation": "菌株；毒株"
              },
              {
                "word": "outbreak",
                "phonetic": "/ˈaʊtbreɪk/",
                "part": "n.",
                "translation": "（疾病）暴发"
              },
              {
                "word": "collaboration",
                "phonetic": "/kəˌlæbəˈreɪʃən/",
                "part": "n.",
                "translation": "合作；协作"
              }
            ],
            "sentences": [
              {
                "original": "There were dead penguins but a virus was not to blame.",
                "analysis": [
                  "前半句是 There were dead penguins 的存在句，核心信息是现场确有企鹅死亡。",
                  "but 连接转折分句，指出死亡事实与团队最初怀疑的病毒病因并不相同。",
                  "a virus 是后半句主语，was not to blame 是表示“并非罪因”的系表结构。",
                  "整句从现场现象转向推翻初始假设，是报道调查叙事的关键转折。",
                  "可借鉴 X was not to blame 表达证据排除某种常见归因。"
                ],
                "translation": "企鹅确实死了，但并非病毒造成的。"
              },
              {
                "original": "That was a little bit puzzling.",
                "analysis": [
                  "主干是 That was puzzling，that 回指前文检测到病毒但载量偏低这一结果。",
                  "a little bit 作程度修饰语，弱化形容词 puzzling，呈现受访者克制的口语表达。",
                  "系动词 was 将研究结果与研究者的判断联系起来，而非直接宣布结论。",
                  "该句标示证据与预期不符，推动文章从初步检测进入后续显微镜检查。",
                  "可借鉴 That was ... 描述前述证据引发的判断或疑问。"
                ],
                "translation": "这多少令人有些困惑。"
              },
              {
                "original": "We really need international collaboration.",
                "analysis": [
                  "句子主干为 We need collaboration，主语是 We，宾语中心词是 collaboration。",
                  "really 加强 need 的语气，international 限定合作的跨国范围。",
                  "句子出现在报道结尾，把个案调查提升为共同监测病原体的行动主张。",
                  "其逻辑由前文病原体跨越遥远地域，推导出单一国家难以独立追踪。",
                  "可借鉴 We need X 用简洁主张收束问题分析并提出行动方向。"
                ],
                "translation": "我们确实需要国际合作。"
              }
            ]
          },
          {
            "title": "What are the government's options for reducing welfare spending?",
            "source": "BBC",
            "published": "2026-10-29",
            "url": "https://www.bbc.com/news/articles/cwy7l1lrkmk2o",
            "readingTime": "约 5 分钟（估算）",
            "topic": "经济与社会 / 福利支出、就业支持与公共预算",
            "summary": "BBC 从英国预算预测入手，指出未来几年福利支出按现金额预计增加 790 亿英镑，但占 GDP 的比例预计只从目前的 11.1% 升至 2032 年的 11.3%；总量变化与各项支出的分化需要分开理解。报道继而聚焦疫情后增长较快的健康及残障相关福利，并解释“削减福利”可能指降低相对预期支出，而非现金总额绝对下降。文中列出收紧个人独立支付资格、降低相关给付等选项，同时提醒就业支持可能增加近期其他部门开支；只有支持措施有效，长期才可能节省福利支出。",
            "reason": [
              "文章围绕福利制度、青年就业和财政取舍展开，适合公共政策与社会保障类考题。",
              "结构由预算数字和整体趋势转向增长较快的项目，再区分相对削减与绝对削减，最后讨论政策成本。",
              "可练习读懂百分比与现金额的差异、辨析政策目标，并识别作者对长期效果所设的条件。",
              "词汇涵盖 trajectory、anticipated、absolute、offset 等分析经济数据和政策成本的表达。",
              "写作可借鉴先量化问题、再区分口径、最后用短期与长期权衡评估政策方案。"
            ],
            "vocabulary": [
              {
                "word": "welfare",
                "phonetic": "/ˈwelfeə(r)/",
                "part": "n.",
                "translation": "福利；社会救济"
              },
              {
                "word": "forecast",
                "phonetic": "/ˈfɔːkɑːst/",
                "part": "n.",
                "translation": "预测；预报"
              },
              {
                "word": "thorny",
                "phonetic": "/ˈθɔːni/",
                "part": "adj.",
                "translation": "棘手的；复杂难解的"
              },
              {
                "word": "trajectory",
                "phonetic": "/trəˈdʒektəri/",
                "part": "n.",
                "translation": "发展轨迹；趋势"
              },
              {
                "word": "dramatic",
                "phonetic": "/drəˈmætɪk/",
                "part": "adj.",
                "translation": "显著的；急剧的"
              },
              {
                "word": "relative",
                "phonetic": "/ˈrelətɪv/",
                "part": "adj.",
                "translation": "相对的"
              },
              {
                "word": "absolute",
                "phonetic": "/ˈæbsəluːt/",
                "part": "adj.",
                "translation": "绝对的；完全的"
              },
              {
                "word": "anticipated",
                "phonetic": "/ænˈtɪsɪpeɪtɪd/",
                "part": "adj.",
                "translation": "预期的；预计的"
              },
              {
                "word": "offset",
                "phonetic": "/ˌɒfˈset/",
                "part": "v.",
                "translation": "抵消；补偿"
              },
              {
                "word": "effective",
                "phonetic": "/ɪˈfektɪv/",
                "part": "adj.",
                "translation": "有效的；产生预期效果的"
              }
            ],
            "sentences": [
              {
                "original": "But there are some welfare costs that are rising rapidly.",
                "analysis": [
                  "主干是 there are some welfare costs，使用 there be 句型引出正在上升的支出项目。",
                  "that are rising rapidly 是限制性定语从句，修饰 costs 并说明其变化趋势。",
                  "But 与前文福利支出占 GDP 比例变化不大形成转折，强调总量稳定不代表各项支出都稳定。",
                  "some 限定范围，避免把部分项目的增长概括成所有福利支出都急剧上升。",
                  "可借鉴 there are some ... that ... 从整体趋势中提出值得关注的例外。"
                ],
                "translation": "但有些福利支出正在迅速上升。"
              },
              {
                "original": "The final Milburn report is expected in the coming weeks.",
                "analysis": [
                  "句子主干是 The report is expected，采用一般现在时被动语态表达预期。",
                  "final 和 Milburn 前置限定 report，说明报告性质及所属审查。",
                  "in the coming weeks 是时间状语，标明可能提供新政策信息的时间窗口。",
                  "这句承接福利改革方案讨论，提示现阶段判断仍等待后续证据。",
                  "可借鉴 is expected in ... weeks 表达某项政策材料的预计发布时间。"
                ],
                "translation": "最终版米尔本报告预计将在未来几周内公布。"
              },
              {
                "original": "However, in the long term this approach could still deliver welfare savings if the employment support was effective.",
                "analysis": [
                  "主句核心是 this approach could deliver welfare savings，could 表示可能性而非确定结果。",
                  "However 转折前文短期内节省可能被其他部门新增支出抵消的判断。",
                  "in the long term 是时间状语，限定结论成立的时间尺度；still 强调尽管有近期成本仍可能节省。",
                  "if the employment support was effective 是条件状语从句，说明长期节省依赖支持措施发挥作用。",
                  "可借鉴 could still ... if ... 表达附带条件的长期收益，而不把政策效果说成必然。"
                ],
                "translation": "不过从长远看，如果就业支持确实有效，这种做法仍可能节省福利支出。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-29",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Copilot 图片生成、跨仓库 Projects 与 GitHub Agentic Workflows GA；注意预览资格、AI credits 和工作流的模型成本。",
        "updates": [
          {
            "event": "GitHub Copilot 聊天新增图片生成与编辑",
            "summary": "GitHub Copilot 可在聊天中按自然语言生成或编辑图片，先在对话中预览，再直接保存到项目工作区，减少切换到独立图像工具的步骤。",
            "howTo": "在 VS Code、GitHub Copilot app 或 Copilot CLI 打开 Copilot chat，描述所需图片；查看内嵌预览后按需继续修改，图片会保存到当前工作区。",
            "impact": "学生可为课程原型、展示页或报告草拟配图，并在同一开发环境中继续修改项目；提交前仍应核查图片内容和使用权。",
            "free": "官方公告称此功能处于 public preview，适用于 Copilot Pro、Pro+、Business 和 Enterprise；图片生成按 image tokens 单独计费并计入套餐 AI credits。公告未说明地区范围或单独配额，Copilot Free 不在公告列出的适用计划中。",
            "category": "GitHub Copilot / 图片生成",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot/"
            }
          },
          {
            "event": "GitHub Copilot app 推出跨仓库 Projects 预览",
            "summary": "Copilot app 的 Projects 可围绕一个持续目标汇集多个仓库、设计稿、Slack 讨论和笔记，由 Copilot 协调多个 agent 并集中呈现结果；单仓库任务仍可直接从仓库启动 session。",
            "howTo": "更新或打开 GitHub Copilot app，在 Projects 旁新建项目，描述目标并添加相关仓库或资料，再选择可用模型与工具并提交任务；在项目概览中跟进进度、审阅结果。",
            "impact": "小组课程项目可用它汇总需求、设计和多个仓库的任务状态，或先整理资料再分配实现工作；正式合并代码前仍需人工审阅 agent 结果。",
            "free": "官方文档将 Projects 标为 public preview，但未说明各 Copilot 套餐的可用资格、地区、价格或使用额度；需在 Copilot app 中查看账号当前可用功能。",
            "category": "GitHub Copilot / 项目协作",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases"
            }
          },
          {
            "event": "GitHub Agentic Workflows 正式发布",
            "summary": "GitHub Next 的开源 Agentic Workflows 正式可用：开发者用自然语言 Markdown 定义任务，再编译为标准 GitHub Actions YAML，让编码 agent 在 Actions 中处理 issue 分类、CI 失败分析、文档更新或测试编写。",
            "howTo": "在有写权限且启用了 GitHub Actions 的仓库，安装 GitHub CLI 扩展（`gh extension install github/gh-aw`），用 `gh aw add-wizard` 添加示例工作流；先检查模型引擎、权限和成本设置，再触发运行。",
            "impact": "学生团队可将重复的 issue 整理或测试辅助工作做成可审阅的仓库自动化，也能练习用 Markdown 定义 agent 任务、用 Actions 执行的开发流程。",
            "free": "官方称该功能在 github.com 面向 GitHub Free、Team 和 Enterprise 可用；若使用默认 GitHub Copilot CLI 引擎则需要 Copilot 许可。公告未说明 Actions 分钟数、第三方模型费用、地区或具体调用额度。",
            "category": "GitHub Agentic Workflows / 自动化",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：免费体验基础编程辅助",
            "summary": "GitHub 官方计划页列出 Copilot Free，提供有限范围的 Copilot 功能，可免费尝试 AI 编程辅助；学生也可在页面核验是否符合单独的 Copilot Student 资格。",
            "howTo": "打开 GitHub Copilot plans 页面，选择 Start using Copilot Free，按页面提示启用后在支持的 Copilot 客户端中尝试当前开放的 AI 编程辅助功能。",
            "impact": "适合初学者在课程项目中试用 AI 编程辅助，并练习核对建议、运行测试和独立判断结果；不要提交未经检查的代码。",
            "free": "官方计划页将 Copilot Free 标为免费，但功能有限；页面未列明其具体调用配额、地区资格或截止日期。Copilot Student 另需学生验证，不能与 Free 计划资格混为一谈。",
            "category": "长期免费服务 / 编程辅助",
            "source": {
              "name": "GitHub 官方 Copilot 计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Qwen3-0.6B：Apache 2.0 许可的可下载开放模型",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B 权重，标注 Apache 2.0 许可；卡片列出 0.6B 参数和 32,768 token 上下文，并给出 Transformers 加载示例。",
            "howTo": "打开模型卡查看许可和硬件要求；按 Quickstart 安装最新版 `transformers`，用 `Qwen/Qwen3-0.6B` 加载 tokenizer 与模型，在本地输入课程问答或翻译示例进行实验。",
            "impact": "有合适本地设备的学生可下载小型模型，练习本地推理、比较提示词或搭建无托管 API 的原型；应自行评估输出准确性与设备资源占用。",
            "free": "模型权重按 Apache 2.0 许可提供下载使用；模型卡未说明官方托管 API 的免费额度、地区资格或截止日期。本地推理的硬件、存储和电力成本由使用者承担。",
            "category": "开放模型权重 / 本地实验",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
            }
          },
          {
            "event": "Google AI 高校学生优惠：兑换后 12 个月订阅权益",
            "summary": "Google One 官方条款为符合条件的高校学生提供兑换后 12 个月的订阅权益，具体订阅计划取决于学校所在国家或地区。",
            "howTo": "先核对官方优惠条款，再使用个人 Google 账号完成 SheerID 学生验证和 Google Payments 付款方式设置，按页面提示兑换；若不准备续订，需在优惠期结束前取消。",
            "impact": "学生可在优惠期内使用所在地区实际提供的 Google AI 订阅权益整理课程材料或辅助复习；兑换前确认本地权益、使用限制和续费日期。",
            "free": "兑换后 12 个月免订阅费；须年满 18 岁、在支持地区（不含香港、澳门和突尼斯）的高等教育机构就读并通过 SheerID 验证，另需个人 Google 账号及合格付款方式；2026-12-31 前兑换。期满自动按当地标准月费续订（法律要求同意的地区除外），可取消；使用额度可能不同且会变化。",
            "category": "教育优惠 / Google AI",
            "source": {
              "name": "Google One 官方学生优惠条款",
              "published": "2026-08-19",
              "url": "https://one.google.com/offer/studentoffer8?g1_landing_page=0"
            }
          },
          {
            "event": "DeepL Translator 免费版：每月 50,000 字符翻译",
            "summary": "DeepL 官方计划对比页列出免费版每位用户每月 50,000 个字符的文本翻译额度，以及 1 个、最大 5 MB 的文件翻译。",
            "howTo": "在 DeepL Translator 粘贴英语段落或上传课程文档进行初译；对照原文检查术语、语气和逻辑连接，再自行修改，不把机器译文直接当作作业答案。",
            "impact": "阅读论文摘要或核对英文材料时，可先获得中文草译，再回到原文学习句法和术语；月度字符与文档限制适合短材料，不适合整本书批量翻译。",
            "free": "免费版文本额度为每用户每月 50,000 字符，文件翻译为 1 个、最大 5 MB；官方计划页未说明该文件额度的周期、地区资格、额外账号条件或截止日期。",
            "category": "免费学习工具 / 翻译",
            "source": {
              "name": "DeepL 官方计划与定价页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "Ollama：MIT 许可的本地开放模型运行器",
            "summary": "Ollama 官方仓库按 MIT 许可发布运行器，并提供 macOS、Windows、Linux 安装方式及在本机运行开放模型的命令示例。",
            "howTo": "从 Ollama 官方下载页安装对应系统版本，打开终端运行 `ollama run gemma4`，按提示下载模型并开始对话；可在官方模型库选择其他模型并单独核对其许可。",
            "impact": "可用来练习本地模型问答、比较同一课程问题在不同模型上的回答；适合希望试验本地推理、且拥有足够设备存储与算力的学生。",
            "free": "Ollama 运行器代码采用 MIT 许可；本地运行需要自行承担设备、存储和电力成本，模型权重另有各自许可。官方仓库未说明最低硬件要求、地区限制或固定使用配额。",
            "category": "开放模型工具 / 本地运行",
            "source": {
              "name": "Ollama 官方 GitHub 仓库",
              "published": "官方未说明",
              "url": "https://github.com/ollama/ollama"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Working-class academics are still struggling to fit in at university",
            "source": "The Conversation",
            "published": "2026-10-26",
            "url": "https://theconversation.com/working-class-academics-are-still-struggling-to-fit-in-at-university-293049",
            "readingTime": "约 7 分钟（估算）",
            "topic": "教育与社会 / 高校阶层包容、学术职业与身份认同",
            "summary": "文章指出，大学扩大弱势背景学生入学机会，并不代表高校教职员工也实现了同等包容：英国高校并未常规收集学者的社会经济背景数据，因此代表性仍难以量化。作者结合研究与自身经历说明，工作阶层学者往往被默认为需要适应中产规范，例如弱化口音或隐去出身；这种融入成本会消耗情感精力并损害真实表达。文章继而把问题从个人适应转向制度责任：少数员工网络只能作为起点，大学还应审视奖励机制与既有规范，建立无需个人压抑身份也能获得认同的环境。结论强调，若包容仍以同化为条件，高等教育就会继续复制历史不平等。",
            "reason": [
              "主题将教育机会、阶层流动与职场公平结合，适合教育公平和社会流动类考题。",
              "行文从数据缺口切入，继而结合研究解释同化压力及个人代价，最后提出制度层面的解决方向。",
              "可练习概括中心论点、区分个体经验与结构性证据，并判断作者为何把责任归于机构。",
              "词汇涉及 socioeconomic、assimilation、authenticity、systemic 等抽象社会科学表达。",
              "写作可借鉴“扩大机会不等于实现平等”的对照，以及由个体困境转向制度责任的论证路径。"
            ],
            "vocabulary": [
              {
                "word": "under-represented",
                "phonetic": "/ˌʌndəˌreprɪˈzentɪd/",
                "part": "adj.",
                "translation": "代表性不足的"
              },
              {
                "word": "socioeconomic",
                "phonetic": "/ˌsəʊsiəʊˌiːkəˈnɒmɪk/",
                "part": "adj.",
                "translation": "社会经济的"
              },
              {
                "word": "systemic",
                "phonetic": "/sɪˈstemɪk/",
                "part": "adj.",
                "translation": "系统性的"
              },
              {
                "word": "conditional",
                "phonetic": "/kənˈdɪʃənəl/",
                "part": "adj.",
                "translation": "有条件的"
              },
              {
                "word": "authenticity",
                "phonetic": "/ˌɔːθenˈtɪsəti/",
                "part": "n.",
                "translation": "真实性；真实表达"
              },
              {
                "word": "assimilate",
                "phonetic": "/əˈsɪməleɪt/",
                "part": "v.",
                "translation": "同化；融入"
              },
              {
                "word": "onus",
                "phonetic": "/ˈəʊnəs/",
                "part": "n.",
                "translation": "责任；义务"
              },
              {
                "word": "erode",
                "phonetic": "/ɪˈrəʊd/",
                "part": "v.",
                "translation": "逐渐损害；削弱"
              },
              {
                "word": "implicitly",
                "phonetic": "/ɪmˈplɪsɪtli/",
                "part": "adv.",
                "translation": "含蓄地；不明说地"
              },
              {
                "word": "perpetuate",
                "phonetic": "/pəˈpetʃueɪt/",
                "part": "v.",
                "translation": "使持续；使永久化"
              }
            ],
            "sentences": [
              {
                "original": "Higher education is not a neutral space.",
                "analysis": [
                  "主干是 Higher education is a space，系动词后由名词短语作表语。",
                  "not 否定 neutral，直接提出全文的核心判断，而非描述校园的物理空间。",
                  "这句承接标题中的“融入困难”，把讨论从个人经历提升到制度环境。",
                  "可借鉴 not a neutral space 概括机构如何承载既有权力关系。",
                  "简短判断句为后续历史背景和研究证据建立论述框架。"
                ],
                "translation": "高等教育并不是一个中立的空间。"
              },
              {
                "original": "There is a hidden cost of fitting in.",
                "analysis": [
                  "There is 是存在句，真正的语义中心是 a hidden cost。",
                  "of fitting in 是介词短语，说明这种隐性代价与融入行为相关。",
                  "hidden 与 cost 组合，把外表上的适应转化为需要揭示的心理和情感负担。",
                  "这句由前文的适应要求转向其后果，是段落论证的转折点。",
                  "可使用 the hidden cost of... 引出某种做法未被看见的代价。"
                ],
                "translation": "融入其中存在一种隐性的代价。"
              },
              {
                "original": "Universities do not just shape knowledge.",
                "analysis": [
                  "主干为 Universities shape knowledge，do not just 对谓语进行否定和限制。",
                  "just 暗示大学的作用不止于知识生产，后文将补充其对知识生产者的影响。",
                  "此处以 not just 引出超出表面功能的另一层作用，形成递进。",
                  "该句位于结尾，呼应文章从学者个人经历扩展到高校制度责任的结构。",
                  "可借鉴 do not just X，为后续补充更深层影响留出论证空间。"
                ],
                "translation": "大学塑造的不只是知识。"
              }
            ]
          },
          {
            "title": "What is ‘human composting’ – and how does it work?",
            "source": "The Conversation",
            "published": "2026-10-26",
            "url": "https://theconversation.com/what-is-human-composting-and-how-does-it-work-294951",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境与文化 / 绿色殡葬、遗体处理与公共政策",
            "summary": "文章从人死后遗体如何处理这一个人选择出发，介绍澳大利亚新南威尔士州通过允许“人体堆肥”的立法，并解释自然有机还原如何在受控容器中借助木屑、稻草等材料和微生物加速分解。作者先梳理传统土葬、绿色葬礼及其空间和环境问题，再比较新方法与其他选择，指出这一过程并非所有材料都会自然分解，且需要后续处理。文章也提醒，立法通过不等于设施已可用，实施仍需监管、专门设施和足够需求；各种方式的可持续性都需要审视，目前资料不足以作简单优劣排序。结尾回到价值判断：遗体最终都会进入自然循环，关键在于以知情讨论决定方式、地点与时间。",
            "reason": [
              "主题兼有环境可持续性、文化习俗与殡葬政策，适合公共议题和生活方式类阅读。",
              "文章按提出新选择、解释原理、比较替代方案、指出证据局限的顺序展开，结构清晰。",
              "可练习辨析事实说明与价值判断，并理解作者为何拒绝给出简单的优劣结论。",
              "词汇覆盖 decomposition、legislation、scrutiny、offset 等环境与政策议题常用词。",
              "写作可借鉴先说明技术机制、再讨论外部影响与限制，最后回到个人选择的层次安排。"
            ],
            "vocabulary": [
              {
                "word": "decomposition",
                "phonetic": "/ˌdiːkɒmpəˈzɪʃən/",
                "part": "n.",
                "translation": "分解；腐解"
              },
              {
                "word": "cemetery",
                "phonetic": "/ˈsemətri/",
                "part": "n.",
                "translation": "墓地；公墓"
              },
              {
                "word": "sustainable",
                "phonetic": "/səˈsteɪnəbəl/",
                "part": "adj.",
                "translation": "可持续的"
              },
              {
                "word": "microorganisms",
                "phonetic": "/ˌmaɪkrəʊˈɔːɡənɪzəmz/",
                "part": "n.",
                "translation": "微生物"
              },
              {
                "word": "legislation",
                "phonetic": "/ˌledʒɪsˈleɪʃən/",
                "part": "n.",
                "translation": "立法；法律"
              },
              {
                "word": "terramation",
                "phonetic": "/ˌterəˈmeɪʃən/",
                "part": "n.",
                "translation": "人体堆肥；自然有机还原"
              },
              {
                "word": "nutrient-rich",
                "phonetic": "/ˈnjuːtriənt rɪtʃ/",
                "part": "adj.",
                "translation": "富含养分的"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "仔细审查；审视"
              },
              {
                "word": "offset",
                "phonetic": "/ˌɒfˈset/",
                "part": "v.",
                "translation": "抵消；弥补"
              },
              {
                "word": "closure",
                "phonetic": "/ˈkləʊʒə/",
                "part": "n.",
                "translation": "了结感；情感上的释怀"
              }
            ],
            "sentences": [
              {
                "original": "There is no simple answer.",
                "analysis": [
                  "There is 是存在句，no simple answer 是其核心信息。",
                  "no 否定 answer 的存在，simple 限定的是答案难以简化，而非问题无解。",
                  "这句承接前文列出的多种遗体处理方式，提示比较需要考虑多个因素。",
                  "它为后文讨论各选项的利弊和证据不足作出让步式铺垫。",
                  "可借鉴 There is no simple answer to... 引出复杂议题中的多方权衡。"
                ],
                "translation": "这个问题没有简单的答案。"
              },
              {
                "original": "Terramation speeds up natural decomposition under controlled conditions.",
                "analysis": [
                  "句子主干是 Terramation speeds up decomposition，主语为处理方式，谓语为 speeds up。",
                  "natural 修饰 decomposition，说明被加速的是自然分解过程。",
                  "under controlled conditions 是介词短语，交代过程发生的条件。",
                  "作者用一般现在时说明该方法的工作原理，而不是某次个案结果。",
                  "可借鉴 speed up... under... 描述某种条件如何改变一个过程。"
                ],
                "translation": "人体堆肥会在受控条件下加快自然分解。"
              },
              {
                "original": "The question is not whether we decompose, but how, where and how quickly.",
                "analysis": [
                  "主干为 The question is not A, but B，通过 not...but... 重设讨论重点。",
                  "whether we decompose 是 whether 引导的表语从句，指出分解这一事实并非真正争议。",
                  "how、where、how quickly 并列，分别追问方式、地点和速度。",
                  "逻辑从“是否发生”转向“以何种方式发生”，为比较政策和个人选择收束全文。",
                  "可借鉴 not whether..., but how... 将论证从既定事实推进到可选择的方案。"
                ],
                "translation": "问题不在于我们是否会分解，而在于如何分解、在哪里分解，以及分解得多快。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-28",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Claude API 与 SDK 更新、Claude 接入 Google Cloud，以及 Copilot 组织级影响面板；留意破坏性变更、云端计费和组织数据的自愿参与。",
        "updates": [
          {
            "event": "Claude API 2026-10-21 版本与多语言 SDK 发布",
            "summary": "Anthropic 发布 API 版本 2026-10-21，并同步更新 Python、TypeScript、C#、Go、Java、PHP、Ruby SDK 与 ant CLI，使其默认发送这一 API 版本。新 SDK/CLI 另有不依赖 API 版本的破坏性变更，许可从 MIT 改为 Apache 2.0。",
            "howTo": "维护 Claude API 项目的学生可先读官方迁移指南，再将 Python SDK 更新至 anthropic 2.0.0（`pip install anthropic==2.0.0`），按指南处理 SDK 破坏性变更；其他语言使用对应的新版本。",
            "impact": "课程原型若使用 Claude API，可检查请求版本和依赖升级对现有代码的影响；新 SDK/CLI 的 Apache 2.0 许可也适合需要核对依赖许可的项目。",
            "free": "官方确认 SDK/CLI 许可为 Apache 2.0；该版本说明未注明 API 的免费层、价格、调用配额或地区限制，不能据此认定 API 调用免费。",
            "category": "Claude / API 与开发工具",
            "source": {
              "name": "Anthropic Claude Platform 官方发布说明",
              "published": "2026-10-21",
              "url": "https://platform.claude.com/docs/en/release-notes/overview"
            }
          },
          {
            "event": "Claude API 可通过 Google Cloud 项目使用（2026-10-22）",
            "summary": "Anthropic 将其托管的 Claude API 接入 Google Cloud 项目；Google Cloud IAM 控制访问，Google Cloud Marketplace 处理账单。这是不同于 Google 托管模型的 Anthropic 托管选项。",
            "howTo": "在 Google Cloud Marketplace 找到 Claude Models on Google Cloud（Anthropic managed）并订阅；按官方接入文档启用两个服务、激活 Anthropic 组织，再通过 Claude Console 配置 IAM 权限和 API 调用。",
            "impact": "已有 Google Cloud 课程或实验室项目的开发者可在现有云项目中评估 Claude API；开始前应让项目负责人确认权限和账单归属。",
            "free": "官方文档说明需经 Marketplace 订阅并由 Google Cloud 处理账单，但未说明价格、免费额度、调用配额或地区范围；不应把它当作免费服务。",
            "category": "Claude / 云端 API",
            "source": {
              "name": "Anthropic Claude Platform 官方发布说明",
              "published": "2026-10-22",
              "url": "https://platform.claude.com/docs/en/release-notes/overview"
            }
          },
          {
            "event": "Copilot 影响面板新增行业对比（2026-10-22）",
            "summary": "GitHub 为 Copilot impact dashboard 增加行业对比：符合条件的企业和非企业所属组织可自愿加入，与参与组织比较 agent-first/multi-agent 使用比例及相关 PR 合并率；参与默认关闭，基准按 28 天周期计算。",
            "howTo": "企业所有者或非企业所属组织的所有者，在 Copilot 用量指标政策已启用的前提下，从影响面板或组织/企业 Copilot 政策中选择加入，再按公司规模和行业查看对比；普通成员需有面板查看权限。",
            "impact": "在实习团队或课程组织中使用 Copilot 的学生，可借面板了解组织采用情况及比较口径；对比是汇总指标而非个人排名，是否贡献数据由组织选择。",
            "free": "公告仅说明组织级适用范围和自愿参与方式，未说明费用、个人免费资格或调用配额；数据仅用于面板比较，退出后停止展示并在下一次每日更新中排除，汇总数据 30 天后删除。",
            "category": "GitHub Copilot / 组织分析",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-22",
              "url": "https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google AI 高校学生优惠：兑换后 12 个月订阅权益",
            "summary": "Google 为符合条件的高校学生提供兑换后 12 个月的 Google AI 订阅权益；订阅档位取决于学校所在国家或地区。官方说明美国对应 Google AI Pro，140 多个国家/地区对应 Google AI Plus。",
            "howTo": "先核对官方优惠条款，再使用个人 Google 账号完成 SheerID 学生验证和 Google Payments 付款方式设置，按页面提示兑换；若不准备续订，需在优惠期结束前取消。",
            "impact": "适合用 Gemini 学生中心和学习笔记功能整理课程材料、准备课堂复习；兑换前确认本地档位和续费日期，避免优惠结束后产生标准月费。",
            "free": "优惠期 12 个月免订阅费，须年满 18 岁、在支持地区（不含香港、澳门和突尼斯）的高等教育机构就读并通过 SheerID 验证，另需个人 Google 账号及合格付款方式；2026-12-31 前兑换。期满自动按当地标准月费续订（法律要求同意的地区除外），可取消；使用额度可能不同且会变化。",
            "category": "教育优惠 / Google AI",
            "source": {
              "name": "Google One 官方学生优惠条款",
              "published": "2026-08-19",
              "url": "https://one.google.com/offer/studentoffer8?g1_landing_page=0"
            }
          },
          {
            "event": "DeepL Translator 免费版：每月 50,000 字符翻译",
            "summary": "DeepL 官方计划对比页列出免费版每位用户每月 50,000 个字符的文本翻译额度，并提供每月 1 个、最大 5 MB 的文件翻译。",
            "howTo": "在 DeepL Translator 粘贴英语段落或上传课程文档进行初译；对照原文检查术语、语气和逻辑连接，再自行修改，不把机器译文直接当作作业答案。",
            "impact": "阅读论文摘要或核对英文材料时，可先获得中文草译，再回到原文学习句法和术语；月度字符与文档限制适合短材料，不适合整本书批量翻译。",
            "free": "免费版文本额度为每用户每月 50,000 字符，文件翻译每月 1 个、文件最大 5 MB；官方计划页未说明地区资格、额外账号条件或截止日期。",
            "category": "免费学习工具 / 翻译",
            "source": {
              "name": "DeepL 官方计划与定价页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "Ollama：MIT 许可的本地开放模型运行器",
            "summary": "Ollama 官方 GitHub 仓库提供 macOS、Windows、Linux 安装方式，并支持在本机运行开放模型；项目代码按 MIT 许可发布。",
            "howTo": "从 Ollama 官方下载页安装对应系统版本，启动后在终端运行 `ollama run gemma4`，按提示下载并开始对话；可查看官方模型库选择其他模型。",
            "impact": "可用来练习本地模型问答、比较不同模型对同一课程问题的回答；模型权重许可和运行所需硬件需分别检查。",
            "free": "运行器源码采用 MIT 许可；本地运行需要自行承担设备、存储和电力成本，模型权重另有各自许可。官方仓库未说明最低硬件要求、地区限制或固定使用配额。",
            "category": "开放模型工具 / 本地运行",
            "source": {
              "name": "Ollama 官方 GitHub 仓库",
              "published": "官方未说明",
              "url": "https://github.com/ollama/ollama"
            }
          },
          {
            "event": "Phi-4-mini-instruct：MIT 许可的多语言开放权重",
            "summary": "Microsoft 官方 Hugging Face 模型卡提供 Phi-4-mini-instruct 权重下载，标注 MIT 许可；模型为 3.8B 参数、支持最长 128K token 上下文，面向多语言指令与推理任务。",
            "howTo": "打开 Microsoft 模型卡下载权重；按卡片中的 Transformers 示例安装 `transformers` 与 `accelerate`，再用 `microsoft/Phi-4-mini-instruct` 加载模型并运行本地推理。",
            "impact": "适合有本地计算环境的学生尝试摘要、问答或小型原型，并与托管模型对照；模型卡提醒其规模限制可能导致事实错误，重要内容仍需核查。",
            "free": "模型权重按 MIT 许可提供，可下载使用；模型卡未说明官方托管 API 免费额度、地区资格、截止日期或最低硬件配置。本地推理仍需自行准备算力和存储。",
            "category": "开放模型权重 / 多语言",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Would you pay to have the ‘best baby’? Liberal eugenics and the troubling quest for human perfection",
            "source": "The Guardian",
            "published": "2026-10-27",
            "url": "https://www.theguardian.com/news/ng-interactive/2026/oct/27/would-you-pay-to-have-the-best-baby-liberal-eugenics-and-the-troubling-quest-for-human-perfection",
            "readingTime": "约 12 分钟（估算）",
            "topic": "社会与健康 / 基因筛选、残障权利与优生学伦理",
            "summary": "作者从自己童年被诊断为脊髓性肌萎缩症、后来发现诊断有误的经历出发，回顾优生学如何从国家主导的人口管理转向以个人选择为名的胚胎筛选。文章借商业基因公司的“最佳婴儿”宣传，指出群体层面的遗传统计并不能可靠决定单个孩子的特征；更深层的风险是把生产力与竞争优势当作理想人生标准，令残障者及其家庭承受新的压力。作者并不否定治疗，而主张改善社会环境、承认人的差异，而非追求单一的完美标准。",
            "reason": [
              "主题把基因技术、家庭选择、残障权利与社会公平联系起来，适合科技伦理和社会政策类考题。",
              "结构由个人叙事引出历史背景，再分析当代商业化筛选，最后提出“改善社会而非改造人”的立场。",
              "可练习识别作者态度、论据与结论，也可讨论一项技术的个人收益和社会代价。",
              "词汇覆盖 eugenics、hereditary、imperative、repressive 等抽象社会科学表达。",
              "写作可借鉴让步与转折：承认治疗的价值，同时质疑把选择扩展为单一完美标准。"
            ],
            "vocabulary": [
              {
                "word": "eugenics",
                "phonetic": "/juːˈdʒenɪks/",
                "part": "n.",
                "translation": "优生学"
              },
              {
                "word": "hereditary",
                "phonetic": "/həˈredɪtəri/",
                "part": "adj.",
                "translation": "遗传的"
              },
              {
                "word": "imperative",
                "phonetic": "/ɪmˈperətɪv/",
                "part": "n.",
                "translation": "迫切要求；必要之事"
              },
              {
                "word": "consumerist",
                "phonetic": "/kənˈsjuːmərɪst/",
                "part": "adj.",
                "translation": "消费主义的"
              },
              {
                "word": "repressive",
                "phonetic": "/rɪˈpresɪv/",
                "part": "adj.",
                "translation": "压制性的"
              },
              {
                "word": "population-level",
                "phonetic": "/ˌpɒpjʊˈleɪʃən ˈlevəl/",
                "part": "adj.",
                "translation": "群体层面的"
              },
              {
                "word": "genomics",
                "phonetic": "/dʒɪˈnəʊmɪks/",
                "part": "n.",
                "translation": "基因组学"
              },
              {
                "word": "individualist",
                "phonetic": "/ˌɪndɪˈvɪdʒuəlɪst/",
                "part": "adj.",
                "translation": "个人主义的"
              },
              {
                "word": "accommodate",
                "phonetic": "/əˈkɒmədeɪt/",
                "part": "v.",
                "translation": "适应；容纳"
              },
              {
                "word": "variation",
                "phonetic": "/ˌveəriˈeɪʃn/",
                "part": "n.",
                "translation": "差异；变异"
              }
            ],
            "sentences": [
              {
                "original": "It is hard to be young and to know that you are growing weaker rather than stronger.",
                "analysis": [
                  "主干是 It is hard，it 作形式主语，真正主语由后面的不定式结构承担。",
                  "to be young 与 to know 并列，说明作者认为困难的两件事。",
                  "that 引导 know 的宾语从句；you are growing weaker 是从句主干。",
                  "rather than 连接 weaker 与 stronger，形成“变弱而非变强”的对照。",
                  "可借鉴 It is hard to... 描述某种经历或处境带来的困难。"
                ],
                "translation": "年轻时得知自己正在变弱而非变强，是一件很难承受的事。"
              },
              {
                "original": "Although we may not be immortality-seeking billionaires, we are all constantly living under the relentless imperative to strive for human perfection, in our own generation and the next.",
                "analysis": [
                  "Although 引导让步状语从句，先承认普通人并非追求永生的亿万富翁。",
                  "主句主干是 we are living under the imperative，all、constantly 修饰主句谓语。",
                  "relentless 修饰 imperative；to strive for... 是不定式，说明这种要求指向什么行动。",
                  "in our own generation and the next 补充说明追求延伸到当代与下一代。",
                  "可用 Although..., ... 引出“即便不是极端情况，普遍压力仍存在”的论证。"
                ],
                "translation": "尽管我们未必是追求永生的亿万富翁，却都不断承受着追求人类完美的强烈要求，并把它延伸到自己这一代和下一代。"
              },
              {
                "original": "The goal is not to abolish cures, but to abolish the idea that only cures, or the prenatal optimisation of an embryo, can make for a life worth living.",
                "analysis": [
                  "主干是 The goal is not A, but B，用 not...but... 澄清作者反对的对象。",
                  "A 与 B 都是不定式短语，平行结构突出“反对治愈”与“反对单一生命标准”的区别。",
                  "that 引导 idea 的同位语从句，解释作者要质疑的观念。",
                  "only cures 与 prenatal optimisation 并列为限制性条件；worth living 后置修饰 life。",
                  "可借鉴 not to reject X, but to question Y，避免把复杂立场简化成二选一。"
                ],
                "translation": "目标并非废除治疗，而是废除这样一种观念：只有治愈疾病或在产前优化胚胎，生命才值得一过。"
              }
            ]
          },
          {
            "title": "Looted by Nazis and Recently Restituted, a Kaleidoscopic Kandinsky Painting Just Sold for Nearly $42 Million",
            "source": "Smithsonian Magazine",
            "published": "2026-10-27",
            "url": "https://www.smithsonianmag.com/smart-news/looted-by-nazi-and-recently-restituted-a-kaleidoscopic-kandinsky-painting-just-sold-for-nearly-42-million-180989763/",
            "readingTime": "约 5 分钟（估算）",
            "topic": "文化 / 纳粹掠夺艺术、文物归还与拍卖市场",
            "summary": "文章以康定斯基《多彩生活》以约 4,200 万美元成交为切入点，回溯作品的创作背景、俄罗斯民间传说与法国野兽派影响，以及荷兰犹太收藏家 Lewenstein 家族的收藏史。纳粹占领荷兰后，画作未经家族授权便被拍卖；作品后来进入德国银行收藏并在慕尼黑博物馆长期展出。经过后代多年追索，德国咨询委员会于 2023 年建议归还，作品最终回到家族继承人手中再进入拍卖。文章以这次交易既结束家族寻回之路、又开启作品新篇章作结。",
            "reason": [
              "文化遗产、战争掠夺和归还机制构成历史与公共记忆类主题，适合文化保护和正义议题。",
              "行文按拍卖新闻、作品背景、产权流转、司法/委员会建议到家族追索结果推进，时间线清晰。",
              "可练习根据时间标记复原事件顺序，并区分事实报道、历史背景与结尾评价。",
              "词汇涉及 restitution、heirs、auction、proceeds、impasse 等文化遗产和法律语境表达。",
              "写作可用“事件结果—历史来由—制度处理—意义评价”的结构讨论文物返还。"
            ],
            "vocabulary": [
              {
                "word": "restituted",
                "phonetic": "/ˈrestɪtjuːtɪd/",
                "part": "adj.",
                "translation": "已归还的；已返还的"
              },
              {
                "word": "rightful",
                "phonetic": "/ˈraɪtfəl/",
                "part": "adj.",
                "translation": "合法拥有的；正当的"
              },
              {
                "word": "heirs",
                "phonetic": "/eəz/",
                "part": "n.",
                "translation": "继承人"
              },
              {
                "word": "auction",
                "phonetic": "/ˈɔːkʃn/",
                "part": "n.",
                "translation": "拍卖"
              },
              {
                "word": "estimate",
                "phonetic": "/ˈestɪmət/",
                "part": "n.",
                "translation": "估价；估算"
              },
              {
                "word": "saleroom",
                "phonetic": "/ˈseɪlruːm/",
                "part": "n.",
                "translation": "拍卖大厅"
              },
              {
                "word": "proceeds",
                "phonetic": "/ˈprəʊsiːdz/",
                "part": "n.",
                "translation": "收益；所得款项"
              },
              {
                "word": "impasse",
                "phonetic": "/ˈɪmpɑːs/",
                "part": "n.",
                "translation": "僵局"
              },
              {
                "word": "triumphant",
                "phonetic": "/traɪˈʌmfənt/",
                "part": "adj.",
                "translation": "胜利的；成功的"
              },
              {
                "word": "multi-generational",
                "phonetic": "/ˌmʌlti dʒenəˈreɪʃənəl/",
                "part": "adj.",
                "translation": "跨越数代的"
              }
            ],
            "sentences": [
              {
                "original": "Over six tense minutes, bids flooded the packed saleroom and telephone banks.",
                "analysis": [
                  "主干是 bids flooded the saleroom and telephone banks，主语 bids 与并列宾语构成现场画面。",
                  "Over six tense minutes 是时间状语，tense 修饰 minutes，营造紧张气氛。",
                  "packed 是过去分词形容词，修饰 saleroom；telephone banks 与其并列。",
                  "flooded 在此用作比喻动词，强调竞价迅速涌入。",
                  "可用 Over + 时间状语引出一段事件，并以生动动词浓缩场面。"
                ],
                "translation": "在紧张的六分钟里，竞价不断涌入拥挤的拍卖大厅和电话竞拍席。"
              },
              {
                "original": "The family never authorized the transaction, nor did they receive any proceeds.",
                "analysis": [
                  "前半句主干为 The family never authorized the transaction，never 强调从未授权。",
                  "nor 引出否定并列分句，表示“也没有”；助动词 did 前置形成倒装。",
                  "they receive any proceeds 与前句共享同一主语，any 用于否定语境。",
                  "两项否定并列呈现交易的不公：没有授权，也没有得到收益。",
                  "可用 ..., nor did + 主语 + 动词补充第二项否定事实。"
                ],
                "translation": "家族从未授权这笔交易，也没有收到任何收益。"
              },
              {
                "original": "The legal impasse finally broke in 2023, when Germany’s advisory commission on Nazi-looted art recommended that the painting should be returned to the family.",
                "analysis": [
                  "主句主干是 The legal impasse broke，finally 和 in 2023 标出僵局结束的时间。",
                  "when 引导非限制性时间从句，交代僵局打破时发生的关键制度行动。",
                  "recommended 后接 that 宾语从句；从句用 should be returned 被动结构突出画作。",
                  "on Nazi-looted art 修饰 commission，说明委员会讨论的专业领域。",
                  "可用 when 从句把事件结果与具体制度节点连接起来。"
                ],
                "translation": "法律僵局终于在 2023 年打破；当时德国纳粹掠夺艺术品咨询委员会建议将这幅画归还家族。"
              }
            ]
          }
        ]
      }
    }
  ]
};
