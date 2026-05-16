import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the Startup Quest QA assignment.
 *
 * The application under test (SUT) is a hosted web app — there is no local
 * server to start, so `baseURL` points directly at the deployed site.
 *
 * คอนฟิก Playwright สำหรับโจทย์ QA ของ Startup Quest
 * แอปที่ทดสอบเป็นเว็บที่ deploy ไว้แล้ว ไม่ต้องรันเซิร์ฟเวอร์เอง
 * จึงตั้ง baseURL ชี้ไปที่เว็บโดยตรง
 */
export default defineConfig({
  testDir: './tests',
  // Each spec file runs in parallel; tests inside a file run serially by default.
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: 'https://main.startup-simulation.pages.dev',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to broaden coverage once your chromium tests are stable.
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    // { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
