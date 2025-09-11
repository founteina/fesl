"use client";
import React from "react";
import BlurText from "../components/BlurText";
import Plasma from "../components/Plasma";

const page = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="flex w-full h-screen justify-center items-center relative">
      <div>
          <BlurText
            text="Hi my name is Maria Founteina Liwe!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[50px] font-bold text-white z-20"
          />
      </div>
      <div className="absolute w-full h-screen z-10 opacity-50">
        <Plasma
          color="#F98B88"
          speed={1}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={false}
        />
      </div>
    </div>
  );
};

export default page;
