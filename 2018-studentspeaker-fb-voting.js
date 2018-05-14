const puppeteer = require('puppeteer');
const CREDS = require('./creds');

/* creds.js
module.exports = {
  email: '',
  pass: ''
}
*/

var date = Date();
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://m.facebook.com');

  const EMAIL_SELECTOR = '#m_login_email';
  const PASS_SELECTOR = '#m_login_password';
  const BUTTON_SELECTOR = '#u_0_5';

  await page.click(EMAIL_SELECTOR);
  await page.keyboard.type(CREDS.email);

  await page.click(PASS_SELECTOR);
  await page.keyboard.type(CREDS.pass);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  await page.goto('https://m.facebook.com/tedxsunwayuniversity');
  await page.waitFor(2*1000);

  await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1692516820796710');
  await page.waitFor(2*1000);
  await page.screenshot({path: './screenshots/name1.png', fullPage: true});

  await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1685040251544367');
  await page.waitFor(2*1000);
  await page.screenshot({path: './screenshots/name2.png', fullPage: true});

  await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1681767471871645');
  await page.waitFor(2*1000);
  await page.screenshot({path: './screenshots/name3.png', fullPage: true});

  await browser.close();
})();
