import React from "react";
import getNotesApiTarget, { notes } from "./fetchNotes";

const MinhasAnotacoes = () => {
  getNotesApiTarget();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          placeItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h2 style={{ margin: "5px" }}>Minhas Anotações</h2>
        <button style={{ margin: "5px" }}>Nova Anotação</button>
        <div
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "space-around",
            gap: "2rem",
            flexDirection: "row",
            color: "black",
            opacity: 0.9,
          }}
        >
          {notes &&
            notes.map((note) => {
              return (
                <li
                  style={{
                    listStyle: "none",
                    background: "white",
                    width: "100%",
                  }}
                >
                  <h2>{note.id + 1}</h2>
                  <h2>{note.author}</h2>
                  <h2>{note.title}</h2>
                  <p>{note.date}</p>
                  <p>{note.description}</p>
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MinhasAnotacoes;
