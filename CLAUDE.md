# my_prototype — Sales Agent Prototype

Single-file HTML-прототип AI sales-агента для швидкої ітерації над UX та логікою.

## Стек

- Чистий **HTML + CSS + JavaScript** в одному файлі `index.html`.
- **Без фреймворків** (React, Vue, Svelte, Angular — не використовувати).
- Без білд-системи, без `npm install`. Зовнішні бібліотеки — лише через CDN за потреби.

## Структура

- `index.html` — весь прототип: розмітка, стилі (inline `<style>`), логіка (inline `<script>`).
- Інші файли створюй, тільки якщо один файл стає нечитабельним. Перед цим — спитай.

## Git

- Це окремий git-репозиторій, гілка `main`.
- Коміти **англійською**, формат: `feat: ...`, `fix: ...`, `refactor: ...`, `docs: ...`.
- `git push` — тільки з мого явного дозволу.
- Не комітити `.DS_Store`, `.env`, `node_modules/` (перевір `.gitignore`).
