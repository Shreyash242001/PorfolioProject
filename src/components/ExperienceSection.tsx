import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Project Associate",
    company: "CDAC Chennai",
    period: "2023 – Present",
    points: [
      "Working on Indian Navy AIIMS system for the Government of India",
      "Built scalable backend APIs using Spring Boot & Microservices",
      "Implemented microservices architecture with high availability",
      "Ensured security compliance with VAPT standards",
      "Worked on distributed systems handling critical workloads",
    ],
  },
  {
    title: "Software Intern",
    company: "Oyite Private Limited",
    period: "2022 – 2023",
    points: [
      "Developed Spring Boot backend services",
      "Performed comprehensive API testing and unit testing",
      "Improved system reliability and code quality",
      "Collaborated with cross-functional teams on deliverables",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(265 90% 65%), hsl(185 100% 55%))" }} />

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                className={`relative mb-12 pl-16 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary neon-glow-purple md:-translate-x-2 z-10" />

                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-neon-cyan" />
                    <span className="text-xs font-mono text-neon-cyan">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((p, pi) => (
                      <li key={pi} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
