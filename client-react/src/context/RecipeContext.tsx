import { createContext, useContext, useState, useEffect } from "react";
import { formatData } from "../utilities/formatData";

type RecipeProviderProps = {
    children: React.ReactNode
}

type RecipeContext ={
    likes: string[],
    recipes: any[],
    uniqueIngredients: string[],
    getLikes: () => void,
    isSearchActive: boolean,
    setIsSearchActive: (value: boolean) => void,
    searchTerm: string,
    setSearchTerm: (value: string) => void
}

const RecipeContext = createContext({} as RecipeContext);

export function useRecipeContext() {
    return useContext(RecipeContext)
}

export function RecipeProvider({ children }: RecipeProviderProps) {
    const [likes, setLikes] = useState(0);
    const [recipes, setRecipes] = useState([{}])
    const [uniqueIngredients, setUniqueIngredients] = useState([])
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    async function getData(){
        await fetch('http://localhost:8000/api/recipes/', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        .then(res => res.json())
        .then(data => {
            const formattedData = formatData(data)
            setRecipes(formattedData)
        })
    }
    

    function getLikes() {
        let data = localStorage.getItem('cooking')
        if (data === null || data === undefined || data === "null") {
            setLikes([])
        } else {
            data = JSON.parse(data)
            const likedItems = Object.keys(data).filter(item => {
                if(data){
                    return(data[item]?.['already_liked'])
                }
            })
            setLikes(likedItems)
        }
        return likes;
    }
    function getUniqueIngredients() {
        const allIngredients = recipes.map((recipe:any)=> recipe?.ingredients_list).flat()
        const uniqueIngredients = Array.from(new Set(allIngredients))
        const amountOfEach = {}
        allIngredients.forEach((item:any) =>{
            if(Object.keys(amountOfEach).includes(item)){
                amountOfEach[item]["amount"] += 1
            } else {
                amountOfEach[item] = {
                    "amount": 1
                }
            }
        })
        setUniqueIngredients(uniqueIngredients)
        return uniqueIngredients
    }
    
    useEffect( () => {
        getData()
        getLikes()
    }, [])

    useEffect( () => {
        getUniqueIngredients()
    }, [recipes])

    return (
        <RecipeContext.Provider value={{recipes, likes, uniqueIngredients, getLikes, isSearchActive, setIsSearchActive, searchTerm, setSearchTerm}}>
            {children}
        </RecipeContext.Provider>)
}