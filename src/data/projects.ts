import { ProjectColor } from "../lib/constants";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  color: ProjectColor; // Kartın ve detay sayfasının ana rengi
  tech: string[];
  link: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "albion-build-maker",
    title: "Albion Build Maker",
    category: "Community Tool for Albion Online",
    description:
      "<div class='space-y-6 text-slate-300'><p class='leading-relaxed'>This is a <strong class='text-white'>squad composition builder and sharing tool</strong> designed specifically for the Albion Online community. My goal was to create a tool that is faster and more user-friendly than existing alternatives.</p><div class='bg-slate-900/50 p-6 rounded-xl border border-slate-800'><h4 class='text-lg font-bold text-white mb-4 flex items-center gap-2'>Key Features & Advantages</h4><ul class='space-y-3'><li class='flex gap-3'><span class='text-yellow-500'>▹</span><span><strong class='text-white'>Complete Team View:</strong> Unlike other tools, this project allows you to see the entire team at a glance, including <em class='text-slate-400'>'swap builds'</em> (secondary equipment).</span></li><li class='flex gap-3'><span class='text-yellow-500'>▹</span><span><strong class='text-white'>Smart Filtering & Visualization:</strong> Irrelevant items are filtered out to keep the interface clean. It also provides accurate visual representations based on the selected Tier and Enchantment levels.</span></li><li class='flex gap-3'><span class='text-yellow-500'>▹</span><span><strong class='text-white'>Fast & Accessible:</strong> Designed with a 'user-first' approach, the tool prioritizes speed. Currently, there is <strong class='text-white'>no sign-up required</strong>—users can immediately click, create, and share.</span></li><li class='flex gap-3'><span class='text-yellow-500'>▹</span><span><strong class='text-white'>Discord Template:</strong> Once your build is ready, you can generate a pre-formatted template to share your event details and composition directly on Discord.</span></li></ul></div><div><h4 class='text-md font-bold text-white mb-2 uppercase tracking-widest text-xs'>Technical Note</h4><p class='text-sm text-slate-400 italic bg-black/20 p-4 rounded-lg border-l-4 border-yellow-600'>Since this project is currently hosted on free servers, you might experience a slight <strong>'cold-start' delay</strong> when opening it for the first time. As the user base grows, I plan to migrate to a better infrastructure and introduce a membership system to prevent data clutter.</p></div></div>",
    shortDescription:
      "This is a squad composition builder and sharing tool designed specifically for the Albion Online community.",
    color: "blue",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Lucide React",
      "MongoDB Atlas",
      "Mongoose",
      "Vercel",
      "GitHub",
      "Albion Online API",
    ],
    link: "https://albion-comp-maker.vercel.app/",
    images: [
      "/images/albion-comp-maker-3.png",
      "/images/albion-comp-maker-2.png",
      "/images/albion-comp-maker.png",
      "/images/albion-comp-maker-4.png",
      "/images/albion-comp-maker-5.png",
    ],
  },
  {
    id: "izledim-movie-archive",
    title: "izledim",
    category: "Graduation Project & Personal Movie Archive",
    description:
      "<div class='space-y-6 text-slate-300'><p class='leading-relaxed'>'Izledim' is my <strong class='text-white'>graduation project</strong>, designed as a comprehensive digital library for movie enthusiasts. It allows users to build a personal archive of the films they have watched, complete with visual posters and details. Unlike standard templates, the <strong class='text-white'>UI/UX design and logo</strong> were entirely crafted by me using Adobe Illustrator to ensure a unique brand identity.</p><div class='bg-slate-900/50 p-6 rounded-xl border border-slate-800'><h4 class='text-lg font-bold text-white mb-4 flex items-center gap-2'>Key Features & Technical Highlights</h4><ul class='space-y-3'><li class='flex gap-3'><span class='text-rose-500'>▹</span><span><strong class='text-white'>Custom Design System:</strong> Every visual element, from the logo to the interface layout, was designed from scratch using <em class='text-slate-400'>Adobe Illustrator</em>, giving the project a distinct look.</span></li><li class='flex gap-3'><span class='text-rose-500'>▹</span><span><strong class='text-white'>Smart Integration & Discovery:</strong> The app leverages the <strong class='text-white'>TMDB API</strong> to fetch extensive movie data. It features a smart recommendation engine that analyzes a selected movie and suggests similar titles based on categories.</span></li><li class='flex gap-3'><span class='text-rose-500'>▹</span><span><strong class='text-white'>Authentication & Backend:</strong> A secure Email/Password sign-up system is implemented using <strong class='text-white'>Firebase Auth</strong>, allowing users to have their own private collection.</span></li><li class='flex gap-3'><span class='text-rose-500'>▹</span><span><strong class='text-white'>State Management:</strong> Built with pure React and <strong class='text-white'>React Context API</strong> to manage global state efficiently without third-party libraries.</span></li></ul></div><div><h4 class='text-md font-bold text-white mb-2 uppercase tracking-widest text-xs'>Project Goal</h4><p class='text-sm text-slate-400 italic bg-black/20 p-4 rounded-lg border-l-4 border-rose-600'>As my capstone project, the primary goal was to demonstrate a complete development cycle: from the initial vector design in Illustrator to a fully functional React application integrated with a real-time database and external APIs.</p></div></div>",
    shortDescription:
      "A full-stack movie library app for users to create personalized watchlists and explore similar movies based on dynamic categorization.",
    color: "emerald",
    tech: [
      "React",
      "Context API",
      "Firebase Auth",
      "Firebase Firestore",
      "TMDB API",
      "Adobe Illustrator",
      "Netlify",
      "CSS",
    ],
    link: "https://izledim.netlify.app",
    images: [
      "/images/izledim-1.png",
      "/images/izledim-2.png",
      "/images/izledim-3.png",
      "/images/izledim-4.png",
    ],
  },
  {
    id: "creative-portfolio",
    title: "Portfolio '26",
    category: "Personal",
    description:
      "This project is currently live and under active development, continuously expanding with the new projects and ideas I am currently developing.",
    shortDescription:
      "This project is currently live and under active development, continuously expanding with the new projects and ideas I am currently developing.",
    color: "purple",
    tech: ["Next.js", "Framer Motion", "Tailwind v4"],
    link: "#",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];
