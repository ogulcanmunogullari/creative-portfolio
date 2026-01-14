"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { AnimationProps } from "../../types";


const BlackOrb = ({ startAnimation }: AnimationProps) => {
  // 1. Referans alıyoruz ki her karede (frame) döndürebilelim
  const meshRef = useRef<THREE.Mesh>(null);

  // 2. Animasyon Döngüsü (Her saniye 60 kare çalışır)
  useFrame((state) => {
    if (meshRef.current) {
      // Yavaşça kendi etrafında dönsün
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      const targetScale = startAnimation ? 2 : 0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.05
      );
    }
  });

  return (
    // Sphere: Hazır Küre Geometrisi (args=[yarıçap, genişlik_segmenti, yükseklik_segmenti])
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={0}>
      {/* SİHİR BURADA: MeshDistortMaterial */}
      {/* Sıvı gibi hareket eden, bozulmuş materyal */}
      <MeshDistortMaterial
        color="#1a0b2e" // Çok koyu mor/siyah
        attach="material"
        distort={0.5} // Bozulma miktarı (0-1 arası)
        speed={2} // Dalgalanma hızı
        roughness={0} // Pürüzlülük (0 = ayna gibi, 1 = mat)
        metalness={1} // Metalik görünüm
      />
    </Sphere>
  );
};

export default BlackOrb;
