const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSearchResult = require('./vl-search-result');

class VlSearchResults extends VlElement {
  async getSearchResult(number) {
    const searchResults = await this.getSearchResults();
    return searchResults[--number];
  }

  async getSearchResults() {
    const slot = await this.shadowRoot.findElement(By.css('slot'));
    const slotElements = await this.getAssignedElements(slot);
    return Promise.all(slotElements.map(async (element) => await new VlSearchResult(this.driver, element)));
  }
}

module.exports = VlSearchResults;
