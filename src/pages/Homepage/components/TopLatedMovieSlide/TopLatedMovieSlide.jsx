import React from 'react'
import { useTopLatedMoviesQuery } from '../../../../hooks/useTopLatedMovies'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const TopLatedMovieSlide = () => {
    const {data,isLoading, isError, error} = useTopLatedMoviesQuery();
   
  if(isLoading){
     return(        
         <Spinner animation="border" variant="secondary" />)}
  if(isError){
     return (
     <Alert  variant='danger'>{error.message}</Alert>)}
   return (
     <div>
         <MovieSlider title='Top Lated Movies' movies={data.results} responsive={responsive}/>
     </div>
   );
}

export default TopLatedMovieSlide;