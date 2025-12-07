function Skills({ isDark }) {
  return (
    <>

      <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-sky-600'}`}>
        Skills
      </h2>
      <div className={`rounded-xl p-6 space-y-4 ${isDark
        ? 'bg-slate-800 border border-slate-700'
        : 'bg-white border border-slate-200 shadow-sm'
        }`}>
        <div>
          <p className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Languages
          </p>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            C/C++, JavaScript, Java, Ruby, Python, C#, HTML/CSS
          </p>
        </div>
        <div>
          <p className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Frameworks & Libraries
          </p>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            ESP-IDF, React, React Native, Ruby on Rails, Spring Boot, Next.js, Arduino
          </p>
        </div>
        <div>
          <p className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Tools
          </p>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            Docker, Git/GitHub, Linux, Maven, PlatformIO, Nginx
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;