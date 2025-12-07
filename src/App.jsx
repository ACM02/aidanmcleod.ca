import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard.jsx';
import StarField from './components/StarField.jsx';
import GravitySandbox from './components/GravitySandbox.jsx';
import Skills from './components/Skills.jsx';
import InterestsCard from './components/InterestsCard.jsx';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

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
    <div className={`min-h-screen transition-colors duration-300 ${isDark
      ? 'bg-slate-900 text-slate-100'
      : 'bg-gradient-to-br from-slate-50 to-sky-50 text-slate-800'
      }`} style={{ position: 'relative' }}>
      <StarField isDark={isDark} />

      {/* Theme toggle */}
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
        {/* Intro */}
        <section className="text-center">
          <h1 className={`text-7xl font-extrabold mb-6 tracking-wide ${isDark ? 'text-purple-400' : 'text-sky-700'
            }`}>
            Aidan McLeod
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
            I'm a Computer Science student at the University of Manitoba with a minor in Physics & Astronomy. I enjoy solving problems with code, from embedded systems to web applications. I'm particularly interested in understanding how things work at a fundamental level.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Imagine"
              description="A game about pushing a rock up a hill, inspired by the myth of Sisyphus and representing the struggles people face with mental health. Built in 40 hours for the 2025 CSSA Game Jam. Won 'Best Overall Game'."
              tech="Godot"
              links={[
                { url: "https://imagine.aidanmcleod.ca", icon: <FaExternalLinkAlt />, label: "Play game" },
                { url: "https://github.com/ACM02/CSSA-Game-Jam-2025", icon: <FaGithub />, label: "View on GitHub" }
              ]}
              isDark={isDark}
            />

            <ProjectCard
              title="GrassTouchers"
              description="A React chat room with WebSockets, real-time reactions, and AI-powered message classification. Built during .devHacks 2025 hackathon. Won 'Best Chaotic Evil Hack'."
              tech="React, FastAPI, Supabase, WebSockets"
              link="https://github.com/Atishaya7777/GrassTouchers"
              isDark={isDark}
            />

            <ProjectCard
              title="Self-Hosted Infrastructure"
              description={
                <>
                  A collection of dockerized services running on my home server, including file synchronization with{' '}
                  <a
                    href="https://syncthing.net/"
                    className={`underline ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-sky-600 hover:text-sky-800'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Syncthing
                  </a>, media servers, reverse proxy with custom domain, VPN, network-wide ad blocking, and this website! This project has taught me a lot about Docker, Linux permissions/administration, and SSL certificates.
                </>
              }
              tech="Docker, Linux, Nginx, React"
              isDark={isDark}
            />

            <ProjectCard
              title="XpBank"
              description="A Minecraft server plugin with 2,700+ downloads and a 4.7★ rating. I've maintained this project and provided support for server owners worldwide for over two years."
              tech="Java, Spigot API"
              link="https://www.spigotmc.org/resources/xpbank.101132/"
              isDark={isDark}
            />

            <ProjectCard
              title="Star Simulator"
              description="An astrophysics course project that models the internal structure of a star. Used the shooting method to solve differential equations for stellar structure including temperature, pressure, mass, luminosity, and energy generation. This project was challenging but rewarding as it pushed the boundaries of my physics and mathematical understanding."
              tech="Python, SciPy"
              link="https://github.com/ACM02/star-simulator"
              isDark={isDark}
            />

            <ProjectCard
              title="Sudoku Generator"
              description="A Java application that solves and generates Sudoku puzzles using recursive backtracking and includes basic difficulty grading. This was one of my earlist projects and helped introduce me to concepts like algroithmic complexity, recursion, and why a million abstractions aren't always helpful."
              tech="Java"
              link="https://github.com/ACM02/sudoku"
              isDark={isDark}
            />
          </div>
        </section>

        {/* Skills */}
        <section>
          <Skills isDark={isDark} />
        </section>

        {/* Interests */}
        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>
            Other Stuff I'm Into
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InterestsCard
              isDark={isDark}
              title={"Physics"}
              text={"I'm drawn to understanding how the universe works, which has led to a strong interest in physics. My physics minor has included courses on computational modeling and astrophysics, which have inspired several projects. I find it rewarding to apply computational methods to solve complex physics problems."}
            />
            <InterestsCard
              isDark={isDark}
              title={"Martial Arts & Jazz"}
              text={"I've trained in karate for over 15 years and played jazz for 7+ years. Karate has taught me discipline, focus, and patience, while jazz has provided a creative outlet and taught me to listen and adapt. Both have significantly influenced how I approach challenges and personal development."}
            />
          </div>
        </section>

        {/* Gravity Sandbox */}
        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>
            Gravity game
          </h2>
          <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            You made it to the end! There's no prize but here's a little gravity sandbox to play with.
            <br />
            Click to add bodies, press "Start" to see them interact gravitationally.
          </p>
          <GravitySandbox isDark={isDark} />
        </section>
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
  );
}

export default App;