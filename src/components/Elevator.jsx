const Elevator = () => {
  return (
    <div className="w-full mx-auto bg-blue-950 h-screen px-20 pt-10">
      <div className="w-[150px] h-[100px] border-1 border-amber-500 mx-auto"></div>
      <div className="flex justify-center items-center pt-10">
        <div className="w-[150px] h-[100px] border-1 border-amber-500 mx-auto"></div>
        <div className="w-[40%] h-[700px] border-1 border-amber-200 flex">
          <div className="w-1/2 h-full border-1 border-amber-900"></div>
          <div className="w-1/2 h-full border-1 border-amber-900"></div>
        </div>
        <div className="w-[150px] h-[100px] border-1 border-amber-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Elevator;
