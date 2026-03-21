// Card.jsx — MATRIX THEME
function Card({ title, link, children, className = "" }) {
  return (
    <div
      className={`bg-black/70 backdrop-blur-md border border-green-500/20 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 card-glow ${className}`}
    >
      {link && (
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-4 rounded border border-green-500/10"
        ></iframe>
      )}

      {title && (
        <h3 className="text-lg font-semibold mb-4 text-green-400 font-matrix">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default Card;
