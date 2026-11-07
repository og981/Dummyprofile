import SectionHeader from '../common/SectionHeader';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle,
  Building2
} from 'lucide-react';

export default function Education({ data }) {
  const { education } = data;

  return (
    <section id="education" className="portfolio-section education-section">
      <div className="container">
        <SectionHeader
          badge="Education"
          badgeIcon={GraduationCap}
          titlePrefix="Academic"
          highlightedWord="Foundation"
          titleSuffix="& Coursework"
          subtitle="Formal education, academic performance, and theoretical computer science coursework."
        />

        <div className="education-list">
          {education.map((item) => (
            <div key={item.id} className="education-card glass-card">
              {/* Header row: Degree, Status, Duration */}
              <div className="education-card-header">
                <div className="edu-title-group">
                  <div className="edu-icon-wrapper">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="edu-badges-row">
                      <h3 className="edu-degree">{item.degree}</h3>
                      {item.isCurrent && (
                        <span className="badge badge-emerald">In Progress</span>
                      )}
                    </div>
                    <p className="edu-field">{item.fieldOfStudy}</p>
                  </div>
                </div>

                <div className="edu-meta-group">
                  <div className="edu-meta-badge">
                    <Calendar size={14} />
                    <span>{item.duration}</span>
                  </div>
                  <div className="edu-grade-badge">
                    <Award size={14} />
                    <span>{item.grade}</span>
                  </div>
                </div>
              </div>

              {/* Institution and Location */}
              <div className="edu-institution-row">
                <div className="institution-info">
                  <Building2 size={16} className="inst-icon" />
                  <span className="institution-name">{item.institution}</span>
                </div>
                <div className="institution-location">
                  <MapPin size={15} />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="edu-description">{item.description}</p>

              {/* Coursework Section */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="edu-coursework-block">
                  <div className="coursework-label">
                    <BookOpen size={15} />
                    <span>Key Coursework:</span>
                  </div>
                  <div className="coursework-chips">
                    {item.coursework.map((course, idx) => (
                      <span key={idx} className="course-chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic Details & Honors */}
              {item.academicDetails && item.academicDetails.length > 0 && (
                <div className="edu-honors-block">
                  <h4 className="honors-title">
                    <CheckCircle size={15} className="honor-icon" />
                    <span>Academic Highlights & Roles</span>
                  </h4>
                  <ul className="honors-list">
                    {item.academicDetails.map((detail, idx) => (
                      <li key={idx} className="honor-item">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
