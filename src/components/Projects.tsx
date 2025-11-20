import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work spanning research, production ML systems, and data engineering
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Horizontal Scrolling Container - UPDATED STRUCTURE */}
        <div className="relative -mx-6">
          {/* Gradient Overlays - Moved BEFORE scroll container */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/95 to-transparent pointer-events-none z-10" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none z-10" />
          
          {/* Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide pb-8 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-6 md:gap-8 min-w-min"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[90vw] md:w-[450px]"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8 md:hidden"
        >
          Swipe to see more projects →
        </motion.p>
      </div>
    </section>
  );
};