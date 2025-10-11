import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="about" title="About Me">
        <p style={{ marginTop: 4 }}>
          Hello! I’m building things for the web. This minimal site now features a focused developer-friendly theme, subtle depth, and clear typography for improved readability.
        </p>
      </Section>
      <Section id="projects" title="Projects">
        <div className="projects-grid">
          <ProjectCard title="Landing Page Revamp" description="Modernized UI with better conversion and performance." href="#" />
          <ProjectCard title="Docs Portal" description="Developer-focused docs with fast search and clean typography." href="#" />
          <ProjectCard title="Dashboard" description="Real-time metrics with smooth motion and dark theme by default." href="#" />
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p>Feel free to reach out: your.email@example.com</p>
      </Section>
    </>
  );
}
