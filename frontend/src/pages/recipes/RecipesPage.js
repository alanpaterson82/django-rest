import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";


function RecipesPage() {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosReq.get(`/recipes/`);
                setRecipes(data);
            } catch (err) {
            }
        };
        fetchData();
    }, []);
    const handleDelete = async (id) => {
        try {
            const resp = await axiosReq.delete(`/recipes/${id}/`);
            if (resp.status === 204) {
                const newRecipes = recipes.filter((recipe) => recipe.id !== id);
                setRecipes(newRecipes);
            }
        } catch (err) {
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-between pb-4 pt-5'>
                <h2>
                    Recipes
                </h2>
                <a
                    href="/recipes/create"
                >
                    <Button variant="primary">Create recipe</Button>
                </a>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Ingredients</th>
                        <th>Method</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr>
                            <td>{recipe.name}</td>
                            <td>{recipe.ingredients}</td>
                            <td>{recipe.instructions}</td>
                            <td className='d-flex'>
                                <Button variant="primary" className='mr-3' onClick={() => history.push(`/recipes/${recipe.id}/edit`)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(recipe.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RecipesPage;
