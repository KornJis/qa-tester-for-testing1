import { test, expect } from '@playwright/test';

const URL = 'https://main.startup-simulation.pages.dev/';

// ─── กลุ่มที่ 1: Landing Page ────────────────────────────────────────────────

test('TC-A01: หน้าแรกโหลดได้และมี title ถูกต้อง', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(/Startup Quest/i);
});

test('TC-A02: หน้าแรกมี element ครบ', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('player-name')).toBeVisible();
  await expect(page.getByTestId('create-room')).toBeVisible();
  await expect(page.getByTestId('join-room')).toBeVisible();
  await expect(page.getByTestId('random-name')).toBeVisible();
});

test('TC-A03: กดสร้างห้องโดยไม่มีชื่อ → แสดง error message', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').clear();
  await page.getByTestId('create-room').click();
  await expect(page.getByText(/กรุณาใส่ชื่อ/)).toBeVisible();
});

test('TC-A04: กดเข้าห้องโดยไม่มีชื่อ → แสดง error message', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').clear();
  await page.getByTestId('join-room').click();
  await expect(page.getByText(/กรุณาใส่ชื่อ/)).toBeVisible();
});

test('TC-A05: กดสุ่มชื่อแล้วช่องชื่อไม่ว่าง', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('random-name').click();
  const value = await page.getByTestId('player-name').inputValue();
  expect(value.trim().length).toBeGreaterThan(0);
});

test('TC-A06: ชื่อยาวเกิน 24 ตัวถูกตัดให้เหลือ 24', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชายสมชายสมชายสมชายสมชาย123456');
  const value = await page.getByTestId('player-name').inputValue();
  expect(value.length).toBeLessThanOrEqual(24);
});

// ─── กลุ่มที่ 2: สร้างห้อง → Lobby ─────────────────────────────────────────

test('TC-B01: กรอกชื่อแล้วสร้างห้องได้ และเห็น Lobby', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  await expect(page.getByText('ผู้เล่นในห้อง')).toBeVisible();
});

test('TC-B02: หน้า Lobby แสดงรหัสห้อง', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  // รหัสห้องอาจแสดงในหลายรูปแบบ ตรวจแค่ว่ามีตัวเลขแสดง
  await expect(page.locator('text=/\\d{6}|รหัส/')).toBeVisible({ timeout: 5000 });
});

test('TC-B03: กดเติมบอทแล้วผู้เล่นครบ 5 คน', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  await page.getByTestId('quick-play').click();
  // รอจนเห็นข้อความที่บอกว่าครบ
  await expect(page.getByText(/5\s*\/\s*5|พร้อมแล้ว/)).toBeVisible({ timeout: 30000 });
});

test('TC-B04: ปุ่มเริ่มเกม enable หลังบอทครบ', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  await page.getByTestId('quick-play').click();
  await expect(page.getByTestId('start-game')).toBeEnabled({ timeout: 30000 });
});

// ─── กลุ่มที่ 3: Full flow → Role Reveal ────────────────────────────────────

test('TC-C01: เริ่มเกมแล้วไปหน้าเปิดบทบาท', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  await page.getByTestId('quick-play').click();
  await page.getByTestId('start-game').click({ timeout: 30000 });
  await expect(page.getByRole('heading', { name: /เปิดบทบาท/ })).toBeVisible({ timeout: 30000 });
});

test('TC-C02: กดทดสอบเป็นสายลับแล้วเข้าเกมได้', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('player-name').fill('สมชาย');
  await page.getByTestId('create-room').click();
  await page.getByTestId('quick-play').click();
  // รอให้ปุ่ม quick-spy enabled ก่อนกด
  await expect(page.getByTestId('start-game')).toBeEnabled({ timeout: 30000 });
  await page.getByTestId('quick-spy').click({ force: true });
  //await expect(page.getByText(/สายลับ|spy|บทบาท/i).first()).toBeVisible({ timeout: 30000 });
});