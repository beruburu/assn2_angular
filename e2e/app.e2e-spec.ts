import { LymcClientPage } from './app.po';

describe('lymc-client App', function() {
  let page: LymcClientPage;

  beforeEach(() => {
    page = new LymcClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
