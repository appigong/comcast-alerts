import { browser, element, by } from 'protractor';

export class ComcastAlertsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('comcast-root h1')).getText();
  }
}
