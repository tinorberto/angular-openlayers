import { AngularOpenlayersPage } from './app.po';

describe('angular-openlayers App', function() {
  let page: AngularOpenlayersPage;

  beforeEach(() => {
    page = new AngularOpenlayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
