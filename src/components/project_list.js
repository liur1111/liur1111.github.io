import personal_portfolio from "../images/projects/personal-portfolio/cover-photo.png";
import roach_radio from "../images/projects/roach-radio/cover-photo.png";
import gcn_launcher from "../images/projects/gcn-launcher/cover-photo.png";
import gcn_launcher1 from "../images/projects/gcn-launcher/launcher-form.png";
import gcn_launcher2 from "../images/projects/gcn-launcher/diffs.png";
import gcn_launcher3 from "../images/projects/gcn-launcher/preview.png";
import music_now from "../images/projects/music-now/cover-photo.png";
import music_now_video from "../images/projects/music-now/demo.mp4";
import mogi from "../images/projects/mogi/cover-photo.png";
import keywords_clustering_tool from "../images/projects/keywords-clustering-tool/cover-photo.png";
import nice_rack from "../images/projects/nice-rack/cover-photo.png";
import roachradiomotto from "../images/projects/RoachRadioMotto.png";
import roachradiomotto2 from "../images/projects/RoachRadioMotto2.png";
import letscelebrateballs from "../images/projects/letscelebrateballs.png";
import shoomverns from "../images/projects/Shoomverns.jpeg";
import sesfverns from "../images/projects/SESFverns.png";
import begoosedocrime from "../images/projects/BeGooseDoCrime.png";

const PROJECTS = [
  {
    _id: 0,
    title: "GCN Launcher",
    category: "work",
    path: "/projects/gcn-launcher",
    cover: { src: gcn_launcher, orientation: "vertical" },
    photo1: { src: gcn_launcher1, orientation: "horizontal" },
    photo2: { src: gcn_launcher2, orientation: "horizontal" },
    photo3: { src: gcn_launcher3, orientation: "horizontal" },
  },
  {
    _id: 1,
    title: "Roach Radio",
    category: "personal",
    path: "/projects/roach-radio",
    cover: { src: roach_radio, orientation: "horizontal" },
  },
  {
    _id: 2,
    title: "Personal Portfolio",
    category: "personal",
    path: "/projects/personal-portfolio",
    cover: { src: personal_portfolio, orientation: "horizontal" },
  },
  {
    _id: 3,
    title: "Music Now",
    category: "personal",
    path: "/projects/music-now",
    cover: { src: music_now, orientation: "horizontal" },
    video: music_now_video,
  },
  {
    _id: 4,
    title: "Mogi",
    category: "personal",
    path: "/projects/mogi",
    cover: { src: mogi, orientation: "horizontal" },
  },
  {
    _id: 5,
    title: "Keywords Clustering Tool",
    category: "work",
    path: "/projects/keywords-clustering-tool",
    cover: { src: keywords_clustering_tool, orientation: "horizontal" },
  },
  {
    _id: 6,
    title: "Nice Rack",
    category: "personal",
    path: "/projects/nice-rack",
    cover: { src: nice_rack, orientation: "none" },
  },
  {
    _id: 7,
    category: "design",
    cover: { src: letscelebrateballs, orientation: "none" },
  },
  {
    _id: 8,
    category: "design",
    cover: { src: begoosedocrime, orientation: "none" },
  },
  {
    _id: 9,
    category: "design",
    cover: { src: shoomverns, orientation: "vertical" },
  },
  {
    _id: 10,
    category: "design",
    cover: { src: roachradiomotto, orientation: "horizontal" },
  },
  {
    _id: 11,
    category: "design",
    cover: { src: sesfverns, orientation: "none" },
  },
  {
    _id: 12,
    category: "design",
    cover: { src: roachradiomotto2, orientation: "horizontal" },
  },
];

export default PROJECTS;
