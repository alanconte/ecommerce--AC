
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (<>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Lotus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Conocenos</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bajos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Baterias</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Guitarras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Pianos y Teclados</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Vientos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
<CartWidget/>
</Navbar>
  </>
  )
}

export default NavBar