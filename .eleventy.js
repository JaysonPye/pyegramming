const fs = require("fs");
const MarkdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const md = new MarkdownIt({ html: true, breaks: true });

  function parseDailyLog() {
    const raw = fs.readFileSync("daily-log.md", "utf8");
    const chunks = raw.split(/\n(?=##\\s+\\d{4}-\\d{2}-\\d{2})/g);

    return chunks
      .filter((c) => c.trim().startsWith("##"))
      .map((chunk) => {
        const [first, ...rest] = chunk.split("\n");
        const dateStr = first.replace(/^##\\s+/, "").trim();
        return {
          date: new Date(dateStr),
          dateStr,
          html: md.render(rest.join("\n")),
        };
      })
      .sort((a, b) => b.date - a.date); // newest first
  }

  eleventyConfig.addCollection("dailylog", () => parseDailyLog());

  eleventyConfig.addShortcode("recentLogs", (n = 5) => {
    return parseDailyLog()
      .slice(0, n)
      .map((e) => `<article><h2>${e.dateStr}</h2>${e.html}</article>`)
      .join("");
  });

  return {
    dir: { input: ".", layouts: "layouts", output: "_site" },
  };
};
