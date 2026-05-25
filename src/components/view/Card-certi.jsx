// Card-certi.jsx — Modern Theme (Responsive + Theme-aware)
import { FiExternalLink } from "react-icons/fi";

function Card({ title, link }) {
  return (
    <div className="modern-card p-3 sm:p-4 flex flex-col items-center w-full">
      {/* PDF Preview */}
      <div
        className="w-full aspect-[820/600] overflow-hidden rounded-lg bg-black/20"
        style={{ border: "1px solid var(--border-color)" }}
      >
        <iframe
          title={title}
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-2 text-sm sm:text-base text-center font-semibold transition-colors duration-200"
        style={{ color: "var(--accent)" }}
      >
        {title}
        <FiExternalLink size={15} />
      </a>
    </div>
  );
}

export default Card;
