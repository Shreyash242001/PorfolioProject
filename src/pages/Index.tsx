import { useState, useEffect } from "react";
import MeshBackground from "@/components/MeshBackground";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "neon");

  useEffect(() => {
    if (theme === "obsidian") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className={`relative min-h-screen grid-bg ${theme === 'obsidian' ? 'cursor-none' : ''}`}>
      {theme === "obsidian" && <CustomCursor />}
      <MeshBackground />
      <ParticleBackground theme={theme} />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <BackToTop />

      {/* Footer */}
      <footer className="py-8 border-t border-border dark:border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground dark:text-white/40">
            © 2024 Shreyas Sonawane. Built with passion and clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
