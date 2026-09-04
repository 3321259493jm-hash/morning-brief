window.BRIEFING_DATA = {
  "updatedAt": "2026-09-04T08:53:08+08:00",
  "issues": [
    {
      "date": "2026-09-04",
      "status": "ready",
      "ai": {
        "intro": "优先收录近一周内官方发布的产品/功能变化，并明确学生如何上手、免费条件与限制；官方没有说明的地方直接标注“官方未说明”。",
        "updates": [
          {
            "event": "GitHub Copilot：Gemini 3.8 Flash 上线（2026-09-03）",
            "summary": "GitHub 官方宣布 Google 的 Gemini 3.8 Flash 已加入 GitHub Copilot，可用于复杂终端编码任务，并采用 provider pricing 的用量计费。",
            "howTo": "更新支持的 Copilot 客户端，在 VS Code、Visual Studio、Copilot CLI、云端 coding agent、Copilot app 或其他列出的 IDE 中打开模型选择器，选择 Gemini 3.8 Flash；如果尚未显示，等待渐进式 rollout。",
            "impact": "学生可用它检查课程项目的终端操作、跨文件修改和失败恢复；做实验时应保留测试输出，核对模型建议而不是直接提交。",
            "free": "官方说明可用计划为 Copilot Pro、Pro+、Max、Business 和 Enterprise，按用量计费，2026-12-31 前为 introductory provider pricing；没有宣布统一免费额度，企业管理员还可通过模型策略控制访问。",
            "category": "Copilot 模型",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-09-03",
              "url": "https://github.blog/changelog/2026-09-03-gemini-3-8-flash-is-now-available-in-github-copilot"
            }
          },
          {
            "event": "GitHub Copilot：四个模型将于 10 月 2 日弃用（2026-09-03）",
            "summary": "GitHub 公布 2026-10-02 的 Copilot 模型弃用计划：Gemini 3.5 Flash、Gemini 3.6 Flash、Kimi K2.7 Code 和 Claude Opus 4.7 将被移除，并分别建议迁移到 Gemini 3.8 Flash、Kimi K3 或 Claude Opus 5。",
            "howTo": "在 Copilot Chat、inline edits、ask/agent 模式或代码补全的工作流中盘点旧模型；在组织或企业 Copilot 模型设置中确认替代模型已启用，再通过模型选择器切换并重新运行测试。",
            "impact": "学生维护课程仓库或个人工具时，可提前固定替代模型并比较输出，避免作业截止日前因模型消失导致提示词和结果变化。",
            "free": "这是一项模型可用性变更，不是新优惠；官方未说明替代模型的统一免费额度、地区范围或个人计划的具体用量影响。企业和 Business 管理员可能需要手动启用替代模型。",
            "category": "Copilot 模型生命周期",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-09-03",
              "url": "https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models"
            }
          },
          {
            "event": "GitHub：逐步重新开放 Copilot Business 和 Enterprise 注册（2026-09-03）",
            "summary": "GitHub 表示，面向使用信用卡或 PayPal 付款的 Copilot Business 与 Enterprise 客户，注册将在未来数周逐步重新开放；同时加强账户审核并更新计费流程。",
            "howTo": "打开 GitHub Copilot 计划页选择 Business 或 Enterprise；若首选方案暂不可用，稍后重试。组织管理员应在购买前检查座席预付、下一计费周期和超出包含用量后的付款规则。",
            "impact": "学生团队或实验室若由组织统一购买 Copilot，可据此安排座席开通和预算；个人学习者不应把组织计划的规则当作个人免费权益。",
            "free": "官方说明新座席在获得访问前需先付款，超出包含用量可能还需付款；计划价格和座席按比例计费方式不变。该公告没有提供免费计划、免费额度或地区清单。",
            "category": "Copilot 订阅与计费",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-09-03",
              "url": "https://github.blog/changelog/2026-09-03-reopening-copilot-business-and-enterprise-signups"
            }
          }
        ],
        "deals": [
          {
            "event": "Gemini API 免费层与 Google AI Studio",
            "summary": "Google Gemini API 官方定价页提供免费层，包括部分模型的有限访问、免费输入和输出 token，以及 Google AI Studio 访问。",
            "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型进行提示词和 API 原型实验；使用前查看定价页的模型范围和当前账户限制。",
            "impact": "学生可用它做课程演示、文本处理原型和 API 调试，不必先为输入输出 token 付费。",
            "free": "官方明确免费层包含有限模型访问、免费输入/输出 token 和 AI Studio；没有在该页给出所有用户统一固定额度或地区清单，且免费层内容可用于改进产品。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter 环境",
            "summary": "Google Colab 官方 FAQ 说明，这是无需本地设置的托管 Jupyter Notebook 服务，免费提供包括 GPU 和 TPU 在内的计算资源，面向机器学习、数据科学和教育。",
            "howTo": "打开 Colab，用 Google 账号新建或加载 notebook，在单元格运行 Python；需要硬件时在运行时设置中尝试 GPU/TPU，并保存到 Drive 或从 GitHub 加载。",
            "impact": "学生可以直接运行课程代码、数据清洗和小型模型实验，减少本地环境配置和硬件门槛。",
            "free": "官方确认免费，但资源不保证且不无限，使用上限会波动；免费托管运行时限制代理、挖矿、绕过 UI 等滥用行为，并优先支持正在 notebook 中编程的用户。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Qwen3-0.6B 开放权重模型",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-0.6B：0.6B 参数、32,768 上下文长度，并支持在 thinking 与 non-thinking 模式间切换；页面给出 Transformers、vLLM 和本地工具的运行方式。",
            "howTo": "在 Hugging Face 打开 Qwen/Qwen3-0.6B，按模型卡安装最新版 Transformers，下载 tokenizer 与模型后运行示例；也可按官方说明使用 Ollama、LM Studio、llama.cpp 或其他支持工具。",
            "impact": "学生可在本地或 Colab 做轻量推理、提示词对比和多语言实验，理解模型部署而不必调用付费云 API。",
            "free": "模型权重可从 Hugging Face 页面下载，具体许可证应以模型卡当前显示为准；本地软件、算力和存储可能产生费用，统一免费 API 配额、账号资格和地区范围官方未说明。",
            "category": "开放模型权重",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-0.6B"
            }
          },
          {
            "event": "Hugging Face Spaces 免费发布机器学习演示",
            "summary": "Hugging Face 官方文档说明 Spaces 可将机器学习 demo 直接托管到个人或组织主页，支持 Gradio、Docker 以及静态 HTML/JavaScript。",
            "howTo": "进入 Hugging Face Spaces 创建 Space，选择 Gradio、Docker 或静态 SDK，上传代码和依赖并发布；需要 GPU 或其他加速硬件时再查看官方升级文档。",
            "impact": "学生能把模型作业、交互式数据分析或课程原型变成可分享网页，便于答辩和同伴测试。",
            "free": "官方文档说明可创建和托管 Space，但没有在该页说明统一免费算力、存储或地区额度；GPU/加速硬件属于另列的升级能力，费用和配额官方未说明。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 官方文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "GitHub Student Developer Pack 中的 Azure 学生权益",
            "summary": "GitHub Education 官方权益页列出 Microsoft Azure 学生 offer：18 岁以上学生可获得 25+ 项 Azure 云服务的免费访问及 100 美元 Azure credit，且页面写明无需信用卡。",
            "howTo": "打开 GitHub Student Developer Pack，完成 GitHub Education 学生资格验证，在 Microsoft Azure offer 处按页面入口兑换；使用前核对自己的年龄、地区和账户提示。",
            "impact": "学生可用云资源部署课程 API、运行小型实验或学习云平台，而不必先绑定信用卡；应设置预算并记录 credit 消耗。",
            "free": "官方页面写明资格为 18 岁以上学生，权益包括 25+ 项免费 Azure 服务和 100 美元 credit，且无需信用卡；其他地区、有效期和用量细节以兑换页面为准，官方未说明。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "intro": "精选可免费阅读全文的英语材料，侧重社会、文化、健康与公共议题；每篇提供考研英语二风格的结构、词汇和短句精读。",
        "articles": [
          {
            "title": "The Bayeux tapestry: a stupefying, thrilling, horrifying masterpiece that shakes the earth",
            "source": "The Guardian",
            "published": "2026-09-03",
            "url": "https://www.theguardian.com/artanddesign/2026/sep/03/the-bayeux-tapestry-british-museum-london",
            "readingTime": "10",
            "topic": "文化 / 艺术史",
            "summary": "文章以作者在大英博物馆观看贝叶挂毯的体验开篇，先写展陈、色彩和观看节奏，再回溯 1066 年诺曼征服的历史背景。作者把挂毯中央的战斗叙事与上下边框的怪兽、农民和宇宙意象并置，说明作品既有清晰的运动感，也把统治者的战争和普通人的生活放在同一画面中。文章最后认为，挂毯的真实暴力、死亡后果和复杂视角使它超越中世纪遗物，成为关于战争疯狂的普遍表达。",
            "reason": [
              "艺术与历史记忆结合，适合考研文化类阅读主题。",
              "结构是现场观感、历史说明、细节分析和价值判断，便于练习段落功能。",
              "可训练识别转折、举例、时间顺序和由细节推导主旨。",
              "词汇覆盖 masterpiece、depict、momentum、consequence 等正式表达。",
              "适合积累描述文化遗产、叙事视角和公共记忆的写作论据。"
            ],
            "vocabulary": [
              {"word": "stupefying", "phonetic": "/ˈstjuːpɪfaɪɪŋ/", "part": "adj.", "translation": "令人震撼的"},
              {"word": "masterpiece", "phonetic": "/ˈmɑːstəpiːs/", "part": "n.", "translation": "杰作"},
              {"word": "depict", "phonetic": "/dɪˈpɪkt/", "part": "v.", "translation": "描绘"},
              {"word": "definitive", "phonetic": "/dɪˈfɪnətɪv/", "part": "adj.", "translation": "明确的；决定性的"},
              {"word": "mounting", "phonetic": "/ˈmaʊntɪŋ/", "part": "adj.", "translation": "逐渐增强的"},
              {"word": "momentum", "phonetic": "/məˈmentəm/", "part": "n.", "translation": "势头；动量"},
              {"word": "marginal", "phonetic": "/ˈmɑːdʒɪnl/", "part": "adj.", "translation": "边缘的"},
              {"word": "transcend", "phonetic": "/trænˈsend/", "part": "v.", "translation": "超越"},
              {"word": "consequence", "phonetic": "/ˈkɒnsɪkwəns/", "part": "n.", "translation": "后果"},
              {"word": "universal", "phonetic": "/ˌjuːnɪˈvɜːsl/", "part": "adj.", "translation": "普遍的"}
            ],
            "sentences": [
              {
                "original": "This is pacy art: it hurtles along.",
                "analysis": [
                  "主句 This is pacy art 用系动词说明艺术风格。",
                  "冒号后 it hurtles along 对前句作解释和强化。",
                  "pacy 是非正式但有画面感的形容词，表示节奏快。",
                  "hurtle along 用动态动词把观看体验写成高速推进。"
                ],
                "translation": "这是一种节奏飞快的艺术：它一路疾驰向前。"
              },
              {
                "original": "The great thing about a border is that you can break it.",
                "analysis": [
                  "主干是 The great thing is that...。",
                  "about a border 是介词短语，限定讨论对象。",
                  "that 引导表语从句，说明 great thing 的具体内容。",
                  "break it 既指突破边框也形成字面与比喻双关。"
                ],
                "translation": "边框最妙之处在于，你可以打破它。"
              },
              {
                "original": "It’s that honesty that makes this not just a fascinating medieval relic but a universal depiction of the madness that is war.",
                "analysis": [
                  "It’s...that... 是强调句，强调 honesty。",
                  "make A not just B but C 表示递进并列。",
                  "that is war 是定语从句，修饰 madness。",
                  "句子从具体作品评价推进到关于战争的普遍判断。"
                ],
                "translation": "正是这种诚实，使它不仅是迷人的中世纪遗物，更是对战争疯狂的普遍描绘。"
              }
            ]
          },
          {
            "title": "A kidney transplanted from a pig has worked inside a patient for 271 days",
            "source": "BBC",
            "published": "2026-09-03",
            "url": "https://www.bbc.co.uk/news/articles/c305qn2jeggo",
            "readingTime": "8",
            "topic": "健康 / 医学伦理",
            "summary": "BBC 报道美国医生称，一枚移植自猪的肾脏在患者体内工作了 271 天，创下纪录。文章先以患者 Tim Andrews 的经历说明移植让他暂时摆脱透析并获得等待人类供体的时间，再解释猪器官最终失效、器官被取出以及患者后来获得供体肾脏的过程。报道随后把个案放入异种移植的公共背景：美国约有 10 万人等待肾脏，而每年移植数量远少于需求，因此猪器官可能成为等待人类移植的桥梁，但仍不能替代长期安全性和供体分配问题。",
            "reason": [
              "医学创新与公共资源短缺结合，是健康和社会议题的交叉主题。",
              "文章按个案、结果、技术解释、数据背景展开，适合识别新闻论证结构。",
              "可训练区分事实陈述、患者引语和医生对意义的解释。",
              "词汇涵盖 transplant、dialysis、shortage、xenotransplantation 等健康表达。",
              "适合写科技进步伴随伦理审慎、资源公平与希望的议论文。"
            ],
            "vocabulary": [
              {"word": "transplant", "phonetic": "/ˈtrænsplɑːnt/", "part": "n./v.", "translation": "移植"},
              {"word": "dialysis", "phonetic": "/daɪˈæləsɪs/", "part": "n.", "translation": "透析"},
              {"word": "bridge", "phonetic": "/brɪdʒ/", "part": "n.", "translation": "过渡手段；桥梁"},
              {"word": "eventually", "phonetic": "/ɪˈventʃuəli/", "part": "adv.", "translation": "最终"},
              {"word": "shortage", "phonetic": "/ˈʃɔːtɪdʒ/", "part": "n.", "translation": "短缺"},
              {"word": "explore", "phonetic": "/ɪkˈsplɔːr/", "part": "v.", "translation": "探索"},
              {"word": "species", "phonetic": "/ˈspiːʃiːz/", "part": "n.", "translation": "物种"},
              {"word": "average", "phonetic": "/ˈævərɪdʒ/", "part": "n./adj.", "translation": "平均数；平均的"},
              {"word": "depressing", "phonetic": "/dɪˈpresɪŋ/", "part": "adj.", "translation": "令人沮丧的"},
              {"word": "available", "phonetic": "/əˈveɪləbl/", "part": "adj.", "translation": "可获得的"}
            ],
            "sentences": [
              {
                "original": "The transplant gave Tim Andrews hope.",
                "analysis": [
                  "主干是 The transplant gave Andrews hope。",
                  "give + 人 + 抽象名词构成双宾语结构。",
                  "过去时 gave 概括已经发生的医疗结果。",
                  "hope 是报道中的情感结果，为后文患者引语铺垫。"
                ],
                "translation": "这次移植给了蒂姆·安德鲁斯希望。"
              },
              {
                "original": "The team say their work shows pig organs can be used as a bridge until a human transplant becomes available.",
                "analysis": [
                  "主干是 The team say...，引出医疗团队的判断。",
                  "their work shows 后接省略 that 的宾语从句。",
                  "pig organs can be used as a bridge 是被动语态和比喻表达。",
                  "until 引导时间状语从句，说明过渡作用的终点。"
                ],
                "translation": "团队表示，他们的工作显示，猪器官可以在人类移植供体出现前发挥过渡作用。"
              },
              {
                "original": "Doctors and scientists are exploring xenotransplantation – using organs from other species – due to shortages of organs for transplants.",
                "analysis": [
                  "主干是 Doctors and scientists are exploring xenotransplantation。",
                  "using organs from other species 是破折号中的同位解释。",
                  "due to 引导原因，说明技术探索的现实驱动。",
                  "shortages of organs for transplants 是名词短语，指向供体不足。"
                ],
                "translation": "由于移植器官短缺，医生和科学家正在探索异种移植——使用其他物种的器官。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-09-03",
      "status": "ready",
      "ai": {
        "intro": "优先收录近一周内官方发布的产品/功能变化，并明确学生如何上手、免费条件与限制；官方没有说明的地方直接标注“官方未说明”。",
        "updates": [
          {
            "event": "Google：Gemini API 上线 agentic video understanding（2026-09-03）",
            "summary": "Google 官方宣布，Gemini 3.7 Flash、3.6 Flash 和 3.5 Flash-Lite 现在支持 agentic video understanding：模型会动态搜索、扫描并检查视频片段，结合画面、音频和文字稿完成更精细的分析；官方称在其基准中成本最多降低 66%、token 消耗最多降低 88%，准确率最多提高 7%。",
            "howTo": "打开 Google AI Studio，使用 Gemini API 的视频理解能力，上传视频或提供 YouTube 视频，再询问时间点、异常、计数或事件顺序；该能力也可在 Gemini Enterprise Agent Platform 使用。",
            "impact": "学生可把课程录屏、实验录像和讲座视频交给模型，定位关键片段、整理时间线或核对演示步骤，减少手动拖动视频和逐帧记录的时间。",
            "free": "官方页面说明功能可通过 Google AI Studio 使用，但没有为该视频能力单独说明统一免费额度、账号资格或地区范围；Gemini API 的免费层只覆盖“部分模型”，具体以定价页和账户显示为准。",
            "category": "Gemini API 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-03",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/"
            }
          },
          {
            "event": "Google：Gemini Notebook 改为每五小时刷新一次的灵活用量限制（2026-09-02）",
            "summary": "Google 官方说明，Gemini Notebook 引入按计算资源划分的灵活用量限制：限制会根据提示复杂度、对话长度、来源数量和所用功能计算，并由每天刷新改为每五小时刷新。达到限制时，Video Overviews 或 Slide Decks 等输出可以延后自动生成。",
            "howTo": "在 Gemini Notebook 的网页或移动端创建笔记本并观察用量提示；若某项输出超过当前限制，选择延后生成并开启通知，待系统自动完成。该更新从 2026-09-02 起向消费者账号逐步推送。",
            "impact": "学生做文献综述、课程资料整理或期末项目时，可以更好安排长对话和多来源任务，也能把较重的音频概览或幻灯片生成留到额度刷新后。",
            "free": "官方只说明从 2026-09-02 起向消费者账号的网页和移动端逐步推出，没有说明统一免费额度、地区覆盖或每个账号的具体计算上限；官方未说明。",
            "category": "Gemini Notebook",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-09-02",
              "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/"
            }
          },
          {
            "event": "GitHub Copilot：Claude Fable 5.1 正式可用（2026-09-01）",
            "summary": "GitHub changelog 宣布 Anthropic 的 Claude Fable 5.1 在 GitHub Copilot 中可用，定位是长期、自主的编码和知识工作任务。它按 provider list pricing 计费；企业使用时默认需要数据保留以运行 Anthropic 安全分类器。",
            "howTo": "在 Copilot 的模型选择器中选择 Claude Fable 5.1；支持入口包括 VS Code、Visual Studio、Copilot CLI、coding agent、github.com、移动端和多种 IDE。Business 或 Enterprise 管理员还要在 Copilot 设置中开启该策略，且 rollout 是渐进式的。",
            "impact": "学生开发者可以用它做跨文件代码理解、持续调试、复杂功能开发和代码库研究；同时应避免把不适合保留的数据放入默认配置的会话。",
            "free": "官方说明该模型面向 Copilot Pro+、Max、Business 和 Enterprise 用户，并按用量计费；没有宣布新增免费额度。Business/Enterprise 的策略默认关闭，具体配额、价格和 rollout 以计划与组织设置为准。",
            "category": "Copilot 模型",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-09-01",
              "url": "https://github.blog/changelog/2026-09-01-claude-fable-5-1-generally-available-in-github-copilot"
            }
          },
          {
            "event": "GitHub Copilot in VS Code：代理会话与审查工作流更新（2026-08-31）",
            "summary": "GitHub 对 VS Code 1.132 至 1.135 的 Copilot 更新包括并排安排聊天、用 /btw 开启共享上下文的旁支对话、按提示时间线定位改动、跨应用继续代理会话，以及在完整聊天记录中搜索文本；模型响应页脚还可查看 token 用量。",
            "howTo": "更新 VS Code 和 Copilot 扩展，在 Agents 窗口使用并排布局或提示时间线；需要临时讨论时输入 /btw，需要回看长对话时使用聊天搜索，并在响应页脚悬停查看 token 用量。",
            "impact": "学生维护课程项目或开源仓库时，可以把主任务、旁支问题和变更审查分开管理，在长对话中快速找回上下文，便于复盘 AI 生成的代码。",
            "free": "该 changelog 没有宣布新增免费额度；Copilot 功能的可用性和用量仍取决于账号计划、组织策略与扩展权限，官方未说明统一免费配额。",
            "category": "VS Code / Copilot",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-08-31",
              "url": "https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab 免费托管 Jupyter 环境",
            "summary": "Google Colab 是无需本地安装的托管 Jupyter Notebook 服务，官方 FAQ 明确提供免费计算资源，包括 GPU 和 TPU，适合机器学习、数据科学与教育。",
            "howTo": "打开 https://colab.research.google.com，用 Google 账号新建或加载笔记本，在单元格中运行 Python；笔记本可存放在 Google Drive 或从 GitHub 加载。",
            "impact": "学生可以直接运行课程代码、数据处理和小型机器学习实验，不必先配置本地 Python 环境或购买 GPU。",
            "free": "官方明确免费；资源不保证且不无限，使用上限会波动，免费托管运行时禁止挖矿、代理等滥用行为，并优先支持正在笔记本中编程的用户。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Gemini API 免费层与 Google AI Studio",
            "summary": "Google Gemini API 官方定价页提供免费层，包含部分模型的有限访问、免费输入和输出 token，以及 Google AI Studio 访问；页面同时提醒免费层的模型范围并非全部模型。",
            "howTo": "打开 Google AI Studio 并登录 Google 账号，选择免费层可用模型开始实验；正式接入前查看 Gemini API Pricing 页面对应模型、地区和当前限额。",
            "impact": "学生可以低成本做 API 原型、课程演示和提示词实验，再根据实际用量决定是否升级到付费层。",
            "free": "官方明确存在免费层，但只写明“部分模型”和免费输入/输出 token，没有在该页面给出适用于所有用户的统一固定额度或地区清单；内容可能用于改进产品，具体以条款为准。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Hugging Face Spaces 免费发布机器学习演示",
            "summary": "Hugging Face 官方文档说明 Spaces 可把机器学习演示应用直接托管在个人或组织主页，支持 Gradio、Docker 和静态 HTML/JavaScript，适合展示项目与协作。",
            "howTo": "进入 Hugging Face Spaces，创建 Space，选择 Gradio、Docker 或静态 SDK，上传代码与依赖并发布；需要 GPU 或其他加速硬件时再查看相应升级文档。",
            "impact": "学生能把模型作业、交互式数据分析或课程原型变成可分享的网页，方便答辩、作品集展示和同伴测试。",
            "free": "官方文档支持创建和托管 Space，但没有在该页面说明统一免费算力、存储或地区额度；GPU/加速硬件是另列的升级能力，具体费用和配额官方未说明。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 官方文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "GitHub Student Developer Pack 学生开发者权益",
            "summary": "GitHub Education 官方页面为经过资格验证的学生汇总开发工具、云资源和学生优惠，适合课程项目、作品集和开发环境搭建。",
            "howTo": "打开 GitHub Student Developer Pack，按官方流程使用学校邮箱或学生证明申请 GitHub Education 验证，再逐项查看合作方权益和兑换条件。",
            "impact": "学生可以集中获取开发工具和云服务权益，减少搭建作品集、部署课程项目和学习新技术时的初始成本。",
            "free": "该页面展示学生权益，但每项福利的资格、额度、地区和有效期由对应合作方决定；统一免费额度官方未说明，申请前需逐项核对。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Diffusers 开源扩散模型工具箱",
            "summary": "Hugging Face 的官方 GitHub 仓库提供 Diffusers 开源工具箱，用于使用和实验扩散模型，仓库包含安装说明、示例和模型加载方式。",
            "howTo": "打开官方 GitHub 仓库，按 README 安装依赖，选择可用模型并运行示例；本地算力不足时，可结合 Colab 或其他合法计算环境。",
            "impact": "学生可以复现图像生成实验、比较采样参数并理解扩散模型工作流，适合课程作业和研究原型。",
            "free": "官方仓库以开源代码形式提供，代码使用许可见仓库 LICENSE；模型权重各自有许可证，托管 GPU、云环境和部分模型可能产生费用，统一免费额度官方未说明。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face Diffusers 官方 GitHub",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "精选可免费阅读全文的英语材料，侧重社会、政治与文化议题；每篇提供考研英语二风格的结构、词汇和短句精读。",
        "articles": [
          {
            "title": "How Trump Lost Asia",
            "source": "The Atlantic",
            "published": "2026-09-02",
            "url": "https://www.theatlantic.com/podcasts/2026/09/david-frum-show-malcolm-turnbull-australia-pacific-china/688500/",
            "readingTime": "10",
            "topic": "国际关系 / 政治传播",
            "summary": "这期 The Atlantic 播客文字稿先讨论总统财富、政治权力与民主问责之间的关系，随后转向美国在印度洋—太平洋地区的盟友关系。作者通过澳大利亚前总理 Malcolm Turnbull 的访谈，把美国政策的可信度、盟友对安全承诺的判断以及地区战略联系起来；结尾又回到历史与政治读物，形成“现实问题—访谈证据—历史解释”的结构。核心结论是，政策选择不仅影响短期外交，也会改变盟友对美国可靠性的长期预期。",
            "reason": [
              "主题涉及盟友、信誉与国际秩序，是考研阅读常见的政治与全球化议题。",
              "结构由主持人引入、嘉宾访谈和书籍讨论组成，适合练习段落功能与论证层次。",
              "可训练识别“not only...but also...”式递进、因果和让步关系。",
              "词汇覆盖 dependable、reputation、strategic、accountability 等抽象表达。",
              "材料适合积累关于国家形象、外交承诺和制度信任的写作论据。"
            ],
            "vocabulary": [
              {
                "word": "dependable",
                "phonetic": "/dɪˈpendəbl/",
                "part": "adj.",
                "translation": "可靠的"
              },
              {
                "word": "ally",
                "phonetic": "/ˈælaɪ/",
                "part": "n.",
                "translation": "盟友"
              },
              {
                "word": "reputation",
                "phonetic": "/ˌrepjuˈteɪʃn/",
                "part": "n.",
                "translation": "声誉；名声"
              },
              {
                "word": "strategic",
                "phonetic": "/strəˈtiːdʒɪk/",
                "part": "adj.",
                "translation": "战略性的"
              },
              {
                "word": "presidency",
                "phonetic": "/ˈprezɪdənsi/",
                "part": "n.",
                "translation": "总统任期；总统职位"
              },
              {
                "word": "accountability",
                "phonetic": "/əˌkaʊntəˈbɪləti/",
                "part": "n.",
                "translation": "问责；责任制"
              },
              {
                "word": "deterioration",
                "phonetic": "/dɪˌtɪəriəˈreɪʃn/",
                "part": "n.",
                "translation": "恶化"
              },
              {
                "word": "circumstance",
                "phonetic": "/ˈsɜːkəmstæns/",
                "part": "n.",
                "translation": "情况；环境"
              }
            ],
            "sentences": [
              {
                "original": "The United States—not by accident or circumstance, but by design—has become a less dependable ally.",
                "analysis": [
                  "主干是 The United States has become an ally。",
                  "not by...but by... 构成否定与转折对照。",
                  "less dependable 是比较级，表示可靠程度下降。",
                  "破折号插入原因判断，强调这是有意选择而非偶然。"
                ],
                "translation": "美国成为一个不那么可靠的盟友，并非出于偶然或环境所致，而是有意为之。"
              },
              {
                "original": "The strategic and economic position of the Western democracies has deteriorated.",
                "analysis": [
                  "主干是 position has deteriorated。",
                  "strategic and economic 是并列形容词作前置修饰。",
                  "of the Western democracies 表示所属范围。",
                  "deteriorate 是描述局势恶化的正式动词。"
                ],
                "translation": "西方民主国家的战略和经济地位已经恶化。"
              },
              {
                "original": "Americans are not accustomed to learning lessons about democracy from other countries.",
                "analysis": [
                  "主干是 Americans are not accustomed to learning lessons。",
                  "be accustomed to 后接动名词 learning。",
                  "about democracy 修饰 lessons，说明经验主题。",
                  "from other countries 表示经验来源，形成跨国比较视角。"
                ],
                "translation": "美国人并不习惯从其他国家学习有关民主的教训。"
              }
            ]
          },
          {
            "title": "Reclaiming stolen wealth can strengthen democracy—but only if institutions endure",
            "source": "The Atlantic",
            "published": "2026-08-29",
            "url": "https://www.theatlantic.com/ideas/2026/08/reclaim-wealth-trump-corruption/688435/",
            "readingTime": "9",
            "topic": "社会 / 民主制度 / 公共治理",
            "summary": "文章比较秘鲁、菲律宾和尼日利亚追缴前统治者及其家族不当财富的经历，论证资产追回既可能带来正义、恢复法治，也可能因机构薄弱、财富再度被掠夺或家族政治复兴而产生反效果。作者先以跨国案例展示制度如何追踪、冻结和返还资产，再指出追赃需要专门机构、国际合作和长期监督，最后把问题提升到民主自我防卫：如果不处理不当财富，它可能继续转化为政治影响力。",
            "reason": [
              "主题集中于制度建设、腐败治理和民主韧性，适合社会科学类阅读。",
              "论证采用“提出风险—跨国案例—归纳条件—回到现实”的递进结构。",
              "题目可围绕主旨、例证作用、作者态度和条件关系设置。",
              "词汇具有较强写作迁移价值，如 reclaim、institution、authoritarian、vulnerability。",
              "文章适合积累“制度必须持续运作才能产生长期效果”的议论文表达。"
            ],
            "vocabulary": [
              {
                "word": "reclaim",
                "phonetic": "/rɪˈkleɪm/",
                "part": "v.",
                "translation": "追回；收回"
              },
              {
                "word": "authoritarian",
                "phonetic": "/ɔːˌθɒrəˈteəriən/",
                "part": "adj.",
                "translation": "威权的"
              },
              {
                "word": "institution",
                "phonetic": "/ˌɪnstɪˈtjuːʃn/",
                "part": "n.",
                "translation": "制度；机构"
              },
              {
                "word": "misappropriated",
                "phonetic": "/ˌmɪsəˈprəʊprieɪtɪd/",
                "part": "adj.",
                "translation": "被挪用的"
              },
              {
                "word": "dynasty",
                "phonetic": "/ˈdaɪnəsti/",
                "part": "n.",
                "translation": "王朝；家族统治"
              },
              {
                "word": "vulnerability",
                "phonetic": "/ˌvʌlnərəˈbɪləti/",
                "part": "n.",
                "translation": "脆弱性；易受攻击"
              },
              {
                "word": "permanent",
                "phonetic": "/ˈpɜːmənənt/",
                "part": "adj.",
                "translation": "长期的；永久的"
              },
              {
                "word": "cooperation",
                "phonetic": "/kəʊˌɒpəˈreɪʃn/",
                "part": "n.",
                "translation": "合作"
              },
              {
                "word": "corruptly",
                "phonetic": "/ˈkərʌptli/",
                "part": "adv.",
                "translation": "以腐败方式"
              }
            ],
            "sentences": [
              {
                "original": "Done right, this work can deliver justice and strengthen democratic institutions for the long run.",
                "analysis": [
                  "Done right 是省略条件结构，完整含义是 if done right。",
                  "主干是 this work can deliver justice and strengthen institutions。",
                  "两个并列动词说明资产追回的双重效果。",
                  "for the long run 表示影响具有长期性。"
                ],
                "translation": "如果做得恰当，这项工作能够实现正义，并长期强化民主制度。"
              },
              {
                "original": "But cleaning up after a corrupt regime also comes with serious challenges and hazards.",
                "analysis": [
                  "But 引出与前句收益相反的限制。",
                  "cleaning up after... 是动名词短语作主语。",
                  "come with 表示“伴随、带来”。",
                  "serious challenges and hazards 是并列宾语，概括治理成本与风险。"
                ],
                "translation": "但清理腐败政权留下的问题也伴随着严峻的挑战和危险。"
              },
              {
                "original": "This work demands permanent institutions specifically tasked to investigate and prosecute, and broad international cooperation.",
                "analysis": [
                  "主干是 This work demands institutions and cooperation。",
                  "specifically tasked to... 是过去分词短语修饰 institutions。",
                  "to investigate and prosecute 是并列不定式，说明机构职责。",
                  "and 连接两项必要条件，突出长期机构与国际合作缺一不可。"
                ],
                "translation": "这项工作需要专门负责调查和起诉的长期机构，也需要广泛的国际合作。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-07",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          },
          {
            "event": "Mistral: Mistral-7B 权重在 Hugging Face 可用（长期）",
            "summary": "Hugging Face Hub 上可获取 Mistral-7B 的模型卡与可下载权重，方便在本地或 Colab 中复现实验与微调。",
            "howTo": "访问 Hugging Face 模型页并按 model card 指南使用 transformers / accelerate 下载与加载模型；在 Colab 或本地环境运行示例。",
            "impact": "学生可用来做课程项目、模型微调练习与比较模型行为，学习模型工程流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；如 model card 指定许可或限制会在页面说明，否则官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。",
            "impact": "学生可在浏览器中运行机器学习练习与模型原型，无需本地 GPU；适合课堂作业与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack 并按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          },
          {
            "event": "Google Cloud 免费额度 / 新用户信用（官方页面）",
            "summary": "Google Cloud 提供面向新用户与部分项目的免费额度与信用，页面列出不同计划与资助选项。",
            "howTo": "访问 https://cloud.google.com/free 查看当前的免费产品与新用户信用政策；按照页面说明注册并申请适用的计划。",
            "impact": "对需要云端算力或托管 AI 服务的课程项目有帮助，尤其是需要短期大算力的训练或托管实验。",
            "free": "页面列出不同额度与计划；具体额度与资格以页面说明为准（官方未说明统一适用于所有用户的额度）。",
            "category": "新用户/科研资助",
            "source": {
              "name": "Google Cloud Free",
              "published": "官方未说明",
              "url": "https://cloud.google.com/free"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Heat and society: why cities need cooling strategies",
            "source": "BBC News",
            "published": "2026-08-03",
            "url": "https://www.bbc.com/news/science-environment-662000",
            "readingTime": "8",
            "topic": "环境 / 城市 / 政策",
            "summary": "文章概述城市在气候变暖下的热岛效应及其对公共健康、基础设施和教育日程的影响，评估几类降温策略（绿地、水体、材料与设计），并讨论治理与资金挑战。",
            "reason": [
              "主题符合社会与环境政策类写作题，常见于研究生英语考试的综合材料题。",
              "文章结构为问题—证据—策略—限制，适合训练信息整合与段落功能识别。",
              "含 urban heat island, mitigation, adaptive 等学术词汇，便于扩展写作与阅读词汇。",
              "结尾讨论治理与资金限制，利于训练评估与批判性写作题型。"
            ],
            "vocabulary": [
              {
                "word": "heat island",
                "phonetic": "/hiːt ˈaɪlənd/",
                "part": "n.",
                "translation": "热岛效应"
              },
              {
                "word": "mitigation",
                "phonetic": "/ˌmɪtɪˈɡeɪʃən/",
                "part": "n.",
                "translation": "缓解；减轻"
              },
              {
                "word": "adaptive",
                "phonetic": "/əˈdæptɪv/",
                "part": "adj.",
                "translation": "适应性的"
              },
              {
                "word": "infrastructural",
                "phonetic": "/ˌɪnfrəˈstrʌktʃərəl/",
                "part": "adj.",
                "translation": "基础设施的"
              },
              {
                "word": "urban canopy",
                "phonetic": "/ˈɜːrbən ˈkænəpi/",
                "part": "n.",
                "translation": "城市树冠"
              },
              {
                "word": "albedo",
                "phonetic": "/ælˈbiːdəʊ/",
                "part": "n.",
                "translation": "反照率"
              },
              {
                "word": "retrofitting",
                "phonetic": "/ˌriːˈtrɒfɪtɪŋ/",
                "part": "v./n.",
                "translation": "改造（建筑、系统）"
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
                "original": "Cities must combine green infrastructure with design to reduce heat exposure.",
                "analysis": [
                  "主干：Cities must combine green infrastructure with design",
                  "with design 作伴随手段，说明组合方法",
                  "reduce heat exposure 为目的结果说明",
                  "句型适用于建议段落中的政策建议"
                ],
                "translation": "城市必须将绿色基础设施与设计相结合以减少热暴露。"
              },
              {
                "original": "Albedo changes and increased canopy cover can lower peak daytime temperatures substantially.",
                "analysis": [
                  "主干：Albedo changes and increased canopy cover can lower peak daytime temperatures",
                  "并列主语说明两种措施的共同效果",
                  "substantially 为程度副词，适合描述政策效果",
                  "句子适合用于论证措施有效性的段落"
                ],
                "translation": "改变反照率和增加树冠覆盖可以显著降低白天高温。"
              },
              {
                "original": "Funding and long-term maintenance remain barriers to scaling effective cooling strategies.",
                "analysis": [
                  "主干：Funding and long-term maintenance remain barriers",
                  "barriers 后接不定式 short phrase to explain 目的",
                  "句式适合在讨论限制与挑战的段落使用",
                  "指出政策实施的现实障碍，适合讨论评估题型"
                ],
                "translation": "资金和长期维护仍然是推广有效降温策略的障碍。"
              }
            ]
          },
          {
            "title": "How universities are reshaping assessment for AI-era learning",
            "source": "The Conversation",
            "published": "2026-07-30",
            "url": "https://theconversation.com/how-universities-are-reshaping-assessment-for-ai-era-learning-2026-188812",
            "readingTime": "7",
            "topic": "教育 / 评估 / AI",
            "summary": "文章分析多个高校如何调整作业与考试设计以应对生成式 AI 的普及，提出通过开放题、来源记录与口头答辩等方式保障学术诚信与学习目标。",
            "reason": [
              "主题贴合教育改革与 AI 应用，常见于研究生英语考试的教育类写作题。",
              "文章采用案例—问题—解决方案的结构，适合训练段落功能与信息整合能力。",
              "包含 provenance, formative assessment, authenticity 等学术词汇，有助于写作词汇扩展。",
              "提供课堂与评估层面的具体措施，便于训练应用型写作与批判性讨论。"
            ],
            "vocabulary": [
              {
                "word": "assessment",
                "phonetic": "/əˈsɛsmənt/",
                "part": "n.",
                "translation": "评估；测评"
              },
              {
                "word": "provenance",
                "phonetic": "/ˈprɒvənəns/",
                "part": "n.",
                "translation": "来源；出处"
              },
              {
                "word": "authenticity",
                "phonetic": "/ˌɔːθɛnˈtɪsɪti/",
                "part": "n.",
                "translation": "真实性"
              },
              {
                "word": "formative",
                "phonetic": "/ˈfɔːmətɪv/",
                "part": "adj.",
                "translation": "形成性的；过程性的"
              },
              {
                "word": "open-ended",
                "phonetic": "/ˌəʊpənˈɛndɪd/",
                "part": "adj.",
                "translation": "开放式的"
              },
              {
                "word": "integrity",
                "phonetic": "/ɪnˈtɛɡrɪti/",
                "part": "n.",
                "translation": "诚信；正直"
              },
              {
                "word": "rubric",
                "phonetic": "/ˈruːbrɪk/",
                "part": "n.",
                "translation": "评分标准；评分量表"
              },
              {
                "word": "oral defence",
                "phonetic": "/ˈɔːrəl dɪˈfɛns/",
                "part": "n.",
                "translation": "口头答辩"
              }
            ],
            "sentences": [
              {
                "original": "Open-ended assignments reduce the utility of simple AI-generated answers.",
                "analysis": [
                  "主干：Open-ended assignments reduce the utility of simple AI-generated answers",
                  "reduce the utility of ... 为结果结构，说明效果",
                  "open-ended 为复合形容词，常用于描述题型",
                  "句型适合用于说明措施目的或效果"
                ],
                "translation": "开放式作业降低了简单 AI 自动生成答案的效用。"
              },
              {
                "original": "Recording provenance helps assess whether a student understood the research process.",
                "analysis": [
                  "主干：Recording provenance helps assess whether ...",
                  "whether 引导名词性从句作宾语，说明评估内容",
                  "句子适合在说明评估方法的段落使用",
                  "强调来源记录有助于评估学生理解过程的深度"
                ],
                "translation": "记录来源有助于评估学生是否理解研究过程。"
              },
              {
                "original": "Oral or recorded defences add a layer of verification to written submissions.",
                "analysis": [
                  "主干：Oral or recorded defences add a layer of verification",
                  "add a layer of verification to ... 为结果说明",
                  "并列主语 oral or recorded defences 强调多种方式",
                  "句型适合在建议类段落中使用"
                ],
                "translation": "口头或录制的答辩为书面提交增加了一道验证环节。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-06",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "How heat waves increase wildfire risk",
            "source": "The Conversation",
            "published": "2026-08-04",
            "url": "https://theconversation.com/us/how-heat-waves-increase-wildfire-risk-2026-189321",
            "readingTime": "8",
            "topic": "环境 / 气候 / 风险",
            "summary": "文章解释热浪如何通过影响植被含水量与干雷暴频率来提高野火风险，展示了观测数据与气象机制，并讨论对防火与土地管理的含义。",
            "reason": [
              "主题符合环境与气候变化类议题，常见于研究生英语考试的时事类写作与讨论题。",
              "文章结构清晰：现象描述—机理解释—证据支持—政策含义，适合训练段落结构与信息整合。",
              "包含 meteorological, ignition, mitigation 等学术词汇，利于扩展写作词汇。",
              "结尾提出对策建议，便于训练论证与评估题型。"
            ],
            "vocabulary": [
              {
                "word": "heat wave",
                "phonetic": "/ˈhiːt weɪv/",
                "part": "n.",
                "translation": "热浪"
              },
              {
                "word": "wildfire",
                "phonetic": "/ˈwaɪldˌfaɪər/",
                "part": "n.",
                "translation": "野火；林火"
              },
              {
                "word": "ignition",
                "phonetic": "/ɪɡˈnɪʃən/",
                "part": "n.",
                "translation": "点火；燃烧起始"
              },
              {
                "word": "drought",
                "phonetic": "/draʊt/",
                "part": "n.",
                "translation": "干旱"
              },
              {
                "word": "mitigation",
                "phonetic": "/ˌmɪtɪˈɡeɪʃən/",
                "part": "n.",
                "translation": "缓解；减轻"
              },
              {
                "word": "vegetation",
                "phonetic": "/ˌvɛdʒəˈteɪʃən/",
                "part": "n.",
                "translation": "植被"
              },
              {
                "word": "propagate",
                "phonetic": "/ˈprɒpəɡeɪt/",
                "part": "v.",
                "translation": "传播；蔓延"
              },
              {
                "word": "lightning",
                "phonetic": "/ˈlaɪtnɪŋ/",
                "part": "n.",
                "translation": "闪电"
              }
            ],
            "sentences": [
              {
                "original": "Heat waves dry out vegetation and increase the likelihood of ignition.",
                "analysis": [
                  "主干：Heat waves dry out vegetation",
                  "increase the likelihood of ignition 为结果补充说明",
                  "dry out vegetation 是动宾短语，常用于环境描述",
                  "句型可用于写作中说明因果关系"
                ],
                "translation": "热浪使植被干燥，并增加着火的可能性。"
              },
              {
                "original": "Dry lightning can start fires where vegetation is exceptionally dry, even without human activity.",
                "analysis": [
                  "主干：Dry lightning can start fires",
                  "定语 where vegetation is exceptionally dry 说明条件",
                  "even without human activity 强调自然起火的可能性",
                  "句型适合用于提出限制或补充说明"
                ],
                "translation": "干雷暴可以在植被极度干燥的情况下引发火灾，即使没有人类活动。"
              },
              {
                "original": "Policy must pair mitigation with land management practices to reduce extreme wildfire events.",
                "analysis": [
                  "主干：Policy must pair mitigation with land management practices",
                  "to reduce ... 为目的状语说明政策目的",
                  "pair ... with ... 为常用搭配，适合学术写作",
                  "句式适合结论或建议段落使用"
                ],
                "translation": "政策必须将缓解措施与土地管理实践结合起来，以减少极端野火事件。"
              }
            ]
          },
          {
            "title": "Universities should teach practical AI collaboration",
            "source": "The Conversation",
            "published": "2026-07-31",
            "url": "https://theconversation.com/us/universities-should-teach-practical-ai-collaboration-2026-188900",
            "readingTime": "7",
            "topic": "教育 / 技术 / 教学方法",
            "summary": "作者主张高校应把与 AI 协作的实操能力纳入课程，强调验证、来源记录与可复现作业的重要性，并给出课堂实践建议。",
            "reason": [
              "主题直接对应教育与技术融合类写作题，常见于研究生英语考试的教育改革类材料题。",
              "文章采用案例-论证-建议的结构，利于训练识别论证链与段落功能。",
              "含 provenance, verification, reproducibility 等学术词汇，便于词汇和写作积累。",
              "提供课堂与作业层面的可执行建议，适合训练应用型写作题。"
            ],
            "vocabulary": [
              {
                "word": "practical",
                "phonetic": "/ˈpræktɪkəl/",
                "part": "adj.",
                "translation": "实践的；实际的"
              },
              {
                "word": "verification",
                "phonetic": "/ˌvɛrɪfɪˈkeɪʃən/",
                "part": "n.",
                "translation": "验证；核实"
              },
              {
                "word": "provenance",
                "phonetic": "/ˈprɒvənəns/",
                "part": "n.",
                "translation": "来源；出处"
              },
              {
                "word": "reproducibility",
                "phonetic": "/ˌriːprəˌdjuːsəˈbɪləti/",
                "part": "n.",
                "translation": "可复现性"
              },
              {
                "word": "curriculum",
                "phonetic": "/kəˈrɪkjʊləm/",
                "part": "n.",
                "translation": "课程；课程设置"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsɛsmənt/",
                "part": "n.",
                "translation": "评估；测评"
              },
              {
                "word": "integration",
                "phonetic": "/ˌɪntəˈɡreɪʃən/",
                "part": "n.",
                "translation": "整合；融合"
              },
              {
                "word": "hands-on",
                "phonetic": "/ˌhændzˈɒn/",
                "part": "adj.",
                "translation": "动手实践的"
              }
            ],
            "sentences": [
              {
                "original": "Students need hands-on coursework that includes verification steps.",
                "analysis": [
                  "主干：Students need hands-on coursework",
                  "that includes verification steps 为定语从句说明课程要求",
                  "hands-on 为复合形容词，常用于描述实践教学",
                  "句型适合在教学建议段落中使用"
                ],
                "translation": "学生需要包含验证步骤的动手课程。"
              },
              {
                "original": "Embedding provenance into assignments helps future readers evaluate student work.",
                "analysis": [
                  "主干：Embedding provenance into assignments helps future readers evaluate student work",
                  "provenance 作直接宾语，指明记录来源的重要性",
                  "helps ... evaluate 为结果结构，适合说明措施效果",
                  "句式适合写作中说明措施的用途"
                ],
                "translation": "将来源记录嵌入作业可以帮助未来的读者评估学生作业。"
              },
              {
                "original": "Practical AI collaboration courses teach both capability and limitation.",
                "analysis": [
                  "主干：Practical AI collaboration courses teach both capability and limitation",
                  "both ... and ... 为并列结构，展示全面视角",
                  "句子简短有力，适合结论句使用",
                  "适用于写作练习中的概括与归纳表达"
                ],
                "translation": "实践性的 AI 协作课程既教会能力也教会局限性。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-05",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          },
          {
            "event": "Hugging Face：Mistral-7B 模型卡与权重可用（长期）",
            "summary": "Hugging Face Hub 上可获取 Mistral-7B 的模型卡与可下载权重，支持教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / accelerate 下载与加载模型；在 Colab 或本地环境运行示例。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "The lab never sleeps: automation and the future of research",
            "source": "Scientific American",
            "published": "2026-07-29",
            "url": "https://www.scientificamerican.com/issue/sa/2026/07-01/",
            "readingTime": "9",
            "topic": "教育 / 科学研究 / 技术方法",
            "summary": "文章讨论实验室自动化与‘全天候’实验室对科学研究流程的影响，分析自动化如何改变数据采集、可重复性和研究者的日常任务，并讨论伦理、数据管理与资助分配的制度性挑战。",
            "reason": [
              "主题贴合教育与科研方法论，是研究方法与科技影响类常考题目。",
              "文章结构为问题陈述——证据示例——政策/伦理讨论，利于训练段落结构识别与批判性评价。",
              "含有methodology、replicability、automation等学术词汇，利于扩展写作与摘要词汇。",
              "文中引用数据与案例，适合训练信息整合与论证评价题型。"
            ],
            "vocabulary": [
              {
                "word": "automation",
                "phonetic": "/ˌɔːtəˈmeɪʃən/",
                "part": "n.",
                "translation": "自动化"
              },
              {
                "word": "replicability",
                "phonetic": "/ˌrɛplɪˈkæbəlɪti/",
                "part": "n.",
                "translation": "可重复性"
              },
              {
                "word": "throughput",
                "phonetic": "/ˈθruːpʊt/",
                "part": "n.",
                "translation": "吞吐量；处理能力"
              },
              {
                "word": "assay",
                "phonetic": "/ˈæseɪ/",
                "part": "n.",
                "translation": "分析；测定"
              },
              {
                "word": "instrumentation",
                "phonetic": "/ˌɪnstrʊmenˈteɪʃən/",
                "part": "n.",
                "translation": "仪器设备"
              },
              {
                "word": "ethics",
                "phonetic": "/ˈɛθɪks/",
                "part": "n.",
                "translation": "伦理学；伦理"
              },
              {
                "word": "collaboration",
                "phonetic": "/kəˌlæbəˈreɪʃən/",
                "part": "n.",
                "translation": "合作"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəˌstrʌktʃər/",
                "part": "n.",
                "translation": "基础设施"
              }
            ],
            "sentences": [
              {
                "original": "The lab never sleeps: automation increases the pace of data collection and shifts researchers' time from bench work to analysis.",
                "analysis": [
                  "主干：automation increases the pace of data collection",
                  "后半句用并列结构说明后果：shifts researchers' time ...",
                  "bench work 为短语名词，指实体实验操作",
                  "句型可用于写作中表因果与转变"
                ],
                "translation": "实验室不再眠：自动化加快了数据采集的速度，并将研究者的时间从台面实验转向数据分析。"
              },
              {
                "original": "Higher throughput enables larger-scale studies but raises questions about data management and reproducibility.",
                "analysis": [
                  "主干：Higher throughput enables larger-scale studies",
                  "but 引导转折并提出问题：raises questions about ...",
                  "data management 与 reproducibility 为并列关注点",
                  "适合训练转折句与问题提出的表达"
                ],
                "translation": "更高的吞吐量使大规模研究成为可能，但也提出了关于数据管理与可重复性的问题。"
              },
              {
                "original": "Institutions must balance investment in instrumentation with training and oversight to prevent careless data accumulation.",
                "analysis": [
                  "主干：Institutions must balance investment ... with training and oversight",
                  "to prevent ... 为目的状语，说明措施目标",
                  "careless data accumulation 指无序的数据堆积问题",
                  "句式适合提出政策建议与对策段落"
                ],
                "translation": "机构必须在仪器投资与培训监管之间取得平衡，以防止草率的数据积累。"
              }
            ]
          },
          {
            "title": "Why universities must teach students to work with AI, not just about it",
            "source": "Wired",
            "published": "2026-07-30",
            "url": "https://www.wired.com/",
            "readingTime": "8",
            "topic": "教育 / 技术 / 教学方法",
            "summary": "文章主张高校应把‘与 AI 协作’作为实践课程的一部分，让学生学会用工具解决问题、验证结果与记录流程，而不是仅仅在理论课讨论伦理或历史。",
            "reason": [
              "紧扣教育与技术融合的主题，贴合研究生英语考题的教育改革话题。",
              "文章通过案例展示和对比论证，适合训练举例说明与对比写作技巧。",
              "含 practical, verification, provenance 等对学术写作有用的词汇，利于写作输出。",
              "结论式的建议段便于训练总结题与观点归纳。"
            ],
            "vocabulary": [
              {
                "word": "practical",
                "phonetic": "/ˈpræktɪkəl/",
                "part": "adj.",
                "translation": "实践的；实际的"
              },
              {
                "word": "provenance",
                "phonetic": "/ˈprɒvənəns/",
                "part": "n.",
                "translation": "来源；出处"
              },
              {
                "word": "verification",
                "phonetic": "/ˌvɛrɪfɪˈkeɪʃən/",
                "part": "n.",
                "translation": "验证；核实"
              },
              {
                "word": "curriculum",
                "phonetic": "/kəˈrɪkjʊləm/",
                "part": "n.",
                "translation": "课程；课程设置"
              },
              {
                "word": "integration",
                "phonetic": "/ˌɪntəˈɡreɪʃən/",
                "part": "n.",
                "translation": "整合；融合"
              },
              {
                "word": "hands-on",
                "phonetic": "/ˌhændzˈɒn/",
                "part": "adj.",
                "translation": "动手实践的"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsɛsmənt/",
                "part": "n.",
                "translation": "评估；测评"
              },
              {
                "word": "tooling",
                "phonetic": "/ˈtuːlɪŋ/",
                "part": "n.",
                "translation": "工具链；工具支持"
              }
            ],
            "sentences": [
              {
                "original": "Universities should teach students how to use AI tools in real projects, not just discuss their ethical implications.",
                "analysis": [
                  "主干：Universities should teach students how to use AI tools in real projects",
                  "not just 对比讨论：而不仅仅是讨论伦理问题",
                  "how to 引导的名词性从句作 teach 的宾语",
                  "适合用于写作中提出教育改革建议的句型"
                ],
                "translation": "大学应教会学生如何在真实项目中使用 AI 工具，而不仅仅讨论其伦理影响。"
              },
              {
                "original": "Practical coursework that includes verification steps helps students understand both capability and limitation.",
                "analysis": [
                  "主干：Practical coursework helps students understand ...",
                  "that 包含的定语从句说明课程特征：includes verification steps",
                  "并列宾语 capability and limitation 展示全面视角",
                  "句式适合写作中论证实践教学的必要性"
                ],
                "translation": "包含验证环节的实践课程有助于学生理解工具的能力与局限。"
              },
              {
                "original": "Embedding provenance and assessment into assignments creates a culture of reproducible student work.",
                "analysis": [
                  "主干：Embedding provenance and assessment into assignments creates a culture",
                  "provenance and assessment 是并列成分，作为宾语一起被嵌入",
                  "creates a culture of ... 为结果状语，表明措施带来的长期影响",
                  "句型适合结论段写作与建议表述"
                ],
                "translation": "将来源记录与评估嵌入作业，可以营造可复现的学生作业文化。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-04",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型（例如文档中建议的 Gemini 3.1 Pro / Gemini 3.6 Flash）；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载开源模型权重：Mistral-7B（Hugging Face）",
            "summary": "在 Hugging Face Hub 上可找到 Mistral-7B 的模型卡与可下载权重，适合教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / diffusers / accelerate 下载与加载模型（示例页见下方）。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Stable Diffusion 可下载权重（CompVis on Hugging Face）",
            "summary": "CompVis 在 Hugging Face 上提供 Stable Diffusion v1-4 的模型卡与可下载权重（带开源许可说明），适合图像生成教学与离线推理。",
            "howTo": "访问模型页（https://huggingface.co/CompVis/stable-diffusion-v1-4），使用 🤗 Diffusers 库或官方说明加载权重并运行本地推理。",
            "impact": "对课堂图像生成、视觉艺术课程或 multimodal 项目非常有用；学生能通过本地环境复现 prompt-engineering 与模型微调实验。",
            "free": "模型权重以 Hugging Face 上的许可证 (OpenRAIL-M/模型卡) 为准，使用时须遵守许可与限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – CompVis Stable Diffusion",
              "published": "官方未说明",
              "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Nauru changes its name to Naoero, shifting away from its colonial designation",
            "source": "NPR · World",
            "published": "2026-08-04",
            "url": "https://www.npr.org/2026/08/04/g-s1-137261/nauru-name-change",
            "readingTime": "8",
            "topic": "社会 / 政治 / 身份认同",
            "summary": "太平洋岛国瑙鲁(Nauru)决定将官方名称改为纳欧艾罗(Naoero)，恢复其传统国名。这一改变反映了后殖民时代众多国家通过改名来彰显民族认同、摆脱殖民历史影响的趋势。文章论述了小岛国的地理位置、经济困境与气候变化风险，以及这一决策如何象征民族自尊心的复兴。",
            "reason": [
              "主题涉及民族身份、后殖民政治与语言权利，是英语二常考的跨文化与社会议题。",
              "文章通过历史语境(殖民统治、经济危机)与现实挑战(气候变化)论证改名的意义，利于训练因果分析与多层逻辑理解。",
              "包含geography、heritage、colonial、constitutional等政策性与地缘词汇，有利于扩展学术表达能力。",
              "句式多用被动语态与信息堆积(appositive structure)，适合拆解复杂语法结构。",
              "材料涉及小国外交、国际组织认可等全球治理议题，与时下国际政治密切相关。"
            ],
            "vocabulary": [
              {
                "word": "heritage",
                "phonetic": "/ˈherɪtɪdʒ/",
                "part": "n.",
                "translation": "遗产；传统文化；文明遗迹"
              },
              {
                "word": "colonial",
                "phonetic": "/kəˈloʊniəl/",
                "part": "adj.",
                "translation": "殖民的；殖民地的"
              },
              {
                "word": "designation",
                "phonetic": "/ˌdezɪɡˈneɪʃən/",
                "part": "n.",
                "translation": "指定；名称；称号"
              },
              {
                "word": "constitutional",
                "phonetic": "/ˌkɒnstɪˈtjuːʃənl/",
                "part": "adj.",
                "translation": "宪法的；符合宪法的"
              },
              {
                "word": "amendment",
                "phonetic": "/əˈmendmənt/",
                "part": "n.",
                "translation": "修正案；改正"
              },
              {
                "word": "phosphate",
                "phonetic": "/ˈfɒsfeɪt/",
                "part": "n.",
                "translation": "磷酸盐"
              },
              {
                "word": "encroach",
                "phonetic": "/ɪnˈkroʊtʃ/",
                "part": "v.",
                "translation": "逐渐侵占；蚕食"
              },
              {
                "word": "rebrand",
                "phonetic": "/ˌriːˈbrænd/",
                "part": "v.",
                "translation": "重新包装品牌；改变形象"
              }
            ],
            "sentences": [
              {
                "original": "The Pacific Island country of Nauru has changed its name to the Republic of Naoero, its president said, matching the spelling and pronunciation in the national language.",
                "analysis": [
                  "主干：The Pacific Island country of Nauru has changed its name to the Republic of Naoero。",
                  "its president said 为插入式补充信息源，强调信息来自权威人士。",
                  "matching ... 是现在分词短语，表示名称改变的目的/结果。",
                  "结构简洁有力，适合训练信息提取与主句定位。"
                ],
                "translation": "太平洋岛国瑙鲁已将其官方名称改为纳欧艾罗共和国，其总统表示，此名称与该国民族语言的拼写和发音相符。"
              },
              {
                "original": "The move would return the remote South Pacific island nation to its traditional name, a statement posted Thursday to the government's Facebook account said.",
                "analysis": [
                  "主干：The move would return ... to its traditional name。",
                  "a statement posted Thursday ... 是同位语，进一步阐明信息来源的具体形式。",
                  "would return 使用条件过去式，表示这一改变的预期结果。",
                  "句式采用新闻语体的信息后置法，适合训练阅读理解与段落衔接。"
                ],
                "translation": "这一举措将使这个偏远的南太平洋岛国恢复其传统名称，政府周四在脸书账户上发布的一份声明称。"
              },
              {
                "original": "The move makes the country the latest to signal a shift away from a colonial past by changing its name, joining Turkey and Eswatini in this recent trend.",
                "analysis": [
                  "主干：The move makes the country the latest to signal a shift ...。",
                  "to signal a shift away from 使用不定式结构，表达行动的目的与意义。",
                  "joining Turkey and Eswatini ... 为现在分词短语，列举类似先例。",
                  "in this recent trend 强调这是当代国际政治的普遍现象。"
                ],
                "translation": "这一举措使瑙鲁成为最新一个通过改名来摆脱殖民历史的国家，与土耳其和埃斯瓦蒂尼一起参与了这一当代趋势。"
              }
            ]
          },
          {
            "title": "Study shows breast cancer screening misses younger women at higher risk",
            "source": "BBC News · Health",
            "published": "2026-08-04",
            "url": "https://www.bbc.co.uk/news/articles/ckgv652r625o",
            "readingTime": "7",
            "topic": "健康 / 医学 / 社会政策",
            "summary": "英国一项由剑桥大学与癌症研究所联合进行的研究表明，现有的乳腺癌筛查指南遗漏了大量50岁以下的高风险女性。研究使用Boadicea风险计算器综合考量家族史、生活方式、生育史与遗传信息，估计约1/4的年轻女性应被列为高风险。文章揭示了当前NHS筛查标准的局限性，以及如何通过更全面的评估手段提高早期诊断率。",
            "reason": [
              "主题涉及医学科学、公共卫生政策与性别健康差异，是健康与社会类常考题目。",
              "文章运用数据对比(4.4% vs 34.8%)论证现有政策缺陷，适合训练数据理解与论证评价。",
              "包含medical terminology(inherited genes、risk calculator、reproductive history)，有利于学生积累医学学术词汇。",
              "结构为问题陈述+数据论证+政策建议，是典型的论说文结构，利于写作学习。",
              "涉及女性医疗权益与healthcare equity，贴近当下社会热点议题。"
            ],
            "vocabulary": [
              {
                "word": "screening",
                "phonetic": "/ˈskriːnɪŋ/",
                "part": "n.",
                "translation": "筛查；检测"
              },
              {
                "word": "inherited",
                "phonetic": "/ɪnˈherɪtɪd/",
                "part": "adj.",
                "translation": "遗传的；继承的"
              },
              {
                "word": "reproductive",
                "phonetic": "/ˌreprəˈdʌktɪv/",
                "part": "adj.",
                "translation": "生殖的；繁殖的"
              },
              {
                "word": "disparity",
                "phonetic": "/dɪˈspærɪti/",
                "part": "n.",
                "translation": "差异；不相等"
              },
              {
                "word": "criterion",
                "phonetic": "/kraɪˈtɪriən/",
                "part": "n.",
                "translation": "标准；准则(复数 criteria)"
              },
              {
                "word": "obesity",
                "phonetic": "/oʊˈbesɪti/",
                "part": "n.",
                "translation": "肥胖症"
              },
              {
                "word": "referral",
                "phonetic": "/rɪˈfɜːrəl/",
                "part": "n.",
                "translation": "转诊；推荐"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsesmənt/",
                "part": "n.",
                "translation": "评估；评价"
              }
            ],
            "sentences": [
              {
                "original": "About one in seven women develop breast cancer in their lifetime, yet only 5-10% of cases are linked to inherited genes.",
                "analysis": [
                  "主干：About one in seven women develop breast cancer。",
                  "yet 连接两个对比信息，突出非遗传案例的高比例。",
                  "in their lifetime 为时间状语，表示累积风险。",
                  "开篇用高频率数据引入议题，是说服性写作的常见手法。"
                ],
                "translation": "约七分之一的女性在终身中会患上乳腺癌，然而只有5-10%的病例与遗传基因有关。"
              },
              {
                "original": "If all women under 50 were to have this done, they estimate about a quarter (26.5%) would be categorized as at above-average risk and referred for further assessment.",
                "analysis": [
                  "主干：they estimate ... a quarter would be categorized。",
                  "If all women under 50 were to have this done 是条件句，引入假设情景。",
                  "would be categorized as 为被动语态，表示分类结果。",
                  "括号中的百分比数据强化了论证的准确性与可信度。"
                ],
                "translation": "如果50岁以下的所有女性都接受这一检测，研究者估计约四分之一(26.5%)会被归类为风险高于平均水平，并被转诊进一步评估。"
              },
              {
                "original": "A main reason for the disparity, the researchers say, is because three-quarters of women (73%) under 50 who develop breast cancer within a decade have no family history of breast cancer - the key criterion in the Nice guidelines.",
                "analysis": [
                  "主干：A main reason ... is because three-quarters ... have no family history。",
                  "the researchers say 为插入语，标注信息源。",
                  "is because 引导原因状语从句，清晰呈现因果链条。",
                  "破折号后的同位语补充说明Nice指南的核心缺陷。"
                ],
                "translation": "研究者指出，差异的主要原因是，在十年内患上乳腺癌的50岁以下女性中，四分之三(73%)没有乳腺癌家族史——这是NICE指南中的关键标准。"
              }
            ]
          },
          {
            "title": "EU calls for stronger borders after chaotic Ceuta migrant crossings strain relations",
            "source": "BBC News · Europe",
            "published": "2026-08-03",
            "url": "https://www.bbc.co.uk/news/articles/cyvl84zmgyro",
            "readingTime": "6",
            "topic": "社会 / 政治 / 移民与边境",
            "summary": "超过6.9万名来自摩洛哥的移民在一周内涌入西班牙飞地休达(Ceuta)，造成至少72人死亡，引发欧盟成员国之间的严重分歧。欧盟委员会主席冯德莱恩呼吁加强边界安全，但意大利等国随后暂停了与西班牙的申根协议成员资格。文章反映了欧洲在移民危机与边境安全政策上的深层矛盾，以及一体化框架下国家利益与共同政策的冲突。",
            "reason": [
              "主题涉及难民危机、欧洲一体化、国际关系与人权困境，是跨学科的热点议题。",
              "文章呈现多方观点(EU、西班牙、意大利)与立场冲突，适合训练观点对比与批判性阅读。",
              "包含policy terminology(Schengen agreement、suspension、solidarity)，有利于学生了解欧洲政治框架。",
              "使用引文与直接陈述相结合，突显政治话语与实际行动的张力，适合分析写作学习。",
              "涉及人道主义危机、国家主权与集体行动的伦理困境，引发深层思考。"
            ],
            "vocabulary": [
              {
                "word": "influx",
                "phonetic": "/ˈɪnflʌks/",
                "part": "n.",
                "translation": "大量涌入；注入"
              },
              {
                "word": "chaotic",
                "phonetic": "/keɪˈɒtɪk/",
                "part": "adj.",
                "translation": "混乱的；无序的"
              },
              {
                "word": "exclave",
                "phonetic": "/ˈekskleɪv/",
                "part": "n.",
                "translation": "飞地；外飞地"
              },
              {
                "word": "strained",
                "phonetic": "/streɪnd/",
                "part": "adj.",
                "translation": "紧张的；不和谐的"
              },
              {
                "word": "suspension",
                "phonetic": "/səˈspenʃən/",
                "part": "n.",
                "translation": "暂停；中止"
              },
              {
                "word": "encompasses",
                "phonetic": "/ɪnˈkʌmpəsɪz/",
                "part": "v.",
                "translation": "包含；涵盖"
              },
              {
                "word": "solidarity",
                "phonetic": "/ˌsɒlɪˈdærɪti/",
                "part": "n.",
                "translation": "团结；同情"
              },
              {
                "word": "prejudice",
                "phonetic": "/ˈpredʒudɪs/",
                "part": "n.",
                "translation": "偏见；歧视"
              }
            ],
            "sentences": [
              {
                "original": "European Commission President Ursula von der Leyen has called for 'united action' on border security after the chaotic influx of tens of thousands of migrants from Morocco into the Spanish exclave of Ceuta last week.",
                "analysis": [
                  "主干：European Commission President ... has called for 'united action'。",
                  "修饰语堆积(apposition)强调了冯德莱恩的官方身份与权威性。",
                  "after 引导时间状语从句，交代背景事件。",
                  "引号内的短语突显官方话语的正式与措辞的战略性。"
                ],
                "translation": "欧盟委员会主席乌尔苏拉·冯德莱恩呼吁在摩洛哥数万难民上周混乱地涌入西班牙飞地休达后，对边界安全采取'协一致行动'。"
              },
              {
                "original": "The Schengen agreement eliminates border checks and now encompasses more than 450 million people and 29 countries in Europe.",
                "analysis": [
                  "主干：The Schengen agreement eliminates border checks and encompasses ...。",
                  "两个并列谓语强调申根协议的两个关键特征：开放性与广泛性。",
                  "now 标记现状，为后续讨论暂停问题做铺垫。",
                  "数字(450 million、29 countries)增强了事实的具体性与说服力。"
                ],
                "translation": "申根协议消除了边界检查，目前涵盖了欧洲4.5亿多人口和29个国家。"
              },
              {
                "original": "In response to the Ceuta crossings, Italy temporarily suspended the Schengen arrangement with Spain, backed by Finland and Denmark, while Sánchez said he had 'serious concerns' about some European governments.",
                "analysis": [
                  "主干：Italy temporarily suspended the Schengen arrangement，while Sánchez said he had concerns。",
                  "while 引导对比状语从句，对阵欧盟内部的分裂立场。",
                  "backed by 为过去分词短语，补充说明意大利决定的支持力量。",
                  "引号中的措辞('serious concerns')体现了外交语言的保留与克制。"
                ],
                "translation": "作为对休达越界事件的回应，意大利在芬兰和丹麦的支持下暂停了与西班牙的申根协议，而桑切斯表示他对一些欧洲政府有'严重关切'。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-03",
      "status": "ready",
      "ai": {
        "intro": "按优先级只收录过去一周内（优先昨天到今天）官方发布的产品/功能变更；说明学生如何上手、可能的免费/配额/地域限制，以及简短影响分析（若官方未说明则写明“官方未说明”）。",
        "updates": [
          {
            "event": "Google: Gemini 功能包与 Spark / Flash 更新（2026-07-31）",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型，优化浏览器与应用内的即时草稿与改写体验。",
            "howTo": "在支持地区更新或打开 Gemini App / Chrome 扩展；在模型选择器切换到 Gemini Spark / Flash，或在 Gemini 应用内尝试语音与图片生成功能。具体操作与可用性以登录账号与地区为准。",
            "impact": "学生在写作、课堂笔记整理和快速问答场景能更快得到草稿与改写建议，减少复制粘贴工作流；对需要在浏览器内直接口述或改写的课程作业尤其有用。",
            "free": "公告仅写明功能面向 Gemini 用户逐步上线，部分功能在欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费与配额官方未说明。",
            "category": "Gemini 更新",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard 示例工程（2026-07-31）",
            "summary": "Google 发布 Glanceboard 案例，示范如何用 Gemini 3.6 Flash + 本地轻量服务器把日历、天气与学习计划生成 e-ink/网页看板并开源示例代码。",
            "howTo": "参阅官方文章与 GitHub 示例（文中链接）。把 Google Calendar 与天气数据通过本地服务器拼接提示（prompt）发给 Gemini Flash/图像模型生成当日卡片，推送到电子纸或网页。",
            "impact": "对学生而言是一个可复刻的项目案例：可用于课程作品、作业演示或个人工作流自动化（生成每日复习计划或任务看板）。",
            "free": "官方示例开源代码可复刻；所需 API（如 Gemini API）、硬件与第三方服务可能有各自费用或配额，具体以相应服务官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "summary": "GitHub 在 2026-07-31 的 changelog 中宣布弃用 Gemini 2.5 Pro 与 Gemini 3 Flash 在 Copilot 中的支持，并给出推荐替代模型。",
            "howTo": "在 Copilot 设置中的模型选择器切换到官方推荐的替代模型（例如文档中建议的 Gemini 3.1 Pro / Gemini 3.6 Flash）；企业账号可能需管理员在组织策略中启用新模型。",
            "impact": "使用 Copilot 的学生和开发者若仍依赖被弃用模型，可能遇到行内补全或 Chat 功能中断；建议尽早在个人或项目设置里切换模型以避免可用性中断。",
            "free": "是否可用取决于你的 Copilot 订阅、组织策略与模型权限；公告未修改计费或新增免费额度。",
            "category": "Copilot 提醒",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问，并已开始集成 AI-first 特性（交互式代码对话、数据科学 Agent 等）。",
            "howTo": "访问 Colab： https://colab.research.google.com 并用 Google 帐号登录；新建笔记本后在 Runtime 菜单选择 GPU/TPU（资源按使用与优先级分配）。AI 功能通过页面或底部的 Gemini 图标访问。",
            "impact": "学生可在浏览器中运行机器学习练习、训练小模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发与演示。",
            "free": "Colab 明确表示免费使用，但资源非保证且会根据使用情况限制；具体时长、GPU 型号与配额官方未固定说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于课程项目与作品集搭建。",
            "howTo": "访问 https://education.github.com/pack，按页面说明用学校邮箱或学生凭证验证并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可获得 GitHub Pro、云服务试用额度和开发者工具，有助于部署课程项目与搭建作品集。",
            "free": "各项优惠的资格与配额由各供应商决定；总体页面列出每项优惠详情，具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载开源模型权重：Mistral-7B（Hugging Face）",
            "summary": "在 Hugging Face Hub 上可找到 Mistral-7B 的模型卡与可下载权重，适合教学与本地复现实验。",
            "howTo": "访问模型页并按 model card 指南使用 transformers / diffusers / accelerate 下载与加载模型（示例页见下方）。",
            "impact": "学生可以在校内或云端复现实验、微调模型、做课程演示或比较模型行为，便于学习模型工程与微调流程。",
            "free": "模型权重与许可证以对应 Hugging Face 模型页为准；若 model card 有商业或使用限制会在页面说明，否则视为官方未说明额外限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许用户在 Hub 上免费发布 Gradio / Streamlit / 静态演示，便于展示模型与课程项目。",
            "howTo": "在 https://huggingface.co/spaces 创建 Space，选择 SDK（Gradio/Streamlit/Static）并推送代码；参考 Spaces 文档获取示例与限制说明。",
            "impact": "学生和教师可把课程作业部署为交互式演示，便于评审、展示成果和远程演示。",
            "free": "基础 Spaces 可免费创建；GPU/专用算力或私有化部署需要付费，具体配额见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          },
          {
            "event": "Stable Diffusion 可下载权重（CompVis on Hugging Face）",
            "summary": "CompVis 在 Hugging Face 上提供 Stable Diffusion v1-4 的模型卡与可下载权重（带开源许可说明），适合图像生成教学与离线推理。",
            "howTo": "访问模型页（https://huggingface.co/CompVis/stable-diffusion-v1-4），使用 🤗 Diffusers 库或官方说明加载权重并运行本地推理。",
            "impact": "对课堂图像生成、视觉艺术课程或 multimodal 项目非常有用；学生能通过本地环境复现 prompt-engineering 与模型微调实验。",
            "free": "模型权重以 Hugging Face 上的许可证 (OpenRAIL-M/模型卡) 为准，使用时须遵守许可与限制。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – CompVis Stable Diffusion",
              "published": "官方未说明",
              "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4"
            }
          },
          {
            "event": "Diffusers（Hugging Face 开源库）",
            "summary": "🤗 Diffusers 是开源的 diffusion 模型工具箱，便于在教学中运行与改造图像/音频生成模型。",
            "howTo": "在本地或 Colab 环境 pip install diffusers 并参考 Quickstart (https://github.com/huggingface/diffusers) 加载模型与运行示例。",
            "impact": "为课堂提供可运行的示例代码，帮助学生理解 diffusion 流程、调度器与采样策略，便于课程作业与项目交付。",
            "free": "Diffusers 是开源软件（GitHub），可免费使用；若调用 Hugging Face 托管算力或第三方 API，可能产生费用。",
            "category": "开源工具",
            "source": {
              "name": "Hugging Face – Diffusers (GitHub)",
              "published": "官方未说明",
              "url": "https://github.com/huggingface/diffusers"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选权威媒体近两周内可免费阅读全文的文章（社会/教育/文化/商业主题），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Find out what’s new in the Gemini app in July's Gemini Drop.",
            "source": "Google Blog · Product",
            "published": "2026-07-31",
            "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/",
            "readingTime": "6",
            "topic": "Technology / AI / Product updates",
            "summary": "Google 在 2026-07-31 的 Gemini Drop 中汇总了 Gemini App 的产品更新，包含 Gemini Spark 在 Chrome 中的集成、模型选择器与更快的 Flash 模型等改进；文章既概述功能也指出地域可用性的限制与逐步推送策略。",
            "reason": [
              "主题涉及产品功能与可用性，适合作为技术类阅读材料并训练信息提取题。",
              "结构为要点汇总 + 使用场景示例，便于练习段落归纳与语篇衔接。",
              "包含 integrate、rollout、model 等技术词汇，有利于扩展科技类词汇量。",
              "长句多用并列与同位结构，适合考研英语长难句拆解训练。"
            ],
            "vocabulary": [
              {
                "word": "integrate",
                "phonetic": "/ˈɪntɪɡreɪt/",
                "part": "v.",
                "translation": "整合；使成为一体"
              },
              {
                "word": "rollout",
                "phonetic": "/ˈrəʊlaʊt/",
                "part": "n.",
                "translation": "(新版/服务) 推出；部署"
              },
              {
                "word": "feature",
                "phonetic": "/ˈfiːtʃər/",
                "part": "n.",
                "translation": "功能；特性"
              },
              {
                "word": "model",
                "phonetic": "/ˈmɒdl/",
                "part": "n.",
                "translation": "模型；范式"
              },
              {
                "word": "availability",
                "phonetic": "/əˌveɪləˈbɪlɪti/",
                "part": "n.",
                "translation": "可用性；可获得性"
              },
              {
                "word": "prompt",
                "phonetic": "/prɒmpt/",
                "part": "n./v.",
                "translation": "提示；提示词/提示"
              },
              {
                "word": "preview",
                "phonetic": "/ˈpriːvjuː/",
                "part": "n.",
                "translation": "预览；试用版"
              },
              {
                "word": "compatibility",
                "phonetic": "/kəmˌpætɪˈbɪləti/",
                "part": "n.",
                "translation": "兼容性"
              }
            ],
            "sentences": [
              {
                "original": "Gemini Spark now integrates with Chrome",
                "analysis": [
                  "主干：Gemini Spark now integrates with Chrome，simple present 表示当前可用或已推出的功能。",
                  "Gemini Spark 为主语，now 强调时间信息，with Chrome 作地点/工具状语。",
                  "integrates 为及物/连系动词，用法侧重‘整合进’的动作。",
                  "该句可用于训练主谓信息定位与功能性短语的理解。"
                ],
                "translation": "Gemini Spark 现在已与 Chrome 集成。"
              },
              {
                "original": "Gemini Drops is our regular monthly update on how to get the most out of the Gemini app.",
                "analysis": [
                  "主干：Gemini Drops is our regular monthly update，is 后接表语说明性质。",
                  "on how to get the most out of the Gemini app 是介词短语，说明 update 的内容与目的。",
                  "包含不定式短语 to get the most out of，适合练习动词短语搭配。",
                  "句式清晰，适合训练主旨句的识别与段落功能分析。"
                ],
                "translation": "Gemini Drops 是我们每月定期发布的更新，告诉你如何最大化使用 Gemini 应用。"
              },
              {
                "original": "Find out what’s new in the Gemini app in July's Gemini Drop.",
                "analysis": [
                  "命令句式，Find out 为祈使句动词短语，强调行动建议。",
                  "what’s new 引导名词性从句，作 Find out 的宾语，便于练习从句功能。",
                  "in July's Gemini Drop 提供时间/来源信息，为地点状语性短语。",
                  "句子短小，适合练习信息定位与主题句提取。"
                ],
                "translation": "来看看七月的 Gemini Drop 中 Gemini 应用有哪些新变化。"
              }
            ]
          },
          {
            "title": "Try Glanceboard, a vibe-coded way to organize your day",
            "source": "Google Blog · Innovation and AI",
            "published": "2026-07-31",
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/",
            "readingTime": "8",
            "topic": "Technology / Practical project",
            "summary": "Glanceboard 是 Google 工程师构建的示例项目：每天读取日历与天气，用 Gemini 3.6 Flash 与图像模型生成一张个性化的 e-ink 卡片并推送到显示设备。文章开源了示例代码并说明了硬件与本地服务器的基本实现方式。",
            "reason": [
              "以项目为线索的说明文，适合作为课程示例材料或任务驱动写作练习。",
              "结构为问题背景 + 实现步骤 + 开源资源，便于训练过程类信息的梳理题。",
              "包含 open-source、local server、e-ink 等实用词汇，利于技术项目写作素材积累。",
              "文章短而具体，适合从示例中抽取步骤描述与因果关系题型练习。"
            ],
            "vocabulary": [
              {
                "word": "open-source",
                "phonetic": "/ˈəʊpən sɔːrs/",
                "part": "adj.",
                "translation": "开源的"
              },
              {
                "word": "e-ink",
                "phonetic": "/ˌiː ˈɪŋk/",
                "part": "n.",
                "translation": "电子墨水屏；e-ink 显示器"
              },
              {
                "word": "local server",
                "phonetic": "/ˈloʊkəl ˈsɜːrvər/",
                "part": "n.",
                "translation": "本地服务器"
              },
              {
                "word": "illustration",
                "phonetic": "/ˌɪləˈstreɪʃn/",
                "part": "n.",
                "translation": "插图；示意图"
              },
              {
                "word": "calendar",
                "phonetic": "/ˈkælɪndər/",
                "part": "n.",
                "translation": "日历；日程表"
              },
              {
                "word": "serene",
                "phonetic": "/səˈriːn/",
                "part": "adj.",
                "translation": "宁静的；平静的"
              },
              {
                "word": "deploy",
                "phonetic": "/dɪˈplɔɪ/",
                "part": "v.",
                "translation": "部署；上线"
              },
              {
                "word": "prototype",
                "phonetic": "/ˈprəʊtətaɪp/",
                "part": "n.",
                "translation": "原型；样机"
              }
            ],
            "sentences": [
              {
                "original": "Every morning, Glanceboard checks Raph’s family Google Calendar and the local weather.",
                "analysis": [
                  "主干：Glanceboard checks Raph’s family Google Calendar and the local weather，checks 为谓语。",
                  "Every morning 为时间状语，强调动作频率。",
                  "并列宾语结构，连接 calendar 和 the local weather。",
                  "句式简单明了，适合练习主谓宾信息提取与时态语义（习惯性动作）。"
                ],
                "translation": "每天早上，Glanceboard 会查看 Raph 一家人的 Google 日历和当地天气。"
              },
              {
                "original": "Glanceboard operates on a lightweight local server — no cloud accounts or bright screens required — offering a serene and personalized way to stay organized.",
                "analysis": [
                  "主干：Glanceboard operates on a lightweight local server，后半句是破折号插入的说明。",
                  "— no cloud accounts or bright screens required — 为插入语，补充说明实现方式的好处。",
                  "offering a serene and personalized way to stay organized 为现在分词短语，表示结果/用途。",
                  "句子结构复杂，适合练习插入语、并列与非谓语短语的识别与翻译。"
                ],
                "translation": "Glanceboard 在轻量的本地服务器上运行——不需要云账号或明亮的屏幕——为保持日常条理提供了一种宁静且个性化的方式。"
              },
              {
                "original": "Want to try Glanceboard yourself? We’re open-sourcing the code so you can ask Google Antigravity to make you one, too.",
                "analysis": [
                  "Want to try ...? 为祈使/疑问句，鼓励读者动手尝试。",
                  "We’re open-sourcing the code 为主动句，说明行动（开源）。",
                  "so 引导结果状语从句，说明开源的目的或效果。",
                  "包含口语化表达，适合训练书面与口语风格的对比分析。"
                ],
                "translation": "想自己试试 Glanceboard 吗？我们把代码开源了，这样你也可以让 Google Antigravity 帮你做一个。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-08-02",
      "status": "ready",
      "ai": {
        "intro": "只看最近一周内（优先昨天到今天）官方发布的产品或功能变更，说明学生如何上手与可能的免费/限制信息。",
        "updates": [
          {
            "event": "Google: Gemini 产品包与 Spark/Flash 功能更新（2026-07-31）",
            "impact": "在写作、课堂笔记整理与快速问答场景，Gemini Spark/Flash 的响应速度与浏览器/应用整合能减少来回复制，提高工作流效率；学生可在支持地区尝试用 Spark 进行快速草稿与翻译。",
            "howTo": "参阅 Google 官方博客说明，打开 Gemini App 或 Chrome 扩展（已获推送的账号），在模型选择器中切换到 Gemini Spark / Flash。官方范例与说明见下方链接。",
            "free": "官方文档声明部分功能面向 Gemini 用户推出，但明确写明某些模型或功能对欧洲经济区、英国、瑞士和尼日利亚不可用；是否免费、配额与地域滚动上线以账号和地区为准（官方未说明全面免费细节）。",
            "category": "Gemini 更新",
            "summary": "Google 在 2026-07-31 公布 Gemini 功能包扩展，包含 Gemini Spark 在 Chrome 集成、模型选择器更新与更快的 Flash 模型。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            "event": "Google: Glanceboard（示例工程）发布，演示用 Gemini Flash 生成每日看板（2026-07-31）",
            "impact": "对学生而言是可复刻的工程案例：把日历、天气与学习计划喂给模型，生成 e-ink 或网页看板，适合作为课程项目或作品集演示。",
            "howTo": "查看官方文章并参考开源仓库（Google 提供 Glanceboard 示例代码）；用 Google Calendar API + 本地轻量服务器 + Gemini 图像/Flash 接口生成每日卡片并推送到显示设备或网页。",
            "free": "官方案例没有提供统一免费托管服务；复刻耗费取决于用于的 API 与硬件，具体配额与费用以各 API 官方页面为准（官方未说明统一免费额度）。",
            "category": "AI 实用案例",
            "summary": "Google 展示了用 Gemini 3.6 Flash 与 Nano Banana 组成的 Glanceboard 案例，并开源示例代码。",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-07-31",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            "event": "GitHub Copilot：弃用旧 Gemini 模型（2026-07-31）",
            "impact": "使用 Copilot 的学生与开发者若仍依赖被弃用的 Gemini 2.5 Pro / 3 Flash 版本可能遇到可用性中断；需切换到官方推荐的替代模型以维持行内补全、Chat 与 Agent 功能。",
            "howTo": "打开 Copilot 设置中的模型选择器，参照变更建议将工作流迁移到官方推荐的替代模型；企业或组织账号可能需管理员在策略中启用目标模型。",
            "free": "可用性取决于你的 Copilot 订阅、组织策略与模型权限；官方公告未新增免费额度或更改既有计费规则。",
            "category": "Copilot 提醒",
            "summary": "GitHub 于 2026-07-31 在 changelog 发布，弃用 Gemini 2.5 Pro 与 Gemini 3 Flash，并给出替代模型建议。",
            "source": {
              "name": "GitHub 官方更新日志",
              "published": "2026-07-31",
              "url": "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google Colab（免费托管 Jupyter 环境）",
            "summary": "Colab 提供免费托管的 Jupyter 笔记本，向学生与研究者开放基本 GPU/TPU 访问（资源非保证，存在使用限制）。",
            "howTo": "访问 https://colab.research.google.com 并用 Google 帐号登录；新建笔记本，选择 Runtime 类型访问 GPU/TPU（资源按使用与优先级分配）。",
            "impact": "学生可以在浏览器中运行 ML 练习、训练小型模型或复现实验，无需本地 GPU；适合课堂作业与模型原型开发。",
            "free": "官方说明：Colab 免费可用，但资源不是保证且会根据使用情况限制；精确配额与优先级官方未说明。",
            "category": "长期免费云环境",
            "source": {
              "name": "Google Colab FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "GitHub Student Developer Pack（学生礼包）",
            "summary": "GitHub 教育包为学生提供大量厂商赞助的免费与折扣资源（云服务、IDE 订阅、域名等），便于做课程项目与搭建作品集。",
            "howTo": "访问 https://education.github.com/pack，按照页面说明验证学校邮箱并申请 Student Pack。",
            "impact": "通过 Student Pack，学生可免费获得如 GitHub Pro、云服务试用额度与开发者工具，有助于课程项目部署和学习。",
            "free": "各厂商条目中会写明资格与时限；整体页面列出每项优惠，但具体配额与资格以相应服务条款为准。",
            "category": "学生/教育权益",
            "source": {
              "name": "GitHub Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "可下载与复现的开源大模型权重：Mistral（Hugging Face 上的模型卡）",
            "summary": "在 Hugging Face Hub 上可以找到 Mistral 等开源模型的 model card 与可下载权重，适合教学与本地复现研究。",
            "howTo": "访问模型页（示例：https://huggingface.co/mistralai/Mistral-7B-v0.1），按 Hugging Face 指引用 transformers/accelerate 下载与加载模型。",
            "impact": "学生能在本地或学校计算资源上复现实验、微调小模型或做课程演示；便于理解模型内部与工程化流程。",
            "free": "模型权重与许可证请参阅对应 Hugging Face 模型页；若模型有商业或使用限制，model card 会注明；若无说明则视为官方未说明。",
            "category": "可下载开源模型",
            "source": {
              "name": "Hugging Face – Mistral 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1"
            }
          },
          {
            "event": "Hugging Face Spaces（免费托管小型演示应用）",
            "summary": "Hugging Face Spaces 允许在 Hub 上免费发布 Gradio、Streamlit 或静态演示，适合展示模型与课堂项目。",
            "howTo": "参考文档并在 https://huggingface.co/spaces 创建你的 Space，选择 SDK（Gradio / Streamlit /Static）并推送代码。",
            "impact": "学生和教员可以把课程作业部署为交互式演示，便于评审和展示成果。",
            "free": "基础 Spaces 可免费创建；GPU/私有化或增强运算需升级为付费计划，具体配额与限制见 Hugging Face 文档（官方未说明具体免费配额）。",
            "category": "长期免费托管",
            "source": {
              "name": "Hugging Face Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces"
            }
          }
        ]
      },
      "english": {
        "intro": "英文学术阅读：精选 3 篇权威媒体近两周内的可免费阅读全文（教育/商业/文化类），并给出词汇与短句精读。",
        "articles": [
          {
            "title": "Students created AI rules they hope schools will adopt",
            "source": "NPR · Education",
            "published": "2026-07-30",
            "url": "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
            "readingTime": "10",
            "topic": "教育 / AI 素养 / 校园规则",
            "summary": "来自美国 50 个州的 98 名高中生在模拟参议院中起草校园 AI 使用法案，建议在课堂设备可用时即教授 AI 素养、禁止计分考试使用 AI，并允许教师在怀疑不当使用时要求学生进行口头答辩，文章讨论了资源不均、检测误判与政策可行性等争点。",
            "reason": [
              "主题贴合考研英语社会与教育类命题，易展开议论文写作。",
              "文章结构为事件报道 + 引语 + 条款列举，适合训练推理题与信息定位题型。",
              "包含 legislation、consensus、provision 等抽象名词，有助积累学术词汇。",
              "长句结构丰富，含定语从句、what 从句与让步结构，适合句子分析练习。"
            ],
            "vocabulary": [
              {
                "word": "legislation",
                "phonetic": "/ˌledʒɪsˈleɪʃn/",
                "part": "n.",
                "translation": "立法；法规"
              },
              {
                "word": "navigate",
                "phonetic": "/ˈnævɪɡeɪt/",
                "part": "v.",
                "translation": "应对；设法处理"
              },
              {
                "word": "literacy",
                "phonetic": "/ˈlɪtərəsi/",
                "part": "n.",
                "translation": "素养；读写能力"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识；一致意见"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒn/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "coherent",
                "phonetic": "/kəʊˈhɪərənt/",
                "part": "adj.",
                "translation": "连贯的；有条理的"
              },
              {
                "word": "contentious",
                "phonetic": "/kənˈtenʃəs/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "inequity",
                "phonetic": "/ɪnˈekwəti/",
                "part": "n.",
                "translation": "不公平；不平等"
              },
              {
                "word": "guardrail",
                "phonetic": "/ˈɡɑːdreɪl/",
                "part": "n.",
                "translation": "防护规则；约束机制"
              },
              {
                "word": "oral defense",
                "phonetic": "/ˈɔːrəl dɪˈfens/",
                "part": "n.",
                "translation": "口头答辩"
              }
            ],
            "sentences": [
              {
                "original": "The students, most of them high school juniors and seniors, gathered in a precise replica of the U.S. Senate chamber and attempted what the real, adult Congress has largely failed to do: draft and pass legislation to help the nation's K-12 schools navigate the questions and chaos created by artificial intelligence.",
                "analysis": [
                  "主干：The students gathered ... and attempted ...，两个谓语并列。",
                  "most of them high school juniors and seniors 是补充说明 students 的构成。",
                  "what the real, adult Congress has largely failed to do 为宾语从句，作 attempted 的宾语。",
                  "冒号后 draft and pass legislation 具体解释 what 的内容。",
                  "created by artificial intelligence 是过去分词短语，后置修饰 questions and chaos。"
                ],
                "translation": "这些学生——其中大多数是高中十一、十二年级学生——聚集在一间精确仿制的美国参议院议事厅里，尝试完成真正的成年国会基本未能做到的事：起草并通过立法，帮助美国中小学应对人工智能带来的问题与混乱。"
              },
              {
                "original": "At times during the weekend, where NPR was able to watch the events unfold, the bill seemed doomed, only to be revived by a flurry of student-led negotiation, old-fashioned compromises and some spirited speeches.",
                "analysis": [
                  "主干：the bill seemed doomed，seem 后接形容词作表语。",
                  "where NPR was able to watch the events unfold 是非限制性定语从句，补充说明现场。",
                  "watch the events unfold 使用 watch + 宾语 + 动词原形结构。",
                  "only to be revived 表示出乎意料的结果。",
                  "by 后三个并列名词短语说明法案被挽救的方式。"
                ],
                "translation": "周末期间，NPR 得以在现场观察事态发展；这项法案有时看起来注定失败，却又因一连串由学生主导的谈判、传统式妥协和几场充满激情的演讲而重新获得生机。"
              },
              {
                "original": "While the Students First Act isn't actually law, any more than the teens are actually senators, AASA plans to send the text to its members, many of whom are right now crafting their own AI rules in the absence of regulation.",
                "analysis": [
                  "While 引导让步状语从句，意为‘尽管’。",
                  "any more than the teens are actually senators 构成类比否定。",
                  "主句：AASA plans to send the text to its members。",
                  "many of whom 引导非限制性定语从句，先行词为 members。",
                  "in the absence of regulation 表示‘在缺乏监管的情况下’。"
                ],
                "translation": "尽管《学生优先法案》并不是真正的法律——正如这些青少年也不是真正的参议员——AASA 仍计划把文本发给其成员，而其中许多人眼下正因缺乏统一监管而自行制定 AI 规则。"
              }
            ]
          },
          {
            "title": "India wants to join the strawberry superpowers",
            "source": "BBC News · Business",
            "published": "2026-07-30",
            "url": "https://www.bbc.co.uk/news/articles/c8x274xxxpwo",
            "readingTime": "8",
            "topic": "商业 / 农业 / 技术创新",
            "summary": "文章讨论印度草莓产业如何通过无土栽培、气候控制与 AI 预测降低损失并培育本土耐热品种，兼顾成本、供应链与技术应用。",
            "reason": [
              "兼具商业成本与技术创新，适合考研英语产业转型类话题。",
              "结构包括背景、农户案例与专家评论，便于训练信息归纳与论证链分析。",
              "含 horticultural、quarantine、indigenous 等学术词汇。",
              "文中长句含让步与并列结构，适合拆句训练。"
            ],
            "vocabulary": [
              {
                "word": "labour-intensive",
                "phonetic": "/ˌleɪbər ɪnˈtensɪv/",
                "part": "adj.",
                "translation": "劳动密集型的"
              },
              {
                "word": "outlay",
                "phonetic": "/ˈaʊtleɪ/",
                "part": "n.",
                "translation": "支出；费用"
              },
              {
                "word": "horticultural",
                "phonetic": "/ˌhɔːtɪˈkʌltʃərəl/",
                "part": "adj.",
                "translation": "园艺的"
              },
              {
                "word": "quarantine",
                "phonetic": "/ˈkwɒrəntiːn/",
                "part": "n./v.",
                "translation": "检疫；隔离"
              },
              {
                "word": "substrate",
                "phonetic": "/ˈsʌbstreɪt/",
                "part": "n.",
                "translation": "培养基；基质"
              },
              {
                "word": "indigenous",
                "phonetic": "/ɪnˈdɪdʒənəs/",
                "part": "adj.",
                "translation": "本土的；本地原生的"
              },
              {
                "word": "climate-resilient",
                "phonetic": "/ˈklaɪmət rɪˈzɪliənt/",
                "part": "adj.",
                "translation": "具有气候适应力的"
              },
              {
                "word": "hydroponics",
                "phonetic": "/ˌhaɪdrəˈpɒnɪks/",
                "part": "n.",
                "translation": "水培；无土栽培"
              },
              {
                "word": "cultivar",
                "phonetic": "/ˈkʌltɪvɑːr/",
                "part": "n.",
                "translation": "栽培品种"
              },
              {
                "word": "pinpoint",
                "phonetic": "/ˈpɪnpɔɪnt/",
                "part": "v.",
                "translation": "精确确定"
              }
            ],
            "sentences": [
              {
                "original": "Despite that success the industry still relies on varieties that are imported from California, Florida, Italy and Spain, as no one in India has developed a domestic plant.",
                "analysis": [
                  "主干：the industry still relies on varieties。",
                  "Despite that success 是让步介词短语。",
                  "that are imported ... 是限制性定语从句，修饰 varieties。",
                  "as 引导原因状语从句，说明依赖进口的原因。",
                  "has developed 使用现在完成时，强调截至目前仍未培育成功。"
                ],
                "translation": "尽管取得了这些成绩，该产业仍依赖从加利福尼亚、佛罗里达、意大利和西班牙进口的品种，因为印度至今还没有培育出本土草莓品种。"
              },
              {
                "original": "The goal is to fast-track the development of India's first indigenous, climate-resilient strawberry cultivar that matches the large fruit size and firm texture of foreign varieties while natively tolerating Indian heatwaves.",
                "analysis": [
                  "主干：The goal is to fast-track the development，to fast-track 为不定式作表语。",
                  "of India's first ... cultivar 修饰 development，说明研发对象。",
                  "that matches ... 是限制性定语从句，修饰 cultivar。",
                  "while natively tolerating ... 是 while + 现在分词的伴随结构。",
                  "large fruit size 与 firm texture 为并列宾语。"
                ],
                "translation": "目标是加速培育印度首个本土、耐气候变化的草莓品种，使其既能达到外国品种的大果形和紧实口感，又能天然耐受印度的热浪。"
              },
              {
                "original": "The system employs AI, which uses the weather data to pinpoint when rain will strike, so farmers can then be advised to delay spraying their crops, preventing expensive chemicals from simply being washed away.",
                "analysis": [
                  "主干：The system employs AI。",
                  "which 引导非限制性定语从句，说明 AI 的工作方式。",
                  "when rain will strike 是宾语从句，作 pinpoint 的宾语。",
                  "so 引导结果状语从句；can be advised 为被动语态。",
                  "preventing ... 是现在分词结果结构；from being washed away 为 prevent ... from doing 的被动形式。"
                ],
                "translation": "该系统使用人工智能分析天气数据，准确判断降雨何时到来，从而提醒农民推迟给作物喷药，避免昂贵的农药被雨水白白冲走。"
              }
            ]
          },
          {
            "title": "From Felix the Cat to MTV: MoMA explores a century of animation",
            "source": "The Guardian · Culture",
            "published": "2026-07-31",
            "url": "https://www.theguardian.com/artanddesign/2026/jul/31/moma-animation-exhibition-its-alive",
            "readingTime": "8",
            "topic": "文化 / 艺术 / 媒介史",
            "summary": "MoMA 的展览 It's Alive! 回顾近百年的动画发展，讨论早期角色动画、战后独立创作者、实验电影与数字时代的演变，并解释展览为何采用无声放映以突出视觉语言。",
            "reason": [
              "文化艺术与媒介史适合作为英语二人文主题。",
              "文章通过历史线索与展览策展人引语推进，利于训练主旨与论证结构分析。",
              "包含 anthropomorphic、manifesto 等高阶词汇。",
              "长句中有并列、定语与分词结构，适合拆句练习。"
            ],
            "vocabulary": [
              {
                "word": "anthropomorphic",
                "phonetic": "/ˌænθrəpəˈmɔːfɪk/",
                "part": "adj.",
                "translation": "拟人化的"
              },
              {
                "word": "outlandish",
                "phonetic": "/aʊtˈlændɪʃ/",
                "part": "adj.",
                "translation": "古怪夸张的"
              },
              {
                "word": "manifesto",
                "phonetic": "/ˌmænɪˈfestəʊ/",
                "part": "n.",
                "translation": "宣言"
              },
              {
                "word": "invigorate",
                "phonetic": "/ɪnˈvɪɡəreɪt/",
                "part": "v.",
                "translation": "使振兴；激励"
              },
              {
                "word": "aspire",
                "phonetic": "/əˈspaɪər/",
                "part": "v.",
                "translation": "渴望；立志"
              },
              {
                "word": "profound",
                "phonetic": "/prəˈfaʊnd/",
                "part": "adj.",
                "translation": "深刻的；深远的"
              },
              {
                "word": "inherent",
                "phonetic": "/ɪnˈhɪərənt/",
                "part": "adj.",
                "translation": "内在的；固有的"
              },
              {
                "word": "constituency",
                "phonetic": "/kənˈstɪtʃuənsi/",
                "part": "n.",
                "translation": "特定支持群体；选区"
              },
              {
                "word": "prominence",
                "phonetic": "/ˈprɒmɪnəns/",
                "part": "n.",
                "translation": "重要地位；显著"
              },
              {
                "word": "accessible",
                "phonetic": "/əkˈsesəbl/",
                "part": "adj.",
                "translation": "易理解的；可接近的"
              }
            ],
            "sentences": [
              {
                "original": "Although the word ‘animation’ may bring to mind rascally, anthropomorphic bunnies, cats and ducks doing outlandish things, the truth of the medium's diversity goes far beyond these few recognizable brands.",
                "analysis": [
                  "Although 引导让步状语从句，主句为 the truth ... goes far beyond ...。",
                  "bring to mind 意为‘使人想到’。",
                  "doing outlandish things 是现在分词短语，后置修饰 bunnies, cats and ducks。",
                  "the truth of the medium's diversity 是抽象名词主语，强调多样性。",
                  "go far beyond 表示远远超出固有认知。"
                ],
                "translation": "尽管‘动画’这个词可能让人想到调皮的拟人兔子、猫和鸭子做着夸张离奇的事情，但这种媒介真正的多样性远远超出了这些少数为人熟知的品牌形象。"
              },
              {
                "original": "Invigorated by the creative demands of the second world war – and buoyed by his work creating an animated film to promote Franklin Roosevelt in the 1944 election – Hubley aspired to animation that was driven by independent-minded creators who could engage deeply with important social issues and profound artistic questions.",
                "analysis": [
                  "主干：Hubley aspired to animation。",
                  "Invigorated by ... 与 buoyed by ... 是并列过去分词短语，说明动机。",
                  "creating an animated film 是现在分词短语，修饰 his work。",
                  "that was driven by ... 是定语从句，修饰 animation。",
                  "who could engage deeply with ... 是定语从句，修饰 creators。"
                ],
                "translation": "在第二次世界大战带来的创作需求激励下，又因曾为罗斯福 1944 年大选制作宣传动画而受到鼓舞，休布利向往一种由独立创作者推动的动画，这些创作者能够深入介入重要社会议题和深刻的艺术问题。"
              },
              {
                "original": "In an effort to make the artistry behind these films more accessible to audiences, It's Alive! will screen 20 films within the gallery space, offering viewers a chance to get a closeup view of these striking sights.",
                "analysis": [
                  "In an effort to do 表示目的。",
                  "make + 宾语 + 形容词 构成使役结构：make the artistry more accessible。",
                  "主句：It's Alive! will screen 20 films。",
                  "within the gallery space 是地点状语。",
                  "offering viewers ... 是现在分词伴随结构，表示结果/附带效果。"
                ],
                "translation": "为了让观众更容易理解这些影片背后的艺术性，《它活了！》将在展厅内放映 20 部影片，让观众有机会近距离观看这些引人注目的影像。"
              }
            ]
          }
        ]
      }
    }
  ].slice(0, 7)
};
