import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Años de experiencia" },
  { value: 20, suffix: "+", label: "Proyectos completados" },
  { value: 7, suffix: "", label: "Tecnologías dominadas" },
  { value: 100, suffix: "%", label: "Compromiso con la calidad" },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span style={{
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
            color: '#6c63ff', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>
            SOBRE MÍ
          </span>
          <h2 className="section-title gradient-text-static">Quién Soy</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '280px', height: '280px' }}>
              {/* Spinning ring 1 */}
              <div style={{
                position: 'absolute', inset: '-16px',
                borderRadius: '50%',
                border: '2px solid transparent',
                borderTopColor: '#6c63ff',
                borderRightColor: '#00d4ff',
                animation: 'spin-slow 6s linear infinite',
              }} />
              {/* Spinning ring 2 */}
              <div style={{
                position: 'absolute', inset: '-28px',
                borderRadius: '50%',
                border: '1px solid transparent',
                borderBottomColor: '#00ff88',
                borderLeftColor: '#ff6b6b',
                animation: 'spin-reverse 9s linear infinite',
                opacity: 0.6,
              }} />
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: '-4px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(108,99,255,0.3) 0%, transparent 70%)',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }} />
              {/* Photo */}
              <div style={{
                width: '280px', height: '280px', borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(108,99,255,0.4)',
                position: 'relative', zIndex: 2,
                background: 'linear-gradient(135deg, #0d0d1a, #12122a)',
              }}>
                <img
                  src="/assets/alejandro.png"
                  alt="Alejandro Yavico López"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    // If photo fails, show initials
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:900;background:linear-gradient(135deg,#6c63ff,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">AY</div>';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', lineHeight: 1.2 }}>
              Alejandro Yavico López
              <br />
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>
                Diseñador & Programador Web
              </span>
            </h3>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.4rem', fontSize: '0.97rem' }}>
              Soy un desarrollador fullstack apasionado por construir soluciones digitales de alto impacto. 
              Me especializo en <strong style={{ color: '#00d4ff' }}>Python, JavaScript/TypeScript, APIs REST/GraphQL</strong> y 
              automatizaciones avanzadas con <strong style={{ color: '#6c63ff' }}>N8N</strong>.
            </p>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.97rem' }}>
              Tengo experiencia trabajando con bases de datos <strong style={{ color: '#00ff88' }}>SQL y NoSQL</strong>, 
              entornos <strong style={{ color: '#ff6b6b' }}>DevOps</strong> y herramientas de diseño modernas. 
              Busco siempre crear experiencias interactivas, escalables y con un código limpio y mantenible.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {['Python', 'TypeScript', 'N8N Avanzado', 'SQL/NoSQL', 'DevOps', 'React', 'Laravel', 'APIs REST'].map(tag => (
                <span key={tag} style={{
                  padding: '0.35rem 0.85rem',
                  background: 'rgba(108,99,255,0.1)',
                  border: '1px solid rgba(108,99,255,0.25)',
                  borderRadius: '50px', fontSize: '0.78rem',
                  color: '#6c63ff', fontWeight: 500,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/ayl09876" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>GitHub Profile →</span>
              </a>
              <a href="#contact" className="btn-outline">Hablemos</a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem', marginTop: '5rem',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              style={{
                textAlign: 'center', padding: '2rem 1.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{
                fontSize: '2.8rem', fontWeight: 900, lineHeight: 1,
                background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
