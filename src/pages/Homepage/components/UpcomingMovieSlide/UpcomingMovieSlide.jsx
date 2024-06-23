import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovie'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {

   const {data,isLoading, isError, error} = useUpcomingMoviesQuery();
   
   if(isLoading){
    return(        
        <Spinner animation="border" variant="secondary" />)}
if(isError){
    return (
    <Alert  variant='danger'>{error.message}</Alert>)}
  return (
    <div>
        <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default UpcomingMovieSlide;