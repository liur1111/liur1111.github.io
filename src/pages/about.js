import * as React from "react";
import Layout from "../components/layout.js";
import TimelineItem from "../components/timeline.js";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./about.css";

const EXPERIENCES = [
  {
    role: "Research Engineer",
    organization: "Oracle Labs",
    description: "Graal Cloud Native (GCN) and Micronaut Full-stack developer",
    startDate: "jun 2023",
    endDate: "present",
    link: "https://labs.oracle.com/",
  },
  {
    project: "Roach Radio",
    description: "Designing and building a web music service for DJs",
    startDate: "jun 2023",
    endDate: "present",
    link: "roach-radio",
  },
  {
    project: "Portfolio Website",
    description: "Designed and implemented personal portfolio",
    startDate: "sep 2023",
    link: "personal-portfolio",
  },
  {
    project: "Music Now",
    description: "Designed and built a music-sharing BeReal platform ",
    startDate: "sep 2023",
    link: "music-now",
  },
  {
    role: "Software Engineering",
    organization: "Lazard",
    description:
      "Built internal platforms and visualizations for financial advisory",
    startDate: "jun 2022",
    endDate: "aug 2022",
    link: "https://www.lazard.com/",
  },
  {
    project: "Nice Rack",
    description: "Created synchronous live music player system",
    startDate: "mar 2022",
    endDate: "may 2022",
    link: "nice-rack",
  },
  {
    role: "Machine Learning",
    organization: "NASDAQ",
    description:
      "Built NLP pipeline to automate processing of financial reports",
    startDate: "jan 2022",
    endDate: "feb 2022",
    link: "https://www.nasdaq.com/",
  },
  {
    project: "Mogi",
    description: "Designed and built a social web app for sharing media",
    startDate: "sep 2023",
    link: "mogi",
  },
  {
    role: "Research Assistant",
    organization: "MIT Media Lab",
    description: "Trained models and built interfaces for music technology",
    startDate: "jul 2021",
    endDate: "aug 2021",
    link: "https://www.media.mit.edu/groups/opera-of-the-future/overview/",
  },
  {
    role: "NLP Software Engineering",
    organization: "LYVE soft",
    description: "Created keywords extraction and clustering API",
    startDate: "jun 2021",
    endDate: "aug 2021",
    link: "https://lyvesoft.com/",
  },
  {
    role: "Computer Vision",
    organization: "Universidad Panamericana",
    description: "Implemented methods for vision-based autonomous navigation",
    startDate: "jan 2021",
    endDate: "feb 2021",
    link: "https://www.up.edu.mx/",
  },
  {
    role: "Research Assistant",
    organization: "MIT CSAIL",
    description:
      "Improved Wikidata PageRank value augmentation/deletion methods",
    startDate: "jan 2020",
    endDate: "sep 2020",
    link: "https://groups.csail.mit.edu/infolab/",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <div class="about-container">
        <div class="summary-container">
          <div class="about-left">
            <h2>DEVELOPER.</h2>
            <h2>DESIGNER.</h2>
            <h2>CREATOR.</h2>
          </div>
          <div class="about-right">
            I graduated with a Bachelor's degree in Electrical Engineering and
            Computer Science from Massachusetts Institute of Technology (MIT
            2023). I am a curious and responsible software engineer with a
            diverse skillset, including but not limited to Python, React JS with
            Javascript/Typescript, Java, and C++.
            <br></br>
            <br></br>
            I'm passionate about producing software that requires me to utilize
            both my creative design skills with my sharp technical abilities.
            Recently, I've been thinking about creating attractive user
            interfaces to transform user experiences. Please reach out if this
            is interesting - I would love to chat.
          </div>
        </div>
        <a id="link" href="#timeline">
          <BsFillCaretDownFill class="carrot" />
        </a>
        <div id="timeline">
          {EXPERIENCES.map((experience, index) => {
            return <TimelineItem props={EXPERIENCES[index]} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
