
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'
import { Link , NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (<>
    <Navbar bg="light" expand="lg">
  <Container>
    <Link to='/'>Lotus</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink to="/" className={({isActive})=>isActive?'clase1':'clase2'}>Home</NavLink>
            <Nav.Link href="#link">Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <Link className='btn' to='/categoria/cuerdas'>Cuerdas</Link>
                <Link className='btn' to='/categoria/percusion'>Percusion</Link>
                <Link className='btn' to='/categoria/vientos'>Vientos</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
              </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <Link to='/cart'>
<CartWidget/>
  </Link>
</Navbar>
  </>
  )
}

export default NavBar