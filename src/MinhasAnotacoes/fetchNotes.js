export let notes = [];
const apiTarget = "https://gobstech.github.io/notesApi/notes.json";
getNotesApiTarget();

async function getNotesApiTarget() {
  const res = await fetch(apiTarget);
  notes = await res.json();
  localStorage.setItem("Anotações", JSON.stringify(notes));
  console.log(notes);
  console.table(notes);
}

export default getNotesApiTarget;
