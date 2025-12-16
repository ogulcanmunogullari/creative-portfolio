import { ProjectColor } from "@/lib/constants";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  color: ProjectColor; // Kartın ve detay sayfasının ana rengi
  tech: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "neon-shop",
    title: "Neon 3D Shop",
    category: "E-Commerce",
    description:
      "R3F ve WebGL tabanlı, ürünlerin 360 derece incelenebildiği interaktif mağaza deneyimi.",
    color: "blue",
    tech: ["Next.js", "React Three Fiber", "Zustand"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics",
    category: "SaaS",
    description:
      "Yapay zeka verilerini analiz eden, real-time grafiklere sahip yönetim paneli.",
    color: "emerald",
    tech: ["React", "Python", "D3.js"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "art-gallery",
    title: "Digital Gallery",
    category: "Immersive",
    description:
      "Sanat eserlerinin sanal ortamda sergilendiği, gezilebilir 3D galeri.",
    color: "orange",
    tech: ["Three.js", "WebGL", "GSAP"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
];
