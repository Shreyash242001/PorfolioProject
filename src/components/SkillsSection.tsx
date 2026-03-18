import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Backend",
    color: "hsl(265 90% 65%)",
    gradient: "linear-gradient(90deg, #a855f7, #ec4899)",
    glow: "rgba(168, 85, 247, 0.5)",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 92 },
      { name: "Microservices", level: 88 },
      { name: "Spring Security", level: 85 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "Frontend",
    color: "hsl(185 100% 55%)",
    gradient: "linear-gradient(90deg, #06b6d4, #22d3ee)",
    glow: "rgba(6, 182, 212, 0.5)",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "hsl(220 100% 60%)",
    gradient: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    glow: "rgba(59, 130, 246, 0.5)",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "Git", level: 90 },
      { name: "Kafka", level: 78 },
      { name: "PostgreSQL", level: 85 },
      { name: "JIRA", level: 80 },
    ],
  },
];

// Dark mode (obsidian) bar styles — white/gray
const darkGradient = "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))";
const darkGlow = "rgba(255, 255, 255, 0.15)";

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.2, duration: 0.5 }}
                className="glass-card p-6 hover-lift dark:bg-white/5 dark:border-white/10"
              >
                <h3
                  className="text-lg font-bold mb-6 text-center"
                  style={{ color: isDark ? "rgba(255,255,255,0.9)" : cat.color }}
                >
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground dark:text-white/80">{skill.name}</span>
                        <span className="text-xs text-muted-foreground dark:text-white/80">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-muted dark:bg-white/5 rounded-full overflow-hidden border border-transparent dark:border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: ci * 0.2 + si * 0.1 + 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background: isDark ? darkGradient : cat.gradient,
                            boxShadow: isDark
                              ? `0 0 10px ${darkGlow}, 0 0 20px ${darkGlow}`
                              : `0 0 10px ${cat.glow}, 0 0 20px ${cat.glow.replace('0.5', '0.2')}`,
                          }}
                        >
                          {inView && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: ci * 0.2 + si * 0.1 + 1.5 }}
                              className="absolute inset-0"
                              style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 2s infinite linear',
                              }}
                            />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

