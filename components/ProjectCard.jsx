import { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ title, description, href, tech }) {
  return (
    <a 
      className="project-card" 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={`View ${title} project`}
    >
      <div className="project-title">{title}</div>
      <div className="project-desc">{description}</div>
      {tech && <div className="project-tech">{tech}</div>}
      <div className="project-more">Learn more →</div>
    </a>
  );
});

export default ProjectCard;


