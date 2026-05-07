import nameLogo from "../assets/Name.png";

const items = [
    { name: "about", label: "About"},
    { name: "projects", label: "Projects"},
    { name: "contact", label: "Contact"},
];

const Navbar = () => {
    return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 sm:h-20 backdrop-blur-sm bg-surface/70">
    <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
        href="#"
        aria-label="Julie Amon - Home"
        className="flex items-center hover:opacity-80 transition-opacity">
            <img
                src={nameLogo}
                alt="Julie Amon"
                className="h-22 sm:h-32 w-auto object-contain"
            />
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