// src/components/BackgroundBalls.jsx
function BackgroundBalls() {
  const bubbles = [
    {
      top: "20%",
      left: "10%",
      width: "180px",
      height: "180px",
      animation: "move1 15s ease-in-out infinite",
    },
    {
      top: "60%",
      left: "25%",
      width: "200px",
      height: "200px",
      animation: "move2 18s ease-in-out infinite",
    },
    {
      top: "40%",
      left: "70%",
      width: "150px",
      height: "150px",
      animation: "move3 22s ease-in-out infinite",
    },
    {
      top: "35%",
      left: "40%",
      width: "150px",
      height: "150px",
      animation: "move4 22s ease-in-out infinite",
    },
    {
      top: "80%",
      left: "60%",
      width: "150px",
      height: "150px",
      animation: "move5 22s ease-in-out infinite",
    },
    {
      top: "10%",
      left: "80%",
      width: "250px",
      height: "250px",
      animation: "move6 22s ease-in-out infinite",
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* ลูกฟองแบบกำหนดพิเศษ */}
      <div
        className="ball bubble-glow"
        style={{
          top: "30%",
          left: "70%",
          width: "150px",
          height: "150px",
          animation: "move3 18s infinite",
        }}
      ></div>

      {/* ลูกฟองสุ่มจาก array */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="ball bubble-glow"
          style={{
            ...bubble,
            animationDelay: `-${Math.floor(Math.random() * 10)}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default BackgroundBalls;
