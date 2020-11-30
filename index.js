const Scraper = require("images-scraper");
const download = require("image-downloader");

const keyword = "banana";
const limit = 10;
const destination = "/home/erik1997/Pictures/WallpaperReog";

const google = new Scraper({ puppeteer: { headless: false } });

(async () => {
  const results = await google.scrape(keyword, limit);
  results.forEach(async (e) => {
    const options = {
      url: e.url,
      dest: destination,
    };

    try {
      const { filename } = await download.image(options);
      console.log("Saved to", filename);
    } catch (err) {
      console.error(err);
    }
  });
})();
