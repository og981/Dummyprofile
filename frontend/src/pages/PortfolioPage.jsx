import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ResumeModal from '../components/common/ResumeModal';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import TechnicalSkills from '../components/sections/TechnicalSkills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import { portfolioData } from '../data/portfolioData';
import '../styles/Sections.css';

export default function PortfolioPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // In the future with PostgreSQL and Express:
  // const [data, setData] = useState(portfolioData);
  // useEffect(() => {
  //   fetch('/api/portfolio')
  //     .then(res => res.json())
  //     .then(apiData => setData(apiData))
  //     .catch(err => console.log('Using local fallback data', err));
  // }, []);
  const data = portfolioData;

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={handleOpenResume} />

      <main className="main-content">
        {/* Section 1: Home */}
        <Hero data={data} onResumeClick={handleOpenResume} />

        <div className="section-divider" />

        {/* Section 2: About Me */}
        <About data={data} />

        <div className="section-divider" />

        {/* Section 3: Education */}
        <Education data={data} />

        <div className="section-divider" />

        {/* Section 4: Technical Skills */}
        <TechnicalSkills data={data} />

        <div className="section-divider" />

        {/* Section 5: Projects */}
        <Projects data={data} />

        <div className="section-divider" />

        {/* Section 6: Experience */}
        <Experience data={data} />

        <div className="section-divider" />

        {/* Section 7: Certifications */}
        <Certifications data={data} />
      </main>

      {/* Footer */}
      <Footer personalInfo={data.personalInfo} />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
        data={data}
      />
    </div>
  );
}
