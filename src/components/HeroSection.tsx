import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Spring Boot Expert",
  "Microservices Architect",
  "React Developer",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? current.substring(0, displayText.length - 1) : current.substring(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neon-cyan font-mono text-sm mb-4 tracking-widest uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight dark:text-white">
            Hi, I'm{" "}
            <span className="text-gradient">Shreyas Sonawane</span>
          </h1>

          <div className="h-10 md:h-12 mb-6 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-neon-cyan dark:bg-white ml-1 animate-pulse-glow" />
            </span>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed dark:text-white/60">
            Building scalable backend systems and modern web applications. 
            Passionate about distributed systems, microservices architecture, and clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="./ResumeShreyasMar05.pdf"
              download="Shreyas_Sonawane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-semibold glass-card flex items-center gap-2 text-foreground transition-all dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="btn-secondary"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
