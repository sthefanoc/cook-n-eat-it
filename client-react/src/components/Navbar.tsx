import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaHeart, FaRandom } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'


export function Navbar(){
    return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container className="d-flex align-">
            <Nav>
                <Nav.Link to='/' as={NavLink} className="d-flex ">
                    <GiCookingPot size={'2rem'} />
                    <h1 style={{fontSize: '1.5rem', opacity:"1"}}>CookN'EatIt</h1>
                </Nav.Link>
                <Nav.Link to='/recipes' as={NavLink}>Recipes</Nav.Link>
                <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            </Nav>
            <Container className="d-flex align-items-center justify-content-end">
                <Button
                    style={{width: '3rem', height: '3rem'}}
                    variant='outline-primary'
                    className='rounded-circle d-flex align-items-center justify-content-center'
                    onClick={() => {alert('do something')}}
                    data-toggle="tooltip" 
                    data-placement="bottom" 
                    title="Get random recipe">
                    <FaRandom />
                </Button>
                <Button
                    style={{width: '3rem', height: '3rem', marginLeft: '0.5rem', position: 'relative'}}
                    variant='outline-primary'
                    className='rounded-circle'
                    onClick={() => {alert('do something')}}
                    data-toggle="tooltip" 
                    data-placement="bottom" 
                    title="See liked recipes">
                    <FaHeart />
                    <div 
                        className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                        style={{
                            color: '#fff', 
                            width: '1.5rem', 
                            height: '1.5rem', 
                            fontSize: '0.8rem', 
                            position: 'absolute', 
                            bottom: 0, 
                            right: 0,
                            transform: 'translate(25%, 25%)'
                        }}
                        >
                            3
                    </div>
                </Button>
            </Container>
            
        </Container>
    </NavbarBs>
    )
}