import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

export default function Notes() {
  const notes = useSelector((state) => state.notes.notes)

  const [filter, setFilter] = useState("")

  const filtered = notes.filter(note => {
    return note.content.toString().toLowerCase().includes(filter)
  })

  return (
    <div className='mt-8'>
      <div className='rounded-full pl-6 pr-6 pb-1 pt-1 ml-auto mr-auto bg-white ring-1 ring-gray-500 focus-within:ring-blue-700 w-72'>
        <input
          type="text"
          placeholder='Search...'
          className='placeholder-gray-400 bg-white outline-none placeholder:font-bold'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className='w-256 grid grid-cols-3 mt-6'>

        {
          filtered.map((note) => (
            <Note key={note.id} {...note} />
          ))
        }
      </div>
    </div>
  )
}
