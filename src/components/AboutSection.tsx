import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Server, label: "Backend Systems", desc: "Spring Boot & Microservices" },
    { icon: Code2, label: "2+ Years", desc: "Professional Experience" },
    { icon: Globe, label: "Gov Projects", desc: "Indian Navy AIIMS" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(265 90% 65%), hsl(185 100% 55%))" }} />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a <span className="text-foreground font-semibold">Project Associate at CDAC Chennai</span>, currently working on a critical Government of India / Indian Navy project. With over 2 years of experience, I specialize in building scalable backend systems using Spring Boot and Microservices architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My expertise spans across the full stack — from designing high-performance REST APIs and distributed systems to crafting responsive frontend interfaces with React.js. I'm passionate about writing clean, maintainable code and building systems that handle millions of requests reliably.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in environments where I can solve complex engineering challenges, implement security best practices, and architect solutions that make a real-world impact.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="glass-card p-5 flex items-center gap-4 hover-lift cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
                    <h.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{h.label}</h3>
                    <p className="text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
