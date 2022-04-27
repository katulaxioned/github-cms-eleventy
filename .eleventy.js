module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets")

    return {
        addPassthroughCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"],
        dir: {
            input: "src", 
            output: "_site",
            includes: "includes"
        }
    }
}