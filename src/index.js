//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();
currentTime;
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

var timeMessage;
var currentHours = currentTime.getHours();

const customHeading = {
  color: ""
};
if (currentHours > 0 && currentHours < 13) {
  timeMessage = "Good Morning";
  customHeading.color = "red";
} else if (currentHours > 12 && currentHours < 19) {
  timeMessage = "Good Afternoon";
  customHeading.color = "green";
} else {
  timeMessage = "Good Evening";
  customHeading.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customHeading}>
      {timeMessage}
    </h1>
    <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
  </div>,
  document.getElementById("root")
);
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
