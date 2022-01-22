import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [empty, setEmpty] = useState(false);

  function handleChange(event) {
    setEmpty(false);
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder={empty ? "This field is required" : "Title"}
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder={empty ? "This field is required" : "Take a note..."}
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            if (!note.title && !note.content) {
              setEmpty(true);
              return;
            }

            props.addNote(note);
            setNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
