Software Test Report
Project Title: CleanCity Waste Management Web Application
Document Title: Complete QA Test Report (Phase 1 – Phase 3)
Team Name: The Bug Slayer Corps
Team Members:
Isaac Okai - Test Manager
Sammy Shoka - Risk Analyst
Joel Githara - Test EXecutor
Prepared By: Sammy Shoka
Jira Board: https://oginazy.atlassian.net/jira/software/projects/CQP/boards/5
Github Repo:https://github.com/Oginaz/wk-6-Oginaz-1
Date: 17 November 2025

Executive Summary
This report presents the full QA lifecycle for the CleanCity Waste Management
Platform, covering Phase 1 (Planning), Phase 2 (Test Design), and Phase 3
(Execution). The platform was evaluated across functional, non-functional, accessibility, and compatibility aspects.

Key Findings
Functional features such as login, scheduling, dashboard, and blog are stable.
Accessibility gaps identified: missing ALT text, missing <h1>, color contrast issues, ARIA issues.
Mobile responsiveness requires improvement (blog cards overflow on phones).
Cross-browser compatibility is mostly stable (minor Firefox spacing issue).
50+ test cases executed; several medium-to-high severity defects logged.



Recommendations
Fix all WCAG 2.1 AA violations
Improve mobile UI layout
Add ARIA labels, ALT descriptions, and proper heading hierarchy
Improve color contrast on buttons and text
Re-run regression testing after fixes


Test Objective
To verify that all the project’s features function correctly,meet performance standards ,meet project requirements and provides a secure and user friendly experience across different platforms
The test objectives included:
Validate Functional Requirements
Detect and Document Defects
Cross-Platform Verification
Verify WCAG 2.1 accessibility compliance.
Data Integrity Verification
Performance Validation

The testing was carried from date 7 Nov 2025 to 18 Nov 2025

Areas Covered

Functional Testing
User Authentication                                                                                                                                                                                                                                                                                                                                                                                    
Registration, login, logout
Password validation and security
Session management
Role-based access control (User/Admin)

Waste Management and Pickup Scheduling
Schedule pickup requests
View request history
Cancel/modify requests
Request status tracking



Dashboards and Analytics
User dashboard functionality
 Statistics and metrics display
 Charts and visualizations
 Leaderboards and gamification


Administrative Functions
Admin panel access
Request management
User management
Content moderation

Blog and Community Functions
Blog post creation and viewing
Comments and interactions
Community feed posts
Likes and comments

Content Management
Awareness section (tips, quizzes)
Profile management
Notification system

Form Validation and Error Handling
Input validation
Error message display
Required field validation
Data sanitization

Non-Functional Testing

Usability Testing
User experience evaluation
Navigation intuitiveness
UI/UX consistency
User workflow efficiency


Cross-Browser and Device Compatibility
Chrome, Firefox, Safari, Edge
Desktop, tablet, mobile devices
Responsive design validation
Touch and gesture support


Performance Testing
Page load times
Responsiveness and smooth animations
Memory usage
Network throttling scenarios

Security Testing
Input validation and sanitization
XSS prevention
Data protection in localStorage
Session security

Data Integrity Testing
localStorage functionality
Data persistence across sessions
Data consistency
Storage limit handling

Accessibility Testing
WCAG 2.1 AA compliance
Screen reader compatibility (NVDA)
Keyboard navigation
Color contrast and visual accessibility
Responsive and Mobile Testing
Cross Browser Compatibility




Areas Not Covered
The following areas were not covered:
Advanced load testing (stress testing with thousands of concurrent users)
Backend API testing (application uses localStorage only)
Database testing (no backend database)
Mobile app testing (web application only)
Third-party integrations testing

Testing Approach
Our Testing approach combined various testing methodologies which include:
Manual test execution
Tool-assisted accessibility scanning
Jira used for defect tracking
Risk Based Testing
Exploratory testing
User acceptance testing
Accessibility testing
Usability testing
Testing Process
The testing of the application followed these phases:
Week 1	Nov 1-5	Test plan, environment setup, initial planning 
Week 2	Nov 6-11	Test cases, early execution, defect logging 
Week 3	Nov 12-18	Final execution, reporting, video, submission

Roles & Responsibilities
Test Lead – Isaac Okai
Planning & coordination
Functional test case design
Jira administration


Non-Functional Specialist – Joel Githara
Performance, security, usability
Cross-browser testing


Accessibility Specialist – Sammy Shoka
WCAG 2.1 AA testing
Screen reader testing
Compatibility testing
Responsive testing

Testing Tools and Environments

Defect Tracking:  Jira
Accessibility Testing:  axe-DEV Tools
Compatibility Testing: Chrome-DEV Tools
Automation Testing: Selenium and Jest
Security Testing:
Performance Testing:


Sample Key Tests
Below are a sample key tests

Test-Case: Accessibility 
Title
Perform accessibility testing using axe DevTools, WAVE, and Lighthouse to ensure CleanCity meets WCAG 2.1 Level AA standards.
 
Objective:
Identify accessibility violations such as missing alt text, poor color contrast, and incorrect ARIA labels.
Test Steps:
Open the CleanCity application localhost in Chrome Version 142.0.7444.138
Press F12 and launch the axe DevTools and  click “Analyze.”
Review all accessibility violations .
Run WAVE Web Accessibility Evaluation Tool on the same page.
Record all failed elements and severity levels.
Generate a Lighthouse Accessibility Report and attach the score.
 
Expected Result:
All pages have a Lighthouse Accessibility Score ≥ 90.
No critical violations for contrast, alt text, or ARIA roles.
Actual Results:
The pages have a lighthouse accessibility score > 90
There is critical violations fro contrast
Attachments:
The attachments below are for, axe DevTools, Wave Web ,Lighthouse report score and light house report for accessibility






Test Execution Summary
Functional Testing Summary

Status
Count
Passed
6
Failed
6
Blocked
0


Modules tested:
Authentication 
Notifications
Dashboard 
Pickup scheduling 
Blog
Community 
Admin panel 
Profile management 
Accessibility Testing Summary

Test
Results
Notes
Wave Scan
Alerts
Missing heading structure
Color contrast
Fail
Contrast too low
Keyboard navigation
Pass
Focus indicators visible
ARIA
Fail
Missing ARIA labels


Compatibility Testing Summary

Browser
Status
Chrome
Pass
Edge
Pass
Brave
Pass
Firefox
Pass






Responsive Testing

Desktop: Passed
Mobile: Failed;  There was overflow and  layout breaking

Overall Status
Defects logged: 7 defects logged and documented

Defects By Severity

Severity
Count
Critical
0
Major
4
Medium
1
Minor
2

RECOMMENDATIONS & IMPROVEMENTS
Accessibility Fixes
Add proper <h1> and heading hierarchy
Add ALT text to all images
Add ARIA labels to icons
Fix color contrast issues
Improve keyboard navigation (focus outline)
UI/Responsive Fixes
Fix mobile overflow on blog cards


Test Metrics
Summary
Execution Metrics
Total test cases: 51
Passed: 6
Failed: 6
Blocked: 0
Not Run: 39
Pass Rate = 6 / 51 ≈ 11.8%
Fail Rate = 6 / 51 ≈ 11.8%
Defect Metrics
Total defects: 7
Major accessibility issues: 4

Snapshot of Jira

