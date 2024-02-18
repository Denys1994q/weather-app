import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { cities } from "../../data/citiesData";

const initialState: any = {
    trips: [cities[0]],
};

const TripsSlice = createSlice({ 
    name: "trips",
    initialState,
    reducers: {
        addTrip: (state: any, action: any) => {
            const { city, startDate, endDate } = action.payload
            const selectedCity = cities.find(c => c.id === city)
            if (selectedCity) {
                selectedCity.startDate = startDate
                selectedCity.endDate = endDate
                return {
                    ...state,
                    trips: [...state.trips, selectedCity]
                }
            } else {
                return {...state}
            }
        }
    }
})

const { actions, reducer } = TripsSlice;

export default reducer;

export const { addTrip } = actions;