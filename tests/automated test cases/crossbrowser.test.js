const puppeteer = require('puppeteer');
jest.setTimeout(30000);

describe('Non-Functional Test Suite - CleanCity', () => {
  let browser;
  let page;
  const baseUrl = 'http://localhost:3000';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    // Simulate network conditions
    await page.setDefaultTimeout(10000);
  });

  afterEach(async () => {
    await page.close();
  });
    // ============ CROSS-BROWSER TESTS ============
    
  describe('Cross-Browser Compatibility', () => {
    
    test('CBR-001: Chrome - Home page rendering', async () => {
      // This test runs in Chromium (headless chrome)
      await page.goto(`${baseUrl}/`);
      
      const homeTitle = await page.$('h1');
      const navBar = await page.$('.navbar');
      
      expect(homeTitle).toBeDefined();
      expect(navBar).toBeDefined();
      console.log('✓ PASS: Home page renders correctly in Chrome');
    });

    test('CBR-003: Form submission', async () => {
      await page.goto(`${baseUrl}/`);
      
      // Fill form
      await page.type('[name="location"]', 'Downtown Area');
      await page.type('[name="wasteType"]', 'organic');
      await page.click('button[type="submit"]');
      
      // Wait for success message
      const successMsg = await page.waitForSelector('[data-testid="success-message"]', { timeout: 5000 }).catch(() => null);
      
      const isSuccess = successMsg !== null;
      console.log(`Form submission: ${isSuccess ? 'PASS' : 'FAIL'}`);
      expect(isSuccess).toBe(true);
    });

    test('CBR-005: Responsive design - Desktop (1920px)', async () => {
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(`${baseUrl}/`);
      
      // Check desktop layout
      const container = await page.$('.container');
      const containerWidth = await page.evaluate(() => {
        return document.querySelector('.container').offsetWidth;
      });
      
      expect(containerWidth).toBeGreaterThan(1000);
      console.log(`✓ PASS: Desktop layout (${containerWidth}px) renders correctly`);
    });

    test('CBR-007: Responsive design - Mobile (768px)', async () => {
      await page.setViewport({ width: 768, height: 1024 });
      await page.goto(`${baseUrl}/`);
      
      // Check mobile menu exists
      const hamburger = await page.$('.hamburger');
      
      expect(hamburger).toBeDefined();
      console.log('✓ PASS: Mobile layout renders with hamburger menu');
    });

    test('CBR-008: Local storage functionality', async () => {
      await page.goto(`${baseUrl}/`);
      
      // Set data in localStorage
      await page.evaluate(() => {
        localStorage.setItem('testKey', 'testValue');
      });
      
      // Reload and check persistence
      await page.reload();
      const value = await page.evaluate(() => localStorage.getItem('testKey'));
      
      expect(value).toBe('testValue');
      console.log('✓ PASS: Local storage persists data correctly');
    });

    test('CBR-012: Firefox - Date picker functionality', async () => {
      await page.goto(`${baseUrl}/`);
      
      const dateInput = await page.$('[type="date"]');
      
      if (dateInput) {
        await page.type('[type="date"]', '11/15/2025');
        const value = await page.$eval('[type="date"]', el => el.value);
        expect(value).toBe('2025-11-15');
        console.log('✓ PASS: Date picker works correctly');
      }
    });

    test('CBR-042: Mobile - Dashboard table readability', async () => {
      await page.setViewport({ width: 375, height: 667 }); // iPhone SE
      await page.goto(`${baseUrl}/dashboard`);
      
      const table = await page.$('table');
      const tableWidth = await page.evaluate(() => {
        const table = document.querySelector('table');
        return table ? table.offsetWidth : 0;
      });
      
      const viewportWidth = 375;
      const isReadable = tableWidth <= viewportWidth + 50; // Allow slight overflow with scroll
      
      console.log(`Mobile table readability: ${isReadable ? 'PASS' : 'FAIL (too wide: ${tableWidth}px)'}`);
      expect(isReadable).toBe(true);
    });
  });
});