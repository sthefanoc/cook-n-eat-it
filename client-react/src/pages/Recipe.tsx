import { useEffect, useState } from 'react'
import Rating from 'react-rating';
import defaultImage from './../assets/defaultImage.webp';
import { Container, Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { formatTime } from './../utilities/formatTime';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { getFromLocalStorage } from '../utilities/getFromLocalStorage';
import { addToLocalStorage } from '../utilities/addToLocalStorage';
import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useRecipeContext } from '../context/RecipeContext';
import { useParams } from 'react-router-dom';



export function Recipe() {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [ratingCount, setRatingCount] = useState(0);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const { recipeSlug } = useParams()
    const { recipes, getLikes } = useRecipeContext()

    const recipe = recipes.filter((recipe:any) => recipe.slug === recipeSlug)
        
    const {
        id,
        title,
        slug,
        content,
        image,
        created_at,
        preparation_time,
        cooking_time,
        total_time,
        serves,
        ingredients,
        ingredients_list,
        likes,
        already_liked,
        rating } = recipe[0]
    

    const handleLike = () => {
        const liked: boolean = Boolean(getFromLocalStorage(id.toString(), "already_liked")) || false;
        addToLocalStorage(id.toString(), "already_liked", !liked);
        setLiked(!liked);
        getLikes()
    }
    return (
        <>
            <Container className="container">
                <Card className="card">
                    <AiFillCloseCircle 
                        size={'2rem'} 
                        style={{position: 'absolute', right: '10px', top: '10px', color: '#0d6efd', cursor: 'pointer'}}
                        onClick={() => window.history.back()}
                        />
                    <Card.Img 
                        variant="top" 
                        src={image || defaultImage} 
                        alt={title} 
                        height="300px"
                        style={{objectFit: 'contain'}}
                    />
                    <Card.Body className="text">
                        <Card.Title as={'h1'}>{title}</Card.Title>
                        <Card.Text className='mb-4'>{formatTime(created_at)}</Card.Text>
                        <Card.Text className="mb-2">
                            <Rating
                                emptySymbol={<AiOutlineStar  size={'2rem'} color={'#FDCC0D'}/>}
                                fullSymbol={<AiFillStar size={'2rem'} color={'#FDCC0D'}/>}
                                fractions={2}
                                />
                        </Card.Text>
                        <ListGroup className="mb-4 m-3" >
                            <Card.Title>Ingredient list</Card.Title>
                            {ingredients_list && 
                            ingredients_list.map((ingredient:any, index:number) => {
                                return (<ListGroup.Item key={ingredient}>{ingredient}</ListGroup.Item>)
                            })}
                        </ListGroup>
                        <Row className="mb-4 m-3">
                            <Col md='8'>
                                <Card.Title>Preparation</Card.Title>
                                <Card.Text>{content}</Card.Text>
                            </Col>
                        </Row>
                        <Row className='m-3'>
                            <Col md='3'>
                                <Card.Text className='mb-4'>Preparation time: <span style={{fontWeight: 'bold'}}>{preparation_time}</span> min</Card.Text>
                            </Col>
                            <Col md='3'>
                                <Card.Text className='mb-4'>Cooking time: <span style={{fontWeight: 'bold'}}>{cooking_time}</span> min</Card.Text>
                            </Col>
                            <Col md='3'>
                                <Card.Text className='mb-4'>Total time: <span style={{fontWeight: 'bold'}}>{total_time}</span> min</Card.Text>
                            </Col>
                            <Col md='3'>
                                <Card.Text className='mb-4'>Servings: <span style={{fontWeight: 'bold'}}>{total_time}</span> people</Card.Text>
                            </Col>
                        </Row>
                        
                        <Row className="mb-4 m-3">
                            <Col md='2'>
                                <Button onClick={()=>{handleLike()}}>Add to favorites</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
};