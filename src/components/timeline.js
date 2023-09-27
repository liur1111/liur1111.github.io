import * as React from "react";
import { Link } from "gatsby";
import "./timeline.css";

/**
 * @props
 * props: {
 *      role: string (if work experience)
 *      organization: string (if work experience)
 *      project: string (if project)
 *      description: string,
 *      startDate: string
 *      endDate: string (if not current)
 *      link: string (if warranted)
 * }
 */
const TimelineItem = ({ props }) => {
  const experienceInfoBox = (
    <>
      {props.project ? (
        <div class="title">
          <Link to={"/projects/" + props.link} class="project-header">
            {props.project}
          </Link>
        </div>
      ) : (
        <div class="title">
          {props.role}{" "}
          <span
            class="organization"
            onClick={() => {
              window.open(props.link);
            }}
          >
            @{props.organization}
          </span>
        </div>
      )}
      <hr class="role-divider"></hr>
      <div class="description">{props.description}</div>
    </>
  );
  const dateInfoBox = (
    <div class="date-info">
      {props.startDate} {props.endDate ? "- " + props.endDate : ""}
    </div>
  );
  return (
    <div class="timeline">
      <div class="timeline-left">
        {props.project ? dateInfoBox : experienceInfoBox}
      </div>
      <div class="timeline-divider">
        <div class="line-left"></div>
        <div class="line-right"></div>
      </div>
      <div class="timeline-right">
        {props.project ? experienceInfoBox : dateInfoBox}
      </div>
    </div>
  );
};

export default TimelineItem;
