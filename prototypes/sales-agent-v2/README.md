# Sales Agent v2 — Growth Execution Agent

Прототип AI sales-агента для Snov.io. Демонструє концепцію **L0–L3 context layers** як спосіб мислити про те, що агент знає, чого хоче користувач, як виконувати завдання та якими інструментами.

## Концепція

| Layer | Що це | Приклад |
|-------|-------|---------|
| **L0** | Global context — хто я, що продаю, яка команда | Snov.io · B2B SaaS · outbound SDR |
| **L1** | Intent — що саме хочу зробити зараз | Outbound campaign · SaaS VP Sales · US/CA/UK · 50 prospects |
| **L2** | Task strategy — як виконувати | Find → Verify → Write · 5-step sequence · 50/day |
| **L3** | Tools — які інструменти викликати (приховано від юзера) | Prospect Finder · Email Verifier · AI Content Engine |

L3 обирається автоматично на основі L0–L2.

## Флоу (8 екранів)

1. **s0 Home** — hero + великий intent-CTA + recent projects
2. **s1 Memory** — ChatGPT prompt → paste → live-parsing у L0–L3
3. **s2 Intent** — goal textarea + 5 template chips
4. **s3 Q&A** — чат з агентом (4 питання) + sticky context panel
5. **s4 Plan** — 5 tasks + architecture panel
6. **s5 Processing** — spinner + 5 етапів
7. **s6 Results** — KPI + tabs (Prospects / Enriched / Campaign / Memory)
8. **s7 Statistics** — dashboard активних кампаній

## Файли

- `index.html` — розмітка, 8 екранів з `.screen.active` роутером
- `styles.css` — design tokens Snov.io + компоненти
- `app.js` — логіка (routing, parseMemory, Q&A, processing, tabs, toast)
- `data.js` — demo-дані (`prospects`, `enriched`)
- `content.md` — single source of truth для всіх текстів

## Запуск

```bash
open index.html
```

Або drag-and-drop у браузер. Без білд-системи, без залежностей.

## Як редагувати

- **Тексти** → правиш `content.md`, потім синхронізуєш у `index.html` / `app.js`
- **Стилі** → тільки `styles.css`, токени зверху
- **Логіка** → `app.js`, demo-дані окремо в `data.js`
- **Нові екрани** → додаєш `<div class="screen" id="sN">…</div>` + запис у `breadcrumbs` у `app.js`
