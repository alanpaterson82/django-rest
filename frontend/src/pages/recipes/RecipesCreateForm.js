import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React from 'react';

function ContactCreateForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Method</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Button variant="secondary">Post</Button>{' '}
    </Form>
    );
}


export default ContactCreateForm;