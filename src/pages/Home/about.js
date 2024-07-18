import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Python",
    "C++",
    "Java",
    "C",
    "Flutter",
    "Dart",
    "Firebase",
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full sm:gap-2">
          <dotlottie-player
            src="https://lottie.host/6201a857-65ee-41d7-a473-3016faea8272/RxI6CPiwuj.json"
            background="transparent"
            speed="1"
            //style={{ width: "500px", height: "500px" }} // Changed to an object
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2  sm:w-full">
          \
          <p className="text-white">
            Hello, I am Divyansh Vishwakarma. I enjoy creating things that live
            on the internet, whether that be websites, applications, or anything
            in between. My goal is to always build products that provide
            pixel-perfect, performant experiences. My fervent dedication and
            swift adaptability drive me to seek collaborative environments where
            I can't only contribute to project success but also augment my skill
            set. My passion in Flutter development started back in 2021 when I
            decided to pursue a career in mobile application development. Since
            I have been working on various projects and have gained a lot of
            real world experience.
          </p>
          <p className="text-white">
            As a proactive third-year Computer Science student. My dedication to
            mastering Flutter stems from my passion for creating efficient,
            user-friendly applications. I thrive in collaborative environments
            where I can contribute to project success while enhancing my skills.
            My swift adaptability and eagerness to learn make me a valuable
            addition to any development team.
          </p>
        </div>
      </div>
      <div className="py-5 ">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
