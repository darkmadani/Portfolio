import project from "../assets/projects/project.svg";
import calculator from "../assets/projects/calculator.png";
import login from "../assets/projects/login.png";
import dashboard from "../assets/projects/dashboard.png";
import calcu from "../../calculator.html"
import signin from "../../login.html"
import dash from "../../dashboard/index.html"


const projects = [
  {
    name: "Calculator",
    img: calculator,
    description:
      "Tugas tentang Kalkulator",
    link: calcu,
  },
  {
    name: "Form Login / Register",
    img: login,
    description:
      "Tugas tentang Form Login dan Register",
    link: signin,
  },
  {
    name: "Dashboard",
    img: dashboard,
    description:
      "Tugas tentang Dashboard",
    link: dash,
  },
];

export { projects };
