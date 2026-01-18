import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
    color: "primary"
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Hibernate", "React.js"],
    color: "accent"
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
    color: "primary"
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "Git", "GitHub", "Power BI"],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
