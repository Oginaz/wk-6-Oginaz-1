## CleanCity Defect Log

Document Version: 1.2  
Date: November 18, 2025  
Tooling: Jira or GitHub Projects (use this file to mirror/export summary)

---

### Instructions

- Log every defect found during testing.  
- One row per defect. Keep titles concise and descriptive.  
- Attach screenshots/videos in Jira/GitHub and paste the link in Evidence.  
- Update Status and Assignee as work progresses.

---

### Field Definitions

- Severity: Critical, Major, Minor, Cosmetic  
- Priority: High, Medium, Low  
- Status: Open, In Progress, In Review, Blocked, Closed, Rejected  
- Environment: Browser name/version, OS, device, network (e.g., Chrome 118/Win11/Laptop/Wi‑Fi)

---

### Severity Guidelines

- Critical: Crash, data loss, security issue, or feature unusable with no workaround.  
- Major: Significant functional issue with a reasonable workaround.  
+- Minor: Limited scope defect; does not block core flow.  
- Cosmetic: Visual/grammar/polish issue; no functional impact.

---

### Defect Log Table

| ID | Title | Module | Severity | Priority | Environment | Preconditions | Steps to Reproduce | Expected Result | Actual Result | Status | Assignee | Created | Evidence | Comments |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BUG-001 | “Total Requests” stays 0 after submitting a new pickup | Dashboard | Major | High | Chrome 142 / Win11 | App running; user can access Schedule and Dashboard | 1. Log in 2. Go to “Schedule Pickup” 3. Fill all required fields and submit 4. Navigate to “Dashboard” | Total Requests should increase to reflect the newly submitted request | Total Requests still shows 0 | Open | Unassigned | 2025-11-11 | Screenshot before/after submit | Count does not update after a successful submission |
| BUG-002 | Comment added to a post disappears after refresh | Blog/Community | Major | Medium | Chrome 142 / Win11 | Existing blog/community post | 1. Log in 2. Open a post 3. Add a comment and submit 4. Refresh the page (F5) | Newly added comment should still be visible after refresh | The comment is not present after refresh | Open | Unassigned | 2025-11-11 | Before/after refresh screenshots | Comments do not persist across page reloads |
| BUG-003 | Unable to create a blog post anywhere in the app (even as Admin) | Blog | Major | High | Chrome 142 / Win11 | Logged in as admin | 1. Log in as admin 2. Navigate through Blog and related admin routes 3. Attempt to create a new post | There should be a clear way for admins to create a blog post | No visible option or screen to create a blog post | Open | Unassigned | 2025-11-11 | Screenshots of Blog views and nav | Creation capability not accessible from UI |
| BUG-004 | Profile “My Requests” tab remains empty after creating requests | Profile | Minor | Medium | Edge 119 / Win11 | Create one or more pickup requests | 1. Create a pickup request 2. Open Profile 3. Switch to “My Requests” | Newly created requests should be listed | The list is empty | Open | Unassigned | 2025-11-11 | Screenshot of Profile tab | User cannot see own requests in profile |
| BUG-005 | “Requests Per Month” chart shows no bars despite requests created | Dashboard | Minor | Low | Chrome 142 / Win11 | At least one request created with a date | 1. Create a pickup request 2. Open Dashboard 3. Check Requests Per Month chart | Chart displays bars for months with requests | Chart renders with no bars | Open | Unassigned | 2025-11-11 | Screenshot of empty chart | Visual metric does not represent current requests |
| BUG-006 | Save button fails WCAG 2.1 AA required color contrast ratio | Dashboard | Major | Medium | Google Chrome Version 142 | axe DEV Tools Installed | 1. Open the Dashboard page at http://localhost:3000/dashboard  2. Open Chrome DevTools → axe DevTools i.e press F12 3. Run an accessibility scan 4. View the issue: “Elements must meet minimum color contrast ratio thresholds” | Button text should have a contrast ratio of at least 4.5 : 1 |The Save button contrast ratio is 1.98 : 1 (FAIL) | Open | Unassigned | 2025-11-17 | | Serious readability issue for users with visual impairments |
| BUG-007 | Page lacks proper heading structure , causing accessibility failure | Web Page | Medium |Medium | Google Chrome Version 142 | WAVE Accessibility Tool installed | 1. Go to https://cleancityprj.netlify.app/ 2. Open WAVE extension  3. Scan the page 4. Observe the alert: "No heading structure" | Page should have a logical heading hierarchy | No heading structure | Open | Unassigned | 2025-11-17 | | The page does not contain a valid heading structure |
| BUG-008 | Login accepts any credentials without validation | Authentication | Critical | High | Chrome 142 / Win11 | App loaded; no active session | 1. Open Login page 2. Enter any email and password (e.g., fake@test.com / wrongpass) 3. Click Login | Login should fail with error message for invalid credentials | Login succeeds with any credentials; user is logged in | Open | Unassigned | 2025-11-18 | Screenshot of login with invalid credentials | Security vulnerability - no authentication validation |
| BUG-009 | Registration allows duplicate email addresses | Authentication | Major | High | Chrome 142 / Win11 | App loaded; email already registered | 1. Register with email: user1@test.com 2. Logout 3. Register again with same email: user1@test.com | Registration should fail with error message indicating email already exists | Registration succeeds; duplicate accounts created | Open | Unassigned | 2025-11-18 | Screenshot of duplicate registration | Data integrity issue - allows duplicate users |
| BUG-010 | Pickup scheduling allows duplicate submissions with identical data | Pickup Scheduling | Major | Medium | Chrome 142 / Win11 | Logged-in user | 1. Schedule a pickup with date: Tomorrow, Waste: General, Qty: Medium 2. Submit 3. Schedule another pickup with exact same data 4. Submit | System should prevent duplicate submissions or show warning | Duplicate pickup requests created successfully | Open | Unassigned | 2025-11-18 | Screenshot of duplicate submissions | Data integrity issue - allows duplicate requests |
| BUG-011 | Pickup scheduling allows past dates | Pickup Scheduling | Major | High | Chrome 142 / Win11 | Logged-in user | 1. Go to Schedule Pickup 2. Select a date in the past (e.g., yesterday) 3. Fill other required fields 4. Submit | Validation error should prevent past date selection; no request created | Pickup request created with past date | Open | Unassigned | 2025-11-18 | Screenshot of past date selection | Business logic violation - past dates should be invalid |
| BUG-012 | Quiz on awareness page has no completion screen and keeps recurring | Awareness/Quiz | Major | Medium | Chrome 142 / Win11 | User navigates to Awareness section | 1. Go to Awareness page 2. Answer the 3 quiz questions 3. Submit answers | Quiz should show completion screen after answering all questions; quiz should not recur | Quiz keeps recurring after submission; no completion screen displayed | Open | Unassigned | 2025-11-18 | Screenshot of quiz behavior | User experience issue - no completion feedback |
| BUG-013 | Blog comments don't appear in "My Comments" under profile | Blog/Profile | Major | Medium | Chrome 142 / Win11 | Logged-in user; blog post exists | 1. Login as user 2. Go to Blog section 3. Add a comment on a post 4. Go to Profile 5. Check "My Comments" section | User's comments should be listed in "My Comments" under profile | "My Comments" section is empty; no comments displayed | Open | Unassigned | 2025-11-18 | Screenshot of profile "My Comments" section | Data visibility issue - user cannot see own comments |
| BUG-014 | Admin cannot see requests created by users | Admin | Critical | High | Chrome 142 / Win11 | Admin account exists; user has created requests | 1. Login as regular user (tester) 2. Create a pickup request 3. Logout 4. Login as admin 5. Go to Admin panel 6. View Requests | Admin should see all pickup requests created by users | Admin panel shows no requests; requests list is empty | Open | Unassigned | 2025-11-18 | Screenshot of admin panel with empty requests | Critical functionality failure - admin cannot manage requests |
| BUG-015 | Page lacks proper heading structure, causing accessibility failure | Web Page | Medium | Medium | Google Chrome Version 142 | WAVE Accessibility Tool installed | 1. Go to https://cleancityprj.netlify.app/ 2. Open WAVE extension 3. Scan the page 4. Observe the alert: "No heading structure" | Page should have a logical heading hierarchy | No heading structure | Open | Unassigned | 2025-11-17 | | The page does not contain a valid heading structure |

---

### Mapping to Requirements (Trace)

- FR-025 Analytics accuracy: BUG-001, BUG-005  
- FR-016/019 Request management visibility: BUG-002, BUG-004, BUG-014  
- FR-012 Scheduling persistence: BUG-002, BUG-010, BUG-011  
- FR-XXX Authentication validation: BUG-008, BUG-009  
- FR-XXX Profile data visibility: BUG-004, BUG-013  
- FR-XXX Awareness/Quiz functionality: BUG-012  
- Non-functional data integrity/consistency: BUG-001, BUG-004, BUG-005, BUG-006, BUG-007, BUG-009, BUG-010  
- Accessibility: BUG-006, BUG-007, BUG-015  
- Security: BUG-008

---

### Workflow Checklist (per Defect)

- [ ] Reproduced and triaged (Severity/Priority set)  
- [ ] Linked to requirement/test case  
- [ ] Evidence attached (screenshots/videos/logs)  
- [ ] Assigned to developer/owner  
- [ ] Fix verified and regression tested  
- [ ] Closed with resolution and notes
