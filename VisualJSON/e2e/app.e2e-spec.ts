import { VisualJSONPage } from './app.po';

describe('visual-json App', function() {
  let page: VisualJSONPage;

  beforeEach(() => {
    page = new VisualJSONPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
