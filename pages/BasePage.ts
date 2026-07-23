import { Page, Locator } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  private readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = this.page.getByRole("button", { name: "Accept All" });
  }

  async acceptCookies() {
    try {
      await this.acceptCookiesButton.waitFor({ state: "visible", timeout: 10_000 });
      await this.acceptCookiesButton.click();
      console.log("Cookies accepted");
    } catch {
      console.log("Cookies overlay not present");
    }
  }

  async waitForPageLoaded() {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async goBack() {
    await this.page.goBack();
    await this.waitForPageLoaded();
  }
}
