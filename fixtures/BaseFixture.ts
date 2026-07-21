import { test as base } from "@playwright/test";
import { HomePage, IpLookupPage } from "../pages";

type Pages = {
  homePage: HomePage;
  ipLookupPage: IpLookupPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  ipLookupPage: async ({ page }, use) => {
    await use(new IpLookupPage(page));
  },
});

export { expect } from "@playwright/test";