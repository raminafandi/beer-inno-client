import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { BeerType } from "../../types";

export const getAsyncBeers = createAsyncThunk('beers/getAsyncBeers', async () => {
    return await api.beer.getBeers();
});

interface BeersState {
    beers: BeerType[];
    favorites: number[];
    loading: boolean;
    error: string;
}

const initialState: BeersState = {
    beers: [],
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : [],
    loading: false,
    error: ""
}

const beersSlice = createSlice({
    name: 'beers',
    initialState: initialState,
    reducers: {
        onChangeFavorite: (state, action: PayloadAction<number>) => {
            const { favorites } = state;
            const id = action.payload;
            const index = favorites.findIndex(item => item === id);
            if (index === -1) {
                state.favorites.push(id);
            } else {
                state.favorites.splice(index, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAsyncBeers.pending, (state: BeersState) => {
            state.loading = true;
        });
        builder.addCase(getAsyncBeers.fulfilled, (state: BeersState, action: PayloadAction<BeerType[]>) => {
            state.beers = action.payload;
            state.loading = false;
        });
        builder.addCase(getAsyncBeers.rejected, (state: BeersState, action) => {
            state.error = action.error.message || "Something went wrong";
            state.loading = false;
        })
    }
});


export default beersSlice.reducer;
export const { onChangeFavorite } = beersSlice.actions;