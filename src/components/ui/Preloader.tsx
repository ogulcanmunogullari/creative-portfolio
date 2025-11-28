"use client";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onFinish: () => void; // Bitiş fonksiyonu bekliyoruz
}

const Preloader = ({ onFinish }: PreloaderProps) => {
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Yükleme bitince 1.5 saniye bekle, bu sırada yüzde 100 görünsün
      const timer = setTimeout(() => {
        setIsFinished(true);

        setTimeout(() => {
          onFinish();
        }, 500);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          // Çıkış Animasyonu: Yukarı doğru kayarak ve solarak yok ol
          exit={{
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          // Arka Plan: Merkezde hafif mor bir ışık hüzmesi (Radial Gradient)
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-zinc-950 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-zinc-950"
        >
          {/* 1. LOGO: Hafifçe nefes alma (pulse) efekti */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            className="mb-6 text-4xl font-bold tracking-tighter text-white animate-pulse"
          >
            <span className="text-purple-500">&lt;</span>
            OM
            <span className="text-purple-500"> /&gt;</span>
          </motion.div>

          {/* 2. NEON PROGRESS BAR */}
          {/* Dış Çerçeve */}
          <div className="w-64 h-1.5 bg-zinc-800/50 rounded-full overflow-hidden relative backdrop-blur-sm">
            {/* Dolan İç Kısım */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-purple-500"
              // Neon Parlama Efekti (Shadow)
              style={{ boxShadow: "0 0 10px 2px rgba(168, 85, 247, 0.7)" }}
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
                transition: { duration: 0.1 }, // Yüzde artışı anlık olsun
              }}
            />
          </div>

          {/* 3. YÜZDE VE DURUM YAZISI */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="mt-4 flex items-center gap-3 font-mono text-sm"
          >
            <span className="text-zinc-500">Loading experience...</span>
            {/* Yüzdeyi 3 haneli (000%) formatta göster */}
            <span className="text-purple-400 font-bold">
              {Math.round(progress).toString().padStart(3, "0")}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
