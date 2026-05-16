# QA Internship Take-Home Assignment — Startup Quest
# โจทย์ทดสอบรับสมัครนักศึกษาฝึกงานตำแหน่ง QA — Startup Quest

Welcome, and thanks for your interest in the QA Internship role. This
assignment asks you to test a real web application the way a QA engineer would:
explore it, design test cases, automate part of your coverage, and report what
you find — clearly.

ยินดีต้อนรับ และขอบคุณที่สนใจตำแหน่งนักศึกษาฝึกงาน QA โจทย์นี้ให้คุณทดสอบ
เว็บแอปจริงในแบบที่ QA engineer ทำงาน คือสำรวจแอป ออกแบบเคสทดสอบ เขียน
automation ครอบคลุมบางส่วน และรายงานสิ่งที่พบอย่างชัดเจน

---

## 1. The scenario / โจทย์สถานการณ์

**EN —** Our team is about to ship **Startup Quest**, a multiplayer
social-deduction party game. QA was brought in late and there is **no test
documentation and no automated coverage at all**. Your job for the next 1–2
days is to act as the QA engineer for this release: understand the product,
build a test suite from scratch, automate the parts that are worth automating,
and tell us what is broken.

**TH —** ทีมของเรากำลังจะปล่อยเกม **Startup Quest** ซึ่งเป็นเกมปาร์ตี้แนว
จับสายลับแบบเล่นหลายคน QA เพิ่งเข้ามาร่วมทีมตอนใกล้ปล่อย และตอนนี้
**ยังไม่มีเอกสารการทดสอบและไม่มี automation เลย** หน้าที่ของคุณใน 1–2 วันนี้
คือรับบทเป็น QA engineer ของรอบปล่อยนี้ ทำความเข้าใจตัวเกม สร้างชุดทดสอบ
ตั้งแต่ต้น เขียน automation ในส่วนที่ควรทำ และบอกเราว่ามีอะไรพังบ้าง

---

## 2. Application under test / แอปที่ต้องทดสอบ

| | |
|---|---|
| **URL** | https://main.startup-simulation.pages.dev/ |
| **Type** | Single-page web app, Thai language, no login, no URL routing |
| **Solo testing** | Fully possible — the lobby has a "เติมบอทให้ครบ" (fill with bots) button so one person can run a complete game |

A full screen-by-screen feature map is in **[`docs/app-overview.md`](docs/app-overview.md)**.
Read it before you start — but remember it describes what *exists*, not what is
*correct*. Deciding what *should* happen is part of the job.

แผนผังฟีเจอร์ของแอปแบบละเอียดอยู่ใน **[`docs/app-overview.md`](docs/app-overview.md)**
อ่านก่อนเริ่ม แต่จำไว้ว่าเอกสารนั้นอธิบายสิ่งที่ "มีอยู่" ไม่ใช่สิ่งที่ "ถูกต้อง"
การตัดสินใจว่าพฤติกรรมที่ถูกต้องควรเป็นอย่างไรคือส่วนหนึ่งของงาน

---

## 3. What you need to deliver / สิ่งที่ต้องส่ง

You will deliver **three** things, all inside this repository.

คุณต้องส่ง **3 อย่าง** โดยอยู่ในรีโปนี้ทั้งหมด

### 3.1 Manual test cases / เคสทดสอบแบบ Manual

**EN —** A documented set of manual test cases covering the app. Use
[`manual-tests/manual-test-cases.template.md`](manual-tests/manual-test-cases.template.md).
We expect roughly **20–35 well-chosen cases** — breadth across features plus
depth on the risky areas (room join, voting, host controls). Include positive,
negative, validation, and at least a few usability / UI / compatibility cases.
Each case must be reproducible by someone who has never seen the app.

**TH —** ชุดเคสทดสอบแบบ manual ที่จัดทำเป็นเอกสาร ครอบคลุมแอป โดยใช้ไฟล์
[`manual-tests/manual-test-cases.template.md`](manual-tests/manual-test-cases.template.md)
คาดหวังประมาณ **20–35 เคสที่เลือกมาอย่างดี** มีทั้งความกว้างครอบคลุมหลายฟีเจอร์
และความลึกในจุดเสี่ยง (การเข้าห้อง การโหวต ปุ่มควบคุมห้องของ host) ควรมีทั้ง
เคสบวก เคสลบ เคส validation และเคส usability / UI / compatibility อย่างน้อย
จำนวนหนึ่ง ทุกเคสต้องทำซ้ำได้โดยคนที่ไม่เคยเห็นแอปมาก่อน

