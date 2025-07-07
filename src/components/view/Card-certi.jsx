function Card({ title, link }) {
  return (
    <div
      className="
        bg-gradient-to-br from-gray-800/80 to-gray-900/80
        backdrop-blur-md
        border border-cyan-500/20
        p-4
        rounded-xl
        shadow-xl
        hover:shadow-2xl
        transition
        flex flex-col items-center
        card-glow
      "
    >
      {/* ✅ PDF Preview */}
      <div
        className="
          w-full
          min-w-[360px]
          max-w-[5800px]
          aspect-[820/600]
          overflow-hidden
          rounded
          border border-cyan-500/10
        "
      >
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-full"
        ></iframe>
      </div>

      {/* ✅ ลิงก์เปิด PDF */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          text-base
          text-cyan-300
          hover:text-cyan-400
          hover:underline
          text-center
          font-semibold
        "
      >
        {title}
      </a>
    </div>
  );
}

export default Card;
