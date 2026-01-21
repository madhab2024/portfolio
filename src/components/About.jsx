import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import Terminal from './Terminal';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2>About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </motion.div>

                <div className="about-content">


                    <motion.div
                        className="about-terminal-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Terminal />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
