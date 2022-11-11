import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./features/ThemeProvider";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import ProtectedRoute from "./features/protectedRoute";
import Authorization from "./components/auth/AuthorizationForm";
import Navbar from "./components/layout/navbar/Navbar";
import ThemeLayout from "./components/layout/ThemeLayout";
import CardDetails from "./pages/cardDetails/CardDetails";
import Homepage from "./pages/homepage/Homepage";
// import Favorite from "./pages/Favorite";
import History from "./pages/History";
import Main from "./pages/Main";

import "./App.scss";
import Loader from "./components/layout/loader/Loader";

function App() {
  const Favorite = lazy(() => import("./pages/Favorite"));
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ThemeLayout>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Suspense fallback={<Loader />}>
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
              </Suspense>
            </div>
          </BrowserRouter>
        </ThemeLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
