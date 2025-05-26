import { useState } from "react";
import Modal from "./Modal"; // import the modal

const Elevator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const floorResumeMap = {
    1: "Summary",
    2: "Skills",
    3: "Experience",
    4: "Projects",
    5: "Education",
    6: "Certifications",
  };

  const modalContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Floor Map</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Each floor in this elevator corresponds to a specific section of my
        portfolio. Use this map as a reference to navigate the different parts
        of my portfolio.
      </p>

      <ul className="text-left space-y-3 text-lg mb-8">
        {Object.entries(floorResumeMap).map(([floor, section]) => (
          <li
            key={floor}
            className="flex justify-between border-b pb-2 border-gray-300"
          >
            <span className="font-medium text-gray-700">Floor {floor}</span>
            <span className="text-gray-500">{section}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(false)} // make sure you have access to this function in your component scope
          className="px-6 py-3 bg-gray-300 text-gray-800 text-lg rounded-md hover:bg-gray-400 transition"
        >
          Go Back
        </button>
      </div>
    </>
  );

  return (
    <div className="w-full h-full mx-auto bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] px-20 pt-10 text-white">
      {/* Floor Indicator */}
      <div className="w-[150px] h-[100px] mx-auto bg-[#1f2233] text-[#e0d8c3] flex items-center justify-center text-3xl font-bold rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] border-[3px] border-[#444656]">
        F1
      </div>

      <div className="flex justify-center items-center pt-10 gap-10">
        {/* Floor Map */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer w-[150px] h-[100px] bg-[#2e2d3e] border-[3px] border-[#5a556e] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-md flex items-center justify-center text-sm text-gray-300 hover:bg-[#3a3950] transition"
        >
          Floor Map
        </div>

        {/* Elevator Door */}
        <div className="w-[40%] h-[700px] bg-gradient-to-b from-[#2c2c3c] to-[#1a1a27] border-[4px] border-[#5c5c72] flex shadow-inner rounded-md overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-r-[2px] border-[#7a7a99]" />
          <div className="w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-l-[2px] border-[#7a7a99]" />
        </div>

        {/* Button Panel */}
        <div className="w-[150px] h-[180px] bg-[#2e2d3e] border-[3px] border-[#5a556e] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-md flex flex-wrap gap-3 p-4 justify-center items-center">
          {[1, 2, 3, 4, 5, 6].map((floor) => (
            <button
              key={floor}
              className="w-10 h-10 bg-gradient-to-b from-[#44475a] to-[#2e2e42] border border-[#5a556e] rounded-md text-base text-[#e0d8c3] shadow-[0_2px_4px_rgba(0,0,0,0.5)] hover:bg-gradient-to-b hover:from-[#6b6f91] hover:to-[#474a68] transition"
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      {/* Modal for Floor Map */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export default Elevator;
