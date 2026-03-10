import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Custom cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }} className="font-sans scroll-smooth min-h-screen selection:bg-[#6c63ff33]">
      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2.5 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(4px)",
        }}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* Background ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-slow 12s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-slow 15s ease-in-out infinite',
          animationDelay: '-5s',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero setIsHovering={setIsHovering} />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
