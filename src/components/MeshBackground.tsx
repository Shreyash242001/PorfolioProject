import React from "react";

const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background opacity-0 dark:opacity-100 transition-opacity duration-1000">
      {/* Primary Deep Depth Glows */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, hsl(230 15% 15%), transparent)" }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, hsl(230 15% 12%), transparent)" }}
      />
      <div 
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-5 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(0 0% 100%), transparent)" }}
      />
      
      {/* Animated Subtle Movement - Very low opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(230 15% 15%) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(0 0% 100%) 0%, transparent 50%)
          `,
          filter: "blur(100px)",
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default MeshBackground;
