import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, tech, githubLink }) {
  return (
    <div className="relative bg-white shadow-sm border border-slate-200 rounded-xl p-6">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-sky-600 hover:text-sky-800"
        aria-label={`GitHub link for ${title}`}
      >
        <FaGithub className="text-2xl" />
      </a>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-2">{description}</p>
      <p className="text-sm text-slate-500 italic">{tech}</p>
    </div>
  );
}

export default ProjectCard;
