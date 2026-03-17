import Styles from "./resumeActions.module.css";

export default function ResumeActions() {
  return (
    <p className={Styles["resume-actions"]}>
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        Open in New Tab
      </a>
      <span aria-hidden="true"> | </span>
      <a href="/resume.pdf" download>
        Download PDF
      </a>
    </p>
  );
}
