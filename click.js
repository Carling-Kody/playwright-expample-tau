const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  // click on the cnotes button
  //mine
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(2) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(4) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(7) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
//   await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(9) > button");
  // hers

  // Code for my musical "Master piece"
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(10) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(10) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(8) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(5) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");

  await browser.close();
})();
