import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/recipes/', {
      name,
      ingredients,
      instructions
    })
    .then(response => {
      console.log('Recipe added:', response.data);
      setName('');
      setIngredients('');
      setInstructions('');
    })
    .catch(error => console.error('Error adding recipe:', error));
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
