import { useState, useEffect } from 'react';
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
import { INITIAL_PROJECTS } from './data/projectsData';

function App() {
  const projects = INITIAL_PROJECTS;
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState(null);

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


    </div>
  );
}

export default App;