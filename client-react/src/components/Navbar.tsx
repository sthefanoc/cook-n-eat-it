import { useEffect, useState } from "react"
import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaHeart, FaRandom } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'
import { useRecipeContext } from '../context/RecipeContext'
import { useNavigate } from "react-router-dom"

export function Navbar(){
    const [ amountLikes, setAmountLikes ] = useState(0)
    const navigate = useNavigate();
    const { likes, recipes } = useRecipeContext()
    useEffect(() => {
        setAmountLikes(likes.length)
    }, [likes])

    const randomRecipe = () => {
        const randomIndex = Math.floor(Math.random() * recipes.length)
        navigate(`/recipe/${recipes[randomIndex].slug}`)
    }


    return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container className="d-flex align-">
            <Nav>
                <Nav.Link to='/' as={NavLink} className="d-flex ">
                    <GiCookingPot size={'2rem'} />
                    <h1 style={{fontSize: '1.5rem', opacity:"1"}}>CookN'EatIt</h1>
                </Nav.Link>
                {/* <Nav.Link to='/recipes' as={NavLink}>Recipes</Nav.Link> */}
                <Nav.Link to='/add-new' as={NavLink}>Add</Nav.Link>
            </Nav>
            <Container className="d-flex align-items-center justify-content-end">
                <Button
                    style={{width: '3rem', height: '3rem'}}
                    variant='outline-primary'
                    className='rounded-circle d-flex align-items-center justify-content-center'
                    onClick={() => {randomRecipe()}}
                    data-toggle="tooltip" 
                    data-placement="bottom" 
                    title="Get random recipe">
                    <FaRandom />
                </Button>
                <Button
                    style={{width: '3rem', height: '3rem', marginLeft: '0.5rem', position: 'relative'}}
                    variant='outline-primary'
                    className='rounded-circle'
                    onClick={() => {navigate('/likes')}}
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
                            {amountLikes}
                    </div>
                </Button>
            </Container>
            
        </Container>
    </NavbarBs>
    )
}