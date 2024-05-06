import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./components/Cards/RecipeCard";
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from "./components/Form/SearchBar";
import Layout from "./components/layout/layout";


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const itemsPage = 6;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    searchRecipes();
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClick = () => {
    setIsLoading(true);

    // Simulate a long-running process
    setTimeout(() => {
      setIsLoading(false);
      loadMore(); // Call loadMore function after loading to show additional cards
    }, 2000);
  };

  return (
    <Layout>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

      <Box sx={{ flexGrow: 1, maxWidth: "md", margin: "auto" }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
          {recipe &&
            recipe.slice(0, currentPage * itemsPage).map((r, idx) => (
              <Grid item xs={4} sm={4} md={4} key={idx}>
                <RecipeCard key={r.idMeal} recipe={r} />
              </Grid>
            ))}
          {recipe && recipe.length > currentPage * itemsPage && (
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button
                style={{
                  width: 1050,
                  height: '5vh',
                  backgroundColor: '#ececee',
                  color: 'black',
                  borderRadius: '10px'
                }}
                onClick={handleClick}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  <>
                    Show more
                  </>
                )}
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
