export default class Page {
  public open(path: string) {
    browser.setWindowSize(1920, 1080);
    return browser.url(`https://demo.clickdoc.de/cd-de/${path}`);
  }
}
