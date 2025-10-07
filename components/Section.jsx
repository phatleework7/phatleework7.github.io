import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </motion.section>
  );
}
