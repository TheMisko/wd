import React from "react";
import Nav from "../components/nav";
import NavBottom from "../components/navBottom";

const Home = () => {
  const url =
    "https://www.tokkoro.com/picsup/3112580-architectural-design_architecture_black_black-and-white_building_clouds_contemporary_downtown_glass_light_low-angle-shot_modern_office_perspective_reflection_sky_skyscraper_steel_street_window.jpg";
  return (
    <div className="home-container">
      <NavBottom />
      <Nav />
      <div className="home-text">
        <h1>
          THE INTERSECTION BETWEEN
          <br />
          DESIGN & ARCHITECTURE
        </h1>
      </div>

      <img src={url} />
    </div>
  );
};

export default Home;
