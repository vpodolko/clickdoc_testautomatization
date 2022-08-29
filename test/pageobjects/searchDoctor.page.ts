import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

class SearchDoctorPage extends Page {
  public get inputDoctorName() {
    return $('//input[@id="search-query-typeahead"]');
  }

  public get submitSearch() {
    return $('//button[@angularticsaction="Search submit"]');
  }

  public get searchResult() {
    return $('//div[@class="panel default-panel hide-filters"]');
  }
}

export default new SearchDoctorPage();
