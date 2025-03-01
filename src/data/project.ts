import { MyProject } from "../models/MyProject";

export const projects: MyProject[] = [
  {
    id: 1,
    title: "Redesign Homepage",
    image: "../images/wojo-homepage.png",
    url: "https://www.wojo.com/fr-FR",
    description: "NextJS - TypeScript - Google Search",
  },
  {
    id: 2,
    title: "Redeisgn parcours client - Page de recherche",
    image: "../images/wojo-searchpage.png",
    url: "https://www.wojo.com/fr-FR/search/centers",
    description:
      "NextJS - NestJS - TypeScript - API - AWS OpenSearch - PostgreSQL",
  },
  {
    id: 3,
    title: "Redeisgn parcours client - Details du centre",
    image: "../images/wojo-centerdetailspage.png",
    url: "https://sparkly-llama-b02512.netlify.app/",
    description:
      "NextJS - NestJS - TypeScript - API - AWS OpenSearch - PostgreSQL",
  },
  {
    id: 4,
    title: "Annuaire",
    image: "../images/notesApp.png",
    url: "https://github.com/Raftouch/notes-app-mern",
    description: "NextJS - NestJS - TypeScript - API - PostgreSQL - SendGrid",
  },
  // {
  //   id: 5,
  //   title: "Restaurants App",
  //   image: "../images/restauApp.png",
  //   url: "https://fancy-bunny-d892d3.netlify.app/",
  //   description: "Vite - React - TypeScript - Tailwind CSS",
  // },
  // {
  //   id: 6,
  //   title: "Mascots App",
  //   image: "../images/mascotsApp.png",
  //   url: "https://github.com/Raftouch/mascots-app-ejs",
  //   description: "Node.js - Express.js - EJS - MongoDB - Multer - Tailwind CSS",
  // },
];
