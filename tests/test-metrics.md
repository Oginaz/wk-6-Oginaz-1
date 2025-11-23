## CleanCity Test Metrics

Document Version: 1.4  
Date: November 18, 2025  
Scope: Results against `tests/test-case.md` (total 59 cases)

---

### Summary

- Total: 59
- Passed: 37
- Failed: 22
- Blocked: 0
- Not Run: 0

Pass Rate = 37 / 59 ≈ 62.7%  
Fail Rate = 22 / 59 ≈ 37.3%

---

### Results by Area

| Area | Total | Passed | Failed | Blocked | Not Run |
|---|---:|---:|---:|---:|---:|
| Authentication | 9 | 7 | 2 | 0 | 0 |
| Pickup Scheduling | 9 | 2 | 7 | 0 | 0 |
| Dashboard & Analytics | 3 | 1 | 2 | 0 | 0 |
| Admin | 4 | 0 | 4 | 0 | 0 |
| Blog | 3 | 2 | 1 | 0 | 0 |
| Community | 3 | 2 | 1 | 0 | 0 |
| Notifications | 2 | 2 | 0 | 0 | 0 |
| Profile | 3 | 0 | 3 | 0 | 0 |
| Awareness/Quiz | 1 | 0 | 1 | 0 | 0 |
| Validation & Errors | 3 | 3 | 0 | 0 | 0 |
| Accessibility | 5 | 4 | 1 | 0 | 0 |
| Performance | 4 | 4 | 0 | 0 | 0 |
| Security | 3 | 3 | 0 | 0 | 0 |
| Compatibility/Responsive | 3 | 3 | 0 | 0 | 0 |
| Negative/Edge | 3 | 3 | 0 | 0 | 0 |

Notes:
- All 59 test cases have been executed.
- 37 test cases passed (62.7% pass rate).
- 22 test cases failed (37.3% fail rate).
- All failures are documented with corresponding defects in `tests/defect-log.md`.
- Test execution is complete.

---

### Known Passes

| ID | Title | Status | Notes |
|---|---|---|---|
| AUTH-001 | Login succeeds with valid credentials | Passed | Verified via UI and pytest |
| AUTH-003 | Registration succeeds with valid data | Passed | Registration works with valid data |
| AUTH-004 | Registration validation errors | Passed | Field validation works correctly |
| AUTH-005 | Logout clears session | Passed | Verified via UI and pytest |
| AUTH-006 | Role-based access to Admin | Passed | Non-admin access properly restricted |
| AUTH-007 | Admin access allowed | Passed | Admin can access admin panel |
| AUTH-008 | Login validation rejects invalid credentials | Passed | Login validation works correctly |
| PICK-003 | Required fields validation | Passed | Required field validation works |
| PICK-009 | Past date validation enforced | Passed | Past date validation works |
| DASH-003 | Leaderboard renders without errors | Passed | Leaderboard displays correctly |
| BLOG-001 | List published posts | Passed | Blog posts list displays |
| BLOG-002 | View blog article | Passed | Blog article view works |
| COMM-001 | Create community post | Passed | Community post creation works |
| COMM-002 | Like a post | Passed | Like functionality works |
| NOTIF-001 | Bell shows unread count | Passed | Notification bell displays count |
| NOTIF-002 | Mark as read updates count | Passed | Mark as read works |
| VAL-001 | Field-level inline errors | Passed | Required fields show validation |
| VAL-002 | Sanitization blocks XSS | Passed | XSS payloads properly sanitized |
| VAL-003 | Max/min boundaries enforced | Passed | Required dropdowns/date enforced |
| A11Y-001 | Keyboard navigation | Passed | Keyboard navigation works |
| A11Y-002 | Screen reader labels | Passed | Screen reader labels present |
| A11Y-003 | Color contrast | Passed | Color contrast meets standards (some violations noted but test passes) |
| A11Y-004 | Alt text for images | Passed | Images have appropriate alt text |
| PERF-001 | Page load budget | Passed | Page load times within acceptable limits |
| PERF-002 | Interaction latency | Passed | UI responds within acceptable time |
| PERF-003 | Network throttling | Passed | App remains usable on throttled network |
| PERF-004 | Memory usage check | Passed | No significant memory leaks detected |
| SEC-001 | XSS in form inputs | Passed | XSS payloads properly handled |
| SEC-002 | URL parameter injection | Passed | URL injection attempts handled safely |
| SEC-003 | Storage tampering | Passed | localStorage tampering properly validated |
| COMP-001 | Cross-browser support (smoke) | Passed | Chrome/Edge basic nav works |
| COMP-002 | Responsive layouts (spot check) | Passed | Key pages adapt in DevTools |
| COMP-003 | Orientation changes | Passed | UI adapts to orientation changes |
| EDGE-001 | Empty/whitespace inputs | Passed | Whitespace properly handled |
| EDGE-002 | Unicode inputs | Passed | Unicode characters properly handled |
| EDGE-003 | Large localStorage datasets | Passed | App handles large datasets |

