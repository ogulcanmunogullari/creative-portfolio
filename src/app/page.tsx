"use client";
import { motion, Variants, MotionConfig } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import Hero from "../components/sections/Hero";
import GlassCard from "../components/ui/GlassCard";
import Preloader from "../components/ui/Preloader";
import { projects } from "../data/projects";
import { ProjectColor, PROJECT_COLORS } from "../lib/constants";


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
            {projects.map((project, index) => {
              // Rengi güvenli şekilde alalım
              const colorKey = project.color as ProjectColor;
              const styles = PROJECT_COLORS[colorKey] || PROJECT_COLORS.blue;

              return (
                <motion.div
                  key={project.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="h-full"
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="block h-full group relative"
                  >
                    {/* 1. RENKLİ GLOW (ARKADA) */}
                    {/* Kartın arkasında, hover olunca beliren bulanık ışık */}
                    <motion.div
                      layoutId={`shadow-${project.id}`}
                      className={`absolute -inset-1 rounded-3xl bg-linear-to-r ${styles.glow} opacity-0 group-hover:opacity-100 blur-xs group-hover:blur-lg transition-opacity duration-500 -z-10`}
                    />

                    {/* 2. KARTIN KENDİSİ (ÖNDE) */}
                    {/* Arka planı HEP SİYAH (zinc-900). Asla renkli olmamalı. */}
                    <motion.div
                      layoutId={`card-${project.id}`}
                      className={`h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 p-6 backdrop-blur-xl transition-colors duration-300 ${styles.border}`}
                    >
                      <GlassCard
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        shortDescription={project.shortDescription}
                        color={colorKey}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
