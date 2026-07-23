import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private readonly headerNavigation;
  private readonly resourcesLink;
  private readonly ipLookupLink;

  constructor(page: Page) {
    super(page);

    this.headerNavigation = this.page.getByRole("navigation");
    this.resourcesLink = this.headerNavigation.getByRole("button", { name: "Resources" });
    this.ipLookupLink = this.headerNavigation.getByRole("link", { name: "IP Lookup" });
  }

  async open() {
    await this.page.goto("/", { waitUntil: "domcontentloaded" });
    await this.acceptCookies();
    await this.waitForPageLoaded();
  }

  async navigateToIpLookup() {
    await this.resourcesLink.click();
    await this.ipLookupLink.click();
    await this.waitForPageLoaded();
  }
}