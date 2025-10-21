import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  const onMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const x = (px / rect.width) * 100;
    const y = (py / rect.height) * 100;
    // subtle tilt values derived from offset center
    const dx = x - 50;
    const dy = y - 50;
    const tiltX = Math.max(-2.5, Math.min(2.5, (dy / 50) * -3));
    const tiltY = Math.max(-2.5, Math.min(2.5, (dx / 50) * 3));
    target.style.setProperty('--mx', x + '%');
    target.style.setProperty('--my', y + '%');
    target.style.setProperty('--rx', tiltX + 'deg');
    target.style.setProperty('--ry', tiltY + 'deg');
  };

  const onLeave = (e) => {
    const target = e.currentTarget;
    target.style.setProperty('--rx', '0deg');
    target.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </motion.section>
  );
}
