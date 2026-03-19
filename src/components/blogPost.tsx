import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";
import Styles from "./blogPost.module.css";
import { dateFormatter } from "../utils/blog";

type Props = {
  children?: ReactNode;
  isNonIndexPage?: boolean;
  post: CollectionEntry<"blog">;
};

export default function BlogPost({ children, isNonIndexPage = false, post }: Props) {
  return (
    <article>
      <h1 className={Styles[isNonIndexPage ? "post-title" : "post-title-on-index"]}>
        <a href={`/blog/${post.id}`}>{post.data.title}</a>
      </h1>
      <p>
        <time dateTime={post.data.pubDate.toISOString()}>{dateFormatter(post.data.pubDate)}</time>
      </p>
      <div className={Styles["post-content"]}>{children}</div>
      <p className={Styles["post-tags"]}>
        <span aria-hidden="true">🏷️ </span>
        <span className={Styles["post-tags-label"]}>Topics</span>
        {": "}
        {post.data.tags.map((tag, index) => (
          <span key={tag}>
            {index > 0 && ", "}
            <a href={`/tags/${tag}/`}>{tag}</a>
          </span>
        ))}
      </p>
      {isNonIndexPage && (
        <p>
          <a href="/" aria-label="Back to blog" className={Styles["return-link"]}>
            ←
          </a>
        </p>
      )}
    </article>
  );
}
