
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className, hoverEffect = true, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-md border border-slate-200/50 dark:border-slate-700/30 p-6",
        hoverEffect && "transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
