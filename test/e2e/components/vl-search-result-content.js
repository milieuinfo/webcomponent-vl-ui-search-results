const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlSearchResultContent extends VlElement {
  async getDescription(number) {
    return this._getElementText('dt', number);
  }

  async getValue(number) {
    return this._getElementText('dd', number);
  }

  async _getElementText(selector, number) {
    const element = await this.findElements(By.css(selector));
    const vlElement = await new VlElement(this.driver, element[--number]);
    return vlElement.getText();
  }
}

module.exports = VlSearchResultContent;
