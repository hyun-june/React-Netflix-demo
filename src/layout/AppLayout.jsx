import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()

  const searchByKeyword=(event)=>{
    event.preventDefault()
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("");
  }
  return (
    <div>
    <Navbar  expand="lg" className="bg-black" variant="dark" >
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="" width="93" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(searchByKeyword)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
            />
            <Button variant="outline-danger" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </div>
  )
}

export default AppLayout;