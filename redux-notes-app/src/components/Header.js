import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNote } from '../redux/notes/notesSlice';

export default function Header() {
    const dispatch = useDispatch()

    return (
        <div className='mt-8'>
            <h1 className='font-bold text-gray-400 mb-5 text-xl'>NotesApp</h1>
        </div>
    )
}
