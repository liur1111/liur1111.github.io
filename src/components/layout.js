import * as React from "react";
import NavBar from "./navbar.js";
import ProjectContext from "../store.js";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <ProjectContext.Consumer>
      {(user) => (
        <div id="layout" class="layout-container">
          <NavBar />
          {children}
        </div>
      )}
    </ProjectContext.Consumer>
  );
};

export default Layout;
