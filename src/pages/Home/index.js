import React from "react";
import Headers from "../../components/Header";
import Intro from "./intro";
import About from "./about";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contacts from "./Contact";

function Home() {
  return (
    <div>
      <Headers />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
