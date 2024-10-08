import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { axiosReq } from "../../api/axiosDefaults";
import React from 'react';
import { useHistory } from "react-router-dom";

function ContactCreateForm() {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    //console.log(data);
    try {
      const resp = await axiosReq.post(`/recipes/`, data);
      if (resp.status === 201)
        history.push(`/recipes`);
    } catch (err) {
    }
  }
  return (
    <div>
      <h2 className="py-3">Create Recipe</h2>
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