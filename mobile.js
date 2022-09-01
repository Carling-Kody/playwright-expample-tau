const { chromium, devices } = require("playwright");
const iphone = devices["iPhone 11"];

(async () => {
  //mobile code
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext({
    ...iphone,
    permissions: ["geolocation"],
    geolocation: { latitude: 37.78, longitude: -122.41 },
    locale: "en-US",
  });
  const page = await context.newPage();
  await page.goto("https://www.google.com/maps");
  await page.waitForTimeout(5000);

  await browser.close();
})();
