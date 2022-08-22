const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/forgot_password");
  const email = await page.$("#email");
  await email.type("kodycarling19@gmail.com", { delay: 100 });
  const submit = await page.$("#form_submit");
  await submit.click();
  await browser.close();
})();
