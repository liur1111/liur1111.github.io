import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const NiceRack = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[6];

  return (
    <ProjectLayout projectTitle="Nice Rack">
      <div class="new-stack">
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("cover")}
        />
        <div class="project-description">
          <div>
            <span
              class="external-links"
              onClick={() =>
                window.open("https://github.com/liur1111/nicer-rack")
              }
            >
              NiceRack
            </span>{" "}
            is a mostly-synchronous live music player that allows users to queue
            YouTube links to be played through all speakers connected to the
            system. This system allows users to either paste a link, or queue a
            previously played song through a website. This queued song will be
            processed and downloaded onto the server (previously via MIT), and
            the corresponding audio will be sent to all ESP32’s through a
            continuous socket connection. From here, the audio will be amplified
            and sent to all external speakers. A demo video can be found{" "}
            <span
              class="external-links"
              onClick={() => window.open("https://youtu.be/h8n-In6jlcQ")}
            >
              here
            </span>
            .
          </div>
        </div>
      </div>
      <div class="new-stack">
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("photo2")}
        />
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("photo1")}
        />
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

export default NiceRack;
