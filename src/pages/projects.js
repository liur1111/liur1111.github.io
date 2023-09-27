import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import ProjectContext from "../store.js";
import personal_portfolio from "../images/projects/personal-portfolio/cover-photo.png";
import roach_radio from "../images/projects/roach-radio/cover-photo.png";
import gcn_launcher from "../images/projects/gcn-launcher/cover-photo.png";
import music_now from "../images/projects/music-now/cover-photo.png";
import mogi from "../images/projects/mogi/cover-photo.png";
import keywords_clustering_tool from "../images/projects/keywords-clustering-tool/cover-photo.png";
import nice_rack from "../images/projects/nice-rack/cover-photo.png";
import roachradiomotto from "../images/projects/RoachRadioMotto.png";
import roachradiomotto2 from "../images/projects/RoachRadioMotto2.png";
import letscelebrateballs from "../images/projects/letscelebrateballs.png";
import shoomverns from "../images/projects/Shoomverns.jpeg";
import sesfverns from "../images/projects/SESFverns.png";
import begoosedocrime from "../images/projects/BeGooseDoCrime.png";

import "./projects.css";
import "../components/project_layout.css";

const FILTERS = ["all", "personal", "work", "design"];

const PROJECTS = [
  {
    title: "GCN Launcher",
    category: "work",
    path: "/projects/gcn-launcher",
    cover: gcn_launcher,
    orientation: "vertical",
  },
  {
    title: "Roach Radio",
    category: "personal",
    path: "/projects/roach-radio",
    cover: roach_radio,
    orientation: "horizontal",
  },
  {
    title: "Personal Portfolio",
    category: "personal",
    path: "/projects/personal-portfolio",
    cover: personal_portfolio,
    orientation: "horizontal",
  },
  {
    title: "Music Now",
    category: "personal",
    path: "/projects/music-now",
    cover: music_now,
    orientation: "horizontal",
  },
  {
    title: "Mogi",
    category: "personal",
    path: "/projects/mogi",
    cover: mogi,
    orientation: "horizontal",
  },
  {
    title: "Keywords Clustering Tool",
    category: "work",
    path: "/projects/keywords-clustering-tool",
    cover: keywords_clustering_tool,
    orientation: "horizontal",
  },
  {
    title: "Nice Rack",
    category: "personal",
    path: "/projects/nice-rack",
    cover: nice_rack,
    orientation: "none",
  },
  {
    category: "design",
    cover: letscelebrateballs,
    orientation: "none",
  },
  {
    category: "design",
    cover: begoosedocrime,
    orientation: "none",
  },
  {
    category: "design",
    cover: shoomverns,
    orientation: "vertical",
  },
  {
    category: "design",
    cover: roachradiomotto,
    orientation: "horizontal",
  },
  {
    category: "design",
    cover: sesfverns,
    orientation: "none",
  },
  {
    category: "design",
    cover: roachradiomotto2,
    orientation: "horizontal",
  },
];

const ProjectsPage = () => {
  const { filter, setFilter } = React.useContext(ProjectContext);
  const [showFullScreen, setShowFullScreen] = React.useState("");

  return (
    <Layout>
      <div class="projects-container">
        <div class="title-container">
          <h2 class="title-left">PROJECTS</h2>
          <div class="title-right">
            {FILTERS.map((f, index) => {
              return (
                <button
                  class={filter === f ? "filter-item" : "filter-option"}
                  onClick={() => {
                    setFilter(f);
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
        <div class="project-gallery">
          {PROJECTS.filter((project) =>
            filter !== "all"
              ? project["category"] === filter
              : project["category"] !== "design"
          ).map((project, index) => {
            return (
              <div class={"image-container " + project["orientation"]}>
                {project["category"] !== "design" ? (
                  <Link to={project["path"]}>
                    <img
                      src={project["cover"]}
                      alt={project["title"]}
                      class="project-image"
                    />
                    <div class="img_description">
                      <div class="image-title">{project["title"]}</div>
                    </div>
                  </Link>
                ) : (
                  <img
                    src={project["cover"]}
                    alt=""
                    class="project-image"
                    onClick={() => setShowFullScreen(project["cover"])}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div class="fullscreen-image">
            <img src={showFullScreen} alt="" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectsPage;
