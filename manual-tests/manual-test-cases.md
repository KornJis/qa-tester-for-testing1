# Manual Test Cases — Startup Quest
**Tester:** [Korn]
**Date:** [2026-05-18 - 2026-05-19]
**App URL:** https://main.startup-simulation.pages.dev/
**Browser:** [เช่น Chrome 124, Safari 17]

---

## TC-001

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | สร้างห้องด้วยชื่อผู้เล่นที่ถูกต้อง |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | เปิดแอปใหม่ (fresh page load) ยังไม่ได้กรอกอะไร |
| **Steps** | 1. เปิด https://main.startup-simulation.pages.dev/ <br>2. กรอกชื่อ "สมชาย" ในช่อง player-name <br>3. กดปุ่ม "สร้างห้อง" |
| **Test Data** | name = "สมชาย" |
| **Expected Result** | ระบบสร้างห้องสำเร็จ และแสดงหน้า Lobby พร้อมรหัสห้อง 6 หลัก และแสดงชื่อ "สมชาย" ในรายชื่อผู้เล่น |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-002

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | ไม่กรอกชื่อผู้เล่นแล้วกดสร้างห้อง |
| **Priority** | P1 |
| **Type** | Negative / Validation |
| **Preconditions** | เปิดแอปใหม่ ช่องชื่อว่างเปล่า |
| **Steps** | 1. เปิดแอป <br>2. ไม่กรอกชื่อ (ปล่อยว่าง) <br>3. กดปุ่ม "สร้างห้อง" |
| **Test Data** | name = "" |
| **Expected Result** | ระบบไม่อนุญาตให้สร้างห้อง และแสดง error message |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-003

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | กรอกชื่อผู้เล่นที่ยาวเกิน 24 ตัวอักษร |
| **Priority** | P2 |
| **Type** | Validation |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอกชื่อยาว 30 ตัวอักษร เช่น "สมชายสมชายสมชายสมชายสมชาย123456" ในช่อง player-name <br>3. สังเกตว่าช่องรับได้กี่ตัว |
| **Test Data** | name = "สมชายสมชายสมชายสมชายสมชาย123456" (30 ตัว) |
| **Expected Result** | ช่องรับได้สูงสุด 24 ตัวอักษรตาม spec (maxLength 24) ตัวที่เกินถูกตัดออก |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-004

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | กดปุ่มสุ่มชื่อ (🎲) |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กดปุ่ม 🎲 (random-name) <br>3. สังเกตชื่อในช่อง player-name |
| **Test Data** | — |
| **Expected Result** | ช่อง player-name ถูกเติมด้วยชื่อสุ่มที่ไม่ว่างเปล่า และสามารถกดสร้างห้องได้ทันที |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-005

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | กรอกชื่อผู้เล่นด้วยอักขระพิเศษ |
| **Priority** | P2 |
| **Type** | Validation |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอกชื่อ "!@#$%^&*()" <br>3. กดปุ่ม "สร้างห้อง" |
| **Test Data** | name = "!@#$%^&*()" |
| **Expected Result** | ระบบควรมีการตรวจสอบ ไม่ควรรับอักขระพิเศษ หรือถ้ารับได้ ชื่อต้องแสดงผลถูกต้องใน Lobby |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-006

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | กรอกชื่อผู้เล่นด้วยช่องว่าง (space) เท่านั้น |
| **Priority** | P2 |
| **Type** | Validation |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอก "   " (space 3 ตัว) ในช่องชื่อ <br>3. กดปุ่ม "สร้างห้อง" |
| **Test Data** | name = "   " |
| **Expected Result** | ไม่อนุญาตให้สร้างห้อง |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-007

