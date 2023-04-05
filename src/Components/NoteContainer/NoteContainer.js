import React from 'react';

import Note from '../Note/Note';

import './NoteContainer.css';


export default function NoteContainer(props) {

    function reverseArray(arr) {
        const newArr = [];
        for(let i = arr.length-1; i >= 0; i--){
            newArr.push(arr[i]);
        }
        return newArr;
    }

    const notes = reverseArray(props.notes);

    return (
        <div className='note-container'>
            <h2>Notes</h2>
            <div className='note-container_notes custom-scroll'>
                {
                    notes?.length > 0 ? notes.map((note, index) => (
                        <Note key={note.id} index={index} note={note} updateText={props.updateText} deleteNote={props.deleteNote} />
                        )) : <h3>No notes present</h3>
                }
            </div>
        </div>
    )
}
