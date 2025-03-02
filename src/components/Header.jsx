import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ContactButton from './ContactButton';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const headerRef = useRef(null);
    const navRef = useRef(null);
    const isAnimating = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY.current;

            if (!isAnimating.current) {
                if (scrollingDown) {
                    setVisible(false);
                    isAnimating.current = true;
                    gsap.to(headerRef.current, {
                        y: "-100%",
                        duration: 0.4,
                        ease: "power2.inOut",
                        onComplete: () => (isAnimating.current = false),
                    });
                } else {
                    setVisible(true);
                    isAnimating.current = true;
                    gsap.to(headerRef.current, {
                        y: "0%",
                        duration: 0.4,
                        ease: "power2.inOut",
                        onComplete: () => (isAnimating.current = false),
                    });
                }
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (sectionId) => {
        setVisible(false);
        setTimeout(() => {
            setVisible(true);
        }, 3000);
        scrollToSection(sectionId);
    };

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-4 transition-colors duration-300 ease-in-out text-[#212A37] font-mono bg-transparent ${visible ? 'block' : 'hidden'}`}
            style={{ height: "90px" }}
        >
            {/* Brand Name */}
            <div className="text-lg md:text-xl font-bold tracking-wider hover:opacity-80 transition-opacity text-[#212A37]">
                Goutham Mathi
            </div>

            {/* Navigation */}
            <nav
                ref={navRef}
                className={`absolute top-[90px] left-0 w-full md:static md:w-auto md:bg-transparent md:flex items-center justify-center`}
            >
                <ul className="flex flex-col md:flex-row items-center md:space-x-8 py-6 md:py-0">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item} className="mb-4 md:mb-0">
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="text-lg text-[#212A37] hover:opacity-80 transition-all relative group"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.toLowerCase());
                                }}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#212A37] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
                <ContactButton />
            </div>
        </header>
    );
};

export default Header;
