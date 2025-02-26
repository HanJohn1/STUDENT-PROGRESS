import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Confetti from "react-confetti"; // Import Confetti package

const StudentProgressTracker = () => {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [marks, setMarks] = useState({
    maths: "",
    english: "",
    ec: "",
    ct_ed: "",
    eng_biology: "",
  });
  const [gpa, setGPA] = useState(null);
  const [passStatus, setPassStatus] = useState("");
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti

  const credits = {
    maths: 4,
    english: 4,
    ec: 6,
    ct_ed: 6,
    eng_biology: 6,
  };

  useEffect(() => {
    const storedName = localStorage.getItem("studentName");
    if (storedName) setStudentName(storedName);
  }, []);

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let failedSubjects = [];

    Object.keys(marks).forEach((subject) => {
      if (marks[subject] !== "") {
        let gradePoint = Math.max(0, Math.min(10, marks[subject] / 10));
        totalPoints += gradePoint * credits[subject];
        totalCredits += credits[subject];

        if (marks[subject] < 50) {
          failedSubjects.push(subject.toUpperCase());
        }
      }
    });

    const calculatedGPA = (totalPoints / totalCredits).toFixed(2);
    setGPA(calculatedGPA);

    if (failedSubjects.length > 0) {
      setPassStatus(`Failed in: ${failedSubjects.join(", ")}`);
      setShowConfetti(false); // No confetti if failed
    } else {
      setPassStatus("Passed in all subjects!");

      // Easter Egg: Confetti if GPA is exactly 10
      if (parseFloat(calculatedGPA) === 10) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 sec
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("studentName");
    navigate("/");
  };

  return (
    <div className="container">
      {showConfetti && <Confetti />} {/* Confetti animation */}
      <h2>Welcome, {studentName}</h2>
      {Object.keys(marks).map((subject) => (
        <input
          key={subject}
          type="number"
          placeholder={`Enter ${subject.toUpperCase()} marks`}
          value={marks[subject]}
          onChange={(e) =>
            setMarks({ ...marks, [subject]: parseFloat(e.target.value) || "" })
          }
        />
      ))}
      <button onClick={calculateGPA}>Calculate GPA</button>
      {gpa !== null && (
        <>
          <h3>Your GPA: {gpa}/10</h3>
          <h4 style={{ color: passStatus.includes("Failed") ? "red" : "green" }}>
            {passStatus}
          </h4>
        </>
      )}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentProgressTracker;
