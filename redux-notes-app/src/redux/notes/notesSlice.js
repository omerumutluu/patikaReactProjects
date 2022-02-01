import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [
            {
                id: 1,
                content: "React.JS ile ilgili uygulama gelitştirme pratikleri yapılacak.",
                color: "bg-yellow-300"
            },
            {
                id: 2,
                content: "C# .Net Core Web API ile birlikte api geliştirme pratikleri yapılacak.",
                color: "bg-blue-500"
            }
        ]
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
    }
})

export const { addNote, filterNote } = notesSlice.actions;
export default notesSlice.reducer