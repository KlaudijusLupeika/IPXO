import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["html", { open: "never" }],
  ],
  use: {
    baseURL: "https://ipxo.com",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: false,
    viewport: {
      width: 1440,
      height: 1080,
    },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    launchOptions: {
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    },
  },
  
  projects: [
    {
      name: "chrome",
      use: {
        locale: "en-US",
        timezoneId: "Europe/Vilnius",
        channel: "chrome",
        headless: false,
        viewport: {
          width: 1440,
          height: 1080,
        },
      },
    },

    //For mobile run uncomment

    // {
    //   name: "mobile-chrome",
    //   use: {
    //     ...devices["Pixel 7"],
    //   },
    // },
  ],
});