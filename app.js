const A = "assets/images/";
const S = "assets/solutions/";
const ABILIX_DOWNLOAD_ROOT = "http://en.abilix.com";

const zhTranslations = {
  "Home": "首页",
  "Products": "产品",
  "Curriculum": "课程体系",
  "Solutions": "解决方案",
  "Resources": "资源中心",
  "Resources FAQ": "资源问答",
  "Resource Downloads": "资源下载",
  "About Abilix": "关于能力风暴",
  "EDUCATIONAL ROBOT": "教育机器人",
  "Toggle navigation": "展开或收起导航",
  "Primary navigation": "主导航",
  "Shopping bag": "购物袋",
  "Bag": "购物袋",
  "Skip to content": "跳至主要内容",
  "Educational Robotics": "教育机器人",
  "Train Successful Intelligence. Bring Up Science & Technology Accomplishment. Cultivate Technology Talents.": "培养成功能力，提升科技素养，造就科技人才。",
  "Overview": "概览",
  "Details": "详情",
  "Support": "支持",
  "Your own customizable AI robot companion for creative learning.": "可自由定制的 AI 机器人伙伴，陪伴孩子开展创造性学习。",
  "Six-face attachment, powerful brain, voice and image recognition.": "独特六面搭建体系，配备强大控制器，并支持语音与图像识别。",
  "Unlock imagination through structures, transmission, dynamics and STEM kits.": "通过结构、传动、动力与 STEM 套件释放想象力。",
  "Scratch, C, Python, AI module interface and classroom sensors.": "支持 Scratch、C、Python、AI 模块接口及课堂传感器。",
  "Modular robot kit for creative STEM learning.": "面向创造性 STEM 学习的模块化机器人套件。",
  "Free-build robot car, program and test own solution in WER contest.": "自由搭建机器人小车，在 WER 竞赛中编程并验证自己的方案。",
  "A versatile robot kit designed for hands-on STEM education experiences.": "为动手实践型 STEM 教育打造的多功能机器人套件。",
  "Multiple-DOF humanoid design, action editor and reconfigurable projects.": "多自由度类人设计，配合动作编辑器与可重构项目。",
  "Xiaoxing": "小星",
  "Modular H1-S": "模块系列 H1-S",
  "Krypton 8": "氪8",
  "School Krypton 201": "学校氪 201",
  "Modular H1-B": "模块系列 H1-B",
  "Krypton 6": "氪6",
  "Transmission Kit": "传动套件",
  "New!": "新品",
  "K12 Schools": "中小学校",
  "Institutional learning": "校内教育",
  "Full lab spaces, teaching resources and robotics systems for schools and universities.": "为中小学及高校提供完整实验室空间、教学资源与机器人系统。",
  "Training Centers": "培训中心",
  "After-school education": "校外教育",
  "Course operation, project activities and community learning centers for after-school robotics.": "为校外机器人教育提供课程运营、项目活动与社区学习中心方案。",
  "Store & Kiosk": "门店与体验专柜",
  "Retail experience": "零售体验",
  "Product experience spaces that connect retail, demonstration and learning services.": "连接零售、展示与学习服务的产品体验空间。",
  "Home Learning": "家庭学习",
  "Family education": "家庭教育",
  "Household product lines and guided learning paths for family robotics education.": "面向家庭机器人教育的产品系列与引导式学习路径。",
  "Launch science & technology activities and contests": "开展科技活动与竞赛",
  "STEM education · Maker education · IoT education": "STEM 教育 · 创客教育 · 物联网教育",
  "Technological education & innovative teaching": "科技教育与创新教学",
  "Display school image and innovative education revolution achievement": "展示学校形象与创新教育成果",
  "Establish omni-directional quality-oriented education based on Multiple Intelligences Theory": "基于多元智能理论构建全方位素质教育",
  "Educational Robots · STEAM Curriculum · Global Competition": "教育机器人 · STEAM 课程 · 全球赛事",
  "Abilix highlights": "能力风暴精选内容",
  "AI Robots": "AI 机器人",
  "Inspiring Young Minds": "激发少年智慧",
  "To Create": "共创未来",
  "Abilix brings educational robots, classroom solutions, curriculum support and WER competition pathways into one premium learning ecosystem.": "能力风暴将教育机器人、课堂解决方案、课程支持与 WER 竞赛成长路径融入一体化优质学习生态。",
  "Scroll to next section": "滚动至下一部分",
  "Choose hero image": "选择主视觉图片",
  "Show slide 1": "显示第 1 张幻灯片",
  "Show slide 2": "显示第 2 张幻灯片",
  "Show slide 3": "显示第 3 张幻灯片",
  "More Than Knowing": "不止于知识",
  "Students need more than knowledge": "学生需要的不只是知识",
  "They need to create, to collaborate": "更需要创造与协作",
  "To turn ideas into solutions": "把想法变成解决方案",
  "Explore · Create · Solve": "探索 · 创造 · 解决",
  "ABILIX SOLUTION": "能力风暴解决方案",
  "From Learning to Ability": "从学习走向能力",
  "Abilix brings robots, curriculum, programming and real-world challenges": "能力风暴将机器人、课程、编程与真实世界挑战",
  "together in one connected learning system.": "融合为一个相互连接的学习体系。",
  "Build · Program · Challenge · Grow": "搭建 · 编程 · 挑战 · 成长",
  "Explore Solution": "探索解决方案",
  "A Global Leader in Educational Robotics": "全球教育机器人领导者",
  "Founded in 1996, Abilix uses AI-powered educational robots to inspire creativity and develop future-ready skills.": "能力风暴创立于 1996 年，以 AI 教育机器人激发创造力，培养面向未来的能力。",
  "Learn More": "了解更多",
  "Children exploring robots": "孩子们探索机器人",
  "We create more than robots. We create a complete learning system.": "我们创造的不只是机器人，更是一套完整的学习体系。",
  "Product Center": "产品中心",
  "Bring Imagination to Life.": "让想象成为现实。",
  "Make Creativity Visible.": "让创造清晰可见。",
  "Modular": "模块系列",
  "Krypton": "氪系列",
  "Creative": "创意系列",
  "School Krypton": "学校氪系列",
  "SK Series": "SK 系列",
  "Oculus": "Oculus 移动系列",
  "Everest": "Everest 人形系列",
  "Currently available": "当前在售",
  "Available for purchase": "可购买",
  "Display only": "仅作展示",
  "Display only · Not for sale": "仅作展示 · 不再销售",
  "Current portfolio": "当前产品线",
  "Legacy series archive": "经典系列档案",
  "Two statuses. No ambiguity.": "两种状态，一目了然。",
  "Two statuses.": "两种状态，",
  "No ambiguity.": "一目了然。",
  "Currently available.": "当前在售。",
  "Display only. Not for sale.": "仅作展示，不再销售。",
  "View current portfolio ↓": "查看当前产品线 ↓",
  "Start with the series that can be purchased today, or browse earlier Abilix platforms as part of the brand and technology archive.": "优先查看目前可购买的产品系列，也可浏览能力风暴历代平台，了解品牌与技术发展脉络。",
  "Products and support": "产品与支持",
  "These series are currently available. Model pages connect to specifications, learning resources and competition pathways.": "以下系列目前在售。型号页面可继续查看参数、学习资源与赛事应用路径。",
  "Brand and technology archive": "品牌与技术档案",
  "These earlier series remain visible for reference, legacy support and brand history. They are not available for purchase.": "以下早期系列保留用于资料查询、存量支持与品牌历史展示，目前不再销售。",
  "View current model": "查看在售型号",
  "View archive profile": "查看系列档案",
  "View available products": "查看在售产品",
  "Series status": "系列状态",
  "Current product": "当前在售产品",
  "Legacy product archive": "经典产品档案",
  "This series is retained for reference and legacy support. It is not currently available for purchase.": "该系列保留用于资料查询与存量支持，目前不再销售。",
  "Purchase and project enquiries are available through Abilix partners.": "可通过能力风暴合作伙伴咨询购买与项目方案。",
  "Brick construction · Home and maker learning": "积木搭建 · 家庭与创客学习",
  "Classroom and competition · SK series": "课堂与竞赛 · SK 系列",
  "Brick series · Earlier classroom platform": "积木系列 · 早期课堂平台",
  "Jointed modular series · Earlier creative platform": "关节模块系列 · 早期创意平台",
  "Mobile series · Earlier home platform": "移动系列 · 早期家庭平台",
  "Humanoid series · Earlier robotics platform": "人形系列 · 早期机器人平台",
  "Six-face construction, progressive kits and a strong controller support open-ended building, programming and STEM projects.": "六面搭建体系、渐进式套件与高性能控制器，支持开放搭建、编程及 STEM 项目学习。",
  "Designed for structured classroom teaching and WER practice, with Scratch, C, Python, AI interfaces and expanded sensors.": "面向系统化课堂教学与 WER 实践，支持 Scratch、C、Python、AI 接口及丰富传感器。",
  "An earlier six-face brick platform with flowchart programming and dedicated teaching materials for structured classroom projects.": "早期六面积木平台，配套流程图编程软件与教学资料，用于系统化课堂项目。",
  "A reconfigurable joint-based platform for action editing, multi-DOF structures and creative humanoid projects.": "基于可重构关节的创意平台，支持动作编辑、多自由度结构与类人机器人项目。",
  "An earlier mobile robot series created for interactive home learning and autonomous movement exploration.": "面向家庭互动学习与自主移动探索的早期移动机器人系列。",
  "An earlier humanoid robot series retained as part of Abilix product and technology history.": "作为能力风暴产品与技术发展历史保留展示的早期人形机器人系列。",
  "Legacy classroom platform": "经典课堂平台",
  "Legacy creative platform": "经典创意平台",
  "Legacy home platform": "经典家庭平台",
  "Legacy humanoid platform": "经典人形机器人平台",
  "Six-face brick construction and flowchart programming": "六面积木搭建与流程图编程",
  "Multi-DOF structures and action editing": "多自由度结构与动作编辑",
  "Autonomous movement and interactive exploration": "自主移动与互动探索",
  "Humanoid robotics and motion": "人形机器人与运动控制",
  "Historical classroom and WER use": "历史课堂与 WER 应用",
  "Historical project use": "历史项目应用",
  "Reference only": "仅供资料参考",
  "Mobile robot series": "移动机器人系列",
  "Humanoid robot series": "人形机器人系列",
  "Home learning": "家庭学习",
  "Movement exploration": "移动探索",
  "Motion projects": "运动项目",
  "Interactive robotics": "互动机器人",
  "Brand archive": "品牌档案",
  "Product family card links to listing/detail template.": "查看该产品系列的列表与详情。",
  "Previous products": "上一组产品",
  "Next products": "下一组产品",
  "WER global robotics competition": "WER 世界教育机器人大赛",
  "Turn competition into a": "让竞赛成为",
  "global learning ecosystem.": "全球学习生态。",
  "Contest introduction · Past works · Champion stories · Registration · Live events · Global map": "赛事介绍 · 往届作品 · 冠军故事 · 报名参赛 · 赛事直播 · 全球版图",
  "A robotics education": "一个机器人教育",
  "company built as a complete": "品牌所构建的完整",
  "learning system.": "学习体系。",
  "From the brand manual: Abilix provides STEAM-ready robot products, systematic school labs, home learning centers, teaching materials and WER competition pathways.": "能力风暴提供面向 STEAM 教育的机器人产品、系统化学校实验室、家庭学习中心、教学资料与 WER 竞赛成长路径。",
  "patented technologies": "项专利技术",
  "robot types": "种机器人产品",
  "teaching materials": "套教学资料",
  "countries & regions": "个国家和地区",
  "schools & institutes": "所学校与机构",
  "WER contestants yearly": "名 WER 年度参赛者",
  "Empowering Every Child to Create the Future": "赋能每一个孩子创造未来",
  "Inspiring Young Creators Worldwide Since 1996": "自 1996 年起，持续启发全球少年创造者",
  "Shop Now": "立即选购",
  "Add Xiaoxing to favorites": "将小星加入收藏",
  "Browse product families or filter by age. Each card leads into product details with product information and Add to Bag.": "浏览产品系列或按年龄筛选。每张卡片均可进入产品详情并加入购物袋。",
  "We Build More Than Robots. We Inspire Creators.": "我们创造的不只是机器人，更是在启发创造者。",
  "Filter products by age": "按年龄筛选产品",
  "All Products": "全部产品",
  "Age 4-6": "4–6 岁",
  "Age 7-12": "7–12 岁",
  "Age 13-18": "13–18 岁",
  "Previous page": "上一页",
  "Next page": "下一页",
  "Products by Age": "按年龄选择产品",
  "Explore & Create": "探索与创造",
  "Develop creativity and hands-on skills through playful construction, basic robotics, and imaginative building experiences.": "通过趣味搭建、机器人基础与想象力创作，培养创造力和动手实践能力。",
  "Build & Program": "搭建与编程",
  "Learn robotics, programming, and STEAM concepts through modular building, sensors, and interactive robot control projects.": "通过模块搭建、传感器与机器人互动控制项目，学习机器人、编程及 STEAM 知识。",
  "Innovate & Engineer": "创新与工程",
  "Explore AI, engineering, and advanced robotics through programming, intelligent applications, and innovation-driven projects.": "通过编程、智能应用与创新项目，探索 AI、工程和进阶机器人技术。",
  "Built for Creativity. Designed for the Future.": "为创造而生，为未来而设计。",
  "Abilix connects technology with learning, giving every child the opportunity to become a creator of the future.": "能力风暴连接科技与学习，让每个孩子都有机会成为未来的创造者。",
  "Abilix combines robots, programming software, teacher resources and course materials into a structured AI literacy system.": "能力风暴将机器人、编程软件、教师资源与课程材料整合为系统化的 AI 素养课程体系。",
  "Connect every product to a clear learning pathway": "让每一款产品都对应清晰的学习路径",
  "Learning journey timeline": "学习成长时间线",
  "Horizontal curriculum map can show semester/module": "横向课程图谱可呈现学期与模块",
  "progression and matching product kits.": "进阶路径以及配套产品套件。",
  "Creative construction and observation": "创意搭建与观察",
  "Computational thinking and logic": "计算思维与逻辑",
  "Programming, sensors and control": "编程、传感器与控制",
  "AI applications and project practice": "AI 应用与项目实践",
  "Engineering innovation and teamwork": "工程创新与团队协作",
  "Competition, presentation and problem solving": "竞赛、表达与问题解决",
  "View pathway": "查看学习路径",
  "Curriculum Features": "课程特色",
  "Project Guidance from Easy to Difficult": "由易到难的项目引导",
  "Training Trial and Error Learning": "培养试错式学习能力",
  "Training the Abilities of Innovation, Analysis and Practice": "培养创新、分析与实践能力",
  "Training the Abilities to Understand, Be Close to and Apply the Technology": "培养理解、亲近并应用科技的能力",
  "Project-based teaching process diagram": "项目式教学流程图",
  "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.": "能力风暴鼎力支持 WER 世界教育机器人大赛，以创新、创造与 STEM 教育赋能全球青少年。",
  "External website target": "WER 官方网站",
  "Interaction: CTA opens external WER website in a new tab. Keep a short local overview before redirect.": "点击下方按钮将在新标签页打开 WER 官方网站。",
  "Go to WER site": "前往 WER 官网",
  "Solutions page sections": "解决方案页面栏目",
  "Introduction": "方案介绍",
  "Explore four environments": "探索四大应用场景",
  "Abilix Educational Robot Integrated Practical Education Base Solution": "能力风暴教育机器人综合实践教育基地解决方案",
  "The Integrated Practical Activities Course is a required subject introduced by the Ministry of Education in Document No. 4 (2017) for primary and secondary schools across China. It encourages students to learn through real-life situations, using research, hands-on projects, and practical experiences to develop their overall skills.": "综合实践活动课程是教育部 2017 年第 4 号文件面向全国中小学设置的必修课程，鼓励学生在真实情境中，通过研究、动手项目和实践体验开展学习，全面发展综合能力。",
  "To help schools solve common challenges such as limited course content, educational equipment, and qualified teachers, the Abilix Educational Robot Integrated Practical Education Base offers a one-day, 8-hour program centered on artificial intelligence and robotics. The course helps students build knowledge in AI, robotics, programming, sensors, and other technology fields while developing creativity, analytical thinking, practical skills, and independent learning abilities.": "针对学校在课程内容、教学装备和专业师资等方面的常见难题，能力风暴教育机器人综合实践教育基地提供以人工智能与机器人为核心的一日 8 小时课程。课程帮助学生掌握 AI、机器人、编程、传感器等科技知识，同时培养创造力、分析思维、实践能力与自主学习能力。",
  "Abilix artificial intelligence creator practice base": "能力风暴人工智能创造者实践基地",
  "On weekends, the Abilix Educational Robot Practice Base is also open to the public, offering SITA Project Courses based on the BY and BH series.": "周末期间，能力风暴教育机器人实践基地也向公众开放，提供基于 BY 与 BH 系列的 SITA 项目课程。",
  "The SITA Project Course is an innovative program built on the SITA educational approach, focusing on developing success skills and technology literacy. The SITA educational approach was created by Dr. Yun Weimin and Professor Jake Mendelssohn. Its main goal is to develop balanced success skills - including creativity, analytical thinking, and practical ability - while improving technology literacy, nurturing future technology talent, and helping children build knowledge independently.": "SITA 项目课程基于 SITA 教育理念，着重培养成功能力与科技素养。该理念由恽为民博士与 Jake Mendelssohn 教授共同创立，旨在均衡发展创造、分析和实践等成功能力，同时提升科技素养，培养未来科技人才，并帮助孩子自主建构知识。",
  "With its world-leading SITA educational approach, advanced AI and robotics practical courses, and an educational robotics platform featuring hundreds of built-in inventions, the Abilix Educational Robot Practice Base is set to become a leader in AI and robotics practical education.": "凭借国际领先的 SITA 教育理念、先进的 AI 与机器人实践课程，以及内置数百个创新项目的教育机器人平台，能力风暴教育机器人实践基地致力于引领 AI 与机器人实践教育。",
  "Abilix educational robotics classroom": "能力风暴教育机器人课堂",
  "Solution environments": "解决方案应用场景",
  "Five Educational Functions": "五大教育功能",
  "Downloads, media and partner support library.": "下载资料、媒体内容与合作伙伴支持资源库。",
  "FAQ": "常见问题",
  "Downloading": "资料下载",
  "Brochures": "宣传册",
  "Manuals": "使用手册",
  "News": "新闻动态",
  "Videos": "视频",
  "What students build": "学生创作成果",
  "Curriculum connection": "课程关联",
  "Related products": "相关产品",
  "Resource category": "资源分类",
  "Content module": "内容模块",
  "Search": "搜索",
  "Search resources...": "搜索资源……",
  "No resources match your search.": "没有与搜索条件匹配的资源。",
  "Back to Resources": "返回资源中心",
  "No FAQs match your search.": "没有与搜索条件匹配的问题。",
  "FAQ pages": "常见问题分页",
  "Resource category": "资源分类",
  "All": "全部",
  "Software": "软件",
  "Material": "资料",
  "Specification": "规格说明",
  "Manual": "使用手册",
  "Brochure": "宣传册",
  "File Name": "文件名",
  "Size": "大小",
  "Type": "类型",
  "Date of uploading": "上传日期",
  "Download": "下载",
  "No downloads match your filters.": "没有符合筛选条件的下载资源。",
  "Download pages": "下载分页",
  "AI Educational Robot Companion": "AI 教育机器人伙伴",
  "128 verified reviews": "128 条已验证评价",
  "Taxes and shipping calculated at checkout.": "税费与运费将在结账时计算。",
  "A customizable AI learning companion combining natural conversation, creative building, and guided learning experiences for curious young minds.": "一款可定制的 AI 学习伙伴，将自然对话、创意搭建和引导式学习体验融为一体，陪伴充满好奇心的孩子成长。",
  "IN THE BOX": "包装清单",
  "Xiaoxing robot · Modular building set · Charging cable · Learning access": "小星机器人 · 模块化搭建套件 · 充电线 · 学习内容使用权限",
  "Decrease quantity": "减少数量",
  "Increase quantity": "增加数量",
  "Add to bag": "加入购物袋",
  "Buy it now": "立即购买",
  "● In stock · Ready to ship": "● 现货 · 可发货",
  "SHIPPING": "配送",
  "Tracked delivery with regional options": "支持物流追踪与区域配送选项",
  "RETURNS": "退货",
  "30-day return window": "30 天退货期限",
  "SCHOOLS": "学校采购",
  "Institutional purchasing support available": "提供机构采购支持",
  "Curriculum Leads": "课程引领",
  "Xiaoxing Enables": "小星赋能",
  "Xiaoxing is the learning interface for a six-course AI education system. The curriculum defines the goals; the robot turns them into dialogue, construction, and reflection.": "小星是六大 AI 课程体系的学习入口。课程设定目标，机器人则将目标转化为对话、搭建与反思。",
  "COURSE": "课程",
  "ACTIVITY": "活动",
  "ROBOT": "机器人",
  "THE OFFICIAL CURRICULUM": "官方课程体系",
  "Six Courses": "六大课程",
  "One Education System": "一套教育体系",
  "The six courses develop AI application ability and the human judgment needed to use AI thoughtfully, creatively, and responsibly.": "六大课程培养 AI 应用能力，以及审慎、创造性且负责任地使用 AI 所需的人类判断力。",
  "Large Language Model Application Training": "大语言模型应用能力训练",
  "Questioning Ability Training": "提问能力训练",
  "Inquiry-Based Civilization Knowledge": "探究式文明知识学习",
  "Critical Thinking Ability Training": "批判性思维能力训练",
  "Aesthetic Ability Training": "审美能力训练",
  "Value Judgment Ability Training": "价值判断能力训练",
  "THE EDUCATION PROCESS": "教育过程",
  "How Xiaoxing Supports Every Stage.": "小星如何支持每一个学习阶段",
  "SPARK CURIOSITY": "激发好奇",
  "Xiaoxing listens and develops the question.": "小星倾听并帮助深化问题。",
  "LEARN KNOWLEDGE": "学习知识",
  "Xiaoxing connects inquiry with knowledge.": "小星将探究与知识连接起来。",
  "BUILD TO CREATE": "搭建创造",
  "Xiaoxing becomes a model students build.": "小星成为学生亲手搭建的模型。",
  "SOLVE PROBLEMS": "解决问题",
  "Xiaoxing helps test, reflect, and improve.": "小星帮助学生测试、反思与改进。",
  "PRODUCT CAPABILITY / AI INTELLIGENCE": "产品能力 / AI 智能",
  "AI Connects Questions With Knowledge": "AI 连接问题与知识",
  "REASON": "推理",
  "Understand context and explain relationships.": "理解语境并解释事物之间的关系。",
  "RESEARCH": "研究",
  "Explore knowledge across disciplines.": "探索跨学科知识。",
  "APPLY": "应用",
  "Use language, vision, 3D, music, or physics models.": "运用语言、视觉、3D、音乐或物理模型。",
  "PRODUCT INTELLIGENCE": "产品智能",
  "1.6T parameters": "1.6 万亿参数",
  "DeepSeek V4 · 1.6T parameters": "DeepSeek V4 · 1.6 万亿参数",
  "Multilingual voice": "多语言语音交互",
  "Fast response": "快速响应",
  "PRODUCT REFERENCE": "产品配置参考",
  "Built for Long-Term Learning": "为长期学习而打造",
  "Xiaoxing AI Educational Robot": "小星 AI 教育机器人",
  "Six official AI-era ability courses": "六大官方 AI 时代能力课程",
  "1-on-1 Learning Advisor": "一对一学习顾问",
  "Lifetime Q&A Support": "终身问答支持",
  "Setup & Usage Guidance": "安装与使用指导",
  "CURRICULUM IN PRACTICE": "课程实践",
  "See Learning Become Action": "让学习转化为行动",
  "Student-led inquiry": "学生自主探究",
  "A student question begins the investigation.": "从学生提出的问题开启探究。",
  "Hands-on creation": "动手创造",
  "Knowledge becomes a physical working model.": "让知识变成可运行的实体模型。",
  "Evidence and judgment": "证据与判断",
  "Evidence guides discussion, revision, and judgment.": "以证据引导讨论、修正与判断。",
  "You may also like": "你可能还喜欢",
  "View all products →": "查看全部产品 →",
  "Robotics · Curriculum · Project practice": "机器人 · 课程 · 项目实践"
};

