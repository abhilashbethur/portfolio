import React from "react";

const FloorPlan = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[200px] h-[300px] rounded-md overflow-hidden border-[3px] border-[#5a556e] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] hover:brightness-110 transition"
    >
      <img
        src="/floor-plan.png"
        alt="Floor Plan"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default FloorPlan;
