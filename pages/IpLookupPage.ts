import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IpLookupPage extends BasePage {
  private readonly searchInput;
  private readonly searchButton;

  constructor(page: Page) {
    super(page);

    this.searchInput = this.page.locator('#search-field');
    this.searchButton = this.page.getByRole("link", { name: "Search" });
  }

  async searchIp(ip: string) {
    await this.searchInput.fill(ip);
    await this.searchButton.click();
  }
}