const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://demoqa.com/alerts");

  // code to handle alerts
  const firstAlertButton = await page.$("#alertButton");
  const timerAlertButton = await page.$("#timerAlertButton");
  const confirmAlertButton = await page.$("#confirmButton");
  const promtAlertButton = await page.$("#promtButton");

  //listen for alert
  //   await page.on("dialog", async (dialog) => {
  //     console.log(dialog.message());
  //     await dialog.accept();
  //   });
  //   await confirmAlertButton.click();

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("This is my text");
  });
  await page.click("#promtButton");

  await page.screenshot({ path: "google.png" });
  await browser.close();
})();
