import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IpLookupResultsPage extends BasePage {
  private readonly managedByLink: Locator;
  private readonly maintainedByLink: Locator;

  constructor(page: Page) {
    super(page);

    this.managedByLink = this.getRowLink("managed-by");
    this.maintainedByLink = this.getRowLink("maintained-by");
  }

  private getRowLink(fieldName: string): Locator {
    return this.page.locator(".item-row").filter({ hasText: fieldName }).locator("a");
  }

  async openManagedByPage() {
    await this.managedByLink.click();
  }

  async openMaintainedByPage() {
    await this.maintainedByLink.click();
  }

  async isManagedByVisible() {
    return await this.managedByLink.isVisible();
  }

  async isMaintainedByVisible() {
    return await this.maintainedByLink.isVisible();
  }
}