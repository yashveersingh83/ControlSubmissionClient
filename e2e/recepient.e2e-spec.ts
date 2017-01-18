import { ControlSubmissionClientPage } from './recepient.po';
import {browser} from 'protractor';
describe('control-submission-client recepient', function() {
  let page: ControlSubmissionClientPage;

  beforeEach(() => {
    page = new ControlSubmissionClientPage();
    page.navigateTo();
  });
    
  it('should display message saying having h3 ', () => {   // page.navigateTo();
    expect(page.getHeadingText()).toEqual('Recepients');
  });
  it('should have add recepient button ',() =>{

      expect(page.checkAddButton().getText()).toEqual('Add Recepient');
  });
  it('should nagigate to add recepient page on button click ',() =>{

  //    page.navigateTo();
     browser.sleep(500);
      console.log(page.checkAddButton());
      page.checkAddButton().then(function () {
        browser.sleep(500);
        browser.getAllWindowHandles().then(function (handles) {
          let  newWindowHandle = handles[1]; // this is your new window
            browser.switchTo().window(newWindowHandle).then(function () {
                // fill in the form here
                expect(browser.getCurrentUrl()).toMatch(/\/url/);
            });
        });
    });

  });

});

