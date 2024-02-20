import { createSlice  } from "@reduxjs/toolkit";

const initialState: any = {
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