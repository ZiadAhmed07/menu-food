import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({FilterSearch}) {

  const [state , setState] = useState('')

  const SearchValue =(setValue)=>{
    FilterSearch(setValue)
    setState('')
  }

  return (
    <Navbar  expand="lg" id='Navbar'>
      
      <Container >
        <Navbar.Brand href="#">مشروع قائمه الطعام</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              draggable="false"
              type="search"
              placeholder="بحث"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setState(e.target.value)}
              value={state}
            />
            <Button variant="outline-success" style={{marginRight:'20px'}} onClick={()=> SearchValue(state)} >بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;