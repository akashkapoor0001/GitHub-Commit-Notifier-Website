// import styles from "../style";
// import { discount, github } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             Stay in Sync with <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">GitHub</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <GetStarted />
//           </div>
//         </div>

//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
//           Commits.
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Monitor your repositories effortlessly with real-time commit notifications.
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img src={github} alt="billing" className="w-[550px] h-[550px] relative z-[5] wavy-image" />

//         {/* gradient */}
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//         {/* gradient */}

//       </div>

//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "../style";
import { github } from "../assets";
import PlayVideo from "./PlayVideo";

const Hero = () => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 300,
  });

  const pAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-50px,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 600,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 900,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 1200,
  });

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <animated.h1
            style={textAnimation}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
          >
            Stay in Sync with <br className="sm:block hidden" />{" "}
            <span className="text-gradient">GitHub</span>{" "}
          </animated.h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <animated.div style={buttonAnimation}>
              <PlayVideo />
            </animated.div>
          </div>
        </div>

        <animated.h1
          style={textAnimation}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          Commits.
        </animated.h1>
        <animated.p style={pAnimation} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Monitor your repositories effortlessly with real-time commit notifications.
        </animated.p>
      </div>

      <animated.div
        style={imageAnimation}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={github} alt="billing" className="w-[480px] h-[480px] relative z-[5] wavy-image" />

        {/* gradient */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[70%] h-[70%] right-40 bottom-30 blue__gradient" />
        <div className="absolute z-[0] w-[70%] h-[70%] left-40 top-0 blue__gradient" />

        {/* gradient */}
      </animated.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <animated.div style={buttonAnimation}>
          <PlayVideo />
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;

