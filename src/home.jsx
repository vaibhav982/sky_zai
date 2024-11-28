import React, { useState, useEffect, useRef } from "react";

const COLORS = [
  // Light Blues
  "#80D8FF",
  "#40C4FF",
  "#00B0FF",
  "#0091EA",
  
  // Reds
  "#FF8A80",
  "#FF5252",
  "#FF1744",
  "#D50000",
  
  // Deep Purples
  "#B388FF",
  "#7C4DFF",
  "#651FFF",
  "#6200EA",
  
  // Light Greens
  "#B9F6CA",
  "#69F0AE",
  "#00E676",
  "#00C853",
  
  // Yellows
  "#FFFF8D",
  "#FFFF00",
  "#FFEA00",
  "#FFD600",
  
  // Deep Oranges
  "#FF9E80",
  "#FF6E40",
  "#FF3D00",
  "#DD2C00",
  
  // Pinks
  "#FF80AB",
  "#FF4081",
  "#F50057",
  "#C51162",
  
  // Indigos
  "#8C9EFF",
  "#536DFE",
  "#3D5AFE",
  "#304FFE",
  
  // Cyans
  "#84FFFF",
  "#18FFFF",
  "#00E5FF",
  "#00B8D4",
  
  // Lime
  "#CCFF90",
  "#B2FF59",
  "#76FF03",
  "#64DD17",
  
  // Amber
  "#FFE57F",
  "#FFD740",
  "#FFC400",
  "#FFAB00",
  
  // Purple
  "#EA80FC",
  "#E040FB",
  "#D500F9",
  "#AA00FF",
  
  // Blue
  "#82B1FF",
  "#448AFF",
  "#2979FF",
  "#2962FF",
  
  // Teal
  "#A7FFEB",
  "#64FFDA",
  "#1DE9B6",
  "#00BFA5",
  
  // Lime Yellow
  "#F4FF81",
  "#EEFF41",
  "#C6FF00",
  "#AEEA00",
  
  // Orange
  "#FFD180",
  "#FFAB40",
  "#FF9100",
  "#FF6D00",
  
  // Grey
  "#757575",
  "#616161",
  "#424242",
  "#212121"
];

const createParticle = (width, height, isLarge = false) => {
  const size = isLarge ? Math.random() * 180 + 120 : Math.random() * 80 + 40;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size,
    baseSize: size,
    speedX: (Math.random() - 0.5) * (isLarge ? 0.3 : 0.8),
    speedY: (Math.random() - 0.5) * (isLarge ? 0.3 : 0.8),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    targetColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    colorProgress: 0,
    pulseDirection: 1,
    pulseSpeed: Math.random() * 0.02 + 0.01,
    rotationAngle: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.01,
    opacity: isLarge ? Math.random() * 0.3 + 0.2 : Math.random() * 0.5 + 0.3,
  };
};

const lerp = (start, end, t) => start * (1 - t) + end * t;

