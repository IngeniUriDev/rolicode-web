import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectsSection from './components/ProjectsSection';
import InteractiveDemos from './components/InteractiveDemos';
import QuoteEstimator from './components/QuoteEstimator';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectGeneratorModal from './components/ProjectGeneratorModal';
import { INITIAL_PROJECTS } from './data/projectsData';

function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('rolicode_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROJECTS;
  });

  const [hasCustomProjects, setHasCustomProjects] = useState(() => {
    try {
      return !!localStorage.getItem('rolicode_projects');
    } catch {
      return false;
    }
  });

  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState(null);
  const [isGeneratorModalOpen, setIsGeneratorModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState(null);

  // Sync with local storage
  const handleAddProject = (newProject) => {
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      try {
        localStorage.setItem('rolicode_projects', JSON.stringify(updated));
      } catch {
        // Ignore storage error
      }
      return updated;
    });
    setHasCustomProjects(true);
  };

  const handleResetProjects = () => {
    try {
      localStorage.removeItem('rolicode_projects');
    } catch {
      // Ignore
    }
    setProjects(INITIAL_PROJECTS);
    setHasCustomProjects(false);
  };

  const handleSelectServiceForQuote = (serviceId) => {
    setSelectedServiceCategory(serviceId);
  };

  return (
    <div className="App min-vh-100 d-flex flex-column bg-dark text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Projects / Portfolio Section */}
        <ProjectsSection
          projects={projects}
          onOpenProjectDetail={(proj) => setSelectedProjectForDetail(proj)}
          onOpenGeneratorModal={() => setIsGeneratorModalOpen(true)}
          onResetProjects={handleResetProjects}
          hasCustomProjects={hasCustomProjects}
        />

        {/* Interactive Live Demos Section */}
        <InteractiveDemos />

        {/* Real-time Project Quote Estimator */}
        <QuoteEstimator selectedServiceCategory={selectedServiceCategory} />

        {/* About & Methodology Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProjectForDetail && (
        <ProjectDetailModal
          project={selectedProjectForDetail}
          onClose={() => setSelectedProjectForDetail(null)}
        />
      )}

      {/* Project Generator Modal */}
      {isGeneratorModalOpen && (
        <ProjectGeneratorModal
          onClose={() => setIsGeneratorModalOpen(false)}
          onAddProject={handleAddProject}
        />
      )}
    </div>
  );
}

export default App;