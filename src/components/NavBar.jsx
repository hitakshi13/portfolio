import { useState, useEffect } from "react";
import { navLinks, socialLinks } from "../constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                {/* Logo */}
                <a href="#hero" className="logo">
                    Hitakshi Kharag
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Icons */}
                {/* Social Icons */}
                <div className="flex gap-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-7 h-7"
                            />
                        </a>
                    ))}
                </div>


                {/* Contact Button */}
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
