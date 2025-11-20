import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, TrendingUp, Calendar } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const statusColors = {
    "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Deployed: "bg-green-500/10 text-green-400 border-green-500/20",
    Completed: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-full transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Thumbnail */}
              <div className="relative h-[300px] bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-8xl opacity-20">📊</div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                  <span className="px-3 py-1 bg-secondary/50 rounded-full text-xs">
                    {project.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </span>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg mb-6">
                  <TrendingUp size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Impact</h3>
                    <p className="text-foreground text-sm">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.links.github || project.links.demo) && (
                  <div className="flex gap-3 pt-6 border-t border-border">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors flex-1 justify-center"
                      >
                        <Github size={18} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors flex-1 justify-center"
                      >
                        <ExternalLink size={18} />
                        <span>View Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
