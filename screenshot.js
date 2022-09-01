const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://applitools.com/");
  // take screenshot of the page
  await page.screenshot({ path: "applitools.png" });
  // take a screen shot of an element
  const element = await page.$(".logo");
  await element.screenshot({ path: "applitools-logo.png" });
  // take a screen shot of the whole page
  await page.screenshot({ path: "applitools_full.png", fullPage: true });
  await browser.close();
})();
