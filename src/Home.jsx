import React from "react";
import web from "../src/images/img2.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        btnname="Get Started"
        visit="/service"
        imgsrc={web}
      />
    </>
  );
};

export default Home;
