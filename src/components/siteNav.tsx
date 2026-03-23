import { useEffect, useState } from "react";
import Styles from "./siteNav.module.css";

const links = [
  { href: "/", label: "Thoughts" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

const desktopMediaQuery = "(min-width: 48rem)";

export default function SiteNav() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(desktopMediaQuery);

    function syncNavigationState(eventOrList: MediaQueryList | MediaQueryListEvent) {
      const matches = eventOrList.matches;

      setIsDesktop(matches);
      setIsOpen(matches);
    }

    syncNavigationState(mediaQueryList);

    const handleChange = (event: MediaQueryListEvent) => syncNavigationState(event);
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={Styles["nav-shell"]}>
      <button
        type="button"
        className={Styles["nav-toggle"]}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span className={Styles["sr-only"]}>
          {isOpen ? "Close navigation menu" : "Open navigation menu"}
        </span>
        <span className={Styles["nav-toggle-lines"]} aria-hidden="true">
          <span className={Styles["nav-toggle-line"]} />
          <span className={Styles["nav-toggle-line"]} />
          <span className={Styles["nav-toggle-line"]} />
        </span>
      </button>
      <nav
        id="site-navigation"
        className={Styles["nav-menu"]}
        data-open={isOpen ? "true" : "false"}
        aria-label="Primary"
        aria-hidden={!isDesktop && !isOpen ? true : undefined}
        hidden={!isDesktop && !isOpen}
      >
        <ul className={Styles["nav-list"]}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={Styles["nav-link"]}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
