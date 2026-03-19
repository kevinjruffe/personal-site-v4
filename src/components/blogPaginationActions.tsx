import Styles from "./blogPaginationActions.module.css";
import type { BlogPage } from "../types";

type Props = {
  page: BlogPage;
};

export default function BlogPaginationActions({ page }: Props) {
  return page.total > page.size ? (
    <nav aria-label="Pagination" className={Styles["pagination"]}>
      <PaginationDirectionButton
        isHidden={!page.url.prev}
        linkAriaLabel="Newer posts"
        postsUrl={page.url.prev ?? "#"}
      >
        ←
      </PaginationDirectionButton>
      <span className={Styles["pagination-label"]}>
        Page {page.currentPage} of {page.lastPage}
      </span>
      <PaginationDirectionButton
        isHidden={!page.url.next}
        linkAriaLabel="Older posts"
        postsUrl={page.url.next ?? "#"}
      >
        →
      </PaginationDirectionButton>
    </nav>
  ) : null;
}

type PaginationDirectionButtonProps = {
  children: React.ReactNode;
  isHidden: boolean;
  linkAriaLabel: string;
  postsUrl: string;
};

function PaginationDirectionButton({
  children,
  isHidden,
  linkAriaLabel,
  postsUrl,
}: PaginationDirectionButtonProps) {
  return isHidden ? (
    <span
      aria-hidden="true"
      className={`${Styles["pagination-arrow"]} ${Styles["pagination-placeholder"]}`}
    >
      {children}
    </span>
  ) : (
    <a href={postsUrl} aria-label={linkAriaLabel} className={Styles["pagination-arrow"]}>
      {children}
    </a>
  );
}
