import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Section id="about" title="About Me">
        <p>Hello! I’m building things for the web. This is a simple Next.js site with light/dark mode.</p>
      </Section>
      <Section id="projects" title="Projects">
        <ul className="list">
          <li>Project One — brief description</li>
          <li>Project Two — brief description</li>
          <li>Project Three — brief description</li>
        </ul>
      </Section>
      <Section id="contact" title="Contact">
        <p>Feel free to reach out: your.email@example.com</p>
      </Section>
    </>
  );
}
