import { useEffect, useState, useContext } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { RecipeItem } from "../components/RecipeItem"
import { useRecipeContext } from "../context/RecipeContext"
import { Sidebar } from "../components/Sidebar"
import { useParams } from "react-router-dom"

type RecipesProps = {
    ingredient: string,
    match: any
}

export function Ingredient(){
    const { ingredientName } = useParams()
    const { recipes } = useRecipeContext()

    const filteredRecipes = recipes.filter((recipe:any) => {
        let nameToSearch = ingredientName
        if (ingredientName) {
            nameToSearch = ingredientName.replaceAll('-',' ')
        }
        
        return recipe?.ingredients?.toLowerCase().search(nameToSearch) > -1
    })

    return (
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    <h1>Recipes</h1>
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {filteredRecipes && filteredRecipes.map((recipe:any) => (
                            <Col key={recipe.id}>
                                <RecipeItem {...recipe} />
                            </Col>
                        ))}
                    </Row>
                </Col> 
            </Row>
        </Container>
    )
}