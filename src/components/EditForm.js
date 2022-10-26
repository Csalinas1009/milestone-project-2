import React from "react";
import Axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditPost({ pin }) {
  const [title, setTitle] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const updatePin = async (id) => {
    try {
      const res = await Axios.patch(
        `https://milestone2-travlr.herokuapp.com/pin/${id}`,
        { title, imgURL, description }
      );
      console.log(res);
      alert("Post Updated!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Edit Post</Form.Label>
        <Form.Control
          placeholder="New Title..."
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          placeholder="New Image URL..."
          id="imgURL"
          onChange={(e) => setImgURL(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          placeholder="New Description..."
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button
        className="edit-form-button"
        variant="primary"
        type="submit"
        onClick={() => updatePin(pin._id)}
      >
        Submit
      </Button>
    </Form>
  );
}

export default EditPost;
