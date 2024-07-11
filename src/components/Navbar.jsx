// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import { close, github, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   // Animation for the navbar items to slide in from the left
//   const itemAnimation = useSpring({
//     from: { opacity: 0, transform: "translateX(-50px)" },
//     to: { opacity: 1, transform: "translateX(0)" },
//     config: { tension: 300, friction: 20 },
//   });

//   // Animation for the mobile sidebar to fade in
//   const sidebarAnimation = useSpring({
//     opacity: toggle ? 1 : 0,
//     transform: toggle ? "translateX(0)" : "translateX(100%)",
//     config: { tension: 300, friction: 20 },
//   });

//   return (
//     <animated.nav
//       className="w-full flex py-6 justify-between items-center navbar"
//       style={itemAnimation}
//     >
//       <div className="flex items-center mr-6">
//         <img src={github} alt="GitHub Logo" className="w-[50px] h-[50px]" />
//         <div className="text-white flex items-center ml-3">
//           <span className="text-[#4882ba] font-bold text-xl mr-1.5">GitHub</span>{" "}
//           <span className="font-light text-xl">Commit Notifier</span>
//         </div>
//       </div>

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <animated.li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
//             onClick={() => setActive(nav.title)}
//             style={itemAnimation}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </animated.li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <animated.div
//           className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
//           style={sidebarAnimation}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <animated.li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//                 style={itemAnimation}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </animated.li>
//             ))}
//           </ul>
//         </animated.div>
//       </div>
//     </animated.nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { close, github, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Animation for the navbar items to slide in from the left
  const itemAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 300, friction: 20 },
  });

  // Animation for the mobile sidebar to fade in
  const sidebarAnimation = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translateX(0)" : "translateX(100%)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.nav
      className="w-full flex py-6 justify-between items-center navbar relative z-10"
      style={itemAnimation}
    >
      <div className="flex items-center mr-6">
        <img src={github} alt="GitHub Logo" className="w-[50px] h-[50px]" />
        <div className="text-white flex items-center ml-3">
          <span className="text-[#4882ba] font-bold text-xl mr-1.5">GitHub</span>{" "}
          <span className="font-light text-xl">Commit Notifier</span>
        </div>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <animated.li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
            onClick={() => setActive(nav.title)}
            style={itemAnimation}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </animated.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <animated.div
            className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20"
            style={sidebarAnimation}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <animated.li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false); // Close sidebar on click
                  }}
                  style={itemAnimation}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </animated.li>
              ))}
            </ul>
          </animated.div>
        )}
      </div>
    </animated.nav>
  );
};

export default Navbar;
