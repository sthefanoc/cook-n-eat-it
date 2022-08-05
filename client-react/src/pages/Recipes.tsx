import { useEffect, useState, useContext } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { RecipeItem } from "./../components/RecipeItem"
import { useRecipeContext } from "./../context/RecipeContext"
import { Sidebar } from "./../components/Sidebar"
import { SearchBox } from "../components/SearchBox"


export function Recipes(){
    const { recipes, isSearchActive, searchTerm } = useRecipeContext()
    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(() => {
        if(isSearchActive){
            const filteredRecipes = recipes.filter(recipe => {
                return recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            }
            )
            setFilteredRecipes(filteredRecipes)
        }
    }  , [isSearchActive, searchTerm, recipes])

    return (
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">
                    <SearchBox />      
                    <Sidebar />
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    <h1>Recipes</h1>
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {isSearchActive ? (
                            filteredRecipes.length === 0 ? (
                                <h2>No recipes found</h2>
                            ) : (
                                filteredRecipes.map((recipe:any) => (
                                    <Col key={recipe.id}>
                                        <RecipeItem {...recipe} />
                                    </Col>
                                )))) : (
                                    recipes.length === 0 ? (
                                        <h2>No recipes found</h2>
                                    ) : (recipes.map((recipe:any) => (
                                        <Col key={recipe.id}>
                                            <RecipeItem {...recipe} />
                                        </Col>
                                    )))
                                )
                        }
                    </Row>
                </Col> 
            </Row>
        </Container>
    )
}