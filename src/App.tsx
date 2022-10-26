import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Mainpage from "./pages/Mainpage";
import Homepage from "./pages/homepage/Homepage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Main" element={<Mainpage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
