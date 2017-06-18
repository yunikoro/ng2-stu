import { Ng2StuPage } from './app.po';

describe('ng2-stu App', () => {
  let page: Ng2StuPage;

  beforeEach(() => {
    page = new Ng2StuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
