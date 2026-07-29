import { skills } from "@/utils/constants";
import classes from "./skills.module.css";

export default function Skills() {
  return (
    <section className={classes.skillsSection}>
      <div className={classes.skillsHeader}>
        <h2>Skills</h2>
      </div>

      <div className={classes.skillsGrid}>
        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>Languages</h3>
          <ul className={classes.skillList}>
            {skills.languages.map((lang) => {
              const Icon = lang.icon;
              return (
                <li key={lang.name} className={classes.skillItem}>
                  <Icon />
                  {lang.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>Frameworks</h3>
          <ul className={classes.skillList}>
            {skills.frameworks.map((frame) => {
              const Icon = frame.icon;
              return (
                <li key={frame.name} className={classes.skillItem}>
                  <Icon />
                  {frame.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>Libraries</h3>
          <ul className={classes.skillList}>
            {skills.libraries.map((lib) => {
              const Icon = lib.icon;
              return (
                <li key={lib.name} className={classes.skillItem}>
                  <Icon />
                  {lib.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>API</h3>
          <ul className={classes.skillList}>
            {skills.apis.map((api) => {
              const Icon = api.icon;
              return (
                <li key={api.name} className={classes.skillItem}>
                  <Icon />
                  {api.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>Tools</h3>
          <ul className={classes.skillList}>
            {skills.tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <li key={tool.name} className={classes.skillItem}>
                  <Icon />
                  {tool.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.skillCard}>
          <h3 className={classes.skillTitle}>Practices</h3>
          <ul className={classes.skillList}>
            {skills.practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <li key={practice.name} className={classes.skillItem}>
                  <Icon />
                  {practice.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
