import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiGraphql, SiRedis } from 'react-icons/si';
import './UnlockSkills.css';

const UnlockSkills = () => {
    const skills = [
        { id: 1, name: 'React', icon: <FaReact />, level: 95, description: 'Building modern SPAs with hooks & context' },
        { id: 2, name: 'Node.js', icon: <FaNodeJs />, level: 90, description: 'RESTful APIs & microservices' },
        { id: 3, name: 'MongoDB', icon: <SiMongodb />, level: 85, description: 'NoSQL database design & optimization' },
        { id: 4, name: 'Express', icon: <SiExpress />, level: 90, description: 'Backend framework & middleware' },
        { id: 5, name: 'TypeScript', icon: <SiTypescript />, level: 88, description: 'Type-safe JavaScript development' },
        { id: 6, name: 'Python', icon: <FaPython />, level: 82, description: 'Data processing & automation' },
        { id: 7, name: 'AWS', icon: <FaAws />, level: 78, description: 'Cloud infrastructure & deployment' },
        { id: 8, name: 'Docker', icon: <FaDocker />, level: 80, description: 'Containerization & orchestration' },
        { id: 9, name: 'GraphQL', icon: <SiGraphql />, level: 75, description: 'Modern API query language' },
        { id: 10, name: 'Tailwind', icon: <SiTailwindcss />, level: 92, description: 'Utility-first CSS framework' },
        { id: 11, name: 'SQL', icon: <FaDatabase />, level: 85, description: 'Relational database management' },
        { id: 12, name: 'Redis', icon: <SiRedis />, level: 70, description: 'Caching & session management' },
    ];

    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const SCROLL_SPEED = -0.6;

    // Duplicate skills 3 times to allow scrolling/dragging in both directions seamlessly
    // [Set 1] [Set 2 (Start Here)] [Set 3]
    const duplicatedSkills = [...skills, ...skills, ...skills];

    const cardWidth = 320;
    const gap = 32;
    const singleSetWidth = (cardWidth + gap) * skills.length;

    // Initialize x to center on the middle set
    // Note: We need to set this in an effect or strictly initially if we could, 
    // but useMotionValue(init) works on first render. 
    // However, since cardWidth/gap are constants, we can just calculating it.
    // We update the x value immediately.
    if (x.get() === 0) x.set(-singleSetWidth);

    useAnimationFrame(() => {
        if (!isDragging) {
            let currentX = x.get();

            // Move steadily
            // Note: If component re-renders, SCROLL_SPEED is constant
            currentX += SCROLL_SPEED;

            // Seamless Loop Logic:
            // We want to stay within the bounds of:
            // -2 * singleSetWidth  <  x  <  0
            // Because our "clean" center view is at -singleSetWidth.

            // If we've gone too far left (seeing Set 3), jump back to Set 2
            if (currentX <= -2 * singleSetWidth) {
                currentX += singleSetWidth;
            }
            // If we've gone too far right (seeing Set 1), jump forward to Set 2
            else if (currentX >= 0) {
                currentX -= singleSetWidth;
            }

            x.set(currentX);
        }
    });

    return (
        <section id="skills" className="unlock-skills-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2>My Skills</h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="skills-carousel-wrapper">
                    <motion.div
                        className="skills-grid"
                        style={{ x }}
                        drag="x"
                        dragMomentum={false} // Disable momentum so it simply stops when released, allowing auto-scroll to take over instantly
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.id}-${index}`}
                                className="skill-card unlocked"
                                whileHover={!isDragging ? { scale: 1.05, y: -10 } : {}}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="skill-icon-wrapper">
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>
                                </div>

                                <h3 className="skill-name">{skill.name}</h3>

                                <div className="skill-details">
                                    <p className="skill-description">{skill.description}</p>
                                    <div className="skill-progress">
                                        <div className="progress-bar">
                                            <motion.div
                                                className="progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UnlockSkills;
