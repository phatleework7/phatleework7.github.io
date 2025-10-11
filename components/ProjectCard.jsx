export default function ProjectCard({ title, description, href }) {
  return (
    <a className="project-card" href={href} target="_blank" rel="noreferrer">
      <div className="project-title">{title}</div>
      <div className="project-desc">{description}</div>
      <div className="project-more">Learn more →</div>
    </a>
  );
}


