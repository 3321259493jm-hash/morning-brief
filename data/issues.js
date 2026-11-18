window.BRIEFING_DATA = {
  "updatedAt": "2026-11-18T12:08:03+08:00",
  "issues": [
    {
      "date": "2026-11-18",
      "status": "ready",
      "ai": {
        "intro": "今日重点关注 GitHub Copilot 在浏览器、代码评审和多模型选择上的新能力，并复核可长期或免费试用的学习资源。",
        "updates": [
          {
            "event": "GPT-6.2 Astra 与 GPT-6.2 Sol 在 GitHub Copilot 正式上线",
            "summary": "GitHub 于 2026-11-17 宣布 OpenAI 的 GPT-6.2 Astra 和 GPT-6.2 Sol 已在 Copilot 普通可用；两者面向代理式编程和代码评审，并声称在早期测试中发现更多问题或使用更少令牌。",
            "howTo": "在 Copilot 模型选择器中找到 GPT-6.2 Astra 或 GPT-6.2 Sol；分别用于终端代理、复杂开发任务或代码评审。若尚未出现，官方说明该能力为渐进式上线，需等待发布。",
            "impact": "学生可用 Astra 处理多步骤编程任务，用 Sol 对较复杂补丁做深度评审；仍应运行测试并人工核对，不能把早期内部测试结果视为稳定基准。",
            "free": "可用于 Pro+、Max、Business 和 Enterprise；按用量计费并采用供应商定价。官方未说明 Free 或 Pro 是否可用、地区范围或固定配额。",
            "category": "编程助手 / 新模型",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-17",
              "url": "https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available"
            }
          },
          {
            "event": "MAI Code 2 与 MAI Code 2 Flash 接入 GitHub Copilot",
            "summary": "GitHub 于 2026-11-17 发布 Microsoft 的 MAI Code 2 和 MAI Code 2 Flash：前者面向深度调试、跨文件实现和仓库级推理，后者面向解释、定向修改和日常迭代。",
            "howTo": "打开支持 Copilot 的编辑器、CLI、App 或 github.com 的模型选择器；选择 MAI Code 2 处理复杂任务，或用 MAI Code 2 Flash 做例行编辑；企业和组织管理员可在模型策略中管理。",
            "impact": "学生可按任务复杂度选择轻量或深度模型，例如用 Flash 解释一段代码，用 MAI Code 2 重构课程项目；生成结果仍需编译、测试和人工审查。",
            "free": "MAI Code 2 Flash 可用于 Copilot Free、Student、Pro、Pro+、Max、Business 和 Enterprise；MAI Code 2 可用于 Pro、Pro+、Max、Business 和 Enterprise。二者按用量计费；具体聊天、代理配额与地区官方未说明。",
            "category": "编程助手 / 新模型",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-17",
              "url": "https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot"
            }
          },
          {
            "event": "GitHub Copilot 公测浏览器操作",
            "summary": "GitHub 于 2026-11-17 宣布 Copilot 可在 Chromium 浏览器中执行公测版浏览器操作，可配合 Chrome 或 Copilot App/CLI/VS Code/JetBrains 完成表单填写、网页信息提取和实时调试。",
            "howTo": "安装 GitHub Copilot Chrome 扩展并确保状态为 Connected；在 Copilot CLI 用 /plugin 启用浏览器，或在 App 的 Settings > Computer Use 启用浏览器操作；也可在 VS Code 或 JetBrains 设置中启用，并明确授权。",
            "impact": "学生可让代理填写重复表单、打开课程网页验证内容或自动执行浏览器测试，但涉及登录、提交作业或购买时应先确认权限并检查操作结果。",
            "free": "浏览器操作现为公测功能；官方未说明免费或付费方案资格、地区范围、额度或是否额外消耗 AI Credits。",
            "category": "AI 助手 / 浏览器代理",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-17",
              "url": "https://github.blog/changelog/2026-11-17-let-github-copilot-interact-with-your-browser"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月 2,000 次补全",
            "summary": "GitHub 官方价格页提供 0 美元 Copilot Free，包含每月 2,000 次补全、社区支持、基础模型选择和 Copilot Fusion Standard；无需信用卡。",
            "howTo": "登录 GitHub Copilot 计划页并选择 Free，在 VS Code、Visual Studio、JetBrains、CLI 或其他支持环境中安装对应客户端；先用补全和日常对话完成课程代码练习。",
            "impact": "适合编程入门、代码补全和小型项目代理；超出固定补全后应以人工编写和测试为主。",
            "free": "价格为每月 0 美元、每月 2,000 次补全且无需信用卡；聊天和代理用量仅为有限使用。地区、账号资格和受支持模型的精确配额官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "GitHub Education：经验证学生可获得免费开发资源",
            "summary": "GitHub Education 面向符合资格的学生提供 GitHub Pro、无限私人仓库、每月 3K Actions 分钟和 180 Codespaces 小时等资源，并包含 Student Developer Pack 的合作工具。",
            "howTo": "打开 GitHub Education 页面完成学生身份验证，再在权益页面领取 Free GitHub Pro 和 Partner offers；申请时准备学校邮箱或可验证的在学证明。",
            "impact": "可用于课程仓库协作、云端编程、自动化测试和学习各类开发工具；实际合作权益期限和个人配额可能因供应商而异。",
            "free": "免费面向年满 13 岁且就读学位或文凭课程的学生，需学校邮箱或官方在学证明；精确地区与部分合作优惠期限官方未说明。Actions 和 Codespaces 配额具体如页面所列。",
            "category": "已认证学生 / 开发教育",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Google Colab：浏览器中的免费 Jupyter 与云计算",
            "summary": "Google Colab 官方 FAQ 说明其托管 Jupyter Notebook 服务无需本地安装，可免费使用资源并支持 GPU 或 TPU；免费资源不保证固定可用。",
            "howTo": "登录 Google 账号并打开 Colab，创建 Python notebook 或上传现有 .ipynb；在 Runtime 菜单选择硬件加速器，运行课程数据或机器学习代码。",
            "impact": "适合快速运行数据分析、Python 作业和模型实验，不必配置本地环境；虚拟机会因空闲回收，免费 GPU 和 TPU 并不保证随时可用。",
            "free": "官方确认免费提供计算资源，但不保证资源或指出固定配额；地区、账号资格和 GPU/TPU 上限官方未说明。",
            "category": "免费学习 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn：免费交互式课程与实践",
            "summary": "Kaggle 官方课程目录提供不收费的短课程，涵盖 Python、机器学习、数据可视化和 SQL，并在浏览器中提供代码练习。",
            "howTo": "登录 Kaggle 后进入 Learn，从 Python 或数据可视化课程开始；在互动代码环境完成练习并保存课程进度。",
            "impact": "适合学生每天花短时间补齐数据分析、机器学习或 SQL 基础；课程证书和高级能力是否免费以页面/课程条款为准。",
            "free": "官方课程可免费学习；具体证书资格、地区限制、账号要求和课程是否永久免费官方未说明。",
            "category": "免费学习 / 数据与编程",
            "source": {
              "name": "Kaggle 官方学习中心",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "Qwen3-ASR 可下载开源语音识别模型",
            "summary": "Qwen 官方模型卡发布 Qwen3-ASR-0.6B 与相关 ASR 模型，支持离线和流式识别、52 种语言和方言，并提供本地推理工具。",
            "howTo": "在支持 CUDA 的环境安装 qwen-asr 包，使用 from_pretrained 加载 Qwen/Qwen3-ASR-0.6B；也可通过 Hugging Face CLI 或 ModelScope 下载权重后离线运行。",
            "impact": "可用于课程讲座转录、英语听力听写和多语言语音数据处理；应先用公开文件测试识别准确度，再对个人数据自行控制存储。",
            "free": "模型权重可下载使用，官方未说明云端配额或地区限制；具体商业用途许可以模型仓库的许可证条款为准，页面未单独列出固定免费调用额度。",
            "category": "开源模型 / 语音识别",
            "source": {
              "name": "Hugging Face Qwen 官方模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Sleeve checks and no smartglasses: South Korea races to protect all-important university exams against AI",
            "source": "The Guardian",
            "published": "2026-11-17",
            "url": "https://www.theguardian.com/world/2026/nov/18/south-korea-university-entrace-exams-ai-cheating-measures",
            "readingTime": "约 8 分钟（估算）",
            "topic": "教育与科技 / 高考安全、AI 作弊与制度应对",
            "summary": "文章围绕韩国高风险大学入学考试遭遇新型 AI 作弊展开。首段通过近期税务考试最高分考生承认使用隐蔽摄像头和 AI 作答，说明考试诚信受到冲击；中段详细描述韩国为下周 suneung 采取的运输、噪音、通信和考场安检措施，包括检查衣领袖口、关闭或追踪无线设备以及增加监考。随后报道指出，智能眼镜和微型摄像头使传统肉眼检查难以完全防范，教育部长承认无法完美识别新型号，教师工会调查也显示多数教师不能确信现行程序有效。文章最后以考试主办方拒绝延期、考生改戴隐形眼镜等细节收束，呈现国家在技术风险下维持既定考试时点的现实张力。",
            "reason": [
              "主题涉及教育公平、AI 监管和考试安全，贴近研究生英语中科技对社会治理的常见题目。",
              "结构先以个案建立问题，再列举国家级防护措施，继而分析技术限制与教师反馈，形成事实—措施—质疑的递进。",
              "适合练习因果、让步和数据支持等阅读题型，尤其区分政府承诺与实际执行能力。",
              "文中 concealed、deploy、validity、inconvenience 等词可用于讨论高科技监控和制度信任。",
              "写作可借鉴先陈述具体事件，再分列制度措施、技术边界、公众争议与审慎结论的完整论证框架。"
            ],
            "vocabulary": [
              {"word":"grueling","phonetic":"/ˈɡruːəlɪŋ/","part":"adj.","translation":"艰苦的；费力的"},
              {"word":"integrity","phonetic":"/ɪnˈteɡrəti/","part":"n.","translation":"完整性；诚信"},
              {"word":"validity","phonetic":"/vəˈlɪdəti/","part":"n.","translation":"有效性；正当性"},
              {"word":"concealed","phonetic":"/kənˈsiːld/","part":"adj.","translation":"隐蔽的；隐藏的"},
              {"word":"deploy","phonetic":"/dɪˈplɔːɪ/","part":"v.","translation":"部署；调配"},
              {"word":"invigilator","phonetic":"/ɪnˈvɪdʒɪleɪtər/","part":"n.","translation":"监考人员"},
              {"word":"scrutiny","phonetic":"/ˈskruːtəni/","part":"n.","translation":"仔细检查；审视"},
              {"word":"belated","phonetic":"/bɪˈleɪtɪd/","part":"adj.","translation":"来得太晚的；延误的"},
              {"word":"legitimate","phonetic":"/lɪˈdʒɪtɪmət/","part":"adj.","translation":"合法的；正当的"},
              {"word":"inconvenience","phonetic":"/ˌɪnkənˈviːniəns/","part":"n.","translation":"不便；麻烦"}
            ],
            "sentences": [
              {
                "original": "The integrity of South Korea’s career-defining university entrance exam has been thrown into doubt.",
                "analysis":[
                  "句子主干是 The integrity has been thrown into doubt，采用被动语态强调考试诚信受到质疑。",
                  "of 介词短语说明 integrity 的所属对象，即韩国职业生涯导向型大学入学考试。",
                  "career-defining 是复合形容词，修饰 university entrance exam，说明考试后果重大。",
                  "has been thrown into doubt 可改写为 has become doubtful，是概括性学术表达。",
                  "该句为报道主题句，为后文个案和防护措施提供论证框架。"
                ],
                "translation":"韩国这种决定职业前途的大学入学考试，其公信力受到了质疑。"
              },
              {
                "original": "But in recent days, exam organisers have faced a renewed threat to the validity of the entire exercise.",
                "analysis":[
                  "But 表示转折，说明前文宏观防护措施之后出现新的问题。",
                  "主语是 exam organisers，谓语为 have faced，a renewed threat 是直接宾语。",
                  "to the validity of the entire exercise 是介词短语，说明威胁针对整个考试制度的有效性。",
                  "renewed 表示威胁在已有防护基础上再次增强，提示问题具有连续性。",
                  "But 的转折可用于摘要中连接制度措施和突发事件。"
                ],
                "translation":"但近几日，考试组织者又面临对整个考试活动有效性的新的威胁。"
              },
              {
                "original": "Newer variants could not be dealt with perfectly, the education minister said.",
                "analysis":[
                  "主句核心是 newer variants could not be dealt with，表达无法完美处理新型智能眼镜。",
                  "could not 表达能力或现实限制；perfectly 是程度副词，强调防控并非绝对有效。",
                  "变体 variants 指前文列举的智能眼镜型号，由前文语境可知。",
                  "the education minister said 是倒装式引述，归属在后有助于区分官方说法。",
                  "该句体现谨慎措辞，可用于让步式论证：承认措施而保留其局限。"
                ],
                "translation":"教育部长表示，新型智能眼镜无法被完美识别和处理。"
              }
            ]
          },
          {
            "title": "US loses measles elimination status amid worst outbreak since 1991",
            "source": "The Guardian",
            "published": "2026-11-17",
            "url": "https://www.theguardian.com/us-news/2026/nov/17/us-measles-outbreak-elimination-status",
            "readingTime": "约 9 分钟（估算）",
            "topic": "公共卫生 / 疫苗接种、误信息与传染病治理",
            "summary": "文章报道美国失去世界卫生组织区域体系认可的麻疹消除状态。报道引用泛美卫生组织数据，说明2026年美国已有超过5400例麻疹和8人死亡，疫情已实现持续本土传播；自称消除26年后，这项状态被重新判定为地方性流行。文章分析接种率下降、疫苗误信息、政府官员公开争议以及跨国疫情等原因，并援引流行病学者强调至少95%的社区接种率、综合公共卫生计划和官方信任恢复的重要性。结尾指出消除状态不仅是名义变化，还会增加旅行、隔离和公共卫生资源压力。",
            "reason":[
              "文章将公共卫生指标、疫苗接种和政治沟通结合，适合讨论科学决策、公众信任与媒体误信息。",
              "结构由官方判定切入，随后用案例、专家和反驳组织论证，并以恢复消除状态所需措施收束。",
              "适合练习数字证据、权威引述、因果关系和让步结构；可区分作者观点与被引用专家观点。",
              "elimination、endemic、outbreak、misinformation 等词汇适用于健康与社会议题写作。",
              "写作可借鉴先给出官方结论，再列证据、原因、反驳和可行对策的段落安排。"
            ],
            "vocabulary":[
              {"word":"elimination","phonetic":"/ɪˌlɪməˈneɪʃən/","part":"n.","translation":"消除；根除"},
              {"word":"endemic","phonetic":"/enˈdemɪk/","part":"adj.","translation":"地方性流行的"},
              {"word":"outbreak","phonetic":"/ˈaʊtbreɪk/","part":"n.","translation":"（疾病）爆发"},
              {"word":"surveillance","phonetic":"/sərˈveɪləns/","part":"n.","translation":"监测；观察"},
              {"word":"contagious","phonetic":"/kənˈteɪdʒəs/","part":"adj.","translation":"有传染性的"},
              {"word":"misinformation","phonetic":"/ˌmɪsɪnfərˈmeɪʃən/","part":"n.","translation":"误传；错误信息"},
              {"word":"preventable","phonetic":"/prɪˈventəbəl/","part":"adj.","translation":"可预防的"},
              {"word":"pandemic-era","phonetic":"/pænˈdemɪk ˈɪrə/","part":"adj.","translation":"疫情时期的"},
              {"word":"vaccination","phonetic":"/ˌvæksɪˈneɪʃən/","part":"n.","translation":"疫苗接种"},
              {"word":"re-establish","phonetic":"/ˌriːɪˈstæblɪʃ/","part":"v.","translation":"重新建立；恢复"}
            ],
            "sentences":[
              {
                "original":"The US has lost its measles elimination status, global health authorities announced.",
                "analysis":[
                  "主句是 global health authorities announced，采用倒装式主谓结构强调官方公告。",
                  "its measles elimination status 是名词所有结构，说明美国此前的麻疹消除认证已被撤销。",
                  "lost 是过去时动态动词，体现认证状态的变化而非疾病本身突然出现。",
                  "the US 是唯一主语；全球卫生机构是 announcement 的来源。",
                  "该句适合作为新闻摘要的事实句，可配合数据和来源进行改写。"
                ],
                "translation":"全球卫生机构宣布，美国已失去麻疹消除状态。"
              },
              {
                "original":"Measles is resurging globally amid persistent gaps in vaccination coverage.",
                "analysis":[
                  "主干为 Measles is resurging，进行时态表示麻疹疫情正在复苏。",
                  "globally 是范围副词，说明这是跨地区现象而非单一国家问题。",
                  "amid 引导伴随状况，强调在持续接种覆盖缺口中疫情重新增长。",
                  "persistent gaps in vaccination coverage 是病因或制度性条件，而非单一个人行为。",
                  "该句可用于写作中连接全球趋势与接种率这一系统性因素。"
                ],
                "translation":"在疫苗接种覆盖率持续存在缺口的情况下，麻疹正在全球范围内重新抬头。"
              },
              {
                "original":"Re-establishing elimination status will require a national plan to eliminate measles again.",
                "analysis":[
                  "主语是动名词短语 Re-establishing elimination status，表示恢复消除状态这一行动。",
                  "will require 是将来时主谓结构，说明恢复状态需要持续投入。",
                  "to eliminate measles again 是目的或内容性不定式，说明计划目标。",
                  "national plan 强调跨层级协调，不能只依赖个别社区或短期运动。",
                  "该句适合总结问题解决方案，常用于阅读理解的主旨或作者态度题。"
                ],
                "translation":"重新获得消除状态需要一项再次消除麻疹的国家计划。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-17",
      "status": "ready",
      "ai": {
        "intro": "本期关注 GitHub Copilot 在 VS Code 的实验性会话管理与模型比较，以及跨语言语音输入；免费资源覆盖写作、编程和研究计算。",
        "updates": [
          {
            "event": "VS Code Copilot Inbox 集中管理多个工作区的代理会话",
            "summary": "GitHub 于 2026-11-16 在 VS Code 1.146 中推出实验性的 Inbox 模式：在 Agents 窗口的会话列表里集中查看所有工作区的代理会话，并优先显示需要处理的会话；其他会话可关闭、搁置或稍后提醒。",
            "howTo": "在 VS Code 打开 Agents 窗口的 sessions 列表并切换到 Inbox 模式；让 Copilot 代理处理一项课程项目任务后，可在同一视图检查各工作区状态，并对暂时不处理的会话选择 hold 或 snooze。",
            "impact": "同时维护多个课程项目或实验仓库时，可更快发现等待自己确认的代理任务，减少遗漏；该功能仍是实验版，重要代码变更仍需自行检查和测试。",
            "free": "GitHub 将 Inbox 标为实验功能，但该公告未说明其免费或付费方案资格、地区范围和具体调用配额。",
            "category": "编程助手 / 代理会话管理",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-16",
              "url": "https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9"
            }
          },
          {
            "event": "Copilot 代理可在 VS Code 实验性比较模型",
            "summary": "GitHub 于 2026-11-16 宣布，VS Code 1.146 的实验功能可让代理查找当前可用模型、发起模型比较并读取结果后总结；该能力需要启用 Compare Models 和代理工具。",
            "howTo": "在 VS Code 设置中启用 Compare Models 和 agent tools，再给代理一个范围明确的小任务，让它比较可选模型并总结结果；逐项核对比较条件和生成内容，不把实验结果当作可靠基准。",
            "impact": "学生可用同一项代码解释或课程练习观察不同模型的回答差异，练习比较输出的准确性与可读性；公告没有给出基准测试结论。",
            "free": "该功能为实验版。官方公告未说明免费或付费方案资格、地区范围、调用配额或是否会产生额外费用。",
            "category": "编程助手 / 模型比较",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-16",
              "url": "https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9"
            }
          },
          {
            "event": "GitHub Copilot App 增加多语言语音输入",
            "summary": "GitHub 于 2026-11-16 在 Copilot App 加入法语、西班牙语等语言的语音听写；用户可先在设置中下载多语言语音模型，再选 Auto 或指定语言。",
            "howTo": "打开 GitHub Copilot App 的设置，下载 multilingual voice model，然后在语音输入时选择 Auto 或一种可用语言；可先口述简短的任务描述，再检查听写文本是否准确。",
            "impact": "学生可通过口述快速记录项目问题、待办事项或代码修改思路；提交任务前校对专有名词和语音识别结果，避免错误指令。",
            "free": "公告说明了设置步骤，但未说明此功能的方案资格、支持地区、具体语言清单或使用配额；其中明确举例法语和西班牙语。",
            "category": "AI 助手 / 多语言语音输入",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-16",
              "url": "https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9"
            }
          }
        ],
        "deals": [
          {
            "event": "ChatGPT Free：可免费使用的网页与移动端学习助手",
            "summary": "OpenAI 价格页列出 Free 方案：网页、iOS 和 Android 可用，日常文本聊天标为 unlimited；文件上传、图像生成、语音、深度研究以及记忆和上下文均为有限使用。",
            "howTo": "在 ChatGPT 官方价格页选择 Get Free 并登录；可让它根据自己的课程笔记生成复习提纲或自测题，再回到原始材料核对答案。",
            "impact": "适合起草复习问题、解释概念或规划写作步骤；免费工具额度有限，重要结论仍应查阅课程材料和原始来源。",
            "free": "Free 方案无需付费；文本聊天标注为 unlimited，但受防滥用规则约束，其他列出的功能为有限使用。具体条数、地区和账号资格官方未说明。",
            "category": "免费 AI 应用 / 学习助手",
            "source": {
              "name": "OpenAI 官方价格页",
              "published": "官方未说明",
              "url": "https://chatgpt.com/pricing/"
            }
          },
          {
            "event": "Gemini Free：Google 账号可用的免费学习与研究工具",
            "summary": "Google Gemini 官方方案页列出每月 0 美元的 Free 方案，需 Google 账号；包括 Gemini 应用的 Flash-Lite、图像生成与编辑、Deep Research、Live、Canvas、Skills，以及 Gemini Notebook 和 15 GB 云存储。",
            "howTo": "登录 Google 账号并打开 Gemini 应用；可用 Canvas 整理课程想法、用 Deep Research 探索主题，或在 Gemini Notebook 中辅助整理资料，之后自行核实引用和结论。",
            "impact": "适合梳理课程主题、制作研究提纲和辅助写作；不同功能的免费使用上限不一，不能把生成回答直接当作可靠引文。",
            "free": "官方方案页标注每月 0 美元并要求 Google 账号。该页当前展示美国地区方案；免费功能的具体配额及其他地区资格官方未说明。",
            "category": "免费 AI 应用 / 研究与写作",
            "source": {
              "name": "Google Gemini 官方方案页",
              "published": "官方未说明",
              "url": "https://gemini.google/us/about/"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出每月 0 美元的 Copilot Free，包含每月 2,000 次代码补全，并提供有限聊天和代理使用；页面说明无需信用卡。",
            "howTo": "从 GitHub Copilot 计划页开始使用，在支持的编辑器安装 Copilot 扩展并登录 GitHub；先用它补全一段课程代码，再运行测试并检查建议。",
            "impact": "可帮助学生练习编程、补全重复代码或理解代码结构；免费聊天和代理用量有限，生成代码须经过测试和人工检查。",
            "free": "官方标价每月 0 美元、每月 2,000 次代码补全且无需信用卡；聊天与代理为有限使用，具体额度、地区和账号资格官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 笔记本与计算资源",
            "summary": "Google Colab 官方 FAQ 说明，Colab 是无需安装的托管 Jupyter Notebook 服务，可免费使用计算资源，包括 GPU 和 TPU；免费资源不保证且不无限，使用限制会变化。",
            "howTo": "打开 Colab 并登录 Google 账号，创建笔记本或从 File 菜单上传现有 Jupyter notebook；在笔记本中运行课程代码，保存前检查输出中是否含个人或敏感信息。",
            "impact": "适合在浏览器中完成 Python、数据科学或机器学习课程练习，不必先配置本地环境；免费 GPU/TPU 不保证随时可用，空闲虚拟机也会被回收。",
            "free": "官方确认 Colab 免费，并说明可提供 GPU/TPU；资源不保证、不无限，使用上限会变化，官方未公布固定免费额度或地区范围。",
            "category": "免费学习 / 云端计算",
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
            "title": "We couldn't afford a house alone, so we bought one with strangers",
            "source": "BBC",
            "published": "2026-11-17",
            "url": "https://www.bbc.co.uk/news/articles/c5742lwdyzglo",
            "readingTime": "约 5 分钟（估算）",
            "topic": "经济与社会 / 高房价下的共同购房与居住安排",
            "summary": "报道从温哥华两户家庭因预算不足而决定与陌生人共同买房的经历切入：他们在相识两年后共同购买六居室住房，分摊首付、月供和日常开支，并称因此省下数万。文章接着介绍多伦多一个连接潜在共同购房者的平台，以及另一组共同持有住房者如何按收入分摊成本、定期商议家务和财务；报道也指出目前没有这类购房人数的官方统计，英国案例仍属少见。结尾强调共同居住需要公开沟通和具有法律约束力的退出安排，呈现这种住房应对方式的实际好处与协作风险。",
            "reason": [
              "文章以高房价和住房可负担性为切口，关联年轻家庭、资产获取和共享经济等常见社会经济议题。",
              "结构由温哥华个案展开，补充多伦多平台及另一共同持有者的经验，再以法律协议和沟通总结条件。",
              "适合练习识别个案证据与普遍趋势的区别，考查转述、数据缺失说明和末段建议。",
              "可学习 afford、mortgage、co-own、legally binding 等住房与金融词汇，以及人物引语如何支撑报道。",
              "写作可借鉴“生活压力—替代方案—实践成本与治理—适用边界”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "afford",
                "phonetic": "/əˈfɔːrd/",
                "part": "v.",
                "translation": "负担得起"
              },
              {
                "word": "go halves",
                "phonetic": "/ɡoʊ hælvz/",
                "part": "phr.",
                "translation": "平分；各承担一半"
              },
              {
                "word": "deposit",
                "phonetic": "/dɪˈpɑːzɪt/",
                "part": "n.",
                "translation": "首付款；定金"
              },
              {
                "word": "mortgage",
                "phonetic": "/ˈmɔːrɡɪdʒ/",
                "part": "n.",
                "translation": "抵押贷款；房贷"
              },
              {
                "word": "pool resources",
                "phonetic": "/puːl rɪˈsɔːrsɪz/",
                "part": "phr.",
                "translation": "集中资源；共同出资"
              },
              {
                "word": "co-own",
                "phonetic": "/ˌkoʊˈoʊn/",
                "part": "v.",
                "translation": "共同拥有"
              },
              {
                "word": "niche",
                "phonetic": "/nɪtʃ/",
                "part": "adj.",
                "translation": "小众的；仅适用于特定群体的"
              },
              {
                "word": "dispute",
                "phonetic": "/dɪˈspjuːt/",
                "part": "n.",
                "translation": "争议；纠纷"
              },
              {
                "word": "housemate",
                "phonetic": "/ˈhaʊsmeɪt/",
                "part": "n.",
                "translation": "合住者"
              },
              {
                "word": "legally binding",
                "phonetic": "/ˈliːɡəli ˈbaɪndɪŋ/",
                "part": "adj.phr.",
                "translation": "具有法律约束力的"
              }
            ],
            "sentences": [
              {
                "original": "They'd find another couple with young kids, complete strangers to them, and propose that they go halves on a property and all move in together.",
                "analysis": [
                  "主干由 They'd find ... and propose ... 两个并列谓语构成，交代两户人家提出的做法。",
                  "They'd 是 they would 的缩写，结合前文表示设想中的行动，而非已经完成的事实。",
                  "with young kids 和 complete strangers to them 补充说明另一对夫妇的家庭情况及双方原先并不相识。",
                  "that 引导 propose 的宾语从句；go halves on 表示共同分担，and 连接共同购房与搬入的安排。"
                ],
                "translation": "他们打算找另一对有年幼孩子、此前完全陌生的夫妇，提议共同购买一处房产并一起搬进去住。"
              },
              {
                "original": "Three years on, the Wilcoxes and the Pullmans say their living arrangement is still working out.",
                "analysis": [
                  "Three years on 是时间状语，表示从共同购房至报道时已过去三年。",
                  "主句主干是 the Wilcoxes and the Pullmans say，明确这是两家人的说法。",
                  "their living arrangement is still working out 是 say 后的宾语从句，that 被省略。",
                  "still working out 表示安排目前仍在顺利进行；引语归属提醒读者这是当事人经验，而非普遍结论。"
                ],
                "translation": "三年过去后，Wilcox 家和 Pullman 家说，他们的共同居住安排目前仍然顺利。"
              },
              {
                "original": "They have regular house meetings where they discuss chores, financial issues, birthday celebrations, and any disagreements.",
                "analysis": [
                  "主句主干是 They have regular house meetings，说明他们定期举行家庭会议。",
                  "where 引导定语从句，修饰 meetings，交代会议讨论的内容。",
                  "chores、financial issues、birthday celebrations 和 disagreements 构成并列清单，体现议题从日常事务延伸到冲突处理。",
                  "regular 表示反复、规律地发生，可用于描述制度化沟通如何帮助共同生活。"
                ],
                "translation": "他们定期召开家庭会议，讨论家务、财务问题、生日庆祝以及任何分歧。"
              }
            ]
          },
          {
            "title": "Eurovision Asia: a diverse and spectacular showcase of Asian pop",
            "source": "The Conversation",
            "published": "2026-11-15",
            "url": "https://theconversation.com/eurovision-asia-a-diverse-and-spectacular-showcase-of-asian-pop-294346",
            "readingTime": "约 6 分钟（估算）",
            "topic": "文化与社会 / 亚洲流行音乐、文化表达与国际传播",
            "summary": "文章评述首届 Eurovision Asia：来自 11 个国家的表演者在熟悉的比赛形式中呈现不同地区的音乐、服饰和语言；报道指出多数歌曲使用本国语言或与英语混合，展示赛事与欧洲版本不同的区域特色。作者随后从菲律宾歌手夺冠、赛事品牌如何扩展到亚洲，讨论它作为文化传播和软实力平台的潜力；文章同时指出中国、日本、印度等大国缺席、未来参赛范围、广播机构的价值观差异等现实障碍。结尾认为该赛事有机会为亚洲流行文化提供更广泛的国际舞台，但其长期影响取决于能否扩大参与并容纳地区多样性。",
            "reason": [
              "文章连接流行文化、语言多样性、区域身份和文化外交，适合讨论文化全球化与软实力。",
              "结构先介绍赛事形式及表演特点，再分析品牌扩展与参与障碍，最后回到亚洲流行文化的传播价值。",
              "适合考查转折、让步、例证和作者对未来发展的审慎判断，也可区分事实描述与评论。",
              "inaugural、regional inflection、longevity、franchise 等词汇有助于理解文化活动与品牌延展。",
              "写作可借鉴“新现象—文化特色—发展机会—参与限制—条件性结论”的层次安排。"
            ],
            "vocabulary": [
              {
                "word": "inaugural",
                "phonetic": "/ɪˈnɔːɡjərəl/",
                "part": "adj.",
                "translation": "首届的；开创性的"
              },
              {
                "word": "distinct",
                "phonetic": "/dɪˈstɪŋkt/",
                "part": "adj.",
                "translation": "明显不同的；鲜明的"
              },
              {
                "word": "inflection",
                "phonetic": "/ɪnˈflekʃən/",
                "part": "n.",
                "translation": "特色；变化（此处指区域特色）"
              },
              {
                "word": "encompass",
                "phonetic": "/ɪnˈkʌmpəs/",
                "part": "v.",
                "translation": "包括；涵盖"
              },
              {
                "word": "unapologetic",
                "phonetic": "/ˌʌnəˌpɑːləˈdʒetɪk/",
                "part": "adj.",
                "translation": "坦然坚定的；不感到抱歉的"
              },
              {
                "word": "longevity",
                "phonetic": "/lɑːnˈdʒevəti/",
                "part": "n.",
                "translation": "持久；长期存续"
              },
              {
                "word": "franchise",
                "phonetic": "/ˈfræntʃaɪz/",
                "part": "n.",
                "translation": "系列品牌；特许经营权"
              },
              {
                "word": "broadcaster",
                "phonetic": "/ˈbrɔːdkæstər/",
                "part": "n.",
                "translation": "广播电视机构"
              },
              {
                "word": "draw in",
                "phonetic": "/drɔː ɪn/",
                "part": "phr.v.",
                "translation": "吸引；招徕"
              },
              {
                "word": "soft power",
                "phonetic": "/ˌsɔːft ˈpaʊər/",
                "part": "n.phr.",
                "translation": "软实力"
              }
            ],
            "sentences": [
              {
                "original": "Notably absent this first year were most of the continent’s most populous nations: China, India, Japan, Pakistan and Indonesia.",
                "analysis": [
                  "句子采用表语前置结构，Notably absent this first year 位于句首，主语是 most of the continent’s most populous nations。",
                  "were 是系动词，后置主语与前置表语形成倒装，突出缺席这一事实。",
                  "冒号后列出具体国家，对前面的 nations 作解释说明。",
                  "most populous 是最高级含义的修饰语；该句以缺席名单引出赛事代表性和未来扩展的问题。"
                ],
                "translation": "首届赛事中，亚洲人口最多的几个国家大多明显缺席：中国、印度、日本、巴基斯坦和印度尼西亚。"
              },
              {
                "original": "But there was a distinct regional inflection in the staging, costuming and language choices.",
                "analysis": [
                  "But 作为句首转折词，与前文“比赛形式熟悉”形成对照。",
                  "主干是 there was a distinct regional inflection，there be 结构引出一种鲜明的区域特色。",
                  "in the staging, costuming and language choices 说明这种特色体现在哪些方面，三个名词并列。",
                  "distinct regional inflection 可用于概括某种全球化形式在本地呈现出的独特风格。"
                ],
                "translation": "然而，舞台呈现、服装设计和语言选择都带有鲜明的区域特色。"
              },
              {
                "original": "Staging the inaugural competition is one thing, but securing the longevity of the franchise in Asia is another matter.",
                "analysis": [
                  "主语由两个动名词短语构成：Staging the inaugural competition 与 securing the longevity of the franchise。",
                  "is one thing, but ... is another matter 构成对照，强调办成首届赛事与确保长期发展并非同一难题。",
                  "of the franchise 修饰 longevity，说明要维持的是赛事品牌在亚洲的长期存续。",
                  "该句将短期成果与长期可持续性区分开来，可用于提出政策或项目评估中的后续挑战。"
                ],
                "translation": "举办首届赛事是一回事，但确保这一赛事品牌在亚洲长久发展则是另一回事。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-16",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Claude Meetings 会议协作与 GitHub Copilot 的模型更新，并筛选可用于学习、转录和开发的免费资源。",
        "updates": [
          {
            "event": "Claude Meetings 开始测试：可加入 Google Meet 会议",
            "summary": "Anthropic 于 2026-11-12 宣布，Claude Meetings 在 Claude 和 Claude Desktop 的 Team、Enterprise 方案中开启 beta：作为可见参会者加入 Google Meet，实时记录、回答问题并制作文档、白板和幻灯片；会后可查看摘要、行动项和文字稿。",
            "howTo": "在 Claude 的 Meetings 页面连接 Google Calendar，选中日历中的会议并点 Add Claude；组织所有者需先启用 Google Calendar。使用自动加入前，先征得所有参会者同意转录。",
            "impact": "小组讨论课程项目或线上研讨时，可让 Claude 整理讨论要点、行动清单和共享文档；参会者都能看到它加入，仍应检查纪要并避免未经同意转录。",
            "free": "目前仅向 Team 和 Enterprise 组织 beta 开放，部分启用零数据保留、HIPAA 配置或客户管理加密密钥的组织不可用；地区和调用配额官方未说明。会议笔记、文字稿及不调用连接器的回答包含在这两类方案中；会议文档和白板免费至 2027-02-10，连接工具可能产生组织费用。",
            "category": "AI 协作 / 会议记录",
            "source": {
              "name": "Claude 官方发布说明",
              "published": "2026-11-12",
              "url": "https://support.claude.com/en/articles/12138966-release-notes"
            }
          },
          {
            "event": "Gemini 4 Carbon 上线 GitHub Copilot",
            "summary": "GitHub 于 2026-11-10 宣布，Gemini 4 Carbon 已在 GitHub Copilot 正式提供，面向复杂编码、代理任务和推理，并强调安全代码生成。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI、JetBrains、Xcode、github.com 等支持的 Copilot 端打开模型选择器并选 Gemini 4 Carbon；用一项可测试的小型课程代码任务比较输出。",
            "impact": "可让它协助拆解多文件编程任务、解释代码或检查安全相关实现；把建议放进本地测试和代码审查流程，不要直接采纳未经验证的改动。",
            "free": "公告列出的方案为 Copilot Pro+、Max、Business 和 Enterprise；按模型供应商价格进行用量计费。免费方案资格、具体价格、调用配额及地区官方未说明；正在逐步开放，企业管理员可管理模型策略。",
            "category": "编程助手 / 模型更新",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-10",
              "url": "https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/"
            }
          },
          {
            "event": "Claude Fable 5.2 在 GitHub Copilot 正式开放",
            "summary": "GitHub 于 2026-11-09 将 Anthropic Claude Fable 5.2 加入 Copilot，面向大型代码库中的复杂、多步骤编码任务；使用该模型时，Anthropic 默认会保留提示词和输出以运行安全分类器，官方称这些保留数据不用于训练模型。",
            "howTo": "在 Copilot 支持的 IDE、命令行或网页端模型选择器中选择 Claude Fable 5.2；Business 与 Enterprise 组织需由管理员在 Copilot 设置中启用该模型策略。",
            "impact": "可以让它先规划跨文件的课程项目修改，再逐步检查补丁、测试和解释；若处理课程或团队的非公开代码，先确认组织的数据保留要求。",
            "free": "限 Copilot Pro+、Max、Business 和 Enterprise 方案，按供应商公开价格进行用量计费，逐步开放。该模型默认要求数据保留；符合条件的企业可申请限时零数据保留豁免，至 2026 年底，其他地区和具体调用额度官方未说明。",
            "category": "编程助手 / 模型更新",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-09",
              "url": "https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot/"
            }
          }
        ],
        "deals": [
          {
            "event": "AWS Educate：免费云计算与 AI 学习路径和动手实验",
            "summary": "AWS Educate 为个人提供免费的自定进度云技能课程及动手实验，主题包括存储、计算、网络、数据库和云运维；部分课程提供可分享的数字徽章。",
            "howTo": "打开 AWS Educate 官方页面并用电子邮箱注册，进入学习路径；可从存储、计算或数据库实验开始，按步骤完成课程练习。",
            "impact": "适合练习云计算基础、理解云端部署与网络配置，或通过实验熟悉 AI 相关云技能；开始前确认实验内容不会创建额外付费资源。",
            "free": "课程和动手实验免费；年满 13 岁可仅用电子邮箱注册且无需信用卡。官方未说明地区限制、具体实验配额或截止日期。",
            "category": "免费学习 / 云计算与 AI",
            "source": {
              "name": "AWS 官方 Educate 项目页",
              "published": "官方未说明",
              "url": "https://aws.amazon.com/education/awseducate/"
            }
          },
          {
            "event": "GitHub Student Developer Pack：验证学生可领开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro，含私有仓库、每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 和 20 GB Codespaces 存储，并可申请 Student Developer Pack 合作伙伴权益。",
            "howTo": "访问 GitHub Education 学生页面并登录或创建 GitHub 账号，提交学校邮箱和/或带日期的官方在读证明申请验证；通过后查看 Student Developer Pack 中可领取的权益。",
            "impact": "可在私有仓库管理课程项目、用 Actions 自动运行测试，并通过 Codespaces 进行云端开发；使用前核对每月额度和合作伙伴各自条件。",
            "free": "适用于年满 13 岁、就读于授予学位或文凭课程的学生，需通过验证。页面列出上述月度额度；地区范围、申请截止日期及合作伙伴权益细则官方未说明。",
            "category": "学生权益 / 开发工具",
            "source": {
              "name": "GitHub Education 官方学生权益页",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Claude Free：免费网页、桌面和移动端学习助手",
            "summary": "Claude 官方价格页列出每月 0 美元的 Free 方案，可在网页、桌面和移动端聊天、搜索网页、创建文件、运行代码及制作 Artifacts。",
            "howTo": "从 Claude 官方价格页进入 Free 方案并登录；可上传自己的课堂资料，请它整理提纲、生成自测题或解释代码，再对照原文核实。",
            "impact": "可用于起草复习问题、梳理自有资料或试做简单代码；重要结论仍应回查课程材料，避免把生成内容当作未经核验的事实。",
            "free": "价格页标价每月 0 美元，免费用量每 5 小时及每周均有限，但未公布固定条数或 token 配额；地区和账号资格官方未说明。",
            "category": "免费 AI 应用 / 学习助手",
            "source": {
              "name": "Claude 官方价格页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "DeepL 免费版：文本翻译及小型文件翻译额度",
            "summary": "DeepL 官方计划对比页列出免费版每用户每月 50,000 个文本字符额度，并支持文件翻译和保存一条译文；文件大小上限为 5 MB。",
            "howTo": "打开 DeepL 官方翻译页，粘贴短文或上传不超过 5 MB 的文件；对照原文检查术语、语气和专有名词，不直接把机器译文当作定稿。",
            "impact": "适合快速理解英文资料、对照自己写的译文或处理小型文档；学术引用和关键术语仍应回看原文。",
            "free": "免费版列出每月 50,000 个文本字符、1 次文件翻译、单文件最多 5 MB 和 1 条保存译文。具体地区及账号要求官方未说明。",
            "category": "免费翻译工具",
            "source": {
              "name": "DeepL 官方方案页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "Kaggle Learn：免费的数据科学与机器学习短课程",
            "summary": "Kaggle 将 Learn 课程标为 no-cost，提供 Python、数据可视化、Pandas 等实用数据技能课程。",
            "howTo": "打开 Kaggle Learn，选择 Python、Pandas 或数据可视化课程，按章节完成教程与练习；可将代码迁移到自己的课程笔记本中复测。",
            "impact": "适合补充数据分析与机器学习基础，利用短练习巩固编程概念并为课程项目准备数据处理技能。",
            "free": "官方页面将课程标为免费；账号、地区、课程数量和完成额度官方未说明。",
            "category": "免费课程 / 数据科学",
            "source": {
              "name": "Kaggle 官方 Learn 课程页",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "Qwen3-ASR-0.6B：Apache-2.0 许可的开源语音识别权重",
            "summary": "Qwen 官方模型卡提供 Qwen3-ASR 开放模型权重；0.6B 版本支持语音识别和语言识别，模型卡列出中文、英语等语言及方言，并提供本地推理示例。",
            "howTo": "从 Qwen 官方模型卡下载 Qwen3-ASR-0.6B 权重，按示例安装 qwen-asr 并在本地传入音频路径或文件；先用短录音测试识别结果。",
            "impact": "可用于转录自己的访谈、课堂录音或多语种听力练习，并尝试比较机器转录与人工听写；部署需要兼容设备和本地算力。",
            "free": "模型卡标注 Apache-2.0 并提供可下载权重；模型下载、账号、地区及运行硬件要求的统一限制官方未说明，运行需自备设备和算力。",
            "category": "开放模型 / 语音转写",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "New Mexico wanted free childcare for all. This is what's worked — and what hasn't",
            "source": "NPR",
            "published": "2026-11-15",
            "url": "https://www.npr.org/2026/11/15/nx-s1-6040194/new-mexico-free-universal-childcare-families",
            "readingTime": "约 12 分钟（估算）",
            "topic": "社会政策与教育 / 普惠托育的效果、容量与财政取舍",
            "summary": "NPR 回顾新墨西哥州实施普惠托育一周年：符合条件的州内家庭不论收入均可申请，家长称免费托育帮助他们工作、照顾家庭并继续求学。报道用家庭经历、州级统计和政策访谈呈现成效，也指出服务供给不足——部分中心候补名单很长，州内仍有儿童未能进入公共托育。文章随后追溯政策资金来源，解释通胀触发的高收入家庭共付机制，并呈现议员对预算压力的质疑。结尾比较纽约市逐步扩容的路径，指出托育政策既能扩大就业与教育机会，也受制于从业者、名额和财政设计；单纯宣布普惠并不能消除等待。",
            "reason": [
              "主题将儿童照护、家庭就业、教育机会和公共预算联系起来，适合讨论福利政策的公平性与可持续性。",
              "文章从家庭经历切入，继而呈现州级数据、资金机制和不同政治立场，最后比较纽约的渐进方案。",
              "适合考查案例与统计的论证功能、政策资格条件、对立观点，以及作者如何在成效与执行瓶颈之间保持平衡。",
              "可积累 eligible、capacity、waitlist、copayment、provider 等社会政策与教育词汇。",
              "写作可借鉴“政策目标—实际受益—执行瓶颈—财政约束—替代方案”的论证框架，避免把普惠政策简单等同于人人即时可及。"
            ],
            "vocabulary": [
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合条件的"
              },
              {
                "word": "capacity",
                "phonetic": "/kəˈpæsəti/",
                "part": "n.",
                "translation": "接纳能力；容量"
              },
              {
                "word": "waitlist",
                "phonetic": "/ˈweɪtˌlɪst/",
                "part": "n.",
                "translation": "候补名单"
              },
              {
                "word": "rollout",
                "phonetic": "/ˈroʊlˌaʊt/",
                "part": "n.",
                "translation": "逐步实施；推出"
              },
              {
                "word": "reimbursement",
                "phonetic": "/ˌriːɪmˈbɜːrsmənt/",
                "part": "n.",
                "translation": "补偿款；报销款"
              },
              {
                "word": "safeguard",
                "phonetic": "/ˈseɪfˌɡɑːrd/",
                "part": "n.",
                "translation": "保障措施"
              },
              {
                "word": "copayment",
                "phonetic": "/ˈkoʊˌpeɪmənt/",
                "part": "n.",
                "translation": "共同支付额；自付额"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəˌstrʌktʃər/",
                "part": "n.",
                "translation": "基础设施；体系"
              },
              {
                "word": "provider",
                "phonetic": "/prəˈvaɪdər/",
                "part": "n.",
                "translation": "服务提供者"
              },
              {
                "word": "enrollment",
                "phonetic": "/ɪnˈroʊlmənt/",
                "part": "n.",
                "translation": "登记；入学；注册"
              }
            ],
            "sentences": [
              {
                "original": "\"It's not a lack of funding, it's a lack of providers.\"",
                "analysis": [
                  "两个并列分句的核心都是 it is，后半句省略了重复主语 it。",
                  "not a lack of funding 与 a lack of providers 构成否定后纠正，突出问题不在资金而在供给。",
                  "of providers 修饰 lack，具体说明短缺对象；句子是受访者对前文容量问题的概括。",
                  "可迁移结构 not A, but B 的对比思路；原句用重复句式强化纠偏。"
                ],
                "translation": "问题不是缺少资金，而是缺少服务提供者。"
              },
              {
                "original": "\"The childcare help has opened other doors for her, too.\"",
                "analysis": [
                  "主干是 The childcare help has opened doors，使用现在完成时连接过去政策与当前影响。",
                  "other 修饰 doors，表示托育帮助带来原有主要作用之外的新机会。",
                  "for her 指明受益者；句末 too 补充前文所述的工作支持。",
                  "open doors 是“打开机会”的隐喻，可用于表达政策或教育带来的机会扩展。"
                ],
                "translation": "托育帮助也为她打开了其他机会。"
              },
              {
                "original": "\"I'm trying to get my bachelor's.\"",
                "analysis": [
                  "主干是 I'm trying，主语为 I，am trying 使用现在进行时。",
                  "to get my bachelor's 是 try 后的不定式补足语，说明努力的目标。",
                  "my bachelor's 是 bachelor's degree 的省略表达，表示学士学位。",
                  "try to do sth. 表示努力做某事；语境将托育条件与继续求学的可能性联系起来。"
                ],
                "translation": "我正在努力读完学士学位。"
              }
            ]
          },
          {
            "title": "Who makes Sydney Sweeney's American Eagle jeans — and under what conditions?",
            "source": "NPR",
            "published": "2026-11-15",
            "url": "https://www.npr.org/2026/11/15/nx-s1-6013327/sydney-sweeney-jeans-american-eagle-garment-industry",
            "readingTime": "约 10 分钟（估算）",
            "topic": "商业、劳动与环境 / 快时尚供应链中的工人权益和高温风险",
            "summary": "NPR 从一则引发争议的牛仔裤广告切入，把讨论从名人营销转向服装生产者：记者采访了巴基斯坦和孟加拉国约 20 名工人，追踪多个工厂的工资、产量目标、饮水和高温状况。工人描述低薪、加班、难以离开工位和热应激；相关企业则回应称有投诉机制、检查和供水措施，部分说法存在争议。文章接着解释快时尚品牌的高产量、短交期和薄利润如何影响供应商，并把车间高温与气候变化联系起来。结尾介绍孟加拉国和巴基斯坦的国际协议及拟议的热应激检查机制，指出保护工人既是劳权议题，也与供应链责任、生产率和适应高温有关。",
            "reason": [
              "主题结合消费文化、跨国供应链、劳动权利与气候风险，适合分析企业责任和全球化生产。",
              "文章由广告争议转向工人证词，再呈现企业回应、供应链机制和国际协议，形成从个案到结构问题的推进。",
              "适合考查采访证词与企业回应的对照、因果链、来源立场，以及证据如何支持对快时尚的批评。",
              "可积累 garment、production target、hydrate、retrofit、scrutiny 等劳动与环境词汇。",
              "写作可借鉴“消费端现象—生产端证据—结构性原因—制度回应”的展开方式，并明确区分指控、回应与已核实事实。"
            ],
            "vocabulary": [
              {
                "word": "garment",
                "phonetic": "/ˈɡɑːrmənt/",
                "part": "n.",
                "translation": "服装；衣物"
              },
              {
                "word": "workstation",
                "phonetic": "/ˈwɜːrkˌsteɪʃən/",
                "part": "n.",
                "translation": "工作岗位；工位"
              },
              {
                "word": "production target",
                "phonetic": "/prəˈdʌkʃən ˈtɑːrɡɪt/",
                "part": "n. phr.",
                "translation": "生产指标"
              },
              {
                "word": "hydrate",
                "phonetic": "/ˈhaɪdreɪt/",
                "part": "v.",
                "translation": "补充水分"
              },
              {
                "word": "retrofit",
                "phonetic": "/ˈretroʊfɪt/",
                "part": "v.",
                "translation": "改造；加装新设备"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "仔细审查；严格监督"
              },
              {
                "word": "enforceable",
                "phonetic": "/ɪnˈfɔːrsəbəl/",
                "part": "adj.",
                "translation": "可强制执行的"
              },
              {
                "word": "supplier",
                "phonetic": "/səˈplaɪər/",
                "part": "n.",
                "translation": "供应商"
              },
              {
                "word": "overtime",
                "phonetic": "/ˈoʊvərˌtaɪm/",
                "part": "n.",
                "translation": "加班；加班时间"
              },
              {
                "word": "margin",
                "phonetic": "/ˈmɑːrdʒɪn/",
                "part": "n.",
                "translation": "利润空间；差额"
              }
            ],
            "sentences": [
              {
                "original": "\"If you raise your voice, they'll push you out.\"",
                "analysis": [
                  "主句是 they'll push you out，if 引导的条件状语从句是 you raise your voice。",
                  "一般现在时从句与 will 缩写形式 they'll 构成真实条件句，表达受访者描述的可能后果。",
                  "push you out 是动词加宾语加方向补语，意为把某人排挤出去；代词 you 泛指发声的工人。",
                  "条件与结果的因果关系呈现工人不敢申诉的压力，适合分析证词如何解释沉默。"
                ],
                "translation": "“如果你发声，他们就会把你排挤出去。”"
              },
              {
                "original": "\"Workers are not choosing to take these risks.\"",
                "analysis": [
                  "句子主干为 Workers are not choosing，使用现在进行时描述当前处境。",
                  "to take these risks 是 choose 的不定式补足语，说明被否定的选择内容。",
                  "these risks 回指前文提及的高温、健康与工作安全风险。",
                  "not choosing 将风险归因从个人偏好转向外部压力，体现文章的结构性劳动论点。"
                ],
                "translation": "“工人并不是自愿选择承担这些风险。”"
              },
              {
                "original": "\"You've got all those bodies, all that material, all that machinery putting off heat.\"",
                "analysis": [
                  "口语主干是 You've got...，相当于“这里有／存在”，后接三个并列名词短语。",
                  "all those bodies、all that material 和 all that machinery 由 all 加指示限定词构成排比。",
                  "putting off heat 是现在分词短语，补充说明这些人、材料和机器都在散热。",
                  "并列累积加上因果语境，解释工厂内部为何比室外更热；put off 在此意为散发。"
                ],
                "translation": "“那么多工人、材料和机器都在散热。”"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-15",
      "status": "ready",
      "ai": {
        "intro": "本期核验 GitHub Copilot 的新模型、模型退役安排与企业服务器连接方式，并复核可免费用于学习、写作和编程的资源。",
        "updates": [
          {
            "event": "Gemini 4 Hydrogen 上线 GitHub Copilot",
            "summary": "GitHub 于 2026-11-13 宣布，Google 的 Gemini 4 Hydrogen Flash 模型已在 Copilot 中正式提供，面向快速、有效率的代理式编码、工具使用和多步骤工作流，并改进了相较 Gemini 3.8 Flash 的指令遵循。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI、github.com 等已支持的 Copilot 端打开模型选择器，选 Gemini 4 Hydrogen 后用小型课程代码任务测试；若尚未出现，官方说明正在逐步开放，可稍后再检查。",
            "impact": "可让它先拆解课程项目的多步骤编码任务、调用工具或协助定位问题；把它生成的代码放进本地测试，并检查每一步，不要直接提交未经验证的改动。",
            "free": "公告列出的可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise，未列 Free 计划；按模型供应商公开价格计费，具体价格见 Copilot 模型计费页。需要相应 Copilot 账户，地区资格官方未说明，功能逐步开放。",
            "category": "编程助手 / 模型更新",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-13",
              "url": "https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/"
            }
          },
          {
            "event": "GitHub Copilot 将于 12 月 14 日下架指定模型",
            "summary": "GitHub 于 2026-11-13 公布，2026-12-14 起在 Copilot 各体验中退役 Claude Fable 5、Claude Haiku 4.5、Gemini 3.8 Flash、Gemini 4 Argon、Grok 4.6 和 Kimi K3，并为前五者分别列出替代模型；Kimi K3 的替代项尚待公布。年度订阅个人用户仍可使用 Claude Haiku 4.5。",
            "howTo": "如果课程项目或编辑器设置仍选用上述模型，先查看 Copilot Chat、内联编辑、代理模式和代码补全的模型配置，再按公告切换到建议的替代模型；Kimi K3 用户需等待官方后续通知。",
            "impact": "提前切换可避免 12 月 14 日后课程仓库脚本、提示词或个人开发流程因模型不可用而中断；保留一份模型无关的任务说明，便于切换时复测结果。",
            "free": "公告给出的退役日期为 2026-12-14；除年度订阅个人用户的 Claude Haiku 4.5 例外外，调整覆盖 Copilot 各体验。具体免费计划、地区和调用额度未在公告中说明。",
            "category": "编程助手 / 模型生命周期",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-13",
              "url": "https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/"
            }
          },
          {
            "event": "Copilot 应用正式支持连接 GitHub Enterprise Server",
            "summary": "GitHub 于 2026-11-13 将 Copilot 应用连接 GitHub Enterprise Server（GHES）的功能从选择加入预览版转为正式可用；连接后可在应用中处理 GHES 远程仓库、议题和拉取请求。",
            "howTo": "先用 GitHub.com 或 GHE.com 账户登录 Copilot 应用，再进入 Settings > Accounts > Add account，选择 GitHub Enterprise Server 并添加服务器账户；确认应用版本为 1.2.0 或更高。",
            "impact": "如果学校实验室或团队把课程仓库托管在 GHES，学生可在 Copilot 应用里查看并处理相关仓库、议题和 PR；需注意官方明确说明 GHES 云端会话不可用。",
            "free": "变更日志未说明该功能的价格、免费计划资格、地区或额度；需先登录 GitHub.com 或 GHE.com 账户，且要求 Copilot 应用 1.2.0+。GHES 云端会话不可用。",
            "category": "编程助手 / 企业仓库协作",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-13",
              "url": "https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app/"
            }
          }
        ],
        "deals": [
          {
            "event": "ChatGPT Free：免费日常问答与有限工具使用",
            "summary": "OpenAI 的个人 Free 方案标价为每月 0 美元，提供日常文字对话；文件上传、图像生成、语音、深度研究、记忆与上下文、Codex 等功能有使用限制。",
            "howTo": "打开 ChatGPT 定价页，选择 Get Free 并按页面提示进入账户；可用它梳理课程概念、列出论文提纲或解释英文段落，再回到教材和原文核对。",
            "impact": "适合先做低成本的概念问答、写作结构练习和复习计划；遇到上传或研究额度限制时，改用分段提问并保留原始资料核验答案。",
            "free": "Free 方案为 0 美元/月；文字对话标为不限量但受滥用防护约束，文件、图片、语音、深度研究等为有限使用。此定价页未说明免费账号的地区名单、注册具体要求及各工具的准确额度。",
            "category": "免费聊天助手 / 学习与写作",
            "source": {
              "name": "OpenAI ChatGPT 官方定价页",
              "published": "官方未说明",
              "url": "https://chatgpt.com/pricing/"
            }
          },
          {
            "event": "Gemini 免费方案：Google 账号可用的学习助手",
            "summary": "Google 的 Gemini Free 方案为每月 0 美元，需 Google 账号；官方方案页列出 Gemini 应用、Flash-Lite、图像生成与编辑、Deep Research、Canvas、Gemini Notebook 等功能。",
            "howTo": "打开 Gemini 官方方案页，选择 Free 后用 Google 账号进入 Gemini；可将一节课的概念、阅读提纲或学习计划拆成具体问题，并逐项核对回答。",
            "impact": "可在不订阅付费计划的情况下进行课程概念解释、资料初步整理和图像草稿尝试；免费方案的模型与功能额度有限，重要结论仍应查阅原始材料。",
            "free": "官方列价为 0 美元/月，要求 Google 账号；方案页说明所列功能可用，但未给出 Free 的精确用量、地区名单或功能配额。",
            "category": "免费聊天助手 / 多模态学习",
            "source": {
              "name": "Google Gemini 官方方案页",
              "published": "官方未说明",
              "url": "https://gemini.google/subscriptions/"
            }
          },
          {
            "event": "Gemini Notebook（NotebookLM）免费研究笔记本",
            "summary": "Google 帮助页说明，可用 Gmail 账号免费注册 Gemini Notebook（NotebookLM）；免费方案上限为每位用户 100 本笔记本、每本 50 个非笔记来源、每本 500 个笔记来源，并支持所有用户使用自定义聊天和分析功能。",
            "howTo": "用 Gmail 账号打开 Gemini Notebook，新建课程笔记本并添加获准使用的讲义或阅读材料，再围绕材料提问、整理复习要点；确认每本来源数不超过免费方案上限。",
            "impact": "可把多份课程阅读材料集中起来做主题比较、概念复习和论文前期梳理；上传前检查课程和版权要求，输出中的引文与事实须回到原文确认。",
            "free": "可用 Gmail 账号免费注册；免费层为 100 本/用户、50 个非笔记来源/本、500 个笔记来源/本，额度可能变动。网页端仅在官方支持的国家和地区、达到当地同意年龄的用户可用；高级分享为付费功能。",
            "category": "免费研究工具 / 资料问答",
            "source": {
              "name": "Google Gemini Notebook 官方帮助中心",
              "published": "官方未说明",
              "url": "https://support.google.com/gemininotebook/answer/16213268?hl=en"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 的 Copilot Free 方案价格为 0 美元，官方列出每月 2,000 次代码补全、有限的聊天与代理使用，并说明无需信用卡；已验证学生另可使用 GitHub Copilot Student 方案。",
            "howTo": "用 GitHub 账号进入 Copilot 官方方案页，选择 Free，再在 VS Code 或其他支持的编辑器安装 Copilot 扩展并登录；先让它解释一段课程代码或补全小型练习，并运行测试。",
            "impact": "可为入门编程、样板代码和报错解释提供免费辅助；把月度补全次数留给重复性编码，聊天和代理额度有限，生成代码须逐行理解并测试。",
            "free": "Free 为 0 美元且无需信用卡；每月 2,000 次代码补全，聊天与代理使用有限。GitHub 表示已验证学生可使用 Student 方案；Free 的地区名单和聊天/代理确切额度官方未说明。",
            "category": "免费编程助手 / 学生权益",
            "source": {
              "name": "GitHub Copilot 官方方案页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Beauty advent calendars can cost hundreds - but are they value for money?",
            "source": "BBC",
            "published": "2026-11-15",
            "url": "https://www.bbc.co.uk/news/articles/cqn83l442724o",
            "readingTime": "约 4 分钟（估算）",
            "topic": "消费与文化 / 美妆降临日历的营销与性价比",
            "summary": "文章以消费者 Julia 对美妆降临日历的挑选标准开篇，借近期 Skims 日历遭批评并退款的事件引出核心问题：高价礼盒是否真的划算。报道先呈现购买者视角：有人看重按小包装试用和单品折扣，有人认为多数产品不合心意；接着说明品牌的限量话术和网红开箱如何制造稀缺感与惊喜，并引用 Ipsos 数据称美妆日历约占全部降临日历销量的 15%。随后，消费者和美学专家反驳“标价总和便宜即划算”的判断，指出不需要或不会用完的商品会削弱实际价值。文章以人们交换不需要的产品收尾，整体结论是性价比取决于个人需求和实际使用，而非表面折扣。",
            "reason": [
              "文章讨论节日消费、营销影响和理性购物，适合消费文化与商业类阅读主题。",
              "结构由个人购买经历引题，转向市场数据与营销策略，再并置不同消费者和专家意见，最后回到实际使用价值。",
              "可考查人物观点匹配、数据所支持的结论、转折词作用，以及作者如何呈现正反评价。",
              "词汇涵盖消费选择、广告策略和价值判断，可用于理解消费者行为类文章。",
              "写作可借鉴“生活案例—市场证据—异议与专家判断—限定结论”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "appeal",
                "phonetic": "/əˈpiːl/",
                "part": "n.",
                "translation": "吸引力；感染力"
              },
              {
                "word": "unsentimental",
                "phonetic": "/ˌʌnˌsentɪˈmentl/",
                "part": "adj.",
                "translation": "不感情用事的；务实的"
              },
              {
                "word": "splurge",
                "phonetic": "/splɜːdʒ/",
                "part": "v.",
                "translation": "挥霍；大手笔消费"
              },
              {
                "word": "sophisticated",
                "phonetic": "/səˈfɪstɪkeɪtɪd/",
                "part": "adj.",
                "translation": "复杂精细的；老练的"
              },
              {
                "word": "infectious",
                "phonetic": "/ɪnˈfekʃəs/",
                "part": "adj.",
                "translation": "有感染力的；易传播的"
              },
              {
                "word": "savvier",
                "phonetic": "/ˈsæviər/",
                "part": "adj.",
                "translation": "更精明的；更懂行的"
              },
              {
                "word": "menial",
                "phonetic": "/ˈmiːniəl/",
                "part": "adj.",
                "translation": "微不足道的；乏味的"
              },
              {
                "word": "bombarded with",
                "phonetic": "/bɑːmˈbɑːrdɪd wɪð/",
                "part": "phr.",
                "translation": "被大量……信息轰炸"
              },
              {
                "word": "dwindle",
                "phonetic": "/ˈdwɪndl/",
                "part": "v.",
                "translation": "逐渐减少；衰减"
              },
              {
                "word": "mark-up",
                "phonetic": "/ˈmɑːrk ʌp/",
                "part": "n.",
                "translation": "加价幅度；溢价"
              }
            ],
            "sentences": [
              {
                "original": "But she takes quite an unsentimental approach.",
                "analysis": [
                  "主干为 she takes an approach，主语 she、谓语 takes、宾语 an approach。",
                  "句首 But 与前文“容易被吸引”形成转折，提示人物采取了不同于冲动消费的做法。",
                  "quite 修饰 an unsentimental approach，unsentimental 描写其务实、不被情绪左右。",
                  "可借鉴 take a ... approach 表达某人处理问题的方式，并用 But 引入对照。"
                ],
                "translation": "但她采取了相当务实、不感情用事的做法。"
              },
              {
                "original": "But in the face of that tsunami of marketing, customers seem to be getting savvier.",
                "analysis": [
                  "主句主干是 customers seem to be getting savvier，customers 为主语，seem 为系动词性谓语。",
                  "in the face of that tsunami of marketing 是句首介词短语，表示面对铺天盖地的营销。",
                  "that tsunami of marketing 使用海啸比喻营销声势；getting savvier 表示消费者逐渐变得更精明。",
                  "But 引出与营销影响力相反的趋势；seem to 表示作者谨慎判断而非绝对断言。"
                ],
                "translation": "然而，面对海量营销宣传，消费者似乎正变得更加精明。"
              },
              {
                "original": "But it is exceptionally unlikely that you would use all the products inside them, so they're probably not worth it.",
                "analysis": [
                  "句子由 so 连接因果两部分：前半指出全部用完的可能性极低，后半推出“不太值得”的判断。",
                  "前半采用形式主语 it；真正的内容由 that 引导的从句 that you would use all the products inside them 承担。",
                  "exceptionally 修饰 unlikely，强化“极不可能”；would use 表示假设情境中的使用行为。",
                  "so 引出结论，probably 则限制结论强度；可借鉴 it is unlikely that... 表达审慎推断。"
                ],
                "translation": "但你极不可能用完里面的所有产品，因此它们可能并不值得购买。"
              }
            ]
          },
          {
            "title": "Indigenous students retrace Lewis and Clark’s historic journey: ‘We can’t protect what we cannot see’",
            "source": "The Guardian",
            "published": "2026-11-14",
            "url": "https://www.theguardian.com/us-news/2026/nov/14/lewis-clark-indigenous-students",
            "readingTime": "约 8 分钟（估算）",
            "topic": "环境与社会 / 原住民学生、生态调查与知识主权",
            "summary": "文章把 19 世纪 Lewis 与 Clark 探险队的自然观察放在殖民扩张背景中，指出原住民社群早已熟悉当地生态，且其在早期探险中的贡献常被淡化。随后报道 Smithsonian 与部落学院合作，以沿线相机陷阱重新调查野生动物，并让部落学生参与数据采集、解释与有薪实习。文章也呈现社群对数据外流和土地被研究者利用的担忧，说明参与者如何尝试把传统生态知识与新数据结合，以支持本地保护决策。报道接着介绍记录到的动物变化、数据缺口及 AI 识别后由志愿科学家验证的流程；项目数据完成后将开放给研究者和土地管理者。结尾回到学生的职业选择与主权意识，强调由社群参与研究不仅补充生态资料，也使其对土地与知识的决策权得到更多承认。",
            "reason": [
              "文章结合生物多样性、原住民知识与研究伦理，覆盖环境保护和社会公平等常见议题。",
              "行文先回顾历史叙事，再介绍调查设计与社群顾虑，继而呈现数据发现，最后落到知识主权与保护意义。",
              "可考查历史背景的作用、引语态度、调查方法与结论之间的关系，以及转折如何修正单一叙事。",
              "词汇涉及生态研究、社区自治和证据可靠性，适合积累跨学科社会议题表达。",
              "写作可借鉴“历史语境—现实项目—潜在风险—参与者收益”的层次组织，并区分数据与价值判断。"
            ],
            "vocabulary": [
              {
                "word": "dispatch",
                "phonetic": "/dɪˈspætʃ/",
                "part": "v.",
                "translation": "派遣；派出"
              },
              {
                "word": "ardent",
                "phonetic": "/ˈɑːdənt/",
                "part": "adj.",
                "translation": "热情的；热切的"
              },
              {
                "word": "meticulous",
                "phonetic": "/məˈtɪkjələs/",
                "part": "adj.",
                "translation": "一丝不苟的；极仔细的"
              },
              {
                "word": "pivotal",
                "phonetic": "/ˈpɪvətl/",
                "part": "adj.",
                "translation": "关键的；核心的"
              },
              {
                "word": "invasion",
                "phonetic": "/ɪnˈveɪʒn/",
                "part": "n.",
                "translation": "入侵；侵略"
              },
              {
                "word": "downplay",
                "phonetic": "/ˌdaʊnˈpleɪ/",
                "part": "v.",
                "translation": "淡化；轻描淡写"
              },
              {
                "word": "stipend",
                "phonetic": "/ˈstaɪpend/",
                "part": "n.",
                "translation": "津贴；实习补助"
              },
              {
                "word": "integral",
                "phonetic": "/ɪnˈteɡrəl/",
                "part": "adj.",
                "translation": "不可或缺的；构成整体的"
              },
              {
                "word": "sovereignty",
                "phonetic": "/ˈsɒvrənti/",
                "part": "n.",
                "translation": "主权；自主权"
              },
              {
                "word": "overdue",
                "phonetic": "/ˌəʊvəˈdjuː/",
                "part": "adj.",
                "translation": "迟来的；早该得到的"
              }
            ],
            "sentences": [
              {
                "original": "These observations were pivotal in shaping an early understanding of North American biodiversity.",
                "analysis": [
                  "主干是 These observations were pivotal，These observations 为主语，were pivotal 为系表结构。",
                  "in shaping an early understanding 是介词短语，说明这些观察在哪方面具有关键作用。",
                  "shaping 为动名词，后接宾语 an early understanding；of North American biodiversity 补充说明理解的内容。",
                  "句子把历史记录与知识形成相连，可借鉴 be pivotal in doing 表达某事对某过程至关重要。"
                ],
                "translation": "这些观察对早期形成北美生物多样性认知起到了关键作用。"
              },
              {
                "original": "These “discoveries” were hardly new to the Indigenous tribes who had occupied the Great Plains and west for millennia, however.",
                "analysis": [
                  "主干为 These “discoveries” were hardly new，主语是带引号的 discoveries，表语为 hardly new。",
                  "to the Indigenous tribes 是说明“对谁而言并不新鲜”的介词短语。",
                  "who had occupied... 是修饰 tribes 的定语从句；过去完成时 had occupied 强调其长期居住先于相关探险叙事。",
                  "hardly 表示“几乎不”，句末 however 标示转折；引号也提示作者对“发现”这一说法保持距离。"
                ],
                "translation": "然而，对早已在大平原和西部生活了数千年的原住民部族而言，这些所谓的“发现”并不新鲜。"
              },
              {
                "original": "We cannot protect what we cannot see or don’t understand.",
                "analysis": [
                  "句子主干为 We cannot protect...，主语 we 和情态动词 cannot 表达集体能力或条件限制。",
                  "what we cannot see or don’t understand 是 what 引导的自由关系从句，整体充当 protect 的宾语。",
                  "从句内部由 or 并列 cannot see 与 don’t understand，形成“看不见/不了解”的递进式并列。",
                  "重复 cannot 构成简洁有力的平行结构；可用于概括证据、认知与治理行动之间的关系。"
                ],
                "translation": "我们无法保护自己看不见或不了解的事物。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-14",
      "status": "ready",
      "ai": {
        "intro": "本期核验 Gemini 的多模态判定 API、Gemini 4 Carbon 和 Android 端新功能，并整理可免费学习、试用或下载的资源。",
        "updates": [
          {
            "event": "Gemini Decisions API：一次请求完成多项多模态判定",
            "summary": "Google 于 2026-11-11 发布 Gemini Decisions API 和 Gemini Decision 1。它可处理文本、图像、音频、视频和 PDF，在单次请求中评估至多 1,000 个是/否、选项或量表问题，并返回概率及置信度；AI Studio 提供用于原型开发的免费层。",
            "howTo": "在 Google AI Studio 创建 API key，打开 Decisions API 文档，使用 Python、JavaScript 或 REST 指南调用 `gemini-decision-1`；为同一输入设置是/否、选择题或评分标准，并查看返回的置信度。",
            "impact": "可用于课程项目中给资料片段分类、按自定义量表初筛文本，或对图片做有限选项判断；将低置信度结果交由人工复核，不把分类分数当作事实结论。",
            "free": "Google 称 API 有免费层可用于原型；付费价格为每百万输入 token 0.10 美元、输出 token 0 美元。免费层的具体配额、地区资格、账号条件及开放节奏官方未说明；调用需在 AI Studio 创建 API key。",
            "category": "生成式 AI / 多模态 API",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-11",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
            }
          },
          {
            "event": "Gemini 4 Carbon 开放给付费开发者与 Ultra 用户",
            "summary": "Google 于 2026-11-10 宣布 Gemini 4 Carbon 面向付费开发者、企业及消费者开放，重点面向长流程、多步骤编码、知识工作和科学推理；消费者端通过 Google AI Ultra 分批获得 Gemini 应用、Search AI Mode 与 Antigravity 使用权限。",
            "howTo": "开发者可在 Google AI Studio 选择 `gemini-4-carbon` 并按 API 文档调用；持有 Google AI Ultra 的用户可在开放后到 Gemini 应用、Search AI Mode 或 Antigravity 试用。",
            "impact": "适合学生在复杂编程作业中让模型协助分解调试步骤，或先整理多份资料形成研究草稿；代码、引用和推理仍需用课程材料或测试核对。",
            "free": "官方列出的 API 价格为每百万输入 token 2 美元、输出 token 10 美元，API 面向付费开发者和企业；Gemini 应用、Search AI Mode 和 Antigravity 正向 Google AI Ultra 订阅者开放。免费使用资格、配额、地区和完整 rollout 时间官方未说明。",
            "category": "生成式 AI / Gemini 模型",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-10",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
            }
          },
          {
            "event": "Gemini Intelligence 扩展至更多 Android 设备并增加小组件功能",
            "summary": "Google 于 2026-11-10 公布 Android 端 Gemini Intelligence 新功能并扩展设备支持：Pixel 10 系列获得相关能力，Motorola signature 27 将加入；Create My Widget 可按文字描述生成个性化小组件并读取 Gmail、Calendar 和 Search 信息，另有设备协助功能及扩展至英国、印度、日本的任务自动化。",
            "howTo": "在符合条件的 Pixel 10 或其他支持设备上留意 Gemini Intelligence 更新；Create My Widget 将分批推出，开放后用自然语言描述所需的小组件。任务自动化可在 Gemini 应用中检查地区可用性。",
            "impact": "学生可尝试把课程日程、邮件和搜索信息汇总到主屏小组件，也可让设备协助完成手机设置；使用前检查数据权限，并确认功能已在自己的设备和地区开放。",
            "free": "官方称部分功能仅在指定国家和语言提供，部分仅限 18 岁以上；设备、语言和地区会影响可用性，部分功能高用量可能需要订阅。Create My Widget 预计数周内分批推出；具体费用、固定配额、完整地区清单和账号资格官方未说明。",
            "category": "生成式 AI / Android 助手",
            "source": {
              "name": "Google 官方博客（Android）",
              "published": "2026-11-10",
              "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence-november-features-devices/"
            }
          }
        ],
        "deals": [
          {
            "event": "Kaggle Learn：免费数据科学与机器学习短课程",
            "summary": "Kaggle Learn 官方课程页提供无费用的实用课程，涵盖 Python、数据可视化、Pandas 等数据技能，适合按短课逐步练习。",
            "howTo": "打开 Kaggle Learn，选择 Python、Pandas 或数据可视化课程，按课程单元阅读说明并完成练习。",
            "impact": "可用来补齐数据处理基础，再把课程方法用于论文数据清理、图表制作或入门机器学习练习。",
            "free": "官方将这些课程标为 no-cost；课程数量、账号或注册要求、地区限制及完成额度官方未说明。",
            "category": "免费课程 / 数据科学",
            "source": {
              "name": "Kaggle 官方 Learn 课程页",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "AWS Educate：免费云计算与 AI 学习路径和动手实验",
            "summary": "AWS Educate 面向个人免费提供自定进度的云计算与 AI 学习资源，包含存储、计算、网络、数据库和云运维等实践课程及数字徽章。",
            "howTo": "进入 AWS Educate 注册页面，用电子邮箱创建学习者账号，再从课程目录选择云计算或 AI 相关学习路径和实验。",
            "impact": "适合为云服务、数据库和 AI 应用课程建立入门概念，并通过实验练习基础的云端操作；开始前确认实验内容不会要求额外付费的 AWS 服务。",
            "free": "官方说明年满 13 岁的学习者可用电子邮箱注册，无需信用卡，并可使用免费课程和动手实验；地区、实验配额和截止日期官方未说明。",
            "category": "免费 AI 学习 / 云计算教育",
            "source": {
              "name": "AWS 官方教育项目页",
              "published": "官方未说明",
              "url": "https://aws.amazon.com/education/awseducate/"
            }
          },
          {
            "event": "Qwen3-Next-80B-A3B-Instruct：Apache 2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-Next-80B-A3B-Instruct 的模型文件和 Transformers 使用示例；仓库元数据显示模型采用 Apache-2.0 许可证。模型总参数量为 80B，卡片说明其原生上下文长度为 262,144 tokens。",
            "howTo": "从模型卡的 Files and versions 获取文件，或按 Quickstart 安装最新版 Transformers 并加载 `Qwen/Qwen3-Next-80B-A3B-Instruct`；本地部署前先确认可用存储和算力。",
            "impact": "可在课程项目或本地实验中测试开放模型的文本生成与长文档处理，并比较不同模型的输出；80B 总参数模型对本地设备要求高，实际部署需自行评估。",
            "free": "模型仓库提供可下载权重，许可证为 Apache-2.0；模型文件下载配额、账号和地区要求及最低运行硬件官方未说明，运行所需设备和算力需自备。",
            "category": "开放模型 / 下载权重",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
            }
          },
          {
            "event": "Gemini Decisions API：AI Studio 免费层可用于原型开发",
            "summary": "Gemini Decisions API 官方发布页确认 API 提供无费用层，可在 Google AI Studio 用于原型；该端点可对多模态输入执行是/否、选项和评分判定。",
            "howTo": "在 Google AI Studio 打开 Decisions API Playground 体验示例，或创建 API key 后依官方文档将输入和判定问题提交给 `gemini-decision-1`。",
            "impact": "可低成本验证课程项目中的文本分类、图像核验或量表评分流程，再决定是否扩展为正式应用。",
            "free": "官方称 API 有免费层用于原型，付费价为每百万输入 token 0.10 美元、输出 token 0 美元；免费额度、地区和账号资格官方未说明。",
            "category": "免费 API / 多模态判定",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-11",
              "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Vanessa delivers pizza after work to pay rent. Many Australians are ‘scrambling’ as cracks appear in the economy",
            "source": "The Guardian",
            "published": "2026-11-13",
            "url": "https://www.theguardian.com/australia-news/2026/nov/14/vanessa-delivers-pizza-after-work-to-pay-rent-many-australians-are-scrambling-as-cracks-appear-in-the-economy",
            "readingTime": "约 6 分钟（估算）",
            "topic": "经济与社会 / 澳大利亚生活成本、就业与住房压力",
            "summary": "文章以悉尼白领 Vanessa Freitas 下班后兼职送披萨、仍无力购房的经历切入，呈现高房租与家庭预算压力。随后将个人故事扩展到宏观背景：近期利率上升、物价持续走高和裁员使公众对经济更悲观，求助热线接到创纪录的来电，部分家庭开始拖欠贷款、削减医疗和日常开支。报道再并置不同指标：消费和部分经济活动仍有韧性，但消费者信心接近衰退时期水平，失业率上行、企业裁员也加剧担忧。结尾引用专家判断澳大利亚可能避免衰退和大规模失业，却仍会面临求职时间拉长、工资增长放缓；由此突出宏观数据稳定与家庭切身压力并存。",
            "reason": [
              "住房负担、通胀、利率与就业是经济类阅读常见主题，文章用个人生活讲述引出宏观指标和社会影响。",
              "论述依次采用人物故事、求助数据、信心与就业指标、专家预测，体现由个案到整体再回到前景判断的结构。",
              "适合考查细节与数据对应、转折关系、引语功能，以及“经济并未衰退”与“家庭感受恶化”如何并置。",
              "可学习 optimistic、arrears、deteriorate、cohesion 等表达，区分经济指标、情绪和家庭财务状况。",
              "写作可借鉴以具体人物导入议题，再用多类证据补充、对照并以审慎预测收束的方式。"
            ],
            "vocabulary": [
              {
                "word": "optimistic",
                "phonetic": "/ˌɑːptɪˈmɪstɪk/",
                "part": "adj.",
                "translation": "乐观的"
              },
              {
                "word": "white-collar",
                "phonetic": "/ˌwaɪt ˈkɑːlər/",
                "part": "adj.",
                "translation": "白领的；办公室工作的"
              },
              {
                "word": "barely",
                "phonetic": "/ˈberli/",
                "part": "adv.",
                "translation": "几乎不；勉强"
              },
              {
                "word": "fuel",
                "phonetic": "/ˈfjuːəl/",
                "part": "v.",
                "translation": "加剧；助长"
              },
              {
                "word": "slump",
                "phonetic": "/slʌmp/",
                "part": "v.",
                "translation": "骤降；大幅下滑"
              },
              {
                "word": "helpline",
                "phonetic": "/ˈhelplaɪn/",
                "part": "n.",
                "translation": "求助热线"
              },
              {
                "word": "deteriorate",
                "phonetic": "/dɪˈtɪriəreɪt/",
                "part": "v.",
                "translation": "恶化；变差"
              },
              {
                "word": "arrears",
                "phonetic": "/əˈrɪrz/",
                "part": "n.",
                "translation": "欠款；逾期款项"
              },
              {
                "word": "cohesion",
                "phonetic": "/koʊˈhiːʒən/",
                "part": "n.",
                "translation": "凝聚力；团结"
              },
              {
                "word": "redundancy",
                "phonetic": "/rɪˈdʌndənsi/",
                "part": "n.",
                "translation": "裁员；冗余"
              }
            ],
            "sentences": [
              {
                "original": "“We are both on wages that should be enough, right?”",
                "analysis": [
                  "句子主干是 We are on wages；both 表示说话者和伴侣两人都处于这一收入状况。",
                  "that should be enough 是定语从句，修饰 wages，说明这份工资按理应足够生活。",
                  "right? 是附加疑问式的确认请求，表现说话者对现实与预期落差的困惑。",
                  "should be enough 将“合理预期”与下文经济吃紧形成对照，可用于表达预期落空。"
                ],
                "translation": "“我们两个人的工资按理都该够用，对吧？”"
              },
              {
                "original": "With a long wait ahead, households are starting to ask how much worse it will get.",
                "analysis": [
                  "主句主干是 households are starting to ask，households 是主语，are starting to ask 是谓语。",
                  "句首 With a long wait ahead 是介词短语，交代未来仍需等待这一背景。",
                  "how much worse it will get 是 ask 的宾语从句，疑问词 how much 修饰比较级 worse。",
                  "背景状语与间接疑问结合，呈现不确定感，可用于引出趋势和公众担忧。"
                ],
                "translation": "在还要等待很久的情况下，家庭开始追问，情况还会恶化到什么程度。"
              },
              {
                "original": "The RBA expects the economy to grow by at least 1% next year, helped by steady spending.",
                "analysis": [
                  "主句主干是 The RBA expects the economy to grow，expect 后接宾语 economy 和不定式补语 to grow。",
                  "by at least 1% next year 补充增长幅度与时间，at least 表示最低预期。",
                  "helped by steady spending 是过去分词短语，补充说明预期增长的支撑因素。",
                  "该句先陈述预测、再交代原因，适合练习“观点/预测 + 依据”的经济报道句式。"
                ],
                "translation": "澳大利亚储备银行预计，受稳定消费支撑，经济明年将至少增长 1%。"
              }
            ]
          },
          {
            "title": "GPs are now ‘prescribing’ time in nature. Is it likely to improve your health?",
            "source": "The Conversation",
            "published": "2026-11-12",
            "url": "https://theconversation.com/gps-are-now-prescribing-time-in-nature-is-it-likely-to-improve-your-health-296469",
            "readingTime": "约 5 分钟（估算）",
            "topic": "健康与社会 / 自然接触、公共卫生与健康公平",
            "summary": "文章介绍澳大利亚全科医生组织认可自然处方资源，建议人们每天花约 20 分钟留意自然环境，并追问这种建议是否真能改善健康。作者先梳理研究证据：一项涵盖 47 项试验的综述中，部分研究发现心理健康改善；森林活动研究也观察到血压、心率变异性和压力激素方面的变化，但不同指标结果不一。文章随后区分“接触自然与健康相关”与“医生开出自然处方能带来因果改善”：每周两小时的建议主要来自观察性研究，不能证明时间本身导致健康变好；处方项目的实施方式和测量标准也不一致。结尾指出安全绿地、时间、健康状况和当地活动资源影响参与机会，因此自然处方可能有益，但仍需更严格研究、个性化转介和更公平的环境支持。",
            "reason": [
              "文章讨论健康促进、预防医学与环境公平，兼具社会政策和日常生活主题，适合健康类议论文阅读。",
              "结构从新做法提出问题，回顾研究证据，再辨析相关与因果，最后讨论可及性并给出审慎结论。",
              "适合考查研究结果与作者结论的区别、让步转折、数据证据边界，以及作者如何限定主张。",
              "可积累 endorse、rigorous、observational、exposure 和 referral 等学术健康词汇。",
              "写作可借鉴“呈现潜在益处—说明证据限制—讨论实施条件—提出公平性要求”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "endorse",
                "phonetic": "/ɪnˈdɔːrs/",
                "part": "v.",
                "translation": "认可；支持"
              },
              {
                "word": "wellbeing",
                "phonetic": "/ˌwelˈbiːɪŋ/",
                "part": "n.",
                "translation": "身心健康；幸福感"
              },
              {
                "word": "rigorous",
                "phonetic": "/ˈrɪɡərəs/",
                "part": "adj.",
                "translation": "严谨的；严格的"
              },
              {
                "word": "consistent",
                "phonetic": "/kənˈsɪstənt/",
                "part": "adj.",
                "translation": "一致的；稳定的"
              },
              {
                "word": "observational",
                "phonetic": "/ˌɑːbzərˈveɪʃənəl/",
                "part": "adj.",
                "translation": "观察性的"
              },
              {
                "word": "exposure",
                "phonetic": "/ɪkˈspoʊʒər/",
                "part": "n.",
                "translation": "接触；暴露"
              },
              {
                "word": "association",
                "phonetic": "/əˌsoʊsiˈeɪʃən/",
                "part": "n.",
                "translation": "关联；联系"
              },
              {
                "word": "prescribing",
                "phonetic": "/prɪˈskraɪbɪŋ/",
                "part": "n./gerund",
                "translation": "开具处方；建议采用"
              },
              {
                "word": "accessible",
                "phonetic": "/əkˈsesəbəl/",
                "part": "adj.",
                "translation": "可获得的；易到达的"
              },
              {
                "word": "referral",
                "phonetic": "/rɪˈfɜːrəl/",
                "part": "n.",
                "translation": "转介；转诊"
              }
            ],
            "sentences": [
              {
                "original": "The strength of evidence varies depending on the activity and health outcome being measured.",
                "analysis": [
                  "句子主干是 The strength of evidence varies，主语为 evidence 的 strength，谓语为 varies。",
                  "depending on the activity and health outcome 是现在分词短语，补充说明证据强弱取决于什么。",
                  "being measured 是现在分词被动结构，修饰 activity and health outcome，强调被评估的对象。",
                  "该句以限定语避免一概而论，可借 varies depending on 表达结论受条件影响。"
                ],
                "translation": "证据的强弱会因所考察的活动和健康结果而有所不同。"
              },
              {
                "original": "However, this was an observational study.",
                "analysis": [
                  "主干为 this was an observational study，this 指代前文提及的每周两小时与健康状况相关的研究结果。",
                  "However 是句首转折副词，提示读者重新评估前文看似明确的发现。",
                  "observational 作定语限定 study 的研究设计类型，暗示证据可以显示关联而非直接证明因果。",
                  "短句独立成句形成强调，可用于引出研究局限或对前述证据作审慎限定。"
                ],
                "translation": "然而，这是一项观察性研究。"
              },
              {
                "original": "The challenge is ensuring everyone has opportunities to enjoy the benefits.",
                "analysis": [
                  "句子主干是 The challenge is ensuring...，主语为 The challenge，系动词 is 后接动名词短语作表语。",
                  "everyone has opportunities to enjoy the benefits 是 ensuring 的宾语从句，说明需要确保的具体内容。",
                  "to enjoy the benefits 是不定式，作 opportunities 的补足成分，表达机会所指向的行动。",
                  "这一结构把讨论重点从“是否有效”转向“如何让所有人都能受益”，适合提出政策实施难题。"
                ],
                "translation": "真正的挑战在于确保每个人都有机会享受到这些益处。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-13",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Gemini 4 Hydrogen 进入 Gemini 与 Search、Google Flow 新增创作工具，并复核学生可用的免费模型、算力和学习服务。",
        "updates": [
          {
            "event": "Gemini 4 Hydrogen 上线 Gemini 应用、Search 与开发平台",
            "summary": "Google 于 11 月 12 日发布 Gemini 4 Hydrogen，定位为面向日常编码和 agent 工作流的快速模型，提供四档思考级别。模型开始全球上线至 Gemini 应用、Google Search、AI Studio、Gemini API 等；免费 Gemini 用户通过自动模型选择，在系统判断合适时可用 Hydrogen。",
            "howTo": "在 Gemini 应用保留自动模型选择并提出需要多步推理的课程或编程问题；也可直接用 Google Search 提问，比较答案中的来源链接。开发者可在 AI Studio 的 Hydrogen 模型页试用，API 调用先查看价格和额度。",
            "impact": "学生可让它协助拆解编程任务、解释复杂概念、整理长资料或起草学习提纲；用 Search 初筛资料时仍要打开原始链接核对，代码和事实结论也应自行验证。",
            "free": "Google 公告称全球上线；Gemini 免费用户通过自动模型选择，在系统认为适合时可使用 Hydrogen，并非承诺每次提问都调用该模型。Gemini API 公布标准输入每百万 token 1.50 美元、输出 7.50 美元；Antigravity 和 Sheets 中的 Hydrogen 需 Google AI Pro 或 Ultra。API 免费资格、配额和账号条件未在公告中说明。",
            "category": "生成式 AI / Gemini 模型",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-12",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
            }
          },
          {
            "event": "Google Search 全球接入 Gemini 4 Hydrogen",
            "summary": "Google 于 11 月 12 日宣布 Search 开始使用 Gemini 4 Hydrogen。更新强调更能理解多部分、自然表达或有拼写错误的问题，改进并行扩展相关查询与链接发现，并提供更适配问题的图像、结构化答复、比较表和工具；支持的 AI Mode 语言也获得更细致的语言理解。",
            "howTo": "打开 Google Search，用自然语言提出含多个条件的问题，例如比较两种复习方案并要求列出证据；检查返回的结构化内容，再逐个打开引用链接核实关键结论。",
            "impact": "适合学生为论文选题找不同角度、比较课程资料或拆分复杂检索问题；结果中的摘要和链接可作为检索起点，不能代替阅读原始材料和引用来源。",
            "free": "官方称 Hydrogen 已在 Google Search 全球面向所有用户提供；公告没有具体说明费用、账号要求、各地区逐步开放节奏或查询配额，相关限制官方未说明。",
            "category": "搜索与研究 / AI 搜索",
            "source": {
              "name": "Google 官方博客（Search）",
              "published": "2026-11-12",
              "url": "https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/"
            }
          },
          {
            "event": "Google Flow 新增 5 款创作者设计的 AI 影像工具",
            "summary": "Google 于 11 月 12 日为 Flow 发布五款由视觉创作者设计的工具：Character Poster 将故事概念转为海报；Character Arc 展示角色跨年龄变化；Pixel Machine 生成像素、ASCII、CRT 等视觉效果；Lucid Glass 模拟折射与光晕；Pocket Studio 将手机拍摄素材生成多机位效果并提升画面质感。",
            "howTo": "打开 Google Flow 公告中对应的工具入口，按页面提示尝试 Character Poster、Character Arc、Pixel Machine、Lucid Glass 或 Pocket Studio；生成视觉草案后检查人物连续性和素材使用权。",
            "impact": "可用于课程短片分镜、角色设定、海报和视频效果的低成本草稿，帮助创意项目快速比较视觉方向；生成内容应标注并核实素材与肖像授权。",
            "free": "官方页面介绍了五款工具并提供 Flow 入口，但未说明价格、账户和地区资格、分批开放安排或免费生成配额；相关限制官方未说明。",
            "category": "创意 AI / 影像制作",
            "source": {
              "name": "Google 官方博客（Google Labs）",
              "published": "2026-11-12",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/new-google-flow-tools/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Student Developer Pack：验证学生身份领取开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro；官方页面列出每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储，并提供免费的合作伙伴开发权益。",
            "howTo": "进入 GitHub Education 学生权益页申请验证，按提示提交学校邮箱和/或带日期的官方在读证明；通过后在 Student Developer Pack 查看当前可领取的合作权益。",
            "impact": "可用私有仓库协作课程代码，在 Codespaces 中远程开发，并以 Actions 自动运行项目检查；申请前确认课程和证明材料符合资格。",
            "free": "适用于年满 13 岁、就读于授予学位或文凭课程的学生，需学校邮箱和/或官方在读证明。官方列出上述月度额度；地区范围和申请截止日期官方未说明，合作伙伴权益依各自条款。",
            "category": "学生权益 / 开发工具",
            "source": {
              "name": "GitHub Education 官方学生权益页",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 与部分 GPU/TPU 算力",
            "summary": "Google Colab 无需本地安装即可运行 Jupyter 笔记本；官方 FAQ 确认免费方案提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学与教育。",
            "howTo": "打开 Colab，新建或上传 .ipynb 笔记本并运行课程代码；需要加速时查看运行时硬件选项，重要文件保存到 Drive 或下载笔记本。",
            "impact": "适合练习 Python 数据分析、运行小型机器学习课程实验或复现教材代码，无需先配置本地开发环境。",
            "free": "官方确认免费使用并提供 GPU/TPU；资源不保证且不无限，使用限制会变化，托管运行时也可能提前终止。具体配额、地区和账号条件官方未说明。",
            "category": "免费算力 / 学习环境",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Claude Free：网页、桌面和手机端的免费学习助手",
            "summary": "Claude 官方价格页列出每月 0 美元的 Free 方案，可在网页、桌面和手机端聊天、搜索网页、创建文件和运行代码；使用量受每 5 小时及每周限制。",
            "howTo": "打开 Claude 官方免费方案入口并登录，在网页、桌面或手机端尝试概括课程文本、搜索背景资料、创建学习文件或运行小段代码；接近限制时缩小任务并保存结果。",
            "impact": "适合低成本练习文本概括、网页资料初筛、生成学习文件或运行小段代码；较长对话和复杂任务可能更快触及用量限制。",
            "free": "官方标价每月 0 美元，免费方案每 5 小时及每周均有使用限制，但未公布固定条数或 token 配额；地区和账号资格官方未说明。",
            "category": "免费 AI 应用 / 学习助手",
            "source": {
              "name": "Claude 官方价格页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "DeepL 免费版：文本翻译与小型文件翻译额度",
            "summary": "DeepL 官方计划对比页列出免费版本每月最多翻译 50,000 个字符，并提供 1 次文件翻译额度，单个文件不超过 5 MB，可用于阅读外文资料和核对译文。",
            "howTo": "打开 DeepL 翻译器，将课程段落粘贴到文本框，或上传不超过 5 MB 的文件；对专业术语和关键句回看原文，不直接把机器译文当作定稿。",
            "impact": "适合快速理解外文文献、对照中英术语和初步翻译短材料；免费版额度有限，译文仍需人工校对。",
            "free": "官方计划页列出免费版每月 50,000 字符、1 次文件翻译及单文件最多 5 MB；文件翻译额度周期、地区和账号要求官方未说明。",
            "category": "免费翻译工具",
            "source": {
              "name": "DeepL 官方计划页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          },
          {
            "event": "Gemini 免费用户可自动获得 Gemini 4 Hydrogen",
            "summary": "Google 官方发布说明称，Gemini 应用免费用户会在自动模型选择判断合适时使用 Gemini 4 Hydrogen；该模型于 11 月 12 日开始全球上线。",
            "howTo": "打开 Gemini 应用并保留自动模型选择，提出需要多步推理的学习问题；若要确认本次使用的模型，可查看应用模型选择说明。",
            "impact": "学生可尝试让模型分解复杂概念、按要求整理提纲或起草代码练习，随后用教材、课程资料和测试检查内容。",
            "free": "官方说明免费用户通过自动模型选择、在系统判断合适时可获得 Hydrogen，并称模型全球上线；未说明账号资格细节、手动选择权限、固定使用配额或各地区开放时间。",
            "category": "免费 AI 应用 / Gemini",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-12",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
            }
          },
          {
            "event": "OpenAI Whisper：MIT 许可的本地语音识别与转写模型",
            "summary": "OpenAI 官方 Whisper 仓库将代码和模型权重以 MIT License 发布；模型支持多语言语音识别、语音翻译和语言识别，可下载权重并在本机运行。",
            "howTo": "按仓库说明安装 Python 依赖和 ffmpeg，再运行 `pip install -U openai-whisper`；用 `whisper lecture.mp3 --model small` 转写课程录音，并人工校对专有名词。",
            "impact": "适合把访谈、讲座或外语听力转成文字，便于检索和复习；本地运行能减少上传音频的需要，但识别表现会因语言、语速和硬件而异。",
            "free": "官方仓库说明代码和模型权重均采用 MIT License，可免费取得；运行需要自备兼容设备、存储和本地算力，设备规格、账号与地区限制官方未说明。",
            "category": "开放模型 / 语音转写",
            "source": {
              "name": "OpenAI 官方 GitHub 仓库",
              "published": "官方未说明",
              "url": "https://github.com/openai/whisper"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "'Punch in the gut': Homes sales fall to their lowest in 16 years",
            "source": "NPR",
            "published": "2026-11-12",
            "url": "https://www.npr.org/2026/11/12/nx-s1-6038940/punch-in-the-gut-homes-sales-fall-to-their-lowest-in-16-years",
            "readingTime": "约 3 分钟（估算）",
            "topic": "经济与商业 / 美国住房市场与利率",
            "summary": "NPR 报道美国 10 月成屋销售降至年化 375 万套，较上年同期下降 8.8%，创 2010 年以来低位。文章先用房地产市场长期停滞后再度下滑引出问题，再把高按揭利率（30 年期固定利率一度达 7.40%）列为主要原因；随后解释通胀和债券收益率推高借贷成本，并联系美联储为抑制通胀而提高基准利率的政策逻辑。报道最后指出，进一步加息可能继续压低房市和其他消费活动，呈现稳定物价与住房需求之间的短期取舍。",
            "reason": [
              "住房可负担性、借贷成本和通胀治理都是经济类阅读的常见主题，文章用房屋销售把宏观利率政策落到家庭决策。",
              "结构从销售数据和历史低位切入，解释按揭利率，再追溯美联储政策目标，最后说明潜在的后续影响。",
              "适合考查数字与比较对象、因果链条、政策意图，以及作者如何通过专家引语呈现市场预期。",
              "可积累 mortgage、benchmark、borrowing、inflation 等金融与宏观经济词汇，并区分 sales、rates 与 economic activity 的关系。",
              "写作可借鉴“现象数据—直接原因—政策背景—预期代价”的论证顺序，避免把相关性直接写成单一因果。"
            ],
            "vocabulary": [
              {
                "word": "stagnant",
                "phonetic": "/ˈstæɡnənt/",
                "part": "adj.",
                "translation": "停滞的；不景气的"
              },
              {
                "word": "holding pattern",
                "phonetic": "/ˈhoʊldɪŋ ˌpætərn/",
                "part": "n. phr.",
                "translation": "停滞状态；维持现状"
              },
              {
                "word": "mortgage",
                "phonetic": "/ˈmɔːrɡɪdʒ/",
                "part": "n.",
                "translation": "抵押贷款；房贷"
              },
              {
                "word": "benchmark",
                "phonetic": "/ˈbentʃmɑːrk/",
                "part": "n.",
                "translation": "基准；衡量标准"
              },
              {
                "word": "borrowing",
                "phonetic": "/ˈbɑːroʊɪŋ/",
                "part": "n.",
                "translation": "借款；借贷"
              },
              {
                "word": "inflation",
                "phonetic": "/ɪnˈfleɪʃn/",
                "part": "n.",
                "translation": "通货膨胀"
              },
              {
                "word": "policymaker",
                "phonetic": "/ˈpɑːləsimeɪkər/",
                "part": "n.",
                "translation": "政策制定者"
              },
              {
                "word": "signal",
                "phonetic": "/ˈsɪɡnəl/",
                "part": "v.",
                "translation": "表明；发出信号"
              },
              {
                "word": "slowdown",
                "phonetic": "/ˈsloʊdaʊn/",
                "part": "n.",
                "translation": "放缓；减速"
              }
            ],
            "sentences": [
              {
                "original": "Existing home sales in October fell to 3.75 million, making an 8.8% decline in sales from a year earlier.",
                "analysis": [
                  "主干是 Existing home sales fell，先交代美国成屋销售下滑这一核心事实。",
                  "in October 和 to 3.75 million 分别补充时间与结果数值，from a year earlier 给出同比参照。",
                  "making an 8.8% decline 是现在分词短语，补充解释这一销量所对应的同比变化。",
                  "数字与时间比较共同构成证据，适合用于说明经济趋势而不只作抽象判断。",
                  "可借鉴“数据变化 + making + 名词短语”压缩表达指标及其含义。"
                ],
                "translation": "10 月美国成屋销售降至 375 万套，较一年前下降 8.8%。"
              },
              {
                "original": "The drop is mainly due to high mortgage rates.",
                "analysis": [
                  "主干为 The drop is due to rates，直接把销售下滑与按揭利率联系起来。",
                  "mainly 限定原因的重要程度，表示主要原因而非唯一原因。",
                  "high 修饰 mortgage rates，说明文章所指的是较高的借贷成本。",
                  "此句承接数据并引出后文的利率机制，是简洁的因果主题句。",
                  "可借鉴 be mainly due to ... 表述主要原因，同时避免过度断言唯一成因。"
                ],
                "translation": "销售下滑主要是由于按揭利率高。"
              },
              {
                "original": "Fewer home sales and other purchases mean less economic activity, which the Fed wants in order to reach its goal of lowering inflation.",
                "analysis": [
                  "主句核心是 Fewer ... purchases mean less economic activity，解释消费减少与经济活动放缓的关系。",
                  "which 引导非限制性定语从句，指代前面的 less economic activity，并说明这是美联储希望实现的结果。",
                  "in order to reach its goal 是目的状语，后接 of lowering inflation 说明目标内容。",
                  "逻辑链为减少购买—放缓经济—降低通胀，展示政策目标及其传导机制。",
                  "可借鉴 mean + 名词短语、which 补充评价和 in order to + 动词的层次组合。"
                ],
                "translation": "房屋销售和其他购买减少意味着经济活动减弱，而这正是美联储为实现降低通胀目标所希望看到的。"
              }
            ]
          },
          {
            "title": "Time running out for young people to receive meningitis B vaccines in UK",
            "source": "The Guardian",
            "published": "2026-11-12",
            "url": "https://www.theguardian.com/society/2026/nov/12/time-running-out-young-people-meningitis-b-vaccines-uk",
            "readingTime": "约 4 分钟（估算）",
            "topic": "健康与社会 / 青年疫苗接种与公共卫生",
            "summary": "《卫报》报道英国面向部分青年推出的一次性、限时 MenB 疫苗计划接种率偏低：18 至 19 岁符合条件者中只有 28.2% 接种了第一剂。文章回顾年内肯特等地的疫情及后续计划，说明两剂需至少间隔 28 天，符合条件者包括特定出生年份的青年，以及当年首次进入大学或寄宿制继续教育机构、未满 25 岁者。卫生部门提醒第一剂需在 12 月 31 日前接种，第二剂可安排至 2027 年 3 月底；公共卫生专家担心低接种率赶不上冬季高发期，也提出延长宣传、改为年度接种安排或纳入常规青少年免疫计划。文章由此讨论限时疫苗政策的成本效果与覆盖面之间的张力。",
            "reason": [
              "疫苗接种、青年健康和公共卫生覆盖率是健康与社会议题的常见考点，文章用真实接种数据呈现政策执行问题。",
              "文章先提出接种时间紧迫，再回顾疫情背景和计划规则，继而呈现接种率与专家建议，最后讨论是否转为常规安排。",
              "适合考查数据比例、政策资格条件、截止日期，以及专家观点与官方安排之间的区别。",
              "可积累 eligible、uptake、one-off、booster、invasive 等公共卫生词汇，注意 uptake 表示实际参与或接种情况。",
              "写作可借鉴“风险背景—干预方案—覆盖不足—改进建议”的结构，论证时区分个体选择和群体免疫目标。"
            ],
            "vocabulary": [
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "符合资格的"
              },
              {
                "word": "one-off",
                "phonetic": "/ˌwʌn ˈɔːf/",
                "part": "adj.",
                "translation": "一次性的"
              },
              {
                "word": "time-limited",
                "phonetic": "/ˌtaɪm ˈlɪmɪtɪd/",
                "part": "adj.",
                "translation": "有时间限制的"
              },
              {
                "word": "uptake",
                "phonetic": "/ˈʌpteɪk/",
                "part": "n.",
                "translation": "采用率；接种率"
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
                "translation": "疫情暴发；疾病暴发"
              },
              {
                "word": "booster",
                "phonetic": "/ˈbuːstər/",
                "part": "n.",
                "translation": "加强针；加强剂"
              },
              {
                "word": "invasive",
                "phonetic": "/ɪnˈveɪsɪv/",
                "part": "adj.",
                "translation": "侵袭性的"
              },
              {
                "word": "routine",
                "phonetic": "/ruːˈtiːn/",
                "part": "adj.",
                "translation": "常规的；例行的"
              }
            ],
            "sentences": [
              {
                "original": "The clock is ticking for young people in the UK to receive vaccinations to protect against meningitis B, ...",
                "analysis": [
                  "主干是 The clock is ticking，使用“时钟在走”这一隐喻表达时间紧迫。",
                  "for young people in the UK 指出需要行动的群体，to receive vaccinations 说明其具体行动。",
                  "to protect against meningitis B 是目的不定式，解释接种的保护目标。",
                  "句子以紧迫性引出公共卫生问题，随后用接种比例和截止日提供证据。",
                  "可借鉴 the clock is ticking for sb. to do sth. 表达某项行动的时间窗口正在收窄。"
                ],
                "translation": "英国年轻人接种疫苗以预防 B 型脑膜炎的时间已经不多了。"
              },
              {
                "original": "But figures from the UK Health Security Agency have revealed just 28.2% of 18- and 19-year-olds have received a first dose.",
                "analysis": [
                  "主句主干是 figures have revealed，数据作为主语，突出统计结果而非个人判断。",
                  "from the UK Health Security Agency 后置修饰 figures，交代数据来源。",
                  "just 28.2% 强调比例偏低；of 18- and 19-year-olds 限定百分比的适用群体。",
                  "have received a first dose 使用现在完成时，强调截至报道时的接种进展。",
                  "可借鉴 figures reveal + 比例/事实来引入调查数据，并用 just 表示低于预期。"
                ],
                "translation": "但英国卫生安全局的数据表明，18 至 19 岁人群中仅有 28.2% 接种了第一剂。"
              },
              {
                "original": "Two doses of the vaccine, given at least 28 days apart, are needed for protection, and UKHSA says second doses will be available until 31 March 2027.",
                "analysis": [
                  "并列结构前半句的主干为 Two doses are needed，明确获得保护所需的剂次数量；后半句说明第二剂的可接种期限。",
                  "of the vaccine 修饰 doses，说明剂次所属的疫苗。",
                  "given at least 28 days apart 是过去分词短语，补充两剂之间的最短间隔。",
                  "for protection 表示目的或所需结果，说明方案要求与免疫保护之间的关系。",
                  "可借鉴“名词 + 过去分词短语”补充条件，以及 be needed for ... 表达必要性。"
                ],
                "translation": "要获得保护需要接种两剂疫苗，两剂至少间隔 28 天。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-12",
      "status": "ready",
      "ai": {
        "intro": "本期关注 AlphaGenome 2 的细胞类型预测、Gemini Robotics 2.5 的实体操作能力和 Gemini 4 Carbon 接入 Copilot；另复核学生可用的免费开发与学习工具。",
        "updates": [
          {
            "event": "AlphaGenome 2：按细胞类型预测 DNA 变异影响",
            "summary": "Google DeepMind 于 11 月 11 日发布 AlphaGenome 2，可在输入 DNA 序列的同时指定组织、细胞类型或细胞状态，预测变异对基因调控的影响。模型使用逾 1 亿个单细胞数据训练，并可对新单细胞实验中的细胞状态作预测；非商业研究可通过 API 使用，商业研究为私测。",
            "howTo": "打开官方 AlphaGenome API 文档，申请 API key，并按 Getting started 与 Colab 教程提交 DNA 序列和目标细胞条件；先用公开研究数据验证预测，再对照实验资料解释结果。",
            "impact": "生物学、遗传学和计算生物学学生可用它筛选候选变异、比较不同细胞环境下的调控预测，帮助确定后续实验方向；预测不能替代实验验证或临床诊断。",
            "free": "官方公告说明非商业研究可通过 AlphaGenome API 使用，商业研究处于私测；官方 API 文档（https://www.alphagenomedocs.com/）说明非商业用途免费，但查询速率随需求变化。公告未说明固定配额、支持地区或账户资格。",
            "category": "科研 AI / 基因组学",
            "source": {
              "name": "Google DeepMind 官方博客",
              "published": "2026-11-11",
              "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/"
            }
          },
          {
            "event": "Gemini Robotics 2.5 面向机器人推出新一代视觉-语言-动作模型",
            "summary": "Google DeepMind 于 11 月 10 日发布 Gemini Robotics 2.5，改进机器人执行灵巧操作、适应任务和安全避障的能力，目标是让机器人应对更复杂的真实环境。目前正向机器人合作伙伴开放。",
            "howTo": "访问官方 Gemini Robotics 2.5 页面提交 early-access waitlist；若所在实验室获准接入，再按官方合作方流程配置支持的机器人并设计受控操作测试。公开页面目前仅提供申请入口。",
            "impact": "机器人与具身智能方向的学生可关注模型如何把视觉和语言指令转成实体动作，并在实验室中评估精细操作和安全避障；普通用户目前不能直接把它当作通用聊天模型试用。",
            "free": "官方公告称模型正向机器人合作伙伴逐步开放，产品页提供 early-access waitlist；是否获批、价格、账号要求、地区和调用配额均未说明，提交申请不代表已获得访问权限。",
            "category": "具身智能 / 机器人模型",
            "source": {
              "name": "Google DeepMind 官方博客",
              "published": "2026-11-10",
              "url": "https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/"
            }
          },
          {
            "event": "Gemini 4 Carbon 加入 GitHub Copilot",
            "summary": "GitHub 于 11 月 10 日宣布 Gemini 4 Carbon 在 Copilot 中正式可用，面向复杂编程、agent 工作流和推理任务。用户可在支持的 IDE、Copilot CLI、GitHub 网站及移动端的模型选择器中切换；功能分批开放。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI 或其他受支持客户端打开模型选择器并选择 Gemini 4 Carbon；若尚未出现，稍后再检查。Business 与 Enterprise 组织用户还需管理员在 Copilot 设置中允许该模型。",
            "impact": "适合已有相应 Copilot 计划的学生开发者尝试多文件调试、复杂代码任务和代码审查；先让模型说明改动方案，再用测试和人工检查验证结果。",
            "free": "仅列于 Copilot Pro+、Max、Business 和 Enterprise 计划，且分阶段开放；使用按模型提供方的标价计费。免费计划不在公告列出的可用计划中；具体 token 价格见 GitHub 官方计费表，公告未说明地区限制或固定用量配额。",
            "category": "编程助手 / 模型接入",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-10",
              "url": "https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Student Developer Pack：验证学生身份领取开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro；官方页面列出每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储，并提供免费的合作伙伴开发权益。",
            "howTo": "进入 GitHub Education 学生权益页申请验证，按提示提交学校邮箱和/或带日期的官方在读证明；通过后在 Student Developer Pack 查看当前可领取的合作权益。",
            "impact": "可用私有仓库协作课程代码，在 Codespaces 中远程开发，并以 Actions 自动运行项目检查；申请前确认课程和证明材料符合资格。",
            "free": "适用于年满 13 岁、就读于授予学位或文凭课程的学生，需学校邮箱和/或官方在读证明。官方列出上述月度额度；地区范围和申请截止日期官方未说明，合作伙伴权益依各自条款。",
            "category": "学生权益 / 开发工具",
            "source": {
              "name": "GitHub Education 官方学生权益页",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 与部分 GPU/TPU 算力",
            "summary": "Google Colab 无需本地安装即可运行 Jupyter 笔记本；官方 FAQ 确认免费方案提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学与教育。",
            "howTo": "打开 Colab，新建或上传 .ipynb 笔记本并运行课程代码；需要加速时查看运行时硬件选项，重要文件保存到 Drive 或下载笔记本。",
            "impact": "适合练习 Python 数据分析、运行小型机器学习课程实验或复现教材代码，无需先配置本地开发环境。",
            "free": "官方确认免费使用；资源不保证且不无限，使用限制会变化，托管运行时还可能提前终止。具体配额、地区与账号条件官方未说明。",
            "category": "免费算力 / 学习环境",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Gemini Notebook：Gmail 用户可免费使用基础版",
            "summary": "Google 帮助页说明可用 Gmail 账号免费注册 Gemini Notebook。基础版每位用户最多 100 个笔记本；每个笔记本最多 50 个非笔记类来源，另有每本 500 个 notes 来源的额度。",
            "howTo": "用 Gmail 账号打开 Gemini Notebook，新建课程笔记本并添加讲义或公开文章；围绕已添加来源提问，再回到原文核对回答和出处。",
            "impact": "可按课程或论文主题整理材料、生成复习问题；来源数量有上限，模型生成内容仍应对照原始资料。",
            "free": "可免费注册；浏览器版仅向官方支持国家/地区中达到当地同意年龄的用户提供。基础版为每用户 100 个笔记本、每本 50 个非笔记来源及 500 个 notes 来源；地区与年龄要求以官方页面为准。",
            "category": "免费学习工具 / 资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方帮助页",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16213268?hl=en"
            }
          },
          {
            "event": "Claude Free：网页、桌面和手机端的免费使用层",
            "summary": "Claude 官方价格页列出每月 0 美元的 Free 方案，可在网页、桌面和手机端聊天、搜索网页、创建文件和运行代码；使用量受每 5 小时及每周限制。",
            "howTo": "打开 Claude 官方免费方案入口并登录，在网页、桌面或手机端选择课程文本任务；可试用网页搜索、文件创建或代码运行，接近限制时缩小任务并保存结果。",
            "impact": "适合低成本练习文本概括、网页资料初筛、生成学习文件或运行小段代码；复杂任务和较长对话可能更快触及用量限制。",
            "free": "官方标价每月 0 美元，免费方案每 5 小时及每周均有使用限制，但未公布固定条数或 token 配额；地区和账号资格官方未说明。",
            "category": "免费 AI 应用 / 学习助手",
            "source": {
              "name": "Claude 官方价格页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free：免费代码补全和有限聊天",
            "summary": "GitHub 官方计划页列出每月 2,000 次代码补全、Copilot CLI 和有限的聊天及 agent 使用；Free 计划无需信用卡。",
            "howTo": "进入 GitHub Copilot Free 计划并启用相应 IDE 扩展，在 VS Code 等支持环境中使用代码补全；需要聊天或 agent 功能时按官方页面的 Free 计划说明查看可用额度。",
            "impact": "可用于课程代码的行内补全、解释和小规模调试练习；应检查生成代码并运行测试，聊天与 agent 使用量受限。",
            "free": "官方标价 0 美元、无需信用卡，每月 2,000 次代码补全；聊天和 agent 使用受限但未公布固定额度。账户条件和地区范围官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "DeepL 免费版：文本翻译与小型文件翻译额度",
            "summary": "DeepL 官方计划对比页列出免费版本每月最多翻译 50,000 个字符，并支持单个不超过 5 MB 的文件翻译，可用于阅读外文资料和核对译文。",
            "howTo": "打开 DeepL 翻译器，将课程段落粘贴到文本框，或上传不超过 5 MB 的文件；对专业术语和关键句回看原文，不直接把机器译文当作定稿。",
            "impact": "适合快速理解外文文献、对照中英术语和初步翻译短材料；免费版额度有限，译文仍需人工校对。",
            "free": "官方计划页列出免费版每月 50,000 字符和每月 1 次文件翻译、单文件最多 5 MB；免费版本的地区、账号要求官方未说明。",
            "category": "免费翻译工具",
            "source": {
              "name": "DeepL 官方计划页",
              "published": "官方未说明",
              "url": "https://www.deepl.com/en/pro"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Some under-25s should get less benefits, Milburn review to say",
            "source": "BBC",
            "published": "2026-11-12",
            "url": "https://www.bbc.co.uk/news/articles/cwn70l1628l0o",
            "readingTime": "约 4 分钟（估算）",
            "topic": "社会与福利政策 / 青年就业与保障",
            "summary": "BBC 报道一项尚未公布的政府委托评估：Alan Milburn 预计建议 25 岁以下人士不再领取 Universal Credit 的健康津贴或个人独立支付，改为基本津贴，部分人可另领疾病相关费用补贴；重度残障且无法工作者则可能获得较高的新福利。评估也预计建议增加就业支持资金、岗位补贴和个人顾问，但部分申领者可能因此少领福利，且若落实，财政节省或需近十年才出现。报道以就业扶持与短期收入保障的取舍呈现争议；这些仍是预计建议，并非已生效政策。",
            "reason": [
              "青年福利、就业支持与公共财政是社会政策类阅读常见主题，文章同时呈现受益者保障和就业激励两种目标。",
              "行文先交代评估建议，再说明不同群体待遇、就业措施和可能的财政影响，最后引入争议与政府表态。",
              "适合考查提案与现行政策的区别、不同青年群体将受何影响，以及作者如何用条件句和引语呈现尚未定案的变化。",
              "可积累 entitlement、claimant、allowance、subsidy 等福利政策词汇，并注意 could、would、expected 等表示不确定性的用法。",
              "写作可借鉴“政策目标—群体影响—短长期权衡—执行争议”的结构，论证时也应区分建议、预测和已通过的法律。"
            ],
            "vocabulary": [
              {
                "word": "overhaul",
                "phonetic": "/ˌoʊvərˈhɔːl/",
                "part": "n.",
                "translation": "全面改革"
              },
              {
                "word": "entitled",
                "phonetic": "/ɪnˈtaɪtld/",
                "part": "adj.",
                "translation": "有资格获得的；应得的"
              },
              {
                "word": "claimant",
                "phonetic": "/ˈkleɪmənt/",
                "part": "n.",
                "translation": "申领者；索赔人"
              },
              {
                "word": "allowance",
                "phonetic": "/əˈlaʊəns/",
                "part": "n.",
                "translation": "津贴；补助"
              },
              {
                "word": "placement",
                "phonetic": "/ˈpleɪsmənt/",
                "part": "n.",
                "translation": "安置；实习岗位"
              },
              {
                "word": "subsidy",
                "phonetic": "/ˈsʌbsədi/",
                "part": "n.",
                "translation": "补贴；津贴"
              },
              {
                "word": "legislation",
                "phonetic": "/ˌledʒɪsˈleɪʃn/",
                "part": "n.",
                "translation": "立法；法律"
              },
              {
                "word": "controversial",
                "phonetic": "/ˌkɑːntrəˈvɜːrʃl/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "monetary",
                "phonetic": "/ˈmɑːnəteri/",
                "part": "adj.",
                "translation": "货币的；财政的"
              }
            ],
            "sentences": [
              {
                "original": "Some could be eligible for a new “additional cost allowance” to cover day-to-day costs related to their conditions.",
                "analysis": [
                  "主干是 Some could be eligible for an allowance，说明部分人可能符合领取津贴的资格。",
                  "to cover day-to-day costs 是目的不定式，说明该津贴拟用于覆盖什么支出。",
                  "related to their conditions 是过去分词短语，后置修饰 costs，限定费用与健康状况有关。",
                  "could 表示可能性而非确定承诺；Some 也与上下文中的 many claimants 形成范围对照。",
                  "可借鉴 be eligible for ... to cover ... 表达资格和政策用途。"
                ],
                "translation": "部分人可能有资格领取一项新的“额外费用津贴”，以支付与自身健康状况有关的日常开销。"
              },
              {
                "original": "But many claimants would receive less under the plans, which the government is set to take forward into legislation in the new year.",
                "analysis": [
                  "主句核心是 many claimants would receive less，指出计划下不少申领者会少领福利。",
                  "But 连接前后对照，转折出就业支持方案可能带来的收入损失。",
                  "which 引导非限制性定语从句，补充说明政府拟如何推进这些计划。",
                  "is set to 表示预期或安排；would 和 in the new year 共同体现未来性，不能误读为已经立法。",
                  "可借鉴 But ... , which ... 先提出限制，再补充政策进程。"
                ],
                "translation": "但在这些计划下，许多申领者将会少领福利；政府准备在新年将计划推进为立法。"
              },
              {
                "original": "If Milburn's recommendations were approved, it could take almost a decade for the British state to see monetary savings.",
                "analysis": [
                  "句子以 If 引导条件从句，主句为 it could take almost a decade。",
                  "were approved 是虚拟语气的被动形式，表示建议尚未获批。",
                  "for the British state to see monetary savings 说明时间所对应的结果，即国家实现财政节省。",
                  "almost a decade 强调政策成本收益出现得较晚，支撑文章对短期与长期效果的权衡。",
                  "可借鉴 If ... were approved, it could take ... for ... to ... 表达有条件的政策预测。"
                ],
                "translation": "如果 Milburn 的建议获批，英国政府可能要近十年才能看到财政节省。"
              }
            ]
          },
          {
            "title": "Historic US ocean liner sinks near Florida to become world’s largest artificial reef",
            "source": "The Guardian",
            "published": "2026-11-11",
            "url": "https://www.theguardian.com/us-news/2026/nov/11/ss-united-states-sinks-florida-reef",
            "readingTime": "约 3 分钟（估算）",
            "topic": "文化与环境 / 历史船舶改造为人工鱼礁",
            "summary": "文章报道远洋客轮 SS United States 在佛罗里达州 Destin 外海沉没，转作人工鱼礁。该船 1952 年下水，处女航创下横渡大西洋速度纪录，服役 17 年后于 1969 年退役；长期停泊费和维护成本使保存计划难以为继。Okaloosa County 于 2024 年以 100 万美元购入，并把船体改造后沉放于墨西哥湾海床。当地官员预计礁体将成为鱼类栖息地和潜水目的地，文章由此串联船只的历史价值、保存成本与新的旅游和生态用途。",
            "reason": [
              "文章把交通史、文化遗产保护和人工鱼礁结合起来，适合练习分析旧设施再利用所涉及的成本与公共价值。",
              "叙述从沉船事件回溯其航海纪录和退役经历，再解释保存困难、地方政府购入与改造计划，结构清晰。",
              "适合考查时间线、数字信息、转折关系，以及 distinguish 已发生的沉船事实与官员对生态效益的预期。",
              "可学习 ocean liner、maiden voyage、dockage fee、habitat 等历史和环境词汇，以及过去分词短语的压缩表达。",
              "写作可借鉴“历史背景—现实困境—替代方案—预期收益”的案例论证框架，并对预测性结论保留限定。"
            ],
            "vocabulary": [
              {
                "word": "ocean liner",
                "phonetic": "/ˈoʊʃən ˌlaɪnər/",
                "part": "n. phr.",
                "translation": "远洋客轮"
              },
              {
                "word": "maiden voyage",
                "phonetic": "/ˌmeɪdn ˈvɔɪɪdʒ/",
                "part": "n. phr.",
                "translation": "处女航；首次航行"
              },
              {
                "word": "transatlantic",
                "phonetic": "/ˌtrænzətˈlæntɪk/",
                "part": "adj.",
                "translation": "横渡大西洋的"
              },
              {
                "word": "deployed",
                "phonetic": "/dɪˈplɔɪd/",
                "part": "v.",
                "translation": "被投放；被部署"
              },
              {
                "word": "hull",
                "phonetic": "/hʌl/",
                "part": "n.",
                "translation": "船体；船壳"
              },
              {
                "word": "dockage fee",
                "phonetic": "/ˈdɑːkɪdʒ fiː/",
                "part": "n. phr.",
                "translation": "停泊费"
              },
              {
                "word": "conservancy",
                "phonetic": "/kənˈsɜːrvənsi/",
                "part": "n.",
                "translation": "保护协会；资源保护组织"
              },
              {
                "word": "artificial reef",
                "phonetic": "/ˌɑːrtɪˈfɪʃl riːf/",
                "part": "n. phr.",
                "translation": "人工鱼礁"
              },
              {
                "word": "habitat",
                "phonetic": "/ˈhæbɪtæt/",
                "part": "n.",
                "translation": "栖息地"
              }
            ],
            "sentences": [
              {
                "original": "The ship carried thousands of passengers across the Atlantic over 17 years of operation before being retired in 1969.",
                "analysis": [
                  "主干是 The ship carried thousands of passengers，说明客轮运送了大量乘客。",
                  "across the Atlantic 补充航行范围，over 17 years of operation 交代持续时间。",
                  "before being retired 是被动动名词短语，表示服役结束后退役的时间顺序。",
                  "句子用时间和数量把抽象的航运历史具体化，服务于后文的历史价值说明。",
                  "可借鉴 over ... years ... before being ... 压缩叙述经历与后续变化。"
                ],
                "translation": "这艘船在 17 年运营期间横渡大西洋，载运了数千名乘客，之后于 1969 年退役。"
              },
              {
                "original": "For years, the SS United States remained docked in Philadelphia, as various owners attempted to save and restore it.",
                "analysis": [
                  "主句核心是 the SS United States remained docked，说明船只长期停泊在费城。",
                  "For years 前置强调持续时间，地点状语 in Philadelphia 补充停泊地点。",
                  "as 引导从句，说明船只停泊期间不同所有者一直试图挽救并修复它。",
                  "主从句构成“长期停泊—持续尝试”的背景关系，为后文转作人工鱼礁的方案作铺垫。",
                  "可借鉴 remain ... as ... attempted to ... 描写困境与并行努力。"
                ],
                "translation": "多年来，SS United States 一直停泊在费城，不同所有者曾试图挽救并修复它。"
              },
              {
                "original": "On Wednesday, the ship was deployed at approximately 2.40pm ET, with the sinking process beginning shortly before 5pm.",
                "analysis": [
                  "主干是 the ship was deployed，采用一般过去时被动语态突出船只被投放这一事件。",
                  "On Wednesday 和 at approximately 2.40pm ET 分别标明日期和大致时间。",
                  "with the sinking process beginning ... 是 with 复合结构，补充后续沉船过程的开始时间。",
                  "approximately 与 shortly before 都是限定表达，表明文中时间为近似值而非精确测量。",
                  "可借鉴 with + 名词 + -ing 补充同时或随后发生的背景事件。"
                ],
                "translation": "周三约美国东部时间下午 2 点 40 分，船只被投放入海；沉船过程在下午 5 点前不久开始。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-11",
      "status": "ready",
      "ai": {
        "intro": "本期核对 Gemini 4 Carbon 面向开发者与 Ultra 用户开放、Pixel 11 月功能更新及 Copilot 企业席位 API 变化，并复查学生可用的免费工具和模型。",
        "updates": [
          {
            "event": "Gemini 4 Carbon 开始面向开发者、企业、科研人员和消费者提供",
            "summary": "Google 于 11 月 10 日宣布 Gemini 4 Carbon 可用。API 面向付费开发者和企业；Google AI Ultra 订阅用户也开始在 Gemini 应用、AI Mode 和 Google Antigravity 中获得该模型。",
            "howTo": "开发者可在 Google AI Studio 的 Gemini 4 Carbon 模型入口创建 API key 并调用模型；已有 Google AI Ultra 订阅的用户可在 Gemini 应用、AI Mode 或 Antigravity 中查看是否已开放。先用公开课程材料试做多步代码、数据分析或文献整理，再逐项核对结果。",
            "impact": "可用于需要多步推理的课程编程、数据整理和研究资料初筛；API 需付费，输出应回到原始数据或文献核验，不应把模型结论当作研究证据。",
            "free": "官方公告说明 API 面向付费开发者/企业，介绍期价格为每百万输入 token 2 美元、输出 token 10 美元；介绍期结束后为 4/20 美元。Gemini 应用、AI Mode 和 Antigravity 面向 Google AI Ultra 订阅用户逐步开放。官方未说明地区、API 免费额度或具体配额。",
            "category": "生成式 AI / Gemini 模型",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-10",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
            }
          },
          {
            "event": "Pixel 11 月更新加入 Gemini Intelligence 功能",
            "summary": "Google 于 11 月 10 日公布 Pixel 11 月功能更新：Pixel 10（不含 10a）及更新机型将获得 Gemini Intelligence，包括可整理语音输入的 Rambler、个性化建议和多步任务；部分设备还可制作自定义主屏 widget。更新分阶段推送。",
            "howTo": "兼容 Pixel 收到本月系统更新后，在语音输入时自然口述并检查 Rambler 整理后的文字；也可在 Gemini 中尝试多步任务，或按页面所述创建支出追踪等自定义 widget。先检查手机型号和所在地区的功能可用性。",
            "impact": "适合用语音快速整理课堂消息或待办，并把课程/生活进度放到主屏 widget；多步任务功能目前仅在日本、英国和印度提供，其他功能也受机型、市场和语言限制。",
            "free": "公告列出 Pixel 10（不含 10a）及更新设备等适用条件，功能随更新逐步推送且按市场、语言有差异；多步任务列出的地区为日本、英国和印度。官方未说明额外订阅费、账户要求或配额。",
            "category": "移动 AI / Google Pixel",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-10",
              "url": "https://blog.google/products-and-platforms/devices/pixel/november-2026-pixel-drop/"
            }
          },
          {
            "event": "GitHub Apps 可通过 API 管理 Enterprise Copilot 席位",
            "summary": "GitHub 在 11 月 10 日更新 Enterprise Copilot 席位管理能力：Enterprise GitHub Apps 可调用企业级 Copilot seat-management API，为用户和企业团队分配席位；调用需要新增的细粒度权限 Enterprise Copilot license management。",
            "howTo": "企业管理员可为 Enterprise GitHub App 授予 Enterprise Copilot license management 权限，再按 GitHub 文档调用企业级席位管理 API，管理用户或团队的席位分配。普通个人账号不能仅凭 Copilot 客户端使用这项管理能力。",
            "impact": "高校实验室或课程项目若由企业 GitHub 组织统一管理 Copilot，可把成员入组、席位分配和回收接入既有 GitHub App 流程；普通学生使用者无需操作 API，但应确认席位是否由组织管理员管理。",
            "free": "仅面向具备企业级 Copilot 席位管理权限的 Enterprise GitHub Apps；需要企业级 Copilot 组织和相应权限。公告没有说明价格、地区、调用配额或普通个人计划是否适用，相关信息官方未说明。",
            "category": "编程助手 / 企业管理 API",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-10",
              "url": "https://github.blog/changelog/2026-11-11-github-app-support-for-enterprise-copilot-seat-management/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Student Developer Pack：验证学生身份领取开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro；官方页面列出每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储，并提供免费的合作伙伴开发权益。",
            "howTo": "进入 GitHub Education 学生权益页申请验证，按提示提交学校邮箱和/或带日期的官方在读证明；通过后在 Student Developer Pack 查看当前可领取的合作权益。",
            "impact": "可用私有仓库协作课程代码，在 Codespaces 中远程开发，并以 Actions 自动运行项目检查；申请前确认课程和证明材料符合资格。",
            "free": "适用于年满 13 岁、就读于授予学位或文凭课程的学生，需学校邮箱和/或官方在读证明。官方列出上述月度额度；地区范围和申请截止日期官方未说明，合作伙伴权益依各自条款。",
            "category": "学生权益 / 开发工具",
            "source": {
              "name": "GitHub Education 官方学生权益页",
              "published": "官方未说明",
              "url": "https://github.com/education/students"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 与部分 GPU/TPU 算力",
            "summary": "Google Colab 无需本地安装即可运行 Jupyter 笔记本；官方 FAQ 确认免费方案提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学与教育。",
            "howTo": "打开 Colab，新建或上传 .ipynb 笔记本并运行课程代码；需要加速时查看运行时硬件选项，重要文件保存到 Drive 或下载笔记本。",
            "impact": "适合练习 Python 数据分析、运行小型机器学习课程实验或复现教材代码，无需先配置本地开发环境。",
            "free": "官方确认免费使用；资源不保证且不无限，使用限制会变化，托管运行时还可能提前终止。具体配额、地区与账号条件官方未说明。",
            "category": "免费算力 / 学习环境",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Gemini Notebook：Gmail 用户可免费使用基础版",
            "summary": "Google 帮助页说明可用 Gmail 账号免费注册 Gemini Notebook。基础版每位用户最多 100 个笔记本；每个笔记本最多 50 个非笔记类来源，另有每本 500 个 notes 来源的额度。",
            "howTo": "用 Gmail 账号打开 Gemini Notebook，新建课程笔记本并添加讲义或公开文章；围绕已添加来源提问，再回到原文核对回答和出处。",
            "impact": "可按课程或论文主题整理材料、生成复习问题；来源数量有上限，模型生成内容仍应对照原始资料。",
            "free": "可免费注册；浏览器版仅向官方支持国家/地区中达到当地同意年龄的用户提供。基础版为每用户 100 个笔记本、每本 50 个非笔记来源及 500 个 notes 来源；地区与年龄要求以官方页面为准。",
            "category": "免费学习工具 / 资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方帮助页",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16213268?hl=en"
            }
          },
          {
            "event": "Claude Free：网页、桌面和手机端的免费使用层",
            "summary": "Claude 官方价格页列出每月 0 美元的 Free 方案，可在网页、桌面和手机端聊天、搜索网页、创建文件和运行代码；使用量受每 5 小时及每周限制。",
            "howTo": "打开 Claude 官方免费方案入口并登录，在网页、桌面或手机端选择课程文本任务；可试用网页搜索、文件创建或代码运行，接近限制时缩小任务并保存结果。",
            "impact": "适合低成本练习文本概括、网页资料初筛、生成学习文件或运行小段代码；复杂任务和较长对话可能更快触及用量限制。",
            "free": "官方标价每月 0 美元，免费方案每 5 小时及每周均有使用限制，但未公布固定条数或 token 配额；地区和账号资格官方未说明。",
            "category": "免费 AI 应用 / 学习助手",
            "source": {
              "name": "Claude 官方价格页",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "Qwen3-ASR-0.6B：Apache-2.0 许可的多语言语音识别模型",
            "summary": "Qwen 官方仓库提供可下载的 Qwen3-ASR 开源语音识别系列；0.6B 模型支持语种识别和语音转写，模型家族支持 30 种语言及 22 种中文方言，仓库标注 Apache-2.0 许可。",
            "howTo": "打开官方 Hugging Face 模型卡下载 Qwen/Qwen3-ASR-0.6B，按 Qwen3-ASR 仓库说明安装 `qwen-asr`，再用课程录音片段试做转写并人工校对专有名词。",
            "impact": "可本地尝试把讲座或访谈音频转为文字，用于复习、检索和英语听力校对；识别结果可能出错，音频隐私和本地硬件需求需自行考虑。",
            "free": "官方仓库将代码和模型系列标为 Apache-2.0，并提供 Hugging Face/ModelScope 下载入口；权重无需付费领取，运行需自备兼容设备并承担本地算力成本。地区和账号限制官方未说明。",
            "category": "开放模型 / 语音转写",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "AI use is now universal in higher education. Why are universities failing to adapt?",
            "source": "The Conversation",
            "published": "2026-11-09",
            "url": "https://theconversation.com/ai-use-is-now-universal-in-higher-education-why-are-universities-failing-to-adapt-294137",
            "readingTime": "约 6 分钟（估算）",
            "topic": "教育与科技 / 高校如何适应生成式 AI",
            "summary": "文章以大学生使用 AI 已在许多国家接近普遍、但一年前 UNESCO 对 90 国高校的调查中不足五分之一设有正式 AI 政策这一落差提出问题。作者再以澳大利亚 39 所教授 ICT 的大学政策研究为例：规定分散且常含糊，只有一所发布具体指导、七所设有协调应对的机构；检测工具的准确性问题也促使高校转向评估改革。文章区分两项任务：既要确认学生真实掌握知识，也要培养其在 AI 普及环境中独立判断、批判评估和自主学习的能力。由于单纯的 AI 素养容易随工具变化过时，作者最后主张高校协作并建立全国性支持机制，同时承认大学自主权、资金和政策跟不上技术的现实障碍。",
            "reason": [
              "高校如何处理生成式 AI、学术诚信与学习质量，是教育改革和科技伦理的交叉议题，适合练习辨析“禁止使用”与“重设学习评价”的区别。",
              "文章从使用普及与政策缺位的反差切入，依次讨论高校困难、澳大利亚调查、评估改革、国际做法，最后提出全国协作方案并承认其约束。",
              "适合考查调查数字对应的论点、作者如何用案例支撑判断、转折词 Still/However 的功能，以及建议与事实的区分。",
              "可学习 universal、assessment、integrity、offload、autonomy 等教育和论证词汇，并注意作者对研究范围的限定。",
              "写作可借鉴“现状差距—具体证据—方案比较—实施障碍—政策建议”的论证框架，避免把澳大利亚样本直接概括为全球结论。"
            ],
            "vocabulary": [
              {
                "word": "universal",
                "phonetic": "/ˌjuːnɪˈvɜːrsəl/",
                "part": "adj.",
                "translation": "普遍的；广泛存在的"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsesmənt/",
                "part": "n.",
                "translation": "评估；考核"
              },
              {
                "word": "integrity",
                "phonetic": "/ɪnˈteɡrəti/",
                "part": "n.",
                "translation": "诚信；正直"
              },
              {
                "word": "vague",
                "phonetic": "/veɪɡ/",
                "part": "adj.",
                "translation": "含糊的；不明确的"
              },
              {
                "word": "offload",
                "phonetic": "/ˈɔːfloʊd/",
                "part": "v.",
                "translation": "转移（任务或负担）"
              },
              {
                "word": "ubiquitous",
                "phonetic": "/juːˈbɪkwɪtəs/",
                "part": "adj.",
                "translation": "无处不在的"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɑːnəmi/",
                "part": "n.",
                "translation": "自主权；自主性"
              },
              {
                "word": "framework",
                "phonetic": "/ˈfreɪmwɜːrk/",
                "part": "n.",
                "translation": "框架；体系"
              },
              {
                "word": "redundant",
                "phonetic": "/rɪˈdʌndənt/",
                "part": "adj.",
                "translation": "多余的；不再必要的"
              },
              {
                "word": "coordinator",
                "phonetic": "/koʊˈɔːrdɪneɪtər/",
                "part": "n.",
                "translation": "协调人；协调者"
              }
            ],
            "sentences": [
              {
                "original": "Out of the 39 unis, only one had published specific guidance around AI.",
                "analysis": [
                  "主干是 only one had published specific guidance，only one 突出样本中明确指导的稀少。",
                  "句首 Out of the 39 unis 限定统计范围，避免将这个澳大利亚高校样本误读成全球普查。",
                  "had published 是过去完成时，表示发布指导发生在文章回顾的调查时点之前。",
                  "可借鉴 “Out of + 数量/群体, only ...” 先交代样本再报告比例或例外。"
                ],
                "translation": "在这 39 所大学中，只有一所发布了关于 AI 的具体指导。"
              },
              {
                "original": "Students cannot be forced to learn through a policy.",
                "analysis": [
                  "句子主干为 Students cannot be forced，cannot 表示制度或现实上的限制。",
                  "be forced 是情态动词后的被动结构，强调学生作为承受者而非施动者。",
                  "to learn 是不定式补足 forced，through a policy 表示试图借助政策实现的途径。",
                  "该句从规则转向学习效果，说明政策能规范行为，却不能单独保证真实学习。"
                ],
                "translation": "不能靠一项政策强迫学生真正学会。"
              },
              {
                "original": "Still, unis must engage deeply and collaboratively with this debate about how to adapt to AI.",
                "analysis": [
                  "句首 Still 承接前文的实施困难，表达“即便如此仍应行动”的让步转折。",
                  "主干是 unis must engage with this debate，must 表示作者提出的必要性判断。",
                  "deeply 与 collaboratively 并列修饰 engage，分别强调讨论深度和协作方式。",
                  "about how to adapt to AI 是介词 about 的补足语，其中 how to adapt 为嵌入式疑问不定式。"
                ],
                "translation": "尽管如此，各大学仍必须深入且协作地参与这场关于如何适应 AI 的讨论。"
              }
            ]
          },
          {
            "title": "Acorns—not deer—can predict a rise in Lyme-spreading ticks",
            "source": "Scientific American",
            "published": "2026-11-08",
            "url": "https://www.scientificamerican.com/article/acorns-not-deer-can-predict-a-rise-in-lyme-spreading-ticks/",
            "readingTime": "2 分钟",
            "topic": "环境与健康 / 橡子、啮齿动物与蜱传莱姆病",
            "summary": "报道介绍纽约州一项持续 35 年的森林研究：秋季红橡树橡子丰收，使更多白足鼠有食物越冬，随后鼠群增长；蜱幼虫以这些鼠为宿主后更容易存活到若蜱阶段，而鼠也更有效地把莱姆病菌传给蜱，因此橡子量可帮助提前近两年判断蜱虫风险。文章同时提醒，鹿仍是成年蜱繁殖的重要宿主，减少或增加少量鹿未必改变蜱量；研究显示若蜱增加也不等于携菌蜱同比增加。结尾指出暖冬对鼠群与蜱的影响可能方向相反，气候变暖对莱姆病总体风险的净效应仍不确定。",
            "reason": [
              "环境变化与传染病风险兼具生态和公共健康意义，适合练习从食物链机制理解社会影响，而非只记单一结论。",
              "文章先修正“鹿决定风险”的直觉，再按橡子—白足鼠—若蜱—人类感染的时间链解释研究发现，最后列出鹿与气温等限制。",
              "可考查研究对象和因果链定位、引语归属、however/but 等让步转折，以及“预测蜱数量”不等于“确定感染率”的推断边界。",
              "可学习 abundant、host、nymph、transmit、net effect 等生态与健康词汇，注意 tick 与 nymph 的生命阶段区别。",
              "写作可借鉴“反直觉发现—机制解释—外部专家补充—证据限制—谨慎结论”的结构，避免把相关链条写成确定因果。"
            ],
            "vocabulary": [
              {
                "word": "acorn",
                "phonetic": "/ˈeɪkɔːrn/",
                "part": "n.",
                "translation": "橡子"
              },
              {
                "word": "nymph",
                "phonetic": "/nɪmf/",
                "part": "n.",
                "translation": "若蜱；蜱的若虫阶段"
              },
              {
                "word": "host",
                "phonetic": "/hoʊst/",
                "part": "n.",
                "translation": "宿主"
              },
              {
                "word": "abundant",
                "phonetic": "/əˈbʌndənt/",
                "part": "adj.",
                "translation": "丰富的；充足的"
              },
              {
                "word": "transmit",
                "phonetic": "/trænzˈmɪt/",
                "part": "v.",
                "translation": "传播；传递"
              },
              {
                "word": "boom",
                "phonetic": "/buːm/",
                "part": "v.",
                "translation": "迅速增长；激增"
              },
              {
                "word": "lipid reserve",
                "phonetic": "/ˈlɪpɪd rɪˈzɜːrv/",
                "part": "n. phr.",
                "translation": "脂质储备"
              },
              {
                "word": "wrinkle",
                "phonetic": "/ˈrɪŋkəl/",
                "part": "n.",
                "translation": "复杂因素；意外转折"
              },
              {
                "word": "net effect",
                "phonetic": "/net ɪˈfekt/",
                "part": "n. phr.",
                "translation": "总体影响；净效应"
              }
            ],
            "sentences": [
              {
                "original": "If you hear “deer tick,” chances are you think “Lyme disease.”",
                "analysis": [
                  "句子由 If 引导的条件状语从句和主句 chances are ... 构成，先设定读者熟悉的联想。",
                  "主句省略了 that：chances are (that) you think ...，that 从句说明这种联想的内容。",
                  "两个引号短语点出大众熟悉的标签和疾病名，为后文反转“看橡子而非鹿”搭桥。",
                  "可借鉴 “If ..., chances are (that) ...” 表达基于常见经验的可能判断，而非绝对事实。"
                ],
                "translation": "如果你听到“鹿蜱”，很可能就会想到“莱姆病”。"
              },
              {
                "original": "But if you want to predict the risk of Lyme disease, don’t look at the deer—count acorns instead.",
                "analysis": [
                  "But 与前句的直觉形成转折，if 从句提出目标，主句给出相反于直觉的建议。",
                  "主句用 don’t look 与 count 两个并列祈使结构形成“不要……而要……”的对照。",
                  "instead 明确标记替代关系；破折号加强“鹿”与“橡子”的信息重心转换。",
                  "risk of Lyme disease 是 predict 的宾语，说明研究关注的是风险预测而非确定诊断。"
                ],
                "translation": "但如果你想预测莱姆病风险，就别盯着鹿，改数橡子。"
              },
              {
                "original": "For now, climate change’s net effect on Lyme disease risk is still unclear.",
                "analysis": [
                  "For now 作句首范围状语，把判断限定在当前证据阶段，而非宣称永远无法判断。",
                  "主干为 climate change’s net effect ... is unclear，所有格短语是主语核心。",
                  "on Lyme disease risk 限定“总体影响”的对象，still 表示不确定状态持续至今。",
                  "作者以 is unclear 保留不确定性，避免把局部升温机制扩写成气候变化的单一结论。"
                ],
                "translation": "目前，气候变化对莱姆病风险的总体影响仍不明确。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-10",
      "status": "ready",
      "ai": {
        "intro": "本期关注 Claude Fable 5.2 发布及其进入 Copilot、Google Research 的多语言互动工具；另核查学生开发权益、免费算力、模型 API 与开放模型。",
        "updates": [
          {
            "event": "Anthropic 发布 Claude Fable 5.2 与 Mythos 5.2",
            "summary": "Anthropic 发布 Fable 5.2 和 Mythos 5.2，称新版本在编码、推理与视觉等方面改进，输出速度最高较前代快 30%，并公布 API 输入每百万 token 8 美元、输出 40 美元的价格。Fable 与 Mythos 基于同一模型，但 Fable 配有网络安全和生物学安全防护。",
            "howTo": "在 Claude Code 的模型选择界面查找 Claude Fable 5.2，给它一个范围明确的课程代码或资料整理任务；逐项检查其方案和结果，再运行测试或对照原始文献。",
            "impact": "适合试做跨文件代码修改、复杂推理或资料分析；完成时间和输出质量仍需人工核验，模型不应替代课程资料与测试。",
            "free": "官方列出的 API 价格为每百万输入 token 8 美元、输出 40 美元；可选快速模式为 16/80 美元。官方未说明地区、Claude 应用账户计划及具体免费额度或配额。",
            "category": "生成式 AI / 编程与研究",
            "source": {
              "name": "Anthropic 官方产品公告",
              "published": "2026-11-09",
              "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2"
            }
          },
          {
            "event": "Claude Fable 5.2 进入 GitHub Copilot",
            "summary": "GitHub 宣布 Claude Fable 5.2 已在 Copilot 中正式可用，可用于大型代码库的复杂多步骤编程任务。该模型默认需要数据保留以运行 Anthropic 安全分类器；特定符合条件的企业客户可申请零数据保留访问。",
            "howTo": "在 VS Code 或 Copilot CLI 打开模型选择器并选择 Claude Fable 5.2；Copilot Business/Enterprise 组织需由管理员先在 Copilot 设置中启用该策略。用课程仓库中的小任务试跑并审阅所有改动。",
            "impact": "使用 Copilot 的项目组可以尝试把复杂任务拆解后交由模型辅助完成；使用前应确认组织的数据保留要求，并人工审查生成的代码。",
            "free": "仅 Copilot Pro+、Max、Business 和 Enterprise 计划可用，且按供应商标价进行用量计费；Business/Enterprise 需管理员启用，逐步开放。默认保留提示与输出；零数据保留仅面向符合条件的企业客户。免费计划、地区及个人配额官方未说明。",
            "category": "编程助手 / GitHub Copilot",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-09",
              "url": "https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot/"
            }
          },
          {
            "event": "Google Research 推出 Language Explorer 多语言互动网站",
            "summary": "Google Research 发布 Language Explorer 在线平台，以可视化和数据呈现全球语言多样性；页面展示语言、人口、国家或地区与文字系统等信息，底层数据包括 Google Research 的 LinguaMeta 开源数据集。它是语言探索工具，不是对话模型。",
            "howTo": "打开 Google Research Language Explorer，浏览世界概览、语言、人口、国家或地区及文字系统视图；选一个课程主题涉及的语言或地区，比较页面数据并记录来源，再用于课堂展示或研究选题。",
            "impact": "可用于语言学、教育或跨文化课程的选题探索，帮助学生把语言分布与地区、人口和文字系统联系起来；页面数据适合作为发现线索，引用前应回查相关资料。",
            "free": "官方提供可直接打开的互动网页；公告没有说明价格、账户要求、地区限制或使用配额，相关信息官方未说明。",
            "category": "多语言研究 / 互动工具",
            "source": {
              "name": "Google Research 官方博客",
              "published": "2026-11-09",
              "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Student Developer Pack：验证学生身份可领开发权益",
            "summary": "GitHub Education 为通过验证的学生提供免费 GitHub Pro，列出每月 3,000 分钟 Actions、180 小时 Codespaces、2 GB Packages 与 20 GB Codespaces 存储；Pack 还提供合作伙伴工具权益。",
            "howTo": "打开 GitHub Education 学生页面并申请验证，按要求提交学校邮箱和/或带日期的官方在读证明；通过后查看 Student Developer Pack 中当前可领取的合作权益。",
            "impact": "可用私有仓库协作课程代码，在 Codespaces 中开展云端开发，并用 Actions 自动运行项目检查；提交前核对实际额度。",
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
            "summary": "Google Colab 无需本地安装即可运行 Jupyter 笔记本；官方确认免费方案提供计算资源，包括 GPU 和 TPU，适用于机器学习、数据科学与教育。",
            "howTo": "打开 Colab，新建或上传 .ipynb 笔记本并运行课程代码；需要加速时查看 Runtime 的硬件选项，重要文件保存到 Drive 或下载笔记本。",
            "impact": "可练习 Python 数据分析、运行小型机器学习课程实验或复现教材代码，而不必先配置本地环境。",
            "free": "官方确认免费使用，但资源不保证且不无限，使用限制会变化；免费托管运行时还受活动限制。具体配额、地区与账号申请条件官方未说明。",
            "category": "免费算力 / 学习环境",
            "source": {
              "name": "Google Colab 官方常见问题",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Gemini Developer API：特定模型提供免费层级",
            "summary": "Google AI Studio 官方价格页列出 Gemini API Free 层级，包含对部分模型的有限访问、免费输入与输出 token，以及 AI Studio 使用权限；免费层内容会用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio，在官方价格页确认某个模型标有 Free 后选择它，尝试处理不含个人或保密内容的课程文本；先核对该模型的速率限制和数据使用说明。",
            "impact": "可用于小规模练习提示设计、文本处理或课程原型，不必先承诺付费；敏感笔记和未发表研究数据不应提交到免费层。",
            "free": "仅价格页列出的特定模型提供免费层，模型访问和速率有限；官方说明免费层内容会用于改进产品。不同模型的具体额度需查对应价格表；地区、账户资格及统一配额官方未说明。",
            "category": "免费 API / 模型试用",
            "source": {
              "name": "Google AI for Developers 官方价格表",
              "published": "官方未说明",
              "url": "https://aistudio.google.com/docs/pricing"
            }
          },
          {
            "event": "Gemini Notebook（原 NotebookLM）：免费浏览器使用",
            "summary": "Google 帮助页说明可用 Gmail 账号免费注册 Gemini Notebook；免费方案每位用户最多 100 个笔记本，每个笔记本最多 50 个来源（笔记来源另计）。",
            "howTo": "用 Gmail 账号打开 Gemini Notebook，新建笔记本并添加课程讲义或公开文章；围绕来源提问后回到原文核对回答和出处。",
            "impact": "适合按课程或论文主题整理阅读材料、生成复习问题；来源数量有上限，且模型生成内容仍应对照原始资料。",
            "free": "可免费注册；浏览器服务仅在官方列出的支持国家和地区向达到当地同意年龄的用户提供。免费版上限为 100 个笔记本/用户、50 个来源/笔记本；地区清单和年龄规则以官方页面为准。",
            "category": "免费学习工具 / 资料整理",
            "source": {
              "name": "Google Gemini Notebook 官方帮助页",
              "published": "官方未说明",
              "url": "https://support.google.com/notebooklm/answer/16213268?hl=en"
            }
          },
          {
            "event": "Qwen3-Embedding-0.6B：Apache-2.0 许可的多语言嵌入模型",
            "summary": "Qwen 官方模型卡提供可下载的 0.6B 文本嵌入模型，标注支持 100 多种语言、32K 上下文，模型仓库采用 Apache-2.0 许可。它用于文本检索、分类和聚类，不是对话模型。",
            "howTo": "打开 Qwen 官方模型卡，按示例安装 Sentence Transformers 并加载 `Qwen/Qwen3-Embedding-0.6B`；将课程笔记和查询句编码后比较相似度，找出相关段落并回读原文。",
            "impact": "可制作小型课程资料语义检索实验，或比较中英文笔记的关联；相似度仅表示文本相关性，不代表事实核验。",
            "free": "权重可从官方模型仓库下载，许可证为 Apache-2.0；无需申请访问许可。硬件要求、运行成本、地区和账号限制官方未说明。",
            "category": "开放模型 / 文本检索",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-Embedding-0.6B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "California voters defeat billionaire tax proposal that divided Democrats",
            "source": "NPR",
            "published": "2026-11-09",
            "url": "https://www.npr.org/2026/11/09/g-s1-151625/california-billionaire-tax-referendum",
            "readingTime": "约 5 分钟（估算）",
            "topic": "经济与社会 / 财富税、医疗筹资与党内分歧",
            "summary": "报道首先交代加州选民否决一项一次性向亿万富翁征收 5% 财富税的提案。支持者称该税可能筹得 1,000 亿美元用于医疗，认为联邦削减医疗项目后州内富人应补足资金；反对者则警告富人迁出会损害税收与经济。文章随后呈现提案如何造成民主党内部的分歧：州党和部分政治人物支持，州长及州长候选人反对，教师工会也质疑拨给学校的比例。报道还以竞选资金差距、科技企业家参与反对运动及配套选票提案说明利益集团的影响，最后回到选举结果，呈现公共服务筹资与财富流动担忧之间的政策冲突。",
            "reason": [
              "财富税、医疗筹资与公共服务分配是经济政策和社会公平类阅读常见主题，可练习识别政策目标与潜在代价。",
              "文章先报投票结果，再交代提案内容与双方论点，继而呈现党内分歧、工会立场和竞选资源，层层补充背景。",
              "适合考查支持者与反对者观点归属、细节定位、因果主张以及 But 等转折标记的作用。",
              "可学习 proposal、proponent、revenue、oppose、ballot 等政策与选举词汇，并注意 could raise 表示预测而非已实现收入。",
              "写作可借鉴“政策目的—支持理由—反对风险—政治背景—结果”的平衡论述框架，避免把倡议方估算写成实际效果。"
            ],
            "vocabulary": [
              {
                "word": "proposal",
                "phonetic": "/prəˈpoʊzəl/",
                "part": "n.",
                "translation": "提议；方案"
              },
              {
                "word": "one-time",
                "phonetic": "/ˌwʌn ˈtaɪm/",
                "part": "adj.",
                "translation": "一次性的"
              },
              {
                "word": "wealth",
                "phonetic": "/welθ/",
                "part": "n.",
                "translation": "财富；资产"
              },
              {
                "word": "proponent",
                "phonetic": "/prəˈpoʊnənt/",
                "part": "n.",
                "translation": "倡议者；支持者"
              },
              {
                "word": "revenue",
                "phonetic": "/ˈrevənuː/",
                "part": "n.",
                "translation": "收入；财政收入"
              },
              {
                "word": "oppose",
                "phonetic": "/əˈpoʊz/",
                "part": "v.",
                "translation": "反对"
              },
              {
                "word": "divide",
                "phonetic": "/dɪˈvaɪd/",
                "part": "v.",
                "translation": "使产生分歧"
              },
              {
                "word": "surge",
                "phonetic": "/sɜːrdʒ/",
                "part": "n.",
                "translation": "激增；涌现"
              },
              {
                "word": "ballot",
                "phonetic": "/ˈbælət/",
                "part": "n.",
                "translation": "选票；投票"
              },
              {
                "word": "set aside",
                "phonetic": "/set əˈsaɪd/",
                "part": "phr.v.",
                "translation": "留出；拨出"
              }
            ],
            "sentences": [
              {
                "original": "The novel proposal would have charged billionaires a one-time 5% tax on most of their overall wealth, including their ownership in companies.",
                "analysis": [
                  "主干是 The proposal would have charged billionaires a tax，说明提案拟向亿万富翁征税。",
                  "would have charged 表示对未获通过方案的假设性描述，不是已经征收的事实。",
                  "a one-time 5% tax 交代税率和一次性特征，on most of their overall wealth 补充计税对象。",
                  "including 引出补充范围，说明财富还包括公司持股；可用 including 引入具体例证。"
                ],
                "translation": "这项新提案原本会对亿万富翁的大部分总财富征收一次性 5% 的税，其中包括他们持有的公司股权。"
              },
              {
                "original": "Proponents said the tax could raise $100 billion for healthcare.",
                "analysis": [
                  "主句主干是 Proponents said，交代这是支持者提出的说法。",
                  "the tax could raise $100 billion 是 said 后的宾语从句，that 被省略。",
                  "could 表示可能性或预期，不能据此认定税款已筹得。",
                  "for healthcare 表示资金用途，可借此结构概括政策收入的指定去向。"
                ],
                "translation": "支持者称，这项税收可能为医疗筹集 1,000 亿美元。"
              },
              {
                "original": "But the measure divided Democrats in a state where they heavily outnumber Republicans.",
                "analysis": [
                  "But 承接前文并引出转折，提示读者从支持理由转向政治分歧。",
                  "主句主干是 the measure divided Democrats，measure 指前文税收提案。",
                  "where 引导定语从句修饰 a state，补充加州两党人数背景。",
                  "heavily outnumber 表示人数上显著多于；该句说明党派优势并未消除内部意见分化。"
                ],
                "translation": "然而，这项提案在民主党人数远超共和党的加州引发了党内分歧。"
              }
            ]
          },
          {
            "title": "Auckland hit by swarms of bees after milder than usual New Zealand winter",
            "source": "The Guardian",
            "published": "2026-11-09",
            "url": "https://www.theguardian.com/environment/2026/nov/10/bee-swarm-nz-auckland-swarming-bees-new-zealand",
            "readingTime": "约 5 分钟（估算）",
            "topic": "环境与社会 / 暖冬、蜂群行为与城市生态",
            "summary": "报道从奥克兰蜂群数量异常增加切入：当地养蜂协会称每天接到约五至十通移除蜂群的求助电话，较往年每天不到五通增加，累计已有至少百次出勤。文章先解释春夏分蜂是蜂群扩张后寻找新巢或食物的自然过程，再引述养蜂人和生态学者讨论较温和的冬季、春季提前可能使蜂群更早、更大规模分出；新西兰 2026 年冬季为有记录以来第三暖。报道也指出未管理的蜂群若携带瓦螨可能威胁其他蜂类，同时蜂群较早增殖也可能是今年蜂群状况良好的信号。结尾保留不同影响并存的判断，没有把单一暖冬简单定为已证实的唯一原因。",
            "reason": [
              "文章连接气候异常、城市生活和传粉昆虫，适合讨论气候变化如何通过生态过程影响社区。",
              "结构由奥克兰求助电话增加的新闻切入，解释分蜂机制，再引述养蜂人和生态学者，最后呈现风险与潜在积极信号。",
              "适合考查数据比较、专家观点归属、因果推断以及末段如何修正前文的单一负面印象。",
              "可学习 swarm、colony、brood、exacerbate、unpredictable 等生态与变化类表达，并辨析 might 表示推测而非确定因果。",
              "写作可借鉴“可观察现象—机制解释—风险—另一种可能结果”的结构，论证环境议题时保留证据边界。"
            ],
            "vocabulary": [
              {
                "word": "swarming",
                "phonetic": "/ˈswɔːrmɪŋ/",
                "part": "n.",
                "translation": "蜂群分蜂；蜂群聚集"
              },
              {
                "word": "exacerbate",
                "phonetic": "/ɪɡˈzæsərbeɪt/",
                "part": "v.",
                "translation": "加剧；使恶化"
              },
              {
                "word": "field (calls)",
                "phonetic": "/fiːld/",
                "part": "v.",
                "translation": "接听；处理（来电或问题）"
              },
              {
                "word": "call-out",
                "phonetic": "/ˈkɔːl aʊt/",
                "part": "n.",
                "translation": "出勤处理；上门服务"
              },
              {
                "word": "colony",
                "phonetic": "/ˈkɑːləni/",
                "part": "n.",
                "translation": "蜂群；群体"
              },
              {
                "word": "hive",
                "phonetic": "/haɪv/",
                "part": "n.",
                "translation": "蜂巢；蜂箱"
              },
              {
                "word": "brood",
                "phonetic": "/bruːd/",
                "part": "n.",
                "translation": "（蜂的）幼虫群"
              },
              {
                "word": "placid",
                "phonetic": "/ˈplæsɪd/",
                "part": "adj.",
                "translation": "温顺的；平静的"
              },
              {
                "word": "unmanaged",
                "phonetic": "/ˌʌnˈmænɪdʒd/",
                "part": "adj.",
                "translation": "未受管理的"
              },
              {
                "word": "unpredictable",
                "phonetic": "/ˌʌnprɪˈdɪktəbəl/",
                "part": "adj.",
                "translation": "难以预测的"
              }
            ],
            "sentences": [
              {
                "original": "In past years, it was under five a day.",
                "analysis": [
                  "主干是 it was under five，it 指前文协会每天接到的求助电话数。",
                  "In past years 是时间状语，限定比较的历史时期。",
                  "under five a day 是省略表达，完整含义为每天少于五通电话。",
                  "该句与紧邻的 five to 10 calls a day 构成数量对比，可用于概括趋势证据。"
                ],
                "translation": "往年每天不到五通。"
              },
              {
                "original": "New Zealand experienced its third warmest winter on record in 2026, according to Earth Sciences NZ.",
                "analysis": [
                  "主干是 New Zealand experienced its third warmest winter，说明当年冬季的记录排名。",
                  "on record 限定比较范围，意为“有记录以来”。",
                  "in 2026 是时间状语；third warmest 表示第三暖，而非最暖。",
                  "according to Earth Sciences NZ 标明信息来源，写作时可用该结构区分报道依据和作者判断。"
                ],
                "translation": "据新西兰地球科学机构称，新西兰 2026 年的冬季为有记录以来第三暖。"
              },
              {
                "original": "Milder temperatures over winter might mean a colony develops a larger brood of eggs, larvae and pupae.",
                "analysis": [
                  "主干为 Milder temperatures might mean...，提出一种可能的解释。",
                  "over winter 作时间状语，说明温度变化发生在冬季期间。",
                  "a colony develops a larger brood 是 mean 的宾语从句，that 被省略。",
                  "might mean 降低因果断言强度；eggs, larvae and pupae 列举 brood 的组成阶段。"
                ],
                "translation": "冬季气温较暖可能意味着蜂群会繁育出更多卵、幼虫和蛹。"
              }
            ]
          }
        ]
      }
    }
  ].slice(0, 7)
};
