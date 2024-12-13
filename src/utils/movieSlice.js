import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpComingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.UpComingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies ,addTrailerVideo,addTopRatedMovies,addUpComingMovies , addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;