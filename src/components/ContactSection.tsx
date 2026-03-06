import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// ──────────────────────────────────────────────────────────
// 🔑 Replace these with your actual EmailJS credentials
//    1. Go to https://www.emailjs.com → Sign Up (free)
//    2. Add an Email Service (Gmail) → copy the Service ID
//    3. Create an Email Template with variables:
//       {{from_name}}, {{from_email}}, {{message}}
//    4. Go to Account → copy your Public Key
// ──────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_08kw6ps";
const EMAILJS_TEMPLATE_ID = "template_6synalr";
const EMAILJS_PUBLIC_KEY = "I8khWL736h1TtkZI_";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const contactLinks = [
    { icon: Mail, label: "shreyashsonu2001@gmail.com", href: "mailto:shreyashsonu2001@gmail.com" },
    { icon: Phone, label: "+91 7447534278", href: "tel:+917447534278" },
    { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/shreyash-sonawane242001" },
    { icon: Github, label: "GitHub Profile", href: "https://github.com/Shreyash242001" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! I'll get back to you soon. 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSending(false);
    }
  };

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
              onSubmit={handleSubmit}
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    disabled={isSending}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              ))}
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSending}
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                whileHover={!isSending ? { scale: 1.02 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 neon-glow-purple disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, hsl(265 90% 65%), hsl(220 100% 60%))" }}
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
