import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/PlanetCard/planetCard.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import PlanetPage from "./pages/PlanetPage";
import BookingPage from "./pages/BookingPage";
import BookedStayPage from "./pages/BookedStayPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import MyStaysPage from "./pages/MyStaysPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={ <HomePage/> } />
       <Route path="/signup" element={ <IsAnon><SignupPage/></IsAnon> } />
       <Route path="/login" element={ <IsAnon><LoginPage/></IsAnon> } />
       <Route path="/user" element={ <IsPrivate><UserPage/> </IsPrivate>} />
       <Route path="/planet/:planetId" element={ <PlanetPage/> } />
       <Route path="/mystays" element={ <IsPrivate><MyStaysPage/> </IsPrivate>} />
       <Route path="/booking/create/:planetId" element={ <BookingPage/> } />
       <Route path="/bookedstay" element={ <IsPrivate><BookedStayPage/> </IsPrivate>} />
       
      </Routes>
    </div>
  );
}

export default App;
