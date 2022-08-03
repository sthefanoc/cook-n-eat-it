import { createContext, useContext } from "react";

type RecipeProviderProps = {
    children: React.ReactNode
}

const RecipeContext = createContext({})

export function useRecipeContext() {
    return useContext(RecipeContext)
}

export function RecipeProvider({ children }: RecipeProviderProps) {
    return (
        <RecipeContext.Provider value={{}}>
            {children}
        </RecipeContext.Provider>)
}