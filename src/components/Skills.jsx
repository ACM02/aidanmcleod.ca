function Skills() {
  return (
    <>

      <h2 className={'text-3xl font-bold mb-6 text-primary'}>
        Skills
      </h2>
      <div className={'rounded-xl p-6 space-y-4 bg-secondary'}>
        <div>
          <p className={'font-semibold text-text-primary'}>
            Languages
          </p>
          <p className={'text-text-secondary'}>
            C/C++, JavaScript, Java, Ruby, Python, C#, HTML/CSS
          </p>
        </div>
        <div>
          <p className={'font-semibold text-text-primary'}>
            Frameworks & Libraries
          </p>
          <p className={'text-text-secondary'}>
            ESP-IDF, React, React Native, Ruby on Rails, Spring Boot, Next.js, Arduino
          </p>
        </div>
        <div>
          <p className={'font-semibold text-text-primary'}>
            Tools
          </p>
          <p className={'text-text-secondary'}>
            Docker, Git/GitHub, Linux, Maven, PlatformIO, Nginx
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;