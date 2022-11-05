import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Main from "./pages/Main";
import Homepage from "./pages/homepage/Homepage";
import Authorization from "./components/auth/AuthorizationForm";
import CardDetails from "./pages/cardDetails/CardDetails";
import Favorite from "./pages/Favorite";
import History from "./pages/History";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signIn" element={<Authorization />} />
          <Route path="/signUp" element={<Authorization />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
