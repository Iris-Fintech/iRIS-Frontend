import { createSlice } from '@reduxjs/toolkit';

export const modalShowSlice = createSlice({
    name: 'modalShow',
    initialState: {
        show: false,
    },
    reducers: {
        changeState: (state) => {
            state.show = state.show ? false : true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeState } = modalShowSlice.actions;

export default modalShowSlice.reducer;
