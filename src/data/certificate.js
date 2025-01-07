import project from "../assets/projects/project.svg";
import html from "../assets/projects/html.jpg"
import css from "../assets/projects/css.jpg"
import javascript from "../assets/projects/javascript.jpg"
import javascript2 from "../assets/projects/javascript2.jpg"

const certificates = [
  {
    name: "HTML",
    img: html,
    description:
      "",
    link: "https://www.sololearn.com/certificates/CC-KLKOGOUO",
    category: "HTML",
  },
  {
    name: "CSS",
    img: css,
    description:
      "",
    link: "https://www.sololearn.com/certificates/CC-0GLPXOTH",
    category: "CSS",
  },
  {
    name: "JAVASCRIPT",
    img: javascript,
    description:
      "",
    link: "https://www.sololearn.com/certificates/CC-OXWF7K27",
    category: "JAVASCRIPT",
  },
  {
    name: "JAVASCRIPT INTERMEDIATE",
    img: javascript2,
    description:
      "",
    link: "https://www.sololearn.com/certificates/CC-A18N13FE",
    category: "JAVASCRIPT",
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "HTML", label: "Html" },
  { id: "CSS", label: "Css" },
  { id: "JAVASCRIPT", label: "Javascript" },
];

export { certificates };
