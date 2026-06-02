export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  openGraphImageUrl: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
}

const query = `
query GetPinnedRepositories {
  user(login: "joaosilvateixeira33") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          homepageUrl
          openGraphImageUrl
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export async function getPinnedProjects() {
  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await response.json();

  if (data.errors) {
    console.error("GitHub GraphQL:", data.errors);
    return [];
  }

  return data?.data?.user?.pinnedItems?.nodes ?? [];
}