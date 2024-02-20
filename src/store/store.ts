import { configureStore } from "@reduxjs/toolkit";
import TripsSlice from './slices/trips'
import AuthSlice from './slices/auth'

const store = configureStore({
    reducer: {
        trips: TripsSlice,
        auth: AuthSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;