import { briefBackground } from "@/utils/constants";
import classes from "./resume.module.css";

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
        <p>List of previous work experience</p>
      </section>
      <section>
        <p>List of Skills</p>
      </section>
      <section>
        <p>Eduction</p>
      </section>
      <section>
        <p>Hobbies</p>
      </section>
    </div>
  );
}
