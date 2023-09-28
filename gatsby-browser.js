import React from "react";
import { ProjectProvider } from "./src/store.js";

export const wrapRootElement = ({ element }) => (
  <ProjectProvider>{element}</ProjectProvider>
);
