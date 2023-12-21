import React from "react";
import CustomButton from "../CustomButton";

const HeroText = () => {
  return (
    <div className="xl:w-[630px] lg:w-[622px] bg-gradient-to-br from-analogous-color-2 to-dark-color lg:absolute lg:bottom-10 lg:left-20 p-8">
      <p className="mb-5 text-4xl font-bold text-white capitalize md:text-5xl">
        We crush your competitors, goals, and sales records - without the B.S.
      </p>
      <CustomButton text={"Get free consultation"} />
    </div>
  );
};

export default HeroText;
