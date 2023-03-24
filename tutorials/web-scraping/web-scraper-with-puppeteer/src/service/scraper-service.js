const puppeteer = require('puppeteer');

const URL = 'http://books.toscrape.com';

const _getUrl = (uri) => `${URL}/catalogue/${uri.replace('catalogue/', '')}`;

const _getBooks = (page, url) => {
  await page.goto(url);
  const articleElements = await page.waitForSelector('ol.row li article');
  
  const books = await articleElements.map(articleElement => {
    const book = await articleElement.evaluate((element) => {
      const rating = element.querySelector('p').className.replace('star-rating ', '');
      const title = element.querySelector('h3 a').getAttribute('title');
      const priceElement = element.querySelector('div.product_price');
      const price = priceElement.querySelector('p.price_color').textContent;
      const availability = priceElement.querySelector('p.instock').textContent.trim();
  
      return { rating, title, price, availability };
    });

    return book;
  });

  return books;
};

const _findBookByName = (books, name) => {
  const filteredBooks = books.filter(bookInfo => bookInfo.title.toLowerCase() == name.toLowerCase());
  return filteredBooks?.[0];
};

const _getBookByName = async (page, name, url) => {
  if (!url) {
    url = _getUrl('page-1.html');
  }
  
  const books = _getBooks(page, url);
  const book = _findBookByName(books, name);

  if (book) {
    return book;
  } else {
    const nextButtonElement = await page.waitForSelector('ul.pager li.next a');
    const uri = await nextButtonElement.evaluate(element => element.getAttribute('href'));
    
    if (uri) {
      url = _getUrl(uri);
      return await _getBookByName(page, name, url);
    }

    return undefined;
  }
};

const getBookInfoByName = async (name) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const book = await _getBookByName(page, name);
  
  await browser.close();
  
  return book;
};

module.exports = { getBookInfoByName };