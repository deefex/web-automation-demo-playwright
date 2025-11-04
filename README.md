# Web Automation Demo – Playwright + TypeScript

This repository demonstrates modern **end-to-end web automation** using [Playwright](https://playwright.dev/) with **TypeScript**.  
It is designed as a **portfolio showcase** to highlight best practices in test automation, OOP design, and maintainable architecture.

---

## Purpose

The goal of this project is to showcase:

- Automated interaction with **forms, checkboxes, dropdowns, modals, drag-and-drop elements, and tables**
- Handling **login flows**, dynamic elements, and asynchronous content loading
- Robust **Page Object Model (POM)** design with class inheritance and reusable methods
- **TypeScript features** such as async/await, typing, and method overloading
- **Test data abstraction** for clean and maintainable tests
- **Fixtures and modular architecture** for scalable test design
- **Parallel execution** across multiple browsers and workers
- **Integration with GitHub Actions** for CI/CD-like workflow demonstrations

This project is intended to be **self-contained** — anyone can clone the repo and run tests immediately without external credentials.

---

## Current Test Coverage

The following pages and functionalities are automated:

| Page / Feature | Highlights |
|----------------|------------|
| **Login** (`/login`) | Successful & failed login, message validation |
| **A/B Test** (`/abtest`) | Detect A/B variant and opt-out behavior |
| **Broken Images** (`/broken_images`) | Detect images with broken sources |
| **Challenging DOM** (`/challenging_dom`) | Validate presence of buttons, panels, tables, and table structure |
| **Checkboxes** (`/checkboxes`) | Check default states, toggle checkboxes, verify changes |
| **Drag and Drop** (`/drag_and_drop`) | Drag elements between columns and assert new positions |
| **Dropdown** (`/dropdown`) | Select options by value/index, verify default and selected options |
| **Dynamic Content** (`/dynamic_content`) | Verify static content; optional dynamic change testing |
| **Dynamic Controls** (`/dynamic_controls`) | Add/remove checkboxes, wait for messages, assert visibility |
| **Dynamic Loading Example 1** (`/dynamic_loading/1`) | Wait for hidden elements to become visible after click |
| **Dynamic Loading Example 2** (`/dynamic_loading/2`) | Wait for elements to appear in the DOM after click |
| **Exit Intent** (`/exit_intent`) | Trigger modal programmatically and validate visibility |
| **File Upload** (`/upload`) | Upload local files and verify uploaded filenames |

---

## Project Structure

src/
- pages/        # Page Object classes (BasePage, LoginPage, SecurePage, etc.)
- testdata/     # Centralized test data (credentials, inputs)
- fixtures/     # Optional reusable fixtures

e2e/
- *.spec.ts # Test specifications

/
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
- Dynamic and interactive elements: handling of modals, drag-and-drop, hidden elements, and exit-intent triggers

## Learning Points

This repo demonstrates:
- Structuring clean, maintainable test code
- Applying TypeScript features in automation (inheritance, method overloading, typing)
- Managing test data separately from tests
- Handling dynamic elements and asynchronous content
- Building robust, readable, and reusable test suites
- Integrating automated tests into a CI workflow for portfolio demonstration

## References
- [Playwright Documentation](https://playwright.dev/)
- [The Internet - Test Pages](https://the-internet.herokuapp.com/)