import { useParams } from "react-router-dom";
import { PlanetImage } from "./components/PlanetImg";
import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import Navbar from "./components/Navbar";

function Planet() {
  const [planet, setPlanet] = useState();
  const { planetName } = useParams();
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: {
        "X-Api-Key": "R0OiSZtZcnkXf3PiRevd8w==PQs08VudmVOjp46D",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlanet(data[0]))
      .catch((err) => console.error(err));
  }, [planetName]);

  return (
    <div className="planet">
      <PlanetImage planet={planet} />
      <Content planet={planet} />
      <Navbar planet={planet} setPlanet={setPlanet} />
    </div>
  );
}

export default Planet;
