import { browser, element, by } from 'protractor';

export class ControlSubmissionClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('span')).getText();
  }
}
