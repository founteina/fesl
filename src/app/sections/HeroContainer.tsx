import React from "react";

const HeroContainer = () => {
  return (
    <div className="flex h-screen bg-light-third justify-center items-center">
      {/* Landing Page */}

      <div className="flex flex-col gap-10">
        {/* image + container */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-[50px] h-[50px] bg-light-primary"></div>
          <p>Hi, I'm Mia Cantik</p>
        </div>
        {/* end image + container */}

        {/* start text container */}
        <div className="flex justify-left items-center">
          <p>hihihihi</p>
        </div>
        {/* end text container */}

        {/* start contact container */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex justify-left items-center"> 
            <p>satu</p>
          </div>

          <div className="flex justify-center items-center"> 
            <p>dua</p>
          </div>

          <div className="flex justify-right items-center"> 
            <p>tiga</p>
          </div>
        </div>
        {/* end contact container */}

        
      </div>
      {/* End Landing Page */}
    </div>
  );
};

export default HeroContainer;
