import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
    // Configure Eleventy
    eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
    eleventyConfig.setInputDirectory("src");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addTemplateFormats("css");
    
    return {
        dir: {
          input: 'src',
          output: '_site',
          includes: '_includes',
          data: '_data'
        },
        markdownTemplateEngine: 'njk'
      }
};

