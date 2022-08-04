import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function AddNew(){
    const [ response, setResponse ] = useState('')

    function handleSubmit(event:any){
        event.preventDefault();
        const formData = new FormData(event.target);
        const recipe = {
            title: formData.get('title'),
            preparation_time: formData.get('preparationTime'),
            cooking_time: formData.get('cookingTime'),
            serves: formData.get('totalServings'),
            ingredients: formData.get('ingredients'),
            content: formData.get('instructions'),
            image: formData.get('image'),
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe)
        };
        fetch('http://localhost:8000/api/recipes/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('responseData', data);
                setResponse(data)}
                )
            .catch(error => console.log('error', error))
    }
    
    return (
        <Container className='m-2'>
            <h1>Add your recipe</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Recipe title</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Name of your dish" required name="title"/>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="">
                        <Form.Label>Preparation time (min)</Form.Label>
                        <Form.Control type="number" placeholder="30" name="preparationTime"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Cooking time (min)</Form.Label>
                        <Form.Control type="number" placeholder="15" name="cookingTime"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Total servings</Form.Label>
                        <Form.Control type="number" placeholder="6" name="totalServings"/>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Ingredient List (separated by commas)</Form.Label>
                        <Form.Control type="text" placeholder="salt, flour, love" name="ingredients"/>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="1. Mix the ingredients" name="instructions"/>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="12">
                        <input type="file" accept="image/*" onChange={()=>{console.log('changed image')}} name="image"/>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Button variant="primary" type="submit">
                            Add recipe
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}