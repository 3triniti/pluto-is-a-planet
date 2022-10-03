import { useState } from "react";
import { Info } from "./Info";
import { PlanetImage } from "./PlanetImg";
import { Button } from "./Button";

export const Content = ({ planet }) => {
  const [display, setDisplay] = useState("overview");

  return (
    <div className="content">
      <div className="box">
        <PlanetImage planet={planet} display={display} />
      </div>
      <div className="summary">
        <Info planet={planet} display={display} />
        <Button setDisplay={setDisplay} />
      </div>
    </div>
  );
};
