import ProjectCard from "./ProjectCard";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 text-slate-800 font-sans px-6 py-12 text-base sm:text-lg lg:text-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Intro Section */}
        <section className="text-center">
          <h1 className="text-7xl font-extrabold mb-6 text-sky-700 tracking-wide">
            Aidan McLeod
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I am a student at the University of Mantioba pursuing an honours degree in Computer Science minoring in Physics & Astronomy.
            I enjoy solving real-world problems with code, from web to embedded systems and whatever else I happen to come across.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-sky-600 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="GrassTouchers"
              description={
                <>
                  React chat room with WebSockets and FastAPI backend built during{' '}
                  <a
                    href="https://devhacks-2025.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 underline"
                  >
                    .devHacks 2025
                  </a>
                  . Won 'Best Chaotic Evil Hack'.
                </>
              }
              tech="React, FastAPI, Supabase, Git/GitHub"
              githubLink="https://github.com/Atishaya7777/GrassTouchers"
            />
            <ProjectCard
              title="XpBank"
              description="Minecraft server plugin with 2,700+ downloads and 4.7★ rating, built using Java and Spigot API."
              tech="Java, Spigot API, Git/GitHub"
              githubLink="https://www.spigotmc.org/resources/xpbank.101132/"
            />
            <ProjectCard
              title="Sudoku Generator"
              description="Java app that solves and generates Sudoku puzzles using recursive backtracking and difficulty grading."
              tech="Java, Git"
              githubLink="https://github.com/ACM02/sudoku"
            />
            <ProjectCard
              title="Star Simulator"
              description="An astrophysics course project that simulates the internal structure of a star."
              tech="Python, Scipy"
              githubLink="https://github.com/ACM02/star-simulator"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-sky-600 mb-6">Skills</h2>
          <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-6 text-slate-600 space-y-4">
            <div>
              <p className="font-semibold text-slate-800">Languages</p>
              <p>C/C++, Ruby, JavaScript, Java, Python, C#, SQL</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Frameworks & Libraries</p>
              <p>ESP-IDF, React, React Native, Ruby on Rails, Arduino, Spigot API</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Software & Tools</p>
              <p>Docker, Git, GitHub, PlatformIO</p>
            </div>
          </div>
        </section>

        {/* Personal / Hobbies Section */}
        <section>
          <h2 className="text-3xl font-bold text-sky-600 mb-6">Other Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-6 text-slate-600">
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Physics</h3>
              <p>
                I am fascinated with learning more and more about the world around me which has inspired a love of learning physics.
                As a part of my physics minor I've taken courses regarding computational modelling and astrophysics which have led me to create several projects modelling physical interactions and solving tough problems.
              </p>
            </div>

            <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-6 text-slate-600">
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Self-Hosting</h3>
              <p>
                Learning about and running services (like this website!) has been another passion of mine.
                I've applied my skills and some previous knowledge to use Docker and Linux to host a variety of services, including things like file and media servers, {" "}
                <a
                  href="https://www.home-assistant.io/"
                  className="text-sky-600 hover:text-sky-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HomeAssistant
                </a>
                ,{" "}
                <a
                  href="https://syncthing.net/"
                  className="text-sky-600 hover:text-sky-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syncthing
                </a>
                , and more.
              </p>
            </div>

            <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-6 text-slate-600">
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Martial Arts & Jazz</h3>
              <p>
                I've been deeply involved in both martial arts and music for most of my life.
                Training in karate for over 15 years has taught me patience, focus, and the value of long-term discipline.
                In parallel, playing jazz for 7+ years has given me a creative outlet and taught me how to listen, adapt, and express myself.
                Both have shaped the way I approach challenges and personal growth.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="mt-24 border-t border-slate-200 pt-8 text-center text-slate-600 text-sm space-y-4">
        <p className="max-w-xl mx-auto px-4">
          If you have any questions about my work or want to hear more, feel free to reach out via email or LinkedIn.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            aidan.c.mcleod[at]gmail.com
          </span>
          <a
            href="https://www.linkedin.com/in/aidan-c-mcleod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
          >
            <FaLinkedin className="text-lg" />
            linkedin.com/in/aidan-c-mcleod
          </a>
        </div>

        <p className="mt-4 text-slate-400">&copy; {new Date().getFullYear()} Aidan McLeod</p>
      </footer>
    </main>
  );
}

export default App;
