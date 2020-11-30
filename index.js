const Scraper = require("images-scraper");
const download = require("image-downloader");

const keyword = "Wallpaper Reog";
const limit = 200;
const destination = "/home/erik1997/Pictures/WallpaperReog/Reog";

const google = new Scraper({ puppeteer: { headless: false } });

(async () => {
  const results = await google.scrape(keyword, limit);
  results.forEach(async (result, index) => {
    const imageUrl = result.url;
    const imageExtension = imageUrl.substr(imageUrl.length - 4);

    if (imageExtension.includes(".jpg") || imageExtension.includes(".png")) {
      const options = {
        url: imageUrl,
        dest: `${destination}/image${index}${imageExtension}`,
      };

      try {
        const { filename } = await download.image(options);
        console.log("Saved to", filename);
      } catch (err) {
        console.log(err.message);
      }
    }
  });
})();
