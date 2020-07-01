const {assert, driver} = require('vl-ui-core').Test.Setup;
const VLSearchResultsPage = require('./pages/vl-search-results.page');

describe('vl-search-results', async () => {
  const vlSearchResultsPage = new VLSearchResultsPage(driver);

  before(() => {
    return vlSearchResultsPage.load();
  });

  it('als gebruiker kan ik de titel van een zoekresultaat zien', async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    const titleSlotElements = await searchResult.titleSlotElements();
    const title = titleSlotElements[0];
    await assert.eventually.equal(title.getText(), 'Vlaanderenkiest.be');
  });

  it('als gebruiker kan ik de sub titel van een zoekresultaat zien', async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    const subTitleSlotElements = await searchResult.subTitleSlotElements();
    const subTitle = subTitleSlotElements[0];
    await assert.eventually.equal(subTitle.getText(), 'Maandag 22 oktober 2018');
  });

  it('als gebruiker kan ik de content van een zoekresultaat zien', async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    const content = await searchResult.getContent(1);
    await assert.eventually.equal(content.getDescription(1), 'Vlaanderenkiest.be');
    await assert.eventually.equal(content.getValue(1), 'Verkiezingsresultaten op Vlaanderenkiest.be...');
    await assert.eventually.equal(content.getDescription(2), 'Vlaanderen intern');
    await assert.eventually.equal(content.getValue(2), 'Werkt u bij de Vlaamse overheid...');
  });
});
