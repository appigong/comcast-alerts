import { ComcastAlertsPage } from './app.po';

describe('comcast-alerts App', function() {
  let page: ComcastAlertsPage;

  beforeEach(() => {
    page = new ComcastAlertsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('comcast works!');
  });
});
