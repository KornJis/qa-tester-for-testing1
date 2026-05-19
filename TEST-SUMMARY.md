# TEST-SUMMARY.md
**Tester:** Korn  
**Date:** 2026-05-18 - 2026-05-19  
**App:** Startup Quest — https://main.startup-simulation.pages.dev/  
**Browser:** Chromium (via Playwright)

---

## แนวทางการทดสอบ

ทดสอบแบบ solo โดยใช้ฟีเจอร์ "เติมบอทให้ครบ" เพื่อจำลองผู้เล่นหลายคน ครอบคลุมทั้ง manual testing และ automated testing ด้วย Playwright

**Flow หลักที่ทดสอบ:**
```
เปิดแอป → กรอกชื่อ → สร้างห้อง → เติมบอท → เริ่มเกม → เปิดบทบาท → เล่นจนจบ
```

---

## ผลการทดสอบ

### Manual Tests
| Area | จำนวนเคส | ผล |
|------|---------|-----|
| Landing / entry | 11 | ✅ ผ่านทั้งหมด |
| Lobby & host controls | 7 | ✅ ผ่านทั้งหมด |
| Role reveal | 2 | ✅ ผ่านทั้งหมด |
| Event / voting loop | 6 | ✅ ผ่านทั้งหมด |
| End game | 1 | ✅ ผ่านทั้งหมด |
| Cross-cutting (theme, sound, responsive) | 3 | ✅ ผ่านทั้งหมด |
| **รวม** | 30 เคส | ✅ 30/30 ผ่าน |

### Automated Tests (Playwright)
| กลุ่ม | จำนวนเทสต์ | ผล |
|-------|----------|-----|
| Landing page | 6 | ✅ 6/6 |
| สร้างห้อง → Lobby | 4 | ✅ 3/4 |
| Full flow → Role Reveal | 2 | ✅ 2/2 |
| Smoke test (example) | 1 | ✅ 1/1 |
| **รวม** | **13 เทสต์** | **✅ 12/13 ผ่าน** |
เพราะว่าผมอาจจะมีแก้โค้ดไม่ถูกเลยไม่ผ่าน1 อย่าง คือหัวข้อ TC-B02
---

## Bug Reports

ไม่พบ bug ในการทดสอบครั้งนี้

**หมายเหตุ:** ปุ่ม "สร้างห้อง" และ "เข้าห้อง" ไม่ได้ถูก disable เมื่อไม่มีชื่อ แต่แสดง error message แทน ซึ่งถือเป็น UX ที่ถูกต้อง

---

## สิ่งที่ครอบคลุม

- ✅ หน้าแรก — validation ชื่อ, รหัสห้อง, ปุ่มทุกปุ่ม
- ✅ การสร้างและเข้าห้อง
- ✅ Lobby — host controls, เติมบอท, เริ่มเกม
- ✅ Role reveal
- ✅ Event / voting loop — โหวต, แชท, timer, survival meter
- ✅ End game
- ✅ Theme toggle, sound toggle, responsive (mobile viewport)

## สิ่งที่ยังไม่ได้ครอบคลุม

- ❌ Multi-browser (Firefox, Safari) — ทดสอบแค่ Chromium
- ❌ Multi-client จริง — ใช้บอทแทนผู้เล่นจริงหลายคน
- ❌ Network error / offline scenario

ทั้งนี้automateนี้เกิดขึ้นเพราะผมใช้Ai เป็นส่วนใหญ่ในการเขียนขึ้นมาเพราะผมนั้นยังศึกษาไม่ถีงขั้นที่จะสามารถเขียนขึ้นมาเองได้แต่ผมได้เรียนรู้การเขียนและการเขียนTest case แบบ manual 