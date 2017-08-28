import React from 'react';

const RecipeItem = (props) => {
	const ingredients = props.ingredients.map((ingredient, index) => {
		return <p key={index}>{ingredient}</p>
	})

	const handleDeleteRecipe = (e) => {
		e.preventDefault();
		props.onDeleteRecipe(props.name);
	}

	const handleUpdateRecipe = (e) => {
		e.preventDefault();
		props.onUpdateRecipe(props.recipe);
	}

	return(
		<div>
			<p>{props.name}</p>
			<hr/>
			<ul>
				{ingredients}
			</ul>
			<button className="btn btn-danger" onClick={handleDeleteRecipe}>Delete</button>
			<button className="btn btn-default" onClick={handleUpdateRecipe}>Edit</button>
		</div>
	);
}

export default RecipeItem;