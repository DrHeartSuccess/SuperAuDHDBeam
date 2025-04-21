
const now = String(Date.now());

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
  eleventyConfig.addWatchTarget('./styles/tailwind.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addShortcode('version', function () {
    return now;
  });

  eleventyConfig.addCollection("comicPages", function(collectionApi){
    return collectionApi.getFilteredByTag("comic").sort((a, b) => a.date - b.date);
  });
  return {
    pathPrefix: "/SuperAuDHDBeam/"
  }
};