### 3.2 Automated tests (Playwright) / เทสต์อัตโนมัติ (Playwright)

**EN —** An automated suite written with **Playwright + TypeScript** in
`tests/`. This repo is already scaffolded (config, deps, one example test) so
you can focus on the tests themselves. We expect roughly **10–20 automated
checks** covering the flows that are stable and high-value to automate — for
example: landing-page UI, name/room-code validation, create-room → lobby,
fill-bots → start game. Aim for reliable, readable tests, not flaky ones.

**TH —** ชุดเทสต์อัตโนมัติที่เขียนด้วย **Playwright + TypeScript** ในโฟลเดอร์
`tests/` รีโปนี้ตั้งค่าโครงไว้ให้แล้ว (คอนฟิก, dependency, เทสต์ตัวอย่าง 1 ตัว)
คุณจึงโฟกัสที่ตัวเทสต์ได้เลย คาดหวังประมาณ **10–20 เทสต์** ที่ครอบคลุม flow
ที่นิ่งและคุ้มค่าต่อการ automate เช่น UI หน้าแรก, validation ของชื่อ/รหัสห้อง,
สร้างห้อง → เข้าห้องรอ, เติมบอท → เริ่มเกม เน้นเทสต์ที่เสถียรและอ่านง่าย
ไม่ใช่เทสต์ที่ flaky

### 3.3 Bug reports / รายงานบั๊ก

**EN —** Every defect you find, logged in
[`bug-reports/bug-report.template.md`](bug-reports/bug-report.template.md) with
severity, priority, reproduction steps, expected vs. actual, and evidence
(screenshot / video / console log). A "defect" includes functional bugs,
validation gaps, UI / UX problems, and inconsistencies. Cross-reference bugs to
the test case IDs that caught them.

**TH —** บั๊กทุกตัวที่พบ บันทึกใน
[`bug-reports/bug-report.template.md`](bug-reports/bug-report.template.md)
พร้อมระดับความรุนแรง ลำดับความสำคัญ ขั้นตอนทำซ้ำ ผลลัพธ์ที่คาดหวังเทียบกับ
ผลจริง และหลักฐาน (ภาพ / วิดีโอ / console log) คำว่า "บั๊ก" รวมถึงบั๊กเชิง
ฟังก์ชัน ช่องโหว่ validation ปัญหา UI/UX และความไม่สอดคล้องต่าง ๆ ให้อ้างอิง
บั๊กกับ ID ของเคสทดสอบที่จับมันได้

### 3.4 A short test summary / สรุปการทดสอบสั้น ๆ

**EN —** Add a `TEST-SUMMARY.md` at the repo root (max ~1 page): your test
approach, what you covered and what you did not (and why), risks, and — if you
were the QA owner — your **go / no-go** recommendation for shipping.

**TH —** เพิ่มไฟล์ `TEST-SUMMARY.md` ที่ root ของรีโป (ยาวไม่เกิน ~1 หน้า)
อธิบายแนวทางการทดสอบ สิ่งที่ครอบคลุมและไม่ครอบคลุม (พร้อมเหตุผล) ความเสี่ยง
และถ้าคุณเป็นเจ้าของงาน QA จะให้คำแนะนำ **go / no-go** ว่าควรปล่อยหรือไม่

---

## 4. Scope & time budget / ขอบเขตและเวลา

**EN —** This is designed as a **1–2 day** assignment. We are **not** expecting
exhaustive coverage. We *are* looking for good judgement: prioritising the right
areas, knowing what to automate vs. test manually, and writing clearly. If you
run short on time, cover less but keep the quality high, and use
`TEST-SUMMARY.md` to tell us what you would have done next. Do not spend more
than ~2 focused days on this.

**TH —** โจทย์นี้ออกแบบมาสำหรับ **1–2 วัน** เราไม่ได้คาดหวังการทดสอบที่ครบ
ทุกซอกทุกมุม แต่เราดูที่ "วิจารณญาณ" คือการจัดลำดับความสำคัญของพื้นที่ทดสอบ
การรู้ว่าอะไรควร automate อะไรควรทดสอบ manual และการสื่อสารที่ชัดเจน ถ้าเวลา
ไม่พอ ให้ทำให้น้อยลงแต่รักษาคุณภาพไว้ แล้วใช้ `TEST-SUMMARY.md` บอกเราว่า
ขั้นต่อไปคุณจะทำอะไร อย่าใช้เวลากับโจทย์นี้เกินประมาณ 2 วันทำงาน

