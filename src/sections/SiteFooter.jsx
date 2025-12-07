import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const SiteFooter = () => {
  return (
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
  )
};

export default SiteFooter;