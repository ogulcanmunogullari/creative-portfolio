import { ProjectColor } from "@/lib/constants";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
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
    color: "blue",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion",
      "Lucide React", "MongoDB Atlas", "Mongoose", "Vercel", "GitHub", "Albion Online API"],
    link: "https://albion-comp-maker.vercel.app/",
    images:
      ["/images/albion-comp-maker-3.png", "/images/albion-comp-maker-2.png", "/images/albion-comp-maker.png", "/images/albion-comp-maker-4.png", "/images/albion-comp-maker-5.png"],
  },
  {
    id: "creative-portfolio",
    title: "Portfolio '25",
    category: "Personal",
    description:
      "Framer Motion ve modern geçiş efektleriyle güçlendirilmiş kişisel vitrin sitesi.",
    color: "purple",
    tech: ["Next.js", "Framer Motion", "Tailwind v4"],
    link: "#",
    images:
      ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"],
  }
];
