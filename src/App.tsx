import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Main from "./pages/Main";
import Homepage from "./pages/homepage/Homepage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CardDetails from "./pages/cardDetails/CardDetails";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
