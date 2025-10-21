import { useEffect, useState } from "react";
import LiquidGlass from "liquid-glass-react";

type GoToTopProps = {
    containerRef: React.RefObject<HTMLDivElement | null> | null;
};

export default function GoToTop({ containerRef = null }: GoToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <LiquidGlass
      mouseContainer={containerRef}
      displacementScale={15}
      blurAmount={0.0}
      saturation={120}
      aberrationIntensity={0.2}
      elasticity={0.5}
      cornerRadius={100}
      style={{
        position: "fixed",
        bottom: "100px",
        right: "40px",
      }}
      
    >
      <button
        onClick={scrollToTop}
        className="w-full h-full rounded-full text-white mix-blend-difference font-bold text-lg"
        style={{
            cursor: "pointer",
        }}
      >
        ↑
      </button>
    </LiquidGlass>
  );
}
