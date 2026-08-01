/*
 * Plain JavaScript keeps the site usable without a build step.
 * Every factual item must include a directly verifiable source URL.
 */
window.BRIEFING_DATA = {
  updatedAt: "2026-08-01T16:20:00+08:00",
  issues: [
    {
      date: "2026-08-01",
      status: "ready",
      ai: {
        intro: "只看今天新上线了什么、学生能拿它做什么，以及有哪些免费额度值得领取。",
        updates: [
          {
            event: "Gemini 7 月功能包上线：支持 macOS 全局语音输入，并推出更快的 Flash 模型",
            impact: "写论文提纲、改写段落或整理笔记时，可以直接在当前窗口口述，不必反复复制到聊天页面；新 Flash 模型更适合快速问答和批量整理资料。",
            howTo: "更新或打开 Gemini；macOS 用户在任意活动窗口调用语音功能，可口述、改写选中文字或生成视觉内容。模型可在 Gemini 的模型选择器中切换，具体可用性以账号和地区为准。",
            free: "Google 官方公告称部分功能面向 Gemini 用户推出，但未承诺所有地区、账号或模型均免费；Gemini Spark 不适用于欧洲经济区、英国、瑞士和尼日利亚。",
            category: "Gemini 更新",
            summary: "Google 同时公布 Gemini Spark 全球扩展、Dropbox 等应用连接、个性化图片和头像复用等功能。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/products-and-platforms/products/gemini/gemini-drop-july-2026/"
            }
          },
          {
            event: "Google 发布 Glanceboard：用 Gemini Flash 和图像模型自动生成每日课程与天气看板",
            impact: "这是一个很实用的 AI 编程案例：学生可以借鉴它，把课程表、DDL、天气和复习计划汇总成宿舍屏幕或网页看板。",
            howTo: "参考官方案例，把 Google Calendar 和天气数据交给轻量本地服务器处理，再提示图像模型生成当天视觉卡片；没有电子墨水屏也可先做普通网页版本。",
            free: "官方案例没有宣布统一的免费成品服务；实际复刻可能涉及 Gemini API、硬件或日历服务费用，应以所用 API 的实时价格与免费额度为准。",
            category: "AI 实用案例",
            summary: "该案例强调本地轻量服务器运行，不要求 Glanceboard 用户注册云端账号。",
            source: {
              name: "Google 官方博客",
              published: "2026-07-31",
              url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/"
            }
          },
          {
            event: "GitHub Copilot 停用 Gemini 2.5 Pro 与 Gemini 3 Flash",
            impact: "如果你用 Copilot 写课程作业或项目代码，旧模型工作流可能失效；提前切换可避免聊天、行内编辑、Agent 模式和代码补全突然不可用。",
            howTo: "打开 GitHub Copilot 的模型选择器，将 Gemini 2.5 Pro 改为 Gemini 3.1 Pro（Preview），将 Gemini 3 Flash 改为 Gemini 3.6 Flash；组织账号可能需要管理员先启用模型策略。",
            free: "是否可用取决于你的 GitHub Copilot 套餐、组织策略和模型权限；官方公告未新增免费额度。",
            category: "Copilot 提醒",
            summary: "停用范围覆盖 Copilot Chat、行内编辑、Ask、Agent 模式和代码补全。",
            source: {
              name: "GitHub 官方更新日志",
              published: "2026-07-31",
              url: "https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated"
            }
          }
        ],
        deals: []
      },
      english: {
        intro: "今天精选 3 篇免费可读文章，覆盖环境、教育数字化和健康行为，适合英语二阅读训练。",
        articles: [
          {
            title: "Water cuts loom as US unveils long-awaited response to Colorado River crisis",
            source: "The Guardian",
            published: "2026-07-31",
            url: "https://www.theguardian.com/us-news/2026/jul/31/colorado-river-water-cuts",
            readingTime: "6",
            summary: "美国政府公布科罗拉多河管理方案，加州、亚利桑那州和内华达州可能面临约 40% 的供水削减，但方案能否形成长期解决办法仍有争议。",
            reason: "典型的环境政策类说明文，包含数字信息、因果关系、让步与专家评价，适合训练英语二常见的细节题和作者态度题。",
            vocabulary: [
              { word: "loom", translation: "逼近；隐约出现" },
              { word: "harsh", translation: "严厉的；严峻的" },
              { word: "jurisdiction", translation: "管辖权" },
              { word: "overdrawn", translation: "被过度取用的" },
              { word: "forge", translation: "努力达成" }
            ],
            sentence: {
              original: "The 10-year plan makes space for changing conditions, with specifics decided in two-year increments based upon supply in the system.",
              analysis: "主干是 The plan makes space；with 引出伴随结构，decided 为过去分词修饰 specifics，based upon supply 说明决定依据。",
              translation: "这项十年计划为情况变化留出了空间，具体措施将根据水系供应情况，每两年决定一次。"
            }
          },
          {
            title: "Calls grow ‘to flunk’ Portugal’s education minister amid exam marking fiasco",
            source: "The Guardian",
            published: "2026-07-31",
            url: "https://www.theguardian.com/world/2026/jul/31/portugal-education-minister-exam-marking-fernando-alexandre",
            readingTime: "7",
            summary: "葡萄牙全国考试全面数字化阅卷后出现混乱，引发学生、家长和教师抗议，并促使社会讨论技术改革、公共责任与考试公平。",
            reason: "教育改革主题贴近考研英语，文章同时呈现政府理由和反对者观点，有利于训练立场辨析、指代关系与新闻标题理解。",
            vocabulary: [
              { word: "fiasco", translation: "彻底失败；惨败" },
              { word: "resign", translation: "辞职" },
              { word: "unprecedented", translation: "前所未有的" },
              { word: "rigorous", translation: "严谨的；严格的" },
              { word: "annulment", translation: "撤销；废止" }
            ],
            sentence: {
              original: "Fernando Alexandre is accused of failing to take responsibility for what critics say is an unprecedented and chaotic school exam season.",
              analysis: "is accused of 后接动名词；what 引导宾语从句，同时在从句中作 say 的宾语；critics say 是插入性的观点来源。",
              translation: "费尔南多·亚历山大被指未能为批评者所称的前所未有且混乱的学校考试季承担责任。"
            }
          },
          {
            title: "Excessive time spent online linked to stress and worse mood – study",
            source: "The Guardian",
            published: "2026-07-29",
            url: "https://www.theguardian.com/technology/2026/jul/29/excessive-time-spent-online-linked-to-stress-and-worse-mood-study",
            readingTime: "5",
            summary: "一项针对德国成年人的研究发现，问题性网络使用与更高压力、更差情绪及忽视其他活动相关；即时上网冲动可能比压力本身更能预测持续使用。",
            reason: "健康与网络行为是高频社会议题，文章结构清晰，区分相关性、定义、研究方法和结论，适合训练实验类文章阅读。",
            vocabulary: [
              { word: "pathological", translation: "病态的" },
              { word: "impairment", translation: "损害；功能障碍" },
              { word: "temptation", translation: "诱惑；冲动" },
              { word: "reinforcing", translation: "强化的" },
              { word: "neglect", translation: "忽视" }
            ],
            sentence: {
              original: "Participants with more severe problematic internet usage were associated with worse mood, more stress, longer internet use times and greater neglect of other areas of life.",
              analysis: "with 介词短语后置修饰 Participants；were associated with 表示相关关系，后面四个并列名词短语构成研究结果。",
              translation: "问题性网络使用程度更严重的参与者，往往伴随更差的情绪、更大压力、更长的上网时间，以及对生活其他方面更严重的忽视。"
            }
          }
        ]
      }
    }
  ]
};
