import ageCalc from "../images/agecalculator.webp";
import audiophile from "../images/audiophile1.webp";
import coffeeRoasters from "../images/coffeeroasters.webp";
import gameHub from "../images/gamehub.webp";
import kbBoard from "../images/kbboard.webp";
import pep from "../images/pep.webp";
import shippudenHub from "../images/shippudenhub.webp";
import xpenseTracker from "../images/xpensetracker.webp";
import designo from "../images/designo.png";
import watchers from "../images/watchersCover.png";

export type Project = {
  title: string;
  description: string;
  techUsed: string[];
  image: string;
  githubPath: string;
  liveSitePath: string;
};

export const projectData: Project[] = [
  {
    title: "Kanban",
    description:
      "Featuring a user-friendly design, this full-stack kanban board utilizes an array of powerful techUsednologies such as Prisma, Next Auth, React Query, Zod, Zustand, and React hook form.",
    techUsed: [
      "Next Js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Next Auth",
      "React Hook Form",
      "Zod",
    ],
    image: kbBoard,
    githubPath: "https://github.com/im7ven/KB-Board/tree/main",
    liveSitePath: "https://kb-board-eight.vercel.app/",
  },
  {
    title: "Watchers",
    description:
      "A mobile-friendly movie app that allows users to explore, review, and save their favorite films and series, featuring detailed information on ratings casts, and more.",
    techUsed: [
      "Next Js",
      "TypeScript",
      "React Query",
      "MongoDb",
      "Next Auth",
      "RadixUI",
      "Zod",
    ],
    image: watchers,
    githubPath: "https://github.com/im7ven/watchers",
    liveSitePath: "https://watchers-app.vercel.app/",
  },
  {
    title: "AudioPhile",
    description:
      "Completed this 'Guru' ranked challenge from Frontend Mentor. It showcases an e-commerce platform. Managing a pixel perfect design, while leveraging local storage and the context API to create a seamless cart management system.",
    techUsed: ["React", "TypeScript", "Styled-Components", "Figma"],
    image: audiophile,
    githubPath: "https://github.com/im7ven/Audiophile-e-commerce",
    liveSitePath: "https://audiophile-e-commerce-rho.vercel.app/",
  },
  {
    title: "PEP",
    description:
      "This project involved redesigning and rebuilding the Western University's PEP team website. Collaborating with the team, I created a user-friendly and appealing design, ensuring easy access to PEP’s learning modules for students.",
    techUsed: ["Html", "Css", "JavaScript", "Adobe Illustrator"],
    image: pep,
    githubPath: "https://github.com/im7ven/preceptor-education-program",
    liveSitePath: "https://preceptor.ca/",
  },
  {
    title: "GameHub",
    description:
      "This project is a video game integration app using the RAWG API, allowing users to explore thousands of games and their details. It features dynamic game searches, detailed information pages, and a user-friendly interface.",
    techUsed: ["React", "TypeScript", "Chakra UI", "Zustand", "React Query"],
    image: gameHub,
    githubPath: "https://github.com/im7ven/Game-Hub",
    liveSitePath: "https://game-hub-im7ven.vercel.app/",
  },

  {
    title: "ShippudenHub",
    description:
      "This project involved creating a Naruto Shippuden character API using MongoDB and Next.js. The app showcases character details and provides a seamless browsing experience for fans.",
    techUsed: ["Next Js", "TypeScript", "Mongo Db", "Tailwind Css"],
    image: shippudenHub,
    githubPath: "https://github.com/im7ven/shippudenHub",
    liveSitePath: "https://shippuden-hub.vercel.app/",
  },
  {
    title: "Designo",
    description:
      "Another 'Guru' ranked challenge completed from Frontend Mentor. A responsive multipage web application where I leveraged SSR in Next Js to enhance performance.",
    techUsed: [
      "Next Js",
      "TypeScript",
      "Tailwind Css",
      "Google Maps API",
      "Figma",
    ],
    image: designo,
    githubPath: "https://github.com/im7ven/designo",
    liveSitePath: "https://designo-five-amber.vercel.app/",
  },
  {
    title: "XpenseTracker",
    description:
      "Built an expense tracker app with Firebase, empowering users to manage their expenses effortlessly. Users can log expenses, visualize data through Chart.js, and create personalized budget plans for better financial control.",
    techUsed: ["React", "TypeScript", "Firebase", "Chakra UI", "Chart Js"],
    image: xpenseTracker,
    githubPath: "https://github.com/im7ven/Expense-Tracker",
    liveSitePath: "https://expense-tracker-im7ven.vercel.app/",
  },
  {
    title: "Coffeeroasters",
    description:
      "This project is a challenge from Frontend Mentor, featuring a coffee subscription website. Leveraging the Context API, I built an intuitive user experience for managing subscriptions, ensuring a smooth interface for coffee enthusiasts.",
    techUsed: ["React", "TypeScript", "Styled-components", "Figma"],
    image: coffeeRoasters,
    githubPath: "https://github.com/im7ven/coffeeroasters-subscription",
    liveSitePath: "https://coffeeroasters-black.vercel.app/",
  },
  {
    title: "AgeCalculator",
    description:
      "This project is a Frontend Mentor challenge, showcasing an age calculator app. Utilizing user input, I developed a responsive interface that computes and presents ages in years, months, and days.",
    techUsed: ["Html", "Css", "JavaScript"],
    image: ageCalc,
    githubPath: "https://github.com/im7ven/Age-Calculatorm",
    liveSitePath: "https://age-calculator-justinalexander.netlify.app/",
  },
];
