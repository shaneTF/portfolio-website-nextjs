import { workExperience } from "@/utils/constants";
import classes from "./work-experience.module.css";

export default function WorkExperience() {
  return (
    <div>
      <div>
        <h2 className={classes.workExperienceHeader}>Career</h2>
      </div>
      <ul className={classes.workExperienceList}>
        {workExperience.map((job) => (
          <li key={job.employer} className={classes.workExperienceItem}>
            <div className={classes.workHeader}>
              <div>
                <h3 className={classes.position}>{job.title}</h3>
                <div className={classes.employerRow}>
                  <span className={classes.employer}>{job.employer}</span>
                  <span className={classes.location}>
                    {job.location.city}, {job.location.stateCode}
                  </span>
                </div>
              </div>
              <p className={classes.duration}>
                {job.timeFrame.startMonth} {job.timeFrame.startYear} —{" "}
                {job.timeFrame.endMonth} {job.timeFrame.endYear}
              </p>
            </div>
            <p className={classes.description}>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
