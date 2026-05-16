# Manual Test Cases — เทมเพลตเคสทดสอบแบบ Manual

> Fill in this template with the manual test cases you designed. Add as many
> rows as you need. Keep IDs stable (TC-001, TC-002, …) so you can reference
> them from bug reports.
>
> กรอกเทมเพลตนี้ด้วยเคสทดสอบแบบ manual ที่คุณออกแบบ เพิ่มแถวได้ตามต้องการ
> ตั้ง ID ให้คงที่ (TC-001, TC-002, …) เพื่ออ้างอิงจากรายงานบั๊กได้

**Tester / ผู้ทดสอบ:** _your name_
**Date / วันที่:** _YYYY-MM-DD_
**Build / Environment:** https://main.startup-simulation.pages.dev/ — browser & OS: _____

---

## How to fill this in / วิธีกรอก

- **Area** — feature group (e.g. Landing, Lobby, Voting).
- **Priority** — P1 (critical) / P2 (major) / P3 (minor).
- **Type** — Functional / UI / Validation / Negative / Usability / Compatibility…
- **Preconditions** — state required before the steps.
- **Steps** — numbered, reproducible actions.
- **Expected Result** — what *should* happen (your judgement of correct behaviour).
- **Actual Result** — what happened when you ran it.
- **Status** — Pass / Fail / Blocked / Not Run.
- **Bug ref** — link to the bug report ID if it failed.

---

## Test Suite / ชุดทดสอบ

### TC-001
| Field | Value |
|---|---|
| **Area** | _e.g. Landing page_ |
| **Title** | _short description of what is being verified_ |
| **Priority** | _P1 / P2 / P3_ |
| **Type** | _Functional / Validation / …_ |
| **Preconditions** | _e.g. Fresh page load, no name entered_ |
| **Steps** | 1. _…_<br>2. _…_<br>3. _…_ |
| **Test Data** | _e.g. name = "", room code = "000000"_ |
| **Expected Result** | _…_ |
| **Actual Result** | _…_ |
| **Status** | _Pass / Fail / Blocked_ |
| **Bug ref** | _BUG-001 / —_ |

### TC-002
| Field | Value |
|---|---|
| **Area** | |
| **Title** | |
| **Priority** | |
| **Type** | |
| **Preconditions** | |
| **Steps** | 1. <br>2. <br>3. |
| **Test Data** | |
| **Expected Result** | |
| **Actual Result** | |
| **Status** | |
| **Bug ref** | |

<!-- Copy the block above for each additional test case. -->

---

## Optional: compact table format / รูปแบบตารางแบบย่อ (ถ้าถนัด)

If you prefer a single table over per-case blocks, you may use this instead —
either format is accepted.

| ID | Area | Title | Priority | Type | Preconditions | Steps | Expected | Actual | Status | Bug ref |
|----|------|-------|----------|------|---------------|-------|----------|--------|--------|---------|
| TC-001 | | | | | | | | | | |
| TC-002 | | | | | | | | | | |

---

## Coverage summary / สรุปความครอบคลุม

Briefly note which areas you covered and which you deliberately left out (and why).

| Area | # Cases | Notes |
|---|---|---|
| Landing / entry | | |
| Room create / join | | |
| Lobby & host controls | | |
| Role reveal | | |
| Event / voting loop | | |
| End game / spy round | | |
| Cross-cutting (theme, audio, responsive, i18n) | | |
