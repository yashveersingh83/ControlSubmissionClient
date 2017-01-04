import { ControlSubmissionClientPage } from './recepient.po';

describe('control-submission-client recepient', function() {
  let page: ControlSubmissionClientPage;

  beforeEach(() => {
    page = new ControlSubmissionClientPage();
  });

  it('should display message saying having h3 ', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Recepients');
  });
});

