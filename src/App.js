import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";  
import StudentProgressTracker from "./StudentProgressTracker";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tracker" element={<StudentProgressTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