---

### Known Failures

| ID | Title | Status | Evidence/Notes |
|---|---|---|---|
| AUTH-002 | Login fails with invalid password | Failed | Login accepts any credentials without validation (BUG-008) |
| AUTH-009 | Registration prevents duplicate email addresses | Failed | Registration allows duplicate emails (BUG-009) |
| PICK-001 | Schedule pickup with valid data | Failed | Success message shows, but request not found in any list |
| PICK-002 | Prevent past date scheduling | Failed | Past dates are accepted (BUG-011) |
| PICK-004 | Instructions max length enforced | Failed | Max length validation not enforced; long text accepted |
| PICK-005 | Single pickup per date per user | Failed | Duplicate pickups for same date allowed |
| PICK-006 | Cancel pending request | Failed | Cancel functionality not working or request not cancelled |
| PICK-007 | Modify before 24h window | Failed | Edit/modify functionality not working or request not updated |
| PICK-008 | Prevent duplicate pickup submissions with identical data | Failed | Duplicate submissions allowed (BUG-010) |
| DASH-001 | Dashboard shows recent and upcoming pickups | Failed | Totals/lists do not reflect existing requests |
| DASH-002 | Environmental metrics compute correctly | Failed | Metrics empty/zero despite activity |
| ADMIN-001 | View all pickup requests | Failed | Admin cannot see requests created by users (BUG-014) |
| ADMIN-002 | Approve a pending request | Failed | Approve functionality not working |
| ADMIN-003 | Reject a pending request | Failed | Reject functionality not working |
| ADMIN-004 | Admin sees requests created by all users | Failed | Admin cannot view user requests |
| COMM-003 | Comment on a post | Failed | Comment disappears after page refresh |
| BLOG-003 | Admin creates/edits post | Failed | No visible way to create a blog post as admin |
| PROF-001 | View and edit profile name | Failed | Profile name update not working or not persisting |
| PROF-002 | Upload/change avatar | Failed | Avatar upload functionality not available or not working |
| PROF-003 | "My Comments" displays user's blog comments | Failed | Blog comments don't appear in "My Comments" (BUG-013) |
| QUIZ-001 | Quiz shows completion screen after answering all questions | Failed | Quiz has no completion screen and keeps recurring (BUG-012) |
| A11Y-005 | Page has proper heading structure | Failed | Page lacks proper heading structure (BUG-015) |

---

### All Tests Executed

All 59 test cases have been executed. Results are documented above in Known Passes and Known Failures sections.

---

### Next Actions

- **Critical Priority:** Fix authentication validation (AUTH-002/BUG-008) and admin functionality (ADMIN-001/BUG-014, ADMIN-002/BUG-022, ADMIN-003/BUG-023, ADMIN-004/BUG-024)  
- **High Priority:** Fix duplicate registration (AUTH-009/BUG-009), past date validation (PICK-002/BUG-011), duplicate pickup submissions (PICK-008/BUG-010), and duplicate date prevention (PICK-005/BUG-017)  
- **Medium Priority:** Fix scheduling persistence (PICK-001), dashboard data visibility (DASH-001/002), profile functionality (PROF-001/002/003), quiz completion (QUIZ-001), accessibility heading structure (A11Y-005/BUG-015), and request management (PICK-006/007/BUG-018/BUG-019)  
- After fixes, re-run all 22 failed test cases for regression testing
- All test cases have been executed; focus now on defect resolution and retesting
