# Software Test Report

## CleanCity - Waste Pickup Scheduler v1.0

**Document ID:** TR-2025-001

**Date of Report:** November 18, 2025

**Prepared by:** QA Testing Team (Isaac Okai, Joel Githara, Sammy Shoka)

**Version:** 1.0

---

## Executive Summary

This report presents the results of comprehensive testing conducted on the CleanCity Waste Pickup Scheduler web application version 1.0 from November 1 to November 18, 2025. The testing focused on validating all functional features, ensuring data integrity with localStorage, verifying security measures, assessing accessibility compliance, and confirming compatibility across browsers and devices.

### Key Findings:

- **Test Execution:** All 59 planned test cases were executed (100% execution rate)
- **Pass Rate:** 38 test cases passed (64.4% pass rate)
- **Fail Rate:** 21 test cases failed (35.6% fail rate)
- **Total Defects:** 23 defects identified and documented
- **Critical Issues:** 2 critical security and functionality issues identified (authentication validation and admin request visibility)
- **Core Functionality:** Basic user features (login, registration, navigation) function correctly
- **Major Concerns:** Admin panel functionality completely non-functional; pickup scheduling has data persistence issues; authentication lacks proper validation

**Recommendation:** The QA team **DOES NOT RECOMMEND** proceeding with production release in the current state. Critical security vulnerabilities and core functionality failures must be addressed before release consideration. A minimum of 2-3 weeks of development and retesting is required to address critical and high-priority defects.

---

## 1. Test Objective

The primary objective of this testing cycle was to evaluate the quality, functionality, performance, security, and usability of the CleanCity Waste Pickup Scheduler web application before its release to production. Specifically, our testing aimed to:

1. **Validate Functional Requirements:** Verify that all features from the functional requirements specification are implemented and function correctly, including user authentication, pickup scheduling, dashboard analytics, admin functions, blog, community features, and profile management.

2. **Ensure Data Integrity:** Verify that data persistence in localStorage functions correctly across sessions, that data is properly validated, and that data consistency is maintained.

3. **Verify Security Measures:** Validate that security measures are in place for user authentication, input sanitization, XSS prevention, and data protection.

4. **Assess Accessibility Compliance:** Verify WCAG 2.1 AA level compliance for accessibility, including keyboard navigation, screen reader support, color contrast, and proper heading structure.

5. **Evaluate Performance:** Assess application performance under various network conditions, verify page load times, and check for memory leaks.

6. **Test Compatibility:** Verify the application functions correctly across major browsers (Chrome, Firefox, Edge, Brave) and different device sizes (desktop, tablet, mobile).

This round of testing was conducted over a three-week period from November 1, 2025, to November 18, 2025, following the test plan created on November 5, 2025.

---

## 2. Areas Covered

### 2.1 Functional Testing

The following functional areas were thoroughly tested:

#### **User Authentication & Account Management**
- Registration process with validation
- Login/logout functionality
- Session management with localStorage
- Role-based access control (User/Admin)
- Duplicate email prevention
- Invalid credential handling

#### **Waste Management & Pickup Scheduling**
- Schedule pickup requests with date, waste type, quantity, and instructions
- View request history
- Cancel pending requests
- Modify requests before 24-hour window
- Prevent past date scheduling
- Prevent duplicate submissions
- Field validation (required fields, max length)

#### **Dashboard & Analytics**
- Display recent and upcoming pickups
- Environmental metrics computation
- Requests per month chart
- Leaderboard rendering
- Total requests counter

#### **Administrative Functions**
- View all pickup requests
- Approve pending requests
- Reject pending requests
- Admin access control
- User request visibility

#### **Blog & Community Features**
- List published blog posts
- View blog articles
- Create/edit blog posts (admin)
- Create community posts
- Like posts
- Comment on posts
- View user comments in profile

#### **Profile Management**
- View and edit profile information
- Update profile name
- Upload/change avatar
- View "My Requests" tab
- View "My Comments" section

#### **Awareness & Quiz**
- Quiz functionality
- Completion screen display
- Quiz recurrence prevention

#### **Notifications**
- Unread count display
- Mark as read functionality

