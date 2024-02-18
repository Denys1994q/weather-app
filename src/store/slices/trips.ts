import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { cities } from "../../data/citiesData";

const initialState: any = {
    trips: [cities[0]],
};

const TripsSlice = createSlice({ 
    name: "trips",
    initialState,
    reducers: {},
})

const { actions, reducer } = TripsSlice;

export default reducer;

export const {} = actions;