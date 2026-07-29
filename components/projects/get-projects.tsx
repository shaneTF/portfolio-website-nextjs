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
    <div>
      <ul>
        {Array.isArray(repos) ? (
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))
        ) : (
          <div>No repos found</div>
        )}
      </ul>
    </div>
  );
}
