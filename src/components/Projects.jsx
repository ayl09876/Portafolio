import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portafolio Personal",
    description: "Mi portafolio profesional con animaciones avanzadas, diseño glassmorphism y experiencia de usuario premium. Construido con React, Framer Motion y TailwindCSS.",
    tags: ["React", "Framer Motion", "TailwindCSS", "Vite"],
    category: "Web",
    github: "https://github.com/ayl09876/Portafolio",
    demo: "#",
    gradient: "linear-gradient(135deg, #6c63ff, #00d4ff)",
    emoji: "🚀",
    status: "live",
  },
  // ─── Agrega aquí tus próximos proyectos ───────────────────────────────────
  // {
  //   id: 2,
  //   title: "Nombre del Proyecto",
  //   description: "Descripción del proyecto...",
  //   tags: ["Python", "N8N", "API"],
  //   category: "Automatización",
  //   github: "https://github.com/ayl09876/...",
  //   demo: "https://...",
  //   gradient: "linear-gradient(135deg, #ff6b6b, #ffd93d)",
  //   emoji: "⚡",
  //   status: "live",
  // },
];

const categories = ["Todos", "Web", "Automatización", "APIs", "Python"];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'rgba(13,13,26,0.8)',
        border: hovered ? '1px solid rgba(108,99,255,0.4)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)` : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 20px 60px rgba(108,99,255,0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Card header */}
      <div style={{
        height: '180px', position: 'relative',
        background: project.gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}>
          {project.emoji}
        </span>
        {project.status === 'live' && (
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            padding: '0.3rem 0.8rem',
            background: 'rgba(0,255,136,0.15)',
            border: '1px solid rgba(0,255,136,0.3)',
            borderRadius: '50px', fontSize: '0.7rem',
            color: '#00ff88', fontWeight: 600, display: 'flex', gap: '0.4rem', alignItems: 'center',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00ff88' }} />
            Live
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '0.2rem 0.7rem',
              background: 'rgba(108,99,255,0.1)',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: '50px', fontSize: '0.72rem', color: '#6c63ff', fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline"
              style={{ flex: 1, textAlign: 'center', padding: '0.55rem 0.8rem', fontSize: '0.82rem', justifyContent: 'center' }}>
              GitHub
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ flex: 1, textAlign: 'center', padding: '0.55rem 0.8rem', fontSize: '0.82rem', justifyContent: 'center' }}>
              <span>Demo →</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = filter === "Todos"
    ? projects
    : projects.filter(p => p.category === filter || p.tags.includes(filter));

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 2rem', background: 'rgba(13,13,26,0.5)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
            color: '#00d4ff', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>
            PROYECTOS
          </span>
          <h2 className="section-title">
            Mi <span className="gradient-text-static">Trabajo</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Proyectos reales que demuestran mis habilidades técnicas y capacidad de resolución de problemas.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.3rem',
                borderRadius: '50px',
                border: filter === cat ? '1px solid #6c63ff' : '1px solid rgba(255,255,255,0.08)',
                background: filter === cat ? 'rgba(108,99,255,0.2)' : 'transparent',
                color: filter === cat ? '#6c63ff' : 'var(--color-text-muted)',
                cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500,
                fontFamily: 'var(--font-primary)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>

          {/* "Add project" placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              border: '2px dashed rgba(108,99,255,0.2)',
              borderRadius: '24px', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              padding: '3rem 2rem', textAlign: 'center', minHeight: '300px',
              color: 'var(--color-text-muted)', cursor: 'default',
              background: 'rgba(108,99,255,0.02)',
            }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>➕</span>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>Más proyectos próximamente</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Agrega tus proyectos reales aquí</p>
          </motion.div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <a
            href="https://github.com/ayl09876"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '0.9rem' }}
          >
            Ver todos en GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