| Field | Value |
|-------|-------|
| **Area** | Landing page — Join Room |
| **Title** | เข้าห้องด้วยรหัสห้องที่ถูกต้อง |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | มีห้องที่เปิดอยู่แล้ว (เปิดแท็บที่ 2 สร้างห้องก่อน แล้วจดรหัสห้อง) |
| **Steps** | 1. เปิดแอปในแท็บใหม่ <br>2. กรอกชื่อ "ผู้เล่น2" <br>3. กรอกรหัสห้อง 6 หลักที่ถูกต้องในช่อง code-0 ถึง code-5 <br>4. กดปุ่ม "เข้าห้อง" |
| **Test Data** | name = "ผู้เล่น2", room code = รหัสจริงจากห้องที่สร้าง |
| **Expected Result** | เข้าห้องสำเร็จ และแสดงหน้า Lobby โดยเห็นผู้เล่นทั้ง 2 คนในรายชื่อ |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-008

| Field | Value |
|-------|-------|
| **Area** | Landing page — Join Room |
| **Title** | เข้าห้องด้วยรหัสที่ไม่มีอยู่จริง |
| **Priority** | P1 |
| **Type** | Negative |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอกชื่อ "สมชาย" <br>3. กรอกรหัสห้อง "000000" (รหัสที่ไม่มีห้องนี้) <br>4. กดปุ่ม "เข้าห้อง" |
| **Test Data** | name = "สมชาย", room code = "000000" |
| **Expected Result** | ระบบแสดง room not found "ไม่พบห้องนี้"|
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-009

| Field | Value |
|-------|-------|
| **Area** | Landing page — Join Room |
| **Title** | กดเข้าห้องโดยไม่กรอกรหัสห้อง |
| **Priority** | P1 |
| **Type** | Negative / Validation |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอกชื่อ "สมชาย" <br>3. ไม่กรอกรหัสห้อง (ปล่อยว่าง) <br>4. กดปุ่ม "เข้าห้อง" |
| **Test Data** | name = "สมชาย", room code = "" |
| **Expected Result** | ระบบไม่อนุญาตให้เข้าห้อง |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-010

| Field | Value |
|-------|-------|
| **Area** | Landing page — Join Room |
| **Title** | รหัสห้องรับตัวเลขเท่านั้น (ไม่รับตัวอักษร) |
| **Priority** | P2 |
| **Type** | Validation |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กรอกชื่อ "สมชาย" <br>3. พยายามพิมพ์ "ABCDEF" ในช่องรหัสห้อง (code-0 ถึง code-5) <br>4. สังเกตว่าช่องรับตัวอักษรได้ไหม |
| **Test Data** | room code input = "ABCDEF" |
| **Expected Result** | ช่องรหัสห้องรับได้แค่ตัวเลข 0-9 ตัวอักษรภาษาอังกฤษไม่ถูกรับ |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-011

