import { Ng2RouterPage } from './app.po';

describe('ng2-router App', () => {
  let page: Ng2RouterPage;

  beforeEach(() => {
    page = new Ng2RouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
