const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-slate-200">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-xs text-muted mt-2">
                    © {new Date().getFullYear()} Julie Amon. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer;