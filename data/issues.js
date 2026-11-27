window.BRIEFING_DATA = {
  "updatedAt": "2026-11-27T12:53:20+08:00",
  "issues": [
    {
      "date": "2026-11-27",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦可实际尝试的官方 AI 功能与免费资源，并保留真实发布时间和明确限制。",
        "updates": [
          {
            "event": "OpenAI 发布 Shirudo Linux 安全运行时",
            "summary": "OpenAI 与 Cisco 于 2026-11-23 公布开源运行时 Shirudo，目标是在 Linux 系统运行补丁期间保护正在运行的系统，不要求关闭或重启整个环境。",
            "howTo": "从 OpenAI 官方 Shirudo 页面进入项目与仓库，阅读安装、策略和示例后，在隔离测试机部署并验证补丁与运行时保护逻辑。",
            "impact": "系统管理、网络安全和软件工程学生可用它研究运行时加固、补丁回滚与生产环境变更；不应把开源发布直接等同于企业级可用性。",
            "free": "官方未说明生产部署是否免费、支持的 Linux 发行版、地区限制、支持期限或配额。",
            "category": "安全 / 开源工具",
            "source": {
              "name": "OpenAI",
              "published": "2026-11-23",
              "url": "https://openai.com/index/introducing-shirudo"
            }
          },
          {
            "event": "OpenAI 展示 Astra 辅助寻找系外行星",
            "summary": "OpenAI 于 2026-11-24 发布案例：两位业余天文学者使用 Codex 和 Astra 分析 NASA Kepler 与 TESS 公开数据，并报告筛选出候选系外行星的工作流程。",
            "howTo": "阅读官方案例中的提示、数据处理和候选筛选步骤；可先在公开天文数据集上复现小规模筛选，不要把候选结果当作已确认行星。",
            "impact": "天文、数据科学和计算机学生可练习公开数据清洗、异常筛选和人工复核，并讨论模型候选与专家确认之间的差距。",
            "free": "官方未说明 Astra 或 Codex 是否免费、可用地区、调用配额或是否随时开放。",
            "category": "科研 / 数据分析",
            "source": {
              "name": "OpenAI",
              "published": "2026-11-24",
              "url": "https://openai.com/index/searching-for-distant-planets-with-astra"
            }
          },
          {
            "event": "GitHub 调整 Copilot 代码审查账单归属",
            "summary": "GitHub 于 2026-11-25 宣布：2026-12-30 起，若组织或企业尚未保存 Copilot 代码审查的账单选择，持有仓库的组织将成为默认付款方；已有 Member 或 Organization 设置不变。",
            "howTo": "在企业或组织的 Copilot 策略设置中检查代码审查账单，若希望继续使用成员额度，12 月 30 日前选择 Member。",
            "impact": "课程团队和学生社团应核对仓库所属组织、成员许可证与 AI Credits，避免合并请求审查产生意外组织支出。",
            "free": "只涉及已启用 Copilot Business 或 Enterprise 的组织和企业；账户如未启用付费 AI Credits、受计费锁定或没有可计费客户仍使用 Member。个人配额、地区限制和免费额度官方未说明。",
            "category": "代码协作 / 计费",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-25",
              "url": "https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free",
            "summary": "GitHub 官方提供无需信用卡的 Copilot Free，个人用户可在受支持编辑器或 GitHub 网页使用代码补全、聊天等功能。",
            "howTo": "登录 GitHub，打开 Copilot 计划页选择 Free，再在 VS Code、GitHub 网页或受支持编辑器启用。",
            "impact": "适合课堂编程、调试解释和小型代理任务；仍应运行测试并审查安全、依赖与许可证。",
            "free": "官方列明 $0、无需信用卡、每月 2,000 次代码补全；聊天和 Agent 配额、地区限制官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Gemini API 免费层",
            "summary": "Google AI Studio 官方定价页列出部分 Gemini 模型的免费层，并明确部分高级模型不支持 Free tier。",
            "howTo": "在 AI Studio 登录并创建 API Key，先在定价页核对所选模型的 Free Tier，再以小规模脚本监控额度。",
            "impact": "可用于课程原型、文本处理和小型应用；上线前应核对模型配额和数据政策。",
            "free": "具体 RPM、TPM、RPD、地区资格和重置规则因模型而异，官方未给出统一配额。",
            "category": "免费 API / 原型开发",
            "source": {
              "name": "Google AI Studio 官方定价页",
              "published": "官方未说明",
              "url": "https://aistudio.google.com/docs/pricing"
            }
          },
          {
            "event": "Notion Education Plan",
            "summary": "Notion 面向合格高校学生和教师提供免费的 Education Plan，可用于笔记、项目看板和资料库。",
            "howTo": "使用学校邮箱注册，在工作区的升级页面申请 education plan；成功认证后按官方流程管理工作区。",
            "impact": "适合论文资料库、课程笔记和小组协作；认证失败或不合格用户不能默认获得权益。",
            "free": "官方列明面向合格教育用户并需认证；具体地区、存储和版本历史限制官方未统一说明。",
            "category": "学生教育 / 知识管理",
            "source": {
              "name": "Notion 官方 Education 页面",
              "published": "官方未说明",
              "url": "https://www.notion.com/product/notion-for-education"
            }
          },
          {
            "event": "Google Colab 免费 Notebook",
            "summary": "Google Colaboratory 提供免费的浏览器 Jupyter Notebook，可连接 Google Drive 与 GitHub，并按可用性提供受限 CPU、GPU 或 TPU。",
            "howTo": "访问 Colab，新建 Notebook，在 Runtime 菜单选择运行时并保存到 Drive 或 GitHub。",
            "impact": "适合数据分析、机器学习作业和可复现实验；应为资源波动和运行时回收预留容错。",
            "free": "官方明确免费；硬件配额、运行时上限、地区和可用性官方未保证或统一说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Hugging Face Serverless Inference 文档",
            "summary": "Hugging Face 官方提供由 Inference Providers 路由的模型推理文档，可通过官方 API 在多个第三方及自有服务上调用开源模型。",
            "howTo": "登录 Hugging Face，在官方 Inference Providers 文档选择模型和 provider，用可用令牌进行小规模测试。",
            "impact": "适合课程原型、模型对比和低成本实验；上线前应核对 provider 切换、数据和计费规则。",
            "free": "官方未统一说明免费额度、地区资格、配额、是否需要信用卡或长期有效期。",
            "category": "免费推理 / 模型实验",
            "source": {
              "name": "Hugging Face 官方文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/inference-providers/index"
            }
          },
          {
            "event": "GitHub Student Developer Pack",
            "summary": "GitHub Education 官方面向合格学生提供 Developer Pack，可从合作方获得工具、云资源或教育权益，具体由合作伙伴逐项提供。",
            "howTo": "用 GitHub 账号访问 Education 页面，按年龄、学校身份与在读证明完成认证，再逐项领取并核对合作方条件。",
            "impact": "适合课程项目、个人作品集和云端开发；每项权益的有效期、配额和地区可能不同。",
            "free": "官方未说明统一免费时长或配额；每项权益的价格、资格、地区和截止日以合作方页面为准。",
            "category": "学生教育 / 开发工具",
            "source": {
              "name": "GitHub Education",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "‘I’m no longer a UAE official’: UN hopeful Lana Nusseibeh tries to shake off Sudan record",
            "source": "The Guardian",
            "published": "2026-11-26",
            "url": "https://www.theguardian.com/world/2026/nov/26/lana-nusseibeh-uae-sudan-un-secretary-general",
            "readingTime": 10,
            "topic": "society",
            "summary": "文章报道联合国秘书长参选人 Lana Nusseibeh 为摆脱在阿联酋任职期间被关联的苏丹问题而展开游说。作者首先说明她以独立候选人的身份会见英国官员、议员和学者，但过去否认阿联酋向苏丹民兵提供武器及参与战争罪的立场仍是最大政治负担。文章随后追溯苏丹内战中的外交争议、英国等国的反对，以及候选人试图把自身描述为经验丰富、能够修复 UN 关系的调停者。证据包括她过去的公开表态、外交记录、各国立场和仍在进行的选举过程，而非任何已确认的胜算。结论是：候选人的个人形象改变了，但她能否与前任角色和前任立场切割，取决于选举国是否接受其解释。",
            "reason": [
              "主题涉及外交、战争责任和国际组织领导权，符合考研英语常见的国际政治与社会议题。",
              "文章采用人物现状、争议背景、各方反应和选举前景的层次结构，可考主旨、态度和例证关系。",
              "重点词汇包括 candidate、denial、allegation、charm offensive 和 resistance，适合理解外交语境中的弱化与推责。",
              "句子常以转折、让步和过去事实与现在身份并置，可训练主从结构和逻辑关系分析。",
              "写作可借鉴先陈述人物当下行动，再用证据追溯争议，最后用未决结果避免过度定论。"
            ],
            "vocabulary": [
              {
                "word": "charm offensive",
                "phonetic": "/tʃɑːrm əˈfensɪv/",
                "part": "n.",
                "translation": "亲善攻势；魅力攻势"
              },
              {
                "word": "shake off",
                "phonetic": "/ʃeɪk ɒf/",
                "part": "phr. v.",
                "translation": "摆脱；甩掉"
              },
              {
                "word": "denied",
                "phonetic": "/dɪˈnaɪd/",
                "part": "v.",
                "translation": "否认"
              },
              {
                "word": "alleged",
                "phonetic": "/əˈledʒd/",
                "part": "adj.",
                "translation": "据称的；被指控的"
              },
              {
                "word": "high-risk",
                "phonetic": "/haɪ rɪsk/",
                "part": "adj.",
                "translation": "高风险的"
              },
              {
                "word": "militia",
                "phonetic": "/məˈlɪʃə/",
                "part": "n.",
                "translation": "民兵组织"
              },
              {
                "word": "diplomatic",
                "phonetic": "/ˌdɪpləˈmætɪk/",
                "part": "adj.",
                "translation": "外交的；圆通的"
              },
              {
                "word": "resistance",
                "phonetic": "/rɪˈzɪstəns/",
                "part": "n.",
                "translation": "反对；抵制"
              },
              {
                "word": "credential",
                "phonetic": "/krəˈdenʃəl/",
                "part": "n.",
                "translation": "资历；资格"
              },
              {
                "word": "contender",
                "phonetic": "/kənˈtendər/",
                "part": "n.",
                "translation": "竞争者；参选者"
              }
            ],
            "sentences": [
              {
                "original": "I’m no longer a UAE official; I’m Lana Nusseibeh, former special envoy and candidate for secretary general.",
                "analysis": [
                  "句子主干是 I'm no longer a UAE official, 对身份进行明确切割。",
                  "分号连接两个完整分句，后句说明新的身份。",
                  "former special envoy 是补充限定，强调候选人过去的外交资历。",
                  "candidate for secretary general 指明当前角色和目标职位。",
                  "这一句适合分析候选人如何用身份重塑消除旧角色标签。"
                ],
                "translation": "我不再是阿联酋的官员；我是 Lana Nusseibeh，曾任特使，也是秘书长候选人。"
              },
              {
                "original": "Nusseibeh is in Britain this week, attempting to present herself as a potential future UN secretary general.",
                "analysis": [
                  "主干是 Nusseibeh is in Britain, 说明人物所处位置。",
                  "attempting to present herself as... 是现在分词短语补充当下目的。",
                  "potential future UN secretary general 是名词短语，表达尚未实现的身份。",
                  "时间状语 this week 与正在进行的游说行动形成直接呼应。",
                  "该句可用于将人物行动和目标身份并置。"
                ],
                "translation": "Nusseibeh 本周在英国，试图把自己塑造为未来可能的联合国秘书长。"
              },
              {
                "original": "It is a high-risk strategy that involves meeting ministers, MPs, academics and holding a public event.",
                "analysis": [
                  "主干采用 It is a high-risk strategy，以形式主语引出评价。",
                  "that 引导定语从句，说明该策略包含哪些具体行动。",
                  "meeting... 与 holding... 是并列动名词短语，构成行动清单。",
                  "minister、MP 和 academic 三类对象体现面向不同政治圈层的游说。",
                  "该句适合总结行动策略及其风险。"
                ],
                "translation": "这是一项高风险策略，包括会见部长、议员、学者并举办公开活动。"
              }
            ]
          },
          {
            "title": "UK to pay ‘participation’ fee to deliver EU deals",
            "source": "BBC News",
            "published": "2026-11-26",
            "url": "https://www.bbc.co.uk/news/articles/ck2057x387ego",
            "readingTime": 9,
            "topic": "economics",
            "summary": "BBC 报道英国政府将为获得参与若干欧盟计划的资格支付所谓 participation fee，具体金额依据新公布的法律文件和各项协议而定。文章先说明该费用并非直接购买欧盟商品，而是用于支持相关机构运行或程序参与，随后区分科学、学生、食品或其他合作领域可能面临的成本结构。报道也说明反对者担心费用削弱脱欧承诺，而支持者认为可换取长期市场、科研或人才合作机会。整体结构通过政策目标、预算细节、政治争议和后续落实并置，强调这是一项需由具体协议与收益共同判断的务实安排。",
            "reason": [
              "主题涉及脱欧后英国—欧盟关系、公共财政和跨国合作，贴近考研英语经济与政治议题。",
              "文章以费用事实为起点，再平衡支持者、反对者和实施细节，适合态度题与结构题。",
              "vocabulary 包括 participation、contribution、sovereignty、programme access 和 implementation。",
              "复合句常用 due to、while 和 whether 引出条件与让步，可训练逻辑关系判断。",
              "写作可借鉴先界定一个容易误解的政策，再区分直接成本与潜在收益。"
            ],
            "vocabulary": [
              {
                "word": "participation fee",
                "phonetic": "/pɑːˌtɪsɪˈpeɪʃn fiː/",
                "part": "n.",
                "translation": "参与费"
              },
              {
                "word": "contribution",
                "phonetic": "/ˌkɑntrɪˈbjuːʃn/",
                "part": "n.",
                "translation": "资金分摊；贡献"
              },
              {
                "word": "deliver",
                "phonetic": "/dɪˈlɪvər/",
                "part": "v.",
                "translation": "实现；交付"
              },
              {
                "word": "sovereignty",
                "phonetic": "/ˈsɑːvrənti/",
                "part": "n.",
                "translation": "主权"
              },
              {
                "word": "access",
                "phonetic": "/ˈækses/",
                "part": "n./v.",
                "translation": "进入权；使用权"
              },
              {
                "word": "scheme",
                "phonetic": "/skiːm/",
                "part": "n.",
                "translation": "计划；方案"
              },
              {
                "word": "obligation",
                "phonetic": "/ˌɑːblɪˈgeɪʃn/",
                "part": "n.",
                "translation": "义务；责任"
              },
              {
                "word": "implement",
                "phonetic": "/ˈɪmplɪment/",
                "part": "v.",
                "translation": "实施；执行"
              },
              {
                "word":                 "scrutiny",
                "phonetic": "/ˈskruːtəni/",
                "part": "n.",
                "translation": "审查；细察"
              },
              {
                "word": "trade-off",
                "phonetic": "/ˈtreɪd ɒf/",
                "part": "n.",
                "translation": "权衡；取舍"
              }
            ],
            "sentences": [
              {
                "original": "The details of the contribution towards EU running costs have been revealed in new legal documents.",
                "analysis": [
                  "主干是 The details have been revealed，采用被动语态突出信息披露。",
                  "of the contribution towards EU running costs 是名词短语，限定细节的内容。",
                  "towards EU running costs 说明费用用途是机构运行成本。",
                  "in new legal documents 是地点状语，说明文件来源。",
                  "该句适合改写政策支出的公开披露方式。"
                ],
                "translation": "欧盟运行成本分摊费用的细节已经在新的法律文件中披露。"
              },
              {
                "original": "Payment would give the UK access to specific EU programmes rather than a general role in EU institutions.",
                "analysis": [
                  "主干是 Payment would give the UK access。",
                  "give someone access to 是核心搭配，表示获得具体参与权。",
                  "specific EU programmes 是限制范围的宾语。",
                  "rather than 引出对比，排除更广泛的制度参与。",
                  "该句适合分析政策权衡与范围限制。"
                ],
                "translation": "支付费用将让英国获得参与特定欧盟项目的资格，而不是在欧盟机构中获得普遍角色。"
              },
              {
                "original": "Critics argue that the fee weakens post-Brexit autonomy, while supporters emphasize practical benefits.",
                "analysis": [
                  "主句由 Critics argue 引导，宾语是 that 从句。",
                  "while 引导让步或对比从句，呈现支持者与批评者的立场。",
                  "post-Brexit autonomy 是批评方使用的政治抽象概念。",
                  "supporters emphasize practical benefits 则强调可量化收益。",
                  "该句适合写作中平衡两面观点。"
                ],
                "translation": "批评者认为该费用削弱了脱欧后的自主权，而支持者则强调实际收益。"
              }
            ]
          },
          {
            "title": "‘Medicare for all’ is back on the drawing board. Does it stand a better chance this time?",
            "source": "NPR",
            "published": "2026-11-23",
            "url": "https://www.npr.org/2026/11/23/nx-s1-6047706/health-medicare-for-all-chances",
            "readingTime": 10,
            "topic": "health",
            "summary": "NPR 讨论美国新当选参议员重新推动 Medicare for All 的政治可能性。文章首先说明这项全民保险议程在竞选中再次出现，并以候选人支持、成本辩论和既有保险利益为切入点。作者比较以往提案为何难以通过：不仅涉及预算规模，也牵动雇主保险、私人市场、州政府和医疗从业者的利益。报道引用政策框架和支持者、反对者的立场，说明选举胜利未必等同于立法多数，也未解决税收、补偿和过渡安排。结论保持审慎：提案获得更多关注，但能否成为现实取决于国会结构、州际差异和是否形成可接受的折中方案。",
            "reason": [
              "主题是医保制度、公共财政与政治可行性，贴近考研英语健康与社会政策议题。",
              "文章采用回顾、人物立场、政策成本、机构阻力和前景判断的递进结构。",
              "可考查 universal coverage、drawing board、single-payer、premium 和 implementation 等核心词。",
              "疑问句标题和让步、因果句式可训练态度判断与段落主旨概括。",
              "写作可借鉴先重述争议，再分析支持、阻力和必要条件，避免把价值判断等同政策可行性。"
            ],
            "vocabulary": [
              {
                "word": "drawing board",
                "phonetic": "/ˈdrɔːɪŋ bɔːrd/",
                "part": "n.",
                "translation": "设计阶段；重新审议阶段"
              },
              {
                "word": "universal coverage",
                "phonetic": "/ˌjuːnɪˈvɜːsəl ˈkʌvərɪdʒ/",
                "part": "n.",
                "translation": "全民覆盖"
              },
              {
                "word": "single-payer",
                "phonetic": "/ˈsɪŋɡl peɪər/",
                "part": "adj./n.",
                "translation": "单一付款人制度"
              },
              {
                "word": "premium",
                "phonetic": "/ˈpriːmiəm/",
                "part": "n.",
                "translation": "保险费；溢价"
              },
              {
                "word": "cost-sharing",
                "phonetic": "/kɑːst ˈʃerɪŋ/",
                "part": "n.",
                "translation": "费用分担"
              },
              {
                "word": "reimbursement",
                "phonetic": "/ˌriːɪmˈbɜːrsmənt/",
                "part": "n.",
                "translation": "报销；补偿"
              },
              {
                "word": "implementation",
                "phonetic": "/ˌɪmplɪmenˈteɪʃn/",
                "part": "n.",
                "translation": "实施；落实"
              },
              {
                "word": "traction",
                "phonetic": "/ˈtrækʃn/",
                "part": "n.",
                "translation": "政治支持度；影响力"
              },
              {
                "word": "constituency",
                "phonetic": "/kənˈstɪtjuənsi/",
                "part": "n.",
                "translation": "选区；支持群体"
              },
              {
                "word": "compromise",
                "phonetic": "/ˈkɑːmprəmaɪz/",
                "part": "n./v.",
                "translation": "妥协；折中方案"
              }
            ],
            "sentences": [
              {
                "original": "Several newly elected Democratic U.S. senators campaigned on Medicare for All.",
                "analysis": [
                  "主干是 several senators campaigned on Medicare for All。",
                  "newly elected 是过去分词短语修饰 senators。",
                  "Democratic U.S. 是限定名词，说明支持群体背景。",
                  "campaigned on 表示竞选纲领中以该议题为核心。",
                  "该句可作为政策话题回归的起点。"
                ],
                "translation": "几位新当选的美国民主党参议员曾以全民医保为竞选纲领。"
              },
              {
                "original": "Could this be the time it actually gets traction?",
                "analysis": [
                  "句子采用倒装疑问句，主语是 this。",
                  "it 指代 Medicare for All 这一议案。",
                  "actually 表示强调现实可能性，而不是保证已经实现。",
                  "gets traction 是隐喻，表示获得政治支持或推进动力。",
                  "标题式疑问句适合分析作者的审慎态度。"
                ],
                "translation": "这次它会不会真的获得推动力？"
              },
              {
                "original": "It stands to change how patients, employers and providers share the cost of care.",
                "analysis": [
                  "主干是 It stands to change。",
                  "stands to 表示可能或预计产生结果。",
                  "patients、employers 和 providers 是三类受影响主体。",
                  "share the cost of care 是政策核心中的成本分配短语。",
                  "该句适合概括制度改革对各方利益的影响。"
                ],
                "translation": "该制度可能改变患者、雇主和医疗提供者分担医疗费用的方式。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-26",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦可实际尝试的 AI 工具变化、官方免费额度与学生可用资源，并以官方来源标注真实发布日期。",
        "updates": [
          {
            "event": "GitHub Copilot 代码审查计费规则调整",
            "summary": "GitHub 于 2026-11-25 宣布：若组织或企业未选择 Copilot 代码审查账单归属，2026-12-30 起默认由持有仓库的组织承担 AI Credits；已选择 Member 或 Organization 的设置不变。",
            "howTo": "仓库所属组织或企业管理员可在 Copilot 策略设置中选择 Member 或 Organization；12 月 30 日前检查未设值项，避免组织产生意外付费。",
            "impact": "课程团队和学生社团若使用组织账号，应确认代码审查由成员额度还是组织额度承担，并在合并请求流程中估算审查成本。",
            "free": "仅适用于带 Copilot 许可证成员的 Copilot Business 或 Enterprise 组织和企业；未启用付费 AI Credits、账单锁定或无可结算客户的账号仍设为 Member。个人计划配额、地区限制及统一免费额度官方未说明。",
            "category": "代码协作 / 计费",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-25",
              "url": "https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization"
            }
          },
          {
            "event": "OpenAI GPT-6 具备蛋白质设计能力",
            "summary": "OpenAI 于 2026-11-24 发布研究，称 GPT-6 系列可用推理与代码直接设计蛋白质结构和氨基酸序列；实验中部分模型设计与重设计蛋白对五个目标显示结合证据。",
            "howTo": "阅读 OpenAI 官方文章和公开论文，查看三维结构、序列设计、候选筛选与实验流程；普通用户可先用公开案例学习提示与验证方法，不应假设该能力已开放为产品功能。",
            "impact": "生物、化学与计算机学生可分析通用模型如何替代或配合专用蛋白模型，比较计算命中率和实验验证，并讨论局限、安全与可复现性。",
            "free": "官方未说明普通用户能否直接使用、是否免费、支持哪些地区，以及有无调用配额或产品开放计划。",
            "category": "科研 / 跨学科",
            "source": {
              "name": "OpenAI",
              "published": "2026-11-24",
              "url": "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/"
            }
          },
          {
            "event": "Gemini 扩展至 Golden State 体育与运营场景",
            "summary": "Google 于 2026-11-24 宣布将 Gemini 定位为 Golden State Warriors、WNBA Valkyries 和 Chase Center 的 AI 与企业大模型合作伙伴，覆盖球迷互动、场馆屏幕和后台定制代理。",
            "howTo": "关注官方合作案例中的交互展示；学生可对照 Gemini 的自定义代理、企业知识和数字渠道能力，设计一个班级活动或校园场馆的可行原型。",
            "impact": "适合体育运营、市场营销、用户体验和智能代理课程：可分析多渠道互动与后台流程的分工，但不要把商业合作案例直接等同于公开平台能力。",
            "free": "官方未说明用户是否可获得对应功能、是否免费、哪些地区可用，以及配额、账号和使用期限。",
            "category": "企业应用 / 代理",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-24",
              "url": "https://blog.google/products-and-platforms/products/gemini/gemini-golden-state/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free",
            "summary": "GitHub 官方提供 $0 的 Copilot Free，个人用户无需信用卡，可每月获得 2,000 次代码补全和有限聊天、Agent 使用。",
            "howTo": "打开 GitHub Copilot 计划页选择 Free 并登录，在 VS Code、GitHub 网页、CLI 或受支持编辑器中启用；先在小型课程项目中查看补全和 Agent 用量。",
            "impact": "适合代码补全、调试解释和简单代理式修改；生成代码仍需运行测试并审查依赖、安全和许可证。",
            "free": "官方列明 $0、无需信用卡、每月 2,000 次补全；聊天和 Agent 配额、地区限制与重置规则官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Gemini API 免费层",
            "summary": "Google AI Studio 官方定价页提供部分 Gemini 模型的免费层，部分高级模型明确不支持 Free tier。",
            "howTo": "登录 AI Studio 取得 API Key，在定价页确认所选模型的 Free Tier 与限制，再用小规模脚本测试文本、搜索或工具调用并监控配额。",
            "impact": "适合课程原型、数据处理和小型应用；应检查数据使用政策、地区、RPM/TPM/RPD 和模型是否随时调整。",
            "free": "官方说明部分模型免费且部分高级模型不在免费层；具体模型配额、地区资格和重置规则以定价页逐项说明为准，官方未统一给出固定配额。",
            "category": "免费 API / 开发原型",
            "source": {
              "name": "Google AI Studio 官方定价页",
              "published": "官方未说明",
              "url": "https://aistudio.google.com/docs/pricing"
            }
          },
          {
            "event": "Notion Education Plan",
            "summary": "Notion 面向符合认证的高校学生和教师提供免费 Education Plan，包含无限页面和块、文件上传、更多站点功能与更长版本历史。",
            "howTo": "用学校邮箱注册并在 Notion 的 Settings > Upgrade plan 中选择 Get free education plan；首次认证后每年重新验证一次。",
            "impact": "可用于课程笔记、论文资料库、项目看板和个人网站；免费权益应仅用于合格工作区，学生组织规则另行查看。",
            "free": "官方列明无固定结束日、一次性为一个工作区领取，每年用学校邮箱验证一次；不接受个人邮箱或部分未获认证机构，具体地区及存储细节官方未统一说明。",
            "category": "学生教育 / 知识管理",
            "source": {
              "name": "Notion 官方 Education 页面",
              "published": "官方未说明",
              "url": "https://www.notion.com/product/notion-for-education"
            }
          },
          {
            "event": "Google Colab 免费托管 Notebook",
            "summary": "Google 官方提供无需本地配置的免费 Colab Jupyter Notebook，可连接 Google Drive 与 GitHub，并可申请受限 GPU 或 TPU。",
            "howTo": "访问 colab.research.google.com，新建或上传 Notebook，在 Runtime 菜单选择可用运行时并保存到 Drive 或 GitHub。",
            "impact": "适合数据分析、机器学习和可复现作业；可先用 CPU 完成，小规模 GPU/TPU 任务应避免占用和绕过限制。",
            "free": "官方明确免费；资源不保证、不无限制，运行时配额和硬件可用性会波动；地区、最大运行时和配额官方未说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn 无成本课程",
            "summary": "Kaggle 官方提供无需付费的交互课程，涵盖 Python、数据可视化、Pandas、机器学习等主题。",
            "howTo": "登录 Kaggle，进入 Learn 页面选择课程，在浏览器 Notebook 完成教程与练习，并保存作品。",
            "impact": "适合补足数据清洗、可视化、机器学习和 Python 基础，并形成可复现课程项目。",
            "free": "官方明确课程为 no-cost；证书、配额、地区和截止日官方未统一说明。",
            "category": "免费课程 / 练习",
            "source": {
              "name": "Kaggle 官方 Learn 页面",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "DeepSeek-R1 蒸馏模型权重",
            "summary": "DeepSeek 官方在 Hugging Face 发布 1.5B 等蒸馏推理模型权重，官方模型卡列明 MIT License。",
            "howTo": "在 Hugging Face DeepSeek 官方模型页查看许可证和运行要求，用 Transformers 下载权重；先在小规模环境测试推理和资源占用。",
            "impact": "适合本地或服务器实验推理模型、微调流程和可复现作业；部署前应核对衍生权重及底座模型的许可证义务。",
            "free": "官方模型卡公开下载并标注 MIT License；地区限制、运行配额、硬件成本和各衍生权重的额外约束官方未统一说明。",
            "category": "开源模型权重",
            "source": {
              "name": "Hugging Face — DeepSeek 官方组织",
              "published": "官方未说明",
              "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Poundland collapses putting 11,000 jobs at risk",
            "source": "BBC News",
            "published": "2026-11-25",
            "url": "https://www.bbc.co.uk/news/articles/cm3vgdn037z4o",
            "readingTime": 9,
            "topic": "economics",
            "summary": "文章报道英国折扣零售连锁 Poundland 进入破产管理，约 11,000 个岗位面临风险。作者先说明美国所有者未能找到保全业务的买家，门店和配送中心仍在临时运营，并可能分拆出售；随后引用管理方、员工和政府的反应，呈现消费者、供应商与职工的不同利益。中段集中分析最大阻碍：所有者 Gordon Brothers 拒绝了不同买家对公司和股东贷款的支付方案，限制日常运营资金并影响节前补货。文章同时介绍批评者指控所有者通过清算资产获利，以及所有者的否认和过往援助事实。结论没有把危机简单归因于高管贪婪，而是将所有者融资、股东贷款、通胀、销售额下滑和节日旺季的资金压力并置。",
            "reason": [
              "主题涉及零售萧条、破产管理、就业和所有者责任，贴近考研英语的经济与社会议题。",
              "文章采用核心事实、个体证言、各方立场、交易细节和政策反应的递进结构，适合主旨、态度和例证题。",
              "可考查 administration、solvent、going concern、turnaround 和 shareholder loan 等在企业危机中的含义与逻辑关系。",
              "sincere sadness、stumbling block、ripping out、vulnerable 等词句体现新闻报道中的正式措辞与情绪对比。",
              "写作可借鉴先呈现量化影响，再平衡公司、员工、政府和所有者观点，避免以单一动机解释复杂失败。"
            ],
            "vocabulary": [
              {
                "word": "collapse",
                "phonetic": "/kəˈlæps/",
                "part": "v./n.",
                "translation": "倒闭；崩塌"
              },
              {
                "word": "administration",
                "phonetic": "/ədˌmɪnɪˈstreɪʃn/",
                "part": "n.",
                "translation": "破产管理；接管管理"
              },
              {
                "word": "solvent",
                "phonetic": "/ˈsɑːlvənt/",
                "part": "adj.",
                "translation": "有偿债能力的"
              },
              {
                "word": "going concern",
                "phonetic": "/ˌɡoʊɪŋ kənˈsɜːrn/",
                "part": "n.",
                "translation": "持续经营企业"
              },
              {
                "word": "turnaround",
                "phonetic": "/ˈtɜːrnəraʊnd/",
                "part": "n.",
                "translation": "扭亏；经营好转"
              },
              {
                "word": "shareholder loan",
                "phonetic": "/ˈʃerhoʊldər loʊn/",
                "part": "n.",
                "translation": "股东贷款"
              },
              {
                "word": "stumbling block",
                "phonetic": "/ˈstʌmblɪŋ blɑːk/",
                "part": "n.",
                "translation": "障碍；绊脚石"
              },
              {
                "word": "replenish",
                "phonetic": "/rɪˈplenɪʃ/",
                "part": "v.",
                "translation": "补充；重新备货"
              },
              {
                "word": "turnover",
                "phonetic": "/ˈtɜːrnˌoʊvər/",
                "part": "n.",
                "translation": "营业额；人员流动"
              },
              {
                "word": "liquidate",
                "phonetic": "/ˈlɪkwɪdeɪt/",
                "part": "v.",
                "translation": "清算；变卖"
              }
            ],
            "sentences": [
              {
                "original": "Poundland has collapsed into administration, putting 11,000 jobs at risk, after its owners failed to find a buyer to keep it in business.",
                "analysis": [
                  "句子主干是 Poundland has collapsed into administration，采用现在完成时表示已发生的经营状态变化。",
                  "putting 11,000 jobs at risk 是现在分词短语作结果状语，说明倒闭对就业的直接影响。",
                  "after 引出时间和因果从句，指出所有者未能找到买家是事件发生的前提。",
                  "to keep it in business 是目的性不定式，强调买家本应继续维持运营。",
                  "该句适合改写为开篇摘要，把公司状态、就业规模和失败原因压缩在一个完整句中。"
                ],
                "translation": "Poundland 已进入破产管理，约 11,000 个岗位面临风险，原因是所有者未能找到可以继续经营公司的买家。"
              },
              {
                "original": "Under these circumstances, it is impossible for the board of directors to see how Poundland can continue to operate as a going concern.",
                "analysis": [
                  "主干是 it is impossible for the board...，it 是形式主语，真正主语是不定式结构。",
                  "Under these circumstances 是条件状语，限定董事会判断成立的前提。",
                  "how Poundland can continue to operate 是疑问词名词性从句，表达董事会无法判断未来经营方式。",
                  "to operate as a going concern 是持续经营概念，关系到企业能否正常履行债务和业务。",
                  "该句适合说明管理方如何以正式措辞向公众交代破产依据。"
                ],
                "translation": "在这些情况下，董事会无法判断 Poundland 如何才能继续作为持续经营企业运营。"
              },
              {
                "original": "The crisis at Poundland really came to a head over the past few weeks after Gordon Brothers restricted access to funds for day-to-day operations.",
                "analysis": [
                  "主干是 the crisis came to a head，采用形象表达表示危机集中爆发。",
                  "over the past few weeks 是时间状语，强调这是近期急剧恶化的结果。",
                  "after 引导限制资金这一先行事件，形成资金不足与危机爆发的因果关系。",
                  "for day-to-day operations限定资金用途，突出日常采购和支付能力受损。",
                  "该句可用于分析企业危机如何由现金流而非单一经营指标触发。"
                ],
                "translation": "过去几周，Gordon Brothers 限制了用于日常运营的资金，Poundland 的危机因此真正爆发。"
              }
            ]
          },
          {
            "title": "At this Little Free Bakery in Austin, neighbors come for the pastries and stay for community connection",
            "source": "NPR",
            "published": "2026-11-25",
            "url": "https://www.npr.org/2026/11/25/nx-s1-6005522/little-free-bakery-austin-community-connection",
            "readingTime": 8,
            "topic": "culture",
            "summary": "文章介绍奥斯汀和西雅图的“小免费面包店”运动：烘焙者定期免费分发自制糕点，邻居不仅领取甜点，也逐渐留下聊天、分享新闻与建立长期联系。作者先以奥斯汀 Sarah Mason 的公园活动为例，说明第一批 150 件糕点因社交媒体迅速吸引排队人群，但面包店意外演变成社区聚会。随后追溯西雅图创始人 Lanne Stauffer：她在疫情期间受门口鲜花启发，用烘焙代替鲜花表达关怀，并用 Little Free Library 的分享模式建立街区据点。文章以两个城市的实践、受访者的参与感和全国扩展为证据，论证免费物品若提供稳定、低门槛的公共空间，就能缓解社会分化并增加邻里归属感；结论并未夸大其替代公共服务，而是强调微型社区行动的补充价值。",
            "reason": [
              "主题属于社区、文化变迁与社会凝聚力，贴近考研英语关于城市生活、非营利行动和公共交往的议题。",
              "文章采用个案引入、人物经历、志愿者动机、活动扩展和归纳结论的叙事结构，适合主旨题和细节题。",
              "可考查 polarizing、gratitude、gathering spot、community connection 等词语在社会关系语境中的准确使用。",
              "grab-and-go、anchor、snowball 和 share & building community 等表达兼具生活化比喻和抽象概括价值。",
              "写作可借鉴先由具体空间场景引入，再用普通人的经历证明抽象价值，最后保持适度而非夸大结论。"
            ],
            "vocabulary": [
              {
                "word": "pastry",
                "phonetic": "/ˈpeɪstri/",
                "part": "n.",
                "translation": "糕点；油酥点心"
              },
              {
                "word": "inadvertently",
                "phonetic": "/ˌɪnədˈvɜːrtəntli/",
                "part": "adv.",
                "translation": "不经意地；无意地"
              },
              {
                "word": "polarizing",
                "phonetic": "/ˈpoʊləraɪzɪŋ/",
                "part": "adj.",
                "translation": "造成分化的"
              },
              {
                "word": "gathering spot",
                "phonetic": "/ˈɡæðərɪŋ spɑːt/",
                "part": "n.",
                "translation": "聚集地点"
              },
              {
                "word": "hearken back",
                "phonetic": "/ˈhɑːrkən bæk/",
                "part": "phr.",
                "translation": "让人回想起；追溯到"
              },
              {
                "word": "anchor",
                "phonetic": "/ˈæŋkər/",
                "part": "n.",
                "translation": "中心支点；稳定的核心"
              },
              {
                "word": "snowball",
                "phonetic": "/ˈsnoʊbɔːl/",
                "part": "v.",
                "translation": "迅速扩大；滚雪球式发展"
              },
              {
                "word": "small act of kindness",
                "phonetic": "/smɔːl ækt əv ˈkaɪndnəs/",
                "part": "phr.",
                "translation": "一件小小的善意行为"
              },
              {
                "word": "comforted",
                "phonetic": "/ˈkʌmfərtɪd/",
                "part": "v.",
                "translation": "安慰；使感到宽慰"
              },
              {
                "word": "community connection",
                "phonetic": "/kəˈmjuːnəti kəˈnekʃn/",
                "part": "n.",
                "translation": "社区联系；邻里关系"
              }
            ],
            "sentences": [
              {
                "original": "Unlike other bakeries in town where a pastry can run upwards of $7, everything here is free.",
                "analysis": [
                  "主干是 everything here is free，核心对比是免费面包店与商营面包店。",
                  "Unlike 引导介词短语修饰整个比较，限定对象是城中其他面包店。",
                  "where a pastry can run upwards of $7 是关系状语从句，量化普通糕点价格。",
                  "run upwards of 表示价格上升到某数额以上，具有口语化新闻表达特点。",
                  "该句适合用数据和对比建立社区行动的低门槛特征。"
                ],
                "translation": "与城里一块糕点可能卖到七美元以上的其他面包店不同，这里的所有东西都是免费的。"
              },
              {
                "original": "People love a free treat, but Mason said she is pleasantly surprised at how many people stick around and hang out.",
                "analysis": [
                  "主句是 people love a free treat，副句由 but 引出更出人意料的观察。",
                  "she is pleasantly surprised 是嵌套主句，表达主办者的意外感受。",
                  "how many people stick around and hang out 是名词性从句，突出长期停留而非只取用。",
                  "stick around and hang out 的口语化并列强调社交互动。",
                  "该句适合分析活动目标之外产生的社区效应。"
                ],
                "translation": "人们喜欢免费点心，但 Mason 惊喜地发现有这么多人会留下来闲聊。"
              },
              {
                "original": "We stand around and hug each other or laugh or cry, share our fears, and it has just added another gathering spot in our neighborhood.",
                "analysis": [
                  "句子由 and 连接多个并列谓语，描绘邻居之间的情感交流。",
                  "hug, laugh, cry, share fears 形成一组递进动作，体现从轻松到私密的社交层次。",
                  "it has just added 采用现在完成时，说明长期活动累积的社区结果。",
                  "another gathering spot 是中性名词短语，避免夸大面包店的社会功能。",
                  "该句适合引用式改写邻里关系和公共生活的价值。"
                ],
                "translation": "我们围在一起拥抱、欢笑或落泪，分享彼此的恐惧，这让社区多了一个聚集地点。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-25",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦可实际操作的 AI 研究、学习工具与通知协作变化，并补充学生可领取或长期使用的官方免费资源。",
        "updates": [
          {
            "event": "OpenAI 公布 GPT-6 蛋白质设计能力",
            "summary": "OpenAI 于 2026-11-24 发布研究，称 GPT-6 系列可直接推理并编写代码来设计蛋白质结构和氨基酸序列，不必依赖专用结构生成模型；在部分计算任务和实验中有初步证据。",
            "howTo": "打开 OpenAI 文章或下载公开 PDF，查看设计流程和实验方法；普通用户可先阅读模型边界与局限，不应假设蛋素设计功能已开放或可在 ChatGPT 中直接使用。",
            "impact": "生物、化学或人工智能学生可用案例分析通用模型与专用模型协作、复现研究结论，并讨论实验设计、命中率和安全边界。",
            "free": "官方未说明该能力是否面向普通用户开放、是否免费、有哪些地区或配额限制。",
            "category": "科研 / 蛋白质设计",
            "source": {
              "name": "OpenAI",
              "published": "2026-11-24",
              "url": "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/"
            }
          },
          {
            "event": "Gemini Canvas 新增更多可交互学习用法",
            "summary": "Google 于 2026-11-23 宣布 Gemini Canvas 可生成网页和小游戏、把笔记或 PDF 转成测验和闪卡、制作办公工具，并可在画布上逐段重构文字。",
            "howTo": "登录 gemini.google.com，开启或选择 Canvas，把课程笔记、PDF 或写作需求作为提示提交；分别生成小测验、闪卡、网页和并排修改稿后逐项核对。",
            "impact": "适合为论文和课程制作交互式复习卡、研究展示页或写作草稿；生成的答案、公式和事实仍需对照教材与一手资料。",
            "free": "官方未说明 Canvas 的免费配额、地区可用性、账户要求或每日使用上限。",
            "category": "学习工具",
            "source": {
              "name": "Google Gemini 官方博客",
              "published": "2026-11-23",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-canvas-tasks/"
            }
          },
          {
            "event": "GitHub 调整通知订阅与原因优先级",
            "summary": "GitHub 于 2026-11-24 宣布自 2026-12-01 起分阶段迁移通知：手动取消订阅后部分活动不再重新订阅，订阅页只列出明确订阅的线程，邮件与收件箱会用统一优先级标明原因。",
            "howTo": "从 12 月起在 GitHub 通知收件箱和 Subscriptions 页面检查关注线程；若依赖自动化读取通知原因，先按 mention、team mention、assign 等新优先级顺序重测规则。",
            "impact": "课程团队可减少无关邮件，并更可靠地区分提及、指派、审查请求和手动订阅；但迁移期间不同用户可能短期行为不一致。",
            "free": "官方未说明各计划、地区或配额限制；明确表示该变化不适用于 GitHub Enterprise Server。",
            "category": "协作效率",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-24",
              "url": "https://github.blog/changelog/2026-11-24-more-predictable-notifications-on-github-com/"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free",
            "summary": "GitHub 官方提供 Copilot Free 计划，个人用户无需信用卡，可获得每月代码补全和有限聊天、Agent 使用。",
            "howTo": "打开 github.com/features/copilot/plans，选择 Free并登录；可在 VS Code、GitHub、CLI 或支持的编辑器中启用，先查看每月补全用量。",
            "impact": "适合课程编程、代码解释和调试练习；生成代码仍需运行测试并审查依赖与安全问题。",
            "free": "官方列明 $0、无信用卡、每月 2,000 次代码补全；聊天和 Agent 配额、地区限制与重置规则官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "Notion Education Plan",
            "summary": "Notion 面向经认证的高校学生和教师提供 Education Plan，个人工作区可免费使用并放宽页面、文件和发布等额度。",
            "howTo": "用学校邮箱注册或登录 Notion，进入 Settings > Upgrade plan，选择 Get free education plan；不符合的用户仍可使用基础 Free Plan。",
            "impact": "可用于论文资料库、课程任务日历、项目协作和个人知识库；认证需学校邮箱并按年重新验证。",
            "free": "官方列明符合认证即可长期使用，无设置期限，但需每年重新验证；地区、细分价格和剩余配额官方未统一说明。",
            "category": "学生教育 / 知识管理",
            "source": {
              "name": "Notion 官方 Education 页面",
              "published": "官方未说明",
              "url": "https://www.notion.com/product/notion-for-education"
            }
          },
          {
            "event": "Zotero 免费云端存储",
            "summary": "Zotero 官方提供 300 MB 免费同步存储，可在 Zotero 在线库和各设备间保存 PDF、图片、网页快照及附件。",
            "howTo": "安装 Zotero 桌面版并注册账号，在文件同步设置中使用免费 300 MB；超出容量后可分组管理附件或购买官方付费容量。",
            "impact": "适合文献综述、目录分组、PDF 标注和跨设备引用管理，学生可把主附件库先控制在免费额度内。",
            "free": "官方明确 300 MB 免费；付费额度为 2 GB/$20/年、6 GB/$60/年、无限/$120/年，地区限制与到期日官方未说明。",
            "category": "论文工具 / 长期免费",
            "source": {
              "name": "Zotero 官方存储页面",
              "published": "官方未说明",
              "url": "https://www.zotero.org/support/storage"
            }
          },
          {
            "event": "Overleaf Free 与每日 AI 额度",
            "summary": "Overleaf 官方提供无需付费的 Free 计划，支持无限项目、每项目 1 名协作者，并提供基本 AI 工具每天 5 次用量。",
            "howTo": "在 Overleaf 注册账号选择 Free 计划，创建 LaTeX 项目并邀请一名协作者；需要研究写作或公式时可按页面规则使用基本 AI。",
            "impact": "适合本科和研究生论文、课程报告、毕业设计与多人版本协作；仍需检查编译与语法，不可将生成文本直接当作原创成果。",
            "free": "官方列明免费计划、无限项目、每项目 1 位协作者、基本 AI 每天 5 次；地区限制和具体到期日官方未说明。",
            "category": "论文工具 / 免费编程",
            "source": {
              "name": "Overleaf 官方定价页",
              "published": "官方未说明",
              "url": "https://www.overleaf.com/user/subscription/plans"
            }
          },
          {
            "event": "Google Colab 免费托管 Notebook",
            "summary": "Google 官方提供无需本地配置的免费 Colab Jupyter Notebook，可连接 Google Drive、GitHub，并提供受限的 GPU 或 TPU 计算资源。",
            "howTo": "访问 colab.research.google.com 新建 Notebook，运行 Python 代码并可在 Runtime 菜单选择 GPU 或 TPU；保存到 Drive 或 GitHub。",
            "impact": "适合数据分析、机器学习和可复现作业，尤其适合没有高性能本机的学生。",
            "free": "官方明确免费，但资源不保证、不无限制且配额会波动；地区、硬件可用性、运行时上限官方未统一说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn 无成本课程",
            "summary": "Kaggle 官方提供 Python、Pandas、数据可视化和机器学习等免费交互课程，课程可在浏览器内完成。",
            "howTo": "登录 Kaggle，进入 Learn 页面选择课程，在在线 Notebook 完成练习并保存作品。",
            "impact": "适合补足编程、数据清洗、机器学习和可视化基础，并形成可复现的课程项目。",
            "free": "官方称课程无成本；证书、配额、地区和截止日官方未统一说明。",
            "category": "免费课程 / 练习",
            "source": {
              "name": "Kaggle 官方 Learn 页面",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "How tariffs, fuel and fertilizer costs are squeezing the U.S.'s biggest apple region",
            "source": "NPR",
            "published": "2026-11-24",
            "url": "https://www.npr.org/sections/the-picture-show/2026/11/24/g-s1-154620/how-high-costs-are-squeezing-apple-producers",
            "readingTime": 9,
            "topic": "economics",
            "summary": "文章以华盛顿州苹果产业为例，说明劳动力、燃料、肥料和设备成本上升，叠加强美元与国际关税削弱出口购买力，正把数千英亩果园推向间伐、休耕甚至破产。作者先用种植者半弃耕和木屑覆盖的场景建立具体危机，再引用行业协会估计、美国农业普查和企业案例进行数据与机制解释。文章还区分短期补贴与结构性压力：2025年底的联邦付款主要面向大宗作物，对水果蔬菜等特色作物帮助有限；私募资本收购又可能压缩小型农场的竞争空间。结论并非简单归因于一种政策，而是展示成本、汇率、贸易、劳动力制度和农业集中化如何共同重塑家庭农场。",
            "reason": [
              "主题属于农业、贸易、汇率和家庭企业，贴近考研英语中的经济结构、政策效果与社会公平议题。",
              "文章采用场景描写、行业数据、政策解释、历史对比和个体经历的混合结构，适合主旨、例证和因果题。",
              "可考查 tariffs、strong dollar、input costs、subsidies、family-run farms 等术语在实际经济语境中的作用。",
              "squeeze、hemorrhaging dollars、break even、unprecedented 和 market concentration 等词汇适合表达产业压力与政策分析。",
              "写作可借鉴先用具体个案引入，再用数据和政策机制扩展，最后避免把复杂危机归因于单一变量。"
            ],
            "vocabulary": [
              {
                "word": "tariff",
                "phonetic": "/ˈtærɪf/",
                "part": "n.",
                "translation": "关税；进口税"
              },
              {
                "word": "input cost",
                "phonetic": "/ˈɪnpʊt kɒst/",
                "part": "n.",
                "translation": "投入成本"
              },
              {
                "word": "exports",
                "phonetic": "/ˈekspɔːts/",
                "part": "n.",
                "translation": "出口；出口量"
              },
              {
                "word": "squeeze",
                "phonetic": "/skwiːz/",
                "part": "v./n.",
                "translation": "挤压；使处境艰难"
              },
              {
                "word": "subsidy",
                "phonetic": "/ˈsʌbsədi/",
                "part": "n.",
                "translation": "补贴；津贴"
              },
              {
                "word": "break even",
                "phonetic": "/breɪk ˈiːvən/",
                "part": "phr.",
                "translation": "收支平衡"
              },
              {
                "word": "acreage",
                "phonetic": "/ˈeɪkərɪdʒ/",
                "part": "n.",
                "translation": "面积；耕地面积"
              },
              {
                "word": "market concentration",
                "phonetic": "/ˌmɑːrkɪt kɑːnsənˈtreɪʃən/",
                "part": "n.",
                "translation": "市场集中度"
              },
              {
                "word": "family-run",
                "phonetic": "/ˈfæməli rʌn/",
                "part": "adj.",
                "translation": "家庭经营的"
              },
              {
                "word": "structural pressure",
                "phonetic": "/ˈstrʌktʃərəl ˈpreʃər/",
                "part": "n.",
                "translation": "结构性压力"
              }
            ],
            "sentences": [
              {
                "original": "It cost this fifth-generation apple farmer less to leave it unplanted and weedy than to plant another orchard or crop.",
                "analysis": [
                  "句子主干是 it cost less to leave ... than to plant ...，比较休耕和继续种植的成本。",
                  "fifth-generation apple farmer 通过家庭传承突出个人决策背后的长期产业变化。",
                  "leave it unplanted and weedy 的并列不定式表示被动休耕后的状态。",
                  "than 引入对比，揭示经济成本已改变农业经营选择。",
                  "该句可用于因果和例证题，说明产业压力如何具体影响个体行为。"
                ],
                "translation": "对这位第五代苹果种植者来说，让土地荒芜生草反而比继续种植果园或作物更省钱。"
              },
              {
                "original": "He estimated thousands of acres of apple orchards across the Northwest are being rapidly torn out.",
                "analysis": [
                  "主句是 he estimated，后接 thousands of acres are being rapidly torn out 的被动结构。",
                  "thousands of acres 是宏观量词，为个人场景提供产业规模证据。",
                  "across the Northwest 限定地理范围，避免把局部现象描述为全国全部。",
                  "being rapidly torn out 强调果园正在被持续移除而不是一次性个案。",
                  "该句适合改写为主谓一致清楚的数据型事实句。"
                ],
                "translation": "他估计，西北地区已有数千英亩苹果园正在被迅速拔除。"
              },
              {
                "original": "The Pacific Northwest has lost an unprecedented number of tree fruit farms in recent years.",
                "analysis": [
                  "主语是 the Pacific Northwest，谓语是 has lost，采用现在完成时概括近期变化。",
                  "an unprecedented number of 是程度修饰词，强调农场减少的规模前所未见。",
                  "tree fruit farms 指苹果、梨和樱桃等特色果园，而非所有农业用地。",
                  "in recent years 是时间状语，限定结论发生在近期趋势中。",
                  "该句适合改写为产业结构和地区经济变化的事实概括。"
                ],
                "translation": "近年来，太平洋西北地区失去了数量空前的树果农场。"
              }
            ]
          },
          {
            "title": "Life expectancy in Cuba falls for first time since 1950 amid economic crisis",
            "source": "The Guardian",
            "published": "2026-11-24",
            "url": "https://www.theguardian.com/world/2026/nov/24/cuba-life-expectancy-decline",
            "readingTime": 7,
            "topic": "health",
            "summary": "文章报道古巴预期寿命由 2020 年的 78.8 岁降至 2025 年的 74.4 岁，这是自 1950 年以来首次下降，并以婴儿死亡率、孕产妇死亡率和儿童癌症生存率恶化佐证公共卫生危机。WHO 总干事将现状归因于经济危机、燃料封锁和内部结构问题，同时报道了古巴政府正在推动市场化改革。文章指出燃料封锁自今年早些时候实施，叠加长期贸易禁运，使公共服务濒临崩溃；援助主要用于儿童疫苗和医疗设备。整体论证结构是数据诊断、体制解释、政策回应和不确定展望。",
            "reason": [
              "主题涉及公共卫生、经济制裁、政府改革和社会公平，属于考研英语常考的多因素社会问题。",
              "文章以数据开头，再引入官方诊断、政策背景和援助措施，适合主旨题、态度题和事实细节题。",
              "可考查 life expectancy、mortality、sanctions、economic reform 等词汇及其在跨学科语境中的关系。",
              "predate、crippling、grim picture、market-led reforms 等表达体现正式新闻与分析文体。",
              "写作可借鉴用系列量化指标说明危机，再区分外部制约与内部改革，避免将结果简单归因于单一因素。"
            ],
            "vocabulary": [
              {
                "word": "life expectancy",
                "phonetic": "/laɪf ɪkˈspektənsi/",
                "part": "n.",
                "translation": "预期寿命"
              },
              {
                "word": "mortality",
                "phonetic": "/mɔːrˈtæləti/",
                "part": "n.",
                "translation": "死亡率"
              },
              {
                "word": "crippling",
                "phonetic": "/ˈkrɪplɪŋ/",
                "part": "adj.",
                "translation": "严重削弱的；具有破坏性的"
              },
              {
                "word": "sanction",
                "phonetic": "/ˈsæŋkʃn/",
                "part": "n.",
                "translation": "制裁"
              },
              {
                "word": "survival rate",
                "phonetic": "/sərˈvaɪvəl reɪt/",
                "part": "n.",
                "translation": "存活率"
              },
              {
                "word": "predate",
                "phonetic": "/priːˈdeɪt/",
                "part": "v.",
                "translation": "早于；先于"
              },
              {
                "word": "market-led",
                "phonetic": "/ˌmɑːrkɪt ˈled/",
                "part": "adj.",
                "translation": "由市场主导的"
              },
              {
                "word": "public health",
                "phonetic": "/ˌpʌblɪk ˈhelθ/",
                "part": "n.",
                "translation": "公共卫生"
              },
              {
                "word": "vaccine",
                "phonetic": "/vækˈsiːn/",
                "part": "n.",
                "translation": "疫苗"
              },
              {
                "word": "economic reform",
                "phonetic": "/ˌiːkəˈnɑːmɪk rɪˈfɔːrm/",
                "part": "n.",
                "translation": "经济改革"
              }
            ],
            "sentences": [
              {
                "original": "Life expectancy has fallen for the first time in Cuba since 1950.",
                "analysis": [
                  "主干是 life expectancy has fallen，采用现在完成时表示历史趋势变化并延续至今。",
                  "for the first time is a duration and timing phrase, emphasizing the unprecedented nature of the decline.",
                  "since 1950 is a starting-time modifier, giving a very long historical comparison.",
                  "in Cuba限定地域，避免把古巴数据套用于其他国家。",
                  "该句适合作为摘要句，先陈述核心事实再加入原因。"
                ],
                "translation": "古巴预期寿命自 1950 年以来首次下降。"
              },
              {
                "original": "The blockade, which builds on a six-decade US trade embargo, sharply accelerated the worst crisis.",
                "analysis": [
                  "主句的主语是 the blockade，谓语是 accelerated。",
                  "which builds on a six-decade US trade embargo 是非限制性定语从句，说明封锁建立在长期禁运之上。",
                  "sharply 是程度副词，强调危机加速的速度。",
                  "the worst crisis in decades 是名词短语，限定其严重程度和历史尺度。",
                  "该句适合分析外部政策如何加剧既有国内危机。"
                ],
                "translation": "这次封锁建立在长达六十年的美国贸易禁运基础上，使数十年来最严重的危机急剧恶化。"
              },
              {
                "original": "Tedros linked the health situation to the sanctions but also referred to internal problems.",
                "analysis": [
                  "主句是 Tedros linked ... but also referred to，使用并列谓语呈现多重解释。",
                  "first clause emphasizes external sanctions as one causal factor.",
                  "second clause introduces internal problems, indicating that the speaker does not offer a single-cause account.",
                  "the health situation 是范围限定词，避免将制裁与所有经济问题直接等同。",
                  "该句适合归纳作者或人物的观点，并指出多因素立场。"
                ],
                "translation": "泰德罗斯将卫生状况与制裁联系起来，但也提到了内部问题。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-24",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦 GitHub 仓库协作、代码质量与安全扫描的新变化，以及可立即用于学生项目和课程练习的免费资源。",
        "updates": [
          {
            "event": "GitHub 仓库看板支持细化 Issue 状态",
            "summary": "GitHub 于 2026-11-23 推出 Issue 状态和仓库看板公共预览：用户可为 Issue 设置 Backlog、Todo、In progress、In review、Done 等状态，并在看板中筛选和拖动进度。",
            "howTo": "在启用的仓库中创建或打开 Issue，在 Issue 标题旁选择状态；仓库 Saved views 中切换到 board layout，再按状态分组并拖动 Issue。",
            "impact": "学生团队可在课程项目中区分待办、审核和完成阶段，结合项目看板向老师或队友说明当前阻塞点；仍需自行确认预览功能是否对组织和账户开放。",
            "free": "官方称功能处于公共预览。是否包含在个人账号、地区和具体计划中，以及是否产生额外费用，官方未说明。",
            "category": "协作效率",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-23",
              "url": "https://github.blog/changelog/2026-11-23-issue-statuses-and-repository-boards-are-in-public-preview"
            }
          },
          {
            "event": "GitHub Secret Scanning 降低 Slack 告警误报",
            "summary": "GitHub 于 2026-11-23 改进 Slack 密钥扫描：Slack incoming webhook 检测会排除不符合 Slack 入站 Webhook URL 格式的地址，减少误报。",
            "howTo": "在仓库 Settings > Security 中启用 Secret scanning 和对应安全提醒；收到 Slack incoming webhook 告警时，核对秘密类型、仓库位置和是否为真实密钥。",
            "impact": "学生维护课程项目或协作仓库时，可减少无效 Slack URL 提醒，把时间用于轮换真正泄露的 Webhook；泄露密钥仍应立即撤销并检查提交历史。",
            "free": "官方未说明该扫描改进适用于哪些计划、地区或仓库类型，也未说明是否可能产生额外费用。",
            "category": "仓库安全",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-23",
              "url": "https://github.blog/changelog/2026-11-23-secret-scanning-reduces-false-positives-for-slack"
            }
          },
          {
            "event": "GitHub 代码覆盖上传会拒绝错误报告格式",
            "summary": "GitHub 于 2026-11-23 更新 upload-code-coverage Action：上传内容必须是 Cobertura XML；若格式不符，Actions 日志会明确报错并停止上传，而不是让错误报告看似上传成功。",
            "howTo": "配置测试框架生成 Cobertura XML，并在 Actions 工作流中传给 upload-code-coverage；若上传失败，按日志提示修正报告格式后重新运行工作流。",
            "impact": "课程项目可更早发现覆盖率报告未被处理的问题，避免合并请求和代码质量页面出现虚假的零覆盖或成功状态；仍需检查覆盖率阈值是否合理。",
            "free": "官方说明该变化适用于 GitHub Enterprise Cloud 和 GitHub Team，包括数据驻留实例，不适用于 Enterprise Server；个人账号、地区和配额官方未说明。",
            "category": "代码质量 / CI",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-23",
              "url": "https://github.blog/changelog/2026-11-23-code-coverage-uploads-now-flag-invalid-report-formats"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页提供 Copilot Free；个人用户无需信用卡，可获得每月 2,000 次代码补全以及有限聊天和代理使用。",
            "howTo": "打开 GitHub Copilot 计划页选择 Free，再在 GitHub 网页、支持的编辑器或 CLI 中登录并启用 Copilot。",
            "impact": "可用于课程项目中的代码补全、调试和代理式修改练习；应运行测试并审查生成差异。",
            "free": "官方列明 $0 月费、无需信用卡、每月 2,000 次代码补全；聊天与代理配额、地区限制和重置规则官方未统一说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "GitHub Student Developer Pack：学生工具权益包",
            "summary": "GitHub Education 面向已验证学生提供开发工具、云资源、课程和合作伙伴权益；具体合作项目会变化。",
            "howTo": "登录 GitHub，访问 Student Developer Pack 页面提交在校证明并完成验证；逐项领取并阅读合作伙伴资格、地区和到期条款。",
            "impact": "可用于搭建课程网站、完成开源项目和练习云端部署；领取前应核对实际权益、本人资格和合作方剩余期限。",
            "free": "官方未统一列出所有权益的价格、配额、地区或截止日；具体资格和限制以各领取页及合作伙伴条款为准。",
            "category": "学生教育 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 运行时",
            "summary": "Google 官方提供无需本地配置的免费 Colab Notebook，支持 Python、GPU 或 TPU 资源以及与 Google Drive、GitHub 的连接。",
            "howTo": "在 colab.research.google.com 创建或上传 Notebook，选择所需运行时并保存副本；先用浏览器运行课程代码，再按需挂载 Drive 或导入 GitHub。",
            "impact": "适合数据分析、机器学习和可复现作业，尤其适合没有高性能本机的学生；应避免长时间占用和不合政策的计算任务。",
            "free": "官方明确免费提供托管 Notebook 和部分计算资源，但资源不保证、不无限制且配额可能波动；地区、GPU/TPU 可用性和运行时上限官方未统一说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn：免费课程与实践练习",
            "summary": "Kaggle 官方课程页面提供面向 Python、数据可视化、Pandas 等主题的免费、交互式课程和即时练习。",
            "howTo": "登录 Kaggle，进入 Learn 页面选择课程，在浏览器 Notebook 中完成教程和练习；可保存作品并用于课程或竞赛项目。",
            "impact": "适合补足编程、数据清洗、机器学习和可视化基础，并以可复现案例为作品集。",
            "free": "官方页面称课程无成本；具体证书、地区、账号要求、配额和截止日官方未说明。",
            "category": "免费课程 / 练习",
            "source": {
              "name": "Kaggle 官方 Learn 页面",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "Gemini API Free Tier：可用免费额度调用 Gemini 模型",
            "summary": "Google AI Studio 官方定价页列出部分 Gemini 模型和服务的 Free Tier，部分生产级或高阶模型不提供免费层。",
            "howTo": "在 Google AI Studio 登录并获取 API Key，先从定价页确认所选模型是否标记 Free Tier，再在课程原型中测试最小请求并监控配额。",
            "impact": "可用于制作文本、图像或自动化的课程原型，而不必先购买 API 额度；仍需检查所用模型、地区、调用限制和数据用途。",
            "free": "官方列出 Free Tier，但具体每个模型的 RPM、TPM、RPD 和地区资格因模型而异，部分 Gemini 4 模型明确不在免费层；该页面未统一给出所有账户的固定配额。",
            "category": "免费 API / 学习原型",
            "source": {
              "name": "Google AI Studio 官方定价页",
              "published": "官方未说明",
              "url": "https://aistudio.google.com/docs/pricing"
            }
          },
          {
            "event": "DeepSeek-R1-Distill-Qwen-7B：MIT 协议开源权重",
            "summary": "DeepSeek 官方组织在 Hugging Face 发布 7B 蒸馏模型权重，并在模型卡中明确模型权重和代码仓库使用 MIT License，基础分发权重仍需遵守原始许可证说明。",
            "howTo": "在 Hugging Face 模型页查看许可证与运行要求，再使用支持 Transformers 的环境下载权重；先用小规模推理测试并保存对输入、输出和许可证的记录。",
            "impact": "适合学生在本机或自建服务器中实验推理模型、微调流程和作业可复现性；部署时应核对衍生权重与底座模型的许可证义务及硬件要求。",
            "free": "官方模型卡列明 MIT License，并提供公开下载；可用地区、运行配额、商业用途限制和硬件成本官方未统一说明。",
            "category": "开源模型权重",
            "source": {
              "name": "Hugging Face — DeepSeek 官方组织",
              "published": "官方未说明",
              "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Ebikes, screens and failing manners pose challenge for Dutch cycling culture",
            "source": "The Guardian",
            "published": "2026-11-24",
            "url": "https://www.theguardian.com/world/2026/nov/24/ebikes-screens-and-failing-manners-pose-challenge-for-dutch-cycling-culture",
            "readingTime": 8,
            "topic": "culture",
            "summary": "文章以荷兰自行车文化面临电动自行车、手机使用和骑行礼让下降为核心，说明快速变化的交通结构正在压缩历史悠久的自行车通道。作者先提供荷兰 2.3 万英里自行车道、骑行死亡人数上升以及各类电动车涌入的背景，再介绍海牙、莱顿等地的新规和公共宣传。文章在呈现冲突时没有将责任完全归于骑行者：一方面，居民和研究者认为不同车辆、药物使用、手机分心和个人主义使“交通团队精神”变弱；另一方面，专家指出汽车和卡车仍占用公共空间并造成更严重伤害。结论是安全需由基础设施、行为规范、公共教育和对不同车辆的区分共同承担，而不能只用刻板标签处理问题。",
            "reason": [
              "主题属于文化变迁、城市治理与公共健康，贴近考研英语常见的社会结构和生活方式议题。",
              "文章采用问题背景、地方政策、证人意见、反方证据和政策结论的完整论证结构，适合主旨和例证题。",
              "可考查交通事故数据、骑行文化变化、因果关系以及“交通是团队运动”这一隐喻，避免把个案误作全体结论。",
              "civility、infrastructure、stereotype、micromobility 和 empathy 等词汇适合积累抽象讨论与城市治理表达。",
              "写作可借鉴先列数据，再平衡多方责任，最后提出兼顾安全、健康和公平的综合方案。"
            ],
            "vocabulary": [
              {
                "word": "civility",
                "phonetic": "/sɪˈvɪləti/",
                "part": "n.",
                "translation": "礼貌；文明；公共生活中的相互尊重"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəˌstrʌktʃər/",
                "part": "n.",
                "translation": "基础设施"
              },
              {
                "word": "distraction",
                "phonetic": "/dɪˈstrækʃn/",
                "part": "n.",
                "translation": "分心；干扰"
              },
              {
                "word": "empathy",
                "phonetic": "/ˈempəθi/",
                "part": "n.",
                "translation": "共情；移情"
              },
              {
                "word": "micromobility",
                "phonetic": "/ˌmaɪkroʊmoʊˈbɪləti/",
                "part": "n.",
                "translation": "微型出行；轻型可移动交通方式"
              },
              {
                "word": "collision",
                "phonetic": "/kəˈlɪʒn/",
                "part": "n.",
                "translation": "碰撞；冲突"
              },
              {
                "word": "stereotype",
                "phonetic": "/ˈsteriətaɪp/",
                "part": "n.",
                "translation": "刻板印象"
              },
              {
                "word": "scapegoat",
                "phonetic": "/ˈskeɪpɡoʊt/",
                "part": "n.",
                "translation": "替罪羊"
              },
              {
                "word": "ageing population",
                "phonetic": "/ˈeɪdʒɪŋ ˌpɒpjəˈleɪʃn/",
                "part": "n. phr.",
                "translation": "人口老龄化"
              },
              {
                "word": "public space",
                "phonetic": "/ˈpʌblɪk speɪs/",
                "part": "n. phr.",
                "translation": "公共空间"
              }
            ],
            "sentences": [
              {
                "original": "Less space, more conflict, less civility and more collisions.",
                "analysis": [
                  "句子由四个名词短语构成，省略谓语形成高度概括的列举。",
                  "Less space 与 more conflict 构成因果暗示：拥挤资源可能引发冲突。",
                  "less civility 和 more collisions 将社会行为与交通安全并列。",
                  "parallelism through repeated “less/more” creates a concise, forceful judgment.",
                  "该句可用于概括复杂问题，适合写作中的破题或小结。"
                ],
                "translation": "空间更少，冲突更多，文明礼让更少，碰撞事故更多。"
              },
              {
                "original": "Traffic is a team sport, and everyone has to look out for one another.",
                "analysis": [
                  "句子主干是 traffic is a team sport，借用团队运动隐喻交通共享。",
                  "team sport 将道路参与者定义为互相依赖的共同体，而非孤立用户。",
                  "and 引出第二个分句，进一步将隐喻转化为具体行为。",
                  "look out for one another 表达相互关照，是本句的修辞落点。",
                  "该句适合用于公共规则、社会责任和公共健康类写作。"
                ],
                "translation": "交通是一项团队运动，每个人都必须照顾彼此。"
              },
              {
                "original": "Cars and trucks are still taking up the majority of public space and causing the most harm.",
                "analysis": [
                  "主语 cars and trucks 由 and 并列，谓语包含 taking up 和 causing 两个主动动作。",
                  "taking up the majority of public space 是相对程度的事实判断。",
                  "and 连接占用空间和造成伤害两个结果，强调汽车交通仍是主要风险来源。",
                  "this statement balances the criticism of cyclists with evidence about larger vehicles.",
                  "该句可用于让步后反驳，说明不能把责任只归于一种交通参与者。"
                ],
                "translation": "汽车和卡车仍占用大部分公共空间，并造成最大程度的伤害。"
              }
            ]
          },
          {
            "title": "Timms report to suggest faster Pip payments for some disabled people",
            "source": "BBC News",
            "published": "2026-11-24",
            "url": "https://www.bbc.co.uk/news/articles/cvx2xjed2r3ro",
            "readingTime": 9,
            "topic": "society",
            "summary": "文章报道英国 Timms Review 即将建议改革个人独立支付（Pip），让病情最严重和患绝症的申请人获得更快付款，同时减少不必要的再评估。报道指出政府本年度拟支出 321 亿英镑，预测至 2030—31 年将升至 415 亿英镑，因此改革既涉及公平，也涉及财政可持续性。残疾人组织原则上欢迎更少评估和更可靠的现金支持，但部分智库认为仍需控制长期支出并更准确理解申请人的额外成本。文章还引用残疾申请人的经历说明，当前评估过程令她感到陌生、紧张和被审查，改革应以真实需求和信任为起点。结论是提速和简化评估可能改善处境，但具体标准、持续复核与财政约束仍需透明设计。",
            "reason": [
              "主题涉及福利公平、残疾权益、公共财政和社会治理，贴近考研英语社会政策和公共服务议题。",
              "文章采用政策建议、支出数据、利益相关方意见和个案经历的递进结构，适合主旨和态度题。",
              "可考查 claims、costs、means-testing、reassessment 和 support 之间的逻辑关系，以及专家与当事人引语的区分。",
              "burdensome、persistent、means-tested、devolve 和 sustainable 等词汇适合积累福利与财政表达。",
              "写作可借鉴提出改革后用数据限定、用个案补充并用反方顾虑平衡论证。"
            ],
            "vocabulary": [
              {
                "word": "benefit",
                "phonetic": "/ˈbenɪfɪt/",
                "part": "n.",
                "translation": "福利；救济金"
              },
              {
                "word": "assessment",
                "phonetic": "/əˈsesmənt/",
                "part": "n.",
                "translation": "评估；鉴定"
              },
              {
                "word": "persistent",
                "phonetic": "/pərˈsɪstənt/",
                "part": "adj.",
                "translation": "持续存在的；持久的"
              },
              {
                "word": "burdensome",
                "phonetic": "/ˈbɜːrdnsəm/",
                "part": "adj.",
                "translation": "繁重的；有负担的"
              },
              {
                "word": "means-tested",
                "phonetic": "/miːnz ˈtestɪd/",
                "part": "adj.",
                "translation": "按经济状况调查资格的"
              },
              {
                "word": "reassessment",
                "phonetic": "/ˌriːəˈsesmənt/",
                "part": "n.",
                "translation": "重新评估"
              },
              {
                "word": "devolve",
                "phonetic": "/dɪˈvɑːlv/",
                "part": "v.",
                "translation": "（权力、责任）下放；移交"
              },
              {
                "word": "sustainable",
                "phonetic": "/səˈsteɪnəbl/",
                "part": "adj.",
                "translation": "可持续的"
              },
              {
                "word": "eligible",
                "phonetic": "/ˈelɪdʒəbl/",
                "part": "adj.",
                "translation": "有资格的"
              },
              {
                "word": "incur",
                "phonetic": "/ɪnˈkɜːr/",
                "part": "v.",
                "translation": "招致；承担（费用）"
              }
            ],
            "sentences": [
              {
                "original": "Those with the most severe and persistent conditions would be fast-tracked with no further assessments involved.",
                "analysis": [
                  "主语 those with ... conditions 指病情最严重且持续的申请人。",
                  "would be fast-tracked 是被动语态，说明提速是政策建议而非已生效事实。",
                  "with no further assessments involved 使用介词结构补充取消重复评估的结果。",
                  "severe and persistent are coordinated modifiers defining eligibility clearly.",
                  "该句适合练习政策设计中的资格限定和被动表达。"
                ],
                "translation": "病情最严重且持续的人将被快速处理，不再需要进一步评估。"
              },
              {
                "original": "It is understood not to suggest major savings, despite the benefit cost being projected to more than double.",
                "analysis": [
                  "it is understood 为被动引述，表示记者依据相关人士的信息进行报道。",
                  "not to suggest major savings 是真实主语从句的核心否定内容。",
                  "despite 引出让步：福利支出预计翻倍，却未提出大幅节省。",
                  "the benefit cost being projected to more than double is a participial clause.",
                  "该句可用于读懂政策改革与财政压力之间的张力。"
                ],
                "translation": "据了解，该方案并不建议大幅削减支出，尽管福利成本预计将翻倍以上。"
              },
              {
                "original": "Trust disabled people to know what their needs are, and build the system from that starting point.",
                "analysis": [
                  "两个祈使动词 trust 和 build 并列，构成清晰的政策呼吁。",
                  "disabled people are the agent whose knowledge and needs should guide policy.",
                  "what 引导 know 的宾语从句，强调申请人的需求识别。",
                  "from that starting point indicates a value-based reform sequence.",
                  "该句适合用于福利政策写作中的以人为本论证。"
                ],
                "translation": "相信残疾人知道自己的需求，并从这一起点出发构建制度。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-23",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦 GitHub 仓库协作与桌面认证的新变化，以及可立即用于学生项目和课程练习的免费资源。",
        "updates": [
          {
            "event": "GitHub 安全公告权限正式可用",
            "summary": "GitHub 于 2026-11-20 正式开放安全公告权限，组织可通过自定义仓库角色精细授权查看、安全公告管理、私有漏洞报告和 CVE 发布等操作，无需将成员设为仓库管理员。",
            "howTo": "组织所有者在 Enterprise Cloud 等支持自定义仓库角色的组织中创建或编辑角色，在 Security 下勾选所需权限，再只分配给具体仓库中的用户或团队。",
            "impact": "学生可在课程团队或开源项目中按最小权限分配安全工作，练习漏洞报告、协作修复和 CVE 流程，但合并临时私有分支仍需管理员或安全管理员。",
            "free": "官方称该能力适用于支持自定义仓库角色的计划（包括 GitHub Enterprise Cloud）；是否可用于个人账户、地区限制、配额和额外费用官方未说明。",
            "category": "仓库安全 / 权限",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-20",
              "url": "https://github.blog/changelog/2026-11-20-security-advisory-permissions-are-now-generally-available"
            }
          },
          {
            "event": "GitHub 仪表盘支持固定常用仓库",
            "summary": "GitHub 于 2026-11-20 为仪表盘新增 Favorite repositories 区域，可搜索、选择、保存和取消常用仓库，并与 GitHub Mobile 的固定仓库同步。",
            "howTo": "在启用新版仪表盘的 GitHub 页面中打开 Dashboard，选择 Edit 或 Add repositories，搜索并勾选仓库后保存；修改也会同步到 GitHub Mobile。",
            "impact": "学生可把课程项目、复现仓库和作业仓库固定在一起，减少在大型组织或多仓库环境中的切换成本；最多可跨页面和移动端固定 25 个仓库。",
            "free": "官方未说明该功能是否覆盖全部账号类型、地区和计划；保存上限为 25 个仓库，是否产生费用官方未说明。",
            "category": "协作效率",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-20",
              "url": "https://github.blog/changelog/2026-11-20-pin-your-favorite-repositories-to-your-dashboard"
            }
          },
          {
            "event": "GitHub Desktop 支持同一主机登录多个账户",
            "summary": "GitHub 于 2026-11-19 发布 GitHub Desktop 3.7.0，允许在同一主机上为 GitHub.com、GitHub Enterprise Server 和 GHE.com 管理多个账户，并将仓库与指定账户关联。",
            "howTo": "下载 GitHub Desktop 3.7.0，进入 Settings/Options > Accounts 添加账户；克隆、发布或查看仓库时在账户选择器中指定身份，也可在仓库设置或右键菜单中更改关联。",
            "impact": "学生可将个人学习仓库和学校或组织账户分开，避免提交到错误账户或仓库；应在提交前检查远程地址、作者信息和当前账户关联。",
            "free": "官方未说明是否存在地区限制、配额或计划限制；桌面端支持无固定账户数量上限，具体托管主机与账号权限以实际登录结果为准。",
            "category": "开发工具 / 多账户",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-19",
              "url": "https://github.blog/changelog/2026-11-19-github-desktop-now-supports-multiple-accounts-per-host"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月 2,000 次代码补全",
            "summary": "GitHub 官方计划页提供 Copilot Free；个人用户无需信用卡，可获得每月 2,000 次代码补全以及有限聊天和代理使用。",
            "howTo": "打开 GitHub Copilot 计划页选择 Free，再在 GitHub 网页、支持的编辑器或 CLI 中登录并启用 Copilot。",
            "impact": "可用于课程项目中的代码补全、调试和代理式修改练习；应运行测试并审查生成差异。",
            "free": "官方列明 $0 月费、无需信用卡、每月 2,000 次代码补全；聊天与代理配额、地区限制和重置规则官方未统一说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "GitHub Codespaces：个人账户每月 60 小时免费运行",
            "summary": "GitHub 官方提供个人账户免费云端开发环境；免费额度包含每月 120 核心小时和 15 GB 存储，按 2 核环境折算为约 60 小时运行时间。",
            "howTo": "登录个人 GitHub 账户，在仓库或模板中选择 Code > Codespaces > Create codespace；个人账户默认可用，组织须由管理员启用且可能单独计费。",
            "impact": "适合在浏览器或本地 VS Code 中完成课程项目、打开拉取请求和准备统一开发环境，避免逐台配置依赖。",
            "free": "官方列明个人账户每月 120 核心小时、按 2 核折算约 60 小时及 15 GB 存储；地区和其他运行时限制官方未统一说明，超额可能产生组织或个人用量费用。",
            "category": "免费云端编程",
            "source": {
              "name": "GitHub Codespaces 官方页面",
              "published": "官方未说明",
              "url": "https://github.com/features/codespaces"
            }
          },
          {
            "event": "Hugging Face Static/CPU Basic 空间长期免费入口",
            "summary": "Hugging Face 官方说明 Static Spaces 对所有人免费；默认 CPU Basic 为 2 vCPU、16 GB 内存、50 GB 临时磁盘且标价为 $0，适合部署静态或轻量演示。",
            "howTo": "登录 Hugging Face，打开 Spaces 页面并创建 Space；Static 项目可直接免费使用，轻量 Gradio 或 Docker 演示需确认当前账号和 ZeroGPU 条款。",
            "impact": "可用于展示课程模型、论文可视化或翻译和生成工具原型，并能让他人通过公开链接直接试用。",
            "free": "官方列明 CPU Basic 免费且资源为 2 CPU、16 GB 内存、50 GB 磁盘；Gradio 或 Docker 在不符合 ZeroGPU 免费例外时需付费计划，地区、休眠规则和配额官方未统一说明。",
            "category": "免费应用 / 模型演示",
            "source": {
              "name": "Hugging Face 官方 Spaces 文档",
              "published": "官方未说明",
              "url": "https://huggingface.co/docs/hub/spaces-overview"
            }
          },
          {
            "event": "GitHub Student Developer Pack：学生工具权益包",
            "summary": "GitHub Education 面向已验证学生提供工具和合作伙伴权益，包含开发、云资源、课程及 Copilot/Codespaces 等学习入口；具体合作项目会变化。",
            "howTo": "登录 GitHub，访问 Student Developer Pack 页面提交在校证明并完成验证；通过后逐项领取并阅读合作伙伴资格、地区和到期条款。",
            "impact": "可用于搭建课程网站、完成开源项目和练习云端部署；领取前应核对实际权益、本人资格和合作方剩余期限。",
            "free": "官方未统一列出所有权益的价格、配额、地区或截止日；具体资格和限制以各领取页及合作伙伴条款为准。",
            "category": "学生教育 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 运行时",
            "summary": "Google 官方提供无需本地配置的免费 Colab Notebook，支持 Python、GPU 或 TPU 资源以及与 Google Drive、GitHub 的连接。",
            "howTo": "在 colab.research.google.com 创建或上传 Notebook，选择所需运行时并保存副本；先用浏览器运行课程代码，再按需挂载 Drive 或导入 GitHub。",
            "impact": "适合数据分析、机器学习和可复现作业，尤其适合没有高性能本机的学生；应避免长时间占用和不合政策的计算任务。",
            "free": "官方明确免费提供托管 Notebook 和部分计算资源，但资源不保证、不无限制且配额可能波动；地区、GPU/TPU 可用性和运行时上限官方未统一说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Kaggle Learn：免费课程与实践练习",
            "summary": "Kaggle 官方课程页面提供面向 Python、数据可视化、Pandas 等主题的免费、交互式课程和即时练习。",
            "howTo": "登录 Kaggle，进入 Learn 页面选择课程，在浏览器 Notebook 中完成教程和练习；可保存作品并用于课程或竞赛项目。",
            "impact": "适合补足编程、数据清洗、机器学习和可视化基础，并以可复现案例为作品集。",
            "free": "官方页面称课程无成本；具体证书、地区、账号要求、配额和截止日官方未说明。",
            "category": "免费课程 / 练习",
            "source": {
              "name": "Kaggle 官方 Learn 页面",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "COP31 fails to reach major climate deal as talks expose deep divisions",
            "source": "BBC News",
            "published": "2026-11-22",
            "url": "https://www.bbc.co.uk/news/articles/cqwy06zrd26lo",
            "readingTime": 8,
            "topic": "environment",
            "summary": "这篇报道以 COP31 谈判未能达成主要气候协议为核心，说明分歧集中在是否明确提及化石燃料，以及富裕国家如何向较贫穷国家提供适应气候变化的资金。文章先交代谈判超时与各方否决，再呈现欧盟、太平洋岛国、石油生产国和联合国秘书长的不同立场，随后分析此前退出化石燃料承诺、资金承诺缺乏具体数字以及全球升温目标可能被突破等背景。它指出，即使主协议破裂，各方仍在公正转型机制和清洁能源目标上取得有限进展，但联合国气候进程因须达成共识而面临改革压力。结论是气候谈判不仅是技术方案问题，也涉及历史排放责任、经济利益和地缘政治博弈。",
            "reason": [
              "主题属于环境治理、国际合作与气候经济，贴近考研英语常见的全球挑战和政策协调议题。",
              "全文采用问题—分歧—证据—影响—展望结构，适合训练主旨、态度和篇章衔接题。",
              "可能考查化石燃料、气候融资、共识机制及温升目标之间的因果关系，以及代词和转折词的指代。",
              "文章包含 unconscionable、baseline、overshoot、ambitious ramping up 等抽象词汇，适合积累议论文表达。",
              "可用于写作中论证国际治理需要共同责任、可核验承诺和更具包容性的利益协调。"
            ],
            "vocabulary": [
              {
                "word": "division",
                "phonetic": "/dɪˈvɪʒn/",
                "part": "n.",
                "translation": "分歧；分裂"
              },
              {
                "word": "negotiation",
                "phonetic": "/nɪˌɡoʊʃiˈeɪʃn/",
                "part": "n.",
                "translation": "谈判；协商"
              },
              {
                "word": "unacceptable",
                "phonetic": "/ˌʌnəkˈseptəbl/",
                "part": "adj.",
                "translation": "不可接受的"
              },
              {
                "word": "commitment",
                "phonetic": "/kəˈmɪtmənt/",
                "part": "n.",
                "translation": "承诺；保证"
              },
              {
                "word": "ambition",
                "phonetic": "/æmˈbɪʃn/",
                "part": "n.",
                "translation": "雄心；抱负；行动目标"
              },
              {
                "word": "baseline",
                "phonetic": "/ˈbeɪslaɪn/",
                "part": "n.",
                "translation": "基线；参照标准"
              },
              {
                "word": "overshoot",
                "phonetic": "/ˌoʊvəˈʃuːt/",
                "part": "v.",
                "translation": "超过；越过"
              },
              {
                "word": "geopolitical",
                "phonetic": "/ˌdʒiːoʊpəˈlɪtɪkl/",
                "part": "adj.",
                "translation": "地缘政治的"
              },
              {
                "word": "consensus",
                "phonetic": "/kənˈsensəs/",
                "part": "n.",
                "translation": "共识；一致意见"
              },
              {
                "word": "mechanism",
                "phonetic": "/ˈmekənɪzəm/",
                "part": "n.",
                "translation": "机制；装置"
              }
            ],
            "sentences": [
              {
                "original": "The final deal proved unacceptable to the EU, Pacific island nations and others because it failed to directly mention fossil fuels.",
                "analysis": [
                  "句子主干是 The final deal proved unacceptable to the EU, Pacific island nations and others。",
                  "prove 在此为系动词，表示最终协议被证明是不可接受的。",
                  "to 引出不接受协议的对象，构成较清晰的态度宾语。",
                  "because 引导原因从句，核心理由是不直接提及化石燃料。"
                ],
                "translation": "最终协议被欧盟、太平洋岛国及其他国家认为不可接受，因为它没有直接提及化石燃料。"
              },
              {
                "original": "Another major sticking point has been money for poorer countries to adapt to the impacts of climate change.",
                "analysis": [
                  "句子主干是 another major sticking point has been money。",
                  "present perfect 表明资金问题在谈判过程中的持续性和当前重要性。",
                  "for 引出资金所服务的对象，to adapt to 说明资金用途。",
                  "sticking point 是常用名词短语，可用于概括谈判僵局和争议焦点。"
                ],
                "translation": "另一个主要症结一直是向较贫穷国家提供适应气候变化影响的资金。"
              },
              {
                "original": "The UN climate process has suffered setbacks before and come back stronger.",
                "analysis": [
                  "主语是 the UN climate process，谓语由 has suffered 和 come back 两部分构成。",
                  "before 表示过去已有挫折，come back stronger 与 have suffered 形成对比性并列。",
                  "before and come back 构成先后关系，也可概括机构面临危机后的恢复能力。",
                  "stronger 为形容词比较级，暗示挫折可能促成制度改进。"
                ],
                "translation": "联合国气候进程此前也曾遭遇挫折，并且后来变得更强。"
              }
            ]
          },
          {
            "title": "Meet the young authors! A literacy program inspires kids in South Africa",
            "source": "NPR",
            "published": "2026-11-22",
            "url": "https://www.npr.org/2026/11/22/g-s1-154387/books-children-authors-south-africa-literacy",
            "readingTime": 9,
            "topic": "education",
            "summary": "文章报道约翰内斯堡亚历克斯镇的 Read Alex 课外阅读计划如何将儿童从阅读不足引向自主写作和出版。报道首先介绍南非约 81%的 10 岁儿童不能阅读以获取意义这一严峻背景，再描述参与者每周阅读、演讲、拼写和带走图书的活动，随后以 13 岁作者菲奥娜的家庭困境故事说明写作如何提供表达和自我效能。文章还引用儿童、协调员、教师和教育部长，说明社区组织、早期教育投入和政府政策共同构成识字改善的基础。结尾强调，尽管贫困和公共服务不足依然存在，叙事传统、社区支持和可及的阅读空间能够让孩子获得更大的发言权。",
            "reason": [
              "主题属于教育公平、儿童识字、社区治理，贴近考研英语 II 对教育资源和社会支持的常见考查。",
              "文章采用宏观统计、个人案例、专家观点与项目成效的递进结构，适合主旨和例证题。",
              "可能考查研究数据、计划内容、人物态度、因果关系及社区支持的作用。",
              "文本含 literacy crisis、functioning library、grassroots program 和 self-published 等实用学术表达。",
              "可用于写作中论证教育投入、社区参与和个体叙事如何共同减少不平等。"
            ],
            "vocabulary": [
              {
                "word": "literacy",
                "phonetic": "/ˈlɪtərəsi/",
                "part": "n.",
                "translation": "识字；读写能力"
              },
              {
                "word": "township",
                "phonetic": "/ˈtaʊnʃɪp/",
                "part": "n.",
                "translation": "城镇；（南非）黑人居民区"
              },
              {
                "word": "grassroots",
                "phonetic": "/ˈgræsruːts/",
                "part": "adj.",
                "translation": "基层的；草根的"
              },
              {
                "word": "instill",
                "phonetic": "/ɪnˈstɪl/",
                "part": "v.",
                "translation": "逐渐灌输"
              },
              {
                "word": "anthology",
                "phonetic": "/ænˈθɑːlədʒi/",
                "part": "n.",
                "translation": "选集；文选"
              },
              {
                "word": "palpable",
                "phonetic": "/ˈpælpəbl/",
                "part": "adj.",
                "translation": "明显的；可感知的"
              },
              {
                "word": "maturity",
                "phonetic": "/məˈtjʊərəti/",
                "part": "n.",
                "translation": "成熟；完善"
              },
              {
                "word": "community",
                "phonetic": "/kəˈmjuːnəti/",
                "part": "n.",
                "translation": "社区；共同体"
              },
              {
                "word": "functioning",
                "phonetic": "/ˈfʌŋkʃənɪŋ/",
                "part": "adj.",
                "translation": "正常运作的"
              },
              {
                "word": "foundations",
                "phonetic": "/faʊnˈdeɪʃnz/",
                "part": "n.",
                "translation": "基础；根基"
              }
            ],
            "sentences": [
              {
                "original": "South Africa is in the midst of a literacy crisis.",
                "analysis": [
                  "主干是 South Africa is in the midst of a literacy crisis。",
                  "in the midst of 表示正处于某种状态或危机之中。",
                  "a literacy crisis 是抽象名词短语，可用于概括教育或社会问题。",
                  "句子位置靠前，起到以宏观问题引出具体项目的作用。"
                ],
                "translation": "南非正处于一场识字危机之中。"
              },
              {
                "original": "The grassroots program has been trying to change this, offering a weekend reading club.",
                "analysis": [
                  "主干是 the grassroots program has been trying to change this。",
                  "present perfect progressive 表示基层项目持续开展而未必宣称已经解决问题。",
                  "offering 引导现在分词补充说明具体干预方式。",
                  "this 回指前文的识字危机，是典型的代词指代结构。"
                ],
                "translation": "这个基层项目一直在努力改变这种状况，并提供了一个周末阅读俱乐部。"
              },
              {
                "original": "They notice a lot more than they think they do.",
                "analysis": [
                  "主句是 they notice a lot more；than 引出比较对象。",
                  "more 与 they think they do 形成隐含比较，强调儿童观察能力被低估。",
                  "两个 they 的先后指代需结合上下文区分孩子和成人的认知。",
                  "句式适合改写为“人们常低估……所能观察或理解的程度”。"
                ],
                "translation": "他们注意到的东西比他们自己以为的要多得多。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-22",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦 Gemini 在 Mac、跨 AI 聊天迁移和连接应用方面的新增能力，以及 OpenAI 面向药物发现研究的新基准。",
        "updates": [
          {
            "event": "Gemini app for Mac 增加 Computer Use 自动操作",
            "summary": "Google 于 2026-11-19 宣布，Gemini app for Mac 可在隔离窗口中跨本地文件、桌面应用和网页执行自动化任务；用户可描述复杂流程，由 Gemini 处理点击、输入和表单填写。",
            "howTo": "在 Mac 上下载 Gemini app；打开功能后选择需要处理的本地文件、应用或网页任务，授予权限并实时查看预览；敏感操作仍需由用户确认。",
            "impact": "学生可尝试整理下载目录、填写重复表格或在多个网页间收集课程资料，并应先用副本和测试账号验证操作，避免误删文件或提交错误表单。",
            "free": "官方说明该能力已随 Gemini app for Mac 推出；地区、账号层级、使用配额、是否免费或需要付费计划均未统一说明。",
            "category": "AI 桌面 / 自动化",
            "source": {
              "name": "Google Gemini 官方博客",
              "published": "2026-11-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/"
            }
          },
          {
            "event": "Gemini 支持导入其他 AI 应用的聊天记录",
            "summary": "Google 于 2026-11-19 推出将其他 AI 应用聊天历史转入 Gemini 的能力，目的是保留上下文，减少重新解释偏好和过往讨论的工作。",
            "howTo": "在支持的 Gemini 页面或 app 中找到“转移聊天记录”或相关迁移入口，按官方提示导出并上传原平台允许导出的历史；迁移前应检查隐私设置并删除敏感聊天。",
            "impact": "学生可把已整理的选题讨论、复习计划或项目需求带入 Gemini，但应核对迁移后的时间顺序、事实和个人信息，不能默认原聊天中的结论仍然准确。",
            "free": "官方未说明迁移功能的地区范围、账号层级、配额、保存期限或费用限制。",
            "category": "Gemini / 数据迁移",
            "source": {
              "name": "Google Gemini 官方博客",
              "published": "2026-11-19",
              "url": "https://blog.google/innovation-and-ai/products/gemini-app/switch-ai-assistants-transfer-history/"
            }
          },
          {
            "event": "Gemini Connected Apps 面向假期任务联动",
            "summary": "Google 于 2026-11-20 介绍 Gemini 的 Connected Apps 新场景，可把日历、邮箱等个人数据连接到搜索与任务流程中，协助完成行程、礼物和日常安排。",
            "howTo": "在 Gemini 或 Google 产品的 Connected Apps 设置中查看可接入的应用，逐项授权，并用自然语言描述需要检索或执行的任务；先在预览中确认将读取或发送的数据。",
            "impact": "学生可用于整理考试日程、校内活动和旅行清单，但应限制不必要的数据范围，并对任何支付、通知或日历修改进行人工确认。",
            "free": "官方未说明所有 Connected Apps 的地区、账号、配额和付费限制；具体能力以相应应用设置和可用性为准。",
            "category": "Gemini / 个人助手",
            "source": {
              "name": "Google 官方博客",
              "published": "2026-11-20",
              "url": "https://blog.google/products-and-platforms/products/search/connected-apps-holiday-errands/"
            }
          },
          {
            "event": "OpenAI 发布 MedChemBench 药物发现基准",
            "summary": "OpenAI 于 2026-11-20 发布 MedChemBench，用于评估 AI 模型是否能理解分子结构、从实验证据推理并选择早期药物候选。",
            "howTo": "访问 OpenAI 官方页面查看任务与评测说明；研究者可先阅读公开任务设计，在自己的模型评测流水线中复现对应场景，重点核对化学结构和证据来源。",
            "impact": "化学、生命科学和计算机专业学生可借此理解分子推理、证据检索和模型评测的基本要求；不能据此替代实验验证、医学判断或受监管的药物筛选流程。",
            "free": "官方页面是公开阅读与研究资料；是否开放基准运行、所需 API、地区、配额和费用均未说明。",
            "category": "AI 研究 / 科学评测",
            "source": {
              "name": "OpenAI 官方研究页",
              "published": "2026-11-20",
              "url": "https://openai.com/index/introducing-medchembench"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月免费补全",
            "summary": "GitHub 官方计划页提供无需信用卡的 Copilot Free，包含每月代码补全及有限的聊天与代理使用。",
            "howTo": "访问 GitHub Copilot plans，选择或启用 Free，再在受支持编辑器、GitHub 网页或 CLI 中登录使用。",
            "impact": "可用于课程项目中的代码补全、调试和多文件修改练习；应运行测试并审查生成差异。",
            "free": "官方列明每月 2,000 次代码补全、月费为 $0 且无需信用卡；聊天与代理配额、地区、重置规则和到期限制官方未统一说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "GitHub Student Developer Pack：学生开发权益包",
            "summary": "GitHub Education 面向已验证学生提供工具与合作伙伴权益，包括学习资源、开发工具和云端服务；具体权益随合作伙伴和地区变化。",
            "howTo": "登录 GitHub，前往 education.github.com/pack，提交在校证明并等待验证；通过后逐项领取并阅读合作伙伴条款。",
            "impact": "可用于搭建课程网站、完成开源项目或获取开发工具；领取前应核对资格、地区、配额和到期条件。",
            "free": "官方面向学生提供 Developer Pack，但未统一列出所有权益价格、配额、地区或截止日。",
            "category": "学生教育 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Gemini API 免费层",
            "summary": "Google AI Studio 定价页列出部分模型的免费输入输出额度，适合搭建小型原型和模型实验。",
            "howTo": "打开 AI Studio，核对目标模型是否支持 Free，再创建 API Key；先在 Playground 小规模测试，再将调用写入课程项目。",
            "impact": "可用于文本摘要、问答原型和 API 调用练习；应检查项目中的隐私数据、速率限制和付费触发条件。",
            "free": "官方列出各模型不同的免费额度、速率和付费档位；地区、资格、配额和到期规则以定价页与账号所示数据为准。",
            "category": "免费 API",
            "source": {
              "name": "Google AI for Developers 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Kaggle Learn：免费课程与练习",
            "summary": "Kaggle 官方提供可在线完成的免费数据科学微课程和编程练习，不需购买课程来开始学习。",
            "howTo": "登录 Kaggle，进入 Courses/Learn，选择课程并完成互动代码练习；可在浏览器中运行示例，保存 Notebook 作为作品集。",
            "impact": "适合补足 Python、数据清洗、机器学习和可视化基础，并为课程作业或竞赛准备可复现案例。",
            "free": "官方提供免费课程入口；具体证书、地区、账号和配额限制官方未说明。",
            "category": "免费课程 / 练习",
            "source": {
              "name": "Kaggle 官方 Learn 页面",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 运行时",
            "summary": "Google 官方提供免费的浏览器内 Colab Notebook，用于运行 Python、安装包、编辑文档并连接云端资源。",
            "howTo": "访问 Colab，创建 Notebook，按需选择运行时并上传数据；编程前先保存副本并检查共享权限。",
            "impact": "适合做数据分析、机器学习和课程演示，无需本地配置深度学习环境；大量计算或持续运行仍需留意资源限制。",
            "free": "官方说明免费运行时和资源可用性会受限制；具体配额、地区、加速器类型、保留时长和付费升级官方未统一说明。",
            "category": "免费云端编程",
            "source": {
              "name": "Google Colaboratory 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Microsoft Copilot：Microsoft 账户免费网页入口",
            "summary": "Microsoft 官方表示 Copilot 可通过已登录 Microsoft 账户免费使用，并提供研究、回答和内容创建能力；部分高级能力受账号或用量限制。",
            "howTo": "访问 copilot.microsoft.com，使用 Microsoft 账户登录或按页面选择免费入口；先从网页摘要、检索和文本草稿开始，再核对来源。",
            "impact": "可用于文献检索、课程问答和演示稿大纲，但应保存原始链接、核对事实并避免上传未经许可的个人或考试材料。",
            "free": "官方明确提供免费 Microsoft 账户入口；具体地区、配额、高级功能、会话限制和到期规则官方未统一说明。",
            "category": "免费通用助手",
            "source": {
              "name": "Microsoft Copilot 官方页面",
              "published": "官方未说明",
              "url": "https://copilot.microsoft.com/"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "Scientists sequenced a whale's entire genome using drones and whale snot",
            "source": "NPR",
            "published": "2026-11-21",
            "url": "https://www.npr.org/2026/11/21/nx-s1-6044816/scientists-sequenced-a-whales-entire-genome-using-drones-and-whale-snot",
            "readingTime": 5,
            "topic": "environment",
            "summary": "文章报道了科学家利用无人机和专用培养皂盘收集鲸鱼呼气中的生物样本，并由多份单体鲸鱼样本拼合出完整基因组。主张是，这种“吹气采样”相较于传统的穿刺活检侵入性更低：它可获得细菌、病毒、病原体、化学物质、细胞和 DNA 片段，并用于监测个体和种群健康。报道先交代技术方法，再引用海洋哺乳动物生态学家的操作细节，随后请未参与研究的 Woods Hole 科学家评价其意义，并以“打开更安全研究之门”收束全文。结论是方法虽不能完全取代传统验证，却让无创或低侵入式生态研究变得更可行。",
            "reason": [
              "主题属于环境、海洋保护与科研技术，贴近考研英语 II 对环境治理和科学创新的跨学科议题。",
              "正文采用问题—方法—证据—专家评价—结论的清晰叙事结构，适合训练主旨和细节定位。",
              "可能考查无创采样、基因测序和传统活检之间的比较，以及代词、转折和因果关系。",
              "文章含环境研究、健康监测和方法创新等实用词汇，可训练学术阅读中的名词化和动词搭配。",
              "可用于写作中论证新技术如何降低动物保护成本、提高数据质量或平衡科研与伦理。"
            ],
            "vocabulary": [
              {
                "word": "sequence",
                "phonetic": "/ˈsiːkwəns/",
                "part": "v.",
                "translation": "测定序列；排列"
              },
              {
                "word": "genome",
                "phonetic": "/ˈdʒiːnoʊm/",
                "part": "n.",
                "translation": "基因组"
              },
              {
                "word": "sample",
                "phonetic": "/ˈsɑːmpl/",
                "part": "n./v.",
                "translation": "样本；采样"
              },
              {
                "word": "respiratory tract",
                "phonetic": "/rəˈspɪrətri trækt/",
                "part": "n.",
                "translation": "呼吸道"
              },
              {
                "word": "representative",
                "phonetic": "/ˌreprɪˈzentətɪv/",
                "part": "adj.",
                "translation": "具有代表性的"
              },
              {
                "word": "broader",
                "phonetic": "/ˈbrɔːdə(r)/",
                "part": "adj.",
                "translation": "更广泛的"
              },
              {
                "word": "invasive",
                "phonetic": "/ɪnˈveɪsɪv/",
                "part": "adj.",
                "translation": "侵入性的"
              },
              {
                "word": "ground truth",
                "phonetic": "/ˈɡraʊnd truːθ/",
                "part": "n.",
                "translation": "基准事实；实测核验"
              },
              {
                "word": "stressors",
                "phonetic": "/ˈstresərz/",
                "part": "n.",
                "translation": "压力源"
              },
              {
                "word": "albeit",
                "phonetic": "/ɔːlˈbiːɪt/",
                "part": "conj.",
                "translation": "尽管；虽然"
              }
            ],
            "sentences": [
              {
                "original": "Scientists were able to sequence the entire genome of a whale using samples of its snot.",
                "analysis": [
                  "句子主干是 Scientists were able to sequence the entire genome。",
                  "of a whale 限定基因组所属对象，using 引导方式状语。",
                  "entire 是名词 genome 前的修饰语，强调完整测序。",
                  "be able to 表达能力，适合改写为“借助……能够完成……”。"
                ],
                "translation": "科学家能够利用鲸鱼鼻涕样本测定其完整基因组。"
              },
              {
                "original": "The drones have got sterile petri dishes attached to them, literally Velcroed on.",
                "analysis": [
                  "主干是 The drones have got dishes attached to them。",
                  "attached to them 是过去分词短语作结果补足，说明培养皂盘与无人机的关系。",
                  "literally 为插入式强调，后接 Velcroed on，补充固定方式。",
                  "该句体现 have got+宾语+过去分词的完成式结构，可用于描述设备或系统配置。"
                ],
                "translation": "无人机上装有无菌培养皂盘，而且是用魔术贴实实地粘在机身上的。"
              },
              {
                "original": "This just opens the door.",
                "analysis": [
                  "This 指代前文的低侵入式基因采样方法。",
                  "opens the door 是隐喻式主谓结构，表示开启新的可能性。",
                  "just 在此弱化夸张，表达“不过是提供一个起点”。",
                  "短句可与后文“shows how much information”形成递进，适合写作中的简洁结论。"
                ],
                "translation": "这只是打开了一扇门。"
              }
            ]
          },
          {
            "title": "New research gives insight to where your brain plans out your speech",
            "source": "NPR",
            "published": "2026-11-20",
            "url": "https://www.npr.org/2026/11/20/nx-s1-6047695/new-research-gives-insight-to-where-your-brain-plans-out-your-speech",
            "readingTime": 6,
            "topic": "health",
            "summary": "文章介绍加州大学旧金山分校团队对 Wernicke 区功能的新发现：该区域不仅感知和理解语言，还会在说话前几瞬间为肌肉运动准备词序和发声序列。报道先指出传统教科书把该区域主要描述为语言理解区，再以 28 名癫痫手术患者的神经活动监测为证据，说明它同时承担听觉与口语规划功能。文章进一步讨论这种发现对儿童语言学习、自闭症、中风康复及脑机接口的意义，并指出教科书和神经科学理解需要持续更新。核心结论是，语言功能由多个脑区协作完成，单一“理解区”或“产生区”的模型过于简单。",
            "reason": [
              "主题涉及健康、神经科学、教育与康复，属于考研英语常见的人类能力与医学进展议题。",
              "文章先提出反常观察，再用研究证据和专家评价展开，适合训练论证链条识别。",
              "可能考查实验对象、因果机制、功能重划和专业术语等细节题。",
              "文本包含 has a function for、especially、in addition to 等高频学术表达，有较好的仿写价值。",
              "可用于写作中讨论教材更新、跨学科研究、康复技术与传统认知局限。"
            ],
            "vocabulary": [
              {
                "word": "syllable",
                "phonetic": "/ˈsɪləbl/",
                "part": "n.",
                "translation": "音节"
              },
              {
                "word": "longstanding",
                "phonetic": "/ˈlɔːŋstændɪŋ/",
                "part": "adj.",
                "translation": "长期存在的"
              },
              {
                "word": "comprehend",
                "phonetic": "/ˌkɔmprɪˈhend/",
                "part": "v.",
                "translation": "理解；领会"
              },
              {
                "word": "puzzled",
                "phonetic": "/ˈpʌzld/",
                "part": "adj.",
                "translation": "困惑的；不解的"
              },
              {
                "word": "alternately",
                "phonetic": "/ˈɔːltərnətli/",
                "part": "adv.",
                "translation": "交替地"
              },
              {
                "word": "neurons",
                "phonetic": "/ˈnʊrɑːnz/",
                "part": "n.",
                "translation": "神经元"
              },
              {
                "word": "critical",
                "phonetic": "/ˈkrɪtɪkl/",
                "part": "adj.",
                "translation": "关键的；至关重要的"
              },
              {
                "word": "rehabilitation",
                "phonetic": "/ˌriːəˌbɪlɪˈteɪʃn/",
                "part": "n.",
                "translation": "康复；恢复训练"
              },
              {
                "word": "paralysis",
                "phonetic": "/pəˈræləsɪs/",
                "part": "n.",
                "translation": "瘫痪"
              },
              {
                "word": "complex",
                "phonetic": "/ˈkɔmpleks/",
                "part": "adj.",
                "translation": "复杂的"
              }
            ],
            "sentences": [
              {
                "original": "In order to say a word like Mississippi or hippopotamus, the brain has to do a lot of planning.",
                "analysis": [
                  "主句主干是 the brain has to do a lot of planning。",
                  "In order to 引导目的状语，说明发出复杂词语需要提前规划。",
                  "like Mississippi or hippopotamus 以例子说明长词的多个音节需要排列。",
                  "句子把普通表达和神学科问题相连，是典型的通俗引入专业主题结构。"
                ],
                "translation": "为了说出密西西比或河马这类词，大脑必须进行大量规划。"
              },
              {
                "original": "In addition to the listening function, it also has a function for planning the words that we're about to say next.",
                "analysis": [
                  "主干是 it also has a function for planning。",
                  "In addition to the listening function 是介词短语，强调研究发现的新增功能。",
                  "that 引导定语从句修饰 the words，说明规划对象是即将说出的词语。",
                  "also 和 In addition to 形成双重并列，可用于比较事物具有的两种功能。"
                ],
                "translation": "除了听觉功能之外，它还具有规划我们下一步要说的词语的功能。"
              },
              {
                "original": "A structure that scientists say they're only beginning to understand.",
                "analysis": [
                  "句首 A structure 是名词短语，指代前文的复杂脑区结构。",
                  "that 引导定语从句，说明科学家对该结构的认知状态。",
                  "only beginning to understand 表示当前认知仍处于起始阶段。",
                  "该句用无动词主句式收束段落，适合概括研究仍存在的局限和未知。"
                ],
                "translation": "这是一种科学家们才刚刚开始了解的结构。"
              }
            ]
          }
        ]
      }
    },
    {
      "date": "2026-11-21",
      "status": "ready",
      "ai": {
        "intro": "今日更新聚焦 GitHub Copilot 的 MCP 连接、Gemini 4 Neon 与 GPT-6.2 编程模型，并复核适合学生长期使用的免费 AI 与学习资源。",
        "updates": [
          {
            "event": "GitHub Copilot 增加八个 MCP 连接器",
            "summary": "GitHub 于 2026-11-18 宣布，Copilot 公测版可连接 Supabase、Box、Calendly、Webflow、Wix、Buildkite、ClickUp 和 Mixpanel；用户可在同一会话中查询项目、检查数据库或处理工作流。",
            "howTo": "在 Copilot app 的 Customize、CLI 的 /mcp、VS Code 的 Agents/Customizations 或 github.com 的 Copilot customization 页面中选择 Connect；接入后可直接向 Copilot 描述跨服务任务。",
            "impact": "学生可让助手核对 Supabase schema、整理项目资料或查看构建失败原因；涉及修改、发布或共享数据时仍应逐项确认并检查组织权限。",
            "free": "官方称连接器面向所有 Copilot 计划开放公测；Business 或 Enterprise 管理员需启用相关策略，部分服务还需站内管理员开通。地区、配额、单个连接器的额外收费和公测期限官方未说明。",
            "category": "编程助手 / MCP 连接",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-18",
              "url": "https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot"
            }
          },
          {
            "event": "Gemini 4 Neon 正式进入 GitHub Copilot",
            "summary": "GitHub 于 2026-11-18 正式在 Copilot 中上线 Gemini 4 Neon；该模型面向代理编码、多步骤工具调用和知识工作，官方称响应更快、代码意外修改更少。",
            "howTo": "在支持 Copilot 的编辑器、CLI、编码代理、GitHub 网页或移动端打开模型选择器，选用 Gemini 4 Neon；若尚未出现，官方提示可能处于渐进式发布。",
            "impact": "学生可用它规划多步骤编程任务、审查代码和调用工具；应通过测试、差异检查和原始资料核验避免接受无法复现的结论。",
            "free": "可用于 Copilot Pro+、Max、Business 和 Enterprise；按供应商列表定价计费，配额、地区限制、企业策略和具体价格官方未统一说明。",
            "category": "AI 编程 / 模型更新",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-18",
              "url": "https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot"
            }
          },
          {
            "event": "OpenAI GPT-6.2 Astra 与 Sol 进入 GitHub Copilot",
            "summary": "GitHub 于 2026-11-17 发布 GPT-6.2 Astra 和 GPT-6.2 Sol 在 Copilot 中普遍可用；Astra 面向代理编码与终端工作，Sol 面向复杂代理任务和深入代码审查。",
            "howTo": "在 Copilot 支持的编辑器、CLI、编码代理、GitHub 网页或移动端打开模型选择器并选择 GPT-6.2 Astra 或 Sol；若未显示，需等待渐进式发布或确认企业策略。",
            "impact": "适合把课程项目拆成可执行步骤、补充终端脚本或进行代码审查；自动修复前应运行测试、检查依赖变化并审阅最终差异。",
            "free": "Copilot Pro+、Max、Business 和 Enterprise 可选这两个模型并按供应商列表定价计费；具体地区、配额、月度抵扣和到期日官方未说明。",
            "category": "AI 编程 / 模型更新",
            "source": {
              "name": "GitHub Changelog",
              "published": "2026-11-17",
              "url": "https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available"
            }
          }
        ],
        "deals": [
          {
            "event": "GitHub Copilot Free：每月免费补全",
            "summary": "GitHub 官方计划页提供无需信用卡的 Copilot Free，包含每月代码补全及有限的聊天与代理使用。",
            "howTo": "访问 GitHub Copilot plans，启用 Free；再在受支持编辑器、GitHub 网页或 CLI 中登录并使用 Copilot。",
            "impact": "可用于课程项目中的代码补全、调试和多文件修改练习；始终运行测试并审查生成差异。",
            "free": "官方列明每月 2,000 次代码补全、$0 月费且无需信用卡；聊天与代理用量有限，地区、具体重置规则和配额官方未说明。",
            "category": "免费编程助手",
            "source": {
              "name": "GitHub Copilot 官方计划页",
              "published": "官方未说明",
              "url": "https://github.com/features/copilot/plans"
            }
          },
          {
            "event": "GitHub Student Developer Pack：学生开发权益包",
            "summary": "GitHub Education 面向已验证学生提供工具与合作伙伴权益，包括学习资源、开发工具和云端服务；具体权益会随合作伙伴和地区变化。",
            "howTo": "登录 GitHub，前往 education.github.com/pack，按页面要求提交在校证明并等待验证；通过后在 Student Developer Pack 中逐项领取权益。",
            "impact": "可用于搭建课程网站、完成开源项目或获取编程认证训练；领取前应核对每项合作伙伴的本人资格和到期条件。",
            "free": "官方面向学生提供 Developer Pack，但没有统一列出所有权益的价格、地区、配额或截止日；具体项目须以领取页和合作伙伴条款为准。",
            "category": "学生教育 / 开发工具",
            "source": {
              "name": "GitHub Education 官方页面",
              "published": "官方未说明",
              "url": "https://education.github.com/pack"
            }
          },
          {
            "event": "Gemini API 免费层",
            "summary": "Google AI Studio 定价页提供有限模型的免费输入输出 token、免费额度和 AI Studio 访问；适合搭建小型原型并比较模型。",
            "howTo": "打开 AI Studio，核对目标模型是否支持 Free，再创建 API Key；在 Playground 或自己的代码中进行小规模测试。",
            "impact": "学生可练习摘要、分类、问答和文档处理原型；不要上传敏感或受限资料，并按官方模型页核对免费层。",
            "free": "官方提供“免费”与“付费”两档；个别模型的免费额度、速率限制、地区、账户资格和重置周期官方未统一说明，须逐项核对。",
            "category": "免费 API / 模型试用",
            "source": {
              "name": "Google Gemini API 官方定价页",
              "published": "官方未说明",
              "url": "https://ai.google.dev/gemini-api/docs/pricing"
            }
          },
          {
            "event": "Kaggle Learn：无成本数据课程",
            "summary": "Kaggle 官方学习目录提供 Python、Pandas、SQL、机器学习和数据可视化等无成本课程，可直接在 Notebook 中练习。",
            "howTo": "登录 Kaggle 后打开 Kaggle Learn，选择课程并完成交互式 Notebook；可把练习保存到个人工作区。",
            "impact": "适合补足论文数据清洗、统计和可视化技能，并把课程代码迁移到科研或课程项目。",
            "free": "官方页面明确标为 no-cost courses；账号资格、地区、证书费用和长期有效性官方未说明。",
            "category": "免费学习 / 数据与编程",
            "source": {
              "name": "Kaggle 官方学习中心",
              "published": "官方未说明",
              "url": "https://www.kaggle.com/learn"
            }
          },
          {
            "event": "Google Colab：免费托管 Jupyter 运行时",
            "summary": "Google Colab 官方提供免费托管 Jupyter Notebook，可运行 Python、数据分析和小规模机器学习工作负载。",
            "howTo": "访问 Colab，新建或导入 .ipynb，运行 Python；必要时在运行时菜单选择可用硬件并保存到 Drive 或 GitHub。",
            "impact": "适合快速配置课程实验、绘图和小规模模型训练；保存中间结果，注意运行时资源和任务可能中断。",
            "free": "官方称可免费使用；资源不保证，固定 GPU/TPU 配额、地区、账户资格、配额和到期日官方未说明。",
            "category": "免费学习 / 云端计算",
            "source": {
              "name": "Google Colab 官方 FAQ",
              "published": "官方未说明",
              "url": "https://research.google.com/colaboratory/faq.html"
            }
          },
          {
            "event": "Qwen3-8B：可下载并本地运行的开源权重",
            "summary": "Qwen 官方在 Hugging Face 发布 Qwen3-8B 模型权重，支持思考与非思考模式、工具调用、多语言和本地部署；模型卡标注 Apache 2.0。",
            "howTo": "在 Hugging Face 打开 Qwen/Qwen3-8B，按官方 Transformers、SGLang 或 vLLM 示例下载权重并在本机运行；硬件不足时可用兼容的托管运行方式。",
            "impact": "学生可离线或本地搭建多语言问答、翻译、编程和代理练习环境；部署前应核对硬件、依赖、许可证与数据隐私要求。",
            "free": "模型权重可下载；Apache 2.0 已在官方模型卡和模型元数据中标注。硬件成本、地区限制、配额、服务期限和商业用途附加条件官方未统一说明。",
            "category": "开源权重 / 本地模型",
            "source": {
              "name": "Qwen 官方 Hugging Face 模型卡",
              "published": "官方未说明",
              "url": "https://huggingface.co/Qwen/Qwen3-8B"
            }
          }
        ]
      },
      "english": {
        "articles": [
          {
            "title": "California’s coastal communities on alert as biggest waves in years hit state",
            "source": "The Guardian",
            "published": "2026-11-20",
            "url": "https://www.theguardian.com/us-news/2026/nov/20/california-coastal-communities-alert-big-waves-hit-state",
            "readingTime": "约 4 分钟（估算）",
            "topic": "环境 / 极端天气、海岸风险与公共预警",
            "summary": "文章报道加州沿海社区因低压系统形成的持续强浪而进入防灾状态。作者先列出监测浮标记录的超9米浪高和海滩、码头关闭措施，再说明警报可能影响圣路易斯奥比斯波县、圣巴巴拉县等地，并展示暴雨、山地降雪和大风形成的复合型天气风险。文章随后将视野扩展到印度东方海岸的气旋、南非暴雨和洪灾，形成跨区域的极端天气比较；结论暗示，沿海管理需要把精确预警、基础设施韧性和跨地区气象监测结合起来，而不能只关注单次天气事件。",
            "reason": [
              "主题围绕气候、极端天气与公共安全，适合环境治理和灾害防范类考研英语阅读。",
              "文章以美国加州具体事件为主线，再用印度和南非案例补充，便于练习主旨概括与跨段例证。",
              "可重点训练数字、地名、被动语态和“could”“expected”等风险预测措辞。",
              "vocabulary 涉及 swell、buoy、evacuate、torrential 等环境类高频词，适合写作积累。",
              "写作可借鉴先描述影响，再列出数据，最后提升到跨区域协调的结构。"
            ],
            "vocabulary": [
              {
                "word": "swells",
                "phonetic": "/swelz/",
                "part": "n.",
                "translation": "涌浪；海浪"
              },
              {
                "word": "buoy",
                "phonetic": "/bɔːi/",
                "part": "n.",
                "translation": "浮标"
              },
              {
                "word": "coastal",
                "phonetic": "/ˈkoʊstəl/",
                "part": "adj.",
                "translation": "沿海的"
              },
              {
                "word": "evacuate",
                "phonetic": "/ɪˈvækjueɪt/",
                "part": "v.",
                "translation": "疏散；撤离"
              },
              {
                "word": "torrential",
                "phonetic": "/təˈrenʃəl/",
                "part": "adj.",
                "translation": "暴雨的；猛烈的"
              },
              {
                "word": "infrastructure",
                "phonetic": "/ˈɪnfrəstrʌktʃər/",
                "part": "n.",
                "translation": "基础设施"
              },
              {
                "word": "forecast",
                "phonetic": "/ˈfɔːrkæst/",
                "part": "n./v.",
                "translation": "预测；预报"
              },
              {
                "word": "successive",
                "phonetic": "/səkˈsesɪv/",
                "part": "adj.",
                "translation": "连续的；接连的"
              },
              {
                "word": "landfall",
                "phonetic": "/ˈlændfɔːl/",
                "part": "n.",
                "translation": "(飓风等)登陆"
              },
              {
                "word": "hazard",
                "phonetic": "/ˈhæzərd/",
                "part": "n.",
                "translation": "危险；危害"
              }
            ],
            "sentences": [
              {
                "original": "Multiple coastal hazard warnings were issued this week as successive areas of low pressure generated powerful swells and large breaking waves.",
                "analysis": [
                  "句子主干是 Multiple coastal hazard warnings were issued，warnngs 是被动语态中的主语。",
                  "were issued 表示多项沿海警报由官方发布，强调被动发生的动作。",
                  "介词短语 this week 交代时间范围，限定警报发布期。",
                  "as 引导原因或伴随状语从句，说明连续低压系统生成强浪的因果关系。",
                  "该句可用于新闻报道中“被动语态交代措施 + as 从句说明原因”的结构。"
                ],
                "translation": "本周发布了多项沿海危险警报，因为连续的低压区域产生了强劲涌浪和巨大的破碎浪。"
              },
              {
                "original": "The Monterey, California, buoy recorded a wave height of 34.1ft, which would make it the highest reading in 30 years.",
                "analysis": [
                  "句子主干是 the buoy recorded a wave height，buoy 作主语。",
                  "逗号中的 California 为 Monterey 增加地点限定。",
                  "which 引导非限制性定语从句，指代前面的34.1英尺记录。",
                  "would make it 表示推测性结论，不是绝对断言。",
                  "该句适合在技术性新闻中组合精确数字、地点和历史比较。"
                ],
                "translation": "加州蒙特雷的浮标记录到34.1英尺的浪高，这可能使该数据成为30年来最高记录。"
              },
              {
                "original": "Nearly 72,000 people have been evacuated from areas of Odisha in eastern India as Tropical Cyclone Akvan approaches land.",
                "analysis": [
                  "句子主干是 72,000 people have been evacuated，使用现在完成时被动式强调疏散状态。",
                  "介词短语 from areas of Odisha 和 in eastern India逐层限定疏散地点。",
                  "as 引导时间状语从句，表达疏散与气旋逼近同时发生。",
                  "Nearly 修饰具体数字，使报道保留估计口吻。",
                  "该句可用于描述应急措施和自然灾害逼近之间的同步关系。"
                ],
                "translation": "随着热带气旋阿克万逼近登陆，印度东部奥迪沙地区已有近7.2万人撤离。"
              }
            ]
          },
          {
            "title": "Faisal Islam: This cost-cutting UK-EU deal doesn’t mean lower prices will follow",
            "source": "BBC News",
            "published": "2026-11-20",
            "url": "https://www.bbc.co.uk/news/articles/cm1wr029evnqo",
            "readingTime": "约 7 分钟（估算）",
            "topic": "经济 / 国际贸易、监管与消费者物价",
            "summary": "文章先指出英国政府宣称新UK-EU协议能降低企业和消费者成本，但零售商并未承诺由此直接降价。作者解释协议通过减少食品出口文件、边检和人为延误来减少企业成本，却强调成本节省是否传导到超市货架仍取决于能源冲击、国际市场和价格谈判等多重因素。文章接着比较预计的贸易、经济和就业收益，也指出必须遵守欧盟法规、为欧盟市场让出部分监管自由并承担潜合约成本；结论不是否认协议的潜在增长，而是提醒读者区分宏观收益、企业成本和消费者实际价格。",
            "reason": [
              "主题涉及国际贸易、监管成本和生活物价，适合商业与经济类考研英语阅读。",
              "文章采用“政府宣传—企业反应—机制分析—条件限制—总体判断”的完整论证结构。",
              "可训练因果链、转折词、数字细节和“benefit”“cost”“gain”之间的区分。",
              "vocabulary 包括 red tape、quid pro quo、perishable、regulatory freedom 等抽象商经词汇。",
              "写作可借鉴先质疑一项政策承诺，再拆解成本传导与长期收益的论证方法。"
            ],
            "vocabulary": [
              {
                "word": "bureaucracy",
                "phonetic": "/bjʊəˈrɑːkrəsi/",
                "part": "n.",
                "translation": "官僚制度；行政程序"
              },
              {
                "word": "perishable",
                "phonetic": "/ˈperɪʃəbəl/",
                "part": "adj.",
                "translation": "易腐坏的"
              },
              {
                "word": "red tape",
                "phonetic": "/red teɪp/",
                "part": "phr.",
                "translation": "繁文缛节；行政手续"
              },
              {
                "word": "quid pro quo",
                "phonetic": "/kwɪd proʊ kwoʊ/",
                "part": "phr.",
                "translation": "交换条件；互惠交换"
              },
              {
                "word": "regulatory",
                "phonetic": "/ˈreɡjələtəri/",
                "part": "adj.",
                "translation": "监管的；规范的"
              },
              {
                "word": "autonomy",
                "phonetic": "/ɔːˈtɑːnəmi/",
                "part": "n.",
                "translation": "自主权；自治"
              },
              {
                "word": "forecast",
                "phonetic": "/ˈfɔːrkæst/",
                "part": "n./v.",
                "translation": "预测；预报"
              },
              {
                "word": "trade-off",
                "phonetic": "/ˈtreɪd ɔːf/",
                "part": "n.",
                "translation": "权衡；取舍"
              },
              {
                "word": "agrifood",
                "phonetic": "/ˈæɡri fuːd/",
                "part": "n./adj.",
                "translation": "农业食品；农产品食品"
              },
              {
                "word": "compliance",
                "phonetic": "/kəmˈplaɪəns/",
                "part": "n.",
                "translation": "遵守；合规"
              }
            ],
            "sentences": [
              {
                "original": "This deal will matter for food exporters - it may not have a clear visible impact at the checkout.",
                "analysis": [
                  "句子分为破折号前后的两个独立判断，形成让步式对照。",
                  "主语 This deal 和 it 分别指协议及其潜在影响，指代关系清楚。",
                  "matter for food exporters 表示出口企业会受到实质影响。",
                  "may not否定的是消费者在收银处看到的直接效果，而非全部收益。",
                  "破折号强调宏观供给成本与微观物价之间的分离，可借鉴于政策分析。"
                ],
                "translation": "这项协议对食品出口商很重要——但它未必会在收银台上产生明显影响。"
              },
              {
                "original": "It is more a hope than will at this stage.",
                "analysis": [
                  "句子主干使用 It is，比较对象由 hope 与 will 构成。",
                  "more A than B 的结构强调当前更多是希望而不是确定的意愿或行动。",
                  "at this stage 限定作者对现阶段结果的判断。",
                  "省略了重复信息，使句子简洁且带有批评语气。",
                  "该句适合表达政策承诺尚未成为可验证现实的克制判断。"
                ],
                "translation": "现阶段，这与其说是现实意愿，不如说只是一个希望。"
              },
              {
                "original": "The bigger point is whether this logic will now apply elsewhere.",
                "analysis": [
                  "主句是 The bigger point is whether，引出以 whether 开头的名词性从句。",
                  "从句保留疑问含义但按陈述语序排列，适合学术议论文。",
                  "this logic 指前文以食品开放换取监管对接的模式。",
                  "now 表示将这一模式推广到其他领域的时间敏感性。",
                  "该句可作为提炼争论核心、引出更高层问题的范例。"
                ],
                "translation": "更大的问题是，这套逻辑现在是否会适用于其他领域。"
              }
            ]
          }
        ]
      }
    }
  ]
};
