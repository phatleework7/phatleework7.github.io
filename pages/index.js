import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Section id="about" title="About Me">
        <p style={{ marginTop: 4 }}>
          Hello! I’m building things for the web. This minimal site now features a focused developer-friendly theme, subtle depth, and clear typography for improved readability.
        </p>
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
