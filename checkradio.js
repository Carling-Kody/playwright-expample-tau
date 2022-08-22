const { firefox } = require("playwright");

(async () => {
  const browser = await firefox.launch({ headless: false, slowMo: 400 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://www.w3schools.com/howto/howto_css_custom_checkbox.asp"
  );
  // check the second checkbox
  const checkboxes = await page.$$(
    '#main div :nth-child(1) input[type="checkbox"]'
  );
  await checkboxes[1].check();
  await checkboxes[0].uncheck();
  //select the second radio button
  const radioButtons = await page.$$(
    '#main div :nth-child(1) input[type="radio"]'
  );
  await radioButtons[1].check();
  await radioButtons[0].uncheck();
  await browser.close();
})();
