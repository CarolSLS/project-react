import React from "react";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import CreateAccount from "./components/Criar-conta/create-account.jsx"
import CreateNotes from "./components/Criar-notas/create-notes.jsx";
import NotesPreview from "./components/Notes-preview/notes-preview.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./components/userContext";
import Profile from "./components/Profile/profile.jsx"

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/createNotes" element={<CreateNotes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes-preview/:noteId" element={<NotesPreview />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;
