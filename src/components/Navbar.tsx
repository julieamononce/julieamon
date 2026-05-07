// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
//import { Menu, X } from "lucide-react";

const items = [
    { name: "about", label: "About"},
    { name: "projects", label: "Projects"},
    { name: "contact", label: "Contact"},
];

const Navbar = () => {
    return (
    <header className="fixed top-0 inset-x-0 z-50 py-4 backdrop-blur-sm bg-surface/70">
    <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
        href="#"
        className="font-mono text-lg font-semibold text-ink hover:text-accent transition-colors">
            {'Julie Amon'}
        </a>

        {/* Navigation (responsive) */}
        <ul className="flex items-center gap-4 sm:gap-8">
            {items.map((item) =>(
                <li key={item.name}>
                    <a href={`#${item.name}`} className="text-sm sm:text-base text-muted hover:text-accent transition-colors font-medium">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </header>
)
}


export default Navbar;