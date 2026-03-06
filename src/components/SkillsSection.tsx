import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    color: "hsl(265 90% 65%)",
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

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
                <h3 className="text-lg font-bold mb-6 text-center dark:text-white" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground dark:text-white/80">{skill.name}</span>
                        <span className="text-xs text-muted-foreground dark:text-white/40">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: ci * 0.2 + si * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full dark:bg-white/60"
                          style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                        />
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
