import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const MusicNow = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[3];
  return (
    <ProjectLayout projectTitle="Music Now">
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
              onClick={() =>
                window.open("https://github.com/liur1111/music-now")
              }
            >
              MusicNow
            </span>{" "}
            is a web app that gives users a prompt every day, similarly to
            BeReal. Users have to select 3 songs that match the prompt. The
            results are shared with friends, and users can interact with the
            results by liking prompts, saving songs, and commenting on others'
            results. This was designed on Figma and built using Vue.JS, a
            MongoDB database, and an API written in Typescript.
          </div>
        </div>
      </div>
      <div class="new-stack">
        <video muted controls class="project-media screenshot">
          <source src={project["video"]} type="video/mp4" />
        </video>
        <iframe
          class="project-media figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWsNjKsYjCRLZn6WmQFqtpf%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DhYkPXP9XTpry9skV-1"
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

export default MusicNow;
