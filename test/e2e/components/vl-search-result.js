const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSearchResultContent = require('./vl-search-result-content');

class VLSearchResult extends VlElement {
  async getTitle() {
    const title = await this.findElement(By.css('.vl-search-result__title'));
    return title.getText();
  }

  async getSubTitle() {
    const title = await this.findElement(By.css('p.vl-search-result__content-group'));
    return title.getText();
  }

  async getContent(number) {
    const element = await this._contentElements();
    return element[--number];
  }

  async _contentElements() {
    const elements = await this.findElements(By.css('div.vl-search-result__content-group > *'));
    return await Promise.all(elements.map((element) => new VlSearchResultContent(this.driver, element)));
  }
}

module.exports = VLSearchResult;
