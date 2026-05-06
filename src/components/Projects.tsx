import {  motion } from "motion/react";
import externalLinkIcon from "../assets/lucide-external-link.webp";
import githubIcon from "../assets/github_outline.webp";
import CodeChip from "./CodeChip";



interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    liveDemo?: string;
}

const projects: Project[] = [
    {
        title: "KeepUp",
        description: "Modern Accounting Software for Small Businesses: KeepUp is a full-stack bookkeeping and financial management application designed to help small businesses track transactions, manage accounts, and generate core financial statements with clarity and confidence. Developed as part of a Computer Science Cumulative Undergraduate Experience (CUE) project, KeepUp aims to combine accounting principles with a clean, modern user interface.",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "AWS"],
        github: "https://github.com/mcneilkimberly/KeepUp.git",
        liveDemo: "https://keepupbookkeeping.netlify.app/login"
    },
    {
        title: "Balance",
        description:"Balance is a web-based AI assistant with two interaction modes — Reflect and Focus — built to explore how tone, intent, and context shape chat-based user experiences.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Supabase", "OpenAI API", "Canvas LMS API"],
        github: "https://github.com/julieamononce/Balance--Final-Project.git"
    }, 
    {
        title:"Tracy the Track Master",
        description:"Tracy-- The Task Master is a full-stack CRUD application built to store, retrieve, update, and delete data in JSON format. The project provides a clean and minimal UI where you can manage tasks using a table-based interface.",
        technologies: ["HTML", "JavaScript","CSS", "Node.js", "Express", "MongoDB", "Mongoose"],
        github: "https://github.com/julieamononce/Tracy--The-Track-Master.git"
    },
    {
        title:"Spatial-AI-Model-Comparison-for-Building-Detection",
        description:"Built a spatial AI workflow to train and compare U-Net, DeepLabV3, and SegFormer models for semantic segmentation using raster imagery and building footprint labels. Evaluated each model with IoU, Dice Score, and visual mask comparisons to understand performance differences across CNN-based, classical, and transformer-based approaches.",
        technologies: ["Colab", "Python", "U-Net","DeepLabV3", "SegFormer", "GeoAI"],
        github: "https://github.com/mcneilkimberly/Spatial-AI-Model-Comparison-for-Building-Detection.git"
    }
    
]



const Projects = () => {
    return(
        <section id="projects" className="relative py-24 px-6 overflow-hidden">
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
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-xl font-bold text-ink hover:text-accent transition-colors ">{project.title}</h3>
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
                                    {project.liveDemo && (
                                        <a href={project.liveDemo} 
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
                                {project.technologies.map((tech) => (
                                    <CodeChip key={tech} text={tech} className="text-accent" />
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;