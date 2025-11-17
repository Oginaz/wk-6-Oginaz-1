## CleanCity Defect Log

Document Version: 1.0  
Date: November 11, 2025  
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
| | | | | | | | | | | | | | | |

---

### Mapping to Requirements (Trace)

- FR-025 Analytics accuracy: BUG-001, BUG-005  
- FR-016/019 Request management visibility: BUG-002, BUG-004  
- FR-012 Scheduling persistence: BUG-002  
- Non-functional data integrity/consistency: BUG-001, BUG-004, BUG-005

---

### Workflow Checklist (per Defect)

- [ ] Reproduced and triaged (Severity/Priority set)  
- [ ] Linked to requirement/test case  
- [ ] Evidence attached (screenshots/videos/logs)  
- [ ] Assigned to developer/owner  
- [ ] Fix verified and regression tested  
- [ ] Closed with resolution and notes
