import React from 'react';
import RecipeItem from './RecipeItem';
import UpdateRecipeForm from './UpdateRecipeForm';

const RecipeList = (props) => {
	const recipes = props.recipes.map((recipe, index) => {
		if (recipe.editing) {
			return <UpdateRecipeForm 
						key={index}
						recipe={recipe}
						name={recipe.name} 
						ingredients={recipe.ingredients}
						editing={recipe.editing}
						onUpdateRecipe={props.onUpdateRecipe}
						onDeleteRecipe={props.onDeleteRecipe}
						onEditTrue={props.onEditTrue} />
		} else {
			return <RecipeItem 
						key={index}
						recipe={recipe}
						name={recipe.name} 
						ingredients={recipe.ingredients}
						editing={recipe.editing}
						onUpdateRecipe={props.onUpdateRecipe}
						onDeleteRecipe={props.onDeleteRecipe}
						onEditTrue={props.onEditTrue} />
		}
	})

	return(
		<div>
			<ul>
				{recipes}
			</ul>
		</div>
	);
}

export default RecipeList;