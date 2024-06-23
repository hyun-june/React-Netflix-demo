import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

const fetchTopLatedMovies=()=>{
    return api.get('/movie/top_rated')
}

export const useTopLatedMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-TopLated'],
        queryFn:fetchTopLatedMovies,
        select:(result)=>result.data,
    })
}