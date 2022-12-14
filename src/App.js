import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import HairTransplantation from "./pages/HairTransplantation";
import Home from "./pages/Home";
import MedicalAesthetics from "./pages/MedicalAesthetics";
import SexualWellness from "./pages/SexualWellness";
import StemCellTherapy from "./pages/StemCellTherapy";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="medical-aesthetics"
          element={<MedicalAesthetics />}
        ></Route>
        <Route
          path="hair-transplantation"
          element={<HairTransplantation />}
        ></Route>
        <Route path="stem-cell-therapy" element={<StemCellTherapy />}></Route>
        <Route path="sexual-wellness" element={<SexualWellness />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
