const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSearchResult = require('./vl-search-result');

class VLSearchResults extends VlElement {
  async getSearchResult(number) {
    const slot = await this.shadowRoot.findElement(By.css('slot'));
    const slotElements = await this.getAssignedElements(slot);
    return new VlSearchResult(this.driver, slotElements[--number]);
  }
}

module.exports = VLSearchResults;
