import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanden, setExpanden] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function expand() {
      setExpanden(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanden && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanden ? 3 : 1}
        />
        <Zoom in={isExpanden}>
        <Fab class="fab" onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
