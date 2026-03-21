import type { ReactNode } from "react";
import SiteNav from "./siteNav";
import Styles from "./header.module.css";

type Props = {
  children?: ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <header className={Styles["site-header"]}>
      <div className={Styles["site-header-inner"]}>
        <a className={Styles["site-title"]} href="/" aria-label="KevinRuffe.com home">
          {children}
        </a>
        <SiteNav />
      </div>
    </header>
  );
}
