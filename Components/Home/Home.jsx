import React from "react";

const Home = () => {
  return (
    <div className="Home-container h-[80vh] flex">
      <div className="left h-full w-1/2 flex flex-col justify-center items-center">
        <p className="text-primary text-sm">
          INNOVATION INCUBATION AND eNTREPRENEURSHIP CELL WCE
        </p>
        <p className="text-lg font-semibold w-3/4">
          Nurturing Innovations Creating Enterprises
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ac nulla vitae fermentum. In placerat eros a purus ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ac nulla vitae fermentum. In placerat eros a purus ornare</p>
      </div>
      <div className="carousal w-1/2"></div>
    </div>
  );
};

export default Home;
