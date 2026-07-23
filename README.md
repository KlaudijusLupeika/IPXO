# IPXO Assignment

## 1. Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm

## 2. Install dependencies

From the project root, run:

```bash
npm install
npx playwright install 
```

The second command installs the browsers required by Playwright.

## 3. Run the tests

### Run all tests

```bash
npm test
```

### Run a specific test file

```bash
npx playwright test tests/ipLookup.spec.ts
```

### Run tests in headed mode and sequentially

```bash
npx playwright test tests/ipLookup.spec.ts --headed --workers=1
```

## 4. See test results

### HTML report

After a test run, open the HTML report with:

```bash
npm run report
```

The report is also generated in the folder:

```bash
playwright-report/
```

### Raw test output

Detailed test artifacts are stored in:

```bash
test-results/
```

These files include screenshots, traces, and videos for failed tests.

## 5. Debug tests

### Debug in interactive UI mode

```bash
npm run test:ui
```

### Useful debugging options

- `--debug` to pause and inspect the test run
- `--headed` to see the browser during execution
- `--workers=1` to run tests one at a time for easier debugging
- `--project=chrome` to run only the Chrome project

Example:

```bash
npx playwright test tests/ipLookup.spec.ts --debug --headed --workers=1
```

## 6. Project structure

```
fixtures/        - Reusable test fixtures
pages/           - Page Object Model files
tests/           - Test specs
utils/           - Helper data and utilities
playwright.config.ts - Playwright configuration
```

## 7. Common commands summary

```bash
npm install
npx playwright install
npm test
npm run test:ui
npm run report
npm run lint
npm run lint:fix
```