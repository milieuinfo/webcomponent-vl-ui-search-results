const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSearchResult = require('./vl-search-result');

class VLSearchResults extends VlElement {
  async getSearchResult(number) {
    const results = await this.getSearchResults();
    return results[--number];
  }

  async getSearchResults() {
    const items = await this.findElements(By.css('[is="vl-search-result"]'));
    return Promise.all(items.map((item) => new VlSearchResult(this.driver, item)));
  }
}

module.exports = VLSearchResults;
