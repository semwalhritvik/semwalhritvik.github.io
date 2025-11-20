import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-primary">Something Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Currently seeking Summer 2026 Data Science internships and open to full-time
            opportunities starting May 2027
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, collaborations, or
                just having a conversation about data science and machine learning.
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Available for Summer 2026
              </span>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:hritviksemwal@gmail.com"
                className="flex items-center gap-3 p-4 bg-card/50 hover:bg-card border border-border rounded-lg transition-all group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">hritviksemwal@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-card/50 border border-border rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Boston, Massachusetts</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/semwalhritvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 hover:bg-card border border-border rounded-lg transition-all hover:scale-105 hover:border-primary/50"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/semwalhritvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 hover:bg-card border border-border rounded-lg transition-all hover:scale-105 hover:border-primary/50"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
