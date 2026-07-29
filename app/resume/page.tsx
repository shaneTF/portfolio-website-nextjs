import { briefBackground } from "@/utils/constants";
import classes from "./resume.module.css";
import WorkExperience from "./work/work-experience";
import Skills from "./skills_list/skills";
import Education from "./education_list/education";

export default function Page() {
  return (
    <div className={classes.resumeContainer}>
      <section>
        <h1 className={classes.resumeTitle}>Experience</h1>
      </section>

      <section>
        <h2 className={classes.summaryHeader}>Summary</h2>
        <p className={classes.briefDescription}>{briefBackground}</p>
      </section>

      <section>
        <Skills />
      </section>
      <section>
        <WorkExperience />
      </section>
      <section>
        <Education />
      </section>
    </div>
  );
}
