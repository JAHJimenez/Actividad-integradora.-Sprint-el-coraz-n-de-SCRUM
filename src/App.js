import logo from './logo.svg';
import './App.css';
import { Container, Form, Nav, Navbar, NavDropdown, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function App() {
  return (
      
    
    
    <Container  fluid>
      <Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Sancionando</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Contacto</Nav.Link>
        <Nav.Link href="#action2">Informacion</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="# reporte"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success dark">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
      <Form>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Explicacion de la denuncia</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Evidencias(fotos y videos)</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button variant="dark" type="submit">
    Enviar
  </Button>
      </Form>

    </Container>
    
  );
}

export default App;
