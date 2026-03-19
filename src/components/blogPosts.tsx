import type { CollectionEntry } from "astro:content";
import BlogPost from "./blogPost";
import Styles from "./blogPosts.module.css";

type Props = {
  posts: CollectionEntry<"blog">[];
  postContents: { [id: string]: string | TrustedHTML };
};

export default function BlogPosts({ posts, postContents }: Props) {
  return (
    <ol className={Styles["post-list"]}>
      {posts.map((post) => (
        <li key={post.id} className={Styles["post-list-item"]}>
          <BlogPost post={post}>
            <div dangerouslySetInnerHTML={{ __html: postContents[post.id] ?? "" }} />
          </BlogPost>
        </li>
      ))}
    </ol>
  );
}
