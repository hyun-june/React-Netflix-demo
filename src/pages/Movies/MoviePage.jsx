import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';


// 경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌
const MoviePage = () => {
  const[query,setQuery]=useSearchParams();
  const[page,setPage] = useState(1);
  const keyword = query.get("q");

  const {data,isLoading,isError,error} = useSearchMovieQuery({keyword,page})

  const handlePageClick=({selected})=>{
    setPage(selected + 1);
  }
  console.log("111",data)
  if(isLoading){
    return(        
      <Spinner animation="border" variant="secondary"/>)}
  if(isError){
    return (
      <Alert  variant='danger'>{error.message}</Alert>)}
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>

          <Col lg={8} xs={12}>
            <Row>
                {data?.results.map((movie,index)=>
                <Col key={index} lg={4} xs={12}><MovieCard movie={movie}/></Col>)}
          </Row>
          <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages} // 전체페이지
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage