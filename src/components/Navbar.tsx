// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
//import { Menu, X } from "lucide-react";

const items = [
    { name: "about", label: "About"},
    { name: "projects", label: "Projects"},
    { name: "experience", label: "Experience"},
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

        {/* Desktop Navigation */}
        <ul className = "hidden md:flex items-center gap-8">
            {items.map((item) =>(
                <li key={item.name}>
                    <a href={`#${item.name}`} className="text-muted hover:text-accent transition-colors font-medium">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>

        {/* //////////////////////////////////////////// */}
        {/* FUTUTRE: Mobile Navigation!!!*/}
        {/* //////////////////////////////////////////// */}
    </nav>
    </header>
)
}


export default Navbar;