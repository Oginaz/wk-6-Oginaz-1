## CleanCity Test Cases

Document Version: 1.0  
Date: November 11, 2025  
Source Data: docs/test-data.md, docs/functional-requirements.md

---

### Summary

- Total test cases: 51
- By area:
  - Authentication: 7
  - Pickup Scheduling: 7
  - Dashboard and Analytics: 3
  - Admin: 4
  - Blog: 3
  - Community Feed: 3
  - Notifications: 2
  - Profile: 2
  - Validation and Error Handling: 3
  - Accessibility (WCAG 2.1 AA): 4
  - Performance: 4
  - Security: 3
  - Compatibility and Responsiveness: 3
  - Negative and Edge Cases: 3

Use this suite with the test data in `docs/test-data.md` and record outcomes in `tests/defect-log.md` and the final report.

---

### Legend

- Columns: ID | Title | Preconditions | Test Data | Steps | Expected Result

---

### Authentication

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| AUTH-001 | Login succeeds with valid credentials | App loaded; no active session | Email: user1@test.com, Password: TestPass123 | 1) Open Login 2) Enter credentials 3) Click Login | User is logged in, redirected to intended page or dashboard; session stored in localStorage |
| AUTH-002 | Login fails with invalid password | App loaded; user exists | Email: user1@test.com, Password: WrongPassword | 1) Open Login 2) Enter email + wrong password 3) Click Login | Error message displayed; user remains logged out; no session stored |
| AUTH-003 | Registration succeeds with valid data | App loaded; email not registered | Email: newuser@test.com, Password: NewPass123, Confirm: NewPass123, Name: New Test User, Phone: +1-555-9999 | 1) Open Register 2) Fill valid data 3) Submit | Account created with role User; success message; can login |
| AUTH-004 | Registration validation errors | App loaded | Email: invalid-email, Password: short, Confirm: mismatch, Name: "", Phone: invalid-phone | 1) Open Register 2) Enter invalid inputs 3) Submit | Field-level validation errors; no account created |
| AUTH-005 | Logout clears session | Logged-in user | N/A | 1) Click Logout in navbar | Session cleared from localStorage; user redirected to Landing/Login |
| AUTH-006 | Role-based access to Admin | Logged-in as non-admin | N/A | 1) Visit /admin | Access denied or redirect to Login; no admin UI visible |
| AUTH-007 | Admin access allowed | Logged-in as admin@cleancity.com | N/A | 1) Visit /admin | Admin UI visible; requests/users lists load |

---

### Pickup Scheduling

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PICK-001 | Schedule pickup with valid data | Logged-in user | Date: Tomorrow; Waste: General; Qty: Medium; Instr: "Please ring doorbell" | 1) Go to Schedule 2) Fill form 3) Submit | Pickup created with status Pending; appears in history; stored in localStorage |
| PICK-002 | Prevent past date scheduling | Logged-in user | Date: Yesterday | 1) Fill date in past 2) Submit | Validation error for date; no request created |
| PICK-003 | Required fields validation | Logged-in user | Waste: (empty), Qty: (empty) | 1) Leave required fields empty 2) Submit | Required field messages; no request created |
| PICK-004 | Instructions max length enforced | Logged-in user | Instructions > 200 chars | 1) Enter very long text 2) Submit | Validation error for length; no request created |
| PICK-005 | Single pickup per date per user | User has existing request on date D | Date: D | 1) Submit pickup for same date 2) Submit | Error preventing duplicate date; only one request for D |
| PICK-006 | Cancel pending request | User has Pending request | N/A | 1) Open history 2) Cancel request | Status becomes Cancelled; record retained |
| PICK-007 | Modify before 24h window | Pending request >24h away | Change Qty: Large | 1) Edit request 2) Save | Request updated; audit or updated timestamp shown (if available) |

---

### Dashboard and Analytics

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| DASH-001 | Dashboard shows recent and upcoming pickups | Logged-in user with history | Sample requests (Pending/Confirmed/Completed) | 1) Open Dashboard | Sections show recent history and upcoming pickups; counts accurate |
| DASH-002 | Environmental metrics compute correctly | Logged-in user with completed requests | Completed requests data | 1) Open Dashboard 2) Review metrics | Metrics display non-empty numbers; consistent across reloads |
| DASH-003 | Leaderboard renders without errors | Test data present | N/A | 1) Open Dashboard 2) Locate leaderboard | Leaderboard visible and sorted; no crashes |

---

### Admin

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| ADMIN-001 | View all pickup requests | Logged in as admin | Multiple user requests in storage | 1) Open Admin > Requests | Table lists all requests with filters/sort (if available) |
| ADMIN-002 | Approve a pending request | Logged in as admin | Pending request exists | 1) Select request 2) Approve | Status changes to Confirmed; user notification generated (if supported) |
| ADMIN-003 | Reject a pending request | Logged in as admin | Pending request exists | 1) Select request 2) Reject | Status becomes Rejected/Cancelled; reason optional |
| ADMIN-004 | Change user role | Logged in as admin | User exists | 1) Open Users 2) Set role to Admin/User | Role updated; reflected on next login |

---

### Blog

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| BLOG-001 | List published posts | N/A | Published post sample | 1) Open Blog | Published posts list visible; featured tags show |
| BLOG-002 | View blog article | N/A | Post id=1 | 1) Click a post | Article details load; URL reflects id; back nav returns to list |
| BLOG-003 | Admin creates/edits post | Logged in as admin | Title/content/tags | 1) Open Blog Admin 2) Create post 3) Save | Post saved to storage; appears in list as draft or published |

---

