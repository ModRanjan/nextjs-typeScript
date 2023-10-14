import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EventsPages, IUser, OverviewPages, Page } from './types';

export interface UserState {
    user: IUser | null;
    loading: boolean;
    errors: any;
    loggedIn: boolean;
    currentPage: Page | OverviewPages | EventsPages;
}

export const initialState: UserState = {
    user: null,
    loading: false,
    errors: null,
    loggedIn: false,
    currentPage: Page.LandingPage,
};

// actions : are processes thet get data from the backend

// reducers : reduse to a specific state => manupilate the existing state

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        setCurrentPage: (
            state,
            action: PayloadAction<Page | OverviewPages | EventsPages>
        ) => {
            state.currentPage = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(addConnectedWallet, (state) => {
    //         state.loggedIn = true;
    //     });
    // },
});

export const { setUser, setCurrentPage } = userSlice.actions;

export default userSlice.reducer;
