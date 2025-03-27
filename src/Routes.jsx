import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MinhasAnotacoes from "./MinhasAnotacoes/MinhasAnotacoes";
import NovaAnotacao from "./NovaAnotacao/NovaAnotacao";
import Sobre from "./Sobre/Sobre";
import MinhaConta from "./MinhaConta/MinhaConta";
import Rodape from "./Components/Rodape/Rodape";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minhas-anotacoes" element={<MinhasAnotacoes />} />
        <Route path="/nova-anotacao" element={<NovaAnotacao />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
      <Rodape />
    </div>
  );
}

export default App;
