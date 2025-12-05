import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
    const { email, phone, location, linkedin } = portfolioData.personalInfo;

    return (
        <section id="contact" className="section" style={{ background: 'transparent' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-wrapper">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="contact-card"
                    >
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact-items">
                            <div className="contact-item contact-item-hover">
                                <div className="contact-icon-box">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-info">
                                    <h4>Email</h4>
                                    <p>{email}</p>
                                </div>
                            </div>

                            <div className="contact-item contact-item-hover">
                                <div className="contact-icon-box">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>{phone}</p>
                                </div>
                            </div>

                            <div className="contact-item contact-item-hover">
                                <div className="contact-icon-box">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>{location}</p>
                                </div>
                            </div>

                            <div className="contact-actions">
                                <a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-linkedin">
                                    <FaLinkedin /> Connect on LinkedIn
                                </a>
                                <a href="/resume.pdf" download="Lokesh_Reddy_Polu_Resume.pdf" className="btn btn-outline btn-resume">
                                    <FaFileDownload /> Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
                .contact-wrapper {
                    display: flex;
                    justify-content: center;
                }
                .contact-card {
                    background: rgba(30, 41, 59, 0.4);
                    backdrop-filter: blur(10px);
                    padding: 3rem;
                    border-radius: 30px;
                    border: 1px solid rgba(139, 92, 246, 0.2);
                    box-shadow: 0 0 40px rgba(139, 92, 246, 0.1);
                    max-width: 600px;
                    width: 100%;
                }
                .contact-heading {
                    margin-bottom: 2rem;
                    font-size: 2rem;
                    text-align: center;
                    background: linear-gradient(to right, #fff, #94a3b8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .contact-text {
                    color: var(--text-gray);
                    margin-bottom: 3rem;
                    text-align: center;
                }
                .contact-items {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    align-items: center;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 1rem;
                    background: rgba(255,255,255,0.03);
                    border-radius: 15px;
                    transition: all 0.3s ease;
                    width: 100%;
                    max-width: 400px;
                }
                .contact-icon-box {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    box-shadow: 0 0 20px rgba(188, 0, 45, 0.4);
                    flex-shrink: 0;
                }
                .contact-info {
                    overflow: hidden;
                }
                .contact-item h4 {
                    font-size: 0.9rem;
                    color: var(--text-gray);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .contact-item p {
                    font-size: 1.1rem;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .contact-actions {
                    margin-top: 1rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    max-width: 400px;
                }
                .btn-linkedin, .btn-resume {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                    padding: 1rem 2.5rem;
                    font-size: 1.1rem;
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .contact-card {
                        padding: 2rem;
                    }
                    .contact-heading {
                        font-size: 1.8rem;
                    }
                    .contact-item {
                        flex-direction: column;
                        text-align: center;
                        padding: 1.5rem;
                    }
                    .contact-item p {
                        font-size: 1rem;
                        white-space: normal;
                    }
                }
            `}</style>
        </section>
    );
};
export default Contact;
