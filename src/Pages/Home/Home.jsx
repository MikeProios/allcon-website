import React from "react";

import pic from "../../Utilities/Pictures/Logos/test.jpg";

import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="homeContainer">
        <img className="picture" src={pic} alt="logo" />
      </div>
    </React.Fragment>
  );
}

export default Home;
