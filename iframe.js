const { webkit } = require("playwright");

(async () => {
  const browser = await webkit.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://demoqa.com/frames");
  // logic to handle iframes
  const frame1 = await page.frame({ url: /\/sample/ });
  const heading = await frame1.$("h1");
  text = await heading.innerText();
  console.log(text);
  await page.screenshot({ path: "iframe.png" });
  await browser.close();
})();
