import { useState } from "react";
import api from "../services/api";
import "./Form.css"

function Form({ setData, existingData }) {
  const [form, setForm] = useState({ first_name: "", last_name: "", participation: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.first_name || !form.last_name || !form.participation) {
      alert("All of the fields are mandatory!");
      return;
    }
    
    const totalParticipation = existingData.reduce(
      (sum, item) => sum + parseFloat(item.participation || 0),
      0
    );

    const newParticipation = parseFloat(form.participation);
    if (totalParticipation + newParticipation > 100) {
      setError("The total participation cannot exceed 100%");
      return;
    }

    setError("");

    try {
      const response = await api.post("data/add/", form);
      console.log("Response data:", response.data);
      setData(response.data);
      setForm({ first_name: "", last_name: "", participation: "" });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" name="first_name" placeholder="First name" value={form.first_name} onChange={handleChange} required />
      <input type="text" name="last_name" placeholder="Last name" value={form.last_name} onChange={handleChange} required />
      <input type="number" name="participation" placeholder="Participation" value={form.participation} onChange={handleChange} required />
      <button type="submit">SEND</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Form;
