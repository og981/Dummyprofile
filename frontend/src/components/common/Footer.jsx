import {
  Code2,
  Mail,
  ArrowUp,
  Database,
  Server
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  LeetCodeIcon
} from './SocialIcons';
import '../../styles/Footer.css';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon size={18} />;
      case 'LinkedIn':
        return <LinkedinIcon size={18} />;
      case 'Twitter':
        return <TwitterIcon size={18} />;
      case 'Email':
        return <Mail size={18} />;
      case 'LeetCode':
        return <LeetCodeIcon size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-top-gradient" />
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand & Bio */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <Code2 size={20} />
              </div>
              <span className="footer-brand-name">
                {personalInfo.preferredName || personalInfo.name}
                <span className="brand-accent">.dev</span>
              </span>
            </div>
            <p className="footer-bio">
              {personalInfo.role} at {personalInfo.university}. Passionate about clean code, scalable web applications, and database engineering.
            </p>
            <div className="footer-status-pill">
              <span className="status-indicator" />
              <span>{personalInfo.statusBadge}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
          </div>

          {/* Connect & Tech Stack Note */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-row">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={link.platform}
                  title={`${link.platform}: ${link.username}`}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>

            <div className="footer-cms-note">
              <div className="cms-note-header">
                <Database size={14} className="cms-icon" />
                <Server size={14} className="cms-icon" />
                <span>Architecture Ready</span>
              </div>
              <p>Designed for future Express.js REST API & PostgreSQL schema integration.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Modern CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
