# Web Automation Demo – Playwright + TypeScript

This repository demonstrates modern **end-to-end web automation** using [Playwright](https://playwright.dev/) with **TypeScript**.  
It is designed as a **portfolio showcase** to highlight best practices in test automation, OOP design, and maintainable architecture.

---

## Purpose

The goal of this project is to showcase:

- Automated interaction with **challenging DOMs** (forms, checkboxes, dropdowns)  
- Handling **login flows**, dynamic elements, and page navigation  
- **Page Object Model (POM)** with class inheritance for clean, reusable code  
- Use of **TypeScript features** like async/await, optional typing, and method overloading  
- **Test data abstraction** for cleaner tests  
- Fixtures and modular architecture for scalable tests  
- **Parallel execution** across multiple browsers  
- Integration with **GitHub Actions** for CI/CD-like pipeline demonstration  

This project is intended to be **self-contained** — anyone can clone the repo and run tests immediately without external credentials.

---

## Project Structure

src/
- pages/        # Page Object classes (BasePage, LoginPage, SecurePage, etc.)
- testdata/     # Centralized test data (credentials, inputs)
- fixtures/     # Optional reusable fixtures

e2e/
- .github/workflows # GitHub Actions CI workflow
- playwright.config.ts
- tsconfig.json
- README.md

## Running the Tests

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npx playwright test
```

### View reports
```bash
npx playwright show-report
```

## Featured Highlights
- Page Object Models: BasePage + LoginPage + SecurePage
- Reusable test data: centralized in src/testdata/credentials.ts
- Assertions: built-in Playwright assertions (expect)
- Async-safe methods: all actions are properly awaited
- CI Integration: GitHub Actions workflow runs tests across Chromium, Firefox, and WebKit
- Parallel execution: configured via Playwright projects
- Environment-aware configuration: base URLs and other settings can be customized with .env

## Learning Points

This repo demonstrates:
- How to structure clean, maintainable test code
- Applying TypeScript features in automation (inheritance, method overloading, typing)
- Managing test data separately from tests
- Building tests that are readable, reusable, and robust
- Integrating automated tests into a CI workflow even for a standalone demo

## References
- [Playwright Documentation](https://playwright.dev/)
- [The Internet - Test Pages](https://the-internet.herokuapp.com/) 