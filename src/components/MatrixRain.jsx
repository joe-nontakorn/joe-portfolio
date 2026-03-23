// src/components/MatrixRain.jsx
import { useEffect, useRef } from "react";

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Matrix characters (Katakana + Latin + Numbers + Symbols)
    const matrixChars =
      "0101010101000111100100010010101010100010100010010100100100100100001111000101101010101001010100101001010101001010100010011111111000110001001010100100110010010101010100100";

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);
    // Give each drop a random speed factor
    let speeds = Array(columns)
      .fill(0)
      .map(() => 0.5 + Math.random() * 1.5);

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

        // Head of the column is bright white-green
        const y = drops[i] * fontSize;

        // Brighter head character
        ctx.fillStyle = "#aaffaa";
        ctx.fillText(char, i * fontSize, y);

        // Dimmer trailing characters (overwrite previous position)
        ctx.fillStyle = "#00ff41";
        ctx.fillText(
          matrixChars[Math.floor(Math.random() * matrixChars.length)],
          i * fontSize,
          y - fontSize
        );

        // Reset drop to top when it goes past the screen + random chance
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    // Recalculate columns on resize
    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
      speeds = Array(columns)
        .fill(0)
        .map(() => 0.5 + Math.random() * 1.5);
    };
    window.removeEventListener("resize", resize);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
}

export default MatrixRain;
