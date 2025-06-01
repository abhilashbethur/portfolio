import { useState } from "react";
import Modal from "./Modal";
import ButtonPanel from "./ButtonPanel";
import FloorPlan from "./FloorPlan";

const Elevator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentType, setContentType] = useState(null); // Which modal content to show
  const [currentFloor, setCurrentFloor] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  const floorResumeMap = {
    1: "Summary",
    2: "Skills",
    3: "Experience",
    4: "Projects",
    5: "Education",
    6: "Contact Me",
  };

  const handleFloorClick = (floor) => {
    if (isMoving || floor === currentFloor) return;

    setDirection(floor > currentFloor ? "up" : "down");
    setDoorsOpen(false);
    setIsMoving(true);

    setTimeout(() => {
      setCurrentFloor(floor);
      setDoorsOpen(true);
      setIsMoving(false);
      setDirection(null);
    }, 2000);
  };

  const getModalContent = () => {
    switch (contentType) {
      case "Summary":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Technical Skills
            </h2>
            <ul className="text-gray-700 text-lg space-y-2 mb-8">
              <li>
                <strong>Languages:</strong> JavaScript, Python, C/C++, HTML/CSS,
                Shell Scripting (Bash)
              </li>
              <li>
                <strong>Frontend:</strong> React.js, Next.js, Material-UI,
                Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB
              </li>
              <li>
                <strong>Testing:</strong> Playwright, Jenkins
              </li>
              <li>
                <strong>Tools:</strong> Git, AWS EC2, Storybook, Azure, VS Code
              </li>
            </ul>
            <GoBackButton />
          </>
        );
      case "Experience":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Experience
            </h2>
            <div className="text-gray-700 text-lg space-y-6 mb-8">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Projects & Achievements
            </h2>
            <ul className="text-gray-700 text-lg list-disc pl-5 mb-8">
              <li>
                IEEE Publication: Co-authored Envirobat 2.1 - urban air
                monitoring system (2017)
              </li>
              <li>Marketing site optimization: Reduced load time by 40%</li>
              <li>Enterprise component library: 30+ reusable components</li>
            </ul>
            <GoBackButton />
          </>
        );
      case "Education":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
            <ul className="text-gray-700 text-lg list-disc pl-5 mb-8">
              <li>
                <strong>The National Institute of Engineering</strong>
                <br />
                B.E. in Electronics and Communication - CGPA 8.58 (2015 – 2019)
              </li>
              <li>
                <strong>ASC Independent PU College</strong>
                <br />
                Class XII – 96% (2013 – 2015)
              </li>
            </ul>
            <GoBackButton />
          </>
        );
      case "Contact Me":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Me
            </h2>
            <ul className="text-gray-700 text-lg space-y-2 mb-8">
              <li>
                <strong>Phone:</strong> 735-367-7513
              </li>
              <li>
                <strong>Email:</strong> abhilashbethur@gmail.com
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/abhilashbethur"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  linkedin.com/in/abhilashbethur
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/abhilashbethur"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  github.com/abhilashbethur
                </a>
              </li>
            </ul>
            <GoBackButton />
          </>
        );
      default:
        return null;
    }
  };

  const GoBackButton = () => (
    <div className="flex justify-center">
      <button
        onClick={() => {
          setContentType(null);
          setIsModalOpen(false);
        }}
        className="px-6 py-3 bg-gray-300 text-gray-800 text-lg rounded-md hover:bg-gray-400 transition cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );

  const floorMapModal = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Floor Map</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Each floor in this elevator corresponds to a section of my portfolio.
        Click on a floor label to explore more details about that section.
      </p>
      <ul className="text-left space-y-3 text-lg mb-8">
        {Object.entries(floorResumeMap).map(([floor, section]) => (
          <li
            key={floor}
            className="flex justify-between border-b pb-2 border-gray-300 cursor-pointer hover:text-blue-600"
            onClick={() => {
              setContentType(section);
              setIsModalOpen(false);
            }}
          >
            <span className="font-medium text-gray-700">Floor {floor}</span>
            <span className="text-gray-500">{section}</span>
          </li>
        ))}
      </ul>
      <GoBackButton />
    </>
  );

  return (
    <div className="w-full h-full mx-auto bg-gradient-to-b from-[#0d0f1a] to-[#1a1c2b] px-20 text-white">
      <div className="flex justify-center items-center pt-10 gap-10">
        <FloorPlan onClick={() => setIsModalOpen(true)} />

        <div className="flex flex-col items-center gap-10 min-w-[40%]">
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

          <div className="w-full h-[700px] bg-gradient-to-b from-[#1a1a1f] via-[#2a2a36] to-[#1a1a1f] border-[4px] border-[#5c5c72] flex shadow-inner rounded-md overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <img
                  src="/door.png"
                  alt="Elevator Inside"
                  className="object-contain"
                />
                <div
                  onClick={() => setContentType(floorResumeMap[currentFloor])}
                  className="absolute top-32 left-16 text-red-900 border-2 border-red-700 bg-emerald-300 py-4 px-2 w-[160px] text-center rounded-md uppercase font-bold shadow-lg cursor-pointer hover:bg-emerald-400"
                >
                  {floorResumeMap[currentFloor]}
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 h-full bg-gradient-to-b from-[#3d3d52] to-[#1f1f33] border-r-[2px] border-[#7a7a99] transform transition-transform duration-1000 z-11 ${
                doorsOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            />
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

      {/* Modal Section */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={floorMapModal}
      />

      <Modal
        open={!!contentType}
        onClose={() => setContentType(null)}
        content={getModalContent()}
      />
    </div>
  );
};

export default Elevator;