Object.assign(zhTranslations, {
  "Modular educational robot family": "模块系列教育机器人",
  "Krypton educational robot family": "氪系列教育机器人",
  "Creative educational robot family": "创意系列教育机器人",
  "School Krypton educational robot family": "学校氪系列教育机器人",
  "Add Modular H1-S to favorites": "将模块系列 H1-S 加入收藏",
  "Add Krypton 8 to favorites": "将氪8加入收藏",
  "Add School Krypton 201 to favorites": "将学校氪 201 加入收藏",
  "Add Modular H1-B to favorites": "将模块系列 H1-B 加入收藏",
  "Add C203 to favorites": "将 C203 加入收藏",
  "Add Krypton 6 to favorites": "将氪6加入收藏",
  "Add Transmission Kit to favorites": "将传动套件加入收藏",
  "Parent and child learning with Xiaoxing": "家长和孩子与小星一起学习",
  "Student programming a robot": "学生为机器人编程",
  "Teen students engineering robots": "青少年学生开展机器人工程实践",
  "Xiaoxing AI Educational Robot Companion": "小星 AI 教育机器人伙伴",
  "Xiaoxing view 1": "小星视图 1",
  "Xiaoxing view 2": "小星视图 2",
  "Xiaoxing view 3": "小星视图 3",
  "Xiaoxing view 4": "小星视图 4",
  "Children learning with Xiaoxing": "孩子们与小星一起学习",
  "Official curriculum books": "官方课程教材",
  "Xiaoxing education course bundle": "小星教育课程套装"
});

Object.assign(zhTranslations, {
  "How to delete the programs inside the Ccon102 controller?": "如何删除 Ccon102 控制器内的程序？",
  "The Ccon102 controller is like a mobile U disk. First, connect it to a computer. Next, open the “My Computer” folder on the computer desktop. Finally, open the “Removable Disks” folder, find the programs you want to remove, and delete them.": "Ccon102 控制器的使用方式类似移动 U 盘。首先将其连接到电脑，然后打开桌面上的“我的电脑”，进入“可移动磁盘”文件夹，找到需要移除的程序并删除。",
  "What is the right way to charge batteries?": "电池的正确充电方式是什么？",
  "First, remove the batteries from the controller. Next, connect the configurator and the batteries to charge the batteries separately.": "首先从控制器中取出电池，然后连接配置器与电池，对电池单独充电。",
  "How to tell whether a battery is fully charged?": "如何判断电池是否已充满？",
  "There is an indicator on the charger. A red light means charging is in progress; a green light means the battery is fully charged. For safe use, a single charge should not exceed 12 hours.": "充电器上设有指示灯：红灯表示正在充电，绿灯表示已经充满。为安全使用，单次充电请勿超过 12 小时。",
  "How many programs can the Ccon102 controller store?": "Ccon102 控制器可以存储多少个程序？",
  "The controller has 3.96 MB of memory. A program is usually 150 KB to 500 KB, so a controller can store up to about 27 programs.": "控制器拥有 3.96 MB 内存。单个程序通常为 150 KB 至 500 KB，因此最多可存储约 27 个程序。",
  "Can the Ccon102 controllers communicate with each other?": "Ccon102 控制器之间可以相互通信吗？",
  "Yes.": "可以。",
  "When a user uses the C language in VJC to do programming, can they convert the program directly into a flow diagram?": "使用 VJC 的 C 语言编程时，能否将程序直接转换为流程图？",
  "A program written in C cannot be converted into a flow diagram. However, a flow diagram can be completely converted into a corresponding program written in C.": "C 语言程序无法转换为流程图，但流程图可以完整转换为对应的 C 语言程序。",
  "To which port should the H1-100 sensor be connected on the Ccon101 controller?": "H1-100 传感器应连接到 Ccon101 控制器的哪个端口？",
  "It should be connected to the Motor port.": "应连接到电机端口。",
  "How frequently should the H series battery be charged?": "H 系列电池应多久充电一次？",
  "The set uses a lithium battery. If it is not used for a long time, it is recommended that the battery be charged once a month.": "套件使用锂电池。如长期不用，建议每月充电一次。",
  "Is the car required to always patrol the line in the game? May the non-line based approach be used to navigate the car?": "比赛中小车是否必须始终沿线巡航？可以使用非巡线方式导航吗？",
  "You may use the “Start Motor” module in the program. In this case, the car is navigated according to time rather than the navigation line.": "可以在程序中使用“启动电机”模块。此时小车将按照时间而非导航线运行。",
  "Why is there no navigation line for the car?": "为什么小车没有导航线？",
  "The initial setup of the program is “Collect from the Environment”.": "程序的初始设置为“从环境采集”。",
  "Will the reflection of the game map affect the navigation line for the car?": "比赛地图反光会影响小车巡线吗？",
  "There is some impact, but normal line navigation is not affected because the luminosity of the gray sensor under the car is strong enough and navigation is primarily controlled by that sensor.": "会有一定影响，但小车下方灰度传感器的光照强度足够，且巡线主要由该传感器控制，因此正常巡线不会受到影响。",
  "What are the differences between the C202 game set and the C203 game set?": "C202 与 C203 竞赛套装有什么区别？",
  "Both are game sets officially designated by WER. The C202 has two closed-loop motors and one DC motor, while the C203 has three DC motors. The C202 uses a metal universal wheel, while the C203 uses a guide wheel. The C202 controller uses rechargeable batteries, while the C203 controller uses AA batteries.": "两者均为 WER 官方指定竞赛套装。C202 配有两个闭环电机和一个直流电机，C203 配有三个直流电机；C202 使用金属万向轮，C203 使用导向轮；C202 控制器使用充电电池，C203 控制器使用 AA 电池。",
  "Catalogue of Abilix educational robot products": "能力风暴教育机器人产品目录",
  "User manual of Abilix Krypton App": "能力风暴氪系列 App 用户手册",
  "Spec of Krypton series (v2)": "氪系列规格说明（v2）",
  "Spec of Krypton series": "氪系列规格说明",
  "Krypton Building manuals.rar": "氪系列搭建手册.rar",
  "C202 Building Manual v1.0.pdf": "C202 搭建手册 v1.0.pdf",
  "C201 Building Manual v1.0.pdf": "C201 搭建手册 v1.0.pdf",
  "Spec of H1-S.pdf": "H1-S 规格说明.pdf",
  "Spec of H1-B.pdf": "H1-B 规格说明.pdf",
  "Spec of C1-X.pdf": "C1-X 规格说明.pdf",
  "Spec of C1-T.pdf": "C1-T 规格说明.pdf",
  "Spec of C1-S.pdf": "C1-S 规格说明.pdf",
  "Spec of C1-P.pdf": "C1-P 规格说明.pdf",
  "C1-X-Building Manual.zip": "C1-X 搭建手册.zip",
  "C1-T Building Manual.zip": "C1-T 搭建手册.zip",
  "C1-P Building Manual": "C1-P 搭建手册",
  "H1-B building manual.zip": "H1-B 搭建手册.zip",
  "H1-S building manual": "H1-S 搭建手册",
  "H1-S Parts list.pdf": "H1-S 零件清单.pdf",
  "H1-B-Part-list.pdf": "H1-B 零件清单.pdf",
  "C1-X material list": "C1-X 材料清单",
  "C1-T material list": "C1-T 材料清单",
  "C1-S-material list 2": "C1-S 材料清单 2",
  "C1-S-material list 1": "C1-S 材料清单 1",
  "(C203) Building Manual": "C203 搭建手册",
  "C1-M Creative Course Medium Kit Building Manual": "C1-M 创意课程中级套装搭建手册",
  "C1-B Creative Course Beginner Kit Building Manual": "C1-B 创意课程入门套装搭建手册",
  "C1-S Building manual": "C1-S 搭建手册",
  "C1-P material list v1.0": "C1-P 材料清单 v1.0",
  "C1-M-material list": "C1-M 材料清单",
  "C1-B-material list": "C1-B 材料清单",
  "Revolutionary Solutions For STEM Education": "革新 STEM 教育的解决方案"
});

Object.assign(zhTranslations, {
  "Two paths. One future.": "两条路径，共赴未来。",
  "Start with the kind of learning experience you want to build.": "从你希望构建的学习体验出发。",
  "Explore the complete Abilix product ecosystem through two focused, independent pathways.": "通过两条聚焦且相互独立的路径，探索能力风暴完整产品生态。",
  "Educational Robots": "教育机器人",
  "A structured K-12 robotics pathway for classrooms, maker spaces and competition programs.": "面向课堂、创客空间与赛事项目的系统化 K-12 机器人学习路径。",
  "Learning stages": "学习阶段",
  "Product families": "产品系列",
  "Competition ready": "赛事应用",
  "Explore education line": "进入教育机器人",
  "A focused AI learning line built around intelligent interaction, dedicated courses and future-facing challenges.": "围绕智能交互、专属课程与前沿挑战打造的独立 AI 学习产品线。",
  "AI interaction": "AI 交互",
  "Dedicated courses": "专属课程",
  "AI challenge path": "AI 赛事通道",
  "Explore AI line": "进入 AI 机器人",
  "Choose by learning goal": "按学习目标选择",
  "Classroom & maker education": "课堂与创客教育",
  "Build, program and engineer through progressive product families.": "通过循序渐进的产品系列开展搭建、编程与工程实践。",
  "AI literacy & exploration": "AI 素养与探索",
  "Talk, question, create and reflect with an intelligent learning companion.": "与智能学习伙伴一起对话、提问、创造与反思。",
  "Education pathway": "教育机器人路径",
  "From first build to competition day.": "从第一次搭建，到站上赛场。",
  "Products are organized by learning stage, while every series connects to curriculum, classroom practice and a clear competition pathway.": "产品按学习阶段组织，每个系列均连接课程、课堂实践与清晰的赛事成长路径。",
  "Foundations": "启蒙基础",
  "Primary": "小学阶段",
  "Secondary & Competition": "中学与竞赛",
  "All stages": "全部阶段",
  "Ages 4-6 · Creative foundations": "4-6 岁 · 创意启蒙",
  "Ages 7-12 · Build and program": "7-12 岁 · 搭建与编程",
  "Ages 13-18 · Engineer and compete": "13-18 岁 · 工程与竞赛",
  "View product details": "查看产品详情",
  "Education, not just equipment.": "不止是设备，更是教育体系。",
  "Each product family is positioned inside a practical teaching model, so schools can plan spaces, projects and outcomes together.": "每个产品系列都嵌入可实施的教学模式，帮助学校统筹空间、项目与学习成果。",
  "Project-based learning": "项目制学习",
  "Students move from a real question to research, construction, testing and presentation.": "学生从真实问题出发，完成研究、搭建、测试与展示。",
  "Maker spaces": "创客空间",
  "Flexible kits and reusable components support open-ended invention and teamwork.": "灵活套件与可复用零件支持开放式创造和团队协作。",
  "SITA development": "SITA 能力培养",
  "Creative, analytical and practical intelligence grow together through purposeful tasks.": "通过有目标的任务，让创造、分析与实践能力协同成长。",
  "One pathway, four stages of challenge.": "一条路径，四级挑战。",
  "Classroom projects": "课堂项目",
  "Local events": "地方赛事",
  "Regional selection": "区域选拔",
  "National & global WER": "全国及全球 WER",
  "Browse learning resources": "浏览配套资源",
  "AI robot pathway": "AI 机器人路径",
  "Meet Xiaoxing. Learn with AI, not just about it.": "认识小星：与 AI 一起学习，而不只是学习 AI。",
  "A dedicated route for families, schools and event partners who want intelligent conversation, guided inquiry and creative AI practice.": "为关注智能对话、引导式探究与 AI 创造实践的家庭、学校和活动伙伴打造的专属路径。",
  "Discover Xiaoxing": "了解小星",
  "View six-course system": "查看六大课程",
  "What makes this line different": "这条产品线有何不同",
  "Natural interaction": "自然交互",
  "Voice, vision and conversational guidance turn the robot into an active learning interface.": "语音、视觉与对话式引导，让机器人成为主动学习入口。",
  "Course-led experience": "课程驱动体验",
  "Six dedicated courses develop questioning, critical thinking, aesthetics and value judgment.": "六大专属课程培养提问、批判思维、审美与价值判断能力。",
  "Independent AI channel": "独立 AI 通道",
  "AI products, learning resources and event opportunities stay together in one focused destination.": "AI 产品、学习资源与活动机会集中在一个清晰独立的目的地。",
  "One product. A complete AI learning loop.": "一款产品，完整 AI 学习闭环。",
  "Ask": "提问",
  "Explore": "探究",
  "Create": "创造",
  "Xiaoxing listens and helps shape a meaningful question.": "小星倾听并帮助形成有价值的问题。",
  "Knowledge and multiple models support guided inquiry.": "知识与多种模型支持引导式探究。",
  "Ideas become stories, models, programs and presentations.": "想法转化为故事、模型、程序与展示。",
  "Dedicated AI competition channel": "AI 专属赛事通道",
  "This reserved module gives AI-focused users a direct route to challenge briefs, registration and event resources as the program expands.": "该预留模块为 AI 用户提供直达赛题、报名与活动资源的通道，并可随项目发展持续扩展。",
  "Competition module coming next": "赛事模块即将上线",
  "Back to Educational Robots": "返回教育机器人",
  "Educational robot detail": "教育机器人详情",
  "Designed for structured learning, open creation and competition practice.": "为系统学习、开放创造与赛事实践而设计。",
  "Recommended stage": "适用阶段",
  "Learning focus": "学习重点",
  "Competition use": "赛事应用",
  "Key specifications": "核心参数",
  "Curriculum fit": "课程匹配",
  "Suggested learning flow": "建议学习流程",
  "Explore the concept": "理解概念",
  "Build and program": "搭建与编程",
  "Test and improve": "测试与改进",
  "Present or compete": "展示或参赛",
  "Resources for this model": "该型号配套资源",
  "Specifications": "规格说明",
  "Building manual": "搭建手册",
  "Course materials": "课程资料",
  "Competition guide": "赛事指南",
  "Back to all products": "返回全部产品"
});

Object.assign(zhTranslations, {
  "Explore education line →": "进入教育机器人 →",
  "Explore AI line →": "进入 AI 机器人 →",
  "From first build": "从第一次搭建",
  "to competition day.": "到站上赛场。",
  "Explore the range ↓": "浏览产品系列 ↓",
  "Plan the product, space and learning outcome together.": "统筹产品、空间与学习成果。",
  "For teachers & partners": "面向教师与合作伙伴",
  "Continue from product to implementation.": "从产品选择继续走向教学实施。",
  "Meet Xiaoxing.": "认识小星。",
  "Learn with AI,": "与 AI 一起学习，",
  "not just about it.": "而不只是学习 AI。",
  "Focused on the AI experience.": "聚焦完整 AI 学习体验。",
  "Six Courses.": "六大课程。",
  "One AI education system.": "一套 AI 教育体系。",
  "The curriculum defines the goals; Xiaoxing turns them into dialogue, construction and reflection.": "课程设定学习目标，小星将目标转化为对话、搭建与反思。",
  "A direct route from practice to challenge.": "从日常实践直达 AI 挑战。",
  "Challenge": "挑战",
  "Channel": "通道",
  "← Products": "← 产品中心",
  "← Back to Educational Robots": "← 返回教育机器人",
  "Product image placeholder": "产品图片占位，可随时替换",
  "Quick facts for product comparison.": "用于快速比较产品的核心信息。",
  "Continue without searching again.": "无需重新查找，继续获取配套内容。",
  "Product content and imagery can be replaced without changing the page structure.": "后续可直接替换产品内容与图片，无需调整页面结构。",
  "Creative construction and observation": "创意搭建与观察",
  "Computational thinking and logic": "计算思维与逻辑",
  "Structures, transmission and dynamics": "结构、传动与动力",
  "Programming, sensors and control": "编程、传感器与控制",
  "Strategy, testing and iteration": "策略、测试与迭代",
  "Hands-on STEM projects": "动手实践型 STEM 项目",
  "Mechanisms and engineering design": "机械结构与工程设计",
  "53 brick types": "53 种积木件",
  "1550 components": "1550 个组件",
  "33 sensor modes": "33 种传感模式",
  "10 programmable actuators": "10 个可编程执行器",
  "Modular joints": "模块化关节",
  "Reusable components": "可复用组件",
  "Open-ended forms": "开放式形态",
  "Beginner projects": "启蒙项目"
});

Object.assign(zhTranslations, {
  "Choose by learning focus.": "按学习方向选择",
  "AI Questions & Exploration": "AI 问答与探索",
  "Classroom & Maker Education": "课堂与创客教育",
  "Exclusive courses": "专属课程",
  "AI competition access": "AI 竞赛通道",
  "Build. Program.": "搭建 · 编程",
  "Create what comes next.": "创造下一种可能。",
  "Explore six Abilix product families, then move directly into age-matched products, learning resources and competition pathways.": "先探索六大能力风暴产品系列，再直接进入按年龄匹配的产品、学习资源与竞赛路径。",
  "Explore product series ↓": "探索产品系列 ↓",
  "Product series": "产品系列",
  "Products by age": "按年龄选产品",
  "Education model": "教育模式",
  "Competition path": "竞赛路径",
  "Browse by series": "按系列浏览",
  "Six series. Two clear statuses.": "六大系列，两种清晰状态。",
  "Krypton and School Krypton are currently available. Creative, Modular, Oculus and Everest remain visible as part of the product and technology archive.": "Krypton 与 School Krypton 当前在售；Creative、Modular、Oculus 与 Everest 作为产品及技术档案继续展示。",
  "Available now": "当前在售",
  "Legacy showcase": "历史展示",
  "Legacy showcase · Not for sale": "历史展示 · 不再售卖",
  "Hover, click, or use the arrow keys to explore each series.": "悬停、点击或使用方向键浏览各个系列。",
  "Find the right learning level": "找到合适的学习阶段",
  "After choosing a series, compare individual models by learner age. Availability remains visible on every card.": "选定系列后，可按学习者年龄比较具体型号；每张卡片都会持续标明销售状态。",
  "Available": "在售",
  "Buy Now": "立即购买",
  "Back to Product Center": "返回产品中心",
  "← Back to Product Center": "← 返回产品中心",
  "AI Robots": "AI 机器人",
  "Xiaoxing.": "小星。",
  "A new member of the family": "AI 时代的",
  "in the AI era.": "家庭新成员。",
  "Built on Abilix's 30 years of R&D experience and powered by DeepSeek, Xiaoxing combines intelligent companionship with a broad knowledge base to inspire curiosity, learning, and creativity.": "依托能力风暴 30 年研发积累并由 DeepSeek 驱动，小星将智能陪伴与广博知识库结合，激发好奇、学习与创造。",
  "Xiaoxing is designed to develop AI literacy and creativity, helping children become creators of the future.": "小星旨在培养 AI 素养与创造力，帮助孩子成为未来的创造者。"
});

const queryLanguage = new URLSearchParams(location.search).get("lang");
let currentLanguage = queryLanguage === "en" ? "en" : localStorage.getItem("abilix-language") === "en" ? "en" : "zh";

function t(value) {
  if (currentLanguage !== "zh" || typeof value !== "string") return value;
  return zhTranslations[value] || value;
}

function localize(root = document) {
  if (currentLanguage !== "zh") return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const match = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (match && match[2]) node.nodeValue = match[1] + t(match[2]) + match[3];
  });
  root.querySelectorAll?.("[aria-label], [placeholder], [title], [alt]").forEach(element => {
    ["aria-label", "placeholder", "title", "alt"].forEach(attribute => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, t(element.getAttribute(attribute)));
    });
  });
}

const images = {
  homeHero: A + "g16w5sdf45.png",
  gatewayAi: A + "gateway-ai-0903.jpg",
  gatewayEducation: A + "gateway-education-0903.jpg",
  xiaoxingHero: A + "xiaoxing-hero-0903.jpg",
  leader: A + "img-001-removebg-preview.png",
  wer: A + "15c8130d-936d-4ef2-9ca3-d8b31afdcf84.png",
  productHero: A + "bcd0058e-fa0a-4069-8530-68585a88dcb6.png",
  age4: A + "产品宣传ai图.png",
  age7: A + "1ee33c5a-9f2c-4499-8313-final1111.png",
  age13: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  curriculum: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  curriculumDiagram: A + "06c00cfd-1c95-4a63-921d-ced56972e473.png",
  resources: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  xiaoxing: A + "6ccc952d-6b6b-4dfb-8396-db3a54cab7ee.png",
  xiaoxingRobot: A + "18b0e2ef-adfa-4b2b-ba64-b5974d3a5f08.png",
  children: A + "8696de9c-2f55-4ebf-8bcd-b63f9391ef53.png",
  inquiry: A + "90079b55-28eb-4ace-91b8-adc8c3b23b7c.png",
  creation: A + "c2ea85b1-fcc2-4a1b-a5ec-50f157c065fb.png",
  evidence: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  bundle: A + "e40b44c7-7f48-4dd0-b363-5b00c4a5b595.png"
};

