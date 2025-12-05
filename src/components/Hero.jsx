import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { name, role, summary } = portfolioData.personalInfo;

    return (
        <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px', overflow: 'hidden' }}>

            {/* Red Sun Background */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="hero-sun"
            ></motion.div>

            {/* Falling Petals (Simplified CSS Animation) */}
            <div className="petals-container" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', zIndex: -1 }}>
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, x: Math.random() * 100, opacity: 0 }}
                        animate={{
                            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                            x: Math.random() * 200 - 100,
                            rotate: 360,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            width: '15px',
                            height: '15px',
                            background: 'var(--accent)',
                            borderRadius: '100% 0 100% 0',
                            opacity: 0.6
                        }}
                    />
                ))}
            </div>

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '100%' }}
                >

                    <h1 className="hero-title">
                        {name}
                    </h1>
                    <div className="hero-divider"></div>
                    <h3 className="hero-role">
                        {role}
                    </h3>
                    <p className="hero-summary">
                        {summary.split('.')[0]}.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact</a>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .hero-sun {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60vh;
                    height: 60vh;
                    background: var(--primary);
                    border-radius: 50%;
                    opacity: 0.8;
                    z-index: -1;
                    box-shadow: 0 0 100px rgba(188, 0, 45, 0.3);
                }
                .hero-title {
                    font-size: 5rem;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                    font-family: 'Noto Serif JP', serif;
                    font-weight: 700;
                }
                .hero-divider {
                    width: 100px;
                    height: 2px;
                    background: var(--text-light);
                    margin: 1.5rem auto;
                }
                .hero-role {
                    font-size: 1.8rem;
                    color: var(--text-gray);
                    margin-bottom: 2rem;
                    font-weight: 300;
                }
                .hero-summary {
                    font-size: 1.1rem;
                    color: var(--text-gray);
                    margin-bottom: 3rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 2;
                }
                .hero-buttons {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                }

                @media (max-width: 768px) {
                    .hero-sun {
                        width: 40vh;
                        height: 40vh;
                    }
                    .hero-title {
                        font-size: 3rem;
                    }
                    .hero-role {
                        font-size: 1.4rem;
                    }
                    .hero-summary {
                        font-size: 1rem;
                        padding: 0 1rem;
                    }
                    .hero-buttons {
                        flex-direction: column;
                        gap: 1rem;
                        width: 100%;
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    .hero-buttons .btn {
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
