import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopLatedMovieSlide from './components/TopLatedMovieSlide/TopLatedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'



// 1. 배너 => popular movie의 첫 번째 아이템
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
        <Banner/>
        <PopularMovieSlide />
        <TopLatedMovieSlide />
        <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage;