import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "PG Diploma in Advanced Computing",
    school: "CDAC",
    score: "75%",
    year: "2023",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Arvind Gavali College of Engineering",
    score: "CGPA 8.06",
    year: "2022",
  },
];

const certifications = [
  "Core Java Certification",
  "Spring Boot Expert Course",
  "Linux Training Certification",
  "Foundational C# – Microsoft",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(265 90% 65%), hsl(185 100% 55%))" }} />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-neon-cyan" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="glass-card p-5 hover-lift"
                  >
                    <p className="text-xs font-mono text-neon-cyan mb-1">{edu.year}</p>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-primary font-semibold mt-1">{edu.score}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-neon-cyan" /> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="glass-card p-4 hover-lift flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
