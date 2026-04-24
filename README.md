# my_prototype

Локальний workspace для HTML-прототипів. Кожен прототип — окрема тека в `prototypes/<slug>/`.

## Структура

```
my_prototype/
├── index.html              # мінілендинг зі списком прототипів
├── CLAUDE.md               # правила роботи з прототипами
├── README.md               # цей файл
└── prototypes/
    └── sales-agent-v2/     # один прототип = одна тека
        ├── index.html
        ├── styles.css
        ├── app.js
        ├── data.js
        ├── content.md
        └── README.md
```

## Запуск

```bash
open index.html
```

Відкриється мінілендинг — звідти клік на будь-який прототип.

## Стек

- **HTML + CSS + JavaScript** (vanilla)
- **Без фреймворків** (React/Vue/Svelte/Angular)
- **Без білд-системи** — `open index.html` і готово
- Зовнішні бібліотеки — лише через CDN за потреби

## Прототипи

| Slug | Назва | Статус |
|------|-------|--------|
| [sales-agent-v2](prototypes/sales-agent-v2/) | Growth Execution Agent (Snov.io) | Active |

## Як додати новий прототип

1. Скопіюй теку `prototypes/sales-agent-v2/` у нову зі своїм slug (kebab-case)
2. Почисти вміст під свій кейс
3. Додай картку в `index.html` (корінний) і рядок у таблиці цього README
4. Комміт: `feat(<slug>): initial prototype scaffolding`

Детальні правила — у [CLAUDE.md](CLAUDE.md).
