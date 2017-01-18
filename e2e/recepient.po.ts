import { browser, element, by } from 'protractor';

export class ControlSubmissionClientPage {
  navigateTo() {
    return browser.get('/recepients');
  }

  getHeadingText() {
    return element(by.css('h3')).getText();
  }

  checkAddButton() {

    return element(by.id('addRecepient'));
  }
}
