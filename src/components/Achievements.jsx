import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaStar, FaAward } from 'react-icons/fa';
import WavyBackground from './WavyBackground';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        // ... (data remains same) ...
        {
            id: 1,
            icon: <FaTrophy />,
            title: 'Best Developer Award 2023',
            description: 'Recognized for outstanding contribution to web development',
            date: '2023',
            color: '#FFD700'
        },
        {
            id: 2,
            icon: <FaCertificate />,
            title: 'AWS Certified Solutions Architect',
            description: 'Professional level certification in cloud architecture',
            date: '2022',
            color: '#FF6B6B'
        },
        {
            id: 3,
            icon: <FaStar />,
            title: 'Top Contributor - Open Source',
            description: 'Contributed to 20+ major open source projects',
            date: '2023',
            color: '#4ECDC4'
        },
        {
            id: 4,
            icon: <FaAward />,
            title: 'Hackathon Winner',
            description: 'First place in National Web Development Hackathon',
            date: '2021',
            color: '#95E1D3'
        },
        {
            id: 5,
            icon: <FaCertificate />,
            title: 'MongoDB Certified Developer',
            description: 'Expert level database design and optimization',
            date: '2022',
            color: '#F38181'
        },
        {
            id: 6,
            icon: <FaStar />,
            title: '100K+ Code Contributions',
            description: 'Contributed over 100,000 lines of production code',
            date: '2023',
            color: '#AA96DA'
        },
    ];

    return (
        <section id="achievements" className="achievements-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <h2>Achievements & Certifications</h2>
                    <p className="section-subtitle">Milestones in my journey</p>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            className="achievement-card glass"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                        >
                            <WavyBackground />
                            <div
                                className="achievement-icon"
                                style={{ color: achievement.color }}
                            >
                                {achievement.icon}
                            </div>
                            <div className="achievement-content">
                                <span className="achievement-date">{achievement.date}</span>
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-description">{achievement.description}</p>
                            </div>
                            <div className="achievement-shine"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
