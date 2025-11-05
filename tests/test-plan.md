# CleanCity Test Plan

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** November 5, 2025  
**Project:** CleanCity - Waste Pickup Scheduler  
**Prepared By:** QA Testing Team  
**Status:** Final  

---

## 🎯 **Phase 1: Test Planning**

### **Project Overview**

**Project Name:** CleanCity - Waste Pickup Scheduler  
**Application Type:** React.js Single-Page Application (SPA)  
**Storage:** Browser localStorage (client-side persistence)  
**Target Users:** Residents, Administrators, Community Members  
**Testing Period:** Until November 18th, 2025  

### **Objective**

To verify that all the project's features function correctly, meet performance standards, meet project requirements, and provide a secure and user-friendly experience across different platforms and browsers.

---

## 🎯 **Testing Strategy Development**

The testing strategy covers all functional and non-functional requirements for the project, following industry-standard Software Testing Life Cycle (STLC) phases.

### **(1) In Scope**

#### **Functional Testing of All Modules**
- ✅ **User Authentication**
  - Registration, login, logout
  - Password validation and security
  - Session management
  - Role-based access control (User/Admin)

- ✅ **Waste Management and Pickup Scheduling**
  - Schedule pickup requests
  - View request history
  - Cancel/modify requests
  - Request status tracking

- ✅ **Dashboards and Analytics**
  - User dashboard functionality
  - Statistics and metrics display
  - Charts and visualizations
  - Leaderboards and gamification

- ✅ **Administrative Functions**
  - Admin panel access
  - Request management
  - User management
  - Content moderation

- ✅ **Blog and Community Functions**
  - Blog post creation and viewing
  - Comments and interactions
  - Community feed posts
  - Likes and comments

- ✅ **Content Management**
  - Awareness section (tips, quizzes)
  - Profile management
  - Notification system

- ✅ **Form Validation and Error Handling**
  - Input validation
  - Error message display
  - Required field validation
  - Data sanitization

#### **Non-Functional Testing**
- ✅ **Usability Testing**
  - User experience evaluation
  - Navigation intuitiveness
  - UI/UX consistency
  - User workflow efficiency

- ✅ **Cross-Browser and Device Compatibility**
  - Chrome, Firefox, Safari, Edge
  - Desktop, tablet, mobile devices
  - Responsive design validation
  - Touch and gesture support

- ✅ **Accessibility Testing**
  - WCAG 2.1 AA compliance
  - Screen reader compatibility (NVDA, JAWS, VoiceOver)
  - Keyboard navigation
  - Color contrast and visual accessibility

- ✅ **Performance Testing**
  - Page load times
  - Responsiveness and smooth animations
  - Memory usage
  - Network throttling scenarios

- ✅ **Security Testing**
  - Input validation and sanitization
  - XSS prevention
  - Data protection in localStorage
  - Session security

- ✅ **Data Integrity Testing**
  - localStorage functionality
  - Data persistence across sessions
  - Data consistency
  - Storage limit handling

### **(2) Out of Scope**

- ❌ Advanced load testing (stress testing with thousands of concurrent users)
- ❌ Backend API testing (application uses localStorage only)
- ❌ Database testing (no backend database)
- ❌ Mobile app testing (web application only)
- ❌ Third-party integrations testing

---

## 📊 **Test Objectives**

1. **Validate Functional Requirements**
   - Verify all requirements from `functional-requirements.md` are met
   - Test all user stories and business rules
   - Validate business logic and workflows

2. **Detect and Document Defects**
   - Identify functional, non-functional, and performance defects
   - Document at least 15 defects in Jira
   - Categorize defects by severity (Critical, Major, Minor, Cosmetic)
   - Ensure minimum distribution: 3 critical/major, 5 medium, 7 minor/cosmetic

3. **Cross-Platform Verification**
   - Verify application functions correctly across major browsers
   - Validate responsive design on different devices
   - Test compatibility with different screen sizes

4. **Accessibility Compliance**
   - Verify WCAG 2.1 AA level compliance
   - Test with screen readers
   - Validate keyboard navigation
   - Check color contrast and visual accessibility

5. **Data Integrity Verification**
   - Confirm data persistence in localStorage
   - Verify data consistency across sessions
   - Test storage limit handling
   - Validate data validation and sanitization

