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
          <div className="hero-socials" aria-label="Social links">
            <a className="icon-btn" href="https://github.com/phatleework7" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <a className="icon-btn" href="mailto:your.email@example.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


