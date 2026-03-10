import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    color: "#00d4ff",
    icon: "🖥️",
    skills: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔷" },
      { name: "React", level: 82, icon: "⚛️" },
    ],
  },
  {
    name: "Backend & Data",
    color: "#6c63ff",
    icon: "⚙️",
    skills: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "PHP / Laravel", level: 78, icon: "🐘" },
      { name: "SQL", level: 80, icon: "🗄️" },
      { name: "NoSQL", level: 72, icon: "📦" },
      { name: "REST APIs", level: 87, icon: "🔗" },
    ],
  },
  {
    name: "Automatización & DevOps",
    color: "#00ff88",
    icon: "🤖",
    skills: [
      { name: "N8N Avanzado", level: 88, icon: "⚡" },
      { name: "DevOps", level: 70, icon: "🚀" },
      { name: "Git / GitHub", level: 85, icon: "🐙" },
      { name: "Docker", level: 65, icon: "🐳" },
    ],
  },
];

function SkillBar({ skill, color, visible }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>{skill.icon}</span> {skill.name}
        </span>
        <span style={{ color, fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          style={{
            height: '100%', borderRadius: '10px',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
            color: '#6c63ff', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>
            HABILIDADES
          </span>
          <h2 className="section-title">
            Stack <span className="gradient-text-static">Tecnológico</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Tecnologías que domino para crear soluciones completas de principio a fin.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '0.8rem 1.8rem',
                borderRadius: '50px',
                border: activeCategory === i ? `1px solid ${cat.color}` : '1px solid rgba(255,255,255,0.08)',
                background: activeCategory === i ? `${cat.color}18` : 'transparent',
                color: activeCategory === i ? cat.color : 'var(--color-text-muted)',
                cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600,
                fontFamily: 'var(--font-primary)',
                transition: 'all 0.25s ease',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(13,13,26,0.7)',
              border: `1px solid ${skillCategories[activeCategory].color}22`,
              borderRadius: '28px',
              padding: '2.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: `0 0 40px ${skillCategories[activeCategory].color}0a`,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              {skillCategories[activeCategory].skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={skillCategories[activeCategory].color}
                  visible={inView}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech icons row — ALL skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
            TAMBIÉN TRABAJO CON
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Figma', 'Postman', 'Vite', 'Linux', 'Nginx', 'PostgreSQL', 'MongoDB'].map(tool => (
              <span key={tool} style={{
                padding: '0.4rem 1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '50px', fontSize: '0.8rem',
                color: 'var(--color-text-muted)', fontWeight: 500,
              }}>{tool}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
