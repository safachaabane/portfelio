import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end developer",
          "Web Developer",
          "Full stack developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
