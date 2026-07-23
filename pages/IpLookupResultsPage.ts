import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IpLookupResultsPage extends BasePage {
  private readonly managedByLink: Locator;
  private readonly maintainedByLink: Locator;
  private readonly headlineText: Locator;

  constructor(page: Page) {
    super(page);

    this.managedByLink = this.getRowLink("managed-by");
    this.maintainedByLink = this.getRowLink("maintained-by");
    this.headlineText = this.page.getByRole("heading", { level: 1 });
  }

  private getRowLink(fieldName: string): Locator {
    return this.page.locator(".item-row").filter({ hasText: fieldName }).locator("a");
  }

  async openManagedByPage() {
    await this.managedByLink.click();
    await this.waitForPageLoaded();
  }

  async openMaintainedByPage() {
    await this.maintainedByLink.click();
    await this.waitForPageLoaded();
  }

  async isManagedByRowVisible() {
    return await this.managedByLink.isVisible();
  }

  async isMaintainedByRowVisible() {
    return await this.maintainedByLink.isVisible();
  }

  async getHeadlineText() {
    return await this.headlineText.textContent();
  }

  async getRowLinkText(fieldName: string) {
    const rowLink = this.getRowLink(fieldName);
    return await rowLink.textContent();
  }
}