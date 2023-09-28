import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const RoachRadio = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[1];
  return (
    <ProjectLayout projectTitle="Roach Radio">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            Roach Radio is a web music service with a emphasis on DJs for
            hosting their music. This is more of a proof of concept and a design
            piece currently, but development has started and you can check in
            for the most updated version{" "}
            <span
              class="external-links"
              onClick={() => window.open("https://roachradio.vercel.app/")}
            >
              here
            </span>
            .
          </div>
        </div>
      </div>
      <div class="new-stack">
        <iframe
          class="project-media figma screenshot"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBwF0xSy9XrCYPCzfuRKeMq%2FRoach-Rad.io%3Ftype%3Ddesign%26mode%3Ddesign%26t%3D3l9Pv3RnU6gpI4ZR-1"
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

export default RoachRadio;
