import React, {Component} from 'react';

class AddRecipeForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			myRecipe:{}
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.refs.recipeName.value;
		const ingredients = this.refs.recipeIngredients.value.split(',').map((ingredient) => ingredient.trim());

		if (!name || !ingredients) {
			console.log('empty');
			//clear input
			this.refs.recipeName.value = "";
			this.refs.recipeIngredients.value = "";
			return null;
		}
		this.props.onCreateRecipe({
			name:this.refs.recipeName.value,
			ingredients:ingredients,
			editing:false
		});
		//clear input
		this.refs.recipeName.value = "";
		this.refs.recipeIngredients.value = "";
	}

	render(){
		return(
			<form>
				<h4>Recipe:</h4>
				<input 
					type="text" 
					ref="recipeName" 
					placeholder="i.e. Fried rice" 
					className="form-control" required />
				<h4>Ingredients:</h4>	
				<input 
					type="text" 
					ref="recipeIngredients" 
					placeholder="i.e. rice, eggs, mixed veggies, ground beef" 
					className="form-control" />
				<button 
					type="submit"
					className="btn btn-primary"
					onClick={this.handleSubmit}>
					Add
				</button>
			</form>
		);
	}
}

export default AddRecipeForm;