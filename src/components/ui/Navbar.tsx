// src/components/layout/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    // DÜZELTME: 'relative' kaldırıldı. 'fixed' zaten kapsayıcıdır.
    // 'overflow-hidden' ekledik ki glow efekti navbarın yuvarlak köşelerinden dışarı taşmasın.
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-6 py-3 flex items-center justify-between bg-zinc-900/50 border border-white/10 backdrop-blur-md rounded-full shadow-lg shadow-black/20">
      {/* 1. GLOW EFEKTİ (En arkada kalması için ilk sıraya koyduk) */}
      {/* absolute ile navbarın içine yaydık. */}
      <div className="absolute rounded-full top-0 left-0 w-full h-full bg-purple-500 -z-10 animate-glow" />

      {/* 2. LOGO */}
      {/* relative ve z-10 vererek glow'un önünde durmasını garantiledik */}
      <div className="relative z-10 text-white font-bold tracking-tighter text-xl cursor-pointer transition-transform hover:scale-105">
        <span className="text-purple-500">&lt;</span>
        OM
        <span className="text-purple-500"> /&gt;</span>
      </div>

      {/* 3. MENÜ */}
      <ul className="hidden md:flex gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {["Work", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* 4. BUTON */}
      <button className="relative z-10 px-6 py-2 rounded-full bg-purple-600 text-white text-sm font-medium transition-all hover:bg-purple-700 hover:scale-105 shadow-[0_0_15px_#9333ea80]">
        Let&apos;s Talk
      </button>
    </nav>
  );
};

export default Navbar;
