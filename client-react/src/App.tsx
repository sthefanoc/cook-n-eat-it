import { Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import  { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { AddNew } from './pages/AddNew';
import { Recipes } from './pages/Recipes';
import { Recipe } from './pages/Recipe';
import { Navbar } from './components/Navbar';
import { Ingredient } from './pages/Ingredient';
import { LikedRecipes } from './pages/LikedRecipes';


function App() {
    return (
      <RecipeProvider>
        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/add-new" element={<AddNew />} />
            <Route path="/likes" element={<LikedRecipes />} />
            <Route path="/recipe/:recipeSlug" element={<Recipe />} />
            <Route path="/ingredient/:ingredientName" element={<Ingredient />} />
          </Routes>
        </Container>
      </RecipeProvider>
  )
}

export default App