---

### 2.2 Non-Functional Testing

The following non-functional areas were tested:

#### **Performance Testing**
- Page load times (Lighthouse)
- Interaction latency
- Network throttling (3G, 4G, 5G, Wi-Fi)
- Memory usage and leak detection

#### **Compatibility Testing**
- Cross-browser testing (Chrome, Firefox, Edge, Brave)
- Responsive design testing (Desktop, Tablet, Mobile)
- Orientation change handling
- Screen size adaptation

#### **Security Testing**
- XSS prevention in form inputs
- URL parameter injection handling
- localStorage tampering validation
- Authentication and authorization mechanisms
- Input validation and sanitization

#### **Accessibility Testing (WCAG 2.1 AA)**
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Alt text for images
- Heading structure

#### **Validation & Error Handling**
- Field-level inline error messages
- XSS payload sanitization
- Boundary value enforcement
- Empty/whitespace input handling
- Unicode input handling

#### **Negative & Edge Cases**
- Empty/whitespace-only inputs
- Unicode character handling
- Large localStorage datasets

---

## 3. Areas Not Covered

The following areas were not included in this testing cycle:

- **Backend API Integration Testing**
  - **Reason:** Application uses localStorage only; no backend API exists

- **Database Testing**
  - **Reason:** No database is used; all data stored in browser localStorage

- **Load/Stress Testing**
  - **Reason:** Single-user application; load testing not applicable for current scope

- **Penetration Testing**
  - **Reason:** Basic security testing performed; comprehensive penetration testing would require specialized security team

- **Mobile App Testing**
  - **Reason:** Web application only; mobile testing covered through responsive design validation

- **Third-Party Integration Testing**
  - **Reason:** No third-party integrations in current version

---

## 4. Testing Approach

### 4.1 Test Strategy

Our testing approach combined various testing methodologies to ensure comprehensive coverage:

#### **1. Risk-Based Testing**
- Identified high-risk areas through requirements analysis and stakeholder input
- Authentication, admin functionality, and data persistence received additional testing focus due to their critical nature
- Security vulnerabilities prioritized for immediate attention

#### **2. Test Case Design**
- Test cases designed using black-box testing techniques
- Boundary value analysis applied to input fields (dates, text length, quantities)
- Equivalence partitioning used for valid/invalid data groups
- Decision tables used for complex business rules (pickup scheduling, role-based access)

#### **3. Manual Testing**
- All test cases executed manually
- Exploratory testing sessions conducted for edge cases and usability
- Ad-hoc testing performed to identify unexpected behaviors

---

### 4.2 Testing Process

The testing process followed these phases:

#### **1. Test Planning (November 1-5, 2025)**
- Test plan creation and resource allocation
- Test case design and documentation
- Test environment setup
- Test data preparation

#### **2. Test Execution (November 6-17, 2025)**
- Smoke testing on initial build
- Full functional testing
- Non-functional testing (performance, security, accessibility, compatibility)
- Regression testing after defect fixes

#### **3. Defect Management (Ongoing)**
- Defects logged in defect-log.md with severity and priority assignments
- Daily defect review and tracking
- Defect correlation with test cases

#### **4. Reporting & Analysis (November 18, 2025)**
- Test results compilation and metrics analysis
- Final assessment and recommendations
- Report preparation

---

### 4.3 Testing Tools

The following tools were utilized during the testing process:

- **Test Management:** Markdown documentation (test-case.md, test-metrics.md)
- **Defect Tracking:** defect-log.md (mirrored to Jira/GitHub)
- **Browser DevTools:** Chrome DevTools, Firefox DevTools, Edge DevTools
- **Performance Testing:** Lighthouse, Chrome Performance tab, Network throttling
- **Accessibility Testing:** WAVE, axe DevTools, Accessibility Scanner
- **Security Testing:** Manual XSS payload testing, localStorage inspection
- **Compatibility Testing:** BrowserStack (if available), manual cross-browser testing

---

### 4.4 Sample Key Test Cases

Below are examples of critical test cases that helped validate core functionality:

