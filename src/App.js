import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import UploadFile from "./pages/UploadFile";
import Details from "./pages/Details";

const App = () => {
  return (
    <Layout>
      <Container>
        {}
        <Routes>
          <Route path="/" element={<Home />} exact />
          {localStorage.getItem("login") ? <Route path="/UploadFile" element={<UploadFile />} /> : null}
          <Route path="/Details" element={<Details />} />
          </Routes>
      </Container>
    </Layout>
  );
};

export default App;
