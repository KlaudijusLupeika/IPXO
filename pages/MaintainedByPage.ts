import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MaintainedByPage extends BasePage {
  private readonly headlineText;

  constructor(page: Page) {
    super(page);

    this.headlineText = this.page.getByRole("heading", { level: 1 });
  }

  async getHeadlineText() {
    const headlineText = await this.headlineText.textContent();
    return headlineText?.toLowerCase();
  }
}
