import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, tech, link, links, linkIcon = <FaGithub /> }) {
  return (
    <div className={'relative rounded-xl p-6 transition-all hover:scale-[1.02] bg-secondary border border-secondary shadow-lg'}>
      {links ? (
        <div className="absolute top-4 right-4 flex gap-2">
          {links.map((linkItem, index) => (
            <a
              key={index}
              href={linkItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className={'transition-colors text-primary hover:text-link-hover'}
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
          className={'absolute top-4 right-4 transition-colors text-primary hover:text-link-hover'}
          aria-label={`Link for ${title}`}
        >
          <span className="text-2xl">{linkIcon}</span>
        </a>
      ) : null}
      <h3 className={'text-xl font-bold mb-2 text-text-primary'}>
        {title}
      </h3>
      <p className={'mb-2 text-text-primary'}>{description}</p>
      <p className={'text-sm italic text-text-tertiary'}>{tech}</p>
    </div>
  );
}

export default ProjectCard;
