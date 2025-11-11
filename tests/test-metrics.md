## CleanCity Test Metrics

Document Version: 1.0  
Date: November 11, 2025  
Scope: Results against `tests/test-case.md` (total 51 cases)

---

### Summary

- Total: 51
- Passed: 6
- Failed: 5
- Blocked: 0
- Not Run: 40

Pass Rate = 6 / 51 ≈ 11.8%  
Fail Rate = 5 / 51 ≈ 9.8%

---

### Results by Area

| Area | Total | Passed | Failed | Blocked | Not Run |
|---|---:|---:|---:|---:|---:|
| Authentication | 7 | 2 | 0 | 0 | 5 |
| Pickup Scheduling | 7 | 0 | 2 | 0 | 5 |
| Dashboard & Analytics | 3 | 0 | 2 | 0 | 1 |
| Admin | 4 | 0 | 0 | 0 | 4 |
| Blog | 3 | 0 | 0 | 0 | 3 |
| Community | 3 | 0 | 0 | 0 | 3 |
| Notifications | 2 | 0 | 0 | 0 | 2 |
| Profile | 2 | 0 | 1 | 0 | 1 |
| Validation & Errors | 3 | 2 | 0 | 0 | 1 |
| Accessibility | 4 | 0 | 0 | 0 | 4 |
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
| PICK-001 | Schedule pickup with valid data | Failed | Success message shows, but request not found in any list |
| PICK-006 | Cancel pending request | Failed | No request exists post-submit to cancel |
| DASH-001 | Dashboard shows recent and upcoming pickups | Failed | Totals/lists do not reflect existing requests |
| DASH-002 | Environmental metrics compute correctly | Failed | Metrics empty/zero despite activity |
| PROF-001 | View and edit profile (requests visibility) | Failed | “My Requests” remains empty after creating requests |

---

### Not Run (to be executed)

- Admin: ADMIN-001..004
- Blog: BLOG-001..003
- Community: COMM-001..003
- Notifications: NOTIF-001..002
- Accessibility: A11Y-001..004
- Performance: PERF-001..004
- Security: SEC-001..003
- Negative/Edge: EDGE-001..003

---

### Next Actions

- Prioritize fixing scheduling persistence and dashboard data visibility.  
- After fixes, re-run: PICK-001/006, DASH-001/002, PROF-001.  
- Expand execution to remaining areas (Admin, Blog, Community, Notifications, A11Y, Perf, Security).


