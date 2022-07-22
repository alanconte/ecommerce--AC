
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'
import { Link , NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (<>
    <Navbar bg="danger" expand="lg">
  <Container>
    <Link to='/' className="btn btn-outline-secondary">Lotus</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                <NavLink to="/" className={({isActive})=>isActive?"btn btn-outline-secondary":'btn btn-danger'}>Home</NavLink>
                <NavLink className= {({isActive})=>isActive?"btn btn-outline-secondary":'btn btn-danger'} to='/categoria/cuerdas'>Cuerdas</NavLink>
                <NavLink className= {({isActive})=>isActive?"btn btn-outline-secondary":'btn btn-danger'} to='/categoria/percusion'>Percusion</NavLink>
                <NavLink className= {({isActive})=>isActive?"btn btn-outline-secondary":'btn btn-danger'} to='/categoria/vientos'>Vientos</NavLink>
                <NavDropdown.Divider />
                <NavDropdown.Item className='btn btn-danger' disabled href="#action/3.4">Ofertas</NavDropdown.Item>
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