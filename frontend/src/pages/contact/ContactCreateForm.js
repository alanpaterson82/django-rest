import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React from 'react';
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

function ContactCreateForm() {
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    //console.log(data);
    try {
      const resp = await axiosReq.post(`/contact/submit/`, data);
      if (resp.status === 201)
        history.push(`/`);
    } catch (err) {
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" name="subject" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={10} name="message" />
      </Form.Group>
      <Button variant="secondary" type="submit">Send</Button>{' '}
    </Form>
  );
}


export default ContactCreateForm;