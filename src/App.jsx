import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LiveTrackingDemo from './components/LiveTrackingDemo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <LiveTrackingDemo />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
