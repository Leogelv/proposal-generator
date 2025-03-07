# Генератор коммерческих предложений

Современный, стильный генератор коммерческих предложений с адаптивным дизайном и анимациями.

## Особенности

- 🎨 Современный дизайн с глассморфизмом и градиентами
- 📱 Полностью адаптивный интерфейс для всех устройств
- ✨ Плавные анимации и интерактивные элементы
- 🔤 Премиальная типографика (Inter + Unbounded)
- 📊 Стильное представление данных

## Структура проекта

- `index.html` - HTML-структура коммерческого предложения
- `styles.css` - Стили и визуальное оформление
- `script.js` - Интерактивность и анимации
- `proposal.md` - Исходный контент в формате Markdown
- `proposal-pipeline.md` - Пайплайн для генерации предложений
- `server.js` - Простой сервер для локального просмотра

## Как использовать

1. Установите зависимости: `npm install`
2. Запустите локальный сервер: `npm start`
3. Откройте в браузере: `http://localhost:3000`

## Кастомизация

### Изменение цветовой схемы

Для изменения цветовой схемы отредактируйте CSS-переменные в начале файла `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%);
    --secondary-gradient: linear-gradient(135deg, #3B82F6 0%, #10B981 100%);
    --dark-bg: #0F172A;
    --card-bg: rgba(30, 41, 59, 0.7);
    --glass-bg: rgba(15, 23, 42, 0.6);
    --text-primary: #F8FAFC;
    --text-secondary: #CBD5E1;
    --accent-color: #8B5CF6;
    --success-color: #10B981;
}
```

### Добавление новых решений

Для добавления нового решения скопируйте блок с классом `solution-card` и измените его содержимое:

```html
<div class="solution-card">
    <div class="solution-number">XX</div>
    <div class="solution-content">
        <h3>Название решения</h3>
        <div class="solution-icon">🔍</div>
        <div class="solution-description">
            <p>Описание решения.</p>
            <div class="solution-benefits">
                <div class="benefit-title">🚀 Преимущества:</div>
                <ul>
                    <li>Преимущество 1</li>
                    <li>Преимущество 2</li>
                    <li>Преимущество 3</li>
                </ul>
            </div>
        </div>
        <div class="solution-meta">
            <div class="solution-price">💰 XXX XXX ₽</div>
            <div class="solution-time">⏳ X недели</div>
        </div>
    </div>
</div>
```

## Требования

- Node.js для запуска локального сервера
- Современный браузер с поддержкой CSS Grid, Flexbox и CSS Variables
- Для корректного отображения анимаций рекомендуется использовать Chrome, Firefox или Safari последних версий

## Лицензия

MIT 