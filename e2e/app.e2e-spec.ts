import { ControlSubmissionClientPage } from './app.po';

describe('control-submission-client App', function() {
  let page: ControlSubmissionClientPage;

  beforeEach(() => {
    page = new ControlSubmissionClientPage();
  });

  it('should display message saying Control', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ControlSubmissionClient');
  });
});

