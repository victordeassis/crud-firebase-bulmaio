import { ContabilizaAppPage } from './app.po';

describe('contabiliza-app App', () => {
  let page: ContabilizaAppPage;

  beforeEach(() => {
    page = new ContabilizaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
