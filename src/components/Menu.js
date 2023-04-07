import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { Form, Button, Toast, ToastContainer  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();

  const handleVerifyCode = (event) => {
    event.preventDefault();
    const { login: loginNode } = event.target;
    const login = loginNode.value;
    if (login === "123456") {
      localStorage.setItem("login", login);
      navigate("/uploadFile");
      window.location.reload();
    } else {

      navigate("/");
      localStorage.clear();
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 2000);

    }
  };

  const [show, setShow] = useState(false);

  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          MY APP
        </Link>

        <Nav>
          {localStorage.getItem("login") && <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/UploadFile" className="nav-link px-2 link-secondary">
                UploadFile
              </Link>
            </li>
          </ul>}
          <Link to="/">
            <button type="button" className="btn btn-outline-primary me-2">
              Home
            </button>
          </Link>
          <Form className="d-flex" onSubmit={handleVerifyCode}>
            <Form.Control
              id="login"
              type="login"
              placeholder="Input code"
              className="me-2"
              aria-label="login"
            />
            <Button type="submit" className="btn btn-primary me-2">
              login
            </Button>
          </Form>
        </Nav>
      </header>
      
      <ToastContainer position='top-center'>
        <Toast bg='warning' show={show} >
          <Toast.Body >wrong code!</Toast.Body>
        </Toast>
        </ToastContainer>
    </Container>
  );
};

export default Menu;
