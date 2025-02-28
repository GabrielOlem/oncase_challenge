import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/")
      .then((response) => {
        console.log("Dados recebidos:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div>
      <h1>Dados do Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
