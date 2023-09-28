import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const Mogi = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[4];
  return (
    <ProjectLayout projectTitle="Mogi">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            <span
              class="external-links"
              onClick={() => window.open("https://github.com/liur1111/mogi")}
            >
              Mogi
            </span>{" "}
            is a web app where you can create pages made up of boxes. Inside of
            these boxes, users can add a variety of different things. Links,
            images, code, text, songs are some examples of what can go inside of
            boxes. This site helps users organize different kinds of media and
            easily share it with friends. Collaborative pages are also
            available.
          </div>
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right">
          I designed the UI using Figma, and built the site with a React.JS
          framework and a MongoDB database, and deployed it via Heroku.
          Unfortunately, the site is now offline due to Heroku changing their
          free hosting services.
        </div>
        <iframe
          class="project-media figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmAarEFy3ybyQABn29LjCKA%2FMogi%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D3l9Pv3RnU6gpI4ZR-1"
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

export default Mogi;
