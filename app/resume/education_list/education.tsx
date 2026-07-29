import { education } from "@/utils/constants";
import classes from "./education.module.css";

export default function Education() {
  return (
    <div>
      <div className={classes.educationHeader}>
        <h2>Education</h2>
      </div>
      <ul className={classes.educationList}>
        {education.map((data) => (
          <li key={data.date.startYear} className={classes.educationItem}>
            <div className={classes.educationHeader}>
              <h3 className={classes.school}>{data.school}</h3>
              <span className={classes.date}>
                {data.date.startYear} - {data.date.endYear}
              </span>
            </div>
            <div className={classes.details}>
              <div className={classes.metaRow}>
                <span className={classes.location}>
                  {data.location.city}, {data.location.stateCode}
                </span>
                <span className={classes.graduated}>
                  Graduated: {data.graduated ? "Yes" : "No"}
                </span>
              </div>
              <div className={classes.degree}>
                <strong>
                  {data.degree} in {data.study}
                </strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
