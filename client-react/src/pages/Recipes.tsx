import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { RecipeItem } from "./../components/RecipeItem"
import { formatData } from "./../utilities/formatData"

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
            const formattedData = formatData(data)
            setRecipes(formattedData)
        })
    }, [])
    

    return (
        <>
            <h1>Recipes</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {recipes && recipes.map((recipe:any) => (
                    <Col key={recipe.id}>
                        <RecipeItem {...recipe} />
                    </Col>
                ))}
            </Row>
        </>
    )
}