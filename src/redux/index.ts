import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import beersSlice from "./slices/beersSlice";

const store = configureStore(
    {
        reducer: {
            beers: beersSlice
        },
        devTools: process.env.NODE_ENV !== "production"
    }
)

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;