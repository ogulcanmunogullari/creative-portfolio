"use client"; // <--- 1. KRİTİK HAMLE: Animasyon için şart

import React, { useState, useEffect } from "react";
import { Mouse } from "lucide-react";
import { motion, Variants } from "framer-motion"; // <--- 2. Framer Motion kütüphanesini çağır

import { AnimationProps } from "../../types";
import NewScene from "@/components/threeD/NewScene";



// 3. Animasyon Ayarları (Variants)
// Karmaşık ayarları JSX'in içine gömmemek için burada tanımlıyoruz.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Çocuklar arasında 0.3 saniye bekle
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Başlangıç: Görünmez ve 30px aşağıda
  visible: {
    opacity: 1,
    y: 0, // Bitiş: Görünür ve yerine oturmuş
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = ({ startAnimation }: AnimationProps) => {
  // 1. Görünürlük Durumu (Başlangıçta true)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // 2. Scroll Dinleyici
  useEffect(() => {
    const handleWindowScroll = () => {
      // Eğer 50px'den fazla kaydırıldıysa GİZLE, yoksa GÖSTER
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    // Dinleyiciyi ekle
    window.addEventListener("scroll", handleWindowScroll);

    // Temizlik: Sayfadan çıkınca dinleyiciyi kaldır (Performans için şart)
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleScroll = () => {
    // "work" id'li elementi bul (Kartların olduğu bölüm)
    const workSection = document.getElementById("work");

    if (workSection) {
      // Oraya yumuşakça kaydır
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 overflow-hidden">
      {/* --- ARKA PLAN KATMANI BAŞLANGICI --- */}
      {/* 1. MOR IŞIK (GLOW) */}
      {/* absolute inset-0: Dört köşeye yapış */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        {/* Işığı merkeze aldık */}
        <div className="w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      {/* 2. 3D SAHNE (SCENE) */}
      {/* Bunu da tam ekran yapıyoruz */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NewScene startAnimation={startAnimation} />
      </div>

      {/* --- ARKA PLAN KATMANI BİTİŞİ --- */}
      <motion.div
        className="text-center space-y-8 max-w-4xl relative z-10"
        variants={containerVariants} // Tanımladığımız kuralları bağla
        initial="hidden" // Başlangıç durumu
        animate={startAnimation ? "visible" : "hidden"}
      >
        {/* Başlık */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-9xl"
        >
          Next Level{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 animate-pulse">
            Frontend
          </span>
        </motion.h1>

        {/* Alt Metin */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed md:text-2xl"
        >
          Creative Developer Specializing in Immersive Web Experiences.
        </motion.p>

        {/* Butonlar (Opsiyonel - İleride ekleriz ama yeri hazır olsun) */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center pt-4"
        >
          {/* Buraya 'Projelerimi Gör' butonu gelecek */}
        </motion.div>
      </motion.div>

      {/* 6. Scroll İkonu */}
      {/* Bu arkadaş grubun dışında, o yüzden ona ayrı animasyon veriyoruz */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: startAnimation && showScrollIndicator ? 1 : 0,
          y: startAnimation && showScrollIndicator ? 0 : 20, // Gizlenirken hafif aşağı kaysın
        }}
        transition={{ duration: 0.5 }}
        onClick={handleScroll} // <-- Tıklama özelliği
        // cursor-pointer ekledik ki tıklanabilir olduğu anlaşılsın
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 cursor-pointer hover:text-white transition-colors z-20 ${
          !showScrollIndicator ? "pointer-events-none" : ""
        }`}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="animate-bounce">
          <Mouse size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
