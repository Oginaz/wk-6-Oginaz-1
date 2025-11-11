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
| BUG-001 | Login fails with valid credentials | Authentication | Major | High | Chrome 118 / Win11 | User exists: user1@test.com | 1. Open Login 2. Enter valid creds 3. Click Login | User should be logged in and redirected | Error shown; user remains on login | Open | Unassigned | 2025-11-11 | link | Initial discovery during smoke test |
| BUG-002 | Past date allowed in pickup form | Pickup Scheduling | Major | High | Firefox 120 / Win11 | Logged-in user | 1. Open Schedule 2. Select yesterday 3. Submit | Validation error for past date | Request created with past date | Open | Unassigned | 2025-11-11 | link | Violates FR-013 |
| BUG-003 | Notification badge does not decrement | Notifications | Minor | Medium | Edge 119 / Win11 | Unread notifications exist | 1. Open bell 2. Mark all read | Badge count becomes 0 | Count remains >0 until reload | Open | Unassigned | 2025-11-11 | link | Intermittent |
| BUG-004 | Screen reader label missing on Register button | Accessibility | Cosmetic | Low | NVDA / Chrome 118 | N/A | 1. Navigate to Register 2. Use screen reader | Button has accessible name/role | Button announced as “button” only; no name | Open | Unassigned | 2025-11-11 | link | WCAG 2.5.3 / 4.1.2 |


---

### Mapping to Requirements (Trace)

- FR-004 Login: BUG-001  
- FR-013 Date validation: BUG-002  
- FR-065 Notifications: BUG-003  
- FR-071–074 Accessibility: BUG-004

---

### Workflow Checklist (per Defect)

- [ ] Reproduced and triaged (Severity/Priority set)  
- [ ] Linked to requirement/test case  
- [ ] Evidence attached (screenshots/videos/logs)  
- [ ] Assigned to developer/owner  
- [ ] Fix verified and regression tested  
- [ ] Closed with resolution and notes


