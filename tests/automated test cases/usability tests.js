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

describe('Usability Evaluation', () => {
    
    test('USA-001: Main navigation accessibility', async () => {
      await page.goto(`${baseUrl}/`);
      
      const navLinks = await page.$$('.nav-link');
      const linkTexts = await Promise.all(
        navLinks.map(link => page.evaluate(el => el.textContent, link))
      );

      const expectedLinks = ['Home', 'Login', 'Register', 'Awareness'];
      const allPresent = expectedLinks.every(link => linkTexts.some(text => text.includes(link)));

      console.log(`Navigation accessibility: ${allPresent ? 'PASS' : 'FAIL'}`);
      expect(allPresent).toBe(true);
    });

    test('USA-011: Form labels clarity', async () => {
      await page.goto(`${baseUrl}/`);
      
      const labels = await page.$$('label');
      const labelTexts = await Promise.all(
        labels.map(label => page.evaluate(el => el.textContent, label))
      );

      const hasEmptyLabels = labelTexts.some(text => !text || text.trim() === '');
      
      console.log(`Form labels clarity: ${hasEmptyLabels ? 'FAIL - Empty labels found' : 'PASS'}`);
      expect(hasEmptyLabels).toBe(false);
    });

    test('USA-012: Required fields indication', async () => {
      await page.goto(`${baseUrl}/register`);
      
      const requiredInputs = await page.$$('[required]');
      const requiredCount = requiredInputs.length;

      // Check if required fields are marked
      const markedAsRequired = await page.$$('[data-required="true"]');
      
      console.log(`Required fields marked: ${requiredCount} fields, ${markedAsRequired.length} marked - ${markedAsRequired.length > 0 ? 'PASS' : 'FAIL'}`);
      expect(markedAsRequired.length).toBeGreaterThan(0);
    });

    test('USA-021: Text contrast for readability', async () => {
      await page.goto(`${baseUrl}/`);
      
      // Check body text contrast ratio (simplified check)
      const textColor = await page.evaluate(() => {
        const element = document.body;
        return window.getComputedStyle(element).color;
      });

      const backgroundColor = await page.evaluate(() => {
        const element = document.body;
        return window.getComputedStyle(element).backgroundColor;
      });

      // Simplified contrast check - in real scenario would use WCAG algorithm
      const hasGoodContrast = textColor !== backgroundColor;
      
      console.log(`Text contrast: ${hasGoodContrast ? 'PASS' : 'FAIL'}`);
      expect(hasGoodContrast).toBe(true);
    });

    test('USA-041: Alt text for images', async () => {
      await page.goto(`${baseUrl}/awareness`);
      
      const images = await page.$$('img');
      const missingAltText = [];

      for (const img of images) {
        const alt = await page.evaluate(el => el.getAttribute('alt'), img);
        const src = await page.evaluate(el => el.src, img);
        
        if (!alt || alt.trim() === '') {
          missingAltText.push(src);
        }
      }

      const passPercentage = ((images.length - missingAltText.length) / images.length * 100);
      
      console.log(`Images with alt text: ${passPercentage.toFixed(1)}% (Expected 100%) - ${passPercentage === 100 ? 'PASS' : 'FAIL'}`);
      expect(missingAltText.length).toBe(0);
    });

    test('USA-044: Keyboard navigation support', async () => {
      await page.goto(`${baseUrl}/`);
      
      const focusableElements = await page.$$('button, a, input, [tabindex]');
      
      console.log(`Focusable elements found: ${focusableElements.length} - ${focusableElements.length > 5 ? 'PASS' : 'FAIL'}`);
      expect(focusableElements.length).toBeGreaterThan(5);
    });
  });
});
