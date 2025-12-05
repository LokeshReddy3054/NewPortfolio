import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resume';
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
            style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8rem',
                position: 'relative',
                gap: '4rem',
                opacity
            }}
            className="project-card"
        >
            {/* Kanji Watermark */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: isEven ? '5%' : 'auto',
                right: isEven ? 'auto' : '5%',
                fontSize: '15rem',
                fontFamily: "'Noto Serif JP', serif",
                color: 'var(--text-light)',
                opacity: 0.03,
                zIndex: 0,
                pointerEvents: 'none',
                lineHeight: 1
            }}>
                {kanjiNumbers[index] || index + 1}
            </div>

            {/* Image Section */}
            <motion.div
                style={{
                    flex: '1.2',
                    height: '400px',
                    position: 'relative',
                    perspective: '1000px'
                }}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div
                    className="project-image-container"
                    style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: '2px',
                        border: '1px solid var(--glass-border)',
                        position: 'relative',
                        background: 'var(--bg-card)'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: project.image ? `url(${project.image}) center/cover no-repeat` : 'linear-gradient(45deg, var(--bg-dark), #1a1a1a)',
                        transition: 'transform 0.7s ease',
                        filter: 'grayscale(100%) contrast(1.1)',
                    }} className="project-img-bg" />

                    {/* Overlay for depth */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
                        zIndex: 1
                    }} />

                    {!project.image && (
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2
                        }}>
                            <span style={{
                                fontSize: '4rem',
                                fontFamily: "'Noto Serif JP', serif",
                                color: 'var(--text-gray)',
                                opacity: 0.3
                            }}>
                                {project.title[0]}
                            </span>
                        </div>
                    )}
                </div>

                {/* Decorative Frame */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: isEven ? '20px' : '-20px',
                    width: '100%',
                    height: '100%',
                    border: '1px solid var(--primary)',
                    opacity: 0.3,
                    zIndex: -1,
                    transition: 'transform 0.4s ease'
                }} className="project-frame" />
            </motion.div>

            {/* Content Section */}
            <motion.div
                style={{
                    flex: '1',
                    zIndex: 2,
                    textAlign: isEven ? 'left' : 'right'
                }}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-light)',
                    position: 'relative',
                    display: 'inline-block'
                }}>
                    {project.title}
                    <span style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: isEven ? 0 : 'auto',
                        right: isEven ? 'auto' : 0,
                        width: '40px',
                        height: '2px',
                        background: 'var(--primary)'
                    }} />
                </h3>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-gray)',
                    marginBottom: '2rem',
                    lineHeight: '1.8',
                    maxWidth: '90%',
                    marginLeft: isEven ? 0 : 'auto'
                }}>
                    {project.description}
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    marginBottom: '2.5rem'
                }}>
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: '0.85rem',
                                padding: '0.4rem 1rem',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-light)',
                                background: 'rgba(255,255,255,0.02)',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const { projects } = resumeData;

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

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            <style>{`
                .project-image-container:hover .project-img-bg {
                    transform: scale(1.05);
                    filter: grayscale(0%) contrast(1);
                }
                .project-card:hover .project-frame {
                    transform: translate(${'10px, 10px'});
                    opacity: 0.6;
                    border-color: var(--secondary);
                }
                @media (max-width: 968px) {
                    .project-card {
                        flex-direction: column !important;
                        gap: 2rem !important;
                        margin-bottom: 6rem !important;
                    }
                    .project-card > div {
                        text-align: left !important;
                        width: 100%;
                    }
                    .project-card h3 span {
                        left: 0 !important;
                        right: auto !important;
                    }
                    .project-card p {
                        margin-left: 0 !important;
                    }
                    .project-card div[style*="justify-content"] {
                        justify-content: flex-start !important;
                    }
                    .project-frame {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
