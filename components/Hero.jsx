import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="hero-eyebrow">📍 Ho Chi Minh City, Vietnam</div>
          <h1 className="hero-title">
            I Build <span className="accent">Custom Website</span> Solutions
            <br />
            That Help Your <span className="accent">Business Grow</span>
          </h1>
          <p className="hero-subtitle">
            I help you increase conversion and performance in every possible way.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <a href="#contact" className="btn btn-secondary">Start a project</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="avatar-wrap">
            <Image
                src="/avatar.jpg"
                alt="Your portrait"
                width={600}
                height={600}
                priority
                style={{ objectFit: 'cover' }}
            />
        </div>
        </motion.div>
      </div>
    </section>
  );
}


