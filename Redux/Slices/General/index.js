import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'general',
    initialState: {
        categories: [], // Store category objects
    },
    reducers: {
        SET_CATEGORIES(state, action) {
            state.categories = action.payload; // Store full category objects
        },
    },
});

export const { SET_CATEGORIES } = categoriesSlice.actions;

export default categoriesSlice.reducer;