const lerpColor = (color1, color2, t) => {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const r = Math.round(lerp(r1, r2, t));
  const g = Math.round(lerp(g1, g2, t));
  const b = Math.round(lerp(b1, b2, t));

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const AnimatedBackground = () => {
  const particlesRef = useRef({ large: [], small: [] });
  const requestRef = useRef();
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const generateParticles = () => {
      const largeParticles = Array(15)
        .fill(null)
        .map(() => createParticle(dimensions.width, dimensions.height, true));
      const smallParticles = Array(25)
        .fill(null)
        .map(() => createParticle(dimensions.width, dimensions.height, false));
      particlesRef.current = { large: largeParticles, small: smallParticles };
    };

    if (dimensions.width && dimensions.height) {
      generateParticles();
    }
  }, [dimensions]);

  useEffect(() => {
    const drawParticle = (ctx, particle, blur = false) => {
      ctx.save();
      if (blur) {
        ctx.filter = "blur(8px)";
      }

      const currentColor = lerpColor(
        particle.color,
        particle.targetColor,
        particle.colorProgress
      );
      const currentSize =
        particle.baseSize * (1 + Math.sin(particle.pulseDirection) * 0.3);

      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotationAngle);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, currentSize);
      gradient.addColorStop(
        0,
        `${currentColor}${Math.floor((particle.opacity + 0.1) * 255)
          .toString(16)
          .padStart(2, "0")}`
      );
      gradient.addColorStop(
        0.6,
        `${currentColor}${Math.floor(particle.opacity * 0.3 * 255)
          .toString(16)
          .padStart(2, "0")}`
      );
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.large.forEach((particle) => {
        drawParticle(ctx, particle, true);
      });

      particlesRef.current.small.forEach((particle) => {
        drawParticle(ctx, particle);
      });

      [...particlesRef.current.large, ...particlesRef.current.small].forEach(
        (particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotationAngle += particle.rotationSpeed;
          particle.colorProgress += 0.005;

          if (particle.colorProgress >= 1) {
            particle.color = particle.targetColor;
            particle.targetColor =
              COLORS[Math.floor(Math.random() * COLORS.length)];
            particle.colorProgress = 0;
          }

          particle.pulseDirection += particle.pulseSpeed;

          if (particle.x < -particle.size)
            particle.x = dimensions.width + particle.size;
          if (particle.x > dimensions.width + particle.size)
            particle.x = -particle.size;
          if (particle.y < -particle.size)
            particle.y = dimensions.height + particle.size;
          if (particle.y > dimensions.height + particle.size)
            particle.y = -particle.size;
        }
      );

      requestRef.current = requestAnimationFrame(animate);
    };

    if (dimensions.width && dimensions.height) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions]);

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { clientWidth, clientHeight } = canvasRef.current.parentElement;
        setDimensions({
          width: clientWidth,
          height: clientHeight,
        });
        canvasRef.current.width = clientWidth;
        canvasRef.current.height = clientHeight;
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

const SkyZaiLogo = () => {
  const containerRef = useRef(null);
  const [size, setSize] = useState(0);
  const goldenRatio = 1.618;

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const shortestSide = Math.min(
          container.offsetWidth,
          container.offsetHeight
        );
        setSize(shortestSide / goldenRatio);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-slate-900 overflow-hidden"
      ref={containerRef}
    >
      <AnimatedBackground />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width={size}
          height={size * 0.962}
          viewBox="0 0 577 555"
          className="transition-all duration-300 ease-in-out"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="fill-white hover:fill-white transition-colors" style={{ opacity: 0.7 }}>
            <path d="M336.339 83.2135L432.354 138.648C432.37 95.648 432.38 70.7173 432.39 27.7173L336.339 83.2135ZM336.339 83.2135L432.354 138.648L336.303 194.144L336.339 83.2135Z" />
            <path d="M480.433 221.923L480.433 332.792C512.433 315.075 544.52 295.358 576.52 277.358L480.433 221.923ZM480.433 221.923L480.433 332.792L384.346 277.358L480.433 221.923Z" />
            <path d="M432.354 416.067L336.339 471.502C368.365 489.25 400.39 509.998 432.39 526.998L432.354 416.067ZM432.354 416.067L336.339 471.502L336.303 360.571L432.354 416.067Z" />
            <path d="M240.181 471.502L144.165 416.067C144.155 459.533 144.14 483.998 144.13 526.998L240.181 471.502ZM240.181 471.502L144.166 416.067L240.217 360.571L240.181 471.502Z" />
            <path d="M96.0866 332.792L96.0866 221.923C64.0433 239.64 32.0 259.358 0 277.358L96.0866 332.792ZM96.0867 332.792L96.0867 221.923L192.173 277.358L96.0867 332.792Z" />
            <path d="M144.165 138.648L240.181 83.2134C208.155 65.4654 176.13 45.7173 144.13 27.7173L144.165 138.648ZM144.165 138.648L240.181 83.2135L240.216 194.144L144.165 138.648Z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SkyZaiLogo;