import GlassCard from "@/components/ui/GlassCard";
import { Rocket, Code2, Palette, BrainCircuit } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Modern Stack",
    description:
      "Next.js 16, React Server Components ve TypeScript ile kurşun geçirmez mimari.",
    icon: Rocket,
  },
  {
    id: 2,
    title: "Creative UI",
    description:
      "Tailwind v4 ile sınırları zorlayan, animasyonlu ve etkileşimli arayüzler.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Clean Code",
    description:
      "ESLint ve Prettier standartlarında, okunabilir ve sürdürülebilir kod yapısı.",
    icon: Code2,
  },
  {
    id: 4,
    title: "3D & Motion",
    description:
      "Three.js ve Framer Motion ile web deneyimini bir üst boyuta taşıma hedefi.",
    icon: BrainCircuit,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-20 text-white selection:bg-purple-500/30">
      {/* Başlık Alanı */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl">
          Next Level{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Frontend
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          1.5 Yıllık Tecrübe, Modern Teknolojilerle Yeniden Doğuyor.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <GlassCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </main>
  );
}
