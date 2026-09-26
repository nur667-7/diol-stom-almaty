# 🦷 Diol Stom (Алматы) — Веб-сайт клиники с 24/7 AI-Координатором ночных лидов

<p align="center">
  <img src="site/assets/diol-stom-official-logo.png" alt="Diol Stom Logo" width="360">
</p>

<p align="center">
  <b>Современный адаптивный веб-сайт и 24/7 AI-Координатор ночных лидов для стоматологической клиники «Diol Stom» (г. Алматы).</b><br>
  Заботимся о Вашей улыбке с 1997 года • Рейтинг 2ГИС: <b>5.0 ★ (800+ отзывов)</b>
</p>

<p align="center">
  <a href="https://diol-stom-almaty.autumn-neighborhood.workers.dev/"><img src="https://img.shields.io/badge/Demo-Cloudflare%20Edge-f38020?style=for-the-badge&logo=cloudflare" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/AI-24%2F7%20Night%20Coordinator-8A2BE2?style=for-the-badge&logo=openai" alt="AI Coordinator">
  <img src="https://img.shields.io/badge/OpenRouter-Multi--Model%20Fallback-0052FF?style=for-the-badge" alt="OpenRouter">
  <img src="https://img.shields.io/badge/UI-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Kaspi-0--0--12%20%2F%200--0--24-f14635?style=for-the-badge" alt="Kaspi Installment">
</p>

---

## 🌐 Рабочий сайт онлайн
Сайт развернут на Edge-инфраструктуре Cloudflare Workers:  
🔗 **[https://diol-stom-almaty.autumn-neighborhood.workers.dev](https://diol-stom-almaty.autumn-neighborhood.workers.dev)**

---

## 🤖 24/7 AI-Координатор ночных лидов

Главная боль стоматологий Алматы — **до 60% заявок приходят вечером и ночью** (острая зубная боль, выпавшая пломба, поиск имплантации). Администраторы спят, и пациент уходит в круглосуточную или к конкурентам в 2ГИС.

В проект интегрирован **автономный интеллектуальный координатор (`diol-ai-widget.js`)**:

### 🛡 Отказоустойчивый пайплайн (100% Uptime):
1. **Основной контур:** Запрос в LLM через OpenRouter (`temperature = 0` для полного исключения медицинских галлюцинаций).
2. **Многоуровневый Fallback:** При сетевой задержке или 429 Rate Limit система мгновенно переключается на встроенный локальный медицинский движок (`diol-ai-knowledge.js`).
3. **Строгая база знаний Diol Stom:**
   - 12 докторов клиники с реальным стажем (Хасенова Б.Д. — 45 лет, Касенов Д.М. — 15 лет в ЧЛХ, Подольная и Зоточкина — 30+ лет).
   - Точные расценки 70+ процедур (импланты DIO 135 000 ₸, Bredent 200 000 ₸, Straumann от 400 000 ₸).
   - Расчет честной рассрочки Kaspi 0-0-12 без переплат.
   - Экстренный медицинский триаж: при острой боли или отеке щеки (флюс) ИИ категорически предостерегает от прогревания и направляет к челюстно-лицевому хирургу.
4. **Захват лида в WhatsApp:** Прямо в окне чата пациент вводит номер и в 1 клик отправляет структурированную заявку со своими симптомами дежурному администратору в WhatsApp (`+77770337068`).

---

## 📁 Структура страниц сайта

| Страница | Описание |
| :--- | :--- |
| **`index.html`** | Главная: фирменный хедер `#27348b`, логотип Diol Stom с красной улыбкой, 2-колоночный Hero-блок, слайдер кабинетов, виджет AI-координатора. |
| **`services.html`** | Каталог всех направлений: Имплантация, 3D КТ Morita Accuitomo (до 80 мкм), Ортопедия, Брекеты Damon, Терапия, Гнатология и собственный ЛОР-кабинет. |
| **`doctors.html`** | 12 сертифицированных врачей клиники с фотографиями, опытом работы и кнопками записи к специалисту. |
| **`prices.html`** | Интерактивный прайс на 70+ процедур с живым поиском и переключением категорий. |
| **`calculator.html`** | Калькулятор рассрочки Kaspi (0-0-12 / 0-0-24) с реальными пакетами услуг. |
| **`contacts.html`** | ул. Тимирязева, 87 (уг. ул. Жарокова), схема парковки, график работы и прямая ссылка на 2ГИС. |

---

## 🛠 Технический стек

- **HTML5 & Semantic Markup**
- **Tailwind CSS (JIT)** — фирменная цветовая гамма (`#27348b`, `#ea2127`, `#f14635`).
- **Alpine.js** — реактивное состояние (AI-чат, калькулятор Kaspi, фильтрация прайс-листа).
- **Lucide Icons** — современный набор векторных иконок.
- **OpenRouter API & Fallback Pipeline** — интеграция передовых языковых моделей без галлюцинаций.
- **Wrangler / Cloudflare Workers** — сверхбыстрый Edge-деплой с временем отклика < 50 мс.

---

## 🚀 Запуск и деплой

### 1. Локальный запуск
```bash
# Python
python -m http.server 8000 --directory site

# Node.js
npx serve site
```
Открыть в браузере: `http://localhost:8000`

### 2. Деплой на Cloudflare Workers
```bash
npx wrangler deploy --name diol-stom-almaty site
```

---

## 📞 Контакты клиники Diol Stom
- **Адрес:** г. Алматы, ул. Тимирязева, 87 (уг. ул. Жарокова)
- **Телефон:** +7 (777) 033-70-68
- **2ГИС:** [go.2gis.com/Iq8FQ](https://go.2gis.com/Iq8FQ) (Рейтинг 5.0 ★)
- **График работы:** Пн–Сб: 09:00 – 19:00, Вс: выходной (дежурный онлайн-прием через AI-координатора)

---
<p align="center">Разработано специально для клиники Diol Stom (Алматы)</p>
