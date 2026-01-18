import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "KODNEST",
    role: "Java Full Stack Developer Intern",
    period: "Feb 2025 – Present",
    description: "Building Java & Spring Boot applications, backend APIs, database design, authentication and role-based features.",
    current: true
  },
  {
    company: "CODSOFT (Virtual)",
    role: "Data Analytics Intern",
    period: "Oct 2024 – Nov 2024",
    description: "Analyzed and visualized data using Power BI to build interactive dashboards and insights for stakeholders."
  },
  {
    company: "AQAMENTZ PVT LTD",
    role: "AI/ML Intern",
    period: "Oct 2023 – Nov 2023",
    description: "Gained foundational exposure to machine learning concepts using Python and relevant libraries."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${exp.current ? 'bg-primary border-primary' : 'bg-background border-border'}`}>
                {exp.current && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
              </div>

              <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 ml-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-primary font-medium mb-2">{exp.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
