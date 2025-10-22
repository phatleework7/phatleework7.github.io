import Head from 'next/head';
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
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
      <Section id="about" title="About Me">
        <p style={{ marginTop: 4 }}>
          Xin chào! Tôi là <strong>Lê Thành Phát</strong>, một Full Stack Developer đam mê với công nghệ web hiện đại. 
          Tôi chuyên phát triển các ứng dụng web sử dụng React, Next.js, Node.js và các công nghệ mới nhất.
        </p>
        <p>
          Với kinh nghiệm trong việc xây dựng các ứng dụng web từ frontend đến backend, 
          tôi luôn tìm kiếm những giải pháp tối ưu và trải nghiệm người dùng tốt nhất.
        </p>
      </Section>
      <Section id="projects" title="Projects">
        <div className="projects-grid">
          <ProjectCard 
            title="InsAI" 
            description="AI-powered insurance claims processing system with machine learning integration." 
            href="#" 
            tech="React • Node.js • Python • TensorFlow"
          />
          <ProjectCard 
            title="Docs Portal" 
            description="Developer-focused documentation platform with fast search and clean typography." 
            href="#" 
            tech="Next.js • TypeScript • Algolia"
          />
          <ProjectCard 
            title="Dashboard Analytics" 
            description="Real-time business metrics dashboard with smooth animations and dark theme." 
            href="#" 
            tech="Vue.js • D3.js • WebSocket"
          />
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p>
          Hãy liên hệ với tôi để thảo luận về dự án của bạn:
        </p>
        <div className="contact-links">
          <a href="mailto:phatlee.work7@gmail.com" className="btn btn-primary">
            📧 Email Me
          </a>
          <a href="https://github.com/phatleework7" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            💻 GitHub
          </a>
          <a href="https://linkedin.com/in/phat-le" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            💼 LinkedIn
          </a>
        </div>
      </Section>
    </>
  );
}
