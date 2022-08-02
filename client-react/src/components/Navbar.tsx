import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {ReactComponent as RandomIcon} from './../assets/random.svg'


export function Navbar(){
    return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                <Nav.Link to='/recipes' as={NavLink}>Recipes</Nav.Link>
                <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            </Nav>
            <Button>
                
            </Button>
        </Container>
    </NavbarBs>
    )
}