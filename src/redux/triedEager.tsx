import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const triedEagerSlice = createSlice({
    name: 'triedEager',
    initialState: {
        tried: false,
    },
    reducers: {
        setState: (state, action: PayloadAction<boolean>) => {
            state.tried = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setState } = triedEagerSlice.actions;

export default triedEagerSlice.reducer;
