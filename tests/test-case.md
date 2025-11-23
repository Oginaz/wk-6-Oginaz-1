## CleanCity Test Cases
  
Date: November 18, 2025  

- Total test cases: 59
- By area:
  - Authentication: 9
  - Pickup Scheduling: 9
  - Dashboard and Analytics: 3
  - Admin: 4
  - Blog: 3
  - Community Feed: 3
  - Notifications: 2
  - Profile: 3
  - Awareness/Quiz: 1
  - Validation and Error Handling: 3
  - Accessibility (WCAG 2.1 AA): 5
  - Performance: 4
  - Security: 3
  - Compatibility and Responsiveness: 3
  - Negative and Edge Cases: 3

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
| AUTH-008 | Login validation rejects invalid credentials | App loaded; no active session | Email: fake@test.com, Password: wrongpass123 | 1) Open Login 2) Enter invalid credentials 3) Click Login | Error message displayed; user remains logged out; no session stored; login fails |
| AUTH-009 | Registration prevents duplicate email addresses | App loaded; email already registered | Email: existing@test.com (already registered), Password: NewPass123, Confirm: NewPass123, Name: New User, Phone: +1-555-0000 | 1) Open Register 2) Enter email that already exists 3) Fill other fields 4) Submit | Error message indicating email already exists; registration fails; no duplicate account created |

### Pickup Scheduling

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PICK-001 | Schedule pickup with valid data | Logged-in user | Date: Tomorrow; Waste: General; Qty: Medium; Instr: "Please ring doorbell" | 1) Go to Schedule 2) Fill form 3) Submit | Pickup created with status Pending; appears in history; stored in localStorage |
| PICK-002 | Prevent past date scheduling | Logged-in user | Date: Yesterday | 1) Fill date in past 2) Submit | Validation error for date; no request created |
| PICK-003 | Required fields validation | Logged-in user | Waste: (empty), Qty: (empty) | 1) Leave required fields empty 2) Submit | Required field messages; no request created |
| PICK-004 | Instructions max length enforced | Logged-in user | Instructions > 200 chars | 1) Enter very long text (201+ characters) 2) Submit | Validation error for length; no request created |
| PICK-005 | Single pickup per date per user | User has existing request on date D | Date: D | 1) Submit pickup for same date 2) Submit | Error preventing duplicate date; only one request for D |
| PICK-006 | Cancel pending request | User has Pending request | N/A | 1) Open history 2) Cancel request | Status becomes Cancelled; record retained |
| PICK-007 | Modify before 24h window | Pending request >24h away | Change Qty: Large | 1) Edit request 2) Save | Request updated; audit or updated timestamp shown (if available) |
| PICK-008 | Prevent duplicate pickup submissions with identical data | Logged-in user | Date: Tomorrow; Waste: General; Qty: Medium; Instr: "Same instructions" | 1) Submit pickup with data 2) Submit another pickup with exact same data immediately | System prevents duplicate or shows warning; only one request created |
| PICK-009 | Past date validation enforced | Logged-in user | Date: Yesterday (past date) | 1) Go to Schedule 2) Select past date 3) Fill other fields 4) Submit | Date picker prevents past date selection OR validation error shown; no request created with past date |

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
| ADMIN-004 | Admin sees requests created by all users | Logged in as admin; regular user has created requests | User requests exist in system | 1) Login as regular user 2) Create pickup request 3) Logout 4) Login as admin 5) Open Admin > Requests | Admin panel displays all requests created by users; requests list is populated |

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

### Awareness/Quiz

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| QUIZ-001 | Quiz shows completion screen after answering all questions | User navigates to Awareness section | Quiz with 3 questions | 1) Go to Awareness page 2) Answer all 3 quiz questions 3) Submit answers | Quiz displays completion screen/confirmation; quiz does not recur after completion |

---

