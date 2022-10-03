import { Routes, Route, Navigate } from "react-router-dom";
import Planet from "./Planet";

// import { PlanetInfo } from "./components/PlanetInfo";

import Page from "./Page.js";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Page />}>
          <Route path="/" element={<Navigate to="/earth" />} />
          <Route path="/:planetName" element={<Planet />} />
        </Route>
      </Routes>
    </>
  );
};
//   useEffect(() => {
//     PlanetInfo.find()
//   }, [planetName])

// // function Planet() {
// //   const { planetName } = useParams();
// //   return <>current planet is {planetName}</>;
// // }
//     <div className="App">
//       <Navbar />
//       <Route path="/Mercury" element={<Mercury />} />
//       <Route path="/Venus" element={<Venus />} />
//       <Route path="/Earth" element={<Earth />} />
//       <Route path="/Mars" element={<Mars />} />
//       <Route path="/Jupiter" element={<Jupiter />} />
//       <Route path="/Saturn" element={<Saturn />} />
//       <Route path="/Uranus" element={<Uranus />} />
//       <Route path="/Neptune" element={<Neptune />} />
//     </div>
