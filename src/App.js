import React, { Fragment } from "react";
import "swiper/css/swiper.css";
import UpcomingTalks from "./Components/HomePage/UpcomingTalks/UpcomingTalks";
import UpcomingActivities from "./Components/HomePage/UpcomingActivities/UpcomingActivities";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <UpcomingActivities />
      </div>
      <div>
        <UpcomingTalks />
      </div>
    </div>
  );
}

export default App;
