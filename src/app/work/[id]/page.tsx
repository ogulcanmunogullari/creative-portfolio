"use client";
import React, { Suspense, useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { PROJECT_COLORS, ProjectColor } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Mouse } from "lucide-react";
import Link from "next/link";

// 3D Importlar
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ImageGallery from "@/components/3d/ImageGallery_TEMP";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [focusedImageIndex, setFocusedImageIndex] = useState<number | null>(
    null
  );

  if (!project)
    return <div className="p-20 text-white text-center">Project not found</div>;

  const colorKey = project.color as ProjectColor;
  const styles = PROJECT_COLORS[colorKey] || PROJECT_COLORS.blue;

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30 pb-20 overflow-x-hidden">
      {/* Yüksekliği artırdık (80vh) ki laptop rahat görünsün */}
      <div className="relative h-full w-full flex flex-col items-center justify-start pt-24 overflow-hidden">
        {/* ARKA PLAN GLOW */}
        <motion.div
          layoutId={`shadow-${project.id}`}
          className={`absolute inset-0 bg-linear-to-br ${styles.glow} opacity-20 blur-[100px] pointer-events-none`}
        />

        {/* Geri Dön Butonu */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 left-8 z-50"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Back to Works</span>
          </Link>
        </motion.div>

        {/* --- 3D SAHNE (CANVAS) --- */}
        <div className="w-full h-[500px] md:h-[650px] z-10 cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
              {/* Laptop'a projeye özel görseli gönderiyoruz */}
              <ImageGallery
                images={project.images || []}
                focusedImageIndex={focusedImageIndex} // Odaklanan görselin index'ini prop olarak gönderiyoruz
                setFocusedImageIndex={setFocusedImageIndex}
              />
              <Environment preset="city" />
              {focusedImageIndex !== null && (
                <OrbitControls
                  makeDefault
                  enableZoom={true}
                  enableRotate={false} // Dönmeyi engelle
                  enablePan={true} // Kaydırmayı engelle
                  minDistance={3} // Çok fazla yaklaşmayı engelle
                  maxDistance={5} // Çok uzaklaşmayı engelle
                />
              )}
            </Suspense>
          </Canvas>

          <AnimatePresence>
            {focusedImageIndex === null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center z-10 -mt-[190px] pointer-events-none relative"
              >
                <motion.span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide backdrop-blur-md border border-white/5 ${styles.badge}`}
                >
                  {project.category}
                </motion.span>

                <motion.h1
                  layoutId={`title-${project.id}`}
                  className="text-5xl md:text-8xl font-bold tracking-tighter mb-2 pb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 drop-shadow-2xl"
                >
                  {project.title}
                </motion.h1>

                <motion.p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
                  Click to View
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {focusedImageIndex !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                // Arka plana koyuluk ve bulanıklık ekledik:
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white/80 z-20 shadow-2xl"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                  Scroll to Zoom
                </span>
                <div className="animate-bounce mt-1">
                  <Mouse size={18} className="text-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Başlık ve Kategori (Laptop'ın altında) */}
      </div>

      {/* İÇERİK KISMI (Aynı kalıyor) */}
      <div className="container mx-auto px-4 relative z-10 max-w-5xl mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert prose-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Overview
              </h3>
              <div
                className="prose prose-invert max-w-none" // Opsiyonel: Tailwind Typography plugin varsa güzel durur, yoksa silinebilir.
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              {/* Burası ileride daha detaylı doldurulabilir */}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-full text-xs border bg-zinc-900/50 ${styles.text} border-white/10`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              className={`group w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] bg-white text-black hover:bg-zinc-200`}
            >
              <ExternalLink size={20} />
              <span>Live Project</span>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
