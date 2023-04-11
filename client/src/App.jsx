import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomepageLayout from "./pages/Home";
import Contacts from "./pages/Contacts";
import Edit from "./pages/Edit";
import AppNavBar from "./components/AppNavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { getAuthUser } from "./JS/Actions/auth";
import { useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    await dispatch(getAuthUser());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <AppNavBar />

      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<Edit />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