6. **Performance Validation**
   - Verify page load times (< 3 seconds)
   - Test responsiveness (< 1 second for interactions)
   - Monitor memory usage
   - Validate performance under different network conditions

---

## 📦 **Test Data Requirements**

### **Test User Accounts**

**Regular Users:**
- `user1@test.com` / `TestPass123` (User role)
- `user2@test.com` / `TestPass123` (User role)
- `user3@test.com` / `TestPass123` (User role)

**Admin Users:**
- `admin@cleancity.com` / `AdminPass123` (Admin role)
- `moderator@cleancity.com` / `ModPass123` (Admin role)

**Test Accounts for Registration:**
- New user accounts with various valid/invalid data combinations
- Edge case scenarios (special characters, unicode, boundary values)

### **Test Data Sets**

1. **Pickup Request Data**
   - Valid requests (all waste types, quantities, dates)
   - Invalid requests (past dates, missing fields, boundary values)
   - Edge cases (special characters, long text, empty fields)

2. **Blog and Community Content**
   - Sample blog posts
   - Community posts with various content types
   - Comments and interactions

3. **Form Validation Data**
   - Valid inputs
   - Invalid inputs (boundary values, special characters)
   - Empty and whitespace-only inputs
   - XSS and injection test payloads

4. **Performance Test Data**
   - Large datasets for localStorage testing
   - Multiple concurrent user scenarios
   - Network throttling scenarios

*See `docs/test-data.md` for complete test data specifications.*

---

## 📝 **Defect Reporting Standards**

### **Defect Severity Levels**

1. **Critical**
   - System crash or data loss
   - Security vulnerabilities
   - Complete feature failure
   - Cannot proceed with testing

2. **Major**
   - Significant functionality issue
   - Feature partially working
   - Workaround available but impacts user experience
   - Affects core functionality

3. **Minor**
   - Small functionality issue
   - Cosmetic UI problem
   - Minor validation issue
   - Does not prevent feature usage

4. **Cosmetic**
   - Visual/UI inconsistencies
   - Spelling/grammar errors
   - Minor styling issues
   - No functional impact

### **Defect Report Fields (Jira/GitHub Kanban)**

- **Summary:** Clear, concise bug title (e.g., "Login fails with valid credentials")
- **Description:** Detailed explanation of the issue
- **Environment:** Browser, OS, device, version
- **Severity:** Critical, Major, Minor, Cosmetic
- **Priority:** High, Medium, Low
- **Steps to Reproduce:** Numbered list of exact steps
- **Expected Result:** What should happen
- **Actual Result:** What actually happens
- **Attachments:** Screenshots, videos, logs
- **Workaround:** If available
- **Assigned To:** Team member responsible

### **Defect Documentation Requirements**

- All defects must be logged in Jira/GitHub Kanban
- Minimum 15 defects required
- Each defect must include:
  - Clear reproduction steps
  - At least one screenshot or video
  - Environment details
  - Severity and priority assignment

---

## 🛠️ **Testing Environment Setup**

Below are the environments and tools that will be used for testing:

| Category | Environment/Tool | Purpose |
|----------|----------------|---------|
| **Browser** | Chrome (latest 2 versions), Firefox (latest 2 versions), Safari (latest 2 versions), Edge (latest 2 versions) | Cross-browser compatibility testing |
| **Devices** | Desktop (1920x1080+), Laptop (1366x768+), Tablet (768px-1024px), Mobile phones (320px-767px) | Responsive design testing and compatibility testing across different devices |
| **Network** | 3G, 4G/LTE, 5G, Wi-Fi | Performance testing under different network conditions |
| **Accessibility** | axe DevTools, WAVE, Lighthouse Accessibility, NVDA, JAWS, VoiceOver | WCAG 2.1 accessibility testing and compliance |
| **Performance** | Lighthouse, Browser Network Throttling, Browser Memory Profiling, PageSpeed Insights | Page speed, load testing, and memory usage metrics |
| **Project Management** | Jira Cloud or GitHub Kanban | Project tracking, issue management, and team collaboration |
| **Documentation** | Markdown files, Google Docs | Test plan, test cases, and reports |
| **Collaboration** | Google Drive, Zoom/Teams | File sharing, collaboration among members, and hosting meetings |
| **Testing Tools** | Browser DevTools, React DevTools | Debugging and inspection |

