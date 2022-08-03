import { useEffect, useState, useContext } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { RecipeItem } from "./../components/RecipeItem"
import { useRecipeContext } from "./../context/RecipeContext"
import { Sidebar } from "./../components/Sidebar"

export function Recipes(){
    const { recipes } = useRecipeContext()

    return (
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    <h1>Recipes</h1>
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {recipes && recipes.map((recipe:any) => (
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