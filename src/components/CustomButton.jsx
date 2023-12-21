import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="inline-block px-5 py-3 rounded bg-secondary-color">
      <p className="text-sm font-bold text-white uppercase">{text}</p>
    </button>
  );
};

export default CustomButton;
