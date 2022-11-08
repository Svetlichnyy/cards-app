import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./features/protectedRoute";
import Authorization from "./components/auth/AuthorizationForm";
import Navbar from "./components/layout/navbar/Navbar";
import CardDetails from "./pages/cardDetails/CardDetails";
import Homepage from "./pages/homepage/Homepage";
import Favorite from "./pages/Favorite";
import History from "./pages/History";
import Main from "./pages/Main";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Main />} />
          <Route path="/signIn" element={<Authorization />} />
          <Route path="/signUp" element={<Authorization />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
