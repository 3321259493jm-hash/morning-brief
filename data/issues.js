window.BRIEFING_DATA = {
  "updatedAt": "2026-11-11T10:43:51+08:00",
  "issues": [
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
    }
  ]
};
