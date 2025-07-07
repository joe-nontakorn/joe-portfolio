// Card.jsx
function Card({ title, link, children, className = "" }) {
  return (
    <div
  className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-cyan-500/20 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition card-glow ${className}`}
    >
      {link && (
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-4 rounded"
        ></iframe>
      )}

      {title && (
        <h3 className="text-lg font-semibold mb-4 text-cyan-300">{title}</h3>
      )}

      {children}
    </div>
  );
}

export default Card;
