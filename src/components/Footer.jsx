import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>
                            Built with <FaHeart className="heart-icon" /> by Madhab Mondal
                        </p>
                        <p className="copyright">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
