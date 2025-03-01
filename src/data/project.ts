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
    title: "Redeisgn parcours client - Page de résultats de recherche",
    image: "../images/wojo-searchpage.png",
    url: "https://www.wojo.com/fr-FR/search/centers",
    description:
      "NextJS - NestJS - TypeScript - API - AWS OpenSearch - PostgreSQL",
  },
  {
    id: 3,
    title: "Redeisgn parcours client - Page de détails du centre",
    image: "../images/wojo-centerdetailspage.png",
    url: "https://www.wojo.com/fr-FR/espaces-de-travail/wojo-paris-13e-bnf",
    description:
      "NextJS - NestJS - TypeScript - API - AWS OpenSearch - PostgreSQL",
  },
  {
    id: 4,
    title: "Analyse des ventes",
    image: "../images/architecture.png",
    url: "https://github.com/Raftouch/sales_analysis",
    description: "Python - Merise - SQLite - Docker",
  },
];
