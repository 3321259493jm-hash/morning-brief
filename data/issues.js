window.BRIEFING_DATA = {
  "updatedAt": "2026-11-14T11:03:58+08:00",
  "issues": [
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
    },
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
    }
  ]
};
