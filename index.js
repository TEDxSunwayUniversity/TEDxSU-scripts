const puppeteer = require('puppeteer');
const CREDS = require('./creds');

var date = Date();
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://facebook.com');

  const EMAIL_SELECTOR = '#email';
  const PASS_SELECTOR = '#pass';
  const BUTTON_SELECTOR = '#u_0_6';

  await page.click(EMAIL_SELECTOR);
  await page.keyboard.type(CREDS.email);

  await page.click(PASS_SELECTOR);
  await page.keyboard.type(CREDS.pass);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  await page.goto('https://facebook.com/tedxsunwayuniversity');
  await page.waitFor(2*1000);

  await page.goto('https://web.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1667307626650963&av=100025388300719');
  await page.waitFor(2*1000);

  await page.screenshot({path: './screenshots/'+date+'.png', fullPage: true});
  await browser.close();
})();
