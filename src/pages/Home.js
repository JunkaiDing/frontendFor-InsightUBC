import Header from "../components/Header";
import Meta from "../components/Meta";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { transformQueyParam } from '../utils/index';
const Home = () => {

  const pageTitle = "Home";
  const pageDescription = "welcome to ...";

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const { course: courseNode, datasetID: datasetIDNode } = event.target;
    const course = courseNode.value;
    const datasetID = datasetIDNode.value;
    const res = await queryCourse({ course, datasetID })
    if(res.status === 200) {
      if (res.data?.result.length === 0) {
        alert("cannot find this course")
      } else {
        navigate('/Details', {state: {data: res.data?.result ?? []}});
      }
    }
  };

  const queryCourse = async ({course, datasetID}) => {
    return await axios.post('http://localhost:4321/query', transformQueyParam({ course, datasetID }))
  }

  // 渲染页面
  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="datasetID"
          label="DatasetID"
          className="mb-3"
        >
          <Form.Control placeholder="Please type datasetID here" />
        </FloatingLabel>
        <FloatingLabel controlId="course" label="Course">
          <Form.Control
            placeholder="Please type course here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
          <div className="d-grid gap-2">
            <Button className="mt-5" variant="primary" type="submit" size="lg">
              Submit
            </Button> 
          </div>
      </Form>
    </div>
  );
};

export default Home;
