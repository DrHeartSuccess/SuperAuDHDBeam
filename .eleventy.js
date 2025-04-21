
const now = String(Date.now());

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
  eleventyConfig.addWatchTarget('./styles/tailwind.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

  eleventyConfig.addShortcode('version', function () {
    return now;
  });
}

