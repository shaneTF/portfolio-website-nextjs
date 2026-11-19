import ContactButton from "@/components/contact_form/contact";
import classes from "./contact.module.css";

export default function ContactMe() {
  return (
    <main className={classes.contactContainer}>
      <section className={classes.contactHeader}>
        <h1 className={classes.contactTitle}>Get in Touch</h1>
        <p className={classes.contactTagline}>
          Thanks for visiting! I&apos;d like to hear from you!
        </p>
      </section>

      <section className={classes.contactCard}>
        <p className={classes.description}>
          If you have any inquiries, or just want to say hello, feel free to
          reach out via the email link on this page, call or message on any
          other platform listed below!
        </p>

        <div className={classes.platformSection}>
          <h2 className={classes.platformTitle}>Find me on</h2>
          <div className={classes.platformList}>
            <a
              className={classes.platform}
              href="https://github.com/shaneTF"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className={classes.platform}
              href="https://www.linkedin.com/in/shane-franklin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={classes.platformSection}>
          <h2 className={classes.platformTitle}>Call or Message!</h2>
          <span className={classes.platform}>+1 317-679-6378</span>
        </div>

        <div className={classes.formSection}>
          <ContactButton />
        </div>
      </section>
    </main>
  );
}
