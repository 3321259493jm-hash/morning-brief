window.BRIEFING_DATA = {
  "updatedAt": "2026-11-09T10:36:25+08:00",
  "issues": [
    {
      "date": "2026-11-09",
      "status": "ready",
      "ai": {
        "intro": "本期聚焦 GitHub Copilot 在 Xcode、JetBrains Air 和 Slack/Teams 的新入口；另整理学生开发权益、免费算力、开放模型与 Mistral 免费方案。",
        "updates": [
          {
            "event": "GitHub Copilot 接入 Xcode 内置编程助手",
            "summary": "GitHub Copilot 现可直接用于 Xcode 内置 coding assistant，作为既有 Copilot for Xcode 扩展之外的另一种工作方式；目前为公开预览，要求 Xcode 27.3 beta。",
            "howTo": "在运行 macOS Tahoe 26.6 或更高版本的 Mac 上安装 Xcode 27.3 beta，打开 Xcode > Settings > Intelligence 配置 GitHub Copilot；随后可在 iOS 课程项目中让它解释报错或提出代码修改建议，并逐项检查结果。",
            "impact": "做 Swift 或 iOS 项目时，可在 Xcode 原生编程助手中试用 Copilot，减少切换编辑器的需要；改动仍应由学生检查并运行测试。",
            "free": "官方公告称所有 Copilot 计划均受支持，并标注为公开预览；未说明地区、单独配额或该预览功能的额外收费规则。",
            "category": "编程助手 / Xcode",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-04",
              "url": "https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/"
            }
          },
          {
            "event": "GitHub Copilot 在 JetBrains Air 中支持本地与云端编码任务",
            "summary": "GitHub 将 Copilot 带入 JetBrains Air，用户可委派编码任务、引导执行并审查结果；集成基于 Agent Client Protocol，可在 IDE 本地或云端运行，并支持并行会话。",
            "howTo": "本地使用时，在 JetBrains IDE 安装 Air 插件，选择 GitHub Copilot 并连接 GitHub 账号；云端使用需在 Air Teams 启用的组织中由管理员开放 Copilot，再从浏览器或 IDE 创建任务并选择仓库和分支。",
            "impact": "课程小组可把独立的修复或测试任务交给不同会话，再在 IDE 中对照代码审查结果；云端任务隔离运行，仍需检查生成的改动。",
            "free": "官方说明本地集成使用现有 Copilot 订阅；云端还要求 Air Teams 企业组织和管理员启用。免费计划是否覆盖各项 Air 功能、地区及具体额度官方未说明。",
            "category": "编程助手 / JetBrains",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-03",
              "url": "https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air"
            }
          },
          {
            "event": "@GitHub 在 Slack 和 Microsoft Teams 正式开放",
            "summary": "GitHub 宣布 Slack 与 Teams 中的 @GitHub 正式可用，可在对话中调查 bug、创建 issue、实现改动并发起 pull request；Teams 还可通过 Canvas 一起查看计划、代码改动和预览。",
            "howTo": "在 Slack 或 Teams 中启用 GitHub 应用后，在讨论里提及 @GitHub，描述一个具体的课程项目问题；收到 issue、代码或 PR 后，与组员在原对话中检查并反馈。",
            "impact": "小组可以把讨论中的待办转成可追踪的 issue 或 PR，并在 Teams Canvas 中共同审阅方案；它能辅助协作，不替代同伴审查。",
            "free": "公告确认功能已正式开放，但没有说明所需账号计划、地区、免费额度或调用配额；相关限制官方未说明。",
            "category": "编程助手 / 团队协作",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-06",
              "url": "https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Student Developer Pack：验证学生身份可领开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro 账户，并列出每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储；Pack 还汇集合作伙伴权益。",
            "howTo": "打开 GitHub Education 学生页面并申请验证，按页面要求提交学校邮箱和/或带日期的在读证明；通过后查看 Student Developer Pack 中当前可领取的合作权益。",
            "impact": "可用私有仓库协作课程代码，在 Codespaces 中开展云端开发，并用 Actions 自动运行项目检查；提交前核对实际剩余额度。",
            "free": "需年满 13 岁并就读于授予学位或文凭的课程；验证材料为学校邮箱和/或官方在读证明。页面列出上述月度额度，但未说明地区范围和申请截止日期；合作权益依各伙伴条款而定。",
            "category": "学生权益 / 开发工具",
            "source": {
              "name": "GitHub Education 官方学生权益页",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Google Colab：免费使用托管 Jupyter 与部分 GPU/TPU 算力",
            "summary": "Google Colab 无需本地安装即可运行 Jupyter 笔记本，官方说明免费方案提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学与教育。",
            "howTo": "登录后打开 Colab，新建或上传 .ipynb 笔记本，在代码单元运行课程示例；需要加速时查看 Runtime 设置中的硬件选项，并保存重要文件到 Drive 或下载笔记本。",
            "impact": "可用来练习 Python 数据分析、运行小型机器学习课程实验，或复现教材代码，而不必先配置本地环境。",
            "free": "官方确认免费使用，但资源不保证且不无限，使用限制会变化；免费托管运行时有活动限制，具体配额、地区和账号申请条件官方未说明。",
            "category": "免费算力 / 学习环境",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Microsoft Phi-4-mini-instruct：MIT 许可的可下载模型权重",
            "summary": "Microsoft 官方模型卡提供 Phi-4-mini-instruct 开放模型，参数量为 3.8B，支持 128K 上下文；同一模型仓库的 LICENSE 文件采用 MIT 许可。它适合本地试验指令跟随、数学和逻辑任务，但模型卡提醒其事实知识受模型规模限制。",
            "howTo": "打开 Hugging Face 模型卡的 Files and versions 下载文件，按 Usage 示例安装 Transformers 并加载 `microsoft/Phi-4-mini-instruct`；用已知答案的课程题测试输出，再与教材或可靠资料核对。",
            "impact": "学生可在课程项目中试验小型指令模型或比较本地推理输出；它可能出错，不应直接充当论文引用或事实来源。",
            "free": "模型仓库提供可下载权重，LICENSE 为 MIT；官方未说明推理所需硬件、运行成本、地区或账号限制，实际算力仍取决于设备和部署方式。",
            "category": "开放模型 / 本地实验",
            "source": {
              "name": "Microsoft 官方 Hugging Face 模型卡与仓库许可",
              "published": "官方未说明",
              "url": "https://huggingface.co/microsoft/Phi-4-mini-instruct"
            }
          },
          {
            "event": "Mistral Vibe Free：网页和移动端的免费个人 AI 助手",
            "summary": "Mistral 官方价格页列出 Free 方案，可在网页和移动端使用，包含有限消息、网页搜索和编码会话，以及基础图像生成与编辑。",
            "howTo": "从 Mistral 价格页进入 Free 方案并打开网页或移动端服务；可粘贴自己的课堂笔记，请它提炼要点或生成复习问题，再逐条对照原文修订。",
            "impact": "适合快速整理自有笔记、拟定复习提纲或尝试基础图像任务；复杂任务和较高使用量可能受到免费方案限制。",
            "free": "官方价格页列出 Free 方案，但仅描述消息、搜索和编码次数有限，未给出具体额度；页面当前显示 France 地区，其他地区是否可用、账号要求及限制重置周期官方未说明。",
            "category": "免费 AI 助手 / 学习整理",
            "source": {
              "name": "Mistral 官方价格页",
              "published": "官方未说明",
              "url": "https://mistral.ai/pricing/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "How climate change transforms the colors of our world",
            "source": "NPR",
            "published": "2026-11-08",
            "url": "https://apps.npr.org/color-climate-change-coral-lakes/",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境 / 气候变化如何重塑自然色彩",
            "summary": "这篇图文报道指出，气候变化正在改变北极地貌、湖泊、动物和珊瑚的颜色；这种变化并非单纯审美现象，也可能反映生态压力。文章先解释黑碳覆盖积雪后吸热、冻土融化推动植被扩张，再以卫星观测和研究说明湖水颜色变化，继而讨论动物伪装、昆虫色彩与珊瑚白化。报道援引研究数据，例如北极部分观测点出现植被变绿、数十万湖泊的绿光波长变化，并通过研究者访谈补充机制和不确定性。结尾回到颜色作为观察环境变化的线索：一些色彩转变伴随物种和栖息地风险，但其原因与后果并非在每个案例中都已厘清。",
            "reason": [
              "主题连接气候变化、生物多样性与环境监测，适合讨论科学证据如何转化为公共议题。",
              "篇章按北极、湖泊、动物和珊瑚分节，以现象、研究数据和专家解释逐层扩展，再回到颜色的象征意义。",
              "适合考查段落主旨、例证功能、因果推断，以及作者如何处理“相关变化”与机制尚不确定的区别。",
              "可学习环境与生态类词汇，如 permafrost、sentinel、pollinator 和 exacerbate。",
              "写作时可借鉴“可观察指标—研究证据—生态后果—不确定性”的论证链，避免把复杂生态变化简化为单一因果。"
            ],
            "vocabulary": [
              {
                "word": "exacerbate",
                "phonetic": "/ɪɡˈzæsərbeɪt/",
                "part": "v.",
                "translation": "加剧；使恶化"
              },
              {
                "word": "swath",
                "phonetic": "/swɑːθ/",
                "part": "n.",
                "translation": "大片区域；带状地带"
              },
              {
                "word": "permafrost",
                "phonetic": "/ˈpɜːrməfrɔːst/",
                "part": "n.",
                "translation": "永久冻土"
              },
              {
                "word": "foothold",
                "phonetic": "/ˈfʊthoʊld/",
                "part": "n.",
                "translation": "立足点；稳固位置"
              },
              {
                "word": "sentinel",
                "phonetic": "/ˈsentɪnəl/",
                "part": "n.",
                "translation": "哨兵；预警指标"
              },
              {
                "word": "biogeochemistry",
                "phonetic": "/ˌbaɪoʊˌdʒiːoʊˈkemɪstri/",
                "part": "n.",
                "translation": "生物地球化学"
              },
              {
                "word": "disrupt",
                "phonetic": "/dɪsˈrʌpt/",
                "part": "v.",
                "translation": "扰乱；破坏"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbəl/",
                "part": "adj.",
                "translation": "易受伤害的；脆弱的"
              },
              {
                "word": "pollinator",
                "phonetic": "/ˈpɑːləneɪtər/",
                "part": "n.",
                "translation": "传粉者"
              },
              {
                "word": "fleeting",
                "phonetic": "/ˈfliːtɪŋ/",
                "part": "adj.",
                "translation": "短暂的；转瞬即逝的"
              }
            ],
            "sentences": [
              {
                "original": "This change of color isn’t just aesthetic.",
                "analysis": [
                  "主干是 This change of color is aesthetic，句中 isn’t 对表语作否定。",
                  "This 指回前文珊瑚颜色变淡的现象，连接上一句的具体例子。",
                  "not just 表示“并非仅仅”，暗示颜色变化还会带来生态影响。",
                  "可迁移结构 not just A：先否定狭义理解，再引出更重要的层面。"
                ],
                "translation": "这种颜色变化并不只是审美层面的事。"
              },
              {
                "original": "Lakes react quickly to changes in the environment, so measuring lake color through satellite monitoring can help quantify those changes.",
                "analysis": [
                  "前半句主干是 Lakes react，quickly 说明湖泊对环境变化反应迅速。",
                  "so 引出由前一事实支持的推论：测量湖色有助于量化变化。",
                  "measuring lake color 是后半句的动名词短语主语，谓语为 can help quantify。",
                  "through satellite monitoring 表示测量手段；those changes 回指前文环境变化。"
                ],
                "translation": "湖泊会迅速响应环境变化，因此通过卫星监测测量湖泊颜色有助于量化这些变化。"
              },
              {
                "original": "The darker a lake is, the longer it stays warm after the summer.",
                "analysis": [
                  "句子采用 the + 比较级..., the + 比较级... 结构，表达两项程度同步变化。",
                  "第一分句以 a lake 为主语，darker 是表语，is 为系动词。",
                  "第二分句主干是 it stays warm，it 指代 lake，longer 修饰持续时间。",
                  "after the summer 是时间状语；此处比较结构呈现湖色变暗与保温时间延长的联系。"
                ],
                "translation": "湖泊颜色越暗，夏季过后保持温暖的时间就越长。"
              }
            ]
          },
          {
            "title": "Society needs to act to help white working-class pupils, inquiry says",
            "source": "BBC",
            "published": "2026-11-09",
            "url": "https://www.bbc.co.uk/news/articles/cmwyqql26xe8o",
            "readingTime": "约 4 分钟（估算）",
            "topic": "教育与社会 / 阶层差异和学习机会",
            "summary": "报道介绍一项关于英格兰白人工人阶级学生教育结果的独立调查进入新阶段。调查上一份报告认为教育体系未能充分服务相关学生；新阶段将关注幼儿教育及 14 至 19 岁青少年的学习与就业路径，并为政府、学校和社区组织提出实际建议。报道交代了调查证据来源：研究者访问数千名年轻人及其家长、数百名教师，并分析 125 万名领取免费校餐的白人英国学生相关数据。调查也承认，这一数据口径没有涵盖收入较低但未领取免费校餐的家庭，因此所呈现的不利状况可能被低估。文章以教育部门支持调查、以及建立更清晰升学和就业路径的计划收束。",
            "reason": [
              "主题涉及教育公平、贫困与社会流动，符合研究生英语阅读常见的公共政策议题。",
              "结构从调查提出的问题，转向既有报告和证据来源，再说明新阶段的年龄范围与政策建议。",
              "适合考查调查对象、数据口径、代词指代，以及作者如何用具体证据说明政策问题。",
              "可积累 inquiry、barrier、eligible、pathway 和 substantially 等教育与社会政策词汇。",
              "写作可借鉴其“结论—样本—局限—行动方案”结构，并注意区分调查方观点与已经实施的政策。"
            ],
            "vocabulary": [
              {
                "word": "co-chair",
                "phonetic": "/ˌkoʊ ˈtʃer/",
                "part": "n.",
                "translation": "联合主席"
              },
              {
                "word": "once-in-a-generation",
                "phonetic": "/ˌwʌns ɪn ə ˌdʒenəˈreɪʃən/",
                "part": "adj.",
                "translation": "一代人一次的；极为罕见的"
              },
              {
                "word": "inquiry",
                "phonetic": "/ɪnˈkwaɪəri/",
                "part": "n.",
                "translation": "调查；正式审查"
              },
              {
                "word": "barrier",
                "phonetic": "/ˈbæriər/",
                "part": "n.",
                "translation": "障碍；阻碍因素"
              },
              {
                "word": "commission",
                "phonetic": "/kəˈmɪʃən/",
                "part": "v.",
                "translation": "委托（开展调查或研究）"
              },
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合资格的"
              },
              {
                "word": "substantially",
                "phonetic": "/səbˈstænʃəli/",
                "part": "adv.",
                "translation": "大幅度地；实质上"
              },
              {
                "word": "pathway",
                "phonetic": "/ˈpæθweɪ/",
                "part": "n.",
                "translation": "途径；发展路径"
              },
              {
                "word": "transition",
                "phonetic": "/trænˈzɪʃən/",
                "part": "n.",
                "translation": "过渡；转变"
              },
              {
                "word": "interim",
                "phonetic": "/ˈɪntərɪm/",
                "part": "adj.",
                "translation": "临时的；阶段性的"
              }
            ],
            "sentences": [
              {
                "original": "Action from “across society” is needed to help improve the educational outcomes of white working-class children.",
                "analysis": [
                  "主干为 Action is needed，使用被动语态突出“需要采取行动”，而非行动者。",
                  "from “across society” 补充行动应来自哪里，扩大责任主体范围。",
                  "to help improve the educational outcomes... 是目的不定式，说明行动的目标。",
                  "across society 是概括性表达，可用于讨论教育问题的多方责任。"
                ],
                "translation": "需要社会各界采取行动，帮助改善白人工人阶级儿童的教育成果。"
              },
              {
                "original": "It spoke to thousands of young people and their parents, as well as hundreds of teachers.",
                "analysis": [
                  "主干是 It spoke to...，It 指前文的调查。",
                  "to 后并列列出年轻人及其家长，说明调查的访谈对象。",
                  "as well as 再补充教师群体，表示“以及”，但不改变主句结构。",
                  "thousands 和 hundreds 提供样本规模信息，阅读时应区分访谈人数与数据分析人数。"
                ],
                "translation": "调查访问了数千名年轻人及其家长，也访问了数百名教师。"
              },
              {
                "original": "The inquiry found a growing belief among white working-class families that the current education system does not guarantee future success.",
                "analysis": [
                  "主干为 The inquiry found a growing belief，交代调查发现的核心内容。",
                  "among white working-class families 说明这种看法所在的群体。",
                  "that 引导同位语从句，具体说明 belief 的内容。",
                  "does not guarantee 使用否定表达，指“不能保证”，不等于断言学生必然失败。"
                ],
                "translation": "调查发现，白人工人阶级家庭中越来越多人认为，现行教育体系无法保证未来成功。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-08",
      "status": "ready",
      "ai": {
        "intro": "本期关注 GitHub Copilot 代码审查与开发工具更新，以及 Anthropic 对 AI 科学建模的研究；免费资源包括可下载模型、Gemini 学习工具、编程辅助和翻译服务。",
        "updates": [
          {
            "event": "GitHub Copilot 代码审查新增管理与概览信息",
            "summary": "GitHub 为 Copilot 代码审查新增 REST 和 GraphQL 管理设置，提供审查来源归属等信息，并精简概览、集中显示未审查文件及排除原因；用户还可对概览反馈。公告说明这些改进面向指定 Copilot 计划。",
            "howTo": "提交课程项目 PR 后查看 review overview，检查 Files not reviewed 及排除原因；若概览建议不准确或冗长，可点踩后选择 Add a reason。仓库管理员可按官方文档配置 REST 或 GraphQL 设置。",
            "impact": "团队作业中可更清楚地核对自动审查意见及其来源，减少把模型建议直接当成正确结论的风险；代码仍应通过测试并由组员复核。",
            "free": "公告列出 Copilot Pro、Pro+、Max、Business 和 Enterprise 计划，未列 Free 计划，不能据此认定免费层可用。地区、独立调用额度及具体开放时间官方未说明。",
            "category": "编程助手 / 代码审查",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-06",
              "url": "https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates/"
            }
          },
          {
            "event": "GitHub Copilot CLI 与 VS Code 开发体验更新",
            "summary": "GitHub 11 月 6 日周报介绍 Copilot CLI 的 /settings 统一设置界面，以及 VS Code 1.145 的实验性聊天视图、远程浏览器预览与 canvas、按 cron 表达式安排本地自动化等更新。",
            "howTo": "在 Copilot CLI 输入 `/settings` 查看统一设置；使用 VS Code 1.145 的用户可阅读周报中对应功能说明，并按需启用远程浏览器支持、canvas 或本地定时自动化。先用无敏感内容的课程小项目试运行，再检查生成的任务和结果。",
            "impact": "学生可用定时任务重复执行低风险的资料整理或项目检查，也可在浏览器预览课堂演示；实验性功能可能变化，重要作业不应依赖未经检查的自动操作。",
            "free": "该周报未说明这些 CLI/VS Code 更新的具体价格、账户计划、地区或配额；远程预览及 canvas 等相关体验标注为预览功能，实际可用性以产品内显示为准。",
            "category": "编程助手 / CLI 与编辑器",
            "source": {
              "name": "GitHub Copilot 官方周报",
              "published": "2026-11-06",
              "url": "https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2/"
            }
          },
          {
            "event": "Anthropic 发布 AI 科学建模研究文章",
            "summary": "Anthropic 研究团队以 Hodgkin–Huxley 神经模型为例，梳理科学建模的三个步骤：构建模型、用测量数据约束参数、解释模型所揭示的机制。文章强调拟合数据并不等于揭示真实机制；它是研究文章，不是新发布的 Claude 功能。",
            "howTo": "阅读文章并把其建模思路用于课程数据：先写出问题和假设，再标注模型变量与假设，最后比较预测和观测数据，并记录其他可能解释；不要把拟合结果直接写成因果证明。",
            "impact": "做论文阅读、实验报告或社会调查时，学生可用这套区分检查“模型解释了数据”与“模型证明了机制”之间的差别，并在结论中交代不确定性。",
            "free": "Anthropic 官网可直接阅读这篇研究文章；它不代表 Claude 新功能。文章未说明 Claude 服务的价格、地区、账号要求或使用配额。",
            "category": "AI 研究 / 科学建模",
            "source": {
              "name": "Anthropic 官方研究文章",
              "published": "2026-11-06",
              "url": "https://www.anthropic.com/research/teaching-ai-to-build-scientific-models"
            }
          }
        ],
        "deals": [
          {
            "event": "Qwen3 Embedding 0.6B：可下载的多语言文本向量模型",
            "summary": "Qwen 官方模型卡提供 Qwen3 Embedding 0.6B 权重，定位于文本嵌入任务，支持多语言检索、分类和聚类等用途，模型采用 Apache-2.0 许可证。它是嵌入模型，不是对话模型。",
            "howTo": "打开官方 Hugging Face 模型卡，按其使用说明安装 Sentence Transformers 或 Transformers 并加载 `Qwen/Qwen3-Embedding-0.6B`；用课程笔记和一个查询句生成向量，再比较相似度以寻找相关段落。",
            "impact": "适合搭建课程资料的语义检索小实验，或比较中英文笔记的关联；结果是相关性排序，不等于事实核验，也不能直接代替阅读原文。",
            "free": "官方模型卡提供可下载权重，许可证为 Apache-2.0；硬件要求、运行成本、地区和账号限制官方未说明。",
            "category": "开源模型 / 文本嵌入",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
            }
          },
          {
            "event": "DeepSeek-R1-Distill-Qwen-1.5B：MIT 许可开放权重",
            "summary": "DeepSeek 官方模型卡提供 1.5B 参数的 R1 蒸馏模型权重，并以 MIT 许可证发布；模型卡介绍了其推理用途和运行示例，适合学习者自行试用而非视为答案保证。",
            "howTo": "从官方 Hugging Face 模型卡进入 Files and versions 下载权重，并按卡片中的 Transformers 示例配置环境；用教材中的一道数学或逻辑题测试输出，再对照标准解答逐步检查。",
            "impact": "学生可以观察较小型推理模型如何组织解题步骤，比较不同提示下的结果；本地运行所需硬件因环境而异，必须自行评估。",
            "free": "模型权重可按模型卡下载，许可证为 MIT；硬件、运行成本、地区和账号要求官方未说明。",
            "category": "开源模型 / 推理实验",
            "source": {
              "name": "DeepSeek 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"
            }
          },
          {
            "event": "Gemini API：部分模型提供免费层级",
            "summary": "Google AI Studio 的官方价格表为部分 Gemini 模型列出 Free 层级；可在开发者环境中试做文本生成或学习项目。价格表同时说明免费层内容可能用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio，选择价格表标为 Free 的模型，在提示窗口试写一个不含个人或课程敏感信息的小任务；开发前查看所选模型的速率限制和数据使用说明。",
            "impact": "适合初学者以小规模 API 调用练习提示设计、文本分类或课程原型，不必先承诺付费；不要上传保密研究数据。",
            "free": "官方价格表仅对指定模型列出免费层，速率限制因模型而异；免费层内容可能用于改进 Google 产品。账号资格、地区和个人可保证的具体额度官方未说明，请以实时价格表为准。",
            "category": "免费 API / 模型试用",
            "source": {
              "name": "Google AI for Developers 官方价格表",
              "published": "官方未说明",
              "url": "https://aistudio.google.com/docs/pricing"
            }
          },
          {
            "event": "NotebookLM Standard：免费方案可建笔记本并添加来源",
            "summary": "Google 帮助页列出 NotebookLM Standard 的使用上限：每位用户最多 100 个笔记本，每个笔记本最多 50 个来源，并说明可使用 Gmail 账号注册。",
            "howTo": "用 Gmail 账号打开 NotebookLM，新建笔记本并添加课程讲义或公开文章作为来源；针对来源提问并回到原文核对引用内容。",
            "impact": "适合按课程或论文主题整理阅读材料、生成复习问题；来源数量有上限，且模型回答应与原始资料交叉核对。",
            "free": "官方支持页列出的 Standard 上限为每位用户 100 个笔记本、每个笔记本 50 个来源；可用地区、账号年龄资格以及其他功能的使用额度按官方页面为准，未明确部分官方未说明。",
            "category": "长期免费工具 / 资料阅读",
            "source": {
              "name": "Google NotebookLM 官方帮助页",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出 Copilot Free，包含每月 2,000 次代码补全，以及受限的聊天和 agent 功能。",
            "howTo": "用 GitHub 账号开通 Copilot Free，在支持的编辑器安装官方扩展；先让它解释一段课程代码或补全小函数，再运行测试并检查输出。",
            "impact": "可用于入门编程中的语法提示、代码解释和小型练习，补全结果应由学生理解并测试，而不是直接提交。",
            "free": "官方计划页标价为免费，并列出每月 2,000 次代码补全；聊天和 agent 使用受限。具体地区、账号资格及这些功能的细分配额官方未说明。",
            "category": "长期免费工具 / 编程学习",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "DeepL Free：每月 50,000 字符文本翻译",
            "summary": "DeepL 官方方案页列出免费版每月最多翻译 50,000 个字符，并支持单个文件翻译，文件大小上限为 5 MB。",
            "howTo": "在 DeepL 网页版粘贴一段英文摘要或上传符合大小限制的文件进行翻译；把译文与原文逐句比对，重点核对术语、否定关系和长句逻辑。",
            "impact": "可辅助理解英文论文和练习双语表达；机器译文适合作为理解起点，不应未经核对地引用或替代自己的翻译。",
            "free": "官方方案页列出的额度为每月 50,000 字符，单个文件翻译上限 5 MB；地区、账号资格及不同文件类型的细节官方未说明。",
            "category": "长期免费工具 / 翻译学习",
            "source": {
              "name": "DeepL 官方方案页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "This Wooden Wardrobe in Pompeii Remained Sealed for Nearly 2,000 Years. Archaeologists Just Opened It for the First Time",
            "source": "Smithsonian Magazine",
            "published": "2026-11-06",
            "url": "https://www.smithsonianmag.com/smart-news/this-wooden-wardrobe-in-pompeii-remained-sealed-for-nearly-2000-years-archaeologists-just-opened-it-for-the-first-time-180989831/",
            "readingTime": "约 7 分钟（估算）",
            "topic": "文化与考古 / 庞贝日常生活",
            "summary": "文章以庞贝一只近两千年未开启的木柜为线索，介绍考古人员在住宅中发现的灯具、梳妆用品、玻璃器皿、钱币和护身符项链等物品，并借这些生活遗物讨论居民的日常习惯与身份线索。作者随后说明，考古学家根据贵重物品推测屋主可能在火山喷发时匆忙离开，但目前仍无法确定他们的命运；文章以这种证据与未知并存的状态收束，提醒读者遗物能提供线索，却不能补齐全部历史。",
            "reason": [
              "考古与日常生活兼具文化主题，适合练习从具体遗物概括社会生活。",
              "文章按发现现场、器物细节、研究者推断到未知结论展开，结构清楚且有证据层级。",
              "可练习细节定位、推断依据判断，以及区分事实与作者保留意见的题型。",
              "eclectic、trove、utilitarian 等词汇可用于描述多样性、发现物与用途。",
              "写作时可借鉴“观察证据—提出有限推断—承认未知”的审慎论证方式。"
            ],
            "vocabulary": [
              {
                "word": "eclectic",
                "phonetic": "/ɪˈklektɪk/",
                "part": "adj.",
                "translation": "多种来源或风格混合的"
              },
              {
                "word": "trove",
                "phonetic": "/troʊv/",
                "part": "n.",
                "translation": "珍藏；大量有价值的发现物"
              },
              {
                "word": "utilitarian",
                "phonetic": "/ˌjuːtɪlɪˈteriən/",
                "part": "adj.",
                "translation": "实用的；功利性的"
              },
              {
                "word": "cache",
                "phonetic": "/kæʃ/",
                "part": "n.",
                "translation": "藏匿的一批物品"
              },
              {
                "word": "adornment",
                "phonetic": "/əˈdɔːrnmənt/",
                "part": "n.",
                "translation": "装饰物；装饰"
              },
              {
                "word": "suspect",
                "phonetic": "/səˈspekt/",
                "part": "v.",
                "translation": "推测；怀疑"
              },
              {
                "word": "renovation",
                "phonetic": "/ˌrenəˈveɪʃn/",
                "part": "n.",
                "translation": "修缮；翻新"
              },
              {
                "word": "depict",
                "phonetic": "/dɪˈpɪkt/",
                "part": "v.",
                "translation": "描绘；描述"
              },
              {
                "word": "occupant",
                "phonetic": "/ˈɑːkjəpənt/",
                "part": "n.",
                "translation": "居住者；占用者"
              },
              {
                "word": "identifiable",
                "phonetic": "/aɪˌdentəˈfaɪəbəl/",
                "part": "adj.",
                "translation": "可识别的；可确认身份的"
              }
            ],
            "sentences": [
              {
                "original": "Nearly 2,000 years ago, residents of the ancient Roman city of Pompeii stashed an eclectic mix of objects in a wooden wardrobe.",
                "analysis": [
                  "主干是 residents stashed an eclectic mix of objects，交代“居民藏放物品”这一核心事件。",
                  "句首 Nearly 2,000 years ago 是时间状语，限定事件发生年代。",
                  "of the ancient Roman city of Pompeii 修饰 residents，交代居民所属地点。",
                  "in a wooden wardrobe 是地点状语；stashed 比普通的 put 更含有藏放意味。",
                  "eclectic mix of objects 用概括性名词组为后文列举各类器物作铺垫。"
                ],
                "translation": "近两千年前，庞贝古城的居民把一批风格各异的物品藏在一只木柜里。"
              },
              {
                "original": "Based on the number of valuables found in the wardrobe, archaeologists suspect that the house’s owners left in a hurry, perhaps during the eruption of Mount Vesuvius in 79 C.E.",
                "analysis": [
                  "句首 Based on... 是依据状语，说明推断来自柜内贵重物品的数量。",
                  "主句主干为 archaeologists suspect that...，真正的判断是“考古学家推测”。",
                  "that 引导宾语从句，内容是屋主仓促离开；found in the wardrobe 后置修饰 valuables。",
                  "perhaps 表示可能性，作者没有把离开时间写成确定事实。",
                  "句子呈现“证据—推断—保留”的逻辑，写作时可用于审慎表达结论。"
                ],
                "translation": "根据柜内发现的大量贵重物品，考古学家推测房屋主人可能是在仓促中离开的，也许正值公元79年维苏威火山喷发之际。"
              },
              {
                "original": "Much about the building and its onetime occupants remains unknown.",
                "analysis": [
                  "主干是 Much remains unknown，说明仍有大量信息未知。",
                  "Much 是不可数意义的代词，作单数主语，因此谓语使用 remains。",
                  "about the building and its onetime occupants 补充说明未知信息的范围。",
                  "onetime 表示“曾经的”，与 occupants 合用指昔日居住者。",
                  "remains unknown 是简洁的系表结构，可用于概括证据边界。"
                ],
                "translation": "关于这栋建筑及其昔日居住者的许多情况仍不为人知。"
              }
            ]
          },
          {
            "title": "In Alaska’s capital, food comes by water, air or, most often, community sharing",
            "source": "The Guardian",
            "published": "2026-11-06",
            "url": "https://www.theguardian.com/environment/2026/nov/06/alaska-juneau-food-access",
            "readingTime": "约 8 分钟（估算）",
            "topic": "社会与环境 / 食物获取与社区互助",
            "summary": "文章以阿拉斯加州首府朱诺为例，指出常用的食品进口比例难以呈现当地真实供给。作者先介绍当地依赖海运和空运、耕地稀少且生长季短，再分析小规模农业和市场销售难以保障可负担供应；后文转向传统采集分享、社区互助和面向弱势群体的营养项目。文章由此把焦点从进口比例等总量指标转向食物如何被获取、分享和负担，强调多种社区渠道共同支撑食物保障。",
            "reason": [
              "文章把社会公平与环境、地理条件相连，适合练习公共议题类阅读。",
              "文章从常被引用的进口比例与实际共享、采集食物之间的差异切入，再分析地理和市场限制及社区方案。",
              "适合考查转折、原因推断、例证作用和作者如何限定解决方案。",
              "arable、subsistence、provisioning 等词可用于讨论土地、供给和生计。",
              "议论文可借鉴其从总量指标转向分配机制，并用个案补足统计盲点的写法。"
            ],
            "vocabulary": [
              {
                "word": "arable",
                "phonetic": "/ˈærəbəl/",
                "part": "adj.",
                "translation": "可耕种的"
              },
              {
                "word": "vulnerable",
                "phonetic": "/ˈvʌlnərəbəl/",
                "part": "adj.",
                "translation": "易受伤害的；脆弱的"
              },
              {
                "word": "subsistence",
                "phonetic": "/səbˈsɪstəns/",
                "part": "n.",
                "translation": "生计；维持生存的最低生活"
              },
              {
                "word": "transacted",
                "phonetic": "/trænˈzæktɪd/",
                "part": "v.",
                "translation": "办理；进行交易"
              },
              {
                "word": "mutual provisioning",
                "phonetic": "/ˈmjuːtʃuəl prəˈvɪʒənɪŋ/",
                "part": "n. phr.",
                "translation": "相互供给；互助性供给"
              },
              {
                "word": "harvest",
                "phonetic": "/ˈhɑːrvɪst/",
                "part": "v./n.",
                "translation": "收获；收成"
              },
              {
                "word": "cultivates",
                "phonetic": "/ˈkʌltɪveɪts/",
                "part": "v.",
                "translation": "耕种；培育"
              },
              {
                "word": "modest",
                "phonetic": "/ˈmɑːdɪst/",
                "part": "adj.",
                "translation": "不大的；适度的"
              },
              {
                "word": "streamlined",
                "phonetic": "/ˈstriːmlaɪnd/",
                "part": "adj.",
                "translation": "精简的；效率更高的"
              },
              {
                "word": "afford",
                "phonetic": "/əˈfɔːrd/",
                "part": "v.",
                "translation": "负担得起；支付得起"
              }
            ],
            "sentences": [
              {
                "original": "Forty miles north-west of Alaska’s capital, the highway just ends.",
                "analysis": [
                  "主干是 the highway ends，使用极简句式交代道路在此终止。",
                  "Forty miles north-west of Alaska’s capital 是句首地点状语，先定位地理环境。",
                  "just 强调道路“到此为止”的限制，为后文解释偏远社区的交通条件铺垫。",
                  "作者先写空间边界而非抽象统计，形成具体、有画面感的开篇。",
                  "阅读时应区分地点事实与后文关于食物获取的因果分析。"
                ],
                "translation": "在阿拉斯加首府西北方向四十英里处，公路就到头了。"
              },
              {
                "original": "That figure cannot measure how Juneau feeds itself, sharing and harvesting from the land.",
                "analysis": [
                  "主句主干是 That figure cannot measure...，指出某项统计数字存在衡量盲区。",
                  "how Juneau feeds itself 是 measure 的宾语从句，说明未被统计的对象。",
                  "sharing and harvesting from the land 是补充性现在分词结构，举出社区获得食物的方式。",
                  "cannot 与后面的社区实践形成对照，论证市场数据不足以涵盖真实供给。",
                  "句中把统计口径问题与日常互助联系起来，是社会议题文章常见的论证推进。"
                ],
                "translation": "这个数字无法衡量朱诺如何养活自己——包括分享食物以及从土地上收获食物。"
              },
              {
                "original": "Operations like Krapek’s and Orsi’s can’t feed a community on their own.",
                "analysis": [
                  "主干是 Operations can’t feed a community，明确指出单靠这些经营项目无法满足整个社区。",
                  "like Krapek’s and Orsi’s 用两个具体案例说明 operations 所指范围。",
                  "on their own 是限制性状语，强调“单独依靠它们”不够，而非否定其价值。",
                  "情态动词 can’t 表达能力边界，避免把个案写成完整解决方案。",
                  "该句为前文案例加上限定，也为强调多方协作铺路。"
                ],
                "translation": "像 Krapek 和 Orsi 这样的经营项目，单靠自身无法养活整个社区。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-07",
      "status": "ready",
      "ai": {
        "intro": "本期关注 GPT-6 Cyber 的受限防御访问、腾讯 Hy4 多模态能力与 OpenAI Images 2.6；免费资源包括 ChatGPT、Claude、Copilot 及腾讯限时免费工具。",
        "updates": [
          {
            "event": "GPT-6 Cyber 面向受信任的防御安全工作开放",
            "summary": "OpenAI 发布专用于经授权安全工作的 GPT-6 Cyber，面向安全代码审查和安全研究场景，并通过受限访问流程和额外防护强调遵守任务授权范围。",
            "howTo": "普通学生可阅读官方公告与系统卡；实际访问须通过 Daybreak Red 可信访问流程。符合条件的组织需完成身份核验及组织级安全控制，个人不能把它当作公开通用模型试用。",
            "impact": "计算机与网络安全方向的学生可借此了解专业安全模型的发布方式如何把授权、身份验证和组织治理纳入使用条件；日常课程学习不需要调用该受限模型。",
            "free": "访问受 Daybreak Red 限制，并要求身份核验及组织安全控制；个人资格、地区、价格和使用配额官方未说明，不能视为公开免费服务。",
            "category": "受限访问 / 网络安全防御",
            "source": {
              "name": "OpenAI 官方公告",
              "published": "2026-11-05",
              "url": "https://openai.com/index/introducing-gpt-6-cyber/"
            }
          },
          {
            "event": "腾讯 Hy4 新增视觉理解与电脑操作能力",
            "summary": "腾讯于 11 月 4 日发布 Hy4，新增视觉理解和电脑操作能力，并改进指令遵循、长上下文理解及长程任务处理；官方列出的用途包括图表分析、图像处理和通过命令行或图形界面操作软件。",
            "howTo": "打开腾讯 WorkBuddy、CodeBuddy 或 Yuanbao 等官方列出的接入产品，在可用模型中选择 Hy4；可用课程图表测试识图与解释，再对照原图核验数据。",
            "impact": "学生可尝试让模型解释图表、整理多步骤资料或辅助制作演示内容；数字结论、引用和电脑操作结果仍应逐项检查。",
            "free": "腾讯公告称 WorkBuddy 和 CodeBuddy 于 2026-11-04 至 2026-11-15 免费开放；支持地区、账号要求、具体功能范围及配额官方未说明。",
            "category": "多模态助手 / 视觉理解与电脑操作",
            "source": {
              "name": "腾讯官方公告",
              "published": "2026-11-04",
              "url": "https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/"
            }
          },
          {
            "event": "OpenAI Images 2.6 支持 GIF 生成与更快迭代",
            "summary": "OpenAI 发布 Images 2.6，可生成 GIF，并加强连续编辑时的人物、产品和品牌细节一致性；官方称生成速度较此前提升 50%，API 还增加图像标注编辑和 SVG 导出。",
            "howTo": "在 ChatGPT 的图像生成功能中描述主体、动作和循环方式，生成后继续提示修改；在网页、桌面或移动端均可使用。",
            "impact": "学生可为课堂展示制作循环示意图或故事板，并通过多轮编辑调整构图；提交前仍需检查文字、事实和画面细节。",
            "free": "OpenAI 称该功能已在全球 ChatGPT 和 Codex 的所有订阅层级推出；免费版图像生成受限，但具体额度、账号条件及各地区开放时间官方未说明。",
            "category": "图像与动图生成 / ChatGPT Images",
            "source": {
              "name": "OpenAI 官方公告",
              "published": "2026-11-04",
              "url": "https://openai.com/index/introducing-images-2-6/"
            }
          }
        ],
        "deals": [
          {
            "event": "腾讯 WorkBuddy 与 CodeBuddy 限时免费",
            "summary": "腾讯公告称 WorkBuddy 和 CodeBuddy 在 2026 年 11 月 4 日至 15 日免费开放，可体验 Hy4 支持的办公协作和编程辅助能力。",
            "howTo": "在活动期间打开腾讯 WorkBuddy 或 CodeBuddy，按产品页面提示体验；可从课程笔记整理、代码讲解等低风险任务开始。",
            "impact": "适合试做资料归纳、演示文稿准备或代码解释；结果仍需对照课程资料和自行运行验证。",
            "free": "官方公布的免费期为 2026-11-04 至 2026-11-15。具体地区、账号要求、功能范围和使用配额官方未说明。",
            "category": "限时免费 / 学习与办公工具",
            "source": {
              "name": "腾讯官方公告",
              "published": "2026-11-04",
              "url": "https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/"
            }
          },
          {
            "event": "ChatGPT Free：免费文字对话与有限图像功能",
            "summary": "OpenAI 价格页列出 Free 方案，提供受防滥用规则约束的无限文字对话，以及有限的文件上传、图像生成、语音、深度研究和 Codex 使用。",
            "howTo": "打开 chatgpt.com 或官方移动应用，使用 Free 方案提问、练习解释概念或生成复习提纲；上传材料和图像功能有使用限制。",
            "impact": "可用于整理课程问题、拆解概念和构思学习提纲；重要结论应回到教材、讲义或原始网页核对。",
            "free": "官方将 Free 列为免费方案；文字对话标注为无限但受防滥用规则约束，图像、上传、语音、深度研究和 Codex 均有限。其具体额度、地区和账号资格要求官方未说明。",
            "category": "长期免费 AI 服务 / 学习问答",
            "source": {
              "name": "OpenAI ChatGPT 官方价格页",
              "published": "官方未说明",
              "url": "https://chatgpt.com/pricing/"
            }
          },
          {
            "event": "Claude Free：网页、桌面及移动端 AI 助手",
            "summary": "Claude 官方价格页列出免费方案，支持网页、桌面和移动端对话，并包含网页搜索、文件创建、代码运行和 Artifacts 等功能。",
            "howTo": "打开 Claude 网页或官方桌面、移动应用，选择 Free 方案；可用网页搜索整理资料，或上传课程文件后让它协助提问和归纳。",
            "impact": "可作为阅读、资料整理和代码练习的补充入口；使用回答时要检查引用来源和计算结果。",
            "free": "官方列价为每月 0 美元、面向所有人，但每 5 小时及每周均有使用限制，官方未公布具体消息数量；账号和地区资格细则官方未说明。",
            "category": "长期免费 AI 服务 / 阅读与写作",
            "source": {
              "name": "Anthropic Claude 官方价格页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出每月 0 美元的 Free 方案，含每月 2,000 次代码补全、Copilot CLI，以及有限的聊天和 agent 使用，无需信用卡。",
            "howTo": "在 GitHub 选择 Copilot Free，并在支持的编辑器安装 Copilot；可用它解释课程代码或补全小函数，再运行测试并检查改动。",
            "impact": "适合编程课程中的代码解释和小规模补全；聊天及 agent 有限制，生成代码应由学生自行验证。",
            "free": "官方列价每月 0 美元、每月 2,000 次代码补全且无需信用卡；聊天和 agent 的具体额度、地区及账号资格限制官方未说明。",
            "category": "长期免费 AI 服务 / 编程辅助",
            "source": {
              "name": "GitHub Copilot 官方计划与价格页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Across a Fevered Pacific Ocean, Seabirds Are Starving",
            "source": "National Geographic",
            "published": "2026-11-04",
            "url": "https://www.nationalgeographic.com/environment/article/el-nino-murre-sea-bird-deaths-wildlife-rehabilitation-california",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境与生态 / 海洋热浪、厄尔尼诺与海鸟搁浅",
            "summary": "报道从一名母亲把在海滩发现的海鸦送往野生动物救护中心切入，说明加州海洋热浪与厄尔尼诺使饵料鱼潜入更深、更冷的水层，海鸦反复潜水消耗过多能量；换羽期间保温能力下降，又令饥饿和失温风险加重。Pacific Wildlife Care 在 9 月 1 日至 11 月 2 日收治 922 只海鸦，远高于典型年份约 100 只，也超过 2015 年的 556 只。文章随后把加州搁浅事件放进太平洋生态变化及 2015—2016 年大规模死亡的历史背景，同时提醒岸边发现只占实际死亡的一小部分。结尾转向救护中心的喂养、复健与放归，指出救援人员仍在为冬季可能持续的搁浅做准备。",
            "reason": [
              "主题把极端气候、海洋食物网和野生动物保护联系起来，适合环境治理与生态风险类阅读。",
              "文章先用海滩救援的具体场景引入，再解释因果链、对照历史数据，最后转向救护行动和未来风险。",
              "可练习从案例提炼主旨、比较年度统计，并辨析搁浅数量与实际死亡总量之间的差异。",
              "emaciated、forage fish、compound、deficit 等词汇可用于环境与生物多样性主题。",
              "写作可借鉴“个案开篇—机制解释—历史参照—现实应对”的递进结构。"
            ],
            "vocabulary": [
              {
                "word": "emaciated",
                "phonetic": "/ɪˈmeɪsieɪtɪd/",
                "part": "adj.",
                "translation": "极度消瘦的"
              },
              {
                "word": "murre",
                "phonetic": "/ˈmɜːr/",
                "part": "n.",
                "translation": "海鸦"
              },
              {
                "word": "forage fish",
                "phonetic": "/ˈfɒrɪdʒ fɪʃ/",
                "part": "n. phr.",
                "translation": "饵料鱼"
              },
              {
                "word": "plunge",
                "phonetic": "/plʌndʒ/",
                "part": "v.",
                "translation": "骤降；猛扎"
              },
              {
                "word": "compound",
                "phonetic": "/kəmˈpaʊnd/",
                "part": "v.",
                "translation": "加重；使恶化"
              },
              {
                "word": "deficit",
                "phonetic": "/ˈdefɪsɪt/",
                "part": "n.",
                "translation": "不足；缺口"
              },
              {
                "word": "sap",
                "phonetic": "/sæp/",
                "part": "v.",
                "translation": "逐渐削弱"
              },
              {
                "word": "influx",
                "phonetic": "/ˈɪnflʌks/",
                "part": "n.",
                "translation": "大量涌入"
              },
              {
                "word": "mortality",
                "phonetic": "/mɔːˈtæləti/",
                "part": "n.",
                "translation": "死亡；死亡率"
              },
              {
                "word": "converge",
                "phonetic": "/kənˈvɜːdʒ/",
                "part": "v.",
                "translation": "汇聚；同时发生"
              }
            ],
            "sentences": [
              {
                "original": "In typical years without major marine heat waves, PWC admits around 100 murres, a duck-sized seabird commonly found along the West Coast.",
                "analysis": [
                  "主干是 PWC admits around 100 murres，主语为救护中心缩写，谓语 admits 后接数量宾语。",
                  "句首 In typical years without major marine heat waves 是时间状语，限定数据所对应的常态条件。",
                  "a duck-sized seabird 是 murres 的同位说明，后面的 commonly found along the West Coast 为过去分词短语，修饰 seabird。",
                  "around 表示约数，语气不同于精确统计；without 引出的条件也为后文异常年份作对照。",
                  "可借鉴 “In typical years..., ... admits around...” 引入常态基线。"
                ],
                "translation": "在没有重大海洋热浪的典型年份，PWC 会接收约 100 只海鸦；这种海鸟体型约与鸭子相当，常见于美国西海岸。"
              },
              {
                "original": "Between September 1 and November 2 of this year, the center has already received an unprecedented 922 murres.",
                "analysis": [
                  "句首 Between ... and ... 构成时间范围状语，说明统计涵盖的起止日期。",
                  "主句主干为 the center has received 922 murres，使用现在完成时呈现截至当前已累计的结果。",
                  "already 强调截至报道时数量已经达到该水平，unprecedented 修饰 922 murres 并突出其异常性。",
                  "this year 依赖文章发表时间理解，阅读时应结合上下文而不能脱离日期。",
                  "可借鉴 “Between A and B, ... has already received...” 报告一段时间内的累计数据。"
                ],
                "translation": "从当年 9 月 1 日到 11 月 2 日，该中心已经接收了创纪录的 922 只海鸦。"
              },
              {
                "original": "With ocean temperatures showing little sign of immediate relief, incoming El Niño storms threaten to drive even more exhausted murres onto the sand.",
                "analysis": [
                  "主句主干是 incoming El Niño storms threaten to drive murres onto the sand，主语为即将到来的厄尔尼诺风暴。",
                  "句首 With ocean temperatures showing... 是 with 复合结构，ocean temperatures 为逻辑主语，showing 是现在分词。",
                  "little sign of immediate relief 描写海温短期内缺少缓解迹象，为主句提供背景条件。",
                  "threaten to do 表示可能造成不利结果，而不是断言结果必然发生；even more 强调数量增加。",
                  "可借鉴 “With..., ... threaten to...” 将背景变化与潜在风险连接起来。"
                ],
                "translation": "海水温度短期内几乎没有缓解迹象，接踵而来的厄尔尼诺风暴可能会把更多筋疲力尽的海鸦推上沙滩。"
              }
            ]
          },
          {
            "title": "How to ‘fall back’ this weekend without losing your mind",
            "source": "Scientific American",
            "published": "2026-10-31",
            "url": "https://www.scientificamerican.com/article/how-to-fall-back-this-weekend-without-losing-your-mind/",
            "readingTime": "3 分钟",
            "topic": "健康与生活 / 时钟调整、昼夜节律与睡眠",
            "summary": "文章以美国周末调回标准时间为引子，说明回拨会带来较早的日出、较暗的傍晚和额外一小时睡眠。随后对比秋季回拨与春季前拨对健康的影响：研究者在春季调整后观察到更多睡眠损失和心脏病发作，而秋季相关风险较低；一些研究提示两次调整前后卒中风险可能上升，但春季死亡风险较高。作者进一步解释晨间光照有助于身体昼夜节律与外界同步，同时承认标准时间会缩短户外活动时间，黄昏通勤也可能增加碰撞风险。文章最后给出专家建议，包括避免缺觉、增加晨间光照、在天暗时保持通勤警觉并建立规律作息，并介绍医学组织支持永久标准时间的立场。",
            "reason": [
              "文章以健康和日常作息为主题，兼顾公共政策与个人生活，适合健康议题阅读。",
              "结构从时间调整的事实切入，比较两种切换的风险，再解释生理机制、讨论代价并给出建议。",
              "可练习辨析研究证据的限定语，比较春秋两种情况，并归纳作者提出的应对措施。",
              "circadian rhythm、disruption、complication 等表达可用于健康与生活方式类话题。",
              "写作可借鉴“说明利弊—引入专家观点—给出可执行建议”的实用论证结构。"
            ],
            "vocabulary": [
              {
                "word": "standard time",
                "phonetic": "/ˈstændəd taɪm/",
                "part": "n. phr.",
                "translation": "标准时间"
              },
              {
                "word": "circadian rhythm",
                "phonetic": "/sɜːrˈkeɪdiən ˈrɪðəm/",
                "part": "n. phr.",
                "translation": "昼夜节律"
              },
              {
                "word": "align",
                "phonetic": "/əˈlaɪn/",
                "part": "v.",
                "translation": "使一致；使协调"
              },
              {
                "word": "disruption",
                "phonetic": "/dɪsˈrʌpʃən/",
                "part": "n.",
                "translation": "扰乱；中断"
              },
              {
                "word": "complication",
                "phonetic": "/ˌkɒmplɪˈkeɪʃən/",
                "part": "n.",
                "translation": "并发症；复杂问题"
              },
              {
                "word": "stroke",
                "phonetic": "/strəʊk/",
                "part": "n.",
                "translation": "中风"
              },
              {
                "word": "commute",
                "phonetic": "/kəˈmjuːt/",
                "part": "n./v.",
                "translation": "通勤；上下班往返"
              },
              {
                "word": "sleep-deprived",
                "phonetic": "/ˌsliːp dɪˈpraɪvd/",
                "part": "adj.",
                "translation": "睡眠不足的"
              },
              {
                "word": "transition",
                "phonetic": "/trænˈzɪʃən/",
                "part": "n.",
                "translation": "转变；过渡"
              },
              {
                "word": "relish",
                "phonetic": "/ˈrelɪʃ/",
                "part": "v.",
                "translation": "享受；欣然接受"
              }
            ],
            "sentences": [
              {
                "original": "At 2 A.M. on Sunday, most of the U.S. will set the clocks back by an hour.",
                "analysis": [
                  "句首 At 2 A.M. on Sunday 是具体时间状语，交代动作发生的时点。",
                  "主干为 most of the U.S. will set the clocks back，主语指美国大多数地区，谓语使用一般将来时。",
                  "the clocks 是 set 的宾语，back 是方向副词；by an hour 表示回拨的幅度。",
                  "句子用简洁的时间与动作信息交代新闻背景，为后文讨论健康影响铺垫。",
                  "可借鉴 “will set ... back by...” 描述制度或时间调整的方向和幅度。"
                ],
                "translation": "周日凌晨 2 点，美国大部分地区将把时钟拨回一小时。"
              },
              {
                "original": "Research suggests standard time better aligns with our circadian rhythm, or internal clock, and reduces the risk of health complications.",
                "analysis": [
                  "主句核心是 Research suggests...，suggests 后省略 that，引出研究所支持的观点。",
                  "从句主语是 standard time，谓语由 aligns 和 reduces 并列构成，共用同一主语。",
                  "better 修饰 aligns；or internal clock 是对 circadian rhythm 的补充解释。",
                  "reduces 的宾语为 the risk，of health complications 后置说明风险内容。",
                  "可借鉴 “Research suggests ... and reduces the risk of...” 概括研究结论及其影响。"
                ],
                "translation": "研究表明，标准时间与我们的昼夜节律（即生物钟）更加协调，并能降低健康并发问题的风险。"
              },
              {
                "original": "There are certain steps you can take to ensure a more smooth transition, experts say.",
                "analysis": [
                  "There are 是存在句型，真正的名词中心为 certain steps。",
                  "you can take 是省略关系代词的定语从句，修饰 steps；take 后省略了作宾语的关系代词。",
                  "to ensure a more smooth transition 是目的不定式，说明采取这些步骤的目标。",
                  "experts say 是插入式消息来源，提示建议来自专家而非作者个人断言。",
                  "可借鉴 “There are steps you can take to...” 引出可行的解决办法。"
                ],
                "translation": "专家表示，你可以采取一些措施，让过渡更加顺利。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-06",
      "status": "ready",
      "ai": {
        "intro": "本期更新 Gemini Omni 1.2 Flash、Google Vids 免费视频额度和 Gemini Canvas 草图转应用；资源包括免费 API、开放模型和学习工具。",
        "updates": [
          {
            "event": "Gemini Omni 1.2 Flash 支持 15 秒视频与对话式编辑",
            "summary": "Google 发布 Gemini Omni 1.2 Flash，原生生成和编辑最长 15 秒视频，支持多轮对话修改，并提升参考素材的一致性。官方 API 720p 价格为每秒 0.07 美元，较 Omni 1.1 降低 30%。",
            "howTo": "在 Google AI Studio 选择 gemini-omni-1.2-flash，输入场景描述并设定 3 至 15 秒；生成后用后续提示调整片段，也可上传参考图引导角色或场景。",
            "impact": "可为课程展示、实验说明或社团活动制作短片草稿，并逐轮调整背景或细节；涉及事实的画面和旁白仍需核对。",
            "free": "Gemini API 的 720p 视频按每秒 0.07 美元计价，免费 API 配额官方未说明。Gemini app 的 15 秒视频正在向 Google AI Ultra 订阅用户推出；各地区上线时间官方未说明。",
            "category": "生成式视频 / Gemini Omni",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-05",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
            }
          },
          {
            "event": "Google Vids 每月免费生成 3 段 15 秒视频",
            "summary": "Google Vids 接入 Omni 1.2 Flash，个人 Google 账号或 Google Workspace 订阅用户每月可免费生成最多 3 段 15 秒视频；官方举例可把参考图转成连贯场景并生成自然旁白。",
            "howTo": "打开 vids.new 并登录 Google 账号或 Workspace；描述课程主题，或上传项目图片作为参考，再生成最长 15 秒的视频并在 Vids 中编辑。",
            "impact": "学生可用有限的免费额度制作演讲开场、课程概念短片或项目宣传草稿；提交前检查旁白、图片来源和生成内容准确性。",
            "free": "官方说明每月最多 3 段、每段 15 秒，可由 Google 账号或 Google Workspace 订阅用户免费使用。支持地区及额度重置的具体时间官方未说明。",
            "category": "免费生成式视频 / Google Vids",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-05",
              "url": "https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/"
            }
          },
          {
            "event": "Gemini Canvas 将草图转换为可预览的应用原型",
            "summary": "Gemini 新增从手绘草图生成应用原型的流程：上传界面草图，选择 Canvas 并要求 Gemini 编写应用代码，然后在预览窗口测试并调整颜色、字体或功能。",
            "howTo": "拍摄应用界面、习惯追踪器或棋盘游戏草图，在 Gemini 上传图片并选择 Canvas；输入“Can you code this app?”，在预览窗口测试后继续要求修改。",
            "impact": "没有完整编程基础的学生也能把课程项目构想变成可交互的原型，便于讨论布局和需求；原型代码仍需测试，不能视为已完成的软件。",
            "free": "Google 公告未说明该功能的价格、账号套餐、地区范围、使用配额或分批开放安排。",
            "category": "原型开发 / Gemini Canvas",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-05",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/turn-drawings-into-apps-gemini/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Vids：每月 3 段免费 AI 视频",
            "summary": "Google Vids 使用 Omni 1.2 Flash；官方说明个人 Google 账号或 Workspace 订阅用户每月可免费生成最多 3 段、每段 15 秒的视频。",
            "howTo": "打开 vids.new，登录 Google 账号或 Workspace，输入主题描述或上传参考图片，生成视频后在 Vids 中继续编辑。",
            "impact": "适合制作课程展示片段、社团活动预告或概念演示；每月额度有限，交付前应核对事实和素材使用权。",
            "free": "每月最多 3 段 15 秒视频，免费；个人 Google 账号或 Google Workspace 订阅均可。支持地区和额度重置具体时间官方未说明。",
            "category": "免费生成式视频 / 学习与展示",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-05",
              "url": "https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/"
            }
          },
          {
            "event": "Gemini Developer API 免费层",
            "summary": "Google 官方定价页列出免费层：部分模型的输入与输出 token 免费，并可通过 Google AI Studio 使用；免费层内容可能用于改进 Google 产品。",
            "howTo": "在 Google AI Studio 创建 API key，先查看定价页确认目标模型当前是否列在 Free 层，再按 Gemini API Quickstart 运行小规模学习项目。",
            "impact": "可练习模型 API 调用、课程文本摘要或小型应用原型，不必先支付免费层模型的 token 费用；不要提交敏感资料。",
            "free": "仅部分模型提供免费输入和输出 token；具体请求额度因模型而异。免费层内容可能用于改进产品；地区、账号要求和资格期限官方未说明。",
            "category": "免费 API / 开发实验",
            "source": {
              "name": "Google AI for Developers 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Qwen3-4B-Instruct-2507：Apache-2.0 开放权重",
            "summary": "Qwen 官方模型卡提供 Qwen3-4B-Instruct-2507 权重下载，模型为 4B 参数、原生支持 262,144 token 上下文，许可标注为 Apache-2.0。",
            "howTo": "按模型卡使用最新 Transformers，加载 Qwen/Qwen3-4B-Instruct-2507；先用短文本测试摘要或问答，并根据本机显存情况缩短上下文。",
            "impact": "有合适设备的学生可在本地实验文本生成或课程资料归纳，并探索离线运行；下载模型不等于免除设备、存储和算力成本。",
            "free": "官方 Hugging Face 模型卡提供公开权重，许可为 Apache-2.0；模型卡未说明下载配额、地区或注册要求。本地运行所需硬件和成本由使用者承担。",
            "category": "开放权重模型 / 本地学习实验",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507"
            }
          },
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 帮助页说明 Gemini Notebook Standard 可用 Gmail 账号免费注册，标准版列出每位用户最多 100 个 notebook、每个 notebook 最多 50 个来源，并提供自定义聊天与分析功能。",
            "howTo": "使用 Gmail 账号登录 Gemini Notebook，新建课程主题 notebook，添加讲义或网页来源，再围绕材料提问并回到原文核对引用。",
            "impact": "适合把分散的阅读资料集中起来复习、比较观点和生成练习问题；来源数量有上限，回答仍需对照原始材料。",
            "free": "标准版可免费注册，需 Gmail 账号；官方列出每用户 100 个 notebook、每个 notebook 50 个来源。浏览器版面向达到当地法定同意年龄且位于支持地区的用户。",
            "category": "长期免费 AI 服务 / 资料阅读",
            "source": {
              "name": "Google Gemini Notebook 官方帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出每月 0 美元的 Free 方案，包含每月 2,000 次代码补全、有限的聊天与 agent 使用，无需信用卡。",
            "howTo": "登录 GitHub 并选择 Copilot Free，在支持的编辑器安装 Copilot；用它解释课程代码或补全小函数，再运行测试并逐行检查改动。",
            "impact": "适合编程课程中的代码解释和小规模补全；聊天与 agent 有限额，生成的代码应由学生自行验证。",
            "free": "每月 0 美元、每月 2,000 次代码补全且无需信用卡；聊天和 agent 使用受限，其具体额度、地区资格和期限官方未说明。",
            "category": "长期免费 AI 服务 / 编程辅助",
            "source": {
              "name": "GitHub Copilot 官方计划与价格页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Mistral Free：网页与移动端 AI 助手",
            "summary": "Mistral 官方价格页列出 Free 方案，可在网页和移动端使用，包含有限消息、网页搜索和 coding sessions，以及基础图像生成与编辑。",
            "howTo": "打开 Mistral 网页或移动端服务，用 Free 方案试做课程主题检索、问题整理或图像草稿，并对照原始网页核实检索结果。",
            "impact": "可作为交叉核对资料的免费入口，也能制作简单视觉草稿；消息、搜索和编码会话均有限制。",
            "free": "官方价格页列有 Free 方案，但未说明具体消息、搜索或编码额度、账号条件、支持地区和期限。",
            "category": "长期免费 AI 服务 / 搜索与创作",
            "source": {
              "name": "Mistral 官方价格页",
              "published": "官方未说明",
              "url": "https://mistral.ai/pricing/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Delhi's toxic winter air is back - is the Indian capital prepared for pollution?",
            "source": "BBC",
            "published": "2026-11-05",
            "url": "https://www.bbc.co.uk/news/articles/cm78p0n09q3xo",
            "readingTime": "约 7 分钟（估算）",
            "topic": "环境与社会 / 德里冬季污染、政策执行与区域协作",
            "summary": "报道从德里居民每年备战冬季雾霾切入，解释低温、弱风会使污染物滞留，农作物残留焚烧、车辆、工厂和扬尘又叠加排放。文章介绍当地政府在污染高峰前推出的冬季行动计划，包括限制高排放车辆、暂停部分扬尘工程、鼓励远程办公和加强公共交通；专家肯定提前规划，但强调措施成效取决于执行，还需要为电力、工业和交通等部门设定减排目标。由于污染会从邻近地区飘入德里，单靠城市自身政策有限。结尾回到居民生活与健康代价，指出污染每年反复，需持续、跨区域治理。",
            "reason": [
              "主题把城市环境、公共健康和治理责任联系起来，适合讨论空气污染与公共政策的考研英语议题。",
              "文章从居民经验解释污染成因，再介绍政府计划、引入专家对执行的质疑，最后扩大到跨区域治理和健康影响。",
              "可练习归纳多重污染源、区分政策出台与政策落实，并概括地方行动的边界。",
              "disperse、emissions、enforcement 等词可用于环境治理和政策执行类写作。",
              "写作可借鉴“呈现行动—承认进展—指出执行条件—提出协作方案”的平衡论证结构。"
            ],
            "vocabulary": [
              {
                "word": "trap",
                "phonetic": "/træp/",
                "part": "v.",
                "translation": "使滞留；困住"
              },
              {
                "word": "disperse",
                "phonetic": "/dɪˈspɜːs/",
                "part": "v.",
                "translation": "驱散；散开"
              },
              {
                "word": "residue",
                "phonetic": "/ˈrezɪdjuː/",
                "part": "n.",
                "translation": "残留物"
              },
              {
                "word": "emissions",
                "phonetic": "/ɪˈmɪʃənz/",
                "part": "n. pl.",
                "translation": "排放物；排放量"
              },
              {
                "word": "enforcement",
                "phonetic": "/ɪnˈfɔːsmənt/",
                "part": "n.",
                "translation": "执行；实施"
              },
              {
                "word": "collectively",
                "phonetic": "/kəˈlektɪvli/",
                "part": "adv.",
                "translation": "共同地；整体上"
              },
              {
                "word": "restrict",
                "phonetic": "/rɪˈstrɪkt/",
                "part": "v.",
                "translation": "限制"
              },
              {
                "word": "breathlessness",
                "phonetic": "/ˈbreθləsnəs/",
                "part": "n.",
                "translation": "气促；呼吸困难"
              },
              {
                "word": "commuter",
                "phonetic": "/kəˈmjuːtə(r)/",
                "part": "n.",
                "translation": "通勤者"
              }
            ],
            "sentences": [
              {
                "original": "Falling temperatures and slower winds trap pollutants close to the ground instead of allowing them to disperse.",
                "analysis": [
                  "主干是 temperatures and winds trap pollutants，两个并列主语共同搭配谓语 trap。",
                  "Falling 和 slower 分别修饰 temperatures 与 winds，交代导致污染滞留的气象条件。",
                  "close to the ground 是地点补足语，说明污染物被困的位置。",
                  "instead of allowing them to disperse 表示结果与预期相反；them 指 pollutants，to disperse 是 allow 的宾语补足结构。",
                  "可借鉴 A trap B ... instead of allowing ... 表达某种条件如何阻碍预期变化。"
                ],
                "translation": "气温下降、风力减弱会使污染物滞留在近地面，而不是让它们扩散。"
              },
              {
                "original": "This means that measures taken by Delhi can achieve only so much.",
                "analysis": [
                  "主句核心是 This means that ...，that 引导 means 的宾语从句。",
                  "从句主干为 measures can achieve so much，taken by Delhi 是过去分词短语，修饰 measures。",
                  "only so much 表示能力有限，语气上承认德里措施有作用，同时限定其效果。",
                  "This 回指前文污染会从邻近地区流入德里的事实，构成原因到政策边界的推论。",
                  "可借鉴 This means that ... can achieve only so much 概括单一主体的治理上限。"
                ],
                "translation": "这意味着德里采取的措施所能达到的效果终究有限。"
              },
              {
                "original": "The arrival of another winter fills her family with dread, but unlike many others, they are not planning to move out of Delhi.",
                "analysis": [
                  "but 连接两个分句：冬季到来令她的家人恐惧；他们却没有计划搬离德里。",
                  "第一个分句主干是 The arrival fills her family with dread，of another winter 修饰 arrival。",
                  "unlike many others 是比较状语，省略了与他们不同的其他居民。",
                  "第二个分句的 they 指 her family，plan to move out of Delhi 中不定式作 plan 的补足语。",
                  "可借鉴 A, but unlike ..., B 表达相同处境下不同群体的选择差异。"
                ],
                "translation": "又一个冬天的到来让她一家心生恐惧，但与许多人不同，他们并不打算搬离德里。"
              }
            ]
          },
          {
            "title": "First-time homebuyers remain scarce, but a record share of them pay all cash",
            "source": "NPR",
            "published": "2026-11-05",
            "url": "https://www.npr.org/2026/11/05/nx-s1-6022491/real-estate-all-cash-offer",
            "readingTime": "约 6 分钟（估算）",
            "topic": "经济与社会 / 首次购房、代际财富与住房可负担性",
            "summary": "NPR 根据美国全国房地产经纪人协会的新报告指出，首次购房者仅占买家的 22%，接近历史低位；但在成功购房者中，完全以现金支付的比例达到 10%，为该项数据自 2003 年开始收集以来的最高值。首次购房者中位年龄升至 40 岁，现金购房者更达到 54 岁；报道将现金交易增加与遗产、家庭赠与和出售继承房产所得联系起来，也提到高房贷利率让现金出价更具吸引力。随后以一对背负债务、选择继续租房的年轻买家作对照，呈现房价和首付压力如何扩大住房机会差距。文章最后指出，代际财富转移可能让已有家庭资产支持的人更易入市，而独立储蓄者更可能被挤出市场。",
            "reason": [
              "文章讨论住房可负担性、财富传承和代际不平等，适合经济与社会公平类考题。",
              "先用行业报告和比例概述趋势，再解释继承与利率等原因，继而用年轻租户案例呈现另一面，最后归纳分化。",
              "可练习概括统计数据、辨析相关因素，并比较现金购房者与依靠储蓄者的处境。",
              "inheritance、down payment、equity 等词汇适用于住房、家庭财富和经济差距主题。",
              "写作可借鉴“数据呈现趋势—解释机制—个案对照—总结分配影响”的论证路径。"
            ],
            "vocabulary": [
              {
                "word": "scarce",
                "phonetic": "/skeəs/",
                "part": "adj.",
                "translation": "稀少的；不足的"
              },
              {
                "word": "sideline",
                "phonetic": "/ˈsaɪdlaɪn/",
                "part": "v.",
                "translation": "使靠边；使无法参与"
              },
              {
                "word": "inheritance",
                "phonetic": "/ɪnˈherɪtəns/",
                "part": "n.",
                "translation": "遗产；继承物"
              },
              {
                "word": "proceeds",
                "phonetic": "/ˈprəʊsiːdz/",
                "part": "n. pl.",
                "translation": "收益；所得款项"
              },
              {
                "word": "median",
                "phonetic": "/ˈmiːdiən/",
                "part": "adj./n.",
                "translation": "中位数的；中位数"
              },
              {
                "word": "down payment",
                "phonetic": "/ˌdaʊn ˈpeɪmənt/",
                "part": "n. phr.",
                "translation": "首付款"
              },
              {
                "word": "mortgage",
                "phonetic": "/ˈmɔːɡɪdʒ/",
                "part": "n.",
                "translation": "住房抵押贷款"
              },
              {
                "word": "equity",
                "phonetic": "/ˈekwəti/",
                "part": "n.",
                "translation": "房屋净值；资产净值"
              },
              {
                "word": "refinance",
                "phonetic": "/ˌriːfaɪˈnæns/",
                "part": "v.",
                "translation": "重新融资；再贷款"
              },
              {
                "word": "burdened",
                "phonetic": "/ˈbɜːdənd/",
                "part": "adj.",
                "translation": "负担沉重的"
              }
            ],
            "sentences": [
              {
                "original": "The share of first-time homebuyers remains at a near-record low of 22% as a housing shortage and high prices sideline many.",
                "analysis": [
                  "主句主干是 The share remains at a low，主语中心词 share，谓语 remains。",
                  "of first-time homebuyers 修饰 share；at a near-record low of 22% 给出程度和具体比例。",
                  "as 引导原因状语从句，说明住房短缺和高价格如何使许多人无法进入市场。",
                  "a housing shortage and high prices 是并列主语，sideline many 表示把不少潜在买家排除在外。",
                  "可借鉴 remains at ... as ... 用数据陈述趋势并在同句补充原因。"
                ],
                "translation": "首次购房者所占比例仍处于接近历史低位的 22%，因为住房短缺和高房价让许多人难以入市。"
              },
              {
                "original": "Inheritances are really driving this.",
                "analysis": [
                  "句子主干为 Inheritances are driving this，主语是复数名词 inheritances。",
                  "really 是程度副词，强调遗产在当前趋势中的推动作用。",
                  "this 是指示代词，回指前文首次购房者现金支付比例上升的现象。",
                  "现在进行时 are driving 将遗产描述为正在发挥作用的原因，而非唯一原因。",
                  "可借鉴 X is driving this 简洁指出某项趋势背后的主要推动因素。"
                ],
                "translation": "遗产确实是推动这一现象的重要因素。"
              },
              {
                "original": "The median age of all first-time buyers remains at 40, a record high.",
                "analysis": [
                  "主干是 The median age remains at 40，核心名词为 age，谓语 remains。",
                  "of all first-time buyers 限定年龄统计对象，避免误读为所有购房者。",
                  "at 40 是年龄数值补足语，句末 a record high 是对 40 的同位说明。",
                  "remains 表明这一数值维持在该水平，记录性判断由 a record high 补充。",
                  "可借鉴 remains at ..., a record high 用简洁结构报告统计值及其历史位置。"
                ],
                "translation": "所有首次购房者的年龄中位数仍为 40 岁，创下历史新高。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-05",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Copilot 接入 Xcode 原生编程助手、Google Classroom 的 Guided Learning 全球开放，以及 Google 分享健康 AI 评估框架；免费资源涵盖 Gemini、Notebook、Copilot、DeepL、Mistral 与 Gemma。",
        "updates": [
          {
            "event": "GitHub Copilot 接入 Xcode 内置编程助手",
            "summary": "GitHub Copilot 已在 Xcode 内置 coding assistant 中进入公开预览。学生可在原生 Xcode 工作流中直接使用 Copilot；现有 Copilot for Xcode 扩展仍是另一种独立方式。",
            "howTo": "从 Apple Developer Downloads 安装 Xcode 27.3 beta，在 Xcode > Settings > Intelligence 设置 GitHub Copilot；需运行 macOS Tahoe 26.6 或更新版本。",
            "impact": "修读 Swift 或 iOS 开发课程的学生可在 Xcode 中直接提问、理解项目代码并迭代编程任务，不必切换到另一个编辑器；仍应检查生成代码与测试结果。",
            "free": "GitHub 公告称所有 Copilot 计划均支持此集成；需 Xcode 27.3 beta 和 macOS Tahoe 26.6 或更新版本。公告未说明地区、独立调用额度或额外费用。",
            "category": "GitHub Copilot / Xcode 编程助手",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-11-04",
              "url": "https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/"
            }
          },
          {
            "event": "Google Classroom 全球开放教师布置的 Guided Learning",
            "summary": "Google 将 Guided Learning 能力带入 Google Classroom：教师可布置基于课程材料的逐步辅导活动，学生按步骤理解概念，教师可查看学生互动与进度洞察。",
            "howTo": "教师在 Google Classroom 中基于课程材料布置 Guided Learning 活动；学生打开老师分配的活动，围绕指定课程内容逐步提问和练习。",
            "impact": "学生遇到统计或物理难题时，可以先沿着提示拆解概念、练习解题，而不是只抄最终答案；教师也能据进度洞察发现需要额外帮助的知识点。",
            "free": "Google 称教师主导的 Guided Learning 已在 Google Classroom 全球开放；K-12 学生账号的相关 AI 产品默认关闭，须由学校管理员主动启用。产品价格、个人账号资格及使用配额官方未说明。",
            "category": "Google Classroom / 引导式学习",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-03",
              "url": "https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/"
            }
          },
          {
            "event": "Google 分享健康 AI 安全与实用性评估框架",
            "summary": "Google 发布一套评估健康 AI 使用场景的方法，分别考察准确性、安全性和实用性，并结合封闭式问题基准、自动评分器与专家人工审查；公司称会继续用该框架评估自家模型，并公开方法以促进透明度。",
            "howTo": "打开 Google 公告中的白皮书，按准确性、安全性、实用性三项整理检查表；做健康主题课程作业时，用它逐项核对 AI 回答与可信医疗来源，不把模型回答当作诊断。",
            "impact": "学生在写健康传播或数字医疗作业时，可把“答案是否正确”与“是否安全、是否有用”分开评估，识别单一基准分数无法覆盖的高风险场景。",
            "free": "Google 公告提供公开白皮书链接；这是一套评估方法，不是面向个人的健康 AI 应用。账户、地区、使用配额及实际部署成本官方未说明。",
            "category": "Google AI / 健康与安全评估",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-04",
              "url": "https://blog.google/innovation-and-ai/technology/health/evaluating-health-ai-at-scale/"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini 免费方案：学习、研究与图像功能",
            "summary": "Google 官方订阅页标明 Free 方案为每月 0 美元，需 Google 账号；包括 Gemini app、Flash-Lite、图像生成与编辑、Deep Research、Canvas、Gems 和 Gemini Notebook。",
            "howTo": "用 Google 账号打开 Gemini，上传或整理课程资料并要求生成提纲；可用 Deep Research 收集线索，再回到原始来源核实，或用 Canvas 修改学习计划。",
            "impact": "可用于建立复习提纲、比较资料观点、生成展示稿草图；把 AI 输出当作起点，重要事实逐条核验。",
            "free": "官方标价每月 0 美元，需 Google 账号。免费方案的具体使用次数、使用地区及期限官方未说明。",
            "category": "长期免费 AI 服务 / 学习与研究",
            "source": {
              "name": "Google Gemini 官方订阅页",
              "published": "官方未说明",
              "url": "https://gemini.google/subscriptions/"
            }
          },
          {
            "event": "Gemini Notebook Standard：免费整理课程资料",
            "summary": "Google 帮助页说明，Gemini Notebook Standard 可免费注册；标准版列出每位用户最多 100 个 notebook、每个 notebook 最多 50 个来源，并提供自定义聊天与分析功能。",
            "howTo": "用 Gmail 账号登录 Gemini Notebook，新建一个课程主题 notebook，添加讲义或网页来源，再用自定义聊天围绕这些材料提问并检查回答依据。",
            "impact": "适合把分散的阅读材料集中成复习空间，按来源追问概念、生成学习问题；来源数量有上限，引用仍需回到原文确认。",
            "free": "标准版免费注册需 Gmail 账号；官方列出每用户 100 个 notebook、每个 notebook 50 个来源，限额可能变化。浏览器版仅面向达到当地法定同意年龄且位于支持地区的用户；具体地区见官方支持列表。",
            "category": "长期免费 AI 服务 / 资料阅读与研究",
            "source": {
              "name": "Google Gemini Notebook 官方帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出每月 0 美元的 Free 方案，包含每月 2,000 次代码补全以及有限的聊天和 agent 使用；无需信用卡。",
            "howTo": "登录 GitHub，在支持的编辑器安装 Copilot 后选择 Free 方案；用它解释课程代码或补全小段函数，并在提交前运行测试、逐行审阅改动。",
            "impact": "适合编程入门、课程作业中的代码解释和小规模补全；留意聊天与 agent 有限额，避免把生成代码未经核验直接交付。",
            "free": "官方标价每月 0 美元；每月 2,000 次代码补全，聊天与 agent 使用受限，无需信用卡。地区资格与聊天/agent 的具体额度官方未说明。",
            "category": "长期免费 AI 服务 / 编程辅助",
            "source": {
              "name": "GitHub Copilot 官方计划与价格页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "DeepL 免费版：每月 50,000 字符文本翻译",
            "summary": "DeepL 官方计划对比页列出 Free version 每用户每月 50,000 个文本翻译字符，文件翻译大小上限为 5 MB。",
            "howTo": "打开 DeepL Translator 粘贴待译的论文摘要或课程材料；长文档可按官方支持的文件格式上传，并在提交前核对术语、专名和原文语气。",
            "impact": "可辅助阅读外文论文摘要、课程说明和短文；文本额度按月计算，免费文件翻译有大小限制。",
            "free": "官方免费版每用户每月 50,000 个文本翻译字符，文件翻译上限 5 MB；账户要求、地区资格和续用期限官方未说明。",
            "category": "长期免费工具 / 翻译",
            "source": {
              "name": "DeepL 官方计划对比页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "Google Gemma 3 4B：可下载的多模态开放权重",
            "summary": "Google 的 Gemma 3 模型卡提供 4B 指令微调模型开放权重，支持文本与图像输入、文本输出；模型卡列出 128K 上下文和 140 多种语言，并要求遵循 Gemma Terms of Use。",
            "howTo": "按模型卡安装 Transformers，加载 `google/gemma-3-4b-it` 和对应 processor；先用短文本或公开图片测试问答、摘要，再按 Gemma 使用条款处理输入数据。",
            "impact": "有合适设备的学生可在本地实验多模态问答或资料摘要，减少把课程素材上传到在线聊天服务的需要；结果仍要核验，模型性能取决于设备与设置。",
            "free": "模型卡提供开放权重并链接 Gemma Terms of Use；未说明下载注册要求、地区限制或配额。运行所需设备/算力及其费用取决于使用者环境。",
            "category": "开放权重模型 / 本地多模态学习",
            "source": {
              "name": "Google Gemma 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/google/gemma-3-4b-it"
            }
          },
          {
            "event": "Mistral Free：网页与移动端 AI 学习助手",
            "summary": "Mistral 官方价格页列出 Free 方案，包含有限消息、网页搜索和 coding sessions，以及基础图像生成与编辑。",
            "howTo": "打开 Mistral 的网页或移动端服务，使用 Free 方案尝试检索课程主题、整理问题或制作基础图像草稿；对照原始网页检查搜索答案。",
            "impact": "可作为与其他助手交叉核对资料的免费入口，也能做简单图像草稿；消息、搜索和编码会话均有限制。",
            "free": "官方价格页列有 Free 方案，但未说明具体消息/搜索/编码额度、账号条件、支持地区或到期日。",
            "category": "长期免费 AI 服务 / 搜索与创作",
            "source": {
              "name": "Mistral 官方价格页",
              "published": "官方未说明",
              "url": "https://mistral.ai/pricing/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Are schools a great equalizer? They help kids catch up, but wealthier children still pull ahead",
            "source": "The Conversation",
            "published": "2026-11-04",
            "url": "https://theconversation.com/are-schools-a-great-equalizer-they-help-kids-catch-up-but-wealthier-children-still-pull-ahead-295330",
            "readingTime": "约 6 分钟（估算）",
            "topic": "教育与社会 / 学校如何缩小儿童资源差距",
            "summary": "文章重新审视公共教育是否真能成为“机会均等器”。作者先回顾研究对家庭背景与学校作用的争论，再说明团队如何整合 10 项全国代表性调查、追踪 77 类教育与成长投入。数据显示，学校入学后最贫困与最富裕儿童的总投入差距从 24% 缩至 12%，学校为弱势学生提供更多辅导和特殊教育；但这些资源多用于追赶，而富裕家庭仍能通过经验更丰富的教师、音乐、体育和课外活动帮助孩子继续领先。文章最后指出，公共教育确实缩小了部分投入差距，却不能单靠校内补差消除入学前形成的不平等；政策还须关注住房、托育及有助于学生发展的资源。",
            "reason": [
              "主题关联教育公平、家庭背景与公共服务，适合讨论社会流动和机会平等的考研英语议题。",
              "论证先梳理研究争议，再交代数据口径和发现，继而区分“补差”与“领先资源”，最后提出政策含义，结构清楚。",
              "可练习概括研究结论、解释百分比变化、区分投入差距与成绩差距，以及判断让步转折的论证功能。",
              "equalizer、achievement gap、enrichment 等词可用于教育政策和社会不平等主题写作。",
              "写作可借鉴“承认制度的改善作用—指出作用边界—提出配套支持”的平衡论证方式。"
            ],
            "vocabulary": [
              {
                "word": "equalizer",
                "phonetic": "/ˈiːkwəlaɪzə(r)/",
                "part": "n.",
                "translation": "均衡因素；缩小差距的力量"
              },
              {
                "word": "achievement gap",
                "phonetic": "/əˈtʃiːvmənt ɡæp/",
                "part": "n. phr.",
                "translation": "学业成绩差距"
              },
              {
                "word": "representative",
                "phonetic": "/ˌreprɪˈzentətɪv/",
                "part": "adj.",
                "translation": "有代表性的"
              },
              {
                "word": "investment",
                "phonetic": "/ɪnˈvestmənt/",
                "part": "n.",
                "translation": "投入；投资"
              },
              {
                "word": "transition",
                "phonetic": "/trænˈzɪʃn/",
                "part": "n./v.",
                "translation": "过渡；转变"
              },
              {
                "word": "catch-up",
                "phonetic": "/ˈkætʃ ʌp/",
                "part": "n./adj.",
                "translation": "补差；追赶"
              },
              {
                "word": "enrichment",
                "phonetic": "/ɪnˈrɪtʃmənt/",
                "part": "n.",
                "translation": "拓展性培养；丰富"
              },
              {
                "word": "starker",
                "phonetic": "/ˈstɑːrkər/",
                "part": "adj. 比较级",
                "translation": "更鲜明的；更悬殊的"
              },
              {
                "word": "extracurricular",
                "phonetic": "/ˌekstrəkəˈrɪkjələ(r)/",
                "part": "adj.",
                "translation": "课外的"
              }
            ],
            "sentences": [
              {
                "original": "By some measures, schools really are an equalizer for children from different backgrounds – but this finding has its limits.",
                "analysis": [
                  "主句核心是 schools are an equalizer，说明学校在某些方面具有均衡作用。",
                  "句首 By some measures 限定判断范围，避免把结论说成绝对规律。",
                  "for children from different backgrounds 修饰 equalizer，指出受益对象。",
                  "破折号后的 but this finding has its limits 是转折并列分句，对前述结论作限制。",
                  "可借鉴 By some measures, ... – but ... 表达“承认作用，同时说明边界”。"
                ],
                "translation": "从某些衡量角度看，学校确实能缩小不同背景儿童之间的差距——但这一发现也有局限。"
              },
              {
                "original": "The gap in total investment between the richest and poorest children is cut in half, from 24% to 12%.",
                "analysis": [
                  "主干为 The gap ... is cut，主语是 gap，谓语使用被动语态。",
                  "in total investment 说明差距衡量的是总投入；between ... children 补充比较双方。",
                  "in half 表示缩减幅度，from 24% to 12% 用具体数字说明变化。",
                  "被动表达把焦点放在差距变化上，而非执行缩减的主体。",
                  "可借鉴 is cut in half, from A to B 简洁报告比例变化。"
                ],
                "translation": "最富裕与最贫困儿童之间的总投入差距缩小了一半，从 24% 降至 12%。"
              },
              {
                "original": "But equal spending is not equal opportunity.",
                "analysis": [
                  "句子主干是 equal spending is not equal opportunity，结构简短完整。",
                  "But 承接前文并引出反向限定，提示读者区分“投入相等”和“机会相等”。",
                  "句中没有从句；equal 分别修饰 spending 与 opportunity，形成平行对照。",
                  "is not 否定两者等同，逻辑上指出相同投入未必带来相同结果。",
                  "可借鉴 equal X is not equal Y 作为议论文中澄清概念差异的句式。"
                ],
                "translation": "但投入相等并不意味着机会平等。"
              }
            ]
          },
          {
            "title": "Swapping from dairy to plant-based milk, cheese and yoghurt ‘could lead to micronutrient deficiencies’",
            "source": "The Guardian",
            "published": "2026-11-04",
            "url": "https://www.theguardian.com/science/2026/nov/04/swapping-dairy-milk-cheese-yoghurt-plant-based-vegan-alternatives-deficiencies-micronutrients-iodine",
            "readingTime": "约 5 分钟（估算）",
            "topic": "健康与环境 / 植物基替代品的营养强化",
            "summary": "报道介绍一项针对英国市场植物基奶、酸奶和奶酪的研究，提醒以未强化替代品替换乳制品可能降低碘、钙、核黄素和维生素 B12 摄入。研究团队检查了 146 种非乳奶、76 种酸奶和 67 种奶酪，发现添加碘的比例尤其低，并据此模拟不同替代比例下的摄入变化；模拟显示，替换三分之一乳制品会使碘摄入下降，全部改用非乳替代品时，部分青少年可能摄入不足。报道同时引述营养学者和厂商，指出并非每位转食者都会缺乏营养，整体饮食也重要；可行建议是查看标签、选择有碘强化的产品，而不是把群体建模结果等同于个人诊断。",
            "reason": [
              "把饮食选择、公共健康和食品政策连接起来，适合营养、消费决策与健康素养类议题。",
              "文章先提出研究结论，再说明模拟数据和强化比例，随后补充专家与企业观点，最后给出实际选购建议。",
              "可练习区分模型预测与个人结果、识别限定语，并概括研究方法、数据和政策含义。",
              "micronutrient、fortify、prevalence 等词汇可用于讨论营养不足、食品配方和风险。",
              "写作可借鉴先呈现风险，再纳入反方限定，最后给出可执行建议的健康传播结构。"
            ],
            "vocabulary": [
              {
                "word": "substitute",
                "phonetic": "/ˈsʌbstɪtjuːt/",
                "part": "n.",
                "translation": "替代品"
              },
              {
                "word": "micronutrient",
                "phonetic": "/ˌmaɪkrəʊˈnjuːtriənt/",
                "part": "n.",
                "translation": "微量营养素"
              },
              {
                "word": "fortify",
                "phonetic": "/ˈfɔːtɪfaɪ/",
                "part": "v.",
                "translation": "强化（食品）"
              },
              {
                "word": "deficiency",
                "phonetic": "/dɪˈfɪʃnsi/",
                "part": "n.",
                "translation": "缺乏；不足"
              },
              {
                "word": "trace element",
                "phonetic": "/ˈtreɪs ˌelɪmənt/",
                "part": "n. phr.",
                "translation": "微量元素"
              },
              {
                "word": "prevalence",
                "phonetic": "/ˈprevələns/",
                "part": "n.",
                "translation": "患病率；普遍程度"
              },
              {
                "word": "modelling",
                "phonetic": "/ˈmɒdəlɪŋ/",
                "part": "n.",
                "translation": "建模；模型分析"
              },
              {
                "word": "iodine",
                "phonetic": "/ˈaɪədiːn/",
                "part": "n.",
                "translation": "碘"
              },
              {
                "word": "inadequate",
                "phonetic": "/ɪnˈædɪkwət/",
                "part": "adj.",
                "translation": "不足的"
              },
              {
                "word": "fortification",
                "phonetic": "/ˌfɔːtɪfɪˈkeɪʃn/",
                "part": "n.",
                "translation": "营养强化"
              }
            ],
            "sentences": [
              {
                "original": "Some companies already fortify their dairy substitutes.",
                "analysis": [
                  "主干是 Some companies fortify substitutes，主语、谓语和宾语清楚。",
                  "Some 限定公司范围，their dairy 修饰 substitutes，说明产品所属类别。",
                  "already 是时间副词，强调强化措施目前已存在。",
                  "这是简单陈述句，没有从句；语义上为后文提供已有企业做法的例证。",
                  "可借鉴 Some companies already ... 介绍行业中已出现的实践。"
                ],
                "translation": "一些公司已经对其乳制品替代品进行营养强化。"
              },
              {
                "original": "There is no formal requirement for plant-based milk alternatives to be fortified with micronutrients.",
                "analysis": [
                  "句子采用 There is ... 的存在句型，核心信息是 no formal requirement。",
                  "for plant-based milk alternatives 是 requirement 的补充，指出要求适用的对象。",
                  "to be fortified 是被动不定式，表示这些替代品被添加微量营养素。",
                  "with micronutrients 补充 fortify 的内容；句子讨论制度要求，不等于断言所有产品都未强化。",
                  "可借鉴 there is no formal requirement for X to be done 表达监管空缺。"
                ],
                "translation": "目前没有正式规定要求植物基奶类替代品必须强化微量营养素。"
              },
              {
                "original": "The researchers looked at the impact of replacing dairy with plant-based alternatives on the UK market, including 146 non-dairy milks, 76 yoghurts and 67 cheeses.",
                "analysis": [
                  "主句核心是 The researchers looked at the impact，说明研究者考察了影响。",
                  "of replacing dairy with plant-based alternatives 是介词 of 后的动名词短语，具体说明所考察的影响。",
                  "on the UK market 限定研究范围；including 后列出三类样本及数量。",
                  "主句陈述研究动作，句末数据清单补充研究材料，形成“方法—样本”的信息递进。",
                  "可借鉴 look at the impact of doing ... , including ... 交代研究对象与样本。"
                ],
                "translation": "研究者考察了英国市场以植物基替代品替换乳制品的影响，样本包括 146 种非乳奶、76 种酸奶和 67 种奶酪。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-04",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Copilot 的 JetBrains Air 集成、用量 API 的 BYOK 统计和安全扩展预览；免费资源包括 Gemini、Firefly 与两款可本地部署模型。",
        "updates": [
          {
            "event": "GitHub Copilot 接入 JetBrains Air",
            "summary": "GitHub Copilot 现可在 JetBrains Air 的 agent picker 中调用，支持 IDE 内和云端编码任务；用户可跟踪多个 agent session、利用项目上下文与 IDE 工具，并在代码旁审阅改动。",
            "howTo": "在 JetBrains IDE 安装 Air 插件，选择 GitHub Copilot 并连接 GitHub 账号后提交本地任务。运行云端任务则从 Air 浏览器或 IDE 选择 Cloud 环境、仓库和分支，再发送任务描述。",
            "impact": "学生可让 Copilot 并行处理课程项目中的解释、测试或小型修复，并在 IDE 中对照代码审阅结果；云端任务运行在隔离环境中，不会改动本地环境。",
            "free": "需已有 GitHub Copilot 订阅；云端任务还需加入启用 Air Teams 的企业组织并由 Air 管理员开启 Copilot。公告称云端任务使用 Copilot 计划而非 JetBrains AI credits，但未说明地区、独立调用额度或额外价格。",
            "category": "GitHub Copilot / IDE 与云端编码",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-11-03",
              "url": "https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/"
            }
          },
          {
            "event": "Copilot 用量指标 API 新增 BYOK 与企业自定义模型统计",
            "summary": "Copilot usage metrics API 新增本地 BYOK 活动字段及企业自定义模型标记，可在用户级和汇总报告中区分自带密钥、本地模型与 Copilot 托管模型用量；报告提供 1 日和 28 日视图。",
            "howTo": "由有权限的组织或企业管理员调用 Copilot usage metrics API，读取 `totals_by_local_byok` 和 `is_custom_enterprise_model` 等字段，再按用户、客户端或报告周期核对用量；本地 BYOK 统计依赖客户端遥测。",
            "impact": "学生团队若在组织仓库使用自带模型或本地模型，可把这类请求与 Copilot 托管模型分开查看，避免仅凭模型名称误判使用来源或成本。",
            "free": "需企业所有者、企业账单管理员、组织所有者，或获授 `View Copilot Metrics` 权限的自定义角色；组织或企业必须启用 Copilot usage metrics policy。公告未说明 API 的价格、地区或调用额度；遥测关闭时本地 BYOK 统计可能偏低。",
            "category": "GitHub Copilot / 用量分析 API",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-11-04",
              "url": "https://github.blog/changelog/2026-11-04-byok-and-enterprise-custom-models-in-the-copilot-usage-api/"
            }
          },
          {
            "event": "GitHub Copilot app 安全扩展进入公开预览",
            "summary": "安全扩展可在 GitHub Copilot app 中浏览仓库现有 code scanning alerts，并让 Copilot 解释或修复选定问题；用户还可对当前改动运行 `/security-review`，在提交 pull request 前查看发现。",
            "howTo": "在终端运行 `copilot plugin install github-security@awesome-copilot`，或在 Copilot app 的 Customize 中搜索并安装 github-security；打开仓库的 Security canvas 查看告警，或对当前改动运行 `/security-review`。",
            "impact": "学生可在课程仓库中先读懂静态扫描告警，再检查 Copilot 提出的本地修复，并在发起 pull request 前复查代码；应自行审阅改动而不是直接提交。",
            "free": "公开预览适用于 github.com 和启用数据驻留的 GitHub Enterprise Cloud，不支持 GitHub Enterprise Server。任何 Copilot 计划都可安装并对本地改动运行 `/security-review`；Explain、Fix 和 review 会消耗 AI credits，浏览告警不消耗。查看私有仓库告警需要 GitHub Code Security。",
            "category": "GitHub Copilot / 代码安全",
            "source": {
              "name": "GitHub 官方 Changelog",
              "published": "2026-10-28",
              "url": "https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app/"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini 免费版：可使用研究、写作与图像功能",
            "summary": "Google 官方订阅页列出每月 0 美元的 Free 方案，包含 Gemini app、Flash-Lite、图像生成与编辑、Deep Research、Gemini Live、Canvas、Gems 和 Gemini Notebook。",
            "howTo": "使用 Google 账号打开 Gemini app，选择一个课程主题，先让 Gemini Notebook 或 Deep Research 整理公开资料，再核对引用来源；也可用 Canvas 修改学习提纲或生成图像草稿。",
            "impact": "适合把公开课程资料整理成复习提纲、比较不同来源的观点，或为展示稿制作图像草稿；重要事实仍应回到原始来源核实。",
            "free": "官方标价每月 0 美元，需 Google 账号。免费方案的具体使用次数、限额及各功能可用地区官方未说明。",
            "category": "长期免费 AI 服务 / 学习与研究",
            "source": {
              "name": "Google Gemini 官方订阅页",
              "published": "官方未说明",
              "url": "https://gemini.google/subscriptions/"
            }
          },
          {
            "event": "Adobe Firefly 免费计划：生成式点数按月分配",
            "summary": "Adobe 官方 FAQ 说明，免费计划会在首次使用 Firefly 生成功能时分配生成式点数；该批点数一个月后到期，后续月份也在首次使用时重新分配。",
            "howTo": "登录 Adobe Firefly，使用 Text to Image 等功能制作课程海报或插图草稿；在账号菜单查看剩余生成式点数和到期时间，避免把点数额度误当成无限生成。",
            "impact": "可用作课程展示和学习笔记的视觉草稿工具；点数会过期，适合先准备提示词与素材再生成，并逐项检查输出。",
            "free": "官方 FAQ 确认免费计划会分配生成式点数，但未在该页面说明免费额度的具体数量、地区资格或截止日期；首次使用后一个月到期。",
            "category": "长期免费 AI 服务 / 图像生成",
            "source": {
              "name": "Adobe 官方生成式点数 FAQ",
              "published": "官方未说明",
              "url": "https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html"
            }
          },
          {
            "event": "Whisper large-v3-turbo：MIT 许可的语音识别开放权重",
            "summary": "OpenAI 的 Hugging Face 模型卡提供 Whisper large-v3-turbo 权重，标注 MIT 许可，支持自动语音识别与语音翻译；相较 large-v3，它把解码层从 32 层减至 4 层，以更快推理为目标，模型卡同时提示质量略有下降。",
            "howTo": "按模型卡安装 Transformers、Datasets 和 Accelerate，加载 `openai/whisper-large-v3-turbo`，再把本地音频路径传给 ASR pipeline；翻译任务可按示例设置 `task: translate`。",
            "impact": "可将获准处理的课程录音转成文字，或尝试把外语语音转译为英语，再人工校正专有名词和听写错误。",
            "free": "模型权重按 MIT 许可下载；本地运行需自行承担算力和存储。官方模型卡未说明托管推理的免费额度、地区或截止日期。",
            "category": "开放模型权重 / 语音转写与翻译",
            "source": {
              "name": "OpenAI 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/openai/whisper-large-v3-turbo"
            }
          },
          {
            "event": "BGE-M3：MIT 许可的多语言检索模型",
            "summary": "BAAI 的 Hugging Face 模型卡标注 MIT 许可；BGE-M3 支持 100 多种语言，可进行 dense、multi-vector 与 sparse 检索，并能处理最长 8192 tokens 的文本。",
            "howTo": "从模型卡进入官方 FlagEmbedding 仓库，按 Quick Start 加载 `BAAI/bge-m3`，把自己的课程笔记切分后建立检索索引，再用问题检索相关段落并检查原文。",
            "impact": "适合练习构建多语言课程笔记检索原型，或从较长材料中找回相关段落；检索结果是候选内容，仍应核对原文语境。",
            "free": "模型权重采用 MIT 许可，可下载并本地运行；本地设备资源由使用者承担。官方模型卡未说明托管 API 的免费额度、地区或截止日期。",
            "category": "开放模型权重 / 多语言检索",
            "source": {
              "name": "BAAI 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/BAAI/bge-m3"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Scammers using AI-generated images of missing pets to demand reward money",
            "source": "BBC",
            "published": "2026-11-04",
            "url": "https://www.bbc.co.uk/news/articles/cdx8080nq74o",
            "readingTime": "约 5 分钟（估算）",
            "topic": "科技与社会 / AI 图像诈骗、宠物失踪与网络安全",
            "summary": "BBC 以三名宠物主人遭遇的诈骗为例，说明骗子如何用 AI 伪造宠物照片、编造找回宠物的故事，再以礼品卡或转账为由索要报酬，甚至在受害者拒绝后发出威胁。报道穿插受害者经历，展示逼真的图片如何放大失宠者的希望与焦虑；随后引述反诈机构和学者，指出 AI 降低了制作假证据的门槛，也让诈骗者更容易制造紧迫感。文章最后转向实用防范：付款前当面确认宠物、在安全地点核实身份、询问只有真正找到宠物的人才知道的细节，并向相关机构报告。论证由个案、诈骗机制推进到可执行的核验步骤，强调不能让逼真图像取代独立验证。",
            "reason": [
              "文章把生成式 AI 与网络诈骗、情绪操纵和消费者保护结合，适合科技伦理与社会风险类考题。",
              "结构由受害者个案扩展到诈骗手法和专家解释，最后以机构建议收束，便于梳理问题—机制—对策。",
              "可练习识别举例的论证功能、区分受害者陈述与专家观点，并概括文章提出的核验措施。",
              "词汇涉及 prey on、authenticity、fraudster、urgency 等，可用于讨论欺诈、证据可信度和风险感知。",
              "写作可借鉴先呈现具体案例，再解释技术如何放大既有问题，最后提出可操作的防范建议。"
            ],
            "vocabulary": [
              {
                "word": "prey on",
                "phonetic": "/preɪ ɒn/",
                "part": "phr. v.",
                "translation": "利用；欺骗（弱势者）"
              },
              {
                "word": "conjure up",
                "phonetic": "/ˈkʌndʒə(r) ʌp/",
                "part": "phr. v.",
                "translation": "凭空编造；想象出"
              },
              {
                "word": "backstory",
                "phonetic": "/ˈbækˌstɔːri/",
                "part": "n.",
                "translation": "背景故事"
              },
              {
                "word": "fraudster",
                "phonetic": "/ˈfrɔːdstə(r)/",
                "part": "n.",
                "translation": "诈骗者"
              },
              {
                "word": "authenticity",
                "phonetic": "/ˌɔːθenˈtɪsəti/",
                "part": "n.",
                "translation": "真实性；可信性"
              },
              {
                "word": "bombard",
                "phonetic": "/bɒmˈbɑːd/",
                "part": "v.",
                "translation": "连续轰炸；接连施压"
              },
              {
                "word": "foster carer",
                "phonetic": "/ˈfɒstə ˌkeərə(r)/",
                "part": "n.",
                "translation": "寄养照护者"
              },
              {
                "word": "urgency",
                "phonetic": "/ˈɜːdʒənsi/",
                "part": "n.",
                "translation": "紧迫感"
              },
              {
                "word": "cautious",
                "phonetic": "/ˈkɔːʃəs/",
                "part": "adj.",
                "translation": "谨慎的"
              },
              {
                "word": "evidence",
                "phonetic": "/ˈevɪdəns/",
                "part": "n.",
                "translation": "证据；依据"
              }
            ],
            "sentences": [
              {
                "original": "They prey on owners by using AI to fake images of their pets and conjuring up detailed backstories and fake evidence to claim them as found, before bombarding victims with abuse.",
                "analysis": [
                  "主干是 They prey on owners，by 引出诈骗者利用的手段。",
                  "using AI 与 conjuring up 并列，说明伪造图片和编造背景故事两种做法。",
                  "to claim them as found 交代假证据服务的目的，before 引导后续动作发生的时间关系。",
                  "句尾 before bombarding victims with abuse 展示诈骗升级为骚扰的过程。",
                  "可借鉴 by doing ... before doing ... 描写手段、目的与后续结果。"
                ],
                "translation": "他们利用人工智能伪造宠物照片、编造详细背景和假证据，谎称找到了宠物，随后不断辱骂受害者。"
              },
              {
                "original": "Just because it looks genuine, doesn't make it real.",
                "analysis": [
                  "句子由让步性原因状语 Just because it looks genuine 和主句 doesn't make it real 构成。",
                  "第一个 it 指看起来逼真的图像，第二个 it 指图像所呈现的内容，代词需结合语境判断。",
                  "doesn't make 表示外观不能证明真实性，否定的是从“看起来真”到“事实为真”的推断。",
                  "句子以简洁对照概括报道的核心提醒，语气直接有力。",
                  "可借鉴 Just because ..., doesn't mean/make ... 表达不能仅凭表象下结论。"
                ],
                "translation": "看起来逼真，并不代表它就是真的。"
              },
              {
                "original": "The organisation advises people to arrange a meeting to see their pet in person before handing over any money, and to \"stay alert\" to criminals.",
                "analysis": [
                  "主干是 The organisation advises people，后面由两个并列的不定式说明建议内容。",
                  "to arrange a meeting 后接 to see their pet，后一不定式说明会面的目的。",
                  "before handing over any money 是时间状语，提醒先核验再付款。",
                  "in person 强调当面确认；引号中的 stay alert 保留机构建议中的警示措辞。",
                  "可借鉴 advise sb to do ... before doing ... 给出有先后顺序的安全建议。"
                ],
                "translation": "该机构建议人们先安排见面、当面查看宠物，再支付任何款项，并对犯罪者保持警惕。"
              }
            ]
          },
          {
            "title": "‘This is direct’: positive early feedback from pilot community mental health hub in Cumbria",
            "source": "The Guardian",
            "published": "2026-11-03",
            "url": "https://www.theguardian.com/society/2026/nov/03/early-feedback-pilot-community-mental-health-hub-cumbria-whitehaven",
            "readingTime": "约 6 分钟（估算）",
            "topic": "健康与社会 / 社区心理健康服务、预防与公共政策",
            "summary": "The Guardian 以 Whitehaven 的 Hope Haven 为例，介绍英格兰六个社区心理健康中心试点中的一种开放式服务：全天候接待，不要求诊断或转介，并把多种社区支持集中在一处。报道以使用者深夜求助后获得即时接待和次日预约的经历开篇，再列出运营前五个月约 3,000 人使用服务、近半数此前未接触 NHS 心理健康服务，以及当地住院治疗人数同期同比下降 24% 等早期数据。文章随后交代其他试点地点、未来扩展安排及 Trieste 模式的背景，并呈现当地服务短缺和员工观察。结尾引用社区代表对服务的积极评价，但整体材料仍是试点早期反馈和同期变化，不能单独证明中心造成了住院率下降；文章由此呈现可及性优势，也保留了评估成效的必要性。",
            "reason": [
              "主题连接心理健康、基层服务可及性与公共资源配置，适合健康政策和社会福利类考题。",
              "文章从个人求助经历切入，继而给出试点数据、政策背景和社区意见，形成由个案到制度的展开。",
              "可练习区分服务使用人数与效果指标，判断同期变化是否足以证明因果关系。",
              "词汇涵盖 preventive、open-access、referral、holistic 等公共服务与政策表达。",
              "写作可借鉴以个案引题、用数据呈现规模，再以证据边界和后续评估审慎收束。"
            ],
            "vocabulary": [
              {
                "word": "preventive",
                "phonetic": "/prɪˈventɪv/",
                "part": "adj.",
                "translation": "预防性的"
              },
              {
                "word": "open-access",
                "phonetic": "/ˌəʊpən ˈækses/",
                "part": "adj.",
                "translation": "开放准入的；无需转介即可使用的"
              },
              {
                "word": "diagnosis",
                "phonetic": "/ˌdaɪəɡˈnəʊsɪs/",
                "part": "n.",
                "translation": "诊断"
              },
              {
                "word": "referral",
                "phonetic": "/rɪˈfɜːrəl/",
                "part": "n.",
                "translation": "转介；转诊"
              },
              {
                "word": "inpatient",
                "phonetic": "/ˈɪnˌpeɪʃənt/",
                "part": "n.",
                "translation": "住院病人"
              },
              {
                "word": "holistic",
                "phonetic": "/həʊˈlɪstɪk/",
                "part": "adj.",
                "translation": "整体性的；综合性的"
              },
              {
                "word": "deprivation",
                "phonetic": "/ˌdeprɪˈveɪʃən/",
                "part": "n.",
                "translation": "贫困；匮乏"
              },
              {
                "word": "turning point",
                "phonetic": "/ˈtɜːnɪŋ pɔɪnt/",
                "part": "n.",
                "translation": "转折点"
              },
              {
                "word": "low-stigma",
                "phonetic": "/ˌləʊ ˈstɪɡmə/",
                "part": "adj.",
                "translation": "污名感较低的"
              },
              {
                "word": "walk-in",
                "phonetic": "/ˈwɔːk ɪn/",
                "part": "adj.",
                "translation": "无需预约即可到访的"
              }
            ],
            "sentences": [
              {
                "original": "It offers preventive, open-access care 24/7, meaning people do not need a diagnosis or referral to access its services.",
                "analysis": [
                  "主干是 It offers care，preventive、open-access 和 24/7 分别补充服务性质与时间安排。",
                  "meaning 引出结果说明，解释开放服务如何降低进入门槛。",
                  "people do not need a diagnosis or referral 是 meaning 后的内容，or 连接两项不必具备的条件。",
                  "to access its services 是目的不定式，说明诊断和转介与服务使用的关系。",
                  "可借鉴 ..., meaning ... 说明某项制度安排带来的实际影响。"
                ],
                "translation": "它提供全天候的预防性开放服务，人们无需诊断或转介即可使用。"
              },
              {
                "original": "In its first five months from March to July, about 3,000 people accessed support either digitally or in person.",
                "analysis": [
                  "主干是 about 3,000 people accessed support，数字量化了试点服务使用规模。",
                  "In its first five months from March to July 是时间状语，限定数据的统计区间。",
                  "either digitally or in person 构成并列选择，说明服务可通过线上或线下获得。",
                  "about 表明数字为近似值，概括统计时不宜写成精确总数。",
                  "可借鉴 In its first ... months, about ... 交代项目早期覆盖规模。"
                ],
                "translation": "从 3 月到 7 月的头五个月里，约有 3,000 人通过线上或线下方式获得支持。"
              },
              {
                "original": "The hubs build on the Trieste model of mental health care, a 24-hour holistic approach which started in 1980s Italy.",
                "analysis": [
                  "主干是 The hubs build on the Trieste model，build on 表示在既有模式基础上发展。",
                  "of mental health care 限定 Trieste model 的领域。",
                  "逗号后的 a 24-hour holistic approach 是同位语，对该模式作补充说明。",
                  "which started in 1980s Italy 是定语从句，修饰 approach 并交代其历史起点。",
                  "可借鉴 build on ... 将新方案与已有实践或理论联系起来。"
                ],
                "translation": "这些中心以的里雅斯特心理健康照护模式为基础；该模式是一种起源于 20 世纪 80 年代意大利的全天候综合方法。"
              }
            ]
          }
        ]
      }
    },
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
    }
  ]
};
