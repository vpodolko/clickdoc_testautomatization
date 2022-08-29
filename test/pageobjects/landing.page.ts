import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

class LandingPage extends Page {
  public get buttonConsent() {
    return $('//button[@type="button"]');
  }

  public get doctorSearch() {
    return $('//a[@href="/cd-de/search"]');
  }

  public open() {
    return super.open("");
  }
}

export default new LandingPage();
