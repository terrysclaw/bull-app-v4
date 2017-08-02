import { BullAppV4Page } from './app.po';

describe('bull-app-v4 App', () => {
  let page: BullAppV4Page;

  beforeEach(() => {
    page = new BullAppV4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
