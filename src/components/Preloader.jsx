import React, { useEffect, useRef, useState } from "react";
import "./Preloader.css";
import themeMusic from "../assets/theme.mp3";
import impactVideo from "../assets/impact.mp4";

const Preloader = ({ onFinish }) => {
  const [stage, setStage] = useState(0);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.warn("Audio play blocked:", err));
    }

    // Transition through intro words
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 3000), // switch to video
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage === 3 && videoRef.current) {
      videoRef.current.play().catch((err) => console.warn("Video play blocked:", err));

      // Force stop at 9 seconds
      const stopTimer = setTimeout(() => {
        videoRef.current.pause();
        onFinish();
      }, 2000);

      return () => clearTimeout(stopTimer);
    }
  }, [stage, onFinish]);

  if (stage === 4) return null;

  return (
    <div className="preloader-screen">
      <audio ref={audioRef} src={themeMusic} preload="auto" />
      {stage <= 2 && (
        <h1 className="intro-word fade-in">{["We", "Build", "Nation"][stage]}</h1>
      )}
      {stage === 3 && (
        <video
          className="impact-video"
          ref={videoRef}
          src={impactVideo}
          autoPlay
          muted
          playsInline
        />
      )}
    </div>
  );
};

export default Preloader;
