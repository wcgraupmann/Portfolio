import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {" "}
      {/* Flexbox layout with no overflow */}
      <Navbar />
      <Intro />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
