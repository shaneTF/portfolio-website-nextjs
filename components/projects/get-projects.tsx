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
  let repos: Repo[] = [];

  try {
    const response = await fetch(
      `https://api.github.com/users/${params.username}/repos?sort=push&direction=desc&per_page=6`,
      {
        headers: {
          Authorization: process.env.GITHUB_TOKEN
            ? `Bearer ${process.env.GITHUB_TOKEN}`
            : "",
          Accept: "application/vnd.github+json",
        },
        cache: "no-store",
      },
    );

    if (response.ok) {
      const reposJson = await response.json();
      repos = Array.isArray(reposJson) ? reposJson : [];
    }
  } catch {
    repos = [];
  }

  return (
    <div className={classes.container}>
      <h1>Projects</h1>
      <p>Some recent projects I have worked on and uploaded to GitHub:</p>
      {Array.isArray(repos) && repos.length > 0 ? (
        <div className={classes.list}>
          {repos.map((repo) => (
            <a
              key={repo.id}
              className={classes.item}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RepoCard repo={repo} />
            </a>
          ))}
        </div>
      ) : (
        <div className={classes.empty}>No repos found</div>
      )}
    </div>
  );
}
