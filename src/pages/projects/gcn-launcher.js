import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const GCNLauncher = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[0];
  return (
    <ProjectLayout projectTitle="GCN Launcher">
      <div class="new-stack">
        <img
          src={project["photo1"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("photo1")}
        />
        <div class="project-description">
          <div>
            <span
              class="external-links"
              onClick={() => window.open("https://www.graal.cloud/gcn")}
            >
              Graal Cloud Native (GCN)
            </span>{" "}
            is an Oracle build of the open source Micronaut framework. GCN
            provides a curated set of Micronaut framework modules that simplify
            cloud application development, are designed to be compiled
            ahead-of-time with GraalVM Native Image, and are fully supported by
            Oracle. GCN enables you to easily build portable cloud native Java
            microservices that start instantly and use fewer resources to reduce
            compute costs.
          </div>
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right">
          <div>
            I have designed and built a majority of the features of the{" "}
            <span
              class="external-links"
              onClick={() =>
                window.open("https://www.graal.cloud/gcn/launcher")
              }
            >
              GCN launcher
            </span>
            , which facilitates the process of creating a GCN app. The more
            noticeable features include previewing the entire code directory of
            an app, and displaying differences in code between 2 GCN apps. This
            utilized mosly React.JS, Recoil, Redux, and the entirely Java-based
            GCN backend.
          </div>
        </div>
        <img
          src={project["photo2"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("photo2")}
        />
      </div>
      <div class="new-stack">
        <img
          src={project["photo3"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("photo3")}
        />
        <iframe
          class="project-media figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnCeE1qcu0K80qcq3aAzYwd%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DRQpcPGLKRR0R2Qnu-1"
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

export default GCNLauncher;
