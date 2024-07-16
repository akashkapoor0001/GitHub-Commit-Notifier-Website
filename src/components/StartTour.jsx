import React from "react";

const Button = ({ styles }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={() => window.open("https://guided-tour.vercel.app/", "_blank")}
  >
    Start Tour
  </button>
);

export default Button;
