import defaultImage from './../assets/defaultImage.webp';
import { Card } from 'react-bootstrap';

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
    rating: number
}

export function RecipeItem({...recipe}: RecipeItemProps) {
    return (
        <Card className="recipe-item">
            <Card.Img 
                variant="top" 
                src={recipe.image || defaultImage} 
                alt={recipe.title} 
                width="200px"
                style={{objectFit: 'cover'}}
                />
            <Card.Body className="d-flex flex-column">
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <h2 className='fs-2'>{recipe.title}</h2>
                    <span className='ms-2 text-muted'>{recipe.total_time > 0 ? `${recipe.total_time} min` : ''}</span>
                </Card.Title>
                <Card.Text>{recipe.content}</Card.Text>
            </Card.Body>

            <div className="recipe-item__content">
                
                <p className="recipe-item__description">{recipe.created_at}</p>
                <p className="recipe-item__description">{recipe.preparation_time}</p>
                <p className="recipe-item__description">{recipe.cooking_time}</p>
                <p className="recipe-item__description">{recipe.total_time}</p>
                <p className="recipe-item__description">{recipe.serves}</p>
                <p className="recipe-item__description">{recipe.ingredients}</p>
                <p className="recipe-item__description">{recipe.likes}</p>
                <p className="recipe-item__description">{recipe.rating}</p>
            </div>
        </Card>
    )
};
