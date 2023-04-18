import React from "react";
import Links from "/components/Links";

function About(props) {
  const { bio } = props;
const isBio = bio && bio.trim() !== '';
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio && <p>{bio}</p>}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links/>}
   </div>
  );
}
export default About;
