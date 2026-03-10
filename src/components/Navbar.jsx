import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(6,6,18,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(108,99,255,0.12)' : '1px solid transparent',
          transition: 'all 0.4s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: 'none' }}
          >
            <span style={{
              fontSize: '1.4rem', fontWeight: 800,
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', letterSpacing: '-0.02em',
              fontFamily: 'var(--font-primary)',
            }}>
              AY<span style={{ WebkitTextFillColor: 'rgba(255,255,255,0.5)' }}>.dev</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  style={{
                    color: activeLink === link.href ? '#6c63ff' : 'rgba(226,232,240,0.8)',
                    fontWeight: 500, fontSize: '0.9rem',
                    letterSpacing: '0.02em', textDecoration: 'none',
                    position: 'relative', transition: 'color 0.3s ease',
                    padding: '0.3rem 0',
                    fontFamily: 'var(--font-primary)',
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute', bottom: '-4px', left: 0, right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://github.com/ayl09876"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
          >
            <span>GitHub →</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '5px' }}
            id="hamburger-btn"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={menuOpen ? (i === 1 ? { opacity: 0, scaleX: 0 } : i === 0 ? { rotate: 45, y: 10 } : { rotate: -45, y: -10 }) : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }}
                style={{ display: 'block', width: '24px', height: '2px', borderRadius: '2px', background: 'var(--color-text)', transformOrigin: 'center' }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0,
              background: 'rgba(6,6,18,0.97)', backdropFilter: 'blur(30px)',
              borderBottom: '1px solid rgba(108,99,255,0.15)',
              zIndex: 999, padding: '1.5rem 2rem 2rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => { setActiveLink(link.href); setMenuOpen(false); }}
                style={{
                  display: 'block', padding: '1rem 0',
                  color: activeLink === link.href ? '#6c63ff' : 'var(--color-text)',
                  fontSize: '1.1rem', fontWeight: 600,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://github.com/ayl09876"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
            >
              <span>Ver GitHub</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
