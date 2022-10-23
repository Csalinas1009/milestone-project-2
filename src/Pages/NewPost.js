import '../styles/styles.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from '../components/NavBar';
import Axios from 'axios';

function NewPost() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgURL, setImgUrl] = useState('')

    const createPin = async () => {
        try {
          const res = await Axios.delete(`https://milestone2-travlr.herokuapp.com/pin`, { title, imgURL, description});
          console.log({ res }, res.response.data);
         } catch (error) { 
          alert('Post Created!');
          window.location.reload();
          
      }
    }


    return (
        <><div className='NB'>
            <Navigation />
        </div><div className='new-post-container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Create a new post!</Form.Label>
                        <Form.Control maxlength='50' type="text" placeholder="Enter title.." onChange={(event) => { setTitle(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control placeholder="Image url.." onChange={(event) => { setImgUrl(event.target.value) }} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description..." onChange={(event) => { setDescription(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={createPin}>
                        Submit
                    </Button>
                </Form>
            </div></>

    )
}

export default NewPost;