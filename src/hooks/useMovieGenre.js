import { useQuery } from "@tanstack/react-query"
import api from "../utills/api"

const fetchMovieGenre=()=>{
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery=()=>{
    return useQuery({
        queryKey:['movie-gerne'],
        queryFn:fetchMovieGenre,
        select:(result)=>result.data.genres,
        staleTime:300000,
    })
}