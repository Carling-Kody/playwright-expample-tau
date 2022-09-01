const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/key_presses");

  // code to handle the key presses
  await page.click("#target");
  await page.keyboard.type("one does not simply exit vim", { delay: 50 });
  await page.keyboard.down("Shift");
  for (i = 0; i < " exit vim".length; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.up("Shift");
  await page.keyboard.press("Backspace");
  await page.keyboard.type(" walk to the moon", { delay: 50 });

  await page.screenshot({ path: "google.png" });
  await browser.close();
})();
