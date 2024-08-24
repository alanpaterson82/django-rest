import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React from 'react';

function ContactCreateForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Button variant="secondary">Send</Button>{' '}
    </Form>
    );
}


export default ContactCreateForm;