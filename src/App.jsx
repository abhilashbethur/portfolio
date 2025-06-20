import Elevator from "./components/Elevator";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [showInitialModal, setShowInitialModal] = useState(false);

  useEffect(() => {
    setShowInitialModal(true);
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

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="md:hidden h-screen w-screen flex flex-col justify-start pt-12 px-3 pb-3 bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] text-white text-center">
        <h3 className="text-xl mb-3 text-gray-200">
          This experience is best on desktop, but you can still explore…
        </h3>

        <div className="w-full max-w-md h-[65vh] rounded-lg overflow-hidden shadow-xl border border-gray-300 bg-white mx-auto">
          <iframe
            title="Resume"
            src="https://drive.google.com/file/d/1956_apzeS5ntdJj0AmgR6tmBCvlrhlL1/preview"
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>

        <p className="mt-3 text-gray-600 text-sm">
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

      {/* DESKTOP VIEW */}
      <div className="hidden md:block h-screen">
        <Modal
          open={showInitialModal}
          onClose={handleContinueClick}
          content={
            <>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Welcome to Abhilash's Portfolio Building
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                To access the floors, click on the floor plan inside the
                elevator on the left.
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
    </>
  );
}

export default App;
