import { Form } from "react-bootstrap";
import { useRecipeContext } from "../context/RecipeContext";

export function SearchBox() {
    const { setIsSearchActive, setSearchTerm } = useRecipeContext();

    function handleSearch(event: any) {
        event.preventDefault();
        const searchTerm = event.target.value;
        if (searchTerm === "") {
            setIsSearchActive(false);
        } else {
            setIsSearchActive(true);
            setSearchTerm(searchTerm);
        }
    }
        
  return (
    <Form className="search-box" onChange={handleSearch}>
       <Form.Group className="mb-3" controlId="search">
        <Form.Label>What to cook?</Form.Label>
        <Form.Control type="text" placeholder="risotto..." name="search" onChange={handleSearch}/>
      </Form.Group>
    </Form>
  );
}