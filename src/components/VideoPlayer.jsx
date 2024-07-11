import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        onClose();
      }
    };

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullScreenChange);

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-2xl p-2 z-50"
        >
          &times;
        </button>
        <video
          ref={videoRef}
          controls
          className="w-full h-full max-w-screen max-h-screen"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
