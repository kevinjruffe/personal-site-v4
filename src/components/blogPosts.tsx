import type { CollectionEntry } from "astro:content";
import BlogPost from "./blogPost";

type Props = {
  posts: CollectionEntry<"blog">[];
  postContents: { [id: string]: string | TrustedHTML };
};

export default function BlogPosts({ posts, postContents }: Props) {
  return (
    <ol>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post}>
          <div
            dangerouslySetInnerHTML={{ __html: postContents[post.id] ?? "" }}
          />
        </BlogPost>
      ))}
    </ol>
  );
}
