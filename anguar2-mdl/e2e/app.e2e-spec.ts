import { Anguar2MdlPage } from './app.po';

describe('anguar2-mdl App', function() {
  let page: Anguar2MdlPage;

  beforeEach(() => {
    page = new Anguar2MdlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
