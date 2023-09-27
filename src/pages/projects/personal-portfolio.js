import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const PersonalPortfolio = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[2];
  return (
    <ProjectLayout projectTitle="Personal Portfolio">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          I designed the wireframe for my portfolio using Figma. On the
          implementation side, I used Gatsby (a framework based on React.JS,
          GraphQL, and webpack), since the pre-rendered static HTML pages
          ensures that this static site loads as quickly as possible.
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right">
          The projects page showcases some of the cool things I've designed
          and/or built for work, projects, or for my hobbies. There is an entire
          section dedicated to designs I have created by hand and digitally for
          fun.
        </div>
        <iframe
          class="project-media figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNDYlUs0rus7qFi7ZDS43BT%2FRachel-Liu-Portfolio%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DOgSnbuUV1lIEgpI6-1"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div
            class={
              "fullscreen-image " +
              project[showFullScreen]["orientation"] +
              "-fullscreen"
            }
          >
            <img src={project[showFullScreen]["src"]} alt="" />
          </div>
        </div>
      )}
    </ProjectLayout>
  );
};

export default PersonalPortfolio;
