import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ManagedByPage extends BasePage {
  private readonly organisationValue;

  constructor(page: Page) {
    super(page);

    this.organisationValue = this.page.locator(".item-row").filter({ hasText: "Organisation" }).locator(".item-value");
  }

  async getOrganisationRowValue() {
    return await this.organisationValue.textContent();
  }
}
