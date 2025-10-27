import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { projects } from "../../portfolio";

export default function Projects() {
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {projects.data.map((project) => (
          <GithubRepoCard
            key={project.id}
            repo={{
              name: project.name,
              description: project.description,
              url: project.url,
              primaryLanguage: {
                name: project.languages[0],
                color: "#f1e05a"
              }
            }}
          />
        ))}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/rithvik4"
        newTab={true}
      />
    </div>
  );
}

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/dantusaikamal"
        newTab={true}
      />
    </div>
  );
}
