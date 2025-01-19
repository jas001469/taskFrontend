import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialMedia", socialMedia);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      alert("Submission Successful!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="container">
      <h2>User Submission Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Social Media Handle:</label>
        <input type="text" value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} required />

        <label>Upload Images:</label>
        <input type="file" multiple onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
      
      {/* Button to navigate to Admin Page */}
      <button onClick={() => navigate("/admin")} style={{ marginTop: "10px" }}>
        Go to Admin Page
      </button>
    </div>
  );
};

export default UserForm;
