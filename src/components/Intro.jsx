import { React, useState } from "react";
import img1 from "../assets/graduation-pic.png";

function Intro() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="intro"
      className="h-screen flex flex-col md:flex-row items-center justify-between bg-gray-100 px-6 md:px-16 py-8"
    >
      {/* Left Side: Bio */}
      <div className="flex-1 max-w-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hello, my name is William Graupmann
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          I’m a proud graduate of{" "}
          <span className="font-semibold text-blue-600">UW-Madison</span>, where
          I studied Computer Science. I’m passionate about
          <span className="font-semibold text-blue-600">
            {" "}
            web development
          </span>{" "}
          and
          <span className="font-semibold text-blue-600">
            {" "}
            mobile application development
          </span>
          , and I love creating intuitive, scalable digital solutions.
        </p>

        {showMore && (
          <p className="text-lg text-gray-600 mb-4">
            Currently, I’m diving deep into{" "}
            <span className="font-semibold text-blue-600">AWS</span>, preparing
            for the{" "}
            <span className="font-semibold text-blue-600">
              AWS Associate Solutions Architect certification
            </span>
            . My curiosity drives me to explore cutting-edge technologies and
            continuously learn new skills.
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={img1}
          alt="Your Profile"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg object-cover object-top"
        />
      </div>
    </section>
  );
}

export default Intro;
