import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

const fetchUpcomingMovies=()=>{
    return api.get('/movie/upcoming')
}

export const useUpcomingMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-Upcoming'],
        queryFn:fetchUpcomingMovies,
        select:(result)=>result.data,
    })
}