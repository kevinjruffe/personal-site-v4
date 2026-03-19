import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";

export type BlogPage = Page<CollectionEntry<"blog">>;
export type BlogPost = CollectionEntry<"blog">;
export type BlogTag = BlogPost["data"]["tags"][number];
