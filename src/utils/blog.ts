import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type BlogTag = BlogPost["data"]["tags"][number];

export function sortBlogPosts(posts: BlogPost[]) {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort();
}

export function getPostsByTag(posts: BlogPost[], tag: BlogTag) {
  return posts.filter((post) => post.data.tags.includes(tag));
}
