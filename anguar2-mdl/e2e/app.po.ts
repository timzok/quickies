import { browser, element, by } from 'protractor';

export class Anguar2MdlPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
