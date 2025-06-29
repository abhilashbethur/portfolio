const ButtonPanel = ({
  setDoorsOpen,
  isMoving,
  doorsOpen,
  handleFloorClick,
  currentFloor,
  toggleSound,
  soundEnabled,
}) => {
  const isDisabledOpenDoorBtn = isMoving || doorsOpen || currentFloor === 0;
  const isDisabledCloseDoorBtn = isMoving || !doorsOpen;
  return (
    <>
      <div className="w-[60px] bg-[#2e2d3e] border-[3px] border-[#5a556e] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-md flex flex-col-reverse gap-2 md:gap-6 p-2 md:p-10 mt-20 justify-center items-center">
        {/* Open Door Button */}
        <button
          onClick={toggleSound}
          className="w-10 h-10 border rounded-4xl text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:from-[#6b6f91] hover:to-[#474a68] transition cursor-pointer flex items-center justify-center"
          title="Toggle Sound"
        >
          {soundEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
        </button>
        <button
          onClick={() => setDoorsOpen(true)}
          disabled={isDisabledOpenDoorBtn}
          className={`w-10 h-10 border rounded-4xl text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
            isDisabledOpenDoorBtn
              ? "bg-green-600 text-white border-green-800 cursor-not-allowed opacity-50"
              : "bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:from-[#6b6f91] hover:to-[#474a68] cursor-pointer"
          }`}
        >
          {"<>"}
        </button>

        <button
          onClick={() => setDoorsOpen(false)}
          disabled={isDisabledCloseDoorBtn}
          className={`w-10 h-10 border rounded-4xl text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
            isDisabledCloseDoorBtn
              ? "bg-green-600 text-white border-green-800 cursor-not-allowed opacity-50"
              : "bg-gradient-to-b from-[#44475a] to-[#2e2e42] border-[#5a556e] text-[#e0d8c3] hover:from-[#6b6f91] hover:to-[#474a68] cursor-pointer"
          }`}
        >
          {"><"}
        </button>
        {[1, 2, 3, 4, 5, 6].map((floor) => (
          <button
            key={floor}
            onClick={() => handleFloorClick(floor)}
            disabled={isMoving}
            className={`w-10 h-10 border rounded-4xl text-base shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition ${
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

const SoundOnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12z" />
    <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const SoundOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.63 3.63a.996.996 0 0 0-1.41 0L.41 5.44 6.18 11.21c-.31.13-.64.19-.98.19H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21l1.41-1.41L3.63 3.63zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);
