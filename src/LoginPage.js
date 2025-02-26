import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

const LoginPage = () => {
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (studentName.trim() && password.trim()) {
      localStorage.setItem("studentName", studentName);

      // Easter Egg: Rickroll if the student enters "rickroll"
      if (studentName.toLowerCase() === "rickroll") {
        const audio = new Audio("https://www.myinstants.com/media/sounds/rick-roll.mp3");
        audio.play();
      }

      navigate("/tracker");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="login-container">
      {/* College Name at the Top */}
      <div className="college-name">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</div>

      <div className="login-box">
        <h2>Student Login</h2>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
