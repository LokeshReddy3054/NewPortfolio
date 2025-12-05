import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { name, linkedin } = portfolioData.personalInfo;

    return (
        <footer className="footer">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="footer-title">{name}</h2>

                <div className="footer-socials">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="social-link">
                        <FaTwitter />
                    </a>
                </div>

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
            </div>
            <style>{`
                .footer {
                    background: var(--bg-dark);
                    padding: 3rem 0;
                    border-top: 1px solid var(--glass-border);
                }
                .footer-title {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }
                .footer-socials {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-link {
                    font-size: 1.5rem;
                    color: var(--text-gray);
                    transition: color 0.3s ease;
                }
                .social-link:hover {
                    color: var(--primary);
                }
                .footer-copy {
                    color: var(--text-gray);
                    font-size: 0.9rem;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
