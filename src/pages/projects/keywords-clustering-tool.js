import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import PROJECTS from "../../components/project_list.js";
import "../../components/project_layout.css";

const KeywordsClusteringTool = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  const project = PROJECTS[5];
  return (
    <ProjectLayout projectTitle="Keywords Clustering Tool">
      <div class="new-stack">
        <div class="project-description keywords">
          <div>
            I created Zenbrief's{" "}
            <span
              class="external-links"
              onClick={() =>
                window.open("https://keywordclustering.zenbrief.com/")
              }
            >
              keyword clustering tool
            </span>{" "}
            during my internship at LYVE soft. This tool take in an input list
            of keywords, by either copy-pasting it in the text field or
            uploading a text file. In each case, there should be one keyword per
            line. An optional topic can also be indicated. The topic will be
            used to organize clusters from most closely related to least closely
            related cluster.
            <br></br>
            <br></br>I wrote the entire backend of this tool. It uses an
            NTP-based combined approach of vector quantization and Google’s
            BERT, a neural-based technique for Natural Language Processing that
            is able to understand context and therefore group keywords that have
            similar meanings. I then implement an optimization technique to find
            the optimal number of clusters in order to maximize the quality of
            each cluster.
          </div>
        </div>
        <img
          src={project["cover"]["src"]}
          alt=""
          class="project-media screenshot"
          onClick={() => setShowFullScreen("cover")}
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

export default KeywordsClusteringTool;
