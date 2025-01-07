// project.js
import project from "../assets/projects/project.svg";
import calculator from "../assets/projects/calculator.png";
import login from "../assets/projects/login.png";
import dashboard from "../assets/projects/dashboard.png";
import tetris from "../assets/projects/tetris.png";
import diagram from "../assets/projects/diagram.png";

const projects = [
  {
    name: "Calculator",
    img: calculator,
    description: "",
    link: "/calculator.html",
    category: "web-app" // Menambahkan kategori
  },
  {
    name: "Form Login / Register",
    img: login,
    description: "",
    link: "/login.html",
    category: "web-app"
  },
  {
    name: "Dashboard",
    img: dashboard,
    description: "",
    link: "/dashboard/index.html",
    category: "web-app"
  },
  {
    name: "Tetris",
    img: tetris,
    description: "",
    link: "/gametetris.html",
    category: "game"
  },
  {
    name: "Diagram Penjualan",
    img: diagram,
    description: "",
    link: "/diagram.html",
    category: "data-visualization"
  },
];

// Daftar kategori yang tersedia
const categories = [
  { id: "all", label: "Semua" },
  { id: "web-app", label: "Aplikasi Web" },
  { id: "game", label: "Permainan" },
  { id: "data-visualization", label: "Visualisasi Data" }
];

export { projects, categories };