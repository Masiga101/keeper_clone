import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(note) {
    setNewNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNewNote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {newNote.map((note, index) => {
        return (
          <Note
            delete={deleteNote}
            id={index}
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
