import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
    const { email, phone, location, linkedin } = resumeData.personalInfo;

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

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(30, 41, 59, 0.4)',
                            backdropFilter: 'blur(10px)',
                            padding: '3rem',
                            borderRadius: '30px',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.1)',
                            maxWidth: '600px',
                            width: '100%'
                        }}
                    >
                        <h3 style={{ marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Connect</h3>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '3rem', textAlign: 'center' }}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', transition: 'all 0.3s ease', width: '100%', maxWidth: '400px' }} className="contact-item-hover">
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                                    boxShadow: '0 0 20px rgba(188, 0, 45, 0.4)',
                                    flexShrink: 0
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{email}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', transition: 'all 0.3s ease', width: '100%', maxWidth: '400px' }} className="contact-item-hover">
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                                    boxShadow: '0 0 20px rgba(188, 0, 45, 0.4)',
                                    flexShrink: 0
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</h4>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{phone}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', transition: 'all 0.3s ease', width: '100%', maxWidth: '400px' }} className="contact-item-hover">
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                                    boxShadow: '0 0 20px rgba(188, 0, 45, 0.4)',
                                    flexShrink: 0
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{location}</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
                                <a href={linkedin} target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1rem 2.5rem', fontSize: '1.1rem', width: '100%' }}>
                                    <FaLinkedin /> Connect on LinkedIn
                                </a>
                                <a href="/resume.pdf" download="Lokesh_Reddy_Polu_Resume.pdf" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1rem 2.5rem', fontSize: '1.1rem', width: '100%' }}>
                                    <FaFileDownload /> Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
