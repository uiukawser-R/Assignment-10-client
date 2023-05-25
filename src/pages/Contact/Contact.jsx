import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
        // Reset the form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Container className='mt-5'>
            <div className='d-sm-flex gap-5 justify-content-center'>
                <div>
                    <img src="https://live.staticflickr.com/65535/52924905286_46a43db87b_w.jpg" alt="" />
                </div>
                <div>
                <h1 className='text-warning'>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={4}
                        required
                    />
                </Form.Group>

                <Button className='mt-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
