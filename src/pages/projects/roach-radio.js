import * as React from "react";
import ProjectLayout from "../../components/project_layout.js";
import "../../components/project_layout.css";
import coverPhoto from "../../images/projects/roach-radio/cover-photo.png";

const RoachRadio = () => {
  const [showFullScreen, setShowFullScreen] = React.useState("");
  return (
    <ProjectLayout projectTitle="Roach Radio">
      <div class="new-stack">
        <img
          src={coverPhoto}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen(coverPhoto)}
        />
        <div class="project-description">
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
        </div>
      </div>
      <div class="new-stack">
        <div class="project-description text-right">
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
        </div>
        <img
          src={coverPhoto}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen(coverPhoto)}
        />
      </div>
      <div class="new-stack">
        <img
          src={coverPhoto}
          alt=""
          class="project-media"
          onClick={() => setShowFullScreen(coverPhoto)}
        />
        <div class="project-description">
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
          description description descriptiondescrip description description
        </div>
      </div>
      {/* <div class="new-stack">
<div class="project-description text-right">
description description descriptiondescrip description description
description description descriptiondescrip description description
description description descriptiondescrip description description
description description descriptiondescrip description description
description description descriptiondescrip description description
description description descriptiondescrip description description
</div>
<video muted controls class="project-media">
<source src={video1} type="video/mp4" />
</video>
</div> */}
      {showFullScreen !== "" && (
        <div class="fullscreen-overlay" onClick={() => setShowFullScreen("")}>
          <div class="fullscreen-image">
            <img src={showFullScreen} alt="" />
          </div>
        </div>
      )}
    </ProjectLayout>
  );
};

export default RoachRadio;
