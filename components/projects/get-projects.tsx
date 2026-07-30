import RepoCard from "./RepoCard";
import classes from "./projects.module.css";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

export default async function Projects({
  params,
}: {
  params: { username: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repos/${params.username}`,
  );
  const reposJson = await response.json();

  const repos: Repo[] = Array.isArray(reposJson) ? reposJson : [];

  return (
    <div className={classes.container}>
      {Array.isArray(repos) && repos.length > 0 ? (
        <div className={classes.list}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className={classes.empty}>No repos found</div>
      )}
    </div>
  );
}
