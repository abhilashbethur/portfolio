import { useEffect, useState } from "react";
import Elevator from "./components/Elevator";
import Modal from "./components/Modal";

function App() {
  const [showInitialModal, setShowInitialModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setShowInitialModal(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // tailwind md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1956_apzeS5ntdJj0AmgR6tmBCvlrhlL1/view?usp=drive_link",
      "_blank"
    );
  };

  const handleContinueClick = () => {
    setShowInitialModal(false);
  };

  if (isMobile) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] text-white text-center">
        <h3 className="text-xl mb-4 text-gray-200">
          This experience is best on desktop, but you can still explore…
        </h3>
        {/* <p className="text-gray-400 text-md mb-6 max-w-md">
          For the full elevator experience, please visit on a larger screen. In
          the meantime, you can still check my resume below.
        </p> */}

        <div className="w-full max-w-md h-[70vh] rounded-lg overflow-hidden shadow-xl border border-gray-300 bg-white">
          <iframe
            title="Resume"
            src="https://drive.google.com/file/d/1956_apzeS5ntdJj0AmgR6tmBCvlrhlL1/preview"
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          Resume not loading?{" "}
          <a
            href="https://drive.google.com/file/d/1956_apzeS5ntdJj0AmgR6tmBCvlrhlL1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Click here!
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Modal
        open={showInitialModal}
        onClose={handleContinueClick}
        content={
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Welcome to Abhilash's Portfolio Building
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To access the floors, click on the floor plan inside the elevator
              on the left.
              <br />
              If you are in a hurry, then click on <strong>Resume</strong> to
              find my resume.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleResumeClick}
                className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
              >
                Take me to Resume
              </button>
              <button
                onClick={handleContinueClick}
                className="px-6 py-3 bg-gray-300 text-gray-800 text-lg rounded-md hover:bg-gray-400 transition"
              >
                Continue to Elevator
              </button>
            </div>
          </>
        }
      />
      <Elevator />
    </div>
  );
}

export default App;
