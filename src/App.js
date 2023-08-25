import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom
import Headerhome from "./components/Headerhome";
import Footerhome from "./components/Footerhome";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp"
import Aboutus  from "./components/Aboutus";
import Headerservice from "./components/Headerservice";
import SeeRoom from "./components/SeeRoom";

const App = () => {
  return (
    <Router>
      
      <Routes>
      <Route path="/header" element={<Headerhome/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/room" element={<SeeRoom/>} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/headerservice" element={<Headerservice />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Footerhome" element={<Footerhome/>} />
      </Routes>
    </Router>
  );
};

export default App;
