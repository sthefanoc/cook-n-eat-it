import { useState } from 'react'
import Rating from 'react-rating';
import defaultImage from './../assets/defaultImage.webp';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { formatTime } from './../utilities/formatTime';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { getFromLocalStorage } from '../utilities/getFromLocalStorage';
import { addToLocalStorage } from '../utilities/addToLocalStorage';
import { AiFillBackward, AiFillStar, AiOutlineStar } from 'react-icons/ai';


type RecipeItemProps = {
    id: number,
    title: string,
    content: string,
    image: string,
    created_at: string,
    preparation_time: number,
    cooking_time: number,
    total_time: number,
    serves: number,
    ingredients: string[],
    likes: number,
    already_liked: boolean,
    rating: number
}

export function Recipe({
    id,
    title,
    content,
    image,
    created_at,
    preparation_time,
    cooking_time,
    total_time,
    serves,
    ingredients,
    likes,
    already_liked,
    rating,
    }: RecipeItemProps) {
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
                            
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                        <Card.Text>
                            <span>250g</span>
                            <span>500g</span>
                            <span>1000g</span>
                        </Card.Text>
                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={()=>{alert('a')}} className="fa fa-minus"></i>
                                <p>{'addcart'}</p>
                                <i onClick={()=>{alert('a')}} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={()=>{alert('a')}}>Add to cart</button>
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