#### **Test Case ID: AUTH-001**
- **Title:** Login succeeds with valid credentials
- **Preconditions:** App loaded; no active session
- **Test Data:** Email: user1@test.com, Password: TestPass123
- **Steps:**
  1. Open Login page
  2. Enter valid credentials
  3. Click Login
- **Expected Results:** User is logged in, redirected to dashboard; session stored in localStorage
- **Actual Results:** As expected
- **Status:** PASS

#### **Test Case ID: AUTH-002**
- **Title:** Login fails with invalid password
- **Preconditions:** App loaded; user exists
- **Test Data:** Email: user1@test.com, Password: WrongPassword
- **Steps:**
  1. Open Login page
  2. Enter email + wrong password
  3. Click Login
- **Expected Results:** Error message displayed; user remains logged out; no session stored
- **Actual Results:** Login succeeds with any credentials; no validation performed
- **Status:** FAIL (BUG-008)

#### **Test Case ID: PICK-001**
- **Title:** Schedule pickup with valid data
- **Preconditions:** Logged-in user
- **Test Data:** Date: Tomorrow; Waste: General; Qty: Medium; Instr: "Please ring doorbell"
- **Steps:**
  1. Go to Schedule
  2. Fill form
  3. Submit
- **Expected Results:** Pickup created with status Pending; appears in history; stored in localStorage
- **Actual Results:** Success message shows, but request not found in any list
- **Status:** FAIL

---

## 5. Defect Report

### 5.1 Defect Summary

A total of 23 defects were identified during the testing cycle, categorized by severity as follows:

| Severity | Count | Percentage | Status |
|:---------|:------|:-----------|:------|
| Critical | 2 | 8.7% | Open |
| Major | 15 | 65.2% | Open |
| Minor | 4 | 17.4% | Open |
| Medium | 2 | 8.7% | Open |
| **Total** | **23** | **100%** | **All Open** |

### 5.2 Defect Distribution by Module

| Module | Critical | Major | Minor | Medium | Total |
|:-------|:---------|:------|:------|:-------|:------|
| Authentication | 1 | 1 | 0 | 0 | 2 |
| Pickup Scheduling | 0 | 6 | 1 | 0 | 7 |
| Dashboard | 0 | 1 | 1 | 0 | 2 |
| Admin | 2 | 2 | 0 | 0 | 4 |
| Blog/Community | 0 | 2 | 0 | 0 | 2 |
| Profile | 0 | 1 | 1 | 0 | 2 |
| Awareness/Quiz | 0 | 1 | 0 | 0 | 1 |
| Accessibility | 0 | 1 | 0 | 2 | 3 |
| **Total** | **2** | **15** | **3** | **2** | **23** |

### 5.3 Critical Defects

#### **BUG-008: Login accepts any credentials without validation**
- **Severity:** Critical
- **Priority:** High
- **Module:** Authentication
- **Impact:** Security vulnerability - any user can login with any credentials, bypassing authentication
- **Status:** Open
- **Recommendation:** Immediate fix required before any release consideration

#### **BUG-014: Admin cannot see requests created by users**
- **Severity:** Critical
- **Priority:** High
- **Module:** Admin
- **Impact:** Core admin functionality completely broken; admin cannot manage pickup requests
- **Status:** Open
- **Recommendation:** Immediate fix required; blocks admin workflow entirely

### 5.4 High-Priority Defects

Key high-priority defects include:
- **BUG-009:** Registration allows duplicate email addresses
- **BUG-011:** Pickup scheduling allows past dates
- **BUG-017:** Duplicate pickups allowed for same date per user
- **BUG-022:** Approve pending request functionality not working
- **BUG-023:** Reject pending request functionality not working
- **BUG-024:** Admin cannot view requests created by users

### 5.5 Defect Resolution Status

| Status | Count | Percentage |
|:-------|:------|:-----------|
| Open | 23 | 100% |
| In Progress | 0 | 0% |
| Fixed | 0 | 0% |
| Closed | 0 | 0% |

**Note:** All defects remain open as of the report date. No fixes have been implemented or verified.

---

## 6. Test Environment

### 6.1 Browser Configuration

The following browsers and versions were used for testing:

