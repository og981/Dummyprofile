import SectionHeader from '../common/SectionHeader';
import {
  User,
  Layers,
  Database,
  Cpu,
  GitBranch,
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';

export default function About({ data }) {
  const { about } = data;

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={22} className="pillar-icon" />;
      case 'Database':
        return <Database size={22} className="pillar-icon" />;
      case 'Cpu':
        return <Cpu size={22} className="pillar-icon" />;
      case 'GitBranch':
        return <GitBranch size={22} className="pillar-icon" />;
      default:
        return <Terminal size={22} className="pillar-icon" />;
    }
  };

  return (
    <section id="about" className="portfolio-section about-section">
      <div className="container">
        <SectionHeader
          badge="About Me"
          badgeIcon={User}
          titlePrefix="Curiosity Driven,"
          highlightedWord="Disciplined Execution"
          subtitle="A short introduction to who I am, how I work, and what drives my passion for software engineering."
        />

        <div className="about-grid">
          {/* Main Story & Highlights */}
          <div className="about-main-card glass-card">
            <div className="about-headline-wrap">
              <Sparkles size={20} className="about-sparkle" />
              <h3 className="about-headline">{about.headline}</h3>
            </div>

            <div className="about-narrative">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="about-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Grid */}
            <div className="about-pillars-grid">
              {about.highlights.map((pillar, idx) => (
                <div key={idx} className="about-pillar-item">
                  <div className="pillar-icon-box">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div className="pillar-info">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="about-sidebar-card glass-card">
            <div className="sidebar-card-header">
              <h3 className="sidebar-card-title">Quick Student Facts</h3>
              <span className="sidebar-card-subtitle">Snapshot overview</span>
            </div>

            <div className="quick-facts-list">
              {about.quickFacts.map((fact, index) => (
                <div key={index} className="quick-fact-row">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* Academic Focus Pill */}
            <div className="academic-highlight-box">
              <div className="highlight-tag">
                <CheckCircle2 size={15} />
                <span>Career Focus</span>
              </div>
              <p className="highlight-desc">
                Actively seeking summer 2026 software engineering internships where I can contribute to production-grade applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
