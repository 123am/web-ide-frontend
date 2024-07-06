import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list_directory: [],
    load: false,
    oneFile: {
        "name": "",
        "ext": "",
        "path": "",
        "content": "",
        "type": ""
    },
    oneReadmeFile: ""

}

export const fileSlice = createSlice({
    name: "fileSlice",
    initialState,
    reducers: {
        LIST_DIRECTORY: (state, action) => {
            state.list_directory = action.payload,
                state.load = false
        },
        VIEW_FILE: (state, action) => {
            state.oneFile = action.payload,
            state.load = false
        },

        VIEW_README_FILE: (state, action) => {
            state.oneReadmeFile = action.payload,
            state.load = false
        },
        CLOSE_FILE: (state, action) => {
            state.oneFile = {
                "name": "",
                "ext": "",
                "path": "",
                "content": "",
                "type": ""
            }
            state.load = false
        },
        LOAD: (state, action) => {
            state.load = true
        }
    }
})


export const { LIST_DIRECTORY, LOAD, VIEW_README_FILE, VIEW_FILE, CLOSE_FILE } = fileSlice.actions

export default fileSlice.reducer
