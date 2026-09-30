window.BRIEFING_DATA = {
  "updatedAt": "2026-09-30T10:02:44+08:00",
  "issues": [
    {
      "date": "2026-09-30",
      "status": "ready",
      "ai": {
        "intro": "近两日可核实的AI新变化不足3项，因此扩大到前7日并保留官方来源的真实发布日期；免费资源均按官方模型卡、产品页或教育福利页复核。",
        "updates": [
          {
            "event": "GPT-6.1 Sol 开始在 GitHub Copilot 推出（2026-09-29）",
            "summary": "GitHub 宣布 GPT-6.1 Sol 正式加入 Copilot，面向 agentic coding 与终端工作流；官方称其在早期测试中以更少 token 和步骤完成任务，但这是厂商测试描述，不代表独立基准结论。",
            "howTo": "在符合资格的 Copilot 客户端（如 VS Code、Copilot CLI、github.com 或 GitHub Copilot app）打开模型选择器，选 GPT-6.1 Sol，先给它一个范围清楚的小编码任务，再审查 diff 并运行测试；若尚未显示，等待渐进式开放。",
            "impact": "可让有资格的学生把它用于课程项目中的多步骤改动、终端任务或 bug 定位，并比较 token 使用和代码质量；仍需自行核对依赖、测试与安全影响。",
            "free": "仅 Copilot Pro+、Max、Business 和 Enterprise 用户可用，按模型提供方列表价进行用量计费；逐步开放。Copilot Free/Student 不在官方列出的可用计划中；地区及具体用量官方未说明。",
            "category": "AI 编程 / 新模型",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-29",
              "url": "https://github.blog/changelog/2026-09-29-gpt-6-1-sol-in-github-copilot"
            }
          },
          {
            "event": "Google Vids 为 Omni 1.1 加入更精细的AI视频控制（2026-09-23）",
            "summary": "Google Vids 的 Omni 1.1 可延长场景并保持画面元素连贯、指定生成片段时长、生成 1080p 视频场景或放大现有片段；生成内容带有 SynthID 水印。",
            "howTo": "打开 vids.new 并登录 Google 或 Workspace 账号，在 Google Vids 中提示生成视频场景；按需要延长场景、指定时长，再生成 1080p 片段或放大已有片段并导出。",
            "impact": "学生可为课程展示、社团活动或项目提案制作短视频，较精确地匹配旁白长度并保持连续镜头；应标注AI生成内容并检查画面事实。",
            "free": "官方称任何 Google 或 Google Workspace 账号均可免费开始生成；付费 Google AI 计划以及 Workspace Business、Enterprise 计划提供更大的生成池。免费额度、地区范围及账号 rollout 细节官方未说明。",
            "category": "AI 视频 / 免费创作工具",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "Gemini 开始接入更多第三方 Connected Apps（2026-09-23）",
            "summary": "Gemini 新增生产力、创意和生活方式类 Connected Apps，包括 Airtable、Linear、Adobe、Picsart、Peloton 等；可在 Gemini 设置连接应用，或在聊天中用 @ 提及应用。",
            "howTo": "打开 Gemini 设置中的 Connected Apps，连接自己已有权限的应用；也可在 Gemini 对话中输入 @ 应用名，或直接提出任务。先确认授权范围，再检查 Gemini 汇总或生成的结果。",
            "impact": "小组项目可在一个对话入口整理数据库或项目事项、构思视觉素材和安排活动；重要内容仍应回到原应用确认。",
            "free": "官方称功能自公告日起逐步推出，并未说明适用计划、地区、第三方应用订阅条件或具体使用额度；需先连接自己有权使用的应用。",
            "category": "AI 助手 / 应用连接",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
            }
          }
        ],
        "deals": [
          {
            "event": "OpenAI gpt-oss-20b 开放权重（Apache 2.0）",
            "summary": "OpenAI 官方 Hugging Face 模型卡提供 gpt-oss-20b 权重下载并标注 Apache 2.0；该量化模型面向本地或专用场景，卡片称其可在 16GB 内存中运行，并支持可调推理强度。",
            "howTo": "按模型卡安装 Ollama 后运行 `ollama pull gpt-oss:20b` 与 `ollama run gpt-oss:20b`；也可用 Hugging Face CLI 下载权重并按官方 Transformers 示例部署。",
            "impact": "适合在课程项目中练习本地模型部署、推理参数和函数调用；无需按 token 购买托管 API，但需要自行承担硬件、耗电与环境配置成本。",
            "free": "模型权重可下载，Apache 2.0 许可允许使用与修改；模型卡注明约 16GB 内存需求。账号资格、地区和下载配额官方未说明；本地运行所需设备并非免费提供。",
            "category": "可下载开放模型权重 / Apache 2.0",
            "source": {
              "name": "OpenAI 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/openai/gpt-oss-20b"
            }
          },
          {
            "event": "Google Vids 可免费生成 AI 视频场景",
            "summary": "Google 官方说明，Omni 1.1 可在 Vids 中生成 1080p AI 视频场景、延长场景及放大已有片段；普通 Google 账号也可免费开始使用。",
            "howTo": "访问 vids.new 并登录 Google 或 Workspace 账号，在 Vids 中输入场景描述并生成片段；需要更高生成额度时，先查看 Google AI 或 Workspace 计划说明。",
            "impact": "可把课程汇报提纲、社团活动信息或项目展示做成短片，省去从空白时间线起步的步骤；提交前检查版权、事实和水印呈现。",
            "free": "Google 或 Workspace 账号可免费开始生成，付费计划有更大的生成池；具体免费额度、地区与生成次数官方未说明。",
            "category": "长期免费网页工具 / AI 视频",
            "source": {
              "name": "Google Blog",
              "published": "2026-09-23",
              "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/"
            }
          },
          {
            "event": "GitHub Student Developer Pack：Camber Student AI 数据科学资源",
            "summary": "GitHub Education 列出的 Camber Student 计划面向在读学生免费提供 40 CPU 小时、5 GPU 小时、50GB 存储，以及每月 50 条 agent 消息，可从自有数据与代码构建并运行 AI agent。",
            "howTo": "在 GitHub Education 申请 Student Developer Pack 并按页面指引领取 Camber Student；在 Camber 中连接项目数据源，创建 AI agent，再留意 CPU、GPU 与月度消息额度。",
            "impact": "适合课程中的数据分析、机器学习原型和 agent 工作流练习，尤其是需要 GPU 或云端长任务的项目；先用小数据集验证，避免超出配额。",
            "free": "页面列出在读学生可免费使用；额度为 40 CPU 小时、5 GPU 小时、50GB 存储和每月 50 条 agent 消息。地区、资格审核细则及计划期限官方未说明。",
            "category": "学生教育福利 / AI 云端开发",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "GitHub Student Developer Pack：Azure for Students 云额度",
            "summary": "GitHub Education 的学生福利页列出 Microsoft Azure for Students：18 岁及以上学生可获得 25 多项 Azure 云服务的免费访问和 100 美元 Azure credit，并注明无需信用卡。",
            "howTo": "从 GitHub Education Student Developer Pack 打开 Microsoft Azure 福利入口，按其资格验证步骤申请；用量计费服务会消耗 Azure credit，先检查服务价格与余额。",
            "impact": "可用于部署课程项目、练习云端基础设施，或在了解计费后试验云端 AI 服务；这笔 credit 是一般 Azure 额度，不等于某个 AI 模型的免费调用配额。",
            "free": "官方列出 18 岁以上学生、25+ 项免费服务、100 美元 credit 且无需信用卡；具体地区、申领期限、额度有效期及 AI 服务覆盖范围官方未说明。",
            "category": "学生教育福利 / 云服务额度",
            "source": {
              "name": "GitHub Education Student Developer Pack",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Household energy bills forecast to see biggest rise in four years",
            "source": "BBC",
            "published": "2026-09-29",
            "url": "https://www.bbc.co.uk/news/articles/cwz0zvj4m1myo",
            "readingTime": "6 分钟",
            "topic": "经济 / 能源价格与家庭负担",
            "summary": "BBC 报道称，Cornwall Insight 预测英国典型家庭年能源账单明年1月可能升至1,999英镑，比当前价格上升276英镑、约16%；这只是预测，Ofgem 要到11月下旬才公布实际价格上限。文章先比较10月起的4%涨幅与政府减免的影响，再说明中东天然气供应受扰和欧洲储气偏低如何推高冬季价格；随后以家庭能源负担、超过50亿英镑欠费及供应商和公益组织的呼吁，呈现政策压力。结尾强调预测仍有不确定性，但价格设定窗口已过半，固定费率以外家庭面临的涨价风险较高。",
            "reason": [
              "能源价格与家庭负担属于经济、社会政策类常见议题，可练习从个人成本推及公共政策。",
              "文章按预测数字、成因、家庭影响、政策回应推进，适合概括段落功能与论证链条。",
              "可练习区分 forecast、actual cap 与 conditional prediction，避免把预测写成已发生事实。",
              "price cap、variable tariff、storage、targeted support 等词适用于能源与生活成本话题。",
              "可借鉴用具体账单数字引出弱势群体影响，再提出政策讨论的写作结构。"
            ],
            "vocabulary": [
              { "word": "forecast", "phonetic": "/ˈfɔːrkæst/", "part": "n./v.", "translation": "预测；预报" },
              { "word": "soar", "phonetic": "/sɔːr/", "part": "v.", "translation": "猛增；飙升" },
              { "word": "typical", "phonetic": "/ˈtɪpɪkəl/", "part": "adj.", "translation": "典型的；有代表性的" },
              { "word": "price cap", "phonetic": "/ˈpraɪs kæp/", "part": "n.", "translation": "价格上限" },
              { "word": "variable tariff", "phonetic": "/ˈveriəbəl ˈtærɪf/", "part": "n.", "translation": "浮动费率" },
              { "word": "sustain", "phonetic": "/səˈsteɪn/", "part": "v.", "translation": "维持；持续" },
              { "word": "disruption", "phonetic": "/dɪsˈrʌpʃən/", "part": "n.", "translation": "中断；扰乱" },
              { "word": "storage", "phonetic": "/ˈstɔːrɪdʒ/", "part": "n.", "translation": "储存；储备" },
              { "word": "targeted", "phonetic": "/ˈtɑːrɡɪtɪd/", "part": "adj.", "translation": "有针对性的" },
              { "word": "unsustainable", "phonetic": "/ˌʌnsəˈsteɪnəbəl/", "part": "adj.", "translation": "不可持续的" }
            ],
            "sentences": [
              {
                "original": "The 16% predicted increase would hit millions of households at the coldest time of year, and would mark the biggest rise in bills for four years.",
                "analysis": [
                  "主干为 The increase would hit ... and would mark ...，两个 would 谓语并列。",
                  "The 16% predicted 是名词 increase 的限定信息，说明幅度和预测性质。",
                  "at the coldest time of year 与 for four years 分别补充发生时点和比较跨度。",
                  "and 将家庭影响与历史幅度并列，形成由生活后果到统计判断的递进。",
                  "可借鉴 would + 动词描述尚未确定的预测结果。"
                ],
                "translation": "预计上涨的16%将影响数百万家庭，恰逢一年中最寒冷的时候，并将成为四年来最大的账单涨幅。"
              },
              {
                "original": "The forecast from consultancy Cornwall Insight comes a day before prices go up under regulator Ofgem's October price cap and puts increased pressure on the government to support those who will struggle to pay.",
                "analysis": [
                  "主干为 The forecast comes ... and puts ...，两个谓语共享主语。",
                  "from consultancy Cornwall Insight 交代预测来源；a day before 引出时间参照。",
                  "under ... price cap 说明价格上涨所处的监管机制。",
                  "those 后接 who will struggle to pay 的定语从句，限定需要支持的人群。",
                  "puts pressure on ... to do 是表达政策压力的实用结构。"
                ],
                "translation": "咨询机构 Cornwall Insight 的这项预测发布于监管机构 Ofgem 的10月价格上限上调前一天，并加大了要求政府帮助无力支付者的压力。"
              },
              {
                "original": "This remains only a prediction at this stage.",
                "analysis": [
                  "主干为 This remains a prediction，This 指前文的账单上涨判断。",
                  "only 限定判断的证据状态，提醒读者并非最终价格。",
                  "at this stage 补充当前时间边界，保留未来信息变化的空间。",
                  "该句与此前具体数字形成必要的审慎限定，体现新闻写作的归因意识。",
                  "可用于写作中区分当前证据与最终结果：remain only a ... at this stage。"
                ],
                "translation": "现阶段这仍然只是一项预测。"
              }
            ]
          },
          {
            "title": "How to hide your spending habits from retailers (so you don't get ripped off)",
            "source": "NPR",
            "published": "2026-09-29",
            "url": "https://www.npr.org/2026/09/29/nx-s1-5983457/4-ways-to-avoid-getting-ripped-off-according-to-a-pricing-expert",
            "readingTime": "6 分钟",
            "topic": "科技趋势 / 消费者隐私与个性化定价",
            "summary": "NPR 报道消费者倡议组织负责人 Lindsay Owens 对个性化定价的提醒：酒店、航空公司和零售商可能利用位置、浏览、人口统计与购买记录推测顾客愿付价格，并通过算法测试不同报价。文章先解释数据如何被收集和用于定价，再按场景给出建议：避免登录零售商应用、在不同设备和登录状态下比价、清理 cookies 与限制应用权限，也可考虑线下购物。作者承认这些做法耗时、便利性较低，未必值得用于小额消费；同时指出电子价签等技术也让实体店价格更易变化，并提到部分州开始立法限制个性化定价。",
            "reason": [
              "数据隐私、算法定价和消费者权益是科技发展与日常生活交叉的高频议题。",
              "文章先说明数据如何支持个性化报价，再分场景列出保护隐私和比价方法，最后谈线下零售与政策回应。",
              "可练习区分作者转述的专家判断、风险机制与可执行建议。",
              "personalized pricing、incentive、comparison shopping 等词适合科技伦理与消费经济话题。",
              "建议部分可用于写作中提出分层应对措施，同时注意文章承认时间成本和便利性取舍。"
            ],
            "vocabulary": [
              { "word": "deliberately", "phonetic": "/dɪˈlɪbərətli/", "part": "adv.", "translation": "故意地；蓄意地" },
              { "word": "overcharged", "phonetic": "/ˌoʊvərˈtʃɑːrdʒd/", "part": "v. pp.", "translation": "被多收费；被索价过高" },
              { "word": "geo-location", "phonetic": "/ˌdʒiːoʊloʊˈkeɪʃən/", "part": "n.", "translation": "地理位置数据" },
              { "word": "personalized", "phonetic": "/ˈpɜːrsənəlaɪzd/", "part": "adj.", "translation": "个性化的；针对个人的" },
              { "word": "incentive", "phonetic": "/ɪnˈsentɪv/", "part": "n.", "translation": "激励；诱因" },
              { "word": "retailer", "phonetic": "/ˈriːteɪlər/", "part": "n.", "translation": "零售商" },
              { "word": "comparison shopping", "phonetic": "/kəmˈpærɪsən ˌʃɑːpɪŋ/", "part": "n.", "translation": "比价购物" },
              { "word": "incognito", "phonetic": "/ˌɪnkɑːɡˈniːtoʊ/", "part": "adj.", "translation": "隐身浏览的" },
              { "word": "permission", "phonetic": "/pərˈmɪʃən/", "part": "n.", "translation": "许可；权限" },
              { "word": "unpredictable", "phonetic": "/ˌʌnprɪˈdɪktəbəl/", "part": "adj.", "translation": "难以预测的" }
            ],
            "sentences": [
              {
                "original": "\"What we're seeing is Big Tech reinventing the rip-off,\" says Lindsay Owens, head of the consumer advocacy group Groundwork Collaborative.",
                "analysis": [
                  "引语内部的主干是 What we're seeing is ...，What 引导的名词性从句作主语。",
                  "引语的表语为 Big Tech reinventing the rip-off，其中 Big Tech 是动名词短语的逻辑主语。",
                  "引语后置的 says Lindsay Owens 是报道语，说明观点来源。",
                  "head of the consumer advocacy group Groundwork Collaborative 是 Owens 的同位语，补充身份信息。",
                  "可借鉴“专家原话 + says + 姓名 + 同位语”写法呈现观点及来源。"
                ],
                "translation": "消费者倡议组织 Groundwork Collaborative 负责人 Lindsay Owens 说：“我们看到的是大型科技公司在重新包装宰客手法。”"
              },
              {
                "original": "Still, there are ways to get a fair deal.",
                "analysis": [
                  "这是 there be 存在句，核心为 there are ways。",
                  "Still 作句首连接副词，承接风险描述并引出转折性的解决方案。",
                  "to get a fair deal 是不定式短语，说明 ways 的目的或内容。",
                  "a fair deal 与前文的 rip-off 形成语义对照。",
                  "Still, there are ways to ... 可用于从问题过渡到应对方案。"
                ],
                "translation": "不过，消费者仍有办法争取公平的交易。"
              },
              {
                "original": "Clear your browsing data and cookies regularly.",
                "analysis": [
                  "这是省略主语 you 的祈使句，动词 Clear 直接提出行动建议。",
                  "browsing data 和 cookies 是并列宾语，表示要清理的两类浏览信息。",
                  "regularly 是频率副词，修饰 Clear，说明建议需要重复执行。",
                  "句子由前文的风险分析转为具体、可执行的隐私保护步骤。",
                  "祈使句可用于建议文，但应结合条件或理由，避免显得武断。"
                ],
                "translation": "定期清除浏览数据和 cookies。"
              }
            ]
          },
          {
            "title": "On the rocks? Scotch distilleries pause production as unsold 'whisky loch' grows",
            "source": "The Guardian",
            "published": "2026-09-29",
            "url": "https://www.theguardian.com/food/2026/sep/29/scotch-distilleries-pause-production-whisky-loch-scotland",
            "readingTime": "8 分钟",
            "topic": "经济 / 产业周期与消费变化",
            "summary": "文章以苏格兰酒厂暂停生产和大型仓储扩建开篇，解释疫情期间繁荣后全球苏格兰威士忌需求回落，造成库存积压、裁员和部分企业财务压力。报道再分析原因：消费者在疫情期间囤酒后减少购买、健康意识增强、价格上升，以及美国关税和法国等市场需求下滑；威士忌必须在橡木桶中陈酿至少三年，令供需预测更困难。作者也呈现印度市场增长、旅游收入和业内对周期复苏的乐观判断，结尾以历史上低迷后需求回升作对照，但没有断言本轮复苏何时到来。",
            "reason": [
              "产业过剩、消费变化、出口市场和长期投资决策构成典型经济类阅读主题。",
              "文章从仓储与停产的具体画面切入，转向需求成因、市场数据，再呈现复苏观点与历史类比。",
              "可练习辨析供给过剩与需求下滑的因果链，以及报道如何并置乐观和谨慎声音。",
              "maturation、glut、offset、downturn 等词适用于商业周期和产业分析。",
              "可借鉴以案例引出宏观趋势，再用反方迹象和历史参照限定结论的写法。"
            ],
            "vocabulary": [
              { "word": "distillery", "phonetic": "/dɪˈstɪləri/", "part": "n.", "translation": "酿酒厂；蒸馏厂" },
              { "word": "slump", "phonetic": "/slʌmp/", "part": "v./n.", "translation": "骤降；低迷" },
              { "word": "glut", "phonetic": "/ɡlʌt/", "part": "n.", "translation": "供过于求；过剩" },
              { "word": "maturation", "phonetic": "/ˌmætʃəˈreɪʃən/", "part": "n.", "translation": "成熟；陈酿" },
              { "word": "navigate", "phonetic": "/ˈnævɪɡeɪt/", "part": "v.", "translation": "应对；设法处理" },
              { "word": "sustained", "phonetic": "/səˈsteɪnd/", "part": "adj.", "translation": "持续的" },
              { "word": "tentative", "phonetic": "/ˈtentətɪv/", "part": "adj.", "translation": "试探性的；暂定的" },
              { "word": "offset", "phonetic": "/ˌɔːfˈset/", "part": "v.", "translation": "抵消；弥补" },
              { "word": "downturn", "phonetic": "/ˈdaʊntɜːrn/", "part": "n.", "translation": "衰退；下行期" },
              { "word": "overconfidence", "phonetic": "/ˌoʊvərˈkɑːnfɪdəns/", "part": "n.", "translation": "过度自信" }
            ],
            "sentences": [
              {
                "original": "After a 15-year boom turbocharged by the Covid-19 pandemic, demand for Scotch whisky has slumped around the world.",
                "analysis": [
                  "主干为 demand for Scotch whisky has slumped，说明需求已在全球回落。",
                  "句首 After 引导时间背景，先交代繁荣周期再转入当前变化。",
                  "turbocharged by the Covid-19 pandemic 是过去分词短语，修饰 boom 并说明繁荣的推动因素。",
                  "前置背景与主句构成 boom/slump 的时间对照。",
                  "可借鉴 After + 名词短语引出背景，再用主句写趋势变化。"
                ],
                "translation": "在疫情助推的15年繁荣期之后，苏格兰威士忌需求已在全球范围内下滑。"
              },
              {
                "original": "Distilleries have paused production across Scotland to avoid adding to the glut of supply, known as a “whisky loch” – the equivalent of a “wine lake”.",
                "analysis": [
                  "主干为 Distilleries have paused production，使用现在完成时描述已采取的应对。",
                  "to avoid adding ... 是目的不定式；adding 后接 to the glut 表示加剧积压。",
                  "known as a “whisky loch” 是过去分词短语，补充解释 glut of supply。",
                  "破折号后的 the equivalent of ... 用类比帮助读者理解新表达。",
                  "可借鉴 pause ... to avoid doing ... 说明措施与预防目标。"
                ],
                "translation": "苏格兰各地的酒厂已暂停生产，以免加剧被称为“威士忌湖”的供给积压——相当于“葡萄酒湖”。"
              },
              {
                "original": "Such lengthy maturation periods, used to create a wide range of flavour profiles from sweet to sulphurous, can make it hard to plan production.",
                "analysis": [
                  "主干为 maturation periods can make it hard to plan production。",
                  "Such lengthy 对 periods 作指示与程度限定，回指前文的长期陈酿过程。",
                  "used to create ... 是过去分词短语，补充说明陈酿的用途。",
                  "from sweet to sulphurous 描述风味范围；因果关系落在长期周期使规划更难。",
                  "make it + adj. + to do 是表达某因素增加行动难度的常用结构。"
                ],
                "translation": "如此漫长的陈酿期用于形成从甜味到硫磺味的多种风味，也使生产规划变得困难。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-09-29",
      "status": "ready",
      "ai": {
        "intro": "9月28日至29日核实到1项官方AI新品，按规则扩展到前7日并保留各来源实际发布日期；免费资源按官方计划页、定价页和模型卡复核。",
        "updates": [
          {
            "event": "Claude Sonnet 5.5 正式加入 GitHub Copilot（2026-09-28）",
            "summary": "GitHub 宣布 Claude Sonnet 5.5 在 Copilot 正式可用，定位于构建功能、修复 bug 等范围明确的日常开发任务；可在模型选择器中调用。",
            "howTo": "在 VS Code、Visual Studio、Copilot CLI、GitHub Copilot app 或其他官方列出的客户端打开模型选择器，选择 Claude Sonnet 5.5；先给它一个边界清楚的小任务，再检查生成改动并运行测试。",
            "impact": "课程项目可用它起草小功能或定位单个 bug；学生可对比生成的补丁和自己的实现，但应自己核对测试、依赖及改动范围。",
            "free": "官方列出的可用计划仅为 Copilot Pro、Pro+、Max、Business 和 Enterprise；模型按提供方列表价计费并渐进推出。地区和具体用量官方未说明。",
            "category": "AI 编程 / 新模型",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-28",
              "url": "https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot"
            }
          },
          {
            "event": "Copilot 在 Slack 与 Microsoft Teams 增加上下文和模型控制（2026-09-25）",
            "summary": "GitHub 更新 Copilot 在 Slack 与 Teams 的协作：Slack 可引用支持的文件、附件和消息链接，Teams 可利用行内图片、转发消息及频道/线程历史；两端均可切换模型，Copilot 还会在建 issue 前检查相似问题。",
            "howTo": "先让组织管理员启用 Copilot cloud agent policy，再安装或升级 GitHub 的 Slack/Teams 应用、关联 GitHub 账号并在对话中提及 @GitHub；分享项目文件或线程上下文后提出具体任务。",
            "impact": "小组作业可把讨论中的截图、文件和上下文带入 issue 或编码任务，减少重复建单，并能回看任务关联的原始讨论；提交前仍要人工核对结果。",
            "free": "目前是 Copilot Business 与 Enterprise 组织的 public preview，使用量计入既有 Copilot 权益并受 cloud agent 预算管理；部分功能逐步开放。个人免费资格、地区和独立配额官方未说明。",
            "category": "AI 协作 / 团队工作流",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams"
            }
          },
          {
            "event": "GitHub Copilot app 预览本地 agent 沙箱（2026-09-25）",
            "summary": "Copilot app 的 public preview 加入 local sandboxing，可限制 agent 对本地文件、网络和凭据的访问范围。",
            "howTo": "在 GitHub Copilot app 中试用 public preview 的 local sandboxing，按应用提供的选项限制 agent 可访问的文件、网络和凭据；先用非敏感的课程仓库执行小任务，再检查 agent 活动及改动。",
            "impact": "学生尝试让 agent 修改项目或运行工具时，可先缩小其本机资源访问范围，降低误操作扩大到无关文件或凭据的风险；沙箱不能代替审阅代码。",
            "free": "官方将该能力标为 public preview，但未说明价格、适用账号/计划、地区、配额或开放节奏；需使用 GitHub Copilot app。",
            "category": "AI 编程 / 本地安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude Free 免费网页与应用访问",
            "summary": "Anthropic 定价页列出面向日常问题的 Free 计划；所有计划的用量限制按滚动五小时窗口重置，网页、桌面端、移动端和 Claude Code 共用额度，且没有固定消息数。",
            "howTo": "打开 Claude 网页或应用，选择 Free 计划做短文本解释、摘要或改写；在 Settings > Usage 查看用量，达到上限后等待窗口重置。",
            "impact": "适合用来拆解英文长句、生成复习提纲或比较不同改写；免费额度不是固定消息数，重要事实仍应回到原文核验。",
            "free": "Free 计划可用；用量依对话长度、模型和功能而异，没有固定消息数，滚动五小时重置。账号资格、地区和具体上限官方未说明。",
            "category": "长期免费网页/应用访问 / AI 助手",
            "source": {
              "name": "Claude 官方定价",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free 每月免费代码补全",
            "summary": "GitHub 计划页列出 Copilot Free：每月最多 2,000 次代码补全，并提供有限的功能访问和 AI Credits；免费计划的 agent 使用有限。",
            "howTo": "用个人 GitHub 账号从官方 Copilot Free 页面开始，在支持的 IDE 安装 Copilot 后启用行内补全；到 GitHub 计划/用量页面查看可用功能和剩余额度。",
            "impact": "适合课程练习中的样板代码补全和小型函数草稿；每月额度有限，生成代码应自行阅读并运行测试。",
            "free": "官方标价 Free，每月 2,000 次补全，并有未统一列明数值的 AI Credits 和有限 agent 功能；仅适用于没有组织或企业 Copilot 权限的个人开发者。地区可用性和 AI Credits 的具体数值官方未说明。",
            "category": "长期免费 IDE 访问 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Gemini API / Google AI Studio Free tier",
            "summary": "Google Gemini API 定价页确认部分模型有 Free tier，提供免费输入与输出 token，并可使用 Google AI Studio；免费层数据按页面说明可能用于改进 Google 产品。",
            "howTo": "登录 Google AI Studio，选用定价页标明有 Free tier 的模型创建 API key，先做低频摘要或分类原型；上线前按所选模型的速率限制设置重试与用量监控。",
            "impact": "可用于课程项目的 API 原型和 token 成本估算；免费层适合测试，不应当作不限速的生产服务，也不要提交敏感数据。",
            "free": "官方确认仅部分模型有免费输入/输出；额度和速率按模型分别列示，没有统一配额。账号资格、地区及重置周期官方未说明；免费层内容可能用于改进产品。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter Notebook",
            "summary": "Colab FAQ 说明它是无需本地设置的托管 Jupyter Notebook 服务，可免费使用计算资源，包括 GPU 和 TPU；资源并非保证或无限，使用限制会波动。",
            "howTo": "打开 Colab 新建或上传 notebook，运行课程代码；需要时尝试 GPU/TPU 运行时，并把 notebook 保存到 Drive 或 GitHub，避免将密钥放入共享文件。",
            "impact": "可用于数据清理、课程实验和小型机器学习练习，不必先配置本地环境；应保存中间结果并准备资源受限时的 CPU 方案。",
            "free": "官方确认免费且可使用 GPU/TPU，但资源不保证、配额会波动；固定额度、地区资格和重置周期官方未说明。免费托管运行时禁止挖矿、远程代理、创建 deepfake 等滥用行为。",
            "category": "长期免费云端 notebook / 学习计算资源",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "DeepSeek-R1-Distill-Qwen-1.5B MIT 开放权重",
            "summary": "DeepSeek 官方 Hugging Face 模型卡列出可下载的 DeepSeek-R1 蒸馏模型权重，并说明模型权重采用 MIT License，允许商业使用及修改。",
            "howTo": "打开官方模型卡，在 Distill 模型列表选择 DeepSeek-R1-Distill-Qwen-1.5B，按卡片建议配置本地推理环境并阅读 usage recommendations；用非敏感的题目测试输出。",
            "impact": "学生可在本地推理环境中观察小型开权重模型的推理输出、尝试提示词并学习模型部署，而不必购买 API token；使用许可仍应按 MIT License 遵守。",
            "free": "模型卡提供权重下载并标明 MIT License，允许商业使用和修改；账号、地区、下载额度及硬件要求官方未说明，运行需要自行准备推理环境。",
            "category": "可下载开放模型权重 / MIT License",
            "source": {
              "name": "DeepSeek 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Originalism: What it is, what it isn’t and why it’s the most democratic option for the Supreme Court",
            "source": "The Conversation",
            "published": "2026-09-28",
            "url": "https://theconversation.com/originalism-what-it-is-what-it-isnt-and-why-its-the-most-democratic-option-for-the-supreme-court-291115",
            "readingTime": "7 分钟",
            "topic": "社会 / 宪法解释与民主",
            "summary": "作者先把原旨主义界定为按宪法制定时的理解来解释文本，并与允许法官随时代重释的“活宪法”对照；随后回顾这一解释路径的兴衰，并逐一回应“宪法因此不能改变”及“只是保守派法官的借口”等批评。文章也讨论历史材料含糊、法官并非历史学家、原始制宪排斥部分群体等反对理由，再呈现原旨主义者对民主正当性与修宪程序的回应。作者承认原旨主义内部也有分歧、修宪程序负担很重，结尾仍认为它可能是较小的恶。",
            "reason": [
              "主题：围绕宪法、民主代表性与司法权展开，适合社会制度、法治与公共议题类阅读。",
              "结构：先定义概念并对照另一立场，再辨析常见误解，继而列出反对理由和回应，最后回到作者判断。",
              "题型：可训练概念辨析、段落功能、作者态度及支持/反对论据配对。",
              "词汇：可积累 interpretation、ambiguous、electorate、supermajority 等抽象议论文词汇。",
              "写作：可借鉴“提出概念—说明争议—呈现反方—有限度下结论”的平衡论证结构。"
            ],
            "vocabulary": [
              {
                "word": "originalism",
                "phonetic": "/əˈrɪdʒənəlɪzəm/",
                "part": "n.",
                "translation": "原旨主义；按原初含义解释法律的理论"
              },
              {
                "word": "reinterpret",
                "phonetic": "/ˌriːɪnˈtɜːprɪt/",
                "part": "v.",
                "translation": "重新解释"
              },
              {
                "word": "amendment",
                "phonetic": "/əˈmendmənt/",
                "part": "n.",
                "translation": "修正；修正案"
              },
              {
                "word": "detractor",
                "phonetic": "/dɪˈtræktə/",
                "part": "n.",
                "translation": "批评者；贬低者"
              },
              {
                "word": "provision",
                "phonetic": "/prəˈvɪʒən/",
                "part": "n.",
                "translation": "条款；规定"
              },
              {
                "word": "ambiguous",
                "phonetic": "/æmˈbɪɡjuəs/",
                "part": "adj.",
                "translation": "含糊的；有歧义的"
              },
              {
                "word": "electorate",
                "phonetic": "/ɪˈlektərət/",
                "part": "n.",
                "translation": "全体选民"
              },
              {
                "word": "supermajority",
                "phonetic": "/ˌsuːpəˈmɑːdʒərəti/",
                "part": "n.",
                "translation": "特别多数；超多数"
              },
              {
                "word": "burdensome",
                "phonetic": "/ˈbɜːdnsəm/",
                "part": "adj.",
                "translation": "负担沉重的"
              }
            ],
            "sentences": [
              {
                "original": "Originalism is a philosophy of interpreting the U.S. Constitution.",
                "analysis": [
                  "主干是 Originalism is a philosophy，系动词 is 把主语与定义性表语连接。",
                  "of interpreting the U.S. Constitution 是介词短语，说明这种 philosophy 的内容。",
                  "interpreting 是动名词，后接宾语 the U.S. Constitution。",
                  "该句先给出术语的简明定义，适合识别说明文中的 topic sentence。"
                ],
                "translation": "原旨主义是一种解释美国宪法的思想。"
              },
              {
                "original": "But originalists think the Constitution can change; they just disagree with who can do the changing.",
                "analysis": [
                  "But 表示转折，回应“原旨主义认为宪法不能变”的常见误解。",
                  "前半句主干是 originalists think，后接省略 that 的宾语从句。",
                  "分号连接两个紧密相关的独立分句，后半句把争议焦点从“能否改变”转到“谁有权改变”。",
                  "who can do the changing 是介词 with 后的间接疑问从句；do the changing 指实施改变。"
                ],
                "translation": "但原旨主义者认为宪法可以改变；他们只是不同意应由谁来改变。"
              },
              {
                "original": "But as more and more people practice originalism, more and more people disagree about how to do it right.",
                "analysis": [
                  "But 引出让步和转折，指出该理论流行并未消除其内部争议。",
                  "as 引导伴随变化的从句，说明原旨主义实践者增加时，分歧也随之增多。",
                  "主句以 more and more people 作主语，disagree 为谓语，形成与从句呼应的比较结构。",
                  "about 后的 how to do it right 是间接疑问结构，讨论的是正确实践方法。"
                ],
                "translation": "但随着越来越多人实践原旨主义，越来越多人对如何正确实践它产生分歧。"
              }
            ]
          },
          {
            "title": "Unis are offering degrees in content creation for £30,000. But are they worth it?",
            "source": "BBC",
            "published": "2026-09-28",
            "url": "https://www.bbc.co.uk/news/articles/c61mvy1emr2zo",
            "readingTime": "4 分钟",
            "topic": "教育 / 内容创作与职业教育",
            "summary": "报道以一名内容创作专业毕业生为切口，介绍课程如何教授视频制作、社交平台受众经营、品牌合作与内容变现；毕业生称课程带来设备、行业联系和就业机会。文章继而列举英国及美国大学的同类项目和学费，提示三年课程可能接近£30,000，并将课程提供的实践技能与高昂学费并置。报道呈现毕业生和校方对课程价值的正面说法，也把是否值得付费留作读者判断。",
            "reason": [
              "主题：连接高等教育、就业技能与社交媒体经济，适合教育和青年就业主题。",
              "结构：先以毕业生经历引入，再说明课程内容与个人收益，最后转向学费和投资回报问题。",
              "题型：可练习人物案例的论证作用、标题设问、细节信息定位及作者是否给出结论。",
              "词汇：包含 transferable skills、monetise、audience、annual fee 等职业与商业语汇。",
              "写作：可借鉴用具体案例引出一般问题，并以成本与收益对照组织议论文。"
            ],
            "vocabulary": [
              {
                "word": "raise a few eyebrows",
                "phonetic": "/reɪz ə fjuː ˈaɪbraʊz/",
                "part": "phr.",
                "translation": "引起惊讶；引发质疑"
              },
              {
                "word": "transferable",
                "phonetic": "/trænsˈfɜːrəbl/",
                "part": "adj.",
                "translation": "可迁移的；可转用的"
              },
              {
                "word": "entrepreneur",
                "phonetic": "/ˌɒntrəprəˈnɜː/",
                "part": "n.",
                "translation": "创业者"
              },
              {
                "word": "monetise",
                "phonetic": "/ˈmɒnɪtaɪz/",
                "part": "v.",
                "translation": "使……变现"
              },
              {
                "word": "audience",
                "phonetic": "/ˈɔːdiəns/",
                "part": "n.",
                "translation": "受众；观众"
              },
              {
                "word": "hired",
                "phonetic": "/ˈhaɪəd/",
                "part": "v.",
                "translation": "受聘；被雇用"
              },
              {
                "word": "equipment",
                "phonetic": "/ɪˈkwɪpmənt/",
                "part": "n.",
                "translation": "设备；器材"
              },
              {
                "word": "hands-on",
                "phonetic": "/ˌhændz ˈɒn/",
                "part": "adj.",
                "translation": "动手实践的"
              },
              {
                "word": "annual",
                "phonetic": "/ˈænjuəl/",
                "part": "adj.",
                "translation": "每年的"
              }
            ],
            "sentences": [
              {
                "original": "She says the course gave her access to equipment, technology and industry contacts.",
                "analysis": [
                  "主干为 She says，后接省略 that 的宾语从句。",
                  "从句主干是 the course gave her access，说明课程带来的资源。",
                  "gave her access 中 her 是间接宾语，access 是直接宾语；to 短语列出资源内容。",
                  "equipment、technology、industry contacts 并列，体现受访者评价课程价值时的具体依据。"
                ],
                "translation": "她说，这门课程让她接触到设备、技术和行业人脉。"
              },
              {
                "original": "Several universities in the UK now offer such courses.",
                "analysis": [
                  "主干为 Several universities offer such courses，主语与谓语均为复数形式。",
                  "in the UK 作后置修饰语，限定这些大学的范围。",
                  "now 标示当前趋势，such 指代前文介绍的内容创作学位课程。",
                  "该句从个案过渡到更广泛的教育供给，承担扩展论据的功能。"
                ],
                "translation": "英国目前有多所大学开设此类课程。"
              },
              {
                "original": "Yet you’d be paying a lot of money for this.",
                "analysis": [
                  "Yet 表示转折，把前文课程的实用性与费用问题对照起来。",
                  "you’d 在此是 you would，构成假设性语气，提醒读者面对的潜在支出。",
                  "be paying 是进行体，突出持续承担费用的过程。",
                  "for this 中 this 指代前文所说的课程；短句将讨论焦点转向成本。"
                ],
                "translation": "不过，为此你要花上一大笔钱。"
              }
            ]
          },
          {
            "title": "Why fuel prices may go higher still",
            "source": "The Conversation",
            "published": "2026-09-28",
            "url": "https://theconversation.com/why-fuel-prices-may-go-higher-still-292853",
            "readingTime": "7 分钟",
            "topic": "经济 / 能源供应与生活成本",
            "summary": "文章从霍尔木兹海峡运输受阻引出油价上行风险，再追踪沙特替代输油管线受袭、俄罗斯柴油出口受限等供给冲击如何传导到运输、食品和家庭燃料成本。随后比较美国、亚洲和欧洲所受影响，并指出释放战略储备、替代线路等缓冲手段已被大量使用；中国库存及交通电动化曾压低需求，但需求回升可能增加压力。结尾强调冲突持续时政策缓冲空间有限，同时区分油价继续上涨与真正燃料短缺这两种风险。",
            "reason": [
              "主题：以能源供应冲击解释燃料和商品成本，适合经济、环境与国际关系交叉主题。",
              "结构：从运输瓶颈展开因果链，再比较区域影响、政策缓冲措施及中国因素，最后作风险展望。",
              "题型：适合考查因果推断、例证作用、段落主旨及作者对未来风险的审慎判断。",
              "词汇：可积累 constrain、ration、stockpile、electrification、blunt 等能源经济词汇。",
              "写作：可借鉴“供给冲击—成本传导—政策应对—不确定性”的分析框架。"
            ],
            "vocabulary": [
              {
                "word": "hover",
                "phonetic": "/ˈhɒvə/",
                "part": "v.",
                "translation": "徘徊；维持在某一水平附近"
              },
              {
                "word": "exhaust",
                "phonetic": "/ɪɡˈzɔːst/",
                "part": "v.",
                "translation": "耗尽；用尽"
              },
              {
                "word": "pipeline",
                "phonetic": "/ˈpaɪplaɪn/",
                "part": "n.",
                "translation": "输送管道；管线"
              },
              {
                "word": "constrained",
                "phonetic": "/kənˈstreɪnd/",
                "part": "adj.",
                "translation": "受限制的；紧张的"
              },
              {
                "word": "ration",
                "phonetic": "/ˈræʃn/",
                "part": "v.",
                "translation": "定量供应；配给"
              },
              {
                "word": "stockpile",
                "phonetic": "/ˈstɒkpaɪl/",
                "part": "n.",
                "translation": "储备；库存"
              },
              {
                "word": "electrification",
                "phonetic": "/ɪˌlektrɪfɪˈkeɪʃn/",
                "part": "n.",
                "translation": "电气化"
              },
              {
                "word": "blunt",
                "phonetic": "/blʌnt/",
                "part": "v.",
                "translation": "减轻；缓和"
              },
              {
                "word": "shortage",
                "phonetic": "/ˈʃɔːtɪdʒ/",
                "part": "n.",
                "translation": "短缺；不足"
              }
            ],
            "sentences": [
              {
                "original": "The international community has already taken most of the measures available to curb oil demand and boost its supply.",
                "analysis": [
                  "主干是 The international community has taken most of the measures，使用现在完成时总结已采取的行动。",
                  "available 是后置形容词，修饰 measures，表示可采取的措施。",
                  "to curb 与 boost 是并列不定式，分别说明措施针对需求和供给的目标。",
                  "需求端与供给端并列，概括前文政策工具的双向思路。"
                ],
                "translation": "国际社会已经采取了大多数可用措施来抑制石油需求并增加供应。"
              },
              {
                "original": "These shocks are even more acute outside the United States, which is the world’s largest energy producer.",
                "analysis": [
                  "主句主干为 These shocks are more acute，说明冲击程度更强。",
                  "even 修饰比较级 more acute，强调程度差异；outside the United States 表示地点范围。",
                  "which 引导非限制性定语从句，补充说明 the United States。",
                  "该句把前文讨论从美国扩展到其他地区，并用让步意味提醒读者全球影响不均。"
                ],
                "translation": "在美国以外，这些冲击更为严重；美国是世界上最大的能源生产国。"
              },
              {
                "original": "Those moves have reduced the scale of oil price increases, but they did not prevent them entirely.",
                "analysis": [
                  "but 连接两个独立分句，构成“有所缓解但未能阻止”的转折关系。",
                  "前半句使用现在完成时，概括措施至今产生的影响。",
                  "Those moves 指代前文释放战略储备等行动；them 指代 oil price increases。",
                  "entirely 限定 prevent，说明措施降低了涨幅，却没有彻底消除涨价。"
                ],
                "translation": "这些措施降低了油价上涨的幅度，但并未完全阻止涨价。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-09-28",
      "status": "ready",
      "ai": {
        "intro": "先核验 9 月 24—25 日的 GitHub 官方更新，再补充仍可用的免费 AI 资源；因 9 月 27—28 日不足 3 条可直接核验的新发布，按规则扩展到前 7 日，并保留来源实际发布日期。",
        "updates": [
          {
            "event": "GitHub Agentic Autofix 开始使用 Copilot Memory（2026-09-25）",
            "summary": "GitHub Changelog 说明，Agentic Autofix 现在会使用 Copilot Memory；它可把仓库中与安全开发模式有关的记忆提供给代码修复流程。官方同时将 Agentic Autofix 和 Copilot Memory 标为 public preview。",
            "howTo": "在支持的 GitHub 仓库中触发 Agentic Autofix，先在仓库中配置并检查 Copilot Memory 的内容，再审阅它提出的修复和测试；将自动生成的改动放入分支，运行测试后再提交。",
            "impact": "课程项目可让自动修复参考仓库约定和安全模式，减少重复说明；学生仍应检查记忆是否过时、修复是否引入回归，并把安全判断留给人工。",
            "free": "官方只说明两项能力处于 public preview；没有统一说明个人/学生计划、地区、账号资格或配额。",
            "category": "AI 编程 / 代码安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory"
            }
          },
          {
            "event": "GitHub 对高影响操作加入 proof of presence（2026-09-24）",
            "summary": "GitHub 为企业账户公开预览 proof of presence，在高影响操作发生时要求确认确有获授权的人正在操作；官方称这是企业版 sudo mode 的扩展，用于降低被盗会话 Cookie 或长期令牌带来的供应链风险。",
            "howTo": "若组织属于 GitHub Enterprise Cloud 的 managed-user enterprise，且使用 Microsoft Entra ID 作为 SAML 或 OIDC SSO IdP，由管理员按 Changelog 说明启用并测试高影响操作的现场确认；普通个人账号不能据此推断已获得该能力。",
            "impact": "做开源或课程仓库管理时，学生可把“身份在场”作为高风险发布、权限和设置操作的额外控制点，并在自动化脚本中避免绕过人工确认。",
            "free": "官方标为 public preview；范围仅为 github.com 和 GHEC-DR 上使用 Microsoft Entra ID SSO 的 managed-user enterprise，价格、个人/学生资格、地区和配额官方未说明。",
            "category": "AI 时代安全 / 身份验证",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-24",
              "url": "https://github.blog/changelog/2026-09-24-require-proof-of-presence-for-high-impact-actions"
            }
          },
          {
            "event": "GitHub Enterprise managed settings 增加产品内验证器（2026-09-25）",
            "summary": "GitHub Changelog 发布 Enterprise managed settings in-product validator，用于在产品内检查企业托管设置；它把设置校验直接放入管理流程，帮助管理员发现配置问题。",
            "howTo": "企业管理员打开 GitHub Enterprise 的 managed settings 页面，使用产品内 validator 检查当前配置；按页面提示修正问题，再让组织管理员复核设置和生效范围。",
            "impact": "学生参与学校或实验室 GitHub Enterprise 管理时，可把 validator 当作发布前配置检查，减少因策略遗漏导致的协作或权限问题；它不能替代对组织政策的人工审阅。",
            "free": "该 Changelog 没有说明价格、免费计划、地区、账号资格或使用配额；可用范围以企业账户当前页面为准。",
            "category": "AI 协作基础设施 / 企业管理",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-09-25",
              "url": "https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator"
            }
          }
        ],
        "deals": [
          {
            "event": "Claude 免费计划的滚动五小时窗口",
            "summary": "Anthropic 定价页列出 Free 计划，面向日常问题；页面说明所有计划都有使用限制，免费额度按滚动的五小时 session window 重置。",
            "howTo": "打开 Claude 网页、桌面或移动端并注册/登录，先用短文本做摘要或改写；在 Settings > Usage 查看用量，达到限制后等待窗口重置。",
            "impact": "适合英文改写、概念解释和学习提纲；长文应拆分，关键事实回到原文核验。",
            "free": "官方确认 Free 计划和滚动五小时重置，但没有给出固定消息数；账号、地区和具体上限官方未说明。",
            "category": "长期免费网页访问 / AI 助手",
            "source": {
              "name": "Claude 官方定价",
              "published": "官方未说明",
              "url": "https://claude.com/pricing"
            }
          },
          {
            "event": "GitHub Copilot Student 免费学生计划",
            "summary": "GitHub 计划说明列出 Copilot Student 为免费学生计划，权益包括 unlimited code completions、GitHub AI Credits，以及 auto model selection 下有限的 chat 和 agent 使用。",
            "howTo": "在 GitHub Education 完成学生身份验证并启用 Copilot Student，在 IDE 安装扩展；用补全处理样板代码，并在账户页面查看 chat/agent 使用情况。",
            "impact": "可用于课程编程、测试草稿和报错解释，降低练习门槛；提交前运行测试并人工审查生成代码。",
            "free": "官方标为免费并要求 verified student；补全 unlimited，chat/agent limited。统一 credits 数值、地区例外和验证材料要求官方未说明。",
            "category": "学生教育福利 / AI 编程",
            "source": {
              "name": "GitHub Copilot 官方计划说明",
              "published": "官方未说明",
              "url": "https://docs.github.com/en/copilot/get-started/plans"
            }
          },
          {
            "event": "Gemini API 与 AI Studio 的 Free tier",
            "summary": "Google Gemini API 定价页把部分模型列为 Free tier，并将免费层与付费层分开；具体模型的限流与价格需按当前表格逐项查看。",
            "howTo": "登录 Google AI Studio，选择标有 Free tier 的模型，先做低频摘要或分类原型；上线前记录页面列出的 RPM、TPM、RPD 等限制并处理超限。",
            "impact": "学生可用较低门槛完成 API 原型，学习按 token 和请求速率估算成本，不把免费层当成无限吞吐。",
            "free": "官方确认存在 Free tier；模型清单、请求限制、账号资格、地区和重置周期按模型/项目决定，统一额度官方未说明。",
            "category": "免费 API / 开发者资源",
            "source": {
              "name": "Google Gemini API 官方定价",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Google Colab 免费托管 Jupyter 环境",
            "summary": "Colab FAQ 将其定义为无需本地设置的托管 Jupyter Notebook 服务，并说明可免费使用包括 GPU 和 TPU 在内的计算资源；资源不保证，使用上限会波动。",
            "howTo": "打开 Colab，新建或导入 notebook，在运行时设置中按需尝试 GPU/TPU；把 notebook 保存到 Drive 或从 GitHub 加载，不要把密钥写入共享文件。",
            "impact": "适合数据清洗、课程实验和小型机器学习练习；应保存中间结果，并为资源回收或限流准备替代方案。",
            "free": "官方说明服务可免费使用且资源不保证；具体配额、可用地区、重置周期和 GPU/TPU 获得条件官方未说明。",
            "category": "长期免费开发环境 / 学习",
            "source": {
              "name": "Google Colaboratory FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Qwen3-4B Apache-2.0 开放模型权重",
            "summary": "Qwen 官方 Hugging Face 模型卡提供 Qwen3-4B 可下载权重，介绍 thinking/non-thinking 模式切换和多语言能力，并在许可部分标注 Apache-2.0。",
            "howTo": "打开 Qwen/Qwen3-4B 模型卡，按 Transformers 示例安装依赖并下载权重；先检查本机存储、内存和推理工具要求，再用非敏感文本测试。",
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
            "event": "GitHub Education 认证学生可使用 Student Developer Pack",
            "summary": "GitHub Education 的官方页面提供 Student Developer Pack 入口，面向经验证的学生，包含开发者工具和服务的学生权益；具体合作项目以页面当前列表为准。",
            "howTo": "打开 GitHub Education Student Developer Pack 页面，登录 GitHub，按页面流程提交学生身份验证；获批后逐项打开可用合作项目并阅读其独立条款。",
            "impact": "可为课程开发、部署和协作提供工具试用或学生权益，避免直接购买；学生应记录每项服务的到期、地区和数据处理条件。",
            "free": "官方页面以 verified student 为资格基础，但未对所有合作项目统一说明价格、地区、期限或额度；以每项合作方页面为准。",
            "category": "学生教育福利 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Protesters disperse after blocking controversial Orange Order parade",
            "source": "BBC",
            "published": "2026-09-27",
            "url": "https://www.bbc.co.uk/news/articles/c6qjkk55wd47o",
            "readingTime": "6 分钟",
            "topic": "社会 / 社区冲突与妥协",
            "summary": "文章报道北爱尔兰一场有争议的 Orange Order 游行被抗议者阻拦后，参与者最终散去；同时交代北爱尔兰事务大臣 Chris Bryant 从工党会议返回参与会谈，并敦促争议双方继续寻求妥协。报道以现场事件切入，再补充政治人物回应，呈现社区传统、公共秩序与谈判之间的张力，结论落在避免冲突升级的政治沟通。",
            "reason": [
              "主题涉及身份、传统、公共空间与妥协，适合社会议题阅读。",
              "结构为现场结果—政治回应—冲突背景，便于定位事实与观点。",
              "可训练区分报道事实和官员倡议，并判断作者如何用结果收束。",
              "controversial、dispute、compromise 等词适合公共事务语境。",
              "写作可借鉴先描述争议事件，再呈现相关方立场并提出缓和方向。"
            ],
            "vocabulary": [
              {
                "word": "controversial",
                "phonetic": "/ˌkɒn.trəˈvɜː.ʃəl/",
                "part": "adj.",
                "translation": "有争议的"
              },
              {
                "word": "parade",
                "phonetic": "/pəˈreɪd/",
                "part": "n.",
                "translation": "游行"
              },
              {
                "word": "disperse",
                "phonetic": "/dɪˈspɜːs/",
                "part": "v.",
                "translation": "散去；驱散"
              },
              {
                "word": "protester",
                "phonetic": "/prəˈtes.tər/",
                "part": "n.",
                "translation": "抗议者"
              },
              {
                "word": "dispute",
                "phonetic": "/dɪˈspjuːt/",
                "part": "n.",
                "translation": "争议"
              },
              {
                "word": "compromise",
                "phonetic": "/ˈkɒm.prə.maɪz/",
                "part": "n.",
                "translation": "妥协"
              },
              {
                "word": "community",
                "phonetic": "/kəˈmjuː.nə.ti/",
                "part": "n.",
                "translation": "社区；群体"
              },
              {
                "word": "tension",
                "phonetic": "/ˈten.ʃən/",
                "part": "n.",
                "translation": "紧张关系"
              }
            ],
            "sentences": [
              {
                "original": "Protesters disperse after blocking controversial Orange Order parade.",
                "analysis": [
                  "主干是 Protesters disperse，主语和谓语清晰。",
                  "after 引导时间状语，说明散去发生在阻拦之后。",
                  "blocking 是动名词，controversial 修饰 parade。",
                  "标题用一般现在时概括已发生新闻，简洁突出结果。"
                ],
                "translation": "抗议者阻拦有争议的 Orange Order 游行后散去。"
              },
              {
                "original": "The dispute has caused tension in the community.",
                "analysis": [
                  "主干为 The dispute has caused tension。",
                  "现在完成时连接过去争议与当前影响。",
                  "in the community 是地点/范围状语。",
                  "cause + 名词可用于表达社会事件的结果。"
                ],
                "translation": "这场争议在社区中造成了紧张。"
              },
              {
                "original": "Both sides must double down on compromise.",
                "analysis": [
                  "主干是 Both sides must double down。",
                  "on compromise 补充行动方向。",
                  "must 表示政治倡议中的必要性。",
                  "double down on 可表达“进一步坚持或加大努力”，但语气较强。"
                ],
                "translation": "双方都必须进一步努力寻求妥协。"
              }
            ]
          },
          {
            "title": "Scientists discover two new species of sea spiders along Canadian coastline",
            "source": "NPR",
            "published": "2026-09-27",
            "url": "https://www.npr.org/2026/09/27/nx-s1-5982026/new-sea-spider-species",
            "readingTime": "5 分钟",
            "topic": "环境 / 生物多样性",
            "summary": "NPR 报道科学家在加拿大海岸线发现两种新的海蜘蛛，并提醒读者目前已确认的海蜘蛛种类超过 1,300 种。文章以新发现为入口，解释海蜘蛛并非真正的蜘蛛、研究者如何在沿海样本中识别物种，再把个案放回海洋生物多样性调查的更大背景。结尾强调仍有物种等待记录，说明分类研究对认识海洋生态的重要性。",
            "reason": [
              "主题是物种发现与海洋生物多样性，适合环境科学普及类文章。",
              "结构为发现—概念澄清—研究过程—更广泛意义。",
              "可训练主旨概括、数字细节定位和对类比说明的理解。",
              "species、coastline、identify 等词可迁移到环境报道。",
              "写作可借鉴从具体发现过渡到生态保护或科学认知意义。"
            ],
            "vocabulary": [
              {
                "word": "species",
                "phonetic": "/ˈspiː.ʃiːz/",
                "part": "n.",
                "translation": "物种"
              },
              {
                "word": "coastline",
                "phonetic": "/ˈkəʊst.laɪn/",
                "part": "n.",
                "translation": "海岸线"
              },
              {
                "word": "scientist",
                "phonetic": "/ˈsaɪən.tɪst/",
                "part": "n.",
                "translation": "科学家"
              },
              {
                "word": "identify",
                "phonetic": "/aɪˈden.tɪ.faɪ/",
                "part": "v.",
                "translation": "识别；确定"
              },
              {
                "word": "biodiversity",
                "phonetic": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
                "part": "n.",
                "translation": "生物多样性"
              },
              {
                "word": "specimen",
                "phonetic": "/ˈspes.ɪ.mən/",
                "part": "n.",
                "translation": "标本"
              },
              {
                "word": "marine",
                "phonetic": "/məˈriːn/",
                "part": "adj.",
                "translation": "海洋的"
              },
              {
                "word": "discovery",
                "phonetic": "/dɪˈskʌv.ər.i/",
                "part": "n.",
                "translation": "发现"
              }
            ],
            "sentences": [
              {
                "original": "Scientists discover two new species of sea spiders along the Canadian coastline.",
                "analysis": [
                  "主干是 Scientists discover two new species。",
                  "of sea spiders 说明 species 的类别。",
                  "along the Canadian coastline 是地点状语。",
                  "标题用一般现在时突出新闻事件和发现结果。"
                ],
                "translation": "科学家在加拿大海岸线沿岸发现了两种新的海蜘蛛。"
              },
              {
                "original": "So far, scientists have identified more than 1,300 species of sea spiders.",
                "analysis": [
                  "主干为 scientists have identified species。",
                  "So far 与现在完成时搭配，表示截至目前的累计结果。",
                  "more than 1,300 是数量限定。",
                  "of sea spiders 后置说明 species 的范围。"
                ],
                "translation": "截至目前，科学家已经确认了 1,300 多种海蜘蛛。"
              },
              {
                "original": "The discovery adds to what scientists know about life in the ocean.",
                "analysis": [
                  "主干是 The discovery adds to ...。",
                  "what 引导名词性从句作介词 to 的宾语。",
                  "about life in the ocean 说明知识的主题。",
                  "add to 可用于表达新证据对既有认知的补充。"
                ],
                "translation": "这一发现丰富了科学家对海洋生命的认识。"
              }
            ]
          },
          {
            "title": "Two giant pandas arrive in Atlanta from China after Xi-Trump summit",
            "source": "The Guardian",
            "published": "2026-09-27",
            "url": "https://www.theguardian.com/us-news/2026/sep/27/giant-pandas-atlanta-zoo-china-xi-trump-summit",
            "readingTime": "5 分钟",
            "topic": "文化 / 国际交流与动物保护",
            "summary": "文章报道两只大熊猫 Ping Ping 和 Fu Shuang 从中国抵达亚特兰大动物园，背景是中美政府之间的租借安排以及习近平与特朗普峰会后的外交氛围。报道先写熊猫抵达这一可见事件，再解释租借协议和动物园接待安排，最后把“熊猫外交”放在两国关系和公众文化交流中理解。文章的重点不是单纯的动物新闻，而是文化象征如何与国家间关系、保护合作和公共期待相连。",
            "reason": [
              "主题结合动物保护、文化交流与国际关系，适合跨学科阅读。",
              "结构为抵达消息—租借细节—外交背景—象征意义。",
              "可训练识别事实、背景和隐含意义之间的层次。",
              "loan deal、summit、diplomatic 等词适合国际新闻。",
              "写作可借鉴用具体公共事件引出更广泛的关系与合作讨论。"
            ],
            "vocabulary": [
              {
                "word": "giant panda",
                "phonetic": "/ˌdʒaɪ.ənt ˈpæn.də/",
                "part": "n.",
                "translation": "大熊猫"
              },
              {
                "word": "arrive",
                "phonetic": "/əˈraɪv/",
                "part": "v.",
                "translation": "抵达"
              },
              {
                "word": "summit",
                "phonetic": "/ˈsʌm.ɪt/",
                "part": "n.",
                "translation": "峰会"
              },
              {
                "word": "loan deal",
                "phonetic": "/ləʊn diːl/",
                "part": "n.",
                "translation": "租借协议"
              },
              {
                "word": "diplomatic",
                "phonetic": "/ˌdɪp.ləˈmæt.ɪk/",
                "part": "adj.",
                "translation": "外交的"
              },
              {
                "word": "symbol",
                "phonetic": "/ˈsɪm.bəl/",
                "part": "n.",
                "translation": "象征"
              },
              {
                "word": "conservation",
                "phonetic": "/ˌkɒn.səˈveɪ.ʃən/",
                "part": "n.",
                "translation": "保护；保育"
              },
              {
                "word": "relationship",
                "phonetic": "/rɪˈleɪ.ʃən.ʃɪp/",
                "part": "n.",
                "translation": "关系"
              }
            ],
            "sentences": [
              {
                "original": "Two giant pandas arrive in Atlanta from China after the Xi-Trump summit.",
                "analysis": [
                  "主干是 Two giant pandas arrive in Atlanta。",
                  "from China 说明来源，after ... summit 提供时间背景。",
                  "标题使用一般现在时压缩叙事。",
                  "after 短语把动物新闻与外交事件并置。"
                ],
                "translation": "习近平与特朗普峰会后，两只大熊猫从中国抵达亚特兰大。"
              },
              {
                "original": "The pandas are part of a loan deal between the Chinese and US governments.",
                "analysis": [
                  "主干是 The pandas are part of a loan deal。",
                  "between ... governments 限定协议双方。",
                  "are part of 表示个体属于更大的安排。",
                  "被动意义通过名词 loan deal 间接呈现，适合说明制度背景。"
                ],
                "translation": "这些熊猫是中美两国政府租借协议的一部分。"
              },
              {
                "original": "The animals have become a symbol of the relationship between the two countries.",
                "analysis": [
                  "主干是 The animals have become a symbol。",
                  "现在完成时表示象征意义逐渐形成并延续到现在。",
                  "of the relationship 说明 symbol 的内容。",
                  "between the two countries 限定关系的双方。"
                ],
                "translation": "这些动物已经成为两国关系的一种象征。"
              }
            ]
          }
        ]
      }
    },
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
    }
  ]
};
