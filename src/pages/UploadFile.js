import Header from '../components/Header'
import Meta from '../components/Meta'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
const UploadFile = () => {
  const pageTitle = 'UploadFile'
  const pageDescription = 'welcome to ...'
  

  const handleSubmit = async(event) => {

    event.preventDefault()
    const { file: fileNode, id: idNode } = event.target
    const file = Array.isArray(Array.from(fileNode.files)) ? fileNode.files[0] : fileNode.files
    const id = idNode.value
      //thanks method provide by @chatgpt
          const delayPromise = new Promise(resolve => setTimeout(resolve, 5000)); // 延迟5秒
          try {
              await Promise.race([delayPromise, putFile(file, id)]);
                  alert('success upload')
              // 如果5秒内myAsyncFunction完成，将会返回它的结果
              // 如果5秒内delayPromise完成，将会返回一个拒绝的Promise，抛出一个错误
          } catch (error) {
             alert('invalid dataset or id')
          }
  }

  const putFile = async(file, id) => {
    return await axios.put(`http://localhost:4321/dataset/${id}/sections`, file)
  }

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="file">
        <Form.Label>file</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>id</Form.Label>
        <Form.Control type="text" placeholder="please enter id" />
        </Form.Group>
        <div className="d-grid gap-2">
            <Button className="mt-5" variant="primary" type="submit" size="lg">
              Submit
            </Button> 
        </div>
    </Form>
    </div>
  )
}

export default UploadFile