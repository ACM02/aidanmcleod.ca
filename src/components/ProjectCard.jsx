import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, tech, link, links, linkIcon = <FaGithub />, isDark }) {
  return (
    <div className={`relative rounded-xl p-6 transition-all hover:scale-[1.02] ${isDark
        ? 'bg-slate-800 border border-slate-700 shadow-lg'
        : 'bg-white border border-slate-200 shadow-sm'
      }`}>
      {links ? (
        <div className="absolute top-4 right-4 flex gap-2">
          {links.map((linkItem, index) => (
            <a
              key={index}
              href={linkItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-sky-600 hover:text-sky-800'
                }`}
              aria-label={linkItem.label || `Link ${index + 1} for ${title}`}
            >
              <span className="text-2xl">{linkItem.icon}</span>
            </a>
          ))}
        </div>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-4 right-4 transition-colors ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-sky-600 hover:text-sky-800'
            }`}
          aria-label={`Link for ${title}`}
        >
          <span className="text-2xl">{linkIcon}</span>
        </a>
      ) : null}
      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
        {title}
      </h3>
      <p className={`mb-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
      <p className={`text-sm italic ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{tech}</p>
    </div>
  );
}

export default ProjectCard;
