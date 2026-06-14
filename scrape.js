const puppeteer = require('puppeteer');
const TurndownService = require('turndown');
const fs = require('fs');

const URL = 'http://localhost:3000';
const OUTPUT = 'landing-page.md';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Wait for React to finish rendering
  await page.waitForSelector('body');

  const html = await page.evaluate(() => document.body.innerHTML);

  await browser.close();

  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  });

  // Drop script/style/svg noise
  td.remove(['script', 'style', 'noscript', 'svg']);

  const markdown = td.turndown(html);

  fs.writeFileSync(OUTPUT, markdown, 'utf8');
  console.log(`Saved to ${OUTPUT}`);
})();
