import Note from './Note'
import { useState } from 'react'


export default function Nodelist({ 
   notes, 
   createNote,
   handleSavedData, 
   handleClickRemoveButton,
   editableNote
}) {

   return (
      <div className='notelist'>
         {notes.map(data => {
            return <Note   
                     data={data} 
                     key={data?.time} 
                     handleSavedData={handleSavedData} 
                     handleRemove={handleClickRemoveButton}
                     editableNote={editableNote} />
         })}
         <button className='addNote' onClick={createNote}>
            Создать заметку
         </button>
      </div>
   )
}