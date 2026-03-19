import { useState } from "react";
import Styles from "./siteNav.module.css";

const links = [
  { href: "/", label: "Thoughts" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

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
      >
        <ul className={Styles["nav-list"]}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={Styles["nav-link"]}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
