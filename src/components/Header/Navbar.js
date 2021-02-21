import React from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Bloggers from "../Pages/Bloggers";
import Posts from "../Pages/Posts";
import BlogDetails from "../Pages/BlogDetails";
import CreatePost from "../Pages/CreatePost";
import NotFound from "../Pages/NotFound";
const index = () => {
  return (
    <Router>
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>
            <Link className="nav-link" style={{ color: "white" }} to="/">
              Bloggers Hive
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                activeStyle={{ color: "#53acff" }}
                className="nav-link"
                style={{ color: "white" }}
                to="/"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="/bloggers"
              >
                Bloggers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="/create/post"
              >
                Create Post
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <Switch>
            <Route path="/bloggers">
              <Bloggers />
            </Route>
            <Route path="/create/post">
              <CreatePost />
            </Route>
            <Route path="/posts/:id">
              <Posts />
            </Route>
            <Route path="/blog/details/:id">
              <BlogDetails />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </>
    </Router>
  );
};

export default index;
