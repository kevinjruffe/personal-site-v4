import SiteNav from "./siteNav";
import Styles from "./header.module.css";

export default function Header() {
  return (
    <header className={Styles["site-header"]}>
      <div className={Styles["site-header-inner"]}>
        <SiteNav />
        <a className={Styles["site-title"]} href="/">
          SOME_LOGO_HERE
        </a>
      </div>
    </header>
  );
}
