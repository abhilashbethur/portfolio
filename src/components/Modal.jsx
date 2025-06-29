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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className={`relative w-[700px] max-h-[80vh] overflow-y-auto ${modalClasses}`}
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)",
          border: "1px solid #334155",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Google Fonts Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-50"></div>

        {/* Simple corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-slate-400 opacity-60"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-slate-400 opacity-60"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-slate-400 opacity-60"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-slate-400 opacity-60"></div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 text-2xl cursor-pointer z-10 transition-colors duration-200"
          onClick={onClose}
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          ✕
        </button>

        {/* Content area */}
        <div className="p-10 text-center relative z-5">
          <div className="content-area">
            {/* Apply Tailwind classes directly to content */}
            <div className="[&_h2]:text-slate-200 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:mb-6">
              <div className="[&_p]:text-slate-300 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-8">
                <div className="[&_div]:text-slate-300 [&_div]:text-base [&_div]:leading-relaxed [&_div]:mb-4">
                  <div className="[&_strong]:text-slate-100 [&_strong]:font-semibold [&_strong]:font-mono [&_strong]:text-sm">
                    <div className="[&_a]:text-blue-400 [&_a]:font-medium [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-all [&_a]:duration-200 hover:[&_a]:text-blue-300 hover:[&_a]:border-blue-300">
                      {content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .content-area * {
            font-family: "Inter", system-ui, sans-serif;
          }
          .content-area strong {
            font-family: "JetBrains Mono", monospace;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Modal;
