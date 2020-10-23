import React, { useState } from 'react';
import './notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState(['Default Note']);

    const addNote = () => {
        let note = document.getElementById('text-field').value;

        if (note.length > 0) {
            let newNote = [...notes, note];
            setNotes(newNote);
        }
    }

    const editNote = (index) => {
        let edit = prompt("Enter new value: ", notes[index]);

        if (edit.length > 0) {
            let newNote = [...notes];
            newNote[index] = edit;
            setNotes(newNote);
        }
    }

    const deleteNote = (index) => {
        let newNote = [...notes];
        newNote.splice(index, 1);
        setNotes(newNote);
    }

    return (
        <div className="container">
            <div className="header">
                <h2> Simple Notes App </h2>
            </div>

            <div className="text-field-container">
                <input id="text-field" className="text-field" type="text" />
                <button className="add-button" onClick={ addNote }> Add </button>
            </div>

            <div className="notes-container">
                {notes.map((note, index) => (
                    <div key={`note-${index}`} className="notes">
                        <div style={{ flex: 0.5 }}> { note } </div>
                        <div style={{ flex: 0.1 }}>
                            <button className="edit-button" onClick={() => editNote(index)}> Edit </button>
                        </div>
                        <div style={{ flex: 1 }}>
                            <button className="delete-button" onClick={() => deleteNote(index)}> Delete </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;