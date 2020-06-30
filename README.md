# react-i18n

An tiny, I18N library for React JS. It makes use of the `Context API` to support a hierarchy of language bundles (each of which can be loaded on demand) and the native `Intl` package to provide some formatting utilities for common things like dates and currencies. You can include anything else as and when you need it.

### Install

`npm i @mpkelly/react-i18n`

### Demos

TODO

### Features

- [x] Tiny bundle size - ???kb gzipped
- [x] Clean code. No special components that take over your code base.
- [x] Hierarchical with support for dynamic imports with code splitting
- [x] Extensible/customizable Markdown support: converts text values into `ReactNode` array.
- [x] Supports dates, currencies and pluralization via native `Intl` package
- [x] Extend your design system components easily using `withI18N()` HOC.
- [x] Includes React hook `useI18N`.
- [ ] Docs
- [ ] Tests

I wrote this for [Journal](https://github.com/mpkelly/Journal), another side-project of mine, and didn't need to drop a precise locations but may add this in future.

### Quick Start

```TypeScript

```

### API