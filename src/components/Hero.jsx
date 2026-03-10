import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Desarrollador Web Full Stack",
  "Python Developer",
  "TypeScript & Node.js",
  "Automatización con N8N",
  "Diseñador UI/UX",
  "APIs & DevOps",
];

function Typewriter({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const speed = deleting ? 40 : 80;

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!deleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (deleting && displayed.length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      <span style={{ color: '#00d4ff' }}>{displayed}</span>
      <span className="cursor-blink" />
    </span>
  );
}

// Floating particles
function Particles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            borderRadius: '50%',
            background: i % 3 === 0 ? '#6c63ff' : i % 3 === 1 ? '#00d4ff' : '#00ff88',
            left: Math.random() * 100 + '%',
            opacity: 0.4,
            animation: `particle-float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `-${Math.random() * 15}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero({ setIsHovering }) {
  return (
    <section
      id="hero"
      onMouseEnter={() => setIsHovering(false)}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Particles />

      {/* Grid dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(108,99,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.2rem',
            background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.3)',
            borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
            color: '#6c63ff', marginBottom: '2rem',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', animation: 'pulse-glow 2s infinite' }} />
          Disponible para nuevas oportunidades
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900, lineHeight: 1.05,
            marginBottom: '1rem', letterSpacing: '-0.03em',
          }}
        >
          Diseño <span className="gradient-text">&</span> <br />
          <span style={{ fontSize: 'clamp(1.8rem, 5vw, 3.8rem)', color: 'rgba(226,232,240,0.9)' }}>
            Código de <span style={{ color: '#00d4ff' }}>Alto Impacto</span>
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
            fontWeight: 600, minHeight: '3rem',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-secondary)',
          }}
        >
          <Typewriter texts={ROLES} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: '1.1rem', color: 'var(--color-text-muted)',
            maxWidth: '620px', margin: '0 auto 3rem',
            lineHeight: 1.8,
          }}
        >
          Especialista en desarrollo fullstack, automatización inteligente 
          y soluciones escalables. Experto en N8N, Python y ecosistemas DevOps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a 
            href="#projects" 
            className="btn-primary"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>🚀 Ver Proyectos</span>
          </a>
          <a 
            href="/assets/Alejandro_Yavico_CV.pdf" 
            className="btn-outline"
            target="_blank"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            📄 Descargar CV
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ marginTop: '4.5rem', display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {['Python', 'JavaScript', 'TypeScript', 'N8N Avanzado', 'SQL/NoSQL', 'DevOps', 'Vite'].map((tech) => (
            <span key={tech} style={{
              padding: '0.45rem 1.1rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: 600,
              color: 'var(--color-text-muted)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'var(--color-text-muted)'; }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '1.5px', height: '40px', background: 'linear-gradient(to bottom, #6c63ff, transparent)', borderRadius: '2px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
