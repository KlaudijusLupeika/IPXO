import { test, expect } from "../fixtures/BaseFixture";
import { TEST_DATA } from "../utils/testData";

test.beforeEach(async ({ homePage }) => {
  test.step("Open the home page and navigate to the IP Lookup page", async () => {
    await homePage.open();
    await homePage.navigateToIpLookup();
  });
});

test("should allow user to lookup IP information", async ({ ipLookupPage, ipLookupResultsPage }) => {
  test.step("Search for a valid IP address and verify results", async () => {
    await ipLookupPage.searchIp(TEST_DATA.validIp);
    await ipLookupResultsPage.waitForPageLoaded();

    expect(await ipLookupResultsPage.isManagedByVisible()).toBeTruthy();
    expect(await ipLookupResultsPage.isMaintainedByVisible()).toBeTruthy();
  });
});

test("should not allow user to lookup invalid IP address", async ({ ipLookupPage }) => {
  await ipLookupPage.searchIp(TEST_DATA.invalidIp);
  await ipLookupPage.expectErrorMessage(TEST_DATA.errorMessages.invalidIpInput);
});