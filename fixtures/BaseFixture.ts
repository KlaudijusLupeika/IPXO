import { test as base } from "@playwright/test";
import { HomePage, IpLookupPage, IpLookupResultsPage } from "../pages";

type Pages = {
  homePage: HomePage;
  ipLookupPage: IpLookupPage;
  ipLookupResultsPage: IpLookupResultsPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  ipLookupPage: async ({ page }, use) => {
    await use(new IpLookupPage(page));
  },

  ipLookupResultsPage: async ({ page }, use) => {
    await use(new IpLookupResultsPage(page));
  },
});

export { expect } from "@playwright/test";