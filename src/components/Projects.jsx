import React, { useState } from "react";

import img1 from "../assets/graduation-pic.png";
import imgWitAi from "../assets/GBwitai.png";
import imgEmptyCart from "../assets/GBwebsiteEmpty.png";
import imgRecipe from "../assets/GBwebsiteRecipe.png";
import imgMobileList from "../assets/GBgrocerylist.PNG";
import imgMobileTransactions from "../assets/GBtransactions.PNG";

import styleMirror from "../assets/SyleMirrorDemo.mp4";

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [screenshotIndex, setScreenshotIndex] = useState(0); // Track the nested screenshot carousel

  const handleSelectProject = (index) => {
    setSelectedProjectIndex(index);
    setCarouselIndex(0);
    setScreenshotIndex(0); // Reset screenshot index when switching projects
  };

  const projects = [
    {
      title: "GroceryBuddy",
      description: [
        "I wanted to find a better way to coordinate and track grocery shopping for individuals, roommates, and families.",
        "So, I decided to create a web application to generate grocery lists based on the recipes a household planned to cook!",
        "I also wanted to find a way to sort grocery lists into specific categories to optimize the time spent grocery shopping.",
        "Finally, I needed to ensure the user had access to the application on their mobile device ",
      ],
      techStack: [
        "Web Application Frontend: React, Tesseract OCR, Wit AI",
        "Mobile Application Frontend: React Native + Expo",
        "Backend: Node.js",
        "Authentication: JSON Web Tokens",
      ],
      keyFeatures: [
        "Tesseract OCR: allows the user to upload a picture or screenshot of a recipe and automatically populate the items into their grocery list",
        "Wit AI: trained a data model so that any item that is added to the grocery list is correctly categorized",
        "Mobile App: users can use the mobile app to view the grocery list when shopping",
        `Transactions: items that are bought by a user are added to a transaction list to track purchases within households`,
        "User Authentication: utilized JSON Web Tokens to authenticate users",
      ],
      futureSteps: [
        "Groups: Users can create and join private grocery list groups for one's household",
        "Receipts: Add the ability to upload a receipt to the associated transaction",
        "AWS: deploy the application with AWS",
      ],
      screenshots: [
        {
          image: imgWitAi,
          type: "image",
          title: "Wit Ai Entity Training",
          explanation:
            "I created distinct entities for each main food category within a grocery store such that items added to the grocery list are categorized appropriately.",
        },
        {
          image: imgEmptyCart,
          type: "image",
          title: "Item + Recipe From",
          explanation:
            "Users can either upload an entire recipe or add individual items to their grocery list",
        },
        {
          image: imgRecipe,
          type: "image",
          title: "Recipe View",
          explanation: "Items can be edited or deleted as needed",
        },
        {
          image: imgMobileList,
          type: "image",
          title: "Mobile Application: Grocery List",
          explanation:
            "Users can select items at the store as they go and submit the list to remove them from the grocery list when they checkout",
        },
        {
          image: imgMobileTransactions,
          type: "image",
          title: "Mobile Application: Transactions",
          explanation: `Items that are "checked out" by a user are moved to a transaction object that displays who purchased the items - helping households track expenses`,
        },
      ],
    },
    {
      title: "StyleMirror",
      description: [
        "StyleMirror was a group project for my Mobile Foundations class at UW - Madison.",
        "It allows users to visualize how clothes would look on them by creating a virtual mirror!",
        "The app uses the fal-ai/idm-vton API to generate accurate virtual try-ons for various clothing items.",
      ],
      techStack: [
        "React Native",
        "Expo",
        "Express.js",
        "fal-ai/idm-vton API",
        "Firebase",
      ],
      keyFeatures: [
        "Virtual try-on by allowing a user to overlay an image of a clothing item onto an image of themselves",
        "Users could upload images from their Photos app or take a new photo",
        "Realistic, accurate clothing visualization",
      ],
      futureSteps: [
        "Allow users to share the generated outfit via Text or Social Media",
        "Deploy with AWS",
      ],
      screenshots: [
        {
          image: styleMirror,
          type: "video",
          title: "StyleMirror Demo",
          explanation:
            "This screenshot shows the augmented reality feature, where users can try on clothing items virtually.",
        },
      ],
    },
  ];

  const selectedProject = projects[selectedProjectIndex];

  // Handle clicking on slide indicators
  const goToSlide = (index) => {
    setCarouselIndex(index);
  };

  const slideNames = [
    "Story",
    "Tech Stack",
    "Key Features",
    "Screenshots",
    "Next Steps",
  ];

  const handleImageClick = (index) => {
    setExpandedImage(index); // Set the clicked image as expanded
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setExpandedImage(null); // Reset the expanded image
  };

  const handleScreenshotNavigation = (direction) => {
    if (direction === "next") {
      setScreenshotIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.screenshots.length
      );
    } else if (direction === "prev") {
      setScreenshotIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.screenshots.length) %
          selectedProject.screenshots.length
      );
    }
  };

  const handleMediaClick = (index) => {
    setExpandedImage(index); // Set the clicked media (image or video) as expanded
    setModalOpen(true); // Open the modal
  };

  return (
    <section
      id="projects"
      className="w-full h-screen py-8 px-6 md:px-16 flex flex-col justify-between bg-slate-200"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        {/* My Projects */}
      </h2>
      {/* Buttons Container (Horizontal row above selected project) */}
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
      {/* Full Screen Carousel Display */}
      <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
        {/* Left side - Descriptions and Content */}
        <div className="w-full h-full bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            {slideNames[carouselIndex]}
          </h3>
          <div className="space-y-4 h-full overflow-y-auto">
            {/* Show different content based on carouselIndex */}
            {carouselIndex === 0 && (
              <div>
                {selectedProject.description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {carouselIndex === 1 && (
              <ul className="list-disc pl-5 text-lg text-gray-600">
                {selectedProject.techStack.map((tech, index) => (
                  <li className="mb-3" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {carouselIndex === 2 && (
              <ul className="list-disc pl-5 text-lg text-gray-600">
                {selectedProject.keyFeatures.map((feature, index) => (
                  <li className="mb-3" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {carouselIndex === 3 ? (
              selectedProject.screenshots?.length > 0 ? (
                <div className="flex flex-col items-center w-full">
                  {/* Screenshot and Explanation */}
                  <div className="flex items-start justify-start w-full max-w-4xl mb-6">
                    {/* Explanation Section */}
                    <div className=" w-full sm:w-1/2 pl-6 text-lg text-gray-600 flex flex-col justify-start items-start text-left">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {selectedProject.screenshots[screenshotIndex]?.title ||
                          "Untitled"}
                      </h3>
                      <p>
                        {selectedProject.screenshots[screenshotIndex]
                          ?.explanation || "No explanation available."}
                      </p>
                    </div>

                    {/* Media (Image or Video) */}
                    <div className="w-full sm:w-1/2 flex justify-center">
                      {selectedProject.screenshots[screenshotIndex]?.type ===
                      "image" ? (
                        <img
                          src={
                            selectedProject.screenshots[screenshotIndex]?.image
                          }
                          alt={`Screenshot ${screenshotIndex + 1}`}
                          className="w-auto h-44 mb-4 cursor-pointer object-contain"
                          onClick={() => handleMediaClick(screenshotIndex)}
                        />
                      ) : selectedProject.screenshots[screenshotIndex]?.type ===
                        "video" ? (
                        <video
                          src={
                            selectedProject.screenshots[screenshotIndex]?.image
                          }
                          controls
                          className="w-auto h-44 mb-4 cursor-pointer object-contain"
                          onClick={() => handleMediaClick(screenshotIndex)}
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Circle Navigation */}
                  <div className="flex justify-center mb-6">
                    {selectedProject.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setScreenshotIndex(index)}
                        className={`w-3 h-3 mx-2 rounded-full ${
                          screenshotIndex === index
                            ? "bg-blue-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        } transition-colors`}
                      ></button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-gray-600 text-lg text-center">
                  No screenshots or videos available for this project.
                </div>
              )
            ) : null}

            {carouselIndex === 4 && (
              <div>
                {selectedProject.futureSteps.map((step, index) => (
                  <p key={index} className="text-lg text-gray-600 mb-3">
                    {step}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8">
        {slideNames.map((slideName, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`px-4 py-2 mx-2 rounded-lg font-medium text-sm ${
              carouselIndex === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            {slideName}
          </button>
        ))}
      </div>
      {/* Modal for Expanded Image */}
      {/* Modal for Expanded Image or Video */}
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            {selectedProject.screenshots[expandedImage]?.type === "image" ? (
              <img
                src={selectedProject.screenshots[expandedImage]?.image}
                alt="Expanded Screenshot"
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg"
              />
            ) : selectedProject.screenshots[expandedImage]?.type === "video" ? (
              <video
                src={selectedProject.screenshots[expandedImage]?.image}
                controls
                autoPlay
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg"
              />
            ) : null}

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl bg-black rounded-full p-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
