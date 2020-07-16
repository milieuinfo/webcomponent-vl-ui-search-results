const {Page, Config} = require('vl-ui-core').Test;
const VLSearchResults = require('../components/vl-search-results');

class VLSearchResultsPage extends Page {
  async getSearchResults() {
    return this._getSearchResults('#search-results');
  }

  async getSearchResultsText() {
    return this._getSearchResults('#search-results-text');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-search-results.html');
  }

  async _getSearchResults(selector) {
    return new VLSearchResults(this.driver, selector);
  }
}

module.exports = VLSearchResultsPage;
