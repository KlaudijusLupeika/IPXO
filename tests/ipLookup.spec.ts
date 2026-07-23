import { test, expect } from "../fixtures/BaseFixture";
import { TEST_DATA } from "../utils/testData";

test.beforeEach(async ({ homePage }) => {
  test.step("Open the home page and navigate to the IP Lookup page", async () => {
    await homePage.open();
    await homePage.navigateToIpLookup();
  });
});

test("should allow user to lookup IP information", async ({ ipLookupPage, ipLookupResultsPage, managedByPage, maintainedByPage }) => {
  await test.step("Search for a valid IP address and verify results", async () => {
    await ipLookupPage.searchIp(TEST_DATA.validIp);
    await ipLookupResultsPage.waitForPageLoaded();

    expect(await ipLookupResultsPage.isManagedByRowVisible()).toBeTruthy();
    expect(await ipLookupResultsPage.isMaintainedByRowVisible()).toBeTruthy();
    expect(await ipLookupResultsPage.getHeadlineText()).toContain(TEST_DATA.validIp);
  });

  await test.step("Open the 'Managed By' page and verify page content", async () => {
    const linkText = await ipLookupResultsPage.getRowLinkText("managed-by");
    
    await ipLookupResultsPage.openManagedByPage();

    expect(await managedByPage.getOrganisationRowValue()).toContain(linkText);
  });

  await test.step("Open the 'Maintained By' page and verify page content", async () => {
    await managedByPage.goBack();

    const linkText = await ipLookupResultsPage.getRowLinkText("maintained-by");

    await ipLookupResultsPage.openMaintainedByPage();

    expect(await maintainedByPage.getHeadlineText()).toContain(linkText);
  });
});

test("should not allow user to lookup invalid IP address", async ({ ipLookupPage }) => {
  await ipLookupPage.searchIp(TEST_DATA.invalidIp);
  await ipLookupPage.expectErrorMessage(TEST_DATA.errorMessages.invalidIpInput);
});
