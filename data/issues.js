window.BRIEFING_DATA = {
  "updatedAt": "2026-10-26T09:09:44.770+08:00",
  "issues": [
    {
      "date": "2026-10-26",
      "status": "ready",
      "ai": {
        "intro": "本期整理 GitHub Copilot 在 10 月 19—23 日的三项变化：旧模型停用、Visual Studio 新增代码代理工作流，以及在 Teams 对话中把问题转成代码修复。涉及学生免费计划的功能和组织版权限分别标注，开始使用前请核对账户入口。",
        "updates": [
          {
            "event": "GitHub Copilot 停用六个模型并给出替代项（2026-10-19）",
            "summary": "GitHub 于 10 月 19 日起在 Copilot 的多数体验中停用 Gemini 3.7 Flash、GPT-5.5、GPT-5.4、GPT-5.4 mini、GPT-5 mini 和 Grok 4.5，并分别建议改用 Gemini 3.8 Flash、GPT-6.1 Sol、GPT-6.1 Sol、GPT-6 Luna、GPT-6 Luna 和 Grok 4.7。",
            "howTo": "在 VS Code 或 GitHub.com 打开 Copilot Chat 的模型选择器，检查当前工作流是否仍选择已停用模型，并改选公告中的替代项；若替代模型未显示，按 GitHub 文档检查账户计划和组织模型策略。",
            "impact": "写课程项目或练习代码时，若原先固定使用这些模型，切换到官方建议的替代项可避免工作流中断；提交前仍需运行测试并人工检查生成代码。",
            "free": "公告称这些模型在 Copilot 多数体验中停用，企业版管理员可能需要开放替代模型；公告未说明各替代模型对每个计划、地区的可用性或调用配额，也未说明额外价格。",
            "category": "GitHub Copilot / 模型更新",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-19",
              "url": "https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026"
            }
          },
          {
            "event": "GitHub Copilot for Visual Studio 更新：PR 代理与 NuGet 修复（2026-10-22）",
            "summary": "GitHub 汇总了 Visual Studio 2026 的 Copilot 更新：Git agent 可在聊天中探索并总结拉取请求；Bring Your Own Model（预览）改为依赖新的 Agent（Preview）；NuGet Audit 警告可触发 Copilot 修复易受影响的软件包。",
            "howTo": "在 Visual Studio 2026 打开 Copilot Chat，选择 Git agent 并从 Git Repository 窗口附加一个 PR；要试用 NuGet 修复，则在 Copilot Chat 工具菜单启用 NuGet MCP server，再从 Error List 中打开相关 Audit 警告。",
            "impact": "小组作业或开源贡献中，可先让 Git agent 汇总 PR 讨论和关联文件；维护 .NET 项目时，可用修复动作生成依赖更新建议，再核验变更并运行测试。",
            "free": "官方称该更新面向所有 Copilot 计划，包括 Free 和 Student。NuGet 修复需要登录 Copilot 并启用 NuGet MCP server；PR 探索需要连接 GitHub 或 Azure DevOps 的 MCP server。BYOM 仍是预览功能。公告未说明地区或额外调用配额。",
            "category": "GitHub Copilot / Visual Studio 开发辅助",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-22",
              "url": "https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2"
            }
          },
          {
            "event": "GitHub 将 Copilot 与 Teams 通知整合，可从问题推进到 PR（2026-10-23）",
            "summary": "新版 GitHub Teams 应用把仓库通知和 Copilot 放进频道、群聊或私聊：成员可提及 @GitHub，让它调查收到的问题、尝试修复并创建拉取请求，随后由团队审查。旧版 GitHub app 将于 11 月 16 日退役。",
            "howTo": "在 Microsoft Teams 安装或更新 GitHub app；在对话中提及 @GitHub，按提示连接 GitHub 账户并选择仓库，再对收到的问题请求调查和修复。对生成的 PR 进行测试和代码审查；若仍用旧版 app，先迁移到新版。",
            "impact": "课程团队可把 Teams 中的 bug 报告转为带 PR 的协作任务，减少复制上下文的步骤；Copilot 的修改仍须由组员审查，不应直接合并未经验证的代码。",
            "free": "官方公告说明需安装新版 Teams 应用、连接 GitHub 账户并选择仓库，但未说明 Copilot 计划资格、额外价格、地区范围或调用配额；旧版应用计划于 2026-11-16 退役。",
            "category": "GitHub Copilot / Teams 协作",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-23",
              "url": "https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude 免费版：网页、桌面和手机端学习助手",
            "summary": "Anthropic 官方计划页列出每人可用的 $0 免费版，支持网页、桌面和移动端对话，以及网页搜索、文件创建、代码运行、Artifacts 等功能。",
            "howTo": "访问 Claude 网页版或安装桌面/移动端应用，使用免费账户开始对话；可上传课程材料后要求解释概念、比较观点或生成复习提纲，并对照原文检查引文。",
            "impact": "适合把长阅读拆成概念问答、草拟复习提纲或运行小段代码；免费版使用量有限，遇到限额时可稍后再试，不要把它当作无限服务。",
            "free": "官方标价 $0 且称免费版面向所有人，使用量限制适用；定价页未说明确切额度、地区范围或截止日。",
            "category": "免费 AI 助手 / 阅读与研究",
            "source": {
              "name": "Anthropic Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Gemini Developer API 免费层：指定模型可免费调用",
            "summary": "Google 官方定价页显示，免费层可使用部分指定模型并免收输入、输出 token 费用，也可从 Google AI Studio 开始构建；免费层数据可能用于改进 Google 产品。",
            "howTo": "在 Google AI Studio 创建 API key，查看 Gemini API 定价页中标明 Free Tier 的模型，再按快速入门发送少量测试请求；不要把密钥写入公开仓库。",
            "impact": "可用来练习 API 调用、制作课程资料问答原型或比较提示词；应留意所选模型是否在免费层，并避免上传敏感或未获授权的材料。",
            "free": "官方确认部分模型的输入和输出 token 免费，但免费层仅限特定模型；通用配额、地区资格和截止日期官方未说明。官方指出免费层提交的数据可能用于改进产品。",
            "category": "免费 API / 应用原型",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Hugging Face ZeroGPU：免费体验社区模型演示",
            "summary": "Hugging Face 官方文档说明，现有 ZeroGPU Spaces 可免费使用；匿名用户每日含 2 分钟 GPU 额度，免费账户每日含 5 分钟。额度从首次使用后每 24 小时重置，剩余额度也会影响排队优先级。",
            "howTo": "打开 Hugging Face 官方整理的 ZeroGPU Spaces 清单，选择图像或模型演示并运行短任务；登录免费账户可使用每日 5 分钟额度，先查看队列和剩余额度。",
            "impact": "不必先配置本地 GPU，就能体验图像生成、模型推理或交互式演示，适合课堂展示和快速验证；共享空间的额度和排队不适合作为稳定生产服务。",
            "free": "官方说明已有 ZeroGPU Spaces 对所有用户免费：匿名每日 2 分钟、免费账户每日 5 分钟，首次使用后每 24 小时重置。地区和活动截止日期官方未说明。",
            "category": "免费 GPU 演示 / 模型体验",
            "source": {
              "name": "Hugging Face 官方 ZeroGPU 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces-zerogpu"
            }
          },
          {
            "event": "GitHub Copilot Student：通过学生验证免费使用",
            "summary": "GitHub 官方计划说明，经过验证的学生可免费使用 Copilot Student；包含 GitHub AI Credits 额度，模型仅支持自动选择，部分聊天和代理能力有限。",
            "howTo": "先在 GitHub Education 完成学生身份验证，再按 Copilot Student 设置指南启用方案；在 IDE 安装 Copilot 扩展并登录已验证的 GitHub 账户。",
            "impact": "可用于解释代码、补全课程项目和尝试受限的代理功能；注意学生方案的 AI Credits 与聊天/代理能力有限，核对计划页的当期规则。",
            "free": "官方明确 Copilot Student 对验证学生免费；包含额度但精确 AI Credits 数量和地区/验证资格细节未在计划页统一说明，模型选择仅限自动模式。",
            "category": "学生教育权益 / 编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划文档",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "EmbeddingGemma 2：Apache-2.0 许可的多模态嵌入模型",
            "summary": "Google DeepMind 于 10 月 6 日发布 EmbeddingGemma 2 开放权重，可将文本、代码、图像、视频和音频映射到统一向量空间；模型卡标注 Apache 2.0 许可，适合下载到本地练习语义检索。",
            "howTo": "从 Google 官方公告进入 Hugging Face 模型卡，按 Quick Start 安装 sentence-transformers 与 transformers，并用示例加载 google/embeddinggemma-2；运行前确认本地存储和计算资源足够。",
            "impact": "可为课程论文资料、图片或录音建立本地语义检索原型，练习向量检索与多模态索引；本地处理可减少把原始资料上传到托管服务的需要。",
            "free": "官方提供可下载权重并标注 Apache 2.0 许可；公告未提供托管 API 免费额度，也未说明地区、截止日或最低硬件要求。下载存储和本地运算成本由使用者承担。",
            "category": "开放模型权重 / 本地学习",
            "source": {
              "name": "Google AI 官方产品公告",
              "published": "2026-10-06",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "How much filter is too much filter for kids and teens posting selfies on social media?",
            "source": "NPR",
            "published": "2026-10-25",
            "url": "https://www.npr.org/2026/10/25/nx-s1-6011190/meta-facebook-settlement-beauty-filters-ai",
            "readingTime": "约 7 分钟（估算）",
            "topic": "社会 / 青少年社交媒体与身体形象",
            "summary": "NPR 从 Meta 与美国各州就未成年人美容滤镜达成的和解切入，讨论监管者如何界定哪些效果应被限制。报道先用一名青少年讲述滤镜对自我形象的影响，再对照夸张的“整形”效果与仍可能保留的轻微修饰，指出后者更难识别和规管。随后文章梳理平台已有的过滤器限制、AI 标记与检测措施为何仍难以阻止有害内容，并呈现州与州之间、美国与欧洲之间不同的监管路径。结尾强调美容标准和技术持续变化，政策制定者需要倾听青少年，并考虑更广泛的未成年人 AI 保护，而非只争论像素或单一滤镜定义。",
            "reason": [
              "主题涉及社交媒体、青少年心理与数字治理，适合社会发展和媒介素养类阅读。",
              "文章先提出和解背景，再用当事人经历说明影响，之后比较规则边界、平台措施与跨地区监管，最后提出政策方向。",
              "可考查作者如何区分极端与轻微修饰、引语的论证功能，以及结尾如何从个案上升到治理建议。",
              "grappling、subtle、manipulation、guardrails 等词可用于分析规则执行和技术风险。",
              "写作可借鉴“政策背景—个人案例—制度难点—比较视角—建议”的递进结构。"
            ],
            "vocabulary": [
              {
                "word": "grappling",
                "phonetic": "/ˈɡræpəlɪŋ/",
                "part": "v.-ing",
                "translation": "努力处理；设法应对"
              },
              {
                "word": "landmark",
                "phonetic": "/ˈlændmɑːrk/",
                "part": "adj.",
                "translation": "具有里程碑意义的"
              },
              {
                "word": "burden",
                "phonetic": "/ˈbɜːrdən/",
                "part": "n.",
                "translation": "责任；负担"
              },
              {
                "word": "subtle",
                "phonetic": "/ˈsʌtəl/",
                "part": "adj.",
                "translation": "微妙的；不易察觉的"
              },
              {
                "word": "manipulation",
                "phonetic": "/məˌnɪpjəˈleɪʃən/",
                "part": "n.",
                "translation": "操纵；人为修饰"
              },
              {
                "word": "guardrails",
                "phonetic": "/ˈɡɑːrdreɪlz/",
                "part": "n. pl.",
                "translation": "防护措施；约束机制"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识"
              },
              {
                "word": "obsolete",
                "phonetic": "/ˌɑːbsəˈliːt/",
                "part": "adj.",
                "translation": "过时的；被淘汰的"
              },
              {
                "word": "evolve",
                "phonetic": "/ɪˈvɑːlv/",
                "part": "v.",
                "translation": "演变；发展"
              },
              {
                "word": "enforce",
                "phonetic": "/ɪnˈfɔːrs/",
                "part": "v.",
                "translation": "实施；执行（法规）"
              }
            ],
            "sentences": [
              {
                "original": "But defining where harmless fun ends and harmful manipulation begins is far from straightforward.",
                "analysis": [
                  "句子主干是 defining ... is far from straightforward，动名词短语作主语，is 后接表语。",
                  "where 引导的从句作 defining 的内容，其中 harmless fun ends 与 harmful manipulation begins 构成平行对照。",
                  "But 承接前文规则设想并转向难点，逻辑上形成转折。",
                  "far from straightforward 表示“远非简单”，比直接说 difficult 更有层次。",
                  "可仿写 Defining where X ends and Y begins is far from straightforward 来说明边界问题。"
                ],
                "translation": "然而，要界定无害的娱乐何时结束、有害的操纵何时开始，远非易事。"
              },
              {
                "original": "Filters that transform users into playful characters, like elves or puppies, will remain available for young people.",
                "analysis": [
                  "主句主干为 Filters will remain available，will remain 表示未来仍将保持某种状态。",
                  "that 引导定语从句修饰 Filters，说明这类滤镜的具体作用。",
                  "like elves or puppies 是举例插入语，补充 playful characters 的具体形象。",
                  "for young people 表示适用对象；本句与文章讨论的限制范围形成对比。",
                  "可借鉴 will remain available for... 表达某项服务或选择继续向特定群体开放。"
                ],
                "translation": "把用户变成精灵或小狗等有趣角色的滤镜，仍将向年轻人开放。"
              },
              {
                "original": "They face a moving target, as digital beauty standards evolve rapidly.",
                "analysis": [
                  "主句主干是 They face a moving target，They 指前文负责制定指导意见的州官员。",
                  "a moving target 是比喻，说明监管对象并非固定不变。",
                  "as 引导原因/背景状语从句，说明目标为何不断变化。",
                  "digital beauty standards 作从句主语，evolve rapidly 作谓语，简洁呈现变化速度。",
                  "可仿写 face a moving target as... 描写规则制定落后于快速变化的现象。"
                ],
                "translation": "由于数字美容标准迅速演变，他们面对的是一个不断移动的目标。"
              }
            ]
          },
          {
            "title": "US inequality is getting worse in ways you might not expect",
            "source": "The Conversation",
            "published": "2026-10-19",
            "url": "https://theconversation.com/us-inequality-is-getting-worse-in-ways-you-might-not-expect-294075",
            "readingTime": "约 8 分钟（估算）",
            "topic": "经济 / 财富不平等与税收政策",
            "summary": "本文由研究不平等的经济学者撰写，先用民调说明美国公众对贫富差距的担忧，再用美联储财富分布数据展示顶层与中间群体份额的变化。作者接着解释差距如何在最富有的 0.1% 与其余高收入群体之间扩大，并讨论企业利润、股票持有和税制的作用；随后把视角扩展到医疗补贴、能源成本和关税，说明政策变化对不同收入家庭的影响并不相同。文章最后反驳不平等是不可避免的历史力量这一看法，强调税收和公共支出等政策选择会塑造财富分配。",
            "reason": [
              "财富分配、税制与生活成本是经济和社会公平议题，适合练习数据型议论文阅读。",
              "作者由民意切入，继而列出财富份额数据，再逐项讨论税收、补贴、能源和关税等驱动因素，最后回到政策判断。",
              "可考查数据如何支持中心论点、段落之间的因果关系，以及作者如何回应“不平等不可避免”的观点。",
              "affordability、disproportionately、levy、portfolio 等词适用于经济报道和政策分析。",
              "写作可借鉴“公众感受—统计证据—政策机制—不同群体影响—结论”的论证链。"
            ],
            "vocabulary": [
              {
                "word": "affordability",
                "phonetic": "/əˌfɔːrdəˈbɪləti/",
                "part": "n.",
                "translation": "可负担性；负担得起的程度"
              },
              {
                "word": "sentiment",
                "phonetic": "/ˈsentɪmənt/",
                "part": "n.",
                "translation": "情绪；普遍看法"
              },
              {
                "word": "disproportionately",
                "phonetic": "/ˌdɪsprəˈpɔːrʃənətli/",
                "part": "adv.",
                "translation": "不成比例地；显著更多地"
              },
              {
                "word": "progressive",
                "phonetic": "/prəˈɡresɪv/",
                "part": "adj.",
                "translation": "累进的；渐进的"
              },
              {
                "word": "trajectory",
                "phonetic": "/trəˈdʒektəri/",
                "part": "n.",
                "translation": "发展轨迹；趋势"
              },
              {
                "word": "levies",
                "phonetic": "/ˈleviz/",
                "part": "n. pl.",
                "translation": "征收的税费；税款"
              },
              {
                "word": "portfolio",
                "phonetic": "/pɔːrtˈfoʊlioʊ/",
                "part": "n.",
                "translation": "投资组合；资产组合"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒən/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "inexorable",
                "phonetic": "/ɪnˈeksərəbəl/",
                "part": "adj.",
                "translation": "不可阻挡的；无法避免的"
              },
              {
                "word": "accelerating",
                "phonetic": "/əkˈseləreɪtɪŋ/",
                "part": "v.-ing",
                "translation": "加速；使加快"
              }
            ],
            "sentences": [
              {
                "original": "This sentiment has, however, been difficult to convert into political results.",
                "analysis": [
                  "句子主干是 This sentiment has been difficult，主语为 This sentiment，系动词结构后接形容词。",
                  "however 插入句中，标记从公众不满到政治结果之间的转折。",
                  "to convert into political results 是不定式短语，说明“难”的具体内容。",
                  "现在完成时 has been 将此前的公众态度与当前政治结果联系起来。",
                  "可借鉴 difficult to convert into... 描写某种态度难以转化成实际成果。"
                ],
                "translation": "然而，这种情绪一直难以转化为政治成果。"
              },
              {
                "original": "Recent federal data shows that wealth inequality continues to grow.",
                "analysis": [
                  "主句主干为 Recent federal data shows，data 是主语，shows 是谓语。",
                  "that 引导宾语从句，说明数据所显示的内容。",
                  "从句主干是 wealth inequality continues to grow，continues to 后接动词原形。",
                  "Recent 与 federal 限定 data 的时间和来源，使论断依托具体证据。",
                  "可借鉴 data shows that... 引入数据支持的研究结论。"
                ],
                "translation": "近期联邦数据表明，财富不平等仍在加剧。"
              },
              {
                "original": "But they’re not inexorable forces of history.",
                "analysis": [
                  "But 标出反向论证；they 指上文归纳的多种不平等驱动因素。",
                  "主干是 they are not forces，系动词后接名词短语作表语。",
                  "inexorable 修饰 forces，否定它们不可改变的属性。",
                  "of history 作后置修饰语，说明作者所反驳的是历史决定论式理解。",
                  "可使用 not an inexorable force of... 表达结果并非不可避免。"
                ],
                "translation": "但它们并非历史中不可抗拒的力量。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-25",
      "status": "ready",
      "ai": {
        "intro": "近一周 Google 为 Gemini Notebook、Gemini App 与 Android Auto 推出三项功能变化：可先审阅再生成课件与视频、面向小企业的工具陆续开放，以及车载 Gemini 接入个人信息。三项功能均在分批推出，账户与使用限制以官方说明为准。",
        "updates": [
          {
            "event": "Gemini Notebook 开放先审阅再生成幻灯片与视频（2026-10-19）",
            "summary": "Gemini Notebook 为 Slide Deck 和 Video Overview 增加协作式生成流程：先根据笔记本来源建议主题，再让用户调整内容、视觉风格和格式；开启 Review 后，还可在生成前修改幻灯片提纲或视频制作说明。",
            "howTo": "打开 Gemini Notebook 并选择含有资料来源的笔记本，在聊天中要求制作 slide deck 或 video overview；启用 Review，检查 outline notes 或 producer notes，补充修改意见后点 Proceed。",
            "impact": "可把课程阅读材料转成复习课件或视频提要，并在生成前检查主题顺序、摘要和画面方向；把输出逐项与原始资料核对，避免遗漏或误读。",
            "free": "官方称该功能将在接下来一周内向全球 Gemini Notebook 用户推出；公告未说明额外价格、具体账户资格、地区细分或生成额度，实际入口以账户界面为准。",
            "category": "Gemini Notebook / 学习材料创作",
            "source": {
              "name": "Google 官方产品公告",
              "published": "2026-10-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/co-create-slides-videos/"
            }
          },
          {
            "event": "Gemini 为小企业推出品牌、营销与财务工具（2026-10-20）",
            "summary": "Google 宣布在 Gemini 中增加小企业专属入口、营销和财务技能及更多连接应用。用户可上传网站或品牌素材来保持图片风格一致，也可让 Gemini 把电子表格、收据和采购记录整理成财务图表与交互模型。",
            "howTo": "在 Gemini App 查看小企业入口是否已开放；上传网站、品牌手册、字体或配色后要求生成品牌视觉素材，也可提供表格并请求财务图表。连接 Google 或第三方应用前先检查授权范围。",
            "impact": "经营校园社团、学生项目或小型网店时，可试着统一海报视觉、归纳顾客反馈或初步整理收支；生成的图表与品牌素材仍应由本人核对。",
            "free": "公告称入口、技能和连接应用将在未来几天向全球 Gemini App 用户陆续开放；官方未说明额外收费、账户资格细节、地区分批安排或具体调用额度。",
            "category": "Gemini App / 视觉与数据整理",
            "source": {
              "name": "Google 官方产品公告",
              "published": "2026-10-20",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-tools-small-business-owners/"
            }
          },
          {
            "event": "Android Auto 开始接入 Gemini Personal Intelligence（2026-10-20）",
            "summary": "Google 开始把 Personal Intelligence 带入 Android Auto：在用户许可后，Gemini 可结合 Gmail、日历、照片、地图、YouTube 和搜索中的信息回答个性化问题。用户可随时在 Gemini 设置中关闭应用连接；搭载 Google built-in 的汽车将于之后数月陆续支持。",
            "howTo": "在 Gemini 设置中自行选择是否连接相关 Google 应用；Android Auto 中连接手机后，通过语音询问日历、已保存地点等信息。驾驶时保持注意路况，不要为了查看回答分心。",
            "impact": "通勤时可用语音询问课程安排或导航到先前保存的地点，减少手动查找；启用前先核对连接的应用与隐私偏好，重要行程信息应自行确认。",
            "free": "公告称 Gemini 已全球提供给 Android Auto 和搭载 Google built-in 的汽车，Personal Intelligence 自 10 月 20 日起在 Android Auto 推出，车载系统版本将在未来数月推出；需用户授权连接应用。官方未说明价格、精确地区资格或调用额度。",
            "category": "Gemini / 车载语音助手",
            "source": {
              "name": "Google 官方产品公告",
              "published": "2026-10-20",
              "url": "https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Developer API：部分模型免费层",
            "summary": "Google 官方定价页列出 Gemini API 免费层：部分模型可免费使用输入与输出 token，并可通过 Google AI Studio 开始构建；免费层数据可能用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio 创建 API key，在 Gemini API 定价页选择标有 Free Tier 的模型，再按官方快速入门从本地或 Colab 发起少量请求；开始前核对模型限额和可用地区。",
            "impact": "可用来制作课程文本归纳、小型问答原型或练习 API 错误处理；免费层只覆盖特定模型，不应假定所有模型都免费或不限量。",
            "free": "官方确认部分模型有免费输入与输出 token；具体模型、地区资格和请求限额因模型及账户而异，定价页未给出适用于所有模型的统一配额。官方注明免费层数据可能用于改进产品。",
            "category": "免费 API / 应用原型",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Hugging Face ZeroGPU：免费试用社区 AI 演示",
            "summary": "Hugging Face 官方文档说明，现有 ZeroGPU Spaces 可免费使用；免费账户每天包含 5 分钟 GPU 使用额度，未登录用户为 2 分钟。额度从首次使用起每 24 小时重置，剩余额度也会影响排队优先级。",
            "howTo": "登录 Hugging Face 免费账户，在 Spaces 中搜索 ZeroGPU 演示并打开需要的图像或模型工具；先用短提示词测试，注意每日 5 分钟额度与排队情况。",
            "impact": "可免去本地安装 GPU 环境，体验图像生成、模型推理或交互式 AI 演示，适合课程展示和快速原型验证；不要把共享演示当作稳定的生产服务。",
            "free": "官方说明现有 ZeroGPU Spaces 对所有用户免费；免费账户每日 5 分钟、匿名用户每日 2 分钟，额度在首次使用后 24 小时重置。无需订阅付费计划即可使用演示；官方未说明地域限制。",
            "category": "免费 GPU 演示 / 模型体验",
            "source": {
              "name": "Hugging Face 官方 ZeroGPU 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces-zerogpu"
            }
          },
          {
            "event": "Adobe Firefly：无付费计划用户可领取每日生成次数",
            "summary": "Adobe 官方帮助页表示，没有付费计划的 Firefly、Express、Stock、网页版 Photoshop、Acrobat 和 Adobe 移动应用用户，可在精选模型上使用有限的每日生成次数；次数每天刷新。",
            "howTo": "打开 Firefly 网页版或 Adobe Express，选择文本生成图像等生成式功能并查看账户可用额度；将生成图片用于课程海报或演示草稿前，检查内容与授权要求。",
            "impact": "适合为课堂汇报制作初步插图、海报构图或视觉素材草案；每日免费生成次数有限，重要设计应保存并自行检查准确性与适用性。",
            "free": "官方确认无计划用户有有限的每日免费生成次数，额度每日刷新；具体次数、账户要求、地区资格和信用卡要求官方未说明。功能、模型与额度可能调整。",
            "category": "免费生成工具 / 图片与设计",
            "source": {
              "name": "Adobe 官方生成式积分 FAQ",
              "published": "官方未说明",
              "url": "https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html"
            }
          },
          {
            "event": "Qwen3-0.6B：Apache-2.0 许可的可下载模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B 权重与 Transformers 快速上手示例；模型卡列出 0.6B 参数、32,768 token 上下文及 100 多种语言/方言支持，仓库附有 Apache-2.0 许可证。",
            "howTo": "打开模型卡并按示例安装最新版 transformers 与 PyTorch，使用 AutoTokenizer 和 AutoModelForCausalLM 下载权重；在自己的设备运行示例提示词，并按许可证要求保留相关声明。",
            "impact": "可在本地练习模型加载、提示模板和多语言生成，或为课程项目搭建小型离线原型；本地运行能减少将课程资料发送到托管服务的需要。",
            "free": "模型权重可从 Hugging Face 下载，模型仓库提供 Apache-2.0 许可证；没有附带的官方托管 API 免费额度。下载、存储和本地推理所需硬件由使用者承担，官方未说明地域、期限或最低硬件配置。",
            "category": "开放模型权重 / 本地学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
            }
          },
          {
            "event": "GitHub Copilot Student：通过学生验证可免费启用",
            "summary": "GitHub 官方学生指南确认，经 GitHub Education 验证的学生可免费使用 Copilot 功能；验证通过后还要在 Education benefits 页面单独启用，资格每月重新评估。",
            "howTo": "登录 GitHub Education 提交学生验证；通过后打开 github.com/settings/education/benefits，进入学生开发资源并按提示启用 Copilot Student。若仍显示试用或付费结账，等待权益生效，不要购买。",
            "impact": "适合在课程代码中练习补全、理解建议和迭代调试；学生应阅读并测试生成内容，而不是直接提交未经验证的代码。",
            "free": "仅面向通过 GitHub Education 验证的学生，需单独激活且资格每月重评；官方学生指南未列明具体地区、AI credits 数量、聊天/agent 调用额度或权益期限。",
            "category": "学生教育权益 / 编程辅助",
            "source": {
              "name": "GitHub Docs：学生免费使用 Copilot",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          },
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 官方计划表允许使用 Gmail 账号免费注册 Gemini Notebook Standard；每位用户最多 100 本 notebook、每本最多 50 个来源，并可使用 Custom Chat 与 Analytics。",
            "howTo": "登录 Gemini Notebook 网页版并用 Gmail 账号创建 notebook，再上传讲义或添加网页来源；围绕已加入的资料提问或整理复习提纲，重要结论回到原文核对。",
            "impact": "可把课程阅读材料集中管理，并围绕有限来源制作复习问题或梳理主题；适合先用少量讲义验证工作流，再决定是否需要付费计划。",
            "free": "Standard 可免费注册，每人最多 100 本 notebook、每本 50 个来源；网页版仅对达到当地同意年龄且处于支持国家/地区的用户开放。官方未说明 Standard 的固定每日调用额度或到期日。",
            "category": "长期免费网页访问 / 课程资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方计划说明",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "Google Colab：免费云端 Jupyter 笔记本",
            "summary": "Google 官方 FAQ 确认 Colab 是无需本地安装的托管 Jupyter Notebook 服务，可免费使用计算资源，包括 GPU 和 TPU，面向机器学习、数据科学和教育。",
            "howTo": "打开 Google Colab 并新建 notebook，上传或从 GitHub 打开课程代码；在代码单元运行 Python。需要 GPU/TPU 时先检查运行时资源情况，并保存重要输出到 Drive。",
            "impact": "可用于 Python 作业、数据清理、可视化和小型机器学习练习，不必先配置本地开发环境；运行时空闲后会删除，重要文件应另行保存。",
            "free": "Colab 可免费使用，但资源不保证且不无限，使用限制会变化；免费 GPU/TPU 时长、固定配额及地区条件官方未说明。",
            "category": "长期免费开发工具 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选读 Guardian 对英格兰“假秋”与 BBC 新闻编辑岗位调整的报道，以及 Al Jazeera 对美国民主党政策变化的梳理；主题覆盖气候适应、教育报道与公共问责、选举社会议题。",
        "articles": [
          {
            "title": "‘False autumn’: stressed trees drop leaves early after scorching English summer",
            "source": "The Guardian",
            "published": "2026-10-24",
            "url": "https://www.theguardian.com/environment/2026/oct/24/false-autumn-stressed-trees-drop-leaves-early-extreme-summer-heat",
            "readingTime": "约 4 分钟（估算）",
            "topic": "环境 / 极端高温、干旱与树木季节变化",
            "summary": "Guardian 从萨里郡一棵提前落叶的桦树切入，介绍所谓“假秋”：极端高温和干旱使部分树木过早落叶、提前变色。文章先区分正常秋色由日照缩短、夜间降温和土壤水分触发的过程，再解释浅根树种为何在表层土壤干燥时更易受损，并以英国多地仍处干旱的背景说明影响范围。园艺专家判断今年秋色高峰可能提前且持续较短，皇家园艺学会也在考虑更适应炎热、干燥条件的树种。报道最后强调，未来天气仍存在不同情景，种植选择需要同时考虑炎热夏季和可能出现的寒冬。",
            "reason": [
              "气候变化、干旱与生态适应是环境类常见议题，可练习理解局地现象与气候背景的关系。",
              "文章由一棵桦树的具体变化切入，解释正常季节机制，再补充干旱证据、专家判断和园艺应对。",
              "可考查“假秋”的定义、浅根树种更脆弱的原因，以及不同专家如何预测季节变化。",
              "canopy、defoliation、shallow-rooted、succumb 等词适用于环境与自然类阅读。",
              "写作可借鉴“典型案例—机制解释—影响范围—适应措施”的层层推进结构。"
            ],
            "vocabulary": [
              {
                "word": "conspicuously",
                "phonetic": "/kənˈspɪkjuəsli/",
                "part": "adv.",
                "translation": "显眼地；明显地"
              },
              {
                "word": "canopy",
                "phonetic": "/ˈkænəpi/",
                "part": "n.",
                "translation": "树冠；冠层"
              },
              {
                "word": "drought-sensitive",
                "phonetic": "/ˈdraʊt ˌsensətɪv/",
                "part": "adj.",
                "translation": "易受干旱影响的"
              },
              {
                "word": "defoliation",
                "phonetic": "/ˌdiːˌfoʊliˈeɪʃn/",
                "part": "n.",
                "translation": "落叶；脱叶"
              },
              {
                "word": "premature",
                "phonetic": "/ˌpriːməˈtʃʊr/",
                "part": "adj.",
                "translation": "过早的；未成熟的"
              },
              {
                "word": "shallow-rooted",
                "phonetic": "/ˌʃæloʊ ˈruːtɪd/",
                "part": "adj.",
                "translation": "根系较浅的"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbl/",
                "part": "adj.",
                "translation": "易受伤害的；脆弱的"
              },
              {
                "word": "fleeting",
                "phonetic": "/ˈfliːtɪŋ/",
                "part": "adj.",
                "translation": "短暂的；转瞬即逝的"
              },
              {
                "word": "succumb",
                "phonetic": "/səˈkʌm/",
                "part": "v.",
                "translation": "屈服；经受不住"
              },
              {
                "word": "adaptation",
                "phonetic": "/ˌædæpˈteɪʃn/",
                "part": "n.",
                "translation": "适应；适应性调整"
              }
            ],
            "sentences": [
              {
                "original": "This is also known as a “false autumn”, where the stress of extreme summer conditions prompts trees and plants to behave as if the season has changed.",
                "analysis": [
                  "主干是 This is also known as a “false autumn”，this 指前文描述的提前落叶现象。",
                  "where 引导补充说明性从句，解释这种现象形成的情境；从句主干是 the stress prompts trees and plants。",
                  "of extreme summer conditions 修饰 stress；to behave 是宾语补足成分，as if 引导方式状语从句。",
                  "句子先命名现象，再说明高温压力如何让植物表现得像季节已改变，构成定义与因果关系。",
                  "可借鉴 be known as... 和 prompt ... to do 描述现象名称及其作用机制。"
                ],
                "translation": "这种现象也被称为“假秋”：极端夏季条件带来的压力促使树木和植物表现得仿佛季节已经改变。"
              },
              {
                "original": "The birch illustrates how extreme weather driven by the climate crisis is reshaping the flow of the UK’s seasons.",
                "analysis": [
                  "主句主干是 The birch illustrates how...，The birch 是主语，illustrates 是谓语。",
                  "how 引导宾语从句，说明桦树所体现的内容；从句主干是 extreme weather is reshaping the flow。",
                  "driven by the climate crisis 是过去分词短语，后置修饰 extreme weather。",
                  "句子由单一树种的具体例子推及英国季节变化，体现由个案到总体趋势的逻辑。",
                  "写作可借鉴 X illustrates how... 引出案例所揭示的更广泛变化。"
                ],
                "translation": "这棵桦树说明，气候危机驱动的极端天气正在重塑英国季节变化的节奏。"
              },
              {
                "original": "Normally, autumn’s effect on trees is triggered by shortening daylight, dropping night-time temperatures and adequate ground moisture brought on by rain.",
                "analysis": [
                  "主干是 autumn’s effect on trees is triggered，主语中心词为 effect，谓语采用被动语态。",
                  "Normally 是句首频率副词，提示这是通常情况，为后文异常的提前落叶作对照。",
                  "by 后并列三个触发条件：shortening daylight、dropping night-time temperatures 和 adequate ground moisture。",
                  "brought on by rain 是过去分词短语，修饰 ground moisture；整体解释正常季节变化的成因。",
                  "可借鉴 be triggered by... 并列列出多个因素，说明某现象由哪些条件引起。"
                ],
                "translation": "通常，日照缩短、夜间气温下降以及降雨带来的充足土壤水分，会触发树木的秋季变化。"
              }
            ]
          },
          {
            "title": "BBC News to axe education editor role in cost-cutting move",
            "source": "The Guardian",
            "published": "2026-10-22",
            "url": "https://www.theguardian.com/media/2026/oct/22/bbc-news-to-axe-education-editor-role-in-cost-cutting-move",
            "readingTime": "约 4 分钟（估算）",
            "topic": "教育与社会 / 公共媒体削减专职编辑岗位",
            "summary": "Guardian 报道 BBC News 计划把教育编辑与社会事务编辑合并为一个岗位，并在现任健康编辑离职后取消该职衔；这轮调整属于削减成本计划，涉及 BBC News 的 100 个岗位，预计节省 550 万英镑。管理层称审查考虑了受众需求、编辑要求和部门效率；学校领导、教师工会及社会照护领域人士则担心，失去专职编辑会削弱对教育和社会议题的关注与问责。报道同时呈现反方回应：BBC 表示仍有专门记者团队，能够继续报道这些领域。文章末尾补充，编辑岗位要求也将更强调社交媒体和视频平台，以接触更多年轻受众。",
            "reason": [
              "教育报道与公共媒体责任相连，适合讨论成本控制会如何影响公共信息服务。",
              "篇章先交代岗位调整，再说明管理层理由，随后列举工会与行业人士的担忧，并呈现 BBC 的回应。",
              "可训练识别新闻机构、工会和学校代表的不同立场，以及区分已宣布措施与受访者判断。",
              "dedicated、scrutiny、incumbent、duplication 等词汇可迁移到教育治理和媒体政策话题。",
              "写作可借鉴“政策变化—效率理由—公共利益担忧—机构回应”的平衡式论证结构。"
            ],
            "vocabulary": [
              {
                "word": "dedicated",
                "phonetic": "/ˈdedɪkeɪtɪd/",
                "part": "adj.",
                "translation": "专门的；专职的"
              },
              {
                "word": "cost-cutting",
                "phonetic": "/ˈkɔːst ˌkʌtɪŋ/",
                "part": "n./adj.",
                "translation": "削减成本（的）"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "仔细审查；监督"
              },
              {
                "word": "dilute",
                "phonetic": "/daɪˈluːt/",
                "part": "v.",
                "translation": "削弱；稀释"
              },
              {
                "word": "incumbent",
                "phonetic": "/ɪnˈkʌmbənt/",
                "part": "n.",
                "translation": "现任者；在职者"
              },
              {
                "word": "duplication",
                "phonetic": "/ˌduːplɪˈkeɪʃn/",
                "part": "n.",
                "translation": "重复；重叠"
              },
              {
                "word": "editorial",
                "phonetic": "/ˌedɪˈtɔːriəl/",
                "part": "adj.",
                "translation": "编辑的；编辑部的"
              },
              {
                "word": "puzzled",
                "phonetic": "/ˈpʌzld/",
                "part": "adj.",
                "translation": "困惑的"
              },
              {
                "word": "erode",
                "phonetic": "/ɪˈroʊd/",
                "part": "v.",
                "translation": "逐渐削弱；侵蚀"
              },
              {
                "word": "breadth",
                "phonetic": "/bredθ/",
                "part": "n.",
                "translation": "广度；范围"
              }
            ],
            "sentences": [
              {
                "original": "There will also be no health editor title at the BBC when the current incumbent, Hugh Pym, leaves in the spring.",
                "analysis": [
                  "主句采用 there be 结构，核心是 There will be no health editor title，表示未来不再设有该职衔。",
                  "when 引导时间状语从句，从句主干为 the incumbent leaves，说明变化发生的时间条件。",
                  "current incumbent 与 Hugh Pym 构成同位关系，补充说明现任者身份。",
                  "also 将健康编辑岗位的调整与前文教育岗位的变化联系起来，形成补充递进。",
                  "可借鉴 there will be no... when... 描写某项安排何时结束。"
                ],
                "translation": "当现任健康编辑休·皮姆于春季离职时，BBC 也将不再保留健康编辑这一职衔。"
              },
              {
                "original": "It appears BBC executives have opted to combine the education and social affairs jobs as they attempt to reduce duplication and cut wage costs.",
                "analysis": [
                  "句子以 It appears 作形式主句，后接省略 that 的内容从句，交代记者对管理层决定的判断。",
                  "内容从句主干是 BBC executives have opted to combine the jobs。",
                  "to combine 是 opt 的不定式补足语；as 引导状语从句，说明合并岗位时所追求的目标。",
                  "reduce duplication 和 cut wage costs 并列，呈现机构进行重组的两项效率理由。",
                  "可借鉴 It appears (that)... have opted to... as...，审慎转述决定及其背景。"
                ],
                "translation": "看来，BBC 管理层选择合并教育与社会事务编辑岗位，以减少工作重叠并削减工资成本。"
              },
              {
                "original": "However, others inside the BBC said the issues of education, social affairs and health all had dedicated teams of journalists that would ensure proper coverage.",
                "analysis": [
                  "主句主干是 others said，said 后接省略 that 的宾语从句。",
                  "宾语从句中 the issues... 是主语，had dedicated teams 是谓语和宾语结构。",
                  "that would ensure proper coverage 是定语从句，修饰 teams，说明团队将承担的作用。",
                  "However 与前文对报道力度减弱的担忧形成让步和反向回应。",
                  "可借鉴 However, others said... that... 呈现与批评意见不同的机构观点。"
                ],
                "translation": "不过，BBC 内部也有人表示，教育、社会事务和健康领域都有专门的记者团队，能够确保报道得到妥善开展。"
              }
            ]
          },
          {
            "title": "How have Democrats’ policies shifted since the last major US election?",
            "source": "Al Jazeera",
            "published": "2026-10-24",
            "url": "https://www.aljazeera.com/economy/2026/10/24/how-have-democrats-policies-shifted-since-the-last-major-us-election",
            "readingTime": "约 7 分钟（估算）",
            "topic": "社会 / 选民态度与美国政党政策调整",
            "summary": "Al Jazeera 将民主党候选人的立场变化放在中期选举和选民反馈的背景下，分主题讨论以色列政策、跨性别者权利、移民与边境安全，以及全民医保。文章用民调、竞选广告和候选人表态展示：部分温和派调整措辞以回应摇摆选区的顾虑，而进步派仍要求更强的权利保障和公共政策；党内分歧并未因此消失。报道同时指出，医疗成本等生活议题推动不同派别支持政府更多介入，但具体方案仍有争论。全文通过议题小标题、数据和人物引语说明政策变化并非单一方向，而会随选区、选民需求和党内力量而异。",
            "reason": [
              "文章讨论公共意见如何影响政党立场，涉及医疗、移民、权利与选举，适合社会议题阅读。",
              "作者按多个政策领域分节，先说明选举背景，再用民调、竞选广告和人物引语说明立场变化。",
              "可考查比较温和派与进步派观点、定位数据支持的结论，以及判断作者如何呈现党内分歧。",
              "rebuke、stance、resonate、paramount、coalesce 等词适合描述政治表达与社会态度。",
              "写作可借鉴“总体背景—分领域案例—数据和引语—归纳分歧”的组织方式。"
            ],
            "vocabulary": [
              {
                "word": "rebuke",
                "phonetic": "/rɪˈbjuːk/",
                "part": "n./v.",
                "translation": "严厉批评；斥责"
              },
              {
                "word": "reassess",
                "phonetic": "/ˌriːəˈses/",
                "part": "v.",
                "translation": "重新评估"
              },
              {
                "word": "stance",
                "phonetic": "/stæns/",
                "part": "n.",
                "translation": "立场；态度"
              },
              {
                "word": "a host of",
                "phonetic": "/ə ˈhoʊst əv/",
                "part": "phr.",
                "translation": "许多；一系列"
              },
              {
                "word": "hot-button",
                "phonetic": "/ˈhɑːt ˌbʌtn/",
                "part": "adj.",
                "translation": "引发强烈争议的"
              },
              {
                "word": "resonate",
                "phonetic": "/ˈrezəneɪt/",
                "part": "v.",
                "translation": "引起共鸣；产生共振"
              },
              {
                "word": "alienated",
                "phonetic": "/ˈeɪliəneɪtɪd/",
                "part": "adj.",
                "translation": "疏远的；感到被排斥的"
              },
              {
                "word": "footing",
                "phonetic": "/ˈfʊtɪŋ/",
                "part": "n.",
                "translation": "立足点；地位"
              },
              {
                "word": "paramount",
                "phonetic": "/ˈpærəmaʊnt/",
                "part": "adj.",
                "translation": "最重要的；首要的"
              },
              {
                "word": "coalesce",
                "phonetic": "/ˌkoʊəˈles/",
                "part": "v.",
                "translation": "联合；结合"
              }
            ],
            "sentences": [
              {
                "original": "Those shifts have resonated with some voters, while others have been alienated as the party tries to find its footing in Trump’s second term and wrestle away control of both houses of Congress from Republicans.",
                "analysis": [
                  "主句主干是 Those shifts have resonated with some voters，while 引导并列对照分句。",
                  "while 分句主干是 others have been alienated，使用现在完成时被动语态表示受到疏远的影响。",
                  "as 引导背景状语从句，说明党派在第二任期中寻找定位并争取国会控制权的同时发生了不同反应。",
                  "with some voters 与 others 形成鲜明对照，呈现政策调整带来的分化效果。",
                  "可借鉴 A resonates with some, while others... 表达同一变化对不同群体产生相反影响。"
                ],
                "translation": "这些变化引起了一些选民的共鸣，却也让另一些人感到疏远；与此同时，该党正努力在特朗普第二任期中找到定位，并从共和党手中争取国会两院的控制权。"
              },
              {
                "original": "The most notable shift among Democrats has, arguably, been on Israel.",
                "analysis": [
                  "主干是 The most notable shift has been on Israel，主语中心词为 shift。",
                  "among Democrats 限定变化发生的群体范围；on Israel 说明变化所涉及的议题。",
                  "arguably 是插入副词，表示这是作者认为可成立但并非绝对的判断。",
                  "现在完成时 has been 将过去一段时间的变化与当前讨论联系起来。",
                  "写作可借鉴 The most notable shift has been in/on... 提炼某领域最显著的变化。"
                ],
                "translation": "可以说，民主党内部最显著的立场变化出现在以色列问题上。"
              },
              {
                "original": "But how exactly the party addresses rising medical costs remains up for debate.",
                "analysis": [
                  "主干是 how... remains up for debate；how 引导的间接疑问从句整体充当主语。",
                  "从句内部主干为 the party addresses costs，how exactly 强调具体做法尚未确定。",
                  "rising medical costs 是 addresses 的宾语，rising 作前置修饰语，指出问题正在加剧。",
                  "句首 But 与前文各派普遍支持介入形成转折，强调对具体政策手段仍有分歧。",
                  "可借鉴 how exactly... remains up for debate，说明目标趋同但实施路径尚无定论。"
                ],
                "translation": "但是，该党究竟如何应对不断上涨的医疗成本，仍有待讨论。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-24",
      "status": "ready",
      "ai": {
        "intro": "本期核对到三项近期变化：Claude Duet 在美国开放研究预览，GitHub Copilot 与 Teams 的集成可从通知推进到代码修改，Copilot 使用量 API 新增按客户端统计。前者需候补且限 Pro/Max，后两项侧重团队协作与组织报告。",
        "updates": [
              {
            "event": "Claude Duet 面向美国 Pro 与 Max 用户开启研究预览（2026-10-21）",
            "summary": "Anthropic 开放 Claude Duet 研究预览：它会主动整理已连接应用中需要处理的事项，也能在用户离线时继续执行交办任务，并在发送消息、付款或删除内容前等待确认。Duet 可通过独立 iOS/Android 应用及 claude.ai 使用；后台定期检查会计入 Claude 计划用量。",
            "howTo": "在美国访问 Claude Duet 候补页面登记；获邀后从 iOS、Android 或 claude.ai 打开 Duet，连接所需应用并描述任务。先检查它准备发送或执行的内容，再确认授权。",
            "impact": "研究生可尝试把课程邮件、社团事务或项目待办交给它整理，并观察其如何区分紧急事项与可延后任务；发送消息等对外操作仍需本人确认，连接账户前应检查权限。",
            "free": "这是研究预览，不是免费权益：公告限定美国的 Pro 与 Max 计划用户并要求加入候补，且与 Claude 其余功能共用计划用量。公告未说明单独价格、美国以外的开放时间或具体调用额度。",
            "category": "Claude / 主动式工作代理",
            "source": {
              "name": "Claude 官方产品公告",
              "published": "2026-10-21",
              "url": "https://claude.com/resources/articles/claude-duet"
            }
          },
          {
            "event": "GitHub Copilot 可在 Teams 中从通知推进到代码修改（2026-10-23）",
            "summary": "GitHub 将 Teams 通知与 Copilot 工作流整合：团队成员可在频道、群聊或私聊中收到 GitHub 更新，再 @GitHub 让其调查 issue、修复问题并创建 pull request，之后由团队审查、测试和合并。已有 GitHub 通知应用的用户可更新到整合版；旧版应用计划于 11 月 16 日退役。",
            "howTo": "在 Microsoft Teams 安装或更新整合后的 GitHub 应用，按提示连接 GitHub 账号并选择仓库；收到 issue 通知后在会话中 @GitHub 发起处理，再由团队审查生成的 pull request。",
            "impact": "小组项目可在讨论 bug 的同一处试用“通知—排查—提 PR—人工审查”流程，减少在聊天和代码仓库间切换；生成的修改仍需自行测试和审查。",
            "free": "公告未说明所需 Copilot 订阅、单独价格、支持地区或使用配额，也未称此集成为免费权益。使用需在 Teams 安装整合应用、连接 GitHub 账号并选择仓库；旧版应用将于 2026-11-16 退役。",
            "category": "GitHub Copilot / Teams 协作",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-23",
              "url": "https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams"
            }
          },
          {
            "event": "Copilot 使用量 API 新增客户端来源统计（2026-10-23）",
            "summary": "GitHub Copilot 使用量报告新增 totals_by_client，可按 OpenCode、Claude Code、Codex、Copilot CLI、VS Code 等客户端查看成功模型请求数、会话数和 token 使用量，并可继续按模型及模型选择方式拆分。此前未被 IDE 遥测记录的外部工具请求也可纳入组织报告。",
            "howTo": "组织管理员先启用 Copilot usage metrics policy，并确认自己拥有企业/组织所有者、账单经理或 View Copilot Metrics 权限；随后在 Copilot usage metrics API 的 1 日或 28 日报告中查看 totals_by_client。",
            "impact": "使用 Copilot 支持课程开发或实验室协作的团队管理员，可比较不同客户端的请求与 token 用量，决定应维护哪些工具；request_count 是模型调用数而非提示词数，不宜直接当作个人工作量。",
            "free": "这是一项企业/组织级报告字段，不是个人账户额度。访问需具备相应管理权限并启用 usage metrics policy；公告未说明额外价格、地区范围或新配额。",
            "category": "GitHub Copilot / 使用量 API",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-23",
              "url": "https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Developer API：AI Studio 免费层",
            "summary": "Google 官方定价页列出 Gemini API 免费层：部分模型可免费使用输入和输出 token，并可通过 Google AI Studio 开始构建；免费层数据可能用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio 创建 API key，在 Gemini API 定价页选定标注为 Free Tier 的模型，再按官方快速入门在本地或 Colab 发起少量请求；先核对模型限额及可用地区。",
            "impact": "可用于课程原型、文本归纳或小型应用实验，练习真实 API 调用与错误处理；不要把免费层视作所有模型都免费或无限调用。",
            "free": "免费层仅覆盖部分模型；具体 RPM、TPM、RPD 和地区资格取决于模型与当前限额/地区表，官方定价页未给出适用于所有模型的统一调用数。免费层数据可能用于改进产品，敏感资料不宜直接提交。",
            "category": "免费 API 调用 / 应用原型",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Qwen3-0.6B：Apache-2.0 许可的可下载模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B 权重与 Transformers 快速上手示例；模型卡列出 0.6B 参数、32,768 token 上下文及 100 多种语言/方言支持，仓库许可证为 Apache-2.0。",
            "howTo": "打开模型卡并按其示例安装最新版 transformers 与 PyTorch，使用 AutoTokenizer 和 AutoModelForCausalLM 下载权重；在自己的设备运行示例提示词，并按许可证要求保留相关声明。",
            "impact": "可在本地练习模型加载、提示模板和多语言生成，或为课程项目搭建小型离线原型；本地运行能减少把课程资料发送到托管服务的需要。",
            "free": "模型权重可从 Hugging Face 下载，模型仓库提供 Apache-2.0 许可证；没有附带的官方托管 API 免费额度。下载、存储及本地推理所需硬件由使用者承担，官方页面未说明地域、期限或硬件最低配置。",
            "category": "开放模型权重 / 本地学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
            }
          },
          {
            "event": "GitHub Copilot Student：通过学生验证可免费启用",
            "summary": "GitHub 官方学生指南确认，经 GitHub Education 验证的学生可免费使用 Copilot 功能；验证通过后还要在 Education benefits 页面单独启用，资格每月重新评估。",
            "howTo": "登录 GitHub Education 提交学生验证；通过后打开 github.com/settings/education/benefits，进入学生开发资源并按提示启用 Copilot Student。若仍显示试用或付费结账，等待权益生效，不要购买。",
            "impact": "适合在课程代码中练习补全、理解建议和迭代调试；学生应阅读并测试生成内容，而不是直接提交未经验证的代码。",
            "free": "仅面向通过 GitHub Education 验证的学生，需单独激活且资格每月重评；官方学生指南未列明具体地区、AI credits 数量、聊天/agent 调用额度或权益期限。",
            "category": "学生教育权益 / 编程辅助",
            "source": {
              "name": "GitHub Docs：学生免费使用 Copilot",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          },
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 官方计划表允许使用 Gmail 账号免费注册 Gemini Notebook Standard；每位用户最多 100 本 notebook、每本最多 50 个来源，并可使用 Custom Chat 与 Analytics。",
            "howTo": "登录 Gemini Notebook 网页版并用 Gmail 账号创建 notebook，再上传讲义或添加网页来源；围绕已加入的资料提问或整理复习提纲，重要结论回到原文核对。",
            "impact": "可把课程阅读材料集中管理，并围绕有限来源制作复习问题或梳理主题；适合先用少量讲义验证工作流，再决定是否需要付费计划。",
            "free": "Standard 可免费注册，每人最多 100 本 notebook、每本 50 个来源；网页版仅对达到当地同意年龄且处于支持国家/地区的用户开放。官方未说明 Standard 的固定每日调用额度或到期日。",
            "category": "长期免费网页访问 / 课程资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方计划说明",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "Google Colab：免费云端 Jupyter 笔记本",
            "summary": "Google 官方 FAQ 确认 Colab 是无需本地安装的托管 Jupyter Notebook 服务，可免费使用计算资源，包括 GPU 和 TPU，面向机器学习、数据科学和教育。",
            "howTo": "打开 Google Colab 并新建 notebook，上传或从 GitHub 打开课程代码；在代码单元运行 Python。需要 GPU/TPU 时先检查运行时资源情况，并保存重要输出到 Drive。",
            "impact": "可用于 Python 作业、数据清理、可视化和小型机器学习练习，不必先配置本地开发环境；运行时空闲后会删除，重要文件应另行保存。",
            "free": "Colab 可免费使用，但资源不保证且不无限，使用限制会变化；免费 GPU/TPU 时长、固定配额及地区条件官方未说明。",
            "category": "长期免费开发工具 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选读 BBC 对美加关税调整及英国学校进入印度市场的报道，以及 Smithsonian 对绿海龟保护成效的分析；分别练习经贸政策的多方观点、教育商业模式的因果链和环境新闻的证据与转折。",
        "articles": [
          {
            "title": "White House lifts tariffs on some Canadian goods as midterm elections loom",
            "source": "BBC",
            "published": "2026-10-24",
            "url": "https://www.bbc.com/news/articles/c60qk573yzz8o",
            "readingTime": "约 4 分钟",
            "topic": "经济 / 美加关税、贸易争端与选举政治",
            "summary": "BBC 报道称，白宫宣布自 10 月 30 日起下调对部分加拿大商品的关税，同时对地毯等部分商品加征关税。豁免由缅因州共和党参议员 Susan Collins 先行宣布，她说曾游说争取，理由是减轻本州农业产业压力；此时距中期选举不到两周。文章回顾美方在 8 月谈判破裂后对约 200 亿美元加拿大商品加征 50% 关税、加拿大采取反制，并并列呈现白宫、加拿大贸易部长和民主党对手的说法。结尾把政策放回边境州对加拿大贸易依赖及两国继续谈判的背景，呈现有限减税与更广泛争端并存。",
            "reason": [
              "关税与跨境贸易属于经济类公共议题，可练习理解政策变化对产业和边境地区的影响。",
              "报道按“政策宣布—谈判背景—各方回应—选举与边境州影响”展开，兼有政策信息和政治语境。",
              "可考查哪些商品获豁免、哪些商品新增关税，以及白宫、加拿大官员和竞选对手之间的立场差异。",
              "tariff、levy、countermeasure、trade-reliant 等词可用于经贸新闻和社会科学阅读。",
              "写作可借鉴“政策内容 + 受影响群体 + 不同立场”的论证结构，并用 while、after 等连接词交代让步和背景。"
            ],
            "vocabulary": [
              {
                "word": "tariff",
                "phonetic": "/ˈtærɪf/",
                "part": "n.",
                "translation": "关税"
              },
              {
                "word": "levy",
                "phonetic": "/ˈlevi/",
                "part": "n.",
                "translation": "征税；税款"
              },
              {
                "word": "exemption",
                "phonetic": "/ɪɡˈzempʃn/",
                "part": "n.",
                "translation": "豁免"
              },
              {
                "word": "countermeasure",
                "phonetic": "/ˈkaʊntərˌmeʒər/",
                "part": "n.",
                "translation": "反制措施"
              },
              {
                "word": "lobbied",
                "phonetic": "/ˈlɑːbid/",
                "part": "v.",
                "translation": "游说；施加影响"
              },
              {
                "word": "standoff",
                "phonetic": "/ˈstændɔːf/",
                "part": "n.",
                "translation": "僵持；对峙"
              },
              {
                "word": "trade-reliant",
                "phonetic": "/ˈtreɪd rɪˌlaɪənt/",
                "part": "adj.",
                "translation": "依赖贸易的"
              },
              {
                "word": "mutually beneficial",
                "phonetic": "/ˌmjuːtʃuəli ˌbenɪˈfɪʃl/",
                "part": "phr.",
                "translation": "互利的"
              },
              {
                "word": "ease",
                "phonetic": "/iːz/",
                "part": "v.",
                "translation": "减轻；缓和"
              }
            ],
            "sentences": [
              {
                "original": "The US imposed a 50% levy on $20bn (£15bn) of Canadian goods after trade talks between the two countries collapsed in August.",
                "analysis": [
                  "主干是 The US imposed a 50% levy，说明美国采取的措施及税率。",
                  "on $20bn ... of Canadian goods 限定征税对象及货值，on 在此表示针对某类商品征税。",
                  "after 引导时间状语从句，trade talks 作主语，collapsed 作谓语，交代征税的先行背景。",
                  "句子按“谈判破裂—征收关税”的顺序建立时间和背景关系，并用数字具体化政策规模。",
                  "写作可借鉴 impose a levy/tax on... after... 概述政策措施及其背景。"
                ],
                "translation": "两国贸易谈判于 8 月破裂后，美国对价值 200 亿美元（150 亿英镑）的加拿大商品征收了 50% 的税。"
              },
              {
                "original": "Maine borders the Canadian provinces New Brunswick and Quebec.",
                "analysis": [
                  "主干是 Maine borders the Canadian provinces，Maine 为主语，borders 为一般现在时谓语。",
                  "the Canadian provinces 是 borders 的宾语，New Brunswick and Quebec 是同位列举，具体说明省份名称。",
                  "句子以地理关系提供政策背景，解释缅因州为何直接受到美加贸易变化影响。",
                  "一般现在时在此陈述相对稳定的地理事实，而非一次性的新闻事件。",
                  "可借鉴简洁的“地点 + borders + 地区/国家”结构交代相邻关系。"
                ],
                "translation": "缅因州与加拿大的新不伦瑞克省和魁北克省接壤。"
              },
              {
                "original": "Carney, for his part, said that Canada was open to a mutually beneficial deal, but is willing to wait it out.",
                "analysis": [
                  "主句核心是 Carney said，that 引导宾语从句，转述加拿大总理的谈判立场。",
                  "for his part 是插入语，提示接下来呈现另一方回应，与前文立场形成对照。",
                  "宾语从句中 but 连接 open to a deal 与 willing to wait it out，表达愿意谈判但不急于接受条件。",
                  "mutually beneficial 修饰 deal，指出协议必须具有互利性质；it 指当前贸易僵局或等待过程。",
                  "写作可借鉴 be open to..., but... 表示有条件的合作立场。"
                ],
                "translation": "卡尼则表示，加拿大愿意达成互利协议，但也准备继续等待。"
              }
            ]
          },
          {
            "title": "Britain's posh schools are heading to India for students and profits",
            "source": "BBC",
            "published": "2026-10-24",
            "url": "https://www.bbc.com/news/articles/c6vgx1ldvz5vo",
            "readingTime": "约 4 分钟",
            "topic": "教育与商业 / 英国私校在印度扩张",
            "summary": "BBC 报道至少六所英国精英私校已在印度设立校区，印度新富家庭对国际化教育的需求为扩张提供市场；与此同时，中国市场监管变化和英国私校学费增值税也推动学校寻找新地区。报道通过校方和家长说明课程、校园传统与全面发展卖点，再补充现实约束：印度本地学校竞争强、家庭对价格敏感，一些合作项目利润率可能降至 1%，高昂寄宿费也限制招生。文章引用行业研究所列海外校区利润数据作背景，最后指出印度市场可能稳步但不会爆发式增长，短期难以弥补中国市场放缓。",
            "reason": [
              "跨国教育、家庭选择和私校经营连接教育与商业，是适合讨论教育公平和国际化的综合主题。",
              "文章先列举校区扩张，再解释印度需求与中英市场变化，继而呈现成本、竞争和价格约束，最后评估增长前景。",
              "可考查扩张的推力与阻力、不同家庭选择私校的原因，以及为何印度市场难迅速弥补中国市场放缓。",
              "satellite campus、entrenched、price-sensitive、offset 等表达可用于教育和经济类语篇。",
              "写作可借鉴先提出市场机会、再用成本与竞争作转折的结构，避免把增长趋势简单等同于成功。"
            ],
            "vocabulary": [
              {
                "word": "legacy",
                "phonetic": "/ˈleɡəsi/",
                "part": "n.",
                "translation": "历史传承；遗产"
              },
              {
                "word": "satellite campus",
                "phonetic": "/ˈsætəlaɪt ˈkæmpəs/",
                "part": "n.",
                "translation": "分校；卫星校区"
              },
              {
                "word": "burgeoning",
                "phonetic": "/ˈbɜːrdʒənɪŋ/",
                "part": "adj.",
                "translation": "迅速发展的"
              },
              {
                "word": "tailwind",
                "phonetic": "/ˈteɪlwɪnd/",
                "part": "n.",
                "translation": "有利因素；顺风"
              },
              {
                "word": "entrenched",
                "phonetic": "/ɪnˈtrentʃt/",
                "part": "adj.",
                "translation": "根深蒂固的"
              },
              {
                "word": "holistic",
                "phonetic": "/hoʊˈlɪstɪk/",
                "part": "adj.",
                "translation": "全面的；整体的"
              },
              {
                "word": "price-sensitive",
                "phonetic": "/ˈpraɪs ˌsensətɪv/",
                "part": "adj.",
                "translation": "对价格敏感的"
              },
              {
                "word": "margin",
                "phonetic": "/ˈmɑːrdʒɪn/",
                "part": "n.",
                "translation": "利润率；边际"
              },
              {
                "word": "offset",
                "phonetic": "/ˈɔːfset/",
                "part": "v.",
                "translation": "抵消；弥补"
              },
              {
                "word": "explosive",
                "phonetic": "/ɪkˈsploʊsɪv/",
                "part": "adj.",
                "translation": "迅猛的；爆发式的"
              }
            ],
            "sentences": [
              {
                "original": "For decades, India has been home to well-established local boarding schools modelled on the colonial British public-school system, serving elite, aristocratic families.",
                "analysis": [
                  "主干是 India has been home to schools，说明当地长期存在这类寄宿学校。",
                  "For decades 是时间状语；现在完成时 has been 将过去持续至今的状态连接起来。",
                  "modelled on... 是过去分词短语，后置修饰 schools，交代其仿效的教育体系。",
                  "serving... 是现在分词短语，补充说明这些学校服务的群体。",
                  "可借鉴 has been home to... 表达某地长期拥有某类机构或现象。"
                ],
                "translation": "数十年来，印度一直有成熟的本地寄宿学校，它们仿照殖民时期英国公学体系，服务于精英和贵族家庭。"
              },
              {
                "original": "But this market has rapidly expanded with newly wealthy Indian families increasingly aspiring to give their children more global exposure.",
                "analysis": [
                  "主干为 this market has rapidly expanded，说明市场已迅速扩张；But 提示与前文形成转折。",
                  "with + 名词 + 现在分词构成伴随结构，解释市场扩张时同时出现的需求变化。",
                  "increasingly 修饰 aspiring，表示家庭追求国际化教育的倾向不断增强。",
                  "aspire to do 表示渴望做某事；give their children... 是不定式内容，说明具体目标。",
                  "写作可用 with + 名词 + 分词补充解释趋势背后的伴随因素。"
                ],
                "translation": "然而，随着新近富裕起来的印度家庭越来越希望让子女获得更多国际视野，这一市场迅速扩大。"
              },
              {
                "original": "But in India, it appears growth is likely to be slow and steady rather than explosive.",
                "analysis": [
                  "主句是 it appears，it 为形式主语，后接省略 that 的内容从句 growth is likely...。",
                  "be likely to do 表示可能性；slow and steady 与 explosive 形成对照。",
                  "rather than 引出被否定的预期，强调稳步增长而非爆发式增长。",
                  "句首 But 回扣前文的扩张机会，转向市场规模和成本等限制因素。",
                  "可用 it appears... rather than... 谨慎总结趋势，并避免过度确定的判断。"
                ],
                "translation": "但在印度，市场增长看来更可能是缓慢而稳定的，而不是爆发式的。"
              }
            ]
          },
          {
            "title": "Green Sea Turtles Are Making a Remarkable Comeback on the Remote Aldabra Atoll and Around the World. But Their Recovery Is Far From Complete",
            "source": "Smithsonian Magazine",
            "published": "2026-10-21",
            "url": "https://www.smithsonianmag.com/science-nature/green-sea-turtles-are-making-a-remarkable-comeback-on-the-remote-aldabra-atoll-and-around-the-world-but-their-recovery-is-far-from-complete-180989710/",
            "readingTime": "约 6 分钟",
            "topic": "环境 / 海龟保护、长期监测与种群差异",
            "summary": "文章以 Aldabra 环礁夜间观察绿海龟筑巢开篇，回顾 20 世纪狩猎使当地筑巢数量下降，以及 1968 年禁猎后的长期恢复。研究人员估计，2019 年环礁上有超过 15,000 窝卵，比 1980 年增加 173%；全球层面，IUCN 在 2025 年将绿海龟从濒危下调为无危，并估计其数量较 20 世纪 70 年代增加约 28%。作者随即指出全球改善掩盖区域差异：太平洋等地的一些种群仍受兼捕、狩猎和气候变化威胁。文章从局地长期保护扩展到全球评估，最后强调恢复是保护成效而非任务终点。",
            "reason": [
              "野生动物保护与生态恢复是常见环境议题，可练习把保护政策和长期生态变化联系起来。",
              "文章由夜间观察切入，转向历史狩猎、禁猎后的监测数据，再扩展至全球评估和地区差异。",
              "可考查巢数增长、全球风险等级与区域种群状况之间的区别，避免把总体改善误读为所有地区都安全。",
              "safeguard、resurgence、clutch、bycatch 等词适合环境新闻和科学普及语境。",
              "写作可借鉴“总体进展 + 地区例外”的让步结构，并用时间序列数据支撑保护措施的影响。"
            ],
            "vocabulary": [
              {
                "word": "nesting",
                "phonetic": "/ˈnestɪŋ/",
                "part": "n.",
                "translation": "筑巢；产卵"
              },
              {
                "word": "safeguard",
                "phonetic": "/ˈseɪfɡɑːrd/",
                "part": "n.",
                "translation": "保障；保护措施"
              },
              {
                "word": "hub",
                "phonetic": "/hʌb/",
                "part": "n.",
                "translation": "中心；枢纽"
              },
              {
                "word": "resurgence",
                "phonetic": "/rɪˈsɜːrdʒəns/",
                "part": "n.",
                "translation": "复苏；再度兴起"
              },
              {
                "word": "clutch",
                "phonetic": "/klʌtʃ/",
                "part": "n.",
                "translation": "一窝（鸟蛋或爬行动物的卵）"
              },
              {
                "word": "downlisted",
                "phonetic": "/ˌdaʊnˈlɪstɪd/",
                "part": "v.",
                "translation": "下调保护等级"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbl/",
                "part": "adj.",
                "translation": "易受伤害的；脆弱的"
              },
              {
                "word": "bycatch",
                "phonetic": "/ˈbaɪkætʃ/",
                "part": "n.",
                "translation": "兼捕；误捕"
              },
              {
                "word": "carrying capacity",
                "phonetic": "/ˈkæriɪŋ kəˈpæsəti/",
                "part": "n.",
                "translation": "环境承载量"
              },
              {
                "word": "uneven",
                "phonetic": "/ʌnˈiːvən/",
                "part": "adj.",
                "translation": "不均衡的"
              }
            ],
            "sentences": [
              {
                "original": "Green turtles nest on Aldabra year-round, but fewer are found this time of year.",
                "analysis": [
                  "并列句由 but 连接，前半说明全年都筑巢，后半指出当前时段数量较少。",
                  "Green turtles 是前后分句共用的主语，后半 are found 使用被动语态描述观察到的数量。",
                  "year-round 与 this time of year 构成时间范围对照，限定一般规律和当前情况。",
                  "逻辑上先给出长期规律，再以 but 补充季节性例外。",
                  "可借鉴“普遍情况, but + 局部例外”表达总体趋势中的变化。"
                ],
                "translation": "绿海龟全年都会在 Aldabra 筑巢，但每年这个时节观察到的数量较少。"
              },
              {
                "original": "By the 1960s, annual nests on Aldabra had hit a low point of 2,000 to 3,000.",
                "analysis": [
                  "主干是 annual nests... had hit a low point，说明年度筑巢数降至低点。",
                  "By the 1960s 表示到 20 世纪 60 年代时，had hit 使用过去完成时标示此前已形成的结果。",
                  "on Aldabra 后置限定统计地点；of 2,000 to 3,000 给出低点的具体数值范围。",
                  "数字证据为后文说明禁猎政策后的恢复提供比较基线。",
                  "可用 by + 时间点 + 过去完成时呈现某一历史节点前已出现的变化。"
                ],
                "translation": "到 20 世纪 60 年代，Aldabra 每年的海龟巢数已降至 2,000 至 3,000 个的低点。"
              },
              {
                "original": "Few places offer such a clean demonstration of what sustained protection can accomplish.",
                "analysis": [
                  "主干为 Few places offer a demonstration，意为很少有地方能提供这样的例证。",
                  "such a clean 修饰 demonstration，clean 在此表示清晰、鲜明，而非“干净”。",
                  "of what... 引导介词宾语从句；what 在从句中作 accomplish 的宾语。",
                  "sustained protection 是从句主语，can accomplish 表示长期保护能够实现的效果。",
                  "可借鉴 demonstration of what... can accomplish 总结某项措施所能带来的结果。"
                ],
                "translation": "很少有地方能如此清楚地展示持续保护可以取得什么成效。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-23",
      "status": "ready",
      "ai": {
        "intro": "10 月 22 日 GitHub 发布三项 Copilot 组织管理更新：未配置功能的默认策略开始分批执行、影响力仪表板增加行业对照、使用量 API 显示更多自定义代理和工具名称。它们面向组织管理员，并非个人账户的新免费功能。",
        "updates": [
          {
            "event": "GitHub Copilot GA 功能全局默认策略开始执行（2026-10-22）",
            "summary": "GitHub 开始分批执行 Copilot Business 与 Enterprise 的 GA 功能全局默认策略。到 10 月 26 日逐步上线后，尚未配置的合格功能会按管理员选择设为启用、禁用或交由组织决定；已有明确设置不会被覆盖，预览功能仍需选择加入。",
            "howTo": "Copilot 企业或组织管理员打开 GitHub 的 AI Controls → Copilot → Default policy for new features，查看或选择 Enabled、Disabled 或 Let organizations decide；学生使用组织账号时，可向管理员确认未配置的 GA 功能将如何处理。",
            "impact": "若课程、实验室或实习单位通过 Business/Enterprise 管理 Copilot，新的默认值可能改变尚未设置的功能或 MCP 能力是否可用；个人账户设置不会因此自动改变。",
            "free": "这是 Copilot Business/Enterprise 的组织策略更新，不是个人免费权益。官方公告说明分批执行至 2026-10-26，并称只对未配置项作一次性调整；价格、地区与请求配额官方未说明。",
            "category": "GitHub Copilot / 组织管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-22",
              "url": "https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/"
            }
          },
          {
            "event": "Copilot 影响力仪表板新增行业对照（2026-10-22）",
            "summary": "Copilot 影响力仪表板新增 Industry comparison，企业及不隶属于企业的组织可将自身 agentic adoption 与 leverage 指标和自愿参与组织的聚合基准比较，并按公司规模与行业查看同类组。参与默认关闭；基准样本不足时可能只显示中位数、扩大比较组或暂不显示排名。",
            "howTo": "企业所有者或独立组织所有者先确保 Copilot usage metrics policy 已启用，再在影响力仪表板或组织/企业 Copilot policy 中选择加入行业对照；可在同一处关闭参与。",
            "impact": "使用学校或实验室组织账号的学生可了解机构如何衡量 Copilot 代理采用情况；该对照只在管理仪表板显示，不会出现在个人账号或 usage metrics API 导出中。",
            "free": "公告将此功能限定于企业及未被企业拥有的组织，并要求指标策略启用及管理员选择加入；它不是个人免费功能。价格、地区总体可用范围和固定配额官方未说明；有数据驻留的 Enterprise Cloud 只与同地区参与者比较。",
            "category": "GitHub Copilot / 组织分析",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-22",
              "url": "https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/"
            }
          },
          {
            "event": "Copilot 使用量 API 开始显示自定义 skills、agents 与 MCP 名称（2026-10-22）",
            "summary": "GitHub 的 Copilot 使用量报告现在会按名称列出组织自建的 skills、custom agents、MCP servers、slash commands 和 plugins，而不再一概归入 other 或 custom；每个 totals_by_* 列表最多显示 25 项（此前为 5 项），其余活动仍汇总到 other。",
            "howTo": "组织管理员或有 View Copilot Metrics 权限者，在启用 Copilot usage metrics policy 后调用官方 Copilot usage metrics REST API，检查 totals_by_skill、totals_by_custom_agent、totals_by_mcp 等字段；查看 10 月 22 日之后处理的报告日，并确认客户端版本满足公告要求。",
            "impact": "课程或实验室组织的管理员可用此报告判断自建技能和代理是否被团队采用；对学生而言，这是组织级使用趋势，不代表个人贡献，也不适合作为精确考核。",
            "free": "此变化适用于企业和组织的 Copilot 使用量报告；读取权限限于相应管理员或获授权者，并需启用指标策略。官方未说明单独价格、地区限制或固定配额；部分客户端集成需要指定最低版本。",
            "category": "GitHub Copilot / 使用量 API",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-22",
              "url": "https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api/"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 官方计划说明允许使用 Gmail 账号免费注册 Gemini Notebook Standard；标准计划列出每位用户最多 100 本 notebook、每本最多 50 个来源，并可使用 Custom Chat 与 Analytics。",
            "howTo": "登录 Gemini Notebook 网页版，使用 Gmail 账号创建 notebook，再上传或添加课程讲义、网页等来源；需要更多来源时先核对官方计划表，不要假设免费额度可叠加。",
            "impact": "可将课程阅读材料集中到一个 notebook，再围绕已添加来源整理复习提纲或进行资料问答；重要结论应回到原文核对。",
            "free": "Standard 可免费注册，配额为每用户 100 本 notebook、每本 50 个来源。网页适用于达到当地同意年龄且位于支持国家/地区的用户；官方未说明 Standard 的到期日或更细的每日调用配额。",
            "category": "长期免费网页访问 / 课程资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方计划说明",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "Cloudflare Workers AI：每日 10,000 Neurons 免费额度",
            "summary": "Cloudflare 官方定价页说明 Workers AI 在 Free 与 Paid Workers 计划中提供每日 10,000 Neurons 免费额度；超过后，Free 用户需升级，Paid 用户对超额部分按每 1,000 Neurons $0.011 计费。",
            "howTo": "创建 Cloudflare Workers 账户后，按 Workers AI 官方文档选择 dashboard、Workers binding 或 REST API 路径建项目；先核对所选模型的价格与账单要求，再少量调用并在控制台监测 Neurons。",
            "impact": "适合课程原型或小型应用练习服务端模型调用、请求处理和计量；不要将它当作无限制 API，也不要在未检查模型账单要求时提交真实支付方式。",
            "free": "免费层每天 10,000 Neurons，额度在 00:00 UTC 重置；超出后 Free 计划不能继续使用，Paid 计划超额按 $0.011/1,000 Neurons 收费。部分列出的模型要求付费账单方式；官方未说明地区资格或固定 token 配额。",
            "category": "每日免费 API 额度 / 原型开发",
            "source": {
              "name": "Cloudflare Workers AI 官方定价页",
              "published": "官方未说明",
              "url": "https://developers.cloudflare.com/workers-ai/platform/pricing/"
            }
          },
          {
            "event": "GitHub Copilot Student：验证学生可免费使用",
            "summary": "GitHub 官方学生指南确认，通过 GitHub Education 验证的学生可免费使用 Copilot 功能；学生需在 Education benefits 中单独启用，且资格每月重新评估。",
            "howTo": "先申请并完成 GitHub Education 学生验证，再访问 github.com/settings/education/benefits，按页面提示启用 Copilot Student；如果仍显示试用或付费结账，等待权益生效，不要提交购买。",
            "impact": "可在课程项目中练习代码补全和理解建议；生成代码仍应由学生阅读、测试并确认。",
            "free": "仅适用于经 GitHub Education 验证的学生，免费权益需单独启用且每月重评；验证后权益可能需要数日才应用。官方指南未列明具体地区名单、请求配额或免费权益期限。",
            "category": "学生教育权益 / 编程辅助",
            "source": {
              "name": "GitHub Docs：学生 Copilot 设置",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          },
          {
            "event": "Google Colab：免费云端 Jupyter 笔记本",
            "summary": "Google 官方 FAQ 将 Colab 描述为无需本地设置的托管 Jupyter Notebook 服务，免费提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学和教育。",
            "howTo": "打开 Google Colab 并新建 notebook，在单元格中运行课程 Python 代码；若要试用 GPU/TPU，先查看 FAQ 中的资源限制，因为免费硬件不保证持续可用。",
            "impact": "可用于完成 Python 作业、演示数据分析或试跑小型机器学习练习，不必先配置本地环境。",
            "free": "官方说明 Colab 可免费使用，但免费资源不保证且不无限，使用限制会变化；FAQ 未承诺固定 GPU/TPU 时长、调用配额或地区条件。",
            "category": "长期免费开发工具 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "OpenAI Whisper：可本地运行的多语言语音识别工具",
            "summary": "OpenAI 的 Whisper 官方仓库提供可下载的通用语音识别模型，支持多语言转写、语音翻译和语言识别；仓库代码采用 MIT 许可，并给出 pip 安装方式。",
            "howTo": "在兼容的本地 Python 环境安装仓库说明中的 openai-whisper，并配置 ffmpeg；下载模型后用音频文件测试转写或翻译，再对专有名词和识别结果进行人工校对。",
            "impact": "可把公开讲座或自有录音转成文本，辅助听力复习、字幕制作或多语言学习；处理他人录音前应确认授权和隐私要求。",
            "free": "官方仓库按 MIT 许可发布代码，可自行下载运行；本地硬件、存储和电力成本由使用者承担。仓库未说明官方托管免费调用额度、地区或账号资格。",
            "category": "免费单次工具 / 本地语音转写",
            "source": {
              "name": "OpenAI Whisper 官方 GitHub 仓库",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          }
        ]
      },
      "english": {
        "intro": "本期选读 NPR 的厄尔尼诺与伊瓜苏瀑布现场报道，以及 PBS 对美国选民登记审查和选举监票争议的访谈报道；分别练习环境新闻中的现场描写与因果归因、公共议题报道中的多方观点和证据辨析。",
        "articles": [
          {
            "title": "Greetings from the Brazil-Argentina border, where waterfalls are flowing at near-record rates",
            "source": "NPR",
            "published": "2026-10-22",
            "url": "https://www.npr.org/2026/10/22/g-s1-148553/argentina-brazil-iguazu-falls-waterfalls-super-el-nino",
            "readingTime": "约 2 分钟",
            "topic": "环境 / 超级厄尔尼诺、极端降雨与瀑布水量",
            "summary": "NPR 记者从阿根廷与巴西边境的伊瓜苏瀑布现场写起，报道巴西持续降雨使瀑布水量接近历史高位；科学家将这轮降雨与当年的超级厄尔尼诺联系起来。文章用国家公园记录的流量数据说明变化幅度：一次测得每秒近 1,200 万升，约为常态的十倍；随后的水位上涨淹到步道底部，管理方关闭步道。全文由个人观察转向气候背景、数字证据和游客影响，最后以公园负责人“还在下雨”的回答收束。",
            "reason": [
              "极端降雨、厄尔尼诺与自然景观变化属于环境类公共议题，可练习从现场材料理解气候影响。",
              "报道按“现场体验—背景解释—量化数据—管理措施”推进，结尾用当事人原话回扣持续降雨。",
              "可考查近纪录流量、常态比较和步道关闭之间的关系，并区分科学家提出的联系与确定因果。",
              "near-record、deluge、precipice 等词兼具新闻表达和语境推断价值。",
              "写作可借鉴 not just... but... 的扩展结构，并用可比较的数据支撑环境变化描述。"
            ],
            "vocabulary": [
              {
                "word": "enormity",
                "phonetic": "/ɪˈnɔːrməti/",
                "part": "n.",
                "translation": "巨大；宏大"
              },
              {
                "word": "imposing",
                "phonetic": "/ɪmˈpoʊzɪŋ/",
                "part": "adj.",
                "translation": "雄伟的；令人敬畏的"
              },
              {
                "word": "cascade",
                "phonetic": "/kæˈskeɪd/",
                "part": "n.",
                "translation": "瀑布；倾泻"
              },
              {
                "word": "relentless",
                "phonetic": "/rɪˈlentləs/",
                "part": "adj.",
                "translation": "持续不断的；不减弱的"
              },
              {
                "word": "deluge",
                "phonetic": "/ˈdeljuːdʒ/",
                "part": "n.",
                "translation": "洪水；倾盆大雨"
              },
              {
                "word": "precipice",
                "phonetic": "/ˈpresəpɪs/",
                "part": "n.",
                "translation": "悬崖；峭壁"
              },
              {
                "word": "surge",
                "phonetic": "/sɜːrdʒ/",
                "part": "v.",
                "translation": "涌动；激增"
              },
              {
                "word": "tumble",
                "phonetic": "/ˈtʌmbəl/",
                "part": "v.",
                "translation": "翻滚；倾泻"
              },
              {
                "word": "brave",
                "phonetic": "/breɪv/",
                "part": "v.",
                "translation": "勇敢面对；冒着……而前往"
              },
              {
                "word": "hover",
                "phonetic": "/ˈhʌvər/",
                "part": "v.",
                "translation": "盘旋；悬在……上方"
              }
            ],
            "sentences": [
              {
                "original": "Iguazú isn't just one imposing fall, but a complex of cascades spanning more than a mile across both countries.",
                "analysis": [
                  "主干是 Iguazú isn't just one imposing fall, but a complex of cascades，采用 not just A, but B 的并列结构。",
                  "spanning more than a mile... 是现在分词短语，后置修饰 cascades，补充瀑布群的范围。",
                  "across both countries 进一步限定延展范围，说明景观横跨两国。",
                  "逻辑上先否定单一瀑布的理解，再补充更准确的整体定义。",
                  "可借鉴 not just..., but... 扩展定义或纠正读者预期。"
                ],
                "translation": "伊瓜苏并非只有一条雄伟的瀑布，而是由横跨两国、绵延一英里多的瀑布群组成。"
              },
              {
                "original": "A rain-soaked October in Brazil has sent near-record volumes of water surging over its towering cliffs.",
                "analysis": [
                  "主干为 A rain-soaked October... has sent...，现在完成时呈现降雨对当前水量的影响。",
                  "rain-soaked 是复合形容词，前置修饰 October，浓缩表达当月持续多雨。",
                  "send + 宾语 + 现在分词构成结果结构：大量水流正涌过高耸的崖壁。",
                  "near-record 修饰 volumes，表示接近纪录水平而非已经确认刷新纪录。",
                  "可用“背景条件 + has sent + 结果”表达天气因素与可观察变化之间的联系。"
                ],
                "translation": "巴西一个雨水充沛的十月，使接近纪录水平的水量奔涌越过高耸的崖壁。"
              },
              {
                "original": "When asked why access was shut off, the national park's director simply said, \"It just keeps raining.\"",
                "analysis": [
                  "主句是 the national park's director simply said，交代发言人及其回答。",
                  "When asked... 是省略主语和 be 动词的时间状语从句，可还原为 When he was asked。",
                  "why access was shut off 是 asked 的间接疑问内容，使用陈述语序；was shut off 为被动语态。",
                  "引语用一般现在时 keeps 描写仍在持续的降雨，和前文水位不断上涨相呼应。",
                  "可借鉴 When asked..., 主句... 的压缩结构引出受访者回应。"
                ],
                "translation": "当被问及为何关闭通道时，国家公园负责人只回答：“雨就是一直下。”"
              }
            ]
          },
          {
            "title": "DOJ monitoring plans and DHS voter checks raise concerns of election interference",
            "source": "PBS NewsHour",
            "published": "2026-10-22",
            "url": "https://www.pbs.org/newshour/show/doj-monitoring-plans-and-dhs-voter-checks-raise-concerns-of-election-interference",
            "readingTime": "约 6 分钟",
            "topic": "社会与公共治理 / 选民登记审查、法院监督与选举管理",
            "summary": "PBS NewsHour 通过主持人与白宫记者的问答，梳理联邦部门核查选民登记和派出选举观察员引发的争议。报道先说明加州联邦法官限制国土安全部在九州的相关外勤行动，原因之一是名单可能包含公民；随后区分司法部针对加州邮件选票的诉讼指控与当地登记机构的回应，并指出相关争议仍在诉讼过程中。记者再说明司法部计划派出逾千名观察员，与 2022 年的 388 人作比较，最后呈现不同州务卿对监票行动的不同看法。全文以程序、数据和双方立场构成，提醒读者把机构指控、法院决定和已证实事实区分开。",
            "reason": [
              "选民资格、政府权限与选举监督是社会治理主题，适合练习公共政策和公民权利类阅读。",
              "访谈先交代法院限制，再补充另一项诉讼和名单争议，之后转向全国监票计划及州级回应。",
              "可考查司法裁定范围、机构指控与地方回应的对应关系，也可练习比较不同年份的数量。",
              "eligible、restrict、allegation、jurisdiction 等词适用于法律、行政和公共事务语境。",
              "写作可借鉴先说明程序事实、再呈现争议双方观点的结构，并用 allegedly 等表达避免把指控写成定论。"
            ],
            "vocabulary": [
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "有资格的；符合条件的"
              },
              {
                "word": "policing",
                "phonetic": "/pəˈliːsɪŋ/",
                "part": "v.",
                "translation": "监管；监督"
              },
              {
                "word": "restrict",
                "phonetic": "/rɪˈstrɪkt/",
                "part": "v.",
                "translation": "限制"
              },
              {
                "word": "initiative",
                "phonetic": "/ɪˈnɪʃətɪv/",
                "part": "n.",
                "translation": "倡议；专项行动"
              },
              {
                "word": "allege",
                "phonetic": "/əˈledʒ/",
                "part": "v.",
                "translation": "声称；指控"
              },
              {
                "word": "unfounded",
                "phonetic": "/ʌnˈfaʊndɪd/",
                "part": "adj.",
                "translation": "无事实依据的"
              },
              {
                "word": "compile",
                "phonetic": "/kəmˈpaɪl/",
                "part": "v.",
                "translation": "汇编；整理"
              },
              {
                "word": "jurisdiction",
                "phonetic": "/ˌdʒʊrɪsˈdɪkʃən/",
                "part": "n.",
                "translation": "管辖区域；司法管辖权"
              },
              {
                "word": "monitor",
                "phonetic": "/ˈmɑːnɪtər/",
                "part": "n.",
                "translation": "观察员；监测者"
              },
              {
                "word": "passive",
                "phonetic": "/ˈpæsɪv/",
                "part": "adj.",
                "translation": "被动的；不主动干预的"
              }
            ],
            "sentences": [
              {
                "original": "With the midterm elections less than two weeks away, a new legal battle is raising questions about the federal government's role in policing who is eligible to vote.",
                "analysis": [
                  "主句主干是 a new legal battle is raising questions，使用现在进行时呈现争议正在发展。",
                  "句首 With...away 是独立主格结构，补充中期选举临近这一背景。",
                  "about 引出 questions 的内容；who is eligible to vote 是 policing 的宾语从句。",
                  "逻辑上以时间紧迫性引出法律争议及其公共治理问题。",
                  "可借鉴 With + 名词 + 形容词/副词短语开篇交代背景，再提出核心问题。"
                ],
                "translation": "距离中期选举不到两周，一场新的法律争端正引发人们对联邦政府在监督投票资格方面作用的质疑。"
              },
              {
                "original": "The judge is allowing this to go into effect tomorrow, so that the government has time to appeal.",
                "analysis": [
                  "主句核心是 The judge is allowing this to go into effect，this 指前文所述的法院限制令。",
                  "allow + 宾语 + to do 表示允许某事发生；tomorrow 是时间状语。",
                  "so that 引导目的从句，说明延后生效是为了给政府留下上诉时间。",
                  "is allowing 使用现在进行时，描述法官当前作出的程序安排。",
                  "可用 so that + 主语 + 谓语说明某项安排所服务的目的。"
                ],
                "translation": "法官允许该命令明天生效，以便政府有时间提出上诉。"
              },
              {
                "original": "The agency regularly monitors elections, but this year is a big spike in that number.",
                "analysis": [
                  "前半句主干为 The agency monitors elections，regularly 作频率副词修饰 monitors。",
                  "but 连接转折关系，提示今年的观察员数量明显偏离常态。",
                  "this year is a big spike 是口语化表达，省略了“观察员人数”的重复名词。",
                  "in that number 限定 spike 指前文讨论的监票人数，而非监票活动本身。",
                  "写作中可用 but 对照常规情况与某年的变化，也可改写为 the number represents a sharp increase。"
                ],
                "translation": "该机构通常会监督选举，但今年的监票人数大幅上升。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-22",
      "status": "ready",
      "ai": {
        "intro": "昨日与今日未核实到 3 项符合条件的 AI 更新，因此扩展至近 7 天；本期选入 10 月 19—20 日的 Gemini 与 Copilot 官方更新，并新增 Claude 免费计划、Gemini API 免费层和 Qwen3-4B 开放权重。",
        "updates": [
          {
            "event": "Gemini 为小企业推出品牌和经营工作入口（2026-10-20）",
            "summary": "Google 公告为 Gemini App 增加小企业专用入口、品牌风格设定、经营内容工具及财务图表能力；用户可上传网站或品牌资料生成风格一致的视觉素材，并连接 Google 与部分第三方业务工具。官方表示功能正于全球向 Gemini App 用户分批推出。",
            "howTo": "打开 Gemini App，若功能已到账，进入小企业工作入口并上传品牌网站、品牌套件、字体或配色；随后按需调用营销或财务能力。入口尚未出现时，等待官方所说的分批上线。",
            "impact": "学生创业团队或社团可先用品牌素材起草宣传图文，也可把课程项目中的样例账目整理成图表；对真实财务数据和生成的营销信息仍需逐项核验。",
            "free": "公告称功能面向 Gemini App 用户并在全球分阶段推出，但价格、额外账号条件及具体配额官方未说明；公告称 rollout 将在未来几天开始。",
            "category": "Gemini 应用 / 小企业工具",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-20",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-tools-small-business-owners/"
            }
          },
          {
            "event": "Gemini Notebook 增加幻灯片与视频概览生成前审阅（2026-10-19）",
            "summary": "Gemini Notebook 为 Slide Decks 和 Video Overviews 加入共创步骤：用户先查看基于资料生成的大纲或制作说明，再反馈内容顺序、摘要和视觉风格，确认后才渲染成品；原有直接生成方式仍可选。",
            "howTo": "在 Gemini Notebook 中用已加入的资料提出制作幻灯片或视频概览的请求；打开 Review，在工作区检查幻灯片大纲说明或视频制作说明，提交修改后选择 Proceed。",
            "impact": "复习时可先检查资料是否被归纳完整，再把讲义转成汇报材料；若需要快速草稿，也可跳过审阅。",
            "free": "Google 称正向全球 Gemini Notebook 用户逐步推出，预计在一周内推广；公告未说明价格、账号门槛、使用配额或地区限制。",
            "category": "学习工具 / 资料转演示",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/co-create-slides-videos/"
            }
          },
          {
            "event": "GitHub Copilot 模型策略管理 REST API 正式可用（2026-10-19）",
            "summary": "GitHub 将读取和更新 Copilot 模型策略的 GET、PATCH REST API 推至一般可用，覆盖 enterprise、enterprise team、agent app 和 organization 四个管理层级；它改变的是组织管理能力，并非个人账户新增模型。",
            "howTo": "组织 Copilot 管理员可从 GitHub 官方公告进入 REST API 文档，先用 GET 查看相应层级的模型策略，再按组织管理模式用 PATCH 修改允许的模型。",
            "impact": "使用学校或实验室组织账号的学生可向管理员确认可用模型；个人账号用户不需要寻找一个并不存在的个人功能入口。",
            "free": "这是组织/企业管理员 API，并非个人免费权益。公告未说明单独价格、地区限制或请求配额；使用范围取决于相应 GitHub 组织与 API 权限。",
            "category": "GitHub Copilot / 组织管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-19",
              "url": "https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free：网页、桌面和移动端的免费计划",
            "summary": "Claude 官方定价页列出 $0 的 Free 计划，支持网页、桌面和移动端对话，并列出网页搜索、创建文件、运行代码、Artifacts 等功能。",
            "howTo": "访问 Claude 网页或安装桌面/移动端应用，创建账号后选择 Free 计划；用它整理阅读提纲、探索资料或生成练习题，并在提交前核查答案。",
            "impact": "可作为写作构思、文件整理和代码练习的免付费起点，适合先验证任务是否适合对话式工具。",
            "free": "官方标价 $0，称 Free for everyone；使用限制适用，但定价页没有给出具体配额。该页未说明地区限制或额外资格条件。",
            "category": "长期免费网页/应用访问 / 学习助手",
            "source": {
              "name": "Claude 官方定价页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Gemini Developer API 免费层：可免费试做小型原型",
            "summary": "Google 官方定价页列出 Free 层，提供部分模型的免费输入与输出 token，并可使用 Google AI Studio；免费层仅开放部分模型，官方说明免费层内容可能用于改进产品。",
            "howTo": "打开 Google AI Studio 获取 API key，在项目中选择定价页标为 Free 的模型并按官方 quickstart 发起请求；开始前查看该模型和项目的实时 rate limits，避免把敏感课程材料发送到免费层。",
            "impact": "适合课程编程作业或个人原型试做模型调用、结构化输出和提示词实验；超出免费层前应先确认计费设置。",
            "free": "免费层仅限特定模型，页面未列出固定调用配额；速率限制依模型与项目而异。此定价页未说明地区与账号资格条件，免费层数据可用于改进 Google 产品。",
            "category": "免费 API 额度 / 原型开发",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Qwen3-4B：Apache-2.0 许可的可下载开放权重模型",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-4B 权重与 Transformers 使用示例；模型卡元数据标注 Apache-2.0 许可，支持思考与非思考模式切换。",
            "howTo": "打开 Qwen/Qwen3-4B 模型卡，按 Quickstart 安装 Transformers 与所需运行依赖，再下载权重并在本地加载；也可先阅读模型卡的硬件和运行说明。",
            "impact": "适合在有兼容设备的课程项目中学习本地推理、比较提示模式，或测试中英文本处理；本地模型输出仍需验证。",
            "free": "模型卡标注 Apache-2.0，可按该许可下载和使用权重；权重下载不收托管 API 调用费，但本地硬件、存储和电力成本由使用者承担。官方模型卡未说明免费托管调用配额、地区或账号资格。",
            "category": "开放模型权重 / 本地学习",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B"
            }
          },
          {
            "event": "GitHub Copilot Student：经验证学生可启用免费权益",
            "summary": "GitHub 官方学生指南确认，GitHub Education 验证通过的学生可以免费使用 Copilot 功能；学生须主动完成启用，资格每月重新评估。",
            "howTo": "先通过 GitHub Education 学生验证，再进入 GitHub Settings 的 Education benefits，按页面提示单独启用 Copilot Student；若仍显示 Free 或付费结账，先等待权益生效，不要提交购买。",
            "impact": "可在课程项目中练习代码补全和理解建议；阅读、测试并理解生成代码仍是学生自己的责任。",
            "free": "仅面向经 GitHub Education 验证的学生，免费权益需单独启用且资格每月重评；官方指南未列明具体地区名单或请求配额，验证通过后权益可能需数日生效。",
            "category": "学生教育权益 / 编程辅助",
            "source": {
              "name": "GitHub Docs：学生 Copilot 设置",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          }
        ]
      },
      "english": {
        "intro": "本期一篇报道分析欧盟调查订房平台欺诈风险与平台责任，另一篇法律评论讨论儿童独立活动、家长责任和儿童保护之间的张力；分别练习新闻证据归纳与平衡论证。",
        "articles": [
          {
            "title": "Booking.com under investigation by EU regulators over fake listings and scams",
            "source": "The Guardian",
            "published": "2026-10-21",
            "url": "https://www.theguardian.com/world/2026/oct/21/bookingcom-under-investigation-eu-regulators-fake-listings-scams",
            "readingTime": "约 6 分钟",
            "topic": "商业与科技 / 平台治理、消费者保护与网络诈骗",
            "summary": "欧盟委员会对 Booking.com 展开调查，重点是平台是否充分防范虚假房源、钓鱼信息和账户被盗后的“预订劫持”，并调查付费房源的广告透明度。报道先交代《数字服务法》要求平台评估风险和采取措施，再以消费者组织收到的诈骗投诉、此前媒体测试及用户损失说明问题规模；同时呈现欧盟方面对防护不足的批评和 Booking.com 的回应。文章指出调查尚未预判结果，但若被认定违规可能面临相当于全球年营业额 6% 的罚款，结尾强调平台需加强数据保护和反欺诈防线。",
            "reason": [
              "平台诈骗、消费者权益和数字监管是商业与社会治理的交叉主题，适合练习公共政策类阅读。",
              "文章由调查消息切入，解释法律义务，再以投诉数据和案例补证，随后呈现企业回应与潜在后果。",
              "可考查调查对象、违规指控与既定结论的区别，也可辨认证据、回应和监管后果之间的关系。",
              "fraudulent、safeguard、transparency 等词汇可用于讨论网络交易风险与平台责任。",
              "写作可借鉴“规则—案例—回应—后果”的论证顺序，并用 may、alleged 等词避免把调查指控写成定论。"
            ],
            "vocabulary": [
              {
                "word": "investigation",
                "phonetic": "/ɪnˌvestɪˈɡeɪʃən/",
                "part": "n.",
                "translation": "调查"
              },
              {
                "word": "alleging",
                "phonetic": "/əˈledʒɪŋ/",
                "part": "v.",
                "translation": "声称；指称"
              },
              {
                "word": "fraudulent",
                "phonetic": "/ˈfrɔːdʒələnt/",
                "part": "adj.",
                "translation": "欺诈的"
              },
              {
                "word": "transparency",
                "phonetic": "/trænsˈperənsi/",
                "part": "n.",
                "translation": "透明度"
              },
              {
                "word": "safeguard",
                "phonetic": "/ˈseɪfɡɑːrd/",
                "part": "n.",
                "translation": "防护措施"
              },
              {
                "word": "impersonate",
                "phonetic": "/ɪmˈpɜːrsəneɪt/",
                "part": "v.",
                "translation": "冒充"
              },
              {
                "word": "turnover",
                "phonetic": "/ˈtɜːrnoʊvər/",
                "part": "n.",
                "translation": "营业额"
              },
              {
                "word": "systemic",
                "phonetic": "/sɪˈstemɪk/",
                "part": "adj.",
                "translation": "系统性的"
              },
              {
                "word": "phishing",
                "phonetic": "/ˈfɪʃɪŋ/",
                "part": "n.",
                "translation": "网络钓鱼"
              },
              {
                "word": "constructively",
                "phonetic": "/kənˈstrʌktɪvli/",
                "part": "adv.",
                "translation": "建设性地"
              }
            ],
            "sentences": [
              {
                "original": "The commission said that opening the investigation did not prejudge the outcome.",
                "analysis": [
                  "主干是 The commission said，that 引导的宾语从句给出委员会的程序性说明。",
                  "宾语从句中 opening the investigation 是动名词短语作主语，did not prejudge 是谓语。",
                  "did not 的否定范围落在 prejudge，意为调查启动并未预先决定最终结果。",
                  "这句限定了新闻结论的力度，区分“展开调查”和“已经认定违规”。",
                  "可借鉴 said that... 转述机构立场，并用 not prejudge 避免把程序描述成结论。"
                ],
                "translation": "委员会表示，启动调查并不意味着预先判定结果。"
              },
              {
                "original": "Booking.com, which is headquartered in Amsterdam and claims to have 28m accommodation listings, said it was engaging constructively with the commission.",
                "analysis": [
                  "主句主干为 Booking.com said...，公司名称作主语，said 引出其回应。",
                  "which 引导的非限制性定语从句补充公司总部所在地及其自称的房源数量。",
                  "said 后的 it was engaging... 是宾语从句，说明公司称自己正如何回应。",
                  "constructively 修饰 engaging，描述回应方式；claims to 也提示房源数量是公司的说法。",
                  "可借鉴非限制性定语从句补充背景，并用 claims to 标记未经独立证实的自述。"
                ],
                "translation": "Booking.com 表示正与委员会进行建设性沟通；该公司总部位于阿姆斯特丹，并称有 2,800 万处住宿房源。"
              },
              {
                "original": "These cases were “just the tip of the iceberg”, it said, as many victims would not report to its fraud helpdesk.",
                "analysis": [
                  "主干是 These cases were “just the tip of the iceberg”，用隐喻表达已报告案例可能只是表面部分。",
                  "插入的 it said 标明这句话来自前文提到的荷兰消费者协会。",
                  "as 引导原因/解释从句，说明许多受害者可能不会向其欺诈求助渠道报告。",
                  "would not report 使用情态结构描述未发生的可能情况，并非给出受害者总数。",
                  "可借鉴 as 从句解释数据不完整的原因，同时避免把投诉量等同于全部事件。"
                ],
                "translation": "该协会称，这些案例“只是冰山一角”，因为许多受害者不会向其欺诈求助渠道报告。"
              }
            ]
          },
          {
            "title": "A pregnant mom let her 5-year-old stay outside to collect goose feathers – and was placed on the child abuse and neglect registry",
            "source": "The Conversation",
            "published": "2026-10-19",
            "url": "https://theconversation.com/a-pregnant-mom-let-her-5-year-old-stay-outside-to-collect-goose-feathers-and-was-placed-on-the-child-abuse-and-neglect-registry-293189",
            "readingTime": "约 8 分钟",
            "topic": "社会与教育 / 儿童独立、家长责任与保护制度",
            "summary": "作者以弗吉尼亚一名母亲因让五岁孩子独自去附近池塘捡羽毛而被调查、定罪并上登记册的案件开篇，指出各州对“疏忽照护”的定义不同且可能含糊。文章随后回顾类似案件、各州修法和儿童自主活动研究，认为过度宽泛的规则会促使家长选择持续看护，压缩孩子练习独立和应对风险的机会。作者也承认儿童保护机构必须避免漏掉严重虐待，并讨论问责压力如何造成过度反应；最后主张在儿童安全与了解具体孩子成熟度之间取得平衡，避免无谓案件消耗有限资源。",
            "reason": [
              "儿童独立成长、家庭责任与公共保护制度构成典型社会议题，适合练习抽象观点与具体案例结合的阅读。",
              "作者从个案提出法律问题，比较法规和研究证据，承认保护儿童的另一面，再提出平衡立场。",
              "可考查作者态度、例证功能、因果关系，以及文章如何处理相反价值而非简单二分。",
              "statute、autonomy、scrutiny、imminent 等词汇可迁移到法律、教育和社会政策主题。",
              "写作可借鉴先承认合理顾虑、再指出制度副作用、最后提出平衡原则的让步论证结构。"
            ],
            "vocabulary": [
              {
                "word": "statute",
                "phonetic": "/ˈstætʃuːt/",
                "part": "n.",
                "translation": "成文法规"
              },
              {
                "word": "neglect",
                "phonetic": "/nɪˈɡlekt/",
                "part": "n.",
                "translation": "疏忽照护；忽视"
              },
              {
                "word": "supervision",
                "phonetic": "/ˌsuːpərˈvɪʒən/",
                "part": "n.",
                "translation": "看护；监督"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɑːnəmi/",
                "part": "n.",
                "translation": "自主；自主权"
              },
              {
                "word": "incentive",
                "phonetic": "/ɪnˈsentɪv/",
                "part": "n.",
                "translation": "激励因素"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "审查；密切关注"
              },
              {
                "word": "frivolous",
                "phonetic": "/ˈfrɪvələs/",
                "part": "adj.",
                "translation": "无实际意义的；轻率的"
              },
              {
                "word": "amend",
                "phonetic": "/əˈmend/",
                "part": "v.",
                "translation": "修订；修改"
              },
              {
                "word": "imminent",
                "phonetic": "/ˈɪmɪnənt/",
                "part": "adj.",
                "translation": "迫近的；即将发生的"
              },
              {
                "word": "overreaction",
                "phonetic": "/ˌoʊvəriˈrækʃən/",
                "part": "n.",
                "translation": "反应过度"
              }
            ],
            "sentences": [
              {
                "original": "In other words, the Legislature left it to parents to determine when their child would be mature enough to participate in unsupervised activities.",
                "analysis": [
                  "主干是 the Legislature left it to parents，it 作形式宾语，真正的内容由后面的不定式结构表达。",
                  "to determine... 是宾语补足结构，说明立法机关把判断责任交给了父母。",
                  "when 引导 determine 的宾语从句，说明家长要判断的具体问题。",
                  "mature enough to participate... 中 enough 后接不定式，表达参与无人看护活动所需的成熟度。",
                  "句首 In other words 将前文法规解释归纳成更直接的结论。"
                ],
                "translation": "换言之，立法机关把判断孩子何时足够成熟、可以参加无人看护活动的责任留给了家长。"
              },
              {
                "original": "At the same time, it can also foster a culture of overreaction.",
                "analysis": [
                  "主干为 it can foster a culture，主语 it 指代前文所述的公共审视或问责压力。",
                  "At the same time 是篇章连接语，提示作者补充同一现象的另一种后果。",
                  "can 表示可能性而非必然性，also 表示此处是在已有作用之外补充影响。",
                  "of overreaction 是介词短语，说明这里所说的文化具有何种特征。",
                  "这句用简短转折从“促使机构认真调查”转向“可能反应过度”，体现让步结构。"
                ],
                "translation": "与此同时，它也可能助长一种反应过度的氛围。"
              },
              {
                "original": "A commonsense approach to child protection balances safety with knowledge of the specific child and parents involved.",
                "analysis": [
                  "主干是 A commonsense approach balances safety with knowledge，主语中心词是 approach。",
                  "to child protection 是介词短语，限定这种方法讨论的领域。",
                  "balance A with B 表示把两方面纳入权衡，A 为 safety，B 为 knowledge。",
                  "of the specific child and parents involved 补充说明需要了解的是哪些具体对象；involved 后置修饰 child and parents。",
                  "可借鉴 balance A with B 表达政策或教育议题中的多方权衡。"
                ],
                "translation": "保护儿童的常识性做法，应把安全与对相关儿童及其父母具体情况的了解结合起来。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-21",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Gemini 面向小企业的品牌工具、Notebook 生成前审阅，以及 GitHub Copilot 组织模型策略管理；逐项区分分阶段上线与企业管理范围。",
        "updates": [
          {
            "event": "Gemini App 增加小企业品牌与经营工作入口（2026-10-20）",
            "summary": "Google 公告为小企业主提供品牌风格工作区、经营内容与财务可视化等工具，帮助把品牌资料和业务任务放进 Gemini 的工作流程；官方称将于未来几天向全球 Gemini App 用户逐步推出。",
            "howTo": "打开 Gemini App，待功能出现在应用后进入小企业相关工作入口；按提示提供品牌资料或经营任务，再使用生成的内容与可视化结果。若暂未出现，等待分批开放。",
            "impact": "经营社团、学生创业项目可用它整理品牌语气、准备宣传素材和查看业务数据表达；提交前仍应核对生成内容与原始财务数据。",
            "free": "公告未说明价格、账号额外条件或使用配额；明确的可用范围是 Gemini App 用户，全球分阶段推出，预计未来几天完成。",
            "category": "Gemini 应用 / 小企业与品牌内容",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-20",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-tools-small-business-owners/"
            }
          },
          {
            "event": "Gemini Notebook 允许先审阅再生成幻灯片和视频概览（2026-10-19）",
            "summary": "Google 为 Slides 与 Video Overviews 增加生成前共创步骤：用户可先查看幻灯片大纲或视频制作说明，调整结构与视觉风格并反馈，再继续生成；官方称将在未来一周向全球 Gemini Notebook 用户推出。",
            "howTo": "在 Gemini Notebook 打开一个已加入资料的 notebook，发起幻灯片或视频概览生成；开启 Review/审阅步骤，检查大纲或制作说明，提交调整意见后再继续生成。",
            "impact": "复习时可先检查讲义要点是否被正确组织，再生成汇报幻灯片或学习视频；比直接接受成品更容易发现遗漏和调整表达。",
            "free": "公告未说明该共创功能的价格、账号条件或专属配额；上线范围为全球 Gemini Notebook 用户，分阶段推送约一周。",
            "category": "学习工具 / Notebook 内容生成",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-10-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/co-create-slides-videos/"
            }
          },
          {
            "event": "GitHub Copilot 模型策略管理 API 开放使用（2026-10-19）",
            "summary": "GitHub changelog 宣布 Copilot model policy API 一般可用，提供 GET 与 PATCH 接口，让企业、团队、组织及 agent app 管理模型策略；这是组织级配置能力，不是个人 Copilot 新模型或个人账户功能。",
            "howTo": "组织的 Copilot 管理者可按 GitHub 官方 changelog 中的 API 文档，针对相应 enterprise、organization、team 或 agent app 策略读取当前配置（GET），再用 PATCH 更新允许的模型策略。",
            "impact": "若课程或实验室通过组织账号使用 Copilot，可向管理员确认哪些模型已获准；自行使用个人账号的学生无需把这项管理 API 当作新功能入口。",
            "free": "这不是个人免费权益。公告确认的是企业/组织层级的 Copilot 策略 API；价格、具体账号权限、地区限制与请求配额均未在该公告说明。",
            "category": "GitHub Copilot / 组织管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-10-19",
              "url": "https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/"
            }
          }
        ],
        "deals": [
          {
            "event": "OpenAI Whisper：可本地运行的开源语音识别工具",
            "summary": "OpenAI 官方仓库提供多语言语音识别、语音翻译和语言识别模型与命令行工具；仓库许可证为 MIT，代码和模型可依许可证使用。",
            "howTo": "安装仓库说明中的依赖与 ffmpeg 后运行 `pip install -U openai-whisper`，再执行 `whisper lecture.mp3 --language Chinese` 生成转写文本；也可按 README 示例使用 Python 接口。",
            "impact": "可把外语讲座或自己的录音转成文字，便于检索、制作复习稿和字幕；本地运行也便于在上传前控制资料流向。",
            "free": "MIT 许可，不收取在线服务调用费；需自行准备兼容设备、存储、运行时间及依赖。官方仓库未说明账号、地区或调用配额，因为它不是托管 API。",
            "category": "免费开源工具 / 转写与翻译",
            "source": {
              "name": "OpenAI Whisper 官方 GitHub 仓库",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          },
          {
            "event": "Google Colab：免费云端 Jupyter 笔记本",
            "summary": "Google Colab 提供无需本地安装的托管 Jupyter 环境，免费使用者可能获得 GPU 或 TPU；官方明确说明硬件可用性和使用限制会变化，资源不保证。",
            "howTo": "访问 Colab，新建 notebook 并运行 Python 单元；需要硬件加速时从 Runtime 菜单选择 Change runtime type，再选择可用的 GPU/TPU。",
            "impact": "可在浏览器完成课程 Python 作业、运行数据分析示例或试用小型机器学习代码，避免先配置本地开发环境。",
            "free": "官方提供免费使用，GPU/TPU 不保证可用，资源和使用限制会浮动；FAQ 未说明固定配额、账号条件或地区名单。",
            "category": "免费云端工具 / 编程与计算",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 官方计划页列出免费 Standard：每位用户最多 100 个 notebooks、每个 notebook 50 个 sources；支持网页端，需在支持的国家或地区且达到当地同意年龄。",
            "howTo": "使用 Gmail 免费注册或符合条件的 Workspace/Workspace for Education 账号登录网页端，新建 notebook 并添加课程资料作为 sources，再通过对话或生成工具复习。",
            "impact": "可把讲义、网页和阅读材料放进独立资料集，围绕原始来源提问、制作复习材料，适合按课程或专题分 notebook。",
            "free": "免费 Standard：100 notebooks/用户、50 sources/notebook。需 Gmail 或合格 Workspace/Education 许可，并受支持国家/地区及当地同意年龄要求限制；具体模型调用配额官方未说明。",
            "category": "免费学习工具 / 资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方计划说明",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "GitHub Copilot Student：通过学生验证可启用学生权益",
            "summary": "GitHub 官方学生指南说明，经 GitHub Education 验证的学生可设置 Copilot Student；须按指南单独启用，资格会按月重新评估。",
            "howTo": "先完成 GitHub Education 学生身份验证，打开官方指南中的 Copilot 学生设置流程并启用权益；若失效，检查 Education 状态并重新确认资格。",
            "impact": "适合在课程项目中用代码补全和解释辅助学习；提交前仍应阅读、测试并理解生成的代码。",
            "free": "面向通过 GitHub Education 学生验证的合资格用户；需要主动启用，资格每月重新评估。该指南未列明具体国家名单或请求配额。",
            "category": "学生权益 / 编程辅助",
            "source": {
              "name": "GitHub Docs：Copilot 学生设置",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          }
        ]
      },
      "english": {
        "intro": "两篇免费全文分别从心理科学与宏观经济切入：一篇解释大脑如何应对不确定性，另一篇以数据核验美国经济表现，适合练习因果、比较和证据归纳。",
        "articles": [
          {
            "title": "How Your Brain Learns to Cope with Uncertainty",
            "source": "Scientific American",
            "published": "2026-10-20",
            "url": "https://www.scientificamerican.com/article/how-your-brain-learns-to-cope-with-uncertainty/",
            "readingTime": "约 10 分钟",
            "topic": "健康与心理 / 不确定性、压力与韧性",
            "summary": "文章从洛杉矶山火期间两位神经科学家的判断经历切入，介绍大脑会依据既有经验预测环境，并用预测误差更新对危险的判断。作者随后说明，长期且难以预测的压力可能使身体持续处于警戒状态，回避行为又会强化原有恐惧；文章借助预测加工、熵和心理治疗研究解释这种循环。后半部分区分脆弱、耐受、韧性和主动寻求信息等应对路径，并指出灵活重估压力、寻求支持、从小挑战练习适应，有助于逐步增强面对不确定性的能力。结尾回到火灾后的儿童教育场景，强调压力并非总是有害，改变策略和建立备选方案也可以成为学习的一部分。",
            "reason": [
              "主题涉及压力管理、心理健康与个人韧性，属于健康和社会生活类常见议题。",
              "文章由真实经历引出理论，再解释机制、比较应对类型，最后给出实践建议，论证层次清楚。",
              "可练习主旨归纳、因果推断、概念辨析，以及作者如何用案例支持科学解释。",
              "包含 uncertainty、resilience、prediction error 等抽象词汇和关系从句、条件句等结构。",
              "写作可借鉴“提出问题—解释机制—给出可行策略”的展开方式，并避免把相关性夸大为确定因果。"
            ],
            "vocabulary": [
              {
                "word": "uncertainty",
                "phonetic": "/ʌnˈsɜːrtnti/",
                "part": "n.",
                "translation": "不确定性"
              },
              {
                "word": "foreseeable",
                "phonetic": "/fɔːrˈsiːəbəl/",
                "part": "adj.",
                "translation": "可预见的"
              },
              {
                "word": "entropy",
                "phonetic": "/ˈentrəpi/",
                "part": "n.",
                "translation": "熵；无序程度"
              },
              {
                "word": "prediction error",
                "phonetic": "/prɪˈdɪkʃən ˈerər/",
                "part": "n. phr.",
                "translation": "预测误差"
              },
              {
                "word": "cortisol",
                "phonetic": "/ˈkɔːrtɪsɔːl/",
                "part": "n.",
                "translation": "皮质醇"
              },
              {
                "word": "chronic",
                "phonetic": "/ˈkrɑːnɪk/",
                "part": "adj.",
                "translation": "长期的；慢性的"
              },
              {
                "word": "resilience",
                "phonetic": "/rɪˈzɪliəns/",
                "part": "n.",
                "translation": "韧性；恢复力"
              },
              {
                "word": "adaptive",
                "phonetic": "/əˈdæptɪv/",
                "part": "adj.",
                "translation": "适应性的"
              },
              {
                "word": "inflexible",
                "phonetic": "/ɪnˈfleksəbəl/",
                "part": "adj.",
                "translation": "僵化的；不灵活的"
              },
              {
                "word": "avoidance",
                "phonetic": "/əˈvɔɪdəns/",
                "part": "n.",
                "translation": "回避；逃避"
              }
            ],
            "sentences": [
              {
                "original": "Evolution prepared us for a world that is uncertain but with hazards that are often foreseeable and, to some extent, calculable.",
                "analysis": [
                  "主干是 Evolution prepared us：Evolution 为主语，prepared 为谓语，us 为宾语。",
                  "for a world 补充“为怎样的世界做准备”；that is uncertain 是修饰 world 的关系从句。",
                  "but with hazards 构成对照：世界虽不确定，危险仍可能具有可预见性。",
                  "that are often foreseeable and ... calculable 修饰 hazards；often 与 to some extent 都限制断言强度。",
                  "可借鉴 be prepared for... 描写适应环境，并列形容词呈现两面特征。"
                ],
                "translation": "进化使我们能够应对一个充满不确定性的世界，但其中的危险往往可以预见，并在一定程度上加以估量。"
              },
              {
                "original": "In the long run, this strategy won’t work.",
                "analysis": [
                  "主干为 this strategy won’t work，主语 this strategy，谓语 won’t work。",
                  "句首 In the long run 是时间状语，意为“从长远来看”。",
                  "won’t work 是对未来效果的否定判断；这里承接前文对长期回避策略的讨论。",
                  "逻辑上以短期似乎有效与长期失效形成对照，适合转入后果分析。",
                  "写作中可用 In the long run, ... 引出长期影响，再用 work 表示“奏效”。"
                ],
                "translation": "从长远来看，这种策略行不通。"
              },
              {
                "original": "“If you expect to be surprised, you can come back more quickly,” she says.",
                "analysis": [
                  "引语主体是 If 从句加主句：If you expect to be surprised 为条件，you can come back more quickly 为结果。",
                  "to be surprised 是不定式被动结构，作 expect 的补足内容，表达“预期会遇到意外”。",
                  "can 表示能力或可能性；more quickly 是比较级副词，修饰 come back。",
                  "引语后的 she says 是叙述者交代来源的插入式表达，英语引语常用逗号衔接。",
                  "条件句适合表达建议的适用情境；come back 在此指更快恢复，而非字面“回来”。"
                ],
                "translation": "她说：“如果你预料到会遇到意外，就能更快地恢复过来。”"
              }
            ]
          },
          {
            "title": "How is the US economy really doing under President Trump?",
            "source": "BBC",
            "published": "2026-10-20",
            "url": "https://www.bbc.co.uk/news/articles/cv98ze40jz18o",
            "readingTime": "约 5 分钟",
            "topic": "经济 / 美国增长、通胀与生活成本",
            "summary": "BBC Verify 逐项核查特朗普对经济的乐观表述，指出整体表现并非单向好坏。美国经济仍在增长，年度化 GDP 增速为 2.2%，人工智能数据中心投资提供支撑；但通胀升至 3.7%，高于其 2025 年初的水平，文章将关税和中东能源供应受扰列为推高物价的因素。家庭收入中位数虽继续上升，智库估算不同收入群体受到税收、补贴到期和价格上涨的影响并不相同。就业增长放慢，政府借款收益率和房贷利率上升，又加重购房负担。文章通过增长、物价、收入、就业和借贷成本等指标对照政治主张，结论是宏观增长不能单独代表普通家庭的生活压力。",
            "reason": [
              "以经济增长和生活成本检验政治主张，属于经济、商业与公共政策类阅读主题。",
              "正文按 GDP、通胀、收入、就业、借贷成本分节，用不同指标拼合出复杂结论。",
              "适合练习数字信息定位、比较趋势、识别归因措辞和概括“总体增长但家庭感受分化”的主旨。",
              "词汇涵盖 tariff、inflation、median、deficit、yield 等宏观经济常用表达。",
              "写作可模仿先呈现主张、再按证据分项核验、最后限定结论的平衡论证结构。"
            ],
            "vocabulary": [
              {
                "word": "boast",
                "phonetic": "/bəʊst/",
                "part": "v.",
                "translation": "自夸；夸耀"
              },
              {
                "word": "faring",
                "phonetic": "/ˈfeərɪŋ/",
                "part": "v.",
                "translation": "进展；表现"
              },
              {
                "word": "sweeping",
                "phonetic": "/ˈswiːpɪŋ/",
                "part": "adj.",
                "translation": "大范围的；全面的"
              },
              {
                "word": "tariff",
                "phonetic": "/ˈtærɪf/",
                "part": "n.",
                "translation": "关税"
              },
              {
                "word": "annualised",
                "phonetic": "/ˈænjuəlaɪzd/",
                "part": "adj.",
                "translation": "按年计算的"
              },
              {
                "word": "forecast",
                "phonetic": "/ˈfɔːrkæst/",
                "part": "n./v.",
                "translation": "预测；预报"
              },
              {
                "word": "median",
                "phonetic": "/ˈmiːdiən/",
                "part": "n./adj.",
                "translation": "中位数；中间值的"
              },
              {
                "word": "expiry",
                "phonetic": "/ɪkˈspaɪəri/",
                "part": "n.",
                "translation": "到期；失效"
              },
              {
                "word": "deficit",
                "phonetic": "/ˈdefɪsɪt/",
                "part": "n.",
                "translation": "赤字；亏空"
              },
              {
                "word": "yield",
                "phonetic": "/jiːld/",
                "part": "n.",
                "translation": "收益率"
              }
            ],
            "sentences": [
              {
                "original": "The US economy is also being helped by an AI investment boom, and could falter if that spending were to dry up.",
                "analysis": [
                  "前半句主干是 The US economy is being helped，主语 economy 与 be helped 构成被动进行时。",
                  "by an AI investment boom 指明推动增长的因素；also 表示这并非唯一支撑。",
                  "and 连接第二个谓语 could falter；if 引导条件从句，说明投资支出减少时可能出现的结果。",
                  "were to dry up 是较正式的假设表达，dry up 表示枯竭或突然减少。",
                  "句子同时呈现当前支撑与潜在风险，适合用于平衡分析。"
                ],
                "translation": "人工智能投资热潮也在支撑美国经济；如果这类支出枯竭，经济可能会走弱。"
              },
              {
                "original": "Average US household incomes are still rising under Trump.",
                "analysis": [
                  "主干为 Average US household incomes are rising，主语是 incomes，谓语是现在进行时。",
                  "Average、US、household 依次修饰 incomes，限定为美国平均家庭收入。",
                  "still 表示这一趋势仍在持续；under Trump 是时间/背景状语。",
                  "后文进一步区分不同收入群体，提醒读者总量上升不等于人人受益相同。",
                  "可用 still + 进行时描述正在延续的趋势，再用 however 引出限制。"
                ],
                "translation": "特朗普执政期间，美国平均家庭收入仍在上升。"
              },
              {
                "original": "But that is significantly down on the 122,000 jobs added each month in the final year of Biden's presidency.",
                "analysis": [
                  "But 标出转折；that 指代前文特朗普重返白宫后每月新增的 34,000 个岗位。",
                  "主干是 that is down on...，down on 在此表示低于某一比较基准。",
                  "significantly 作程度副词修饰 down，强调差距显著。",
                  "added each month 是过去分词短语，后置修饰 122,000 jobs；in the final year... 限定比较时期。",
                  "可用 be down on + 数字/基准描述指标下降，并用 But 连接反向证据。"
                ],
                "translation": "但这一数字明显低于拜登任期最后一年每月新增的 12.2 万个岗位。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-10-20",
      "status": "ready",
      "ai": {
        "intro": "今日有 MiniMax 与 Mistral 两项新模型发布；因昨日到今日不足三项，再扩至近7天，补充 10 月 15 日 Meta 开放权重模型。模型发布不等于免费在线使用，注意各自的价格、授权和硬件门槛。",
        "updates": [
          {
            "event": "MiniMax 发布 M3.1 Flash，面向编程与代理任务（2026-10-20）",
            "summary": "MiniMax 宣布 M3.1 Flash 已上线，定位于代理任务、编程和计算机操作；官方列出的 API 价格为每百万 token 输入 0.15 美元、输出 0.60 美元、缓存输入 0.015 美元。公告称模型可经 MiniMax API、M Plan 和 MiniMax Code 使用。",
            "howTo": "在 MiniMax Code 桌面应用中选择 M3.1 Flash，或在 MiniMax 平台开通 API 后按模型名调用；先用一项可核验的小任务（如解释一段代码并提出测试步骤）试用，再检查结果。",
            "impact": "可把它用于课程代码的分步解释、调试思路或小型自动化尝试；代码修改要自己复核并运行测试，使用 API 前按 token 单价估算成本。",
            "free": "API 按官方列明的 token 价格收费；M Plan 与 MiniMax Code 的价格、免费额度、账户及地区条件、调用配额，公告均未说明。公告称模型权重日后发布，当前不应当作已开放下载。",
            "category": "AI 模型 / 编程与代理",
            "source": {
              "name": "MiniMax 官方博客",
              "published": "2026-10-20",
              "url": "https://www.minimax.io/blog/minimax-m31f"
            }
          },
          {
            "event": "Mistral 推出 Timestral 时间序列预测模型系列（2026-10-20）",
            "summary": "Mistral 发布首个时间序列基础模型系列 Timestral，包含 5M、28M、123M 和 209M 四种规模，可对多变量数据作概率预测并接受历史及已知未来协变量。官方代码库提供独立推理示例，称模型推理可使用 CPU。",
            "howTo": "在 Mistral 官方 GitHub 仓库按说明安装 `timestral`，下载相应 Hugging Face 权重；从小规模模型开始，准备课程项目的时间序列数据后调用 `TimestralForecaster.from_pretrained(...)` 并运行 `forecast`。",
            "impact": "可用于比较不同模型规模如何预测传感器读数、能耗或其他时间序列，并观察概率分位数如何表达不确定性；预测结果仍需与基线方法和真实数据对照。",
            "free": "官方 GitHub 提供代码和权重下载入口；代码采用 Apache 2.0，模型权重另用 Modified MIT 许可。公告未说明托管 API 的免费额度、账户或地区条件；本地运行无需 GPU，但设备与运行成本自理。",
            "category": "开源模型 / 时间序列预测",
            "source": {
              "name": "Mistral 官方博客",
              "published": "2026-10-20",
              "url": "https://mistral.ai/news/timestral/"
            }
          },
          {
            "event": "Meta 发布 Muse Spark Open 开放权重多模态模型（2026-10-15）",
            "summary": "Meta 的 Muse Spark Open 是一个总计 816B、每 token 激活约 42B 参数的开放权重模型，可接收文本、图像、音频和视频输入，模型卡列出最长 1M token 上下文。它的权重访问需要先通过 Hugging Face 模型页的身份及组织信息表单，且所需部署资源远超普通个人电脑。",
            "howTo": "先阅读模型卡的 Muse Model License 与使用政策；若要下载，登录 Hugging Face 并按表单提供法定全名、出生日期及完整组织名称，再等待访问权限。获准后按官方示例选择 Transformers、vLLM 或 SGLang 部署，并核对硬件要求。",
            "impact": "适合学生了解开放权重模型的多模态输入、许可和部署门槛；可先研读模型卡与架构说明，不要把“开放权重”误解成无需申请、可在普通电脑运行或有免费的云端聊天服务。",
            "free": "Muse Model License 授权条款写明可免费取得模型软件与权重，但模型页要求提交完整身份及组织信息后申请访问。官方发布说明称 BF16 权重约 1.5 TB、需 4 台各含 8 张 H200 的节点；NVFP4 版本面向单台 B200：https://huggingface.co/blog/meta-muse-spark-open。托管价格、地区和配额官方未说明。",
            "category": "开放权重模型 / 多模态",
            "source": {
              "name": "Meta Muse Spark Open 模型卡（Hugging Face）",
              "published": "2026-10-15",
              "url": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini Notebook Standard：免费整理课程资料与生成学习内容",
            "summary": "Google 帮助页显示 Standard 方案可免费注册，额度为每位用户 100 个 notebooks、每个 notebook 50 个 sources；可用来源开展资料问答和整理。页面当前将产品称为 Gemini Notebook。",
            "howTo": "使用 Gmail 账户打开 Gemini Notebook 并新建 notebook，添加课程讲义或指定阅读材料，再围绕这些来源提问、生成摘要或复习提纲；先检查上传文件是否适合云端处理。",
            "impact": "可把多份课程材料集中起来做有来源依据的问答和复习提纲，并回到原文件核对答案；50 个来源是每个 notebook 的上限，不是每条对话的额度。",
            "free": "Standard 可免费使用；官方列出每位用户最多 100 个 notebooks、每个 notebook 50 个 sources。可用 Gmail 注册，也可使用符合条件的 Workspace 或 Workspace for Education 许可；仅在官方支持的国家和地区提供，免费生成次数的具体额度官方未说明。",
            "category": "免费学习工具 / 资料问答",
            "source": {
              "name": "Google Gemini Notebook Help",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16213268?hl=en"
            }
          },
          {
            "event": "Google AI Studio：部分 Gemini API 模型有免费层",
            "summary": "Google 开发者定价页列明，Gemini API 免费层可访问部分模型，输入与输出 token 免费，并可从 AI Studio 开始；免费层内容可能用于改进 Google 产品。",
            "howTo": "在官方定价页确认目标模型标有 Free Tier，进入 AI Studio 创建 API key，再按快速入门示例调用；测试时不要提交个人隐私、课程未公开资料或其他敏感内容。",
            "impact": "可在不先支付 token 费用的情况下制作小型摘要、分类或问答原型；应先核对具体模型的速率限制，并把 API key 保存在环境变量而非公开代码仓库。",
            "free": "仅部分模型免费，使用受模型各自的 rate limits 限制；免费额度的统一次数和账号资格，定价页未说明。免费层内容可能用于改进 Google 产品。AI Studio 支持地区及 18+ 年龄要求见官方页面：https://ai.google.dev/gemini-api/docs/available-regions",
            "category": "免费 API / 原型开发",
            "source": {
              "name": "Google AI for Developers Pricing",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Timestral：可在本地 CPU 上试验的公开时间序列模型",
            "summary": "Mistral 官方代码库提供 Timestral 独立推理代码及四种尺寸的 Hugging Face 权重入口；代码为 Apache 2.0，模型权重各自采用 Modified MIT 许可。仓库给出从 NumPy 时间序列产生概率预测的示例。",
            "howTo": "阅读仓库中的许可和安装说明，安装 Python 依赖后先选 5M 或 28M 权重；用 `TimestralForecaster.from_pretrained(\"mistralai/Timestral-5M\")` 加载，再把自己的时间序列传给 `forecast`。",
            "impact": "可用公开数据练习时间序列预测、协变量和不确定性分析；在实验报告中注明使用的权重及其 Modified MIT 条款，并与简单基线比较。",
            "free": "代码和模型权重可从官方仓库链接下载；模型权重适用 Modified MIT，代码适用 Apache 2.0。推理可用 CPU，但硬件、存储和运行成本自理；托管服务的免费额度、账号或地区条件官方未说明。",
            "category": "公开模型权重 / 数据分析",
            "source": {
              "name": "Mistral 官方 GitHub",
              "published": "官方未说明",
              "url": "https://github.com/mistralai/timestral"
            }
          },
          {
            "event": "GitHub Copilot Student：认证学生可免费使用 Copilot",
            "summary": "GitHub 文档确认，经 GitHub Education 验证的学生可免费使用 Copilot 功能；教育资格每月重新评估，学生还需单独启用 Copilot Student。",
            "howTo": "登录 GitHub，前往 Settings > Education benefits 完成或检查学生验证；在免费开发者资源中按提示启用 Copilot Student，再到 Copilot 设置确认计划已生效。",
            "impact": "可用于课程编程时补全代码、解释报错和练习调试；把建议当作待检查的草稿，先理解代码并运行测试再采用。",
            "free": "须通过 GitHub Education 学生验证，且需单独激活；资格每月重新评估。文档未说明聊天或代理的具体免费用量、地区清单或权益截止日期，官方未说明。",
            "category": "学生教育权益 / AI 编程",
            "source": {
              "name": "GitHub Docs",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students"
            }
          },
          {
            "event": "Claude Free：网页、桌面和手机端免费使用",
            "summary": "Anthropic 价格页列出 $0 的 Free 方案，包含网页、桌面和移动应用聊天，以及搜索网页、创建文件和运行代码等功能；使用受限额约束。",
            "howTo": "在 Claude 网页或应用选择 Free 方案，尝试整理一篇课程阅读、解释词汇或运行简单代码；查看使用限制提示，重要信息回到原始资料核实。",
            "impact": "适合做英语阅读理解、摘要提纲和小型代码练习；免费使用量有限，长篇资料或反复追问可能触及限制，不宜将它当作无限量工具。",
            "free": "价格页标为 $0、Free for everyone；页面未列具体消息额度、刷新周期、账户资格或地区清单，并说明需遵守 usage limits。升级方案需付费。",
            "category": "免费 AI 助手 / 阅读与写作",
            "source": {
              "name": "Claude Pricing",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Lula supporters protest against Meta to denounce its 'electoral interference'",
            "source": "EFE",
            "published": "2026-10-20",
            "url": "https://efe.com/english/latest-news/2026-10-20/lula-supporters-protest-against-meta-to-denounce-its-electoral-interference/",
            "readingTime": "约 3 分钟（估算）",
            "topic": "社会与科技 / 社交平台、选举公平与数字主权",
            "summary": "EFE 报道巴西圣保罗约 200 名卢拉支持者在 Meta 总部外抗议，指称平台偏袒反对派候选人弗拉维奥·博索纳罗；Meta 否认干预选举。文章交代两名候选人均向选举法院投诉，法院要求 Meta 在 24 小时内说明如何保障两方竞选活动受到平等对待，并补充报道者提出的背景：抗议者称 Instagram 是巴西民众获取新闻的重要渠道。后半部分转向抗议者对平台排序影响公共讨论的担忧，并引述数字主权与“数字殖民主义”的观点。报道呈现的是抗议者的指控、Meta 的否认和法院要求，并未证明平台确有偏袒。",
            "reason": [
              "社交平台如何影响选举信息分发，连接数字治理、公共讨论和公平竞争，是社会议题类阅读材料。",
              "文章按抗议事件、双方指控与回应、法院行动、平台影响及数字主权观点推进，兼具新闻事实和引述观点。",
              "可练习区分记者陈述、抗议者主张和公司回应，并判断法院要求说明是否等同于认定平台违规。",
              "electoral、interference、favor、disadvantaged、sovereignty 等词适用于选举、公平与数字治理语境。",
              "写作可借鉴“事件—各方立场—制度回应—更广泛影响”的结构，并用 allege 或 deny 准确标示未证实主张。"
            ],
            "vocabulary": [
              {
                "word": "headquarters",
                "phonetic": "/ˌhedˈkwɔːrtərz/",
                "part": "n. pl.",
                "translation": "总部"
              },
              {
                "word": "favor",
                "phonetic": "/ˈfeɪvər/",
                "part": "v.",
                "translation": "偏袒；有利于"
              },
              {
                "word": "opposition",
                "phonetic": "/ˌɑːpəˈzɪʃən/",
                "part": "n.",
                "translation": "反对派"
              },
              {
                "word": "electoral",
                "phonetic": "/ɪˈlektərəl/",
                "part": "adj.",
                "translation": "选举的"
              },
              {
                "word": "interference",
                "phonetic": "/ˌɪntərˈfɪrəns/",
                "part": "n.",
                "translation": "干预；介入"
              },
              {
                "word": "guarantee",
                "phonetic": "/ˌɡærənˈtiː/",
                "part": "v.",
                "translation": "保证；确保"
              },
              {
                "word": "disadvantaged",
                "phonetic": "/ˌdɪsədˈvæntɪdʒd/",
                "part": "adj.",
                "translation": "处于不利地位的"
              },
              {
                "word": "rally",
                "phonetic": "/ˈræli/",
                "part": "n.",
                "translation": "集会；抗议活动"
              },
              {
                "word": "sovereignty",
                "phonetic": "/ˈsɑːvrənti/",
                "part": "n.",
                "translation": "主权"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɑːnəmi/",
                "part": "n.",
                "translation": "自主权；自治"
              }
            ],
            "sentences": [
              {
                "original": "They accused the company of favoring content from opposition candidate Flávio Bolsonaro.",
                "analysis": [
                  "主干是 They accused the company，They 指代前文的抗议者。",
                  "accuse somebody of doing something 是固定结构，of 后的 favoring 表明这是抗议者提出的指控。",
                  "content 是 favoring 的宾语；from opposition candidate Flávio Bolsonaro 后置说明内容来自谁。",
                  "句子陈述的是指控而非已证实事实，理解时要结合报道后文 Meta 的否认。",
                  "可借鉴 accuse A of doing B 转述争议，同时用主语明确标出观点来源。"
                ],
                "translation": "他们指控该公司偏袒反对派候选人弗拉维奥·博索纳罗发布的内容。"
              },
              {
                "original": "The company has denied any interference in the elections.",
                "analysis": [
                  "句子主干是 The company has denied any interference，主语与谓语直接呈现公司的回应。",
                  "has denied 是现在完成时，表示公司已作出否认，结果与当前争议相关。",
                  "any 修饰 interference，强调公司否认存在任何选举干预。",
                  "in the elections 限定 interference 的范围；本句与前文指控形成对照。",
                  "可借鉴 deny any + 名词概括一方回应，但需与另一方主张分开呈现。"
                ],
                "translation": "该公司否认曾以任何方式干预选举。"
              },
              {
                "original": "Both Lula and Bolsonaro have filed complaints with the electoral court, alleging that their political content is disadvantaged on Meta’s platforms.",
                "analysis": [
                  "主句主干是 Both Lula and Bolsonaro have filed complaints，Both...and... 并列两位投诉者。",
                  "with the electoral court 补充投诉对象；现在完成时 have filed 表示投诉已提出。",
                  "alleging 是现在分词短语，补充说明投诉所涉及的主张。",
                  "that 引导 alleging 的宾语从句，主干为 their political content is disadvantaged，使用被动语态突出内容受到的不利影响。",
                  "可借鉴 Both...and... have filed...，再用 alleging that... 报告未经裁定的申诉内容。"
                ],
                "translation": "卢拉和博索纳罗都已向选举法院提出投诉，称各自的政治内容在 Meta 平台上受到不利对待。"
              }
            ]
          },
          {
            "title": "A Kelvin wave raised sea levels on the West Coast. More are coming",
            "source": "NPR",
            "published": "2026-10-19",
            "url": "https://www.npr.org/2026/10/19/nx-s1-6001744/el-nino-kelvin-wave-west-coast",
            "readingTime": "约 5 分钟（估算）",
            "topic": "环境 / 厄尔尼诺、海平面与沿海洪水风险",
            "summary": "NPR 以今年厄尔尼诺期间一支沿美国西海岸移动的开尔文波为切入点，解释这种深海波如何从赤道向东移动，到达南美后沿海岸分流，并逐步抬高海平面。报道借助科学家解释和“晃动的浴缸”比喻说明机制，同时强调它不是海啸或冲岸巨浪：开尔文波本身不会造成洪水，而是抬高背景海平面、增加风暴潮和高潮叠加时发生洪水的可能性。文章用南加州海平面高于常态约 6 至 8 英寸、热带风暴带来积水作例子，也说明暖水可能影响海洋生态；结尾援引研究者预期，秋冬还会有更多波到来。",
            "reason": [
              "气候现象、海平面变化和沿海风险结合，适合环境保护与公共风险类主题。",
              "文章先解释现象和移动机制，再以科学家引述说明风险条件，随后补充生态影响和未来预期。",
              "可训练辨析“提高洪水概率”与“直接造成洪水”的区别，理解类比、因果链和预测性证据。",
              "phenomenon、erosion、elevated、triggering、subside 等词有助于阅读环境和气候报道。",
              "写作可借鉴“解释机制—区分直接与间接影响—引用具体例子—说明不确定性”的审慎论证结构。"
            ],
            "vocabulary": [
              {
                "word": "phenomena",
                "phonetic": "/fəˈnɑːmənə/",
                "part": "n. pl.",
                "translation": "现象"
              },
              {
                "word": "vast",
                "phonetic": "/væst/",
                "part": "adj.",
                "translation": "广阔的；巨大的"
              },
              {
                "word": "gradually",
                "phonetic": "/ˈɡrædʒuəli/",
                "part": "adv.",
                "translation": "逐渐地"
              },
              {
                "word": "elevated",
                "phonetic": "/ˈelɪveɪtɪd/",
                "part": "adj.",
                "translation": "升高的"
              },
              {
                "word": "erosion",
                "phonetic": "/ɪˈroʊʒən/",
                "part": "n.",
                "translation": "侵蚀"
              },
              {
                "word": "favorable",
                "phonetic": "/ˈfeɪvərəbəl/",
                "part": "adj.",
                "translation": "有利的；适宜的"
              },
              {
                "word": "triggering",
                "phonetic": "/ˈtrɪɡərɪŋ/",
                "part": "adj.",
                "translation": "触发性的"
              },
              {
                "word": "surge",
                "phonetic": "/sɜːrdʒ/",
                "part": "n.",
                "translation": "激增；（风暴）潮"
              },
              {
                "word": "subside",
                "phonetic": "/səbˈsaɪd/",
                "part": "v.",
                "translation": "减退；消退"
              },
              {
                "word": "nutrient-dense",
                "phonetic": "/ˈnuːtriənt dens/",
                "part": "adj.",
                "translation": "富含营养的"
              }
            ],
            "sentences": [
              {
                "original": "One of the first major signs of this year's \"Super El Niño\" has reached the U.S.",
                "analysis": [
                  "主干是 One ... has reached the U.S.，谓语现在完成时强调现象已经抵达且与当前相关。",
                  "主语中心词是 One，of the first major signs 是介词短语，说明它属于哪些迹象之一。",
                  "of this year's Super El Niño 进一步限定 signs 的来源和时间背景。",
                  "has reached 描写从发生到抵达的变化，开篇把气候模式与美国沿海影响连接起来。",
                  "可借鉴 One of the first signs of... has reached... 描写宏观现象的早期可见影响。"
                ],
                "translation": "今年“超级厄尔尼诺”的首批主要迹象之一已经抵达美国。"
              },
              {
                "original": "By themselves, Kelvin waves don't cause flooding, Amaya says.",
                "analysis": [
                  "主干是 Kelvin waves don't cause flooding，主语复数与助动词 don't 搭配。",
                  "By themselves 是句首状语，强调开尔文波单独作用时的因果边界。",
                  "Amaya says 是句末引述语，说明这一判断来自受访科学家。",
                  "否定句为后文“提高风险而非直接致洪”设定限制，避免把相关影响夸大成直接因果。",
                  "可借鉴 By itself, X does not cause Y 区分促成风险的因素和直接原因。"
                ],
                "translation": "Amaya 说，开尔文波本身并不会造成洪水。"
              },
              {
                "original": "Instead, they load the dice, making flooding more likely by raising sea levels.",
                "analysis": [
                  "主句核心是 they load the dice，they 回指前句的 Kelvin waves。",
                  "Instead 标示转向，说明波虽不直接造成洪水，却会改变风险条件。",
                  "making flooding more likely 是现在分词结果结构，说明 load the dice 的影响。",
                  "by raising sea levels 是方式状语，解释洪水概率增加的具体机制。",
                  "可借鉴 Instead,... making... more likely by...，表达间接因素如何提高某种结果发生的可能性。"
                ],
                "translation": "相反，它们会增加风险：海平面升高使洪水更有可能发生。"
              }
            ]
          }
        ]
      }
    }
  ]
};
