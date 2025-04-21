// Card.jsx
function Card({ title, link, children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition ${className}`}>
      {link && (
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-64 mb-4 rounded"
        ></iframe>
      )}

      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default Card;
