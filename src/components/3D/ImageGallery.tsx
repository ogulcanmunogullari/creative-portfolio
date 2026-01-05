// src/components/3d/ImageGallery3D.tsx
"use client";

import React, { useRef } from "react";
import { useTexture, Plane } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ImageGallery3DProps {
    images: string[];
    focusedImageIndex: number | null; // Yeni prop
    setFocusedImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function ImageGallery({ images, focusedImageIndex, setFocusedImageIndex }: ImageGallery3DProps) {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null); // Tüm görselleri içeren grup için ref

  // Birden fazla görseli yüklüyoruz
  const textures = useTexture(images);

  textures.forEach((texture) => {
    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true; // Texture güncellendiğinde Three.js'e bildir
  });

  // Görsel başına genişlik ve boşluk ayarlamaları
  const imageWidth = 3; // Her bir görselin 3D alandaki genişliği
  const imageGap = 0; // Görseller arasındaki boşluk
  const totalWidth = images.length * (imageWidth + imageGap); // Yaklaşık toplam genişlik

  // Kamera hareketine göre görselleri kaydırmak için useFrame
  useFrame((state) => {
    if (focusedImageIndex === null) {
      // 1. Kamerayı ve bakış açısını yumuşakça merkeze çek
      // .lerp(hedef, hız) -> 0.1 hızını 0.05 yaparak daha yumuşak veya 0.2 yaparak daha hızlı yapabilirsin
      state.camera.position.lerp(new THREE.Vector3(0, 0, 4.5), 0.1);
      
      // OrbitControls'un bozduğu "lookAt" (bakış noktası) değerini de resetle
      const targetLookAt = new THREE.Vector3(0, 0, 0);
      state.camera.lookAt(targetLookAt);
  
      // 2. Galeri grubunu fareye göre kaydırma mantığı (mevcut kodun)
      if (groupRef.current) {
          const targetX = -state.mouse.x * (totalWidth / 2) * 0.2;
          groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
          const targetRotationY = -state.mouse.x * 0.1;
          groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      }
    } else {
      // 3. Bir resim seçiliyse grubu merkeze sabitle
      if (groupRef.current) {
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.05);
      }
    }
  });


  return (
    <group ref={groupRef}>
              <Plane 
        args={[100, 100]} // Sahneyi kaplayacak kadar büyük
        position={[0, 0, -5]} // Resimlerin çok arkasında
        visible={false} // Görünmez yap
        onClick={() => setFocusedImageIndex(null)} // Tıklanınca odağı kaldır
      />
      {textures.map((texture, index) => {
        const aspectRatio = (texture.image as HTMLImageElement).width / (texture.image as HTMLImageElement).height;
        const imageHeight = imageWidth / aspectRatio;

        const isFocused = index === focusedImageIndex;

        // Odaklanmış görsel yoksa veya odaklanmış görsel buysa görünür yap
        // Aksi halde görünmez yap (sahneden kaldır)
        if (focusedImageIndex !== null && !isFocused) {
          return null; // Odaklanmamış görselleri render etmiyoruz
        }

        // Konumlandırma ve ölçeklendirme
        let currentXPosition = isFocused ? 0 : (index * (imageWidth + imageGap) - totalWidth / 2 + imageWidth / 2);
        let currentZPosition = isFocused ? 1 : Math.abs(index - images.length / 2 + 0.5) * -1;
        let currentRotationY = isFocused ? 0 : (index - images.length / 2 + 0.5) * 0.1;
        let currentScale = isFocused ? 1.5 : 1; // Odaklanınca daha çok büyütelim

        return (
          <Plane
            key={index}
            args={[imageWidth, imageHeight]}
            position={[currentXPosition, 0, currentZPosition]}
            rotation={[0, currentRotationY, 0]}
            scale={currentScale}
            onClick={(event) => {
                event.stopPropagation(); // Tıklamanın arkaya (Canvas'a) geçmesini engelle
                
                // Eğer bu resim zaten odaklıysa kapat, değilse odakla
                if (isFocused) {
                  setFocusedImageIndex(null);
                } else {
                  setFocusedImageIndex(index);
                }
              }}
          >
            <meshBasicMaterial map={texture} toneMapped={false} />
          </Plane>
        );
      })}
    </group>
  );
}