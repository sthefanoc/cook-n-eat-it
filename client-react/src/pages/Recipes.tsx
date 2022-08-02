import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { RecipeItem } from "./../components/RecipeItem"

export function Recipes(){
    const [recipes, setRecipes] = useState([{}])
    useEffect(() => {
        fetch('http://localhost:8000/api/recipes/', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        .then(res => res.json())
        .then(data => {
            setRecipes(data)
        })
    }, [])
    

    return (
        <>
            <h1>Recipes</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {recipes && recipes.map((recipe, index) => (
                    <Col key={index}>
                        <RecipeItem {...recipe} />
                    </Col>
                ))}
            </Row>
        </>
    )
}