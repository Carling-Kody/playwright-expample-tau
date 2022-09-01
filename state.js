const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://demoqa.com/automation-practice-form");

  // print the element state
  const firstName = await page.$("#firstName");
  const sportscheckbox = await page.$("#hobbies-checkbox-1");
  const submitBtn = await page.$("#submit");

  console.log(await firstName.isDisabled(), "firstName is disabled");
  console.log(await firstName.isEnabled(), "firstName is enabled");
  console.log(await firstName.isEditable(), "firstName is editable");

  console.log(await sportscheckbox.isChecked(), "sportscheckbox is checked");
  console.log(await sportscheckbox.isDisabled(), "sportscheckbox is disabled");
  console.log(await sportscheckbox.isVisible(), "sportscheckbox is visible");

  console.log(await submitBtn.isEnabled(), "submitBtn is enabled");
  console.log(await submitBtn.isHidden(), "submitBtn is hidden");
  console.log(await submitBtn.isVisible(), "submitBtn is visible");

  await page.screenshot({ path: "google.png" });
  await browser.close();
})();
