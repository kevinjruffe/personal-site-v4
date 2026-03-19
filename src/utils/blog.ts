import type { BlogPost, BlogTag } from "../types";

export function dateFormatter(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(date);
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort();
}

export function getPostsByTag(posts: BlogPost[], tag: BlogTag) {
  return posts.filter((post) => post.data.tags.includes(tag));
}

export function getPostContents(posts: BlogPost[]) {
  return Object.fromEntries(posts.map((post) => [post.id, post.rendered?.html ?? ""]));
}

export function sortBlogPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
