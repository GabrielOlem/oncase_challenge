import { useState } from "react";
import api from "../services/api";

function Form({ setData }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", participation: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.participation) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    
    try {
      const response = await api.post("/data", form);
      setData(response.data); // Atualiza a tabela e o gráfico
      setForm({ firstName: "", lastName: "", participation: "" });
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
      <input type="number" name="participation" placeholder="Participation" value={form.participation} onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
