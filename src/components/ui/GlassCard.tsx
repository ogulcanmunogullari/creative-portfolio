import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const GlassCard = ({ title, description, icon: Icon }: GlassCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl transition-all group-hover:bg-purple-500/40"></div>
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-purple-400 ring-1 ring-white/20 transition-colors group-hover:bg-purple-500 group-hover:text-white">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
