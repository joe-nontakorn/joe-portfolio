// Card.jsx
function Card({ title, link, children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition ${className}`}
    >
      {link && (
        <iframe
          src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-4 rounded"
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
