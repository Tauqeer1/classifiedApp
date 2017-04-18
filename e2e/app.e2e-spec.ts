import { ClassifiedAppPage } from './app.po';

describe('classified-app App', function() {
  let page: ClassifiedAppPage;

  beforeEach(() => {
    page = new ClassifiedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