| Field | Value |
|-------|-------|
| **Area** | Landing page |
| **Title** | ปุ่ม "ห้องที่รอผู้เล่น" (refresh) แสดงห้องที่เปิดอยู่ |
| **Priority** | P3 |
| **Type** | Functional |
| **Preconditions** | มีห้องที่เปิดอยู่แล้ว (เปิดแท็บที่ 2 สร้างห้อง) |
| **Steps** | 1. เปิดแอปในแท็บใหม่ <br>2. กดปุ่ม refresh (refresh-open-rooms) <br>3. สังเกตรายการห้อง |
| **Test Data** | — |
| **Expected Result** | แสดงรายชื่อห้องที่กำลังรอผู้เล่นอยู่ |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-012

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | Host เห็นปุ่มควบคุมห้อง ผู้เล่นธรรมดาไม่เห็น |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | มี 2 แท็บ — แท็บแรกสร้างห้อง (เป็น host), แท็บสองเข้าห้อง |
| **Steps** | 1. แท็บที่ 1 สร้างห้อง → สังเกตปุ่ม "เริ่มเกม", "เติมบอทให้ครบ", dropdown จำนวนผู้เล่น <br>2. แท็บที่ 2 เข้าห้องเดียวกัน → สังเกตว่าเห็นปุ่มเหล่านี้ไหม |
| **Test Data** | — |
| **Expected Result** | Host เท่านั้นที่เห็น host controls panel ผู้เล่นทั่วไปไม่เห็น |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-013

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | กดปุ่ม "เติมบอทให้ครบ" |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | สร้างห้องแล้ว อยู่หน้า Lobby มีผู้เล่น 1 คน (host) |
| **Steps** | 1. สร้างห้อง <br>2. กดปุ่ม "เติมบอทให้ครบ" |
| **Test Data** | — |
| **Expected Result** | บอทเข้ามาเต็มห้องจน 5/5 ผู้เล่น และแสดงสถานะพร้อมเล่น ปุ่ม "เริ่มเกม" ถูก enable |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-014

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | กดเริ่มเกมก่อนที่จะมีผู้เล่นครบ |
| **Priority** | P1 |
| **Type** | Negative |
| **Preconditions** | สร้างห้อง มีผู้เล่น 1 คน (host) ยังไม่เติมบอท |
| **Steps** | 1. สร้างห้อง <br>2. ไม่กดเติมบอท <br>3. พยายามกดปุ่ม "เริ่มเกม" |
| **Test Data** | จำนวนผู้เล่น = 1 คน |
| **Expected Result** | ปุ่ม "เริ่มเกม" กดไม่ได้ |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-015

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | Host กดเตะผู้เล่น (kick) ออกจากห้อง |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | มี 2 แท็บ — host (แท็บ 1) และผู้เล่น (แท็บ 2) อยู่ใน Lobby เดียวกัน |
| **Steps** | 1. แท็บ 1 (host) มองหาปุ่ม "เตะออก" ข้างชื่อผู้เล่นในแท็บ 2 <br>2. กดปุ่ม "เตะออก" |
| **Test Data** | — |
| **Expected Result** | ผู้เล่นในแท็บ 2 ถูกเตะออกจาก Lobby และกลับไปหน้าแรก รายชื่อใน Lobby อัปเดตทันที |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-016

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | เปลี่ยนจำนวนผู้เล่นสูงสุดผ่าน dropdown |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | สร้างห้องแล้ว อยู่หน้า Lobby |
| **Steps** | 1. สร้างห้อง <br>2. กด dropdown "จำนวนผู้เล่นสูงสุด" <br>3. เลือกตัวเลขอื่น เช่น 8 <br>4. สังเกต header ของห้อง |
| **Test Data** | max players = 8 |
| **Expected Result** | Header แสดง "N/8" และระบบรับค่าที่เปลี่ยน |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-017

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | Host กด "ออกจากห้อง" |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | สร้างห้องแล้ว อยู่หน้า Lobby |
| **Steps** | 1. สร้างห้อง <br>2. กดปุ่ม "ออกจากห้อง" |
| **Test Data** | — |
| **Expected Result** | ระบบกลับไปหน้า Landing page ห้องถูกปิดหรือโอน host ให้คนอื่น |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-018

| Field | Value |
|-------|-------|
| **Area** | Lobby |
| **Title** | กดปุ่ม "ทดสอบเป็นสายลับ" |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | สร้างห้อง เติมบอทให้ครบ |
| **Steps** | 1. สร้างห้อง <br>2. กดปุ่ม "เติมบอทให้ครบ" <br>3. กดปุ่ม "ทดสอบเป็นสายลับ" |
| **Test Data** | — |
| **Expected Result** | เกมเริ่มและผู้เล่นถูกกำหนดบทบาทเป็น สายลับคู่แข่ง (Competitor Spy) |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** |  |

---

## TC-019

| Field | Value |
|-------|-------|
| **Area** | Role Reveal |
| **Title** | หน้าเปิดบทบาทแสดงข้อมูลครบถ้วน |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | สร้างห้อง เติมบอท กดเริ่มเกม |
| **Steps** | 1. สร้างห้อง → เติมบอท → กดเริ่มเกม <br>2. สังเกตหน้า Role Reveal |
| **Test Data** | — |
| **Expected Result** | แสดงบทบาทสาธารณะ (เช่น Data Analyst) และทีมลับ (ทีมบริษัท หรือ สายลับ) และมีปุ่ม "เริ่มเกมส์" |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-020

