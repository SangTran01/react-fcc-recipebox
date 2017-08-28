import React, { Component } from 'react';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    // get data from localstorage
    const recipes = [];
    for (var i = 0; i < localStorage.length; ++i ) {
      recipes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    this.setState({recipes: recipes});
  }

  // Add recipe
  handleCreateRecipe = (newRecipe) => {

    // Check is recipe is UNIQUE first
    var recipe = JSON.parse(localStorage.getItem(newRecipe.name));
    if (recipe) {
      // can't submit
      alert("That Recipe already exist. Add something else.");
      return null;
    } else {
      // add to localstorage
      localStorage.setItem(newRecipe.name, JSON.stringify(newRecipe));
      // localStorage.removeItem(newRecipe.name)
      this.setState({recipes: this.state.recipes.concat(newRecipe)});
    }
  }

  // Delete Recipe
  handleDeleteRecipe = (selectedRecipeName) => {

    localStorage.removeItem(selectedRecipeName);
    //returns todos that don't match the todoId I selected
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.name !== selectedRecipeName)});
  }


  handleUpdateRecipe = (recipe) => {
    
    var updatedRecipes = this.state.recipes.map((r) => {
      if (r.name === recipe.name) {
        // update localstorage
        localStorage.setItem(recipe.name, JSON.stringify({
          name:recipe.name,
          ingredients:recipe.ingredients,
          editing: recipe.editing ? false : true
        }));
        // return new update object to setState
        return Object.assign({}, r, {
          name:recipe.name,
          ingredients:recipe.ingredients,
          editing:recipe.editing ? false : true
        });
      } else {
        return r;
      }
    });
    this.setState({recipes:updatedRecipes});
  }

  render() {
    if (typeof(Storage) !== "undefined") {
        return (
          <div className="App">
            <h1>Recipe Box</h1>
            <AddRecipeForm onCreateRecipe={this.handleCreateRecipe} />
            <h3>Saved Recipes</h3>
            <RecipeList 
                    recipes={this.state.recipes} 
                    onDeleteRecipe={this.handleDeleteRecipe}
                    onUpdateRecipe={this.handleUpdateRecipe}
                    onEditTrue={this.handleEditTrue} />
          </div>
        );
    } else {
        return(
          <div>
            <h1>Sorry, your browser does not support Web Storage...</h1>
          </div>
        );
    }
  }
}

export default App;
