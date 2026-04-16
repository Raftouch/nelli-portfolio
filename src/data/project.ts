import { MyProject } from "../models/MyProject";

export const projects: MyProject[] = [
  {
    id: 1,
    title: "Redesign Homepage et Parcours Client",
    image: "../images/wojo-homepage.png",
    url: "https://www.wojo.com/fr-FR",
    description:
      "Next.js · NestJS · TypeScript · API · AWS OpenSearch · PostgreSQL",
  },
  {
    id: 2,
    title: "Horizons Express",
    image: "../images/horizons-express.png",
    url: "https://horizons-express.netlify.app",
    description: "Node.js · TypeScript · Express.js · React · OpenWeather API",
  },
  {
    id: 3,
    title: "Arbres remarquables de Paris",
    image: "../images/remarkable-trees.png",
    url: "https://remarkable-trees-paris.netlify.app",
    description: "React · TypeScript · API · Maps",
  },
  {
    id: 4,
    title: "Woof Random",
    image: "../images/dog-breeds.png",
    url: "https://dogbreedsonline.netlify.app",
    description: "React · TypeScript · API",
  },
  {
    id: 5,
    title: "Rafton - Plateforme de musique",
    image: "../images/rafton.png",
    url: "https://github.com/Raftouch/rafton-music-tree",
    description:
      "Next.js · NestJS · Express.js · TypeScript · Auth (JWT, RBAC) · Docker · API · PostgreSQL · CI/CD (GitHub Actions) · Microservices · Conception de bases de données (MCD, MLD, MPD)",
  },
  {
    id: 6,
    title: "Paw Pals 🐾",
    image: "../images/paw-pals.png",
    url: "https://github.com/Raftouch/mascots-app-front",
    description:
      "Node.js · Express.js · Auth (Passport.js, sessions) · React · TypeScript · MongoDB",
  },
];
