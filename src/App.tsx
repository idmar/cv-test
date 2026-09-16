import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ActionBar from './components/ActionBar';
import Toast from './components/Toast';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import { exportToPDF, printCV } from './utils/export';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Check system preference on mount
  useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  });

  // Handle scroll events
  useState(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportPDF = async () => {
    try {
      await exportToPDF();
      setToast({ message: 'PDF exported successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to export PDF', type: 'error' });
    }
  };

  const handlePrint = () => {
    printCV();
    setToast({ message: 'Print dialog opened', type: 'info' });
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navigation isDark={isDark} onToggleDarkMode={toggleDarkMode} />
        <ActionBar onExportPDF={handleExportPDF} onPrint={handlePrint} />
        <Header />
        <main className="container-cv">
          <Experience />
          <Skills />
          <Projects />
          <Education />
        </main>
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}

        {/* Toast Notification */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
