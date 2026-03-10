import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: "🐙", url: "https://github.com/ayl09876", color: "#6c63ff" },
  { name: "LinkedIn", icon: "💼", url: "#", color: "#00d4ff" },
  { name: "Email", icon: "✉️", url: "mailto:alejandro@email.com", color: "#00ff88" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es requerido";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.message.trim()) e.message = "El mensaje es requerido";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSending(true);
    // Simulate send (replace with EmailJS or backend call)
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: undefined }));
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '0.9rem 1.2rem',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ff6b6b' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px', color: 'var(--color-text)',
    fontSize: '0.9rem', outline: 'none',
    fontFamily: 'var(--font-primary)',
    transition: 'border-color 0.2s ease',
  });

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 2rem', background: 'rgba(13,13,26,0.5)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
            color: '#00ff88', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>
            CONTACTO
          </span>
          <h2 className="section-title">
            Hablemos <span className="gradient-text-static">Juntos</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            ¿Tienes un proyecto? ¿Una oportunidad laboral? Escríbeme.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
              Disponible para oportunidades
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.92rem' }}>
              Actualmente abierto a roles como desarrollador fullstack, especialista en automatización N8N, 
              o cualquier posición donde pueda aplicar mi stack técnico y aportar valor real al equipo.
            </p>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.7rem 1.4rem',
              background: 'rgba(0,255,136,0.08)',
              border: '1px solid rgba(0,255,136,0.2)',
              borderRadius: '50px', marginBottom: '2.5rem',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              <span style={{ color: '#00ff88', fontWeight: 600, fontSize: '0.85rem' }}>Listo para empezar</span>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.2rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px', textDecoration: 'none',
                    color: 'var(--color-text)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = link.color + '44';
                    e.currentTarget.style.background = link.color + '0a';
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{link.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{link.name}</span>
                  <span style={{ marginLeft: 'auto', color: link.color, fontSize: '0.8rem' }}>→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  height: '100%', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                  padding: '3rem',
                  background: 'rgba(0,255,136,0.05)',
                  border: '1px solid rgba(0,255,136,0.15)',
                  borderRadius: '24px',
                }}
              >
                <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>¡Mensaje enviado!</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  Te responderé lo antes posible. ¡Gracias por contactarme!
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline"
                  style={{ marginTop: '2rem', fontSize: '0.85rem' }}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex', flexDirection: 'column', gap: '1.2rem',
                  background: 'rgba(13,13,26,0.7)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px', padding: '2.5rem',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      style={inputStyle('name')}
                      onFocus={e => e.target.style.borderColor = '#6c63ff'}
                      onBlur={e => e.target.style.borderColor = errors.name ? '#ff6b6b' : 'rgba(255,255,255,0.08)'}
                    />
                    {errors.name && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Tu email"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      style={inputStyle('email')}
                      onFocus={e => e.target.style.borderColor = '#6c63ff'}
                      onBlur={e => e.target.style.borderColor = errors.email ? '#ff6b6b' : 'rgba(255,255,255,0.08)'}
                    />
                    {errors.email && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.email}</p>}
                  </div>
                </div>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Asunto (ej: Oportunidad laboral / Proyecto freelancer)"
                  value={form.subject}
                  onChange={e => handleChange('subject', e.target.value)}
                  style={inputStyle('subject')}
                  onFocus={e => e.target.style.borderColor = '#6c63ff'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />

                <div>
                  <textarea
                    id="contact-message"
                    placeholder="Cuéntame sobre tu proyecto o propuesta..."
                    rows={5}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ff6b6b' : 'rgba(255,255,255,0.08)'}
                  />
                  {errors.message && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  <span>{sending ? "Enviando..." : "Enviar Mensaje 🚀"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
