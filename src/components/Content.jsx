import React from "react";
import CustomButton from "./CustomButton";

const Content = ({ reverse = false, imageSrc, title, desciption }) => {
  return (
    <div
      className={
        "flex items-center flex-col lg:mx-0 md:mx-10 sm:mx-8 mx-5 mt-14 " +
        (reverse ? "md:flex-row-reverse" : "md:flex-row items-center")
      }
    >
      <img
        src={imageSrc}
        className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] w-[275px] h-[275px]"
      />
      <div className="md:w-[542px]">
        <p className="text-primary-color text-[27px] font-semibold md:text-left text-center">
          {title}
        </p>
        <p className="py-5 text-base text-center md:text-left">{desciption}</p>
        <div className="flex justify-center md:justify-start">
          <CustomButton text="Learn More" />
        </div>
      </div>
    </div>
  );
};
export default Content;
