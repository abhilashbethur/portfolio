import { useEffect, useState } from "react";

const Modal = ({ open, onClose, content, expandFromDoors = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [open]);

  if (!isVisible) return null;

  const modalClasses = expandFromDoors
    ? `transform transition-all duration-500 ease-out ${
        isAnimating ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`
    : `transform transition-all duration-300 ease-out ${
        isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        className={`relative w-[700px] overflow-y-auto ${modalClasses}`}
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          border: "2px solid #00ffff",
          borderRadius: "20px",
          boxShadow:
            "0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(0, 255, 255, 0.1)",
        }}
      >
        {/* Futuristic border animation */}
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"></div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-cyan-400 hover:text-red-400 text-3xl cursor-pointer z-10 transition-colors duration-200"
          onClick={onClose}
          style={{
            textShadow: "0 0 10px currentColor",
            fontFamily: "monospace",
          }}
        >
          ✕
        </button>

        {/* Content area */}
        <div className="p-12 text-center relative z-5">
          <div className="futuristic-content">{content}</div>
        </div>

        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(500px);
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 3s infinite;
        }
        .futuristic-content h2 {
          color: #00ffff;
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          font-family: "Courier New", monospace;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .futuristic-content p,
        .futuristic-content li {
          color: #e0e0e0;
          font-family: "Courier New", monospace;
          line-height: 1.6;
        }
        .futuristic-content strong {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        }
        .futuristic-content a {
          color: #00ff88;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }
        .futuristic-content a:hover {
          color: #00ffff;
        }
      `}</style>
    </div>
  );
};

export default Modal;
