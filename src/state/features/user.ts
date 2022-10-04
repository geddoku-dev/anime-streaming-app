import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface userState {
    user: string | null;
    isLoading: boolean;
    error: string;
}

const initialState: userState = {
    user: null,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        getUserError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getUser, getUserError, getUserSuccess } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
