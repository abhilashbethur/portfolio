import { useEffect, useState } from "react";
import Modal from "./Modal";
import ButtonPanel from "./ButtonPanel";
import FloorPlan from "./FloorPlan";

const Elevator = () => {
  const [isFloorMapOpen, setIsFloorMapOpen] = useState(false);
  const [contentType, setContentType] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [showContentModal, setShowContentModal] = useState(false);

  const floorResumeMap = {
    1: "Summary",
    2: "Skills",
    3: "Experience",
    4: "Projects",
    5: "Education",
    6: "Contact Me",
  };

  // Trigger content modal when doors open and we're on a valid floor
  useEffect(() => {
    if (doorsOpen && currentFloor > 0 && floorResumeMap[currentFloor]) {
      setTimeout(() => {
        setContentType(floorResumeMap[currentFloor]);
        setShowContentModal(true);
      }, 500); // Delay to let doors finish opening
    } else if (contentType !== "Initial") {
      setShowContentModal(false);
      setContentType(null);
    }
  }, [doorsOpen, currentFloor]);

  const handleFloorClick = (floor) => {
    if (isMoving || floor === currentFloor) return;

    setDirection(floor > currentFloor ? "up" : "down");
    setDoorsOpen(false);
    setIsMoving(true);
    setShowContentModal(false);
    setContentType(null);

    setTimeout(() => {
      setCurrentFloor(floor);
      setDoorsOpen(true);
      setIsMoving(false);
      setDirection(null);
    }, 2000);
  };

  const getModalContent = () => {
    const GoBackButton = () => (
      <div className="flex justify-center mt-8">
        <button
          onClick={() => {
            setShowContentModal(false);
            setContentType(null);
            setDoorsOpen(false);
          }}
          className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg rounded-md hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-bold uppercase tracking-wider shadow-lg"
          style={{
            textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
          }}
        >
          Close Portal
        </button>
      </div>
    );

    switch (contentType) {
      case "Initial":
        return (
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
            <GoBackButton />
          </>
        );
      case "Summary":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">System Profile</h2>
            <p className="text-lg leading-relaxed mb-8">
              A passionate and performance-driven frontend engineer with over 5
              years of experience in building web applications using React.js,
              Next.js, and TypeScript. Adept at creating enterprise-grade UIs,
              optimizing performance, and ensuring a pixel-perfect user
              experience.
            </p>
            <GoBackButton />
          </>
        );
      case "Skills":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">Technical Arsenal</h2>
            <div className="text-left space-y-4 mb-8">
              <div>
                <strong>Languages:</strong> JavaScript, Python, C/C++, HTML/CSS,
                Shell Scripting (Bash)
              </div>
              <div>
                <strong>Frontend:</strong> React.js, Next.js, Material-UI,
                Tailwind CSS
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB
              </div>
              <div>
                <strong>Testing:</strong> Playwright, Jenkins
              </div>
              <div>
                <strong>Tools:</strong> Git, AWS EC2, Storybook, Azure, VS Code
              </div>
            </div>
            <GoBackButton />
          </>
        );
      case "Experience":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">Mission History</h2>
            <div className="text-left space-y-6 mb-8">
              <div>
                <strong>Software Engineer</strong> @ Tech Prescient (Dec 2022 –
                Present)
                <br />
                - Led Chinese localization using React-Intl and i18next.
                <br />
                - Built 30+ enterprise components in Next.js.
                <br />
                - Developed drag-and-drop toolkit, dashboard UIs, and optimized
                marketing site.
                <br />- Designed Playwright tests and internal design systems.
              </div>
              <div>
                <strong>Senior Software Engineer</strong> @ Bosch (Jul 2019 –
                Dec 2022)
                <br />
                - Created internal apps using React and Node.js.
                <br />
                - Migrated codebases to TypeScript.
                <br />- Mentored juniors and led frontend best practices.
              </div>
            </div>
            <GoBackButton />
          </>
        );
      case "Projects":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">Project Archives</h2>
            <div className="text-left space-y-4 mb-8">
              <div>
                • IEEE Publication: Co-authored Envirobat 2.1 - urban air
                monitoring system (2017)
              </div>
              <div>• Marketing site optimization: Reduced load time by 40%</div>
              <div>• Enterprise component library: 30+ reusable components</div>
            </div>
            <GoBackButton />
          </>
        );
      case "Education":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">Academic Records</h2>
            <div className="text-left space-y-4 mb-8">
              <div>
                <strong>The National Institute of Engineering</strong>
                <br />
                B.E. in Electronics and Communication - CGPA 8.58 (2015 – 2019)
              </div>
              <div>
                <strong>ASC Independent PU College</strong>
                <br />
                Class XII – 96% (2013 – 2015)
              </div>
            </div>
            <GoBackButton />
          </>
        );
      case "Contact Me":
        return (
          <>
            <h2 className="text-3xl font-bold mb-6">Communication Channels</h2>
            <div className="text-left space-y-4 mb-8">
              <div>
                <strong>Phone:</strong> 735-367-7513
              </div>
              <div>
                <strong>Email:</strong> abhilashbethur@gmail.com
              </div>
              <div>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/abhilashbethur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/abhilashbethur
                </a>
              </div>
              <div>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/abhilashbethur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/abhilashbethur
                </a>
              </div>
            </div>
            <GoBackButton />
          </>
        );
      default:
        return null;
    }
  };

  const floorMapModal = (
    <>
      <h2 className="text-3xl font-bold mb-6">Navigation System</h2>
      <p className="text-lg mb-8 leading-relaxed">
        Each floor in this elevator corresponds to a section of my portfolio.
        Select a destination to explore more details about that section.
      </p>
      <div className="text-left space-y-3 mb-8">
        {Object.entries(floorResumeMap).map(([floor, section]) => (
          <div
            key={floor}
            className="flex justify-between border-b pb-2 border-cyan-600 cursor-pointer hover:text-cyan-300 transition-colors"
            onClick={() => {
              setContentType(section);
              setIsFloorMapOpen(false);
              setShowContentModal(true);
            }}
          >
            <span className="font-medium">Floor {floor}</span>
            <span>{section}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsFloorMapOpen(false)}
          className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg rounded-md hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-bold uppercase tracking-wider shadow-lg"
          style={{
            textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
          }}
        >
          Close Map
        </button>
      </div>
    </>
  );

  return (
    <div className="w-full h-screen mx-auto bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] px-4 md:px-20 text-white overflow-hidden">
      <div className="flex justify-center items-center pt-10 gap-4 md:gap-20 h-full max-w-[1440px] mx-auto">
        <FloorPlan onClick={() => setIsFloorMapOpen(true)} />

        <div className="flex flex-col gap-10 w-full md:max-w-[50%] h-full">
          <div className="w-[150px] h-[100px] mx-auto bg-[#1f2233] text-[#e0d8c3] flex items-center justify-center text-3xl font-bold rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] border-[3px] border-[#444656] relative flex-shrink-0">
            {!direction && currentFloor}
            {direction === "up" && (
              <span className="ml-2 text-green-400 animate-bounce">
                &#8593;
              </span>
            )}
            {direction === "down" && (
              <span className="ml-2 text-red-400 animate-bounce">&#8595;</span>
            )}
          </div>

          <div
            className="w-full bg-gradient-to-b from-[#1a1a1f] via-[#2a2a36] to-[#1a1a1f] border-[4px] border-[#5c5c72] flex shadow-inner rounded-md overflow-hidden relative flex-1"
            style={{ height: "calc(100vh - 200px)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="w-32 h-48 bg-gradient-to-b from-[#2a2a36] to-[#1a1a1f] rounded-lg flex items-center justify-center border-2 border-[#5c5c72]">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e0d8c3] mb-2">
                      Floor {currentFloor}
                    </div>
                    {currentFloor > 0 && floorResumeMap[currentFloor] && (
                      <div className="text-sm text-[#a0a0b0]">
                        {floorResumeMap[currentFloor]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-r-[2px] border-[#7a7a99] transform transition-transform duration-1000 z-20 ${
                doorsOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            />
            <div
              className={`w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-l-[2px] border-[#7a7a99] transform transition-transform duration-1000 z-20 ${
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

      {/* Floor Map Modal */}
      <Modal
        open={isFloorMapOpen}
        onClose={() => setIsFloorMapOpen(false)}
        content={floorMapModal}
      />

      {/* Content Modal - expands from doors */}
      <Modal
        open={showContentModal}
        onClose={() => {
          setShowContentModal(false);
          setContentType(null);
          setDoorsOpen(false);
        }}
        content={getModalContent()}
        expandFromDoors={true}
      />
    </div>
  );
};
export default Elevator;
