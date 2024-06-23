import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

const fetchPopularMovies=()=>{
    return api.get('/movie/popular')
}

export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result.data,
    })
}