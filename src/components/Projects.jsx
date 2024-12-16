import React, { useState } from "react";
// import styleMirrorDemo from "../assets/styleMirrorDemo-2.mp4"; // Path to the .mp4 file

const projects = [
  {
    title: "GroceryBuddy",
    description:
      "I wanted to make it easier to coordinate grocery shopping for individuals, families, and roommates",
    techStack: "We developed built with React Native and ",
    futureSteps: "",
    videoLink: "https://www.youtube.com/embed/example1",
  },
  {
    title: "StyleMirror",
    description:
      "In my last class at UW - Madison, I co-authored a mobile application to improve the online shopping experience",
    techStack:
      "We developed the frontend with React Native and Expo. The backend was hosted in an Express.js server. The key feature of our app was utilizing the fal-ai/idm-vton API.",
    futureSteps: "",
    videoLink: "https://www.youtube.com/shorts/7VlYQ8MZmtQ?feature=share",
  },
];

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleSelectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <section id="projects" className="h-screen bg-gray-50 py-8 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        My Projects
      </h2>

      <div className="flex justify-center space-x-4 mb-8">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => handleSelectProject(index)}
            className={`px-4 py-2 rounded-lg font-medium text-lg ${
              selectedProjectIndex === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start h-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {selectedProject.description}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {selectedProject.techStack}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {selectedProject.futureSteps}
            </p>
          </div>
        </div>

        {/* Project Video */}
        {/* <div className="md:w-1/3 flex justify-center">
          <div className="aspect-w-16 aspect-h-9">
            <video width="100%" controls className="shadow-lg">
              <source src={styleMirrorDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
