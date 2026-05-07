import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import nameLogo from "../assets/Name.png";

const items = [
    { name: "about", label: "About"},
    { name: "projects", label: "Projects"},
    { name: "contact", label: "Contact"},
];

const Navbar = () => {
    const location = useLocation();

    // When landing on "/" with a hash (e.g. /#projects), scroll to that section.
    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                requestAnimationFrame(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        }
    }, [location]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (location.pathname === "/") {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", `/#${id}`);
            }
        }
    };

    return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 sm:h-20 backdrop-blur-sm bg-surface/70">
    <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
            to="/"
            aria-label="Julie Amon - Home"
            onClick={() => {
                if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }}
            className="flex items-center hover:opacity-80 transition-opacity"
        >
            <img
                src={nameLogo}
                alt="Julie Amon"
                className="h-22 sm:h-32 w-auto object-contain"
            />
        </Link>

        {/* Navigation (responsive) */}
        <ul className="flex items-center gap-4 sm:gap-8">
            {items.map((item) =>(
                <li key={item.name}>
                    <Link
                        to={`/#${item.name}`}
                        onClick={(e) => handleNavClick(e, item.name)}
                        className="text-sm sm:text-base text-muted hover:text-accent transition-colors font-medium"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
    </header>
)
}


export default Navbar;