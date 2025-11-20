import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            3+ years of professional experience in data science and ML engineering
          </p>
        </motion.div>

        {experiences.map((experience) => (
          <div key={experience.company} className="mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-lg bg-card border border-border flex items-center justify-center">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-bold text-primary">${experience.company.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold">{experience.company}</h3>
              </div>
            </motion.div>

            {/* Desktop: Horizontal Scroll */}
            <div className="hidden md:block">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {experience.roles.map((role, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="min-w-[450px] snap-center"
                  >
                    <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold mb-2">{role.title}</h4>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{role.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{role.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <ul className="space-y-2">
                          {role.role.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-foreground/90 flex gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile: Vertical Stack */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="md:hidden space-y-6"
            >
              {experience.roles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2">{role.title}</h4>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{role.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {role.role.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-foreground/90 flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