### **Environment Configuration**

**Development Environment:**
- Local development server (npm start)
- React DevTools extension
- Browser DevTools enabled

**Test Environment:**
- Production build (npm run build)
- Static hosting (Netlify-ready)
- Multiple browser instances
- Network throttling enabled

---

## 📋 **Testing Approach**

### **Testing Methodology**

We will follow a **hybrid testing approach** combining:

1. **Manual Testing** (Primary)
   - Exploratory testing
   - User acceptance testing
   - Accessibility testing
   - Usability testing

2. **Automated Testing** (Optional Bonus)
   - Smoke tests using Jest
   - Critical path automation
   - Regression testing

3. **Risk-Based Testing**
   - Focus on critical user flows
   - High-risk areas identified first
   - Progressive testing approach

### **Testing Levels**

1. **Unit Testing** (Optional)
   - Component-level testing
   - Service function testing

2. **Integration Testing**
   - Component integration
   - Feature interaction testing

3. **System Testing**
   - End-to-end user flows
   - Complete system validation

4. **Acceptance Testing**
   - User story validation
   - Business requirement verification

### **Testing Techniques**

- **Black Box Testing:** Functional requirements testing
- **White Box Testing:** Code structure validation (if applicable)
- **Grey Box Testing:** localStorage data validation
- **Boundary Value Analysis:** Input field boundaries
- **Equivalence Partitioning:** Valid/invalid data groups
- **Error Guessing:** Experience-based testing
- **Exploratory Testing:** Unscripted testing for edge cases

---

## 🚪 **Entry Criteria**

Testing can begin when:

1. ✅ **Application is accessible**
   - Application is deployed and accessible
   - All major features are implemented
   - Application is in a testable state

2. ✅ **Test Environment is ready**
   - All required browsers installed
   - Testing tools configured
   - Test data prepared

3. ✅ **Documentation is available**
   - Functional Requirements Specification (FRS) reviewed
   - Test data document available
   - Technical specifications reviewed

4. ✅ **Team is prepared**
   - Team members assigned
   - Roles and responsibilities defined
   - Project management tool (Jira/GitHub) set up

5. ✅ **Test Plan is approved**
   - Test plan reviewed and approved
   - Test strategy understood by team
   - Entry criteria met

---

## 🚪 **Exit Criteria**

Testing can be concluded when:

1. ✅ **Test Coverage Complete**
   - All planned test cases executed
   - 100% functional feature coverage
   - All test scenarios completed

2. ✅ **Defect Management**
   - Minimum 15 defects documented
   - All critical and major defects logged
   - Defect distribution meets requirements (3 critical/major, 5 medium, 7 minor/cosmetic)

3. ✅ **Documentation Complete**
   - All test cases documented
   - Test execution results recorded
   - Defect log updated in Jira/GitHub
   - Test report prepared

4. ✅ **Quality Metrics Met**
   - Accessibility compliance verified (WCAG 2.1 AA)
   - Cross-browser compatibility validated
   - Performance benchmarks met
   - Security vulnerabilities identified

5. ✅ **Deliverables Ready**
   - Test report (PDF) completed
   - Video presentation (5 minutes) prepared
   - All documentation committed to repository
   - Jira/GitHub project export available

---

## 👥 **Team Members Roles and Responsibilities**

### **Team Structure**

**Team Size:** 3 QA Specialists

### **Role Assignments**

#### **Team Member 1: Test Lead / Functional Testing Specialist**
**Responsibilities:**
- Overall test planning and coordination
- Functional testing execution
- Test case design and review
- Defect triage and prioritization
- Test report preparation
- Project management tool administration (Jira/GitHub)

**Focus Areas:**
- Authentication system
- Waste management features
- Dashboard and analytics
- Admin panel functions

#### **Team Member 2: Non-Functional Testing Specialist**
**Responsibilities:**
- Performance testing
- Security testing
- Usability testing
- Cross-browser compatibility testing
- Non-functional test case design
- Performance metrics collection

**Focus Areas:**
- Performance validation
- Security vulnerability testing
- Cross-browser testing
- Usability evaluation
- Network condition testing

