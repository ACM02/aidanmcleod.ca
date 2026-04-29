import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GravitySandbox from "./GravitySandbox";
import InterestsCard from "./InterestsCard";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

const Portfolio = ({ isDark }) => {
  return (
    <>
      {/* Intro */}
      <section className="text-center mt-8">
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
            title="CoApp"
            description="A React web app designed for co-op students with job application/interview tracking, company reviews (like rate-my-professor), and AI resume improvement. Built as a software engineering course project on a 6 person team."
            tech="React, SpringBoot, Docker, GitHub Actions"
            link="https://github.com/Co-App-Team"
            isDark={isDark}
          />

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
            description="A Minecraft server plugin with 2,900+ downloads and a 4.7★ rating. I've maintained this project and provided support for server owners worldwide for over two years."
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
    </>
  );
}

export default Portfolio;