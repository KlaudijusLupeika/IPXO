import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private readonly headerNavigation;
  private readonly resourcesLink;
  private readonly ipLookupLink;

  constructor(page: Page) {
    super(page);
    this.headerNavigation = this.page.getByRole("navigation");
    this.resourcesLink = this.headerNavigation.getByRole("link", { name: "Resources" });
    this.ipLookupLink = this.headerNavigation.getByRole("link", { name: "IP Lookup" });
  }

  async open() {
    await this.page.goto("/");
  }

  async navigateToIpLookup() {
    await this.resourcesLink.hover();
    await this.ipLookupLink.click();
  }
}