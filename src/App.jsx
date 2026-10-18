import StarField from './components/StarField.jsx';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Portfolio from './components/Portfolio.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className={'min-h-screen transition-colors duration-300 bg-bg'} style={{ position: 'relative' }}>
        <StarField />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20" style={{ position: 'relative', zIndex: 1 }}>

          <Routes>
            <Route
              path="/"
              element={<Portfolio />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={'mt-24 border-t pt-8 pb-12 text-center text-sm space-y-4 border-secondary text-text-secondary'} style={{ position: 'relative', zIndex: 1 }}>
          <p className="max-w-xl mx-auto px-4">
            If you'd like to discuss my work or have any questions, feel free to reach out via email or LinkedIn.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <FaEnvelope />
              aidan.c.mcleod[at]gmail.com
            </span>
            <a
              href="https://www.linkedin.com/in/aidan-c-mcleod"
              target="_blank"
              rel="noopener noreferrer"
              className={'inline-flex items-center gap-2 hover:text-primary'}
            >
              <FaLinkedin />
              linkedin.com/in/aidan-c-mcleod
            </a>
          </div>

          <p className={'text-text-tertiary'}>
            &copy; {new Date().getFullYear()} Aidan McLeod
          </p>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;