---

## 5. Repository structure / โครงสร้างรีโป

```
.
├── README.md                     ← you are here / โจทย์
├── TEST-SUMMARY.md               ← you create this / คุณสร้างไฟล์นี้
├── docs/
│   └── app-overview.md           ← feature map of the app
├── tests/
│   └── example.spec.ts           ← starter example — replace with your tests
├── manual-tests/
│   └── manual-test-cases.template.md
├── bug-reports/
│   └── bug-report.template.md
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

---

## 6. Setup / การติดตั้ง

**Prerequisites:** Node.js 18+ (20 or 22 recommended).

```bash
# 1. Install dependencies / ติดตั้ง dependency
npm install

# 2. Install the Playwright browsers / ติดตั้งเบราว์เซอร์ของ Playwright
npx playwright install

# 3. Confirm your setup works — runs the example smoke test
#    ยืนยันว่าติดตั้งสำเร็จ — รันเทสต์ตัวอย่าง
npm test

# Useful while developing / คำสั่งที่ใช้บ่อยตอนเขียนเทสต์
npm run test:ui        # interactive UI mode
npm run test:headed    # see the browser
npm run report         # open the last HTML report
```

If `npm test` passes, your environment is ready. Then **delete or replace**
`tests/example.spec.ts` and start writing your own tests.

ถ้า `npm test` ผ่าน แสดงว่าสภาพแวดล้อมพร้อมแล้ว จากนั้นให้ **ลบหรือเขียนทับ**
`tests/example.spec.ts` แล้วเริ่มเขียนเทสต์ของคุณเอง

---

## 7. How to submit / วิธีส่งงาน

**EN**
1. Work on a **public GitHub repository** (fork/copy this structure) or a
   private repo you share with us.
2. Commit in **meaningful steps** — we read your commit history.
3. Make sure `npm install && npx playwright install && npm test` runs cleanly
   from a fresh clone.
4. Ensure `manual-tests/`, `bug-reports/`, and `TEST-SUMMARY.md` are filled in.
5. Send us the repo link by the agreed deadline.

**TH**
1. ทำงานบน **GitHub repository แบบ public** (คัดลอกโครงสร้างนี้ไป) หรือ repo
   แบบ private ที่แชร์ให้เรา
2. Commit เป็น **ขั้นตอนที่มีความหมาย** — เราดูประวัติ commit ของคุณด้วย
3. ตรวจสอบว่า `npm install && npx playwright install && npm test` รันผ่าน
   เมื่อ clone ใหม่
4. ตรวจสอบว่า `manual-tests/`, `bug-reports/` และ `TEST-SUMMARY.md` กรอกครบ
5. ส่งลิงก์รีโปให้เราภายในเวลาที่นัดหมาย

---

## 8. How you will be evaluated / เกณฑ์การประเมิน

This is the high-level rubric (100 points). The hiring team uses a more detailed
internal version, but nothing here is hidden from you — it rewards exactly what
the section titles say.

นี่คือเกณฑ์ภาพรวม (100 คะแนน) ทีมผู้คัดเลือกใช้เวอร์ชันละเอียดภายใน แต่ไม่มี
อะไรซ่อนจากคุณ — คะแนนให้ตรงตามหัวข้อด้านล่างนี้

| # | Area / ด้าน | Points | What we look for / สิ่งที่เราดู |
|---|---|---:|---|
| 1 | **Test design — manual** / การออกแบบเคส manual | 25 | Coverage, prioritisation, clear & reproducible steps, good positive/negative/edge mix |
| 2 | **Automation — Playwright** / งาน automation | 25 | Correct & reliable tests, good selectors, readable structure, sensible choice of *what* to automate |
| 3 | **Bug reporting** / การรายงานบั๊ก | 20 | Real defects found, clear repro, correct severity/priority, useful evidence |
| 4 | **Analytical thinking** / การคิดวิเคราะห์ | 15 | Risk-based prioritisation, edge-case instinct, sensible expected-behaviour judgement |
| 5 | **Communication & professionalism** / การสื่อสารและความเป็นมืออาชีพ | 10 | README/summary clarity, repo tidiness, commit history, English+Thai readability |
| 6 | **Going above & beyond** / ทำได้เกินคาด | 5 | e.g. accessibility, performance, responsive, CI, API/network checks, Page Object Model |

**Total / รวม: 100**

A detailed breakdown of each criterion lives with the hiring team; you do not
need it to do well — just do solid, honest QA work and document it clearly.

---

## 9. Ground rules & tips / กติกาและคำแนะนำ

**EN**
- **Use AI tools if you want** — but you own the result. Be ready to explain any
  test or report in an interview. Submissions you cannot explain score poorly.
- **Don't break the shared environment.** The site is live; avoid spamming
  rooms, abusive content in chat, or load testing.
- **Quality over quantity.** 15 sharp test cases beat 60 shallow ones.
- **State your assumptions.** Where "correct" behaviour is unclear, write down
  what you assumed and why.
- **Flaky tests count against you.** A smaller suite that always passes is
  better than a large one that randomly fails.
- **Ask questions.** If something is genuinely ambiguous, email us — knowing
  when to ask is a QA skill.

**TH**
- **ใช้เครื่องมือ AI ได้** แต่คุณต้องรับผิดชอบผลลัพธ์เอง ต้องอธิบายทุกเทสต์และ
  ทุกรายงานได้ในการสัมภาษณ์ งานที่อธิบายไม่ได้จะได้คะแนนน้อย
- **อย่าทำให้สภาพแวดล้อมที่ใช้ร่วมกันเสียหาย** เว็บเป็นระบบจริง อย่าสร้างห้อง
  ถี่เกินไป อย่าพิมพ์ข้อความไม่เหมาะสมในแชท และอย่าทำ load test
- **เน้นคุณภาพมากกว่าปริมาณ** เคสคม ๆ 15 เคส ดีกว่าเคสตื้น ๆ 60 เคส
- **ระบุข้อสมมติของคุณ** ตรงไหนที่ไม่ชัดว่าพฤติกรรมที่ถูกต้องคืออะไร ให้เขียน
  ว่าคุณสมมติอะไรและเพราะอะไร
- **เทสต์ที่ flaky จะถูกหักคะแนน** ชุดเล็กที่ผ่านเสมอ ดีกว่าชุดใหญ่ที่พังสุ่ม ๆ
- **ถามได้** ถ้ามีอะไรกำกวมจริง ๆ อีเมลมาถามเรา — การรู้ว่าเมื่อไรควรถามก็เป็น
  ทักษะของ QA

---

## 10. FAQ / คำถามที่พบบ่อย

**Do I need other people to test the multiplayer parts?**
No. Use "เติมบอทให้ครบ" (fill with bots) in the lobby to run a full game solo.
If you *do* want to test true multi-client behaviour, note it as a limitation in
`TEST-SUMMARY.md`.

**ต้องมีคนอื่นช่วยทดสอบส่วน multiplayer ไหม?**
ไม่ต้อง ใช้ปุ่ม "เติมบอทให้ครบ" ในห้องรอเพื่อเล่นเกมครบรอบคนเดียวได้ ถ้าอยาก
ทดสอบพฤติกรรมแบบหลาย client จริง ๆ ให้ระบุเป็นข้อจำกัดใน `TEST-SUMMARY.md`

**Some elements have no `data-testid`. Is that intended?**
Treat it as reality. Use `getByRole` / `getByText` and read the DOM. You may
also note missing test ids as a testability issue.

**บางอิลิเมนต์ไม่มี `data-testid` ตั้งใจหรือเปล่า?**
ให้ถือว่าเป็นสภาพจริง ใช้ `getByRole` / `getByText` และอ่าน DOM เอง และจะ
ระบุว่าการไม่มี test id เป็นปัญหาด้าน testability ก็ได้

**Can I add libraries, a Page Object Model, fixtures, CI?**
Yes — anything that improves quality and is justified is welcome and can earn
"above & beyond" points. Keep the core run command (`npm test`) working.

**เพิ่มไลบรารี, Page Object Model, fixtures, CI ได้ไหม?**
ได้ อะไรก็ตามที่ช่วยให้คุณภาพดีขึ้นและมีเหตุผลรองรับ ยินดีรับและอาจได้คะแนน
"ทำได้เกินคาด" แต่ต้องให้คำสั่งหลัก (`npm test`) ยังทำงานได้

---

Good luck — we are excited to see how you think. / ขอให้โชคดี เราตั้งตารอดู
วิธีคิดของคุณ
