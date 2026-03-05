import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactLinks = [
    { icon: Mail, label: "shreyashsonu2001@gmail.com", href: "mailto:shreyashsonu2001@gmail.com" },
    { icon: Phone, label: "+91 7447534278", href: "tel:+917447534278" },
    { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/shreyash-sonawane242001" },
    { icon: Github, label: "GitHub Profile", href: "https://github.com/Shreyash242001" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(265 90% 65%), hsl(185 100% 55%))" }} />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a tech conversation. Feel free to reach out!
              </p>
              <div className="space-y-4">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="glass-card p-4 flex items-center gap-4 hover-lift group block"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-sm text-foreground">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card p-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              ))}
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 neon-glow-purple"
                style={{ background: "linear-gradient(135deg, hsl(265 90% 65%), hsl(220 100% 60%))" }}
              >
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
