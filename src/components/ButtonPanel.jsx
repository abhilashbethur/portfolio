import React from "react";

const ButtonPanel = ({
  setDoorsOpen,
  isMoving,
  doorsOpen,
  handleFloorClick,
  currentFloor,
}) => {
  return (
    <>
      <div className="w-[60px] bg-[#2e2d3e] border-[3px] border-[#5a556e] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-md flex flex-col-reverse gap-6 p-10 mt-20 justify-center items-center">
        {/* Open Door Button */}
        <button
          onClick={() => setDoorsOpen(true)}
          disabled={isMoving || doorsOpen}
          className={`w-10 h-10 border rounded-md text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
            doorsOpen
              ? "bg-green-600 text-white border-green-800 cursor-not-allowed"
              : "bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:bg-gradient-to-b hover:from-[#6b6f91] hover:to-[#474a68] cursor-pointer"
          } ${isMoving && "opacity-50 cursor-not-allowed"}`}
        >
          {"<>"}
        </button>

        {/* Close Door Button */}
        <button
          onClick={() => setDoorsOpen(false)}
          disabled={isMoving || !doorsOpen}
          className={`w-10 h-10 border rounded-md text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
            !doorsOpen
              ? "bg-green-600 text-white border-green-800 cursor-not-allowed"
              : "bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:bg-gradient-to-b hover:from-[#6b6f91] hover:to-[#474a68] cursor-pointer"
          } ${isMoving && "opacity-50 cursor-not-allowed"}`}
        >
          {"><"}
        </button>
        {[1, 2, 3, 4, 5, 6].map((floor) => (
          <button
            key={floor}
            onClick={() => handleFloorClick(floor)}
            disabled={isMoving}
            className={`w-10 h-10 border rounded-md text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
              floor === currentFloor
                ? "bg-green-600 text-white border-green-800 cursor-not-allowed"
                : "bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:bg-gradient-to-b hover:from-[#6b6f91] hover:to-[#28292d] cursor-pointer"
            } ${isMoving && "opacity-50 cursor-not-allowed"}`}
          >
            {floor}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonPanel;
