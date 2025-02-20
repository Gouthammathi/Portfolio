import React, { useState, useEffect, useRef } from 'react';
import ContactButton from './ContactButton';
import { gsap } from 'gsap';
import Checkbox from './Hamburger';

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const lastScrollY = useRef(0);
    const headerRef = useRef(null);
    const isAnimating = useRef(false);

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

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-colors duration-300 ease-in-out text-white font-mono"
            style={{ height: "60px", backgroundColor: "transparent" }}
        >
            <div className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity text-white">
                Goutham Mathi
            </div>
            <nav className={`flex-grow text-center ${navOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex justify-center space-x-8">
                    {["Home", "About", "Projects"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="text-lg text-white hover:opacity-80 transition-all relative group">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center">
                <Checkbox onClick={toggleNav} />
                <ContactButton />
            </div>
        </header>
    );
};

export default Header;
