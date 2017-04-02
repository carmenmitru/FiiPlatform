import { FiiplatformPage } from './app.po';

describe('fiiplatform App', () => {
  let page: FiiplatformPage;

  beforeEach(() => {
    page = new FiiplatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
