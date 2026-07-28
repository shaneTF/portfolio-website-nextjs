import { education } from "@/utils/constants";

export default function Education() {
  return (
    <div>
      <ul>
        {education.map((data) => (
          <li key={data.date.startYear}>
            <h3>{data.school}</h3>
            <span>
              {data.location.city}, {data.location.stateCode}
            </span>
            <span>
              <strong>
                {data.degree} in {data.study}
              </strong>
            </span>
            <span>Graduated: {data.graduated ? "Yes" : "No"}</span>
            <span>
              {data.date.startYear} - {data.date.endYear}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