| Browser | Version | OS | Status |
|:--------|:-------|:--|:-------|
| Google Chrome | 142 | Windows 11 | Primary |
| Microsoft Edge | 119 | Windows 11 | Tested |
| Mozilla Firefox | Latest | Windows 11 | Tested |
| Brave Browser | Latest | Windows 11 | Tested |

### 6.2 Device Configuration

Testing was performed on the following device configurations:

| Device Type | Screen Resolution | OS | Status |
|:------------|:------------------|:--|:-------|
| Desktop | 1920x1080 | Windows 11 | Primary |
| Laptop | 1366x768 | Windows 11 | Tested |
| Tablet (Emulated) | 768x1024 | Chrome DevTools | Tested |
| Mobile (Emulated) | 375x667 | Chrome DevTools | Tested |

### 6.3 Network Conditions Tested

- **High-Performance:** Wi-Fi (100+ Mbps)
- **Average Mobile:** 4G/LTE (10-20 Mbps)
- **5G Connection:** 5G (50+ Mbps)
- **Poor Connection:** Throttled 3G (1-2 Mbps)
- **Offline Mode:** Testing offline functionality and data synchronization

### 6.4 Tools and Frameworks

- **Browser DevTools:** Chrome DevTools, Firefox DevTools, Edge DevTools
- **Performance Monitoring:** Lighthouse, Chrome Performance tab, Memory profiler
- **Accessibility Testing:** WAVE extension, axe DevTools, Accessibility Scanner
- **Security Testing:** Manual testing, localStorage inspection
- **Test Documentation:** Markdown files, GitHub

---

## 7. Overall Status

### 7.1 Testing Summary

- **Test Cases Planned:** 59
- **Test Cases Executed:** 59 (100%)
- **Test Case Pass Rate:** 38 passed (64.4%)
- **Test Case Fail Rate:** 21 failed (35.6%)
- **Automation Coverage:** 0% (all manual testing)
- **Code Coverage:** N/A (black-box testing only)
- **Critical User Journeys:** 40% passing (6 out of 15 critical journeys verified)

### 7.2 Quality Assessment

Based on our testing results, the CleanCity v1.0 application has **NOT reached a satisfactory level of quality** for production release with the following observations:

#### **Strengths:**
- Basic authentication flow (login/logout) works correctly for valid credentials
- Registration process functions with proper field validation
- Navigation and routing work correctly
- Cross-browser compatibility is good for basic functionality
- Security measures (XSS prevention, input sanitization) are implemented
- Performance is acceptable for page loads and interactions
- Responsive design adapts to different screen sizes

#### **Critical Areas of Concern:**
1. **Security Vulnerability:** Login accepts any credentials without validation (BUG-008) - **CRITICAL**
2. **Admin Functionality:** Complete failure of admin panel - cannot view, approve, or reject requests (BUG-014, BUG-022, BUG-023, BUG-024) - **CRITICAL**
3. **Data Persistence:** Pickup requests are created but not visible in dashboard or history (BUG-001, PICK-001) - **MAJOR**
4. **Data Integrity:** Duplicate registrations, duplicate pickups, and past date scheduling allowed (BUG-009, BUG-010, BUG-011, BUG-017) - **MAJOR**
5. **Request Management:** Cancel and modify functionality not working (BUG-018, BUG-019) - **MAJOR**
6. **Accessibility:** Missing heading structure and color contrast issues (BUG-006, BUG-015) - **MEDIUM**

---

### 7.3 Risk Assessment

The risks associated with releasing the application in its current state are:

#### **1. Security Vulnerability (BUG-008): HIGH RISK**
- **Impact:** Critical - Any unauthorized user can access any account
- **Likelihood:** High - Vulnerability is easily exploitable
- **Mitigation:** Implement proper authentication validation before any release consideration

#### **2. Admin Functionality Failure: HIGH RISK**
- **Impact:** Critical - Admin users cannot perform their core responsibilities
- **Likelihood:** High - All admin test cases failed
- **Mitigation:** Complete rewrite/repair of admin functionality required

