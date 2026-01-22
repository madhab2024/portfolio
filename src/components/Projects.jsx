import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
            image: project1,
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            github: 'https://github.com',
            demo: 'https://demo.com',
            tech: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />]
        },
        {
            id: 2,
            title: 'Social Media Dashboard',
            description: 'Real-time social media analytics dashboard with interactive charts, user engagement metrics, and content scheduling.',
            image: project2,
            tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
            category: 'frontend',
            github: 'https://github.com',
            demo: 'https://demo.com',
            tech: [<FaReact key="react" />, <SiTypescript key="ts" />]
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'Collaborative task management tool with drag-and-drop kanban boards, team chat, and project timelines.',
            image: project3,
            tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
            category: 'fullstack',
            github: 'https://github.com',
            demo: 'https://demo.com',
            tech: [<FaReact key="react" />, <SiExpress key="express" />, <SiMongodb key="mongo" />]
        },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">Check out my recent work</p>
                </motion.div>

                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                        onClick={() => setFilter('fullstack')}
                    >
                        Full Stack
                    </button>
                    <button
                        className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                        onClick={() => setFilter('frontend')}
                    >
                        Frontend
                    </button>
                </motion.div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-tech-icons">
                                    {project.tech.map((icon, i) => (
                                        <span key={i} className="tech-icon">{icon}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
