// Card.jsx — Modern Theme (Theme-aware) - Premium Edition
function Card({ title, link, children, className = "" }) {
  const hasCustomPadding = /\b(p|px|py|pt|pr|pb|pl)-/.test(className);
  const paddingClass = hasCustomPadding ? "" : "p-5 sm:p-6 md:p-7";

  return (
    <div className={`modern-card ${paddingClass} ${className}`}>
      {link && (
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-[250px] sm:h-[350px] lg:h-[500px] mb-4 rounded-lg"
          style={{ border: "1px solid var(--border-color)" }}
        ></iframe>
      )}

      {title && (
        <h3
          className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default Card;