#### **3. Data Persistence Issues: MEDIUM RISK**
- **Impact:** High - Users cannot see their created requests, leading to confusion and duplicate submissions
- **Likelihood:** High - Affects all pickup scheduling functionality
- **Mitigation:** Fix localStorage data storage and retrieval logic

#### **4. Data Integrity Issues: MEDIUM RISK**
- **Impact:** Medium - Duplicate data and invalid dates can be created
- **Likelihood:** Medium - Affects data quality and business logic
- **Mitigation:** Implement proper validation and duplicate prevention

#### **5. Accessibility Compliance: LOW RISK**
- **Impact:** Low - Affects users with disabilities but doesn't block core functionality
- **Likelihood:** Medium - WCAG violations present
- **Mitigation:** Fix heading structure and color contrast issues

---

### 7.4 Release Recommendation

Based on our comprehensive testing and the current status of the application, the QA team **DOES NOT RECOMMEND PROCEEDING WITH THE RELEASE** of CleanCity v1.0 to production in its current state.

#### **Required Actions Before Release Consideration:**

1. **Critical Priority (Must Fix):**
   - Fix authentication validation (BUG-008) - Security vulnerability
   - Fix admin functionality (BUG-014, BUG-022, BUG-023, BUG-024) - Core admin features
   - Fix data persistence (BUG-001, PICK-001) - Core user functionality

2. **High Priority (Should Fix):**
   - Fix duplicate registration prevention (BUG-009)
   - Fix past date validation (BUG-011)
   - Fix duplicate pickup prevention (BUG-010, BUG-017)
   - Fix request management (BUG-018, BUG-019)

3. **Medium Priority (Nice to Have):**
   - Fix dashboard metrics (BUG-005, DASH-001, DASH-002)
   - Fix profile features (BUG-004, BUG-013, BUG-021)
   - Fix quiz completion (BUG-012)
   - Fix accessibility issues (BUG-006, BUG-015)

#### **Estimated Timeline:**
- **Minimum:** 2-3 weeks of development work
- **Recommended:** 4-6 weeks including thorough retesting
- **Retesting Required:** All 21 failed test cases plus regression testing

---

### 7.5 Post-Release Activities (If Release Proceeds After Fixes)

The following activities are recommended after release:

1. **Close Monitoring:** Monitor application performance metrics for the first week
2. **User Feedback:** Collect user feedback on core features
3. **Defect Tracking:** Monitor for any new defects or issues
4. **Performance Monitoring:** Track page load times and user interactions
5. **Accessibility Audit:** Conduct follow-up accessibility testing
6. **Security Review:** Perform additional security testing

---

## 8. Requirements Traceability

The following table shows how key requirements were validated through testing:

| Requirement ID | Requirement Description | Test Case IDs | Status |
|:---------------|:------------------------|:--------------|:-------|
| FR-AUTH-001 | System shall authenticate users with valid credentials | AUTH-001 | PASSED |
| FR-AUTH-002 | System shall reject invalid login credentials | AUTH-002 | FAILED (BUG-008) |
| FR-AUTH-003 | System shall prevent duplicate email registration | AUTH-009 | FAILED (BUG-009) |
| FR-PICK-001 | System shall allow users to schedule pickup requests | PICK-001 | FAILED |
| FR-PICK-002 | System shall prevent past date scheduling | PICK-002, PICK-009 | FAILED (BUG-011) |
| FR-PICK-003 | System shall prevent duplicate pickups per date | PICK-005 | FAILED (BUG-017) |
| FR-ADMIN-001 | Admin shall view all pickup requests | ADMIN-001, ADMIN-004 | FAILED (BUG-014, BUG-024) |
| FR-ADMIN-002 | Admin shall approve pending requests | ADMIN-002 | FAILED (BUG-022) |
| FR-ADMIN-003 | Admin shall reject pending requests | ADMIN-003 | FAILED (BUG-023) |
| FR-DASH-001 | Dashboard shall display user requests | DASH-001 | FAILED (BUG-001) |
| FR-DASH-002 | Dashboard shall compute environmental metrics | DASH-002 | FAILED |
| FR-PROF-001 | Profile shall display user requests | PROF-001 (My Requests) | FAILED (BUG-004) |
| FR-ACCESS-001 | Application shall meet WCAG 2.1 AA standards | A11Y-001 through A11Y-005 | PARTIAL (4/5 passed) |

