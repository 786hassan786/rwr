import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovie } from '../../features/movies/movieSlice';
import { useDispatch } from "react-redux";
export default function Home() {
    const dispatch = useDispatch();
	const movieText = "Harry";

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await MovieApi.get(
				`?apiKey=${APIKey}&s=${movieText}&type=movie`
			).catch((err) => {
				console.log("Error occour", err);
			});
			if(res) dispatch(addMovie(res));
			// console.log("API response::", res);
		};
		fetchMovies();
	});
	return (
		<div>
			<div className="banner-img"></div>
			<MovieListing />
		</div>
	);
}
