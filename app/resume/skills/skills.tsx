import { skills } from "@/utils/constants";
import styles from "./skills.module.css";

export default function Skills() {
  const skill = skills[0];

  return (
    <div className={styles.skillsGrid}>
      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>Languages</h3>
        <ul className={styles.skillList}>
          {skill.languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>Frameworks</h3>
        <ul className={styles.skillList}>
          {skill.frameworks.map((frame) => (
            <li key={frame}>{frame}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>Libraries</h3>
        <ul className={styles.skillList}>
          {skill.libraries.map((lib) => (
            <li key={lib}>{lib}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>API</h3>
        <ul className={styles.skillList}>
          {skill.apis.map((api) => (
            <li key={api}>{api}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>Tools</h3>
        <ul className={styles.skillList}>
          {skill.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillColumn}>
        <h3 className={styles.skillTitle}>Practices</h3>
        <ul className={styles.skillList}>
          {skill.practices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
