# Как посмотреть сайт в живую

## Быстрый деплой на Vercel (2 минуты)

### Вариант 1: Через GitHub (рекомендуется)

1. **Запушьте код на GitHub** (уже сделано в ветку `claude/review-peptide-site-IMJNJ`)

2. **Зайдите на Vercel:**
   - Откройте https://vercel.com
   - Нажмите "Sign Up" или "Login" через GitHub

3. **Импортируйте проект:**
   - Нажмите "Add New" → "Project"
   - Выберите репозиторий `adalmax-ui/i-peptides`
   - Выберите ветку `claude/review-peptide-site-IMJNJ`

4. **Настройте проект:**
   - Root Directory: `i-peptides-site`
   - Framework Preset: Next.js (автоопределится)
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Environment Variables (опционально для полной функциональности):**
   ```
   # Пока можно пропустить - сайт работает и без них
   # DATABASE_URL - нужна только для БД
   # NEXTAUTH_SECRET - для аутентификации
   # STRIPE_SECRET_KEY - для оплаты
   ```

6. **Деплой:**
   - Нажмите "Deploy"
   - Подождите 2-3 минуты
   - Готово! Получите ссылку типа `your-project.vercel.app`

### Вариант 2: Через Vercel CLI

```bash
# В директории i-peptides
cd i-peptides-site

# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel

# Следуйте инструкциям в терминале
```

## Альтернативные платформы

### Netlify
1. Зайдите на https://netlify.com
2. "Add new site" → "Import an existing project"
3. Выберите GitHub репозиторий
4. Build command: `npm run build`
5. Publish directory: `i-peptides-site/.next`

### Railway
1. https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Выберите репозиторий
4. Railway автоматически определит Next.js

### Render
1. https://render.com
2. "New" → "Web Service"
3. Подключите GitHub репозиторий
4. Build Command: `npm install && npm run build`
5. Start Command: `npm start`

## Локальный просмотр (если есть Docker)

```bash
# Build образа
docker build -t i-peptides .

# Запуск контейнера
docker run -p 3000:3000 i-peptides
```

Затем откройте http://localhost:3000

## Что вы увидите на сайте

### Главная страница
- Приветственный баннер с описанием
- 3 featured товара с изображениями
- 3 featured пептида
- Навигация: Shop, Peptide Database, Guides, Support

### Магазин (/shop)
- Фильтры по категориям
- Сортировка по цене и названию
- Чекбокс "Только в наличии"
- Карточки товаров с ценами

### Корзина (/cart)
- Управление количеством (кнопки +/-)
- Удаление товаров
- Общая сумма
- Кнопка Checkout (требует настроенный Stripe)

### База пептидов (/peptides)
- Карточки с информацией
- Статус исследований
- Алиасы (AKA)
- Ссылки на связанные товары

### Поиск (/search)
- Поиск по товарам и пептидам
- Мгновенные результаты
- Поддержка нескольких терминов

## Проблемы?

Если что-то не работает:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что выбрана правильная директория (`i-peptides-site`)
3. Проверьте, что используется Node.js 18+
4. Откройте issue в репозитории GitHub

---

**Рекомендация:** Начните с Vercel - это самый простой способ!
