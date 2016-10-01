import { AllergyClientPage } from './app.po';

describe('allergy-client App', function() {
  let page: AllergyClientPage;

  beforeEach(() => {
    page = new AllergyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
