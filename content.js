/* =====================================================================
   АРИНА ФИЛАТОВА — ДАННЫЕ САЙТА
   Меняйте тексты, даты, изображения и ссылки здесь, не трогая app.js.
   Сохраняйте кавычки, запятые и квадратные скобки. Кодировка файла: UTF-8.
   Все пути относительные: сайт работает и в подпапке GitHub Pages.
   ===================================================================== */
window.PORTFOLIO = {
  // 01. ИМЯ, ФОТОГРАФИЯ И КОНТАКТЫ.
  profile: {
    firstName: "Арина", lastName: "Филатова", role: "Системный аналитик",
    photo: "assets/images/arina-portrait.png",
    description: "Требования, процессы и данные.\nПроекты системного аналитика.",
    about: "Системный аналитик с опытом бизнес-анализа в финансовом секторе и опытом управления B2B-проектами. Описываю процессы в BPMN, работаю с пользовательскими сценариями и моделями данных.",
    transition: "Перешла в системный анализ, чтобы соединить опыт сбора требований и взаимодействия с командами с технической проработкой систем и интеграций.",
    email: "arina.filatova.2014@bk.ru", telegram: "arina_filatova_07",
    phone: "+7 (985) 616-17-95", phoneHref: "+79856161795",
    resume: "assets/documents/arina-filatova-cv.pdf",
    portfolio: "https://drive.google.com/drive/folders/1mHmhx0mhMVfXtHuNYq8UNn7fq8Va3jxb"
  },

  // 02. РАБОТА. Порядок здесь: от более ранней работы к текущей.
  // Чтобы добавить работу, скопируйте один объект целиком и задайте уникальный id.
  work: [
    { id: "evrika", year: "2021–2022", period: "Ноябрь 2021 — март 2022", company: "Эврика", role: "Ассистент менеджера проектов (B2B)",
      intro: "Клиентская и договорная документация в B2B-поставках оборудования.",
      tasks: ["Работала с документами и участвовала в подготовке к аукционам по 223-ФЗ.", "Самостоятельно урегулировала спорные ситуации с клиентами без финансовых потерь для компании."],
      tools: ["Excel", "1С"] },
    { id: "project-work", year: "2022–2024", period: "Сентябрь 2022 — июль 2024", company: "Проектная деятельность", role: "Проектный менеджер",
      intro: "Отдельные B2B-проекты для российских и международных компаний.",
      tasks: ["Собирала и структурировала требования заказчиков, формировала планы, сметы, брифы и задачи.", "Контролировала сроки, бюджет, риски и изменения, координировала подрядчиков и команды.", "Участвовала в подготовке более 50 предложений. Свыше 20 проектов были реализованы.", "Организовала пятидневную логистику более 200 участников через 3 аэропорта и 2 вокзала."],
      tools: ["Excel", "1С", "AmoCRM"] },
    { id: "imagency", year: "2024–2025", period: "Июль 2024 — декабрь 2025", company: "Imagency", role: "Проектный менеджер",
      intro: "Управление B2B-проектами для корпоративных клиентов.",
      tasks: ["Одновременно вела до 6 проектов: собирала требования, согласовывала изменения и ставила задачи исполнителям.", "Готовила сметы, графики, брифы и договоры. Координировала команды до 50 человек.", "За одну неделю подготовила и запустила проект по застройке стенда с командой около 20 человек.", "Повысила плановую прибыльность нескольких проектов на 10 п.п. благодаря корректировке бюджетов и подбору подрядчиков.", "Создала две видеоинструкции по работе в 1С и Bitrix24 для адаптации менеджеров."],
      tools: ["Excel", "PowerPoint", "1С", "Bitrix24"] },
    { id: "sovcombank", year: "2026 — сейчас", period: "Июнь 2026 — настоящее время", company: "Совкомбанк", role: "Бизнес-аналитик", current: true,
      intro: "Внутренние проекты по трансформации бизнес-процессов и развитию финансовых сервисов.",
      tasks: ["Анализировала интервью, проектную документацию, функциональность систем и текущие процессы.", "Моделировала AS-IS и TO-BE в BPMN, включая сквозные процессы нескольких подразделений.", "Участвовала в уточнении бизнес- и функциональных требований.", "Готовила текстовые описания процессов и инструкции по изменениям для разработки.", "Согласовывала материалы с ведущим бизнес-аналитиком и внутренними заказчиками."],
      projects: ["Миграция данных между системами", "Анализ и оптимизация бизнес-процессов", "Настройка внутренней информационной системы"],
      tools: ["Draw.io", "MS Office", "CRM", "Figma"] }
  ],

  // 03. ОБРАЗОВАНИЕ. Курсы сгруппированы по годам, как в резюме.
  education: [
    { id: "education-2022", year: "2022", title: "НИУ «Высшая школа экономики»", subtitle: "Высшее образование", items: [{ name: "Менеджмент, управление бизнесом", text: "Национальный исследовательский университет «Высшая школа экономики», Москва." }] },
    { id: "education-2025", year: "2025", title: "Системный анализ и данные", subtitle: "Повышение квалификации", items: [{ name: "Системный аналитик с нуля", text: "" }, { name: "Data-аналитика: Python и SQL в анализе", text: "" }] },
    { id: "education-2026", year: "2026", title: "Аналитика в IT", subtitle: "Повышение квалификации", items: [{ name: "Системный аналитик Буткемп", text: "" }, { name: "Бизнес-аналитик в IT", text: "" }] }
  ],

  // 04. НАВЫКИ. level: число от 1 до 5; null скрывает шкалу у конкретного навыка.
  // ВАЖНО: числа взяты из чернового макета, не из числовой оценки в резюме.
  // Перед публикацией укажите свои оценки и замените skillLevelsAreDraft на false.
  skillLevelsAreDraft: true,
  skills: [
    { id: "requirements", name: "Требования и документация", category: "requirements", level: 3, status: "Практика", text: "Сбор и анализ бизнес-, функциональных и нефункциональных требований. Подготовка аналитической документации.", evidence: "В финансовом секторе участвовала в уточнении требований, готовила описания процессов и необходимые изменения для разработки.", project: "requirements", tags: ["Бизнес-требования", "Функциональные требования", "Документация"] },
    { id: "bpmn", name: "BPMN, AS-IS / TO-BE", category: "models", level: 3, status: "Практика", text: "Моделирование текущих и целевых процессов. Описание логики и взаимодействия участников.", evidence: "В Совкомбанке моделировала процессы, включая сквозные процессы нескольких подразделений. Отдельный пример в портфолио — модель онбординга сотрудника.", project: "employee-onboarding", tags: ["BPMN 2.0", "AS-IS", "TO-BE"] },
    { id: "user-stories", name: "User Story, Use Case", category: "requirements", level: 2, status: "Учебный проект", text: "Описание пользовательских целей и сценариев взаимодействия с системой.", evidence: "В Stets Home доступны пользовательские истории MVP, критерии приёмки и Gherkin-сценарии.", project: "requirements", tags: ["User Story", "Use Case", "Gherkin"] },
    { id: "models", name: "UML, DFD, ERD", category: "models", level: 2, status: "Учебный проект", text: "Системный анализ, моделирование данных и описание потоков информации. В перечень навыков также входит IDEF0.", evidence: "Для Stets Home подготовлены DFD, логическая ER-модель и словарь данных.", project: "data-models", tags: ["UML", "DFD", "ERD", "IDEF0"] },
    { id: "sql", name: "SQL", category: "technical", level: 1, status: "Изучаю", text: "Изучаю SQL и работу с данными.", evidence: "Обучение: «Data-аналитика: Python и SQL в анализе». Продолжаю изучать работу с данными.", tags: ["SQL", "Данные"] },
    { id: "api", name: "HTTP, REST API", category: "technical", level: 1, status: "Изучаю", text: "Изучаю HTTP и принципы REST API для дальнейшей работы с интеграциями.", evidence: "Изучаю HTTP-запросы и взаимодействие систем через REST API.", tags: ["HTTP", "REST API"] },
    { id: "formats", name: "JSON / XML", category: "technical", level: 1, status: "Изучаю", text: "Изучаю форматы обмена данными JSON и XML.", evidence: "Изучаю структуру сообщений и представление данных в JSON и XML.", tags: ["JSON", "XML"] },
    { id: "postman", name: "Postman", category: "technical", level: 1, status: "Изучаю", text: "Изучаю Postman для работы с API-запросами.", evidence: "Изучаю работу с API-запросами и ответами в Postman.", tags: ["Postman", "API"] }
  ],
  tools: ["Draw.io", "Atlassian Jira", "MS Excel", "Жизненный цикл ПО", "Agile", "Scrum", "Kanban", "Аналитическое мышление", "Работа в команде"],
  languages: "Русский — родной. Английский — B2. Немецкий — A1.",

  // 05. ЧТО Я ДЕЛАЮ. Выбор этапа открывает подробности и результат.
  process: [
    { id: "context", title: "Изучаю задачу", short: "Контекст и текущая работа систем", description: "Анализирую записи интервью, проектную документацию, функциональность систем и рабочие процессы.", result: "Понимание текущего процесса и контекста задачи.", bullets: ["Интервью с внутренними заказчиками", "Существующая документация", "Текущее поведение системы"] },
    { id: "model", title: "Моделирую процессы", short: "BPMN, AS-IS и TO-BE", description: "Описываю текущие и целевые процессы в BPMN, чтобы показать участников, последовательность действий и изменения.", result: "Модели процессов и их текстовое описание.", bullets: ["Текущие процессы AS-IS", "Целевые процессы TO-BE", "Сквозные процессы подразделений"], project: "employee-onboarding" },
    { id: "refine", title: "Уточняю требования", short: "Логика и пользовательские сценарии", description: "Участвую в обсуждении бизнес- и функциональных требований. В учебном проекте описываю истории и критерии приёмки.", result: "Уточнённые требования и проверяемые сценарии.", bullets: ["Бизнес- и функциональные требования", "User Story и критерии приёмки", "Основные и ошибочные сценарии"], project: "requirements" },
    { id: "document", title: "Готовлю документацию", short: "Материалы для разработки", description: "Готовлю текстовые описания процессов и инструкции по изменениям. Согласовываю материалы с ведущим аналитиком и заказчиками.", result: "Согласованные материалы для команды разработки.", bullets: ["Описание процессов и изменений", "Инструкции", "Согласование с участниками проекта"], project: "acceptance" }
  ],

  // 06. МОИ РАБОТЫ. Каждая карточка имеет отдельную ссылку вида #projects/ID.
  // image — обложка; gallery — изображения для просмотра; links — файлы и внешние ссылки.
  // task и role — необязательные блоки «Задача» и «Моя роль» внутри работы.
  // category: processes (BPMN) / requirements / models / interfaces / testing.
  // Для новой работы скопируйте объект, замените id, тексты, пути и ссылки.
  // Все работы выполнены самостоятельно. sourceIds связывает карточку с исходниками Google Drive.
  projects: [
    {
      "id": "requirements",
      "number": "01",
      "category": "requirements",
      "type": "Учебный проект",
      "projectName": "Stets Home",
      "title": "Stets Home: требования и MVP",
      "subtitle": "User Story Map, пользовательские истории и критерии приёмки.",
      "image": "assets/images/stets-story-map.png",
      "imageAlt": "Карта пользовательских историй Stets Home",
      "tags": [
        "MVP",
        "User Story",
        "Gherkin"
      ],
      "intro": "Приложение для управления умным домом. В этой части проекта определены пользовательские задачи, состав MVP и ожидаемое поведение системы.",
      "role": "Самостоятельно подготовила карту историй, требования и критерии приёмки.",
      "contribution": [
        "Карта пользовательских историй и границы первого релиза.",
        "Пользовательские истории с ролью, действием и ценностью.",
        "Критерии приёмки и Gherkin-сценарии."
      ],
      "result": "Набор требований и сценариев для обсуждения функциональности и приёмки.",
      "gallery": [
        {
          "src": "assets/images/stets-story-map.png",
          "caption": "Карта пользовательских историй Stets Home"
        },
        {
          "src": "assets/images/stets-gherkin.png",
          "caption": "Пользовательские истории MVP и Gherkin-сценарии"
        }
      ],
      "links": [
        {
          "label": "Карта историй · PDF",
          "href": "assets/documents/stets-story-map.pdf"
        },
        {
          "label": "Истории и Gherkin · PDF",
          "href": "assets/documents/stets-gherkin.pdf"
        },
        {
          "label": "Исходный документ · DOCX",
          "href": "assets/documents/stets-gherkin.docx",
          "download": true
        },
        {
          "label": "Карта историй · Miro",
          "href": "https://miro.com/app/board/uXjVH3fPVjg=/"
        }
      ],
      "sourceIds": [
        "1krDVgiqnsChEHIO6Y6phC8JgNqNrflF91eH2lVmCIL0"
      ]
    },
    {
      "id": "data-models",
      "number": "02",
      "category": "models",
      "type": "Учебный проект",
      "projectName": "Stets Home",
      "title": "Stets Home: данные и потоки",
      "subtitle": "Логическая ER-модель, DFD и словарь данных.",
      "image": "assets/images/stets-dfd.png",
      "imageAlt": "DFD логического уровня Stets Home",
      "tags": [
        "ERD",
        "DFD",
        "Модели данных"
      ],
      "intro": "Модели помогают связать пользовательские действия с данными системы и показать, где хранится и передаётся информация.",
      "role": "Самостоятельно разработала модели данных, DFD и словарь данных.",
      "contribution": [
        "Логическая модель данных и связи между сущностями.",
        "Описание потоков данных в DFD.",
        "Словарь данных с описанием элементов и ограничений."
      ],
      "result": "Связанные модели и словарь данных для дальнейшей проработки системы.",
      "gallery": [
        {
          "src": "assets/images/stets-dfd.png",
          "caption": "DFD логического уровня Stets Home"
        },
        {
          "src": "assets/images/stets-dictionary.png",
          "caption": "Фрагмент словаря данных"
        },
        {
          "src": "assets/images/stets-erd-drive.png",
          "caption": "ER-модель Stets Home из текущей папки проекта"
        }
      ],
      "links": [
        {
          "label": "ERD · Draw.io",
          "href": "assets/documents/stets-erd.drawio",
          "download": true
        },
        {
          "label": "DFD · Draw.io",
          "href": "assets/documents/stets-dfd.drawio",
          "download": true
        },
        {
          "label": "Словарь данных · PDF",
          "href": "assets/documents/stets-dictionary.pdf"
        },
        {
          "label": "ERD · Google Drive",
          "href": "https://drive.google.com/file/d/1BiQ6h1SgEX5qHzb_V1HhHOGf4-LkDKpC/view?usp=drivesdk"
        },
        {
          "label": "DFD · Google Drive",
          "href": "https://drive.google.com/file/d/1ks44l2_yDhsyyJDFHgmcvcslwex6VWuy/view?usp=drivesdk"
        },
        {
          "label": "Словарь данных · Google Drive",
          "href": "https://docs.google.com/document/d/1ng4ygGkv9iuwoKZyB3c57CBWhVPoUMa1/edit?usp=drivesdk&ouid=102880447177556409482&rtpof=true&sd=true"
        }
      ],
      "sourceIds": [
        "1ks44l2_yDhsyyJDFHgmcvcslwex6VWuy",
        "1BiQ6h1SgEX5qHzb_V1HhHOGf4-LkDKpC",
        "1ng4ygGkv9iuwoKZyB3c57CBWhVPoUMa1"
      ]
    },
    {
      "id": "interfaces",
      "number": "03",
      "category": "interfaces",
      "type": "Учебный проект",
      "projectName": "Stets Home",
      "title": "Stets Home: экраны и переходы",
      "subtitle": "Структура интерфейсов и примеры пользовательских потоков.",
      "image": "assets/images/stets-password-flow.png",
      "imageAlt": "Экраны восстановления пароля Stets Home",
      "tags": [
        "ISD",
        "Figma",
        "Прототип"
      ],
      "intro": "Интерфейсная часть проекта: карта экранов, переходы и состояния, которые поддерживают пользовательские сценарии.",
      "role": "Самостоятельно подготовила структуру интерфейсов и экранные сценарии.",
      "contribution": [
        "Диаграмма структуры интерфейсов ISD.",
        "Экранный поток восстановления пароля.",
        "Последовательность экранов удаления дома."
      ],
      "result": "Связь между пользовательскими действиями, экранами и переходами.",
      "gallery": [
        {
          "src": "assets/images/stets-password-flow.png",
          "caption": "Сценарий восстановления пароля"
        },
        {
          "src": "assets/images/stets-delete-house.png",
          "caption": "Сценарий удаления дома"
        },
        {
          "src": "assets/images/stets-isd.png",
          "caption": "Карта экранов и переходов ISD"
        }
      ],
      "links": [
        {
          "label": "Прототип Stets Home · Figma",
          "href": "https://www.figma.com/design/kIt81qaAjAR0iwmAKNp81J/Stets-Home-%E2%80%94-Prototype?node-id=58-6141&t=EBf18Lra1qAmqsU5-1"
        },
        {
          "label": "Карта интерфейсов · Draw.io",
          "href": "assets/documents/stets-isd.drawio",
          "download": true
        },
        {
          "label": "Папка портфолио · Google Drive",
          "href": "https://drive.google.com/drive/folders/1mHmhx0mhMVfXtHuNYq8UNn7fq8Va3jxb"
        },
        {
          "label": "Документ со ссылкой на прототип",
          "href": "https://docs.google.com/document/d/1KHD2Uzve8l2GbaNcmLZ7fum9bpsNNmSbt8MpPAvxdIM/edit?usp=drivesdk"
        },
        {
          "label": "Видеопрезентация проекта · Google Drive",
          "href": "https://drive.google.com/file/d/1xoha9kADipFtgTGazTitdToZru0AOxVK/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1NVbedfgx8LHLhgBxiIu7IxWDwYTDg97r",
        "1KHD2Uzve8l2GbaNcmLZ7fum9bpsNNmSbt8MpPAvxdIM",
        "1xoha9kADipFtgTGazTitdToZru0AOxVK"
      ]
    },
    {
      "id": "acceptance",
      "number": "04",
      "category": "testing",
      "type": "Учебный проект",
      "projectName": "Stets Home",
      "title": "Stets Home: приёмка",
      "subtitle": "Программа и методика испытаний пользовательских сценариев.",
      "image": "assets/images/stets-acceptance.png",
      "imageAlt": "Фрагмент программы и методики испытаний Stets Home",
      "tags": [
        "ПМИ",
        "Тест-кейсы",
        "Приёмка"
      ],
      "intro": "Проверка прототипа по требованиям и пользовательским сценариям. В документе описаны условия, шаги и ожидаемые результаты.",
      "role": "Самостоятельно подготовила программу и методику испытаний.",
      "contribution": [
        "Объект, цель, средства и порядок испытаний.",
        "Проверки работы с учётной записью, домами, комнатами, устройствами и сценариями.",
        "Предусловия, шаги и ожидаемые результаты тест-кейсов."
      ],
      "result": "Материалы для последовательной проверки прототипа и обсуждения результатов.",
      "gallery": [
        {
          "src": "assets/images/stets-acceptance.png",
          "caption": "Программа и методика испытаний Stets Home"
        },
        {
          "src": "assets/images/stets-delete-house.png",
          "caption": "Экранный сценарий, связанный с требованиями"
        }
      ],
      "links": [
        {
          "label": "ПМИ · PDF",
          "href": "assets/documents/stets-acceptance.pdf"
        },
        {
          "label": "Исходный документ · DOCX",
          "href": "assets/documents/stets-acceptance.docx",
          "download": true
        },
        {
          "label": "ПМИ · Google Drive",
          "href": "https://docs.google.com/document/d/13XWQx2xaquuxK80cIlaF-djOK9umZSSW/edit?usp=drivesdk&ouid=102880447177556409482&rtpof=true&sd=true"
        }
      ],
      "sourceIds": [
        "13XWQx2xaquuxK80cIlaF-djOK9umZSSW"
      ]
    },
    {
      "id": "employee-onboarding",
      "number": "05",
      "category": "processes",
      "type": "Учебная задача",
      "title": "Онбординг сотрудника",
      "subtitle": "BPMN-модель: подготовка к работе, инструктажи и проверка знаний.",
      "image": "assets/images/onboarding-process-detail.png",
      "imageAlt": "Фрагмент процесса онбординга: параллельные встречи и проверка знаний",
      "tags": [
        "BPMN",
        "HR-процессы",
        "Онбординг"
      ],
      "intro": "Процесс ввода нового сотрудника в работу: от подготовки условий и назначения наставника до инструктажей, тестирования и получения рабочих задач.",
      "task": "Описать последовательность этапов онбординга, показать варианты прохождения процесса и действия при неуспешном тестировании.",
      "role": "Самостоятельно смоделировала бизнес-процесс в BPMN.",
      "contributionTitle": "Что отражено в модели",
      "contribution": [
        "Подготовка к работе: выдача оборудования и настройка удалённого доступа.",
        "Назначение наставника и варианты сопровождения сотрудника.",
        "Параллельные встречи с HR, IT-службой и руководителем.",
        "Тестирование и проверка его результатов перед получением рабочих задач.",
        "Дополнительные тренинги и возврат к тестированию при неуспешном результате."
      ],
      "result": "BPMN-диаграмма с этапами процесса, альтернативными и параллельными ветвями, а также циклом дополнительного обучения.",
      "gallery": [
        {
          "src": "assets/images/onboarding-process.png",
          "caption": "Общая схема онбординга сотрудника"
        },
        {
          "src": "assets/images/onboarding-process-preparation.png",
          "caption": "Фрагмент: подготовка к работе и назначение наставника"
        },
        {
          "src": "assets/images/onboarding-process-detail.png",
          "caption": "Фрагмент: параллельные встречи и проверка знаний"
        }
      ],
      "links": [
        {
          "label": "Диаграмма · PDF",
          "href": "assets/documents/employee-onboarding.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/employee-onboarding.drawio",
          "download": true
        },
        {
          "label": "Диаграмма · Google Drive",
          "href": "https://drive.google.com/file/d/1aIxpdFaSXWEFBGrUl9KKUceKpQoC73hx/view?usp=drivesdk"
        },
        {
          "label": "Условие задачи · Google Docs",
          "href": "https://docs.google.com/document/d/1hsxG9THHG5A8G7dzOIx1PiFheE6obqU8TSxC3XSDSY4/edit?usp=drivesdk"
        },
        {
          "label": "Папка задачи · Google Drive",
          "href": "https://drive.google.com/drive/folders/181XVV-oMuc6Q_GR8O7eBuluQrUdidB49"
        }
      ],
      "sourceIds": [
        "1aIxpdFaSXWEFBGrUl9KKUceKpQoC73hx",
        "1hsxG9THHG5A8G7dzOIx1PiFheE6obqU8TSxC3XSDSY4"
      ]
    },
    {
      "id": "chatty-requirements",
      "number": "06",
      "category": "requirements",
      "type": "Отдельная задача",
      "projectName": "Chatty 2.0",
      "title": "Chatty 2.0: спецификация требований",
      "subtitle": "Функциональные и нефункциональные требования к веб-приложению для изучения слов.",
      "image": "assets/images/chatty-requirements.png",
      "imageAlt": "Введение, цель и границы проекта в спецификации Chatty 2.0",
      "tags": [
        "SRS",
        "Требования",
        "Границы проекта"
      ],
      "intro": "Chatty 2.0 — веб-приложение, в котором ученики и преподаватели используют словари и карточки для изучения слов. Спецификация описывает требования ко второй версии.",
      "task": "Описать требования к версии 2.0 и обозначить границы проекта для разработки и проверки работы приложения.",
      "role": "Самостоятельно подготовила спецификацию требований к ПО.",
      "contribution": [
        "Описала границы версии 2.0 и роли ученика и преподавателя.",
        "Подготовила 11 вариантов использования словаря и карточек с основными сценариями и расширениями.",
        "Описала функциональные требования, данные, внешние интерфейсы, атрибуты качества и бизнес-правила."
      ],
      "result": "Спецификация требований на 19 страницах для разработки и проверки функциональности Chatty 2.0.",
      "gallery": [
        {
          "src": "assets/images/chatty-requirements.png",
          "caption": "Фрагмент спецификации: цель, соглашения и границы проекта"
        }
      ],
      "links": [
        {
          "label": "Полная спецификация · PDF",
          "href": "assets/documents/chatty-requirements.pdf"
        },
        {
          "label": "Спецификация · Google Docs",
          "href": "https://docs.google.com/document/d/13eKn_Dwl1ubSfPfJy4wX5zQgzEVNcLojKW2cpDhmc4U/edit?tab=t.0"
        },
        {
          "label": "Скачать фрагмент · PNG",
          "href": "assets/images/chatty-requirements.png",
          "download": true
        }
      ],
      "sourceIds": [
        "13eKn_Dwl1ubSfPfJy4wX5zQgzEVNcLojKW2cpDhmc4U"
      ]
    },
    {
      "id": "marketplace-use-case",
      "number": "07",
      "category": "requirements",
      "type": "Учебная задача",
      "title": "Маркетплейс: управление карточками товаров",
      "subtitle": "Четыре Use Case по CRUD: создание, просмотр, изменение и удаление.",
      "image": "assets/images/marketplace-use-case.png",
      "imageAlt": "Use Case создания карточки товара продавцом на маркетплейсе",
      "tags": [
        "Use Case",
        "CRUD",
        "Сценарии"
      ],
      "intro": "Из пользовательской истории продавца выделены четыре варианта использования управления товарами. Для них описаны предусловия, основные и альтернативные потоки, а также исключения.",
      "task": "Разложить User Story продавца на Use Case с помощью техники CRUD.",
      "role": "Самостоятельно подготовила четыре Use Case и описала варианты прохождения сценариев.",
      "contribution": [
        "Выделила создание, просмотр, изменение и удаление карточки товара.",
        "Зафиксировала акторов, предусловия и последовательность действий.",
        "Описала невалидные данные, отмену удаления, отсутствие авторизации и ошибки системы."
      ],
      "result": "Документ с четырьмя Use Case и альтернативными сценариями управления товарами.",
      "gallery": [
        {
          "src": "assets/images/marketplace-use-case.png",
          "caption": "Use Case 1: создание карточки товара"
        },
        {
          "src": "assets/images/marketplace-use-cases-delete.png",
          "caption": "Фрагмент полного документа: изменение и удаление карточки товара"
        }
      ],
      "links": [
        {
          "label": "Все четыре Use Case · PDF",
          "href": "assets/documents/marketplace-use-cases.pdf"
        },
        {
          "label": "Use Cases · Google Docs",
          "href": "https://docs.google.com/document/d/1FYDrSENSuu-EaWFJ3iRNceMXca894RRybBLbAatRMZ8/edit?tab=t.0"
        },
        {
          "label": "Скачать сценарий · PNG",
          "href": "assets/images/marketplace-use-case.png",
          "download": true
        }
      ],
      "sourceIds": [
        "1FYDrSENSuu-EaWFJ3iRNceMXca894RRybBLbAatRMZ8"
      ]
    },
    {
      "id": "course-data-model",
      "number": "08",
      "category": "models",
      "type": "Учебная задача",
      "title": "Учебные курсы: модель данных",
      "subtitle": "ER-модель студентов, преподавателей, курсов, записей на обучение и оценок.",
      "image": "assets/images/course-data-model.png",
      "imageAlt": "ER-диаграмма: Students, Teachers, Courses, Enrollments и Grades",
      "tags": [
        "ERD",
        "Связи",
        "Ключи"
      ],
      "intro": "Модель данных для учёта обучения: студенты записываются на курсы, за курсами закреплены преподаватели, результаты хранятся в оценках.",
      "task": "Выделить сущности учебного процесса, их атрибуты, ключи и связи.",
      "role": "Самостоятельно разработала ER-диаграмму.",
      "contribution": [
        "Выделила пять сущностей: Students, Teachers, Courses, Enrollments и Grades.",
        "Показала первичные и внешние ключи.",
        "Описала записи на курсы, даты завершения, статус обучения и оценки через атрибуты модели."
      ],
      "result": "ER-диаграмма, связывающая участников обучения, курсы и результаты.",
      "gallery": [
        {
          "src": "assets/images/course-data-model.png",
          "caption": "ER-модель учебных курсов"
        }
      ],
      "links": [
        {
          "label": "ER-диаграмма · PDF",
          "href": "assets/documents/courses-erd.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/courses-erd.drawio",
          "download": true
        },
        {
          "label": "Диаграмма · Google Drive",
          "href": "https://drive.google.com/file/d/1m1-k_yGHs0zSmtwUkzF212zLyhzMFpiA/view?usp=drivesdk"
        },
        {
          "label": "Условие задачи · Google Docs",
          "href": "https://docs.google.com/document/d/1K5Stp-xhBtHonxQP_meuf25OD9_I27JPxCJQQKl4T8c/edit?usp=drivesdk"
        },
        {
          "label": "Папка кейса · Google Drive",
          "href": "https://drive.google.com/drive/folders/1r0kqphsvdGIUR5YybKfhiSNFZgLspICe"
        }
      ],
      "sourceIds": [
        "1m1-k_yGHs0zSmtwUkzF212zLyhzMFpiA",
        "1K5Stp-xhBtHonxQP_meuf25OD9_I27JPxCJQQKl4T8c"
      ]
    },
    {
      "id": "drinks-data-model",
      "number": "09",
      "category": "models",
      "type": "Учебная задача",
      "title": "Кофейня: логическая модель данных",
      "subtitle": "Пользователи, заказы, оплата, отзывы и программа лояльности.",
      "image": "assets/images/drinks-data-model.png",
      "imageAlt": "Модель данных с сущностями User, Order, Order_item, Drink, Payment, Loyalty и Review",
      "tags": [
        "ERD",
        "Заказы",
        "Лояльность"
      ],
      "intro": "Логическая модель сервиса предварительного заказа кофе и других напитков. Модель связывает пользователя, состав заказа, платежи, отзывы и баллы лояльности.",
      "task": "Описать структуру данных для заказа напитков и связанных пользовательских действий.",
      "role": "Самостоятельно разработала модель данных и подготовила решение кейса.",
      "contribution": [
        "Разделила заказ и позиции заказа, связала позиции с напитками.",
        "Показала данные платежей: сумму, метод, дату и статус.",
        "Добавила отзывы с оценкой и комментарием, а также учёт баллов лояльности."
      ],
      "result": "Модель из семи связанных сущностей для хранения заказов и сопутствующих данных.",
      "gallery": [
        {
          "src": "assets/images/drinks-data-model.png",
          "caption": "ER-модель заказа напитков, оплаты, отзывов и лояльности"
        }
      ],
      "links": [
        {
          "label": "Описание сущностей · PDF",
          "href": "assets/documents/coffee-logical-model.pdf"
        },
        {
          "label": "Решение · Google Docs",
          "href": "https://docs.google.com/document/d/19HeR-eWPLsvtU6910Bci1-7plrnN31uC_IsqV2CCpx0/edit?usp=drivesdk"
        },
        {
          "label": "Условие задачи · Google Docs",
          "href": "https://docs.google.com/document/d/16eNx87VRA1RTffzcu9PzQw7Octa2GBI3LrlIL4UfXyE/edit?usp=drivesdk"
        },
        {
          "label": "Скачать схему · PNG",
          "href": "assets/images/drinks-data-model.png",
          "download": true
        },
        {
          "label": "Папка кейса · Google Drive",
          "href": "https://drive.google.com/drive/folders/1F182s6huu-wK0KqIlypBUCckTzmKOCu2"
        }
      ],
      "projectName": "Онлайн-кофейня",
      "sourceIds": [
        "19HeR-eWPLsvtU6910Bci1-7plrnN31uC_IsqV2CCpx0",
        "16eNx87VRA1RTffzcu9PzQw7Octa2GBI3LrlIL4UfXyE"
      ]
    },
    {
      "id": "shop-data-model",
      "number": "10",
      "category": "models",
      "type": "Учебная задача",
      "title": "«Накарабине»: модель данных магазина",
      "subtitle": "Два представления данных: схема в нотации Чена и модель со связями сущностей.",
      "image": "assets/images/shop-data-model.png",
      "imageAlt": "Модель заказов интернет-магазина: товар, позиция заказа, заказ, пользователь, акция, оплата и адрес",
      "tags": [
        "ERD",
        "Нотация Чена",
        "Заказы"
      ],
      "intro": "Данные интернет-магазина показаны в двух вариантах: через заказ и его атрибуты в нотации Чена и через связанные сущности товара, пользователя, оплаты и доставки.",
      "task": "Описать данные заказа и связи между товарами, пользователями, оплатой и адресом доставки.",
      "role": "Самостоятельно подготовила оба представления модели данных.",
      "contribution": [
        "Описала атрибуты заказа, товара и пользователя в схеме Чена.",
        "В модели со связями выделила позицию заказа, акцию, оплату и адрес.",
        "Показала связь заказа с пользователем, составом заказа и доставкой.",
        "Представила развитие модели от первой к третьей нормальной форме."
      ],
      "result": "Два изображения модели данных интернет-магазина для рассмотрения структуры заказа и связанных сущностей.",
      "gallery": [
        {
          "src": "assets/images/shop-data-model-chen.png",
          "caption": "Логическая ER-диаграмма в нотации Чена"
        },
        {
          "src": "assets/images/shop-data-model.png",
          "caption": "Модель данных: сущности заказа, товара, оплаты и доставки"
        },
        {
          "src": "assets/images/shop-normalization.png",
          "caption": "Модель данных: переход от первой к третьей нормальной форме"
        }
      ],
      "links": [
        {
          "label": "Все страницы модели · PDF",
          "href": "assets/documents/shop-model.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/shop-model.drawio",
          "download": true
        },
        {
          "label": "Исходная работа · Google Drive",
          "href": "https://drive.google.com/file/d/1_mMSSkbNGwN37lAxDpZW2agBjmxyWtab/view?usp=drivesdk"
        }
      ],
      "projectName": "Интернет-магазин «Накарабине»",
      "sourceIds": [
        "1_mMSSkbNGwN37lAxDpZW2agBjmxyWtab"
      ]
    },
    {
      "id": "contractor-selection",
      "category": "processes",
      "type": "Учебная задача",
      "title": "Выбор подрядчиков для тендера",
      "subtitle": "Взаимодействие заказчика и подрядчика: закупки, финансы и юридическая проверка.",
      "image": "assets/images/contractor-selection.png",
      "imageAlt": "Процесс выбора подрядчиков: два пула и подразделения",
      "tags": [
        "BPMN",
        "Пулы и дорожки",
        "Тендер"
      ],
      "intro": "Процесс отбора и согласования подрядчиков: от коммерческого запроса до включения кандидата в финальный список.",
      "task": "Показать взаимодействие двух компаний и распределение ответственности между отделами.",
      "role": "Самостоятельно построила BPMN-диаграмму с двумя пулами и дорожками подразделений.",
      "contribution": [
        "Разделила процессы компании-заказчика и компании-подрядчика.",
        "Показала коммерческую, финансовую и юридическую проверки.",
        "Описала обмен сообщениями, отказы и согласование финального списка."
      ],
      "result": "BPMN-модель выбора подрядчиков с ролями, проверками и альтернативными исходами.",
      "gallery": [
        {
          "src": "assets/images/contractor-selection.png",
          "caption": "Процесс выбора подрядчиков: два пула и подразделения"
        }
      ],
      "links": [
        {
          "label": "Открыть PDF",
          "href": "assets/documents/contractor-selection.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/contractor-selection.drawio",
          "download": true
        },
        {
          "label": "Диаграмма · Google Drive",
          "href": "https://drive.google.com/file/d/1vwEiF4cHvjL7WPSWmAEQcS9n9DMrCJKM/view?usp=drivesdk"
        },
        {
          "label": "Условие · Google Docs",
          "href": "https://docs.google.com/document/d/16myLyKbwZ3REwKVFY2MSgtU3JL_IyzDaGAJfehBPU0A/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1vwEiF4cHvjL7WPSWmAEQcS9n9DMrCJKM",
        "16myLyKbwZ3REwKVFY2MSgtU3JL_IyzDaGAJfehBPU0A"
      ],
      "number": "11"
    },
    {
      "id": "employee-task-control",
      "category": "processes",
      "type": "Учебная задача",
      "title": "Контроль выполнения задач сотрудников",
      "subtitle": "События, таймеры, напоминания и эскалация на руководителя.",
      "image": "assets/images/employee-tasks.png",
      "imageAlt": "Контроль задачи: события, таймеры и эскалация",
      "tags": [
        "BPMN",
        "События",
        "Таймеры"
      ],
      "intro": "Модель работы системы управления задачами: постановка, контроль выполнения и реакция на незавершённую задачу.",
      "task": "Описать проверки сроков через 24 и 48 часов, удаление задачи и уведомление руководителя.",
      "role": "Самостоятельно смоделировала процесс с таймерами и граничным событием.",
      "contribution": [
        "Показала создание задачи и назначение исполнителя.",
        "Добавила проверку выполнения, изменение статуса и напоминание.",
        "Предусмотрела удаление задачи руководителем и эскалацию при просрочке."
      ],
      "result": "Диаграмма контроля задачи с временными условиями и несколькими вариантами завершения.",
      "gallery": [
        {
          "src": "assets/images/employee-tasks.png",
          "caption": "Контроль задачи: события, таймеры и эскалация"
        }
      ],
      "links": [
        {
          "label": "Открыть PDF",
          "href": "assets/documents/employee-tasks.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/employee-tasks.drawio",
          "download": true
        },
        {
          "label": "Диаграмма · Google Drive",
          "href": "https://drive.google.com/file/d/1XRvHmg212YAHQoBvAxv98Oz0n0gMhpUq/view?usp=drivesdk"
        },
        {
          "label": "Условие · Google Docs",
          "href": "https://docs.google.com/document/d/1pMkPVw4SPMZhMxLOg46O4AApYdSD5tPg40FyUiT7Tbk/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1XRvHmg212YAHQoBvAxv98Oz0n0gMhpUq",
        "1pMkPVw4SPMZhMxLOg46O4AApYdSD5tPg40FyUiT7Tbk"
      ],
      "number": "12"
    },
    {
      "id": "warranty-service",
      "category": "processes",
      "type": "Учебная задача",
      "title": "Обработка гарантийного обращения",
      "subtitle": "Событийный шлюз и три исхода: замена, платный ремонт или отказ.",
      "image": "assets/images/warranty-service.png",
      "imageAlt": "Обработка гарантийного обращения клиента",
      "tags": [
        "BPMN",
        "Событийный шлюз",
        "Клиентский сервис"
      ],
      "intro": "Процесс клиентского сервиса при обращении по гарантии. Ветвление зависит от статуса гарантии, срока покупки и наличия чека.",
      "task": "Описать обработку обращения с использованием исключающего событийного шлюза.",
      "role": "Самостоятельно подготовила BPMN-модель гарантийного обращения.",
      "contribution": [
        "Отразила получение обращения клиентским сервисом.",
        "Показала ожидание событий, определяющих дальнейшую обработку.",
        "Выделила замену товара, предложение платного ремонта и отказ в обслуживании."
      ],
      "result": "BPMN-диаграмма с тремя исходами обработки гарантийного обращения.",
      "gallery": [
        {
          "src": "assets/images/warranty-service.png",
          "caption": "Обработка гарантийного обращения клиента"
        }
      ],
      "links": [
        {
          "label": "Открыть PDF",
          "href": "assets/documents/warranty-service.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/warranty-service.drawio",
          "download": true
        },
        {
          "label": "Диаграмма · Google Drive",
          "href": "https://drive.google.com/file/d/1lp9SO9HR3XjehozPDXooyTQtgU8RnmEV/view?usp=drivesdk"
        },
        {
          "label": "Условие · Google Docs",
          "href": "https://docs.google.com/document/d/1Y4ZEn8T0_HJ5tupzn7hWhE3ufM0wSzEBjYUCkuw-G5c/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1lp9SO9HR3XjehozPDXooyTQtgU8RnmEV",
        "1Y4ZEn8T0_HJ5tupzn7hWhE3ufM0wSzEBjYUCkuw-G5c"
      ],
      "number": "13"
    },
    {
      "id": "osago-process",
      "category": "processes",
      "type": "Учебная задача",
      "title": "Электронное оформление ОСАГО",
      "subtitle": "Основной процесс, расчёт стоимости и внешний подпроцесс оплаты.",
      "image": "assets/images/osago-process.png",
      "imageAlt": "Основной процесс оформления ОСАГО",
      "tags": [
        "BPMN",
        "Подпроцессы",
        "Страхование"
      ],
      "intro": "Модель оформления полиса: приём заявки, проверка данных, расчёт стоимости, решение клиента, оплата и отправка полиса.",
      "task": "Связать основной процесс с обычным подпроцессом расчёта и вызовом внешнего процесса оплаты.",
      "role": "Самостоятельно разработала основной процесс и отдельную диаграмму обработки платежа.",
      "contribution": [
        "Разделила ответственность отдела продаж и системы расчёта.",
        "Описала отказ клиента и ожидание ответа в течение пяти дней.",
        "Показала вызов оплаты, срок действия ссылки и обработку ошибок.",
        "Детализировала проверку карты, SMS-кода и выполнение транзакции."
      ],
      "result": "Две связанные BPMN-диаграммы: оформление полиса и обработка платежа.",
      "gallery": [
        {
          "src": "assets/images/osago-process.png",
          "caption": "Основной процесс оформления ОСАГО"
        },
        {
          "src": "assets/images/osago-payment.png",
          "caption": "Внешний подпроцесс обработки платежа"
        }
      ],
      "links": [
        {
          "label": "Основной процесс и оплата · PDF",
          "href": "assets/documents/osago-processes.pdf"
        },
        {
          "label": "Основной процесс · Draw.io",
          "href": "assets/documents/osago-process.drawio",
          "download": true
        },
        {
          "label": "Оплата · Draw.io",
          "href": "assets/documents/osago-payment.drawio",
          "download": true
        },
        {
          "label": "Основной процесс · Google Drive",
          "href": "https://drive.google.com/file/d/1xScWfVjHlY-NvY3tIJXF-wz_k8Tgy6Pz/view?usp=drivesdk"
        },
        {
          "label": "Оплата · Google Drive",
          "href": "https://drive.google.com/file/d/1SK56H-evnGONewyPku5ntwZ4jwjAlcZM/view?usp=drivesdk"
        },
        {
          "label": "Условие · Google Docs",
          "href": "https://docs.google.com/document/d/16b5JO1LdE9svZhpwPpClI6CU8LftwINCKT89VKFpdIM/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1xScWfVjHlY-NvY3tIJXF-wz_k8Tgy6Pz",
        "1SK56H-evnGONewyPku5ntwZ4jwjAlcZM",
        "16b5JO1LdE9svZhpwPpClI6CU8LftwINCKT89VKFpdIM"
      ],
      "number": "14"
    },
    {
      "id": "clinic-appointment-process",
      "category": "processes",
      "type": "Учебная задача",
      "projectName": "Медицинская клиника «Вита»",
      "title": "«Вита»: запись к врачу — AS-IS и TO-BE",
      "subtitle": "Текущий процесс, запись через приложение и состояния приёма.",
      "image": "assets/images/clinic-process-to-be.png",
      "imageAlt": "AS-IS: запись по телефону и посещение врача",
      "tags": [
        "BPMN",
        "AS-IS / TO-BE",
        "UML State Machine"
      ],
      "intro": "Учебная работа по процессу медицинской клиники: телефонная запись и целевой сценарий записи через приложение.",
      "task": "Дополнить текущий процесс, описать состояния приёма и смоделировать запись с учётом автоматизации.",
      "role": "Самостоятельно выполнила учебное задание по моделированию процессов и состояний.",
      "contribution": [
        "Дополнила модель AS-IS с пациентом, администратором и врачом.",
        "Смоделировала запись через приложение, подтверждение и отмену.",
        "Описала состояния приёма и переходы между ними в UML."
      ],
      "result": "Три модели в одном исходнике: BPMN AS-IS, UML State Machine и BPMN TO-BE.",
      "gallery": [
        {
          "src": "assets/images/clinic-process-as-is.png",
          "caption": "AS-IS: запись по телефону и посещение врача"
        },
        {
          "src": "assets/images/clinic-process-to-be.png",
          "caption": "TO-BE: запись через приложение"
        },
        {
          "src": "assets/images/clinic-appointment-states.png",
          "caption": "UML-диаграмма состояний приёма"
        }
      ],
      "links": [
        {
          "label": "Три модели · PDF",
          "href": "assets/documents/clinic-processes.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/clinic-processes.drawio",
          "download": true
        },
        {
          "label": "Исходная работа · Google Drive",
          "href": "https://drive.google.com/file/d/1nU2WjCDnJc_frxSK_qJUUVftlB1Emo-r/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1nU2WjCDnJc_frxSK_qJUUVftlB1Emo-r"
      ],
      "number": "15"
    },
    {
      "id": "insurance-multiproduct",
      "category": "processes",
      "type": "Тестовое задание",
      "title": "Страхование: единое оформление продуктов",
      "subtitle": "AS-IS и TO-BE: корзина, общие данные и оплата нескольких продуктов.",
      "image": "assets/images/insurance-to-be.png",
      "imageAlt": "AS-IS: отдельное оформление каждого продукта",
      "tags": [
        "BPMN",
        "AS-IS / TO-BE",
        "Метрики"
      ],
      "intro": "Тестовое задание InsLab 2.0: спроектировать единый цифровой сценарий покупки нескольких страховых продуктов вместо отдельных повторяющихся форм.",
      "task": "Найти точки трения текущего процесса, предложить единый сценарий и подход к сбору требований.",
      "role": "Самостоятельно подготовила описание AS-IS/TO-BE, BPMN-схемы и предложения по оценке процесса.",
      "contribution": [
        "Описала повторный ввод данных, разрозненные формы и возможные потери клиентов.",
        "Предложила корзину продуктов, общие данные и единый платёж.",
        "Показала взаимодействие сайта, страховой системы и внешних сервисов.",
        "Определила метрики и план сбора, формализации и согласования требований."
      ],
      "result": "Описание и модели текущего и целевого процессов. Метрики в задании — предложения для будущей проверки, а не достигнутые результаты.",
      "gallery": [
        {
          "src": "assets/images/insurance-as-is.png",
          "caption": "AS-IS: отдельное оформление каждого продукта"
        },
        {
          "src": "assets/images/insurance-to-be.png",
          "caption": "TO-BE: единый сценарий оформления нескольких продуктов"
        }
      ],
      "links": [
        {
          "label": "BPMN-модели · PDF",
          "href": "assets/documents/insurance-multiproduct.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/asis-tobe-process.drawio",
          "download": true
        },
        {
          "label": "Описание и метрики · DOCX",
          "href": "assets/documents/asis-tobe-description.docx",
          "download": true
        },
        {
          "label": "Описание · Google Drive",
          "href": "https://docs.google.com/document/d/1GCOZ2JyBX-133ztTqlbjuyrdxPAvykhK/edit?usp=drivesdk&ouid=102880447177556409482&rtpof=true&sd=true"
        },
        {
          "label": "BPMN · Google Drive",
          "href": "https://drive.google.com/file/d/1iqZB1NKjBS4JtaN2hiCdsysh_QHQMOaV/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1GCOZ2JyBX-133ztTqlbjuyrdxPAvykhK",
        "1iqZB1NKjBS4JtaN2hiCdsysh_QHQMOaV"
      ],
      "number": "16"
    },
    {
      "id": "clinic-data-flows",
      "category": "models",
      "type": "Учебная задача",
      "projectName": "Медицинская клиника «Вита»",
      "title": "«Вита»: потоки медицинских данных",
      "subtitle": "Контекстная и логическая DFD для обследований и лечения.",
      "image": "assets/images/clinic-dfd-logical.png",
      "imageAlt": "Контекстная DFD приложения «Вита»",
      "tags": [
        "DFD",
        "Потоки данных",
        "Декомпозиция"
      ],
      "intro": "Взаимодействие пациента, врача, приложения и лаборатории при направлении на обследование и медикаментозное лечение.",
      "task": "Показать внешних участников, процессы, хранилища и обмен информацией на двух уровнях DFD.",
      "role": "Самостоятельно подготовила контекстную и логическую диаграммы потоков данных.",
      "contribution": [
        "Выделила участников и границы приложения на контекстном уровне.",
        "Детализировала обследование, лечение, направления и результаты анализов.",
        "Показала хранилища пациентов, результатов и расписания процедурного кабинета."
      ],
      "result": "Две DFD, связывающие медицинские сценарии с потоками и хранилищами данных.",
      "gallery": [
        {
          "src": "assets/images/clinic-dfd-context.png",
          "caption": "Контекстная DFD приложения «Вита»"
        },
        {
          "src": "assets/images/clinic-dfd-logical.png",
          "caption": "Логические DFD обследования и медикаментозного лечения"
        }
      ],
      "links": [
        {
          "label": "Два уровня DFD · PDF",
          "href": "assets/documents/clinic-dfd.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/clinic-dfd.drawio",
          "download": true
        },
        {
          "label": "Исходная работа · Google Drive",
          "href": "https://drive.google.com/file/d/1KGXEsk2ASciD53BtGXWDfXQf9VzWbPfo/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1KGXEsk2ASciD53BtGXWDfXQf9VzWbPfo"
      ],
      "number": "17"
    },
    {
      "id": "coffee-conceptual-model",
      "category": "models",
      "type": "Учебная задача",
      "projectName": "Онлайн-кофейня",
      "title": "Кофейня: концептуальная модель",
      "subtitle": "Ключевые сущности сервиса предварительного заказа напитков.",
      "image": "assets/images/coffee-conceptual-model.png",
      "imageAlt": "Концептуальная ER-диаграмма онлайн-кофейни",
      "tags": [
        "ERD",
        "Концептуальная модель",
        "Сущности"
      ],
      "intro": "Начальный этап моделирования сервиса онлайн-кофейни: выделение основных объектов и связей до детализации атрибутов.",
      "task": "Определить сущности по функциональным требованиям к заказам, оплате, отзывам и баллам.",
      "role": "Самостоятельно выделила сущности и построила концептуальную ER-диаграмму.",
      "contribution": [
        "Выделила пользователя, заказ, напиток, оплату, отзыв и баллы.",
        "Связала сущности в общей концептуальной схеме.",
        "Подготовила основу для дальнейшей логической модели этой предметной области."
      ],
      "result": "Концептуальная ER-диаграмма из шести ключевых сущностей. Логическая модель представлена отдельной работой.",
      "gallery": [
        {
          "src": "assets/images/coffee-conceptual-model.png",
          "caption": "Концептуальная ER-диаграмма онлайн-кофейни"
        }
      ],
      "links": [
        {
          "label": "Открыть PDF",
          "href": "assets/documents/coffee-conceptual-model.pdf"
        },
        {
          "label": "Решение · Google Docs",
          "href": "https://docs.google.com/document/d/1XB4IQTw2xzXWLIFzD-Et-FYDuFrLeHsX6G71wd_AV9U/edit?usp=drivesdk"
        },
        {
          "label": "Условие · Google Docs",
          "href": "https://docs.google.com/document/d/1jHtsSknNMjLGcQf2hQcOIY73ov1_ZsqdtYigg2cYSwY/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1XB4IQTw2xzXWLIFzD-Et-FYDuFrLeHsX6G71wd_AV9U",
        "1jHtsSknNMjLGcQf2hQcOIY73ov1_ZsqdtYigg2cYSwY"
      ],
      "number": "18"
    },
    {
      "id": "otium-tv-sequence",
      "category": "requirements",
      "type": "Учебная задача",
      "projectName": "Otium",
      "title": "Otium: работа с ТВ-каналами",
      "subtitle": "UML Sequence: авторизация, каталог каналов и избранное.",
      "image": "assets/images/otium-sequence.png",
      "imageAlt": "UML-диаграмма последовательности: ТВ-каналы и избранное",
      "tags": [
        "UML Sequence",
        "Взаимодействие систем",
        "Сценарии"
      ],
      "intro": "Взаимодействие пользователя, интерфейса Otium, сервиса авторизации и ТВ-каналов.",
      "task": "Описать последовательность запросов и ответов для просмотра каналов и управления избранным.",
      "role": "Самостоятельно дополнила диаграмму последовательности по учебному заданию.",
      "contribution": [
        "Показала авторизацию и варианты успешного и ошибочного ответа.",
        "Описала получение списка каналов и подробностей выбранного канала.",
        "Добавила просмотр избранного, добавление и удаление канала с альтернативными исходами."
      ],
      "result": "Диаграмма последовательности с сообщениями, фокусами управления и блоками alt.",
      "gallery": [
        {
          "src": "assets/images/otium-sequence.png",
          "caption": "UML-диаграмма последовательности: ТВ-каналы и избранное"
        }
      ],
      "links": [
        {
          "label": "Открыть PDF",
          "href": "assets/documents/otium-sequence.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/otium-sequence.drawio",
          "download": true
        },
        {
          "label": "Исходная работа · Google Drive",
          "href": "https://drive.google.com/file/d/1i-7dL6SJk3RiA1mCwCVyGiTveBUPBE2_/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1i-7dL6SJk3RiA1mCwCVyGiTveBUPBE2_"
      ],
      "number": "19"
    },
    {
      "id": "shop-use-cases",
      "category": "requirements",
      "type": "Учебная задача",
      "projectName": "Интернет-магазин «Накарабине»",
      "title": "«Накарабине»: сценарии интернет-магазина",
      "subtitle": "Диаграмма вариантов использования и описания пользовательских сценариев.",
      "image": "assets/images/shop-use-case-diagram.png",
      "imageAlt": "Диаграмма вариантов использования магазина «Накарабине»",
      "tags": [
        "Use Case",
        "UML",
        "E-commerce"
      ],
      "intro": "Сценарии пользователя интернет-магазина: каталог, поиск, информация о товаре, заказ и личный кабинет.",
      "task": "Показать доступные действия пользователей и описать основные варианты использования магазина.",
      "role": "Самостоятельно подготовила диаграмму Use Case и текстовые описания сценариев.",
      "contribution": [
        "Разделила роли посетителя и авторизованного пользователя.",
        "Описала каталог, поиск, оформление заказа, регистрацию и вход.",
        "Зафиксировала предусловия, базовые сценарии и расширения в таблицах вариантов использования."
      ],
      "result": "Диаграмма Use Case и набор описаний сценариев, связанных с моделью данных магазина.",
      "gallery": [
        {
          "src": "assets/images/shop-use-case-diagram.png",
          "caption": "Диаграмма вариантов использования магазина «Накарабине»"
        },
        {
          "src": "assets/images/shop-use-cases.png",
          "caption": "Полная страница: диаграмма и таблицы вариантов использования"
        }
      ],
      "links": [
        {
          "label": "Сценарии и модели · PDF",
          "href": "assets/documents/shop-model.pdf"
        },
        {
          "label": "Исходник · Draw.io",
          "href": "assets/documents/shop-model.drawio",
          "download": true
        },
        {
          "label": "Исходная работа · Google Drive",
          "href": "https://drive.google.com/file/d/1_mMSSkbNGwN37lAxDpZW2agBjmxyWtab/view?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1_mMSSkbNGwN37lAxDpZW2agBjmxyWtab"
      ],
      "number": "20"
    },
    {
      "id": "clinic-appointment-prototype",
      "category": "interfaces",
      "type": "Учебная задача",
      "projectName": "Медицинская клиника «Вита»",
      "title": "«Вита»: прототип записи к врачу",
      "subtitle": "Поиск врача, выбор приёма, авторизация и подтверждение записи.",
      "image": "assets/images/clinic-appointment-cover.png",
      "imageAlt": "Список врачей и поиск",
      "tags": [
        "Figma",
        "Прототип",
        "Пользовательский поток"
      ],
      "intro": "Прототип мобильного приложения для записи в клинику. Экраны показывают выбор врача, ввод данных и результат записи.",
      "task": "Связать сценарий записи с экранами приложения и состояниями интерфейса.",
      "role": "Самостоятельно подготовила прототип по учебному заданию.",
      "contribution": [
        "Проработала список врачей и поиск по параметрам.",
        "Подготовила экраны авторизации и подтверждения одноразовым кодом.",
        "Показала ввод данных о приёме, успешную запись и статус приёма."
      ],
      "result": "Набор экранов и состояний для сценария записи к врачу в Figma.",
      "gallery": [
        {
          "src": "assets/images/clinic-doctors.png",
          "caption": "Список врачей и поиск"
        },
        {
          "src": "assets/images/clinic-appointment.png",
          "caption": "Ввод данных о приёме"
        },
        {
          "src": "assets/images/clinic-appointment-success.png",
          "caption": "Успешная запись на приём"
        }
      ],
      "links": [
        {
          "label": "Открыть прототип · Figma",
          "href": "https://www.figma.com/design/V8nZ2O5LeNsyobql0T43Xs/%D0%94%D0%97-%D0%A1%D0%BF%D1%80%D0%B8%D0%BD%D1%82-6?node-id=0-1&p=f&t=vLNm2fsbi212rxAc-0"
        },
        {
          "label": "Документ со ссылкой · Google Docs",
          "href": "https://docs.google.com/document/d/1-4oGG4Y4nAlkslh536j27XNlUuWnwrxMpk5_VvvWyKo/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1-4oGG4Y4nAlkslh536j27XNlUuWnwrxMpk5_VvvWyKo"
      ],
      "number": "21"
    },
    {
      "id": "clinic-patient-prototype",
      "category": "interfaces",
      "type": "Учебная задача",
      "projectName": "Медицинская клиника «Вита»",
      "title": "«Вита»: обследования и результаты анализов",
      "subtitle": "Мобильные экраны пациента: направления, процедуры и анализы.",
      "image": "assets/images/clinic-patient-cover.png",
      "imageAlt": "Главный экран пациентского приложения",
      "tags": [
        "Figma",
        "Прототип",
        "Медицинские сценарии"
      ],
      "intro": "Прототип пациентского приложения для работы с обследованиями, расписанием процедурного кабинета и результатами анализов.",
      "task": "Проработать экраны медицинских сценариев и связать их с данными пациента.",
      "role": "Самостоятельно подготовила экраны и пользовательские сценарии приложения.",
      "contribution": [
        "Показала данные пациента и направления на обследования.",
        "Подготовила варианты записи и просмотра расписания процедурного кабинета.",
        "Проработала список анализов, просмотр результата и назначение на лечение."
      ],
      "result": "Набор экранов пациентского приложения, дополненный ссылкой на карту пользовательских историй.",
      "gallery": [
        {
          "src": "assets/images/clinic-patient-home.png",
          "caption": "Главный экран пациентского приложения"
        },
        {
          "src": "assets/images/clinic-lab-booking.png",
          "caption": "Запись на процедуру"
        },
        {
          "src": "assets/images/clinic-results.png",
          "caption": "Просмотр результатов анализов"
        }
      ],
      "links": [
        {
          "label": "Открыть прототип · Figma",
          "href": "https://www.figma.com/design/7BZVudpZuUZ6kJpAUyeWBp/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%84%D0%B0%D0%B9%D0%BB-%D1%81-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%B0%D0%BC%D0%B8--Copy-?node-id=0-1&t=ZdKiv0jXEmqEqBVk-0"
        },
        {
          "label": "Карта пользовательских историй · Miro",
          "href": "https://miro.com/app/board/uXjVHUfdc54=/?share_link_id=972357667960"
        },
        {
          "label": "Ссылка на Figma · Google Docs",
          "href": "https://docs.google.com/document/d/14DdlOUONrcawEmF_BN4EmaPgBsCQwvhCIq8NObk0AKQ/edit?usp=drivesdk"
        },
        {
          "label": "Ссылка на Miro · Google Docs",
          "href": "https://docs.google.com/document/d/1bgBECH4S2lNgUGV56XdAHF-RLLGfx6rwa-7Ak7pJq74/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "14DdlOUONrcawEmF_BN4EmaPgBsCQwvhCIq8NObk0AKQ",
        "1bgBECH4S2lNgUGV56XdAHF-RLLGfx6rwa-7Ak7pJq74"
      ],
      "number": "22"
    },
    {
      "id": "capsule-testing",
      "category": "testing",
      "type": "Учебная задача",
      "projectName": "Капсула",
      "title": "«Капсула»: тест-план и приёмка",
      "subtitle": "Проверки сайта бронирования с ожидаемыми и фактическими результатами.",
      "image": "assets/images/capsule-test-plan.png",
      "imageAlt": "Тест-план «Капсулы»: требования и фактические результаты",
      "tags": [
        "Тест-план",
        "ПМИ",
        "Тест-кейсы"
      ],
      "intro": "Документация для проверки сайта бронирования капсульных отелей: регистрация, карта, личный кабинет и управление бронированиями.",
      "task": "Подготовить последовательные проверки функциональности и зафиксировать результаты тестирования.",
      "role": "Самостоятельно подготовила тест-план, выполнила проверки и составила ПМИ.",
      "contribution": [
        "Описала требования, шаги, вводимые значения и ожидаемые результаты.",
        "Зафиксировала фактическое поведение и непройденные проверки.",
        "Составила программу и методику испытаний пользовательских сценариев."
      ],
      "result": "Тест-план с результатами проверок и программа приёмочных испытаний. Найденные отклонения описаны в исходном документе.",
      "gallery": [
        {
          "src": "assets/images/capsule-test-plan.png",
          "caption": "Тест-план «Капсулы»: требования и фактические результаты"
        },
        {
          "src": "assets/images/capsule-acceptance.png",
          "caption": "Программа и методика испытаний сайта «Капсула»"
        }
      ],
      "links": [
        {
          "label": "Тест-план · PDF",
          "href": "assets/documents/capsule-test-plan.pdf"
        },
        {
          "label": "ПМИ · PDF",
          "href": "assets/documents/capsule-acceptance.pdf"
        },
        {
          "label": "Тест-план · Google Docs",
          "href": "https://docs.google.com/document/d/1b_7L4OrWEM1lJLQWq4sy0VSTUPBMRc02UbFA9vitbEg/edit?usp=drivesdk"
        },
        {
          "label": "ПМИ · Google Docs",
          "href": "https://docs.google.com/document/d/1pIxZR74vCSuugrtGJJDdPu5MwCZ8sRaoN8Z25rMLXOE/edit?usp=drivesdk"
        },
        {
          "label": "Копия тест-плана из проекта 8",
          "href": "https://docs.google.com/document/d/1BPO64OBtAiOSYbwWOPY6rTj1KlEKnQq7EnhHuQQJea0/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1b_7L4OrWEM1lJLQWq4sy0VSTUPBMRc02UbFA9vitbEg",
        "1pIxZR74vCSuugrtGJJDdPu5MwCZ8sRaoN8Z25rMLXOE",
        "1BPO64OBtAiOSYbwWOPY6rTj1KlEKnQq7EnhHuQQJea0"
      ],
      "number": "23"
    },
    {
      "id": "capsule-user-guide",
      "category": "interfaces",
      "type": "Учебная задача",
      "projectName": "Капсула",
      "title": "«Капсула»: руководство пользователя",
      "subtitle": "Инструкции по регистрации, бронированию и работе с личным кабинетом.",
      "image": "assets/images/capsule-user-guide.png",
      "imageAlt": "Руководство пользователя: просмотр информации об отеле",
      "tags": [
        "Документация",
        "Пользовательские сценарии",
        "Инструкции"
      ],
      "intro": "Руководство по сайту бронирования капсульных отелей с последовательностью действий и изображениями интерфейса.",
      "task": "Объяснить пользователю основные сценарии сайта, условия ввода данных и действия при ошибках.",
      "role": "Самостоятельно подготовила руководство пользователя.",
      "contribution": [
        "Описала просмотр информации об отеле и ответы на частые вопросы.",
        "Подготовила инструкции по регистрации, входу и восстановлению пароля.",
        "Описала создание, изменение и отмену бронирования, а также сообщения об ошибках."
      ],
      "result": "Руководство пользователя на 20 страницах с шагами и изображениями экранов.",
      "gallery": [
        {
          "src": "assets/images/capsule-user-guide.png",
          "caption": "Руководство пользователя: просмотр информации об отеле"
        },
        {
          "src": "assets/images/capsule-user-guide-registration.png",
          "caption": "Фрагмент руководства пользователя с экраном сайта"
        }
      ],
      "links": [
        {
          "label": "Полное руководство · PDF",
          "href": "assets/documents/capsule-user-guide.pdf"
        },
        {
          "label": "Руководство · Google Docs",
          "href": "https://docs.google.com/document/d/1H8fm0GNLxudYdcaG90iHwnJkV__Bom7hGrp-Ad_ccHw/edit?usp=drivesdk"
        }
      ],
      "sourceIds": [
        "1H8fm0GNLxudYdcaG90iHwnJkV__Bom7hGrp-Ad_ccHw"
      ],
      "number": "24"
    },
    // Миграция: личная работа Арины. Публикуется только обезличенная общая схема.
    // Полный файл содержит отдельную первую страницу; в assets включён фрагмент со страницы 2.
    {
      "id": "system-migration-as-is",
      "number": "25",
      "category": "processes",
      "type": "Проект",
      "title": "Миграция между системами: AS-IS",
      "subtitle": "Полное моделирование текущего процесса миграции из одной системы в другую.",
      "image": "assets/images/migration-as-is.png",
      "imageAlt": "Обезличенная общая схема процесса миграции AS-IS",
      "tags": ["BPMN", "AS-IS", "Миграция", "NDA"],
      "intro": "Проект по миграции из одной системы в другую. Я самостоятельно прорисовала весь текущий процесс AS-IS: подготовила общую схему и подробную детализацию его этапов.",
      "task": "Зафиксировать, как выполняется процесс миграции, и связать его этапы в единую модель AS-IS.",
      "role": "Самостоятельно смоделировала весь процесс AS-IS — от общей схемы до детальных схем на отдельных страницах.",
      "contribution": [
        "Прорисовала полный текущий процесс миграции между системами.",
        "Подготовила общую схему, объединяющую этапы процесса.",
        "Детализировала процесс на отдельных страницах и показала последовательность действий и ветвления."
      ],
      "result": "Подробная AS-IS-модель процесса миграции. В портфолио представлена общая схема со второй страницы; названия процессов и подписи заменены на NDA.",
      "gallery": [
        {
          "src": "assets/images/migration-as-is.png",
          "caption": "Общая схема миграции AS-IS со страницы 2. Подписи заменены на NDA."
        }
      ],
      "links": [
        {"label": "Общая схема · PDF", "href": "assets/documents/migration-as-is.pdf"},
        {"label": "Исходник общей схемы · Draw.io", "href": "assets/documents/migration-as-is.drawio", "download": true},
        {"label": "Скачать общую схему · PNG", "href": "assets/images/migration-as-is.png", "download": true}
      ]
    }
  ]
};
