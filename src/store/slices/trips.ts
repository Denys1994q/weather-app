import { createSlice, createAsyncThunk, PayloadAction   } from "@reduxjs/toolkit";
import { cities } from "../../data/citiesData";
import { Trip } from "./models/trip";

const url = process.env.REACT_APP_TIMELINE_API_URL;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const getTodaysWeather = createAsyncThunk(
    "trips/getTodaysWeather",
    async ({city}: {city: string}) => {
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
    async ({city, startDate, endDate}: {city: string, startDate: string, endDate: string}) => {
        const response = await fetch(`${url}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData[0].msg || 'Failed to get data');
        }
        const data = await response.json();
        return data;
    }
);

const savedTrips = localStorage.getItem('trips');
const trips = savedTrips ? JSON.parse(savedTrips) : [cities[0]];

interface TripsState {
    trips: Trip[],
    selectedTripId: string,
    cityFilter: string,
    getTodaysWeatherLoading: boolean,
    getTodaysWeatherError: boolean,
    getWeekWeatherLoading: boolean,
    getWeekWeatherError: boolean
}

const initialState: TripsState = {
    trips: trips,
    selectedTripId: trips[0].id,
    cityFilter: '',
    getTodaysWeatherLoading: false,
    getTodaysWeatherError: false,
    getWeekWeatherLoading: false,
    getWeekWeatherError: false,
};

const TripsSlice = createSlice({ 
    name: "trips",
    initialState,
    reducers: {
        addTrip: (state, action: PayloadAction<{ city: string; startDate: string; endDate: string }>) => {
            const { city, startDate, endDate } = action.payload
            const selectedCity = cities.find(c => c.id === city)
            if (selectedCity) {
                selectedCity.startDate = startDate
                selectedCity.endDate = endDate
                state.trips.push(selectedCity)
            }
        }, 
        selectTrip: (state, action: PayloadAction<string>) => {
            state.selectedTripId = action.payload
        },
        setActiveFilter: (state, action: PayloadAction<string>) => {
            state.cityFilter = action.payload
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
            const tripIndex = state.trips.findIndex((t: Trip) => t.id === state.selectedTripId);
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
        .addCase(getWeekWeather.pending, state => {
            state.getWeekWeatherLoading = true;
            state.getWeekWeatherError = false;
        })
        .addCase(getWeekWeather.fulfilled, (state, action) => {
            const tripIndex = state.trips.findIndex((t: Trip) => t.id === state.selectedTripId);
            if (tripIndex !== -1) {
                const trip = state.trips[tripIndex];
                const data = action.payload.days
                const formattedData = data.map((day: any) => {
                    return {
                        datetime: day.datetime,
                        tempmin: day.tempmin,
                        tempmax: day.tempmax,
                        icon: day.icon
                    }
                })
                const updatedTrip = {
                    ...trip,
                    weekWeather: formattedData
                };
                state.trips[tripIndex] = updatedTrip;
                state.getWeekWeatherLoading = false;
                state.getWeekWeatherError = false;
            }
        })
        .addCase(getWeekWeather.rejected, state => {
            state.getTodaysWeatherLoading = false;
            state.getTodaysWeatherError = true;
        })
    }
})

const { actions, reducer } = TripsSlice;

export default reducer;

export const { addTrip, selectTrip, setActiveFilter } = actions;