import { BytesizePage } from './app.po';

describe('bytesize App', () => {
  let page: BytesizePage;

  beforeEach(() => {
    page = new BytesizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
