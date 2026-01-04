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
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getAll()
      .filter(
        (item) =>
          Array.isArray(item.data.tags) &&
          !item.data.eleventyExcludeFromCollections,
      )
      .sort((a, b) => b.date - a.date),
  );

  eleventyConfig.addCollection("postsByTag", (api) => {
    const bad = new Set(["all", "nav"]);
    const posts = api
      .getAll()
      .filter(
        (item) =>
          Array.isArray(item.data.tags) &&
          !item.data.eleventyExcludeFromCollections,
      )
      .sort((a, b) => b.date - a.date);

    const byTag = {};

    for (const post of posts) {
      for (const tag of post.data.tags || []) {
        if (bad.has(tag)) continue;
        if (!byTag[tag]) byTag[tag] = [];
        byTag[tag].push(post);
      }
    }

    return byTag;
  });

  eleventyConfig.addCollection("tagsList", (api) => {
    const bad = new Set(["all", "nav"]);
    const tags = new Set();
    for (const item of api.getAll()) {
      (item.data.tags || []).forEach((t) => {
        if (!bad.has(t)) tags.add(t);
      });
    }
    return [...tags];
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
