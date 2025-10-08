/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("favicon.svg");

  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("scripts");

  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/**/*",
    open: true,
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
}
