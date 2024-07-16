import React from "react";
import "../index.css";

const Button = ({ styles }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-gradient rounded-[10px] outline-none border-2 border-solid border-#3a6b98 hover:bg-blue-gradient hover:text-black transition-all duration-300 ${styles}`}
    onClick={() => window.open("https://guided-tour.vercel.app/", "_blank")}
  >
    Start Tour
  </button>
);

export default Button;
