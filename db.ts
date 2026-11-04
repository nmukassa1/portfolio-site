export type Project = {
  id: number;
  title: string;
  description: string;
  bio: string;
  url: string;
  tools: string[];
  image: { laptop: string; mobile: string };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Designspo",
    description: "A library for saved design references.",
    bio: "Designspo is a library to capture and store all your design inspirations. What started as a frustration of saving UI Design inspirations across various sources like Dribbble, Awwwards, Pinterest etc, I wanted one where I can easily store all of them in one central location. That is when I decided to create a chrome extension where you can take a screenshot of any website you like and store the image and URL on a visual dashboard. Making it easier to come back to your design inspirations.",
    url: "https://designspo-webpage.vercel.app",
    tools: [
      "Nextjs",
      "Chrome Extension API",
      "ExpressJs",
      "Supabase Database",
      "Supabase Auth",
    ],
    image: {
      laptop: "/designspo-laptop.png",
      mobile: "/designspo-mobile.png",
    },
  },
  {
    id: 2,
    title: "Stream",
    description: "A home screen for films and trailers.",
    tools: ["Nextjs", "TMDB API", "Neon Database", "Neon Auth"],
    bio: "As a fan of movies and always trying to find new things to watch, I wanted to create a project to help me better my skills and in the process help me discover new things to watch. Using The Movie Database Api, I was able to source fresh material and hook it up to a database so that I can then create a watchlist.",
    url: "https://find-new-movies.vercel.app/",
    image: {
      laptop: "/movie-laptop.png",
      mobile: "/movie-mobile.jpg",
    },
  },
  {
    id: 3,
    title: "Designspo",
    description: "A library for saved design references.",
    bio: "Designspo is a library to capture and store all your design inspirations. What started as a frustration of saving UI Design inspirations across various sources like Dribbble, Awwwards, Pinterest etc, I wanted one where I can easily store all of them in one central location. That is when I decided to create a chrome extension where you can take a screenshot of any website you like and store the image and URL on a visual dashboard. Making it easier to come back to your design inspirations.",
    url: "https://designspo-webpage.vercel.app",
    tools: [
      "Nextjs",
      "Chrome Extension API",
      "ExpressJs",
      "Supabase Database",
      "Supabase Auth",
    ],
    image: {
      laptop: "/designspo-laptop.png",
      mobile: "/designspo-mobile.png",
    },
  },
];
