
import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now()+""+Math.floor(Math.random()*78),
      text: '',
      time: Date.now(),
      color,
    });
    setNotes([...tempNotes]);
  }

  const deleteNote = (id) => {
    let tempNotes = [...notes];
    tempNotes = tempNotes.filter(note => note.id !== id);
    setNotes([...tempNotes]);
  }


  return (
    <div className="App">
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
