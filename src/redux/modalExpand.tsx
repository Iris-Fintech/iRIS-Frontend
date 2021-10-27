import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modalShowExpand = createSlice({
    name: 'modalExpand',
    initialState: {
        expand: false,
    },
    reducers: {
        setExpand: (state, action: PayloadAction<boolean>) => {
            state.expand = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setExpand } = modalShowExpand.actions;

export default modalShowExpand.reducer;
