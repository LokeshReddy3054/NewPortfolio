import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useRef } from 'react';

const kanjiNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            className={`project-card ${isEven ? 'even' : 'odd'}`}
            style={{ opacity, y }} // Keep motion styles inline as they are dynamic
        >
            {/* Kanji Watermark */}
            <div className="kanji-watermark">
                {kanjiNumbers[index] || index + 1}
            </div>

            {/* Image Section */}
            <motion.div
                className="project-image-wrapper"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="project-image-container">
                    <div
                        className="project-img-bg"
                        style={{
                            background: project.image ? `url(${project.image}) center/cover no-repeat` : 'linear-gradient(45deg, var(--bg-dark), #1a1a1a)'
                        }}
                    />

                    {/* Overlay for depth */}
                    <div className="project-overlay" />

                    {!project.image && (
                        <div className="project-placeholder">
                            <span>{project.title[0]}</span>
                        </div>
                    )}
                </div>

                {/* Decorative Frame */}
                <div className="project-frame" />
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="project-content"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="project-title">
                    {project.title}
                    <span className="title-underline" />
                </h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-tech">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-dark)', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '6rem', textAlign: 'center' }}
                >
                    <h2 className="section-title">Selected Works</h2>
                    <p style={{
                        color: 'var(--text-gray)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        marginTop: '-3rem',
                        marginBottom: '4rem',
                        fontFamily: "'Noto Serif JP', serif",
                        fontStyle: 'italic'
                    }}>
                        Crafting digital experiences with precision and purpose
                    </p>
                </motion.div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            <style>{`
                .projects-list {
                    display: flex;
                    flex-direction: column;
                }
                .project-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8rem;
                    position: relative;
                    gap: 4rem;
                }
                .project-card.even { flex-direction: row; }
                .project-card.odd { flex-direction: row-reverse; }

                .kanji-watermark {
                    position: absolute;
                    top: -20%;
                    font-size: 15rem;
                    font-family: 'Noto Serif JP', serif;
                    color: var(--text-light);
                    opacity: 0.03;
                    z-index: 0;
                    pointer-events: none;
                    line-height: 1;
                }
                .project-card.even .kanji-watermark { left: 5%; }
                .project-card.odd .kanji-watermark { right: 5%; }

                .project-image-wrapper {
                    flex: 1.2;
                    height: 400px;
                    position: relative;
                    perspective: 1000px;
                }
                
                .project-image-container {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    border-radius: 2px;
                    border: 1px solid var(--glass-border);
                    position: relative;
                    background: var(--bg-card);
                }

                .project-img-bg {
                    position: absolute;
                    inset: 0;
                    transition: transform 0.7s ease;
                    filter: grayscale(100%) contrast(1.1);
                }
                
                .project-image-container:hover .project-img-bg {
                    transform: scale(1.05);
                    filter: grayscale(0%) contrast(1);
                }

                .project-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%);
                    z-index: 1;
                }

                .project-placeholder {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                .project-placeholder span {
                    font-size: 4rem;
                    font-family: 'Noto Serif JP', serif;
                    color: var(--text-gray);
                    opacity: 0.3;
                }

                .project-frame {
                    position: absolute;
                    top: 20px;
                    width: 100%;
                    height: 100%;
                    border: 1px solid var(--primary);
                    opacity: 0.3;
                    z-index: -1;
                    transition: transform 0.4s ease;
                }
                .project-card.even .project-frame { left: 20px; }
                .project-card.odd .project-frame { left: -20px; }
                
                .project-card:hover .project-frame {
                    transform: translate(10px, 10px);
                    opacity: 0.6;
                    border-color: var(--secondary);
                }

                .project-content {
                    flex: 1;
                    z-index: 2;
                }
                .project-card.even .project-content { text-align: left; }
                .project-card.odd .project-content { text-align: right; }

                .project-title {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-light);
                    position: relative;
                    display: inline-block;
                }
                
                .title-underline {
                    position: absolute;
                    bottom: -5px;
                    width: 40px;
                    height: 2px;
                    background: var(--primary);
                }
                .project-card.even .title-underline { left: 0; }
                .project-card.odd .title-underline { right: 0; }

                .project-description {
                    font-size: 1.1rem;
                    color: var(--text-gray);
                    margin-bottom: 2rem;
                    line-height: 1.8;
                    max-width: 90%;
                }
                .project-card.odd .project-description { margin-left: auto; }

                .project-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                .project-card.even .project-tech { justify-content: flex-start; }
                .project-card.odd .project-tech { justify-content: flex-end; }

                .tech-tag {
                    font-size: 0.85rem;
                    padding: 0.4rem 1rem;
                    border: 1px solid var(--glass-border);
                    color: var(--text-light);
                    background: rgba(255,255,255,0.02);
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                @media (max-width: 968px) {
                    .project-card, .project-card.even, .project-card.odd {
                        flex-direction: column !important;
                        gap: 2rem;
                        margin-bottom: 6rem;
                    }
                    .project-content, .project-card.even .project-content, .project-card.odd .project-content {
                        text-align: left;
                        width: 100%;
                    }
                    .kanji-watermark {
                        display: none;
                    }
                    .project-image-wrapper {
                        width: 100%;
                        height: 250px;
                        flex: none;
                    }
                    .project-frame {
                        display: none;
                    }
                    .title-underline, .project-card.odd .title-underline {
                        left: 0;
                        right: auto;
                    }
                    .project-description, .project-card.odd .project-description {
                        margin-left: 0;
                        max-width: 100%;
                    }
                    .project-tech, .project-card.odd .project-tech {
                        justify-content: flex-start;
                    }
                }
            `}</style>
        </section>
    );
};
export default Projects;
