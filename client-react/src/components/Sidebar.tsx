import { useRecipeContext } from "../context/RecipeContext"
import { useEffect, useState } from "react"
import { Col, Row, Container, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

export function Sidebar() {
    const [ filteredRecipes, setFilteredRecipes ] = useState([])
    const { recipes, uniqueIngredients } = useRecipeContext()

    return (
        <Row className="sidebar">
            <h3>Ingredients</h3>
            <Col>
                <ListGroup>
                    {uniqueIngredients && uniqueIngredients.map((ingredient:any) => (
                        <ListGroup.Item key={ingredient}>
                            {ingredient && (
                                <Link 
                                    style={{textDecoration:'none', color: 'unset'}} 
                                    to={`/ingredient/${ingredient.replaceAll(' ','-')}`}>{ingredient}
                                </Link>
                            )}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    )
}