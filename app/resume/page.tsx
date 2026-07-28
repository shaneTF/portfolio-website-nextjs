import { briefBackground } from "@/utils/constants";
import classes from "./resume.module.css";
import WorkExperience from "./work/work-experience";
import Skills from "./skills_list/skills";
import Education from "./education_list/education";

export default function Page() {
  return (
    <div className={classes.resumeContainer}>
      <section>
        <h1>Resume</h1>
        <div>About Me</div>
      </section>

      <section>
        <p className={classes.briefDescription}>{briefBackground}</p>
      </section>

      <section>
        <WorkExperience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <p>Hobbies</p>
      </section>
    </div>
  );
}
