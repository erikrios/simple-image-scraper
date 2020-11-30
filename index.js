const Scraper = require("images-scraper");

const google = new Scraper({ puppeteer: { headless: false } });

(async () => {
  const results = await google.scrape("banana", 10);
  results.forEach((e) => {
    console.log(e.url);
  });
})();
