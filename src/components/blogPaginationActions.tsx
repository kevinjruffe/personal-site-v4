import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";

type Props = {
  page: Page<CollectionEntry<"blog">>;
};

export default function BlogPaginationActions({ page }: Props) {
  return (
    <nav aria-label="Pagination">
      {page.url.prev ? (
        <a href={page.url.prev}>Newer posts</a>
      ) : (
        <span>Newer posts</span>
      )}
      {" | "}
      <span>
        Page {page.currentPage} of {page.lastPage}
      </span>
      {" | "}
      {page.url.next ? (
        <a href={page.url.next}>Older posts</a>
      ) : (
        <span>Older posts</span>
      )}
    </nav>
  );
}
