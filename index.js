const Scraper = require("images-scraper");

const keyword = "banana";
const limit = 10;

const google = new Scraper({ puppeteer: { headless: false } });

(async () => {
  const results = await google.scrape(keyword, limit);
  results.forEach((e) => {
    console.log(e.url);
  });
})();
