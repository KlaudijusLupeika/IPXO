import { test as base } from "@playwright/test";
import { HomePage, IpLookupPage, IpLookupResultsPage, ManagedByPage, MaintainedByPage } from "../pages";

type Pages = {
  homePage: HomePage;
  ipLookupPage: IpLookupPage;
  ipLookupResultsPage: IpLookupResultsPage;
  managedByPage: ManagedByPage;
  maintainedByPage: MaintainedByPage;
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

  managedByPage: async ({ page }, use) => {
    await use(new ManagedByPage(page));
  },

  maintainedByPage: async ({ page }, use) => {
    await use(new MaintainedByPage(page));
  },
});

export { expect } from "@playwright/test";