---

## 9. Testing Challenges & Lessons Learned

### 9.1 Challenges Encountered

1. **Data Persistence Issues:**
   - **Challenge:** Pickup requests created but not visible in UI
   - **Impact:** Made it difficult to test request management features
   - **Solution:** Used browser DevTools to inspect localStorage directly

2. **Admin Functionality Complete Failure:**
   - **Challenge:** All admin features non-functional, blocking admin testing
   - **Impact:** Could not verify admin workflows
   - **Solution:** Documented all failures and provided detailed defect reports

3. **Authentication Validation Missing:**
   - **Challenge:** No validation on login, allowing any credentials
   - **Impact:** Security testing revealed critical vulnerability
   - **Solution:** Documented as critical defect requiring immediate attention

4. **Test Data Management:**
   - **Challenge:** localStorage data management across test sessions
   - **Impact:** Required clearing localStorage between test runs
   - **Solution:** Documented test data cleanup procedures

---

### 9.2 Lessons Learned

1. **Early Security Testing:** Conducting security testing early revealed critical authentication vulnerability that would have been catastrophic in production.

2. **Comprehensive Test Coverage:** Testing all user roles (regular user and admin) revealed that admin functionality was completely broken, which might have been missed with limited testing.

3. **Data Integrity Testing:** Testing data persistence and validation revealed multiple data integrity issues that could lead to data corruption.

4. **Accessibility Testing:** Early accessibility testing identified compliance issues that are easier to fix during development than after release.

5. **Documentation Importance:** Comprehensive defect documentation with steps to reproduce helped identify root causes and prioritize fixes.

---

## 10. Appendices

### 10.1 Test Case Execution Details

Detailed test case execution results are available in:
- **Test Cases:** `tests/test-case.md` (59 test cases)
- **Test Metrics:** `tests/test-metrics.md` (execution results and statistics)
- **Test Plan:** `tests/test-plan.md` (testing strategy and approach)

### 10.2 Defect Details

Complete details of all defects, including:
- **Defect Log:** `tests/defect-log.md` (23 defects with full details)
- **Defect IDs:** BUG-001 through BUG-024 (BUG-020 removed as test passed)
- **Severity Distribution:** 2 Critical, 15 Major, 3 Minor, 2 Medium, 1 removed

### 10.3 Test Data Used

Test data specifications:
- **User Accounts:** user1@test.com, admin@cleancity.com, newuser@test.com
- **Test Passwords:** TestPass123, AdminPass123
- **Pickup Data:** Various dates, waste types, quantities, and instructions
- **Test Payloads:** XSS payloads, boundary values, unicode characters

### 10.4 Performance Test Results

Performance test results:
- **Page Load:** Within acceptable limits (< 3 seconds)
- **Interaction Latency:** < 1 second for most interactions
- **Network Throttling:** App remains usable on 3G connections
- **Memory Usage:** No significant memory leaks detected

### 10.5 Accessibility Test Results

Accessibility test results:
- **Keyboard Navigation:** PASSED
- **Screen Reader Support:** PASSED
- **Color Contrast:** PARTIAL (some violations)
- **Alt Text:** PASSED
- **Heading Structure:** FAILED (BUG-015)

---

## 11. Approvals

The following stakeholders have reviewed this report:

| Role | Name | Approval Date | Signature | Notes |
|:-----|:-----|:--------------|:-----------|:------|
| Test Manager | Isaac Okai | November 18, 2025 | [Approved] | Does not recommend release in current state |
| Test Executor | Joel Githara | November 18, 2025 | [Approved] | Critical defects must be fixed before release |
| Risk Analyst | Sammy Shoka | November 18, 2025 | [Approved] | Security and admin issues are blockers |

By signing above, approvers acknowledge they have reviewed this report in its entirety and understand the current state of the application, including all limitations, risks, and required actions before release consideration.

---

## End of Test Report

**Report Prepared By:** QA Testing Team  
**Date:** November 18, 2025  
**Next Review:** After critical defect fixes and retesting

---

