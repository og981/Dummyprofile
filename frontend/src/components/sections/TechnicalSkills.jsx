import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import {
  Code2,
  Terminal,
  Layout,
  Database,
  Wrench,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function TechnicalSkills({ data }) {
  const { skills } = data;
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={18} />;
      case 'Layout':
        return <Layout size={18} />;
      case 'Database':
        return <Database size={18} />;
      case 'Wrench':
        return <Wrench size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="container">
        <SectionHeader
          badge="Technical Skills"
          badgeIcon={Code2}
          titlePrefix="Technologies"
          highlightedWord="& Tooling"
          subtitle="A comprehensive overview of programming languages, libraries, databases, and development workflows I utilize."
        />

        {/* Category Tabs */}
        <div className="skills-tab-bar">
          <button
            type="button"
            className={`skills-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Sparkles size={15} />
            <span>All Technologies</span>
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card glass-card">
              <div className="category-card-header">
                <div className="cat-icon-frame">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="category-title">{category.name}</h3>
                  <span className="category-count">{category.items.length} items</span>
                </div>
              </div>

              <div className="skills-items-grid">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-name-row">
                      <div className="skill-name-group">
                        <CheckCircle size={14} className="skill-bullet" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className={`skill-level-pill level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.proficiency}%` }}
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        title={`${skill.proficiency}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