### Profile

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PROF-001 | View and edit profile name | Logged-in user | Name update | 1) Open Profile 2) Edit name field 3) Save | Profile name persists in localStorage; name update reflected in UI |
| PROF-002 | Upload/change avatar | Logged-in user | Image file | 1) Attempt to upload avatar 2) Save | Avatar upload functionality should be available; avatar displays in profile |
| PROF-003 | "My Comments" displays user's blog comments | Logged-in user; user has commented on blog posts | User has made comments on blog posts | 1) Login as user 2) Go to Blog 3) Add comment on a post 4) Go to Profile 5) Check "My Comments" section | User's comments are listed in "My Comments" section; all user comments visible |

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
| A11Y-005 | Page has proper heading structure | WAVE Accessibility Tool installed | N/A | 1) Go to application URL 2) Open WAVE extension 3) Scan the page 4) Check for heading structure | Page should have a logical heading hierarchy (h1, h2, h3, etc.); no "No heading structure" alert |

---

### Performance

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| PERF-001 | Page load budget | Fresh session | N/A | **Step-by-step:** 1) Open Chrome DevTools (F12) 2) Go to Lighthouse tab 3) Select "Performance" category 4) Choose "Desktop" or "Mobile" 5) Click "Analyze page load" 6) Review metrics: Time to Interactive (TTI) and Largest Contentful Paint (LCP) | TTI < 3.8s and LCP < 2.5s on standard network; overall performance score acceptable |
| PERF-002 | Interaction latency | App loaded | N/A | **Step-by-step:** 1) Open Chrome DevTools (F12) 2) Go to Performance tab 3) Click Record (circle icon) 4) Click navigation links and buttons in the app 5) Stop recording 6) Review timeline for interaction delays | UI responds < 1s to clicks; no visible jank or lag on route changes; smooth transitions |
| PERF-003 | Network throttling | Chrome DevTools | 3G/Slow 3G | **Step-by-step:** 1) Open Chrome DevTools (F12) 2) Go to Network tab 3) Click throttling dropdown (default: "No throttling") 4) Select "Fast 3G" or "Slow 3G" 5) Reload page (Ctrl+R) 6) Navigate through app pages 7) Observe loading behavior | App remains usable; loading states/skeletons visible; content loads within reasonable time on throttled network |
| PERF-004 | Memory usage check | Chrome DevTools | N/A | **Step-by-step:** 1) Open Chrome DevTools (F12) 2) Go to Memory tab 3) Take heap snapshot (click "Take heap snapshot") 4) Interact with app: navigate pages, create requests, add comments 5) Take another heap snapshot after interactions 6) Compare snapshots for memory growth 7) Check for memory leaks (objects not being cleaned up) | Memory usage remains stable; no significant memory growth after interactions; event listeners properly cleaned up |

---

### Security

| ID | Title | Preconditions | Test Data | Steps | Expected Result |
|---|---|---|---|---|---|
| SEC-001 | XSS in form inputs | N/A | Payload: `<img src="x" onerror="alert('XSS')">` or `<script>alert('XSS')</script>` | **Step-by-step:** 1) Login to the app 2) Navigate to any form with text input (e.g., Profile name, Pickup instructions, Blog comment) 3) Enter XSS payload: `<img src="x" onerror="alert('XSS')">` 4) Submit the form 5) View the page where the content is displayed 6) Check browser console for any script execution 7) Verify content is displayed as plain text, not executed | No script execution occurs; payload is escaped/sanitized and displayed as text; no alert popups; content safely rendered |
| SEC-002 | URL parameter injection | N/A | Payload: `/blog/1<script>alert('XSS')</script>` or `/blog/999999` | **Step-by-step:** 1) Navigate to a page with URL parameters (e.g., Blog post page) 2) Manually edit URL in address bar 3) Try invalid ID: `/blog/999999` (non-existent post) 4) Try script injection: `/blog/1<script>alert('XSS')</script>` 5) Press Enter to load the page 6) Observe behavior | Invalid IDs handled gracefully (404 or error message); script payloads not executed; app does not crash; proper error handling displayed |
| SEC-003 | Storage tampering | Chrome DevTools | localStorage data | **Step-by-step:** 1) Login as regular user 2) Open Chrome DevTools (F12) 3) Go to Application tab > Local Storage > your domain 4) Find user data (e.g., role: "User") 5) Manually edit role to "Admin" in localStorage 6) Reload the page (F5) 7) Try to access admin routes 8) Check if app validates the role change | App validates localStorage data; role changes not honored without proper authentication; app does not crash; no privilege escalation; data sanitized on load |

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