### Community Feed

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| COMM-001 | Create community post | Logged-in user | Content: short text | 1) Open Community 2) Create post | Post appears at top of feed with author and date |
| COMM-002 | Like a post | Logged-in user; post exists | N/A | 1) Click Like on a post | Like count increments once per user session (or per design) |
| COMM-003 | Comment on a post | Logged-in user; post exists | Comment: short text | 1) Add comment 2) Submit | Comment added under the post; visible after refresh |

---

### Notifications

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| NOTIF-001 | Bell shows unread count | Logged-in user with unread notifications | Generated events (e.g., approval) | 1) Observe navbar bell | Badge shows unread count |
| NOTIF-002 | Mark as read updates count | Unread notifications exist | N/A | 1) Open notifications 2) Mark all read | Count resets to 0; history retained |

---

### Profile

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PROF-001 | View and edit profile | Logged-in user | Name/Phone updates | 1) Open Profile 2) Edit details 3) Save | Profile persists in localStorage; updates reflected in UI |
| PROF-002 | Upload/change avatar (if present) | Logged-in user | Image file | 1) Upload avatar 2) Save | Avatar displays in profile; persists across sessions |

---

### Validation and Error Handling

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| VAL-001 | Field-level inline errors | N/A | Empty required fields | 1) Submit empty forms | Inline errors shown; focus/aria described-by linked correctly |
| VAL-002 | Sanitization blocks XSS | N/A | <script>alert('XSS')</script> | 1) Enter payload into text fields 2) Save/view | Script not executed; payload escaped or stripped |
| VAL-003 | Max/min boundaries enforced | N/A | Boundary values per test-data.md | 1) Enter boundary values 2) Submit | Values within limits accepted; outside limits rejected |

---

### Accessibility (WCAG 2.1 AA)

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| A11Y-001 | Keyboard navigation | N/A | N/A | 1) Navigate app using Tab/Shift+Tab/Enter/Escape | All interactive elements reachable; visible focus; no traps |
| A11Y-002 | Screen reader labels | Screen reader enabled | N/A | 1) Navigate Login, Forms, Nav | Elements have meaningful labels/roles; announcements correct |
| A11Y-003 | Color contrast | N/A | N/A | 1) Audit with axe/WAVE | There is contrast violations for color |
| A11Y-004 | Alt text for images | N/A | N/A | 1) Inspect images | Informative images have alt text; decorative have empty alt |

---

### Performance

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PERF-001 | Page load budget | Fresh session | N/A | 1) Measure with Lighthouse | TTI and LCP within acceptable limits; load < 3s on standard network |
| PERF-002 | Interaction latency | App loaded | N/A | 1) Click nav and buttons | UI responds < 1s; no jank on route changes |
| PERF-003 | Network throttling | Throttling enabled | 3G/Slow 3G | 1) Throttle to Fast/Slow 3G 2) Navigate | App remains usable; skeleton/loading states visible |
| PERF-004 | Memory usage check | DevTools open | N/A | 1) Interact across features 2) Profile memory | No runaway memory growth; event listeners cleaned up |

---

### Security

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| SEC-001 | XSS in form inputs | N/A | <img src=\"x\" onerror=\"alert('XSS')\"> | 1) Enter payloads in text fields 2) View rendering | No script execution; content sanitized/escaped |
| SEC-002 | URL parameter injection | N/A | Blog id payload | 1) Manipulate /blog/:id with scripts | No execution; invalid ids handled gracefully |
| SEC-003 | Storage tampering | App uses localStorage | Manually edited localStorage | 1) Modify stored user/role/requests 2) Reload | App validates/sanitizes; does not crash or escalate privileges |

---

### Compatibility and Responsiveness

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| COMP-001 | Cross-browser support | Browsers installed | Chrome, Firefox, Brave, Edge | 1) Execute smoke suite in each browser | Consistent behavior; no browser-specific errors |
| COMP-002 | Responsive layouts | DevTools responsive mode | Mobile/Tablet/Desktop sizes | 1) Test key pages across breakpoints | Layouts do not adapt in mobile devices;  overflow or clipped content in mobile devices|
| COMP-003 | Orientation changes | Mobile/tablet | Portrait/Landscape | 1) Rotate device/emulator | UI adapts with broken layouts in mobile devices |

---

### Negative and Edge Cases

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| EDGE-001 | Empty/whitespace inputs | N/A | "   " (spaces) | 1) Submit forms with whitespace-only fields | Treated as empty; validation errors shown |
| EDGE-002 | Unicode inputs | N/A | José, 中文 | 1) Enter unicode in name/instructions 2) Submit | Accepted where valid; stored and displayed correctly |
| EDGE-003 | Large localStorage datasets | Seed large data | 1000+ users, 5000+ requests (simulated) | 1) Seed data 2) Navigate core flows | App remains stable; handles or warns on storage limits |

---

### Traceability (sample)

| Requirement | Test IDs |
|---|---|
| FR-004 Login | AUTH-001, AUTH-002 |
| FR-012 Schedule pickup | PICK-001, PICK-002, PICK-003, PICK-004, PICK-005 |
| FR-016 View history | PICK-006 |
| FR-018 Modify details | PICK-007 |
| FR-065 Notifications | NOTIF-001, NOTIF-002 |
| FR-071-074 Accessibility | A11Y-001..004 |

---

### Execution Notes

- Record actual results and attach evidence (screenshots, videos, logs) in Jira/GitHub for each failed step.  
- Use the data sets and payloads from docs/test-data.md for boundary, security, and performance scenarios.  
- Re-run failed critical tests after fixes to confirm resolution (regression).


