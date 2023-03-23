const puppeteer = require('puppeteer');
const { get } = require('./http-service');

const URL = 'http://books.toscrape.com';

const _getHtml = (uri) => {
  const fullUrl = `${URL}/catalogue/${uri.replace('catalogue/', '')}`;
  return get(fullUrl);
};

const _getBooksInfo = (html) => {
  return undefined;
};

const _getNextPageButtonUri = (html) => {
  return undefined;
};

const _getBookByName = (booksInfo, name) => {
  const books = booksInfo.filter(bookInfo => bookInfo.title.toLowerCase() == name.toLowerCase());

  if (books) {
    return books[0];
  } else {
    return undefined;
  }
};

const getBookInfoByName = async (name, html) => {
  if (!html) {
    html = await _getHtml('page-1.html');
  }
  
  const booksInfo = _getBooksInfo(html);
  const book = _getBookByName(booksInfo, name);

  if (book) {
    return book;
  } else {
    const uri = _getNextPageButtonUri(html);

    if (uri) {
      html = await _getHtml(uri);
      return await getBookInfoByName(name, html);
    }
  }
};

module.exports = { getBookInfoByName };