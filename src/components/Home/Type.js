import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings:[ 
        "Especialistas em", 
        "Sistemas Web", 
        "Web Landing page", 
        "Serviços DevOps", 
        "E-commerce",],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
