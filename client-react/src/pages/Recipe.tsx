import { useState } from 'react'
import Rating from 'react-rating';
import defaultImage from './../assets/defaultImage.webp';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { formatTime } from './../utilities/formatTime';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { getFromLocalStorage } from '../utilities/getFromLocalStorage';
import { addToLocalStorage } from '../utilities/addToLocalStorage';
import { AiFillBackward, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useRecipeContext } from '../context/RecipeContext';
import { useParams } from 'react-router-dom';



export function Recipe() {
    const { recipeSlug } = useParams()
    const { recipes } = useRecipeContext()

    console.log('recipeSlug', recipeSlug);
    console.log('recipes', recipes);

    const recipe = recipes.filter((recipe:any) => recipe.slug === recipeSlug)



    const {
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

    const [liked, setLiked] = useState(already_liked);
    const [likesCount, setLikesCount] = useState(likes);
    const [ratingCount, setRatingCount] = useState(rating);

    const handleLike = () => {
        console.log('likes, already_liked', likes, already_liked);
        const liked: boolean = Boolean(getFromLocalStorage(id.toString(), "already_liked")) || false;
        addToLocalStorage(id.toString(), "already_liked", !liked);
        setLiked(!liked);
    }
    return (
        <>
            <Container className="container">
                <Card className="card">
                    <AiFillBackward />
                    <Card.Img 
                        variant="top" 
                        src={image || defaultImage} 
                        alt={title} 
                        height="300px"
                        style={{objectFit: 'contain'}}
                    />
                    <Card.Body className="text">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{created_at}</Card.Text>
                        <div className="rating_reviews">
                            <Rating
                                emptySymbol={<AiOutlineStar  size={'2rem'} color={'#FDCC0D'}/>}
                                fullSymbol={<AiFillStar size={'2rem'} color={'#FDCC0D'}/>}
                                fractions={2}
                                />
                        </div>
                        <ListGroup>
                            {ingredients_list && 
                            ingredients_list.map((ingredient:any, index:number) => {
                                return (<ListGroup.Item>{ingredient}</ListGroup.Item>)
                            })}
                        </ListGroup>
                        <Card.Text>{content}</Card.Text>
                        <Card.Text>{image}</Card.Text>
                        <Card.Text>{created_at}</Card.Text>
                        <Card.Text>{preparation_time}</Card.Text>
                        <Card.Text>{cooking_time}</Card.Text>
                        <Card.Text>{total_time}</Card.Text>
                        <Card.Text>{serves}</Card.Text>
                        <div className="last_section">
                            <Button onClick={()=>{alert('a')}}>Add to favorites</Button>
                            <div className="heart">
                                {true ? <AiOutlineHeart /> : <AiOutlineHeart />}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
};