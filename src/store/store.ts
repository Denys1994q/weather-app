import { configureStore } from "@reduxjs/toolkit";
import TripsSlice from './slices/trips'

const store = configureStore({
    reducer: {
        trips: TripsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;