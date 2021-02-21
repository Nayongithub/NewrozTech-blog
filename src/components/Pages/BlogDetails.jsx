import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { Form, Button, Card } from "react-bootstrap";

const BlogDetails = () => {
  const [details, setDetails] = useState({});
  const [comments, setcomments] = useState("");
  const [commentError, setcommentError] = useState("");
  const [allComments, setAllComments] = useState([]);
  let { id } = useParams();

  const getDetails = async () => {
    try {
      const response = await axios.get(`${BaseUrl.base}/posts/${id}`);
      console.log(response.data.data);
      setDetails(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    try {
      const response = await axios.get(`${BaseUrl.base}/posts/${id}/comments`);
      console.log(response.data.data);
      setAllComments(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (comments.trim() === "") {
      setcommentError("Please enter your comment");
      return;
    } else {
      setcommentError("");
    }

    let newComment = {
      post_id: id,
      name: "Nayon",
      email: "nayon@gmail.com",
      body: comments,
    };
    console.log("newComment", newComment);
    axios
      .post(`${BaseUrl.base}/posts/${id}/comments`, newComment)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setcomments("");
    getComments();
  };
  useEffect(() => {
    getDetails();
    getComments();
  }, []);

  return (
    <>
      <div>
        <Card>
          <Card.Body>
            <Card.Title class="text-success">
              Title : {details.title}
            </Card.Title>
            <br/>
            <Card.Text>{details.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label class="text-primary">Post a comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comments}
            onChange={(e) => setcomments(e.target.value)}
          />
          {commentError ? <p className="text-danger"> {commentError}</p> : null}
        </Form.Group>
        <Button variant="info" onClick={handlePost}>
          Post Comment
        </Button>
      </Form>
      <br />
      <div>
        <h4>All Comments</h4>
        {allComments.length > 0 ? (
          <>
            {allComments.map((item, index) => (
              <div style={{ backgroundColor: "#F2F4FC" }} key={index}>
                <p style={{ padding: 10 }}>{item.body}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
