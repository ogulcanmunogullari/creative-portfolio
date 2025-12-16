// src/lib/constants.ts

// Her proje rengi için özel stil tanımları
export const PROJECT_COLORS = {
  blue: {
    border: "group-hover:border-blue-500/50",
    glow: "from-blue-600/20 to-cyan-600/20",
    badge: "bg-blue-500/10 text-blue-300",
    text: "group-hover:text-blue-400",
  },
  purple: {
    border: "group-hover:border-purple-500/50",
    glow: "from-purple-600/20 to-pink-600/20",
    badge: "bg-purple-500/10 text-purple-300",
    text: "group-hover:text-purple-400",
  },
  emerald: {
    border: "group-hover:border-emerald-500/50",
    glow: "from-emerald-600/20 to-green-600/20",
    badge: "bg-emerald-500/10 text-emerald-300",
    text: "group-hover:text-emerald-400",
  },
  orange: {
    border: "group-hover:border-orange-500/50",
    glow: "from-orange-600/20 to-red-600/20",
    badge: "bg-orange-500/10 text-orange-300",
    text: "group-hover:text-orange-400",
  },
};

// TypeScript için tip tanımı
export type ProjectColor = keyof typeof PROJECT_COLORS;
