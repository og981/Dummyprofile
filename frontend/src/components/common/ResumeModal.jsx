import {
  X,
  Download,
  Printer,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  Award
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { personalInfo, education, experience, skills, certifications } = data;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMock = () => {
    const resumeContent = `
==================================================
${personalInfo.name.toUpperCase()} - RESUME
${personalInfo.role} | ${personalInfo.university}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
==================================================

EDUCATION:
${education.map((e) => `• ${e.degree} - ${e.institution} (${e.duration}) | ${e.grade}`).join('\n')}

TECHNICAL SKILLS:
${skills.categories.map((c) => `• ${c.name}: ${c.items.map((i) => i.name).join(', ')}`).join('\n')}

EXPERIENCE:
${experience.map((exp) => `• ${exp.role} @ ${exp.organization} (${exp.period})\n  ${exp.responsibilities.join('\n  ')}`).join('\n\n')}

CERTIFICATIONS:
${certifications.map((c) => `• ${c.title} - ${c.issuer} (${c.issueDate})`).join('\n')}
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="modal-title-group">
            <FileText size={22} className="modal-icon" />
            <div>
              <h3 className="modal-title">{personalInfo.name}'s Resume</h3>
              <p className="modal-subtitle">Updated for 2026 Academic & Internship Cycles</p>
            </div>
          </div>

          <div className="modal-actions-group">
            <button
              type="button"
              className="btn btn-secondary modal-btn"
              onClick={handlePrint}
              title="Print Resume"
            >
              <Printer size={16} />
              <span>Print</span>
            </button>
            <button
              type="button"
              className="btn btn-primary modal-btn"
              onClick={handleDownloadMock}
              title="Download Resume"
            >
              <Download size={16} />
              <span>Download</span>
            </button>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="resume-modal-body">
          {/* Header Summary */}
          <div className="resume-sheet-header">
            <h1 className="resume-sheet-name">{personalInfo.name}</h1>
            <p className="resume-sheet-title">{personalInfo.role}</p>
            <div className="resume-sheet-contacts">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.university}</span>
            </div>
          </div>

          {/* Education */}
          <div className="resume-sheet-section">
            <h4 className="sheet-section-title">
              <GraduationCap size={16} />
              <span>Education</span>
            </h4>
            {education.map((edu) => (
              <div key={edu.id} className="sheet-item">
                <div className="sheet-item-header">
                  <strong>{edu.institution}</strong>
                  <span>{edu.duration}</span>
                </div>
                <div className="sheet-item-sub">
                  <span>{edu.degree} - {edu.fieldOfStudy}</span>
                  <span className="sheet-badge">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="resume-sheet-section">
            <h4 className="sheet-section-title">
              <Briefcase size={16} />
              <span>Experience</span>
            </h4>
            {experience.map((exp) => (
              <div key={exp.id} className="sheet-item">
                <div className="sheet-item-header">
                  <strong>{exp.role} — {exp.organization}</strong>
                  <span>{exp.period}</span>
                </div>
                <ul className="sheet-bullets">
                  {exp.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume-sheet-section">
            <h4 className="sheet-section-title">
              <Code2 size={16} />
              <span>Technical Skills</span>
            </h4>
            <div className="sheet-skills-list">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="sheet-skill-row">
                  <span className="sheet-cat-label">{cat.name}:</span>
                  <span className="sheet-cat-items">
                    {cat.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-sheet-section">
            <h4 className="sheet-section-title">
              <Award size={16} />
              <span>Certifications</span>
            </h4>
            <div className="sheet-certs-list">
              {certifications.map((c) => (
                <div key={c.id} className="sheet-cert-item">
                  <span><strong>{c.title}</strong> — {c.issuer} ({c.issueDate})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
