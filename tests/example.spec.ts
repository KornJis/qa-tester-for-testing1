import { test, expect } from '@playwright/test';

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EXAMPLE / STARTER TEST  —  ตัวอย่างสำหรับเริ่มต้น
 * ─────────────────────────────────────────────────────────────────────────
 *  This single test is provided ONLY so you can confirm your environment
 *  works (`npm install` + `npx playwright install` + `npm test`).
 *
 *  It is NOT part of the deliverable. Once you have confirmed it passes,
 *  delete this file (or replace it) and write your own tests under `tests/`.
 *
 *  เทสต์ตัวอย่างนี้มีไว้เพื่อให้คุณยืนยันว่าติดตั้งสภาพแวดล้อมสำเร็จเท่านั้น
 *  ไม่นับเป็นส่วนหนึ่งของงานที่ต้องส่ง — เมื่อรันผ่านแล้วให้ลบหรือเขียนทับ
 *  แล้วเขียนเทสต์ของคุณเองในโฟลเดอร์ tests/
 * ─────────────────────────────────────────────────────────────────────────
 */
test('smoke: landing page loads with the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/StartUp Quest/i);
  await expect(
    page.getByRole('heading', { name: /Startup Quest/i }).first(),
  ).toBeVisible();
});
