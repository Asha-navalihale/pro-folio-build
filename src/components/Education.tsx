import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Visvesvaraya Technological University (VTU)",
    degree: "BE, Computer Science & Engineering",
    score: "CGPA: 8.2",
    year: "2025"
  },
  {
    institution: "MDRS Nidasoshi (PUC)",
    degree: "2nd Year PUC",
    score: "Percentage: 92%",
    year: "2021"
  },
  {
    institution: "MDRS Sadalaga (SSLC)",
    degree: "SSLC",
    score: "Percentage: 88.96%",
    year: "2019"
  }
];

const certifications = [
  "Java Full Stack Development — Kodnest Pvt. Ltd",
  "DSA — Apna College",
  "Certificate AIML — Aqamenz Pvt Ltd"
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{edu.institution}</h4>
                      <p className="text-muted-foreground text-sm">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-mono text-sm">{edu.year}</p>
                      <p className="text-muted-foreground text-sm">{edu.score}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-gradient-card rounded-xl p-5 border border-border hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <p className="text-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
