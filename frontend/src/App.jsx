import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Chart from "./components/Chart";
import api from "./services/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div>
      <h1>Desafio Fullstack</h1>
      <Form setData={setData} />
      <Table data={data} />
      <Chart data={data} />
    </div>
  );
}

export default App;
