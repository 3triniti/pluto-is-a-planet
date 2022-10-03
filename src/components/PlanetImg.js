export const PlanetImage = ({ planet, display }) => {
  if (display === "overview") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet?.name.toLowerCase()}.svg`}
          alt={`planet of ${planet?.name}`}
          className="img"
        />
      </div>
    );
  }
  if (display === "structure") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet?.name.toLowerCase()}-internal.svg`}
          alt={`planet of ${planet?.name}-int`}
          className="img"
        />
      </div>
    );
  }
  if (display === "geology") {
    return (
      <div>
        <img
          className="img-planet"
          src={`/assets/planet-${planet?.name.toLowerCase()}.svg`}
          alt={`planet of ${planet?.name}`}
        />

        <img
          className="img-surface"
          src={`/assets/geology-${planet?.name.toLowerCase()}.png`}
          alt={`-`}
        />
      </div>
    );
  }
};
