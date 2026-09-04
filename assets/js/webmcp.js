const modelContext = document.modelContext;

if (typeof modelContext?.registerTool === "function") {
  const feedUrl = new URL("/feed.xml", window.location.origin);

  await modelContext.registerTool({
    name: "search_blog_posts",
    description: "Search published Bede Carroll blog posts by words in their titles and summaries.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          minLength: 1,
          pattern: "\\S",
          description: "Words to find in post titles and summaries.",
        },
        limit: {
          type: "integer",
          minimum: 1,
          maximum: 10,
          default: 5,
          description: "Maximum number of posts to return.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: async ({ query, limit = 5 }) => {
      const normalizedQuery = query.trim().toLowerCase();

      if (!normalizedQuery) {
        throw new Error("The search query must contain a non-whitespace character.");
      }

      const terms = normalizedQuery.split(/\s+/);
      const response = await fetch(feedUrl);

      if (!response.ok) {
        throw new Error(`Could not read the blog feed: ${response.status}`);
      }

      const feed = new DOMParser().parseFromString(await response.text(), "application/xml");

      if (feed.querySelector("parsererror")) {
        throw new Error("Could not parse the blog feed.");
      }

      const posts = [...feed.querySelectorAll("item")].map((item) => {
        const title = item.querySelector("title")?.textContent?.trim() ?? "";
        const summaryHtml = item.querySelector("description")?.textContent?.trim() ?? "";
        const summary = new DOMParser()
          .parseFromString(summaryHtml, "text/html")
          .body.textContent.replace(/\s+/g, " ")
          .trim();

        return {
          title,
          url: item.querySelector("link")?.textContent?.trim() ?? "",
          published: item.querySelector("pubDate")?.textContent?.trim() ?? "",
          summary,
        };
      });

      const matches = posts
        .filter((post) => {
          const searchable = `${post.title} ${post.summary}`.toLowerCase();
          return terms.every((term) => searchable.includes(term));
        })
        .slice(0, limit);

      return { query, matchCount: matches.length, posts: matches };
    },
  });

  const currentPost = document.querySelector("article.post:not(.on-list)");

  if (currentPost) {
    await modelContext.registerTool({
      name: "read_current_blog_post",
      description: "Read the current Bede Carroll blog post with its metadata and full text.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async () => ({
        title: currentPost.querySelector(".post-title")?.textContent?.trim() ?? "",
        url: document.querySelector('link[rel="canonical"]')?.href ?? window.location.href,
        published: currentPost.querySelector(".post-date")?.textContent?.trim() ?? "",
        categories: [...document.querySelectorAll('meta[property="article:section"]')].map(
          (category) => category.content,
        ),
        tags: [...currentPost.querySelectorAll(".post-tags a")].map((tag) =>
          tag.textContent.trim(),
        ),
        content: currentPost.querySelector(".post-content")?.textContent?.trim() ?? "",
      }),
    });
  }
}
