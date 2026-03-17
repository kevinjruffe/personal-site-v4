import Styles from "./resume.module.css";

export default function Resume() {
  return (
    <section className={Styles["resume-page"]}>
      <object
        className={Styles["resume-document"]}
        data="/resume.pdf"
        type="application/pdf"
        aria-label="PDF resume for Kevin Ruffe"
      >
        <p>
          Your browser does not support embedded PDFs.
          <a href="/resume.pdf">Download the resume PDF</a>.
        </p>
      </object>
      <p className={Styles["resume-actions"]}>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Open in New Tab
        </a>
        <span aria-hidden="true"> | </span>
        <a href="/resume.pdf" download>
          Download PDF
        </a>
      </p>
    </section>
  );
}
