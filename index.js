// (console.log(`test`);

const apiBaseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;

const state = {
  allRecipes: [],
}
const main = document.querySelector(`main`)


const getAllRecipes = async () => {
  const response = await fetch(apiBaseURL + "recipes");
  // console.log(getAllRecipes);
  const jsonResponse = await response.json();
  state.allRecipes = jsonResponse.data
console.log(jsonResponse);
renderAllEvents();
}

const getRecipeDetails =  async (detailsOfRecipes) => {
  const response = await fetch("${apiBaseURL}/recipes${id}");
  const responseJson = await response.json(); 
  const recipeDetails = responseJson.data
  renderDetails();
}



getAllRecipes();