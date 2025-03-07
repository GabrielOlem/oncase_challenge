import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Chart from "./components/Chart";
import api from "./services/api";
import "./App.css"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("data/")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {/* 🔹 Header Section */}
      <header>
        <Form setData={setData} />
      </header>

      {/* 🔹 Data Section */}
      <section className="data-section">
        <h2>DATA</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="content">
          <Table data={data} />
          <Chart data={data} />
        </div>
      </section>
    </div>
  );
}

export default App;
