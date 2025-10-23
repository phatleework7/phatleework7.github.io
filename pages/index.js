import Head from 'next/head';
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <Head>
        <title>Lê Thành Phát - Full Stack Developer</title>
        <meta name="description" content="Personal website of Lê Thành Phát, a passionate full-stack developer specializing in modern web technologies and custom website solutions." />
        <meta name="keywords" content="Lê Thành Phát, developer, full-stack, React, Next.js, JavaScript, TypeScript, web development" />
        <meta name="author" content="Lê Thành Phát" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martinle.me/" />
        <meta property="og:title" content="Lê Thành Phát - Full Stack Developer" />
        <meta property="og:description" content="Personal website of Lê Thành Phát, a passionate full-stack developer specializing in modern web technologies." />
        <meta property="og:image" content="https://martinle.me/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://martinle.me/" />
        <meta property="twitter:title" content="Lê Thành Phát - Full Stack Developer" />
        <meta property="twitter:description" content="Personal website of Lê Thành Phát, a passionate full-stack developer specializing in modern web technologies." />
        <meta property="twitter:image" content="https://martinle.me/og-image.jpg" />

        <link rel="canonical" href="https://martinle.me/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <Section id="about" title={t.about.title}>
        <p style={{ marginTop: 4 }} dangerouslySetInnerHTML={{ __html: t.about.content.intro }} />
        <p>{t.about.content.experience}</p>
      </Section>
      <Section id="projects" title={t.projects.title}>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title} 
              description={project.description} 
              href="#" 
              tech={project.tech}
            />
          ))}
        </div>
      </Section>
      <Section id="contact" title={t.contact.title}>
        <p>{t.contact.intro}</p>
        <div className="contact-links">
          <a href="mailto:phatlee.work7@gmail.com" className="btn btn-primary">
            {t.contact.buttons.email}
          </a>
          <a href="https://github.com/phatleework7" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.contact.buttons.github}
          </a>
          <a href="https://linkedin.com/in/phat-le" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.contact.buttons.linkedin}
          </a>
        </div>
      </Section>
    </>
  );
}
