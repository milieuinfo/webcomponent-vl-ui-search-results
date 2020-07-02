const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlSearchResult extends VlElement {
  async titleSlotElements() {
    return this._slotElements('title');
  }

  async subTitleSlotElements() {
    return this._slotElements('sub-title');
  }

  async getContent(number) {
    const element = await this._contentElements();
    return element[--number];
  }

  async _contentElements() {
    const slotElements = await this._contentSlotElements();
    return await Promise.all(slotElements.map((element) => new VlSearchResultContent(this.driver, element)));
  }

  async _contentSlotElements() {
    return this._slotElements('content');
  }

  async _slotElements(name) {
    const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
    return this.getAssignedElements(slot);
  }
}

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

module.exports = VlSearchResult;
