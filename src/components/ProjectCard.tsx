import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusColors = {
    "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Deployed: "bg-green-500/10 text-green-400 border-green-500/20",
    Completed: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-[600px] flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative h-[300px] bg-secondary/50 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Failed to load:', project.thumbnail);
              // Fallback to placeholder
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div class="text-6xl opacity-20">📊</div>
                </div>
              `;
            }}
          />
        </motion.div>
          
          {/* View Details Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-primary font-semibold flex items-center gap-2">
              View Details <ExternalLink size={16} />
            </p>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          {/* Year Badge */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 bg-secondary/50 text-muted-foreground text-xs rounded-full">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Impact */}
          <div className="flex items-start gap-2 mb-4 p-3 bg-secondary/30 rounded-lg">
            <TrendingUp size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">{project.impact}</p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </span>

            <div className="flex gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                  aria-label="View demo"
                >
                  <ExternalLink size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
