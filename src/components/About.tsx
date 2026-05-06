import { motion } from "motion/react";

const techStack = [
    {
        category: "Languages",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    },
    {
        category: "Frameworks & Tools",
        skills: ["React", "Node.js", "Express", "Tailwind CSS", "Git", "VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
        category: "Data & Analytics",
        skills: ["Pandas", "NumPy", "Matplotlib", "GeoPandas", "PySAL", "Tableau", "Excel", "QGIS"],
    },
    {
        category: "Databases & Cloud",
    skills: ["MySQL", "NoSQL", "AWS"],
    },
];

const About = () => {
    return(
        <section id="about" className="relative py-24 px-6 overflow-hidden">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-sm text-accent mb-3 block">
                        {'//  About Me'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
                        Get to Know Me
                    </h2>
                </motion.div>   
            </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7 space-y-6">
                            <p className="text-muted leading-relaxed">
                                I am a recent college graduate with a passion for learning, 
                                problem-solving, and building intuitive web applications. 
                                I enjoy exploring new coding languages and technologies, 
                                and I am always looking for ways to grow as a developer. 
                                With a foundation in both frontend and backend development, 
                                I aim to create digital tools that are thoughtful, performant, and user-friendly.
                            </p>
                            <p className="text-muted leading-relaxed">
                                I aspire to work in a collaborative environment where I can contribute to impactful projects,
                                continue to learn from experienced mentors, and grow my skills as a software engineer and data analyst. 
                            </p>
                        </div>
                    </motion.div>

                    <motion.div>
                        <h3 className="font-mono text-sm mb-4 text-accent">
                            {'> Skills & Technologies'}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                    className="px-4 py-2 code-block rounded-full font-mono text-sm text-foreground hover:text-primary transition-colors cursor-default"
                                    >
                                    {tech.category}: {tech.skills.join(", ")}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                
        </section>

    )
} 

export default About;