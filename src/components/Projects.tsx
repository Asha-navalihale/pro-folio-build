import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sales Savy",
    subtitle: "E-Commerce Platform",
    description: "Full-stack e-commerce web application with secure transactions, real-time analytics dashboards, and scalable product management.",
    technologies: ["Java", "Spring Boot", "React.js", "JavaScript", "HTML", "CSS"],
    features: [
      "Secure payment systems & authentication",
      "Real-time analytics dashboards",
      "Scalable product catalog management"
    ],
    icon: ShoppingCart,
    gradient: "from-primary to-primary/50"
  },
  {
    title: "Driver Drowsiness Detection",
    subtitle: "Alert System",
    description: "Real-time computer vision system that monitors eye closure and yawning patterns to detect drowsiness and triggers alerts to enhance safety.",
    technologies: ["Python", "OpenCV", "HTML", "CSS"],
    features: [
      "Real-time video processing",
      "Eye closure detection",
      "Yawning pattern analysis"
    ],
    icon: Eye,
    gradient: "from-accent to-accent/50"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                    <project.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-border hover:border-primary hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-border hover:border-primary hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
