import { Angular4MeetjohnmlhllPage } from './app.po';

describe('angular4-meetjohnmlhll App', () => {
  let page: Angular4MeetjohnmlhllPage;

  beforeEach(() => {
    page = new Angular4MeetjohnmlhllPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
