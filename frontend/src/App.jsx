import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import { useAuthStore } from "./store/authUser";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
