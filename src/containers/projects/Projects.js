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
              id: project.id,
              name: project.name,
              description: project.description,
              url: project.url,
              languages: project.languages,
              createdAt: new Date().toISOString(),
              primaryLanguage: {
                name: project.languages[0],
                color: "#f1e05a",
              },
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
