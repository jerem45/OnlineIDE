import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";
import { codeUpdater } from "./tabs";

const initialState = {
    preview : true,
}

export const preview = createSlice({
    name : 'preview',
    initialState,
    reducers : {
        togglePreview : (state) => {
            state.preview = !state.preview
        },
        hidePreview : (state) => {
            state.preview = false
        }
    }
})

export const {togglePreview, hidePreview} = preview.actions
export default preview.reducer