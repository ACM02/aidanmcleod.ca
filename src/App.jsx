import { useState, useEffect } from 'react';
import StarField from './components/StarField.jsx';
import { FaEnvelope, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import CSSACampaign from './components/CSSACampaign.jsx';
import Portfolio from './components/Portfolio.jsx';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${isDark
        ? 'bg-slate-900 text-slate-100'
        : 'bg-gradient-to-br from-slate-50 to-sky-50 text-slate-800'
        }`} style={{ position: 'relative' }}>
        <StarField isDark={isDark} />

        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 p-3 rounded-full transition-all hover:scale-110 ${isDark
            ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700'
            : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md'
            }`}
          style={{ zIndex: 100 }}
          aria-label="Toggle theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20" style={{ position: 'relative', zIndex: 1 }}>

          <Routes>
            <Route
              path="/"
              element={<Portfolio isDark={isDark} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`mt-24 border-t pt-8 pb-12 text-center text-sm space-y-4 ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
          }`} style={{ position: 'relative', zIndex: 1 }}>
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
              className={`inline-flex items-center gap-2 ${isDark ? 'hover:text-purple-400' : 'hover:text-sky-700'
                }`}
            >
              <FaLinkedin />
              linkedin.com/in/aidan-c-mcleod
            </a>
          </div>

          <p className={isDark ? 'text-slate-600' : 'text-slate-400'}>
            &copy; {new Date().getFullYear()} Aidan McLeod
          </p>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;