import { PROJECT_COLORS } from "../../lib/constants";
import { GlassCardProps } from "../../types";



const GlassCard = ({
  title,
  category,
  shortDescription,
  color,
}: GlassCardProps) => {
  // Renge göre stilleri çekiyoruz
  const styles = PROJECT_COLORS[color] || PROJECT_COLORS.blue;

  return (
    <div className="flex h-full flex-col justify-between relative z-10 ">
      <div>
        {/* Kategori Badge */}
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md transition-colors ${styles.badge}`}
        >
          {category}
        </span>

        {/* Başlık */}
        <h3
          className={`mb-2 text-xl font-bold text-white transition-colors duration-300 ${styles.text}`}
        >
          {title}
        </h3>

        {/* Açıklama */}
        <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {shortDescription}
        </p>
      </div>

      {/* Alt Çizgi (Opsiyonel süs) */}
      <div
        className={`mt-6 h-0.5 w-8 rounded-full bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-white/50`}
      />
    </div>
  );
};

export default GlassCard;
