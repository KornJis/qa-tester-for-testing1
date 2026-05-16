# App Overview — Startup Quest / ภาพรวมแอป

> A feature map of the application under test (SUT). Use it to plan your test
> coverage — it is intentionally descriptive, **not** a list of requirements or
> known bugs. Part of your job is to decide what *should* happen.
>
> แผนผังฟีเจอร์ของแอปที่ต้องทดสอบ ใช้วางแผนความครอบคลุมของการทดสอบ
> เอกสารนี้อธิบายสิ่งที่ "มีอยู่" เท่านั้น **ไม่ใช่** ข้อกำหนดหรือรายการบั๊ก
> ส่วนหนึ่งของงานคือการตัดสินใจเองว่าพฤติกรรมที่ "ถูกต้อง" ควรเป็นอย่างไร

---

## 1. What the app is / แอปนี้คืออะไร

**Startup Quest (เกมจับสายลับ)** is a multiplayer social-deduction party game.
Players join a room, receive a public role plus a secret team (Company Team or
Competitor Spy), then go through a series of business "events" — discussing,
voting on a decision, and trying to keep the startup alive.

**URL:** https://main.startup-simulation.pages.dev/

The app is a single-page application. It is in Thai. There is **no login** and
**no URL routing** — navigation happens through in-app state, so you cannot
deep-link to a room or a screen.

Startup Quest เป็นเกมปาร์ตี้แนวจับผิด/หาสายลับแบบเล่นหลายคน ผู้เล่นเข้าห้อง
รับบทบาทเปิดเผยพร้อมทีมลับ (ทีมบริษัท หรือ สายลับคู่แข่ง) แล้วเจอ "เหตุการณ์"
ทางธุรกิจหลายรอบ ต้องคุย โหวตทางเลือก และพยายามพาบริษัทให้รอด แอปเป็น SPA
ภาษาไทย ไม่มีระบบล็อกอินและไม่มี URL routing

---

## 2. Screen-by-screen / ทีละหน้าจอ

### 2.1 Landing / Lobby entry — หน้าแรก

| Element | data-testid | Notes |
|---|---|---|
| Player name input | `player-name` | maxLength 24 |
| Random name button (🎲) | `random-name` | fills a random name |
| Room code inputs ×6 | `code-0` … `code-5` | single digit each, numeric |
| Join room button | `join-room` | "เข้าห้อง" |
| Create room button | `create-room` | "สร้างห้อง" |
| Open-rooms refresh button | `refresh-open-rooms` | "ห้องที่รอผู้เล่น" list |
| Theme / sound / music toggles | (header) | 🌙/☀️, 🔇, 🎶 |

There is also a **"วิธีเล่น" (How to play)** section with 3 steps.

### 2.2 Room lobby — ห้องรอเริ่มเกม

Shown after creating or joining a room.

- Header line: `Room code: XXXXXX · N/5 players · min 5 · 1 Spy`
- **Players panel** ("ผู้เล่นในห้อง"): one card per player, host badge,
  ready / not-ready state, and a kick button ("เตะออก") visible to the host.
- **Host controls panel** ("ควบคุมห้อง"), host only:
  - Max players dropdown ("จำนวนผู้เล่นสูงสุด")
  - "แสดงผลโหวตทุกรอบ" checkbox (show vote results each round)
  - **Start game** ("เริ่มเกม") — enabled only when enough players are ready
  - Leave room ("ออกจากห้อง")
  - **Fill with bots** ("เติมบอทให้ครบ") — fills empty slots with bots that
    auto-ready, auto-chat and auto-vote. This is the key to testing solo.
  - "ทดสอบเป็นสายลับ" — start a game forcing yourself onto the spy side.

### 2.3 Role reveal — เปิดบทบาท

- Announces your public role and secret team.
- Shows a role card per player (e.g. Data Analyst, PM, Marketing, Developer,
  Designer).
- "เริ่มเกมส์" button proceeds into the event loop.

### 2.4 Event / discussion / vote loop — รอบเหตุการณ์

Repeats for each event (e.g. "เหตุการณ์ที่ 1 / 6").

- **Survival meter** ("โอกาสรอดปัจจุบัน") — a percentage that moves with each
  outcome.
- **Team chat** — Game Master system messages + free-text chat input + quick
  reaction buttons (เห็นด้วย 👍 / ไม่เห็นด้วย 👎 / น่าสงสัย 🤔 / คำถาม).
- **Event card** — category badge, title, description, image, and a debate
  countdown timer.
- **Influence / vote weight** — each role carries a different number of votes.
- **Decision options** — typically 3 choices, each with a "เลือกข้อนี้" button;
  a per-player vote-status list shows progress ("N/5 โหวตแล้ว").
- Some `data-testid`s seen here: `submit-vote`, `submit-vote-bold`,
  `submit-vote-pivot`, `reaction-agree`, `theme-toggle`.

### 2.5 End game / spy round — จบเกม

If the company collapses, a spy-catching round can trigger; otherwise the game
ends with a results screen.

---

## 3. Testing notes / ข้อสังเกตสำหรับการทดสอบ

- **You can test almost everything solo** thanks to "เติมบอทให้ครบ" (fill bots).
  A typical end-to-end path: enter name → create room → fill bots → start game →
  reveal roles → play through events.
- **Selectors:** some elements expose `data-testid`, many do not. Prefer
  Playwright's `getByTestId`, `getByRole`, and `getByText`. Expect to read the
  DOM yourself for screens that have no test ids.
- **The UI is in Thai.** A few strings are in English — decide for yourself
  whether that is correct behaviour or a defect.
- **No routing:** the URL stays the same across screens, so assert on visible
  state, not on the URL.
- **Timers & async:** events have countdown timers and bots act on a delay —
  use Playwright's web-first assertions / `expect.poll` instead of hard waits.
