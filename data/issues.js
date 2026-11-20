window.BRIEFING_DATA = {
  "updatedAt": "2026-11-20T11:55:07+08:00",
  "issues": [
    {
      "date": "2026-11-20",
      "status": "ready",
      "ai": {
        "intro": "今日关注 Gemini 迁移聊天记录、Mac 后台执行任务及 Genie 4 创作世界等更新，并复核可长期或免费使用的 AI 学习资源。",
        "updates": [
          {
            "event": "Gemini 可迁移其他 AI 应用的偏好与聊天记录",
            "summary": "Google 于 2026-11-19 推出 Gemini 导入流程，可通过提示词把原 AI 工具的偏好与摘要带入 Gemini，并上传原供应商导出的聊天记录 ZIP，减少换平台后的上下文丢失。",
            "howTo": "先在 Gemini 导入设置复制官方提示词，再粘贴到原 AI 工具生成偏好摘要；随后从原供应商导出聊天记录并在 Gemini 设置上传 ZIP。",
            "impact": "学生更换助手时可保留考试计划、项目约定或常用写作偏好，不必反复粘贴背景；上传前应删除不必要的敏感记录并核对摘要。",
            "free": "官方称可在 Gemini App 使用，但未说明账户级免费资格、地区、导入次数、ZIP 大小或聊天记录保留期限。",
            "category": "AI 助手 / 数据迁移",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/switch-ai-assistants-transfer-history/"
            }
          },
          {
            "event": "Gemini App 可在 Mac 后台操作桌面与网站",
            "summary": "Google 于 2026-11-19 为美国英语版本的 Gemini App Mac 功能推出 computer use：可在隔离窗口跨本地文件、桌面应用和网页执行表单填写、数据整理和演示文稿等多步骤任务。",
            "howTo": "在符合要求的 Apple Silicon Mac 上下载 gemini.google/mac，然后描述跨应用流程；在实时预览中查看步骤，并为每项关键操作批准或暂停。",
            "impact": "学生可批量整理 PDF 地址、生成课程汇报或按文件清单完成重复操作，但仍应逐项核对付款、提交、删除和共享等不可逆动作。",
            "free": "目前在美国以英语推出，需 Apple Silicon Mac、macOS Sequoia 15.0+、18 岁以上个人 Google 账户，并订阅 Google AI Plus、Pro 或 Ultra；官方未说明使用配额或固定到期日。",
            "category": "AI 助手 / 电脑代理",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/"
            }
          },
          {
            "event": "Project Genie 正式开放 Genie 4 并升级创作功能",
            "summary": "Google 于 2026-11-18 将 Genie 4 和 Project Genie agent 推向合格的 Google AI Ultra 用户，可实时改环境、加入原生音频，并发布到社区画廊；Genie 3 同时支持更长会话、全景图片定锚和世界串联。",
            "howTo": "访问 Project Genie；Ultra 用户可直接体验 Genie 4 与画廊，Pro 用户可加入候补。可用自然语言修改天气、角色或场景，并把多个世界串成更长体验。",
            "impact": "学生可快速制作场景原型、可视化历史或地理概念、演示交互叙事；公共画廊作品仍需检查版权、事实和模型生成内容的准确性。",
            "free": "官方面向合格 Google AI Ultra 用户开放，Pro 用户可加入候补；价格、地区、等待时间、生成配额和免费试用期限均未说明。",
            "category": "生成式 AI / 世界建模",
            "source": {
              "name": "Google DeepMind 官方博客",
              "published": "2026-11-18",
              "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google AI Studio：Gemini API 免费层",
            "summary": "Google 官方定价页列出可用免费层的 Gemini 模型、免费输入输出用量及相关速率限制；AI Studio 适合以小规模项目验证提示词和 API 调用。",
            "howTo": "打开 AI Studio，核对目标模型是否标有免费层，创建 API Key 后在官方 playground 或自身代码中测试。",
            "impact": "学生可用小型数据集练习分类、摘要或问答原型，并在付费前比较不同模型；不要把私密材料上传到免费测试环境。",
            "free": "官方提供特定模型的免费层及速率限制；具体免费额度、地区、账户资格、重置周期和到期日官方未统一说明，须按所选模型逐项核对。",
            "category": "免费 API / 模型试用",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "GitHub Copilot Free：长期免费编程助手",
            "summary": "GitHub 官方计划页提供无需信用卡的 Copilot Free，包含每月代码补全及有限的聊天与代理使用。",
            "howTo": "在 GitHub 的 Copilot plans 页面启用 Free，再于受支持编辑器安装并登录 GitHub Copilot。",
            "impact": "可用于 Python、前端课程作业和小型项目的补全与调试；运行测试并审查生成代码，不要将补全额度视为无限。",
            "free": "官方列明每月 2,000 次代码补全、$0 月费且无需信用卡；聊天和代理用量有限。具体聊天配额、地区限制和续费规则官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Google Colab：免费托管 Python 与 Jupyter 运行时",
            "summary": "Google 官方 FAQ 将 Colab 描述为免费托管 Jupyter Notebook 服务，可连接计算资源并运行 Python、数据科学和机器学习工作负载。",
            "howTo": "访问 Colab，新建 notebook 或导入 .ipynb，再按课程或项目运行 Python；需要时从运行时菜单选择可用硬件。",
            "impact": "适合做数据清洗、统计、可视化和小规模模型实验，免于本地环境配置；保存到 GitHub 或 Drive，并准备资源中断时的恢复方案。",
            "free": "官方称可免费使用；资源不保证、限制可能变化，固定 GPU/TPU 配额、地区和账户资格官方未说明。",
            "category": "免费学习 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn：免费数据技能课程",
            "summary": "Kaggle 官方学习目录提供无需付费即可进入的短课程，涵盖 Python、Pandas、SQL、机器学习及数据可视化等主题。",
            "howTo": "进入 Kaggle Learn，选择课程并完成交互式笔记本练习；可在 Kaggle Notebook 中直接运行示例代码。",
            "impact": "适合在短时间补足数据分析与编程基础，并把练习迁移到课程项目或论文的数据处理流程。",
            "free": "官方将目录标为 no-cost courses；账号资格、地区限制、证书费用及课程是否长期免费官方未说明。",
            "category": "免费学习 / 数据与编程",
            "source": {
              "name": "Kaggle 官方学习中心",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "NotebookLM：免费网页版文档与音频学习工作台",
            "summary": "Google 官方 NotebookLM 可让用户上传或链接来源，生成摘要、问答和音频概览，适合整理课程材料和长篇资料。",
            "howTo": "打开 NotebookLM，创建 Notebook，上传 PDF、文档或粘贴来源链接，再提问或生成 Audio Overview。",
            "impact": "学生可让文档交叉对证、快速生成复习提纲或听取资料概览；回答仍需回到原文核实出处和事实。",
            "free": "官方页面提供可直接使用的网页版入口；免费额度、地区、账号资格、源文档数量限制和到期日官方未说明。",
            "category": "免费学习 / 文档研究",
            "source": {
              "name": "Google NotebookLM 官方应用页",
              "published": "官方未说明",
              "url": "https://notebooklm.google.com/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Race to replant five South African baobabs after export blocked",
            "source": "The Guardian",
            "published": "2026-11-19",
            "url": "https://www.theguardian.com/environment/2026/nov/19/baobab-five-trees-south-africa-dug-up-export-blocked-georgia-aoe",
            "readingTime": "约 7 分钟（估算）",
            "topic": "环境 / 生物多样性、野生植物贸易与文化保护",
            "summary": "文章报道五棵南非猴面包树在运往格鲁吉亚前被当局拦截，随后被送往自然保护区抢救。作者先交代这些树有200至300年树龄、重量达19至29吨及已被非法采运，随后说明重新种植需要快速、特殊运输和电围栏保护，并引述专家对存活概率、生态价值和文化意义的判断。报道还对比肯尼亚曾发生的类似出口争议，解释此类交易虽罕见，却可能以观赏植物名义绕过保护；结论是，单棵猴面包树既是生态系统也是文化与历史载体，因此拦截非法出口和成功再植都关系到长期生物与社会成本。",
            "reason": [
              "主题涉及濒危生态、跨国贸易、法律管制和文化遗产，适合环境保护和国际责任类考研英语阅读。",
              "文章采用问题—抢救行动—专家证据—法律和生态意义的清晰结构，便于练习因果与例证关系。",
              "可训练标题判断、数字细节定位、代词指代以及对“rare”“allegedly”等语气词的理解。",
              "本文含 permit、re-establish、biodiversity anchor、sacred 等抽象词汇，适合环境和文化类写作。",
              "写作可借鉴先描述具体事件，再比较跨国案例，最后提升到生态与人文价值的论证方式。"
            ],
            "vocabulary": [
              {
                "word": "replant",
                "phonetic": "/riːˈplɑːnt/",
                "part": "v.",
                "translation": "重新种植；移栽"
              },
              {
                "word": "permission",
                "phonetic": "/pərˈmɪʃən/",
                "part": "n.",
                "translation": "许可；允许"
              },
              {
                "word": "ornamental",
                "phonetic": "/ˌɔːrnəˈmentəl/",
                "part": "adj.",
                "translation": "观赏用的；装饰性的"
              },
              {
                "word": "re-establish",
                "phonetic": "/ˌriːɪˈstæblɪʃ/",
                "part": "v.",
                "translation": "重新建立；重新存活"
              },
              {
                "word": "dormant",
                "phonetic": "/ˈdɔːrmənt/",
                "part": "adj.",
                "translation": "休眠的；静止的"
              },
              {
                "word": "biodiversity",
                "phonetic": "/ˌbaɪoʊdaɪˈvɜːrsəti/",
                "part": "n.",
                "translation": "生物多样性"
              },
              {
                "word": "sacred",
                "phonetic": "/ˈseɪkrɪd/",
                "part": "adj.",
                "translation": "神圣的；受尊崇的"
              },
              {
                "word": "anchor",
                "phonetic": "/ˈæŋkər/",
                "part": "n.",
                "translation": "支柱；核心基础"
              },
              {
                "word": "intercept",
                "phonetic": "/ˌɪntərˈsept/",
                "part": "v.",
                "translation": "拦截；中途阻止"
              },
              {
                "word": "harvesting",
                "phonetic": "/ˈhɑːrvəstɪŋ/",
                "part": "n.",
                "translation": "采收；采伐"
              }
            ],
            "sentences": [
              {
                "original": "The baobabs arrived at a reserve in Timbavati, in north-eastern South Africa, on Wednesday.",
                "analysis": [
                  "句子主干是 The baobabs arrived，arrived 表示树木已经抵达抢救地点。",
                  "介词短语 at a reserve in Timbavati 说明抵达地点，in north-eastern South Africa进一步限定保护区位置。",
                  "on Wednesday 作为时间状语交代抵达日期，与报道中的抢救行动形成时间线。",
                  "逗号隔开的地理插入语补充信息，但不改变句子核心主谓关系。",
                  "该句可作为新闻写作中“介词短语逐层限定地点”的范例。"
                ],
                "translation": "这些猴面包树于周三抵达南非东北部廷巴瓦蒂的一处保护区。"
              },
              {
                "original": "A baobab isn’t just part of an ecosystem, it is an ecosystem in itself.",
                "analysis": [
                  "句子主干使用 it is an ecosystem in itself，以单个树木为核心作强调陈述。",
                  "前半句通过否定 just part ... 引出反对和纠正；后半句用整体判断提升强度。",
                  "逗号连接两个独立分句，形成对比式强调，逻辑上由“部分”推进到“整体”。",
                  "in itself 表示就其自身而言，强调不可简化为环境中的普通组成部分。",
                  "可借鉴这一结构写成“X isn’t just…; it is…”以加强论点。"
                ],
                "translation": "猴面包树不仅是生态系统的一部分，单棵树本身就是一个生态系统。"
              },
              {
                "original": "The trees are thought to be between 200 and 300 years old.",
                "analysis": [
                  "主干是 The trees are thought to be old，采用系表结构与被动语态。",
                  "are thought 交代这是专家或报道方的估计，而非绝对事实。",
                  "不定式 to be between 200 and 300 years old 补充“被认为”的具体内容和年龄区间。",
                  "介词短语 between... 既限制数值，又使报道显得更克制。",
                  "这一句可用于表达科学估计和不确定信息。"
                ],
                "translation": "据信这些树已有200至300年历史。"
              }
            ]
          },
          {
            "title": "World Toilet Day is a funny idea with a serious goal: A world awash in toilets",
            "source": "NPR",
            "published": "2026-11-19",
            "url": "https://www.npr.org/2026/11/19/g-s1-154159/world-toilet-day-gender-equality-menstruation",
            "readingTime": "约 8 分钟（估算）",
            "topic": "健康与社会 / 卫生、性别平等与公共政策",
            "summary": "文章以“厕所日兼具幽默与严肃意义”为主线，解释世界厕所日从1998年的倡议发展到2013年成为联合国正式纪念日。作者引用卫生专家指出，安全厕所不仅关乎隐私和尊严，也能阻断霍乱、脊髓灰质炎等经粪便传播疾病；文章进一步用月经卫生说明教育和职场中的性别差异，并强调缺少安全厕所会让女性和女孩面临被骚扰或暴力的风险。报道援引联合国的人权表述和自2015年以来12亿人口获得安全管理卫生设施的数据，最后主张政府支持社区自下而上提出方案，而不能只依赖高层单向设计。",
            "reason": [
              "主题把公共卫生、性别平等等与可持续发展目标相连，适合社会政策和健康类考研英语写作。",
              "文章先用幽默故事引入，再用专家观点和数字证据展开，最后回到社区治理结论，结构完整。",
              "可练习区分主旨、例证和因果关系，并识别 World Toilet Day、sanitation、gender equality 等命题词。",
              "taboo、conveyance、harassment、human right 等词汇适合讨论公共设施和社会公平。",
              "写作可借鉴“幽默表象—严肃现实—制度责任—社区解决方案”的递进论证。"
            ],
            "vocabulary": [
              {
                "word": "sanitary",
                "phonetic": "/ˈsænəteri/",
                "part": "adj.",
                "translation": "卫生的；清洁的"
              },
              {
                "word": "taboo",
                "phonetic": "/təˈbuː/",
                "part": "n./adj.",
                "translation": "禁忌；避讳的"
              },
              {
                "word": "conveyance",
                "phonetic": "/kənˈveɪəns/",
                "part": "n.",
                "translation": "运送；输送"
              },
              {
                "word": "sewage",
                "phonetic": "/ˈsuːɪdʒ/",
                "part": "n.",
                "translation": "污水；下水道污物"
              },
              {
                "word": "menstrual",
                "phonetic": "/ˈmenstruəl/",
                "part": "adj.",
                "translation": "月经的"
              },
              {
                "word": "harassment",
                "phonetic": "/həˈræsmənt/",
                "part": "n.",
                "translation": "骚扰；折磨"
              },
              {
                "word": "sanitation",
                "phonetic": "/ˌsænɪˈteɪʃən/",
                "part": "n.",
                "translation": "卫生设施；环境卫生"
              },
              {
                "word": "contaminant",
                "phonetic": "/kənˈtæmɪnənt/",
                "part": "n.",
                "translation": "污染物"
              },
              {
                "word": "flop",
                "phonetic": "/flɑːp/",
                "part": "n.",
                "translation": "失败；失策"
              },
              {
                "word": "plentiful",
                "phonetic": "/ˈplentɪfəl/",
                "part": "adj.",
                "translation": "大量的；充足的"
              }
            ],
            "sentences": [
              {
                "original": "Even though everyone suffers when they can’t find a toilet, the menstrual cycle creates additional complications.",
                "analysis": [
                  "句子由 Even though 引导让步状语从句，承认所有人都会因厕所不足而受影响。",
                  "主句主干是 the menstrual cycle creates complications，转向月经周期带来的额外困难。",
                  "everyone 和 additional complications 形成普遍性与特殊性的对照。",
                  "they 指代所有需要厕所的人，指代关系清楚且重复以保持句子自然。",
                  "该句可借鉴“Even though...，X creates additional...”表达一般问题之外的特殊性。"
                ],
                "translation": "即便找不到厕所会让所有人受苦，月经周期仍会带来额外的复杂问题。"
              },
              {
                "original": "If schools or offices lack a safe and sanitary place to attend to period needs and to dispose of period products, girls and women may opt to stay home.",
                "analysis": [
                  "句子以 If 引导条件状语从句，前置学校和办公室缺乏安全卫生设施的条件。",
                  "并列不定式 to attend to period needs 和 to dispose of period products 分别说明隐私需求和废弃物处理。",
                  "主句主干是 girls and women may opt to stay home，may 表示可能性而非必然结果。",
                  "句子用“设施不足—行为选择”建立因果关系，体现教育或就业机会被影响。",
                  "可借鉴 If + 缺口，主语 may opt to ... 结构写政策对行为的潜在影响。"
                ],
                "translation": "如果学校或办公室没有安全卫生的地方供人处理经期需求和弃置卫生用品，女孩和妇女可能选择待在家中。"
              },
              {
                "original": "Governments should be a force for change but that shouldn’t be top down. It should also be … bottom up.",
                "analysis": [
                  "前句主干是 governments should be a force for change，明确政府应推动变革。",
                  "but 引出转折，否定 only top down 的单向治理方式，强调执行方式同样重要。",
                  "后一句以 It should also be 对“bottom up”作补充，形成政策过程中的多主体主张。",
                  "省略号和口语化省略表示演讲者刻意替代读者熟悉的“bottom up”，增强修辞效果。",
                  "可借鉴 should be ..., but not top down; should be bottom up 的对比结构。"
                ],
                "translation": "政府应成为变革的推动力量，但这种推动不应是自上而下的，也应由下而上。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-19",
      "status": "ready",
      "ai": {
        "intro": "今日关注 Gemini 新模型与低内存设备支持、GitHub Copilot 连接器更新，并复核可实际使用的免费模型与学习资源。",
        "updates": [
          {
            "event": "Gemini 4 Neon 面向复杂任务推出",
            "summary": "Google 于 2026-11-18 发布 Gemini 4 Neon，面向长流程编程、知识工作和科学任务；支持最长 100 万 token 上下文，并在 Gemini API、Gemini 应用和 Google Antigravity 等渠道逐步开放。",
            "howTo": "在 Google AI Studio 选择 Gemini 4 Neon 使用 API；Gemini 应用和 Antigravity 需使用 Google AI Pro 或 Ultra。GitHub Copilot Pro+、Max、Business、Enterprise 用户也可在模型选择器中查找 Neon。",
            "impact": "学生可让它梳理长篇资料、分析表格或协助跨文件调试；先明确任务、核对引用和代码，再按 API 计费或确认所用订阅权限。",
            "free": "Google 列出的 API 价格为每百万输入 token 3 美元、缓存输入 0.15 美元、输出 15 美元；Gemini 应用和 Antigravity 需要 Pro/Ultra，Copilot 需 Pro+、Max、Business 或 Enterprise，Copilot 按供应商标价用量计费。免费资格、地区和固定配额未由发布公告说明；模型仍在渐进式推出。",
            "category": "生成式 AI / 新模型",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-18",
              "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
            }
          },
          {
            "event": "Gemini 应用扩展至低内存 Android Go 设备",
            "summary": "Google 于 2026-11-18 宣布，经过重新架构的 Gemini 应用开始支持符合条件的 Android Go 设备；可使用 Gemini Live 对话、相机识别笔记或表格，以及 Nano Banana 图像生成功能。",
            "howTo": "在符合条件的 Android Go 手机上从 Google Play 下载 Gemini；也可长按电源键启动，或在合作伙伴的新设备上使用预装版本。",
            "impact": "使用入门级手机的学生可直接口述练习面试、识别课堂笔记或制作简单宣传图，不必先换用高内存设备；重要信息仍应自行核对。",
            "free": "官方确认面向符合条件的 Android Go 设备推出，但未说明价格、账号资格、具体地区、免费功能额度或上线完成时间。",
            "category": "AI 助手 / 移动端",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-18",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/"
            }
          },
          {
            "event": "GitHub Copilot 公测新增八种服务连接器",
            "summary": "GitHub 于 2026-11-18 为 Copilot 公测新增 Box、Buildkite、Calendly、ClickUp、Mixpanel、Supabase、Webflow 和 Wix 连接器；连接后可在 Copilot 中调用这些服务的信息或执行相应工作。",
            "howTo": "在 Copilot App 的 Customize、Copilot CLI 的 /mcp > Connectors、VS Code Agents > Customizations，或 github.com 的 Copilot customization 页面选择 Connect；组织版可能需要管理员启用预览策略及对应白名单。",
            "impact": "学生团队可让 Copilot 查询 Supabase 项目结构后起草迁移，或检查 Buildkite 构建失败原因，减少在课程项目工具间来回切换；执行前应确认连接权限和操作内容。",
            "free": "连接器公测适用于所有 Copilot 计划；Business/Enterprise 需管理员允许 Editor preview features，个别服务还需服务端授权。官方未说明地区或调用配额。",
            "category": "AI 助手 / 工具连接",
            "source": {
              "name": "GitHub 官方变更日志",
              "published": "2026-11-18",
              "url": "https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot/"
            }
          }
        ],
        "deals": [
          {
            "event": "Google AI Studio：Gemini API 免费层",
            "summary": "Google 官方定价页提供 Gemini API 免费层，含部分模型的免费输入与输出 token 以及 AI Studio 使用权；模型范围和速率有限，不能据此推断所有模型均免费。",
            "howTo": "打开 AI Studio，选择支持免费层的模型并创建 API key；用小规模提示词测试后，再到官方定价页核对该模型的免费额度和速率。",
            "impact": "适合学生练习调用大模型、构建课程原型或比较提示词，不必一开始购买 API；免费层内容可能被用于改进 Google 产品，勿提交敏感资料。",
            "free": "官方列明特定模型有免费输入与输出 token，但没有在该总览中列出具体配额、地区或账号限制；免费层内容可用于改进产品。",
            "category": "免费 API / 模型试用",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Gemini Tasks：多地区免费试用代理任务",
            "summary": "Google 于 2026-11-17 表示，Gemini Tasks 正向美国、日本、韩国、加拿大、澳大利亚和印度的用户免费推出，可协助处理日常网页任务、日程和应用操作；部分高级功能先在美国推出。",
            "howTo": "打开 Gemini 应用，将首页模式从 Chat 切换到 Task，再说明要处理的任务；代理可能在购买等关键操作前暂停并请求确认。",
            "impact": "学生可让它整理课程邮件中的日期、拟定日程或查找出行选项，把时间留给复习；提交、付款等关键步骤应亲自检查。",
            "free": "官方称该更新在美国、日本、韩国、加拿大、澳大利亚和印度免费推出，采用逐步 rollout，未给出截止日、个人额度或所有功能的地区范围；部分高级功能从美国开始。",
            "category": "免费 AI 助手 / 任务代理",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-17",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/"
            }
          },
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页列出每月 2,000 次代码补全、社区支持和 Copilot Fusion Standard，价格为每月 0 美元且无需信用卡；聊天与代理用量有限。",
            "howTo": "在 GitHub Copilot 计划页启用 Free，再于 VS Code 或其他受支持编辑器安装 Copilot；查看账户计划和用量后，用于代码补全或小型练习。",
            "impact": "适合初学者练习 Python、调试课程作业或完成小型项目；将有限补全额度留给重复性编码，并自行运行测试。",
            "free": "每月 0 美元、2,000 次补全且无需信用卡；聊天及代理仅限量使用，精确额度和地区限制官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Google Colab：免费云端 Jupyter 与计算资源",
            "summary": "Google Colab 官方 FAQ 确认其托管 Jupyter Notebook 服务可免费使用，并提供包括 GPU、TPU 在内的计算资源，适用于机器学习、数据科学和教育。",
            "howTo": "打开 Colab，新建 notebook 或从 GitHub/Google Drive 加载 .ipynb；在笔记本中运行 Python 作业，并按需选择运行时硬件。",
            "impact": "可用于数据分析课程、Python 实验或小规模机器学习练习，省去本地环境配置；应保存代码并准备资源中断后的替代方案。",
            "free": "服务免费，但资源不保证且不无限，使用限制会波动；官方未给出固定 GPU/TPU 配额、地区或账号资格说明。",
            "category": "免费学习 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn：免费数据技能短课程",
            "summary": "Kaggle Learn 官方课程目录标注为 no-cost courses，提供 Python、数据可视化、Pandas 等实用数据技能课程。",
            "howTo": "访问 Kaggle Learn，选择 Python、Pandas 或数据可视化课程，按课程页面的交互练习逐节完成。",
            "impact": "适合用短练习补足数据处理与编程基础，也可将所学用于课程数据项目；课程目录可先免费浏览和学习。",
            "free": "官方页面称课程为免费课程；账号资格、地区限制、课程是否永久免费及证书费用官方未说明。",
            "category": "免费学习 / 数据与编程",
            "source": {
              "name": "Kaggle 官方学习中心",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "European Commission accused of sugarcoating figures to release funds to Egypt",
            "source": "The Guardian",
            "published": "2026-11-18",
            "url": "https://www.theguardian.com/world/2026/nov/18/european-commission-accused-sugarcoating-figures-egypt-loans",
            "readingTime": "约 6 分钟（估算）",
            "topic": "经济与社会 / 对外援助、福利条件与公共问责",
            "summary": "文章从欧盟委员会被指淡化埃及福利数据切入，说明2024年承诺的74亿欧元伙伴协议中，50亿欧元软贷款附有改革与福利条件。报道依据泄露的欧盟内部文件、埃及政府一度公开后删除的数据及专家测算指出，2024至2026年福利项目受益家庭净减少85,734户，尽管欧盟称有关条件已“基本完成”或“完成”，仍放出合计25亿欧元贷款。文章随后解释Takaful现金补助与Karama福利的对象，呈现新增名单数量与净受益家庭变化之间的口径差异，并引述欧洲议员、人权团体及欧盟委员会的不同回应；结尾指出剩余15亿欧元仍取决于24项经济条件、IMF项目及民主法治承诺，凸显战略合作与问责标准之间的张力。",
            "reason": [
              "主题把对外贷款、社会福利和公共资金问责相连，适合练习经济发展与社会公平类论述。",
              "文章先提出调查指控，再交代协议背景、援助数据和福利项目，随后并列批评者与欧盟回应，最后回到尚待满足的条件。",
              "可练习识别数字证据、来源归属和转折关系，并区分受益家庭新增人数与净增人数。",
              "landmark pact、instalment、beneficiary、conditionality 等表达适合经济与公共政策类阅读。",
              "写作可借鉴“政策目标—执行数据—利益相关方回应—问责结论”的论证框架。"
            ],
            "vocabulary": [
              {
                "word": "sugarcoating",
                "phonetic": "/ˈʃʊɡərˌkoʊtɪŋ/",
                "part": "n.",
                "translation": "粉饰；淡化问题"
              },
              {
                "word": "landmark",
                "phonetic": "/ˈlændmɑːrk/",
                "part": "adj.",
                "translation": "具有里程碑意义的"
              },
              {
                "word": "bolster",
                "phonetic": "/ˈboʊlstər/",
                "part": "v.",
                "translation": "支持；增强"
              },
              {
                "word": "instalment",
                "phonetic": "/ɪnˈstɔːlmənt/",
                "part": "n.",
                "translation": "分期款；一期款项"
              },
              {
                "word": "beneficiary",
                "phonetic": "/ˌbenɪˈfɪʃəri/",
                "part": "n.",
                "translation": "受益人"
              },
              {
                "word": "recertification",
                "phonetic": "/ˌriːsɜːrtɪfɪˈkeɪʃən/",
                "part": "n.",
                "translation": "重新认证"
              },
              {
                "word": "conditionality",
                "phonetic": "/kənˌdɪʃəˈnæləti/",
                "part": "n.",
                "translation": "附带条件；条件性"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "仔细审查；监督"
              },
              {
                "word": "ineligible",
                "phonetic": "/ɪnˈelɪdʒəbəl/",
                "part": "adj.",
                "translation": "不符合资格的"
              },
              {
                "word": "clarification",
                "phonetic": "/ˌklærɪfɪˈkeɪʃən/",
                "part": "n.",
                "translation": "澄清；说明"
              }
            ],
            "sentences": [
              {
                "original": "The spotlight is on €5bn in EU “soft” loans to Egypt.",
                "analysis": [
                  "主干是 The spotlight is on...，以“聚光灯”隐喻把读者注意力引向特定议题。",
                  "€5bn in EU “soft” loans 是介词 on 的宾语，说明被关注的是欧盟对埃及的50亿欧元优惠贷款。",
                  "to Egypt 作后置修饰，限定贷款的接受方；引号中的 soft 提醒读者这是政策语境中的术语。",
                  "该句承接前文的调查结果，将宏观协议聚焦到文章接下来逐项审视的贷款条件。",
                  "写作可用 “The spotlight is on...” 引出某项政策的关键争议。"
                ],
                "translation": "焦点集中在欧盟向埃及提供的50亿欧元“优惠”贷款上。"
              },
              {
                "original": "Some beneficiaries were added to the list but a larger number were removed because they were deemed ineligible.",
                "analysis": [
                  "but 连接两个并列分句，形成“有人新增、更多人被移除”的对照。",
                  "前一分句 Some beneficiaries were added 使用一般过去时被动语态，突出受益人名单的变化。",
                  "后一分句以 a larger number 作主语并使用 were removed，比较数量而非具体执行者。",
                  "because 引导原因状语从句；they 指被移除的受益人，were deemed ineligible 再次使用被动语态表达资格判定。",
                  "此句展示如何用对照和原因结构解释“新增数”不等于“净增加”。"
                ],
                "translation": "有些受益人被加入名单，但更多人被移除，因为他们被认定不符合资格。"
              },
              {
                "original": "The EU announced the release of the €1.5bn payment in July 2026.",
                "analysis": [
                  "句子主干为 The EU announced the release，主语和谓语直接交代发布消息的一方及其行动。",
                  "the release of the €1.5bn payment 是 announce 的名词性宾语，of 短语说明款项金额。",
                  "in July 2026 是时间状语，限定宣布放款的时间。",
                  "release 在此表示资金拨付，而非一般意义上的“释放”；结合上下文可知这是第二期贷款。",
                  "新闻写作常用 “announce the release of...” 简洁呈现资金或政策决定。"
                ],
                "translation": "欧盟于2026年7月宣布拨付这笔15亿欧元款项。"
              }
            ]
          },
          {
            "title": "Van Gogh painting sells for record $190.4m after row over its Nazi history",
            "source": "BBC",
            "published": "2026-11-19",
            "url": "https://www.bbc.co.uk/news/articles/c5dj1dkwzvzwo",
            "readingTime": "约 3 分钟（估算）",
            "topic": "文化 / 艺术品交易、历史来源与返还争议",
            "summary": "文章报道梵高1890年作品《花开栗树》在纽约以1.904亿美元成交，刷新画家此前1.172亿美元的拍卖纪录。拍卖前，作品曾被指在纳粹崛起时期因压力而出售；布莱基耶-阿列塔家族与原德国所有者费舍尔家族的继承人最终在拍卖前达成协议。报道梳理作品自1909年进入费舍尔家族、经阿姆斯特丹和巴黎易手、到1975年由现卖家家族购入的来源链，同时指出买家尚未确定。全文以成交价呈现艺术市场事件，再追溯争议和所有权记录，强调历史背景如何影响一件名画的交易。",
            "reason": [
              "艺术品流转与纳粹时期财产争议连接文化、历史记忆和产权问题，是适合拓展文化类话题的材料。",
              "文章先报成交价及纪录，再回溯拍卖前和解、争议来源，最后按时间顺序说明作品流转。",
              "可练习理解时间线、被动语态和间接疑问句，并区分已确认事实与仍未确定的买家身份。",
              "provenance、duress、heir、dispute 等词汇可用于艺术品来源、历史产权及法律争议写作。",
              "写作可借鉴以最新事件引入，再用历史证据解释背景，最后指出尚未解决信息的结构。"
            ],
            "vocabulary": [
              {
                "word": "record",
                "phonetic": "/ˈrekərd/",
                "part": "n.",
                "translation": "纪录；最高纪录"
              },
              {
                "word": "row",
                "phonetic": "/raʊ/",
                "part": "n.",
                "translation": "争论；纠纷"
              },
              {
                "word": "duress",
                "phonetic": "/duˈres/",
                "part": "n.",
                "translation": "胁迫；强迫"
              },
              {
                "word": "eleventh-hour",
                "phonetic": "/ɪˌlevənθ ˈaʊər/",
                "part": "adj.",
                "translation": "最后一刻的"
              },
              {
                "word": "provenance",
                "phonetic": "/ˈprɑːvənəns/",
                "part": "n.",
                "translation": "来源；出处（尤指艺术品）"
              },
              {
                "word": "heir",
                "phonetic": "/er/",
                "part": "n.",
                "translation": "继承人"
              },
              {
                "word": "dispute",
                "phonetic": "/dɪˈspjuːt/",
                "part": "n.",
                "translation": "争议；纠纷"
              },
              {
                "word": "acquire",
                "phonetic": "/əˈkwaɪər/",
                "part": "v.",
                "translation": "购得；获得"
              },
              {
                "word": "resolve",
                "phonetic": "/rɪˈzɑːlv/",
                "part": "v.",
                "translation": "解决；化解"
              },
              {
                "word": "private hands",
                "phonetic": "/ˈpraɪvət hændz/",
                "part": "phr.",
                "translation": "私人所有；私人收藏"
              }
            ],
            "sentences": [
              {
                "original": "It was not immediately clear who purchased the painting.",
                "analysis": [
                  "主句使用形式主语 It，真正的信息焦点是后面的 who purchased the painting。",
                  "was not clear 是系表结构，not immediately 修饰 clear，表示当时尚不能确定。",
                  "who 引导间接疑问句并在从句中作 purchased 的主语，因此从句采用陈述语序。",
                  "the painting 是 purchased 的宾语，回指前文所述的梵高作品。",
                  "该句体现新闻对未知信息的谨慎表达，可与已确认成交价形成对照。"
                ],
                "translation": "当时还不清楚是谁买下了这幅画。"
              },
              {
                "original": "The BBC has contacted Sotheby’s for comment.",
                "analysis": [
                  "主干为 The BBC has contacted Sotheby’s，主语、现在完成时谓语和宾语完整。",
                  "现在完成时表示媒体已采取联系行动，其结果与当前报道相关。",
                  "for comment 是目的状语，说明联系拍卖行是为获得回应。",
                  "专有名词 Sotheby’s 指文中拍卖机构，所有格形式属于机构名称的一部分。",
                  "这是新闻报道交代求证过程的常见表达，有助于区分报道事实和未获回应的信息。"
                ],
                "translation": "英国广播公司已联系苏富比征求回应。"
              },
              {
                "original": "It is considered one of the most important works of art from that period to remain in private hands, according to Sotheby’s.",
                "analysis": [
                  "主干是 It is considered one of the most important works of art，使用被动语态突出作品受到的评价。",
                  "one of the most important works 是 consider 的补足语，最高级结构表示其重要性。",
                  "from that period 后置修饰 works of art，限定作品所属的艺术时期。",
                  "to remain in private hands 是不定式短语，说明这类重要作品中仍由私人持有的作品。",
                  "according to Sotheby’s 标明判断来源，避免把拍卖行的说法写成无来源的客观结论。"
                ],
                "translation": "据苏富比称，它被认为是那个时期仍由私人持有的最重要艺术品之一。"
              }
            ]
          }
        ]
      }
    },
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
              {
                "word": "grueling",
                "phonetic": "/ˈɡruːəlɪŋ/",
                "part": "adj.",
                "translation": "艰苦的；费力的"
              },
              {
                "word": "integrity",
                "phonetic": "/ɪnˈteɡrəti/",
                "part": "n.",
                "translation": "完整性；诚信"
              },
              {
                "word": "validity",
                "phonetic": "/vəˈlɪdəti/",
                "part": "n.",
                "translation": "有效性；正当性"
              },
              {
                "word": "concealed",
                "phonetic": "/kənˈsiːld/",
                "part": "adj.",
                "translation": "隐蔽的；隐藏的"
              },
              {
                "word": "deploy",
                "phonetic": "/dɪˈplɔːɪ/",
                "part": "v.",
                "translation": "部署；调配"
              },
              {
                "word": "invigilator",
                "phonetic": "/ɪnˈvɪdʒɪleɪtər/",
                "part": "n.",
                "translation": "监考人员"
              },
              {
                "word": "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "仔细检查；审视"
              },
              {
                "word": "belated",
                "phonetic": "/bɪˈleɪtɪd/",
                "part": "adj.",
                "translation": "来得太晚的；延误的"
              },
              {
                "word": "legitimate",
                "phonetic": "/lɪˈdʒɪtɪmət/",
                "part": "adj.",
                "translation": "合法的；正当的"
              },
              {
                "word": "inconvenience",
                "phonetic": "/ˌɪnkənˈviːniəns/",
                "part": "n.",
                "translation": "不便；麻烦"
              }
            ],
            "sentences": [
              {
                "original": "The integrity of South Korea’s career-defining university entrance exam has been thrown into doubt.",
                "analysis": [
                  "句子主干是 The integrity has been thrown into doubt，采用被动语态强调考试诚信受到质疑。",
                  "of 介词短语说明 integrity 的所属对象，即韩国职业生涯导向型大学入学考试。",
                  "career-defining 是复合形容词，修饰 university entrance exam，说明考试后果重大。",
                  "has been thrown into doubt 可改写为 has become doubtful，是概括性学术表达。",
                  "该句为报道主题句，为后文个案和防护措施提供论证框架。"
                ],
                "translation": "韩国这种决定职业前途的大学入学考试，其公信力受到了质疑。"
              },
              {
                "original": "But in recent days, exam organisers have faced a renewed threat to the validity of the entire exercise.",
                "analysis": [
                  "But 表示转折，说明前文宏观防护措施之后出现新的问题。",
                  "主语是 exam organisers，谓语为 have faced，a renewed threat 是直接宾语。",
                  "to the validity of the entire exercise 是介词短语，说明威胁针对整个考试制度的有效性。",
                  "renewed 表示威胁在已有防护基础上再次增强，提示问题具有连续性。",
                  "But 的转折可用于摘要中连接制度措施和突发事件。"
                ],
                "translation": "但近几日，考试组织者又面临对整个考试活动有效性的新的威胁。"
              },
              {
                "original": "Newer variants could not be dealt with perfectly, the education minister said.",
                "analysis": [
                  "主句核心是 newer variants could not be dealt with，表达无法完美处理新型智能眼镜。",
                  "could not 表达能力或现实限制；perfectly 是程度副词，强调防控并非绝对有效。",
                  "变体 variants 指前文列举的智能眼镜型号，由前文语境可知。",
                  "the education minister said 是倒装式引述，归属在后有助于区分官方说法。",
                  "该句体现谨慎措辞，可用于让步式论证：承认措施而保留其局限。"
                ],
                "translation": "教育部长表示，新型智能眼镜无法被完美识别和处理。"
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
            "reason": [
              "文章将公共卫生指标、疫苗接种和政治沟通结合，适合讨论科学决策、公众信任与媒体误信息。",
              "结构由官方判定切入，随后用案例、专家和反驳组织论证，并以恢复消除状态所需措施收束。",
              "适合练习数字证据、权威引述、因果关系和让步结构；可区分作者观点与被引用专家观点。",
              "elimination、endemic、outbreak、misinformation 等词汇适用于健康与社会议题写作。",
              "写作可借鉴先给出官方结论，再列证据、原因、反驳和可行对策的段落安排。"
            ],
            "vocabulary": [
              {
                "word": "elimination",
                "phonetic": "/ɪˌlɪməˈneɪʃən/",
                "part": "n.",
                "translation": "消除；根除"
              },
              {
                "word": "endemic",
                "phonetic": "/enˈdemɪk/",
                "part": "adj.",
                "translation": "地方性流行的"
              },
              {
                "word": "outbreak",
                "phonetic": "/ˈaʊtbreɪk/",
                "part": "n.",
                "translation": "（疾病）爆发"
              },
              {
                "word": "surveillance",
                "phonetic": "/sərˈveɪləns/",
                "part": "n.",
                "translation": "监测；观察"
              },
              {
                "word": "contagious",
                "phonetic": "/kənˈteɪdʒəs/",
                "part": "adj.",
                "translation": "有传染性的"
              },
              {
                "word": "misinformation",
                "phonetic": "/ˌmɪsɪnfərˈmeɪʃən/",
                "part": "n.",
                "translation": "误传；错误信息"
              },
              {
                "word": "preventable",
                "phonetic": "/prɪˈventəbəl/",
                "part": "adj.",
                "translation": "可预防的"
              },
              {
                "word": "pandemic-era",
                "phonetic": "/pænˈdemɪk ˈɪrə/",
                "part": "adj.",
                "translation": "疫情时期的"
              },
              {
                "word": "vaccination",
                "phonetic": "/ˌvæksɪˈneɪʃən/",
                "part": "n.",
                "translation": "疫苗接种"
              },
              {
                "word": "re-establish",
                "phonetic": "/ˌriːɪˈstæblɪʃ/",
                "part": "v.",
                "translation": "重新建立；恢复"
              }
            ],
            "sentences": [
              {
                "original": "The US has lost its measles elimination status, global health authorities announced.",
                "analysis": [
                  "主句是 global health authorities announced，采用倒装式主谓结构强调官方公告。",
                  "its measles elimination status 是名词所有结构，说明美国此前的麻疹消除认证已被撤销。",
                  "lost 是过去时动态动词，体现认证状态的变化而非疾病本身突然出现。",
                  "the US 是唯一主语；全球卫生机构是 announcement 的来源。",
                  "该句适合作为新闻摘要的事实句，可配合数据和来源进行改写。"
                ],
                "translation": "全球卫生机构宣布，美国已失去麻疹消除状态。"
              },
              {
                "original": "Measles is resurging globally amid persistent gaps in vaccination coverage.",
                "analysis": [
                  "主干为 Measles is resurging，进行时态表示麻疹疫情正在复苏。",
                  "globally 是范围副词，说明这是跨地区现象而非单一国家问题。",
                  "amid 引导伴随状况，强调在持续接种覆盖缺口中疫情重新增长。",
                  "persistent gaps in vaccination coverage 是病因或制度性条件，而非单一个人行为。",
                  "该句可用于写作中连接全球趋势与接种率这一系统性因素。"
                ],
                "translation": "在疫苗接种覆盖率持续存在缺口的情况下，麻疹正在全球范围内重新抬头。"
              },
              {
                "original": "Re-establishing elimination status will require a national plan to eliminate measles again.",
                "analysis": [
                  "主语是动名词短语 Re-establishing elimination status，表示恢复消除状态这一行动。",
                  "will require 是将来时主谓结构，说明恢复状态需要持续投入。",
                  "to eliminate measles again 是目的或内容性不定式，说明计划目标。",
                  "national plan 强调跨层级协调，不能只依赖个别社区或短期运动。",
                  "该句适合总结问题解决方案，常用于阅读理解的主旨或作者态度题。"
                ],
                "translation": "重新获得消除状态需要一项再次消除麻疹的国家计划。"
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
    }
  ]
};
