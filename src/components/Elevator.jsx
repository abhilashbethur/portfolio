import { useState } from "react";
import Modal from "./Modal";
import ButtonPanel from "./ButtonPanel";
import FloorPlan from "./FloorPlan";

const Elevator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [direction, setDirection] = useState(null); // 'up' | 'down' | null
  const [isMoving, setIsMoving] = useState(false);

  const floorResumeMap = {
    1: "Summary",
    2: "Skills",
    3: "Experience",
    4: "Projects",
    5: "Education",
    6: "Certifications",
  };

  // Handle floor button click
  const handleFloorClick = (floor) => {
    if (isMoving || floor === currentFloor) return; // ignore if already moving or same floor

    // Set direction
    setDirection(floor > currentFloor ? "up" : "down");
    // Close doors and start moving
    setDoorsOpen(false);
    setIsMoving(true);

    // After 2 seconds, update floor and open doors
    setTimeout(() => {
      setCurrentFloor(floor);
      setDoorsOpen(true);
      setIsMoving(false);
      setDirection(null);
    }, 2000);
  };

  // Modal content unchanged (includes Go Back button)
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
          onClick={() => setIsModalOpen(false)}
          className="px-6 py-3 bg-gray-300 text-gray-800 text-lg rounded-md hover:bg-gray-400 transition cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </>
  );

  return (
    <div className="w-full h-full mx-auto bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] px-20 text-white">
      <div className="flex justify-center items-center pt-10 gap-10">
        {/* Floor Map (Image) */}
        <FloorPlan onClick={() => setIsModalOpen(true)} />

        <div className="flex flex-col items-center gap-10 min-w-[40%]">
          {/* Floor Indicator with arrow */}
          <div className="w-[150px] h-[100px] mx-auto bg-[#1f2233] text-[#e0d8c3] flex items-center justify-center text-3xl font-bold rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] border-[3px] border-[#444656] relative">
            {currentFloor}
            {direction === "up" && (
              <span className="ml-2 text-green-400 animate-bounce">
                &#8593;
              </span>
            )}
            {direction === "down" && (
              <span className="ml-2 text-red-400 animate-bounce">&#8595;</span>
            )}
          </div>

          {/* Elevator Door with animation */}
          <div className="w-full h-[700px] bg-gradient-to-b from-[#1a1a1f] via-[#2a2a36] to-[#1a1a1f] border-[4px] border-[#5c5c72] flex shadow-inner rounded-md overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <img
                  src="/door.png"
                  alt="Elevator Inside"
                  className="object-contain"
                />
                <div className="absolute top-32 left-16 text-red-900 border-2 border-red-700 bg-emerald-300 py-4 px-2 w-[160px] text-center rounded-md uppercase font-bold shadow-lg cursor-pointer hover:bg-emerald-400">
                  {floorResumeMap[currentFloor]}
                </div>
              </div>
            </div>
            {/* Left door */}
            <div
              className={`w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-r-[2px] border-[#7a7a99] transform transition-transform duration-1000 z-11 ${
                doorsOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            />
            {/* Right door */}
            <div
              className={`w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-l-[2px] border-[#7a7a99] transform transition-transform duration-1000 z-11 ${
                doorsOpen ? "translate-x-full" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        <ButtonPanel
          setDoorsOpen={setDoorsOpen}
          isMoving={isMoving}
          doorsOpen={doorsOpen}
          handleFloorClick={handleFloorClick}
          currentFloor={currentFloor}
        />
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
