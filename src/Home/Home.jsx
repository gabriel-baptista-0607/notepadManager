import React from "react";

const Home = () => {
  // const userName = "Mia";
  const options = ["Minhas Anotações", "Nova Anotação"];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
      className="main"
    >
      <h1>Olá!</h1>
      <h2>Bem-vindo(a), ao Notepad Manager!</h2>
      <h3>Selecione uma das opções abaixo:</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: ".5rem" }}>
        {options &&
          options.map((option, index) => {
            return <button key={index}>{option}</button>;
          })}
      </div>
    </div>
  );
};

export default Home;
