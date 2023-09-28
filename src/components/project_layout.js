import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import { BiArrowBack } from "react-icons/bi";
import "./project_layout.css";

const ProjectLayout = ({ projectTitle, children }) => {
  return (
    <Layout>
      <div class="project-layout">
        <div class="project-title">
          <Link to="/projects" class="nav-link">
            <BiArrowBack class="back-arrow" />
          </Link>
          <h2 class="title-right">{projectTitle}</h2>
        </div>
        {children}
      </div>
    </Layout>
  );
};

export default ProjectLayout;
