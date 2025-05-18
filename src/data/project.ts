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
    title: "Rafton - Plateforme de musique",
    image: "../images/rafton.png",
    url: "https://github.com/Raftouch/rafton-music-tree",
    description:
      "Next.js · NestJS · Express.js · TypeScript · Docker · API · PostgreSQL · CI/CD (GitHub Actions) · Microservices · Conception de bases de données (MCD, MLD, MPD)",
  },
  {
    id: 3,
    title: "Say Smart - Text to Speech",
    image: "../images/say-smart.png",
    url: "https://github.com/Raftouch/say-smart",
    description:
      "Python · FastAPI · Hugging Face · PyTorch · REST API · Text-to-Speech · SoundFile - Docker",
  },
  // {
  //   id: 4,
  //   title: "Crypto Overview Today",
  //   image: "../images/crypto-today.png",
  //   url: "https://github.com/Raftouch/crypto-overview",
  //   description: "Python · FastAPI · API · Git · React · Typescript",
  // },
];
