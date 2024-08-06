import React from "react";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
// import CreateAccount from "./components/Criar-conta/create-account";
import CreateAccount from "./components/Criar-conta/create-account.jsx"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;
