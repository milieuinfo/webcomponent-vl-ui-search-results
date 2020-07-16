const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSearchResult = require('./vl-search-result');

class VLSearchResults extends VlElement {
  async getSearchResult(number) {
    const results = await this.getSearchResults();
    return results[--number];
  }

  async getSearchResults() {
    const slot = await this.shadowRoot.findElement(By.css('slot'));
    const slotElements = await this.getAssignedElements(slot);
    return Promise.all(slotElements.map((element) => new VlSearchResult(this.driver, element)));
  }
}

module.exports = VLSearchResults;
