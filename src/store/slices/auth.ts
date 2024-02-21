import { createSlice  } from "@reduxjs/toolkit";
import { User } from "./models/user";

const isUserStorage: string | null = window.localStorage.getItem("user");
const userValue: User | null = isUserStorage ? JSON.parse(isUserStorage) : null;

interface AuthState {
    user: User | null
}

const initialState: AuthState = {
    user: userValue
};

const AuthSlice = createSlice({ 
    name: "auth",
    initialState, 
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        }
    }
})

const { actions, reducer } = AuthSlice;

export default reducer;

export const { setUserData } = actions;