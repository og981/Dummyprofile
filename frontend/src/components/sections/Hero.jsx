import {
  FileText,
  Mail,
  Code,
  ArrowDown,
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  LeetCodeIcon
} from '../common/SocialIcons';

export default function Hero({ data, onResumeClick }) {
  const { personalInfo } = data;

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon size={20} />;
      case 'LinkedIn':
        return <LinkedinIcon size={20} />;
      case 'Twitter':
        return <TwitterIcon size={20} />;
      case 'Email':
        return <Mail size={20} />;
      case 'LeetCode':
        return <LeetCodeIcon size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="portfolio-section hero-section">
      <div className="hero-background-glow" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Introduction & Actions */}
          <div className="hero-text-content">
            {/* Status Pill */}
            <div className="hero-status-badge">
              <span className="hero-status-dot" />
              <span className="hero-status-text">{personalInfo.statusBadge}</span>
              <Sparkles size={14} className="hero-sparkle-icon" />
            </div>

            {/* Headline & Name */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text hero-name">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-subtitle">
              {personalInfo.role}
            </h2>

            <p className="hero-subrole">
              {personalInfo.subRole} • {personalInfo.university}
            </p>

            {/* Intro Paragraph */}
            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Meta tags: Location & Graduation */}
            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <MapPin size={16} className="meta-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-meta-item">
                <GraduationCap size={16} className="meta-icon" />
                <span>{personalInfo.graduationYear}</span>
              </div>
            </div>

            {/* CTA Buttons: Resume & Projects */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary hero-resume-btn"
                onClick={onResumeClick}
                id="hero-resume-button"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-secondary hero-projects-btn"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="hero-social-block">
              <span className="social-label">Connect:</span>
              <div className="hero-social-list">
                {personalInfo.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                    aria-label={`Alex Morgan on ${social.platform}`}
                    title={`${social.platform}: ${social.username}`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Placeholder & Floating Cards */}
          <div className="hero-visual-content">
            <div className="profile-card-wrapper">
              {/* Outer decorative glowing ring */}
              <div className="profile-glow-ring" />

              <div className="profile-card">
                {/* Profile Image Placeholder */}
                <div className="profile-avatar-frame">
                  <div className="profile-avatar-placeholder">
                    <div className="avatar-initials">AM</div>
                    <div className="avatar-pattern-overlay" />
                    <div className="avatar-code-snippet">
                      <code>&lt;Alex /&gt;</code>
                    </div>
                  </div>
                </div>

                {/* Profile Card Header Info */}
                <div className="profile-card-info">
                  <h3 className="profile-card-name">{personalInfo.name}</h3>
                  <p className="profile-card-degree">B.Tech Computer Science</p>
                  <p className="profile-card-school">{personalInfo.university}</p>
                </div>

                {/* Mini Stat Chips */}
                <div className="profile-card-stats">
                  {personalInfo.stats.map((stat, index) => (
                    <div key={index} className="profile-stat-item">
                      <span className="stat-val">{stat.value}</span>
                      <span className="stat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-badge badge-top-left">
                <span className="badge-dot cyan" />
                <span>React & Node.js</span>
              </div>

              <div className="floating-badge badge-bottom-right">
                <span className="badge-dot indigo" />
                <span>PostgreSQL & SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
