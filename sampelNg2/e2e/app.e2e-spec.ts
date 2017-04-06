import { SampelNg2Page } from './app.po';

describe('sampel-ng2 App', () => {
  let page: SampelNg2Page;

  beforeEach(() => {
    page = new SampelNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
