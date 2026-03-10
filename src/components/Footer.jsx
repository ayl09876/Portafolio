import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", icon: "🐙", url: "https://github.com/ayl09876" },
  { name: "LinkedIn", icon: "💼", url: "#" },
  { name: "Email", icon: "✉️", url: "mailto:alejandro@email.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        padding: '4rem 2rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(6,6,18,0.8)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{
              fontSize: '1.6rem', fontWeight: 900,
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', marginBottom: '0.5rem',
            }}>
              AY.dev
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', maxWidth: '280px', lineHeight: 1.6 }}>
              Diseñador y desarrollador web apasionado por crear experiencias digitales de alto impacto.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Inicio', href: '#hero' },
              { label: 'Sobre Mí', href: '#about' },
              { label: 'Proyectos', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contacto', href: '#contact' },
            ].map(link => (
              <a key={link.href} href={link.href} style={{
                color: 'var(--color-text-muted)', fontSize: '0.85rem',
                fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#6c63ff'}
                onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socials.map(s => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{
                  width: '42px', height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                title={s.name}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
            © {year} Alejandro Yavico López · Hecho con React & ❤️
          </p>
          <motion.a
            href="#hero"
            whileHover={{ y: -3 }}
            style={{
              padding: '0.5rem 1.2rem',
              background: 'rgba(108,99,255,0.1)',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: '50px', color: '#6c63ff',
              fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
            }}
          >
            ↑ Volver arriba
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