#### **Team Member 3: Accessibility & Compatibility Specialist**
**Responsibilities:**
- Accessibility testing (WCAG 2.1)
- Mobile/responsive testing
- Screen reader testing
- Keyboard navigation testing
- Accessibility tool usage
- Compatibility test execution

**Focus Areas:**
- WCAG 2.1 compliance
- Screen reader compatibility
- Mobile device testing
- Responsive design validation
- Accessibility tool results

### **Shared Responsibilities**

- **Daily Updates:** Log all testing activities in Jira/GitHub
- **Bug Reporting:** Create detailed bug reports with screenshots
- **Documentation:** Contribute to test cases and test reports
- **Communication:** Attend weekly meetings and provide status updates
- **Collaboration:** Share findings and assist team members
- **Quality Assurance:** Review peer work and provide feedback
  
---

## **Weekly Milestones**

| Week | Dates | Deliverables |
|------|-------|--------------|
| **Week 1** | Nov 1-5 | Test plan, environment setup, initial planning |
| **Week 2** | Nov 6-11 | Test cases, early execution, defect logging |
| **Week 3** | Nov 12-18 | Final execution, reporting, video, submission |

---

## 📊 **Test Metrics and KPIs**

### **Test Execution Metrics**
- **Total Test Cases:** TBD (to be determined during test design)
- **Test Cases Executed:** Tracked in test execution log
- **Pass Rate:** Percentage of passed tests
- **Fail Rate:** Percentage of failed tests
- **Blocked Tests:** Tests unable to execute due to blockers

### **Defect Metrics**
- **Total Defects Found:** Minimum 15 required
- **Defects by Severity:** Critical, Major, Minor, Cosmetic distribution
- **Defects by Module:** Distribution across features
- **Defect Detection Rate:** Defects found per day
- **Defect Resolution Status:** Open, In Progress, Closed

### **Coverage Metrics**
- **Functional Coverage:** 100% of features tested
- **Requirement Coverage:** All FR-XXX requirements validated
- **Browser Coverage:** All 4 browsers tested
- **Device Coverage:** Desktop, tablet, mobile tested

### **Quality Metrics**
- **Accessibility Compliance:** WCAG 2.1 AA level
- **Performance Benchmarks:** Page load < 3s, interaction < 1s
- **Cross-Browser Compatibility:** Consistent functionality across browsers
- **Security Issues Found:** Number of security vulnerabilities identified

---

## ⚠️ **Risk Assessment**

### **High-Risk Areas**

1. **localStorage Limitations**
   - **Risk:** Data loss or storage limit exceeded
   - **Mitigation:** Test with large datasets, monitor storage usage

2. **Cross-Browser Compatibility**
   - **Risk:** Inconsistent behavior across browsers
   - **Mitigation:** Early cross-browser testing, use browser compatibility matrix

3. **Accessibility Compliance**
   - **Risk:** WCAG 2.1 non-compliance
   - **Mitigation:** Use accessibility tools, screen reader testing

4. **Performance Issues**
   - **Risk:** Slow page loads, poor responsiveness
   - **Mitigation:** Performance testing early, network throttling tests

### **Medium-Risk Areas**

1. **Form Validation**
   - **Risk:** Missing or incorrect validation
   - **Mitigation:** Comprehensive boundary testing, edge case validation

2. **Security Vulnerabilities**
   - **Risk:** XSS, injection attacks
   - **Mitigation:** Security testing, input sanitization validation

3. **Data Integrity**
   - **Risk:** Data corruption or loss
   - **Mitigation:** Data persistence testing, session testing

### **Low-Risk Areas**

1. **UI/UX Issues**
   - **Risk:** Minor visual inconsistencies
   - **Mitigation:** Usability testing, visual regression checks

2. **Documentation**
   - **Risk:** Incomplete documentation
   - **Mitigation:** Continuous documentation updates, peer reviews

---


## ✅ **Approval**

**Test Plan Prepared By:** Sammy Shoka  
**Date:** November 4, 2025  

**Test Plan Reviewed By:** Joel Githara
**Date:** November 5,2025

**Test Plan Approved By:** Isaac Nyarko Okai 
**Date:** November 5, 2025

---

**Document Status:** Final 
**Last Updated:** November 5, 2025
