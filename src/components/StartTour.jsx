import React from "react";
import "../index.css";
import { useSpring, animated } from "react-spring";

const Button = ({ styles }) => {
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 900,
  });

  return (
    <animated.div style={buttonAnimation}>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-gradient rounded-[10px] outline-none border-2 border-solid border-[#3a6b98] hover:bg-blue-gradient hover:text-black transition-all duration-300 -mt-6 ${styles}`}
        onClick={() => window.open("https://guided-tour.vercel.app/", "_blank")}
      >
        Start Tour
      </button>
    </animated.div>
  );
};

export default Button;
