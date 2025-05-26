import { useState, useEffect } from "react";
import Elevator from "./components/Elevator";

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
      {showInitialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-[600px] text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Welcome to Abhilash's Portfolio Building
            </h2>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              To access the floors, click on the floor plan inside the elevator
              on the left. If you are in a hurry, then click on{" "}
              <strong>Resume</strong> to find my resume.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleResumeClick}
                className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Take me to Resume
              </button>
              <button
                onClick={handleContinueClick}
                className="px-6 py-3 bg-gray-300 text-gray-800 text-lg rounded-md hover:bg-gray-400 transition cursor-pointer"
              >
                Continue to Elevator
              </button>
            </div>
          </div>
        </div>
      )}

      <Elevator />
    </>
  );
}

export default App;
