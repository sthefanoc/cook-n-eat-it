import { useState } from 'react'	
import defaultImage from './../assets/defaultImage.webp';
import { Card } from 'react-bootstrap';
import { formatTime } from './../utilities/formatTime';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { getFromLocalStorage } from '../utilities/getFromLocalStorage';
import { addToLocalStorage } from '../utilities/addToLocalStorage';


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

export function RecipeItem({
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

    return (
        <Card className="recipe-item">
            <Card.Img 
                variant="top" 
                src={image || defaultImage} 
                alt={title} 
                width="200px"
                style={{objectFit: 'cover'}}
                />
            <Card.Body className="d-flex flex-column">
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <h2 className='fs-2'>{title}</h2>
                    <span className='ms-2 text-muted'>{total_time > 0 ? `${total_time} min` : ''}</span>
                </Card.Title>
                <Card.Text>{content && content.slice(0, 25)}</Card.Text>
                <Card.Text className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='text-muted'>{formatTime(created_at)}</span>
                    <span 
                        className='d-flex flex-column align-items-center'
                        style={{cursor: 'pointer'}}
                        onClick={()=>{
                            console.log('likes, already_liked', likes, already_liked);
                            const liked: boolean = Boolean(getFromLocalStorage(id.toString(), "already_liked")) || false;
                            addToLocalStorage(id.toString(), "already_liked", !liked);
                            setLiked(!liked);
                        }}
                        >
                            {liked ? <AiFillHeart color='red' /> : <AiOutlineHeart />}
                            {likes}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
};
