import { by, element } from 'protractor/built';
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
    expect( element(by.buttonText('Add Recepient'))).toBeTruthy();
  });


  it('should navigate to add recepient page on button click ', () =>  {
    browser.waitForAngular();
     let elm = element(by.buttonText('Add Recepient')).click();
    expect(browser.getCurrentUrl()).toMatch('recepient/add');

  });

  it('should navigate to add recepient page and should create a new recepient and navigate back to recepient page',
  ()=>{
      browser.waitForAngular();
     let elm = element(by.buttonText('Add Recepient')).click();
     expect(browser.getCurrentUrl()).toMatch('recepient/add');
    const input = (name: string) => element(by.css('input[ng-reflect-name=\"' + name + '\"]'));
      expect( by.buttonText('Save')).toBeTruthy();
      expect( by.buttonText('Cancel')).toBeTruthy();
    
 input('FirstName').sendKeys('e2e');
  input('LastName').sendKeys('e2elastname');
  input('Division').sendKeys('e2ediv');
  element(by.buttonText('Save')).click();
   expect(browser.getCurrentUrl()).toMatch('recepients');



  
  }
  
  );

});

