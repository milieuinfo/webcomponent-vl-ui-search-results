const {Page, Config} = require('vl-ui-core').Test;
const VlSearchResults = require('../components/vl-search-results');

class VlSearchResultsPage extends Page {
  async getSearchResults() {
    return this._getSearchResults('vl-search-results');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-search-results.html');
  }

  async _getSearchResults(selector) {
    return new VlSearchResults(this.driver, selector);
  }
}

module.exports = VlSearchResultsPage;
