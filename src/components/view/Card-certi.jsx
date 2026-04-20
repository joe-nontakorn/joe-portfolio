// Card-certi.jsx — Modern Theme (Responsive + Theme-aware)
function Card({ title, link }) {
  return (
    <div className="modern-card p-3 sm:p-4 flex flex-col items-center w-full">
      {/* PDF Preview */}
      <div
        className="w-full aspect-[820/600] overflow-hidden rounded-lg"
        style={{ border: "1px solid var(--border-color)" }}
      >
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 sm:mt-4 text-sm sm:text-base text-center font-semibold transition-colors duration-200 hover:underline"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </a>
    </div>
  );
}

export default Card;
