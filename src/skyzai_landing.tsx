import React, { useState, useEffect } from 'react';

// SKYZAI Logo Component
const SkyzaiLogo = ({ className = '', size = 40 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 832 800" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M485.061 120.009L623.533 199.956L623.585 39.9734L485.061 120.009Z" fill="currentColor"/>
    <path d="M485.062 120.009L623.533 199.956L485.01 279.991L485.062 120.009Z" fill="currentColor"/>
    <path d="M692.871 320.053L692.871 479.947L831.445 400L692.871 320.053Z" fill="currentColor"/>
    <path d="M692.871 320.053L692.871 479.947L554.297 400L692.871 320.053Z" fill="currentColor"/>
    <path d="M623.533 600.044L485.061 679.991L623.584 760.027L623.533 600.044Z" fill="currentColor"/>
    <path d="M623.533 600.044L485.061 679.991L485.01 520.009L623.533 600.044Z" fill="currentColor"/>
    <path d="M346.384 679.991L207.913 600.044L207.861 760.027L346.384 679.991Z" fill="currentColor"/>
    <path d="M346.385 679.991L207.913 600.044L346.436 520.009L346.385 679.991Z" fill="currentColor"/>
    <path d="M138.574 479.947L138.574 320.053L0 400L138.574 479.947Z" fill="currentColor"/>
    <path d="M138.574 479.947L138.574 320.053L277.148 400L138.574 479.947Z" fill="currentColor"/>
    <path d="M207.913 199.956L346.384 120.009L207.861 39.9733L207.913 199.956Z" fill="currentColor"/>
    <path d="M207.913 199.956L346.384 120.009L346.436 279.991L207.913 199.956Z" fill="currentColor"/>
  </svg>
);

// GitHub Icon Component
const GitHubIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Trilemma Visualization Component
const TrilemmaVisualization = () => {
  // Triangle vertices forming an equilateral triangle
  const centerX = 400;
  const centerY = 400;
  const radius = 300;
  const angle = Math.PI * 2 / 3;

  // Calculate vertices positions
  const topPoint = [
    centerX,
    centerY - radius
  ];
  const leftPoint = [
    centerX - radius * Math.cos(Math.PI / 6),
    centerY + radius * Math.sin(Math.PI / 6)
  ];
  const rightPoint = [
    centerX + radius * Math.cos(Math.PI / 6),
    centerY + radius * Math.sin(Math.PI / 6)
  ];

  // Calculate midpoints for the median lines
  const bottomMid = [
    (leftPoint[0] + rightPoint[0]) / 2,
    (leftPoint[1] + rightPoint[1]) / 2
  ];
  const leftMid = [
    (topPoint[0] + rightPoint[0]) / 2,
    (topPoint[1] + rightPoint[1]) / 2
  ];
  const rightMid = [
    (topPoint[0] + leftPoint[0]) / 2,
    (topPoint[1] + leftPoint[1]) / 2
  ];

  return (
    <svg viewBox="0 0 800 800" className="w-full max-w-3xl mx-auto">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="1"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="1"/>
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4"/>
        </linearGradient>
        
        {/* Animation for flowing dashes */}
        <style>
          {`
            @keyframes dashFlow {
              to {
                stroke-dashoffset: -24;
              }
            }
            .flowing-line {
              animation: dashFlow 2s linear infinite;
            }
          `}
        </style>
      </defs>

      {/* Main triangle outline */}
      <path 
        d={`M${topPoint[0]} ${topPoint[1]} L${leftPoint[0]} ${leftPoint[1]} L${rightPoint[0]} ${rightPoint[1]} Z`}
        fill="none" 
        stroke="url(#textGradient)" 
        strokeWidth="2"
        className="animate-pulse"
      />

      {/* Animated median lines with flowing dashes through center */}
      <g className="flowing-line">
        <line 
          x1={topPoint[0]} y1={topPoint[1]} 
          x2={bottomMid[0]} y2={bottomMid[1]} 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          strokeDasharray="8,16"
        />
        <line 
          x1={leftPoint[0]} y1={leftPoint[1]} 
          x2={rightMid[0]} y2={rightMid[1]} 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          strokeDasharray="8,16"
        />
        <line 
          x1={rightPoint[0]} y1={rightPoint[1]} 
          x2={leftMid[0]} y2={leftMid[1]} 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          strokeDasharray="8,16"
        />
      </g>

      {/* Centroid marker (intersection of medians) */}
      <circle 
        cx={centerX} 
        cy={centerY} 
        r="4" 
        fill="url(#textGradient)" 
        className="animate-pulse"
      />

      {/* Primary labels */}
      <text x="400" y="70" textAnchor="middle" fill="url(#textGradient)" className="text-3xl font-bold">
        Decentralization
      </text>
      <text x="60" y="680" textAnchor="start" fill="url(#textGradient)" className="text-3xl font-bold">
        Security
      </text>
      <text x="740" y="680" textAnchor="end" fill="url(#textGradient)" className="text-3xl font-bold">
        Scalability
      </text>

      {/* Technical descriptors */}
      <text x="400" y="160" textAnchor="middle" fill="url(#textGradient)" className="text-lg opacity-60">
        Distributed Validation
      </text>
      <text x="180" y="600" textAnchor="start" fill="url(#textGradient)" className="text-lg opacity-60">
        Byzantine Fault Tolerance
      </text>
      <text x="620" y="600" textAnchor="end" fill="url(#textGradient)" className="text-lg opacity-60">
        High Throughput
      </text>
    </svg>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black" />
      
      <div className="relative">
        {/* Navigation with frosted glass effect */}
        <nav className="fixed w-full bg-black/80 backdrop-blur-lg z-50 border-b border-yellow-900/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <SkyzaiLogo className="text-yellow-400 h-8 w-8" />
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-200 text-transparent bg-clip-text">
                  SKYZAI
                </span>
              </div>
              <a 
                href="https://github.com" 
                className="flex items-center gap-2 text-yellow-100/60 hover:text-yellow-100 transition-colors"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main content area */}
        <main className="container mx-auto px-6 pt-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-200 text-transparent bg-clip-text leading-tight">
              Solving the Blockchain Trilemma
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100/80 mb-16 leading-relaxed max-w-3xl mx-auto">
              SKYZAI achieves a new equilibrium in distributed systems—secure, highly scalable, and genuinely decentralized. 
              We blend advanced consensus logic, no-VM monetary layers, and strategic AI oversight to transcend 
              traditional trade-offs and unlock unprecedented performance.
            </p>

            {/* Interactive trilemma visualization */}
            <div className="mb-24 transform hover:scale-105 transition-transform duration-500">
              <TrilemmaVisualization />
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                {
                  title: "Deterministic Finality",
                  description: "Advanced consensus ensures rapid, mathematically secured finality for every transaction."
                },
                {
                  title: "No-VM Architecture",
                  description: "Parameter-driven economic rules eliminate arbitrary code execution, streamlining upgrades and boosting security."
                },
                {
                  title: "Intelligent Oversight",
                  description: "Macro-level AI analysis guides parameter refinements, ensuring stable evolution as adoption grows."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gradient-to-b from-yellow-900/10 to-black border border-yellow-900/20 rounded-lg backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-2xl font-bold text-yellow-400 mb-4">{feature.title}</div>
                  <div className="text-yellow-100/70 leading-relaxed">{feature.description}</div>
                </div>
              ))}
            </div>

            {/* Newsletter signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Stay informed about our progress"
                  className="flex-1 px-4 py-3 bg-black border border-yellow-900/40 rounded-lg focus:outline-none focus:border-yellow-500/50 text-yellow-100 placeholder:text-yellow-100/40 transition-colors"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 rounded-lg flex items-center gap-2 transition-all duration-300 text-black font-semibold hover:transform hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-32 pb-8 text-center text-yellow-100/40">
          <p>&copy; 2024 SKYZAI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;