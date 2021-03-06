import React from "react";
import Tabs from "./Tabs.js";
import ProjectPageBanner from "../Banner/ProjectPageBanner";
import projectInfo from "./projectInfo";
import arcade from "./images/arcade.jpg";
import leapmotion from "./images/leapmotion.jpeg";
import roomscanner from "./images/roomscanner.jpg";
import shoes from "./images/shoes.jpg";
import treadmill from "./images/treadmill.jpg";
import ProjectContent from "./projectContent";

const index = () => {
  return (
    <>
      <ProjectPageBanner />
      <Tabs>
        <div label="Treadmill">
          <ProjectContent project={projectInfo[0]} imgSrc={treadmill} />
        </div>
        <div label="Leap Arcade">
          <ProjectContent project={projectInfo[1]} imgSrc={arcade} />
        </div>
        <div label="Omni-directional Shoes">
          <ProjectContent project={projectInfo[2]} imgSrc={shoes} />
        </div>
        <div label="Room Scanner">
          <ProjectContent project={projectInfo[3]} imgSrc={roomscanner} />
        </div>
        <div label="Leap Motion">
          <ProjectContent project={projectInfo[4]} imgSrc={leapmotion} />
        </div>
      </Tabs>
    </>
  );
};

export default index;
