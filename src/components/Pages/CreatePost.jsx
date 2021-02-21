import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import Swal from "sweetalert2";
import { Form, Button, Toast } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../components/custom.css";

const CreatePost = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");

  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BaseUrl.base}/users`);
      setUserId(response.data.data[0].id);
      console.log(response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async () => {
    let id = parseInt(userId);

    if (blogTitle.trim() == "" || blogBody.trim() == "") {
      if (blogTitle.trim() == "") {
        setTitleError("Please insert title");
      } else {
        setTitleError("");
      }
      if (blogBody.trim() == "") {
        setBodyError("Please insert your article");
      } else {
        setBodyError("");
      }
      return;
    } else {
      setTitleError("");
      setBodyError("");
    }
    try {
      let data = {
        User_id: id,
        title: blogTitle,
        body: blogBody,
      };
      console.log("Data", data);

      axios
        .post(`${BaseUrl.base}/users/${userId}/posts`, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setBlogTitle("");
      setBlogBody("");

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Saved Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something is Wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div className="form-style">
        <h4 className="text-primary m-3">Create New Post</h4>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="text-muted">Blogger</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setUserId(e.target.value)}
            >
              {users.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="text-muted">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
            {titleError ? <p className="text-danger"> {titleError}</p> : null}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-muted">Blog Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={blogBody}
              onChange={(e) => setBlogBody(e.target.value)}
            />
            {bodyError ? <p className="text-danger"> {bodyError}</p> : null}
          </Form.Group>
          <Button
            variant="primary"
            style={{ width: "220px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreatePost;
