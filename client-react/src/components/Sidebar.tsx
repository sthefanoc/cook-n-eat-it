import { useRecipeContext } from "../context/RecipeContext"
import { useEffect, useState } from "react"
import { Col, Row, Container } from "react-bootstrap"

export function Sidebar() {
    const { recipes, uniqueIngredients } = useRecipeContext()

    


    return (
        <Row className="sidebar">
            <h3>Ingredients</h3>
            <Col>
                <ul>
                    {recipes && recipes.map((recipe:any) => (
                        <li key={recipe.id}>
                            {/* <Link to={`/recipe/${recipe.slug}`}>{recipe.title}</Link> */}
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}