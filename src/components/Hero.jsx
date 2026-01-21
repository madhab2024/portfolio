import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import fontVideo from '../assets/video/fontBackground.mp4';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section section">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    >
                        <motion.p
                            className="hero-greeting"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.div
                            className="hero-name-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <svg className="hero-svg-overlay" viewBox="0 0 800 160" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <clipPath id="textClip">
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="svg-text">Madhab Mondal</text>
                                    </clipPath>
                                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#00ffff" />
                                        <stop offset="100%" stopColor="#8a2be2" />
                                    </linearGradient>
                                </defs>

                                <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#textClip)">
                                    <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                        <source src={fontVideo} type="video/mp4" />
                                    </video>
                                </foreignObject>

                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="none"
                                    stroke="url(#textGradient)"
                                    strokeWidth="2"
                                    className="svg-text"
                                >
                                    Madhab Mondal
                                </text>
                            </svg>
                        </motion.div>

                        <motion.h2
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="typing-text">Full Stack Developer</span>
                        </motion.h2>
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Crafting beautiful, responsive web applications with modern technologies.
                            Passionate about creating seamless user experiences and writing clean code.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <a href="#contact" className="btn btn-primary">
                                Get In Touch
                            </a>
                            <a href="#projects" className="btn btn-outline">
                                View Projects
                            </a>
                        </motion.div>

                        <motion.div
                            className="social-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a href="https://github.com/madhab2024" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/madhab-mondal/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/madhab_mondal_20/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Profile" className="profile-img" />
                            <div className="image-glow"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
