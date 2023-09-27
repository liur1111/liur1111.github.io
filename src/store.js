import React, { createContext, useEffect, useState } from "react";

const defaultState = {
  projectFilter: "all",
};

const ProjectContext = createContext(defaultState);

const ProjectProvider = (props) => {
  const [filter, setFilter] = useState(defaultState.projectFilter);
  const { children } = props;

  return (
    <ProjectContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;

export { ProjectProvider };
