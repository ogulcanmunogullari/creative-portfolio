"use client";
import { motion, Variants, MotionConfig } from "framer-motion";
import Hero from "@/components/sections/Hero";
import GlassCard from "@/components/ui/GlassCard";
import { Rocket, Code2, Palette, BrainCircuit } from "lucide-react";
import Preloader from "@/components/ui/Preloader";
import { useState } from "react";

// Kart Animasyon Ayarları
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Sırayla gelme büyüsü
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.2 },
  },
};

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
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <MotionConfig reducedMotion="never">
      <main className="bg-zinc-950 text-white selection:bg-purple-500/30">
        <Preloader onFinish={() => setIsLoaded(true)} />

        {/* 1. Bölüm: Hero (Tam Ekran) */}
        <Hero startAnimation={isLoaded} />

        {/* 2. Bölüm: Kartlar */}
        {/* EKSİK OLAN KISIM BUYDU: Container ve Padding Wrapper */}
        <section
          id="work"
          className="container mx-auto px-4 py-24 relative z-10"
        >
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
                className="h-full"
              >
                <GlassCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
