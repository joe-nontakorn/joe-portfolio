function Card({ title, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
      {/* ✅ ปรับขนาด PDF Preview ให้ใหญ่ขึ้น */}
      <div className="w-full min-w-[360px] max-w-[5800px] aspect-[820/600] overflow-hidden rounded border">
  <iframe
    src={link + "#toolbar=0&navpanes=0&scrollbar=0"}
    className="w-full h-full"
  ></iframe>
</div>


      {/* ✅ คลิกเปิด PDF เต็มหน้าจอ */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-base text-blue-600 hover:underline text-center font-semibold"
      >
        {title}
      </a>
    </div>
  );
}

export default Card;
