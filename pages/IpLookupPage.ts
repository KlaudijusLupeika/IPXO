import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IpLookupPage extends BasePage {
  private readonly searchInput;
  private readonly searchButton;
  private readonly errorMessage;

  constructor(page: Page) {
    super(page);

    this.searchInput = this.page.locator('#search-field');
    this.searchButton = this.page.getByRole("link", { name: "Search" });
    this.errorMessage = this.page.locator('.error');
  }

  async searchIp(ip: string) {
    await this.searchInput.fill(ip);
    await this.searchButton.click();
  }

  async expectErrorMessage(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}