import { Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import  { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Recipes } from './pages/Recipes';
import { Recipe } from './pages/Recipe';
import { Navbar } from './components/Navbar';


function App() {
    return (
      <RecipeProvider>
        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:recipeSlug" element={<Recipe />} />
          </Routes>
        </Container>
      </RecipeProvider>
  )
}

export default App
