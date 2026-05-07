import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import githubIcon from "@/assets/github_outline.webp";
import externalLinkIcon from "@/assets/lucide-external-link.webp";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">Project not found</h1>
          <Link to="/" className="text-accent hover:underline font-mono">
            ← back home
          </Link>
        </div>
      </div>
    );
  }

  const subs = project.subProjects ?? [];

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm mb-8"
          >
            <span aria-hidden>←</span> back to projects
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-mono text-sm text-accent mb-2 block">
              {`// ${project.slug}`}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted max-w-3xl leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <img src={githubIcon} alt="" width={20} height={20} /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <img src={externalLinkIcon} alt="" width={20} height={20} /> Live
                </a>
              )}
            </div>
          </motion.header>

          {subs.length === 0 ? (
            <p className="text-muted font-mono">{"// sub-projects coming soon"}</p>
          ) : (
            <div className="space-y-20">
              {subs.map((sub, idx) => (
                <motion.section
                  key={sub.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <div className="mb-6">
                    <span className="font-mono text-xs text-accent block mb-2">
                      {`#${idx + 1}`}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-3">
                      {sub.title}
                    </h2>
                    <p className="text-muted leading-relaxed max-w-3xl">
                      {sub.description}
                    </p>
                    {sub.github && (
                      <a
                        href={sub.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm"
                      >
                        <img src={githubIcon} alt="" width={18} height={18} /> Code
                      </a>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {sub.visuals.map((v) => (
                      <figure
                        key={v.label}
                        className="rounded-xl overflow-hidden border border-slate-200 bg-chip"
                      >
                        <img
                          src={v.src}
                          alt={v.alt}
                          loading="lazy"
                          width={1024}
                          height={640}
                          className="w-full h-48 object-cover"
                        />
                        <figcaption className="px-4 py-2 font-mono text-xs text-muted border-t border-slate-200">
                          {v.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
