import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import ContainerTable from "./components/ContainerTable";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#EBF0FA",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ m: 0, py: 3 }}>
        <Navbar />
        <Filter handleChange={handleChange} />
        <ContainerTable coins={coins} search={search} />
      </Container>
    </div>
  );
}

export default App;
