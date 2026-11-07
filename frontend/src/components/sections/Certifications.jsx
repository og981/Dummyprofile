import SectionHeader from '../common/SectionHeader';
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Tag
} from 'lucide-react';

export default function Certifications({ data }) {
  const { certifications } = data;

  return (
    <section id="certifications" className="portfolio-section certifications-section">
      <div className="container">
        <SectionHeader
          badge="Certifications"
          badgeIcon={Award}
          titlePrefix="Credentials"
          highlightedWord="& Verified"
          titleSuffix="Certifications"
          subtitle="Industry-recognized credentials, specialized technical courses, and developer assessment certificates."
        />

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card glass-card">
              <div className="cert-top-row">
                <div className="cert-badge-icon">
                  <Award size={22} />
                </div>
                {cert.verified && (
                  <div className="cert-verified-pill">
                    <ShieldCheck size={14} />
                    <span>Verified Credential</span>
                  </div>
                )}
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                <div className="cert-meta-info">
                  <div className="cert-meta-item">
                    <Calendar size={14} className="meta-icon" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="cert-id-tag">
                      <span className="id-label">ID:</span>
                      <code>{cert.credentialId}</code>
                    </div>
                  )}
                </div>

                {/* Skills covered */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-skills-wrap">
                    <span className="cert-skills-label">
                      <Tag size={13} />
                      Covered Competencies:
                    </span>
                    <div className="cert-skills-tags">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="cert-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification link */}
                <div className="cert-footer">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline cert-verify-btn"
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={15} />
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
