const puppeteer = require('puppeteer');
const CREDS = require('./creds');

/* creds.js
module.exports = {
  email: '',
  pass: ''
}
*/


function screenshot(){
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

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724153990966326/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/essam-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724153990966326');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/essam-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154104299648/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/ceymone-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154104299648');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/ceymone-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154247632967/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/annamaria-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154247632967');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/annamaria-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154127632979/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/jingyin-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154127632979');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/jingyin-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724153977632994/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/karengrace-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724153977632994');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/karengrace-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154084299650/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/benedict-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154084299650');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/benedict-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154207632971/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/muhdiman-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154207632971');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/muhdiman-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724171480964577/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/shasvini-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724171480964577');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/shasvini-likes.png', fullPage: true});

    await page.goto('https://m.facebook.com/TEDxSunwayUniversity/photos/ms.c.eJw9zsENwDAIQ9GNKmMciPdfrBJtcn0yX0RTsdKGq5L1xIACol3aB6iupKvvggPtH9I9YJ0F9jQWbgPfSXzQoQ2XVt8oOX8gXzsOHtg~-.bps.a.1723964314318627.1073741852.804092362972498/1724154220966303/');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/chookyvonne-img.png', fullPage: true});

    await page.goto('https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier=1724154220966303');
    await page.waitFor(2*500);
    await page.screenshot({path: './screenshots/chookyvonne-likes.png', fullPage: true});

    await browser.close();
  })();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var loop = true;

while(loop){
  var d = new Date();
  var date = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  if (date == 15 && hours == 23 && minutes == 59){
    console.log('its time!');
    screenshot();
    loop = false;
    break;
  }
  else{
    console.log('not time yet');
    sleep(1000);
  }
}
