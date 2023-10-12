import { useState } from 'react'
import './style.css'
import Header from "./assets/notice.png"
import Notelist from './Notelist'
import Note from './Note'

function App() {

  const [notes, setNotes] = useState([{
      "time": Date.now(),
      "blocks": [
          {
              "type": "paragraph",
              "data": {
                  "text": "Введите текст здесь"
              }
          }
      ],
      "version": "2.28.0"
  }]); /* Стейт списка заметок */

  const [editingNote, setEditingNote] = useState("") /* Стейт текущей редактируемой заметки */

  const handleData = (data) => {
    if(editingNote === "") {
      return;
    }

    const editableNote = notes.findIndex((note) => {
      return note === editingNote
    })
    
    setNotes(prevState => {
      let newState = [...prevState]
      newState[editableNote] = data;

      return newState
    })
  }

  const removeNote = (noteBlock) => {
    const noteToRemove = notes.findIndex(({ blocks }) => blocks === noteBlock.blocks)

    setNotes(prevState => {
      const newState = [...prevState.slice(0, noteToRemove), ...prevState.slice(noteToRemove + 1, prevState.length)];
      return newState
    })
  }

  const addNote = () => {
    setNotes(prevState => {
      const newState = [...prevState, {
        "time": Date.now() ,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Введите текст здесь"
                }
            }
        ],
        "version": "2.28.0"
      }];

      return newState
    })
  }


  return (
    <div>
      <img src={Header} width={300} className='header' />
      <Notelist 
        notes={notes} 
        handleSavedData={handleData} 
        handleClickRemoveButton={removeNote} 
        createNote={addNote}  
        editableNote={(data) => setEditingNote(data)} />
    </div>
  )
}
export default App
