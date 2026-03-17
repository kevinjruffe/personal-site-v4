import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";
import { dateFormatter } from "../utils";

type Props = {
  children?: ReactNode;
  isNonIndexPage?: boolean;
  post: CollectionEntry<"blog">;
};

export default function BlogPost({
  children,
  isNonIndexPage = false,
  post,
}: Props) {
  return (
    <article>
      {isNonIndexPage && (
        <p>
          <a href="/">Back to blog</a>
        </p>
      )}
      <h1>
        <a href={`/blog/${post.id}`}>{post.data.title}</a>
      </h1>
      <p>
        <time dateTime={post.data.pubDate.toISOString()}>
          {dateFormatter(post.data.pubDate)}
        </time>
      </p>
      {children}
    </article>
  );
}
