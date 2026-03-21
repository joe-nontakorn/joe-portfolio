// Card-certi.jsx — MATRIX THEME
function Card({ title, link }) {
  return (
    <div
      className="
        bg-black/70
        backdrop-blur-md
        border border-green-500/20
        p-4
        rounded-xl
        shadow-xl
        hover:shadow-2xl
        transition-all duration-300
        flex flex-col items-center
        card-glow
      "
    >
      {/* PDF Preview */}
      <div
        className="
          w-full
          min-w-[360px]
          max-w-[5800px]
          aspect-[820/600]
          overflow-hidden
          rounded
          border border-green-500/10
        "
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
        className="
          mt-4
          text-base
          text-green-400
          hover:text-green-300
          hover:underline
          text-center
          font-semibold
          font-matrix
          neon-green-subtle
        "
      >
        {title}
      </a>
    </div>
  );
}

export default Card;
