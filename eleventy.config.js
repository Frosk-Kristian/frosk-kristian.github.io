const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const markdownItAttrs = require("markdown-it-attrs")

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["webp", "jpeg"],
		widths: [450, 900, "auto"],
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
				sizes: "auto",
			},
			pictureAttributes: {},
		},
	});

	// adds markdown-it-attrs library to be able to parse markdown attributes in .md files
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAttrs);
	});

	// copy `css/` to `_site/css/`
	eleventyConfig.addPassthroughCopy("css");
};
