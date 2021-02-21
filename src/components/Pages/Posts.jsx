import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { Row, Col, Card } from "react-bootstrap";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();

  const getPostById = async () => {
    try {
      const response = await axios.get(`${BaseUrl.base}/users/${id}/posts`);
      console.log(response.data.data);
      setPosts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPostById();
  }, []);
  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Row>
            {posts.map((item, index) => (
              <Col key={index} md={4}>
                <Card style={{ width: "18rem", marginTop: "10px" }}>
                  <Card.Body>
                    <Card.Text>{item.title}</Card.Text>
                    <Link to={`/blog/details/${item.id}`}>View Details</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <p>No article has been posted yet</p>
      )}
    </div>
  );
};

export default Posts;
