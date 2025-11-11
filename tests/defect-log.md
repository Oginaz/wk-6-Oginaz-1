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
| BUG-001 | Dashboard shows zero requests due to storage key mismatch | Dashboard | Major | High | Chrome 142 / Win11 | Sample data initialized | 1. Open Dashboard 2. Observe "Total Requests" | Count reflects stored requests | Count is 0 because Dashboard reads `pickupRequests` but data saved in `cleancity_pickup_requests` | Open | Unassigned | 2025-11-11 | N/A | Code: `Dashboard.js` uses `pickupRequests`; `dataService.js` uses `cleancity_pickup_requests` |
| BUG-002 | Schedule form does not save requests | Home (Schedule) | Major | High | Chrome 142 / Win11 | App running | 1. Go to Schedule 2. Fill all fields 3. Submit | New request saved to localStorage and visible in history/dashboard | Success message shown but no data saved; no call to `dataService.addPickupRequest` | Open | Unassigned | 2025-11-11 | N/A | Affects downstream analytics and profile history |
| BUG-003 | Eldoret filter returns Nairobi data | Data Service | Minor | Medium | Firefox 120 / Win11 | Data present | 1. Call `filterRequestsByLocation('Eldoret')` via UI or console | Eldoret requests only | Returns Nairobi requests due to hardcoded condition | Open | Unassigned | 2025-11-11 | N/A | Code comment acknowledges bug in `dataService.js` lines 146-153 |
| BUG-004 | Profile "My Requests" never shows items | Profile | Minor | Medium | Edge 119 / Win11 | Requests exist | 1. Create requests 2. Open Profile > My Requests | List of user’s requests | Empty list: Profile reads `pickupRequests` and expects fields `date/location/status`; data uses `cleancity_pickup_requests` with `preferredDate` and no `email` | Open | Unassigned | 2025-11-11 | N/A | Key mismatch and differing field names cause no matches |
| BUG-005 | Dashboard charts use wrong date field | Dashboard | Minor | Low | Chrome 142 / Win11 | Requests with preferredDate | 1. Open Dashboard 2. Check Requests Per Month | Bars reflect request months | Uses `r.date`, but requests store `preferredDate`; chart empty | Open | Unassigned | 2025-11-11 | N/A | See `Dashboard.js:getRequestsPerMonth` |


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