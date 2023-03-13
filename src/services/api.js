import axios from "axios";

export const getRepos = async () => {
  return await axios.get(
    "https://api.github.com/users/bekirbali/repos?per_page=100&sort=created"
  );
};

export const featuredRepos = [
  {
    name: "React-VALORANT-Wiki",
    description:
      "VALORANT Wiki is a project that aims to provide a comprehensive and detailed information about VALORANT.",
    repo_url: "https://github.com/bekirbali/VALORANT-Wiki",
    site: "https://wiki-valorant.netlify.app/",
    technologies: ["JavaScript", "React", "SCSS", "HTML"],
    gif: "./gifs/VALORANT.gif",
  },
  {
    name: "React-Task-Tracker",
    description: "A simple task tracker app.",
    repo_url: "https://github.com/bekirbali/React-Task-Tracker",

    technologies: ["TypeScript", "React", "Tailwindcss", "SCSS", "HTML"],
    gif: "./gifs/taskTracker.gif",
  },
  {
    name: "React-Recipe-App",
    description:
      "A simple recipe app that uses the Edamam API.This project offers you a vast collection of delicious recipes. With its user-friendly interface and dynamic search functionality, finding your next favorite dish has never been easier.",
    repo_url: "https://github.com/bekirbali/React-Recipe-App",
    site: "https://taste-avenue-recipe.vercel.app/",
    technologies: ["JavaScript", "React", "SCSS", "HTML"],
    gif: "./gifs/recipe.gif",
  },
  {
    name: "React-GitHub-Users",
    description: "A simple GitHub user search app that uses the GitHub API.",
    repo_url: "https://github.com/bekirbali/React-GitHub-Users",
    site: "https://react-git-hub-users.vercel.app/",
    technologies: ["JavaScript", "React", "SCSS", "Tailwindcss", "HTML"],
    gif: "./gifs/GitHub-Users.gif",
  },
  {
    name: "React-Weather-App",
    description: "A simple weather app that uses the OpenWeather API.",
    repo_url: "https://github.com/bekirbali/React-Weather-App",
    site: "https://bekirbali.github.io/React-Weather-App/",
    technologies: ["JavaScript", "React", "Material UI", "SCSS", "HTML"],
    gif: "./gifs/weatherapp.gif",
  },

  {
    name: "React-Crypto-Coins",
    description: "A simple crypto coins app that uses the CoinGecko API.",
    repo_url: "https://github.com/bekirbali/React-Crypto-Coins",
    site: "https://react-crypto-coins.vercel.app/",
    technologies: ["JavaScript", "React", "Bootstrap", "SCSS", "HTML"],
    gif: "./gifs/coinapp.gif",
  },
];
