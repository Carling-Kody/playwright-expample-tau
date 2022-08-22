const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = await page.$("#dropdown");
  await dropdown.click();

  //value
  await dropdown.selectOption({ value: "1" });
  //label
  await dropdown.selectOption({ label: "Option 2" });
  //index number
  await dropdown.selectOption({ index: 1 });
  // values inside the select
  const availableOptions = await dropdown.$$("option");
  for (let i = 0; i < availableOptions.length; i++) {
    console.log(await availableOptions[i].innerText());
  }

  await browser.close();
})();
