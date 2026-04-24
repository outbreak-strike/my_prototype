# my_prototype — правила прототипування

Локальний workspace для HTML-прототипів. Кожен прототип — окрема тека в `prototypes/<slug>/` з розділеним кодом (HTML / CSS / JS) і текстами.

## Структура

```
my_prototype/
├── index.html              # мінілендинг-індекс
├── CLAUDE.md               # цей файл
├── README.md
├── .gitignore
└── prototypes/
    └── <slug>/
        ├── index.html      # розмітка (link на css, script src на js)
        ├── styles.css      # усі стилі, токени зверху
        ├── app.js          # логіка
        ├── data.js         # demo-дані (якщо є)
        ├── content.md      # копірайт-референс
        └── README.md       # що прототип демонструє
```

## Технологічні правила

- **Vanilla HTML + CSS + JavaScript.** Без React, Vue, Svelte, Angular.
- **Без білд-системи.** `open prototypes/<slug>/index.html` і готово. Без `npm install`, без webpack, без Vite.
- **Зовнішні бібліотеки** — лише через CDN за явної потреби.
- **Кодування — UTF-8.** Завжди `<meta charset="UTF-8">` у `<head>`. Ніколи не зберігати файли в Latin-1/Windows-1252.
- **Svg inline** прямо в HTML — це прототип, нормально.

## Структура файлів прототипу

- `index.html` — тільки розмітка. У `<head>` лише `<link rel="stylesheet" href="styles.css">`, внизу `<body>` — `<script src="data.js">` + `<script src="app.js">` (в такому порядку, data ідуть першими).
- `styles.css` — **усі** стилі. Design tokens (`:root { --purple: … }`) зверху, далі компоненти згруповано за секціями з коментарем-заголовком `/* ── Section ── */`.
- `app.js` — логіка: routing, обробники, render-функції. Без глобальних констант-даних.
- `data.js` — demo-дані (масиви, об'єкти). Виноситься окремо, якщо даних більше 20 рядків.
- `content.md` — **single source of truth для копірайту.** Тексти UI живуть тут як референс. При зміні копірайту — спершу правиш `content.md`, потім синхронізуєш в `index.html` / `app.js`. Це не шаблонізація, просто дисципліна.
- `README.md` — коротко: що прототип демонструє, концепція, список екранів, як запустити.

## Git

- Це окремий git-репозиторій, гілка `main`.
- **Коміти англійською**, conventional-style з scope = slug прототипу:
  - `feat(sales-agent-v2): add memory import screen`
  - `fix(sales-agent-v2): correct Q&A flow progress bar`
  - `refactor(sales-agent-v2): extract data to data.js`
  - `docs(sales-agent-v2): update content.md`
  - Зміни на рівні workspace без scope: `chore: update landing`, `docs: rewrite CLAUDE.md`
- **`git push` — тільки з мого явного дозволу.**
- Не комітити `.DS_Store`, `.env`, `node_modules/` — вже в `.gitignore`.

## Як додати новий прототип

1. Скопіюй `prototypes/sales-agent-v2/` у `prototypes/<new-slug>/`. Slug — kebab-case (наприклад `linkedin-flow`, `warmup-v3`).
2. Почисти вміст під свій кейс. Збережи всі 6 файлів (index, styles, app, data, content, README) — навіть якщо якийсь спочатку майже порожній.
3. Додай картку у корінному `index.html` (секція `.grid`) і рядок у таблиці `README.md`.
4. Перший коміт: `feat(<new-slug>): initial prototype scaffolding`.

## Як працюємо разом

- **Великі зміни поетапно:** діагностика → план → моє підтвердження → виконання → перевірка.
- **Перед створенням нових папок верхнього рівня** — питай.
- Після нетривіальних кроків — покажи `git status` / діфф.
- Якщо не впевнений — краще спитай, ніж здогадуйся.
- Мова спілкування зі мною — українська. Код, імена, коментарі, коміти — англійською.
