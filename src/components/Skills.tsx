import { motion } from "framer-motion";
import { useState } from "react";
import { skillsData } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  BarChart2, 
  GitBranch, 
  Brain, 
  Cpu, 
  Zap, 
  Table, 
  MessageSquare,
  Cloud,
  Activity,
  TrendingUp,
  Users,
  MessageCircle,
  Handshake,
  Lightbulb,
  LucideIcon
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  "code": Code,
  "database": Database,
  "bar-chart": BarChart2,
  "bar-chart-2": BarChart2,
  "git-branch": GitBranch,
  "brain": Brain,
  "cpu": Cpu,
  "zap": Zap,
  "table": Table,
  "message-square": MessageSquare,
  "cloud": Cloud,
  "activity": Activity,
  "trending-up": TrendingUp,
  "users": Users,
  "message-circle": MessageCircle,
  "handshake": Handshake,
  "lightbulb": Lightbulb
};

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

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
        staggerChildren: 0.08
      }
    }
  };

  const filters = ["All", ...skillsData.map(cat => cat.category)];

  const filteredCategories = activeFilter === "All" 
    ? skillsData 
    : skillsData.filter(cat => cat.category === activeFilter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and professional competencies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="group relative"
                    >
                      <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          
                          <h4 className="font-semibold mb-2">{skill.name}</h4>
                          
                          {/* Proficiency Level - Shown on Hover */}
                          <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-xs text-muted-foreground mb-2">
                              Proficiency: {skill.level}%
                            </div>
                            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
