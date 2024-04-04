import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav.jsx";
import { Homepage } from "./Pages/Homepage/Homepage.jsx";
import { EnergyPage } from "./Pages/EnergyPage/EnergyPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/energy" element={<EnergyPage />} />
      </Routes>
      <Nav/>
    </BrowserRouter>
  );
}

export default App;
