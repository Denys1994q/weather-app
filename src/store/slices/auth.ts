import { createSlice  } from "@reduxjs/toolkit";
import { User } from "./models/user";

interface AuthState {
    user: User | null
}

const initialState: AuthState = {
    user: null
};

const AuthSlice = createSlice({ 
    name: "auth",
    initialState, 
    reducers: {
        setUserData: (state: any, action: any) => {
            return {
                ...state,
                user: action.payload
            }
        }
    }
})

const { actions, reducer } = AuthSlice;

export default reducer;

export const { setUserData } = actions;