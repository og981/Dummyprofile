import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Terminal
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

export default function Projects({ data }) {
  const { projects } = data;
  const [filter, setFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="container">
        <SectionHeader
          badge="Projects"
          badgeIcon={FolderGit2}
          titlePrefix="Engineered"
          highlightedWord="Projects"
          titleSuffix="& Builds"
          subtitle="Real-world student software projects showcasing full-stack application development, clean system architecture, and modern interfaces."
        />

        {/* Project Filter Buttons */}
        <div className="project-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' && <Sparkles size={14} />}
              <span>{cat}</span>
              <span className="filter-count">
                {cat === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Project Visual Banner Placeholder */}
              <div className="project-preview-banner">
                <div className="preview-terminal-bar">
                  <div className="terminal-dots">
                    <span className="tdot red" />
                    <span className="tdot yellow" />
                    <span className="tdot green" />
                  </div>
                  <span className="terminal-title">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jsx</span>
                </div>

                <div className="preview-body">
                  <div className="preview-icon-hub">
                    <Terminal size={32} className="preview-icon" />
                    <span className="preview-label">{project.imagePlaceholder}</span>
                  </div>
                  {project.featured && (
                    <span className="featured-ribbon">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="project-card-body">
                <div className="project-meta-row">
                  <span className="badge badge-indigo">{project.category}</span>
                  <span className="project-status-tag">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Key Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-highlights-box">
                    <h4 className="highlights-heading">Key Implementation Details:</h4>
                    <ul className="project-highlights-list">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="highlight-bullet">
                          <CheckCircle2 size={14} className="h-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links / CTAs */}
                <div className="project-actions-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-action-btn"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