const products = [
  { id: "xiaoxing", category: "ai", name: "Xiaoxing", age: "4-6", stage: "foundations", image: images.xiaoxingRobot, text: "Your own customizable AI robot companion for creative learning.", detail: true, badge: "New!" },
  { id: "modular-h1-s", category: "education", name: "Modular H1-S", age: "7-12", stage: "primary", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", text: "Six-face attachment, powerful brain, voice and image recognition." },
  { id: "krypton-8", category: "education", name: "Krypton 8", age: "7-12", stage: "primary", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", text: "Unlock imagination through structures, transmission, dynamics and STEM kits." },
  { id: "school-krypton-201", category: "education", name: "School Krypton 201", age: "13-18", stage: "secondary", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", text: "Scratch, C, Python, AI module interface and classroom sensors." },
  { id: "modular-h1-b", category: "education", name: "Modular H1-B", age: "4-6", stage: "foundations", image: A + "588bc550-185b-4e1f-8376-235aed024885.png", text: "Modular robot kit for creative STEM learning." },
  { id: "c203", category: "education", name: "C203", age: "7-12", stage: "primary", image: A + "g4a5a54f-esd4f4-02.png", text: "Free-build robot car, program and test own solution in WER contest." },
  { id: "krypton-6", category: "education", name: "Krypton 6", age: "7-12", stage: "primary", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", text: "A versatile robot kit designed for hands-on STEM education experiences." },
  { id: "transmission-kit", category: "education", name: "Transmission Kit", age: "13-18", stage: "secondary", image: A + "9c57f744-1e50-4fdf-bf8e-8faa5619fa73.png", text: "Multiple-DOF humanoid design, action editor and reconfigurable projects." }
];

const seriesCatalog = [
  {
    id: "krypton",
    name: "Krypton",
    nameZh: "氪系列",
    status: "current",
    age: "6–12",
    ages: ["6-9", "9-12"],
    image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png",
    description: "A six-face construction system for progressive building, programming and STEM projects.",
    descriptionZh: "采用六面搭建体系，支持循序渐进的结构设计、编程与 STEM 项目学习。",
    overview: "Krypton combines reusable structural parts, controllers, motors and sensors in an open construction platform. The verified specifications below come from the official legacy Krypton product pages.",
    overviewZh: "Krypton 将可重复使用的结构件、控制器、电机与传感器整合进开放式搭建平台。下方参数来自旧版官方 Krypton 产品页面。",
    learning: ["Flowchart programming", "C programming", "Progressive construction projects", "Sensor and actuator experiments"],
    learningZh: ["流程图编程", "C 语言编程", "渐进式搭建项目", "传感器与执行器实验"],
    officialUrl: "http://abilix.com/index.php/krypton",
    models: [
      { id: "krypton-0", name: "Krypton 0", age: "6–9", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", representative: true, buildingParts: "409", partTypes: "47", actuators: "2 types / 3 total — small motors and speaker", actuatorsZh: "2 种 / 共 3 个——小电机、扬声器", sensors: "3 types / 4 total — touch, grayscale and position", sensorsZh: "3 种 / 共 4 个——碰撞、灰度、位置" },
      { id: "krypton-2", name: "Krypton 2", age: "6–9", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", representative: true, buildingParts: "723", partTypes: "57", actuators: "2 types / 3 total — small motors and speaker", actuatorsZh: "2 种 / 共 3 个——小电机、扬声器", sensors: "5 types / 7 total — position, ultrasonic, grayscale, touch and color", sensorsZh: "5 种 / 共 7 个——位置、超声、灰度、碰撞、颜色" },
      { id: "krypton-4", name: "Krypton 4", age: "6–9", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", representative: true, buildingParts: "424", partTypes: "48", actuators: "3 types / 5 total — small motors, speaker and LED", actuatorsZh: "3 种 / 共 5 个——小电机、扬声器、LED 灯", sensors: "4 types / 5 total — compass, gyroscope, microphone and position", sensorsZh: "4 种 / 共 5 个——指南针、陀螺仪、麦克风、位置" },
      { id: "krypton-6", name: "Krypton 6", age: "9–12", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", buildingParts: "816", partTypes: "57", actuators: "4 types / 6 total — large and small motors, speaker and LED", actuatorsZh: "4 种 / 共 6 个——大电机、小电机、扬声器、LED 灯", sensors: "7 types / 13 total — gyroscope, compass, microphone, position, ultrasonic, grayscale and touch", sensorsZh: "7 种 / 共 13 个——陀螺仪、指南针、麦克风、位置、超声、灰度、碰撞" },
      { id: "krypton-8", name: "Krypton 8", age: "9–12", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", buildingParts: "1,122", partTypes: "57", actuators: "4 types / 8 total — large and small motors, speaker and LED", actuatorsZh: "4 种 / 共 8 个——大电机、小电机、扬声器、LED 灯", sensors: "9 types / 21 total — gyroscope, compass, microphone, position, camera, ultrasonic, grayscale, color and touch", sensorsZh: "9 种 / 共 21 个——陀螺仪、指南针、麦克风、位置、摄像头、超声、灰度、颜色、碰撞" }
    ],
    videos: ["Krypton series introduction", "Tracked robot project", "Hair-swinging performer", "Quadruped mecha", "Gear-driven rocking figure", "Wind-and-fire wheel", "Elephant", "Timer alarm", "Motorhome", "Guitar", "Wolverine claws", "Vision engineering vehicle", "Spirograph ruler", "Future band", "Loop train"]
  },
  {
    id: "school-krypton",
    name: "School Krypton",
    shortName: "SK",
    nameZh: "学校氪系列",
    status: "current",
    age: "9–12 / 12+",
    ages: ["9-12", "12+"],
    image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png",
    description: "A classroom and competition platform supporting Scratch, C, Python, AI modules and expanded sensors.",
    descriptionZh: "面向课堂教学与竞赛实践，支持 Scratch、C、Python、AI 模块及扩展传感器。",
    overview: "School Krypton is organized for structured teaching, team projects and WER preparation. Product-level quantities not present in the supplied material remain clearly marked for confirmation.",
    overviewZh: "学校氪面向结构化教学、团队项目与 WER 备赛。现有资料未提供的型号数量参数均明确标注为待确认。",
    learning: ["Scratch", "C", "Python", "AI module interface", "Classroom sensors", "WER team projects"],
    learningZh: ["Scratch", "C 语言", "Python", "AI 模块接口", "课堂传感器", "WER 团队项目"],
    models: ["SK209", "SK509", "SK201", "SK501", "SK901"].map((name, index) => ({ id: name.toLowerCase(), name, age: index < 2 ? "9–12" : "12+", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", representative: name !== "SK201", buildingParts: "Pending official data", buildingPartsZh: "官方数据待补充", partTypes: "Pending official data", partTypesZh: "官方数据待补充", actuators: name === "SK201" ? "Programmable actuators — quantity pending official data" : "Pending official data", actuatorsZh: name === "SK201" ? "可编程执行器——数量待官方资料补充" : "官方数据待补充", sensors: name === "SK201" ? "Classroom sensors and AI module interface — quantity pending" : "Pending official data", sensorsZh: name === "SK201" ? "课堂传感器及 AI 模块接口——数量待补充" : "官方数据待补充" })),
    videos: []
  },
  {
    id: "creative",
    name: "Creative",
    nameZh: "创意系列",
    status: "legacy",
    age: "6–12 / 12+",
    ages: ["6-9", "9-12", "12+"],
    image: A + "044086fe-6d3b-473d-a292-f515f6ef8f73.png",
    description: "An earlier six-face classroom platform retained for teaching reference and Abilix product history.",
    descriptionZh: "早期六面积木课堂平台，现保留用于教学资料查询与能力风暴产品历史展示。",
    overview: "Creative combined construction, transmission, dynamics and intelligent control kits. It is presented as a legacy showcase and is not offered for purchase.",
    overviewZh: "Creative 曾将结构、传动、动力与智能控制套件组合成系统化学习平台。目前仅作经典产品展示，不提供购买入口。",
    learning: ["Flowchart programming", "Structured classroom projects", "Transmission and dynamics", "Teaching materials"],
    learningZh: ["流程图编程", "结构化课堂项目", "传动与动力学习", "配套教学材料"],
    models: [
      { id: "c1-t", name: "C1-T", age: "6–9", image: A + "044086fe-6d3b-473d-a292-f515f6ef8f73.png" },
      { id: "c1-x", name: "C1-X", age: "9–12", image: A + "044086fe-6d3b-473d-a292-f515f6ef8f73.png" },
      { id: "c1-p", name: "C1-P", age: "9–12", image: A + "g4a5a54f-esd4f4-02.png" },
      { id: "c1-s", name: "C1-S", age: "12+", image: A + "9c57f744-1e50-4fdf-bf8e-8faa5619fa73.png" },
      { id: "creative-pending", name: "Additional model", nameZh: "其他型号", age: "—", image: A + "044086fe-6d3b-473d-a292-f515f6ef8f73.png", placeholder: true }
    ].map(model => ({ ...model, representative: true, buildingParts: "Pending official data", buildingPartsZh: "官方数据待补充", partTypes: "Pending official data", partTypesZh: "官方数据待补充", actuators: "Pending official data", actuatorsZh: "官方数据待补充", sensors: "Pending official data", sensorsZh: "官方数据待补充" })),
    videos: []
  },
  {
    id: "modular",
    name: "Modular",
    nameZh: "模块系列（伯牙）",
    status: "legacy",
    age: "6–12",
    ages: ["3-6", "6-9", "9-12"],
    image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png",
    description: "The Boya modular platform uses reconfigurable joints, intelligent motors and Wi-Fi control for creative structures.",
    descriptionZh: "伯牙模块平台通过可重构关节、智能电机与 Wi-Fi 控制支持创意结构搭建。",
    overview: "The official legacy site identifies Boya as the Abilix modular series. The selected five models below use verified specifications from those official pages.",
    overviewZh: "旧版官网将 Boya（伯牙）定义为能力风暴模块系列。下列五个型号采用对应官方页面中的已核实参数。",
    learning: ["Modular construction", "Wi-Fi controller", "Action editing", "Multi-DOF creative projects"],
    learningZh: ["模块化搭建", "Wi-Fi 控制器", "动作编辑", "多自由度创意项目"],
    officialUrl: "http://abilix.com/index.php/boya",
    models: [
      { id: "modular-h1-b", name: "Modular H1-B", age: "3–6", buildingParts: "Pending official quantity", buildingPartsZh: "官方数量待补充", partTypes: "Modular joints and reusable components", partTypesZh: "模块关节与可重复使用组件", actuators: "Pending official data", actuatorsZh: "官方数据待补充", sensors: "Pending official data", sensorsZh: "官方数据待补充" },
      { id: "modular-h1-s", name: "Modular H1-S", age: "6–9", buildingParts: "Pending official quantity", buildingPartsZh: "官方数量待补充", partTypes: "Six-face attachment system", partTypesZh: "六面连接系统", actuators: "Programmable motion — quantity pending", actuatorsZh: "支持可编程运动——数量待补充", sensors: "Voice and image recognition — quantity pending", sensorsZh: "支持语音与图像识别——数量待补充" },
      { id: "boya-4", name: "Boya 4", age: "9–12", buildingParts: "186 components", buildingPartsZh: "共 186 个器件", partTypes: "Head with light and camera, large feet ×2, small feet ×4", partTypesZh: "带灯光与摄像头的头部，大脚×2，小脚×4", actuators: "4 intelligent motors", actuatorsZh: "智能电机×4", sensors: "Camera", sensorsZh: "摄像头" },
      { id: "boya-6", name: "Boya 6", age: "9–12", buildingParts: "361 components", buildingPartsZh: "共 361 个器件", partTypes: "Head with light and camera, large feet ×4, small feet ×6", partTypesZh: "带灯光与摄像头的头部，大脚×4，小脚×6", actuators: "8 intelligent motors and lighting", actuatorsZh: "智能电机×8、灯光", sensors: "Camera and sonar", sensorsZh: "摄像头、声呐" },
      { id: "boya-8", name: "Boya 8", age: "9–12", buildingParts: "316 components", buildingPartsZh: "共 316 个器件", partTypes: "Head with light and camera, large feet ×2, small feet ×6", partTypesZh: "带灯光与摄像头的头部，大脚×2，小脚×6", actuators: "16 intelligent motors", actuatorsZh: "智能电机×16", sensors: "Camera and sonar", sensorsZh: "摄像头、声呐" }
    ].map(model => ({ ...model, image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", representative: true })),
    videos: ["Boya series introduction", "Bat", "Peacock", "Sika deer", "Paper crane", "Giraffe", "Mouse", "Monkey", "Bee", "Guard mecha", "Alien", "Dragon knight", "Scorpion", "Woodpecker"]
  },
  {
    id: "oculus",
    name: "Oculus",
    nameZh: "奥科流思",
    status: "legacy",
    age: "6–12",
    ages: ["6-9", "9-12"],
    image: A + "1649d71a-b80c-499b-96ca-73ed67f54c79.png",
    description: "A mobile robot series for autonomous movement, interaction and home learning exploration.",
    descriptionZh: "面向自主移动、人机互动与家庭学习探索的移动机器人系列。",
    overview: "Oculus is retained as a legacy mobile platform. Dimensions, sensor counts, actuator counts, controllers and batteries below are taken from its official legacy pages.",
    overviewZh: "Oculus 作为经典移动平台保留展示。以下尺寸、传感器、执行器、控制器与电池数据来自旧版官方页面。",
    learning: ["Abilix Brain", "Autonomous movement", "Obstacle avoidance", "Interactive exploration"],
    learningZh: ["Abilix Brain", "自主移动", "避障实践", "互动探索"],
    officialUrl: "http://abilix.com/index.php/oculus",
    models: [
      { id: "oculus-0", name: "Oculus 0", age: "6–9", buildingParts: "Assembled mobile platform · 22 cm · 1.4 kg", buildingPartsZh: "整机移动平台 · 高 22cm · 重 1.4kg", partTypes: "Abilix Brain · 6 × AA batteries", partTypesZh: "Abilix Brain · 5号电池×6", actuators: "16 total — 3 motors, 11 LEDs and 2 stereo speakers", actuatorsZh: "共16个——3个电机、11个LED灯、2个立体声喇叭", sensors: "3 types / 5 total — touch, infrared and position", sensorsZh: "3种 / 共5个——触觉、红外、位置" },
      { id: "oculus-2", name: "Oculus 2", age: "6–9", buildingParts: "Assembled mobile platform · 25 cm · 1.8 kg", buildingPartsZh: "整机移动平台 · 高25cm · 重1.8kg", partTypes: "Abilix Brain · 1500mAh lithium battery", partTypesZh: "Abilix Brain · 1500mAh锂电池", actuators: "24 total — 4 motors, 17 LEDs, 2 stereo speakers and display", actuatorsZh: "共24个——4个电机、17个LED灯、2个立体声喇叭及显示屏", sensors: "10 types / 21 total", sensorsZh: "10种 / 共21个传感器" },
      { id: "oculus-4", name: "Oculus 4", age: "9–12", buildingParts: "Assembled mobile platform · 30 cm · 2.2 kg", buildingPartsZh: "整机移动平台 · 高30cm · 重2.2kg", partTypes: "Abilix Brain · 2200mAh lithium battery", partTypesZh: "Abilix Brain · 2200mAh锂电池", actuators: "26 total — 4 motors, 19 LEDs, 2 stereo speakers and display", actuatorsZh: "共26个——4个电机、19个LED灯、2个立体声喇叭及显示屏", sensors: "10 types / 22 total", sensorsZh: "10种 / 共22个传感器" },
      { id: "oculus-6", name: "Oculus 6", age: "9–12", buildingParts: "Assembled mobile platform · 36 cm · 2.8 kg", buildingPartsZh: "整机移动平台 · 高36cm · 重2.8kg", partTypes: "Abilix Brain · 2800mAh lithium battery", partTypesZh: "Abilix Brain · 2800mAh锂电池", actuators: "27 total — 5 motors, 19 LEDs, 2 stereo speakers and display", actuatorsZh: "共27个——5个电机、19个LED灯、2个立体声喇叭及显示屏", sensors: "11 types / 24 total", sensorsZh: "11种 / 共24个传感器" },
      { id: "oculus-8", name: "Oculus 8", age: "9–12", buildingParts: "Assembled mobile platform · 42 cm · 3.4 kg", buildingPartsZh: "整机移动平台 · 高42cm · 重3.4kg", partTypes: "Abilix Brain · 3300mAh lithium battery", partTypesZh: "Abilix Brain · 3300mAh锂电池", actuators: "28 total / 8 DOF", actuatorsZh: "共28个执行器 / 8个自由度", sensors: "11 types / 25 total", sensorsZh: "11种 / 共25个传感器" }
    ].map(model => ({ ...model, image: A + "1649d71a-b80c-499b-96ca-73ed67f54c79.png", representative: true })),
    videos: ["Oculus series introduction", "Cyclone vacuum", "Obstacle avoidance", "From age three to university", "Punk boy", "Dance", "Bartolomeo", "Dance king and queen"]
  },
  {
    id: "everest",
    name: "Everest",
    nameZh: "珠穆朗玛",
    status: "legacy",
    age: "9–12 / 12+",
    ages: ["9-12", "12+"],
    image: A + "588bc550-185b-4e1f-8376-235aed024885.png",
    description: "A humanoid robotics platform for motion programming, performance and interactive projects.",
    descriptionZh: "用于动作编程、机器人表演与互动项目的类人机器人平台。",
    overview: "Everest is presented as a legacy humanoid platform. Four verified official models are retained; the fifth selector is deliberately marked as pending rather than invented.",
    overviewZh: "Everest 作为经典类人平台展示。四个官方型号已保留，第五个位置明确标注资料待补充，不虚构型号。",
    learning: ["Abilix Brain 1.0", "Humanoid motion projects", "Action programming", "Performance and interaction"],
    learningZh: ["Abilix Brain 1.0", "类人动作项目", "动作编程", "表演与互动"],
    officialUrl: "http://abilix.com/index.php/everest",
    models: [
      { id: "everest-0", name: "Everest 0", age: "9–12", buildingParts: "Assembled humanoid · 36 cm · 1.2 kg", buildingPartsZh: "整机类人机器人 · 高36cm · 重1.2kg", actuators: "12 intelligent motors, blue LED and speaker", actuatorsZh: "12个智能电机、蓝色LED灯、喇叭", sensors: "Ultrasonic, microphone and gyroscope", sensorsZh: "超声、麦克风、陀螺仪" },
      { id: "everest-1", name: "Everest 1", age: "9–12", buildingParts: "Assembled humanoid · 36 cm · 1.3 kg", buildingPartsZh: "整机类人机器人 · 高36cm · 重1.3kg", actuators: "16 intelligent motors, blue LED and speaker", actuatorsZh: "16个智能电机、蓝色LED灯、喇叭", sensors: "Ultrasonic, microphone and gyroscope", sensorsZh: "超声、麦克风、陀螺仪" },
      { id: "everest-2", name: "Everest 2", age: "12+", buildingParts: "Assembled humanoid · 36 cm · 1.3 kg", buildingPartsZh: "整机类人机器人 · 高36cm · 重1.3kg", actuators: "16 intelligent motors, blue LED and speaker", actuatorsZh: "16个智能电机、蓝色LED灯、喇叭", sensors: "Ultrasonic, microphone and gyroscope", sensorsZh: "超声、麦克风、陀螺仪" },
      { id: "everest-3", name: "Everest 3", age: "12+", buildingParts: "Assembled humanoid · 36 cm · 1.3 kg", buildingPartsZh: "整机类人机器人 · 高36cm · 重1.3kg", actuators: "16 intelligent motors, 2 LEDs, stereo speaker, display and touchscreen", actuatorsZh: "16个智能电机、2个LED灯、立体声喇叭、显示器与触摸屏", sensors: "Ultrasonic, camera, gyroscope and compass", sensorsZh: "超声、摄像头、陀螺仪、指南针" },
      { id: "everest-pending", name: "Additional model", nameZh: "其他型号", age: "—", placeholder: true, buildingParts: "Pending official data", buildingPartsZh: "官方数据待补充", actuators: "Pending official data", actuatorsZh: "官方数据待补充", sensors: "Pending official data", sensorsZh: "官方数据待补充" }
    ].map(model => ({ ...model, image: A + "588bc550-185b-4e1f-8376-235aed024885.png", representative: true, partTypes: model.partTypes || "Abilix Brain 1.0 · 1500mAh lithium battery", partTypesZh: model.partTypesZh || "Abilix Brain 1.0 · 1500mAh锂电池" })),
    videos: ["Everest series introduction", "Tai chi", "Robot group dance", "Gangnam Style"]
  }
];

const solutionItems = [
  { title: "K12 Schools", category: "Institutional learning", image: S + "k12-schools.png", description: "Full lab spaces, teaching resources and robotics systems for schools and universities." },
  { title: "Training Centers", category: "After-school education", image: S + "training-centers.png", description: "Course operation, project activities and community learning centers for after-school robotics." },
  { title: "Store & Kiosk", category: "Retail experience", image: S + "store-kiosk.png", description: "Product experience spaces that connect retail, demonstration and learning services." },
  { title: "Home Learning", category: "Family education", image: S + "home-learning.png", description: "Household product lines and guided learning paths for family robotics education." }
];

const educationFunctions = [
  { image: S + "function-contests.jpg", text: "Launch science & technology activities and contests" },
  { image: S + "function-global-education.jpg", text: "STEM education · Maker education · IoT education" },
  { image: S + "function-technology.jpg", text: "Technological education & innovative teaching" },
  { image: S + "function-school-image.jpg", text: "Display school image and innovative education revolution achievement" },
  { image: S + "function-quality.jpg", text: "Establish omni-directional quality-oriented education based on Multiple Intelligences Theory" }
];

const faqItems = [
  { question: "How to delete the programs inside the Ccon102 controller?", answer: "The Ccon102 controller is like a mobile U disk. First, connect it to a computer. Next, open the “My Computer” folder on the computer desktop. Finally, open the “Removable Disks” folder, find the programs you want to remove, and delete them." },
  { question: "What is the right way to charge batteries?", answer: "First, remove the batteries from the controller. Next, connect the configurator and the batteries to charge the batteries separately." },
  { question: "How to tell whether a battery is fully charged?", answer: "There is an indicator on the charger. A red light means charging is in progress; a green light means the battery is fully charged. For safe use, a single charge should not exceed 12 hours." },
  { question: "How many programs can the Ccon102 controller store?", answer: "The controller has 3.96 MB of memory. A program is usually 150 KB to 500 KB, so a controller can store up to about 27 programs." },
  { question: "Can the Ccon102 controllers communicate with each other?", answer: "Yes." },
  { question: "When a user uses the C language in VJC to do programming, can they convert the program directly into a flow diagram?", answer: "A program written in C cannot be converted into a flow diagram. However, a flow diagram can be completely converted into a corresponding program written in C." },
  { question: "To which port should the H1-100 sensor be connected on the Ccon101 controller?", answer: "It should be connected to the Motor port." },
  { question: "How frequently should the H series battery be charged?", answer: "The set uses a lithium battery. If it is not used for a long time, it is recommended that the battery be charged once a month." },
  { question: "Is the car required to always patrol the line in the game? May the non-line based approach be used to navigate the car?", answer: "Yes. You may use the “Start Motor” module in the program. In this case, the car is navigated according to time rather than the navigation line." },
  { question: "Why is there no navigation line for the car?", answer: "The initial setup of the program is “Collect from the Environment”." },
  { question: "Will the reflection of the game map affect the navigation line for the car?", answer: "There is some impact, but normal line navigation is not affected because the luminosity of the gray sensor under the car is strong enough and navigation is primarily controlled by that sensor." },
  { question: "What are the differences between the C202 game set and the C203 game set?", answer: "Both are game sets officially designated by WER. The C202 has two closed-loop motors and one DC motor, while the C203 has three DC motors. The C202 uses a metal universal wheel, while the C203 uses a guide wheel. The C202 controller uses rechargeable batteries, while the C203 controller uses AA batteries." }
];

const downloadItems = [
  { id: 106, name: "Abilix Krypton2.2.11.3.apk", size: "318 M", type: "apk", date: "2023-08-15", category: "software", path: "/file_upload/20220216/Abilix Krypton2.2.11.3.apk" },
  { id: 105, name: "AbilixScratch3.0_setup_v1.0.3.4_20200610", size: "159 M", type: "exe", date: "2022-03-08", category: "software", path: "/file_upload/20220216/AbilixScratch3.0_setup_v1.0.3.4_20200610.exe" },
  { id: 96, name: "Abilix Chart 3.0_v1.1.2.5_20200618", size: "147 M", type: "exe", date: "2022-02-15", category: "software", path: "/file_upload/20200226/abilixChart3.0_setup_v1.1.2.5_20200618.exe" },
  { id: 104, name: "VJC5.1_RU_1.2_Setup(20200507)", size: "44 M", type: "rar", date: "2020-05-13", category: "software", path: "/file_upload/202005/VJC5.1_RU_1.2_Setup(20200507).rar" },
  { id: 103, name: "H_VJC5.1_PC_5.1.0.24_20200326", size: "44 M", type: "zip", date: "2020-03-26", category: "software", path: "/file_upload/20200325/H_VJC5.1_PC_5.1.0.24_20200326.zip" },
  { id: 102, name: "Catalogue of Abilix educational robot products", size: "13 M", type: "pdf", date: "2020-03-26", category: "brochure", path: "/file_upload/20200325/Catalogue of Abilix educational robot products.pdf" },
  { id: 101, name: "User manual of Abilix Krypton App", size: "3 M", type: "pdf", date: "2020-03-26", category: "manual", path: "/file_upload/User manual of Abilix Krypton App.pdf" },
  { id: 100, name: "Spec of Krypton series (v2)", size: "2 M", type: "pdf", date: "2020-03-26", category: "specification", path: "/file_upload/20200325/Specification of Krypton V2.pdf" },
  { id: 99, name: "Spec of Krypton series", size: "1 M", type: "pdf", date: "2020-03-26", category: "specification", path: "/file_upload/20200325/Specification of Krypton.pdf" },
  { id: 97, name: "Abilix Chart_v2.0.2.40_PC", size: "137 M", type: "zip", date: "2020-03-25", category: "software", path: "/file_upload/20200325/Abilix_Chart_Setup_2.0.2.40.zip" },
  { id: 94, name: "C_VJC 4.3_PC_20190429", size: "45 M", type: "exe", date: "2019-04-30", category: "software", path: "/file_upload/20190307/VJC4.3 EN Setup(20190429).exe" },
  { id: 92, name: "Abilix Scratch 1.0.1.3_mac", size: "16 M", type: "zip", date: "2018-07-31", category: "software", path: "/file_upload/20200325/Abilix Scratch-mac-1.0.1.3.zip" },
  { id: 93, name: "Abilix Scratch 1.0.1.3_pc", size: "29 M", type: "zip", date: "2018-07-31", category: "software", path: "/file_upload/20200325/Abilix_Scratch_Setup_1.0.1.3.zip" },
  { id: 91, name: "Abilix Chart_v2.0.2.13_MAC", size: "252 M", type: "zip", date: "2018-05-14", category: "software", path: "/file_upload/20180511/Abilix_Chart_Setup_mac_2.0.2.13_en.zip" },
  { id: 81, name: "Krypton Building manuals.rar", size: "552 M", type: "rar", date: "2017-06-27", category: "manual", path: "/file_upload/20170627/Krypton Building manuals.rar" },
  { id: 59, name: "C202 Building Manual v1.0.pdf", size: "27 M", type: "pdf", date: "2016-08-03", category: "manual", path: "/file_upload/201608/C202 Building Manual v1.0.pdf" },
  { id: 58, name: "C201 Building Manual v1.0.pdf", size: "30 M", type: "pdf", date: "2016-08-03", category: "manual", path: "/file_upload/201608/C201 Building Manual v1.0.pdf" },
  { id: 57, name: "Spec of H1-S.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of H1-S.pdf" },
  { id: 56, name: "Spec of H1-B.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of H1-B.pdf" },
  { id: 55, name: "Spec of C1-X.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-X.pdf" },
  { id: 54, name: "Spec of C1-T.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-T.pdf" },
  { id: 53, name: "Spec of C1-S.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-S.pdf" },
  { id: 52, name: "Spec of C1-P.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-P.pdf" },
  { id: 51, name: "C_VJC 4.0/6.0_Spanish_PC", size: "148 M", type: "rar", date: "2016-07-22", category: "software", path: "/file_upload/201607/Spanish_VJC_c.rar" },
  { id: 50, name: "C1-X-Building Manual.zip", size: "57 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-X-Building Manual.zip" },
  { id: 49, name: "C1-T Building Manual.zip", size: "91 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-T Building Manual.zip" },
  { id: 48, name: "C1-P Building Manual", size: "100 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-P Building Manual.zip" },
  { id: 47, name: "H1-B building manual.zip", size: "45 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/H1-B building manual.zip" },
  { id: 46, name: "H1-S building manual", size: "137 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/H1-S building manual.zip" },
  { id: 45, name: "H1-S Parts list.pdf", size: "2 M", type: "pdf", date: "2016-07-11", category: "material", path: "/file_upload/201607/H1-S Parts list.pdf" },
  { id: 44, name: "H1-B-Part-list.pdf", size: "2 M", type: "pdf", date: "2016-07-11", category: "material", path: "/file_upload/201607/H1-B-Part-list.pdf" },
  { id: 42, name: "H_VJC 5.1_PC", size: "45 M", type: "zip", date: "2016-07-08", category: "software", path: "/file_upload/201607/VJC_SetupEnV5.1.zip" },
  { id: 41, name: "C_VJC 4.2_PC", size: "315 M", type: "zip", date: "2016-07-08", category: "software", path: "/file_upload/201607/VJC_4.2_EN_SetUp_build20150226.zip" },
  { id: 33, name: "C1-X material list", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/115502.zip" },
  { id: 32, name: "C1-T material list", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/1155.zip" },
  { id: 31, name: "C1-S-material list 2", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/11542.jpg" },
  { id: 30, name: "C1-S-material list 1", size: "2 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1154.jpg" },
  { id: 25, name: "(C203) Building Manual", size: "19 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1132.pdf" },
  { id: 24, name: "C1-M Creative Course Medium Kit Building Manual", size: "66 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1131.pdf" },
  { id: 23, name: "C1-B Creative Course Beginner Kit Building Manual", size: "45 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1130.pdf" },
  { id: 22, name: "C1-S Building manual", size: "38 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1128.pdf" },
  { id: 21, name: "C1-P material list v1.0", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/1127.zip" },
  { id: 20, name: "C1-M-material list", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1126.jpg" },
  { id: 19, name: "C1-B-material list", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1125.jpg" },
  { id: 15, name: "Revolutionary Solutions For STEM Education", size: "4 M", type: "pdf", date: "2016-06-25", category: "brochure", path: "/file_upload/201606/1106.pdf" }
];

const routes = ["home", "products", "products-education", "series", "product-education", "curriculum", "wer", "solutions", "resources", "resources-faq", "resources-download", "product"];
const routeLabel = { home: "Home", products: "Products", "products-education": "Educational Robots", series: "Educational Robot Series", "product-education": "Educational Robot Series", curriculum: "Curriculum", wer: "WER", solutions: "Solutions", resources: "Resources", "resources-faq": "Resources FAQ", "resources-download": "Resource Downloads", product: "Xiaoxing" };

function currentRoute() {
  const captureRoute = new URLSearchParams(location.search).get("captureRoute");
  if (captureRoute && routes.includes(captureRoute)) return captureRoute;
  const value = location.hash.replace(/^#\/?/, "").split("?")[0] || "home";
  return routes.includes(value) ? value : "home";
}

function link(route, label, className = "") {
  return `<a class="${className}" href="#/${route}" data-route="${route}">${label}</a>`;
}

function header(active){return `<header class="site-header"><div class="header-inner">${link("home",`<span class="logo-word">Abilix</span><span class="logo-tag">EDUCATIONAL ROBOT</span>`,"logo")}<nav class="primary-nav" aria-label="Primary navigation">${["products","solutions","curriculum","wer","resources"].map(r=>link(r,routeLabel[r],active===r?"active":"")).join("")}${link("home","Home","nav-pill")}</nav><button class="language-switch" type="button" aria-label="${currentLanguage==="zh"?"切换为英文":"切换为中文"}" title="${currentLanguage==="zh"?"切换为英文":"切换为中文"}"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"></path></svg><span>${currentLanguage==="zh"?"EN":"中"}</span></button><button class="menu-button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button></div></header>`}

function footer() {
  const cols = ["Products", "Solutions", "Curriculum", "WER", "Resources"];
  return `<footer class="site-footer"><div class="footer-inner">
    <div class="footer-brand"><h3>Abilix</h3><p>Train Successful Intelligence. Bring Up Science &amp; Technology Accomplishment. Cultivate Technology Talents.</p></div>
    ${cols.map(c => `<div class="footer-col"><h4>${c}</h4><a href="#/${c.toLowerCase()}">Overview</a><a href="#/${c.toLowerCase()}">Details</a><a href="#/${c.toLowerCase()}">Support</a></div>`).join("")}
  </div></footer>`;
}

function pageHero({ eyebrow = "Educational Robotics", title, summary, image, extra = "" }) {
  return `<section class="page-hero" style="--hero-image:url('${image}')"><div class="hero-overlay"></div><div class="container hero-content"><p>${eyebrow}</p><h1>${title}</h1><div class="hero-summary">${summary}</div>${extra}</div></section>`;
}

function strapline(text) { return `<div class="strapline">${text}</div>`; }
function button(route, text, cls = "button") { return link(route, `${text}<span aria-hidden="true">→</span>`, cls); }


function productCard(p) {
  const href = p.category === "ai" ? "#/product" : `#/product-education?model=${p.id}`;
  return `<article class="product-card" data-age="${p.age}" data-stage="${p.stage || "all"}"><div class="product-image"><img src="${p.image}" alt="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}</div><h3>${p.name}</h3><p>${p.text}</p><div class="card-actions"><a href="${href}" class="mini-button">View product details</a><button class="favorite" aria-label="Add ${p.name} to favorites">♡</button></div></article>`;
}


function catalogCopy(item, key) {
  return currentLanguage === "zh" && item[`${key}Zh`] ? item[`${key}Zh`] : item[key];
}

function catalogStatus(series, compact = false) {
  if (series.status === "current") return compact ? (currentLanguage === "zh" ? "在售" : "For sale") : (currentLanguage === "zh" ? "当前在售" : "Available now");
  return compact ? (currentLanguage === "zh" ? "仅展示" : "Display only") : (currentLanguage === "zh" ? "经典产品展示" : "Legacy showcase");
}

function productCenterSeriesPanel(series, index) {
  return `<article class="series-accordion-panel ${index === 0 ? "active" : ""} ${series.status === "current" ? "is-current" : "is-archive"}" data-series-index="${index}">
    <img class="series-accordion-image" src="${series.image}" alt="${series.name} educational robot series">
    <span class="series-accordion-shade" aria-hidden="true"></span>
    <button class="series-accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-label="${currentLanguage === "zh" ? "打开" : "Open"} ${catalogCopy(series, "name")} ${currentLanguage === "zh" ? "系列" : "series"}"><span class="series-vertical-title">${series.shortName || series.name}</span></button>
    <div class="series-accordion-content">
      <div class="series-accordion-meta"><span>${catalogStatus(series)}</span><b>0${index + 1}</b></div>
      <p class="series-type">${currentLanguage === "zh" ? "推荐年龄" : "Recommended age"} · ${series.age}</p>
      <h3>${catalogCopy(series, "name")}</h3><p>${catalogCopy(series, "description")}</p>
      <div class="series-models" aria-label="${series.name} models">${series.models.map(model => `<span>${catalogCopy(model, "name")}</span>`).join("")}</div>
      <a class="series-accordion-action" href="#/series?series=${series.id}">${currentLanguage === "zh" ? "探索系列" : "Explore Series"}<span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function productCenterPage() {
  const ageOptions = [["all", "All", "全部"], ["3-6", "3–6", "3–6岁"], ["6-9", "6–9", "6–9岁"], ["9-12", "9–12", "9–12岁"], ["12+", "12+", "12岁以上"]];
  return `${header("products")}<main id="main" class="product-center-redesign">
    <section class="pc-hero"><img src="${images.productHero}" alt="Abilix educational robots"><span class="pc-hero-shade"></span><div class="container pc-hero-copy"><p class="route-kicker"> ${currentLanguage === "zh" ? "产品中心" : "Product Center"}</p><h1>${currentLanguage === "zh" ? "从产品线开始，<br>更快找到合适的机器人。" : "Start with a product line.<br>Find the right robot faster."}</h1><p>${currentLanguage === "zh" ? "AI 机器人与教育机器人保持清晰分区，每一次点击都通向明确的产品、课程与资源。" : "AI Robots and Educational Robots remain clearly separated, so every click leads to the right product, learning path and resources."}</p></div></section>
    <section id="ai-robots" class="pc-ai-feature"><div class="container"><div class="pc-section-index"><p></p></div></div><div class="pc-ai-card"><div class="pc-ai-inner container"><div class="pc-ai-copy"><p class="eyebrow">${currentLanguage==="zh"?"AI机器人":"AI ROBOT"}</p><h2>${currentLanguage==="zh"?"小星":"Xiaoxing"}</h2><p>${currentLanguage==="zh"?"融合自然对话、创造性搭建与引导式学习，让孩子与 AI 一起学习，而不只是了解 AI。":"Natural conversation, creative construction and guided learning help children learn with AI, not only about it."}</p><div class="pc-highlight-list"><span>${currentLanguage==="zh"?"智能对话":"Intelligent dialogue"}</span><span>${currentLanguage==="zh"?"六门配套课程":"Six-course system"}</span><span>${currentLanguage==="zh"?"创造性学习":"Creative learning"}</span></div><a class="button" href="#/product">${currentLanguage==="zh"?"查看小星":"View Xiaoxing"}<span>→</span></a></div></div></div></section>
    <section id="educational-robots" class="pc-education"><div class="container"><div class="pc-section-index"><p></p></div><div class="line-heading"><p class="eyebrow">${currentLanguage === "zh" ? "教育机器人" : "EDUCATIONAL ROBOTS"}</p><h2>${currentLanguage === "zh" ? "六个系列，一条清晰路径。" : "Six series. One clear path."}</h2><p>${currentLanguage === "zh" ? "Krypton 与 School Krypton 当前在售；Creative、Modular、Oculus 与 Everest 作为经典产品展示。" : "Krypton and School Krypton are for sale. Creative, Modular, Oculus and Everest remain as a legacy showcase."}</p><div class="series-key"><span class="current">${currentLanguage === "zh" ? "当前在售" : "For sale"}</span><span class="archive">${currentLanguage === "zh" ? "经典产品展示" : "Legacy showcase"}</span></div></div><div class="series-accordion" role="group" aria-label="Educational robot series">${seriesCatalog.map(productCenterSeriesPanel).join("")}</div><p class="series-accordion-hint">${currentLanguage === "zh" ? "悬停、点击或使用方向键查看系列。进入系列页后可原地切换五个型号。" : "Hover, click, or use the arrow keys. Each Series Page lets you switch between five models in place."}</p></div></section>
    <section id="browse-by-age" class="section container pc-age-browser"><div class="line-heading"><p class="eyebrow">${currentLanguage === "zh" ? "按年龄发现" : "BROWSE BY AGE"}</p><h2>${currentLanguage === "zh" ? "年龄用于发现，不增加页面层级。" : "Use age to discover, not to add another page."}</h2><p>${currentLanguage === "zh" ? "选择年龄后，本页仅显示相关系列；产品仍在对应系列页中切换。" : "Choose an age to reveal relevant series here. Product switching stays inside each Series Page."}</p></div><div class="pc-age-tabs" role="tablist" aria-label="Browse educational robots by age">${ageOptions.map((item, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-age-filter="${item[0]}" role="tab" aria-selected="${index === 0}">${currentLanguage === "zh" ? item[2] : item[1]}</button>`).join("")}</div><div class="pc-age-results">${seriesCatalog.map(series => `<a class="pc-age-result" data-ages="${series.ages.join(" ")}" href="#/series?series=${series.id}"><img src="${series.image}" alt=""><div><span>${catalogStatus(series, true)}</span><h3>${catalogCopy(series, "name")}</h3><p>${currentLanguage === "zh" ? "推荐年龄" : "Recommended age"} · ${series.age}</p><strong>${series.models.length} ${currentLanguage === "zh" ? "个型号" : "models"} <b>→</b></strong></div></a>`).join("")}</div><p class="pc-age-empty" hidden>${currentLanguage === "zh" ? "该年龄段的官方产品资料待补充。" : "Official product information for this age group is pending."}</p></section>
    <section class="closing"><h2>${currentLanguage === "zh" ? "选择系列，在一个页面内比较全部型号。" : "Choose a series. Compare every model in one place."}</h2><p>${currentLanguage === "zh" ? "无需进入额外的产品详情层级。" : "No extra product-detail level is required."}</p></section>
  </main>${footer()}`;
}


function seriesProductDisplay(series, model) {
  const sourceNote = model.representative ? `<p class="series-image-note">${currentLanguage === "zh" ? "当前使用系列代表图，型号专属图片待替换。" : "Representative series image shown; model-specific image pending."}</p>` : "";
  const fields = [
    [currentLanguage === "zh" ? "积木 / 器件数量" : "Building Parts", catalogCopy(model, "buildingParts") || (currentLanguage === "zh" ? "不适用" : "Not applicable")],
    [currentLanguage === "zh" ? "零件类型 / 平台" : "Part Types / Platform", catalogCopy(model, "partTypes") || (currentLanguage === "zh" ? "官方数据待补充" : "Pending official data")],
    [currentLanguage === "zh" ? "执行器" : "Actuators", catalogCopy(model, "actuators") || (currentLanguage === "zh" ? "官方数据待补充" : "Pending official data")],
    [currentLanguage === "zh" ? "传感器" : "Sensors", catalogCopy(model, "sensors") || (currentLanguage === "zh" ? "官方数据待补充" : "Pending official data")]
  ];
  return `<div class="series-product-media"><img src="${model.image || series.image}" alt="${model.name}">${sourceNote}</div><div class="series-product-copy"><div class="detail-status ${series.status === "current" ? "available" : "archive"}"><span>${catalogStatus(series)}</span></div><p class="route-kicker">${catalogCopy(series, "name")}</p><h2>${catalogCopy(model, "name")}</h2><p>${currentLanguage === "zh" ? "推荐年龄" : "Recommended age"} · ${model.age || series.age}</p>${model.placeholder ? `<div class="series-data-notice">${currentLanguage === "zh" ? "该型号位置用于保持模板一致，正式资料确认后再替换。" : "This slot keeps the template consistent and will be replaced when official data is confirmed."}</div>` : ""}<dl class="series-spec-grid">${fields.map(field => `<div><dt>${field[0]}</dt><dd>${field[1]}</dd></div>`).join("")}</dl></div>`;
}








function werPage() {
  return `${header("wer")}<main id="main">${pageHero({ title: "WER", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: images.wer })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container external-card"><h2>External website target</h2><p class="external-url">http://en.wergame.org/</p><p>Interaction: CTA opens external WER website in a new tab. Keep a short local overview before redirect.</p><a class="button" href="http://en.wergame.org/" target="_blank" rel="noopener">Go to WER site <span>↗</span></a></section>
  </main>${footer()}`;
}

function solutionsPage() {
  return `${header("solutions")}<main id="main">${pageHero({ title: "Solutions", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: S + "training-centers.png" })}${strapline("Connect every product to a clear learning pathway")}
    <div class="container solutions-mode-tabs" role="tablist" aria-label="Solutions page sections"><button class="solution-mode-tab active" type="button" role="tab" aria-selected="true" data-panel="introduction">Introduction</button><button class="solution-mode-tab" type="button" role="tab" aria-selected="false" data-panel="environments">Explore four environments</button></div>
    <section class="solution-mode-panel solution-introduction container" data-panel="introduction" role="tabpanel">
      <h2>Abilix Educational Robot Integrated Practical Education Base Solution</h2>
      <p>The Integrated Practical Activities Course is a required subject introduced by the Ministry of Education in Document No. 4 (2017) for primary and secondary schools across China. It encourages students to learn through real-life situations, using research, hands-on projects, and practical experiences to develop their overall skills.</p>
      <p>To help schools solve common challenges such as limited course content, educational equipment, and qualified teachers, the Abilix Educational Robot Integrated Practical Education Base offers a one-day, 8-hour program centered on artificial intelligence and robotics. The course helps students build knowledge in AI, robotics, programming, sensors, and other technology fields while developing creativity, analytical thinking, practical skills, and independent learning abilities.</p>
      <img src="${S}practice-base.png" alt="Abilix artificial intelligence creator practice base">
      <p>On weekends, the Abilix Educational Robot Practice Base is also open to the public, offering SITA Project Courses based on the BY and BH series.</p>
      <p>The SITA Project Course is an innovative program built on the SITA educational approach, focusing on developing success skills and technology literacy. The SITA educational approach was created by Dr. Yun Weimin and Professor Jake Mendelssohn. Its main goal is to develop balanced success skills - including creativity, analytical thinking, and practical ability - while improving technology literacy, nurturing future technology talent, and helping children build knowledge independently.</p>
      <p>With its world-leading SITA educational approach, advanced AI and robotics practical courses, and an educational robotics platform featuring hundreds of built-in inventions, the Abilix Educational Robot Practice Base is set to become a leader in AI and robotics practical education.</p>
      <img src="${S}practice-classroom.png" alt="Abilix educational robotics classroom">
    </section>
    <div class="solution-mode-panel" data-panel="environments" role="tabpanel" hidden>
      <section id="solution-scenes" class="solutions-scroll" aria-labelledby="solution-scenes-title"><div class="solutions-sticky container"><h2 id="solution-scenes-title">Solutions</h2><div class="vertical-tabs-layout"><div class="vertical-tabs" role="tablist" aria-label="Solution environments">${solutionItems.map((s,i) => `<button role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-index="${i}" class="vertical-tab ${i===0?"active":""}"><span>${String(i+1).padStart(2,"0")}</span><strong>${s.title}</strong></button>`).join("")}</div><div class="solution-stage" aria-live="polite"><div class="solution-image">${solutionItems.map((s,i) => `<figure class="solution-scene ${i===0?"active":""}" data-index="${i}"><img src="${s.image}" alt="${s.title}"></figure>`).join("")}<div class="solution-image-shade"></div><span><b id="solution-current">01</b> /04</span></div><div class="solution-copy" id="solution-copy"><p>${solutionItems[0].category}</p><h2>${solutionItems[0].title}</h2><div>${solutionItems[0].description}</div></div></div></div><div class="solutions-progress" aria-hidden="true"><span></span></div></div></section>
      <section class="section container education-functions"><h2>Five Educational Functions</h2><div>${educationFunctions.map(item => `<article><img src="${item.image}" alt=""><p>${item.text}</p></article>`).join("")}</div></section>
    </div>
  </main>${footer()}`;
}

function resourcesHero() {
  return `${pageHero({ title: "Resources", summary: "Downloads, media and partner support library.", image: images.resources })}${strapline("Connect every product to a clear learning pathway")}`;
}

function resourcesPage() {
  const resources = [
    ["FAQ", "Resource category", images.xiaoxingRobot, "#/resources-faq"], ["Downloading", "Resource category", S + "store-kiosk.png", "#/resources-download"], ["Brochures", "Resource category", images.curriculum],
    ["Manuals", "Resource category", images.bundle], ["News", "Resource category", images.children], ["Videos", "Resource category", images.wer],
    ["What students build", "Content module", A + "78c67788-44eb-46da-a062-e0f918d7bf79.png"], ["Curriculum connection", "Content module", images.curriculum], ["Related products", "Content module", images.bundle]
  ];
  return `${header("resources")}<main id="main">${resourcesHero()}
    <section class="section container resources"><label class="search"><span>Search</span><input id="resource-search" type="search" placeholder="Search resources..." autocomplete="off"></label><div class="resource-grid">${resources.map(r => { const terms = `${r[0]} ${t(r[0])}`.toLowerCase(); return r[3] ? `<a href="${r[3]}" class="resource-card" data-search="${terms}"><img src="${r[2]}" alt=""><h3>${r[0]}</h3><p>${r[1]}</p></a>` : `<button class="resource-card" data-search="${terms}"><img src="${r[2]}" alt=""><h3>${r[0]}</h3><p>${r[1]}</p></button>`; }).join("")}</div><p class="no-results" hidden>No resources match your search.</p></section>
  </main>${footer()}`;
}

function resourcesFaqPage() {
  return `${header("resources")}<main id="main">${resourcesHero()}<section class="section container resource-detail"><a class="resource-back" href="#/resources" aria-label="Back to Resources">‹ <span>Resources</span></a><label class="search"><span>Search</span><input id="faq-search" type="search" placeholder="Search resources..." autocomplete="off"></label><div id="faq-list" class="faq-list"></div><p class="no-results" hidden>No FAQs match your search.</p><nav id="faq-pagination" class="resource-pagination" aria-label="FAQ pages"></nav></section></main>${footer()}`;
}

function resourcesDownloadPage() {
  return `${header("resources")}<main id="main">${resourcesHero()}<section class="section container resource-detail"><a class="resource-back" href="#/resources" aria-label="Back to Resources">‹ <span>Resources</span></a><div class="download-controls"><label><span class="sr-only">Resource category</span><select id="download-category"><option value="all">All</option><option value="software">Software</option><option value="material">Material</option><option value="specification">Specification</option><option value="manual">Manual</option><option value="brochure">Brochure</option></select></label><label class="download-search"><span aria-hidden="true">⌕</span><input id="download-search" type="search" placeholder="Search resources..." autocomplete="off"></label></div><div class="download-table-wrap"><table class="download-table"><thead><tr><th>ID</th><th>File Name</th><th>Size</th><th>Type</th><th>Date of uploading</th><th><span class="sr-only">Download</span></th></tr></thead><tbody id="download-body"></tbody></table></div><p class="no-results" hidden>No downloads match your filters.</p><nav id="download-pagination" class="resource-pagination" aria-label="Download pages"></nav></section></main>${footer()}`;
}

function productPage() {
  const gallery = [images.xiaoxing, images.xiaoxingRobot, images.bundle, images.curriculum];
  const courses = ["Large Language Model Application Training","Questioning Ability Training","Inquiry-Based Civilization Knowledge","Critical Thinking Ability Training","Aesthetic Ability Training","Value Judgment Ability Training"];
  return `${header("product")}<main id="main" class="xiaoxing-detail-page"><section class="xiaoxing-detail-hero" style="--hero-image:url('${images.xiaoxingHero}')"><div class="container"><a href="#/products" class="route-back">← Back to Product Center</a><div class="xiaoxing-detail-copy"><p class="route-kicker">AI Robots</p><h1>Xiaoxing.<br>A new member of the family<br>in the AI era.</h1><p>Built on Abilix's 30 years of R&amp;D experience and powered by DeepSeek, Xiaoxing combines intelligent companionship with a broad knowledge base to inspire curiosity, learning, and creativity.</p><p>Xiaoxing is designed to develop AI literacy and creativity, helping children become creators of the future.</p><button class="button button-light xiaoxing-buy-jump" type="button">Buy Now <span>↓</span></button></div></div></section>${strapline("We Build More Than Robots. We Inspire Creators.")}<section id="xiaoxing-buy" class="section container product-detail"><div class="gallery"><div class="main-image"><img id="main-product-image" src="${gallery[0]}" alt="Xiaoxing AI Educational Robot Companion"></div><div class="thumbnails">${gallery.map((g,i)=>`<button class="thumb ${i===0?"active":""}" data-src="${g}"><img src="${g}" alt="Xiaoxing view ${i+1}"></button>`).join("")}</div></div><div class="buy-panel"><h1>Xiaoxing <button class="favorite" aria-label="Add Xiaoxing to favorites">♡</button></h1><h2>AI Educational Robot Companion</h2><p class="rating">4.9 / 5 &nbsp; <a href="#reviews">128 verified reviews</a></p><strong class="price">US$ 599.00</strong><p>Taxes and shipping calculated at checkout.</p><p>A customizable AI learning companion combining natural conversation, creative building, and guided learning experiences for curious young minds.</p><h3>IN THE BOX</h3><p>Xiaoxing robot · Modular building set · Charging cable · Learning access</p><div class="purchase"><div class="quantity"><button data-delta="-1" aria-label="Decrease quantity">−</button><span id="quantity">1</span><button data-delta="1" aria-label="Increase quantity">+</button></div><button class="add-bag">Add to bag</button></div><button class="buy-now">Buy it now</button><p class="stock">● In stock · Ready to ship</p><dl class="policies"><dt>SHIPPING</dt><dd>Tracked delivery with regional options</dd><dt>RETURNS</dt><dd>30-day return window</dd><dt>SCHOOLS</dt><dd>Institutional purchasing support available</dd></dl></div></section>
    <section class="blue-section"><div class="container split"><div><h2>Curriculum Leads<br>Xiaoxing Enables</h2><p>Xiaoxing is the learning interface for a six-course AI education system. The curriculum defines the goals; the robot turns them into dialogue, construction, and reflection.</p><div class="process-pills"><span>COURSE</span><b>+</b><span>ACTIVITY</span><b>+</b><span>ROBOT</span></div></div><img src="${images.children}" alt="Children learning with Xiaoxing"></div></section>
    <section class="section container courses"><div><p class="eyebrow">THE OFFICIAL CURRICULUM</p><h2>Six Courses<br>One Education System</h2><img src="${images.curriculum}" alt="Official curriculum books"></div><div><p>The six courses develop AI application ability and the human judgment needed to use AI thoughtfully, creatively, and responsibly.</p><ol>${courses.map(c=>`<li>${c}</li>`).join("")}</ol></div></section>
    <section class="soft-section"><div class="container"><p class="eyebrow">THE EDUCATION PROCESS</p><h2>How Xiaoxing Supports Every Stage.</h2><div class="four-steps">${[["SPARK CURIOSITY","Xiaoxing listens and develops the question."],["LEARN KNOWLEDGE","Xiaoxing connects inquiry with knowledge."],["BUILD TO CREATE","Xiaoxing becomes a model students build."],["SOLVE PROBLEMS","Xiaoxing helps test, reflect, and improve."]].map((s,i)=>`<div><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>
    <section class="section container intelligence"><p class="eyebrow">PRODUCT CAPABILITY / AI INTELLIGENCE</p><h2>AI Connects Questions With Knowledge</h2><div class="intelligence-grid"><div>${[["REASON","Understand context and explain relationships."],["RESEARCH","Explore knowledge across disciplines."],["APPLY","Use language, vision, 3D, music, or physics models."]].map(x=>`<div><strong>${x[0]}</strong><p>${x[1]}</p></div>`).join("")}</div><aside><p class="eyebrow">PRODUCT INTELLIGENCE</p><ul><li>DeepSeek V4</li><li>1.6T parameters</li><li>Abilix Agent 2.0</li><li>Multilingual voice</li><li>Fast response</li></ul></aside></div></section>
    <section class="section container reference"><p class="eyebrow">PRODUCT REFERENCE</p><h2>Built for Long-Term Learning</h2><div class="split"><ul><li>Xiaoxing AI Educational Robot</li><li>DeepSeek V4 · 1.6T parameters</li><li>Six official AI-era ability courses</li><li>1-on-1 Learning Advisor</li><li>Lifetime Q&amp;A Support</li><li>Setup &amp; Usage Guidance</li></ul><img src="${images.bundle}" alt="Xiaoxing education course bundle"></div></section>
    <section class="section container practice"><p class="eyebrow">CURRICULUM IN PRACTICE</p><h2>See Learning Become Action</h2><div class="practice-grid">${[[images.inquiry,"Student-led inquiry","A student question begins the investigation."],[images.creation,"Hands-on creation","Knowledge becomes a physical working model."],[images.evidence,"Evidence and judgment","Evidence guides discussion, revision, and judgment."]].map(x=>`<article><img src="${x[0]}" alt=""><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></section>
    <section class="section container recommendations"><div class="section-heading"><h2>You may also like</h2>${link("products","View all products →")}</div><div class="catalog-grid compact">${products.slice(6,8).concat(products.slice(1,2)).map(productCard).join("")}</div></section>
  </main>${footer()}`;
}

const pages = { wer: werPage, resources: resourcesPage, "resources-faq": resourcesFaqPage, "resources-download": resourcesDownloadPage };
let bagCount = 0;

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function render() {
  const route = currentRoute();
  bindPage.solutionCleanup?.();
  document.querySelector("#app").innerHTML = pages[route]();
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.querySelector(".skip-link").textContent = t("Skip to content");
  localize(document.querySelector("#app"));
  document.title = currentLanguage === "zh" ? `${t(routeLabel[route])} - 能力风暴` : `${routeLabel[route]} - Abilix`;
  const bag = document.querySelector("#bag-count"); if (bag) bag.textContent = bagCount;
  bindCommon(); bindPage(route); window.scrollTo({ top: 0, behavior: "instant" });
  const params = new URLSearchParams(location.hash.split("?")[1] || location.search.slice(1));
  const requestedSection = params.get("section");
  if (requestedSection) requestAnimationFrame(() => document.querySelector(`#${requestedSection}`)?.scrollIntoView({ behavior: "instant", block: "start" }));
}

function bindCommon() {
  const menu = document.querySelector(".menu-button"), nav = document.querySelector(".primary-nav");
  menu?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  document.querySelector(".language-switch")?.addEventListener("click", () => { currentLanguage = currentLanguage === "zh" ? "en" : "zh"; localStorage.setItem("abilix-language", currentLanguage); render(); });
  document.querySelector(".bag")?.addEventListener("click", () => showToast(currentLanguage === "zh" ? (bagCount ? `购物袋中有 ${bagCount} 件商品。` : "购物袋是空的。") : (bagCount ? `${bagCount} item${bagCount>1?"s":""} in your bag.` : "Your bag is empty.")));
  document.querySelectorAll(".favorite").forEach(b => b.addEventListener("click", e => { e.preventDefault(); b.classList.toggle("active"); b.textContent = b.classList.contains("active") ? "♥" : "♡"; }));
}

function bindPage(route) {
  if (route === "home") {
    const slides = [...document.querySelectorAll(".hero-slide")], pages = [...document.querySelectorAll(".hero-page")];
    let heroIndex = 0;
    const showHero = index => { heroIndex = (index + slides.length) % slides.length; slides.forEach((s,i) => s.classList.toggle("active", i === heroIndex)); pages.forEach((p,i) => { p.classList.toggle("active", i === heroIndex); p.setAttribute("aria-current", String(i === heroIndex)); }); };
    pages.forEach((page,i) => page.addEventListener("click", () => showHero(i)));
    clearInterval(bindPage.heroTimer); bindPage.heroTimer = setInterval(() => showHero(heroIndex + 1), 5500);
    const strip = document.querySelector(".product-strip");
    document.querySelector(".carousel-arrow.prev")?.addEventListener("click", () => strip.scrollBy({ left: -340, behavior: "smooth" }));
    document.querySelector(".carousel-arrow.next")?.addEventListener("click", () => strip.scrollBy({ left: 340, behavior: "smooth" }));
  }
  if (route === "products") {
    const filter = value => document.querySelectorAll(".catalog-grid .product-card").forEach(c => c.hidden = value !== "all" && c.dataset.age !== value);
    document.querySelectorAll(".filter-tabs button").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter-tabs button").forEach(x=>x.classList.remove("active")); b.classList.add("active"); filter(b.dataset.filter); }));
    document.querySelector(".catalog-prev")?.addEventListener("click",()=>showToast(currentLanguage === "zh" ? "正在显示上一组产品。" : "Showing the previous product group."));
    document.querySelector(".catalog-next")?.addEventListener("click",()=>showToast(currentLanguage === "zh" ? "正在显示下一组产品。" : "Showing the next product group."));
  }
  if (route === "products" || route === "products-education") {
    const panels = [...document.querySelectorAll(".series-accordion-panel")];
    const activateSeries = index => panels.forEach((panel, panelIndex) => {
      const active = panelIndex === index;
      panel.classList.toggle("active", active);
      panel.querySelector(".series-accordion-trigger")?.setAttribute("aria-expanded", String(active));
    });
    panels.forEach((panel, index) => {
      const trigger = panel.querySelector(".series-accordion-trigger");
      panel.addEventListener("mouseenter", () => { if (matchMedia("(hover:hover)").matches) activateSeries(index); });
      trigger?.addEventListener("click", () => activateSeries(index));
      trigger?.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? panels.length - 1 : (index + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + panels.length) % panels.length;
        activateSeries(next);
        panels[next].querySelector(".series-accordion-trigger")?.focus();
      });
    });
    const cards = [...document.querySelectorAll(".education-age-grid .product-card")];
    document.querySelectorAll(".education-age-tabs button").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll(".education-age-tabs button").forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      cards.forEach(card => card.hidden = button.dataset.filter !== "all" && card.dataset.age !== button.dataset.filter);
    }));
    const ageResults = [...document.querySelectorAll(".pc-age-result")];
    document.querySelectorAll(".pc-age-tabs button").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll(".pc-age-tabs button").forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      let visible = 0;
      ageResults.forEach(card => { card.hidden = button.dataset.ageFilter !== "all" && !card.dataset.ages.split(" ").includes(button.dataset.ageFilter); if (!card.hidden) visible += 1; });
      const empty = document.querySelector(".pc-age-empty"); if (empty) empty.hidden = visible !== 0;
    }));
  }
  if (route === "series" || route === "product-education") {
    const page = document.querySelector(".series-page");
    const series = seriesCatalog.find(item => item.id === page?.dataset.series);
    const display = document.querySelector("#series-product-display");
    const options = [...document.querySelectorAll(".series-model-option")];
    const activateModel = modelId => {
      const model = series?.models.find(item => item.id === modelId);
      if (!series || !model || !display) return;
      options.forEach(option => { const active = option.dataset.model === modelId; option.classList.toggle("active", active); option.setAttribute("aria-selected", String(active)); });
      display.classList.add("is-changing");
      setTimeout(() => {
        display.innerHTML = seriesProductDisplay(series, model);
        localize(display);
        display.classList.remove("is-changing");
      }, 180);
      history.replaceState(null, "", `#/series?series=${series.id}&model=${model.id}`);
    };
    options.forEach(option => option.addEventListener("click", () => activateModel(option.dataset.model)));
    const params = new URLSearchParams(location.hash.split("?")[1] || location.search.slice(1));
    const selectedId = params.get("model");
    if (selectedId && series?.models.some(model => model.id === selectedId)) activateModel(selectedId);
  }
  if (route === "curriculum") document.querySelectorAll(".level-item").forEach(b => b.addEventListener("click",()=>{ const open=b.getAttribute("aria-expanded")==="true"; b.setAttribute("aria-expanded",String(!open)); b.classList.toggle("open",!open); b.querySelector("em").textContent=t(!open?"Robotics · Curriculum · Project practice":"View pathway"); }));
  if (route === "solutions") {
    const section = document.querySelector(".solutions-scroll"), sticky = document.querySelector(".solutions-sticky");
    const modeTabs = [...document.querySelectorAll(".solution-mode-tab")], modePanels = [...document.querySelectorAll(".solution-mode-panel")];
    modeTabs.forEach(tab => tab.addEventListener("click", () => { const panel = tab.dataset.panel; modeTabs.forEach(item => { const selected = item === tab; item.classList.toggle("active", selected); item.setAttribute("aria-selected", String(selected)); }); modePanels.forEach(item => item.hidden = item.dataset.panel !== panel); if (panel === "environments") requestAnimationFrame(() => { renderSolutionScroll(); section.scrollIntoView({ behavior: "smooth", block: "start" }); }); else scrollTo({ top: document.querySelector(".solutions-mode-tabs").offsetTop - 100, behavior: "smooth" }); }));
    const tabs = [...document.querySelectorAll(".vertical-tab")];
    const scenes = [...document.querySelectorAll(".solution-scene")], copy = document.querySelector("#solution-copy");
    let active = 0, ticking = false;
    const activate = i => { if(i===active)return; const previous=active,item=solutionItems[i];active=i;tabs.forEach((tab,n)=>{tab.classList.toggle("active",n===i);tab.setAttribute("aria-selected",String(n===i));tab.tabIndex=n===i?0:-1;});scenes.forEach((scene,n)=>{scene.classList.remove("was-active");if(n===previous)scene.classList.add("was-active");scene.classList.toggle("active",n===i);});copy.innerHTML=`<p>${t(item.category)}</p><h2>${t(item.title)}</h2><div>${t(item.description)}</div>`;copy.classList.remove("changing");void copy.offsetWidth;copy.classList.add("changing");document.querySelector("#solution-current").textContent=String(i+1).padStart(2,"0");if(innerWidth<=640)tabs[i].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}); };
    const scrollToSolution = i => { const top=section.getBoundingClientRect().top+scrollY,scrollable=section.offsetHeight-innerHeight;scrollTo({top:top+scrollable*((i+.08)/solutionItems.length),behavior:"smooth"}); };
    const renderSolutionScroll = () => { const rect=section.getBoundingClientRect(),scrollable=section.offsetHeight-innerHeight,raw=scrollable>0?-rect.top/scrollable:0,progress=Math.max(0,Math.min(.9999,raw)),i=Math.min(solutionItems.length-1,Math.floor(progress*solutionItems.length)),local=progress*solutionItems.length-i;activate(i);sticky.style.setProperty("--solutions-progress",String(progress));scenes[i].style.setProperty("--scene-y",`${(local-.5)*-14}px`);ticking=false; };
    const requestSolutionRender = () => { if(!ticking){ticking=true;requestAnimationFrame(renderSolutionScroll);} };
    tabs.forEach((t,i)=>{t.addEventListener("click",()=>scrollToSolution(i));t.addEventListener("keydown",e=>{if(["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)){e.preventDefault();const next=(i+(["ArrowDown","ArrowRight"].includes(e.key)?1:-1)+tabs.length)%tabs.length;scrollToSolution(next);tabs[next].focus();}});});
    addEventListener("scroll",requestSolutionRender,{passive:true});addEventListener("resize",requestSolutionRender);bindPage.solutionCleanup=()=>{removeEventListener("scroll",requestSolutionRender);removeEventListener("resize",requestSolutionRender);bindPage.solutionCleanup=null;};renderSolutionScroll();
  }
  if (route === "resources") document.querySelector("#resource-search")?.addEventListener("input", e => { const q=e.target.value.trim().toLowerCase(); let visible=0; document.querySelectorAll(".resource-card").forEach(c=>{c.hidden=!c.dataset.search.includes(q);if(!c.hidden)visible++;}); document.querySelector(".no-results").hidden=visible!==0; });
  if (route === "resources-faq") {
    const list = document.querySelector("#faq-list"), pagination = document.querySelector("#faq-pagination"), noResults = document.querySelector(".no-results"), search = document.querySelector("#faq-search");
    let page = 1;
    const renderFaqs = () => { const query = search.value.trim().toLowerCase(), filtered = faqItems.filter(item => `${item.question} ${item.answer} ${t(item.question)} ${t(item.answer)}`.toLowerCase().includes(query)), pageCount = Math.max(1, Math.ceil(filtered.length / 8)); page = Math.min(page, pageCount); const visible = filtered.slice((page - 1) * 8, page * 8); list.innerHTML = visible.map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${(page-1)*8+index}"><span>${t(item.question)}</span><b aria-hidden="true"></b></button><div class="faq-answer" id="faq-answer-${(page-1)*8+index}" hidden><p>${t(item.answer)}</p></div></article>`).join(""); noResults.hidden = filtered.length !== 0; pagination.hidden = filtered.length === 0; pagination.innerHTML = `<button type="button" data-page="${page-1}" ${page===1?"disabled":""} aria-label="${t("Previous page")}">‹</button>${Array.from({length:pageCount},(_,i)=>`<button type="button" data-page="${i+1}" class="${page===i+1?"active":""}" aria-current="${page===i+1?"page":"false"}">${i+1}</button>`).join("")}<button type="button" data-page="${page+1}" ${page===pageCount?"disabled":""} aria-label="${t("Next page")}">›</button>`; };
    list.addEventListener("click", event => { const button = event.target.closest(".faq-question"); if (!button) return; const answer = button.nextElementSibling, open = button.getAttribute("aria-expanded") === "true"; list.querySelectorAll(".faq-question").forEach(item => { item.setAttribute("aria-expanded", "false"); item.nextElementSibling.hidden = true; }); button.setAttribute("aria-expanded", String(!open)); answer.hidden = open; });
    pagination.addEventListener("click", event => { const button = event.target.closest("button[data-page]"); if (!button || button.disabled) return; page = Number(button.dataset.page); renderFaqs(); list.scrollIntoView({ behavior: "smooth", block: "start" }); });
    search.addEventListener("input", () => { page = 1; renderFaqs(); });
    renderFaqs();
  }
  if (route === "resources-download") {
    const body = document.querySelector("#download-body"), pagination = document.querySelector("#download-pagination"), noResults = document.querySelector(".no-results"), search = document.querySelector("#download-search"), category = document.querySelector("#download-category");
    let page = 1;
    const renderDownloads = () => { const query = search.value.trim().toLowerCase(), selected = category.value, filtered = downloadItems.filter(item => (selected === "all" || item.category === selected) && `${item.id} ${item.name} ${t(item.name)} ${item.size} ${item.type} ${item.date}`.toLowerCase().includes(query)), pageCount = Math.max(1, Math.ceil(filtered.length / 15)); page = Math.min(page, pageCount); const visible = filtered.slice((page - 1) * 15, page * 15); body.innerHTML = visible.map(item => `<tr><td>${item.id}</td><td>${t(item.name)}</td><td>${item.size}</td><td>${item.type}</td><td>${item.date}</td><td><a href="${encodeURI(item.localPath || (ABILIX_DOWNLOAD_ROOT + item.path))}" target="_blank" rel="noopener">${t("Download")}</a></td></tr>`).join(""); noResults.hidden = filtered.length !== 0; document.querySelector(".download-table-wrap").hidden = filtered.length === 0; pagination.hidden = filtered.length === 0; pagination.innerHTML = `<button type="button" data-page="${page-1}" ${page===1?"disabled":""} aria-label="${t("Previous page")}">‹</button>${Array.from({length:pageCount},(_,i)=>`<button type="button" data-page="${i+1}" class="${page===i+1?"active":""}" aria-current="${page===i+1?"page":"false"}">${i+1}</button>`).join("")}<button type="button" data-page="${page+1}" ${page===pageCount?"disabled":""} aria-label="${t("Next page")}">›</button>`; };
    pagination.addEventListener("click", event => { const button = event.target.closest("button[data-page]"); if (!button || button.disabled) return; page = Number(button.dataset.page); renderDownloads(); document.querySelector(".download-controls").scrollIntoView({ behavior: "smooth", block: "start" }); });
    search.addEventListener("input", () => { page = 1; renderDownloads(); });
    category.addEventListener("change", () => { page = 1; renderDownloads(); });
    renderDownloads();
  }
  if (route === "product") {
    document.querySelector(".xiaoxing-buy-jump")?.addEventListener("click", () => document.querySelector("#xiaoxing-buy")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelector("#main-product-image").src=t.dataset.src;}));
    let qty=1; document.querySelectorAll(".quantity button").forEach(b=>b.addEventListener("click",()=>{qty=Math.max(1,qty+Number(b.dataset.delta));document.querySelector("#quantity").textContent=qty;}));
    document.querySelector(".add-bag")?.addEventListener("click",()=>{bagCount+=qty;document.querySelector("#bag-count").textContent=bagCount;showToast(currentLanguage === "zh" ? `已将 ${qty} 件小星加入购物袋。` : `${qty} Xiaoxing added to your bag.`);});
    document.querySelector(".buy-now")?.addEventListener("click",()=>showToast(currentLanguage === "zh" ? "结账功能可在生产版本中接入。" : "Checkout is ready for integration in the production build."));
  }
}

window.addEventListener("hashchange", render);



/* Company content and shared page components. */
const C910 = 'assets/ch910/';
const D910 = 'assets/documents/';
const L = (zh, en) => currentLanguage === 'zh' ? zh : en;
const photo910 = (file, alt, cls = '') => `<img class="${cls}" src="${C910}${file}.jpg" alt="${alt}" loading="lazy" decoding="async">`;
const arrow910 = (href, text, cls = 'c-link') => `<a class="${cls}" href="${href}">${text}<span aria-hidden="true">↗</span></a>`;
const sectionLink910 = (route, section) => `#/${route}?section=${section}`;
const source910 = (file, page, label) => `<a class="c-source" href="${D910}${file}${page ? '#page='+page : ''}" target="_blank" rel="noopener">${L('资料来源：','Source: ')}${label}${page ? ` · ${L('第 '+page+' 页','p. '+page)}` : ''} ↗</a>`;

Object.assign(routeLabel, {'product-education':'Educational Robot','series':'Educational Robot',techniques:'Techniques',stories:'Stories','resources-brochures':'Brochures','resources-news':'News',contact:'Contact','solution-detail':'Solutions'});
Object.assign(zhTranslations, {'Educational Robot':'教育机器人详情',Techniques:'理论与技术',Stories:'品牌故事',Contact:'商务合作',News:'新闻中心',Brochures:'宣传册'});
routes.push('techniques','stories','resources-brochures','resources-news','contact','solution-detail');

header = function(active) {
  const items = ['home','solutions','products','curriculum','techniques','wer','resources','stories'];
  return `<header class="site-header c-header"><div class="header-inner">${link('home','<span class="logo-word">Abilix<span class="c-logo-dot">.</span></span><span class="logo-tag">能力风暴 · SINCE 1996</span>','logo')}<nav class="primary-nav" aria-label="${L('主导航','Primary navigation')}">${items.map(r => r === 'wer' ? '<a href="https://www.wergame.org/" target="_blank" rel="noopener">WER ↗</a>' : link(r, L(t(routeLabel[r]),routeLabel[r]),(active === r || active==='product'&&r==='products') ? 'active' : '')).join('')}</nav><button class="language-switch" type="button" aria-label="${L('切换为英文','Switch to Chinese')}"><span>${L('EN','中')}</span></button>${active==='product'?`<button class="bag c-bag" aria-label="${L('购物袋','Shopping bag')}">${L('购物袋','Bag')} <span id="bag-count">${bagCount}</span></button>`:''}<button class="menu-button" aria-label="${L('展开或收起导航','Toggle navigation')}" aria-expanded="false"><span></span><span></span><span></span></button></div></header>`;
};

footer = function() {
  const groups = [
    [L('产品','Products'),[['#/product',L('AI 教育机器人 · 小星','AI Robot · Xiaoxing')],['#/products-education?scene=school',L('学校 · SK 系列','Schools · SK')],['#/products-education?scene=competition',L('竞赛 · SK 系列','Competition · SK')],['#/products-education?scene=center',L('课程进化中心 · 氪系列','Learning centers · Krypton')]]],
    [L('解决方案','Solutions'),[['#/solution-detail?id=base',L('人工智能基地','AI education base')],['#/solution-detail?id=school',L('AI 应用与元能力训练','AI & meta abilities')],['#/solution-detail?id=center',L('未来英才进化中心','Future talent centers')]]],
    [L('课程与理论','Learning'),[['#/curriculum?section=ai',L('人工智能应用能力','AI application abilities')],['#/curriculum?section=meta',L('元能力训练','Meta abilities')],['#/curriculum?section=civilization',L('文明级通识','Civilization studies')],['#/techniques',L('理论与技术','Techniques')],['https://www.wergame.org/','WER ↗']]],
    [L('资源与品牌','Resources & stories'),[['#/resources-faq','FAQ'],['#/resources-download',L('下载中心','Downloads')],['#/resources-brochures',L('宣传册','Brochures')],['#/resources-news',L('新闻中心','News')],['#/stories',L('品牌故事','Stories')],['#/stories?section=partnerx',L('未来伙伴','PartnerX')]]]
  ];
  return `<footer class="c-footer"><div class="container"><div class="c-footer-top"><div><a class="c-footer-logo" href="#/home">Abilix.</a><p>${L('三十年，持续探索教育的未来。','Thirty years of exploring the future of education.')}</p></div>${arrow910('#/contact',L('与我们合作','Partner with us'),'c-button')}</div><div class="c-footer-grid">${groups.map(g=>`<div><h3>${g[0]}</h3>${g[1].map(a=>`<a href="${a[0]}" ${a[0].startsWith('https')?'target="_blank" rel="noopener"':''}>${a[1]}</a>`).join('')}</div>`).join('')}</div><div class="c-contact-row"><a href="tel:4008080199">400 8080 199</a><a href="mailto:info@abilix.com">info@abilix.com</a><span>${L('上海市闵行区合川路 3051 号莱茵虹桥 A 栋 8 层','8F, Building A, 3051 Hechuan Road, Minhang, Shanghai')}</span></div><div class="c-footer-bottom"><span>© 2026 Abilix · PartnerX</span><span>1996 — 2026</span></div></div></footer>`;
};

const milestones910 = () => [
  ['1996',L('从开创出发','The beginning'),L('能力风暴创立，开启教育机器人的研发探索。','Abilix is founded, beginning its educational robotics research.'),'founders'],
  ['2000',L('定义一个新品类','Defining a category'),L('首创“教育机器人”术语，明确以能力训练为核心的教育价值。','The term “educational robot” defines a category focused on developing abilities.'),'history-1998'],
  ['2003',L('建立教育理论','An educational foundation'),L('恽为民博士与 Jake Mendelssohn 教授共同开创教育机器人学与 SITA 教育。','Dr. Yun Weimin and Professor Jake Mendelssohn co-create educational robotics and SITA education.'),'founders'],
  ['2006–2016',L('走向全球','Growing worldwide'),L('逐步建立全球赛事、课程与专利体系，连接更多教育实践者。','A growing network of competitions, curricula and patented technologies connects educators worldwide.'),'global-event'],
  ['2024',L('开启 AI 教育新阶段','A new chapter in AI'),L('开创 AI 教育机器人，探索人工智能应用能力与元能力的系统训练。','AI educational robotics opens a new chapter in AI application and meta-ability training.'),'circuit'],
  ['2026',L('研发三十年，继续向前','Thirty years, still exploring'),L('从教育机器人到 AI 时代的教育研究，持续积累、持续进化。','Three decades of research continue into education for the AI era.'),'lab-space']
];
const news910 = () => [
  {id:'cctv',tag:L('央视报道 · 影像档案','CCTV · MEDIA ARCHIVE'),title:L('被镜头记录的创新历程','Innovation, captured on camera'),text:L('公司资料收录了 CCTV 多次采访报道的历史画面，记录教育机器人从研发走向教育实践的过程。','Company archives collect historical CCTV reporting on the development and educational use of robotics.'),image:'cctv-archive',file:'abilix-story.pptx',page:0,source:L('能力风暴介绍 · 第 24 张','Abilix introduction · slide 24')},
  {id:'1998',tag:'1998 · '+L('历史见证','HISTORY'),title:L('一次关于科技未来的交流','A conversation about the future'),text:L('1998 年，恽为民博士受邀参加克林顿总统访华期间的科技企业家午餐会。','In 1998, Dr. Yun Weimin attended the technology entrepreneurs’ luncheon during President Clinton’s visit to China.'),image:'history-1998',file:'brand-cn.pdf',page:38,source:L('能力风暴品牌宣传册','Abilix brand brochure')},
  {id:'2005',tag:'2005 · '+L('实验室纪实','LABORATORY ARCHIVE'),title:L('教育创新，走进实验室','Educational innovation in the lab'),text:L('2005 年 10 月 14 日，胡锦涛视察能力风暴教育机器人实验室。','On October 14, 2005, Hu Jintao visited the Abilix educational robotics laboratory.'),image:'history-2005',file:'partnerx.pdf',page:23,source:L('未来伙伴介绍','PartnerX introduction')}
];
const newsCards910 = () => `<div class="c-news-grid">${news910().map(n=>`<a class="c-news-card" href="#/resources-news?article=${n.id}"><div class="c-news-image">${photo910(n.image,n.title)}</div><p class="c-eyebrow">${n.tag}</p><h3>${n.title}<span>↗</span></h3></a>`).join('')}</div>`;

pages.home = function() {
  const ms=milestones910();
  return `${header('home')}<main id="main" class="ch910 c-home">
    <section class="c-home-hero"><div class="container c-hero-layout"><div class="c-hero-text"><p class="c-eyebrow"><span class="c-dot"></span> ABILIX · SINCE 1996</p><h1>${L('教育机器人<br><em>全球开创者。</em>','Pioneering<br><em>educational<br>robotics.</em>')}</h1><p class="c-hero-intro">${L('30 年研发积淀。<br>让一次开创，成为持续进化的力量。','30 years of research.<br>One pioneering idea. A continuing journey.')}</p>${arrow910('#/stories',L('认识能力风暴','Discover Abilix'),'c-button')}<div class="c-hero-year"><strong>1996</strong><span></span><strong>2026</strong><small>30 YEARS OF EXPLORATION</small></div></div><div class="c-hero-collage" data-pointer><div class="c-collage-main"><div class="c-archive-slides" aria-label="${L('公司影像轮播','Company archive carousel')}">${['global-event','cctv-archive','history-2005'].map((f,i)=>`<img class="hero-slide ${i===0?'active':''}" src="${C910+f}.jpg" alt="${[L('全球赛事现场','Global competition'),L('央视历史报道','Historical CCTV reports'),L('2005 年实验室纪实','Laboratory archive, 2005')][i]}">`).join('')}</div><span>${L('与世界，共同见证','A shared journey across the world')} ↗</span><div class="c-archive-pagination">${[0,1,2].map(i=>`<button class="hero-page ${i===0?'active':''}" aria-label="${L('显示第 '+(i+1)+' 张','Show image '+(i+1))}" aria-current="${i===0}"></button>`).join('')}<button class="c-carousel-pause" aria-label="${L('暂停轮播','Pause carousel')}" aria-pressed="false">Ⅱ</button></div></div><div class="c-collage-history">${photo910('history-meeting',L('1998 年历史交流照片','Historical meeting in 1998'))}<span>1998 / ${L('历史档案','ARCHIVE')}</span></div><div class="c-collage-caption"><span>RESEARCH.<br>EDUCATION.<br>EVOLUTION.</span><b>30<span>年 / YEARS</span></b></div></div></div><div class="container c-hero-bottom"><span>${L('教育机器人 · 教育机器人学 · SITA 教育','Educational robotics · Robotics research · SITA education')}</span><a href="#research">${L('探索我们的历程','Explore our journey')} ↓</a></div></section>
    <section id="research" class="c-section"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">01 / ${L('研发底蕴','RESEARCH HERITAGE')}</p><h2>${L('三十年，<br>把探索做深。','Thirty years.<br>A deeper understanding.')}</h2></div><p>${L('从底层控制到教育理论，<br>长期研发是能力风暴的根基。','From robot control to educational theory,<br>research is the foundation of Abilix.')}</p></div><div class="c-research-grid" data-reveal><div class="c-research-photo">${photo910('circuit',L('能力风暴自主研发电路板','Abilix research circuit board'))}<span>ENGINEERED BY ABILIX</span></div><div class="c-research-stats"><article><strong>600<span>+</span></strong><h3>${L('专利技术积累','Patented technologies')}</h3><p>${L('机械、电子、控制与编程的持续创新。','Continued innovation in mechanics, electronics, control and programming.')}</p></article><article><strong>4<span>${L(' 层',' levels')}</span></strong><h3>${L('渐进式编程体系','Progressive programming')}</h3><p>${L('从技能体验、项目编程到图形与文本编程。','From skill exploration and projects to graphical and text programming.')}</p></article>${source910('partnerx.pdf',12,L('未来伙伴介绍','PartnerX introduction'))}</div></div></div></section>
    <section class="c-section c-history"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">02 / ${L('创新历程','OUR JOURNEY')}</p><h2>${L('每一步，都有来处。','Every step has a story.')}</h2></div>${arrow910('#/stories?section=history',L('完整品牌历程','The full story'))}</div><div class="c-timeline">${ms.map((m,i)=>`<button type="button" data-milestone="${i}" aria-pressed="${i===0}" class="${i===0?'active':''}"><span>${m[0]}</span><i></i><strong>${m[1]}</strong></button>`).join('')}</div><div id="milestone-panel" class="c-milestone-panel" aria-live="polite">${photo910(ms[0][3],ms[0][1])}<div><span>01 / 06</span><h3>${ms[0][1]}</h3><p>${ms[0][2]}</p></div></div></div></section>
    <section class="c-section"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">03 / ${L('影像与见证','IN THE ARCHIVES')}</p><h2>${L('时间留下的真实记录。','A history you can see.')}</h2></div>${arrow910('#/resources-news',L('浏览新闻档案','Explore the news archive'))}</div>${newsCards910()}</div></section>
    <section class="c-global">${photo910('global-event',L('全球教育机器人赛事现场','Global educational robotics event'))}<div class="container"><p class="c-eyebrow">ABILIX AROUND THE WORLD</p><h2>${L('始于中国，<br>与世界同行。','Born in China.<br>Connected to the world.')}</h2><div><strong>50<span>+</span></strong><p>${L('国家与地区<br>共同探索教育的未来','countries and regions<br>exploring the future of education')}</p></div>${arrow910('#/stories?section=partnerx',L('走近未来伙伴','Meet PartnerX'),'c-button c-button-white')}<small>${L('覆盖数据引自能力风暴品牌手册。','Reach figures from the Abilix brand manual.')}</small></div></section>
  </main>${footer()}`;
};

const scenes910 = () => [
  {id:'school',label:L('学校','Schools'),series:'SK SERIES',title:L('让课堂里的想法，动起来。','Bring classroom ideas to life.'),text:L('面向学校的项目课程与系统化机器人教学。','Structured robotics teaching and project courses for schools.'),image:S+'k12-schools.png',models:['SK209','SK509','SK909','SKB509']},
  {id:'competition',label:L('竞赛','Competition'),series:'SK SERIES',title:L('把一次挑战，变成一次成长。','Turn a challenge into progress.'),text:L('围绕竞赛任务，开展搭建、编程与工程创新训练。','Build, program and test ideas through competition challenges.'),image:A+'15c8130d-936d-4ef2-9ca3-d8b31afdcf84.png',models:['SK201','SK301','SK902']},
  {id:'center',label:L('课程进化中心','Learning centers'),series:'KRYPTON',title:L('让持续探索，有自己的空间。','A place for continuous discovery.'),text:L('氪系列连接日常项目实践与持续进阶的课程。','Krypton connects everyday project practice with progressive courses.'),image:S+'training-centers.png',models:['KB8','KY8','K48']}
];
const modelInfo910 = {
 SK209:{scene:'school',image:'sk209',name:['课堂基础套装','Classroom basic kit'],desc:['从结构搭建到传感与编程，开启课堂机器人项目。','Begin classroom projects with construction, sensing and programming.'],stage:['小学；按课程难度选配','Primary school; select by course level'],spec:[['积木数','Bricks','>350'],['控制器','Controller','SKCON2'],['传感器','Sensors','>10'],['执行器','Actuators','>8']],file:'sita-classroom.pdf',page:19},
 SK509:{scene:'school',image:'sk509',name:['课堂标准套装','Classroom standard kit'],desc:['丰富传感与控制任务，支持更深入的项目实践。','Explore richer sensing and control through practical projects.'],stage:['初中；按课程难度选配','Middle school; select by course level'],spec:[['积木数','Bricks','>400'],['控制器','Controller','SKCON5'],['传感器','Sensors','>20'],['执行器','Actuators','>15']],file:'sita-classroom.pdf',page:19},
 SK909:{scene:'school',image:'sk909',name:['课堂进阶套装','Advanced classroom kit'],desc:['面向复杂结构、控制与人工智能项目的进阶训练。','Advanced practice in complex structures, control and AI projects.'],stage:['高中；按课程难度选配','High school; select by course level'],spec:[['积木数','Bricks','>500'],['控制器','Controller','SKCON9'],['传感器','Sensors','>30'],['执行器','Actuators','>20']],file:'sita-classroom.pdf',page:19},
 SKB509:{scene:'school',name:['学校课程平台','School course platform'],desc:['面向学校教学场景，按课程目标咨询套装配置。','A school platform; enquire about configurations for your course goals.'],pending:true},
 SK201:{scene:'competition',image:'sk201',name:['竞赛基础套装','Competition standard kit'],desc:['通过任务搭建、传感识别与路线调试开展竞赛训练。','Train with task construction, sensing and route programming.'],stage:['小学、初中、高中；依据赛事组别','Primary through high school; subject to event categories'],spec:[['电机','Motors','3'],['控制器','Controller','1'],['集成传感器模块','Integrated sensor block','1']],file:'brand-en.pdf',page:22},
 SK301:{scene:'competition',name:['竞赛训练平台','Competition training platform'],desc:['面向竞赛场景，按任务与参赛规则咨询具体配置。','Enquire about a configuration for your competition and tasks.'],pending:true},
 SK902:{scene:'competition',image:'sk902',name:['工程创新套装','Engineering innovation kit'],desc:['支持双机器人搭建，开展工程创新与协同控制实践。','Build two robots for engineering innovation and coordinated control.'],stage:['小学、初中、高中；依据赛事组别','Primary through high school; subject to event categories'],spec:[['控制器','Controller','SKCON9'],['灰度传感','Grayscale channels','15'],['电机','Motors','6'],['舵机','Servos','2']],file:'sita-lab.pdf',page:50},
 KB8:{scene:'center',name:['大积木课程平台','Large-brick course platform'],desc:['连接 AB2、AB3 项目课程，在搭建实践中积累能力。','Build abilities through AB2 and AB3 project courses.'],stage:['AB 课程参考年龄 3–5 岁','AB courses: reference age 3–5'],spec:[['课程衔接','Course connection','AB2 · AB3']],file:'solution-center.pdf',page:21},
 KY8:{scene:'center',image:'ky8',name:['积木课程平台','Brick course platform'],desc:['连接 AY1–AY5 项目课程，让持续进阶融入日常探索。','Progress through everyday exploration with AY1–AY5 project courses.'],stage:['AY 课程参考年龄 6–10 岁','AY courses: reference age 6–10'],spec:[['课程衔接','Course connection','AY1–AY5']],file:'solution-center.pdf',page:21},
 K48:{scene:'center',name:['进阶课程平台','Progressive course platform'],desc:['面向课程进化中心，咨询适配课程与套装配置。','Enquire about courses and kit configurations for learning centers.'],pending:true}
};
const modelArt910 = (id,detail=false) => {const m=modelInfo910[id];return m.image ? photo910(m.image,id+' · '+L(...m.name)) : `<div class="c-model-type" aria-label="${id}"><span>${m.scene==='center'?'KRYPTON':'SCHOOL KRYPTON'}</span><b>${id}</b><i>${L('教育机器人','EDUCATIONAL ROBOT')}</i></div>`;};
const modelCard910 = id => {const m=modelInfo910[id];return `<a class="c-model-card" data-model-card="${id}" href="#/product-education?model=${id}"><div class="c-model-art">${modelArt910(id)}<span>↗</span></div><div class="c-model-copy"><span>${m.scene==='center'?'KRYPTON':'SK SERIES'}</span><h3>${id}</h3><p>${L(...m.name)}</p></div></a>`;};
const seriesExplorer910 = () => `<div class="c-series-explorer"><div class="c-section-heading"><div><p class="c-eyebrow">TWO PRODUCT FAMILIES</p><h2>${L('认识两大系列。','Meet the two families.')}</h2></div><p>${L('悬停或点击，探索搭建的可能。','Hover or select to explore the possibilities.')}</p></div><div class="series-accordion" role="group" aria-label="${L('教育机器人系列','Educational robot families')}">${[
  {name:L('Krypton 氪系列','Krypton'),label:'KRYPTON',image:A+'b4f5f090-a00c-413c-97dd-31a6e010bd1d.png',text:L('连接项目实践与持续进阶的课程。','Connecting project practice and progressive courses.'),models:['KB8','KY8','K48'],scene:'center'},
  {name:L('SK 系列','SK Series'),label:'SK SERIES',image:C910+'sk201.jpg',text:L('为学校课程和竞赛任务提供机器人平台。','Robotics platforms for school courses and competition tasks.'),models:['SK209','SK509','SK909','SKB509','SK201','SK301','SK902'],scene:'school'}
].map((s,i)=>`<article class="series-accordion-panel ${i===0?'active':''} is-current" data-series-index="${i}"><img class="series-accordion-image" src="${s.image}" alt="${s.name}" loading="lazy"><span class="series-accordion-shade"></span><button class="series-accordion-trigger" type="button" aria-expanded="${i===0}" aria-label="${L('探索','Explore')} ${s.name}"><span class="series-vertical-title">${s.label}</span></button><div class="series-accordion-content"><p class="series-type">${s.label}</p><h3>${s.name}</h3><p>${s.text}</p><div class="series-models">${s.models.map(m=>`<span>${m}</span>`).join('')}</div><a class="series-accordion-action" href="#/products-education?scene=${s.scene}&section=educational-robots">${L('查看适配型号','Explore models')} →</a></div></article>`).join('')}</div></div>`;
function scenePanel910(id) {
 const s=scenes910().find(s=>s.id===id)||scenes910()[0];
 return `<div class="c-scene-intro"><div><p class="c-eyebrow">${s.series} / ${s.models.length} ${L('款产品','MODELS')}</p><h3>${s.title}</h3><p>${s.text}</p></div><img src="${s.image}" alt="${s.label}" loading="lazy"></div><div class="c-model-grid">${s.models.map(modelCard910).join('')}</div><div class="c-course-strip"><div><span>CURRICULUM</span><p>${L('设备连接实践，课程指引进阶。','Equipment supports practice. Curriculum guides progress.')}</p></div>${arrow910('#/curriculum?section=meta',L('了解配套课程','Explore related courses'))}</div>`;
}
function educationBlock910(){
 const q=new URLSearchParams(location.hash.split('?')[1]||'');const scene=scenes910().some(s=>s.id===q.get('scene'))?q.get('scene'):'school';
 return `<section id="educational-robots" class="c-section"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">EDUCATIONAL ROBOTS</p><h2>${L('从使用场景，找到适合的一款。','The right robot for your setting.')}</h2></div><p>${L('Krypton 氪系列 · SK 系列<br>围绕教学、竞赛与持续学习。','Krypton · SK Series<br>For teaching, competition and continuous learning.')}</p></div><div class="c-scene-tabs" role="tablist" aria-label="${L('按场景选择产品','Choose products by setting')}">${scenes910().map((s,i)=>`<button id="scene-tab-${s.id}" role="tab" aria-controls="scene-panel" aria-selected="${scene===s.id}" tabindex="${scene===s.id?0:-1}" class="${scene===s.id?'active':''}" data-scene="${s.id}"><span>0${i+1}</span>${s.label}<b>${s.models.length}</b></button>`).join('')}</div><div id="scene-panel" role="tabpanel" aria-labelledby="scene-tab-${scene}">${scenePanel910(scene)}</div>${seriesExplorer910()}</div></section>`;
}
const originalProductCenter910 = productCenterPage;
pages.products = () => {
 let html=originalProductCenter910();
 html=html.slice(0,html.indexOf('<section id="educational-robots"'))+educationBlock910()+`</main>${footer()}`;
 return html.replace('class="product-center-redesign"','class="product-center-redesign ch910"').replace('<div class="pc-highlight-list">',`${arrow910('#/curriculum?section=ai',L('查看 AI 课程体系','Explore the AI curriculum'))}<div class="pc-highlight-list">`);
};
pages['products-education'] = () => `${header('products')}<main id="main" class="ch910"><section class="c-education-hero"><img src="${images.gatewayEducation}" alt="${L('教育机器人搭建作品','Educational robot construction')}"><div class="container"><a class="c-back" href="#/products">← ${L('产品中心','Products')}</a><p class="c-eyebrow">KRYPTON / SK SERIES</p><h1>${L('为每一种探索，<br>找到合适的机器人。','Built for the way<br>you explore.')}</h1><p>${L('学校、竞赛、课程进化中心。<br>从真实使用场景出发。','Schools, competitions and learning centers.<br>Start with where you learn.')}</p><a href="#educational-robots" class="c-button c-button-white">${L('按场景浏览','Explore by setting')} ↓</a></div></section>${educationBlock910()}</main>${footer()}`;
pages['product-education'] = pages.series = function(){
 const p=new URLSearchParams(location.hash.split('?')[1]||'');const aliases={'school-krypton-201':'SK201','krypton-8':'KY8','krypton-6':'KY8'};const raw=p.get('model');const id=modelInfo910[raw]?raw:(aliases[raw]||(p.get('series')==='krypton'?'KY8':'SK209'));const m=modelInfo910[id];const s=scenes910().find(s=>s.id===m.scene);
 return `${header('products')}<main id="main" class="ch910"><div class="container c-breadcrumb"><a href="#/products-education?scene=${s.id}">← ${s.label}</a><span>${s.series} / ${id}</span></div><section class="container c-detail-hero"><div class="c-detail-art">${modelArt910(id,true)}${!m.image?`<small>${L('产品外观请咨询获取','Contact us for product imagery')}</small>`:''}</div><div><p class="c-eyebrow">${s.series} / ${s.label}</p><h1>${id}</h1><h3>${L(...m.name)}</h3><p>${L(...m.desc)}</p><dl><div><dt>${L('应用场景','Setting')}</dt><dd>${s.label}</dd></div><div><dt>${L('适用阶段 / 年龄','Stage / age')}</dt><dd>${m.stage?L(...m.stage):L('请联系顾问确认适配阶段','Contact an advisor to confirm suitability')}</dd></div></dl>${arrow910('#/contact?model='+id,L('咨询产品配置','Enquire about this model'),'c-button')}</div></section><section class="c-section c-soft"><div class="container"><p class="c-eyebrow">01 / ${L('产品信息','PRODUCT INFORMATION')}</p><h2>${L('关键配置，一目了然。','Key details at a glance.')}</h2>${m.pending?`<p>${L('此型号的详细配置与课程适配，请联系产品顾问获取。','Contact a product advisor for detailed specifications and course compatibility.')}</p>`:`<div class="c-spec-grid">${m.spec.map(v=>`<div><span>${L(v[0],v[1])}</span><strong>${v[2]}</strong></div>`).join('')}</div>${m.scene==='school'?`<p>Project · Chart · Scratch · C · Python</p>`:m.scene==='competition'&&id==='SK201'?'<p>Chart · Scratch · C · Python</p>':''}${source910(m.file,m.page,L('产品与课程手册','Product and course manual'))}<p class="c-small">${L('以上为资料所载配置；交付套装以确认的具体版本为准。','Specifications refer to the supplied manual; confirm the kit edition when ordering.')}</p>`}</div></section><section class="container c-section"><div class="c-section-heading"><div><p class="c-eyebrow">02 / CURRICULUM</p><h2>${L('从搭建实践，走向能力进阶。','From building to growing abilities.')}</h2></div>${arrow910('#/curriculum?section=meta',L('探索元能力训练课程','Explore meta-ability courses'))}</div><div class="c-step-line">${[L('提出问题','Ask'),L('搭建与编程','Build & program'),L('测试与改进','Test & improve'),L('分享与反思','Share & reflect')].map((x,i)=>`<div><span>0${i+1}</span><h3>${x}</h3></div>`).join('')}</div></section><section class="container c-section c-related"><div class="c-section-heading"><h2>${L('继续比较同场景产品','Compare models for this setting')}</h2>${arrow910('#/products-education?scene='+s.id,L('返回场景选型','Back to selection'))}</div><div class="c-model-grid">${s.models.filter(x=>x!==id).map(modelCard910).join('')}</div></section></main>${footer()}`;
};

pages.curriculum = function(){
 const courses = [
  {id:'ai',no:'01',name:L('人工智能应用能力训练','AI application abilities'),lead:L('从使用 AI，到与 AI 共创。','From using AI to creating with it.'),text:L('围绕语言、视觉与数字创作，训练提出需求、使用工具和判断结果的能力。','Learn to express needs, use tools and evaluate results across language, vision and digital creation.'),img:images.inquiry,groups:[[L('已完成教材','Books completed'),L('大语言模型应用 · 大视觉模型应用','Large language models · Large vision models')],[L('2026 年规划','Planned for 2026'),L('3D、音乐、视频与短剧 · 智能体 · Vibe 编程 · 发明与专利','3D, music, video and microdrama · Agents · Vibe programming · Invention and patents')],[L('2027 年规划','Planned for 2027'),L('物理模型 · 机械模型 · 电子模型应用','Physical, mechanical and electronic model applications')]],href:'#/product',link:L('认识 AI 课程伙伴小星','Meet Xiaoxing, the AI learning companion')},
  {id:'meta',no:'02',name:L('元能力训练','Meta-ability training'),lead:L('训练创造力，也训练判断力。','Develop creativity and judgment.'),text:L('通过项目实践与提问，平衡发展创造、分析与实践能力。','Balance creative, analytical and practical abilities through projects and questioning.'),img:images.age7,groups:[[L('成功能力与科技素养','Successful intelligence & sci-tech'),L('渐进式机器人项目 · 搭建与编程 · 试错学习','Progressive robotics projects · Building and programming · Trial-and-error learning')],[L('竞赛实践','Competition practice'),L('WER 任务训练 · 工程创新 · 发明实践','WER task training · Engineering innovation · Invention practice')],[L('AI 时代的核心能力','Core abilities for the AI era'),L('提问 · 批判性思维 · 审美 · 价值判断','Questioning · Critical thinking · Aesthetics · Value judgment')]],href:'#/products-education',link:L('查看对应机器人平台','Explore the robotics platforms')},
  {id:'civilization',no:'03',name:L('文明级通识训练','Civilization-level general knowledge'),lead:L('让好问题，打开更大的世界。','Good questions open a wider world.'),text:L('以提问为基础，在与小星的对话中探索广域知识，建立理解与联系。','Explore broad knowledge through questioning and dialogue with Xiaoxing, building understanding and connections.'),img:images.children,groups:[[L('提问式学习','Question-based learning'),L('提出问题 → 探索知识 → 追问与联系 → 表达理解','Ask → Explore → Connect → Explain')],[L('教材覆盖','Book coverage'),L('幼儿园、小学、初中、高中四个阶段，资料标注 4 本已完成。','Four completed books cover kindergarten, primary, middle and high school.')]],href:'#/product',link:L('了解小星的对话学习','Discover learning through dialogue')}
 ];
 return `${header('curriculum')}<main id="main" class="ch910">${pageHero({title:L('课程体系','Curriculum'),summary:L('三大课程体系，连接 AI 应用、核心能力与广域知识。','Three curriculum pathways connect AI application, core abilities and broad knowledge.'),image:images.curriculum})}<nav class="c-local-nav"><div class="container">${courses.map(c=>`<a href="#${c.id}">${c.no} / ${c.name}</a>`).join('')}</div></nav><div class="container">${courses.map(c=>`<section id="${c.id}" class="c-section c-course-section"><div class="c-course-title"><p class="c-eyebrow">${c.no} / CURRICULUM</p><h2>${c.name}</h2><p>${c.lead}</p></div><div class="c-course-layout"><div><img src="${c.img}" alt="${c.name}" loading="lazy"><p>${c.text}</p>${arrow910(c.href,c.link)}</div><div>${c.groups.map((g,i)=>`<details class="c-course-disclosure" ${i===0?'open':''}><summary>${g[0]}<span>+</span></summary><p>${g[1]}</p></details>`).join('')}</div></div></section>`).join('')}<div class="c-curriculum-note"><p>${L('课程进度依据 2026 年 8 月 V4.0 资料；规划项目不代表已交付。','Curriculum progress follows the August 2026 V4.0 document; planned items are not listed as delivered.')}</p>${source910('curriculum-v4.docx',0,L('课程体系 V4.0','Curriculum V4.0'))}</div></div></main>${footer()}`;
};

const solutions910 = () => [
 {id:'base',title:L('人工智能基地','AI education base'),tag:L('区域实践教育','REGIONAL EDUCATION'),text:L('以“认知—体验—创造”为路径，连接 AI 体验、实践课程、竞赛与成果展示。','Connect AI exploration, practical courses, competition and student showcases through discovery, experience and creation.'),image:C910+'ai-space.jpg',file:'solution-ai-base.docx',source:L('铜仁市能力风暴人工智能教育基地方案','Tongren AI education base proposal'),groups:[[L('沉浸体验','Immersive discovery'),L('AI 通识展示、互动体验与动手项目，让学生从看见 AI 走向亲手创造。','AI knowledge displays, interactive experiences and hands-on projects move students from discovery to creation.')],[L('课程与竞赛','Courses & competitions'),L('AI 教室、科创俱乐部与机器人竞赛区形成连续实践路径。','AI classrooms, innovation clubs and competition spaces form a continuous practice pathway.')],[L('作品与成长','Work & progress'),L('通过学生作品展示、交流和成果转化空间，留下可回顾的学习成果。','Student showcases and exchange spaces make learning outcomes visible and reviewable.')]]},
 {id:'school',title:L('AI 应用能力及元能力课程训练','AI application & meta-ability training'),tag:L('学校课程建设','SCHOOL CURRICULUM'),text:L('将 AI 应用、成功能力与通识学习融入校内课程、科创俱乐部和研学实践。','Bring AI application, successful intelligence and general knowledge into school courses, innovation clubs and study activities.'),image:S+'practice-classroom.png',file:'solution-school.pdf',source:L('上海市西外外国语学校课程方案','Shanghai Xiwai school curriculum proposal'),groups:[[L('连续课程','A continuous curriculum'),L('围绕 AI 应用能力、元能力与文明级通识三个方向，组织渐进式训练。','Structure progressive practice around AI applications, meta abilities and civilization studies.')],[L('机器人实践','Robotics practice'),L('SK209、SK509、SK909 分别连接小学、初中与高中的项目训练。','SK209, SK509 and SK909 support project training across primary, middle and high school.')],[L('多元评价','Learning assessment'),L('结合项目过程、作品表达与成长记录，关注能力发展。','Assess development through project work, presentations and progress records.')]]},
 {id:'center',title:L('未来英才进化中心','Future talent learning center'),tag:L('持续进阶的学习空间','CONTINUOUS LEARNING'),text:L('结合项目课程、作品展示、竞赛与研学，让校外学习形成持续成长的路径。','Connect projects, showcases, competitions and study activities into a continuous learning journey.'),image:S+'training-centers.png',file:'solution-center.pdf',source:L('未来英才进化中心资料','Future talent center presentation'),groups:[[L('项目训练','Project practice'),L('以 SITA 教育方法组织 AB、AY、AH 系列课程，通过试错建立知识与能力。','AB, AY and AH courses use the SITA approach to build knowledge and abilities through experimentation.')],[L('课程平台','Course platforms'),L('按学习项目配置氪系列平台，配合持续进阶的课程安排。','Select Krypton platforms around learning projects and a progressive course schedule.')],[L('成果与交流','Showcase & exchange'),L('将日常作品、赛事实践和学习交流连接起来，让成长可见。','Make progress visible by connecting everyday projects, competitions and learning exchanges.')]]}
];
const originalSolutions910=solutionsPage;
pages.solutions=function(){
 const ss=solutions910();solutionItems.splice(0,solutionItems.length,...ss.map(s=>({title:s.title,category:s.tag,image:s.image,description:s.text})));
 let html=originalSolutions910();const start=html.indexOf('<section class="solution-mode-panel solution-introduction');const end=html.indexOf('<div class="solution-mode-panel" data-panel="environments"',start);
 const intro=`<section class="solution-mode-panel solution-introduction container c-solution-intro" data-panel="introduction" role="tabpanel"><div class="c-section-heading"><div><p class="c-eyebrow">THREE WAYS TO BEGIN</p><h2>${L('找到适合你的教育场景。','Find your educational setting.')}</h2></div><p>${L('从区域基地到学校课程，再到持续学习的进化中心。','From regional bases to school courses and learning centers.')}</p></div><div class="c-solution-cards">${ss.map((s,i)=>`<a href="#/solution-detail?id=${s.id}"><img src="${s.image}" alt="${s.title}" loading="lazy"><div><span>0${i+1} / ${s.tag}</span><h3>${s.title}</h3><p>${s.text}</p><strong>${L('了解方案','Explore this approach')} ↗</strong></div></a>`).join('')}</div></section>`;
 html=html.slice(0,start)+intro+html.slice(end);
 html=html.replace('<main id="main">','<main id="main" class="ch910">').replace('Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.',L('让教育空间、实践课程与成长路径相互连接。','Connect educational spaces, practical courses and learning pathways.')).replace('Explore four environments',L('沉浸浏览三大场景','Explore three settings')).replace('Introduction',L('方案概览','Overview')).replace(' /04',' /03');
 const shortLabels=[L('人工智能基地','AI base'),L('学校课程','School courses'),L('进化中心','Learning centers')];
 ss.forEach((s,i)=>{html=html.replace(`<strong>${s.title}</strong>`,`<strong><span class="c-scene-label-wide">${s.title}</span><span class="c-scene-label-small">${shortLabels[i]}</span></strong>`);});
 return html;
};
pages['solution-detail']=function(){const id=new URLSearchParams(location.hash.split('?')[1]||'').get('id');const s=solutions910().find(x=>x.id===id)||solutions910()[0];return `${header('solutions')}<main id="main" class="ch910">${pageHero({eyebrow:s.tag,title:s.title,summary:s.text,image:s.image})}<section class="container c-section"><a class="c-back" href="#/solutions">← ${L('全部解决方案','All solutions')}</a><div class="c-three-grid">${s.groups.map((g,i)=>`<article><span class="c-eyebrow">0${i+1}</span><h3>${g[0]}</h3><p>${g[1]}</p></article>`).join('')}</div><div class="c-course-strip"><div><span>CURRICULUM & PRODUCTS</span><p>${L('继续了解课程与场景配置。','Explore courses and configurations.')}</p></div>${arrow910('#/curriculum',L('课程体系','Curriculum'))}${arrow910('#/products-education?scene='+(s.id==='center'?'center':'school'),L('适配产品','Related products'))}</div><p class="c-small">${L('图像与内容来自方案资料，空间图片为设计示意。','Images and content come from proposal materials; space images are design concepts.')}</p>${source910(s.file,0,s.source)}<div class="c-detail-cta"><h2>${L('讨论你的空间与教学目标。','Let’s discuss your learning goals.')}</h2>${arrow910('#/contact',L('咨询方案','Enquire about this approach'),'c-button')}</div></section></main>${footer()}`;};

pages.techniques=()=>`${header('techniques')}<main id="main" class="ch910"><section class="container c-section c-theory-hero"><div><p class="c-eyebrow">TECHNIQUES / SITA</p><h1>${L('让教育理论，<br>成为实践的底层。','Theory that<br>supports practice.')}</h1><p>${L('教育机器人学与 SITA 教育，连接成功能力、科技素养和项目实践。','Educational robotics and SITA connect successful intelligence, scientific and technological accomplishment, and project practice.')}</p>${arrow910('#/curriculum',L('探索课程体系','Explore the curriculum'),'c-button')}</div>${photo910('brain',L('自主研发机器人控制系统','Robot control system developed by Abilix'))}</section><section class="c-section c-soft"><div class="container"><p class="c-eyebrow">01 / THE FOUNDATIONS</p><h2>${L('三大教育理论基石。','Three educational foundations.')}</h2><div class="c-three-grid">${[[L('成功能力','Successful intelligence'),L('平衡发展创造、分析与实践能力，并在真实任务中有效运用。','Balance creative, analytical and practical abilities and apply them to real tasks.')],[L('建构主义','Constructivism'),L('在自主探索、项目实施和试错中建构知识与经验。','Build knowledge and experience through exploration, projects and trial and error.')],[L('多元智能','Multiple intelligences'),L('尊重个体差异，在多元任务中发现和激发学生特长。','Respect individual differences and discover strengths through varied projects.')]].map((a,i)=>`<article><span>0${i+1}</span><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join('')}</div></div></section><section class="container c-section"><div class="c-section-heading"><div><p class="c-eyebrow">02 / ENGINEERED FOR LEARNING</p><h2>${L('从技术积累，到学习空间。','From technology to exploration.')}</h2></div><p>${L('技术封装降低入门门槛，技术解构打开进一步探索的空间。','Technology encapsulation makes entry accessible; deconstruction opens deeper exploration.')}</p></div><div class="c-tech-grid">${[[L('六面搭建体系','Six-face construction'),L('拓展结构与机械设计的可能性。','More possibilities in structural and mechanical design.')],[L('四层编程体系','Four programming levels'),L('技能体验、项目编程、图形编程到 C / Python。','Skill exploration, projects, graphical programming and C / Python.')],[L('控制与感知','Control & sensing'),L('Brain 控制器、RoBus 总线、智能电机与传感器。','Brain controllers, RoBus, intelligent motors and sensors.')],[L('教育机器人操作系统','Educational robot OS'),L('Eros 与课程平台协同，支持机器人项目实践。','Eros works with the course platform to support robotics projects.')]].map(a=>`<article><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join('')}</div>${source910('techniques.pptx',0,L('教育机器人学和 SITA 教育','Educational robotics and SITA education'))}</section></main>${footer()}`;

pages.stories=()=>`${header('stories')}<main id="main" class="ch910"><section class="c-stories-hero"><div class="container"><p class="c-eyebrow">OUR STORY / 1996 — 2026</p><h1>${L('三十年开创，<br>始终向前。','Thirty years<br>of pioneering.')}</h1><p>${L('能力风暴 · 教育机器人全球发明者','Abilix · Global inventor of educational robots')}</p></div>${photo910('founders',L('公司资料中的教育研究交流照片','Education research exchange from the company archive'))}</section><section class="container c-section"><div class="c-section-heading"><h2>${L('我们的四个品牌命题。','Four ideas behind our brand.')}</h2><p>${L('从教育机器人，到 AI 时代的教育研究。','From educational robotics to education for the AI era.')}</p></div><div class="c-brand-posters">${[[L('教育机器人','Educational robotics'),L('全球发明者','Global inventor')],[L('AI 教育机器人','AI educational robotics'),L('全球发明者','Global inventor')],[L('SITA 教育','SITA education'),L('全球发明者','Global inventor')],[L('AI 时代新教育范式','Education for the AI era'),L('领导者','A leading voice')]].map((a,i)=>`<article><span>0${i+1} / ABILIX</span><h3>${a[0]}</h3><strong>${a[1]}</strong><small>SINCE 1996 · ALWAYS EXPLORING</small></article>`).join('')}</div></section><section id="history" class="c-section c-soft"><div class="container"><p class="c-eyebrow">OUR JOURNEY</p><h2>${L('从一个想法，到三十年积淀。','From an idea to a lasting foundation.')}</h2><div class="c-history-list">${milestones910().map(m=>`<article><b>${m[0]}</b><div><h3>${m[1]}</h3><p>${m[2]}</p></div></article>`).join('')}</div>${source910('brand-cn.pdf',38,L('品牌发展历程','Brand history'))}${source910('solution-ai-base.docx',0,L('公司介绍与 AI 教育阶段','Company introduction and AI education'))}</div></section><section id="partnerx" class="container c-section c-partner"><div><p class="c-eyebrow">PARTNERX / ${L('未来伙伴','COMPANY')}</p><h2>${L('以研发为根，<br>以教育为方向。','Rooted in research.<br>Directed by education.')}</h2><p>${L('未来伙伴围绕教育机器人与 SITA 教育，持续建设技术、课程、竞赛与合作伙伴体系。能力风暴由恽为民博士于 1996 年创立，教育机器人学与 SITA 教育研究连接了恽为民博士和 Jake Mendelssohn 教授的共同探索。','PartnerX develops technologies, curricula, competitions and partnerships around educational robotics and SITA. Founded by Dr. Yun Weimin in 1996, Abilix connects his work with Professor Jake Mendelssohn’s research into educational robotics and SITA.')}</p>${arrow910('#/contact',L('商务合作','Partner with us'),'c-button')}${source910('partnerx.pdf',0,L('未来伙伴介绍','PartnerX introduction'))}</div>${photo910('lab-space',L('公司资料中的教育空间设计','Educational space design from company materials'))}</section></main>${footer()}`;

const brochures910=()=>[
 ['brand-cn.pdf',L('能力风暴品牌宣传册','Abilix brand brochure'),'PDF · 中文',L('品牌历程、教育体系与产品介绍。','Brand history, education and products.')],
 ['brand-en.pdf',L('能力风暴品牌手册 · 英文版','Abilix brand manual'),'PDF · English',L('国际品牌介绍与 SK 系列产品资料。','Brand introduction and SK series information.')],
 ['sita-classroom.pdf',L('SITA 教室手册','SITA classroom manual'),'PDF · 中文',L('课堂空间、学校机器人与项目课程。','Classroom spaces, school robotics and projects.')],
 ['sita-lab.pdf',L('SITA 实验室手册','SITA laboratory manual'),'PDF · 中文',L('实验室配置、竞赛套装与实践体系。','Lab configurations, competition kits and practice.')],
 ['solution-center.pdf',L('未来英才进化中心','Future talent learning center'),'PDF · 中文',L('课程进化中心空间与课程体系。','Learning center spaces and curricula.')],
 ['partnerx.pdf',L('未来伙伴介绍','PartnerX introduction'),'PDF · 中文',L('研发积淀、团队与历史影像。','Research, team and historical archives.')]
];
pages['resources-brochures']=()=>`${header('resources')}<main id="main" class="ch910">${resourcesHero()}<section class="container c-section"><a class="c-back" href="#/resources">← ${L('资源中心','Resources')}</a><div class="c-section-heading"><h2>${L('宣传册与公司资料','Brochures & company materials')}</h2><span class="c-small">${L('本地文件 · 可离线打开','Local files · Available offline')}</span></div><div class="c-brochure-grid">${brochures910().map((b,i)=>`<a href="${D910+b[0]}" target="_blank" rel="noopener"><div class="c-book-cover"><span>ABILIX / ${String(i+1).padStart(2,'0')}</span><h3>${b[1]}</h3><b>↗</b></div><p class="c-eyebrow">${b[2]}</p><p>${b[3]}</p></a>`).join('')}</div></section></main>${footer()}`;
pages['resources-news']=function(){const id=new URLSearchParams(location.hash.split('?')[1]||'').get('article');const n=news910().find(n=>n.id===id);return `${header('resources')}<main id="main" class="ch910"><section class="container c-section"><a class="c-back" href="${n?'#/resources-news':'#/resources'}">← ${n?L('新闻中心','News'):L('资源中心','Resources')}</a><p class="c-eyebrow">NEWS & ARCHIVES</p><h1>${n?n.title:L('真实记录，<br>值得回望。','Stories worth<br>looking back on.')}</h1>${n?`<article class="c-article"><p class="c-eyebrow">${n.tag}</p>${photo910(n.image,n.title)}<p>${n.text}</p>${source910(n.file,n.page,n.source)}</article>`:`<p>${L('从公司资料中整理的历史报道与重要时刻。','Historical reporting and milestones from the company archives.')}</p>${newsCards910()}<p class="c-small">${L('以下为历史影像档案，非近期新闻。','These are historical archives, not current news.')}</p><a class="c-link" href="http://abilix.com/news.php" target="_blank" rel="noopener">${L('旧版官网新闻中心','Legacy news center')} ↗</a>`}</section></main>${footer()}`;};
const oldResources910=resourcesPage;
pages.resources=()=>oldResources910().replace('<main id="main">','<main id="main" class="ch910">').replace('</section>\n  </main>',`</section><section class="container c-resource-added"><div class="c-section-heading"><h2>${L('品牌资料与历史影像','Brand materials & archives')}</h2></div><div class="c-resource-shortcuts">${arrow910('#/resources-brochures',L('宣传册与公司资料','Brochures & company materials'),'c-button')}${arrow910('#/resources-news',L('新闻中心','News archive'),'c-button')}${arrow910('#/curriculum',L('课程体系','Curriculum'),'c-button')}</div></section></main>`);

pages.contact=function(){const requested=new URLSearchParams(location.hash.split('?')[1]||'').get('model');const model=modelInfo910[requested]?requested:'';return `${header('stories')}<main id="main" class="ch910"><section class="container c-section c-contact-page"><div><p class="c-eyebrow">PARTNER WITH ABILIX</p><h1>${L('从一次交流，<br>开启新的可能。','A conversation.<br>A new possibility.')}</h1><p>${L('产品选型、课程建设或教育空间，<br>让我们了解你的目标。','Product selection, curriculum or educational spaces.<br>Tell us about your goals.')}</p>${model?`<p class="c-enquiry-model">${L('咨询型号','Model enquiry')} · ${model}</p>`:''}</div><div class="c-contact-details"><span>${L('商务联系','Business contact')}</span><a href="tel:4008080199">400 8080 199</a><a href="tel:+862164952827">+86 21 6495 2827</a><a href="mailto:info@abilix.com?subject=${encodeURIComponent('Abilix '+(model||'partnership')+' enquiry')}">info@abilix.com ↗</a><p>${L('上海市闵行区合川路 3051 号<br>莱茵虹桥 A 栋 8 层','8F, Building A, 3051 Hechuan Road,<br>Minhang District, Shanghai')}</p><small>${L('联系方式来源于提供的中英文品牌手册。','Contact details from the supplied Chinese and English brand manuals.')}</small></div></section></main>${footer()}`;};

const originalXiaoxing910=productPage;
pages.product=()=>{let html=originalXiaoxing910();const start=html.indexOf('<section class="section container recommendations">');if(start!==-1)html=html.slice(0,start)+`<section class="section container recommendations ch910"><div class="c-section-heading"><h2>${L('探索教育机器人','Explore educational robots')}</h2>${arrow910('#/products-education',L('按场景选型','Choose by setting'))}</div><div class="c-model-grid">${['SK209','SK509','KY8'].map(modelCard910).join('')}</div></section></main>${footer()}`;return html;};

// Add real local downloads without changing the original FAQ or download controls.
downloadItems.unshift(...[
 ['brand-cn.pdf','能力风暴品牌宣传册','Abilix brand brochure','brochure','17.5 MB'],
 ['brand-en.pdf','能力风暴品牌手册 · 英文版','Abilix brand manual','brochure','3.5 MB'],
 ['sita-classroom.pdf','SITA 教室手册','SITA classroom manual','manual','9.0 MB'],
 ['sita-lab.pdf','SITA 实验室手册','SITA laboratory manual','manual','13.2 MB'],
 ['curriculum-v4.docx','课程体系 V4.0','Curriculum V4.0','material','13 KB'],
 ['techniques.pptx','教育机器人学和 SITA 教育','Educational robotics and SITA','material','4.1 MB'],
 ['solution-ai-base.docx','人工智能教育基地方案','AI education base proposal','material','29.6 MB'],
 ['solution-school.pdf','学校 AI 应用能力与元能力课程方案','School AI and meta-ability curriculum','material','3.7 MB'],
 ['solution-center.pdf','未来英才进化中心','Future talent learning center','material','3.1 MB'],
 ['abilix-story.pptx','能力风暴介绍','Abilix introduction','material','19.3 MB'],
 ['partnerx.pdf','未来伙伴介绍','PartnerX introduction','material','6.2 MB']
].map((d,i)=>{zhTranslations[d[2]]=d[1];return {id:'CH910-'+String(i+1).padStart(2,'0'),name:d[2],category:d[3],size:d[4],type:d[0].split('.').pop().toUpperCase(),date:'2026-09-10',path:'',localPath:D910+d[0]};}));

let cleanup910=()=>{};
const oldBindCommon910=bindCommon;
bindCommon=function(){oldBindCommon910();
 // Anchor scrolling must not be mistaken for hash-based page navigation.
 document.querySelector('#app').addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const href=a.getAttribute('href');if(href?.startsWith('#')&&!href.startsWith('#/')){const node=document.getElementById(href.slice(1));if(node){e.preventDefault();node.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}}});
};
const originalBindPage910=bindPage;
bindPage=function(route){
 cleanup910();clearInterval(originalBindPage910.heroTimer);
 originalBindPage910(route);
 const disposers=[];const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(route==='home'){
   const stopCarousel=()=>{clearInterval(bindPage.heroTimer);const button=document.querySelector('.c-carousel-pause');if(button){button.setAttribute('aria-pressed','true');button.setAttribute('aria-label',L('播放轮播','Play carousel'));button.textContent='▷';}};
   if(reduce)stopCarousel();
   const carousel=document.querySelector('.c-collage-main');carousel.addEventListener('focusin',e=>{if(!e.target.matches('.c-carousel-pause'))stopCarousel();});
   document.querySelector('.c-carousel-pause').addEventListener('click',e=>{const button=e.currentTarget;if(button.getAttribute('aria-pressed')==='true'){clearInterval(bindPage.heroTimer);bindPage.heroTimer=setInterval(()=>{const buttons=[...document.querySelectorAll('.hero-page')];const i=buttons.findIndex(x=>x.getAttribute('aria-current')==='true');buttons[(i+1)%buttons.length].click();},5500);button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',L('暂停轮播','Pause carousel'));button.textContent='Ⅱ';}else stopCarousel();});
   disposers.push(()=>clearInterval(bindPage.heroTimer));
   const ms=milestones910();document.querySelectorAll('[data-milestone]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.milestone),m=ms[i];document.querySelectorAll('[data-milestone]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});document.getElementById('milestone-panel').innerHTML=`${photo910(m[3],m[1])}<div><span>0${i+1} / 06</span><h3>${m[1]}</h3><p>${m[2]}</p></div>`;}));
 }
 if(route==='products'||route==='products-education'){
  const tabs=[...document.querySelectorAll('[data-scene]')];const select=(b,focus=false)=>{tabs.forEach(t=>{const on=t===b;t.classList.toggle('active',on);t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;});const panel=document.getElementById('scene-panel');panel.innerHTML=scenePanel910(b.dataset.scene);panel.setAttribute('aria-labelledby',b.id);history.replaceState(null,'',`#/${route}?scene=${b.dataset.scene}`);if(focus)b.focus();};
  tabs.forEach((b,i)=>{b.addEventListener('click',()=>select(b));b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;select(tabs[n],true);});});
 }
 if(route==='resources'){
  const targets={Brochures:'#/resources-brochures',News:'#/resources-news',Manuals:'#/resources-download','Curriculum connection':'#/curriculum','Related products':'#/products-education'};
  document.querySelectorAll('button.resource-card').forEach(b=>{const title=b.querySelector('h3').textContent;const key=Object.keys(targets).find(k=>k===title||t(k)===title);if(key){const a=document.createElement('a');a.className=b.className;a.dataset.search=b.dataset.search;a.href=targets[key];a.innerHTML=b.innerHTML;b.replaceWith(a);}});
 }
 if(route==='product'){
  const target=document.querySelector('.courses>div:last-child');
  if(target)target.insertAdjacentHTML('beforeend',`<div class="container c-product-course-link">${arrow910('#/curriculum?section=ai',L('探索完整课程体系','Explore the full curriculum'),'c-button')}</div>`);
 }
 // Only Home gets two new motion types: pointer parallax and one scroll reveal.
 if(!reduce){
  document.querySelectorAll('[data-pointer]').forEach(el=>{const move=e=>{if(!matchMedia('(pointer:fine)').matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*12+'px');el.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*10+'px');};const reset=()=>{el.style.setProperty('--mx','0px');el.style.setProperty('--my','0px');};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);disposers.push(()=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset);});});
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('c-revealed');observer.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('c-will-reveal');observer.observe(el);});disposers.push(()=>observer.disconnect());
 }
 cleanup910=()=>disposers.forEach(fn=>fn());
};
// Forward the original scroll cleanup property across the wrapper.
Object.defineProperty(bindPage,'solutionCleanup',{get:()=>originalBindPage910.solutionCleanup,set:v=>{originalBindPage910.solutionCleanup=v;}});



/* Current page composition and inline navigation. */
const before0911 = {...pages};
const template0911 = html => {const t=document.createElement('template');t.innerHTML=html;return t;};
const html0911 = t => t.innerHTML;
const forward0911 = '<span class="r-arrow" aria-hidden="true">→</span>';
const action0911 = (href,label,extra='') => `<a class="c-button ${extra}" href="${href}">${label}${forward0911}</a>`;
const scroll0911 = (id,label) => `<button type="button" class="c-button" data-scroll-to="${id}">${label}${forward0911}</button>`;

// WER once again has its own CH820 introduction. Its official link remains on that page.
const header0910 = header;
header = active => header0910(active).replace('<a href="https://www.wergame.org/" target="_blank" rel="noopener">WER ↗</a>',link('wer','WER',active==='wer'?'active':''));
const footer0910=footer;
footer=()=>footer0910().replace('<a href="https://www.wergame.org/" target="_blank" rel="noopener">WER ↗</a>','<a href="#/wer">WER</a>');
pages.wer=()=>werPage().replaceAll('http://en.wergame.org/','https://www.wergame.org/');
pages.resources=()=>oldResources910();

const newsInline0911=()=>`<div class="c-news-grid r-news-grid">${news910().map(n=>`<article class="c-news-card"><div class="c-news-image">${photo910(n.image,n.title)}</div><p class="c-eyebrow">${n.tag}</p><h3>${n.title}</h3><button class="c-button r-secondary" type="button" data-news-toggle="${n.id}" aria-expanded="false" aria-controls="news-body-${n.id}">${L('阅读报道','Read the story')}${forward0911}</button><div class="r-news-body" id="news-body-${n.id}" hidden><p>${n.text}</p></div></article>`).join('')}</div>`;
pages.home=()=>{
 const t=template0911(before0911.home());
 const research=t.content.querySelector('#research');
 research.outerHTML=`<section id="research" class="c-section r-philosophy"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">01 / ${L('公司理念','OUR PHILOSOPHY')}</p><h2>${L('SITA 教育，<br>让能力与素养共同成长。','SITA education.<br>Abilities and accomplishment, together.')}</h2></div><p>${L('在自主探索中学习，<br>在项目实践中成长。','Learn through exploration.<br>Grow through practical projects.')}</p></div><div class="r-philosophy-layout" data-reveal><div class="r-philosophy-image">${photo910('learning',L('学生专注于机器人搭建实践','A student engaged in robotics practice'))}</div><div><p class="c-eyebrow">SUCCESSFUL INTELLIGENCE & SCI-TECH ACCOMPLISHMENT</p><h3>${L('创造、分析、实践，平衡发展。','Creativity, analysis and practice in balance.')}</h3><p>${L('由浅入深的机器人项目，让孩子在自主搭建、试错与反思中训练成功能力，提升理解和运用科技的能力。','Progressive robotics projects develop successful intelligence and technological understanding through independent building, experimentation and reflection.')}</p><div class="r-ability-row">${[L('创造能力','Create'),L('分析能力','Analyze'),L('实践能力','Apply')].map((x,i)=>`<div><span>0${i+1}</span><strong>${x}</strong></div>`).join('')}</div><p class="r-philosophy-note">${L('尊重个体差异，发现并激发每一个孩子的特长。','Respect individual differences. Discover and nurture each child’s strengths.')}</p></div></div></div></section>`;
 t.content.querySelector('.c-global')?.remove();
 const heroLink=t.content.querySelector('.c-hero-text .c-button');heroLink.href='#research';
 const news=t.content.querySelector('.c-news-grid');news.outerHTML=newsInline0911();
 t.content.querySelector('a[href="#/stories?section=history"]')?.remove();
 t.content.querySelector('a[href="#/resources-news"]')?.remove();
 return html0911(t);
};

// Products: family overview first. Scene and model selection share one working page.
const families0911=()=>`<section id="educational-robots" class="c-section r-family-overview"><div class="container"><div class="c-section-heading"><div><p class="c-eyebrow">EDUCATIONAL ROBOTS</p><h2>${L('两大系列，<br>找到你的探索方向。','Two families.<br>Find your direction.')}</h2></div><p>${L('先了解系列，再选择使用场景。','Meet the families, then choose your setting.')}</p></div>${seriesExplorer910().replace(/<div class="c-section-heading">[\s\S]*?<\/div><div class="series-accordion"/,'<div class="series-accordion"')}</div></section>`;
pages.products=()=>{
 const t=template0911(before0911.products());
 t.content.querySelector('#educational-robots').outerHTML=families0911();
 t.content.querySelectorAll('main a[href*="/curriculum"]').forEach(e=>e.remove());
 t.content.querySelectorAll('.series-accordion-action').forEach((a,i)=>{a.href=`#/products-education?family=${i===0?'krypton':'sk'}`;a.innerHTML=L('了解对应场景','Explore the settings')+forward0911;});
 return html0911(t);
};
const selection0911=()=>{
 const q=new URLSearchParams(location.hash.split('?')[1]||'');
 const alias={'krypton-8':'KY8','krypton-6':'KY8','school-krypton-201':'SK201'};
 const raw=q.get('model')||'';const model=modelInfo910[raw.toUpperCase()]?raw.toUpperCase():alias[raw];
 const chosenScene=scenes910().find(s=>s.id===q.get('scene'));
 const family=q.get('family')||(model?modelInfo910[model].scene==='center'?'krypton':'sk':chosenScene?.id==='center'?'krypton':q.get('series')==='krypton'?'krypton':'sk');
 const available=scenes910().filter(s=>family==='krypton'?s.id==='center':s.id!=='center');
 const scene=available.find(s=>s.id===(model?modelInfo910[model].scene:chosenScene?.id))||available[0];
 return {family,scene,model:scene.models.includes(model)?model:scene.models[0]};
};
const inlineModel0911=id=>{
 const m=modelInfo910[id];const scene=scenes910().find(s=>s.id===m.scene);
 return `<section class="r-model-details" aria-labelledby="model-heading"><div class="r-model-detail-top"><div class="c-detail-art">${modelArt910(id,true)}${m.image?'':`<small>${L('产品外观请咨询获取','Contact us for product imagery')}</small>`}</div><div><p class="c-eyebrow">${scene.series} / ${scene.label}</p><h2 id="model-heading">${id}</h2><h3>${L(...m.name)}</h3><p>${L(...m.desc)}</p><dl><div><dt>${L('应用场景','Setting')}</dt><dd>${scene.label}</dd></div><div><dt>${L('适用阶段 / 年龄','Stage / age')}</dt><dd>${m.stage?L(...m.stage):L('请联系顾问确认适配阶段','Contact an advisor to confirm suitability')}</dd></div></dl></div></div><div class="r-model-specs"><h3>${L('关键配置','Key specifications')}</h3>${m.pending?`<p>${L('具体配置与课程适配，可通过页脚联系方式咨询产品顾问。','For configurations and course compatibility, contact our product advisors using the details in the footer.')}</p>`:`<div class="c-spec-grid">${m.spec.map(v=>`<div><span>${L(v[0],v[1])}</span><strong>${v[2]}</strong></div>`).join('')}</div>${m.scene==='school'?'<p>Project · Chart · Scratch · C · Python</p>':id==='SK201'?'<p>Chart · Scratch · C · Python</p>':''}`}</div><div class="r-model-learning"><h3>${L('从项目实践，走向能力进阶。','From projects to growing abilities.')}</h3><div class="c-step-line">${[L('提出问题','Ask'),L('搭建与编程','Build & program'),L('测试与改进','Test & improve'),L('分享与反思','Share & reflect')].map((x,i)=>`<div><span>0${i+1}</span><strong>${x}</strong></div>`).join('')}</div></div></section>`;
};
const sceneWorkspace0911=(scene,model)=>`<div class="c-scene-intro"><div><p class="c-eyebrow">${scene.series} / ${scene.models.length} ${L('款产品','MODELS')}</p><h3>${scene.title}</h3><p>${scene.text}</p></div><img src="${scene.image}" alt="${scene.label}" loading="lazy"></div><div class="r-model-tabs" role="tablist" aria-label="${L('选择型号查看详情','Choose a model to view details')}">${scene.models.map(id=>`<button id="model-tab-${id}" type="button" class="r-model-tab ${id===model?'active':''}" role="tab" data-inline-model="${id}" aria-selected="${id===model}" aria-controls="inline-model-panel" tabindex="${id===model?0:-1}"><div class="c-model-art">${modelArt910(id)}</div><span>${id}</span><small>${L(...modelInfo910[id].name)}</small></button>`).join('')}</div><div id="inline-model-panel" role="tabpanel" aria-labelledby="model-tab-${model}">${inlineModel0911(model)}</div>`;
pages['products-education']=()=>{
 const {family,scene,model}=selection0911();const ss=scenes910().filter(s=>family==='krypton'?s.id==='center':s.id!=='center');
 return `${header('products')}<main id="main" class="ch910 r-education"><section class="r-education-heading container"><a class="c-button r-secondary" href="#/products?section=educational-robots">${L('返回两大系列','Back to product families')}${forward0911}</a><p class="c-eyebrow">EDUCATIONAL ROBOTS / ${family==='krypton'?'KRYPTON':'SK SERIES'}</p><h1>${family==='krypton'?L('Krypton 氪系列','Krypton'):L('SK 系列','SK Series')}</h1><p>${family==='krypton'?L('面向课程进化中心，连接持续探索与课程进阶。','For learning centers, connecting continuous exploration and progressive courses.'):L('面向学校教学与竞赛训练，按场景选择合适型号。','For school teaching and competition practice. Choose a model for your setting.')}</p></section><section id="educational-robots" class="container r-selection"><div class="r-scene-tabs" role="tablist" aria-label="${L('使用场景','Learning settings')}">${ss.map(s=>`<button id="setting-${s.id}" role="tab" data-setting="${s.id}" aria-selected="${s.id===scene.id}" tabindex="${s.id===scene.id?0:-1}" aria-controls="setting-panel" class="${s.id===scene.id?'active':''}">${s.label}<span>${s.models.length} ${L('款','models')}</span></button>`).join('')}</div><div id="setting-panel" role="tabpanel" aria-labelledby="setting-${scene.id}">${sceneWorkspace0911(scene,model)}</div></section></main>${footer()}`;
};
// Previously bookmarked model URLs open the same consolidated experience.
pages.series=pages['product-education']=pages['products-education'];

// Restore CH820's overview, with the three-setting experience and in-page details below.
pages.solutions=()=>{
 const revised=template0911(before0911.solutions());
 const original=template0911(originalSolutions910());
 const overview=original.content.querySelector('.solution-introduction');
 overview.id='solution-overview';overview.classList.add('r-original-overview');overview.removeAttribute('role');overview.removeAttribute('data-panel');
 const stage=revised.content.querySelector('#solution-scenes');
 const cards=revised.content.querySelector('.c-solution-intro');
 cards.id='choose-solution';cards.classList.add('r-choose-solution');cards.removeAttribute('data-panel');cards.removeAttribute('role');
 const shortcuts=document.createElement('nav');shortcuts.className='r-solution-nav container';shortcuts.setAttribute('aria-label',L('本页内容','On this page'));shortcuts.innerHTML=scroll0911('solution-overview',L('方案概览','Overview'))+scroll0911('solution-scenes',L('三大场景','Three settings'))+scroll0911('choose-solution',L('了解方案','Explore a solution'));
 const main=revised.content.querySelector('main');main.querySelectorAll('.solutions-mode-tabs,.solution-mode-panel').forEach(n=>n.remove());
 main.append(shortcuts,overview,stage,cards);
 const details=document.createElement('div');details.className='container r-solution-detail-host';details.id='solution-details';details.hidden=true;details.setAttribute('aria-live','polite');main.append(details);
 cards.querySelectorAll('.c-solution-cards>a').forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.className='r-solution-card';b.dataset.solution=solutions910()[i].id;b.setAttribute('aria-controls','solution-details');b.setAttribute('aria-expanded','false');b.innerHTML=a.innerHTML;a.replaceWith(b);});
 return html0911(revised);
};
const solutionDetail0911=id=>{
 const s=solutions910().find(s=>s.id===id)||solutions910()[0];
 return `<section class="c-section r-solution-inline"><p class="c-eyebrow">${s.tag}</p><h2 tabindex="-1" id="solution-detail-heading">${s.title}</h2><p>${s.text}</p><div class="c-three-grid">${s.groups.map((g,i)=>`<article><span>0${i+1}</span><h3>${g[0]}</h3><p>${g[1]}</p></article>`).join('')}</div><p class="r-solution-contact">${L('如需讨论空间配置与教学目标，可通过页脚的商务联系方式与我们联系。','To discuss spaces and learning goals, use our business contact details in the footer.')}</p>${scroll0911('choose-solution',L('比较其他方案','Compare other approaches'))}</section>`;
};
pages['solution-detail']=pages.solutions;

pages.stories=()=>{
 const t=template0911(before0911.stories());
 const history=t.content.querySelector('#history');
 history.outerHTML=`<section id="company" class="c-section c-soft"><div class="container"><p class="c-eyebrow">COMPANY OVERVIEW</p><h2>${L('公司概况','About Abilix')}</h2><p>${L('能力风暴由恽为民博士于 1996 年创立，持续开展教育机器人、编程与 SITA 教育研究。','Founded by Dr. Yun Weimin in 1996, Abilix continues its research in educational robotics, programming and SITA education.')}</p><div class="r-company-facts">${[['1996',L('能力风暴创立','Abilix founded')],['600+',L('专利技术积累','Patented technologies')],['50+',L('国家与地区','Countries and regions')]].map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div></section>`;
 t.content.querySelectorAll('#partnerx a[href="#/contact"]').forEach(a=>a.remove());
 return html0911(t);
};
pages['resources-news']=()=>`${header('resources')}<main id="main" class="ch910"><section class="container c-section"><a class="c-button r-secondary" href="#/resources">${L('返回资源中心','Back to resources')}${forward0911}</a><p class="c-eyebrow r-news-kicker">NEWS & ARCHIVES</p><h1>${L('真实记录，<br>值得回望。','Stories worth<br>looking back on.')}</h1>${newsInline0911()}</section></main>${footer()}`;

// Presentation-only normalization. Download and brochure resources remain in Resources.
function polish0911(root){
 root.querySelectorAll('.c-source,.c-curriculum-note,.c-global small,.c-contact-details>small').forEach(e=>e.remove());
 root.querySelectorAll('.c-small').forEach(e=>{if(/资料|手册|supplied|manual|proposal|company archive/i.test(e.textContent))e.remove();});
 root.querySelectorAll('a').forEach(a=>{
  const href=a.getAttribute('href')||'';
  if(href.startsWith('#')&&!href.startsWith('#/')&&!document.getElementById(href.slice(1))){const span=document.createElement('span');span.innerHTML=a.innerHTML;a.replaceWith(span);return;}
  if(a.getAttribute('href')?.startsWith('#/product-education?model=')){const id=new URLSearchParams(a.getAttribute('href').split('?')[1]).get('model');if(modelInfo910[id])a.href=`#/products-education?family=${modelInfo910[id].scene==='center'?'krypton':'sk'}&model=${id}`;}
  if(a.matches('.c-link,.c-back,.route-back,.resource-back,.series-link,.line-scroll,.line-hero-copy>a:not(.button),.series-section-heading>a,.resource-pagination a')){a.classList.add('r-text-button');}
 });
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{if(!/[↗↘→←↓↑]/.test(n.nodeValue)||n.parentElement?.closest('.r-arrow,script,style'))return;const parts=n.nodeValue.split(/([↗↘→←↓↑])/);const f=document.createDocumentFragment();parts.forEach(v=>{if(/^[↗↘→←↓↑]$/.test(v)){const s=document.createElement('span');s.className='r-arrow';s.setAttribute('aria-hidden','true');s.textContent=['↗','↘'].includes(v)?'→':v;f.append(s);}else f.append(document.createTextNode(v));});n.replaceWith(f);});
}
const bindPage0910=bindPage;
bindPage=function(route){
 bindPage0910(route==='solution-detail'?'solutions':route);
 const root=document.querySelector('#app');
 polish0911(root);
 root.addEventListener('click',e=>{
  const scroll=e.target.closest('[data-scroll-to]');if(scroll){document.getElementById(scroll.dataset.scrollTo)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});}
  const news=e.target.closest('[data-news-toggle]');if(news){const open=news.getAttribute('aria-expanded')==='true';news.setAttribute('aria-expanded',String(!open));document.getElementById('news-body-'+news.dataset.newsToggle).hidden=open;news.innerHTML=L(open?'阅读报道':'收起报道',open?'Read the story':'Close the story')+forward0911;}
 });
 if(['products-education','series','product-education'].includes(route)){
  const {family}=selection0911();
  const updateURL=(scene,model)=>history.replaceState(null,'',`#/products-education?family=${family}&scene=${scene}&model=${model}`);
  const selectModel=(id,focus=false)=>{root.querySelectorAll('[data-inline-model]').forEach(b=>{const on=b.dataset.inlineModel===id;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;if(on&&focus)b.focus();});const host=document.getElementById('inline-model-panel');host.innerHTML=inlineModel0911(id);host.setAttribute('aria-labelledby','model-tab-'+id);polish0911(host);updateURL(modelInfo910[id].scene,id);};
  const selectScene=(id,focus=false)=>{const s=scenes910().find(s=>s.id===id);root.querySelectorAll('[data-setting]').forEach(b=>{const on=b.dataset.setting===id;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;if(on&&focus)b.focus();});const host=document.getElementById('setting-panel');host.innerHTML=sceneWorkspace0911(s,s.models[0]);host.setAttribute('aria-labelledby','setting-'+id);polish0911(host);updateURL(id,s.models[0]);};
  root.addEventListener('click',e=>{const scene=e.target.closest('[data-setting]');if(scene)selectScene(scene.dataset.setting);const model=e.target.closest('[data-inline-model]');if(model)selectModel(model.dataset.inlineModel);});
  root.addEventListener('keydown',e=>{const b=e.target.closest('[data-setting],[data-inline-model]');if(!b||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const selector=b.hasAttribute('data-setting')?'[data-setting]':'[data-inline-model]';const all=[...root.querySelectorAll(selector)],i=all.indexOf(b),n=e.key==='Home'?0:e.key==='End'?all.length-1:(i+(e.key==='ArrowRight'?1:-1)+all.length)%all.length;if(selector==='[data-setting]')selectScene(all[n].dataset.setting,true);else selectModel(all[n].dataset.inlineModel,true);});
 }
 if(route==='solutions'||route==='solution-detail'){
  // Legacy detail links also land in the unified page, with details already open.
  const choose=(id,scroll=true)=>{const host=document.getElementById('solution-details');host.hidden=false;host.innerHTML=solutionDetail0911(id);root.querySelectorAll('[data-solution]').forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.solution===id)));polish0911(host);history.replaceState(null,'',`#/solutions?id=${id}`);if(scroll)host.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});};
  root.addEventListener('click',e=>{const b=e.target.closest('[data-solution]');if(b)choose(b.dataset.solution);});
  const id=new URLSearchParams(location.hash.split('?')[1]||'').get('id');if(solutions910().some(s=>s.id===id)){choose(id,false);requestAnimationFrame(()=>document.getElementById('solution-details').scrollIntoView({behavior:'instant'}));}
 }
 if(route==='resources-news'){
  const id=new URLSearchParams(location.hash.split('?')[1]||'').get('article');root.querySelector(`[data-news-toggle="${['cctv','1998','2005'].includes(id)?id:'none'}"]`)?.click();
 }
};
Object.defineProperty(bindPage,'solutionCleanup',{get:()=>bindPage0910.solutionCleanup,set:v=>{bindPage0910.solutionCleanup=v;}});
document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();const main=document.getElementById('main');main.tabIndex=-1;main.focus();main.scrollIntoView({behavior:'instant'});});
// Initial render follows the PDF revision layer.