| Field | Value |
|-------|-------|
| **Area** | Role Reveal |
| **Title** | ปุ่ม "เริ่มเกมส์" พาเข้าสู่รอบแรก |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | อยู่หน้า Role Reveal |
| **Steps** | 1. กดปุ่ม "เริ่มเกมส์" |
| **Test Data** | — |
| **Expected Result** | เข้าสู่หน้าเหตุการณ์รอบแรก แสดง "เหตุการณ์ที่ 1" พร้อม survival meter และ event card |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-021

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | Survival meter แสดงและเปลี่ยนค่าได้ |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | เกมเริ่มแล้ว อยู่ในรอบเหตุการณ์ |
| **Steps** | 1. เริ่มเกม <br>2. สังเกต "โอกาสรอดปัจจุบัน" ก่อนโหวต <br>3. โหวตเลือกทางเลือกใดทางหนึ่ง <br>4. รอผลโหวต และสังเกตตัวเลขอีกครั้ง |
| **Test Data** | — |
| **Expected Result** | % ใน survival meter เปลี่ยนค่าหลังจากผลโหวตออกมา |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-022

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | กดโหวตเลือกทางเลือก |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | เกมเริ่มแล้ว มีทางเลือกแสดงอยู่ |
| **Steps** | 1. เริ่มเกม รอจนเห็นทางเลือก <br>2. กดปุ่ม "เลือกข้อนี้" ของทางเลือกที่ 1 <br>3. สังเกตสถานะโหวต |
| **Test Data** | — |
| **Expected Result** | ระบบบันทึกโหวต แสดงสถานะ "N/5 โหวตแล้ว" เพิ่มขึ้น และไม่ให้โหวตซ้ำได้อีก |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-023

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | โหวตซ้ำหลังจากโหวตไปแล้ว |
| **Priority** | P2 |
| **Type** | Negative |
| **Preconditions** | เกมเริ่มแล้ว โหวตไปแล้ว 1 ครั้ง |
| **Steps** | 1. โหวตเลือกทางเลือกที่ 1 <br>2. พยายามกดปุ่มโหวตทางเลือกอื่นอีกครั้ง |
| **Test Data** | — |
| **Expected Result** | ระบบไม่อนุญาตให้โหวตซ้ำ ปุ่มถูก disable หรือแสดง message |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-024

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | ส่ง quick reaction ในแชท |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | เกมเริ่มแล้ว อยู่ในหน้า event |
| **Steps** | 1. กดปุ่ม reaction "เห็นด้วย 👍" <br>2. กดปุ่ม reaction "ไม่เห็นด้วย 👎" <br>3. กดปุ่ม "น่าสงสัย 🤔" <br>4. กดปุ่ม "คำถาม" |
| **Test Data** | — |
| **Expected Result** | ทุก reaction ถูกส่งเข้าแชทและแสดงผลในหน้าต่างสนทนา |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-025

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | พิมพ์ข้อความในแชทและส่ง |
| **Priority** | P2 |
| **Type** | Functional |
| **Preconditions** | เกมเริ่มแล้ว อยู่ในหน้า event |
| **Steps** | 1. คลิกช่องพิมพ์ข้อความในแชท <br>2. พิมพ์ "ฉันคิดว่าผู้เล่น 2 น่าสงสัย" <br>3. กด Enter หรือปุ่มส่ง |
| **Test Data** | message = "ฉันคิดว่าผู้เล่น 2 น่าสงสัย" |
| **Expected Result** | ข้อความแสดงในหน้าต่างแชทพร้อมชื่อผู้ส่ง |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-026

| Field | Value |
|-------|-------|
| **Area** | Event / Voting |
| **Title** | Countdown timer นับถอยหลังและหมดเวลา |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | เกมเริ่มแล้ว อยู่ในหน้า event |
| **Steps** | 1. เริ่มเกม <br>2. สังเกต countdown timer บน event card <br>3. รอจนเวลาหมด (อย่ากดโหวต) |
| **Test Data** | — |
| **Expected Result** | Timer นับถอยหลังจนถึง 0 แล้วระบบดำเนินการต่อ (เช่น บอทโหวตแทน หรือรอบสิ้นสุด) |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-027

