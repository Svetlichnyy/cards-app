# React card application

![](./public/images/neonR%26M.png)

## Требования к функциональности

### React

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты. [cardSummary](./src/components/cardSummary/), [search](./src/components/search/)
- Есть рендеринг списков [Main](./src/pages/Main.tsx), [Favorite](./src/pages/Favorite.tsx),[History](./src/pages/History.tsx)
- Реализована хотя бы одна форма [AuthorizationForm](./src/components/auth/AuthorizationForm.tsx)
- Есть применение Контекст API [ThemeProvider](./src/features/ThemeProvider.tsx) , [useTheme](./src/hooks/useTheme.ts)
- Есть применение предохранителя [ErrorBoundary](./src/components/errorBoundary/ErrorBoundary.tsx)
- Есть хотя бы один кастомный хук [Hooks](./src/hooks/)
- Хотя бы несколько компонентов используют PropTypes [ThemeLayout](./src/components/layout/ThemeLayout.tsx), [ThemeProvider](./src/features/ThemeProvider.tsx), [ErrorBoundary](./src/components/errorBoundary/ErrorBoundary.tsx)
- Поиск не должен триггерить много запросов к серверу: реализовано с помощью библиотеки react-debounce-input в компоненте [SearchBarComponent](./src/components/search/SearchBarComponent.tsx)
- Есть применение lazy + Suspense: [App](./src/App.tsx)

### Redux

- Используем Modern Redux with Redux Toolkit: [store](./src/store/store.ts)
- Используем слайсы [userSlice](./src/store/reducers/userSlice.ts)
- Есть хотя бы одна кастомная мидлвара [LocalStorageMiddleware](./src/middlewares/localStorageMiddleware.ts)
- Используется RTK Query [personService](./src/services/personService.ts)
- Используется Transforming Responses [personService](./src/services/personService.ts)

### Необязательно

- Использован Typescript
