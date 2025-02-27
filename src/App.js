import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentProgressTracker from "./StudentProgressTracker";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Student Progress Tracker</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/tracker">Tracker</Link> | <Link to="/login">Login</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<h2>Welcome to the app</h2>} />
        <Route path="/tracker" element={<StudentProgressTracker />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
