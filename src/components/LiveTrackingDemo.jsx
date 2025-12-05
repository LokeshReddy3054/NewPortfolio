import { motion } from 'framer-motion';
import { FaServer, FaSatellite, FaMotorcycle } from 'react-icons/fa';

const LiveTrackingDemo = () => {
    // Total Animation Cycle: 6 seconds
    // 0.0 - 2.0s: Agent moves to new position
    // 2.0 - 3.0s: Signal travels Agent -> Server
    // 3.0 - 3.5s: Server processes
    // 3.5 - 4.5s: Signal travels Server -> Mobile
    // 4.5 - 5.5s: Mobile Map updates

    return (
        <section className="section" style={{ background: '#050505', overflow: 'hidden', padding: '8rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 className="section-title" style={{ color: 'var(--primary)' }}>Live Delivery Tracking System</h2>
                    <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto', fontFamily: "'Noto Serif JP', serif" }}>
                        Visualizing the sub-second data journey from road to device
                    </p>
                </motion.div>

                <div className="demo-stage-wrapper">
                    <div className="demo-stage">
                        {/* Background Grid Map Effect */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            opacity: 0.5
                        }} />

                        <div className="stage-content">

                            {/* 1. Satellite (Static Context) */}
                            <div style={{ position: 'absolute', top: '5%', left: '5%', opacity: 0.5 }}>
                                <FaSatellite size={30} color="var(--text-gray)" />
                            </div>

                            {/* 2. Delivery Agent */}
                            <motion.div
                                style={{ position: 'absolute', zIndex: 10 }}
                                animate={{
                                    left: ['10%', '30%', '30%', '10%'],
                                    top: ['70%', '70%', '70%', '70%']
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    times: [0, 0.3, 0.8, 1],
                                    ease: "easeInOut"
                                }}
                            >
                                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className="agent-icon-box">
                                        <FaMotorcycle size={24} color="#fff" />
                                    </div>
                                    <div className="agent-label">
                                        Delivery Partner
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3. Server (The Hub) */}
                            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 5, textAlign: 'center' }}>
                                <motion.div
                                    className="server-icon-box"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        borderColor: ['#D4AF37', '#fff', '#D4AF37'],
                                        boxShadow: ['0 0 0px rgba(212, 175, 55, 0)', '0 0 40px rgba(212, 175, 55, 0.6)', '0 0 0px rgba(212, 175, 55, 0)']
                                    }}
                                    transition={{ duration: 0.5, delay: 3.0, repeat: Infinity, repeatDelay: 5.5 }}
                                >
                                    <FaServer size={40} color="var(--secondary)" />
                                </motion.div>
                                <div style={{ marginTop: '1rem', color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.9rem' }}>WebSocket Server</div>
                            </div>

                            {/* 4. Customer App (The Destination) */}
                            <div style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
                                <motion.div
                                    className="app-device"
                                    animate={{
                                        borderColor: ['#333', '#BC002D', '#333']
                                    }}
                                    transition={{ duration: 0.5, delay: 4.5, repeat: Infinity, repeatDelay: 5.5 }}
                                >
                                    {/* App Header */}
                                    <div style={{ height: '30px', background: '#222', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontSize: '0.6rem', color: '#666' }}>Order #1234</span>
                                    </div>

                                    {/* App Map Area */}
                                    <div style={{ width: '100%', height: '100%', background: '#1a1a1a', position: 'relative' }}>
                                        {/* Map Roads */}
                                        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3 }} viewBox="0 0 140 230" preserveAspectRatio="none">
                                            <path d="M 20 180 L 70 180 L 70 100 L 120 100" stroke="#444" strokeWidth="8" fill="none" />
                                        </svg>

                                        {/* User Location */}
                                        <div style={{ position: 'absolute', top: '90px', right: '10px', color: '#fff' }}>
                                            <div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }}></div>
                                        </div>

                                        {/* Moving Delivery Dot on Map */}
                                        <motion.div
                                            style={{ position: 'absolute', width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', border: '2px solid #fff', zIndex: 10 }}
                                            animate={{
                                                left: ['20px', '70px', '70px', '20px'],
                                                top: ['180px', '180px', '100px', '180px']
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                times: [0, 0.75, 0.9, 1],
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </div>
                                </motion.div>
                                <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Customer App</div>
                            </div>

                            {/* SVG Layer for Data Paths */}
                            <svg
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
                                viewBox="0 0 900 600"
                                preserveAspectRatio="xMidYMid meet"
                            >

                                {/* Path 1: Agent (approx 30% left, 70% top) -> Server (50% left, 30% top) */}
                                {/* 30% of 900 = 270, 70% of 600 = 420. But code used 300, 420. Let's stick to existing paths which match visually. */}
                                <path id="agent-to-server" d="M 300 420 L 450 180" stroke="none" />

                                {/* Path 2: Server (50% left, 30% top) -> App (approx 85% left, 85% top) */}
                                <path id="server-to-app" d="M 450 180 L 760 450" stroke="none" />

                                {/* Signal 1: Agent -> Server */}
                                <motion.circle r="3" fill="#fff">
                                    <animateMotion
                                        dur="6s"
                                        begin="0s"
                                        repeatCount="indefinite"
                                        path="M 300 420 L 450 180"
                                        keyPoints="0;0;1;1"
                                        keyTimes="0;0.33;0.5;1"
                                        calcMode="linear"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.33;0.49;0.5"
                                        dur="6s"
                                        repeatCount="indefinite"
                                    />
                                </motion.circle>

                                {/* Signal 2: Server -> App */}
                                <motion.circle r="3" fill="#D4AF37">
                                    <animateMotion
                                        dur="6s"
                                        begin="0s"
                                        repeatCount="indefinite"
                                        path="M 450 180 L 760 450"
                                        keyPoints="0;0;1;1"
                                        keyTimes="0;0.58;0.75;1"
                                        calcMode="linear"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.58;0.74;0.75"
                                        dur="6s"
                                        repeatCount="indefinite"
                                    />
                                </motion.circle>

                                {/* Connection Lines (Faint) */}
                                <line x1="300" y1="420" x2="450" y2="180" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                                <line x1="450" y1="180" x2="760" y2="450" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .demo-stage-wrapper {
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .demo-stage {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 3/2; /* Replaces fixed height 600px */
                    background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 70%);
                    border-radius: 30px;
                    border: 1px solid var(--glass-border);
                    overflow: hidden;
                }
                .stage-content {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .agent-icon-box {
                    background: var(--primary);
                    padding: 12px;
                    border-radius: 50%;
                    box-shadow: 0 0 20px rgba(188, 0, 45, 0.6);
                    z-index: 2;
                }
                .agent-label {
                    margin-top: 8px;
                    background: rgba(0,0,0,0.8);
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    border: 1px solid var(--primary);
                    white-space: nowrap;
                }
                .server-icon-box {
                    background: #111;
                    padding: 2rem;
                    border-radius: 50%;
                    border: 2px solid var(--secondary);
                    position: relative;
                    z-index: 2;
                }
                .app-device {
                    width: 140px;
                    height: 260px;
                    border: 6px solid #333;
                    border-radius: 24px;
                    background: #000;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                
                @media (max-width: 768px) {
                    .demo-stage {
                        aspect-ratio: 4/5; /* Taller on mobile to fit content vertically if needed, but 3/2 might be too squat */
                    }
                    .agent-icon-box { padding: 8px; }
                    .agent-icon-box svg { width: 16px; height: 16px; }
                    .server-icon-box { padding: 1rem; }
                    .server-icon-box svg { width: 24px; height: 24px; }
                    .app-device {
                        width: 100px;
                        height: 180px;
                        border-width: 4px;
                    } 
                    /* We might need to adjust positions if they overlap too much on small screens */
                }
            `}</style>
        </section>
    );
};

export default LiveTrackingDemo;
