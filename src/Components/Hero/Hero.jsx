import React from "react";
import "./Hero.css";
import arrorbtn from "../../assests/arrow_btn.png";
import playIcon from "../../assests/play_icon.png";
import pauseIcon from "../../assests/pause_icon.png";

const Hero = ({
  setplayStatus,
  heroData,
  heroCount,
  setheroCount,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrorbtn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => {
              setheroCount(0);
            }}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => {
              setheroCount(1);
            }}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => {
              setheroCount(2);
            }}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => {
              setplayStatus(!playStatus);
            }}
            src={playStatus === true ? pauseIcon : playIcon}
            alt="" 
          />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
