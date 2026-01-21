import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaLock, FaProjectDiagram, FaTrophy, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: <FaHome /> },
        { id: 'about', label: 'About', icon: <FaUser /> },
        { id: 'skills', label: 'Skills', icon: <FaLock /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="nav-content">
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="gradient-text">Portfolio</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul className="nav-links desktop">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a onClick={() => scrollToSection(item.id)} className="nav-link">
                                    {item.icon}
                                    <span>{item.label}</span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.ul
                    className={`nav-links mobile ${isOpen ? 'open' : ''}`}
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                >
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a onClick={() => scrollToSection(item.id)} className="nav-link">
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
