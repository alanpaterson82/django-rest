import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { axiosReq } from "../../api/axiosDefaults";
import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

function ContactCreateForm() {
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get(`/recipes/${id}/`);
        const form = document.forms[0];
        form.name.value = data.name;
        form.ingredients.value = data.ingredients;
        form.instructions.value = data.instructions;
      } catch (err) {
      }
    };
    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try {
      const resp = await axiosReq.patch(`/recipes/${id}/`, data);
      if (resp.status === 200)
        history.push(`/recipes`);
    } catch (err) {
    }
  }
  return (
    <div>
      <h2 className="py-3">Edit Recipe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" rows={4} name="ingredients" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Method</Form.Label>
          <Form.Control as="textarea" rows={4} name="instructions" />
        </Form.Group>
        <Button variant="secondary" type="submit">Post</Button>{' '}
      </Form>
    </div>
  );
}


export default ContactCreateForm;