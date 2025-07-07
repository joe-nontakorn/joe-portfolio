import "../assets/styles/BackgroundBalls.css";

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
  );
}

export default BackgroundBalls;
