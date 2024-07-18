import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] py-10 bg-primary flex-col items-start flex justify-center gap-8 w-2/3">
      <h1
        className="text-white text-2xl"
        style={{
          fontFamily: "Fredericka the Great, serif",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        Hi, I'm
      </h1>
      <h1
        className=" text-7xl sm:text-3xl text-tertiary font-semibold"
        style={{
          fontFamily: "Fredericka the Great, serif",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        Divyansh Vishwakarma.
      </h1>
      <h1
        className=" text-4xl sm:text-2xl text-white font-semibold"
        style={{
          fontFamily: "Fredericka the Great, serif",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        I build things for the Android & iOS as well as Web.
      </h1>
      <p className="text-white ">
        I am Full Stack Flutter Developer. Currently I'm working as a Flutter
        Developer in India. Also pursuing my Career in Bachelor of Technology in
        Computer Science. My fervent dedication and swift adaptability drive me
        to seek collaborative environments where I can not only contribute to
        project success but also augment my skill set.
      </p>
      <button className="border-2 sm:text-2xl border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
