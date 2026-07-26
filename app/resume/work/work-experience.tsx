import { workExperience } from "@/utils/constants";

export default function WorkExperience() {
  return (
    <div>
      <ul>
        {workExperience.map((job) => (
          <li key={job.employer}>
            <h3>{job.title}</h3>
            <span>{job.employer}</span>
            <br />
            <span>
              {job.location.city}, {job.location.stateCode}
            </span>
            <br />
            <span>
              from {job.timeFrame.startMonth}, {job.timeFrame.startYear} to{" "}
              {job.timeFrame.endMonth}, {job.timeFrame.endYear}
            </span>
            <br />
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
