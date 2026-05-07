import { motion } from "motion/react";
import { Link } from "react-router-dom";
import externalLinkIcon from "../assets/lucide-external-link.webp";
import githubIcon from "../assets/github_outline.webp";
import CodeChip from "./CodeChip";
import { projects } from "@/data/projects";


const Projects = () => {
    return(
        <section id="projects" className="relative py-16 sm:py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-sm text-accent mb-3 block" >{'// Projects'}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight"> Things I have built </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
                    {projects.map((project, index)=>(
                        <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="text-xl font-bold text-ink hover:text-accent transition-colors"
                                >
                                    {project.title}
                                </Link>
                                <div className="flex items-center gap-3 text-muted">
                                    {project.github && (
                                        <a href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub repository`}
                                        className="hover:opacity-70 transition-opacity"
                                        >
                                            <img src={githubIcon} alt="" width={27} height={27} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} Live Demo`}
                                        className="hover:opacity-70 transition-opacity"
                                        >
                                            <img src={externalLinkIcon} alt="" width={30} height={30} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <CodeChip key={tech} text={tech} className="text-accent" />
                                ))}
                            </div>
                            <Link
                                to={`/projects/${project.slug}`}
                                className="mt-auto self-start font-mono text-sm text-accent hover:underline"
                            >
                                view details →
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
