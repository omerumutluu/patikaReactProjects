import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CheckIcon from '../icons/icon';
import { addNote } from '../redux/notes/notesSlice';

export default function Form() {
    const [color, setColor] = useState("bg-pink-500")
    const [note, setNote] = useState("")

    const dispatch = useDispatch()

    let colorForButtons = "bg-pink-500"

    useEffect(() => {
        setColor(colorForButtons);
    }, [colorForButtons])


    const isActive = (param) => {
        if (param === color) {
            return <span className='flex justify-center'><CheckIcon /></span>;
        }
    }

    const handleClick = (color) => {
        setColor(color)
    }

    const handleAddNote = () => {
        if(!note)
            return;

        dispatch(addNote({
            id: nanoid(),
            content: note,
            color
        }))

        setNote("")
    }

    return (
        <div className='bg-white mt-5 shadow-lg'>

            <textarea
                className='w-256 h-32 outline-none resize-none placeholder-gray-500 pt-6 pb-6 pl-7 pr-7 text-md'
                placeholder='Enter your note here...'
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />

            <div className='flex justify-between'>
                <div className='flex'>
                    <button className='w-8 h-8 ml-4 mb-4 bg-pink-500 rounded-full' onClick={() => handleClick("bg-pink-500")}> {isActive("bg-pink-500")} </button>
                    <button className='w-8 h-8 ml-4 mb-4 bg-purple-700 rounded-full' onClick={() => handleClick("bg-purple-700")}> {isActive("bg-purple-700")} </button>
                    <button className='w-8 h-8 ml-4 mb-4 bg-yellow-300 rounded-full' onClick={() => handleClick("bg-yellow-300")}> {isActive("bg-yellow-300")} </button>
                    <button className='w-8 h-8 ml-4 mb-4 bg-blue-500 rounded-full' onClick={() => handleClick("bg-blue-500")}> {isActive("bg-blue-500")} </button>
                    <button className='w-8 h-8 ml-4 mb-4 bg-green-600 rounded-full' onClick={() => handleClick("bg-green-600")}> {isActive("bg-green-600")} </button>
                </div>
                <div>
                    <button
                        className='bg-green-500 text-white rounded-full pr-10 pl-10 pb-1 pt-1 mr-4 shadow-lg hover:bg-green-700 duration-200'
                        onClick={() => handleAddNote()}
                    >ADD</button>
                </div>
            </div>
        </div>
    )
}
