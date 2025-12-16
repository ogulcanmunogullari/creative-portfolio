import { ProjectColor } from "@/lib/constants";

export interface AnimationProps {
  startAnimation: boolean;
}

export interface GlassCardProps {
  title: string;
  category: string;
  description: string;
  color: ProjectColor; // Renk anahtarı
}
