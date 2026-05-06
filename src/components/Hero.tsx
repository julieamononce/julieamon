import { Mouse } from "lucide-react"
import CodeChip from "./CodeChip";
import { motion } from "motion/react";

const chips = [
    { text: "<Component />",  className: "absolute top-24 left-30 text-muted/70", delay:0 },
    { text: "✨",  className: "absolute top-45 left-84 text-muted/70", delay:-3.4 },
    { text: "npm run build",  className: "absolute top-32 right-12 text-muted/70", delay:-1.2 },
    { text: "🤖",  className: "absolute top-45 right-60 text-muted/70", delay:-1.2 },
    { text: 'git commit -m "Initial commit"',  className: "absolute top-1/2 left-20 text-muted/70", delay:-2.4 },
    { text: "async/await",  className: "absolute bottom-25 left-40 text-muted/70", delay:-3.6 },
    { text: "📲",  className: "absolute bottom-55 left-60 text-muted/70", delay:-3.6 },
    { text: "👩‍💻",  className: "absolute bottom-50 right-100 text-muted/70", delay:-3.4 },
    { text: "print('Hello World!')",  className: "absolute bottom-45 right-40 text-muted/70", delay:-4.8 },
];

const Hero = () => {
    return (
        <section
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        >
            {/* Soft radial glow behind the heading */}
            <div 
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl pointer-events-none"
            />

            {/* Floating code chips */}
            {chips.map((chip) => (
                <CodeChip key={chip.text} float {...chip} />
            ))}
            {/* Centered content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">
            {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-ink tracking-tight">
                    I'm <span className="bg-gradient-to-br from-[hsl(175_70%_35%)] to-[hsl(200_80%_45%)] bg-clip-text text-transparent"> Julie Amon </span>
                </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted max-w-2xl tracking-tight leading-relaxed">
            Aspiring software engineer and data analyst passionate about creating practical, human-centered technology.
            </p>

            {/* Buttons */}
            <motion.div
                className="flex flex-wrap gap-5 justify-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
            <a
            href="#projects"
            className="px-10 py-3.5 rounded-full bg-accent text-white text-base font-medium tracking-tight
                    shadow-sm shadow-accent/30 hover:bg-accent-hover transition-colors"
            >
                View Projects
            </a>
            <a
            href="#contact"
            className="px-10 py-3.5 rounded-full border border-slate-300 text-ink text-base font-medium tracking-tight
                    hover:border-accent hover:text-accent transition-colors"
            >
                Get in Touch
            </a>
            </motion.div>
            </div>
            {/* Animated mouse icon at the bottom */}
            <a
            href="#about"
            aria-label="Scroll Down"
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
            >
               <Mouse className="w-10 h-10 animate-bounce"/>
            </a>
        </section>
    );
};

export default Hero;