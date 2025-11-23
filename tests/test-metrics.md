## CleanCity Test Metrics

Document Version: 1.2  
Date: November 18, 2025  
Scope: Results against `tests/test-case.md` (total 60 cases)

---

### Summary

- Total: 60
- Passed: 6
- Failed: 15
- Blocked: 0
- Not Run: 39

Pass Rate = 6 / 60 = 10.0%  
Fail Rate = 15 / 60 = 25.0%

---

### Results by Area

| Area | Total | Passed | Failed | Blocked | Not Run |
|---|---:|---:|---:|---:|---:|
| Authentication | 9 | 2 | 2 | 0 | 5 |
| Pickup Scheduling | 9 | 0 | 3 | 0 | 6 |
| Dashboard & Analytics | 3 | 0 | 2 | 0 | 1 |
| Admin | 5 | 0 | 1 | 0 | 4 |
| Blog | 3 | 0 | 1 | 0 | 2 |
| Community | 3 | 0 | 1 | 0 | 2 |
| Notifications | 2 | 0 | 0 | 0 | 2 |
| Profile | 3 | 0 | 2 | 0 | 1 |
| Awareness/Quiz | 1 | 0 | 1 | 0 | 0 |
| Validation & Errors | 3 | 2 | 0 | 0 | 1 |
| Accessibility | 5 | 0 | 1 | 0 | 4 |
| Performance | 4 | 0 | 0 | 0 | 4 |
| Security | 3 | 0 | 0 | 0 | 3 |
| Compatibility/Responsive | 3 | 2 | 0 | 0 | 1 |
| Negative/Edge | 3 | 0 | 0 | 0 | 3 |

Notes:
- Authentication smoke (login/logout) passed locally.
- Failures align with observed defects in `tests/defect-log.md`.

---

### Known Passes

| ID | Title | Status | Notes |
|---|---|---|---|
| AUTH-001 | Login succeeds with valid credentials | Passed | Verified via UI and pytest |
| AUTH-005 | Logout clears session | Passed | Verified via UI and pytest |
| VAL-001 | Field-level inline errors | Passed | Required fields show validation |
| VAL-003 | Max/min boundaries enforced | Passed | Required dropdowns/date enforced |
| COMP-001 | Cross-browser support (smoke) | Passed | Chrome/Edge basic nav works |
| COMP-002 | Responsive layouts (spot check) | Passed | Key pages adapt in DevTools |

---

### Known Failures

| ID | Title | Status | Evidence/Notes |
|---|---|---|---|
| AUTH-002 | Login fails with invalid password | Failed | Login accepts any credentials without validation (BUG-008) |
| AUTH-009 | Registration prevents duplicate email addresses | Failed | Registration allows duplicate emails (BUG-009) |
| PICK-001 | Schedule pickup with valid data | Failed | Success message shows, but request not found in any list |
| PICK-002 | Prevent past date scheduling | Failed | Past dates are accepted (BUG-011) |
| PICK-008 | Prevent duplicate pickup submissions with identical data | Failed | Duplicate submissions allowed (BUG-010) |
| DASH-001 | Dashboard shows recent and upcoming pickups | Failed | Totals/lists do not reflect existing requests |
| DASH-002 | Environmental metrics compute correctly | Failed | Metrics empty/zero despite activity |
| ADMIN-001 | View all pickup requests | Failed | Admin cannot see requests created by users (BUG-014) |
| COMM-003 | Comment on a post | Failed | Comment disappears after page refresh |
| BLOG-003 | Admin creates/edits post | Failed | No visible way to create a blog post as admin |
| PROF-001 | View and edit profile (requests visibility) | Failed | "My Requests" remains empty after creating requests (BUG-004) |
| PROF-003 | "My Comments" displays user's blog comments | Failed | Blog comments don't appear in "My Comments" (BUG-013) |
| QUIZ-001 | Quiz shows completion screen after answering all questions | Failed | Quiz has no completion screen and keeps recurring (BUG-012) |
| A11Y-005 | Page has proper heading structure | Failed | Page lacks proper heading structure (BUG-015) |

---

### Not Run (to be executed)

- Admin: ADMIN-001..004
- Blog: BLOG-001..003
- Community: COMM-001..003
- Notifications: NOTIF-001..002
- Accessibility: A11Y-001..005
- Performance: PERF-001..004
- Security: SEC-001..003
- Negative/Edge: EDGE-001..003

---

### Next Actions

- **Critical Priority:** Fix authentication validation (AUTH-002/BUG-008) and admin request visibility (ADMIN-001/BUG-014)  
- **High Priority:** Fix duplicate registration (AUTH-009/BUG-009), past date validation (PICK-002/BUG-011), and duplicate pickup submissions (PICK-008/BUG-010)  
- **Medium Priority:** Fix scheduling persistence, dashboard data visibility, profile data visibility (PROF-001, PROF-003), quiz completion (QUIZ-001), and accessibility heading structure (A11Y-005/BUG-015)  
- After fixes, re-run: AUTH-002, AUTH-009, PICK-001/002/008, DASH-001/002, ADMIN-001, PROF-001/003, QUIZ-001, A11Y-005  
- Expand execution to remaining areas (Notifications, remaining A11Y, Perf, Security, Negative/Edge cases)
