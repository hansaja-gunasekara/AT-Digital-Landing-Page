import React from "react";
import HeroImage from "../Assets/hero_image.png";
import HeroText from "../components/home/HeroText";
import Content from "../components/Content";

import Image1 from "../Assets/image_1.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <img src={HeroImage} className="w-full" />
        <HeroText />
      </div>
      <Content
        imageSrc={Image1}
        title="Web & Mobile App Development"
        desciption="Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online."
      />
      <Content
        imageSrc={Image2}
        reverse={true}
        title="Digital Strategy Consulting"
        desciption="Your digital strategy should complement the overall marketing strategy
        of the company. In online marketing, each component will never work in isolation
        and every business needs a different mix. We provide a clear concept and strategic
        overview to find the most efficient model for your business."
      />
    </div>
  );
};

export default Home;
