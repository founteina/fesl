import React from "react";
import ProfileContainer from "./components/ProfileContainer";

const HeroContainer = () => {
  return (
    <div className="flex h-screen bg-light-primary justify-center items-center">
      <ProfileContainer />
    </div>
  );
};

export default HeroContainer;
