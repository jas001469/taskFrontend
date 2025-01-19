import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserForm from "./components/UserForm";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
