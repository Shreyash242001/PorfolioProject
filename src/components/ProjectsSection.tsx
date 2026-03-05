import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Microservices Backend System",
    description: "Scalable microservices architecture with service discovery, API gateway, and event-driven communication using Kafka.",
    tech: ["Spring Boot", "Kafka", "Docker", "PostgreSQL"],
  },
  {
    title: "Inspection Plan Management APIs",
    description: "RESTful API suite for managing inspection plans with role-based access control and audit logging.",
    tech: ["Java", "Spring Security", "REST API", "PostgreSQL"],
  },
  {
    title: "High Availability Architecture",
    description: "Designed and implemented HA backend with load balancing, circuit breakers, and failover mechanisms.",
    tech: ["Spring Boot", "Kubernetes", "Docker", "Redis"],
  },
  {
    title: "Scalable REST API Systems",
    description: "High-throughput REST API platform with caching, pagination, and optimized database queries.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(265 90% 65%), hsl(185 100% 55%))" }} />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
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

export default ProjectsSection;
