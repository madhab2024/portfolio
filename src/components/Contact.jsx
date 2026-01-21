import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Simulate API call (replace with actual backend endpoint when ready)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // await axios.post('http://localhost:5000/api/contact', formData);

            setStatus({
                type: 'success',
                message: '✅ Message sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: '❌ Failed to send message. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'mondalmadhab4231@gmail.com' },
        { icon: <FaPhone />, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'San Francisco, CA' },
    ];

    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's work together on your next project</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="gradient-text">Let's Connect</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="contact-icon">{info.icon}</div>
                                    <div>
                                        <p className="contact-label">{info.label}</p>
                                        <p className="contact-value">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="contact-social">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                                <a href="https://github.com/madhab2024" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/madhab-mondal/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/madhab_mondal_20/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="form-input"
                            ></textarea>
                        </div>

                        {status.message && (
                            <motion.div
                                className={`form-status ${status.type}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {status.message}
                            </motion.div>
                        )}

                        <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="loading"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
