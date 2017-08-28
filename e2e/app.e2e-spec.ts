import { MtbHimalayaPage } from './app.po';

describe('mtb-himalaya App', () => {
  let page: MtbHimalayaPage;

  beforeEach(() => {
    page = new MtbHimalayaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
