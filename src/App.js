import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Couples from "./pages/Couples";
import Gallery from "./pages/Gallery";
import Event from "./pages/Event";
import OurTeams from "./pages/OurTeams";
import Navbar from "./components/Navbar";
import bg1 from "./img/bg1.jpeg";

function App() {
  const mybg = {
    background: `linear-gradient(to bottom, #00000092, #00000092), url(${bg1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div style={mybg}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Couplees" element={<Couples />} />
          <Route path="/OurTeams" element={<OurTeams />} />
          <Route path="/Event" element={<Event />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
