import { useEffect, useState } from "react"

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
            <ul>
                {recipes && recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.content}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}