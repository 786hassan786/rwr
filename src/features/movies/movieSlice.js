import { createSlice } from "@reduxjs/toolkit";

const initinalState = {
	movies: [],
};

const movieSlice = createSlice({
	name: "movie",
	initinalState,
	reducers: {
		addMovie: (state, { payload }) => {
			state.movies = payload;
		},
	},
});

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
