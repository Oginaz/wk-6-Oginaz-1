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
| BUG-001 | Dashboard shows 0 Total Requests despite existing data | Dashboard | Major | High | Chrome 142 / Win11 | App opened previously; sample data visible in other screens | 1. Open the app 2. Navigate to Dashboard | Total Requests shows the actual number of recorded requests | Total Requests displays 0 | Open | Unassigned | 2025-11-11 | Screenshot of Dashboard | Metric not reflecting available request data |
| BUG-002 | Scheduling form confirms submission but no request appears anywhere | Home (Schedule) | Major | High | Chrome 142 / Win11 | App running | 1. Go to Schedule Pickup 2. Fill all required fields 3. Click Submit 4. Check Dashboard/Profile/history | New request should be created and visible in relevant lists/metrics | Success message shown, but no new request appears in any view | Open | Unassigned | 2025-11-11 | Screen recording of submit + follow-up views | Impacts analytics and user history visibility |
| BUG-003 | Filtering by Eldoret returns entries for a different location | Requests filtering | Minor | Medium | Firefox 120 / Win11 | Have multiple requests across locations | 1. Open any page that filters or lists by location 2. Select Eldoret | Only Eldoret requests should be shown | Results include requests from another location (e.g., Nairobi) | Open | Unassigned | 2025-11-11 | Screenshot of filter + results | Location-based filtering inaccurate |
| BUG-004 | Profile “My Requests” tab remains empty after creating requests | Profile | Minor | Medium | Edge 119 / Win11 | Create one or more pickup requests | 1. Create a pickup request 2. Open Profile 3. Switch to “My Requests” | Newly created requests should be listed | The list is empty | Open | Unassigned | 2025-11-11 | Screenshot of Profile tab | User cannot see own requests in profile |
| BUG-005 | “Requests Per Month” chart shows no bars despite requests created | Dashboard | Minor | Low | Chrome 142 / Win11 | At least one request created with a date | 1. Create a pickup request 2. Open Dashboard 3. Check Requests Per Month chart | Chart displays bars for months with requests | Chart renders with no bars | Open | Unassigned | 2025-11-11 | Screenshot of empty chart | Visual metric does not represent current requests |


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