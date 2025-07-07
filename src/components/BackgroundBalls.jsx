function BackgroundBalls() {
  const bubbles = [
    {
      top: "20%",
      left: "10%",
      width: "180px",
      height: "180px",
      duration: 30,
    },
    {
      top: "60%",
      left: "25%",
      width: "200px",
      height: "200px",
      duration: 35,
    },
    {
      top: "40%",
      left: "70%",
      width: "150px",
      height: "150px",
      duration: 40,
    },
    {
      top: "35%",
      left: "40%",
      width: "150px",
      height: "150px",
      duration: 28,
    },
    {
      top: "80%",
      left: "60%",
      width: "120px",
      height: "120px",
      duration: 32,
    },
    {
      top: "10%",
      left: "80%",
      width: "250px",
      height: "250px",
      duration: 38,
    },
  ];

  return (
    <>
      <style jsx>{`
      .soap-bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(0, 255, 255, 0.3) 0%,
    rgba(0, 128, 255, 0.25) 40%,
    rgba(138, 43, 226, 0.2) 70%,
    rgba(75, 0, 130, 0.15) 100%
  );
  backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 200, 255, 0.4);
  box-shadow:
    inset 0 0 20px rgba(0, 200, 255, 0.3),
    0 0 30px rgba(0, 200, 255, 0.15),
    0 0 60px rgba(0, 200, 255, 0.1);
}

      /* เงาสะท้อนเคลื่อนไหว */
.soap-bubble::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 20%;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7),
    transparent
  );
  animation: shimmer 15s ease-in-out infinite alternate;
}}

       @keyframes shimmer {
  0% { transform: translate(0,0) scale(1); opacity:0.4; }
  50% { transform: translate(5px,5px) scale(1.1); opacity:0.7; }
  100% { transform: translate(0,0) scale(1); opacity:0.4; }
}

        @keyframes floatCircle {
          0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          25%  { transform: translate(50px, -30px) rotate(90deg) scale(1.02); }
          50%  { transform: translate(0px, -60px) rotate(180deg) scale(1.015); }
          75%  { transform: translate(-50px, -30px) rotate(270deg) scale(1.01); }
          100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="soap-bubble"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.width,
              height: bubble.height,
              animation: `floatCircle ${bubble.duration}s ease-in-out infinite`,
              animationDelay: `-${Math.floor(
                Math.random() * bubble.duration
              )}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default BackgroundBalls;
