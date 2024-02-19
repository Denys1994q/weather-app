import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { cities } from "../../data/citiesData";

const url = process.env.REACT_APP_TIMELINE_API_URL;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const getTodaysWeather = createAsyncThunk(
    "trips/getTodaysWeather",
    async ({city}: any) => {
        const response = await fetch(`${url}/${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData[0].msg || 'Failed to get data');
        }
        const data = await response.json();
        return data;
    }
);

export const getWeekWeather = createAsyncThunk(
    "trips/getWeekWeather",
    async ({city, startDate, endDate}: any) => {
        const response = await fetch(`${url}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData[0].msg || 'Failed to get data');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: any = {
    trips: [cities[0]],
    selectedTripId: cities[0].id,
    cityFilter: '',
    // 
    getTodaysWeatherLoading: false,
    getTodaysWeatherError: false,
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
        }, 
        selectTrip: (state: any, action: any) => {
            return {
                ...state,
                selectedTripId: action.payload
            }
        },
        setActiveFilter: (state: any, action: any) => {
            return {
                ...state,
                cityFilter: action.payload
            }
        },
    },
    extraReducers: builder => {
        builder 
        // get todays weather
        .addCase(getTodaysWeather.pending, state => {
            state.getTodaysWeatherLoading = true;
            state.getTodaysWeatherError = false;
        })
        .addCase(getTodaysWeather.fulfilled, (state, action) => {
            const tripIndex = state.trips.findIndex((t: any) => t.id === state.selectedTripId);
            if (tripIndex !== -1) {
                const trip = state.trips[tripIndex];
                const todayWeather = {
                    temp: action.payload.days[0].temp,
                    icon: action.payload.days[0].icon,
                }
                const updatedTrip = {
                    ...trip,
                    todayWeather: todayWeather
                };
                state.trips[tripIndex] = updatedTrip;
                state.getTodaysWeatherLoading = false;
                state.getTodaysWeatherError = false;
            }
        })
        .addCase(getTodaysWeather.rejected, state => {
            state.getTodaysWeatherLoading = false;
            state.getTodaysWeatherError = true;
        })
        // get week weather
        .addCase(getWeekWeather.fulfilled, (state, action) => {
            const tripIndex = state.trips.findIndex((t: any) => t.id === state.selectedTripId);
            if (tripIndex !== -1) {
                const trip = state.trips[tripIndex];
                const todayWeather = {
                    temp: action.payload.days[0].temp,
                    icon: action.payload.days[0].icon,
                }
                const updatedTrip = {
                    ...trip,
                    todayWeather: todayWeather
                };
                state.trips[tripIndex] = updatedTrip;
            }
        })
    }
})

const { actions, reducer } = TripsSlice;

export default reducer;

export const { addTrip, selectTrip, setActiveFilter } = actions;