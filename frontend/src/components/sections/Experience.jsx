import SectionHeader from '../common/SectionHeader';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function Experience({ data }) {
  const { experience } = data;

  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="container">
        <SectionHeader
          badge="Experience"
          badgeIcon={Briefcase}
          titlePrefix="Internship &"
          highlightedWord="Work Experience"
          subtitle="Hands-on software development internships, academic teaching assistance, and campus engineering leadership."
        />

        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={item.id} className="timeline-item">
              {/* Timeline Connector Pillar */}
              <div className="timeline-node">
                <div className="node-dot">
                  <Briefcase size={16} />
                </div>
                {idx !== experience.length - 1 && <div className="node-line" />}
              </div>

              {/* Experience Card */}
              <div className="experience-card glass-card">
                <div className="exp-card-header">
                  <div>
                    <div className="exp-role-title-row">
                      <h3 className="exp-role">{item.role}</h3>
                      <span className="badge badge-indigo">{item.type}</span>
                    </div>
                    <div className="exp-org-row">
                      <Building size={16} className="exp-org-icon" />
                      <span className="exp-org-name">{item.organization}</span>
                    </div>
                  </div>

                  <div className="exp-meta-pills">
                    <div className="meta-pill">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="meta-pill">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{item.description}</p>

                {/* Responsibilities list */}
                <div className="exp-responsibilities">
                  <h4 className="resp-heading">Key Contributions & Outcomes:</h4>
                  <ul className="resp-list">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="resp-item">
                        <CheckCircle2 size={15} className="resp-check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills utilized */}
                {item.skillsUsed && item.skillsUsed.length > 0 && (
                  <div className="exp-skills-row">
                    <span className="skills-used-label">
                      <Tag size={13} />
                      Skills:
                    </span>
                    <div className="skills-used-tags">
                      {item.skillsUsed.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
