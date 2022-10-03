import React from "react";
import { useState, useEffect } from "react";
import { planetInfo } from "./planet-info";

export const Info = ({ planet, display }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const info = planetInfo.find((obj) => {
      return obj.name === planet.name;
    });
    setText(info?.[display].content);
  }, [display, planet]);

  return (
    <div className="info">
      {/* <h1 className="planetName">{planet.name}</h1> */}
      <div className="text">{text}</div>
    </div>
  );
};
