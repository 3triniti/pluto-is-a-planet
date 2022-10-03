export const Button = ({ setDisplay }) => {
  return (
    <div className="buttons">
      <button onClick={() => setDisplay("overview")}>
        <span>01</span>Overview
      </button>
      <button onClick={() => setDisplay("structure")}>
        <span>02</span>Internal Structure
      </button>
      <button onClick={() => setDisplay("geology")}>
        <span>03</span>Surface Geology
      </button>
    </div>
  );
};
