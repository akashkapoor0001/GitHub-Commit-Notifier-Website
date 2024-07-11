import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import VideoPlayer from "./VideoPlayer"; // Make sure to import the VideoPlayer component

const PlayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
        onClick={handleClick}
      >
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Play</span>
            </p>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </div>
          
          <p className="font-poppins font-medium text-[22px] leading-[27.4px]">
            <span className="text-gradient">Video</span>
          </p>
        </div>
      </div>
      {isPlaying && <VideoPlayer src=".\src\assets\Video.mp4" onClose={handleClose} />}
    </>
  );
};

export default PlayVideo;
