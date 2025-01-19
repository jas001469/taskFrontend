import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://task-t5x6.onrender.com/api/submissions")
      .then(response => {
        setSubmissions(response.data);
      })
      .catch(error => {
        console.error("Error fetching submissions", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Social Media Handle</th>
            <th>Uploaded Images</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.socialMedia}</td>
              <td>
                {user.images.map((img, i) => (
                  <img key={i} src={`https://task-t5x6.onrender.com/uploads/${img}`} alt="User Upload" width="100" />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Button to navigate back to User Submission Form */}
      <button onClick={() => navigate("/")} style={{ marginTop: "10px" }}>
        Go to Submission Form
      </button>
    </div>
  );
};

export default AdminDashboard;
