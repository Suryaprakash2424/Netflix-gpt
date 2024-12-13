import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo: null,
        addPopularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies ,addTrailerVideo,addTopRatedMovies , addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;