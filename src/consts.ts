import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Portfolio",
  EMAIL: "faustine.fabre44@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Accueil",
  DESCRIPTION: "Mon portfolio où je partage mon parcours scolaire et mon expérience professionnelle.",
};

export const WORK: Metadata = {
  TITLE: "Expérience professionnelle",
  DESCRIPTION: "Mon expérience professionnelle.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projets",
  DESCRIPTION: "Mes projets.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/faufbr"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/faustine-fabre-960a48210/",
  }
];
