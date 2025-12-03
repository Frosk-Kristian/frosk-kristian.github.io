const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// copy `css/` to `_site/css/`
	eleventyConfig.addPassthroughCopy("css");
};
