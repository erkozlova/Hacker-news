# Hacker-news
## Тестовое задание для Авито

Запускается с помощью `npm start` на `localhost:3000`

Проект задеплоен на *gh-pages* по адресу https://erkozlova.github.io/Hacker-news/

## Структура проекта

* `actions` - все action creators
* `components` - переиспользуемые компоненты
* `constants/actionTypes` - типы экшенов
* `pages` - компонеты страниц
* `pages/Search` - страница свежих новостей
* `pages/Item` - страница выбранной новости
* `pages/Search/components` и `pages/Item/components` - хранят компоненты для соответветствующих страниц
* `reducers` - редьюсеры
* `theme` - тема для *Material-ui*
* `utils/api` - API
* `utils/dateFormat` - функция форматирующая дату по заданному формату
* `store` - конфигурация Redux store
* `*/__tests__/*.test.js` - тесты

## Используемые технологии

* React
* React Router
* Redux
* TypeScript
* Jest
* Material-ui
* lodash 
* date-fns