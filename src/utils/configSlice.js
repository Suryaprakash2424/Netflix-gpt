import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: null
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;