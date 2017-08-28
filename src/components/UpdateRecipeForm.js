import React, {Component} from 'react';

class UpdateRecipeForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			myRecipe:{}
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const ingredients = this.refs.recipeIngredients.value.split(',').map((ingredient) => ingredient.trim());

		if (!ingredients) {
			//clear input
			this.refs.recipeIngredients.value = "";
			return null;
		} else {
			this.props.onUpdateRecipe({
				name:this.props.name,
				ingredients:ingredients,
				editing:this.props.editing
			});
			//clear input
			this.refs.recipeIngredients.value = "";
		}
		
	}

	render(){
		return(
			<form>
				<input 
					type="text" 
					ref="recipeIngredients" 
					placeholder="i.e. rice, eggs, mixed veggies, ground beef" 
					className="form-control" />
				<button 
					type="submit"
					className="btn btn-success"
					onClick={this.handleSubmit}>
					Update
				</button>
			</form>
		);	
	}
}

export default UpdateRecipeForm;