import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";
import Styles from "./blogPaginationActions.module.css";

type Props = {
  page: Page<CollectionEntry<"blog">>;
};

export default function BlogPaginationActions({ page }: Props) {
  return page.total > page.size ? (
    <nav aria-label="Pagination" className={Styles["pagination"]}>
      {page.url.prev ? (
        <a href={page.url.prev} aria-label="Newer posts" className={Styles["pagination-arrow"]}>
          ←
        </a>
      ) : (
        <span
          aria-hidden="true"
          className={`${Styles["pagination-arrow"]} ${Styles["pagination-placeholder"]}`}
        >
          ←
        </span>
      )}
      <span className={Styles["pagination-label"]}>
        Page {page.currentPage} of {page.lastPage}
      </span>
      {page.url.next ? (
        <a href={page.url.next} aria-label="Older posts" className={Styles["pagination-arrow"]}>
          →
        </a>
      ) : (
        <span
          aria-hidden="true"
          className={`${Styles["pagination-arrow"]} ${Styles["pagination-placeholder"]}`}
        >
          →
        </span>
      )}
    </nav>
  ) : null;
}