| Field | Value |
|-------|-------|
| **Area** | End Game |
| **Title** | หน้าจบเกมแสดงผลลัพธ์ครบถ้วน |
| **Priority** | P1 |
| **Type** | Functional |
| **Preconditions** | เล่นเกมจนจบทุกรอบ |
| **Steps** | 1. เล่นเกมจนครบทุกเหตุการณ์ <br>2. สังเกตหน้าจบเกม |
| **Test Data** | — |
| **Expected Result** | แสดงผลลัพธ์ว่าทีมไหนชนะ, เปิดเผยตัวสายลับ, แสดงสถิติและบทบาทของผู้เล่นทุกคน |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-028

| Field | Value |
|-------|-------|
| **Area** | Cross-cutting — Theme |
| **Title** | สลับ dark/light mode |
| **Priority** | P3 |
| **Type** | UI |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กดปุ่ม 🌙/☀️ ที่ header <br>3. สังเกต theme ของแอป <br>4. กดกลับ |
| **Test Data** | — |
| **Expected Result** | แอปสลับระหว่าง dark และ light mode ได้อย่างถูกต้อง สีของทุก element เปลี่ยนตาม theme |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-029

| Field | Value |
|-------|-------|
| **Area** | Cross-cutting — Sound |
| **Title** | ปิด/เปิดเสียงเอฟเฟกต์และเพลง |
| **Priority** | P3 |
| **Type** | Functional |
| **Preconditions** | เปิดแอปใหม่ |
| **Steps** | 1. เปิดแอป <br>2. กดปุ่ม 🔇 เพื่อ mute เสียง <br>3. กดปุ่ม 🎶 เพื่อ toggle เพลง <br>4. สังเกตการเปลี่ยนแปลง |
| **Test Data** | — |
| **Expected Result** | ปุ่มทั้งสองทำงานได้ เสียงและเพลงถูกปิด/เปิดตามที่กด |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## TC-030

| Field | Value |
|-------|-------|
| **Area** | Cross-cutting — Responsive / UI |
| **Title** | แอปแสดงผลถูกต้องบนหน้าจอมือถือ |
| **Priority** | P2 |
| **Type** | Compatibility / UI |
| **Preconditions** | เปิดแอปในเบราว์เซอร์ Chrome |
| **Steps** | 1. เปิดแอป <br>2. กด F12 เปิด DevTools <br>3. กดไอคอน Toggle device toolbar (Ctrl+Shift+M) <br>4. เลือก iPhone 14 หรือ Pixel 7 <br>5. สังเกตการแสดงผล |
| **Test Data** | viewport = 390×844 (iPhone 14) |
| **Expected Result** | แอปแสดงผลถูกต้อง ไม่มีปุ่มหรือข้อความถูกตัดออก สามารถใช้งานได้ทุกฟีเจอร์ |
| **Actual Result** | |
| **Status** | Not Run |
| **Bug ref** | — |

---

## Coverage Summary / สรุปความครอบคลุม

| Area | # Cases | Notes |
|------|---------|-------|
| Landing / entry | TC-001 ถึง TC-011 (11 เคส) | ครอบคลุม positive, negative, validation ของชื่อและรหัสห้อง |
| Lobby & host controls | TC-012 ถึง TC-018 (7 เคส) | ครอบคลุม host controls, bot fill, kick, leave |
| Role reveal | TC-019 ถึง TC-020 (2 เคส) | ครอบคลุมการแสดงบทบาทและการเริ่มเกม |
| Event / voting loop | TC-021 ถึง TC-026 (6 เคส) | ครอบคลุม voting, chat, timer, survival meter |
| End game | TC-027 (1 เคส) | ครอบคลุมหน้าจบเกม |
| Cross-cutting | TC-028 ถึง TC-030 (3 เคส) | theme, sound, responsive |
| **รวม** | **30 เคส** | |

**สิ่งที่ยังไม่ครอบคลุม:**
- Multi-client จริง (ใช้บอทแทน)
- Network error / offline scenario
- ทดสอบบน browser อื่น เช่น Firefox, Safari (ทำเพิ่มได้ใน Compatibility)
